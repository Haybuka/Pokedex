export const padTo = (url) => {
  let newUrl = Number(url.split("pokemon")[1].split("/")[1])
  if (newUrl < 10) {
    return `00${newUrl}`
  } else if (newUrl < 100) {
    return `0${newUrl}`
  } else {
    return newUrl;
  }
}