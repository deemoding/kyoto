function getClientHeight() {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight)
      ? document.body.clientHeight
      : document.documentElement.clientHeight;
  } else {
    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight)
      ? document.body.clientHeight
      : document.documentElement.clientHeight;
  }
  return clientHeight;
}

function getScrollHeight() {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

export default function () {
  return getScrollHeight() - getClientHeight();
}
