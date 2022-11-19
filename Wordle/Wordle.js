import React, { useEffect, useState } from 'react'
import './Wordle.css';
import Rules from './Rules'
import w_arr from './Data'
function Wordle(word) {
    const [x, setx] = useState(0);
    const [arr, setarr] = useState(Array(29).fill(''));
    const [color, setcolor] = useState(Array(30).fill('b1'));
    const[message,setmessage] = useState('');
    const [delt,setdelt]=useState(0);
    const [st,setst]=useState(0);
    const set = (e) => {
        var p=0;
        var arr1=new Array();
        var arr2=new Array();
       let k=1;
        let square = [...arr];
        let class1=[...color];
       if(x%5==0&&x!=0&&delt!=1) {
          if(e!='1'&&st==0)
             return;
       }
       else
       setst(0);
        if (e == '1') {
            if (x % 5 == 0) {
                let m=0;
                let parr=w_arr[arr[x-5]];
                let kj=0;
                parr.forEach(function(value){
                    for(let i=x-5;i<x;i++)
                    { 
                        if(value[i-x+5]==arr[i]){
                            kj+=1;
                        }
                    }
                    if(kj==5)
                    m=1;
                   
                    kj=0;
                })
                   
                if(m==0)
                { setdelt(1);
                    console.log(delt);
                    alert("ENTER WORD IS NOT VALID")
                return;
                }
                setst(1);
                p=x-5; 
                while (p<x) {
                    if (arr[p] == word.word[p - x + 5]) {
                        class1[p]="b1 green";
                    }
                    else {
                       k=0;
                       class1[p]="b1 voilet";
                        arr1.push(p);
                        arr2.push(word.word[p - x + 5]);
                    }
                    p++;
                }
                {
                    arr1.map(e1=>{
                        arr2.map(e2=>{
                            if(arr[e1]==e2)
                          {  class1[e1]="b1 yellow";
                          e2='';
                        }
                        })
                    })
                }
                if (k == 1) {
                alert("Nice! Your guess is correct!");
                }
                else{
                    alert("Your guess is wrong !");
                }
            }
            else {
                alert('Enter five words in a row');
            }
        }
        else if (e == '0') {
            console.log("ente");
            if (x % 5 != 0 && x > 0) {
                square[x - 1] = '';
                setx(x - 1);
                console.log("ente");
            }
            console.log("ente");
            if(delt==1)
            { console.log("ente");
                square[x - 1] = '';
                setx(x - 1);
                setdelt(0);
            }
        }
        else {
            square[x] = e;
            setx(x + 1);

        }
        setarr(square);
        setcolor(class1);
    }
    return (
        <div>
            <h3 className="Heading">Wordle</h3>
            <hr></hr>
           <p>{message}</p>
            <div className="Grid">
                <div className="g1">
                    <div className={color[0]}>{arr[0]}</div>
                    <div className={color[1]}>{arr[1]}</div>
                    <div className={color[2]}>{arr[2]}</div>
                    <div className={color[3]}>{arr[3]}</div>
                    <div className={color[4]}>{arr[4]}</div>
                </div>
                <div className="g1">
                    <div className={color[5]}>{arr[5]}</div>
                    <div className={color[6]}>{arr[6]}</div>
                    <div className={color[7]}>{arr[7]}</div>
                    <div className={color[8]}>{arr[8]}</div>
                    <div className={color[9]}>{arr[9]}</div>
                </div><div className="g1">
                    <div className={color[10]}>{arr[10]}</div>
                    <div className={color[11]}>{arr[11]}</div>
                    <div className={color[12]}>{arr[12]}</div>
                    <div className={color[13]}>{arr[13]}</div>
                    <div className={color[14]}>{arr[14]}</div>
                </div><div className="g1">
                    <div className={color[15]}>{arr[15]}</div>
                    <div className={color[16]}>{arr[16]}</div>
                    <div className={color[17]}>{arr[17]}</div>
                    <div className={color[18]}>{arr[18]}</div>
                    <div className={color[19]}>{arr[19]}</div>
                </div><div className="g1">
                    <div className={color[20]}>{arr[20]}</div>
                    <div className={color[21]}>{arr[21]}</div>
                    <div className={color[22]}>{arr[22]}</div>
                    <div className={color[23]}>{arr[23]}</div>
                    <div className={color[24]}>{arr[24]}</div>
                </div>
                <div className="g1">
                    <div className={color[25]}>{arr[25]}</div>
                    <div className={color[26]}>{arr[26]}</div>
                    <div className={color[27]}>{arr[27]}</div>
                    <div className={color[28]}>{arr[28]}</div>
                    <div className={color[29]}>{arr[29]}</div>
                </div>
            </div>
            <div className="keyboard">
                <div className="row">
                    <button onClick={() => set('a')} className="keys">a</button>
                    <button onClick={() => set('b')} className="keys">b</button>
                    <button onClick={() => set('c')} className="keys">c</button>
                    <button onClick={() => set('d')} className="keys">d</button>
                    <button onClick={() => set('e')} className="keys">e</button>
                    <button onClick={() => set('f')} className="keys">f</button>
                    <button onClick={() => set('g')} className="keys">g</button>
                    <button onClick={() => set('h')} className="keys">h</button>
                    <button onClick={() => set('i')} className="keys">i</button>
                </div>
                <div className="row">
                    <button onClick={() => set('j')} className="keys">j</button>
                    <button onClick={() => set('k')} className="keys">k</button>
                    <button onClick={() => set('l')} className="keys">l</button>
                    <button onClick={() => set('m')} className="keys">m</button>
                    <button onClick={() => set('n')} className="keys">n</button>
                    <button onClick={() => set('o')} className="keys">o</button>
                    <button onClick={() => set('p')} className="keys">p</button>
                    <button onClick={() => set('q')} className="keys">q</button>
                    <button onClick={() => set('r')} className="keys">r</button>
                </div>
                <div className="row">
                    <button onClick={() => set('s')} className="keys">s</button>
                    <button onClick={() => set('t')} className="keys">t</button>
                    <button onClick={() => set('u')} className="keys">u</button>
                    <button onClick={() => set('v')} className="keys">v</button>
                    <button onClick={() => set('w')} className="keys">w</button>
                    <button onClick={() => set('x')} className="keys">x</button>
                    <button onClick={() => set('y')} className="keys">y</button>
                    <button onClick={() => set('z')} className="keys">z</button>
                    <button onClick={() => set('1')} className="keys">ENTER</button>
                    <button onClick={() => set('0')} className="keys"> Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Wordle