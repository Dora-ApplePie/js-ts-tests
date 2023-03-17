import {studentType} from "../02/02";
import {addSkill, doesStudentLivesIn, makeStudentActive} from "./03";

let student: studentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Daria",
        age: 21,
        isActive: false,
        address: {
            streetTitle: "Rokossovskogo, 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            }, {
                id: 2,
                title: "CSS"
            }, {
                id: 3,
                title: "React"
            },

        ]
    }
})
test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})

test("Student should be made active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})

test("Does student live in city?", () => {

   let result1 = doesStudentLivesIn(student, "Moscow");
   let result2 = doesStudentLivesIn(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})