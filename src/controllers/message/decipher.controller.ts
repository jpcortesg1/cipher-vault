// Import dependences
// External
import { Request, Response } from "express";
import CryptoJS from "crypto-js";

// Decipher message controller
const decipher = async (req: Request, res: Response) => {
  try {
    // Get data
    const { messageFound, passwordUser } = req.body;
    const keyCipherStr = process.env.KEY_CIPHER_STR as string;
    const ivCipherStr = process.env.IV_CIPHER_STR as string;
    const key = CryptoJS.enc.Hex.parse(keyCipherStr);
    const iv = CryptoJS.enc.Hex.parse(ivCipherStr);

    // Start desencrypt
    // If use password user
    let decrypted3Str: string = messageFound.content;
    if (passwordUser) {
      const decrypted3 = CryptoJS.AES.decrypt(
        messageFound.content,
        passwordUser
      );
      decrypted3Str = decrypted3.toString(CryptoJS.enc.Utf8);
      if (!decrypted3Str) {
        return res.status(400).json({
          message: "Password incorrect",
          status: 400,
        });
      }
    }

    // With Key and IV of message
    const ivRandomEncryptStr = messageFound.ivStr;
    const keyRandomEncryptStr = messageFound.keyStr;

    const ivRandomDecrypt = CryptoJS.AES.decrypt(ivRandomEncryptStr, key, {
      iv,
    });
    const keyRandomDecrypt = CryptoJS.AES.decrypt(keyRandomEncryptStr, key, {
      iv,
    });
    const ivRandom = CryptoJS.enc.Hex.parse(
      ivRandomDecrypt.toString(CryptoJS.enc.Utf8)
    );
    const keyRandom = CryptoJS.enc.Hex.parse(
      keyRandomDecrypt.toString(CryptoJS.enc.Utf8)
    );
    const decrypted2 = CryptoJS.AES.decrypt(decrypted3Str, keyRandom, {
      iv: ivRandom,
    });
    const decrypted2Str = decrypted2.toString(CryptoJS.enc.Utf8);

    // With Key and IV of system
    const decrypted = CryptoJS.AES.decrypt(decrypted2Str, key, { iv });
    const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);

    return res.status(200).json({
      message: "Success",
      status: 200,
      data: {
        message: decryptedStr,
      },
    });
  } catch (error: any) {
    if (error.message === "Malformed UTF-8 data") {
      return res.status(400).json({
        message: "Password incorrect",
        status: 400,
        error: error.message,
      });
    }
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      status: 500,
    });
  }
};

// Export module
export default decipher;
