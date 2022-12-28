var design = anime({
    targets: 'svg #XMLID5',
    keyframes: [
      {translateX: -1200},
      {rotateY: 180},
      {translateX: 1420},
      {rotateY: 0},
      {translateX: -1200},
      {rotateY: 180},
      {translateX: -1200},
      {rotateY: 180},
      {translateX: 1420},
      {rotateY: 0},
      {translateX: -1200},
      {rotateY: 180},
      {translateX: -100},
      ], 
      
    easing: 'easeInOutSine',
    duration: 100000,
  });
  
  anime({
    targets: '#dust-paarticle path',
    translateY: [10, -100],
    direction: 'alternate',
    loop: true,
    delay: function(el, i, l) {
      return i * 100;
    },
    endDelay: function(el, i, l) {
      return (l - i) * 100;
    }
  });