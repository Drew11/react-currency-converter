import React from 'react';
import {Dropdown} from 'react-bootstrap';
import './favorites.css';

const Favorites = (props) => {

    const {favorites } = props;

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Favorites: {Object.entries(favorites).length}
            </Dropdown.Toggle>

            <Dropdown.Menu>

                {Object.entries(favorites).map((item, index) =>
                    <Dropdown.Item
                        key={index}
                    >
                        {`${item[0]}: ${item[1]}` }
                    </Dropdown.Item>
                )}

            </Dropdown.Menu>
        </Dropdown>
    )
};

export default Favorites;