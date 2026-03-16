var score= 95;

// if 문
if (score >= 90) console.log("합격입니다!");

if (score < 90) console.log("불합격입니다.");

// if-else 문

if (score >= 90) {
    console.log("합격입니다!");
} else {
    console.log("불합격입니다!");
}


var age= 15;

if (age >= 19) {
    console.log("성인입니다");
}
if (age >= 13 && age < 19) {
    console.log("청소년입니다");
}
if (age < 13) {
    console.log("어린이입니다");
}

if (age >= 19) {
    console.log("성인입니다");
} else if (age >= 13 && age < 19) {
    console.log("청소년입니다");
} else {
    console.log("어린이입니다");
}

var dustLevel= 120; // 미세먼지 수치

if (dustLevel > 150) {
    console.log("경고");
} else if (dustLevel > 80) {
    console.log("주의");
}

if (dustLevel > 80) {
    if (dustLevel > 150) {
        console.log("경고");
    } else {
        console.log("주의")
    }
}


switch (true) {
    case dustLevel > 150:
        console.log("경고");
        console.log("마스크를 꼭 착용해주세요");
        break;
    case dustLevel > 80:
        console.log("주의")
}

var fruit= "banana";

switch (fruit) {
    case "apple":
        console.log("사과입니다.");
    case "banana":
        console.log("바나나입니다.");
    case "melon":
        console.log("멜론입니다.");
}

var day= "수요일";

switch (day) {
    case "월요일":
    case "화요일":
    case "수요일":
    case "목요일":
    case "금요일":
        console.log("평일입니다. 학원에 나오세요.");
        break;
    case "토요일":
    case "일요일":
        console.log("주말입니다. 휴식하세요.");
        break;
}

var color= 2;

switch (color) {
    case 1:
        console.log("빨간색");
        break;
    case 2:
        console.log("주황색");
    case 3:
        console.log("노란색");
        break;
    default:
        console.log("모르겠어요");
    case 5:
        console.log("파란색");
}


for (var i= 0; i <= 3; i++) {
    console.log(i + "출력");
    if (i == 2) {
        break;
    }
}

for (var i= 0; i <= 3; i++) {
    console.log(`이 사이클은 ${1} 사이클`)
    if (i == 2) {
        continue;
    }
    console.log(i + "출력");
}

for (var i= 1; ;i++) {  // 조건식을 생략할 수 있음 -> 무한루프
    console.log(i);
    if (i > 100) {
        break;
    }
}
var num= 5;
for (;;) {  // 아예 다 생략 가능하지만, 자릿수는 지켜줘야 함
        if (num== 5) {
            break;
        }
}

for (var i= 2; i <= 9; i++) {
    // i가 2일 때부터, 9일 때 까지 반복작업 => 10인 사이클에서 탈락
    for (var j= 2; j <= 9; j++) {
        // j가 2일 때부터, 9일 때 까지 반복작업 => 10인 사이클에서 탈락
        console.log(`${i} * ${j} = ${i * j}`)
    }
}