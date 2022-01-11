function getCountry() {
  return 'INDIA';
}

function getAudience() {
  return 50;
}

function getSingers() {
  setTimeout(() => {
    const country = getCountry();
    console.log(country);
    setTimeout(() => {
      const state = getState();
      console.log(state);
      setTimeout(() => {
        const audience = getAudience();
        console.log(audience);
      }, 2000);
    }, 2000);
  }, 2000);
}

function getState() {
  return 'DELHI';
}

getSingers();
