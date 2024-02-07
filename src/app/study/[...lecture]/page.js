import React from 'react'

export default function Lecture({ params }) {

    return (
        <div>
            <h1>day of college : {params.lecture[0]}</h1>
            <h3>No. of lecture : {params.lecture[1]}</h3>

        </div>
    )
}
