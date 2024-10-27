# Projects of JavaScript

### Project Link: 
[🙋‍♂️ Click Here to See](https://stackblitz.com/edit/dom-project-chaiaurcode-lkcsgk?file=1-colorChanger%2Fchaiaurcode.js)

## Project 1: Color Changer
![Screenshot](project-first.png)

### Code below: 
```javascript
const button = document.querySelectorAll('.button');
const body = document.body;
button.forEach((buttons) => {
  // switch (buttons.id) {
  //   case 'grey':
  //     buttons.addEventListener('click', () => {
  //       body.style.backgroundColor = 'grey';
  //       body.style.color = 'black';
  //     });
  //     break;
  //   case 'white':
  //     buttons.addEventListener('click', () => {
  //       body.style.backgroundColor = 'white';
  //       body.style.color = 'black';
  //     });
  //     break;
  //   case 'blue':
  //     buttons.addEventListener('click', () => {
  //       body.style.backgroundColor = 'blue';
  //       body.style.color = 'white';
  //     });
  //     break;
  //   default:
  //     buttons.addEventListener('click', () => {
  //       body.style.backgroundColor = 'yellow';
  //       body.style.color = 'black';
  //     });
  //     break;
  // }
  buttons.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```

## Project 2: BMI Calculator
![Screenshot of Project Second](project-second.png)

### Code below:
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  // Stop sending the form anywhere!
  e.preventDefault();

  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const output = document.getElementById('results');

  if (height === '' || height < 0 || isNaN(height)) {
    output.innerHTML = 'Enter correct height broo';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    output.innerHTML = 'Enter correct weight broo';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6){
      output.innerHTML = `${bmi} <br /> UnderWeight`;
    } else if (bmi > 18.6 && bmi < 24.9 ){
      output.innerHTML = `${bmi} <br /> Normal`;
    } else{
      output.innerHTML = `${bmi} <br /> Overweight`;
    }
  }
});

```

## Project 3: Clock
![Screenshot of Project Third](project-third.png)
### Code below:
```javascript
const clockBody = document.getElementById('clock');
setInterval(() => {
  let date = new Date();
  clockBody.innerHTML = date.toLocaleTimeString();
}, 1000)
```