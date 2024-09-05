function vowelCheck() {
    let vowelcheck = $("#vowelCounter").val();
    if (vowelcheck.trim() !== "") {
        let matchCounter = vowelcheck.match(/[aiueo]/gi);
        $("#vowelOutputCounter").text(matchCounter ? matchCounter.length : 0);
    } else {
        alert("Plz Fill The Field!!");
    }
}
