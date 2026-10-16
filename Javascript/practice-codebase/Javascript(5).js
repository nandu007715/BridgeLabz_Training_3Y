let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    let isSecure =
        isDoorLocked &&
        isWindowClosed &&
        isAlarmOn &&
        isOwnerInside;

    let isUnsafe =
        !isDoorLocked ||
        !isWindowClosed ||
        !isAlarmOn ||
        !isOwnerInside;

    if (isSecure && !isUnsafe) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

checkSecurity();

isWindowClosed = false;
checkSecurity();

isWindowClosed = true;
checkSecurity();
