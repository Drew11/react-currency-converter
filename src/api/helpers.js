import React from 'react';

export const convertToOptions = (obj) => {
    const keysCountry = [];

    for (let k in  obj) {
        keysCountry.push(k)
    }

    keysCountry.sort((a, b) => a.localeCompare(b));

    return keysCountry.map((country, index) =>
        <option key={index}
                defaultValue={country}
        >
            {country}
        </option>
    )
};