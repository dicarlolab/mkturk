import React, { useState, useEffect } from 'react';
// import { cloneDeep } from 'lodash';
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
  const firestoreDataInfos = useAppSelector((state) => state.data.docsInfo);
  // // let tableRefs: any = null;
  // // const [selectedName, setSelectedName] = useState('');
  // const [tableData, setTableData] = useState([] as FileArray);
  const [fileBrowserData, setFileBrowserData] = useState([] as FileArray);
  // const [tableColumns, setTableColumns] = useState([
  //   {},
  // ] as unknown as readonly Column<DocumentData, unknown>[]);
  // const [tableIndex, setTableIndex] = useState('');
  // // const [tableRef, setTableRef] = useState(tableRefs);
  useEffect(() => {
    // setTableData(cloneDeep(firestoreData) as FileArray);
    setFileBrowserData(firestoreDataInfos);
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
  }, [firestoreData, firestoreLocation, firestoreDataInfos]);

  return (
    <FileBrowser
      files={fileBrowserData}
      defaultFileViewActionId={ChonkyActions.EnableListView.id}
    >
      <FileNavbar />
      <FileToolbar />
      <FileList />
      <FileContextMenu />
    </FileBrowser>
  );
}

export default Mkfinder;
