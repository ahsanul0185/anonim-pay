import React from 'react'
import DashboardBlock from '../components/dashboard/DashboardBlock'

const Dashboard = () => {
  return (
    <div className='h-screen bg-[#f4f7fe] p-10 flex flex-col md:flex-row items-start gap-4 '>
      <DashboardBlock title="Total Sales Today" value="0.00" color="#FFD4D4"/>
      <DashboardBlock title="Total Sales" value="0.00" color="#DEFFD4"/>
    </div>
  )
}

export default Dashboard