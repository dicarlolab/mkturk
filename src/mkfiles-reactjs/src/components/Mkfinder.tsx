import React, { useState, useEffect } from 'react';
import 'react-tabulator/lib/styles.css';
// import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap4.min.css';
import 'react-tabulator/lib/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import '../util/storage';
import { listStuff } from '../util/storage';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { cloneDeep } from 'lodash';

function Mkfinder() {
  const firestoreData = useAppSelector((state) => state.data.list);
  let tableRefs: any = null;
  let firestoreDataPrime: any[] = [];
  const [selectedName, setSelectedName] = useState('');
  const [tableData, setTableData] = useState(firestoreDataPrime);
  const [tableRef, setTableRef] = useState(tableRefs);

  useEffect(() => {
    console.time('clonedeep');
    firestoreDataPrime = cloneDeep(firestoreData);
    setTableData(cloneDeep(firestoreData));
    console.timeEnd('clonedeep');
  }, [firestoreData]);

  const columns = [{ title: 'name', field: 'name' }];

  const rowClick = (e: any, row: any) => {
    console.log('ref table: ', tableRef);
    console.log(`rowClick id: ${row.getData().name}`, row, e);
    setSelectedName(row.getData().name);
  };

  return (
    <ReactTabulator
      ref={(ref) => {
        setTableRef(ref);
      }}
      data={tableData}
      columns={columns}
      rowClick={rowClick}
      index={'name'}
      layout={'fitColumns'}
      tooltips={true}
    />
  );
}

export default Mkfinder;
