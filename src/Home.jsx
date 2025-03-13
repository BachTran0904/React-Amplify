export default function Home() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">Hi, I'm Luke Tran, a passionate developer with a love for technology and problem-solving.</p>
        <a className="btn btn-primary btn-lg" href="/about" role="button">Learn More</a>
      </div>
    );
}