const setInlineVideo = (video, btn) => {
    const videoWraps = document.querySelectorAll(video);
    const playBtn = document.querySelectorAll(btn);

    playBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            videoWraps.forEach((item) => {
                item.pause();
                btn.classList.add('playing-video');
            });
            playBtn.forEach((item) => {
                item.classList.remove("playing-video");
                videoWraps[index].pause();
            });
            btn.classList.add("playing-video");
            videoWraps[index].play();
            // console.log(videoWraps[index].duration);
        });
    });

    videoWraps.forEach((video, index) => {
        video.addEventListener("click", () => {
            if (!playBtn[index].classList.contains("playing-video")) {
                return;
            }
            playBtn[index].classList.remove("playing-video");
            video.pause();
        });
    });


}

export default setInlineVideo;
