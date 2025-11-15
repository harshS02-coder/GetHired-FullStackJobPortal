// import mongoose from 'mongoose'

// const jobsSchema = new mongoose.Schema({
//     jobTitle : {type : String, required: true},
//     description : {type: String, required:true},
//     location : {type : String, required : true},
//     category : {type : String, required: true},
//     level : {type : String, required: true},
//     salary : {type : Number, required: true},
//     date : {type : Number, required : true},
//     visibility : {type: Boolean},
//     companyId : {type : mongoose.Schema.Types.ObjectId, ref: 'Company', required:true}
// });
// jobsSchema.index({ visibility: 1 });


// const Jobs = mongoose.model('Job', jobsSchema)
// export default Jobs

import mongoose from 'mongoose';

const jobsSchema = new mongoose.Schema({
    jobTitle : { type : String, required: true },
    description : { type: String, required: true },
    location : { type : String, required : true },
    category : { type : String, required: true },
    level : { type : String, required: true },
    salary : { type : Number, required: true },
    date : { type : Number, required : true },
    visibility : { type: Boolean, default: true },
    companyId : { type : mongoose.Schema.Types.ObjectId, ref: 'Company', required: true }
});

// INDEXES
jobsSchema.index({ visibility: 1 });
jobsSchema.index({ location: 1 });
jobsSchema.index({ category: 1 });
jobsSchema.index({ level: 1 });
jobsSchema.index({ companyId: 1 });

// Optional but very useful for job filtering speed
jobsSchema.index({ visibility: 1, location: 1, category: 1 });

const Jobs = mongoose.model('Job', jobsSchema);
export default Jobs;
