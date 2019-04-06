const fs = require('fs');

// const promise = new Promise((resolve, reject) => {
//   resolve();
// });

// test01
// promise
//   .then(() => fs.readdir(__dirname, (err, files) => {
//     files.forEach(file => {
//       console.log(fs.statSync(file).isDirectory());
//     });
//   }))
//   .then(() => fs.readdir(__dirname + '/project_A', (err, files) => {
//     console.log("project A : ");
//     files.forEach(file => {
//       console.log(file);
//     });
//   }))
//   .then(() => fs.readdir(__dirname + '/project_B', (err, files) => {
//     console.log("project B : ")
//     files.forEach(file => {
//       console.log(file);
//     });
//   }))
//   .catch((err) => console.log('uh oh error', err));

//test02
// promise
//   .then(() => fs.readdir(__dirname, (err, files) => {
//     var filesArray = [];
//     files.forEach(file => {
//       console.log(fs.statSync(file).isDirectory());
//       if(fs.statSync(file).isDirectory()){
//         console.log( "elvis" + file);
//         filesArray.push(file);
//       }
//     });
//     console.log(filesArray);
//   }))
//   .catch((err) => console.log('uh oh error', err));

// test03
// function test123() {
//   var promise = new Promise(function (resolve, reject) {
//     fs.readdir(__dirname, (err, files) => {
//       var filesArray = [];
//       files.forEach(file => {
//         console.log(fs.statSync(file).isDirectory());
//         if (fs.statSync(file).isDirectory()) {
//           console.log("elvis" + file);
//           filesArray.push(file);
//         }
//       });
//       console.log(filesArray);
//       resolve(filesArray);
//     })
//     return promise;
//   })
// }

// test123().then(function (result) {
//   console.log(result);
// });

// test04
// getGenres = function () {
//   var promise = new Promise(function (resolve, reject) {
//     fs.readdir(__dirname, (err, files) => {
//       var filesArray = [];
//       files.forEach(file => {
//         console.log(fs.statSync(file).isDirectory());
//         if (fs.statSync(file).isDirectory()) {
//           console.log("elvis" + file);
//           filesArray.push(file);
//         }
//       });
//       console.log(filesArray);
//       resolve(filesArray);
//     })
//   });
//   return promise;
// };

// getGenres().then(function (result) {
//   console.log("secson2:"+result);
//   result.forEach(file => {
//     console.log("section3:" + file)
//     fs.readdir(__dirname + '/' + file, (err, files) => {
//       files.forEach( files => {
//         console.log(file + files);
//       });
//   });
// })
// });

// test05
getGenres = function (ans) {
  var promise = new Promise(function (resolve, reject) {
    fs.readdir(ans, (_err, files) => {
      var filesArray = [];
      files.forEach(file => {
        console.log(file + " " + fs.statSync(file).isDirectory());
        if (fs.statSync(file).isDirectory()) {
          // console.log("elvis" + file);
          filesArray.push(file);
        }
      });
      // console.log(filesArray);
      resolve(filesArray);
    })
  });
  return promise;
};

getGenres(__dirname).then(result => elvis(result)).then(data => elvis2(data) );

function elvis(result) {
  var promise = new Promise(function (resolve, reject) {
    var filesArray = [];
    console.log("section 2: " + result);
    result.forEach(file => {
      fs.readdir(__dirname + '/' + file, (err, files) => {
        files.forEach(files => {
          console.log(file + " " + files + " " + fs.statSync(__dirname + '/' + file + '/' + files).isDirectory());
          if (fs.statSync(__dirname + '/' + file + '/' + files).isDirectory()) {
            filesArray.push(files);
            console.log(filesArray);
          }
        });
      });
    })
  });
  return promise
}

function elvis2(){
  console.log("section 3:" + result);
}



