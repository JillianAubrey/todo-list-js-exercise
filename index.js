class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  logState() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
  }
  markCompleted() {
    this.complete = true;
  }
}


const task1 = new Task("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = new Task("Do Laundry", "😨");

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
