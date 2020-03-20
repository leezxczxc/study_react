import React from 'react'

export type Person = {
    name: String
}


const MyComponents: React.FC<Person> = (person: Person) => {
    return <div>Hello, {person.name}</div>
}

export default MyComponents