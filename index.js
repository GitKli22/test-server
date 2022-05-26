// const express = require('express');
// const app = express();
 //const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));



// app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));


/*
  Make YOUR OWN credentials.json file BEFORE running the CODE

  Watch video: The Google Calendar API (PART 1)

  Time: 13:20 - Google Calendar API and credentials.json

*/

// NEW COMMIT


const https = require("https");
var request = require('request');
const fs = require("fs");

const express = require('express')
const app = express()
var cors = require('cors')

const path = require('path')
const bodyParser = require('body-parser');

// const option = {
//   key:fs.readFileSync("./key.pem"),
//   cert:fs.readFileSync("./cert.pem"),
// }

//app.use(express.static(path.join(__dirname, 'public')))
//app.set('views', __dirname + '/public/views');
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
//app.use(cors({
 // origin: '*'
//}));

app.get('/', (req, res) =>{
  res.render('index.html');
})


// app.post('/', (req, res) => {
//   const tkn=req.body.token;
//   const fs = require('fs');
//   const {google} = require('googleapis');

//   const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
//   // The file token.json stores the user's access and refresh tokens, and is
//   // created automatically when the authorization flow completes for the first
//   // time.
//   const TOKEN_PATH = 'token.json';

//   // Load client secrets from a local file.
//   fs.readFile('credentials.json', (err, content) => {
//     if (err) return console.log('Error loading client secret file:', err);
//     // Authorize a client with credentials, then call the Google Calendar API.
//     authorize(JSON.parse(content), listEvents);
//   });

//   /**
//    * Create an OAuth2 client with the given credentials, and then execute the
//    * given callback function.
//    * @param {Object} credentials The authorization client credentials.
//    * @param {function} callback The callback to call with the authorized client.
//    */
//   function authorize(credentials, callback) {
//     const {client_secret, client_id, redirect_uris} = credentials.web;
//     const oAuth2Client = new google.auth.OAuth2(
//         client_id, client_secret, redirect_uris[0]);

//     // Check if we have previously stored a token.
//     fs.readFile(TOKEN_PATH, (err, token) => {
//       if (err) return getAccessToken(oAuth2Client, callback);
//       oAuth2Client.setCredentials(JSON.parse(token));
//       callback(oAuth2Client);
//     });
//   }

//   /**
//    * Get and store new token after prompting for user authorization, and then
//    * execute the given callback with the authorized OAuth2 client.
//    * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
//    * @param {getEventsCallback} callback The callback for the authorized client.
//    */
//   function getAccessToken(oAuth2Client, callback) {
//     oAuth2Client.getToken(tkn, (err, token) => {
//       if (err) return console.error('Error retrieving access token', err);
//       oAuth2Client.setCredentials(token);
//       // Store the token to disk for later program executions
//       fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
//         if (err) return console.error(err);
//         console.log('Token stored to', TOKEN_PATH);
//       });
//       callback(oAuth2Client);
//     });
//   }

//   /**
//    * Lists the next events on the user's primary calendar.
//    * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
//    */
//   function listEvents(auth) {
//     async function fun(){
//     const calendar = await google.calendar({version: 'v3', auth});
//     calendar.events.list({
//       calendarId: 'primary',
//       timeMin: (new Date()).toISOString(),
//       maxResults: 30,
//       singleEvents: true,
//       orderBy: 'startTime',
//     }, (err, res) => {
//       if (err) return console.log('The API returned an error: ' + err);
//       const events = res.data.items;
//       if (events.length) {
//         console.log('Your upcoming events:', events);
//         events.map((event, i) => {
//           var_arr.push(event);
//         });
//       } else {
//         console.log('No upcoming events found.');
//       }
//     });
//   }
//   fun()
//   }
//   res.send(var_arr)
//   res.render('index.html')
// });
// const { google } = require('googleapis')
// const oauth2Client = new google.auth.OAuth2(
//   '1054365322332-u9tplt2okldr1528npb5s8ear8q4mpal.apps.googleusercontent.com',
//    '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',
//    "https://apicalendar.klivar-test.ovh/handleGoogleRedirect" // server redirect url handler
//  );
//  const fetch = require("node-fetch");
 
//  app.post("/createAuthLink", cors(), (req, res) => {
//    const url = oauth2Client.generateAuthUrl({
//      access_type: "offline",
//      scope: [
//        "https://www.googleapis.com/auth/userinfo.email",
//        //calendar api scopes]
//        "https://www.googleapis.com/auth/calendar",
//      ],
//      prompt: "consent",
//    });
//    res.send({ url });
//  });
 
//  app.get("/handleGoogleRedirect", async (req, res) => {
//    // get code from url
//    const code = req.query.code;
//    console.log("server 36 | code", code);
//    // get access token
//    oauth2Client.getToken(code, (err, tokens) => {
//      if (err) {
//        console.log("server 39 | error", err);
//        throw new Error("Issue with Login", err.message);
//      }
//      const accessToken = tokens.access_token;
//      const refreshToken = tokens.refresh_token;
 
