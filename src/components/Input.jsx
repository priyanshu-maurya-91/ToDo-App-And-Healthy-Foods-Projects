const Input = ({onHandleKeyDown}) => {




  return (
    <>
      <input className="input" type="text" placeholder="Enter Healthy food you Want to buy" 
      onKeyDown = {onHandleKeyDown} required
      />
    </>
  );
};

export default Input;
