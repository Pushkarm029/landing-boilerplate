'use client'

import {Container, Typography, Button} from "@mui/material"

export default function Body() {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '94vh', // Set minimum height to full viewport height
      padding: 4, // Add padding for content spacing
      background: 'background.default', // Use default background color
    }}>
      <Typography variant="h2" className="h2">
        Welcome to My Awesome Landing Page
      </Typography>
      <Typography variant="body1" paragraph>
        This is a simple example of a landing page built with Next.js and Material-UI.
      </Typography>
      {/* <Link href="/about" passHref> */}
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      {/* </Link> */}
    </Container>
  )
}