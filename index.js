import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import axios from "axios";
import config from "./config.js";

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

app.get('/wraiths', (req,res) =>{
    res.render("teamwraiths.ejs")
});

app.get('/phantoms', (req,res) =>{
    res.render("teamphantoms.ejs")
});

app.get('/terrors', (req,res) =>{
    res.render("teamterrors.ejs")
});

//blogs?
//forums on blog posts for interactivity/engagement/community?

//create folders of file with name in public
//send through folder/array of photos
//have main gallery which shows each folder (like blog list)
//clicking on post/folder takes you to photos page of that folder
//with one gallery item which iterates over each photo

app.get('/blogs', async(req,res) =>{
    try{
        //const result = await axios.get(blogsURLDemo +"?key="+APIkey+"&include=tags,authors");
        //const key = "22444f78447824223cefc48062";
        //const response = await axios.get("https://demo.ghost.io/ghost/api/content/posts/?key="+key+"&include=tags,authors");

        const response = await axios.get(`${config.ghostApiUrl}/ghost/api/content/posts/?key=${config.ghostApiKey}`);
        const latestPosts = [response.data.posts[0],response.data.posts[1],response.data.posts[2]]
 
        res.render("blogs.ejs",{
            latestPosts: latestPosts,
            posts: response.data.posts,
        })

    }catch{
        res.render("blogs.ejs")
        console.log("error")
    }
});

app.get('/blogs/:id', async(req,res) => {
    try{
        const id = req.params.id;
//        const response = await axios.get("https://demo.ghost.io/ghost/api/content/posts/"+id+"?key=22444f78447824223cefc48062");
        const response = await axios.get(`${config.ghostApiUrl}/ghost/api/content/posts/?key=${config.ghostApiKey}`);

        /*const response = await axios.get("")
            url=http://ghost.local:2368 node index.js*/

        console.log("here")
        res.render("blogPost.ejs",{
            post: response.data.posts
        })

    }catch{
        res.render("blogPost.ejs")
        console.log("error")
    }
});


app.get('/photos', (req,res) => {
    const events = fs.readdirSync(__dirname + "/" +"public" + "/" +"photos");
    var firstPhotos = [];

    for(var i in events) {
        var event = events[i]
        var firstPhoto = fs.readdirSync(__dirname + "/" +"public" + "/" +"photos"+"/"+event)
        firstPhotos.push(firstPhoto[0])
     };

    res.render("photos.ejs",{
            events: events,
            firstPhotos: firstPhotos
        })
});

//sort out CSS
//can you get a text file with say the photographers name
//or info on the event? yes but it breaks if it doesn't exist
app.get('/photos/:events', (req,res) =>{
    const photos = fs.readdirSync(__dirname + "/" +"public" + "/" +"photos"+"/"+req.params.events);

    res.render('eventphotos.ejs',{
        event: req.params.events,
        photos: photos
    })
});

//add an ejs for clicking on a photo

app.get('/plan-your-visit', (req,res)=>{
    res.render('planVisit.ejs')
});

app.get('/history', (req,res)=>{
    res.render('history.ejs')
});


app.get('/usefullinks', (req,res)=>{
    res.render("usefullinks.ejs")
});



app.listen(port, () => {
    console.log("server listening on port "+port)
});