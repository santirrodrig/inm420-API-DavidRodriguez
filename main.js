// async/await
async function getData(key) {
    try {

        const main = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);

        // console.log (main)
        const infoFromServer = await main.json();

        console.log(infoFromServer);

        const content = document.querySelector("#image-info");

        // change the media depending if img or video
        let mediaContent;

        if (infoFromServer.media_type === 'image') {
            mediaContent = `<img src="${infoFromServer.hdurl}"/>`;
        } else if (infoFromServer.media_type === 'video') {
            mediaContent = `<iframe width="560" height="315" src="${infoFromServer.url}" frameborder="0" allowfullscreen></iframe>`;
        } else {
            mediaContent = 'Unknown media type';
        }
       
        // rest of the content 
        content.innerHTML = `
            <p id="title" >The APOD of the day is</p>
            <p id="date">${infoFromServer.date}
            <p id="title2">${infoFromServer.title}
            <div id="content">${mediaContent}</div>
            <p id="explanation">${infoFromServer.explanation}
        `;

    } catch (error) {
        console.warn(`Nope: ${error}`);
        console.warn("Nope: " + error);
    }

}

getData('eyVkyMc4Jy0EQEy6sXUziQhENI4S31tC916hJtMd');