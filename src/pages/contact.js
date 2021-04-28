import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <artical className="contact-info">
            <h3>Want To Get In Touch</h3>
            <p>
              Godard vice vexillologist poutine semiotics, VHS dreamcatcher.
              Iceland cardigan hell of normcore air plant, yuccie tousled
              whatever irony quinoa meh paleo dreamcatcher. Hot chicken tacos
              chia you probably haven't heard of them pop-up.
            </p>
            <p>
              Godard vice vexillologist poutine semiotics, VHS dreamcatcher.
            </p>
            <p>
              I'm baby hashtag polaroid freegan, gastropub chicharrones
              semiotics raw denim subway tile cold-pressed fashion axe taxidermy
              kogi. Before they sold out kombucha skateboard 3 wolf moon
              wayfarers sartorial pok pok, vice cronut letterpress.
            </p>
          </artical>
          <article>
            <form action="" className="form form-contact">
              <div className="form.row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form.row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form.row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form.row">
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
