for (var i=1;i <= 20; i++) {
    if (i % 3 === 0) {  //3의 배수일때
    console.log("짝")
    } else {
        console.log(i);
    }
}





// 1사이클 => i = 1 => sum 1
// 2사이킁 => i = 2 => sum +2 = 3
// 3사이킁 => i = 3 => sum +3 = 6
for (var i=1; i <= 100; i++) {
    sum = sum + i;
    if (합계 >= 500) {
        console.log(합계);
        break;
    }
}


for (var i=10; i >= 1; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



for (var i=10; i >= 10; i++) {
    if (i ==7 ) {
        continue;
    }
    console.log(i);
}


var text= "javacript is powerful and fun!"  //31글자 -> 1부터 31글자까지 있다.
var result=0;   //"o"를 만났을 때 갯수 카운팅을 할 변수


for (var i=0; i < text.length; i++) {
    if(text[i] === "o") {
        result = result + 1;
    }
}