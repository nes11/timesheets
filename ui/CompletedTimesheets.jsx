import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import moment from 'moment';

const CompletedTimesheets = ({ timesheets }) => (
  <div>
    Completed timesheets
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Date</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {timesheets
          .filter((el) => el.status === 'completed')
          .map(timesheet => (
            <TableRow key={timesheet.id}>
              <TableCell>{timesheet.name}</TableCell>
              <TableCell>{timesheet.description}</TableCell>
              <TableCell>{moment(timesheet.time).format('dddd, DD MMM YYYY - HH:mm')}</TableCell>
              <TableCell>
                <Button variant="outlined">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </div>
);

export default CompletedTimesheets;