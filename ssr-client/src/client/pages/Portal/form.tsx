import React from 'react'
import "../../css/main.css"

const Form = () => {
  return (
    <section className="booking">
      <div className="row">
        {/* row -- to have a container only */}
        <div className="book">
          <div className="book__form">
            <form action="" className="form">
              <h2 className="heading-secondary form__heading">
                Login to your account 
              </h2>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Your Email"
                  required
                  id="name"
                />
                <label htmlFor="name" className="form__label">
                  Your Email
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Your Password"
                  required
                  id="email"
                />
                <label htmlFor="email" className="form__label">
                  Your Password
                </label>
              </div>
              

              <div className="form__group">
                {/* Added some properties in a btn class -- for button */}
                <button className="btn btn-green margin-bottom-2">
                  Go to your account &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default {
  component: Form 
}