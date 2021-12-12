/* eslint-disable no-undef */
import React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'

import Bookings from './bookings'

describe('Bookings test', () => {
  let spyOnUseSelector
  const flightsData = {
    flights: [
      {
        id: '1',
        flight_dep_time: 1800,
        flight_destination: 'London',
        flight_no: 'LH101',
        seating_capacity: 6,
      },
      {
        id: '2',
        flight_dep_time: 2000,
        flight_destination: 'Mumbai',
        flight_no: 'LH201',
        seating_capacity: 6,
      },
      {
        id: '3',
        flight_dep_time: 2330,
        flight_destination: 'Chicago',
        flight_no: 'LH501',
        seating_capacity: 6,
      },
      {
        id: '4',
        flight_dep_time: 1800,
        flight_destination: 'Sydney',
        flight_no: 'LH012',
        seating_capacity: 6,
      },
      {
        id: '5',
        flight_dep_time: 1230,
        flight_destination: 'Lisbon',
        flight_no: 'LH021',
        seating_capacity: 6,
      },
    ],
    bookings: [
      {
        id: '1',
        flightId: '1',
        seat_no: '1A',
        passenger_name: 'Subhadip Pal',
        passport_number: 'P9746928',
        address: 'Tieloh 85',
        checkedIn: false,
        wheel_chair_required: false,
        withInfant: false,
        ancillary_services: ['Extra Blanket', 'Extra Pillow'],
      },
      {
        id: '2',
        flightId: '1',
        seat_no: '2A',
        passenger_name: 'Ilona Möller',
        passport_number: 'P892342',
        address: 'Tieloh 900',
        checkedIn: true,
        wheel_chair_required: false,
        withInfant: true,
        ancillary_services: ['Extra Pillow', 'Vegan food', 'Priority boarding'],
      },
      {
        id: '3',
        flightId: '3',
        seat_no: '5E',
        passenger_name: 'Vesna Munjiza',
        address: 'Tieloh 87',
        passport_number: 'P1002445',
        checkedIn: false,
        wheel_chair_required: true,
        withInfant: true,
        ancillary_services: ['Vegan food'],
      },
      {
        flightId: '3',
        seat_no: '6D',
        passenger_name: 'Sayan Das',
        address: 'Tieloh 88',
        passport_number: 'J123149',
        checkedIn: false,
        wheel_chair_required: false,
        withInfant: false,
        ancillary_services: ['Fruit Bowl'],
        id: 'yd_ZRy-',
      },
      {
        id: '5',
        flightId: '1',
        seat_no: '2E',
        passenger_name: 'Sumit Saha',
        address: 'Tieloh 89',
        passport_number: 'H1233452',
        checkedIn: true,
        wheel_chair_required: true,
        withInfant: false,
        ancillary_services: ['Extra Pillow'],
      },
    ],
    currentBooking: {
      id: '2',
      flightId: '1',
      seat_no: '2A',
      passenger_name: 'Ilona Möller',
      passport_number: 'P892342',
      address: 'Tieloh 900',
      checkedIn: true,
      wheel_chair_required: false,
      withInfant: true,
      ancillary_services: ['Extra Pillow', 'Vegan food', 'Priority boarding'],
    },
  }

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(flightsData)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<Bookings />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should exist', () => {
    const wrapper = shallow(<Bookings />)

    expect(wrapper.exists()).toBe(true)
  })
})
