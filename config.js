const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_10_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgODcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY3LFxuICAgICAgICA4NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkxLFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICA4MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJEN0svcW93WHVJWEp0ZU5Cck8rOUMyaXgyY2tSSGpxTmpDa3V4OVF6aXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldpeENIc211UUxxYklqaERHOXJRYWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzZiNTg0ZGEtY2JiOC00MGZhLTkwYjYtNGYyNjMxNzZmNzc4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDEwMixcbiAgICAgIDEwNSxcbiAgICAgIDIwMSxcbiAgICAgIDMyLFxuICAgICAgNzMsXG4gICAgICAyMzYsXG4gICAgICAxMDgsXG4gICAgICAyMSxcbiAgICAgIDEwNixcbiAgICAgIDU2LFxuICAgICAgNzUsXG4gICAgICAxNDMsXG4gICAgICA2MyxcbiAgICAgIDEwNyxcbiAgICAgIDIyMixcbiAgICAgIDE1NCxcbiAgICAgIDIzOSxcbiAgICAgIDgwLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDIxOSxcbiAgICAgIDAsXG4gICAgICAyMDYsXG4gICAgICAxMzAsXG4gICAgICA5NyxcbiAgICAgIDcxLFxuICAgICAgMjI0LFxuICAgICAgMTQzLFxuICAgICAgMTA1LFxuICAgICAgMjQxLFxuICAgICAgMjMzLFxuICAgICAgNzIsXG4gICAgICA5MixcbiAgICAgIDE4MCxcbiAgICAgIDEzNSxcbiAgICAgIDcwLFxuICAgICAgMjMzLFxuICAgICAgMTUxLFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1hXWkNaMzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTI4MDY4NDI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTMyMjMyODUwNjc5Njc6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNWGV4c2NDRUwvZ2xyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhPd3o0Z2ZMOGZwc2NWdWdYRXBJdnplMmpGZGhuRXNqeisyYnBlbEZFRnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSTB6NXRhTmJ2NVBYQml1eXAwMldmSDQzblN0MmkyRW00SFRuUlh5OFF1SDM0eXlKbFFPT2dIaDVDd3FwTmZMa1kvNG9JNXo0U2pGZkgvenFIYmZIQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMHFGZ0JJT3dta3lYNVEyTjlEVWpOaDNIM3VWWTE2aHllcjJZVUVONFNWZHVKUDYzNkNBdnlXUnpaQUxLSmN6alAraUV2Y3NlNjMzWHpyYWpYb2k0anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA1MjgwNjg0Mjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMzc0NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFVUlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVVSS5qc29uIjogIntcImtleURhdGFcIjpcIitCdlo3VzFQVnRxTmREUjJhbWtXSGhad294MzcxbWo3OVNQVnR2MlQydUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njg2OTI3Njg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwMzc0NDQ0ODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
