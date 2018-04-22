const count = 1E7;
const key = 'TEXTAREA';
let a = 0;

// 准备测试用例
const keys = [];
for (let i = 0; i < count; i++) {
  keys[i] = key;
}
for (let i = 0; i < count; i++) {
  a = 1;
}

// 测试 toLowerCase
function lower() {
  let start = Date.now();
  for (let i = 0; i < count; i++) {
    if (keys[i].toLowerCase() === 'textarea') {
      a += 1;
    }
  }
  console.log('toLowerCase: ', Date.now() - start);
}


// 测试 toUpperCase
function upper() {
  let start = Date.now();
  for (let i = 0; i < count; i++) {
    if (keys[i].toUpperCase() === 'TEXTAREA') {
      a += 1;
    }
  }
  console.log('toUpperCase: ', Date.now() - start);
}


// 测试 RegExp.test
function test() {
  let start = Date.now();
  const reg = /^textarea$/i
  for (let i = 0; i < count; i++) {
    if (reg.test(keys[i])) {
      a += 1;
    }
  }
  console.log('RegExp.test: ', Date.now() - start);
}

test();
test();

upper();
upper();

lower();
lower();
