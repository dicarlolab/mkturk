let loadScriptAsync = function(scriptName) {
  return new Promise((resolve, reject) => {
    let tag = document.createElement('script');
    tag.src = scriptName;
    tag.async = true;
    tag.onload = () => {
      resolve();
    };
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });
}

if (typeof (navigator.usb) == 'object') {
  let usb_script
}