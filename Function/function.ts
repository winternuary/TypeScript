type Add = (a: number, b: number) => number; //call signature

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

const add3: Add3 = (a, b) => a + b; // b가 number 일수도 string 일수도 있기때문에 if로 걸러주어야함

//파라미터의 개수가 다를 때?
type Add4 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add4: Add4 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
}; //c는 아마도 number일 것이다 라는 의미(선택사항, 옵션)
//c가 적용 되었을 때의 상황도 만들어 주기
