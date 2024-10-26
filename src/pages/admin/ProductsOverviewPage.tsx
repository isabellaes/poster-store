import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Product } from "../../utils/types";

const ProducstOverviewPage = () => {
  const rows: Product[] = [
    {
      id: "1",
      name: "test",
      price: 100,
      description: "",
      tags: ["tag", "tag"],
      size: "",
      img: "",
      category: {
        id: "1",
        name: "cat1",
        img: "",
      },
    },
    {
      id: "1",
      name: "test",
      price: 100,
      description: "",
      tags: [],
      size: "",
      img: "",
      category: {
        id: "1",
        name: "cat1",
        img: "",
      },
    },
    {
      id: "1",
      name: "test",
      price: 100,
      description: "",
      tags: [],
      size: "",
      img: "",
      category: {
        id: "1",
        name: "cat1",
        img: "",
      },
    },
    {
      id: "1",
      name: "test",
      price: 100,
      description: "",
      tags: [],
      size: "",
      img: "",
      category: {
        id: "1",
        name: "cat1",
        img: "",
      },
    },
  ];
  return (
    <div>
      <h2>Products overview page</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.size}</TableCell>
                <TableCell>{product?.tags?.join(", ")}</TableCell>
                <TableCell>{product.img}</TableCell>
                <TableCell>{product.category.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProducstOverviewPage;
