// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = () => {
    var begin = "";
    var html = "";

    if (audio.controls)
        begin += `<audio controls>`;
    else begin += `<audio>`;
    
    for (var i = 0; i < audio.source.length; i++) {
        html += `<source src="${audio.source[i].src}" type="${audio.source[i].type}">`
    }

    begin = `<audio controls>${html}</audio>`;
    $('#first').first().append(begin);
}