class Student {
    constructor(name) {
        this.studentID = this.generateStudentID();
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }
    generateStudentID() {
        return Math.floor(10000 + Math.random() * 90000).toString();
    }
    enroll(course) {
        this.courses.push(course);
    }
    viewBalance() {
        return this.balance;
    }
    payTuition(amount) {
        this.balance -= amount;
    }
    showStatus() {
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`You have $${this.balance} in your account`);
    }
}
export { Student };
