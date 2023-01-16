import './App.css'
import Header from './components/Header';
import Alert from './Shared/Alert';
import {AiOutlineInfoCircle } from "react-icons/Ai";
import { MdWifiTetheringErrorRounded } from "react-icons/Md";
import { MdOutlineSimCardAlert } from "react-icons/Md"

function App() {
  return (
    <div className="App">
      <Header />
      <Alert name="alert-info" icon={<AiOutlineInfoCircle />} title="Compatibility Note" 
      description ={`Allows you to test the usability and user experience of your design.
      Help you to identify potential issues or improvements that may not be evident with 
      lorem ipsum.`} />
      <Alert name="alert-error" icon={<MdWifiTetheringErrorRounded/>} title="Alert Error" 
      description ={`Provides a greater challenge and more opportunities for you to 
      demonstrate your ability to create a visually appealing and user-friendly design.`} />

      <Alert name="alert-warning" icon ={<MdOutlineSimCardAlert />} title="Warning Alert"
      description ={
        <>
        Transform your design mockups with Lipsum alternative, the perfect 
        solution for UI designers looking to add engaging and meaningful content to your projects. 
        Try it out now and <a href='#'> see the difference! </a>
        </>
    
    }/>
      
      <Alert name="alert-info" title=" hello"> 
      <p>
        Transform your design mockups with Lipsum alternative, the perfect 
        solution for UI designers looking to add engaging and meaningful content to your projects. 
        Try it out now and <a href='#'> see the difference! </a>
        </p>
     </Alert>
      
    </div>
  )
}

export default App
