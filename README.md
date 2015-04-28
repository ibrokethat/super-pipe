# Super Pipe

  Pipelines that are async/sync agnostic


## Install

  ```
  npm install @ibrokethat/super-pipe

  ```


## Usage

  ```
  import pipe from '@ibrokethat/super-pipe';

  let pipeline = pipe([
    (d) => d * 2,
    (d) => new Promise((resolver) => {
      setTimeout(() => resolver(d * 2), 100);
    }),
    (d) => d * 2,
    (d) => new Promise((resolver) => {
      setTimeout(() => resolver(d * 2), 100);
    })

  ]);

  let v = pipeline(1);

  console.log(v); // -> 16

  ```

## Test

  ```
  git clone git@github.com/ibrokethat/super-pipe
  cd super-pipe
  npm i
  npm test
  ```


## License

(The MIT License)

Copyright (c) 2015 Simon Jefford <si@ibrokethat.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the 'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

