import React from 'react';
import './form-input.scss'
const FormInput = ({handleChange,label,...otherProps}) => {
     let lab = null
     if(label){
         lab = (<label className={`form-input-label ${otherProps.value.length?'shrink':''}`} >
             {label}
         </label>)
     }
    return ( 
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {/* {label ?
             (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `} >{label}</label>) 
             :null
            } */
            lab
            }
        </div>
     );
}
 
export default FormInput;