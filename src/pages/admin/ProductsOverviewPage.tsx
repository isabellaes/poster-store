import { useState } from "react";
import { products } from "../../utils/data";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Product } from "../../utils/types";

const ProducstOverviewPage = () => {
  const [selectedRows, setSelectedRows] = useState<Product[]>([]);
  const columns: GridColDef<(typeof products)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Product",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 110,
      editable: true,
    },
    {
      field: "size",
      headerName: "Size",
      width: 110,
      editable: true,
    },
    {
      field: "tags",
      headerName: "Tags",
      width: 110,
      editable: true,
    },
    {
      field: "img",
      headerName: "Image",
      width: 110,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      width: 110,
      editable: true,
      valueGetter: (value, row) => `${row.category.name}`,
    },
  ];
  console.log(selectedRows);
  return (
    <div className="admin-productspage">
      <h2>Products overview page</h2>

      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        onRowSelectionModelChange={(ID) => {
          const selectedIds = new Set(ID);
          const product = products.filter((x) => selectedIds.has(x.id));
          setSelectedRows(product);
        }}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default ProducstOverviewPage;
