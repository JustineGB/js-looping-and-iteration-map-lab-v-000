function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const fullname = driver.split(" ");
    const firstname = fullname[0];
    const lastname = fullname[1];
    return `${fullname.firstname}, ${fullname.lastname}`;})
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;})
}

