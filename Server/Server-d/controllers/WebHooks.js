import { Webhook } from 'svix';
import User from '../models/Users.js';

export const clerkWebHook = async (req, res) => {
    console.log('--- Clerk Webhook Triggered ---');

    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // Raw payload
        const payloadString = req.body.toString('utf8');
        console.log('Raw Payload String:', payloadString);

        // Verify webhook
        const verifiedPayload = await whook.verify(payloadString, {
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'svix-signature': req.headers['svix-signature']
        });

        console.log('Verified Payload:', verifiedPayload);

        const { data, type } = verifiedPayload;
        console.log('Event Type:', type);
        console.log('User ID from Clerk:', data.id);

        switch (type) {
            case 'user.created':
            case 'user.updated': {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0]?.email_address || '',
                    name: [data.first_name, data.last_name].filter(Boolean).join(' '),
                    image: data.image_url,
                    resume: ''
                };

                console.log('User Data to Save/Update:', userData);

                await User.findOneAndUpdate(
                    { clerkId: data.id },
                    userData,
                    { upsert: true, new: true }
                );

                console.log(`User ${type === 'user.created' ? 'created' : 'updated'} in DB`);
                break;
            }
            case 'user.deleted': {
                console.log(`Deleting user with Clerk ID: ${data.id}`);
                await User.findOneAndDelete({ clerkId: data.id });
                console.log('User deleted from DB');
                break;
            }
            default:
                console.log(`Unhandled event type: ${type}`);
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Webhook Processing Error:', error);
        res.status(400).json({ success: false, message: 'Webhook error' });
    }
};
