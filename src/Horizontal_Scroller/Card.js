import React from 'react'
import Horizontal from './Horizontal'
import style from './Horizontal.module.css'

export default function Card() {
    const cardProfile = [{
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
        name: "Krushna Gaikwad",
        designation: "Project Manager @ Google india",
        experience: "3 Years"
    }
        , {
        image: "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
        name: "Manish Tinkhede",
        designation: "Project Manager @ Google india",
        experience: "4 Years"
    }
        , {
        image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        name: "Mayur Gujar",
        designation: "Project Manager @ Google india",
        experience: "4 Years"
    }
        , {
        image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        name: "Pratik Wane",
        designation: "Project Manager @ Google india",
        experience: "4 Years"
    }]
    return (
        <>
            <div className={style.aboutMentors}>
                <h1>Know Your Mentors</h1>
                <p>Work with a mentor(senior data scientists from top companies) who closely looks at your progress, gives you personalized feedback and helps and helps you fill gaps in your knowledge</p>
            </div>
            <div className={style.mentors}>
                {cardProfile.map((data) => {
                    return (
                        <Horizontal image={data.image} name={data.name} designation={data.designation} experience={data.experience} />
                    )
                }
                )}
            </div>
        </>
    )
}
