import React, {useState} from "react";
import {storage} from "../../firebase/firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";

const UploadPhotos = () => {

    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);
    console.log("----imgUrl", imgUrl);

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = e.target[0]?.files[0];

        if (!file) return;

        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL);
                });
            }
        );
    };

    const handleReadImage = () => {
// Create a reference from a Google Cloud Storage URI
//         const gsReference = ref(storage, "gs://bucket/images/stars.jpg");

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file"/>
                <button type="submit">Upload</button>
            </form>
            {
                !imgUrl &&
                <div className="outerbar">
                    <div className="innerbar" style={{width: `${progresspercent}%`}}>{progresspercent}%</div>
                </div>
            }
            {
                imgUrl &&
                <img src={imgUrl} alt="uploaded file" height={100}/>
            }
            <button onClick={handleReadImage}></button>
        </div>
    );
};

export default UploadPhotos;


