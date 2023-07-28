type Add = (a: number, b: number) => number; //call signatur

//->
type Add2 = {
  (a: number, b: number): number; // 오버로딩 때문에 이러한 방법도 존재
};

const add: Add = (a, b) => a + b;

//overloading
// 함수가 "서로다른" 여러 개의 call signatures를 가지고 있을 때 발생시킴

//예시
type Add3 = {
  (a: number, b: number): number; // 오버로딩 때문에 이러한 방법도 존재
  (a: number, b: string): number;
};

const add3: Add3 = (a, b) => a + b;
