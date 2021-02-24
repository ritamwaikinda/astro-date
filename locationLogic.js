import React from 'react';

function locationLogic() {
  function authToken() {
    var req = unirest(
      'GET',
      'https://www.universal-tutorial.com/api/getaccesstoken'
    );
    req.headers({
      Accept: 'application/json',
      'api-token':
        'AQM6hX7qfUMkTcXlRra_U4ShuUTYV83genxRjvod18nOgyOiV1SrTHIw8u22wlfpIT0',
      'user-email': 'srmwaikinda@gmail.com'
    });
  }

  return <div></div>;
}

export default locationLogic;
