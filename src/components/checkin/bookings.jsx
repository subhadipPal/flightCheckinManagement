import { Typography } from '@mui/material'
import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import './bookings.scss'
import Seatmap from './seatmap'

export default function Bookings() {
  const flightsData = useSelector((state) => state?.flights)
  const { flights, bookings, currentBooking } = flightsData
  const currentFlightSeatCapacity = flights.filter(
    (flight) => flight.id === bookings[0]?.flightId
  )[0]?.seating_capacity

  const PassengerInfo = lazy(() => import('./passengerInfo'))

  return (
    <>
      <Typography variant="h6" style={{ marginLeft: '20px' }}>
        Booking information
      </Typography>
      <div className="bookings-page-layout">
        <Seatmap seatingCapacity={currentFlightSeatCapacity} />
        <Suspense>
          {currentBooking && (
            <PassengerInfo seatingCapacity={currentFlightSeatCapacity} />
          )}
        </Suspense>
      </div>
    </>
  )
}
