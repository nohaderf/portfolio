export default function Projects() {
    return (
        <div className="container" id="projects">
          <h1>projects</h1>
          <div className="projects-div">
            <div className="project">
              <h2>Whatsapp Clone</h2>
              <a href="https://fredas-whatsapp-clone.netlify.app" target="_blank" rel="noopener noreferrer">
                <img src="	https://d33wubrfki0l68.cloudfront.net/622a511648791728ad188bd8/screenshot_2022-03-10-19-28-15-0000.png" alt="Whatsapp-clone" className="project-thumbnail"/>
              </a>
              <div className="project-desc">A fun recreation of an app we all know, Whatsapp!</div>
            </div>

            

            <div className="project">
              <h2>Life League</h2>
              <img src="https://i.imgur.com/927YK49.png" alt="life-league" className="project-thumbnail"/>
              <div className="project-desc">A competitive goal management app where users challenge their friends to complete goals and hold each other accountable. Demo to Life League coming soon!</div>
            </div>
            <div className="project">
              <h2>Krunch</h2>
              <a href="https://krunch.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://d33wubrfki0l68.cloudfront.net/602f02201639380008f0359f/screenshot.png" alt="Krunch" className="project-thumbnail"/>
              </a>
              <div className="project-desc">An app that provides a vast exercise-guide library and allow users to plan their workouts and track their progress.</div>
            </div>
            <div className="project">
              <h2>bookclub</h2>
              {/* <a href="https://krunch.netlify.app/" target="_blank" rel="noopener noreferrer"> */}
                <img src="https://i.imgur.com/IpaLkN3.png" alt="bookclub" className="project-thumbnail"/>
              {/* </a> */}
              <div className="project-desc">A Javascript application that allow users to add books to a shelf and discuss the book with other users. Demo to bookclub coming soon!</div>
            </div>
            <div className="project">
              <h2>User Data</h2>
              <a href="https://userdatacc.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://i.imgur.com/tFmfI2m.png" alt="life-league" className="project-thumbnail"/>
              </a>
              <div className="project-desc">a simple application that displays user data in table and modal format.</div>
            </div>
        </div>

          
        </div>
    )
}