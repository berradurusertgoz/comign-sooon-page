import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './style.css'

function ComingSoon() {
  const url = 'https://backend.kapinsights.com/app/emails'
  const [email, setEmail] = useState('')
  const [disable, setDisable] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post(url, {
        email: email,
      })
      setDisable(true)
      setEmail('')
      if (resp.status === 200) {
        toast.success('Email sent successfully')
      } 
    } catch (error) {
      toast.error("Request failed, please try again")
    }
  }

  return (
    <section className="banner">
      <div className='bg'>
        
      </div>
      <div className="banner-text">
        <h4 className="coming-soon-header">Coming Soon</h4>
        <h1 className="kap-insights-header">
          <span>KAP</span>insights
        </h1>
        <p className="coming-soon-p">
          AI for Humanitarian <br />
          and Development Work
        </p>
        <p className="coming-soon-p-2">
          Join our waitlist and get the latest updates
        </p>
        <div className="custom-search">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className="custom-search-input"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button disabled={disable} className="custom-search-botton" type="submit">
              Join now
            </button>
          </form>
        </div>
        <p className='report-p'>
      <span>KAPinsights</span> is a brand of 
      <a href='https://www.i-aps.com/' target="_blank"> International Advisory, Products and Systems Ltd. (i-APS)</a>

      </p>
      </div>
      <ToastContainer />
      
    </section>
  )
}

export default ComingSoon
