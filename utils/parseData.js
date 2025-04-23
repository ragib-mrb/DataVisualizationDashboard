export const convertDataToArray = (csvAsString, delimiter = ",") => {
  const lines = csvAsString.trim().split("\n");
  const headers = lines.shift().split(delimiter);
  return lines.map((line) => {
    const values = line.split(delimiter);
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });
};

export const getDataAsArray = async (file) => {
  const data = await fetch(file);
  const response = await data.text();

  return convertDataToArray(response);
};
