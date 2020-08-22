import React from "react"

const Contact = () => {
  return (
    <section id="contact">
      <div className="container text-center py-24 items-center">
        <h2 className="section__title mb-8">Get in touch</h2>
        <p className="section__description mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hi, shoot an
          email to <strong>iam.amanxz@gmail.com</strong>. I'll try my best to
          get back to you!
        </p>
        <button className="btn contact__button">
          <a
            href="mailto:iam.amanxz@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Say Hi
          </a>
        </button>
      </div>
    </section>
  )
}

export default Contact
