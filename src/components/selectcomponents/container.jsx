import React, { useEffect } from "react";
import Selectcomponent from ".";
import { Grid } from "@mui/material";

import { useWatch } from "react-hook-form";


const optionsProvince = [
    { value: 'mazandaran', label: 'مازندران' },
    { value: 'tehran', label: 'تهران' },
];


const cityOptions = {
    mazandaran: [
        { value: 'amol', label: 'آمل' },
        { value: 'sari', label: 'ساری' },
    ],
    tehran: [
        { value: 'tehran', label: 'تهران' },
        { value: 'karaj', label: 'کرج' },
    ],
};

const optionsCategory = [
    { value: 'technology', label: 'تکنولوژی' },
    { value: 'health', label: 'سلامت' },
  ];

const interestOptions = [
    { value: 'sports', label: 'ورزش' },
    { value: 'music', label: 'موسیقی' },
    { value: 'reading1', label: '1کتابخوانی' },
    { value: 'reading2', label: '2کتابخوانی' },
    { value: 'reading3', label: '3کتابخوانی' },
    { value: 'reading4', label: '4کتابخوانی' },
  ];








const Selectcomponentcontainer = ({ control, Controller , setValue , errors}) => {

    const selectedProvince = useWatch({
        control,
        name: 'province',
      });


    // const [selectedProvince, setSelectedProvince] = useState(null);

    // const handleProvinceChange = selectedOption => {
        // setSelectedProvince(selectedOption);
    //     setValue('city', null);
        
    // };

    // setSelectedProvince(watch('province'))

    useEffect(() => {
        if (selectedProvince) {
          setValue('city', null);
        }
      }, [selectedProvince, setValue]);

    const selectdata = [
        {
            id: 1,
            name: 'province',
            // value: selectedProvince,
            title: 'اتخاب استان',
            options: optionsProvince,
            placeholder: 'لطفا استان را انتخاب کنید',
            isDisabled: false,
            isMulti:false,
            closeMenuOnSelect:true,
        },
        {
            id: 2,
            name: 'city',
            title: 'انتخاب شهر',
            options: selectedProvince ? cityOptions[selectedProvince.value] : [],
            placeholder: "لطفا شهر را انتخاب کنید",
            isDisabled: !selectedProvince,
            isMulti:false,
            closeMenuOnSelect:true,
        },
        {
            id: 3,
            name: 'categories',
            title: 'انتخاب دسته بندی ها',
            options: optionsCategory,
            placeholder: "لطفا دسته‌بندی‌ را انتخاب کنید",
            isDisabled: false,
            isMulti:true,
            closeMenuOnSelect:false,
        },
        {
            id: 4,
            name: 'interests',
            title: 'علاقه‌مندی‌ها',
            options: interestOptions,
            placeholder: "لطفا دسته‌بندی‌ها را انتخاب کنید",
            isDisabled: false,
            isMulti:true,
            closeMenuOnSelect:false,
        }
    ]



    return (
        <>
            {
                selectdata.map((data) => (
                    <Grid item xs={12} sm={6} key={data.id}>
                        <h3>{data.title}</h3>
                        <Controller
                            name={data.name}
                            control={control}
                            render={({ field }) => (
                                <Selectcomponent
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


export default Selectcomponentcontainer