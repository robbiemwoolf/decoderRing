const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius Square", () => {

  // encoding
  describe("Encoding message", () => {
    it("should return message encoded with number pairs", () => {
      const input = "fun";
      const expected = "125433";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const input = "jiffy";      
      const expected = "4242121245";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const input = "this is fun";
      const expected = "44324234 4234 125433";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });
  });

  // decoding
  describe("decoding a message", () => {
    it("should return decoded message from number pairs", () => {
      const input = "31434313";
      const expected = "cool";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });

    it("should translate 42 to (i/j)", () => {
      const input = "33423151";
      const expected = "n(i/j)ce"
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });

    it("should maintain space", () => {
      const input = "4432512451 112451 345311315134";
      const expected = "there are spaces";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
  });

  // invalid inputs
  describe ("Invalid inputs for message argument", () => {
    it("should return false if the length of all numbers is odd", () => {
      const input = "112";
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });
  });  
});
