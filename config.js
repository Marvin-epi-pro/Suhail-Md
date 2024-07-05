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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256757643059";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_19_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDg4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5mK2xQendTQzZtNDJTSWNJbUpobmVWZGcxSEZ5dnI5Q2ovd1lwOW55MWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzU3NjQzMDU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQTY1NzNDQzlDMjkwMDIzMTNENjcxQTYxNjQxN0UxRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxMTcxODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NTc2NDMwNTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQzlBM0Q2QkUyODBGOThGNzgyMUQ5OTkzRUVFNjJEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDExNzE4NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSYVhyTmY4SFNiQ0VFckF4cjAzRUlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZjOTE0NWFjLTA5NzUtNGEyMS1hYmZkLTM5YTlmZjVkOTBmOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAzNyxcbiAgICAgIDE0OCxcbiAgICAgIDUwLFxuICAgICAgMTgsXG4gICAgICAxODUsXG4gICAgICAyNTEsXG4gICAgICAxNzcsXG4gICAgICAzLFxuICAgICAgMTk0LFxuICAgICAgNjEsXG4gICAgICAyMzcsXG4gICAgICAyMDcsXG4gICAgICA1MCxcbiAgICAgIDEzNSxcbiAgICAgIDMxLFxuICAgICAgOTcsXG4gICAgICAxNzgsXG4gICAgICA0NixcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDI0OCxcbiAgICAgIDU2LFxuICAgICAgMTcwLFxuICAgICAgNTUsXG4gICAgICAxOTIsXG4gICAgICA1LFxuICAgICAgMTIwLFxuICAgICAgMjE0LFxuICAgICAgMTM3LFxuICAgICAgMTA0LFxuICAgICAgMjA0LFxuICAgICAgNjYsXG4gICAgICAxOTIsXG4gICAgICAyMSxcbiAgICAgIDIwNSxcbiAgICAgIDE2MyxcbiAgICAgIDEsXG4gICAgICAxNTcsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFlXMlgyUUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc1NzY0MzA1OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2OTQxMTQxOTQ5MjQ2NToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKdpO+4j+KAjfCflKVNYXJ2aW4gRXBpIFByb1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09uQjF1Z0NFTGJQbTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWndEQkE2MEh4Y3NDbGU1UWtReVhRNURSNTZnaFR1WTNVU3phOWNmSll3bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLdkc1RFZJdCtEUnZtbndpcTIvNlVmTGF4M3c5QkJ1ampRcDkwMEJ2UElwNmdnRCtJUDVXb3h3dGEzRXVFL1cvT2l3QlZvUVlpUnZvS2dnZlF5Vk1CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPUGtGaSt6UzZXMkhOTXQvS2VjN1NLS3ZuQXBZSkZLdkhQNzNIcTRFRDdDY1VXQzVoRlluQzhRWEFDdVRvK0xGNXZoVnRNTy83WnRqYmJMRkV1bTdDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTc2NDMwNTk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDExNzE3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNyRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3JGLmpzb24iOiAie1wia2V5RGF0YVwiOlwicHB3OWhnYmJqbXprWU5zSnlxajNYR0tYZUE4cWRHZGh0c2lPK0RGZHdDdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTYzOTIxNjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDExNzE3OTk1NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Marvin",


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
