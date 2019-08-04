import React from "react";
import axios from "axios";
import config from "../../config";
import style from "./style.less";
import flowerImg from "./img/flower.png";
import bgImg from "./img/bg.jpg";
import bgPurpleImg from "./img/bgPurple.jpg";

const myAxios = axios.create({
  baseURL: config.ajaxURL,
  responseType: 'json',
});

class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.getting = false;
    this.posting = false;
    this.state = {
      sent: false,
      nums: 0,
    };
  }

  componentDidMount() {
    this.getting = true;
    myAxios.get('/api/flower/')
      .then(rsp => {
        if (rsp.data.status === 200) {
          this.setState({
            nums: rsp.data.num
          });
        }
      })
      .finally(() => {
        this.getting = false;
      });
  }

  onClick() {
    if (!(this.getting || this.posting || this.state.sent)) {
      this.posting = true;
      myAxios.post('/api/flower/')
        .then(rsp => {
          if (rsp.data.status === 200) {
            this.setState({
              nums: rsp.data.num,
              sent: true,
            });
          }
        })
        .finally(() => {
          this.posting = false;
        });
    }
  }

  render() {
    return (
      <div
        className={style.page3}
        style={{
          backgroundImage: this.state.sent ? `url(${bgImg})` : `url(${bgPurpleImg})`
        }}
      >
        <div />
        <div className={style.text}>
          <p>
            已有
            <span className={style.number}>
              {this.state.nums > 0 ? this.state.nums : '多'}
            </span>
            人
          </p>
          <p>献上了花束</p>
          <img
            className={this.state.sent ? style.flowerSent : style.flower}
            src={flowerImg}
            alt="flower"
            onClick={() => { this.onClick() }}
          />
        </div>
        <div className={style.footer}>
          <p>bgm: Evan Call - Never Coming Back</p>
        </div>
      </div>
    );
  }
}

export default Page3;
