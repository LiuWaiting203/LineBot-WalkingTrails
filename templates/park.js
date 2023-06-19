export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'http://linecorp.com/'
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: '十八尖山公園',
        weight: 'bold',
        size: 'xl'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '地址：',
                color: '#c28400',
                size: 'lg',
                flex: 2
              },
              {
                type: 'text',
                text: '新竹市東區寶山路145巷38號',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 7,
                margin: 'none'
              }
            ],
            margin: 'md'
          },
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: '環境特色：',
                color: '#c28400',
                size: 'lg',
                margin: 'none',
                flex: 5
              },
              {
                type: 'text',
                text: '十八尖山，舊名虎頭山，為日據時代，紀念日本昭和天皇登基所開闢之「森林公園」',
                color: '#666666',
                size: 'sm',
                flex: 6,
                margin: 'none',
                align: 'start',
                wrap: true
              }
            ],
            spacing: 'sm',
            margin: 'md'
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '健走公里數',
                color: '#aaaaaa',
                size: 'sm',
                flex: 4
              },
              {
                type: 'text',
                text: '7.5公里',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ],
            margin: 'md'
          }
        ]
      }
    ]
  }
}
