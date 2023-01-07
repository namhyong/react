import React from 'react'

export default function Items() {
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
            return(
            <div key={index}>
                <h1>품목명:{el.item}</h1>
                <p>가격:{el.price}</p>
            </div>
            )
        })}
    </div>
  )
}
