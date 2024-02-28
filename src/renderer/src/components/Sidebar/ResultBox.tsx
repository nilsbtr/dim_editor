import PropTypes from 'prop-types'

export const ResultBox = ({ results }) => {
  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <div className="flex-1 h-[calc(100%-66px)]">
      <div className="flex flex-col gap-2 max-h-full w-full overflow-x-hidden overflow-y-auto no-scrollbar">
        {results.map((result) => {
          return (
            <button
              key={result}
              data-key={result}
              className="outline-none h-16 w-full text-left rounded-md border border-border hover:bg-accent/10 hover:border-accent focus:border-accent"
              onClick={handleClick}
            >
              <div className="flex flex-row items-center h-full w-full">
                <div className="flex-none mx-2 h-3/4 w-auto">
                  <img
                    className="object-contain size-full rounded-md"
                    src="https://www.bungie.net/common/destiny2_content/icons/47a4fa514ac7320eabe03e42190c87ff.jpg"
                    alt="[img]"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-sidebar-foreground">{result}</div>
                  <div className="text-sidebar-foreground/60">Season xx</div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

ResultBox.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired
}
