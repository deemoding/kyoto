// 预加载大图
import img1 from "./Pages/Page2/img/bg.png";
import img2 from "./Pages/Page3/img/bg.png";
import img3 from "./Pages/Page3/img/bgPurple.png";
import img4 from "./Pages/Page3/img/flower.png";

setTimeout(() => {
  new Image().src = img1;
  new Image().src = img2;
  new Image().src = img3;
  new Image().src = img4;
}, 5000);
