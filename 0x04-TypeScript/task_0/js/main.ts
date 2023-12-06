interface Student {
	firstName: string
	lastName: string 
	age: number
	location: string
}

const S1: Student = {
	firstName: "Chinenye",
	lastName: "Nmoh",
	age: 33,
	location: 'Lagos',
}

const S2: Student = {
	firstName: "Ifeoma",
	lastName: "Umeaku",
	age: 23,
	location: 'Abuja',
}

const studentsList: Student[] = [S1,S2];

// create table for each student in the array
const table = document.getElementById('studentTable') as HTMLTableElement;

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});