import React from "react";
import { TextField } from "@mui/material";



const TextFieldcomponent = ({ data, errors }) => {



    return (
        <>

            <TextField
                placeholder={data.placeholder}
                variant="outlined"
                fullWidth
                defaultValue={data.defaultValue}
                error={!!errors[data.name]}
                helperText={errors[data.name]?.message}
            />

        </>
    )


}


export default TextFieldcomponent