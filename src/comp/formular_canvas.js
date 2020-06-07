import React from 'react';
import './formular_canvas.css';

var Plot = {  
    //画布，所有被画出来的元素都append到这个container  
  container: null,  
  //原点x  
  ox: 0,  
  //原点y  
  oy: 300,  
  //坐标颜色  
  baseLineColor: 'black',  
  //画笔颜色  
  brushColor: 'red',  
  //画笔粗细  
  brushWeight: 1,  
  //baseLineX，baseLineY保存坐标线，用于坐标移位  
  baseLineX: null,  
  baseLineY: null
};  

function FormularCanvas_sin(props){
    let points = []; //calc points based on props, minor baseline offset.
    let angle = 360;

    for(let x=1; x<angle; x++){
        let y = Math.sin(x/180*Math.PI)*100;
        points.push({x: x+Plot.ox, y: y+Plot.oy+ 300})
    }

    return (<div className='canvas'>
        <div className='baseline x' style={{top: Plot.oy}}></div>
        <div className='baseline y' style={{left: Plot.ox}}></div>
        {
            points.map(point => (
                <div key={point.x} className='point' style={{left: point.x - Plot.ox, top: point.y - Plot.oy}}></div>
            ))
        }
    </div>)
}

function FormularCanvas(props){
    // const {L, D, Db} = props;
    let L = 200;
    let D = 70;
    let Db = 40;
    let C = 340;

    debugger;


    let points = []; //calc points based on props, minor baseline offset.
    for(let f=1; f<500; f++){
        let tanP = Math.PI * L * f / 500 / C / C;
        let logP = 1 + 0.25 * Db * Db / D / D * Math.tan(tanP) * Math.tan(tanP);
        let TL = 10 * Math.log10(logP)
        points.push({x: f + Plot.ox, y: TL + Plot.oy + 300})
    }

    return (<div className='canvas'>
        <div className='baseline x' style={{top: Plot.oy}}></div>
        <div className='baseline y' style={{left: Plot.ox}}></div>
        {
            points.map(point => (
                <div key={point.x} className='point' style={{left: point.x - Plot.ox, top: point.y - Plot.oy}}></div>
            ))
        }
    </div>)
}
  
export default FormularCanvas;