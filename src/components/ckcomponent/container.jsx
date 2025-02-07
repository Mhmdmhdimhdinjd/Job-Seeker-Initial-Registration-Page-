import React from "react";
import CkComponent from ".";
import { Grid, Typography} from "@mui/material";

const CkComponentContainer = ({ Controller, control , errors}) => {


    return (
        <Grid item xs={12}>

            <h3>رزومه کاری (سوابق)</h3>
            <Controller
                name="ck"
                control={control}
                render={({ field }) => (
                    <CkComponent
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            {errors.ck && <Typography fontSize={'0.75rem'} color="error">{errors.ck.message}</Typography>}


        </Grid>
    )
}


export default CkComponentContainer