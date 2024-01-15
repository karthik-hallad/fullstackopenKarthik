import React from 'react'

export default function Course({ courses }) {
    console.log(courses)
    let sum = 0;
    return (
        <div id={courses.id}>
            <h2> Web Development Curriculum</h2>
            {
                courses.map(course => {
                    // divide each course into parts
                    // first we will render the complete course id then focus on rendering list of coursses seperately
                    //for this we use map hence a jaavascript code to return a list of stuff
                    // finally we need to preprocess stuff, for this we can write reduce logic before to get total and load it there seprately
                    let total = 0;
                    {
                        total = course.parts.reduce((total, part) => {
                            return total += part.exercises
                        }, 0)
                    }
                    return (
                        <div id={course.id}>
                            <h2>{course.name}</h2>
                            {
                                course.parts.map((part) => {
                                    console.log(total)
                                    return (
                                        <div id={part.id}>
                                            <p>{part.name} {part.exercises} </p>
                                        </div>
                                    )
                                })
                            }

                            < p > Total is {total}</p>
                        </div>

                    )
                })
            }


        </div >
    )
}
