import { AES } from 'crypto-js';
import {EncryptData} from "../models";

const secretKey = import.meta.env.VITE_SECRET_KEY;
export const encryptData = (data: EncryptData) => {
	const jsonData = JSON.stringify(data);
	return AES.encrypt(jsonData, secretKey).toString();
};

export const decryptData = (encryptedData: string) => {
	const decryptedData = AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
	return JSON.parse(decryptedData);
};
