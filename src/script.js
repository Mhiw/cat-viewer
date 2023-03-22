const xhr = new XMLHttpRequest();
xhr.open("GET", "https://cataas.com/cat");
xhr.responseType = "arraybuffer";
xhr.onload = function() {
    if(xhr.status === 200) {
        const img = document.createElement("img");
        img.src = "data:image/jpeg:base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(xhr.response)));
        document.body.appendChild(img);
    } else {
        console.error("Error: ", xhr.status);
    }
};
xhr.send();