//      res.redirect(
//        `http://localhost:3000/#/forms/mon-compte/?&accessToken=${accessToken}&refreshToken=${refreshToken}`
//      );
//    });
//  });

// app.post('/events', (req, response1) =>{
//   // Require google from googleapis package.
//   const { google } = require('googleapis')
//   // Require oAuth2 from our google instance.
//   const { OAuth2 } = google.auth
//   // Create a new instance of oAuth and set our Client ID & Client Secret.
//   const oAuth2Client = new OAuth2( '1054365322332-u9tplt2okldr1528npb5s8ear8q4mpal.apps.googleusercontent.com', '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')
//   // Call the setCredentials method on our oAuth2Client instance and set our refresh token.
//   oAuth2Client.setCredentials({
//     refresh_token:`${req.body.refresh_token}`,
//   })
//   // Create a new calender instance.
//   const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })
//   // Create a new event start date instance for temp uses in our calendar.
//   const eventStartTime = new Date()
//   eventStartTime.setDate(eventStartTime.getDay() + 5)
//   // Create a new event end date instance for temp uses in our calendar.
//   const eventEndTime = new Date()
//   eventEndTime.setDate(eventEndTime.getDay() + 5)
//   eventEndTime.setMinutes(eventEndTime.getMinutes() + 60)
//   var attendees_list=[];
//   var te= `${req.body.emails}`.split(',')
//   if (te.length>1){
//     te.map((mail, i) => {
//       attendees_list.push({'email':mail});
//     });
//   }
//   // Create a dummy event for temp uses in our calendar
//   const event = {
//     summary: `${req.body.summary}`,
//     description: `${req.body.description}`,
//     colorId: 6,
//     start: {
//       dateTime:`${req.body.dateTimeStart}` //dateTime: '2022-05-27T14:02:30.810Z',
//     },
//     end: {
//       dateTime:`${req.body.dateTimeEnd}`// dateTime: '2022-05-27T16:02:30.810Z',
//     },
//     attendees:attendees_list, // attendees: [{email: 'devklivar@gmail.com'},{email: 'audreysam40@gmail.com'}, ],
//     reminders: {
//       useDefault: false,
//       overrides: [
//         {method: 'email', minutes: 24 * 60},
//         {method: 'popup', minutes: 10},
//       ],
//     },
//   }
//   // Check if we a busy and have an event on our calendar for the same time.
//   calendar.freebusy.query(
//     {
//       resource: {
//         timeMin: `${req.body.dateTimeStart}`,
//         timeMax: `${req.body.dateTimeEnd}`,
//         items: [{ id: 'primary' }],
//       },
//     },
//     (err, res) => {
//       // Check for errors in our query and log them if they exist.
//       if (err) {
//         response1.send({ 
//           code:400,
//           status:"Check for errors in our query and log them if they exist",
//           msg:"Free Busy Query Error: "+ err 
//                 })
//         return console.error('Free Busy Query Error: ', err)
//       }
//       // Create an array of all events on our calendar during that time.
//       const eventArr = res.data.calendars.primary.busy
//       // Check if event array is empty which means we are not busy
//       if (eventArr.length === 0) {
//         // If we are not busy create a new calendar event.
//         return calendar.events.insert(
//           { calendarId: 'primary', resource: event },
//           (err, res1)  => {
//             // Check for errors and log them if they exist.
//             if (err){
//               response1.send({ 
//                 code:500,
//                 status:"Internal Server Error",
//                 msg:"Error Creating Calender Event:"+ err 
//                       })
//               return console.log("Error Creating Calender Event:"+ err)
//             } 
//             // Else log that the event was created.
//             response1.send({ 
//               code:201,
//               status:"successfully",
//               msg:"Cette tâche à été envoyer avec succes" 
//                     })
//            return console.log(`Cette tâche à été envoyer avec succes`);
//              //return res.json(r)
//           })
//         }
//       // If event array is not empty log that we are busy.
//       response1.send({ 
//         code:409,
//         status:"Conflit",
//         msg:"Désolé je suis occupé pour cette fois" 
//               })
//       return  console.log(`Sorry I'm busy for that time...`)
//      })
 
//   // console.log(req.body)
//   // const sgMail = require('@sendgrid/mail')
//   // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//   // const msg = {
//   //   to: req.body.to, // Change to your recipient
//   //   from: 'your email goes here', // Change to your verified sender
//   //   subject: req.body.summary,
//   //   text: req.body.description,
//   //   html: req.body.description,
//   // }
//   // sgMail
//   //   .send(msg)
//   //   .then(() => {
//   //     console.log('Email sent')
//   //   })
//   //   .catch((error) => {
//   //     console.error(error)
//   //   })

//   //res.send('events.html')
// })


  app.listen(process.env.PORT ||3000, () =>{
  console.log('Server running on port 3001 dfgd')
})