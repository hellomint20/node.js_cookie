const express = require('express');
const cookieRouter = require('./src/routers/cookie/cookie_router');
const cookieParser = require('cookie-parser');

const sessionRouter = require("./src/routers/session/session_router");  //router 가져옴
const session = require('express-session'); //npm 가져옴
const sessionConfig = require("./config/cookie_session/config");    //config 가져옴
const bodyParser = require('body-parser');

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(cookieParser("secret")); 
app.use(session(sessionConfig.sessionConfig )); //sessionCofing 로 session 사용 선언
app.use( bodyParser.urlencoded ({extended: true}) );

app.use("/cookie", cookieRouter); 
app.use("/session", sessionRouter); 

app.listen(3000, (() => {console.log("cookie server success!!!"); }));

