import { Pagination, TablePagination } from "@mui/material";

export const TablePaginationSection = ({
  handleChangePage,
  size,
}: {
  handleChangePage: (event: any, pageIndex: number) => void;
  size: number;
}) => {
  return (
    <Pagination
      sx={{ justifyContent: "center", display: "flex", marginTop: "90px" }}
      onChange={handleChangePage}
      count={size || 0}
      color="primary"
    />
  );
};
