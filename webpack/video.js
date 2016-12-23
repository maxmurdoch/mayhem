import R from 'ramda';
import $ from 'jquery';

const getVideoForId = (id) => `https://player.vimeo.com/video/${id}?autoplay=true`;

const setupVideos = () => {
  const videos = document.querySelectorAll('[data-vimeoid]');
  console.log(videos);

  R.forEach(
    (video) => {
      return video.addEventListener('click', (event) => {
        const videoWrapper = $(event.target).closest('[data-vimeoid]');
        console.log(videoWrapper);
        const source = getVideoForId(videoWrapper.data('vimeoid'));
        console.log(source);

        videoWrapper.html(`<iframe src="${source}" class="video" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`);
      });
    },
    videos
  );

  console.log('Videos setup');
};

export default setupVideos;
