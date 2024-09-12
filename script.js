// Google Drive Download Link Generator
/*
    This project will allow us to host our files on Google Drive and access them on any website.
*/

// Create variables
const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

// Event listener to generate download link and copy link to clipboard
btn.addEventListener("click", generateLink);

function generateLink(e) {
    e.preventDefault();         // Stop page from reload

    // Get link from input box
    const gLinkValue = gLink.value;
    const confirmLink = gLink.value.includes("https://drive.google.com/file/d/");

    // Check if link provided is a valid link
    if (confirmLink == true) {
        const getDownloadLink = gLink.value
        .replace("https://drive.google.com/file/d/", 
                "https://drive.google.com/uc?export=download&id=")
        .replace("/view?usp=sharing", "");
 
        downloadLink.value = getDownloadLink;
        
        // ----------- Function to copy text to clipboard ----------- 
        function copyText(target) {
            if (target.value == "") {
                alert("Please generate a download link")
            }
            else {
                navigator.clipboard.writeText(target.value);
                alert("Copied to clipboard!");
            }
        }

        // Select copy button and add event listener to copy text from text area to clipboard
        const copy = document.querySelector(".copy");
        copy.addEventListener("click", () => {
            return copyText(downloadLink);
        })

        // ----------- Embed audio function ----------- 
        const audio1 = '<audio width="300" height="32" controls="controls" src="';
        const audio2 = '" type="audio/mp3"></audio>';
        const embedAudio = document.getElementById("embed-audio");
        embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;
        console.log(embedAudio.value);

        // Copy embed audio code
        const copyAudio = document.querySelector(".copy-audio");
        copyAudio.addEventListener("click", () => {
            return copyText(embedAudio);
        })

        // ----------- Embed video function ----------- 
        const getVideoLink = gLink.value.replace("/view?usp=sharing", "");
        const video1 = '<iframe src="';
        const video2 = '/preview" width="560" height="315"></iframe>';
        const embedVideo = document.getElementById("embed-video");
        embedVideo.value = `${video1}${getVideoLink}${video2}`

        // Copy embed video code
        const copyVideo = document.querySelector(".copy-video");
        copyVideo.addEventListener("click", () => {
            return copyText(embedVideo);
        })
    } else {
        alert("Please enter a valid Google drive file link.");
    }
}
