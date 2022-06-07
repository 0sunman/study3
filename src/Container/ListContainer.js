import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { initForm, readList } from "../module/board";
import List from "../Component/List/List";
const ListContainer = () =>{

    const record = useSelector(({ board }) => [...board.list]);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(initForm("list"))
      dispatch(readList());
    }, [dispatch]);
    const props = { 
        header:{
            num: "번호",
            subject: "제목",
            author: "작성자",
            date: "작성일",
        }, 
        record
    };

    return <List {...props}></List>
}
export default ListContainer;