import Taro, { Component } from '@tarojs/taro'
import { View, Text, Label, Icon } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { AtToast } from "taro-ui"
import './index.scss'
import '../app.scss'


export default class Index extends Component {

  config = {
    navigationBarTitleText: ''
  }

  constructor(props) {
    super(props)
    // this.state = { show_toast: false }
  }

  render() {
    let icon_color = "color:" + this.$router.params["color"] + ";";
    
    console.log("icon_color");
    console.log(this.$router.params);
    console.log(icon_color);
    return (
      <View className="index">
        <View className="head">
          <View className="fa fa-star icon" style={icon_color} ></View>
          <View className="title" >{this.$router.params["title"]}</View>
          <View className="func">
            <View>点击获取捷径，获取下载链接。打开浏览器，粘贴地址并打开。</View>
            
          </View>
        </View>
        <View className="footer">
          <AtButton type='primary' className="get_btn" onClick={ this.set_clipboard } >获取捷径</AtButton>
          <View className="illegal">本捷径链为网络搜集，如有侵权，请告知。</View>
        </View>
        {/* {
          this.state.show_toast && <AtToast
            isOpened
            text="已复制到粘贴板"
            iconSize="60"
            iconType="success"
            isHiddenIcon="false"
          ></AtToast> */
        }

      </View>
    )
  }



  set_clipboard() {
    wx.setClipboardData({
      data: this.$router.params["url"],
    });
    // this.setState({
    //   show_toast: true
    // })
  }
}