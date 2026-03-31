//1. 고유한 ID 값으로 검색해서 요소찾기
const users = [
    { id: 1, name: "Alice"}
    { id: 2, name: "Bob" },
    { id: 3, name: "charlie"}
];

// users 객체에서 id가 2인 요소 찾기  => console.log로 화면 출력

const findUser = users.find((value) => {
    return value.id === 2;
};
console.log(findUser);


// 2. 특정 조건을 가지고 검색
const products = [
    { name: "키보드", price: 50000},
    { name: "마우스", price: 30000},
    { name: "모니터", price: 100000 }
];
// 가격이 5만원 이상의 첫번째 상품 찾기
const foundProduct = products.find((value) => {
    return value.price >= 50000;
});
console.log(foundProduct);


// 3. 중첩된 객체에서 데이터 찾기
const teams =[
    { teamName: "A", leader: {name: "kim", age: 30 } },
    { teamName: "B", leader: {name: "lee", age: 25 } },
    { teamName: "C", leader: {name: "park", age: 35 } },
];
// 리더의 나이가 30미만의 팀찾기
const foundTeam = teams.find((value) => {
    return value.leader.age < 30;
})
console.log(foundTeam);




//4. 부분 문자열(keyword)로 검색
const posts = [
    { id: 101, title: "자바스크립트 기초" },
    { id: 102, title: "리액트 가이드" },
    { id: 103, title: "node.js 심화" },
];
// 제목에 "리액트"기 포함된 글 찾기
const foundPost = posts.find((value) => {
    return value.title.includes("가");     // string에 붙는 include() 메소드
                                            // 매개변수에 적어준 글자가 포함되어있으면 true, 아니면 false
});
console.log(foundPost);

// 5. 문자열로 시작되는 것을 검색
const document = [
    { id: "DOC_2024_01", title: "연간 보고서" },
    { id: "DOC_2024_05", title: "회의록"},
    { id: "DOC_2024_02", title: "분기 실적"}
];
// "DOC"로 id가 시작하는 첫 번째 문서 찾기   => 접두사(prefix)
const foundDoc = document.find((value) => {
    return value.id.startsWith("DOC");     // 접두사(prefix)로 시작되면 true,아니면 false
});
console.log(foundDoc);

// 6.문자열로 끝나는 항목 찾기
const files = [
    { name: "intro.mp4", type: "video" },
    { name: "main_banner", type: "image" },
    { name: "resume.pdf", type: "document" },
    { name: "logo.png", type: "image" }
];
// 파일명이 ".png" 로 끝나는 첫 번째 이미지 찾기    => 접미사(suffix)
const foundFiles = files.find((value) => {
    return value.name.endsWith(".png");
});
console.log(foundFiles);


// 7.특정 위치 이후 데이터 찾기
const warehouse = [
    { id: 101, status: "품절" },
    { id: 102, status: "입고" },
    { id: 103, status: "품절" },
    { id: 104, status: "품절" }
];
// 인덱스 2번 이상인 것들 중 "품절" 상태인 첫번째 상품 찾기
const foundWarehouse = warehouse.find((value, index) => {
        return index >= 2 && value.status === "품절";
});

// 8.
const inventory = [
    { name: "볼펜", category: "문구", stock: 5},
    { name: "노트", category: "문구", stock: 0},
    { name: "키보드", category: "전자", stock: 10},
    { name: "마우스", category: "전자", stock: 2}
]

// "전자" 제품중에서 재고가 5개이상이며 이름이 2글자 초과하는 첫번째 상품 찾기
const result = inventory.find((value) => {
        return value.category === "전자" && value.stock >= 5 && value.name.length > 2;
});

// "전자" 제품 중에서 재고가 5개이상이거나 이름이 2글자 초과하는 상품 찾기
const result2 = inventory.find((value) => {
        return value.category === "전자" && (value.stock > 5 || value.name.length > 2);
});