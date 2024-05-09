import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please provide job title"],
        minLength: [3, "Job Title must contain at least 3 characters!"],
        maxLength: [50, "Job Title cannot exceed 50 characters!"],
    },
    description:{
        type: String,
        required: [true, "Please provide job description"],
        minLength: [50, "Job description must contain at least 50 characters!"],
        maxLength: [350, "Job description cannot exceed 350 characters!"],
    },
    category:{
        type: String,
        required: [true, "Please provide job category"],
    },
    country:{
        type: String,
        required: [true, "Please provide job country"],
    },
    city:{
        type: String,
        required: [true, "Please provide job city"],
    },
    location:{
        type: String,
        required: [true, "Please provide exact job location"],
        minLength: [50, "Job Title must contain at least 50 characters!"],
    },
    fixedSalary:{
        type: Number,
        minLength: [4, "Fixed Salary must contain at least 4 digits!"],
        maxLength: [9, "Fixed Salary cannot exceed 9 digits!"],
    },
    salaryFrom:{
        type: Number,
        minLength: [3, "Salary from must contain at least 3 characters!"],
        maxLength: [9, "Salary from cannot exceed 9 characters!"],
    },
    salaryTo:{
        type: Number,
        minLength: [3, "Salary to must contain at least 3 characters!"],
        maxLength: [9, "Salary to cannot exceed 9 characters!"],
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);