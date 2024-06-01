function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function appendValue(value) {
    document.getElementById('display').innerText += value;
}

function calculateResult() {
    try {
        let display = document.getElementById('display');
        let expression = display.innerText;

        expression = expression.replace(/(\d+)%/g, (match, p1) => '(${p1}/100)');

        let result = eval(expression);
        display.innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
