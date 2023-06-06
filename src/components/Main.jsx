import React, { useState } from 'react'

function Main() {
    const[active,setActive]=useState('basketball')

    const handleClick = () => {
        setActive({
            active : labels
        })
    }

    let labels = ['basketball','pubg','mobile','tiger','laptop','cricket']
  return (
    <div>
        {
            labels.map((each)=> 
                (
                    <>
                    <div>
                    <button onClick={() => handleClick()} className='button'>{each}</button>

                    </div>
                    <div>
                    <img src={active} alt={`./images/${active}.jpg`} />

                    </div>
                    </>
                    )

            )
        }
    </div>
  )
}

export default Main