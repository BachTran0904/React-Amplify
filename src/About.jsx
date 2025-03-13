export default function About() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="display-4 mb-4">About Me</h1>
        <div className="row">
          <div className="col-md-6">
            <h2>Education</h2>
            <p>I have a degree in Computer Science from Dalhousie University.</p>
          </div>
          <div className="col-md-6">
            <h2>Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      </div>
    );
}