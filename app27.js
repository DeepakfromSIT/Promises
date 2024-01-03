function saveToDb(data) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  return new Promise((resolve, reject) => {
    if (internetSpeed > 4) {
      console.log("data was saved");
    } else {
      console.log("data not saved");
    }
  });
}

saveToDb("Hello world");
