import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import { useDispatch } from 'react-redux'

import { getBookingDetails } from '../../actions'

export default function FlightSelector({ flightsData }) {

  const [checked, setChecked] = useState([0])
  const [selectorExpanded, setSelectorExpanded] = useState(true)
  const { flights } = flightsData
  const dispatch = useDispatch()

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = []

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const handleClick = () => {
    dispatch(getBookingDetails(checked))
    setSelectorExpanded(false)
  }

  return (
    flights ?
      <Accordion expanded={selectorExpanded} onChange={()=>setSelectorExpanded(!selectorExpanded)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography variant='h6'>Available flights</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
            <ListItem sx={{ textDecoration: 'underline' }}>
              <ListItemText id="header-select" primary="Select" />
              <ListItemText id="header-flight-no" primary="Flight No." />
              <ListItemText id="header-flight-dep-time" primary="Departure time" />
              <ListItemText id="header-flight-dep-dest" primary="Destination" />
            </ListItem>
            {flights.map((flight) => {
              const labelId = `checkbox-list-label-${flight.flight_no}`

              return (
                <ListItem
                  key={flight.flight_no}
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(flight.id)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(flight.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={`${labelId}-A`} primary={flight.flight_no} sx={{ marginLeft: '60px' }} />
                    <ListItemText id={`${labelId}-B`} primary={flight.flight_dep_time} />
                    <ListItemText id={`${labelId}-C`} primary={flight.flight_destination} sx={{ marginLeft: '30px' }} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </AccordionDetails>
        <Button variant="contained" onClick={handleClick} sx={{margin: '20px'}}>Get booking details</Button>
      </Accordion> : "No flights found"
  )
}
