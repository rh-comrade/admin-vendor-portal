"use client"
import React, { useEffect, useState } from 'react'
import styles from './Products.module.css'
import { useQuery } from '@apollo/client'
import { PRODUCTS_LIST_GQ } from '@/services/graphql/productsListGQ'
import { useAppContext } from '@/statemanagement/appContext'
import AppTable from '@/reusableComponents/AppTable/AppTable'
import Button from '@/reusableComponents/inputControls/Button'
import { Popup } from '@/reusableComponents/Popup/Popup'
import config from './configuration.json'
import Input from '@/reusableComponents/inputControls/Input'
import { clearFormData, fieldLevelValidation, formLevelValidation, setDataToForm } from '@/services/validations'


export const Products = () => {
    const [formControls, setFormControls] = useState(config)
    const { loading, error, data, refetch } = useQuery(PRODUCTS_LIST_GQ)
    const [isShowPopup, setIsShowPopup] = useState(false)
    const { dispatch }: any = useAppContext()
    useEffect(() => {
        dispatch({
            type: "LOADER",
            payload: loading
        })
    }, [loading])

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }
    const fnAddProduct = () => {
        setIsShowPopup(true);
    }

    const fnClosePopup = () => {
        setIsShowPopup(false)
    }
    const handleSubmit = () => {
        const [isFormValid, dataObj] = formLevelValidation(formControls, setFormControls)
        if (!isFormValid) return;
    }
    const handleChange = (eve: any) => {
        fieldLevelValidation(eve, formControls, setFormControls)
    }
    return (
        <div className='container-fluid mt-3'>

            <Button align='text-end' text="ADD PRODUCT" handleClick={fnAddProduct} bgColor="black" color="white" />
            <AppTable headers={["Photo", "Name", "Cost"]} data={data?.getProducts || []} columns={["photo", "name", "cost"]} isShowDelete={true} isShowEdit={true} handleEdit={handleEdit} handleDelete={handleDelete} />
            {isShowPopup && <Popup closePopup={fnClosePopup} handleFormSubmit={handleSubmit}>
                <div className='mt-5'>
                    {
                        formControls.map((obj, ind) => {
                            return <Input key={`Input_${ind}`} {...obj} handleChange={handleChange} />
                        })
                    }
                </div>
            </Popup>
            }
        </div>
    )
}
