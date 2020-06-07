import {C} from '../constant';

function calc(l, factor){
    let value = Math.round(factor * C / l * 10)/10;
    return value;
}
function parse(v1, v2){
    return v1 === '' ? 0 : (v1 || v2);
}
export default (state = {d:60, db:70, l:300, typl:0, yjxb:0, ejxb: 0}, action)=>{
    let param = action.param || {};
    
    let d = parse(param.d, state.d);
    let db = parse(param.db, state.db);
    let l = parse(param.l, state.l);

    let typl = calc(l, 250);
    let yjxb = calc(l, 750);
    let ejxb = calc(l, 1250);

    switch(action.type){
        case 'UPDATE':
        default: 
           let obj = Object.assign({}, state, {
               d, db, l, typl, yjxb, ejxb
           })
           return obj;
    }
}