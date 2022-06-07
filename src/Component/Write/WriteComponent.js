import styled from "styled-components";
import PageComponent from "../Page/PageComponent";

const SimpleInput = styled.input`width:100%;height:30px;font-size:15px;padding:0;border-width:0;`
const SimpleTextArea = styled.textarea`width:100%;height:100%;font-size:15px;padding:0;border-width:0;`
const SimpleInputComponent = ({name,onChange})=>{
    return <SimpleInput type="text" name={name} onChange={onChange} />
}

const WriteComponent = ( {onChange, onClick})=>{
    const author = <SimpleInputComponent name='author' onChange={onChange}/>
    const subject = <SimpleInputComponent name='subject' onChange={onChange}/>
    const content = <SimpleTextArea name='content' onChange={onChange}/>

    const props = {author, subject, content}
    return (
        <>
      <PageComponent {...props}/>        
        <p>
          <button onClick={onClick}>전송</button>
        </p>
      </>
    );
}
export default WriteComponent;