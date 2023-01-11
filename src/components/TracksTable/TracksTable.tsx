import React, { useState } from 'react';
import { Table } from 'antd';

import { useAppDispatch } from '../../redux/hooks';
import { setTrack } from '../../redux/reducers/tracksSlice';

import { dataSource, columns } from './consts';

import './TracksTable.scss';

const TracksTable = () => {
  const dispatch = useAppDispatch();

  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  return (
    <div className='TracksTable'>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        onRow={(record) => {
          return {
            onClick: () => {
              dispatch(setTrack([[record.fromLat, record.fromLng], [record.toLat, record.toLng]]));
              setSelectedRow(record.key);
            },
          };
        }}
        rowClassName={(record) => {
          if (selectedRow) {
            return record.key === selectedRow ? "selected-row" : "";
          } else {
            return "";
          }
        }}
      />
    </div>
  );
};

export default TracksTable;
