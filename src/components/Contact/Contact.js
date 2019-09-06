import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form className={styles.form} action="">
          <div>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.formControl}
                placeholder="Your name here"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.formControl}
                placeholder="Your email address here"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                rows="10"
                className={styles.formControl}
                placeholder="Your message here"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Submit Here"
                className={styles.submit}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
