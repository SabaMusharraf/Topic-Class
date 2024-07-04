class Car {
  model: string;
  public color: string;
  public engine: string;
  public wheels: number;
  private trackerNumber: number;

  constructor(m: string, c: string, e: string, w: number, t: number) {
    this.model = m;
    this.color = c;
    this.engine = e;
    this.wheels = w;
    this.trackerNumber = t;
  }
  //method
  getCarData() {
    console.log(
      this.model,
      this.color,
      this.engine,
      this.wheels,
      this.trackerNumber
    );
  }
}
const mehran: Car = new Car("Mehran", "Black", "800cc", 4, 555);
const civic: Car = new Car("Civic", "White", "1800cc", 4, 444);
const landrover: Car = new Car("Landrover", "Red", "1800cc", 4, 333);

console.log(mehran.model);
console.log(civic.color);
console.log(landrover.wheels);

civic.getCarData();

class Animals {
  name: string;
  food: string;
  isPet: boolean;

  constructor(n: string, f: string, p: boolean) {
    (this.name = n), (this.food = f);
    this.isPet = p;
  }
  getData() {
    console.log(this.name, this.food, this.isPet);
  }
}
const Lion: Animals = new Animals("Lion", "meat", false);
const Cat: Animals = new Animals("Cat", "Milk", true);
const Goat: Animals = new Animals("Goat", "Grass", true);
const Bear: Animals = new Animals("Bear", "Grass/flash", false);

console.log(Lion);
console.log(Cat);
console.log(Goat);
console.log(Bear);

Cat.getData();

class Student {
    fullName: string;
    fatherName: string;
    rollNumber: number;
    subject: string;
    class: number;
    day: string;
    timing: any;
    isFeePaid: boolean

    constructor(name: string, fname: string, rNum: number, sub: string, cls: number, day: string, time: number, feePaid: boolean){
        this.fullName = name;
        this.fatherName = fname;
        this.rollNumber = rNum;
        this.subject = sub;
        this.class = cls;
        this.day = day;
        this.timing = time;
        this.isFeePaid = feePaid
    }
getStudentData(){
  console.log( this.fullName, this.fatherName,this.rollNumber,this.subject,this.class,this.timing,this.day,this.isFeePaid);
}
}
const Ali = new Student("Sana Parveen", "Iqbal Khan", 123, "TypeScript", 2, "Wednesday", 8, true);
const Erum = new Student("Erum Jahan", "Mansoor Ali", 456, "TypeScript",3, "Thursday", 2, false);

Erum.getStudentData();