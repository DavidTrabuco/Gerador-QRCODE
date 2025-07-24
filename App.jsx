
import './App.css'
import React from 'react';  // Importing React for building the component

const API_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

function App() {

  const generateQRCode = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    const inputText = document.getElementById('qrInput').value;
    const qrCodeImage = document.createElement('img');
    let paragraph = document.getElementById('paragraph');
    let button = document.getElementById('button');

    if (inputText) {
      paragraph.appendChild(qrCodeImage);
      qrCodeImage.src = `${API_URL}${encodeURIComponent(inputText)}`;
      button.disabled = true; 
    } 
    else {
      qrCodeImage.src = '';
      alert('Please enter some text to generate a QR code.');
    }
  }


  return (
    <>
      <h1>Welcome to my QR CODE Generator !</h1>
      <p>Enter your text below to generate a QR code:</p>
      <input type="text" id="qrInput" placeholder="Type something..." />
      <button id="button" onClick={generateQRCode}>Generate QR Code</button>
      <div  id="qrCodeContainer">
        <p id='paragraph'></p>
        


      </div>
      <footer>
        <p>Made with ❤️ by <a href="https://github.com/DavidTrabuco/">David Trabuco</a></p>
      </footer>
    </>
  )
}

export default App
