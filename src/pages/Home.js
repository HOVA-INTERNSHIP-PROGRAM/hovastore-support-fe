import React from 'react'
import CardSolution from '../components/cardSolution/cardSolution'
import data from '../data/data.json'


const Home = () => {
  return (
    <div className=''>
        <div className='flex justify-center items-center'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-5'>
      {data.map((card, index) => (
        <CardSolution
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    </div>
    </div>
  )
}

export default Home
