import React, { useState } from "react"
import Select from "react-select"
import MultiSelect from "multiselect-react-dropdown"
const options = [
    { value: "0-5", label: "0-5" },
    { value: "5-10", label: "5-10" },
    { value: "10-20", label: "10-20" },
    { value: "20-50", label: "20-50" },
]
const expectedEvents = [
    { value: "150-200", label: "150-200" },
    { value: "200-500", label: "200-500" },
    { value: "500-1000", label: "500-1000" },
    { value: "1000-5000", label: "1000-5000" },
]
const events = [
    "Venue Selection ",
    "Decor + Color Schemes",
    "Seating, Table Designs + Menus",
    "Floral + Props",
    "Sound + Music",
    "Lighting + Special Effects",
    "Visual Communications",
    "Landscape Layout",
    "High Profile Entertainment",
    "Employee Incentives",
    "Meet + Greet",
]

const production = [
    "Content + Messaging",
    "Media Production",
    "Production Management",
    "Theatrical Design + Delivery",
    "AV Specifications + Sourcing",
    "Stage Direction + Performance Coaching",

]
const activities = [
    "Sightseeing Tours",
    "Theater + Show Packages",
    "Relaxation Experiences",
    "Private Museum + Art Gallery Exhibits",
    "Guest + Spouse Programs",

]
const transportation = [
    "Private Jet Charter",
    "Executive Sedans + SUV's",
    "Party Bus",
    "Tour Bus",
    "Limousines",
    "Helicopters",

]
const PropsalForm = () => {
    const [addMember, setAddMember] = useState(false)
    const [selectedEvents, setSelectedEvents] = useState([])
    const onSelect = (option) => {
        console.log(option)
        setSelectedEvents((e) => [...e, option])
        console.log(selectedEvents)
    }
    const onRemove = (option) => {
        console.log(87271)
    }
    return (
        <div className="job_form">
            <div className="first_label">
                <p>JOIN US</p>
            </div>
            <form className="actual_form">
                <div className="">
                    <div className="input_combo">
                        <label>FIRST NAME </label>
                        <input />
                    </div>
                    <div className="input_combo">
                        <label>LAST NAME </label>
                        <input />
                    </div>
                </div>
                <div className="">
                    <div className="input_combo">
                        <label>TITLE </label>
                        <input />
                    </div>
                    <div className="input_combo">
                        <label>EVENT NAME </label>
                        <input />
                    </div>
                </div>
                <div className="">
                    <div className="input_combo">
                        <label>COMPANY EMAIL ADDRESS</label>
                        <input required={true} />
                    </div>
                    <div className="input_combo">
                        <label>Company Billing Address</label>
                        <input />
                    </div>
                </div>
                <div className="">
                    <div className="input_combo">
                        <label className="mb_10">ESTIMATED EVENTS</label>
                        <Select options={options} />
                    </div>
                </div>
                <div className="">
                    <div className="input_combo">
                        <label className="mb_10">EXPECTED ATTENDEES</label>
                        <Select options={expectedEvents} />
                    </div>
                </div>
                <div className="">
                    <div className="input_combo">
                        <p className="mb_10 add_member" onClick={() => setAddMember(true)}>
                            ADD TEAM MEMBER
                        </p>
                    </div>
                </div>
                <div className={addMember ? "" : "d_none"}>
                    <div className="input_combo">
                        <label>FIRST NAME </label>
                        <input />
                    </div>
                    <div className="input_combo">
                        <label>LAST NAME </label>
                        <input />
                    </div>
                </div>
                <div className={addMember ? "" : "d_none"}>
                    <div className="input_combo">
                        <label>TITLE </label>
                        <input />
                    </div>
                    <div className="input_combo">
                        <label>COMPANY NAME </label>
                        <input />
                    </div>
                </div>
                <div className={addMember ? "" : "d_none"}>
                    <div className="input_combo">
                        <label>Company Billing Address</label>
                        <input />
                    </div>
                </div>
                <div>
                    <p>You are requesting a proposal for which services? </p>
                </div>
                <div className="multi_select_div">
                    <div className="input_combo">
                        <label>Themed Events</label>
                        <ul>
                            {
                                events.map((event) => {
                                    return (<li>
                                        <input type="checkbox"></input>
                                        <label>{event}</label>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="multi_select_div">
                    <div className="input_combo">
                        <label>Production</label>
                        <ul>
                            {
                                production.map((event) => {
                                    return (<li>
                                        <input type="checkbox"></input>
                                        <label>{event}</label>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="multi_select_div">
                    <div className="input_combo">
                        <label>Activities</label>
                        <ul>
                            {
                                activities.map((event) => {
                                    return (<li>
                                        <input type="checkbox"></input>
                                        <label>{event}</label>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="multi_select_div">
                    <div className="input_combo">
                        <label>Transportation</label>
                        <ul>
                            {
                                transportation.map((event) => {
                                    return (<li>
                                        <input type="checkbox"></input>
                                        <label>{event}</label>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <button type="submit" className="submit_button">
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default PropsalForm
