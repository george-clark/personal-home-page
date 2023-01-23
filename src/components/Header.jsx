export default function Header(props) {
  return (
    <nav>
      <div className="header-info">
        <h1>George A. Clark</h1>
      </div>

      <nav className='main-nav'>
        <ul className="nav nav-tabs nav-fill" role="tablist">
          <li className="nav-item">
            <a className="nav-link" name="resume" onClick={props.toggleContent} id="resume-tab" data-toggle="tab" href="#resume" role="tab" aria-controls="resume" aria-selected="true">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" name="about" onClick={props.toggleContent} id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" name="projects" onClick={props.toggleContent} id="projects-tab" data-toggle="tab" href="#projects" role="tab" aria-controls="projects" aria-selected="true">Projects</a>
          </li>
        </ul>
      </nav>
    </nav>
  )
}
