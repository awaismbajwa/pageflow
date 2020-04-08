import {events} from '../events';
import {browser} from '../browser';

export const mediaEvents = function(player, context) {
  function triggerMediaEvent(name) {
    events.trigger('media:' + name, {
      fileName: player.currentSrc(),
      context: context,
      currentTime: player.currentTime(),
      duration: player.duration(),
      volume: player.volume(),
      bitrate: browser.has('high bandwidth') ? 3500000 : 2000000
    });
  }

  player.on('play', function() {
    triggerMediaEvent('play');
  });

  player.on('timeupdate', function() {
    triggerMediaEvent('timeupdate');
  });

  player.on('pause', function() {
    triggerMediaEvent('pause');
  });

  player.on('ended', function() {
    triggerMediaEvent('ended');
  });
};