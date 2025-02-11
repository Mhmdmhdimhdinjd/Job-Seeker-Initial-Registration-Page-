import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useTable } from 'react-table';

// const storedData = [useSelector((state) => state.job_seeker.PersonalInformation)]

// const data = storedData.map(item => ({
//   firstName: item.firstName,
//   lastName: item.lastName,
//   phoneNumber: item.phoneNumber,
//   nationalCode: item.nationalCode,
//   province: item.province.label,
//   city: item.city.label,
//   categories: item.categories.map(category => category.label).join(','),
//   gender: item.gender,
//   interests: item.interests.map(interest => interest.label).join(','),
//   ck: item.ck
// }));

// console.log(data);

const DataTable = () => {

  const storedData = [useSelector((state) => state.job_seeker.PersonalInformation)]

  const data = storedData.map(item => ({
    firstName: item.firstName,
    lastName: item.lastName,
    phoneNumber: item.phoneNumber,
    nationalCode: item.nationalCode,
    province: item.province.label,
    city: item.city.label,
    categories: item.categories.map(category => category.label).join(','),
    geneder: item.geneder,
    interests: item.interests.map(interest => interest.label).join(','),
  }));

  const columns = useMemo(
    () => [
      { Header: 'نام', accessor: 'firstName' },
      { Header: 'نام خانوادگی', accessor: 'lastName' },
      { Header: 'شماره تماس', accessor: 'phoneNumber' },
      { Header: 'کد ملی', accessor: 'nationalCode' },
      { Header: 'استان', accessor: 'province' },
      { Header: 'شهر', accessor: 'city' },
      { Header: 'دسته‌بندی‌ها', accessor: 'categories' },
      {
        Header: 'جنسیت',
        accessor: 'geneder',
        Cell: ({ row }) => {
          const gender = row.original.geneder;
          return gender === 'male' ? 'مرد' : gender === 'female' ? 'زن' : gender;
        }
      }
      
      ,
      { Header: 'علاقه‌مندی‌ها', accessor: 'interests' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <div className="table__container">
      {rows.map((row , rowIndex) => {
        prepareRow(row);
        return (
          <table key={rowIndex} className="table" {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <tbody {...getTableBodyProps()}>
              {row.cells.map(cell => (
                <tr key={cell.column.id}>
                  <th >{cell.column.Header}</th>
                  <td sx={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>
                    {cell.render('Cell')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      })}

      <Typography>
        درصورتی که جدول بصورت کامل مشخص نیست اسکرول کنید
      </Typography>

    </div>
  );
};

export default DataTable;
