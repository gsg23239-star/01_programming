//1.1부터 20사이의 숫자 중 홀수만 출력하세요
for (var i=1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log("홀")
    } else {
        console.log(i);
    }
}

//2. 구구단 중 3단을 출력하세요
for (var i = 1; i <= 9; i++) {
    console.log(`3 * ${j} = ${3 * i}`);
}

//3.1부터 100까지의 숫자 중 짝수의 합을 구하세요
var sum= 0;
for (var i=1;i <=100; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
console.log(sum);

//4.. var str = "javascript" 를 역순으로 출력하세요
var str = "javascript"
for (var i=str.length - 1; i >= 0;i--) {
    result = result + str[i]);
} //str.length = 10
console.log(result)



//5.1부터 100까지의 숫자 중 4의 배수가 몇개인지 구하세요
var count = 0;
for (var i=1;i <=100; i++) {
    if (i % 4 === 0)
        count++;
    }
}
console.log(count);