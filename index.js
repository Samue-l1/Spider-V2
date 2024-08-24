// Import necessary modules
require('./config');
const { 
  default: ryoroykoConnect, makeWASocket,   useMultiFileAuthState, DisryoroykoectReason, fetchLatestBaileysVersion, 
  generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, 
  generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, 
  DisconnectReason, getAggregateVotesInPollMessage 
} = require("@whiskeysockets/baileys")
const pino = require('pino')
//const terminalImage = require('terminal-image');
const chalk = require('chalk')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const FileType = require('file-type')
const path = require('path')
const figlet = require('figlet')
const PhoneNumber = require('awesome-phonenumber')
const { spawn } = require('child_process')
const colors = require('@colors/colors/safe')
const CFonts = require('cfonts')
const moment = require('moment-timezone')
const readline = require("readline")
const yargs = require('yargs/yargs')

const apiUrl = "https://abre.ai/0x23340x1e950x2c7e0x33eg"

// Import custom functions and libraries
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif');
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep } = require('./lib/myfunction');

const { color } = require('./lib/color');

// Create an in-memory store
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

// Set a constant for using pairing code
const usePairingCode = global.connect;

// Get the current time and determine a greeting based on the time
const now = moment().tz("Asia/Jakarta");
const time = now.format("HH:mm:ss");
let ucapanWaktu;

if (time < "06:00:00") {
  ucapanWaktu = "Selamat Subuh🌆";
} else if (time < "11:00:00") {
  ucapanWaktu = "Selamat Pagi🏙️";
} else if (time < "15:00:00") {
  ucapanWaktu = "Selamat Siang🏞️";
} else if (time < "19:00:00") {
  ucapanWaktu = "Selamat Sore🌄";
} else {
  ucapanWaktu = "Selamat Malam🌃";
}

// Get time in different time zones
const wib = now.clone().tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
const wita = now.clone().tz("Asia/Makassar").locale("id").format("HH:mm:ss z");
const wit = now.clone().tz("Asia/Jayapura").locale("id").format("HH:mm:ss z");
const salam = now.clone().tz("Asia/Jakarta").locale("id").format("a");

// Define some constants
const moji = ['📚', '💭', '💫', '🌌', '🌏', '〽️', '🌷', '🍁', '🪻'];
const randomemoji = moji[Math.floor(Math.random() * moji.length)];
const listcolor = ['aqua', 'red', 'blue', 'purple', 'magenta'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor2 = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor3 = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor4 = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor5 = listcolor[Math.floor(Math.random() * listcolor.length)];

//Puki
const pukipuki = fs.readFileSync(`./image/menunya.jpg`)

// Define a function for asking a question with readline
const question = (text) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(color(text, randomcolor5), (answer) => {
      resolve(answer);
      rl.close();
    });
  });
};

// Create Display Console 
const welcomeMessage = `
[[ ༑📚𝑪𝒓𝒆𝒂𝒕𝒆 𝑩𝒚 𝖐𝖎𝖓𝖌 𝖘𝖆𝖒⿻ ༑]]
┏─•⛩️ ${global.namabot} ⛩️•─⬣[⿻

👋 Hii, I Am ${global.namabot}
 [⿻] ${ucapanWaktu}
 [⿻] 🌌 Version        : 2.0.0
 [⿻] 👤 Owner  	     : ${global.NamaOwner}
 [⿻] 📚 Library       : WBaileys MD
 [⿻] 📱 Status         : Online
 [⿻] 📝 Session        : ${global.sessionName}
 [⿻] 🕑 時間         : ${ucapanWaktu}
 [⿻] 🌎 Base By    : ${global.author}

┗─•🌈 ${global.namabot} 🌈•─⬣[⿻
[[ ༑📚𝑪𝒓𝒆𝒂𝒕𝒆 𝑩𝒚 𝖐𝖎𝖓𝖌 𝖘𝖆𝖒༢⿻ ༑]]
`;

