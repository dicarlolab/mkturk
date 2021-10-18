import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { isPlainObject, isFinite, isString, isArray, isNumber } from 'lodash';
import {
  collection,
  getDocs,
  getFirestore,
  QuerySnapshot,
  DocumentData,
  QueryDocumentSnapshot,
  Timestamp,
} from 'firebase/firestore';
import { firebaseApp } from '../../Auth';

const db = getFirestore(firebaseApp);

interface DataState {
  list: Array<DocumentData>;
  collection: string;
  status: string;
}

const initialState: DataState = {
  list: [],
  collection: '',
  status: '',
};

function timestampToDate(dataArr: Array<any>) {
  function _timestampToDate(elem: Timestamp, idx: number, arr: Array<any>) {
    try {
      arr[idx] = elem.toDate().toJSON();
    } catch {}
  }

  dataArr.forEach((data) => {
    for (let key of Object.keys(data)) {
      if (isArray(data[key])) {
        data[key].forEach(_timestampToDate);
      } else if (isPlainObject(data[key])) {
        try {
          data[key] = data[key].toDate().toJSON();
          continue;
        } catch {}

        for (let key2 of Object.keys(data[key])) {
          try {
            data[key][key2] = data[key][key2].toDate().toJSON();
          } catch {}
        }
      } else if (!isString(data[key]) && !isNumber(data[key])) {
        try {
          data[key] = data[key].toDate().toJSON();
        } catch {}
      }
    }
  });

  return dataArr;
}

export const fetchFirestoreCollection = createAsyncThunk(
  'firestore/fetchCollection',
  async (collectionId: string) => {
    const querySnapshot = await getDocs(collection(db, collectionId));
    let processedQuerySnapshot: Array<any> = [];
    querySnapshot.forEach((doc) => {
      processedQuerySnapshot.push(doc.data());
    });

    processedQuerySnapshot = timestampToDate(processedQuerySnapshot);
    return processedQuerySnapshot;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // When we send a request,
    // fetchFirestoreCollection.pending is being fired
    builder.addCase(fetchFirestoreCollection.pending, (state) => {
      state.status = 'loading';
    });

    // When Firestore responds with data,
    // fetchFirestoreCollection.fulfilled is fired
    builder.addCase(fetchFirestoreCollection.fulfilled, (state, action) => {
      console.log('hi');
      state.list = action.payload;
      state.collection = action.meta.arg;
      state.status = 'success';
      // action.payload.forEach((doc) => {
      //   state.list.push(doc.data());
      // });
      // state.collection = action.meta.arg;
      // state.status = 'success';
    });

    builder.addCase(fetchFirestoreCollection.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default dataSlice.reducer;
