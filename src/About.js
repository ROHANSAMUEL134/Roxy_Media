const About = () => {
  return (
      <main className='About'>
          <h2>About</h2>
          <div className="container">
            <div className="circle">
            <img src="Profile.jpeg" alt="ROHAN SAMUEL J" className="profile-image" />
            </div>
          </div><br></br>
          <strong style={{color:'hsl(0, 100%, 70%)'}}>Brand Values : </strong><br></br>
          <p style={{textAlign: "justify", lineHeight: "1.4"}}>
          🌐 Connect, Share, Inspire | Your Digital World Awaits 🌟<br></br>
          📸 Capture Moments, Create Memories | <br></br>Join the Social Revolution 🌍<br></br>
          💬 Engage, Express, Explore | Your Voice, Amplified 🚀
          </p>
          <div style={{ textAlign: 'right' }}>
            <a target="_blank" rel="noreferrer" href="https://rohan-samuel-portfolio.netlify.app" style={{fontSize: "medium",textAlign: "right"}}>
              - About the Developer!!
            </a>
          </div>
      </main>
  )
}

export default About
