import React from 'react'
import './FormStyles.css'
const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Please Enter Your Name</label>
            <input type="text" />
            <label>Please Enter Your Email</label>
            <input type="email" />
            <label>The Subject Which You want</label>
            <input type="text" />
            <label>Please Enter The Description</label>
            <textarea rows='6' placeholder='Type a short message here'></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form