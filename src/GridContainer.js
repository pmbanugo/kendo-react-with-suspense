import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { useState, useEffect } from 'react';
import getUsers from './data/user-service';

export default function GridContainer() {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            const data = await getUsers();
            setUsers(data)
        }
        loadData()
    }, [])

    return <Grid
    data={users}>
    <GridColumn field="name" />
    <GridColumn field="age" />
    <GridColumn field="gender" />
    <GridColumn field="country" />
  </Grid>
}