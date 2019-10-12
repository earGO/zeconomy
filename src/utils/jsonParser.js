function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function parseStringToArray(str) {
  if (IsJsonString(str)) {
    let rawData = JSON.parse(str);
    return rawData;
  } else {
    console.log('not a JSON');
  }
}

export default parseStringToArray;
