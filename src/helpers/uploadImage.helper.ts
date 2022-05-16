import cloudinary from 'cloudinary';
import { config } from 'dotenv';
config();

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.v2.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
});

function uploadImage(file: any): Promise<cloudinary.UploadApiResponse> {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(file?.tempFilePath, { folder: "portfolio" }, (err: any, result: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

export default uploadImage;