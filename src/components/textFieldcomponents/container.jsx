import React from "react";
import TextFieldcomponent from ".";
import { Grid } from "@mui/material";

const TextFielddata = [
    {
        id: 1,
        title: 'نام',
        name: 'firstName',
        placeholder: 'enter your first name',
        defaultValue: null
    },
    {
        id: 2,
        title: 'نام خانوادگی',
        name: 'lastName',
        placeholder: 'enter your last name',
        defaultValue: null
    },
    {
        id: 3,
        title: 'شماره تماس',
        name: 'phoneNumber',
        placeholder: 'لطفا شماره تماستون رو وارد کنید',
        defaultValue: '09',
    },
    {
        id: 4,
        title: 'کد ملی',
        name: 'nationalCode',
        placeholder: 'لطفا کد ملی تون رو وارد کنید',
        defaultValue: null
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
                                    value={field.value}
                                    onChange={field.onChange}
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