import styles from "./styles.module.css"

export default function Blog(){
    return(
        <form className={styles.blog}>
            <div className={styles.login}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div className={styles.forms}>
                    <p className={styles.name}></p>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" id="Name" className={styles.textArea}/>
                    <p className={styles.email}></p>
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" id="Email" className={styles.textArea}/>
                    <p className={styles.message}></p>
                    <label htmlFor="Message">Message</label>
                    <input placeholder="Type your message..." type="text" name="Message" id="Message" className={styles.textAreaMessage}/>
                    <div className={styles.check}>
                    <input type="checkBox" id="I accept the Terms" name="I accept the Terms" className={styles.checkBox}/>
                    <label htmlFor="I accept the Terms" className={styles.terms}>I accept the Terms</label>
                    <input type={styles.submit} />
                    </div>
                    
                </div>
                
            </div>
        </form>
    )
}