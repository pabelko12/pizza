import React from "react";
import {Categories} from "../components/Categories";
import {list, Sort} from "../components/Sort";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import {Pagination} from "../components/pagination";
import {SearchContext} from "../App";
import {useSelector, useDispatch} from "react-redux";
import {setCategoryId, setCurrentPage, setFilters} from "../redux/slices/filterSlice";
import axios from "axios";
import qs from 'qs'
import {useNavigate} from 'react-router-dom'


export const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSearch = React.useRef(false)
    const {categoryId, sort, CurrentPage} = useSelector(state => state.filter)
    const sortType = sort.sortProperty
    const isMounted = React.useRef(false)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const {searchValue} = React.useContext(SearchContext)

    const [items, setItems] = React.useState([])

    const [isLoading, setIsLoading] = React.useState(true)
    const onChangePage = number => {
        dispatch(setCurrentPage(number))
    }
    const fetchPizzas = () => {
        setIsLoading(true)
        const order = sortType.includes('-') ? 'asc' : 'desc'
        const sortBy = sortType.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''


        axios.get(`https://62a0f2f97b9345bcbe42f245.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then((res) => {
                setItems(res.data);
                setIsLoading(false)
            })
    }
    //если был первый рендер, то проверяем url-параметры и сохраняем в редакс
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = list.find(obj => obj.sortProperty === params.sortProperty)
            dispatch(
                setFilters({
                    ...params, sort
                })
            )
            isSearch.current = true
        }

    }, [])
    //если был первый рендер, то запрашиваем пицци
    React.useEffect(() => {
        window.scrollTo(0, 0)
        if (!isSearch.current) {
            fetchPizzas()
        }
        isSearch.current = false
    }, [categoryId, sortType, searchValue, CurrentPage])
    //если изменили параметры и был первый рендер
    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                CurrentPage,
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true


    }, [categoryId, sort.sortProperty, CurrentPage])


    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId}
                            onClickCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination CurrentPage={CurrentPage}
                        onChangePage={onChangePage}/>

        </div>
    )

}