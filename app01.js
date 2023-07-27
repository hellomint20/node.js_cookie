const express = require('express');
const cookieRouter = require('./src/routers/cookie/cookie_router');
const cookieParser = require('cookie-parser');

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(cookieParser()); 
app.use("/cookie", cookieRouter); 

//웹 통신할 때 쿠키 사용 가능

app.listen(3000, (() => {console.log("cookie server success!!!"); }));

