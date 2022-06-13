import React from "react";
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";


export const Home = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    })

    React.useEffect(() => {

        setIsLoading(true)
        const order = sortType.sortProperty.includes('-')?'asc':'desc'
        const sortBy= sortType.sortProperty.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''
          
        fetch(`https://62a0f2f97b9345bcbe42f245.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
        ).then((res) => {
            return res.json()
        }).then((arr) => {
            setItems(arr);
            setIsLoading(false);
        })
        window.scrollTo(0, 0)
    }, [categoryId, sortType])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId}
                            onClickCategory={(Id) => setCategoryId(Id)}/>
                <Sort value={sortType}
                      onChangeSort={(Id) => setSortType(Id)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    : items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>
                    )}
            </div>
        </div>
    )

}