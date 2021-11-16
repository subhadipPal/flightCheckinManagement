import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import {useSelector} from 'react-redux'
import {v4 as uuid_v4} from 'uuid'

import './passengerInfo.scss'

function PassengerInfo() {
  
  const currentBooking = useSelector( state => state?.flights?.currentBooking)
  const {
    passenger_name, 
    checkedIn, 
    wheel_chair_required, 
    withInfant,
    ancillary_services
  } = currentBooking

  return (
    currentBooking && (
    <div>
      <Card className="info-card">
        <CardContent>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Passenger information
          </Typography>
          <div className="info-grid">
              <span>Passenger name</span>
              <span>{passenger_name}</span>

              <span>Checked In</span>
              <span>{checkedIn ? 'Yes' : 'No'}</span>

              <span>Wheelchair required</span>
              <span>{wheel_chair_required ? 'Yes' : 'No'}</span>

              <span>With infant</span>
              <span>{withInfant ? 'Yes' : 'No'}</span>

              <span>Passenger name</span>
              <span>
                <ul>
                  {ancillary_services.map(service => <li key={uuid_v4()}>{service}</li>)}
                </ul>
              </span>
            </div>
        </CardContent>
        <CardActions>
          <Button size="small">{checkedIn ? 'Undo CheckIn' : 'CheckIn'}</Button>
        </CardActions>
      </Card>
    </div>
    )
  )
}

export default PassengerInfo
