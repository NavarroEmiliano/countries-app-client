import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/Card'
import styles from './Cards.module.css'
import Pagination from '../pagination/Pagination'
import { getAllContinents } from '../../redux/actions'

const Cards = () => {
  const { filteredCountries, allContinents } = useSelector(state => state)
  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useDispatch()

  const cardsPerPage = 10

  const lastCardIndex = currentPage * cardsPerPage
  const firstCardIndex = lastCardIndex - cardsPerPage

  const currentCards = filteredCountries.slice(firstCardIndex, lastCardIndex)

  useEffect(() => {
    setCurrentPage(1)
    if (allContinents.length === 0) dispatch(getAllContinents())
  }, [filteredCountries])

  return (
    <div>
      {filteredCountries.length === 0 && <h2>No existe</h2>}
      <div className={styles.cards_container}>
        {currentCards?.map(({ id, name, flagname, continent, population }) => (
          <Card
            id={id}
            key={id}
            name={name}
            flagname={flagname}
            continent={continent}
            population={population}
          />
        ))}
      </div>
      <div className={styles.pagination_container}>
        <Pagination
          filteredCountries={filteredCountries}
          cardsPerPage={cardsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default Cards
