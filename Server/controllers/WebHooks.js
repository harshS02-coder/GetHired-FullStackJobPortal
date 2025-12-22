import { Webhook } from 'svix';
import User from '../models/Users.js';

export const clerkWebHook = async (req, res) => {
  console.log('Clerk Webhook Triggered');

  try {
    const svix_id = req.headers['svix-id'];
    const svix_timestamp = req.headers['svix-timestamp'];
    const svix_signature = req.headers['svix-signature'];

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return res.status(400).json({ success: false, message: "Missing Svix headers" });
    }

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify payload
    const payloadString = req.body.toString('utf8');
    const event = wh.verify(payloadString, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature
    });

    const { data, type } = event;
    console.log('Event Type:', type);

    switch (type) {
      case 'user.created':
      case 'user.updated': {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address || '',
          name: [data.first_name, data.last_name].filter(Boolean).join(' '),
          image: data.image_url,
          resume: '' // default
        };

        console.log('Upserting user:', userData);

        await User.findOneAndUpdate(
          { clerkId: data.id }, 
          userData,
          { upsert: true, new: true }
        );

        break;
      }
      case 'user.deleted': {
        await User.findOneAndDelete({ clerkId: data.id });
        console.log(`Deleted user with Clerk ID: ${data.id}`);
        break;
      }
      default:
        console.log(`Unhandled event type: ${type}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Webhook Processing Error:', error);
    return res.status(400).json({ success: false, message: 'Webhook error' });
  }
};
