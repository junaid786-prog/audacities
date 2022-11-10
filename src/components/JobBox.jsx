import React from "react"
import { Link } from "react-router-dom"

const JobBox = ({
    title,
    description,
    responsibilities,
    qualification,
    capabilities,
}) => {
    // title === "Director of Sales" && console.log(title, responsibilities[0].length)
    console.log(title, responsibilities)
    return (
        <div className="job_box">
            <div className="job_section_1">
                <div className="job_title">
                    <p>{title}</p>
                </div>
                <div className="apply_btn">
                    <a href='#jobform'><button>Apply</button></a>
                </div>
            </div>
            <div className="job_section_2">
                <div className="job_about">
                    <p className="p_10 f_bold">ABOUT JOB</p>
                    <p className="p_10">{description}</p>
                </div>
                <div className="job_requirements p_10">
                    <p className="p_10 f_bold">Requirements</p>
                    <p className="p_10">
                        {responsibilities.map((res, index) => {
                            return <li key={index}>{res}</li>
                        })}
                    </p>
                </div>
                <div className="job_requirements p_10">
                    <p className="p_10 f_bold">Qualifications</p>
                    <p className="p_10">
                        {qualification.map((res, index) => {
                            return <li key={index}>{res}</li>
                        })}
                    </p>
                </div>
                <div className="job_requirements p_10">
                    <p className="p_10 f_bold">Capabilities</p>
                    <p className="p_10">{capabilities}</p>
                </div>
            </div>
        </div>
    )
}

export default JobBox
