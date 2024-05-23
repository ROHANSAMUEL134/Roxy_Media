const About = () => {
  return (
      <main className='About'>
          <h2>About</h2>
          <div className="container">
            <div className="circle">
            <img src="Profile.jpeg" alt="ROHAN SAMUEL J" className="profile-image" />
            </div>
          </div><br></br>
          <strong>Roxy Media : </strong><br></br>
          <p style={{textAlign: "justify", lineHeight: "1.4"}}>
            I've crafted Roxy Media a user-friendly single-page 
            Social-media application built with React. Leveraging 
            key React concepts such as Events, Icons, Props, Hooks, 
            integrating APIs with Axios and performing CRUD operations.
          </p>
      </main>
  )
}

export default About