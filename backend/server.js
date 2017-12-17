const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json()); //axios 통신 시 필요한 구문
app.use(cors);

app.get('/', function(req,res){
    
    res.render('index', { title : '로그인 기능 구현하기' });
    
});

app.get('/login', function(req,res){
   
    console.log(req.query);
    
    res.send('이 곳은 검증 라우트 입니다.');
    
});

const user = [
    { username : 'admin' ,  userpass : '1234' },
    { username : 'front' , userpass : 'abcd' },
    { username : 'back' , userpass : 'end' }
]

app.post('/login', function(req,res){
    
    console.log(req.body);
    
    let id = req.body.username;
    let pass = req.body.userpass;
    
   // 아이디 검증
    
    let idcheck = user.filter(function(v){
       
        return id === v.username;
        
    });
    
   if ( idcheck.length > 0 ){
        
        if ( idcheck[0].userpass === pass ){
            
            res.json({ success : 1 , message : 'login success' });
            
        } else {
            
            res.json({ error : -1 , message : 'no match password' });
        }
        
    } else {
        
        res.json({ success : 2 , message : 'go to register' });
    }
});

const server = app.listen(4000);
