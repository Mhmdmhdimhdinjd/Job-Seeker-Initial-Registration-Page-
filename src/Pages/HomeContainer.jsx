import React from "react";
import { useDispatch } from 'react-redux';
import { setInformation } from "../redux/features/Slice";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Grid, Container, ThemeProvider, createTheme, Box, Button } from "@mui/material";

import Selectcomponentcontainer from '../components/selectcomponents/container';
import TextFieldcomponentcontainer from "../components/textFieldcomponents/container";
import CkComponentContainer from "../components/ckcomponent/container";
import Navbar from "../components/Navbarcomponents";
import DataTable from "../components/tablecomponent";
import Genedercomponents from "../components/Genedercomponent";
import Footer from "../components/Footer";


const theme = createTheme({
    typography: {
        fontFamily: 'gandom',
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: 'small',
            },
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        fontFamily: 'gandom',
                        backgroundColor: 'white',
                        borderRadius: 'inherit'
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textAlign: 'right'
                },
            },
        }
    },
});

const schema = yup.object().shape({
    firstName: yup.string().required('نام ضروری است').matches(/^[\u0600-\u06FF\s]+$/,'فقط حروف فارسی مجاز است'),//روش اول 
    lastName: yup.string().matches(/^[\u0600-\u06FF\s]+$/,{message: 'فقط حروف فارسی مجاز است' , excludeEmptyString: true,}).required('نام خانوادگی ضروری است'),//روش دوم
    nationalCode: yup.string().matches(/^\d{10}$/,{message: 'کد ملی باید 10 رقم باشد' , excludeEmptyString:true}).required('کد ملی ضروری است'),
    phoneNumber: yup.string().matches(/^09\d{9}$/,{message: 'شماره تماس باید 11 رقم و با 09 شروع شود' , excludeEmptyString:true}).required('شماره تماس ضروری است'),
    geneder:yup.string().required('لطفا جنسیت را وارد کنید'),
    categories: yup.array().max(2, 'حداکثر ۲ دسته‌بندی می‌توانید انتخاب کنید').required('انتخاب دسته‌بندی‌ها ضروری است'),
    interests: yup.array().max(3, 'حداکثر ۳ گزینه می‌توانید انتخاب کنید').required('انتخاب گزینه‌ها اجباری است'),
    ck: yup.string().required('رزومه ضروری است').min(20, 'رزومه باید حداقل 20 حرف باشد'),
    province: yup.object().required("استان را انتخاب کنید"),
    city: yup.object().required("شهر را انتخاب کنید"),
});

const HomeContainer = () => {
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        // mode: 'onChange',
        // reValidateMode: 'onChange',
    });

    const onSubmit = data => {
        console.log(data);
        dispatch(setInformation(data))
    };

    const dispatch = useDispatch();


    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Container>
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={4}>
                        <TextFieldcomponentcontainer Controller={Controller} control={control} errors={errors} />
                        <Genedercomponents control={control} Controller={Controller} errors={errors} />
                        <Selectcomponentcontainer Controller={Controller} control={control}  setValue={setValue} errors={errors} />
                        <CkComponentContainer Controller={Controller} control={control} errors={errors} />
                    </Grid>
                    <Box sx={{ direction: 'ltr' }}>

                        <Button sx={{ margin: '2rem 0' }} color="primary" size="large" variant="contained" type="submit">ثـــبت اطـــلاعات اولیه</Button>

                    </Box>
                </form>

                <DataTable />

            </Container>
            <Footer/>
        </ThemeProvider>
    );
};

export default HomeContainer;
