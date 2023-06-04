import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  
  // };

  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };
  // for setting other dark mode
  // const toggleModeOthers =()=> {
  //   if(mode === 'light'){
  //     setMode('greendark');
  //     document.body.style.backgroundColor = '#055705';
  //     document.body.style.color='white';
  //     showAlert('Dark Green mode has been enabled', 'success');
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert('Light mode has been enabled', 'success');

  //   }
  // }
  return (
    <>
      <Router>
        <Navbar title="Text Editor" path="/" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mx-5">
          <Switch>
            <Route path="/about" component={About}>
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Try Text Editor - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
