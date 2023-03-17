import {student, studentType} from "../02/02";
import {CityType, GovBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

const res = sum(3, 4)
const res2 = sum(sum(1, 2), sum(1, 3))

export const addSkill = (st: studentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function addSkill2(st: studentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function makeStudentActive(s: studentType) {
    s.isActive = true;
}

export const doesStudentLivesIn = (s: studentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovBuildingsType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (building: GovBuildingsType, staffCountFire: number) => {
    building.staffCount -= staffCountFire;
}

export const toHireStaff = (building: GovBuildingsType, staffCountHire: number)=> {
    building.staffCount += staffCountHire;
}
export function createMessage(props: CityType) {
    //return "Hello, " + props.title + " citizens. I want you be happy. All " + props.citizenNumber + " men."
    return `Hello, ${props.title} citizens. I want you be happy. All ${props.citizenNumber} men.`
}