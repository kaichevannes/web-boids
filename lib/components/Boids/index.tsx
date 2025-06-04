import styles from './styles.module.css'
import React from 'react'

import init, { greet } from '../../../wasm-boids/pkg/wasm_boids'

export function Boids() {

  React.useEffect(() => {
    (async function() {
      await init()
    })();
  }, []);

  return <div className={styles.div} >
    Hello from Boids
    <button onClick={() => { greet("from wasm") }}>greet from wasm</button>
  </div >
}
