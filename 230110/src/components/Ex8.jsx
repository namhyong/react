import React from 'react'
import App from '../App'

const Ex8 = props => {
    console.log(props)
    return <h1 > 제가 좋아하는 음식은 <span style={{color: props.color}}>{props.food}</span>입니다.</h1>
}


Ex8.defaultProps = {
    food: '기본 이름',
    color: 'red'

}
	


export default Ex8