export function checkMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  const MOBILE_WINDOW = /windows phone/i.test(userAgent);
  const MOBILE_ANDROID = /android/i.test(userAgent);
  const MOBILE_IOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

  return MOBILE_IOS || MOBILE_ANDROID || MOBILE_WINDOW;
}

export const isMobile = true || checkMobile();
