import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Product } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducer/productSlice";
import { Dispatch, State } from "../../redux/store";

const ProducstOverviewPage = () => {
  const [selectedRows, setSelectedRows] = useState<Product[]>([]);
  const products = useSelector((state: State) => state.product.products);
  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
  ];
  console.log(selectedRows);
  return (
    <div className="admin-productspage">
      <h2>Products overview page</h2>

      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[20]}
        checkboxSelection
        onRowSelectionModelChange={(ID) => {
          const selectedIds = new Set(ID);
          const product = products.filter((x) => selectedIds.has(x._id));
          setSelectedRows(product);
        }}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default ProducstOverviewPage;
