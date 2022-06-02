const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution cipher", () => {

  //encoding
  describe("Encoding message", () => {
    it("should encode message with substitute alphabet", ()=> {
      const message = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const expected = "ykrrpik";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });

    it("should be able to use special characters", () => {
      const message = "message";
      const alphabet = ".wae@zrdxtfcygvuhbijnokmpl";
      const expected = "y@ii.r@";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const message = "my space";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const expected = "yp iu.as";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });
  });

  //decoding
  describe("Decoding message", () => {
    it("should decode message using the substitution alphabet", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const expected = "message";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });

    it("should utilize characters correctly", () => {
      const message = "ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const expected = "message";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const message = "yp ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const expected = "my message";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });
  });

  // argument errors
  describe("invalid alphabet values", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "message";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not equal 26 characters", () => {
      const message = "message";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if any of the characters repeat", () => {
      const message = "message";
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });
});

