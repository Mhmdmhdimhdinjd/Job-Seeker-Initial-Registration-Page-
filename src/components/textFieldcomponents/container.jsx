import React from "react";
import TextFieldcomponent from ".";
import { Grid } from "@mui/material";

const TextFielddata = [
    {
        id: 1,
        title: 'نام',
        name: 'firstName',
        placeholder: 'نام خود را وارد کنید',
        defaultValue:''
    },
    {
        id: 2,
        title: 'نام خانوادگی',
        name: 'lastName',
        placeholder: 'نام خانوادکی خود را وارد کنید',
        defaultValue:''
    },
    {
        id: 3,
        title: 'شماره تماس',
        name: 'phoneNumber',
        placeholder: 'لطفا شماره تماستون رو وارد کنید',
        defaultValue:'09'
    },
    {
        id: 4,
        title: 'کد ملی',
        name: 'nationalCode',
        placeholder: 'لطفا کد ملی تون رو وارد کنید',
        defaultValue:''
    },
]

const TextFieldcomponentcontainer = ({ Controller, control, errors }) => {


    return (
        <>

            {
                TextFielddata.map((data) => (
                    <Grid item xs={12} sm={6} key={data.id} >
                        <h3>{data.title}</h3>
                        <Controller
                            name={data.name}
                            control={control}
                            defaultValue={data.defaultValue}
                            render={({ field }) => (
                                <TextFieldcomponent
                                    {...field}
                                    errors={errors}
                                    data={data}
                                />
                            )}
                        />
                    </Grid>
                ))
            }

        </>
    )
}


export default TextFieldcomponentcontainer