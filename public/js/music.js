const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,                //是否附着页面底部，否为false
  volume: 0.7,                //初始音量（0~1）
  lrcType: 3,                 //歌词模式（1、HTML模式 2、js模式 3、lrc文件模式）
  mutex: true,                //互斥模式：阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
  order: 'random',            //音频循环顺序（'list'：顺序, 'random'：随机）
  preload: 'none',            //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
  listFolded: true,          //列表默认折叠，开启为true
  theme: '#ee8243',           //主题颜色
  audio: [{
      name="光るなら"
      artist="Goose house"
      url="/music/光るなら.m4a"
      cover="/music/cover/1.jpg"
      lrc="/music/lyrics/光るなら.lrc">     //歌曲封面地址
      theme: '#eeeeee'        //主题颜色（优先）
  }]
});