const cookieConfig = {
    httpOnly : true,    //cookie 허용 여부
    maxAge : 5000       //cokkie 허용 시간 (5초)
}

const index = (req, res) => {  
    //사용자로부터 cookie를 가져올건데 이름이 myCookie면 가져와라
    let userCookie = req.cookies.myCookie;  //최초로 요청하면 값이 없음 ==> 새로고침하면 쿠키값을 가져옴

    res.cookie("myCookie", "valueCookie", cookieConfig);
    res.render('cookie/cookie01',{userCookie});
};

const popup = (req, res) => {  
    res.render("cookie/popup");
};

const quiz = (req, res) => { 
    const userCookie = req.cookies.myCookie;
    res.render("cookie/quiz", {userCookie});
 };

 const quizPopup = (req, res) => {
    res.render("cookie/quizPopup");
 };

 const makeCookie = (req, res) => {
    res.cookie("myCookie", "value", cookieConfig);
    res.render("cookie/quizPopup");
 };

module.exports = {index, popup, quiz, quizPopup, makeCookie};