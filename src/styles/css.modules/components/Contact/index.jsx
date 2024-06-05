import styles from "./styles.module.css";

export default function Contact() {
  return (
    <form className={styles.blog}>
      <div className={styles.login}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <form className={styles.forms}>
          <p className={styles.name}>Name</p>
          <textarea
            type="text"
            name="Name"
            id="Name"
            className={styles.textArea}
          />
          <p className={styles.email}>Email</p>
          <textarea
            type="text"
            name="Email"
            id="Email"
            className={styles.textArea}
          />
          <p className={styles.message}>Message</p>
          <textarea
            placeholder="Type your message..."
            name="Message"
            id="Message"
            className={styles.textAreaMessage}
          />
          <div className={styles.check}>
            <input type="checkBox" id="checkbox" className={styles.checkBox} />
            <p for="checkbox" className={styles.terms}>I accept the &nbsp;<u className={styles.underline}> Terms</u> </p>
          </div>
          <div className="button-container">
            <button className={styles.button}>
              <p className={styles.textSubmit}>Submit</p>
            </button>
          </div>
        </form>
      </div>
    </form>
  );
}
