import React from 'react'

const Dummy = ({changeLinkText, changeCountUp, count, changeCountDown, updateValueinArray, teamData}) => {


const handleClick = () => {
 changeLinkText('Congratulations! This is sent from the child');
}

// we write a function to do something when we press changCountup
const handleIncrement = () =>{
  changeCountUp((count+1))
}

// function to handle countdown 

const handleDecrement = () =>{
  changeCountDown((count-1))
}

// const changeCountUp=() =>{
//   props.



  return (
    <div>
      <button onClick={()=> handleClick()}>Click me</button>
      <button onClick={()=> handleIncrement()}>ADD</button>
      <button onClick={()=> handleDecrement()}>Subtract</button>




      <button onClick={updateValueinArray}>ANOTHER BUTTON</button>
      <ul>
        {teamData.map((member, index) => (
          <li key={index}>
            {member.name}
            {member.counter}
          </li>
        ))}
      </ul>




      
    </div>








  );
}

export default Dummy;