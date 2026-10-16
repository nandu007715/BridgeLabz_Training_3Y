let count = 0;

function showCount() {
    function displayCount() {
        console.log("Current Count:", count);
    }

    displayCount();
}

function increment() {
    count++;
    showCount();
}

function decrement() {
    count--;
    showCount();
}

increment();
increment();
decrement();
decrement();
decrement();
