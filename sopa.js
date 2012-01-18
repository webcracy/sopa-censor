;(function() {
  function suspectedElements() {
    var suspects = [];
    var p = document.getElementsByTagName('p'),
        a = document.getElementsByTagName('a'),
        s = document.getElementsByTagName('span');
    suspects.push(p);
    suspects.push(a);
    suspects.push(s);
    var hs = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'];
    for (var i = hs.length - 1; i >= 0; i--){
      var h = document.getElementsByTagName(hs[i]);
      if (h) { 
        suspects.push(h);
      }
    };
    return suspects;
  }
  function censorWithSopa(suspectList) {
    for (var i = suspectList.length - 1; i >= 0; i--){
      var suspectGroup = suspectList[i];
      for (var j = suspectGroup.length - 1; j >= 0; j--){
        suspectGroup[j].style.backgroundColor = '#000';
        suspectGroup[j].style.color = '#000';
      };
    };
    return false;
  };
  censorWithSopa(suspectedElements());
})();