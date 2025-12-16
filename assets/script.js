var button = document.querySelector("button");
      button.onclick = function() {
        alert("External");
      }

var a = 1;
var b = 2;
var c = 1, D = 4;
var d = a + b;
var fullName = "Than Tien Dung"

console.log(d);
console.log(fullName);

if (a > b ) {
    console.log("a lớn hơn b");
} else {
    console.log("a nhỏ hơn hoặc bằng b")
}

if (a == b) console.log("a bằng b");
if(a != b) console.log("a không bằng b");
if (a == b && a == c) console.log("a = b = c");
if (a == b || a == c) console.log("a = b hoặc a = c");
    
var T = true;
var F = false;

console.log(T);
console.log(!F);


// 1. Function
function sum(a, b) {
	   alert(a + b);
	}
sum(10, 20);

// 2. Object

var infoUser = {
    name: 'A',
    age: 18,
    email: "A@gmail.com",
}

console.log(infoUser);
console.log(infoUser.age);

// 3. Array

var listUser = [
    "A", "B", "C",
    function avg(a, b) {
        return ( (a + b ) / 2);
    }
]

console.log(listUser);
console.log(listUser[1]);
console.log(listUser[3](10,20));

console.log(listUser.length);

// Thêm vào array
listUser.sum = function(a,b) {
    alert(a+b);
}

listUser.sum(6,8);
listUser.age = 18;

console.log(listUser);
console.log(listUser.length);







