const cookieConfig = {
    httpOnly : true,    //cookie 허용 여부
    maxAge : 50000,      //cokkie 허용 시간 (5초)
    signed : true       //암호화 시킴 
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

 const ser = require("../../service/cookie/cookie_service")
 const cart = (req, res) => {
    res.render("cookie/cart",{ list : ser.cart() });
 };

 //:<변수> '/' 로 경로를 만드는 경우 변수를 만들어서 받아줘야 함
 //'?' 로 경로를 만드는 경우 param으로 값을 꺼내오면 됨
    const save1 = (req, res) => {
    console.log("=== save1 ===");
    console.log("param : " + req.param("id"));
    console.log("query : " , req.query );  // { id: '1' } 출력
    console.log("params : " , req.params );  //{} 출력
    res.send("save1 연결");
 };

 const save2 = (req, res) => {
   console.log("=== save2 ===");
   let cart_list = req.signedCookies.cart_list;
   if( cart_list === undefined){
      cart_list = {};
   }
   
   cart_list = ser.save2(cart_list, req.params.goods);
   res.cookie("cart_list", cart_list, cookieConfig);

   console.log("cart_list : ", cart_list);
   console.log("param : " + req.param("goods"));
   console.log("query : " , req.query );   //{} 출력
   console.log("params : " , req.params );  //{ goods: '1' } 출력
   const msg = `<script> 
                  alert("${req.params.goods} 상품이 등록되었습니다!"); 
                  location.href = "/cookie/cart";
               </script>`;
   res.send(msg);
 };

 const viewList = (req, res) => {
   let cart_list = req.signedCookies.cart_list;
   if( !cart_list ){//cart_list === undefined
      const msg = `<script> 
                  alert("저장된 목록이 없습니다"); 
                  location.href = "/cookie/cart";
               </script>`;
      res.send(msg);
   }
   res.render("cookie/view_list", {list : ser.view_list(cart_list) });
 };
module.exports = {index, popup, quiz, quizPopup, makeCookie,cart, save1, save2, viewList};
