import React from 'react'
import ItemChild from './ItemChild'

export default function Items2() {
    const items = [
        {
            item: "PS5",
            price: "685,000원",
            },
            {
            item: "에어 프라이어",
            price: "50,000원",
            },
            {
            item: "사세 치킨윙",
            price: "11,500원",
            },
            ];
  return (
    <div >
        {items.map((el, index)=>{
            return <ItemChild item={el.item} price={el.price} key ={index} />
            
        })}
    </div>
  )
}
