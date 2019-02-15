var noun = ["shoes","clothes","cars","ballers","coffee"];
var adjective = ["awesome","great","premium","luxury","expert","amazing","unparalleled","top-notch"];

for (i=0; i<adjective.length; i++){
    for(j=0; j<noun.length; j++){
        document.querySelector("#answer").innerHTML += '<br>' + 'www.' + adjective[i] + noun[j] + '.com';
    }
}
