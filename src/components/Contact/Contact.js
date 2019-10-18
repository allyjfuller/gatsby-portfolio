import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contact" subtitle="me" />
            <div className={styles.center}>
                <form className={styles.form} action="https://formspree.io/ally@eurotrip.com" method="POST">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className={styles.formControl} 
                        placeholder="your name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className={styles.formControl} 
                        placeholder="example@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea 
                        name="message" 
                        id="message" 
                        rows="10" 
                        className={styles.formControl} 
                        placeholder="your message"></textarea>
                    </div>
                    <div>
                        <input 
                        type="submit" 
                        value="submit" 
                        className={styles.submit} />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
