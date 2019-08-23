var loaderText = document.createElement('h3');
loaderText.textContent = "Hi I'm the dayjs loader";
document.body.appendChild(loaderText);

var dayText = document.createElement('h2');
dayText.textContent = dayjs().format('dddd YYYY-MM-DD HH:mm:SSS Z');
dayjs().format('')
document.body.appendChild(dayText);


console.log("Hi I'm the dayjs loader");
console.log(dayjs().format('dddd YYYY-MM-DD HH:mm:SSS Z'));