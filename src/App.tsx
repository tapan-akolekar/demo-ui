import React from 'react';
import './App.css';
import Header from './components/Header';
import { AppRoutes } from './components/AppRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <div>
      <Header/>
      <main className={"page-content"}>
                    <AppRoutes />
                </main>
                <Footer/>
    </div>
    </div>
  );
}

export default App;
