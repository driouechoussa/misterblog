

import './styles/styles.css'
import React from 'react'
import Navigationbar from './components/navigationbar'

function App() {
  return (
    <React.Fragment>
      <header>
         <Navigationbar/>

         <div className='container'>
            <div className='row'>
                <div className='col-10 p-5 m-auto '>
                    <h1 className='m-auto text-center p-2 text-dark '>
                      <span className='text-capitalize'>tips</span> for a successful and memorable Travel experience
                    </h1>
                    <p className='p-1 text-center text-secondary'>
                    <span className='text-capitalize'>planning</span> a trip? discover effective strategies to make your travels truly unforgettable. from budgeting to packing, these tips will ensure a smooth and successful journey. Read on to start your adventure with confidence!
                    </p>
                </div>
            </div>
          <div className='row'>
            <div className='col-10'>
                <div> 
                  <input type="text" />
                  <button>Submit</button>
                </div>
              </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default App
