import multer from "multer";
export const filesValidation = {
  image: ["image/gif", "image/png", "image/jpeg", "image/bmp", "image/jpg"],
};

export const fileUpload = (fileTypesValidation = []) => {
  const storage = multer.diskStorage({});

  const fileFilter = (req, file, cb) => {
    if (!fileTypesValidation.includes(file.mimetype))
      cb("in-valid file type", false);
    else cb(null, true);
  };
  const upload = multer({ fileFilter, storage });
  return upload;
};
