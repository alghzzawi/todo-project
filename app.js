var usermsg = confirm("Do you want to skip the message")
if(usermsg == false){
    alert("Welcome to my page")
}

var userName = prompt("What's your name?")


while(true){
    var gender = prompt('what is your gender')
    if (gender === 'female') {
        var genderNickName = "Ms "
        break;
    } else if (gender === 'male') {
        var genderNickName = "Mr "
        break;
    }
    else{
        var genderNickName = ""
    }
}

alert('welcome ' + genderNickName + userName)



var age = prompt("What's your age?")
while(age <= 0){
    alert("your age must be greater than 0")

    age = prompt("What's your age?")
}


var music = prompt("do you like music")
if(music === ''){
    alert("Invalid");
}
var arr =[];
arr.push(music);
var play = prompt("do you like play fotboll")
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