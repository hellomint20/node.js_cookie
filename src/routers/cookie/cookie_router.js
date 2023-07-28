const express = require('express');
const ctrl  = require('../../controller/cookie/cookie_ctrl');
const router = express.Router();

router.get('/', ctrl.index);
router.get('/popup', ctrl.popup);
router.get('/quiz', ctrl.quiz);
router.get('/quiz_popup', ctrl.quizPopup);
router.get('/makeCookie', ctrl.makeCookie);
router.get('/cart', ctrl.cart);
router.get('/save1', ctrl.save1);
router.get('/save2/:goods', ctrl.save2);
                //:<변수> '/' 로 경로를 만드는 경우 변수를 만들어서 받아줘야 함
                //'?' 로 경로를 만드는 경우 param으로 값을 꺼내오면 됨
router.get('/view_list', ctrl.viewList);

module.exports = router;
