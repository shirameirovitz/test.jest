const {mySlice} = require('./utils');

describe("my slice test"), ()=> {
    const arr = mySlice([1, 2, 3, 4, 5]);

    it("should get an array and return new array", () => {
        expect(mySlice(arr), 1, 3).not.toBe(arr);
        //expect(mySlice(arr), 1, 3).toEqual([2, 3]);
        expect(arr).toEqual(expect.arrayContaining(mySlice(arr, 2, 4)));
        });

        test("If startIndex is smaller then endIndex", () => {
            expect(() => mySlice(arr, 5, 3)).toThrow(Error)
           
        });
        //it("should get negative indices", () => {
           // expect(mySlice([arr, -3, 2])).toEqual(mySlice(arr, arr.length -3,arr.length 2))
       // });
        test("Negative indices should be counted from the end of the array", () => {
            expect(mySlice([1, 2, 3], -2, -1)).toEqual([2]);
          });
        
        test("startIndex should default to 0 and endIndex should default to array.length" , () => {
            expect(mySlice([1, 2, 3])).toEqual([1, 2, 3]);
        });

        test("if end index defaulted to arr length", () => {
        expect(mySlice(arr, 0)).toEqual(mySlice(arr, 0, arr.length));
    });

    }
    