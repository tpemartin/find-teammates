import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import BoyIcon from '@mui/icons-material/Boy';
import CustomizedRating from './rating';
import TeamStatus from './table';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

export default function AdCards({ads, keys}){
  const colors = ["#f6e239", '#afea00', '#afea00']
  const color = colors[Math.floor(Math.random() * colors.length)];
  return <>
    {ads.map((ad, i)=>{
        return <AdCard key={i} style={{backgroundColor: color, position: "relative"}}>
        {ad[keys["Vacancy Number of Teammate"]]===0?<div className="match">Matched</div>:<></>}
        <Title text={ad[keys["Title"]]}/>
        <Description text={ad[keys["Description"]]}/>
        <TeamStatus currentMembers={ad[keys["Current Number of Teammates"]]} vacancies={ad[keys["Vacancy Number of Teammate"]]}/>
        
        <Stack direction="column" space={0} className="contact-info">
            <h5 style={{marginBottom: "10px"}}>Contact <span style={{color: "#00000099"}}>{ad[keys["Contact Person"]]}</span>  At</h5>
            <ContactEmail text={ad[keys["Contact Email"]]}/>
            
        </Stack>
        
    </AdCard>
    })
    }
  </>

}

function AdCard({children}){
    
    return <Card sx={{ maxWidth: 275 }} style={{backgroundColor: "#f6e239"}}>
        <CardContent  className="adcard" >
        {children}
        </CardContent>
    </Card>
}

function Title({text}){
    return  <Typography variant="h5" component="div">
    {text}
  </Typography>
}
function Description({text}){
    return <Typography className="description"  variant="body2" color="text.secondary">
        {text}
    </Typography>
}
function NeedHowMany({text}){
    return <div className="current-count">
        {text}
    </div>
}
function HowManyNow({text}){
    return <div className="vacancy-count">
        {text}
    </div>
}
function ContactName({text}){
    return <span>{text}</span>

}
function ContactEmail({text}){
    return <Link href={"mailto:"+text} underline="hover">{text}</Link>
}