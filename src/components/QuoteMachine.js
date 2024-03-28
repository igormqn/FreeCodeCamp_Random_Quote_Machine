import React from 'react';
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; 

const QuoteMachine = (props) => (
  <Card style={{backgroundColor: 'rgb(145, 35, 35)'}}>
    <CardContent>
      {props.selectedQuote && (
        <Typography id="text">
          {props.selectedQuote.quote} - <span id="author">{props.selectedQuote.author}</span>
        </Typography>
      )}
    </CardContent>
    <CardActions style={{ justifyContent: 'center', }}> {/* Centrer horizontalement les actions de la carte */}
      <Button id="new-quote" size="small" onClick={props.assignNewQuoteIndex}>Next Quote</Button>
      {props.selectedQuote && (
        <IconButton id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hashtags=thewebdevcoach`}>
          <FontAwesomeIcon style={{ color: 'rgb(29, 161, 242)', }} icon={faTwitter} size="md"></FontAwesomeIcon>
        </IconButton>
      )}
    </CardActions> 
  </Card> 
);

export default QuoteMachine;
