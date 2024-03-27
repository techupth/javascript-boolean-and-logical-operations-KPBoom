let isOver18;
let hasCriminalBlacklist;

let isAllow;

isOver18 = true;
hasCriminalBlacklist = !true;
isAllow = isOver18 && !hasCriminalBlacklist;

let James = isOver18 && !hasCriminalBlacklist;

isAllow = isAllow && James;
console.log(isAllow);
