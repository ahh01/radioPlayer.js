const CHANNELS_EL = document.getElementById("channels");

async function getChannelId() {
  const response = await fetch(
    "http://api.sr.se/api/v2/channels?format=json&size=100"
  );
  const data = await response.json();
  console.log(data);
  showChannels(data.channels);
}

getChannelId();
// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

function showChannels(channels) {
  channels.forEach((channel) => {


    console.log("src", channel.liveaudio.url);
    //1.Skapa variabel med ny div
    const channelDiv = document.createElement("div");
    const radioImageEl = document.createElement("img");
    const innerChannelEl = document.createElement("div");

    // Ge Element innehåll
    channelDiv.style.backgroundColor = `#${channel.color}`;
    radioImageEl.src = channel.image;
    innerChannelEl.innerHTML = `<h2>${channel.name}</h2>
    <audio controls> 
      <source src=${channel.liveaudio.url} type="audio/mpeg/"> 
      </audio>`;

    channelDiv.classList.add("channel");

    //3. Lägga till child

    channelDiv.appendChild(radioImageEl);
    channelDiv.appendChild(innerChannelEl);
    CHANNELS_EL.appendChild(channelDiv);
  });
}
