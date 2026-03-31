const arr =["cookie", "snack"];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {     // 조건식 : i < arr.length => i < 2
    console.log(arr[i]);
}

arr[2] = "juice";       // 새로운 값을 추가하는 것 맞는데, 이 방식은 "값의 수정" 을 할 때만 이용
console.log(arr);

arr.push("cola", "water");     // push() 메소드는 ,배열의 마지막에 값을 추가할 수있음. 매개변수에 1개 이상을 쓸 수 있음
                                // push()를 실행한 결과값 (리턴값)은 해당 배열의 길이(length)가 반환
console.log(arr);

arr.pop();                     // pop() 메소드는 매개변수가 없음
                                // 배열의 마지막에 있는 요소를 빼는 기능, 실행 결과값 (리턴값)은 해당 요소의 값을 반환
console.log(arr);



// 망약, 마지막이 아니라 중간에 값을 추가하고 싶으면? 아니면 중간에 값을 빼고 싶으면?
// 그럴 경우엔 배열을 새로 만들어서 덮어써야 함 => 자동으로 할 수 있게 만든 메소드들이 있음
arr.unshift()     // 맨 앞에 요소를 추가
console.log(arr);

arr.shift();            // 맨 앞에 요소를 삭제


// splice(시작인덱스, 삭제할 갯수, 추가할 요소)
// splice(2, 1, "Cherry") => 인덱스 2부터 1개의 요소를 삭제하고, 그 자리에 "cherry"를 넣겠다
// splice(1, 4, "Cherry", "Mango", "Apple") => 인덱스 1부터 4개의 요소를 삭제하고, 그자리에 3가지를 넣겠다
// splice(3, 2)     => 인덱스 3부터 2개의 요소를 삭제
// splice(2, 0, "Cherry")       => 인덱스 2부터, 0개의 요소를 삭제하고, "cherry"를 넣겠다
// splice(0, 0, "Cherry")       => 인덱스 0부터, 0개의 요소를 삭제하고, "cherry"를 넣겠다

// splice(arr.length - 1, 0, "cherry") =>마지막 자리에, 삭제는 안하고, "cherry"를 넣겠다

Array.isArray(arr)          // 집어넣을 변수(값)가 배열인지 아닌지 => true, false
if (Array.isArray(arr)) {
    console.log(arr.length);
}

const a = [1, 2, 3];


// forEach() 메소드는, 각 배열을 순회하면서 함수(기능)을 실행시키는 메소드
// 매개변수로는 함수 1개만 씀
// 함수 : (매개변수 : 그 요소가 받아짐) => {}
a.forEach(
    (value) => {
        console.log(value);
    }
);


const b = ["abc", "cookie", "snack"];
b.forEach(
    (value) => {      // 매객변수는 현재 순회하는 "그" 요소를 받아주어야 함수에서 처리가 가능함
        //실제 실행되어야 하는 함수 몸통
        console.log("snack");
    }
)

// add라는 함수를 실행시킬 때, 첫 번째 자리에 들어오는 값을 x라고 내가 부르겠다. 두번째 자리에 들러오는 값을 y라고 내가 부르겠다
function add(x, y) {
    return x + y;
}

b.forEach((eee) => {
        console.log(eee);
    })
//  요소의 합계를 구하는 예제
const prices = [1500, 3000, 500, 2000];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    sum = sum + prices[i];
}
// i = 0 => 부모가 갖고 있는 sum = 0 => 0 + prices[0] = 1500 => 부모가 갖고 있는 sum을 1500으로 바꿈
// i = 1 => 부모가 갖고 있는 sum = 1500 => 1500 + prices[1] = 1500 + 3000 => 부모가 갖고 있는 sum을 4500으로 바꿈
// i = 2 => 부모가 갖고 있는 sum = 4500 => 4500 + prices[2] = 4500 + 500 => 부모가 갖고 있는 sum을 5000으로 바꿈
// i = 3 => 부모가 갖고 있는 sum = 5000 => 5000 + prices[3] => 5000 + 2000 => 부모가 갖고 잇는 sum을 7000으로 바꿈
console.log(sum);

sum = 0;
prices.forEach(
    (value) => {
        sum = sum + value;
    }
)