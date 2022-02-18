function task(props) {
  return (
    <div key={props.keyCode}>
      <li key={props.keyCode}>
        {props.text}
      </li>
      <button onClick={()=>props.deleteToDo(props.text)}>Done</button>
    </div>

  );
}

export default task;
