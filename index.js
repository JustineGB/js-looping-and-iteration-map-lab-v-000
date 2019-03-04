function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const fullname = driver.split(" ");
    return Object.assign({firstname: fullname[0], lastname: fullname[1]});
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;})
}

