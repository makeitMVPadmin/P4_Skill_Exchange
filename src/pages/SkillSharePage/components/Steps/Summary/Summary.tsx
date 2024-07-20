
function Summary ({ currentIndex = 3, steps = 3}) {
  return (
    
    <>          
      <div className="c_project-form__modal-body__content">
        <div className="modal__content-steps">
        {currentIndex} / { steps }
        </div>
        <div className="modal__content-title">
          <h1>Let’s review before you post</h1>
        </div>
        <div className="modal__content-description">
          <p>Take the time to ensure you have all the details you need. Double checking never hurt anybody!</p>
        </div>
      </div>
      <div className="c_project-form__modal-body-form">
        
      </div>
    </>
  )
}

export default Summary;