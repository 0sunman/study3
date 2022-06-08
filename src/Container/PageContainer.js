import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initForm, readContent } from "../module/board";
import PageComponent from "../Component/Page/PageComponent";

const PageContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const board = useSelector(({ board }) => board);

  const { content: props } = board;

  useEffect(() => {
    dispatch(initForm("page"));
    const paramsLength = location.pathname.split("/").length;
    const param = location.pathname.split("/")[paramsLength - 1];
    dispatch(initForm("page"));
    dispatch(readContent(param));
  }, [dispatch, location]);

  return <PageComponent type="page" {...props} />;
};
export default PageContainer;
