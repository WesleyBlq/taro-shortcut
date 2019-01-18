// 横幅数据
var scroll_data = [
  {
    "id": 1,
    "icon": "sitemap",
    "title": "休闲",
    "background_color": "rgb(26, 173, 25)",
    "description": "休闲捷径工具大集合",
    "collection": [
      {
        "id": 1,
        "left": {
          "icon": "star",
          "title": "扑鱼",
          "background_color": "#eeeeee",
          "url": "www.baidu.com",
        },
        "right": {
          "icon": "circle",
          "title": "捉妖记",
          "background_color": "#eeeeee",
          "url": "www.baidu.com",
        },
      },
      {
        "id": 2,
        "left": {
          "icon": "star",
          "title": "扑鱼",
          "background_color": "#eeeeee",
          "url": "www.baidu.com",
        },
        "right": {
          "icon": "circle",
          "title": "捉妖记",
          "background_color": "#eeeeee",
          "url": "www.baidu.com",
        },
      }
    ]
  },
  {
    "id": 2,
    "icon": "bath",
    "title": "休闲",
    "background_color": "#eeeeee",
    "description": "休闲捷径工具大集合",
    "collection": [
      {
        "id": 1,
        "left": {
          "icon": "star",
          "title": "扑鱼",
          "background_color": "#eeeeee",
          "url": "www.baidu.com",
        },
        "right": {
          "icon": "circle",
          "title": "捉妖记",
          "background_color": "#eeeeee",
          "url": "www.baidu.com",
        },
      },
      {
        "id": 2,
        "left": {
          "icon": "star",
          "title": "扑鱼",
          "background_color": "#eeeeee",
          "url": "www.baidu.com",
        },
        "right": {
          "icon": "circle",
          "title": "捉妖记",
          "background_color": "#eeeeee",
          "url": "www.baidu.com",
        },
      }
    ]
  }
]

// 列表数据
var local_database = [
  {
    "id": 1,
    "left": {
      "icon": "circle",
      "title": "休闲",
      "background_color": "#eeeeee",
      "description": "休闲捷径工具大集合",
      "collection": [
        {
          "id": 1,
          "left": {
            "icon": "star",
            "title": "扑鱼",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
          "right": {
            "icon": "circle",
            "title": "捉妖记",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
        },
        {
          "id": 2,
          "left": {
            "icon": "star",
            "title": "扑鱼",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
          "right": {
            "icon": "circle",
            "title": "捉妖记",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
        }
      ]
      
    },
    "right": {
      "icon": "bath",
      "title": "效率",
      "background_color": "#333333",
      "description": "效率捷径工具大集合",
      "collection": [
        {
          "id": 1,
          "left": {
            "icon": "star",
            "title": "记账",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
          "right": {
            "icon": "circle",
            "title": "支付宝",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
        },
      ]
    },
  },
  {
    "id": 2,
    "left": {
      "icon": "star",
      "title": "休闲",
      "background_color": "#eeeeee",
      "description": "休闲捷径工具大集合",
      "collection": [
        {
          "id": 1,
          "left": {
            "icon": "star",
            "title": "扑鱼",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
          "right": {
            "icon": "circle",
            "title": "捉妖记",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
        },
        {
          "id": 2,
          "left": {
            "icon": "star",
            "title": "扑鱼",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
          "right": {
            "icon": "circle",
            "title": "捉妖记",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
        }
      ]

    },
    "right": {
      "icon": "circle",
      "title": "日记",
      "background_color": "#eeeeee",
      "description": "休闲捷径工具大集合",
      "collection": [
        {
          "id": 1,
          "left": {
            "icon": "star",
            "title": "记账",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
          "right": {
            "icon": "circle",
            "title": "支付宝",
            "background_color": "#eeeeee",
            "url": "www.baidu.com",
          },
        },
      ]
    },
  },
  
]

module.exports = {    //数据暴露出去
  postList: local_database,
  scrollList: scroll_data,
}