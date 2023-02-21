import React from 'react'

export default function Options(props) {
    const increment = [];
    for (let i = props.min; i <= props.max; i = i + 1) {
        increment.push(i);    
    }
    return (
        increment.map (increment => {
            return <option value={increment}>{increment}</option>
        })
    )
}
