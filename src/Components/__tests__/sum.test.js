import {sum} from "../sum";
test("Sum Function should caculate the sum of two numbers",()=>{
  
    // Assertion
    const result = sum(3,4);
    expect(result).toBe(7);
  
})
