import React from 'react'
type propsType = {
    lbl: String,
    isRequired: boolean,
    type?: any,
    name: any,
    placeholder?: any
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error: String,
    options?: any,
    values?: any,
    lblColumns: any,
    errorMsgColumns: any,
    inputCtrlColumns: any,
    value: string
}
const Input = ({ value, lblColumns, errorMsgColumns, inputCtrlColumns, lbl, isRequired, type, name, placeholder, handleChange, error, options, values }: propsType) => {
    const fnPrepareInputControls = () => {
        switch (type) {
            case 'text':
            case 'password':
            case 'number':
                return <input value={value} onChange={handleChange} className='form-control' type={type} name={name} placeholder={placeholder} />
            case 'radio':
                return <>
                    {
                        options.map((opt: any, ind: any) => {
                            return <React.Fragment key={`radio_${ind}`}><input onChange={handleChange} type={type} name={name} value={values[ind]} /><span className="ms-2 me-4">{opt}</span></React.Fragment>
                        })
                    }
                </>
            case 'checkbox':
                return <div></div>
            case 'file':
                return <input value={value} onChange={handleChange} className='form-control' type={type} name={name} placeholder={placeholder} />
            default:
                return <div></div>
        }
    }
    return (
        <div className="row mb-3">
            <div className={`col-${lblColumns} text-end`}>
                <b>{lbl} {isRequired && <span className='text-danger'>*</span>}</b>
            </div>
            <div className={`col-${inputCtrlColumns}`}>
                {fnPrepareInputControls()}
            </div>
            <div className={`col-${errorMsgColumns}`}>
                {error && <b className="text-danger">{error}</b>}
            </div>
        </div>
    )
}

export default Input
