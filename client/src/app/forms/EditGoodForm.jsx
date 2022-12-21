import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createGood, updateGood} from "../store/goodSlice";
import Button from "../components/Button";
import TextField from "../components/TextField";
import {useNavigate, useParams} from "react-router-dom";
import SelectField from "../components/SelectField";
import {createCategory, deleteCategory, getCategories, updateCategory} from "../store/categorySlice";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../firebase/firebase";
import goodService from "../services/good.service";


const CREATE = "create";
const UPDATE = "update";

const EditGoodForm = () => {
    const dispatch = useDispatch();
    const {goodId} = useParams();
    // const product = useSelector(getGoodById(goodId));
    const [product, setProduct] = useState();

    const categories = useSelector(getCategories());
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [typeEvent, setTypeEvent] = useState("");
    // const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);

    const emptyGood = {
        name: "",
        categoryName: "",
        category: "",
        price: "",
        image: ""
    };

    const [data, setData] = useState(emptyGood);

    useEffect(() => {
        if (goodId) {
            goodService.getGoodById(goodId).then(data => {
                const foundCategory = categories.find(item => item._id === data.category);
                const init = {...data, categoryName: foundCategory.name};
                setData(init);

                setProduct(data);
            });
        }
    }, []);

    useEffect(() => {
        if (typeEvent === CREATE) {
            const foundCategory = categories.find(item => item.name === data.categoryName);
            setTypeEvent("");

            setData((prevState) => ({
                ...prevState,
                category: foundCategory._id
            }));
        }
    }, [categories]);

    const handleCreateEditCategory = () => {

        setToggle(prev => !prev);
    };

    const handleDeleteCategory = () => {
        if (data.category) {
            dispatch(deleteCategory(data.category));
        } else {
            throw new Error("Category is required");
        }
    };

    const handleSaveCategory = () => {
        if (data.category) {
            dispatch(updateCategory({_id: data.category, name: data.categoryName}));
            setTypeEvent(UPDATE);
        } else {
            dispatch(createCategory(data.categoryName));
            setTypeEvent(CREATE);
        }

        setToggle(prev => !prev);
    };

    const handleChange = (target) => {

        if (target.name !== "category") {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        } else {

            const categoryName = target.value ? target.title : "";
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value,
                categoryName
            }));
        }
    };

    const uploadFile = async (e) => {

        e.preventDefault();

        const uploadFilePromise = new Promise((res) => {

            const file = e.target["uploadFile"]?.files[0];

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

                        // setImgUrl(downloadURL);
                        setData({...data, image: downloadURL});

                        res(downloadURL);
                    });
                }
            );

        });

        return uploadFilePromise;

    };

    const handleSubmit = async (e) => {

        const urlIamge = await uploadFile(e);

        const good = {
            name: data.name,
            price: data.price,
            category: data.category,
            image: urlIamge
        };

        if (goodId) {
            dispatch(updateGood({_id: data._id, ...good}));

        } else {
            dispatch(createGood(good));
            navigate(-1);
        }
    };

    let renderForm = false;
    if (goodId && product) {
        renderForm = true;
    } else if (!goodId) {
        renderForm = true;
    }

    return (renderForm &&
        <div
            className="m-auto mt-14 text-darkColor text-center p-8 bg-bgDark bg-opacity-20 shadow-lg shadow-bgDark rounded-3xl text-lg font-bold text-darkColor max-w-xl">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
                <div className="flex justify-between w-full">
                    <SelectField
                        label="Category"
                        name="category"
                        value={data.category}
                        onChange={handleChange}
                        options={categories}
                    />
                    <button disabled={!data.category}
                            onClick={handleCreateEditCategory}
                            className="pl-2 rounded-md mt-20 text-md w-10 h-10 bg-darkColor text-light text-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6 hover:text-green-600 hover:stroke-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                        </svg>
                    </button>
                    <button disabled={data.category}
                            onClick={handleCreateEditCategory}
                            className="pl-1 rounded-md mt-20 w-10 h-10 bg-darkColor text-light text-center hover:text-green-600 hover:stroke-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>

                    </button>
                    <button disabled={!data.category}
                            onClick={handleDeleteCategory}
                            className="pl-2 rounded-md mt-20 text-md w-10 h-10 bg-darkColor text-light text-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6 hover:text-red-600 hover:stroke-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                        </svg>
                    </button>
                </div>
                {toggle ?
                    <div>
                        <TextField name="categoryName" label="New name" value={data.categoryName}
                                   onChange={handleChange}/>
                        <button onClick={handleSaveCategory}>Save</button>
                    </div>
                    : null}
                <TextField
                    label="Price"
                    name="price"
                    type="number"
                    value={data.price}
                    onChange={handleChange}
                />
                <input type="file"
                       name="uploadFile"
                       className="text-darkColor border-none"/>

                {
                    !data.image &&
                    <div className="outerbar">
                        <div className="innerbar" style={{width: `${progresspercent}%`}}>{progresspercent}%</div>
                    </div>
                }
                {
                    data.image &&
                    <img src={data.image} alt="uploaded file" height={100}/>
                }

                <Button>{goodId ? "Update" : "Create"}</Button>
            </form>
        </div>
    );
};

export default EditGoodForm;
