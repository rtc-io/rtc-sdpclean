var validators = [
  [ /^a\=candidate/, require('rtc-validator/candidate') ]
];

/**
  # rtc-sdpclean

  Remove invalid lines from your SDP.

  ## Why?

  This module removes the occasional "bad egg" that will slip into SDP when it
  is generated by the browser.  In particular these situations are catered for:

  - invalid ICE candidates

  ## Usage

  << examples/clean.js

**/
module.exports = function(input, opts) {

};
