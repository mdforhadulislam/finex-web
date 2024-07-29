const stringGenarator = () => {
    let length = 90;
    const possiblecharacters =
      "AAAABBBBCCCCDDDDEEEFFFFGGGGGHHHHHIIIIIJJJJJJKKKKKKLLLLLLMMMMMMMNNNNNNNOOOOOOPPPPPPQRSTUVWXYZ11111222223333344444555556666677777888889999900000";
    let output = "";
    for (let i = 1; i <= length; i += 1) {
      const randomCharacter = possiblecharacters.charAt(
        Math.floor(Math.random() * possiblecharacters.length)
      );
      output += randomCharacter;
    }
    return output;
  };
  
module.exports = stringGenarator;