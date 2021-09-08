var fs=require("fs");
//undefined

fs.mkdirSync('THA');
//undefined->create folder->nodejs has access to our system

// fs.writeFileSync("day-5-tha.txt","Hello",function(err){
//     ... if(err){
//     ..... console.log(err);
//     ..... }
//     ... });
//undefined->create file inside folder

fs.appendFileSync("THA/day-5-THA.txt","appened");
//undefined -> append content inside file

fs.readFileSync("THA/day-5-THA.txt");
//<Buffer 61 70 70 65 6e 65 64> -> data inside file but show in buffer form for performance issue

fs.readFileSync("THA/day-5-THA.txt","utf-8");
//'appened'

fs.renameSync("THA/day-5-THA.txt","THA/DAY-5.txt");
//undefined -> rename file

fs.unlinkSync("THA/DAY-5.txt");
//undefined -> delete file

fs.rmdirSync('THA');
//undefined -> delete folder

// .exit 
// to exit from nodejs

//node file_name