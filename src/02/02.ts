export type studentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: addressType,
    technologies: Array <techType>
}

type addressType = {
    streetTitle: string,
    city: localCityType
}

type localCityType = {
    title: string,
    countryTitle: string,
}

type techType = {
    title: string,
    id: number,
}

export const student = {
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

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)
