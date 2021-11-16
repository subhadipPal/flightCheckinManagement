import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton'
import EventSeatIcon from '@mui/icons-material/EventSeat'

import './seatmap.scss'
import { Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import {setCurrentBooking} from '../../actions'

function Seatmap({ seatingCapacity }) {
  const rows = [...Array(seatingCapacity).keys()].map( val => val + 1)
  const bookings = useSelector( state => state?.flights?.bookings)

  const dispatch = useDispatch()

  const getSeatColor = (currentSeatNo) => {
    const seatBookings = bookings.filter( booking => booking.seat_no === currentSeatNo)
    return seatBookings.length > 0 ? 'success' : 'default'
  }

  const setPassengerInfo = (currentSeatNo) => {
    const currentBooking = bookings.filter( booking => booking.seat_no === currentSeatNo)
    dispatch(setCurrentBooking(currentBooking[0])?? null)
  }

  return (
    seatingCapacity ? (
      <div className="seatmap-main">
        <div>
          {rows.map((rowNo) => {

            return (
              <div key={rowNo} className="seat-grid">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <IconButton aria-label={`${rowNo}A`} onClick={() => setPassengerInfo(`${rowNo}A`)}>
                    <EventSeatIcon color={getSeatColor(`${rowNo}A`)}/>
                    <Typography>{`${rowNo}A`}</Typography>
                  </IconButton>
                  <IconButton aria-label={`${rowNo}B`} onClick={() => setPassengerInfo(`${rowNo}B`)}>
                    <EventSeatIcon color={getSeatColor(`${rowNo}B`)}/>
                    <Typography>{`${rowNo}B`}</Typography>
                  </IconButton>
                  <IconButton aria-label={`${rowNo}C`} onClick={() => setPassengerInfo(`${rowNo}C`)}>
                    <EventSeatIcon color={getSeatColor(`${rowNo}C`)}/>
                    <Typography>{`${rowNo}C`}</Typography>
                  </IconButton>
                </ButtonGroup>

                <span className="row-number">{rowNo}</span>

                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <IconButton aria-label={`${rowNo}D`} onClick={()=> setPassengerInfo(`${rowNo}D`)}>
                    <EventSeatIcon color={getSeatColor(`${rowNo}D`)}/>
                    <Typography>{`${rowNo}D`}</Typography>
                  </IconButton>
                  <IconButton aria-label={`${rowNo}E`} onClick={() => setPassengerInfo(`${rowNo}E`)}>
                    <EventSeatIcon color={getSeatColor(`${rowNo}E`)}/>
                    <Typography>{`${rowNo}E`}</Typography>
                  </IconButton>
                  <IconButton aria-label={`${rowNo}F`} onClick={() => setPassengerInfo(`${rowNo}F`)}>
                    <EventSeatIcon color={getSeatColor(`${rowNo}F`)}/>
                    <Typography>{`${rowNo}F`}</Typography>
                  </IconButton>
                </ButtonGroup>
              </div>
            )
          })}
        </div>
      </div>
    ) : null
  )
}

export default Seatmap
