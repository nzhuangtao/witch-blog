import { useEffect, useState } from "react"
import "./pageination.css"
export default function Pageination(props){
    let [size,setSize] = useState(props.total?props.total:0);
    let [step,setStep] = useState(props.step||3);
    let [showNum,setShowNum] = useState(props.showNum||10);
    let [page,setPage] = useState(1); // 当前页
    let totalPageNum = size>10?Math.round(size/10):1; 
    function start(){
        if(page+step>10&&page+step<=totalPageNum){            
            return add(page-step*2-1,page+step);
        } else if(page+step>10&&page+step>totalPageNum){    
            return add(totalPageNum-10,totalPageNum);
        } else {
            let end = totalPageNum>showNum?showNum:totalPageNum;
            return add(0,end); 
        }
    }
    function add(start=0,end){
        let temp = [];
        for(let i=start;i<end;i++){
            temp.push(<li 
                className={"pageination-item "+(i===page-1?'active':'') }
                key={i} 
                onClick={()=>handleItemClick(i+1)}>{i+1}</li>)
        };
        return temp;
    }
    useEffect(()=>{
        start();
    },[page]);
    function pre(){
        if(page<=1) return false;
        setPage(page-1);
    }
    function next(){
        if(page>=totalPageNum) return false;
        setPage(page+1);
    }
    function handleItemClick(i){
        setPage(i);
    }
    return (
        <div className="pageination">
            <button onClick={pre}>上一页</button>
            <ul className="pageination-box">
                {
                    start()
                }
            </ul>
            <button onClick={next}>下一页</button>
        </div>
    )
}