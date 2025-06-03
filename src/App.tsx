import './App.css'
import { Boids } from '../'
import React from 'react'
import init, { greet } from '../pkg/web_boids_wasm'

await init();

function App() {

  React.useEffect(() => {
    greet("WebAssembly with bun");
  }, []);

  return <Boids />
}

export default App
