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

function clean(a: (number | string)[]) {
  let cleaning: number[] = [];

  a.forEach((b) => {
    if (typeof b === "string") {
      cleaning.push(parseFloat(b));
    } else {
      cleaning.push(b);
    }
  });
  return cleaning;
}

console.log(clean([12334, "5"]));

function teach(sub: { subject: string | string[] }) {
  if (typeof sub.subject === "string") {
    return sub.subject;
  } else if (Array.isArray(sub.subject)) {
    return sub.subject[sub.subject.length - 1];
  } else {
    return "없음";
  }
}

console.log(teach({ subject: ["math", "science"] }));

type A = { x: number };
type B = { y: number };
type AB = A & B;
let ab: AB = { x: 1, y: 2 };

type Mytype = { color?: string; size: number; readonly position: number[] };

type 개인정보 = { name: string; phone: number; email: string };
type 미성년자 = { name: string; phone: number; email: string; 미자: boolean };
