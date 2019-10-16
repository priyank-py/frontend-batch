// const now = new Date('April 1 2019 11:45:59');
// const now = new Date('2019 10 15 4:55:45')
// const now = new Date()

// console.log(now.getTime());
// const ms = now.getTime();
// const dt = new Date(ms);
// console.log(dt);

const date1 = new Date('February 1 2019 11:50:30')
const date2 = new Date('March 19 2019 5:30:45')
diff = date2.getTime() - date1.getTime()

s = Math.round(diff/1000);
m = Math.round(s/60);
h = Math.round(m/60)
days = Math.round(h/24)

console.log(`Blog is ${days} days old.`)
// console.log(date2)