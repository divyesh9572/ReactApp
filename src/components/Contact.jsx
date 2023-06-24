import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        <main>
            <h1>Contact us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='abc'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='abc@gmail.com'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='tell us about your query..'/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </main>

    </div>
  )
}

export default Contact