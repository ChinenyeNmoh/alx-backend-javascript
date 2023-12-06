interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): void
  }

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): void => {
    console.log(`${firstName.slice(0,1)}. ${lastName}`)
}

printTeacher("John", "Doe");

// Interface for the StudentClass methods
interface StudentClassFace {
    workOnHomework() : string
    displayName() : string
}


// Interface for the constructor of the StudentClass
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}


class StudentClass implements StudentClassFace {
    private _firstName: string;
    private _lastName: string;
    constructor(firstName: string, lastName: string) {
        this._firstName = firstName
        this._lastName = lastName
    }
    workOnHomework() : string {
        return `Currently working`
    }

    displayName() : string {
        return `${this.firstName}`
    }
}
