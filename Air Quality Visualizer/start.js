(() => {
  // เริ่มเขียนโค้ด

  const KEY = '64ffc226-1a83-46a2-992b-b3f34313d7ac';
  async function getAirQuality({ city, state, country }) {
    const res = await fetch(
      `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`
    );

    const {
      data: { current },
    } = await res.json();
    const { pollution, weather } = current;
    return {
      aqi: pollution.aqius,
      temperature: weather.tp,
      humidity: weather.hu,
      wind: weather.ws,
    };
  }

  function displayAirQuality({
    city,
    state,
    country,
    aqi,
    temperature,
    humidity,
    wind,
  }) {
    const cityElem = document.querySelector('.city');
    const stateCountryElem = document.querySelector('.state-country');
    const aqiElem = document.querySelector('.aqi > h1');
    const tempElem = document.querySelector('.temperature');
    const humidityElem = document.querySelector('.humidity');
    const windElem = document.querySelector('.wind');

    cityElem.innerText = city;
    stateCountryElem.innerText = `${state}, ${country}`;
    aqiElem.innerText = aqi;
    tempElem.innerText = `Temp: ${temperature} °C`;
    humidityElem.innerText = `Humidity: ${humidity}%`;
    windElem.innerText = `Wind: ${wind} m/s`;
  }

  function setAirQualityColor(aqi) {
    if (aqi <= 50) {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--good-aqi-color)'
      );
    } else if (aqi <= 100) {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--medium-aqi-color)'
      );
    } else {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--bad-aqi-color)'
      );
    }
  }

  async function run() {
    const city = 'Chicago';
    const state = 'Illinois';
    const country = 'USA';

    const { aqi, temperature, humidity, wind } = await getAirQuality({
      city,
      state,
      country,
    });

    displayAirQuality({
      city,
      state,
      country,
      aqi,
      humidity,
      wind,
      temperature,
    });

    setAirQualityColor(aqi);
  }

  run();
})();
