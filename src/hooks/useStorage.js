import {projectStorage} from "../firebase/config";
import {useState, useEffect} from 'react';

const useStorage = (bucket) => {

    const storage = projectStorage;
    const storageRef = storage.ref(bucket);

    const [url, setUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const urlReceived = await storageRef.getDownloadURL();
            setUrl(urlReceived);
        }
        if (!bucket.includes("_0")) {
            fetchData().catch((error) => {console.log(error)});
        }
    }, [bucket, url, storageRef])

    return url;

}

export default useStorage;