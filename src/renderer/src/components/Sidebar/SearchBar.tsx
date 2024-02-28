import PropTypes from 'prop-types'
import { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState<string>('')

  const keywords = [
    'BassoOstinato',
    'BattleScar',
    'BelisariusD',
    'BerengerXsMemory',
    'BloodFeud',
    'Blowout',
    'BoudicaC',
    'BrayTechOsprey',
    'BrayTechOsprey(Adept)',
    'BrayTechWerewolf#2869466318',
    'Breakneck',
    'BriarXsContempt',
    'BriarXsContempt(Adept)',
    'BrigandXsLaw',
    'BryaXsLove',
    'BugOutBag',
    'Buzzard',
    'Buzzard(Adept)'
  ]

  const fetchData = (value) => {
    //TODO: Fetch weapons filtered by value from database/main process
    if (value) {
      const results = keywords.filter((weapon) => {
        return weapon.toLowerCase().includes(value.toLowerCase())
      })
      setResults(results)
    } else {
      setResults([])
    }
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className="flex-none bg-content w-full rounded-md border border-border">
      <div className="flex items-center">
        <div className="bg-transparent size-5 ml-2">
          <FaMagnifyingGlass className="h-full w-full text-content-foreground" />
        </div>
        <input
          type="text"
          className="flex-1 outline-none bg-transparent text-content-foreground placeholder:text-input p-2"
          placeholder="Search for weapon..."
          autoComplete="off"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  setResults: PropTypes.func.isRequired
}
