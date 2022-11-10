import React from 'react'
import Select from "react-select";
const JobForm = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <section className='job_form' id='jobform'>
            <div className='first_label'>
                <p>JOIN US</p>
            </div>
            <form className='actual_form'>
                <div className=''>
                    <div className='input_combo'>
                        <label>FIRST NAME </label>
                        <input />
                    </div>
                    <div className='input_combo'>
                        <label>LAST NAME </label>
                        <input />
                    </div>
                </div>
                <div className=''>
                    <div className='input_combo'>
                        <label>EMAIL *</label>
                        <input required={true} />
                    </div>
                    <div className='input_combo'>
                        <label>PHONE</label>
                        <input />
                    </div>
                </div>

                <div className=''>
                    <div className='input_combo'>
                        <label className='mb_10'>POSITION</label>
                        <Select options={options} />
                    </div>
                </div>
                <div className=''>
                    <div className='input_combo'>
                        <label>CV URL</label>
                        <input />
                    </div>
                    <div className='input_combo'>
                        <label>PORTFOLIO URL</label>
                        <input />
                    </div>
                </div>
                <div className=''>
                    <div className='input_combo'>
                        <label>ANY COMMENT</label>
                        <input />
                    </div>
                </div>
                <button type='submit' className='submit_button'>SUBMIT</button>
            </form>
        </section>
    )
}

export default JobForm