import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { writeContent, initForm } from "../module/board";

import WriteComponent from "../Component/Write/WriteComponent";
const WriteContainer = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errorWrite } = useSelector(({ board }) => (board));

    const [data, setData] = useState({
        author: "",
        subject: "",
        content: "",
    });
    const onChange = (e) => {
        try {
        setData({ ...data, [e.target.name]: e.target.value });
        } catch (err) {
        console.log(err);
        }
    };
    const onClick = () => {
        console.log(data);
        try {
        dispatch(writeContent(data));
        } catch (err) {
        console.log(err);
        }
    };
    useEffect(() => {
        dispatch(initForm("write"));
    }, [dispatch]);
    useEffect(() => {
        if (errorWrite === false) {
        console.log("성공");
        navigate("/");
        }
        if (errorWrite) {
        console.log(errorWrite);
        }
    }, [errorWrite,navigate]);

    const props = {onClick, onChange};
    return (
        <WriteComponent {...props}></WriteComponent>
    );
}
export default WriteContainer