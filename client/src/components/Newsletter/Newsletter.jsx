import { Button, ButtonBase, IconButton } from "@material-ui/core";
import { StepButton, ToggleButton } from "@mui/material";
import { Link } from "react-router-dom";
import img from '../../assests/images/abc.jpg';
import FlipCard1 from "./FlipCard1";
const Newsletter = [
    {
      id: 1,
      emoji:<center><img src={img} width='200' height='100' /></center> ,
      back:<Link to='/Course'>Lorem </Link>
        
    },
    {
      id: 2,
      emoji: <center><img src={img} width='200' height='100' /></center> ,
      back:<IconButton><Link to='/CALCULATOR'>CALCULATOR</Link></IconButton>
        
    },
    {
      id: 3,
      emoji: "😛",
      back:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh tellus."
    },
    {
      id: 4,
      emoji: "😛",
      back:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh tellus."
    },
    {
      id: 5,
      emoji: "🤭",
      back:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh tellus."
    },
    {
      id: 6,
      emoji: "🤐",
      back:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh tellus."
    }
  ];
  
  export default Newsletter;