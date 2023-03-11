
import resolve from 'rollup-plugin-node-resolve'; // 依赖引用插件
import commonjs from 'rollup-plugin-commonjs'; // cjs => esm
import json from 'rollup-plugin-json'; // 支持在源码中直接引入json文件
import babel from "rollup-plugin-babel"; // babel 插件
import { uglify } from 'rollup-plugin-uglify';
import { name, version, author } from './package.json'

const paths = {
  input: {
      root:  'src/index.js',
  },
  output: {
      root:  'dist/',
  },
};
const fileName = `view-win.js`

const pkgName = 'view-win'
const banner =
'/*!\n' +
` * ${name} v${version}\n` +
` * (c) 2014-${new Date().getFullYear()} ${author}\n` +
' * Released under the MIT License.\n' +
' */'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `dist/${pkgName}.umd.js`,
      format: 'umd',
      name: pkgName,
      banner
    },
    {
      file: `dist/${pkgName}.umd.min.js`,
      format: 'umd',
      name: pkgName,
      banner,
      plugins: [uglify()]
    },
    {
      file: `dist/${pkgName}.cjs.js`,
      format: 'cjs',
      name: pkgName,
      banner
    },
    {
      file: `dist/${pkgName}.esm.js`,
      format: 'es',
      banner
    }

  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      include: '**/*.js'
    }),
    json(),
    resolve(),
    commonjs(),
    uglify(),
  ],
  ignore: [
    "node_modules/**"
  ]
  
}