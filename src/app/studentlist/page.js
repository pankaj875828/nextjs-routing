import Link from 'next/link'
import React from 'react'

const studentList = [
    {
        "id": 1,
        "name": "John_Doe",
        "age": 18,
        "grade": "A",
        "courses": ["Mathematics", "English", "Science"]
    },
    {
        "id": 2,
        "name": "Jane_Smith",
        "age": 17,
        "grade": "B",
        "courses": ["History", "Spanish", "Art"]
    },
    {
        "id": 3,
        "name": "Bob_Johnson",
        "age": 19,
        "grade": "C",
        "courses": ["Physics", "Chemistry", "Computer Science"]
    },
    {
        "id": 4,
        "name": "Alice_Brown",
        "age": 18,
        "grade": "A",
        "courses": ["Biology", "French", "Physical Education"]
    },
    {
        "id": 5,
        "name": "Charlie_Wilson",
        "age": 17,
        "grade": "B",
        "courses": ["Geography", "Music", "Mathematics"]
    }
]

export default function Studentlist() {
    return (
        <div>
            <h1>Student list</h1>
            <br /><br />
            <ul>
                {studentList.map((student)=>{
                    return <li key={student.id}>
                        <Link href={`/studentlist/${student.name}`}>{student.name}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
}
