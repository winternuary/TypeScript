class Info {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `안녕하세요, 저는 ${this.name}이고 ${this.age}살입니다.`;
  }
}

const me: Info = new Info("김영은", 18);
console.log(me.introduce());
