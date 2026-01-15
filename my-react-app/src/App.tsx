import { useState } from 'react'

import styles from "./App.module.css"

import Button from './components/Button'


function App() {

  const [count, setCount] = useState<number>(0)

  function countAdd(): void{
    setCount(count + 1)
  }
  
  function countRemove(): void{
    setCount(count - 1)
  }

  return (

    <div className={styles.Page}>

      <div className={styles.Page__Content}>

        <p className={styles.Content__Number}>
            {count}
        </p>

        <div className={styles.Content__ButtonContainer}>

            <Button label='Прибавить' onClick={countAdd} color='green'/>

            <Button label='Отнять' onClick={countRemove} color='red'/>

        </div>

      </div>

    </div>

  )
}

export default App
