const WriteComponent = ( {onChange, onClick})=>{
    return (
      <>
        <p>
          <input type="text" name="author" onChange={onChange} />
        </p>
        <p>
          <input type="text" name="subject" onChange={onChange} />
        </p>
        <p>
          <textarea name="content" onChange={onChange} />
        </p>
        <p>
          <button onClick={onClick}>전송</button>
        </p>
      </>
    );
}
export default WriteComponent;