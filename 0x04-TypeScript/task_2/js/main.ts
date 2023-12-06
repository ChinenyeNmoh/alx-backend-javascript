interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return `Working from home`
    }
    getCoffeeBreak(): string {
        return `Getting a coffee break`
    }
    workDirectorTasks(): string {
        return `Getting to director tasks`
    }
        
}
class Teacher implements TeacherInterface {
    workFromHome() :string {
        return `Cannot work from home`
    }
    getCoffeeBreak(): string {
        return `Cannot have a break`
    }
    workTeacherTasks(): string {
        return `Getting to work`
    }
        
}

const createEmployee = (salary: string | number): Director | Teacher=> {
    if(typeof salary === 'number' && salary < 500){
        return new Teacher();
    }
    return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

const isDirector = (employee: Director | Teacher): boolean => {
    return employee instanceof Director;
}

const executeWork = (employee: Director | Teacher) : string => {
    if(employee instanceof Director){
        return employee.workDirectorTasks()
    }else{
        return employee.workTeacherTasks()
    }
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    } else {
        return 'Unknown subject';
    }
};

console.log(teachClass('Math'));
console.log(teachClass('History'));



