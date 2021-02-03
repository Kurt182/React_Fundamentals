// 10 Little Monkey Challenge
// Are you ready?
// Create a button that when clicked you will subtract one monkey from the total. If it is zero you should display the following:
// There is no more monkeys jumping on the bed
// Otherwise you should display the following:
// 10 monkeys jumping on the bed one fell of and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed.
// Create a new component
// use useState
// Initialize your monkey count to 10

import React, { useState } from "react";
const TenMonkeys = () => {
const [count, setCount] = uspState(10);
let phrase;
function decCount(){
 setCount (count - 1);
}
if (count == 0) {
phrase = "No more monkeys jumping on the bed";
} else { 
    phrase =
"Monkeys jumping on the bed one tell off and bumped his head. Momma called the doctor and the doctor said.";
}
return (
<div>
<h2>10 Little Monkey Challenge</h2>
<p>The task is to create a button that reduces the number of monkeys</p>
<hr />
<br />
<button onClick={decCount}>Make a monkey jump</button>
<span>
{count} {phrase}
</span>
</div>
);
};

export default TenMonkeys;