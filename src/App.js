import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteData, addData, EditData } from './Actions';

function App() {
  const [inputdata, setInputdata] = useState({ FirstName: "", LastName: "", Age: "" });
  const [isEdit, setISedit] = useState(-1)

  const dispatch = useDispatch();

  const selecter = useSelector((selector) => selector)
  console.log(selecter);


  const handleonchange = (e) => {
    console.log(e.target.name);

    console.log(e.target.value);

    setInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }

  const handlesubmit = () => {
    if (isEdit !== -1) {
      dispatch(EditData(isEdit, inputdata))
    }
    else {
      dispatch(addData(inputdata))
      setInputdata({ FirstName: "", LastName: "", Age: "" })
    }
  }

  const handledelet = (index) => {
    dispatch(DeleteData(index))
  }

  const handleEdit = (item, indexrecord) => {
    setISedit(item);
    setInputdata(indexrecord)

  }

  return (
    <div className="App">
      <div>
        <label htmlFor='fname'>First Name</label>
        <input type='yext' id='fname' name='FirstName' value={inputdata.FirstName} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <label htmlFor='lname'>Last Name</label>
        <input type='text' id='lname' name='LastName' value={inputdata.LastName} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' name='Age' value={inputdata.Age} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <button onClick={() => handlesubmit()}>SUBMIT</button>
      </div>
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </thead>
        <tbody>
          {selecter?.formReducer?.map((index, item) => <tr>
            <td>{index.FirstName}</td>
            <td>{index.LastName}</td>
            <td>{index.Age}</td>
            <td><button onClick={() => handledelet(item)}>DELET</button></td>
            <td><button onClick={() => handleEdit(item, index)}>EDIT</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}
export default App;
