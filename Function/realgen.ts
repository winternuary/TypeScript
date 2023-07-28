//generic 사용
function Arr<T>(a: T[]) {
  return a[0];
}

const a = Arr<number>([1, 2, 3, 4]); //직접 적어줄 수도 있음(선택)
const b = Arr([true, false, true]);
const c = Arr(["a", "b", "c"]);
const d = Arr([1, true, "하"]);
