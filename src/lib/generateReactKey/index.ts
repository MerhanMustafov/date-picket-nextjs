function generateReactKeyClosure() {
    let counter = 0;

    return function generate() {
        counter++;
        return counter;
    }
}

export const generateReactKey = generateReactKeyClosure();
