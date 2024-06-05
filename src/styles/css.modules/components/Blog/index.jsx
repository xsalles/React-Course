import styles from "./styles.module.css";

export default function Blog() {
  return (
    <form className={styles.blog}>
      <div className={styles.login}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <form className={styles.forms}>
          <p className={styles.name}></p>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            className={styles.textArea}
          />
          <p className={styles.email}></p>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="Email"
            id="Email"
            className={styles.textArea}
          />
          <p className={styles.message}></p>
          <label htmlFor="Message">Message</label>
          <textarea
            placeholder="Type your message..."
            name="Message"
            id="Message"
            className={styles.textAreaMessage}
          ></textarea>
          <div className={styles.check}>
            <input type="checkBox" id="checkbox" className={styles.checkBox} />
            <p for="checkbox" className={styles.terms}>I accept the Terms </p>
          </div>
          <div className="button-container">
            <a href="#" className={styles.button}>
              Submit
            </a>
          </div>
        </form>
      </div>
    </form>
  );
}
