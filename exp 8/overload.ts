function add(a: string, b: string): void;
function add(a: number, b: number): void;

function add(a: any, b: any): void {
  console.log(a + " " + b);
}

add("a", "b");
add(1, 2);