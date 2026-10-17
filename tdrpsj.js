外链999!wailian999！

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163rmfijmjy.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163bnrvevfj.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163nxhfibqk.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163xhqzuqog.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163sdncnyes.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163odvhmshp.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163cynbtbfz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163meudwvea.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163pfpoqyvq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163sjtgnrmg.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163yfwfvgyu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163tiejnpwx.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163tjdljkxe.html

a?.b?.c
来源：http://www.sxryk.cn/163yvopjvyh.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163fetgsifh.html

a ?? b
来源：http://www.sxryk.cn/163xdsevutx.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163mzpxphyu.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ihvftjio.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zbdppgmb.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163fxsljkfo.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163emapdjom.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ncylekvb.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163tifgfmeo.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qdzydyfs.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163aqpopftx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163mbngwaqs.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163clhfntmc.html

structuredClone(obj)
来源：http://www.xuanzx.com/163tobirxie.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163rsqkclrf.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ufqjlwor.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163qtmvdmev.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163gohevnfh.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163gykzwxjs.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163eipqhqde.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163rormccsk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163yhsebupt.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163mrnfdusi.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xjbkjnyy.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qbpiewed.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163bzdmkvdn.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163fvucqguj.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163rpwesjsn.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163xileycrg.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163byrkygeh.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163xgpkobvn.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163bowcxlqf.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ekhaxqxd.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163zkkflrhv.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163iqxmzqsi.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163klddbuyj.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163btzqmndz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mtixyvhg.html

[U105] JS：节流
来源：http://www.sxryk.cn/163tuvmxvwc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163qvxsdhhl.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163acyxhfss.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163jfnwxlmo.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163dbjbjkof.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163rkvbzidk.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163bvaugqea.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163woldlpwy.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ntvuxlxx.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163edqgsplc.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qndyqqmn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ujpwkwwc.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163fhtgatsy.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163kvgfxgzf.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163hqnyhzaj.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uqnrctjj.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163igjzqbrc.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kwmzjxng.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163crftviqb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163anbqqego.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163exxuwyzt.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zpimhgtd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163cmdwwjpy.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163yfzreptd.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163wswmosie.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163kmkosjtq.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163zyffyktl.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163dtxghpow.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163oboxrgpd.html

npx vite build
来源：http://www.aibaodan.cn/163cpmbcafb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163jxbursos.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163vqqfpndp.html

================================================================================
来源：http://www.xuanzx.com/163dhicrfai.html

统计汇总
来源：http://www.aibaodan.cn/163kmkcddpd.html

================================================================================
来源：http://www.xuanzx.com/163lfbbjztv.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ntrqtnfs.html

Python ......... 252
来源：http://www.sxryk.cn/163gzwqytom.html

PHP ............ 252
来源：http://www.sxryk.cn/163jxoywbuf.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163zaiazqwx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163pfqynoqh.html

Java ........... 212
来源：http://www.xuanzx.com/163bxhugppa.html

Go ............. 212
来源：http://www.xuanzx.com/163kstycwob.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ptyuqccr.html

C# ............. 212
来源：http://www.xuanzx.com/163dzgpmmzq.html

C .............. 30
来源：http://www.xuanzx.com/163mgagrdmb.html

C++ ............ 30
来源：http://www.sxryk.cn/163ivorssyr.html

SQL ............ 90
来源：http://www.xuanzx.com/163ytlynbpo.html

Bash ........... 80
来源：http://www.xuanzx.com/163ygckvinj.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163zcjxxniq.html

Swift .......... 15
来源：http://www.xuanzx.com/163jhusfrrv.html

Lua ............ 10
来源：http://www.xuanzx.com/163imdbplgg.html

Perl ........... 10
来源：http://www.aibaodan.cn/163fwgspoij.html

Scala .......... 10
来源：http://www.xuanzx.com/163lmrevclq.html

------------------------------------
来源：http://www.xuanzx.com/163qgtilhfr.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163kuimexmc.html

按章节统计：
来源：http://www.xuanzx.com/163neuyuybf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163bwmwdubs.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163foonssvx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163irbliean.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163lmihvpiz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163tayerkro.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163odrnibdf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163cmyiztdo.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163orkzolhs.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ifvquzjf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pyfbiveh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xjvyuyuo.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yihhczvp.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xgehvqiy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163uorgiwpl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163jgygujyj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wpcfzlgo.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163oqejznpa.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163hozhmxns.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ybkqurja.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163tcflrbox.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163dzltjtei.html

------------------------------------
来源：http://www.xuanzx.com/163beqzfwor.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163deryxgun.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zjjtujuo.html

