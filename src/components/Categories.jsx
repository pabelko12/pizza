import React from 'react'

export function Categories() {
    let [activeIndex, setActiveIndex] = React.useState(0)
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]

    const onClickCategories = (index) => {
        setActiveIndex(index)
    }

    return <div className="categories">
        <ul>
            {
                categories.map((v, i) => <li
                    className={activeIndex === i ? "active": ''}
                    onClick={() => onClickCategories(i)}
                    key={i}
                >{v}</li>)
            }

        </ul>
    </div>

}