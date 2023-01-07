import React from 'react'

export default function ItemChild({item, price}) {
  return (
    <div>
        <h1>아이템Child:{item}</h1>
        <p>가격Child:{price}</p>
    </div>
  )
}
