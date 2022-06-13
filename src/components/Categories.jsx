import React from 'react'

export function Categories({value, onClickCategory}) {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]


    return <div className="categories">
        <ul>
            {
                categories.map((categoryName, Id) =>
                    <li
                    className={value === Id ? "active": ''}
                    onClick={() => onClickCategory(Id)}
                    key={Id}
                >{categoryName}</li>)
            }

        </ul>
    </div>

}