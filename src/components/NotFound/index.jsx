import React from "react";

import styles from './NotFoundBlock.module.scss'
import {SearchContext} from "../../App";


export const NotFoundBlock = () => {

    return(

        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br/>
                Ничего не найдено

            </h1>
            <p className={styles.description}>К сожилению данная странича сейчас не доступна</p>
        </div>


    )


}