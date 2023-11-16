// ### shout out to https://github.com/aabdulbasset for this code

// Node.js program to demonstrate the
// crypto.createDecipheriv() method

// Includes crypto module
import crypto from "crypto";
// Defining algorithm
const algorithm = "aes-128-cbc";
const key = Buffer.from("0f0e0d0c0b0a09080706050403020100", "hex");
const iv = Buffer.from("000102030405060708090a0b0c0d0e0f", "hex");

// Creating decipher
function encrypt(text: string) {
  // Creating Cipheriv with its parameter
  let cipher = crypto.createCipheriv(algorithm, key, iv);

  // Updating text
  let encrypted = cipher.update(text);

  // Using concatenation
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  // Returning iv and encrypted data
  return encrypted.toString("base64");
}

export default encrypt;
