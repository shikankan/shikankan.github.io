const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "いつも何度でも",
        artist: '宗次郎',
        url: 'http://www.ytmp3.cn/down/43584.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/74.jpg',
      }
    ]
});