//generic으로 선수만들기
type Player<P> = {
  name: string;
  extraInfo: P;
};

//방법 1
const Youngeun: Player<{ favFood: string }> = {
  name: "Youngeun",
  extraInfo: {
    favFood: "bulldak",
  },
};

//방법 2
type MinjiExtra = {
  Mbti: string;
};
type MinjiPlayer = Player<MinjiExtra>;
const Minji: MinjiPlayer = {
  name: "Minji",
  extraInfo: {
    Mbti: "istp",
  },
};

//방법 3
const ha: Player<null> = {
  name: "ha",
  extraInfo: null,
};
