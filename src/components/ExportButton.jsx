import React from 'react';
import { CSVLink } from 'react-csv';
import { Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
          { label: 'Last Name', key: 'lastName' },
          { label: 'Password', key: 'password' }
        ]}
        filename="users.csv"
      />
    </>
  );
};

ExportButton.propTypes = {
    selectedUsers: PropTypes.arrayOf(PropTypes.number).isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })).isRequired,
    onExport: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};
  
  
export default ExportButton;
