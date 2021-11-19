import React from 'react'
import CheckIn from '../checkin'

import './index.scss'

function AdminDashboard() {

  return (
    <div className="dash-board">
      <CheckIn isSelectorExpanded={true}/>
    </div>
  )
}

export default AdminDashboard
