import { useState } from 'react'
import { ResultBox } from './ResultBox'
import { SearchBar } from './SearchBar'

export const SearchContainer = () => {
  const [results, setResults] = useState<string[]>([])

  return (
    <div className="h-[calc(100vh-24px)] flex flex-col gap-2">
      <SearchBar setResults={setResults} />
      <ResultBox results={results} />
    </div>
  )
}
