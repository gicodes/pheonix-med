import { Box, Card } from '@mui/material'
import React from 'react'

const Overview = () => {
  return (
    <div className="p-1">
      <Card sx={{ p: 2 }}>
        <Box textAlign={"center"}>
          This is the overview page
          It will contain a summary of Pheonix's sales and services
        </Box>
      </Card>
    </div>
  )
}

export default Overview