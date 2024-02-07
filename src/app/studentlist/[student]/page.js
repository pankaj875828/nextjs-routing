import React from 'react'

export default function StudentDetail({ params }) {
    return (
        <div>
            <h1>Student Detail Pages</h1>
            <h3>Name: {params.student}</h3>
        </div>
    )
}
