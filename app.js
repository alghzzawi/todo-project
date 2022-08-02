var usermsg = confirm("Do you want to skip the message")
if(usermsg == false){
    alert("Welcome to my page")
}

var userName = prompt("What's your name?")

var gender = prompt('what is your gender')
if (gender == 'female') {
    var genderNickName = "Ms "
    
} else if (gender == 'male') {
  var genderNickName = "Mr "
}
else{
    var genderNickName = "Mr "
}

alert('welcome ' + genderNickName + userName)


var age = prompt("What's your age?")
if (age <= 0){
    alert("no age less or equle 0")
}

var music = prompt("do you like music")
if(music === ''){
    alert("Invalid");
}
var arr =[];
arr.push(music);
var play = prompt("do you like play footbol")
if(play === ''){
    alert("Invalid");
}
arr.push(play);
var eat = prompt("do you like McDonald's")
if(eat === ''){
    alert("Invalid");
}
arr.push(eat);

console.log(arr);