import React, {useState} from "react";
import {useSelector} from "react-redux";
import {getGoodById} from "../store/goodSlice";
import Button from "../components/Button";
import TextField from "../components/TextField";
import {useNavigate, useParams} from "react-router-dom";
import SelectField from "../components/SelectField";

const EditGoodForm = () => {
    // const dispatch = useDispatch();
    const {goodId} = useParams();
    const navigate = useNavigate();
    const product = useSelector(getGoodById(goodId));

    const emptyGood = {
        name: "",
        category: "",
        price: "",
    };
    const init = product ? product : emptyGood;

    const [data, setData] = useState(init);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleGoBack = () => {
        navigate(-1);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // dispatch();
        console.log("---handleSubmit", {...data, price: Number(data.price)});
    };
    return (
        <div
            className="m-auto mt-14 text-darkColor text-center p-8 bg-bgDark bg-opacity-10 shadow-lg rounded-3xl text-lg font-bold text-darkColor max-w-xl">
            <Button label="Back" onClick={handleGoBack}></Button>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Re-Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
                <SelectField
                    label="Re-Category"
                    name="category"
                    value={data.category}
                    onChange={handleChange}
                />
                <TextField
                    label="Re-Price"
                    name="price"
                    type="number"
                    value={data.price}
                    onChange={handleChange}
                />
                <Button>Renew</Button>

            </form>
        </div>
    );
};

export default EditGoodForm;
