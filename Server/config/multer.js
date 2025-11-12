// import multer from "multer";

// const storage = multer.memoryStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, "uploads/"); //going to upload folder
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + "-" + file.originalname);
// //   }
// });

// const upload = multer({ storage });

// export default upload;


//--- using approach of storing directly to cloudinary----

// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "../config/cloudinary.js";  // <--- use your config

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "company_uploads",   // Cloudinary folder name
//     allowed_formats: ["jpg", "png", "jpeg", "webp"],
//   },
// });

// const upload = multer({ storage });

// export default upload;


//im memory mein store krenge
// import multer from "multer";
// const storage = multer.memoryStorage();
// const upload = multer({ storage });
// export default upload;

//direcly to database:

import multer from 'multer';

// Use memory storage for both images and PDFs
const storage = multer.memoryStorage();

// File filter function for both images and PDFs
const fileFilter = (req, file, cb) => {
  // Allow images and PDFs
  if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Not a supported file type! Please upload an image or PDF.'), false);
  }
};

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB limit for both images and PDFs
  },
  fileFilter: fileFilter
});

// Alternatively, create separate configurations for different file types
export const imageUpload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload an image.'), false);
    }
  }
});

export const pdfUpload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Not a PDF! Please upload a PDF file.'), false);
    }
  }
});

//module.exports = { upload, imageUpload, pdfUpload };

