const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "enter your session",
    CAPTION: process.env.CAPTION || "POWERED BY JINWIILONGINJO",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false", 
    ANTICALL: process.env.ANTICALL || "true",
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
    HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254769365617",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/r6qxz0.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M NEGRO-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || "",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    CHAT_BOT: process.env.CHAT_BOT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "𝗡𝗘𝗚𝗥𝗢 𝗠𝗗🕷️🕸️",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү negro-м∂`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
