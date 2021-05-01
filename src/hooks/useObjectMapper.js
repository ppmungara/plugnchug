import React from 'react'

function useObjectMapper(obj) {

    const objCopy = {...obj};

    return Object.keys(objCopy).map((item) => {
        return <option key={item} value={item}>{item}</option>
    })
}

export default useObjectMapper
