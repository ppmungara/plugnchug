import {projectStorage} from "../firebase/config";

function useNumQuestions(bucket) {
    const storage = projectStorage;
    const storageRef = storage.ref(bucket);

    const fileListResponse = async () => {
      const fileList = await storageRef.listAll();
      return fileList
    }

    let numQuestions;

    fileListResponse().then((response) => {
        numQuestions = response.items.length;
    }).catch((e) => {
        console.log(e);
        numQuestions = 0;
    });

    return numQuestions;
    
}

export default useNumQuestions
