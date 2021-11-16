import React, { useState } from 'react'
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
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"

import { useDispatch, useSelector } from 'react-redux'

import { updateBooking } from '../../actions'
import './passengerInfo.scss'

function PassengerInfo() {

  const [updateInfo, setUpdateInfo] = useState(false)
  const dispatch = useDispatch()

  const currentBooking = useSelector(state => state?.flights?.currentBooking)
  const {
    id,
    flightId,
    passenger_name,
    checkedIn,
    wheel_chair_required,
    withInfant,
    ancillary_services
  } = currentBooking

  const [formData, setFormData] = useState({
    passenger_name,
    checkedIn,
    wheel_chair_required,
    withInfant,
    ancillary_services
  })

  const handleUpdateBooking = () => {
    console.log({ formData })
    setUpdateInfo(!updateInfo)

    dispatch(updateBooking(formData, id, flightId))
  }

  const ancServices = [
    'Extra Blanket',
    'Extra Pillow',
    'Vegan food',
    'Priority boarding',
    'Fast track security'
  ]

  const handleAncillaryServiceChange = (event) => {
    const {
      target: { value },
    } = event;

    setFormData({ ...formData, ancillary_services: value })
  }

  return (
    currentBooking ? (
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
              onChange={(e) => setFormData({ passenger_name: e.target.value })}
              disabled={!updateInfo}
            />

            <span>Checked In </span>
            <Switch
              checked={formData.checkedIn}
              onChange={(e) => setFormData({ ...formData, checkedIn: e.target.checked })}
              disabled={!updateInfo}
            />

            <span>Wheelchair required</span>
            <Switch
              checked={formData.wheel_chair_required}
              onChange={(e) => setFormData({ ...formData, wheel_chair_required: e.target.checked })}
              disabled={!updateInfo}
            />

            <span>With infant </span>
            <Switch
              checked={formData.withInfant}
              onChange={(e) => setFormData({ ...formData, withInfant: e.target.checked })}
              disabled={!updateInfo}
            />

            <FormControl className="ancillary-service-selector" disabled={!updateInfo}>
              <InputLabel id="ancillary-service-label">Ancillary Services</InputLabel>
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
                  <MenuItem
                    key={service}
                    value={service}
                  >
                    {service}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </CardContent>
        <CardActions>
          {!updateInfo && <Button size="small" onClick={() => setUpdateInfo(!updateInfo)}>Update information</Button>}
          {updateInfo && <Button size="small" onClick={handleUpdateBooking}>Save information</Button>}
        </CardActions>
      </Card>
    ): <h6>{'No bookings found'}</h6>
  )
}

export default PassengerInfo
