import React,{useState,useEffect} from 'react'
import './ox.css'

function OX() {
  const [turn,setturn]= useState('O');
  const [arr,setarr]=useState(Array(9).fill(''));
  const [win,setwin]=useState();
  const [ply1,setply1]=useState('O');
  const [ply2,setply2]=useState('X');
  const restart=()=>{
   
    setwin('');
    setarr(Array(9).fill(''));
    setturn('O');
  }
  const checkwin=(square)=>{
    var x=0;
let cd={
  row:[
    [0,1,2],
    [3,4,5],
    [6,7,8]
  ],
  colum:[
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ],
  diag:
  [
    [0,4,8],
    [2,4,6]
  ]
}
for( let itr in cd)
{
  cd[itr].forEach(element => {
    if(square[element[0]]==''||square[element[1]]==''||square[element[2]]=='')
    { x=1;
    }
    else{
      if(square[element[0]]==square[element[1]]&&square[element[1]]==square[element[2]])
     { if(square[element[0]]=='O')
       setwin(ply1 +' '+' won')
       else
       setwin( ply2 +' '+' won')
    
    return}
    }
    
  });
}
if(x==0)
setwin('DRAW')
  }

  
   const handl=(num)=>{
    let square=[...arr];
    console.log(arr[num]);
     if(arr[num]!==''){
       return;
     }
     console.log('click')
     
      if(turn=='X')
     { square[num]='X';
       setturn('O');}
      else
  { square[num]='O';   
    setturn('X');}
    console.log('click')
    checkwin(square);
    setarr(square);
   }
  const  Cell=({num})=>{
    return <td onClick={()=>handl(num)}>{arr[num]}</td>;
  }
  return (
    <div className='container'>
      <div className='player_name'>
        <h3>enter player name </h3>
        <lable>player 1</lable>
        <input type='text' onChange={(e)=>setply1(e.target.value)} ></input>
        <br></br>
        <lable>player 2</lable>
        <input type='text'onChange={(e)=>setply2(e.target.value)} ></input>
      </div>
      <h1>turn:{turn}</h1>
      <table>
        <tr>
        <Cell num={0}></Cell>
        <Cell num={1}></Cell>
        <Cell num={2}></Cell>
        </tr>
        <tr>
        <Cell num={3}></Cell>
        <Cell num={4}></Cell>
        <Cell num={5}></Cell>
        </tr>
        <tr>
        <Cell num={6}></Cell>
        <Cell num={7}></Cell>
        <Cell num={8}></Cell>
        </tr>
      </table>
      {/* <button onClick={SET}>RULES OF GAME</button> */}
      {win&&(
       <>
      <h1>{win}</h1>
      <button onClick={restart}>RESTART</button>
      </>)}
    </div>
  )
}

export default OX