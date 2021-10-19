import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { isPlainObject, isArray, isString, isNumber } from 'lodash';
import {
  collection,
  getDocs,
  getFirestore,
  DocumentData,
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

function timestampToDate(dataArr: Array<DocumentData>) {
  function tttimestampToDate(elem: Timestamp) {
    if (elem instanceof Timestamp) {
      return elem.toDate().toJSON();
    }
    return elem;
  }

  const dataArrProcessed = dataArr.map((data) => {
    const dataProcessed = data;
    Object.keys(dataProcessed).forEach((key) => {
      if (isArray(dataProcessed[key])) {
        // dataProcessed[key].forEach(tttimestampToDate);
        dataProcessed[key] = dataProcessed[key].map(tttimestampToDate);
      } else if (isPlainObject(dataProcessed[key])) {
        if (dataProcessed[key] instanceof Timestamp) {
          dataProcessed[key] = dataProcessed[key].toDate().toJSON();
        } else {
          Object.keys(dataProcessed[key]).forEach((key2) => {
            if (dataProcessed[key][key2] instanceof Timestamp) {
              dataProcessed[key][key2] = dataProcessed[key][key2]
                .toDate()
                .toJSON();
            }
          });
        }
      } else if (
        !isString(dataProcessed[key]) &&
        !isNumber(dataProcessed[key])
      ) {
        if (dataProcessed[key] instanceof Timestamp) {
          dataProcessed[key] = dataProcessed[key].toDate().toJSON();
        }
      }
    });

    return dataProcessed;
  });

  return dataArrProcessed;
}

export const fetchFirestoreCollection = createAsyncThunk(
  'firestore/fetchCollection',
  async (collectionId: string) => {
    const querySnapshot = await getDocs(collection(db, collectionId));
    const firestoreDocs = querySnapshot.docs.map((doc: DocumentData) => {
      const returnDoc = doc.data();
      returnDoc.id = doc.id;
      console.log(doc.id);
      return returnDoc;
    });
    return timestampToDate(firestoreDocs);
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
