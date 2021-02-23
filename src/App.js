import React from 'react';
import PropTypes from "prop-types"

function Test({ fav }) { // <- 구조분해할당
  // params 안에는 컴포넌트를 쓸 때 전달되는 매개변수들이 들어있고, 객체처럼 . 을 이용해서 잡는다.
  return (
    <div>
      { fav}
    </div>
  );
}

const foods = [
  {
    id: 1,
    name: 'taco',
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/220px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
  },
  {
    id: 2,
    name: 'milk',
    rating: 10,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/220px-Glass_of_Milk_%2833657535532%29.jpg",
  },
  {
    id: 3,
    name: 'cookie',
    rating: 7,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/250px-2ChocolateChipCookies.jpg",
  }
];

function PrintFood({ food, foodImage, rating }) { // 리액트 컴포넌트는 태그와 구별하기 위해 무조건 대문자로 시작
  return (
    <div>
      <h1>food name : {food}</h1>
      <img src={foodImage} alt={food}></img>
      <h4>rating : {rating} / 10</h4>
    </div>
  )
}

PrintFood.propTypes = {
  food : PropTypes.string.isRequired,
  foodImage : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
    foods.map(cur =>
      <PrintFood key={cur.id} food={cur.name} foodImage={cur.image} rating={cur.rating} />)
  )
}

export default App; // export 명령어로 다른 파일에서 App component를 사용할 수 있게 됨.
