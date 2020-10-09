import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  // summer or Winter
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
}

export default SeasonDisplay;
