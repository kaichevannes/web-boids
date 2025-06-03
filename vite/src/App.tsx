import './App.css'
import { Boids } from '../'
import * as wasm from 'web-boids'
import React from 'react'

function App() {

  React.useEffect(() => {
    wasm.greet("WebAssembly with bun");
  }, []);

  return <Boids />
}

export default App
