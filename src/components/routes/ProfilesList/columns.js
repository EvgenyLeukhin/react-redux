import React from 'react';

import matchSorter from 'match-sorter';

const columns = [
  {
    Header: 'ID',
    accessor: 'id',
    width: 60,
    // eslint-disable-next-line react/display-name
    Cell: ({ original }) => {
      return (
        <div style={{ textAlign: 'right' }}>
          <span>{original.id}</span>
        </div>
      );
    }
  },
  {
    Header: 'Name',
    accessor: 'name',
    id: 'name',
    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['name'] }),
    filterAll: true
  },
  {
    Header: 'Surname',
    accessor: 'surname',
    id: 'surname',
    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['surname'] }),
    filterAll: true
  },
  {
    Header: 'Email',
    accessor: 'email',
    id: 'email',
    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['email'] }),
    filterAll: true
  },
  {
    Header: 'Job title',
    accessor: 'job_title',
    id: 'job_title',
    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['job_title'] }),
    filterAll: true
  },
];

export default columns;
