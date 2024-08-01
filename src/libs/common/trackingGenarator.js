const trackingGenarator = () => {
    let length = 10;
    const possiblecharacters =
      "1111000011112222223333334444455555500055500000000000011111667788888888889999999999990011111100000";
    let output = "11";
    for (let i = 1; i <= length; i += 1) {
      const randomCharacter = possiblecharacters.charAt(
        Math.floor(Math.random() * possiblecharacters.length)
      );
      output += randomCharacter;
    }
    return output;
  };

  
module.exports = trackingGenarator;