// Asynchronous function to start ryoroyko
async function ryoroykoStart() {
  // Retrieve state and a function to save credentials using multi-file authentication state
  const { state, saveCreds } = await useMultiFileAuthState(`./${global.sessionName}`);
  // Fetch the latest version of Baileys and check if it's the latest
  const { version, isLatest } = await fetchLatestBaileysVersion();


  // Configuration for Ryokuch object
  const ryoroyko = ryoroykoConnect({
    isLatest,
    keepAliveIntervalMs: 30000,
    printQRInTerminal: !usePairingCode,
    logger: pino({ level: "fatal" }),
    auth: state,
    browser: ['Mac OS', 'chrome', '121.0.6167.159']
})

  // Check if pairing code is to be used and if ryoroyko is not registered
  if (usePairingCode && !ryoroyko.authState.creds.registered) {
    // Ask for the active WhatsApp number to use as a bot
    const phoneNumber = await question(`
🌆 Enter The Active Number You Want To Use As A WhatsApp Bot, Start With Your Country Code.❗ > Example: 2547262836258. Now, Try To Follow The Instructions I Gave

🌤️ WhatsApp Number:
`);
   // Request and display the pairing code
   const code = await ryoroyko.requestPairingCode(phoneNumber.trim());
   console.log(color(`〽️Nih Beb: ${code}`, `${randomcolor}`));
}


/*      Lu bisa ganti browser jadi browser lain, 

            Available browsers >
        UNKNOWN = 0;
        CHROME = 1;
        FIREFOX = 2;
        IE = 3;
        OPERA = 4;
        SAFARI = 5;
        EDGE = 6;
        DESKTOP = 7;
        IPAD = 8;
        ANDROID_TABLET = 9;
        OHANA = 10;
        ALOHA = 11;
        CATALINA = 12;
        TCL_TV = 13;
        IOS_PHONE = 14;
        IOS_CATALYST = 15;
        ANDROID_PHONE = 16;
        ANDROID_AMBIGUOUS = 17;
        WEAR_OS = 18;
        AR_WRIST = 19;
        AR_DEVICE = 20;
        UWP = 21;
        VR = 22;
        
    */
    
    // Status 
    ryoroyko.public = true

ryoroyko.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {};
        return decode.user && decode.server && decode.user + '@' + decode.server || jid;
    } else return jid;
};

ryoroyko.ev.on('contacts.update', update => {
    for (let contact of update) {
        let id = ryoroyko.decodeJid(contact.id);
        if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
    }
});

ryoroyko.setStatus = (status) => {
    ryoroyko.query({
        tag: 'iq',
        attrs: {
            to: '@s.whatsapp.net',
            type: 'set',
            xmlns: 'status',
        },
        content: [{
            tag: 'status',
            attrs: {},
            content: Buffer.from(status, 'utf-8')
        }]
    });
    return status;
};

ryoroyko.public = true;

    ryoroyko.getName = (jid, withoutContact  = false) => {
        id = ryoroyko.decodeJid(jid)
        withoutContact = ryoroyko.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = ryoroyko.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === ryoroyko.decodeJid(ryoroyko.user.id) ?
            ryoroyko.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    ryoroyko.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await vision.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ryoroyko.getName(i)}\nFN:${await ryoroyko.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
	    })
	}
	ryoroyko.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    ryoroyko.serializeM = (m) => smsg(ryoroyko, m, store);

    
   ryoroyko.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect
        } = update
        try {
            if (connection === 'close') {
                let reason = new Boom(lastDisconnect?.error)?.output.statusCode
                if (reason === DisconnectReason.badSession) {
                    console.log(`Bad Session File, Please Delete Session and Scan Again`);
                    ryoroyko()
                } else if (reason === DisconnectReason.connectionClosed) {
                    console.log("Connection closed, reconnecting....");
                    ryoroykoStart();
                } else if (reason === DisconnectReason.connectionLost) {
                    console.log("Connection Lost from Server, reconnecting...");
                    ryoroykoStart();
                } else if (reason === DisconnectReason.connectionReplaced) {
                    console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                    ryoroyko()
                } else if (reason === DisconnectReason.loggedOut) {
                    console.log(`Device Logged Out, Please Scan Again And Run.`);
                    ryoroykoStart();
                } else if (reason === DisconnectReason.restartRequired) {
                    console.log("Restart Required, Restarting...");
                    ryoroykoStart();
                } else if (reason === DisconnectReason.timedOut) {
                    console.log("Connection TimedOut, Reconnecting...");
                    ryoroykoStart();
                } else ryoroyko.end(`Unknown DisconnectReason: ${reason}|${connection}`)
            }
            if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
                console.log(color(`Mengkoneksikan`,`${randomcolor3}`)) //Console-1
            }
            
            if (update.connection == "open" || update.receivedPendingNotifications == "true") {
                console.log(color(figlet.textSync(`${global.namabot}`, //Console-2
              {
                font: 'Standard',
                horizontalLayout: 'default',
                vertivalLayout: 'default',
                width: 80,
                whitespaceBreak: false
                }), `${randomcolor}`))
                
        console.log(color(`                                       :\`  .
                                   -s- -o.
                                   -do./d+\`
                       .\`-+:-\`:+:\` -hd+/dh:
                   .+++++mmmdhNmdy++dmhshds-
                ..-oNNNNNNNNNNNNNNmmmmmdmdds-
              +hdmmNNNNNmmmmmNNNmmmmmmdddds:\`
            -+mNNNNNdy+::-----:+shmmmmmddddddy:
           .sdNNNNNd+-           \`-ohmmmddddhddo\`
          \`:dNNNNh-..               .+hddddddhmms.                    
         \`:dmmNNN:..                  .sddddddmmmy-
         .osmNmNm-..                    :sdddddmmmo'
         \`:NNNNNs..                      ./ydddmmh-\`
           sdmNNNNs-                         -odmmmms-
          \`-.:mNNNNd+.                         .ommmmmh-
             \`ydhmNNNds:.                       +mmmmh.
               .\`-+ydmNNmds+-\`                -:.\`
                   \`\`-/oydmNNmyo-
                          \`.:oymmmh+.
                              \`-ohmmo.
                                   .odd:
                                     \`od:
                                       /d\`
                                        y.
                                       .\`
`,`${randomcolor}`));
                
                console.log(color(`📝*Connecting to WhatsApp web🖥️*`,`${randomcolor}`))
                console.log(color(`[[ ༑☔*Bot Has Been Connected*༢⿻ ༑]]`))
                await sleep(30000)
                //Jangan dihapus, Nanti ErorEror
            ryoroyko.sendMessage('ryozingod.user.id', {
                image: {
                    url: 'https://telegra.ph/file/ea0b61624cf15d1210afb.jpg'
                }, 
                caption: `𝗚𝘂𝗲𝘀𝘀 𝘄𝗵𝗼 𝗵𝗮𝘀 𝗹𝗼𝘀𝘁 𝗵𝗶𝘀/𝗵𝗲𝗿 𝗠𝗲𝗿𝗰𝘆 💀 𝗟𝗲𝘁𝘀 𝗸𝗶𝗹𝗹 𝘁𝗵𝗲 𝘃𝗶𝗯𝗲𝘀,𝗡𝗼 𝗠𝗲𝗿𝗰𝘆 𝗙𝗼𝗿 𝗧𝗵𝗲 𝗪𝗲𝗮𝗸 👻 `
            })
            }//

        } catch (err) {
            console.log('Error Di Connection.update ' + err);
                ryoroykoStart()
        }

    })
        
    ryoroyko.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                ryoroyko.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })
    
      /**
      *
      * @param {*} jid
      * @param {*} url
      * @param {*} caption
      * @param {*} quoted
      * @param {*} options
      */
     ryoroyko.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return ryoroyko.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return ryoroyko.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return ryoroyko.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return ryoroyko.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return ryoroyko.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

   /**
     * 
     * @param {*} jid 
     * @param {*} name 
     * @param [*] values 
     * @returns 
     */
    ryoroyko.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return ryoroyko.sendMessage(jid, { poll: { name, values, selectableCount }}) }
    
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryoroyko.sendText = (jid, text, quoted = '', options) => ryoroyko.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryoroyko.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ryoroyko.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryoroyko.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ryoroyko.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    ryoroyko.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ryoroyko.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryoroyko.sendTextWithMentions = async (jid, text, quoted, options = {}) => ryoroyko.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryoroyko.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await ryoroyko.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryoroyko.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await ryoroyko.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    ryoroyko.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    ryoroyko.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryoroyko.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await ryoroyko.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await ryoroyko.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    ryoroyko.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await ryoroyko.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    ryoroyko.cMod = (jid, copy, text = '', sender = ryoroyko.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === ryoroyko.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }

