import React from 'react';
import {connect} from 'react-redux'
import './content_bcg.css';
import FormularCanvas from './formular_canvas';
import img from '../assets/bcg_img.png';

function ContentBCG({d, db, l, typl, yjxb, ejxb, onDChange, onDbChange, onLChange}) {
    return (
      <div className="contentBCG">
        <div className="constainer left">
            <span className="badge badge-primary badge-lg">输入</span>
            <div className='line' style={{marginTop: '20px'}}>
              <span>主管直径D(mm)</span>
              <input value={d} type='text' onChange={onDChange.bind(this)}></input>
            </div>
            <div className='line'>
              <span>调音管直径Db(mm)</span>
              <input value={db} onChange={onDbChange.bind(this)}></input>
            </div>
            <div className='line'>
              <span>调音管长度L(mm)</span>
              <input value={l} onChange={onLChange.bind(this)}></input>
            </div>
            <img src={img}/>
        </div>
        <div className="constainer right">
            <span className="badge badge-primary badge-sm">输出</span>
            <div className='line' style={{marginTop: '20px'}}>
              <span>调音频率f(HZ)</span>
              <input value={typl} readOnly></input>
            </div>
            <div className='line'>
              <span>一级谐波(HZ)</span>
              <input value={yjxb} readOnly></input>
            </div>
            <div className='line'>
              <span>二级谐波(HZ)</span>
              <input value={ejxb} readOnly></input>
            </div>
            <FormularCanvas/>
        </div>
      </div>
    );
  }
  
  const mapStateToProps = state=>{
    function parse(key){
      return state[key] ? state[key].toString() : '';
    }
    return {
      d: parse('d'),
      db: parse('db'),
      l: parse('l'),
      typl: parse('typl'),
      yjxb: parse('yjxb'),
      ejxb: parse('ejxb')
    }

  }

  const mapDispatchToProps = dispatch=>{
    return {
      onDChange: e=>{
        dispatch({  
          type: 'UPDATE',
          param: {
            d: e.target.value
          }
        })
      },
      onDbChange: e=>{
        dispatch({  
          type: 'UPDATE',
          param: {
            db: e.target.value
          }
        })
      },
      onLChange: e=>{
        dispatch({  
          type: 'UPDATE',
          param: {
            l: e.target.value
          }
        })
      }
    }
  }
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(ContentBCG);
  