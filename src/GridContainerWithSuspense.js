import { Grid, GridColumn } from "@progress/kendo-react-grid";

export default function GridContainer({ resource }) {
  const users = resource.read();

  return (
    <Grid data={users}>
      <GridColumn field="name" />
      <GridColumn field="age" />
      <GridColumn field="gender" />
      <GridColumn field="country" />
    </Grid>
  );
}
