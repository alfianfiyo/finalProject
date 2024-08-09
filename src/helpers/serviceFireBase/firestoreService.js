import firestore from '@react-native-firebase/firestore';
import { useMutation } from 'react-query';

const getFirestoreData = async (collection) => {
  const snapshot = await firestore()
    .collection(collection)
    .get();

  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};


const getFirestoreDataByField = async (collection, field, value) => {
  const snapshot = await firestore()
    .collection(collection)
    .where(field, '==', value)
    .get();

  if (snapshot.empty) {
    return [];
  }

  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};



const addFirestoreData = () => {
  return useMutation(async newData => {
    const addDataPromises = newData.map(async item => {
      try {
        const docRef = await firestore().collection('orderFoody').add(item);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      } catch (error) {
        console.error("Error adding data to Firestore: ", error);
        throw error;
      }
    });

    return Promise.all(addDataPromises);
  });
};

export { getFirestoreData, getFirestoreDataByField, addFirestoreData };
