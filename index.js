function lowerCaseDrivers(drivers) {
  return drivers.map (driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
    return drivers.map ( function (driver) {
      const fullname = driver.split(" ");
      let firstname = fullname[0]
      let lastname = fullname[1]
      return firstname, lastname;})
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
    )}
}

