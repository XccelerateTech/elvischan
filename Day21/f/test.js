var funcA = function(callback){
    var i = Math.random() + 1;
  
    setTimeout(function(){
      console.log('function A');
  
      // 如果 callback 是個函式就呼叫它
    //   if( typeof callback === 'function' ){
        callback();
    //   }
  
    }, i * 1000);
  };
  
  var funcB = function(){
    var i = Math.random() + 1;
  
    setTimeout(function(){
      console.log('function B');
    }, i * 1000);
  };
  
  // 將 funcB 作為參數帶入 funcA()
  funcA( funcB );