ryoroyko.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await ryoroyko.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await ryoroyko.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await ryoroyko.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    ryoroyko.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

ryoroyko.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!ryoroyko.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('FatihArridho_')) return
            m = smsg(ryoroyko, mek, store)
            require("./spider")(ryoroyko, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    //respon polling 
    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Hai Im juna Bot"
        }
    }
    ryoroyko.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                ryoroyko.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })
    
//Simpan Kredensial
ryoroyko.ev.process(
    async (events) => {
        if (events['presence.update']) {
            await ryoroyko.sendPresenceUpdate('available');
        }
        if (events['creds.update']) {
            await saveCreds();
        }
    }
)

return ryoroyko
}

/*console.clear();
console.log(color(`
▒██   ██▒  ▄████ 
▒▒ █ █ ▒░ ██▒ ▀█▒
░░  █   ░▒██░▄▄▄░
 ░ █ █ ▒ ░▓█▒  ██▓
▒██▒ ▒██▒░▒▓███▀▒
▒▒ ░ ░▓ ░ ░▒   ▒ 
░░   ░▒ ░  ░   ░ 
 ░    ░  ░ ░   ░ 
 ░    ░        ░ 
                 
`,`${randomcolor}`));
question(`❗ Masukkan Username Anda Untuk Melanjutkan : \n👤 Usernama : `).then((nama) => {
  question('📟 Masukkan Pin Anda Untuk Melanjutkan : \n🌊 Pin Anda : ').then((pin) => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const user = data.data.find(user => user.nama === nama && user.pin == pin);
        if (user) {
          console.clear();
          console.log(color(`
▒██   ██▒  ▄████ 
▒▒ █ █ ▒░ ██▒ ▀█▒
░░  █   ░▒██░▄▄▄░
 ░ █ █ ▒ ░▓█▒  ██▓
▒██▒ ▒██▒░▒▓███▀▒
▒▒ ░ ░▓ ░ ░▒   ▒ 
░░   ░▒ ░  ░   ░ 
 ░    ░  ░ ░   ░ 
 ░    ░        ░ 
                 
`,`${randomcolor}`));
          console.log("\n🌆 Login berhasil! ✅");
          */
          ryoroykoStart()
/*        } else {
          console.log("Nama atau pin tidak valid. Login gagal.");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
*/

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
    delete require.cache[file];
    require(file);
});
