import React from 'react'
import { Button } from '../button/Button'
import Grid from '@mui/material/Grid'
// import { Grid } from 'swiper'

// import '../../styles/home/Events.module.css'

export default function EventsDiv () {
  return (
    <div className='events-div'>
      <div>
        <h1 className='build-head'>Events</h1>
        <Grid container>
          <Grid item>
            <img 
                className='community-events-img' 
                src='https://github.com/KapadiaShubham/code8-media/blob/master/images/events-img.png?raw=true'
                alt='Community Events Img'
            />
          </Grid>

          <Grid item>
            <div className='community-events-data'>
              <div>
                <h1 className='events-h1'>Upcoming Events</h1>
                <h1 className='events-h2'>Coming Soon</h1>
              </div>
              
              <div>
                <h1 className='events-h1'>Past Events</h1>
                <div className='events-list'>
                  <ul>
                    <li>04/02/2022, Hackathon</li>
                    <li>06/02/2022, Hackathon</li>
                    <li>14/02/2022, Hackathon</li>
                  </ul>
                </div>
              </div>
              <br></br>
              <Button buttonSize='btn--large' buttonColor='blue'>
                See More
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
