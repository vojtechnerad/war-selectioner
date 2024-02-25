import { useState } from 'react'
import './App.css'

type Nation = {
  id: number,
  name: string,
  flag: string
}
const nations: Nation[] = [
  { id: 1, name: 'Abstract', flag: 'abstract' },
  { id: 2, name: 'Great Britain', flag: 'united-kingdom'},
  { id: 3, name: 'India', flag: 'india'},
  { id: 4, name: 'Turkey', flag: 'turkey'},
  { id: 5, name: 'Germany', flag: 'germany'},
  { id: 6, name: 'Russian Empire and USSR', flag: 'russia'},
  { id: 7, name: 'France', flag: 'france'},
  { id: 8, name: 'China', flag: 'china'},
  { id: 9, name: 'Japan', flag: 'japan'},
  { id: 10, name: 'Poland', flag: 'poland'},
  { id: 11, name: 'Austria-Hungary', flag: 'austria-hungary'},
  { id: 12, name: 'Persia-Iran', flag: 'iran'}
]

function getRandomId(): number {
  return Math.floor(Math.random() * nations.length)
}

function App() {
  const [pickedCountry, setPickedCountry] = useState<Nation | null>(null)

  function selectRandomCountry(): void {
    let chosenCountry = nations[getRandomId()]
    while (pickedCountry == chosenCountry) {
      chosenCountry = nations[getRandomId()]
    }
    setPickedCountry(chosenCountry)
  }

  return (
    <>
      <div className="header">
        <h1>War Selectioner</h1>
      </div>
      <div className="container">
        {pickedCountry ? (
          <div className="selected-country">
            <img src={`src/assets/flags/${pickedCountry.flag}.png`} alt="" width="100" />
            <span>{pickedCountry?.name}</span>
          </div>
          ) : (
            <div>
              <span className="selected-country">Country not picked</span>
            </div>
          )
        }
        <button type="button" className="roll-button" onClick={selectRandomCountry}>
          <span>Roll</span>
          <img src="src/assets/dice.svg" alt="" width="30" />
        </button>
      </div>
    </>
  )
}

export default App
