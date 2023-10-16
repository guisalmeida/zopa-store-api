import { DebounceInput } from "react-debounce-input";
import { Link } from 'react-router-dom';

import Slider from '../slider';
// import Quantity from '../../components/quantity';
// import ListItem from '../../components/listItem';

import SHOP_DATA from '../../../shop-data.js'

import * as Styled from './styled'

const Search = ({ showSearch, handleShow }) => {

    const { products } = SHOP_DATA
    const search = []

    const handleSearch = (event) => {
        let query = event.target.value.trim();
        // if (query === "") {
        //     return dispatch(updateSearchAction([]));
        // };

        const result = products.filter(({ name }) => name.toLowerCase().includes(query));
        // dispatch(updateSearchAction(result))
        console.log(result);
    };

    return (
        <Slider
            show={showSearch}
            title="Buscar Produtos"
            handleShow={handleShow}
        >
            <Styled.SearchContainer>
                <DebounceInput
                    type="text"
                    className="search__input"
                    placeholder="Buscar por produto..."
                    debounceTimeout={400}
                    onChange={event => handleSearch(event)}
                />
            </Styled.SearchContainer>

            <Styled.SearchContent>

                {/* {search.length > 0 &&
                    <Quantity
                        length={search.length}
                    />
                } */}

                <div className="search__list">
                    {search && search.length === 0
                        ? <p className="search__empty">Nenhum item encontrado :\</p>
                        : search.map((prod, index) => (
                            <Link
                                className="search__link"
                                to={`/produto/${prod.code_color}`}
                                key={index}
                                onClick={() => handleShow(false)}
                            >
                                {/* <ListItem
                                    image={prod.image}
                                    name={prod.name}
                                    sale={prod.on_sale}
                                    oldPrice={prod.regular_price}
                                    price={prod.actual_price}
                                    installments={prod.installments}
                                /> */}
                            </Link>
                        ))
                    }
                </div>
            </Styled.SearchContent>
        </Slider>
    )

};

export default Search;