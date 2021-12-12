import React, { useState } from 'react'
import Proptypes from 'prop-types'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

import { useDispatch, useSelector } from 'react-redux'

import {
  updateBooking,
  addNewPassenger,
  deleteBooking,
} from '../../redux/actions'
import {
  ancServices,
  seatCols,
  getSeatRows,
  ADMIN_ROLE_ID,
} from '../../constants'
import './passengerInfo.scss'

function PassengerInfo({ seatingCapacity }) {
  const [updateInfo, setUpdateInfo] = useState(false)
  const dispatch = useDispatch()

  const seatRows = getSeatRows(seatingCapacity)
  const availableSeats = []
  seatRows.forEach((row) =>
    seatCols.forEach((col) => availableSeats.push(`${row}${col}`))
  )

  const currentRoleId = useSelector((state) => state.roles?.selectedRole)
  const isAdminRole = currentRoleId === ADMIN_ROLE_ID

  const currentBooking = useSelector((state) => state?.flights?.currentBooking)
  const {
    id,
    flightId,
    seat_no,
    passenger_name,
    checkedIn,
    wheel_chair_required,
    withInfant,
    passport_number,
    address,
    ancillary_services,
  } = currentBooking

  const [formData, setFormData] = useState({
    passenger_name,
    flightId,
    seat_no,
    checkedIn,
    wheel_chair_required,
    withInfant,
    passport_number,
    address,
    ancillary_services,
  })

  const handleUpdateBooking = () => {
    setUpdateInfo(!updateInfo)

    dispatch(updateBooking(formData, id, flightId))
  }

  const handleAncillaryServiceChange = (event) => {
    const {
      target: { value },
    } = event

    setFormData({ ...formData, ancillary_services: value })
  }

  const handleAddPassenger = () => dispatch(addNewPassenger(formData))

  const handleDeleteBooking = () => dispatch(deleteBooking(id, flightId))

  return currentBooking ? (
    <Card className="info-card">
      <CardContent>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Passenger information
        </Typography>
        <div className="info-grid">
          <span>Passenger name</span>
          <TextField
            size="small"
            variant="standard"
            value={formData.passenger_name}
            onChange={(e) =>
              setFormData({ ...formData, passenger_name: e.target.value })
            }
            disabled={isAdminRole ? id && !updateInfo : true}
          />
          <span>Passport number</span>
          <TextField
            size="small"
            variant="standard"
            value={formData.passport_number}
            onChange={(e) =>
              setFormData({ ...formData, passport_number: e.target.value })
            }
            disabled={isAdminRole ? id && !updateInfo : true}
          />

          <span>Address</span>
          <TextField
            size="small"
            variant="standard"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            disabled={isAdminRole ? id && !updateInfo : true}
          />

          <TextField
            className="span-two-cols"
            select
            autoComplete="on"
            multiple={false}
            label="Seat number"
            value={formData.seat_no}
            onChange={(e) =>
              setFormData({ ...formData, seat_no: e.target.value })
            }
            helperText="Choose preferred seat"
            disabled={id && !updateInfo}
          >
            {availableSeats.map((seatNo) => (
              <MenuItem key={seatNo} value={seatNo}>
                {seatNo}
              </MenuItem>
            ))}
          </TextField>

          <span>Checked In </span>
          <Switch
            checked={formData.checkedIn}
            onChange={(e) =>
              setFormData({ ...formData, checkedIn: e.target.checked })
            }
            disabled={id && !updateInfo}
          />

          <span>Wheelchair required</span>
          <Switch
            checked={formData.wheel_chair_required}
            onChange={(e) =>
              setFormData({
                ...formData,
                wheel_chair_required: e.target.checked,
              })
            }
            disabled={id && !updateInfo}
          />

          <span>With infant </span>
          <Switch
            checked={formData.withInfant}
            onChange={(e) =>
              setFormData({ ...formData, withInfant: e.target.checked })
            }
            disabled={id && !updateInfo}
          />

          <FormControl
            className="span-two-cols"
            disabled={isAdminRole ? id && !updateInfo : true}
          >
            <InputLabel id="ancillary-service-label">
              Ancillary Services
            </InputLabel>
            <Select
              labelId="ancillary-service-label"
              multiple
              value={formData.ancillary_services}
              onChange={handleAncillaryServiceChange}
              input={<OutlinedInput label="Ancillary Services" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {ancServices.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </CardContent>
      <CardActions>
        {!updateInfo && id && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => setUpdateInfo(!updateInfo)}
          >
            Update booking
          </Button>
        )}
        {updateInfo && (
          <Button variant="outlined" size="small" onClick={handleUpdateBooking}>
            Save booking
          </Button>
        )}
        {!id && (
          <Button variant="outlined" size="small" onClick={handleAddPassenger}>
            Add booking
          </Button>
        )}
        {id && isAdminRole && (
          <Button variant="outlined" size="small" onClick={handleDeleteBooking}>
            Delete booking
          </Button>
        )}
      </CardActions>
    </Card>
      ) : (
    <h6>{'No bookings found'}</h6>
      )
}

export default PassengerInfo

PassengerInfo.propTypes = {
  seatingCapacity: Proptypes.object
}