import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Proptypes from 'prop-types'

import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton'
import EventSeatIcon from '@mui/icons-material/EventSeat'
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { setCurrentBooking } from '../../redux/actions'
import { ADMIN_ROLE_ID } from '../../constants'
import './seatmap.scss'

function Seatmap({ seatingCapacity }) {
  const rows = [...Array(seatingCapacity).keys()].map((val) => val + 1)
  const { bookings, currentFlightId } = useSelector((state) => state?.flights)
  const { selectedRole } = useSelector((state) => state.roles)

  const dispatch = useDispatch()

  const getSeatColor = (currentSeatNo) => {
    const seatBookings = bookings.filter(
      (booking) => booking.seat_no === currentSeatNo
    )
    return seatBookings.length > 0
      ? seatBookings[0].checkedIn
        ? 'success'
        : 'primary'
      : 'default'
  }

  const setPassengerInfo = (currentSeatNo) => {
    const currentBooking = bookings.filter(
      (booking) => booking.seat_no === currentSeatNo
    )
    const newPassengerInfo = {
      flightId: currentFlightId,
      seat_no: currentSeatNo,
      passenger_name: '',
      passport_number: '',
      address: '',
      checkedIn: false,
      wheel_chair_required: false,
      withInfant: false,
      ancillary_services: [],
    }
    dispatch(
      setCurrentBooking(
        currentBooking[0] ??
          (selectedRole === ADMIN_ROLE_ID ? newPassengerInfo : null)
      )
    )
  }

  const getSeatIcon = (currentSeatNo) => {
    const currentBooking = bookings.filter(
      (booking) => booking.seat_no === currentSeatNo
    )
    const icon = []
    icon.push(
      <EventSeatIcon
        color={getSeatColor(currentSeatNo)}
        key={`eventIcon-${currentSeatNo}`}
      />
    )

    if (currentBooking.length > 0 && currentBooking[0].wheel_chair_required) {
      icon.push(
        <WheelchairPickupIcon
          key={`wheelIcon-${currentSeatNo}`}
          color="secondary"
        />
      )
    }

    if (currentBooking.length > 0 && currentBooking[0].withInfant) {
      icon.push(
        <ChildFriendlyIcon
          key={`infantIcon-${currentSeatNo}`}
          color="secondary"
        />
      )
    }

    return <> {icon} </>
  }

  const theme = createTheme({
    typography: {
      fontSize: 12,
    },
  })

  return seatingCapacity ? (
    <div>
      <div className="seatmap-main">
        <div>
          {rows.map((rowNo) => {
            return (
              <div key={rowNo} className="seat-grid">
                <ThemeProvider theme={theme}>
                  <ButtonGroup
                    sx={{ minWidth: '300px' }}
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <IconButton
                      sx={{ minWidth: '100px' }}
                      aria-label={`${rowNo}A`}
                      onClick={() => setPassengerInfo(`${rowNo}A`)}
                    >
                      {getSeatIcon(`${rowNo}A`)}
                      <Typography>{`${rowNo}A`}</Typography>
                    </IconButton>
                    <IconButton
                      sx={{ minWidth: '100px' }}
                      aria-label={`${rowNo}B`}
                      onClick={() => setPassengerInfo(`${rowNo}B`)}
                    >
                      {getSeatIcon(`${rowNo}B`)}
                      <Typography>{`${rowNo}B`}</Typography>
                    </IconButton>
                    <IconButton
                      sx={{ minWidth: '100px' }}
                      aria-label={`${rowNo}C`}
                      onClick={() => setPassengerInfo(`${rowNo}C`)}
                    >
                      {getSeatIcon(`${rowNo}C`)}
                      <Typography>{`${rowNo}C`}</Typography>
                    </IconButton>
                  </ButtonGroup>

                  <span className="row-number">{rowNo}</span>

                  <ButtonGroup
                    sx={{ minWidth: '300px' }}
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <IconButton
                      sx={{ minWidth: '100px' }}
                      aria-label={`${rowNo}D`}
                      onClick={() => setPassengerInfo(`${rowNo}D`)}
                    >
                      {getSeatIcon(`${rowNo}D`)}
                      <Typography>{`${rowNo}D`}</Typography>
                    </IconButton>
                    <IconButton
                      sx={{ minWidth: '100px' }}
                      aria-label={`${rowNo}E`}
                      onClick={() => setPassengerInfo(`${rowNo}E`)}
                    >
                      {getSeatIcon(`${rowNo}E`)}
                      <Typography>{`${rowNo}E`}</Typography>
                    </IconButton>
                    <IconButton
                      sx={{ minWidth: '100px' }}
                      aria-label={`${rowNo}F`}
                      onClick={() => setPassengerInfo(`${rowNo}F`)}
                    >
                      {getSeatIcon(`${rowNo}F`)}
                      <Typography>{`${rowNo}F`}</Typography>
                    </IconButton>
                  </ButtonGroup>
                </ThemeProvider>
              </div>
            )
          })}
        </div>
      </div>
      <Paper variant="outlined" square className="legend-info">
        <Typography className="legend-header">Legend</Typography>
        <ThemeProvider theme={theme}>
          <Typography>
            <EventSeatIcon color="default" />
            {'Unreserved Seat'}
          </Typography>
          <Typography>
            <EventSeatIcon color="primary" />
            {'Seat booked but not checked in'}
          </Typography>
          <Typography>
            <EventSeatIcon color="success" />
            {'Passenger has checked in'}
          </Typography>
          <Typography>
            <WheelchairPickupIcon color="secondary" />
            {'Passenger requires a wheelchair'}
          </Typography>
          <Typography>
            <ChildFriendlyIcon color="secondary" />
            {'Passenger is with an infant'}
          </Typography>
        </ThemeProvider>
      </Paper>
    </div>
      ) : (
    <Typography variant="h5">No bookings found for this flight</Typography>
      )
}

export default Seatmap

Seatmap.propTypes = {
  seatingCapacity: Proptypes.number
}
