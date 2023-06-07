import { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState({
    test1:"",
    test2:""
  });

  const handleChangeInput = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
    console.log(inputValue);

  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Input Test</h1>
      <hr />
      <label for="test1" >test1</label>
      <input
        id="test1" 
        onChange={(e) => handleChangeInput(e)}
        type="text1" 
        name="test1"
        value={inputValue.test1} 
        />
        <div style={{textAlign: "center"}}></div>
      <label for="test2" >test2
      <input
        className="mt-2" 
        onChange={(e) => handleChangeInput(e)}
        type="text2" 
        name="test2"
        value={inputValue.test2} 
        />
        
        <br />
<label htmlFor="Password">Password</label>
        <input
             className="mt-2"
             id="Password"
             onChange={(e)=> handleChangeInput(e)}
             type="Password"
             name="Password"
             value={inputValue.Password}
             />

        </label>
        <br />
        <label htmlFor="emailInput">Email</label>
        <input
             className="mt-2"
             id="emailInput"
             onChange={(e)=> handleChangeInput(e)}
             type="email"
             name="validEmail"
             value={inputValue.validEmail}
        />

        <br />
        <label htmlFor="CheckboxInput">Checkbox</label>
        <input
             className="mt-2"
             id="CheckboxInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Checkbox"
             name="validCheckbox"
             value={inputValue.validCheckbox}
             />

        <br />
        <label htmlFor="ColorInput">Color</label>
        <input
             className="mt-2"
             id="ColorInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Color"
             name="validColor"
             value={inputValue.validColor}
             />


<br />
        <label htmlFor="DateInput">Date</label>
        <input
             className="mt-2"
             id="DateInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Date"
             name="validDate"
             value={inputValue.validDate}
             />

{/*<br />
        <label htmlFor="Datetime-localInput">Datetime-local</label>
        <input
             className="mt-2"
             id="Datetime-localInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Datetime-local"
             name="validDatetime-local"
             value={inputValue.validDatetime-local}
             />*/}
             
{/*<br />
        <label htmlFor="FileInput">File</label>
        <input
             className="mt-2"
             id="FileInput"
             onChange={(e)=> handleChangeInput(e)}
             type="File"
             name="validFile"
             value={inputValue.validFile}
             />*/}
{/*<br />
        <label htmlFor="HiddenInput">Hidden</label>
        <input
             className="mt-2"
             id="HiddenInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Hidden"
             name="validHidden"
             value={inputValue.validHidden}
             />*/}
{/*<br />
        <label htmlFor="ImageInput">Image</label>
        <input
             className="mt-2"
             id="ImageInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Image"
             name="validImage"
             value={inputValue.validImage}
             />*/}
<br />
        <label htmlFor="MonthInput">Month</label>
        <input
             className="mt-2"
             id="MonthInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Month"
             name="validMonth"
             value={inputValue.validMonth}
             />

        <br />
        <label htmlFor="MumberInput">Mumber</label>
        <input
             className="mt-2"
             id="MumberInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Mumber"
             name="validMumber"
             value={inputValue.validMumber}
             />

<br />
        <label htmlFor="RadioInput">Radio</label>
        <input
             className="mt-2"
             id="RadioInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Radio"
             name="validRadio"
             value={inputValue.validRadio}
             />

<br />
        <label htmlFor="RangeInput">Range</label>
        <input
             className="mt-2"
             id="RangeInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Range"
             name="validRange"
             value={inputValue.validRange}
             />

<br />
        <label htmlFor="ResetInput">Reset</label>
        <input
             className="mt-2"
             id="ResetInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Reset"
             name="validReset"
             value={inputValue.validReset}
             />

<br />
        <label htmlFor="SearchInput">Search</label>
        <input
             className="mt-2"
             id="SearchInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Search"
             name="validSearch"
             value={inputValue.validSearch}
             />

<br />
        <label htmlFor="SubmitInput">Submit</label>
        <input
             className="mt-2"
             id="SubmitInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Submit"
             name="validSubmit"
             value={inputValue.validSubmit}
             />

<br />
        <label htmlFor="TelInput">Tel</label>
        <input
             className="mt-2"
             id="TelInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Tel"
             name="validTel"
             value={inputValue.validTel}
             />

<br />
        <label htmlFor="TextInput">Text</label>
        <input
             className="mt-2"
             id="TextInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Text"
             name="validText"
             value={inputValue.validText}
             />

<br />
        <label htmlFor="TimeInput">Time</label>
        <input
             className="mt-2"
             id="TimeInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Time"
             name="validTime"
             value={inputValue.validTime}
             />
<br />
        <label htmlFor="UrlInput">Url</label>
        <input
             className="mt-2"
             id="UrlInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Url"
             name="validUrl"
             value={inputValue.validUrl}
             />

<br />
        <label htmlFor="WeekInput">Week</label>
        <input
             className="mt-2"
             id="WeekInput"
             onChange={(e)=> handleChangeInput(e)}
             type="Week"
             name="validWeek"
             value={inputValue.validWeek}
             />
    </div>

    

    
    

  )
}
export default App