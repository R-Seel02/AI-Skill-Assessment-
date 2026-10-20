import './App.css'

const TRELLO_BOARD = 'https://trello.com/b/nCPTcGuw/ai-tools-for-student-skill-assessment'

const steps = [
  { title: 'Student submits work', body: 'Coursework from the partner course comes in.' },
  { title: 'De-identify', body: 'Names and identifying details are removed before anything else touches the data.' },
  { title: 'Assess skills', body: 'An AI model scores the work against the course skills.' },
  { title: 'Feedback', body: 'Students get personal feedback; the instructor gets a class-wide report.' },
]

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Quinnipiac University · Capstone</p>
        <h1>AI Tools for Student Skill Assessment</h1>
        <p className="lede">
          Personalized feedback on what each student needs to work on, and a report that shows
          instructors where the class as a whole is struggling.
        </p>
        <p className="status" role="status">
          Early development — this page is a placeholder for the project frontend.
        </p>
      </header>

      <section aria-labelledby="flow-heading">
        <h2 id="flow-heading">How it will work</h2>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="footer">
        <a href={TRELLO_BOARD} target="_blank" rel="noreferrer">
          Project board on Trello
        </a>
      </footer>
    </main>
  )
}

export default App
