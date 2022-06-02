const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Caesar shift", () => {
    // decoding
    describe("Decoding message", () => {
        it("should ignore capital letters", () => {
            const input = "cZgGJ";
            const shift = 5;
            expected = "hello";
            actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })

        it("should maintain spaces throughout", () => {
            const input = "do dn vrznjhz";
            const shift = 5;
            expected = "it is awesome";
            actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should maintain special characters", () => {
            const input = "tzn, rczmz vmz tjp?";
            const shift = 5;
            expected = "yes, where are you?";
            actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should handle beginning/end of alphabet correctly", () => {
            const input = "uzwmv";
            const shift = 5;
            expected = "zebra";
            actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should handle negative shift values correctly", () => {
            const input = "cheud";
            const shift = -3;
            expected = "zebra";
            actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
    })

    // encoding
    describe("Encoding message", () => {
        it("should ignore capital letters", () => {
            const input = "HeLlo";
            const shift = 5;
            expected = "mjqqt";
            actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })

        it("should maintain spaces throughout", () => {
            const input = "coding is awesome";
            const shift = 5;
            expected = "htinsl nx fbjxtrj";
            actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should maintain special characters", () => {
            const input = "are you @ the bunker?";
            const shift = 5;
            expected = "fwj dtz @ ymj gzspjw?";
            actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should handle beginning/end of alphabet correctly", () => {
            const input = "buzz";
            const shift = 5;
            expected = "gzee";
            actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should handle negative shift values correctly", () => {
            const input = "rope";
            const shift = -3;
            expected = "olmb";
            actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
    })

    //input and shift errors
    describe("Invalid input and shift values", () => {
        it("should return false when input value is not present", () => {
            const shift = 5;
            const input = "";
            const actual = caesar(input);
            expect(actual).to.be.false;
        });

        it("should return false when shift value is not present", () => {
            const shift = null;
            const input = "This will not encode";
            const actual = caesar(input);
            expect(actual).to.be.false;
        });

        it("should return false when shift value is less than -25", () => {
            const shift = -30;
            const input = "This will not encode";
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        });

        it("should return false when shift value is more than 25", () => {
            const shift = 30;
            const input = "This will not encode";
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        });

        it("should return false when shift equals 0", () => {
            const shift = 0;
            const input = "This will not encode";
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })
    })

})

