var Car = /** @class */ (function () {
    function Car(m, c, e, w, t) {
        this.model = m;
        this.color = c;
        this.engine = e;
        this.wheels = w;
        this.trackerNumber = t;
    }
    //method
    Car.prototype.getCarData = function () {
        console.log(this.model, this.color, this.engine, this.wheels, this.trackerNumber);
    };
    return Car;
}());
var mehran = new Car("Mehran", "Black", "800cc", 4, 555);
var civic = new Car("Civic", "White", "1800cc", 4, 444);
var landrover = new Car("Landrover", "Red", "1800cc", 4, 333);
console.log(mehran.model);
console.log(civic.color);
console.log(landrover.wheels);
civic.getCarData();
var Animals = /** @class */ (function () {
    function Animals(n, f, p) {
        (this.name = n), (this.food = f);
        this.isPet = p;
    }
    Animals.prototype.getData = function () {
        console.log(this.name, this.food, this.isPet);
    };
    return Animals;
}());
var Lion = new Animals("Lion", "meat", false);
var Cat = new Animals("Cat", "Milk", true);
var Goat = new Animals("Goat", "Grass", true);
var Bear = new Animals("Bear", "Grass/flash", false);
console.log(Lion);
console.log(Cat);
console.log(Goat);
console.log(Bear);
Cat.getData();
var Student = /** @class */ (function () {
    function Student(name, fname, rNum, sub, cls, day, time, feePaid) {
        this.fullName = name;
        this.fatherName = fname;
        this.rollNumber = rNum;
        this.subject = sub;
        this.class = cls;
        this.day = day;
        this.timing = time;
        this.isFeePaid = feePaid;
    }
    Student.prototype.getStudentData = function () {
        console.log(this.fullName, this.fatherName, this.rollNumber, this.subject, this.class, this.timing, this.day, this.isFeePaid);
    };
    return Student;
}());
var Ali = new Student("Sana Parveen", "Iqbal Khan", 123, "TypeScript", 2, "Wednesday", 8, true);
var Erum = new Student("Erum Jahan", "Mansoor Ali", 456, "TypeScript", 3, "Thursday", 2, false);
Erum.getStudentData();
