export function generateKeys(size: number) {
  var stringRandon = '';
    var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < size; i++) {
        stringRandon += char.charAt(Math.floor(Math.random() * char.length));
    }
    return stringRandon;
}