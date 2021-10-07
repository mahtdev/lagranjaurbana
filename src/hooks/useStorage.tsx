import {useEffect, useState} from "react";
// import {projectFireStore, projectStore, timestamp} from "../firebase/config";
import {projectStore} from "../firebase/config";

const useStorage = (file: any) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // reference
        const storageRef = projectStore.ref(file.name);
        // const collectionRef = projectFireStore.collection('products');

        storageRef.put(file).on('state_changed', (snap: any) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err: any) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            // const createdAt = timestamp();
            // collectionRef.add({url, createdAt})
            setUrl(url);
        });
    }, [file]);

    return {progress, url, error};
}

export default useStorage;