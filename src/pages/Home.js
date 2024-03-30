import React from 'react'
import CardSolution from '../components/cardSolution/cardSolution'
import cardsData from '../data/data'

const Home = () => {
  return (
    <div className='text-2xl'>
      <div className='bg-secondaryLight flex justify-center items-center'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-5 pt-10 pb-8'>
      {cardsData.map((card, index) => (
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