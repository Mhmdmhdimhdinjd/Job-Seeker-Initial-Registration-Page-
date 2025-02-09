import { Box, FormControl, FormLabel, Typography, RadioGroup, FormControlLabel, Radio, Grid } from "@mui/material";
import React from "react";



const Genedercomponents = ({ Controller, control, errors }) => {



    return (
        <Grid item xs={12} sm={6}>
            <h3>انتخاب جنسیت</h3>
            <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                    <Box>
                        <FormControl component="fieldset">
                            <FormLabel id="demo-radio-buttons-group-label">
                                <Typography fontFamily={'gandom'}>
                                    جنسیت
                                </Typography>
                            </FormLabel>
                            <RadioGroup
                                {...field}
                                aria-label="gender"
                                name="gender1"
                                row
                            >
                                <FormControlLabel value="male" control={<Radio />} label="مرد" />
                                <FormControlLabel value="female" control={<Radio />} label="زن" />
                            </RadioGroup>
                        </FormControl>
                        {errors.gender && <Typography color="error">{errors.gender.message}</Typography>}

                    </Box>
                )}
            />

        </Grid>
    )
}


export default Genedercomponents