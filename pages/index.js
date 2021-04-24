import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rebecca Smith</title>
        {/* Meta */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" />
        {/* Google Font */}
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic" rel="stylesheet" type="text/css" />
        {/* FontAwesome JS*/}
        <script defer src="assets/fontawesome/js/all.min.js"></script>
        {/* Global CSS */}
        <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css" />
        {/* Theme CSS */}
        <link id="theme-style" rel="stylesheet" href="assets/css/orbit-1.css" />
      </Head>

      <div className="wrapper">
        <div className="sidebar-wrapper">
          <div className="profile-container">
            <img className="profile" src="assets/images/profile.png" alt="" />
            <h1 className="name">Rebecca Smith</h1>
            <h3 className="tagline">Aspiring Software Developer</h3>
          </div>{/*//profile-container*/}
          <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
              <li className="email"><i className="fas fa-envelope" /><a href="mailto: rebeccamsmith29@gmail.com">rebeccamsmith29@gmail.com</a></li>
              <li className="phone"><i className="fas fa-phone" /><a href="tel:0123 456 789">214 384 4306</a></li>
              <li className="website"><i className="fas fa-globe" /><a href="https://rebeccasmith.lol/" target="_blank">rebeccasmith.lol</a></li>
              <li className="linkedin"><i className="fab fa-linkedin-in" /><a href="https://www.linkedin.com/in/rebecca-smith-496b36120" target="_blank">linkedin.com/in/rebecca-smith-496b36120</a></li>
              <li className="github"><i className="fab fa-github" /><a href="https://github.com/rebeccamichelle27" target="_blank">github.com/rebeccamichelle27</a></li>
            </ul>
          </div>{/*//contact-container*/}
          <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>

            <div className="item">
              <h4 className="degree">BSc in Biology</h4>
              <h5 className="meta">University of North Texas</h5>
              <div className="time">2013 - 2015</div>
            </div>{/*//item*/}
          </div>{/*//education-container*/}
          <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list">
              <li>English <span className="lang-desc">(Native)</span></li>
            </ul>
          </div>{/*//interests*/}
          <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
              <li>Weight lifting</li>
              <li>Machine Learning</li>
              <li>Hiking</li>
              <li>Camping</li>
              <li>Interior Design</li>
            </ul>
          </div>{/*//interests*/}
        </div>{/*//sidebar-wrapper*/}
        <div className="main-wrapper">
          <section className="section summary-section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user" /></span>Career Profile</h2>
            <div className="summary">
              <p>I'm Rebecca, a clinical research professional with 6 years of experience. I've spent the past year studying to transition into the software industry while working full time. I've taken courses on Udemy (The Complete 2020 Web Development Bootcamp & Complete Python Developer in 2020), a Newline Flask course to build a SaaS application (Fullstack Flask), and the Flask Mega-Tutorial by Miguel Grinberg. Python is the language I've enjoyed learning and programming in the most. I also have experience with JavaScript, JQuery, HTML5, and CSS.</p>            </div>{/*//summary*/}
          </section>{/*//section*/}

          <section className="section projects-section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive" /></span>Projects</h2>
            <div className="intro">
            </div>{/*//intro*/}
            <div className="item">
              <span className="project-title"><a href="http://snake.rebeccasmith.lol/" target="_blank">Snake game</a></span> - <span className="project-tagline">Classic snake, better graphics and arcade tunes. Eat the apple but avoid the walls and your tail! <a href="https://github.com/rebeccamichelle27/snake">Link to code</a></span>
            </div>{/*//item*/}
            <div className="item">
              <span className="project-title"><a href="http://todo2.rebeccasmith.lol/" target="_blank">To do app - Python/Flask</a></span> - <span className="project-tagline">This to do app implements user authentication, tracking data with a PostgreSQL database, and test coverage. <a href="https://github.com/rebeccamichelle27/todo">Link to code </a></span>
            </div>{/*//item*/}
            <div className="item">
              <span className="project-title"><a href="http://todo.rebeccasmith.lol/" target="_blank">To do app - JavaScript</a></span> - <span className="project-tagline">A simple, yet beautified, to do app written in JavaScript that tracks to do items in a MongoDB database.</span>
            </div>{/*//item*/}
            <div className="item">
              <span className="project-title"><a href="https://yumroad--app.herokuapp.com/" target="_blank">Yumroad</a></span> - <span className="project-tagline">This app is similar to Gumroad. It was built using flask, has 100% test coverage, implements payments with Stripe, utilizes delayed jobs, sending emails, and uses a PostgreSQL database.</span>
            </div>{/*//item*/}

          </section>{/*//section*/}
          <section className="skills-section section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket" /></span>Skills &amp; Proficiency</h2>
            <div className="skillset">
              <div className="item">
                <h3 className="level-title">Python</h3>
                <div className="progress level-bar">
                  <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>{/*//item*/}
              <div className="item">
                <h3 className="level-title">Flask </h3>
                <div className="progress level-bar">
                  <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>{/*//item*/}
              <div className="item">
                <h3 className="level-title">HTML5</h3>
                <div className="progress level-bar">
                  <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>{/*//item*/}
              <div className="item">
                <h3 className="level-title">JavaScript &amp; jQuery</h3>
                <div className="progress level-bar">
                  <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>{/*//item*/}
              <div className="item">
                <h3 className="level-title">CSS</h3>
                <div className="progress level-bar">
                  <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>{/*//item*/}

            </div>
          </section>{/*//skills-section*/}
          <section className="section experiences-section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase" /></span>Experiences</h2>
            <div className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">Research Associate</h3>
                  <div className="time">2019 - Present</div>
                </div>{/*//upper-row*/}
                <div className="company">Reata Pharmaceuticals, Plano</div>
              </div>{/*//meta*/}
              <div className="details">
                <p>New Drug Application (NDA) preparation and submission, managing vendors assisting with NDA preparation, leading data monitoring committee meetings for ongoing clinical trials, QC and review of clinical documents, managing CT.gov submissions.</p>
                <p></p>
              </div>{/*//details*/}
            </div>{/*//item*/}
            <div className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">Regulatory Specialist</h3>
                  <div className="time">2018 - 2019</div>
                </div>{/*//upper-row*/}
                <div className="company">Mary Crowley Cancer Research, Dallas</div>
              </div>{/*//meta*/}
              <div className="details">
                <p>Determined protocol feasibility, completed regulatory submissions, prepared for QA and FDA audits, organized protocol training for staff to ensure timely opening of clinical trials, worked with finance to create tiered pricing for amendment processing based on effort tracking, trained new employees.</p>
              </div>{/*//details*/}
            </div>{/*//item*/}
            <div className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">Clinical Data Specialist, Phase 1 Oncology - Solid tumors</h3>
                  <div className="time">2017 - 2018</div>
                </div>{/*//upper-row*/}
                <div className="company">UT Southwestern Medical Center, Dallas</div>
              </div>{/*//meta*/}
              <div className="details">
                <p>Worked on a small team to manage the dynamic and complex nature of Phase 1 clinical trials, reviewed data to determine treatment modifications with physicians, entered patient data, instructed patients on protocol procedures, managed timely query resolution.</p>
              </div>{/*//details*/}
            </div>{/*//item*/}
            <div className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">Research Technician</h3>
                  <div className="time">2016 - 2017</div>
                </div>{/*//upper-row*/}
                <div className="company">UT Southwestern Medical Center, Dallas</div>
              </div>{/*//meta*/}
              <div className="details">
                <p>Determined that there is a relationship between virus propogation and the catalytic activity of an antibiotic resistance gene, TEM-1, using Phage Assisted Continuous Evolution (PACE) technology and optimized PACE technology to avoid common problems.</p>
              </div>{/*//details*/}
            </div>{/*//item*/}
            <div className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">Graduate Research Assistant</h3>
                  <div className="time">2015 - 2016</div>
                </div>{/*//upper-row*/}
                <div className="company">OU Health Sciences Center, OKC</div>
              </div>{/*//meta*/}
              <div className="details">
                <p>Created transgenic zebrafish models that are susceptible to lymphocytic cancer by microinjecting embryos with transgenes, used CRISPR technology to modify cohesion proteins, and created a knock out protein to determine that the mitochondrial transport protein MICU1 decreases stem properties of ovarian cancer cells.</p>
              </div>{/*//details*/}
            </div>{/*//item*/}
          </section>{/*//section*/}

        </div>{/*//main-body*/}
      </div>
      <footer className="footer">
        <div className="text-center">
          {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
          <small className="copyright">Designed with <i className="fas fa-heart" /> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
        </div>{/*//container*/}
      </footer>{/*//footer*/}
    </>
  )
}
