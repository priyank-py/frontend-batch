const now = new Date();

console.log(dateFns.isToday(now));

const before = new Date('October 18 2019');

console.log(dateFns.distanceInWords(before.getTime(), now.getTime(), {addSuffix:true}));
