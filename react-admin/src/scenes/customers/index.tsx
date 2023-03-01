import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import PageContainer from "components/PageContainer";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { useGetCustomersQuery } from "state/api";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery(null);
  console.log("🚀 ~ file: index.tsx:8 ~ Customers ~ data:", data);
  const columns: GridColumns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "PhoneNumber",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
    },
  ];
  return (
    <PageContainer>
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box mt="40px" height="75vh" sx={{
        "& .MuiDataGrid-root":{
            border:"none"
        },
        "& .MuiDataGrid-cell":{
            borderBottom:'none'
        },
        "& .MuiDataGrid-columnHeaders":{
            backgroundColor:theme.palette.background.paper,
            color:theme.palette.customSecondary[100],
            borderBottom:'none'
        },
        "& .MuiDataGrid-virtualScroller":{
            backgroundColor:theme.palette.primary.light
        },
        "& .MuiDataGrid-footerContainer":{
            backgroundColor:theme.palette.primary.light,
            color:theme.palette.customSecondary[100]
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
            color:`${theme.palette.customSecondary[200]} !important`
        }
      }}>
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </PageContainer>
  );
};

export default Customers;
