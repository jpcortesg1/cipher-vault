// Import dependences
// External
import { Request, Response } from "express";
import CryptoJS from "crypto-js";

// Personal
import MessageModel, { Message } from "../../models/message.model";

// Create message controller
const create = async (req: Request, res: Response) => {
  try {
    // Get data
    const { content, passwordUser, expireAt } = req.body;

    // Upload key and IV of system and convert to buffer
    const keyCipherStr = process.env.KEY_CIPHER_STR as string;
    const ivCipherStr = process.env.IV_CIPHER_STR as string;
    const key = CryptoJS.enc.Hex.parse(keyCipherStr);
    const iv = CryptoJS.enc.Hex.parse(ivCipherStr);

    // Encrypt message
    // First encrypt with key and IV of system
    const encrypted = CryptoJS.AES.encrypt(content, key, { iv: iv });
    const encryptedStr = encrypted.toString();

    // Generate random key and IV
    const keyRandom = CryptoJS.lib.WordArray.random(16);
    const keyRandomStr = CryptoJS.enc.Hex.stringify(keyRandom);
    const ivRandom = CryptoJS.lib.WordArray.random(16);
    const ivRandomStr = CryptoJS.enc.Hex.stringify(ivRandom);

    // Encrypt key and IV random with key and IV of system
    const keyRandomEncrypt = CryptoJS.AES.encrypt(keyRandomStr, key, {
      iv: iv,
    });
    const ivRandomEncrypt = CryptoJS.AES.encrypt(ivRandomStr, key, { iv: iv });
    const keyRandomEncryptStr = keyRandomEncrypt.toString();
    const ivRandomEncryptStr = ivRandomEncrypt.toString();

    // Encrypt encryptedStr with random key and IV
    // Second encrypt with random key and IV
    const encrypted2 = CryptoJS.AES.encrypt(encryptedStr, keyRandom, {
      iv: ivRandom,
    });
    const encrypted2Str = encrypted2.toString();

    // Encrypt passwod user
    const passwordUserEncrypt = passwordUser
      ? CryptoJS.AES.encrypt(passwordUser, keyRandom, {
          iv: ivRandom,
        })
      : null;

    // Create random string unique
    let uniqueString = "";
    for (let i = 0; i < 4; i++) {
      let randomString = Math.random().toString(36).substring(2, 8);
      uniqueString += i == 3 ? `${randomString}` : `${randomString}-`;
    }

    // If exist password user
    let encrypted3 = undefined;
    let encrypted3Str = undefined;
    if (passwordUserEncrypt) {
      encrypted3 = CryptoJS.AES.encrypt(encrypted2Str, passwordUser);
      encrypted3Str = encrypted3.toString();
    }

    // Create base data
    const messageData: Message = {
      content: encrypted3Str ? encrypted3Str : encrypted2Str,
      uniqueString: uniqueString,
      expireAt: expireAt
        ? new Date(expireAt)
        : new Date(Date.now() + 2 * 30 * 24 * 60 * 60 * 1000),
      usePasswordUser: passwordUser ? true : false,
      keyStr: keyRandomEncryptStr,
      ivStr: ivRandomEncryptStr,
      ...(passwordUser &&
        passwordUserEncrypt && {
          passwordUser: passwordUserEncrypt.toString(),
        }),
    };

    // Save message
    const newMessage = new MessageModel(messageData);
    const message = await newMessage.save();

    return res.status(200).json({
      message: "Message created successfully",
      status: 200,
      data: {
        uniqueString: message.uniqueString,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      status: 500,
    });
  }
};

// Export module
export default create;
