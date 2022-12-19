export default function Dice(props){
const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
}

return (
<div className="square" style={styles} 
onClick={() => props.function(props.id)}
>
<div className="grid-dice">{  (props.value === 2 || props.value === 3 || props.value === 4 || props.value === 5|| props.value === 6 ) && <div className="dot"></div>}</div>
<div className="grid-dice">{  (props.value === 7 ) && <div className="dot"></div>}</div>
<div className="grid-dice">{  ( props.value === 4 || props.value === 5|| props.value === 6 ) && <div className="dot"></div>}</div>
<div className="grid-dice">{  ( props.value === 6 ) && <div className="dot"></div>}</div>
<div className="grid-dice">{  ( props.value === 3 || props.value === 1 || props.value === 5 ) && <div className="dot"></div>}</div>
<div className="grid-dice">{  (props.value === 6 ) && <div className="dot"></div>}</div>
<div className="grid-dice">{  (props.value === 4 || props.value === 5|| props.value === 6 ) && <div className="dot"></div>}</div>
<div className="grid-dice">{  ( props.value === 7 ) && <div className="dot"></div>}</div>
<div className="grid-dice">{  (props.value === 2 || props.value === 3 || props.value === 4 || props.value === 5|| props.value === 6 ) && <div className="dot"></div>}</div>

     </div>
)
}
 