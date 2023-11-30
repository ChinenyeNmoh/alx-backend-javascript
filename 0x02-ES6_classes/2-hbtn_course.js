export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    if (Array.isArray(students) && students.every((i) => typeof i === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(newLen) {
    if (typeof newLen === 'number') {
      this._length = newLen;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStu) {
    if (Array.isArray(newStu) && newStu.every((i) => typeof i === 'string')) {
      this._students = newStu;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
