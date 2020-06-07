import React from 'react';
import './content_bcg.css';
import FormularCanvas from './formular_canvas';
import img from '../assets/bcg_img.png';

function ContentBCG() {
    return (
      <div className="contentBCG">
        <div className="constainer left">
            <span className="badge badge-primary badge-lg">输入</span>
            <div className='line' style={{marginTop: '20px'}}><span>主管直径D(mm)</span><input></input></div>
            <div className='line'><span>调音管直径Db(mm)</span><input></input></div>
            <div className='line'><span>调音管长度L(mm)</span><input></input></div>
            <div className='line'><button type="button" className="btn btn-primary btn-sm">开始计算</button></div>
            <img src={img}/>
        </div>
        <div className="constainer right">
            <span className="badge badge-primary badge-sm">输出</span>
            <div className='line' style={{marginTop: '20px'}}><span>调音频率f(HZ)</span><input></input></div>
            <div className='line'><span>一级谐波(HZ)</span><input></input></div>
            <div className='line'><span>二级谐波(HZ)</span><input></input></div>
            <FormularCanvas/>
        </div>
      </div>
    );
  }
  
  export default ContentBCG;
  