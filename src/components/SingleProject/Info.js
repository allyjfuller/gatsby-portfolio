import React, {useState} from 'react'
import {FaAngelDown} from 'react-icons/fa'
import styles from '../../css/day.module.css'

const Info = ({title, info}) => {
    return <article className={styles.day}>
        <h4>
            {title}
            <button className={styles.btn}>
                <FaAngelDown />
            </button>
        </h4>
    </article>
}

export default Info
