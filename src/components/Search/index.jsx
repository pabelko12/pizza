import React from "react";
import styles from './Search.module.scss'
import closeLogo from '../../assets/img/211651_close_round_icon.svg'
import searchLogo from '../../assets/img/172546_search_icon.svg'
import {SearchContext} from "../../App";
import debounce from 'lodash.debounce'


export const Search = () => {
    const [value, setValue] = React.useState('')
    const { setSearchValue} = React.useContext(SearchContext)
    const inputRef = React.useRef()
    const onClickClear = () => {
        setSearchValue('')
        setValue('')
        inputRef.current.focus()
    }
    const updateSearchValue = React.useCallback(
        debounce(
        (str) => {
            setSearchValue(str)
        }, 300), [])

    const onChangeInput = event => {
        setValue(event.currentTarget.value)
        updateSearchValue(event.currentTarget.value)
    }


    return (
        <div className={styles.root}>
            <img src={searchLogo} className={styles.icon}/>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                placeholder="Поиск пиццы ..."/>
            {value &&
                (<img
                    src={closeLogo}
                    className={styles.closeIcon}
                    onClick={onClickClear}
                />)}


        </div>

    )
}