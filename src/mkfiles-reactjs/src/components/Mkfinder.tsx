import React, { useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';
// import { DocumentData } from 'firebase/firestore';
import {
  FileArray,
  FileBrowser,
  FileContextMenu,
  FileList,
  FileNavbar,
  FileToolbar,
  setChonkyDefaults,
  ChonkyActions,
} from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
import { useAppSelector } from '../app/hooks';

setChonkyDefaults({ iconComponent: ChonkyIconFA });

function Mkfinder(): JSX.Element {
  const firestoreData = useAppSelector((state) => state.data.list);
  const firestoreLocation = useAppSelector((state) => state.data.collection);
  // // let tableRefs: any = null;
  // // const [selectedName, setSelectedName] = useState('');
  const [tableData, setTableData] = useState([] as FileArray);
  // const [tableColumns, setTableColumns] = useState([
  //   {},
  // ] as unknown as readonly Column<DocumentData, unknown>[]);
  // const [tableIndex, setTableIndex] = useState('');
  // // const [tableRef, setTableRef] = useState(tableRefs);
  useEffect(() => {
    setTableData(cloneDeep(firestoreData) as FileArray);
    // if (firestoreLocation === 'marmosets') {
    //   const columns = [
    //     {
    //       key: 'name',
    //       name: 'Name',
    //     },
    //     { key: 'sex', name: 'Sex' },
    //   ];
    //   setTableColumns(columns);
    // }
  }, [firestoreData, firestoreLocation]);

  return (
    <FileBrowser
      files={tableData}
      defaultFileViewActionId={ChonkyActions.EnableListView.id}
    >
      <FileNavbar />
      <FileToolbar />
      <FileList />
      <FileContextMenu />
    </FileBrowser>
  );

  // useEffect(() => {
  //   setTableData(cloneDeep(firestoreData));
  //   if (firestoreLocation === 'marmosets') {
  //     const columns = [
  //       {
  //         title: "<input id='select-all' type='checkbox'/>",
  //         headerSort: false,
  //         width: 15,
  //       },
  //       { title: 'Name', field: 'name' },
  //       { title: 'Sex', field: 'sex' },
  //       { title: 'DOB', field: 'birthdate' },
  //       { title: 'RFID', field: 'rfid' },
  //     ];
  //     const index = 'name';
  //     setTableColumns(columns);
  //     setTableIndex(index);
  //   } else if (firestoreLocation === 'devices') {
  //     const columns = [{ title: 'Model', field: 'model' }];
  //     const index = 'model';
  //     setTableColumns(columns);
  //     setTableIndex(index);
  //   }
  // }, [firestoreData, firestoreLocation]);

  // return (
  //   <ReactTabulator
  //     // ref={(ref) => {
  //     //   setTableRef(ref);
  //     // }}

  //     data={tableData}
  //     columns={tableColumns}
  //     // rowClick={rowClick}
  //     index={tableIndex}
  //     layout={'fitColumns'}
  //     tooltips
  //     selectable={1}
  //     selectableRangeMode={'click'}
  //   />
  // );
}

export default Mkfinder;
