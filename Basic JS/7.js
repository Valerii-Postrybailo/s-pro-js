// Реалізуйте програму, яка симулює роботу університету.
// Мінімально повинні бути присутні наступні класи: Student, Teacher, University.
// Реалізуйте їх взаємодію.

class University {
  students = [];
  teachers = [];

	constructor(options) {
    this.name = options.universityName;
    this.address = options.universityStreet;
	}

  showUniInfo () {
    console.log('University name: ' + this.name);
    console.log('University address: ' + this.address);
  }

  addTeacher(teachers) {
    this.teachers.push(teachers);
  }

  showTeachers () {
    console.log("Teachers:", this.teachers);
  }

  addStudent (student) {
    this.students.push(student);
  }

  showStudents () {
    console.log("Students:", this.students);
  }

// Функція яка буде показувати наслідування дочірними об'єктами. 

  showUniMembership(){
    console.log("I love my university!");
  }
}

///////////////////////////////////////////////////////////

class Teacher extends University {
  
  constructor (options){
    super(options)
      this.teacherName = options.teacherName;
      this.subject = options.subject;
  }

  teacherInfo (){
    console.log( "Teacher name:",this.teacherName);
    console.log( "Subject name:", this.subject);

  }

  // Функція приймає імя студента і перевіряє чи існує такий студент взагалі (у списку) на випадок якщо той ніколи не ходив на пари)

  giveMark(student){
    if (this.students.includes(student)){
      console.log("Teacher can give a mark for this student!")
      return true;
    } else { 
      console.log("Sorry, teacher don't know who it is...")
      return false;
    }
  }

  addStudent(student) {
    this.students.push(student);
  }
  
}

/////////////////////////////////////////////////////////

class Student extends University {
  marks = 0;

  constructor(options){
    super (options)
      this.studentName = options.studentName;
  }

  showStudentName(){
    console.log("Student name:", this.studentName);
  }

  showMark(){
    console.log("Student mark:", this.marks);
  }
}

console.log("///////////////////  Info about university /////////////////////////")

const vdpu = new University({
  universityName : "ВДПУ",
  universityStreet : "вул. Острозького 32",
})

vdpu.showUniInfo();

vdpu.addTeacher("Alan Walker");
vdpu.addTeacher("Oleg Darko");

vdpu.showTeachers();

vdpu.showStudents();

console.log("//////////////////  Info about teacher ////////////////////");

const teacher1 = new Teacher({
  teacherName: "Valerii",
  subject: "History",
})

teacher1.teacherInfo();
teacher1.showUniMembership();


console.log("//////////////////  Info about student  ////////////////////");


const student1 = new Student({
  studentName: "Oleg"
})

// Ми створили студента Олега і добавили його до списків універу і вчителя, перевірили список та інформацію про студента.

vdpu.addStudent(student1.studentName)
teacher1.addStudent(student1.studentName);

vdpu.showStudents();

student1.showStudentName();

// Тут ми викликаємо метод вчителя по виставленню оцінкох, закидаючи в нього ім'я студента, якщо вчитель знайде такого студента то поставить йому 10. 

if (teacher1.giveMark(student1.studentName)){
  student1.marks += 10;
}

student1.showMark();
student1.showUniMembership();


