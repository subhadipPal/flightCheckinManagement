import React, { useEffect, lazy, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getFlightsByCurrentTime } from '../../actions'
import FlightSelector from './flightSelector'

function CheckIn() {
  const dispatch = useDispatch()
  const currentDate = new Date()
  const currentHours = `${currentDate.getHours()}`
  const currentMinutes = `${currentDate.getMinutes()}`
  const currentTime = `${currentHours.padStart(2, 0)}${currentMinutes.padStart(2, 0)}`

  useEffect(() => {
    dispatch(getFlightsByCurrentTime(currentTime))
  }, [])

  const flights = useSelector(state => state.flights)

  const Bookings = lazy(() => import('./bookings'))

  return (
    <>
      <FlightSelector flightsData={flights}/>
      <Suspense>
        {flights.bookings && <Bookings />}
      </Suspense>
    </>
  )
}

export default CheckIn
