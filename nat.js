const { 
   WAConnection, 
   MessageType, 
   Presence,  
   MessageOptions, 
   Mimetype, 
   WALocationMessage, 
   WA_MESSAGE_STUB_TYPES, 
   ReconnectMode, 
   ProxyAgent, 
   GroupSettingChange, 
   ChatModification, 
   waChatKey, 
   WA_DEFAULT_EPHEMERAL, 
   mentionedJid, 
   prepareMessageFromContent,  
   Browsers, 
   processTime 
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone");
const os = require("os");
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const chalk = require('chalk');
const crypto = require("crypto-js");
const CryptoJS = require("crypto-js");
const fs = require('fs');
const { wait, h2k, generateMessageID, getGroupAdmins, banner, start, info, success, close } = require('./lib/functions')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
const { removeBackgroundFromImageFile } = require('remove.bg');
const { exec } = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios');
const fetch = require('node-fetch');
const request = require('request');
const { validmove, setGame } = require("./lib/tictactoe");
const simple = require('./lib/simple.js');
const {y2mateA, y2mateV} = require('./lib/y2mate.js')
const {sm330mfire} = require('./lib/mediafire.js')
const { ssstik } = require("./lib/tiktok.js")
const {fbDown} = require('./lib/fb.js') 
const { isFiltered, addFilter } = require('./lib/antispam')
const chatban = JSON.parse(fs.readFileSync('./src/ban.json'))
const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const crypt = fs.readFileSync('./crypt/imp.json')
const {convertSticker} = require("./lib/swm.js")
const antimedia = JSON.parse(fs.readFileSync('./src/antimedia.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const antibot = JSON.parse(fs.readFileSync('./src/antibot.json'))
const bad = JSON.parse(fs.readFileSync('./src/bad.json'))
const badword = JSON.parse(fs.readFileSync('./src/badword.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner 
const mods = config.mods
var public = config.public
conn.connect()
let _level = JSON.parse(fs.readFileSync('./src/level.json'))
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
const daily = JSON.parse(fs.readFileSync('./src/diario.json'));
const dailiy = JSON.parse(fs.readFileSync('./src/limitem.json'));
const X = "❌️"
const O = "⭕️"

//========= Funcion de Registro =========\\
const getRegisteredRandomId = () => {
           return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
        _registered.push(obj)
        fs.writeFileSync('./src/registered.json', JSON.stringify(_registered))
}

        const createSerial = (size) => {
                   return crypto.randomBytes(size).toString('hex').slice(0, size)
   }

        const checkRegisteredUser = (sender) => {
                   let status = false
                   Object.keys(_registered).forEach((i) => {
                              if (_registered[i].id === sender) {
                                         status = true
                                                    }
                              })
                       return status
           
           
   



   
