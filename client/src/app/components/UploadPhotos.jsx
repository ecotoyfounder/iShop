import React, {useState} from "react";
import {storage} from "../../firebase/firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import PropTypes from "prop-types";

const UploadPhotos = ({onChange}) => {

    const [imgUrl, setImgUrl] = useState(null);
    // const [file] = useState();
    const [progresspercent, setProgresspercent] = useState(0);
    console.log("----imgUrl", imgUrl);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("---1", e);
        console.log("---2", e.target[0]?.files[0]);
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
                    console.log("getDownloadURL");
                    setImgUrl(downloadURL);
                    onChange({name: "image", value: downloadURL});
                });
            }
        );
        console.log("---End getDownloadURL");
    };

    const handleReadImage = () => {
// Create a reference from a Google Cloud Storage URI
//         const gsReference = ref(storage, "gs://bucket/images/stars.jpg");

    };

    // const handleSelectFile = (e) => {
    //     console.log(e);
    //     console.log("---handleSelectFile", e.target.value);
    // };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file"/>
                <button type="submit">Upload</button>
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
            </form>
        </div>
    );
};

UploadPhotos.propTypes = {
    onChange: PropTypes.func
};

export default UploadPhotos;


