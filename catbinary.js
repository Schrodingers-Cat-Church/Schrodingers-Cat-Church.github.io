function decode() {
    message = document.getElementById("meowbinary").value;
    message = message.replace(/meow/g, '0').replace(/MEOW/g, '1')
    var result = "";
    var arr = message.match(/.{1,8}/g);
    for (var i = 0; i < arr.length; i++) {
        result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
    }
    document.getElementById("english").value = result;
}

function encode() {
    message = document.getElementById("english").value;
    var result = "";
    for (var i = 0; i < message.length; i++) {
        var bin = message[i].charCodeAt().toString(2);
        result += Array(8 - bin.length + 1).join("0") + bin;
    }
    document.getElementById("meowbinary").value = result.replace(/0/g, 'meow').replace(/1/g, 'MEOW');
}
