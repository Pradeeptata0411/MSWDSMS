import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import one from '../../assests/images/tsem1.jpg';
import two from '../../assests/images/appsc.jpg';
import thr from '../../assests/images/klee.jpg'
import jee from '../../assests/images/jee.jpg';
import jed from '../../assests/images/edu.jpg';
import { Link } from "react-router-dom";
import { ButtonBase } from '@mui/material';
export default function Mobile() {
   const Mobile=[{
    "img":<img src={one} width={250} height={120} />,
     "modal":"Day-1 Paper-1",
     "Type":"Single Bed + AC",
     "NOTE":<a href='https://in.docworkspace.com/d/sIMT068tY1vX1mAY?sa=00&st=0'><Button variant='contained'>click</Button></a>,
     "available":true
   },
   {
    "img":<img src={one} width={250} height={120} />,
    "modal":"Day-1 Paper-2",
    "Type":"Two Bed + AC +Attached Restroom",
    "NOTE":<a href='https://in.docworkspace.com/d/sINT068tYlvf1mAY?sa=00&st=0'><Button variant='contained'>click</Button></a>,
    "available":true
   },
   {
    "img":<img src={one} width={250} height={120} />,
    "modal":"Day-2 Paper-1",
     "Type":"To View Click Below",
     "NOTE":<a href='https://in.docworkspace.com/d/sIMT068tY1vX1mAY?sa=00&st=0'><Button variant='contained'>click</Button></a>,
     "available":true
   },
   {
    "img":<img src={two} width={250} height={120} />,
    "modal":"Group-1 2021",
     "Type":"To View Click Below",
     "NOTE":<a href='https://in.docworkspace.com/d/sIPP068tY8OutmgY?sa=00&st=0'><Button variant='contained'>click</Button></a>,
     "available":true
   },
   {
    "img":<img src={jee} width={250} height={120} />,
    "modal":"JEE 2022",
     "Type":"To View Click Below",
     "NOTE":<a href='https://in.docworkspace.com/d/sIKP068tYge6tmgY?sa=00&st=0'><Button variant='contained'>click</Button></a>,
     "available":true
   },
   {
    "img":<img src={jed} width={250} height={120} />,
    "modal":"JEE Advance",
     "Type":"To View Click Below",
     "NOTE":<a href='https://in.docworkspace.com/d/sIKP068tYge6tmgY?sa=00&st=0'><Button variant='contained'>click</Button></a>,
     "available":true
   },
   {
    "img":<img src={jed} width={250} height={120} />,
    "modal":"JEE Advance 2020",
     "Type":"To View Click Below",
     "NOTE":<a href='https://in.docworkspace.com/d/sIKP068tYge6tmgY?sa=00&st=0'><Button variant='contained'>click</Button></a>,
     "available":true
   }
]
  return (
    <div class="contained">
        <hr width="50%" size="3" /><center><h1>Welcome to papers</h1></center><hr width="50%" size="3" />
      <Box p={10}>
      <Grid  container justifyContent="center" spacing={2}>
              {Mobile.map((sp)=>(<Grid item>
               <Paper key={sp.id} sx={{height:320 , width:280}}style={{border: '2px solid green'}}>
               <center>{sp.img}</center><br/>{sp.Name}<br/>
                   <h4><center>{sp.modal}</center><br/><center>{sp.NOTE}</center><br/><center>Available:{sp.available ? "Yes":"No"}</center></h4>
               </Paper>
              </Grid>))}
          </Grid>
     </Box>
    </div>
)
}