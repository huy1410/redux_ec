import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {

  GridToolbarContainer,
  GridToolbarExport,
} from '@material-ui/data-grid';
import { fetchUser } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const columns = [
  { field: 'id',
   headerName: 'ID',
    width: 120 },
  {
    field: 'firstName',
    headerName: 'Username',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Department',
    width: 200,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Job rank',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];


export default function DataGridDemo() {
  const user = useSelector((state) => state.user.data);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser());
	}, []);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      components={{
        Toolbar: CustomToolbar,
      }}
        rows={user}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}