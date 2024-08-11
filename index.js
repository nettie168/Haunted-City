import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();

const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));

app.set('views', './views');
app.set('view engine', 'ejs');



app.get('/', (req,res)=>{
    res.render("index.ejs")
});

app.get('/about', (req,res)=>{
    res.render("about.ejs")
});

app.get('/contact', (req,res)=>{
    res.render("contact.ejs")
});

app.get('/newskaters', (req,res)=>{
    res.render("newskaters.ejs")
});

app.get('/joinus', (req,res)=>{
    res.render("joinus.ejs")
});

//do a sub-thing of teams?
//why is this not working?
app.get('/teams', (req,res)=>{
    res.render("team.ejs")
});

//blogs?
//forums on blog posts for interactivity/engagement/community?

//create folders of file with name in public
//send through folder/array of photos
//have main gallery which shows each folder (like blog list)
//clicking on post/folder takes you to photos page of that folder
//with one gallery item which iterates over each photo

app.get('/photos', (req,res) => {
    const events = fs.readdirSync(__dirname + "/" +"public" + "/" +"photos");
    res.render("photos.ejs",{
            events: events
        })
});

//sort out CSS
//can you get a text file with say the photographers name
//or info on the event? yes but it breaks if it doesn't exist
app.get('/photos/:events', (req,res) =>{
    const photos = fs.readdirSync(__dirname + "/" +"public" + "/" +"photos"+"/"+req.params.events);
    //const eventDescription = "partials"+"/"+req.params.events+".ejs"
    /*var eventDescription
    fs.readFile(__dirname + "/" +"views" + "/" +"partials"+"/"+req.params.events+".ejs", (err, data) => {
        if (!err && data) {
            eventDescription = fs.readdirSync(__dirname + "/" +"views" + "/" +"partials"+"/"+req.params.events+".ejs");
        }
      })
    console.log(eventDescription);*/

    res.render('eventphotos.ejs',{
        event: req.params.events,
        photos: photos,
    })
});

//add an ejs for clicking on a photo

app.get('/usefullinks', (req,res)=>{
    res.render("usefullinks.ejs")
});



app.listen(port, () => {
    console.log("server listening on port "+port)
});