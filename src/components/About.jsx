import rocketOnShoulder from '../images/rocket_on_shoulder.jpeg'

export default function About() {
  return (
    <div>
      <h1>Where I Come From</h1>
      <div className="row">
        <div className="col-auto">
          <p>
            Hello! My name is George Clark. I hope my personal home page finds you well!
          </p>

          <p>
            I graduated from Dalhousie University with a degree in Applied Computer Science during the spring of 2020. I was awarded
            Dalhousie's University Medal in Computer Science, presented to the graduating student achieving the highest cumulative GPA in their class.
          </p>

          <p>
            I originally attended Saint Mary's University, striving towards a Bachelor of Arts degree. I transferer to the business program before taking
            a computer science course on a whim. I've always loved creating things, building things, seeing something come to life before my eyes, and I
            quickly realized computer science was the domain by which I could make this passion come to life.
          </p>
          </div>
      </div>

      <div className="row">
        <h1>Where I'm At</h1>
        <div className="col-9">
          <p>
            I've been developing web applications for about {getTimeSpentWorking()} years now. Web development appeals to my desire to build and create-
            while HTML, CSS, and Bootstrap aren't the most exciting technologies, nothing is more exciting than seeing a page grow rerender-by-rerender.
          </p>

          <p>
            I've favoured back-end work thus far, using Ruby in Rails in both of my professional web development jobs. I've begun shoring up on my front-end skills,
            starting with ReactJS. This website, as a matter of fact, exists so that I can practice React!
          </p>

          <p>
            This website's styling is done primarily with Bootstrap, but if I decide I enjoy it, I will someday come back to design it myself.
          </p>

          <p>
            I have a delightful {rocketAge()} kitten named Rocket. When I'm not chasing her around my apartment or coding, I like to write fantasy, read,
            work out, do crossword puzzles, and listen to music. I've seen Judas Priest in concert twice and {mettalicaBlurb()}.
          </p>
        </div>
        <div className="col-3">
            <img src={rocketOnShoulder} alt="me and Rocket" height="300px" />
          </div>
      </div>


      <h1>Where I'm Going</h1>
      <p>
        I was really excited to work on this section. It was going to be an opportunity to reflect upon my past and try digging into the future. I like knowing
        where I'm going. Unfortunately for me, this section will remain thematic.
      </p>

      <p>
        My life as a developer is young. Perhaps my career will be spent on web development, or perhaps
        I'll find myself back in the academic sphere. Maybe I'll find myself programming toasters and elevators with C or Rust, or
        maybe I'll take some courses on design and HCI and focus on the psychological aspect of developing computing systems.
      </p>

      <p>
        My goal right now is it simply enjoy the journey. There's so much to learn, so much to try, why get bogged down focusing on one thing?
      </p>

      <p>
        Life will take me where it will. That's good enough for me.
      </p>
    </div>
  )
}

// Approximates my cat's age
function rocketAge() {
  const rocketsBirthday = new Date ("October 18 2022")

  const ageInMonths = monthsBetween(rocketsBirthday, new Date())

  if (ageInMonths < 12) {
    return `${ageInMonths} month old`
  } else {
    return `${yearsBetween(rocketsBirthday, new Date())} year old`
  }
}

// Approximates years between my start work date and the current date
function getTimeSpentWorking() {
  const startedWorkingDate = new Date("April 21 2020")
  return Math.round(monthsBetween(startedWorkingDate, new Date()) / 12)
}

function mettalicaBlurb() {
  const mettalicaConcertDate = new Date("August 11 2023")
  if (new Date() < mettalicaConcertDate) {
    return "will be fulfilling a life-long dream of seeing Metallica this year"
  } else {
    return "recently fulfilled a life-long dream of seeing Metallica live"
  }
}

// Returns a float describing the years between two dates.
// Params are Date objects.
function yearsBetween(dateFrom, dateTo) {
  return new Date(dateTo - dateFrom).getUTCFullYear() - 1970
}

function monthsBetween(dateFrom, dateTo) {
  return dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
 }