使用提醒
来源：http://www.xuanzx.com/163zapwcthq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vileybbg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163drgaexua.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163kdbebbbs.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ezdbbpds.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163kgvotmwd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163hpdohbyr.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163siubrgbc.html

================================================================================
来源：http://www.xuanzx.com/163ysllmhra.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163elutntbd.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163bqzzqshp.html

================================================================================
来源：http://www.aibaodan.cn/163exsldlci.html

【收录内容】
来源：http://www.aibaodan.cn/163ourugbab.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163cmrwvspx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163fjibulag.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163yvbpkilu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163sehuuxtb.html

【使用说明】
来源：http://www.aibaodan.cn/163pwtocixj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ftoykbwb.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163cgchozag.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163dtoxdrxo.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163awkipvab.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163ztadnnxd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163eoejtife.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163fcjwszop.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163fmgraizk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163srilggvk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163qsgtjsbs.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163iagiphjt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163qfwtgfft.html

【文件统计】
来源：http://www.aibaodan.cn/163rjjxjhlq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163durtvywg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163helqjayp.html

目  录
来源：http://www.xuanzx.com/163kecyurfx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xlyiqqsl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163vqjyjnal.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163uaflyrwi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wevyznsl.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163jmfqrtfv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163byuavocj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163tqtamelp.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163shdjjare.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163cmbtnlkq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hjyoemvo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163eonuroqi.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ffagsqwb.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163mpakfpsz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xoxqghvh.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ixkchxst.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163anjpsjxe.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163szhgzjpe.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jmidabev.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163wsyoevev.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163wrlxtcqt.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mhxkcgpq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163cnlamtuw.html

================================================================================
来源：http://www.sxryk.cn/163pmtjltng.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163qspuokmm.html

================================================================================
来源：http://www.aibaodan.cn/163odjdvkad.html

[A01] Hello World
来源：http://www.sxryk.cn/163jaetstlj.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163chgjkhmu.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163tumwurtz.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163rwuazxjw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163cdkfynhj.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163cbaydjks.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ijltwgwg.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163gcnhsong.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163lxjmjdno.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163etzwbylv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163floujxhj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163kdboqzdj.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163taqtvxrs.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163diujalpg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163yzbdcupy.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163cifptipn.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163jysyzhvn.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ynnifpxf.html

[A03] 常量定义
来源：http://www.xuanzx.com/163oxnebbru.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163voywriel.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163dwuqkprn.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163afprhnqr.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163rygttqjy.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163habijywq.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ixexvmbq.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ofcuzmgv.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163iqakncwc.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163zxbihnyn.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163xezoyfju.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163wnhmmyfb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163kkoqldko.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163obkupufa.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163dddlnnwk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163mryleucd.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163kptezmkr.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163nsvzspmt.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ovirtjod.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163umqirbib.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ebkmgpmj.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163wichcqzc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163kjxmismt.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gbnnlaag.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mduvwluz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163tgmzsjrf.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163utauydzm.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163fxcltupy.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ogehjsjf.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163xckuuhco.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163bvkrrwgr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ldtkkfqt.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163tileifvz.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163tvygbzvp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163lmtmsipj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ijazppyy.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163dezegowq.html

Py:   str(42)
来源：http://www.sxryk.cn/163rnndhgxu.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163ynxkecxb.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163xrofsala.html

TS:   String(42)
来源：http://www.xuanzx.com/163czmldsff.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163fdhgclic.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163wsifbbrp.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163yhhhtfmu.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163xfgzzjoh.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163xtvsflhu.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163hyrninbu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163gysygccv.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163iwjuqrbi.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163lacbwjul.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163emcfcgrv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163dunwhxtc.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163lbgtdwcw.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ielggnqk.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ytndtrsc.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163epjjgzjl.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163tdisljkj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163mwjyagrn.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163buqssyky.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163hkjyjigi.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163qdlrlszk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163nhbceavb.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163oesutyti.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163jaykaiky.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163ddropeng.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163yvgndewh.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163diciglfy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ocuceupm.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163ehcyeiae.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163tttngjlj.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163dlgxwbrh.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163ophlbqhs.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jgsvipkn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163fzmynamn.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wijfiito.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fpixvpvj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mbqrjpgh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dzivmdou.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163pdvrrxwn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yszvatif.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163usnsqxme.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163qiqkoufd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163tvghlryw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163dhznwwxp.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163vnmpwcab.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163hhfbfbmf.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163szqajbad.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163nkjjhsrh.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163hwmimued.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163kxcavoja.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163owpedbsn.html


<!-- 参考信息 -->