import { useState, useEffect } from "react";
import { db } from "../fb-config";
import { collection, onSnapshot, snapshotEqual } from "firebase/firestore";

const useCollection = (path) => {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    return onSnapshot(collection(db, path), () => {
      const documents = [];

      snap.forEach((doc) => documents.push({ id: doc.id, ...doc.data() }));

      setDocs(docuemnts);
    });
  }, [path]);

  return docs;
};

export default useCollection;
