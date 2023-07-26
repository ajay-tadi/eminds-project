import React from 'react'
import './index.css'

function TrustedComponent() {
  return (
    <div className="trusted-main-card">
        <div className='trusted-description'>
          <h1 className='trusted-heading'>Trusted by enterprises, loved by startups.</h1>
          <p className='trusted-para'>Enterprise Minds is a next generation smart-products and intelligent-systems engineering enterprise, deploying core competencies of AI/ML and Data, to usher in enterprise transformation and strategic business outcomes, aligned to current and emerging needs.</p>
        </div>
        <div className='trusted-cards'>
          <div className='global-locations'>
            <h1>8+</h1>
            <p>GLOBAL LOCATIONS</p>
          </div>
          <div  className='global-locations'>
            <h1>45+</h1>
            <p>RENOWNED CLIENTS</p>
          </div>
          <div className='global-locations'>
            <h1>7+</h1>
            <p>COMMUNITY PLATFORMS</p>
          </div>
          <div className='global-locations'>
            <h1>$9+</h1>
            <p>BILLION VALUE CO-CREATED</p>
          </div>
        </div>
    </div>
  )
}

export default TrustedComponent