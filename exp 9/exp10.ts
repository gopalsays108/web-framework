class product {
  pid: number;
  pname: string;
  price: number;
  pdate: string;

  set(pid: number, pname: string, price: number, pdate: string) {
    this.pid = pid;
    this.pname = pname;
    this.price = price;
    this.pdate = pdate;
  }

  getPid() {
    return this.pid;
  }

  getPname() {
    return this.pname;
  }

  getPrice() {
    return this.price;
  }

  getPdate() {
    return this.pdate;
  }

  add(): (string | number)[] {

    let all: (string | number)[] = new Array();
    all.push(this.getPid());
    all.push(this.getPname());
    all.push(this.getPrice());
    all.push(this.getPdate());

    return all;

  }
}

const pdt = new product();
pdt.set(101, "Harshit", 0.0, "6/9/2069");
console.log(pdt.add());