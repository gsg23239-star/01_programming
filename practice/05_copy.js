var num1 = 10;
var str1 ="hello"
var bool1 = true;

var pCopy = num1;
var pCopt = str1;
var pcopy3 = bool1


// 참조 자료형인 녀석들은 복사할 때 신경써줘야 함
// 실제로 heap 메모리 영역에 저장되는 값은 실제 값이 아니라 "주소값이기 때문.
//실제 값은 stack 메모리 영역에 건물을 짓고 저장됨

var originalUser = {
    name: "김철수",
    age: 4,
    sex: "male",
};
var sCopyUser = originalUser;   // originalUser의 값을 복사해서 sCopyUser에게 복사하는데, 이 "값" 은 "주소값"
                                    // 얕은 복사(swallow copy)
originalUser.name = "홍길동";
console.log(sCopyUser.name);

var dCopyUser = {       // 객체를 새로 만들고, 그안의 값을 복사해주는 복사
    name: originalUser.name,                        // 깊은 복사    (deep copy)
    age: originalUser.age,
    sex : originalUser.sex,
}

originalUser.name = "율곡이이";
console.log(`originalUser.name', ${originalUser.name}`);
console.log(`dCopyUser.name', ${dCopyUser.name}`);


var dcopyuser2={
    ...originalUser,    // ... 문법(스프레드 문법, spread) : originalUser 변수안에 있는 프로퍼티를 나열하겠다
};


var oUser = {
    name: "김철수",
    age: 25,
    address: {
        city: "서울"
        zipCode: "04524",
    },
};

var duser2={
    ...oUser2,
}
//  스프레드 문법만 써서 사용하면 아래과 같은 결과가 됨 => 즉, 프로퍼티가 객체면 걔도
// var dUser2 = {
//     name: oUser2.name,
//     age: oUser2.age,
//     address: oUser.address,
// };



oUser2.address.city = "안산시"
console.log(`dUser2.address.city는 ${duser2.address.city}입니다.`);

// oUser2에 대해 깊은 복사를 하려면 아래와 같이 작성
var dUser ={
    ...oUser2,
    address: {
        ...oUser2.address,
    }
}
var dUser3={
    name: oUser2.name,
    age: oUser2.age,
    address: oUser2.address,
    address: {
        ...oUser2.address,  // 객체 안에 동일한 key를 갖고 있는 프로퍼티가 있다면, 덮어쓰기됨
    }
};