export default function Projects() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="display-4 mb-4">My Projects</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of Project 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">Description of Project 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">Description of Project 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}