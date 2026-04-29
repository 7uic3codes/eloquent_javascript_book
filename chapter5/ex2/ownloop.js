function loop(value, test, update, body) {
    while(test(value)) {
        if (!test(value)) {
            return false;
        }
        body(value);
        value = update(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
