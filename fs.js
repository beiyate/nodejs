'use strict'

var fs=require('fs');
//read txt
/*fs.readFile('sample.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});*/

//Async read binray files,需要data的回调参数
/*fs.readFile('sample.png',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length+'bytes');
    }
});

//sync read text files
'use strict';

var fs = require('fs');

var data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);


try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
}*/


//async write files
'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
