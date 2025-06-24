import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [feedback, setFeedback] = useState({
    "name": "",
    "email": "",
    "feedback": ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(e){
    console.log(e.target.value);
    const {name, value} = e.target;
    setFeedback((prev) => ({...prev, [name]:value}))
  }

  function handleSubmit(e){
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log(feedback);
    }catch(e){
      console.log(e)
    }finally{
      setFeedback(
        { "name": "",
          "email": "",
          "feedback": ""})
      setIsSubmitting(false)
    }
  }

  return (
    <>
    <div className='container mt-4'>
      <div className="row">
        <div className="app">
          <h2 className='text-center'>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
               <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder='Enter your Name' name="name" value={feedback.name} onChange={handleChange} required/>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter your Mail ID' name='email' value={feedback.email} onChange={handleChange} required/>
              </div>
              <div className="mb-3">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Leave a comment here" id="feedback" style={{height: "100px"}} name='feedback' value={feedback.feedback} onChange={handleChange} required></textarea>
                  <label htmlFor="feedback">Comments</label>
                </div>
              </div>
              <button type='submit' className='btn btn-info' disabled={isSubmitting}>{isSubmitting? "submitting....": "submit feedback"}</button>
             {/* {isSubmitting ?<button type="submit" className="btn btn-primary" disabled>Submit</button>  : <button type="submit" className="btn btn-primary" >Submit</button>} */}
            </form>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
