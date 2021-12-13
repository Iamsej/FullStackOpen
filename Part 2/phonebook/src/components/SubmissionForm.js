import React from 'react'

const SubmissionForm = (props) =>{
    return(
        <form onSubmit={props.submission}>
        <div>
          name: <input value={props.namefield} onChange={props.nameinput}/>
        </div>
        <div>
          number: <input value={props.numberfield} onChange={props.numberinput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default SubmissionForm