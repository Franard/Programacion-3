
import multer from "multer";


const storage = multer.diskStorage({

destination:"uploads/",

filename:(req,file,cb)=>{cb(null,Date.now()+"-"+file.originalname);}

});


const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Formato de archivo no válido. Solo se permiten imágenes (JPEG, JPG, PNG).'), false);
    }
};

export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Límite de 5MB
});

export default upload;
