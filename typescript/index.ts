let 이름: string = "kim";
let 나이: number = 18;
let 출생지역: string = "부산광역시";
let 생일: string = "0113";

let obj: { singer: string; song: string } = { singer: "태연", song: "to X" };

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: false,
};

let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: "123" };

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: { score: number[]; teacher: string; friend: string } = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};

function 입력(x?: string) {
  if (x) {
    console.log("안녕" + x);
  } else {
    console.log("입력 없음");
  }
}
