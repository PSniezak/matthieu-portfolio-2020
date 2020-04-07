import { af as AF } from "@gladeye/af";
import anime from "animejs";

const af = AF();

export function timeline(settings) {
  if (!settings.config) {
    settings.config = {};
  }

  const timeline = anime.timeline(
    Object.assign(settings.config, {
      autoplay: false,
      complete: anim => {
        if (!settings.config.loop) {
          if (settings.onComplete) {
            console.log("loop", settings.config);
            settings.onComplete();
          }
          af.removeWrite(loop);
        }
      }
    })
  );

  function loop() {
    timeline.tick(performance.now());

    if (settings.tick) {
      settings.tick();
    }
  }

  timeline.destroy = function() {
    af.removeWrite(loop);
  };

  af.addWrite(loop);

  return timeline;
}
