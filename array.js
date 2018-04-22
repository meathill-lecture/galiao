const count = 1E6;

const arr = [];
for (let i = 0; i < count; i++) {
  arr[i] = 'a';
}

function join() {
  let start = Date.now();
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = 'a';
  }
  const result = arr.join('\n');
  console.log('join: ', Date.now() - start);
}

function strConcat() {
  let start = Date.now();
  let result = '';
  for (let i = 0; i < count; i++) {
    result += 'a' + (i < count - 1 ? '\n' : '');
  }
  //result = result.slice(0, -1);
  console.log('str: ', Date.now() - start);
}

join();
join();

strConcat();
strConcat();