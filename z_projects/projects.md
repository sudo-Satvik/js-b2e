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
        body.style.backgroundColor = e.target.id;x`
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```

## Project 2: BMI Calculator
![Screenshot](project-first.png)

### Code below:
```javascript
console.log("satvik")
```