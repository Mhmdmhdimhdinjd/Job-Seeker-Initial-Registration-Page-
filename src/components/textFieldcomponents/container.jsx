import React from "react";
import TextFieldcomponent from ".";
import { Grid } from "@mui/material";

const TextFielddata = [
    {
        id: 1,
        title: 'نام',
        name: 'firstName',
        placeholder: 'نام خود را وارد کنید',
    },
    {
        id: 2,
        title: 'نام خانوادگی',
        name: 'lastName',
        placeholder: 'نام خانوادکی خود را وارد کنید',
    },
    {
        id: 3,
        title: 'شماره تماس',
        name: 'phoneNumber',
        placeholder: 'لطفا شماره تماستون رو وارد کنید',
    },
    {
        id: 4,
        title: 'کد ملی',
        name: 'nationalCode',
        placeholder: 'لطفا کد ملی تون رو وارد کنید',
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