import React from 'react';
import './content_bcg.css';
import FormularCanvas from './formular_canvas';

function ContentBCG() {
    return (
      <div className="contentBCG">
        <div className="constainer left">
            <span className='mark'>输入</span>
            <div className='line'><span>主管直径D(mm)</span><input></input></div>
            <div className='line'><span>调音管直径Db(mm)</span><input></input></div>
            <div className='line'><span>调音管长度L(mm)</span><input></input></div>
            <button >开始计算</button>
            <img src='../../assets/bcg.png'/>
        </div>
        <div className="constainer right">
            <span className='mark'>输出</span>
            <div className='line'><span>调音频率f(HZ)</span><input></input></div>
            <div className='line'><span>一级谐波(HZ)</span><input></input></div>
            <span>二级谐波(HZ)</span><input></input>
            <FormularCanvas/>
        </div>
      </div>
    );
  }
  
  export default ContentBCG;
  