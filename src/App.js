import React, { Component } from 'react';
import QuoteMachine from './components/QuoteMachine';
import { random } from 'lodash';
import 'typeface-roboto';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import "./App.css";

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
   
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(response => response.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  generateNewQuoteIndex() {
    const { quotes } = this.state;
    if (!quotes.length) {
      return null;
    }
    return random(0, quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }

  get selectedQuote() {
    const { quotes, selectedQuoteIndex } = this.state;
    if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return quotes[selectedQuoteIndex];
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid  id="quote-box" className={classes.container} justifyContent='center' container>
        <Grid xs={11} lg={8} item>
          {
            this.selectedQuote ?
            <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
            :
            null
          }
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
