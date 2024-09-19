import React from 'react';
import { CSVLink } from 'react-csv';
import { Button, Spinner } from 'react-bootstrap';

const ExportButton = ({ selectedUsers, users, onExport, loading }) => {
  const selectedData = selectedUsers.map(id => ({ id: id, ...users.find(user => user.id === id) }));

  return (
    <>
      <Button onClick={onExport} disabled={selectedUsers.length === 0}>
        {loading ? <Spinner animation="border" size="sm" /> : 'Export CSV'}
      </Button>
      <CSVLink
        data={selectedData}
        headers={[
          { label: 'ID', key: 'id' },
          { label: 'Email', key: 'email' },
          { label: 'First Name', key: 'firstName' },
          { label: 'Last Name', key: 'lastName' }
        ]}
        filename="users.csv"
      />
    </>
  );
};

export default ExportButton;
