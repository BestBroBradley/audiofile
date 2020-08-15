import React from 'react'

const Details = (props) => {

    const items = props.items
    const search = props.search
    const handleChange = props.handleChange

    const array = []

    const toTitle = (item) => {
        if (item === "albumlength") {
            return ["albumlength", "Album Length"]
        } else {
            const titled = item.charAt(0).toUpperCase() + item.substr(1).toLowerCase()
            return [item, titled]
        }
    }

    for (const item in items) {
        array.push(toTitle(items[item]))
    }

    console.log(array)

    return (
        <div>
            {array.map(item => <div><input key={item[0]} name={item[0]} value={search.item} type="text" onChange={handleChange}/><label forhtml={item[0]}>{item[1]}</label></div>)}
            <hr />
        </div>
    )
}

export default Details