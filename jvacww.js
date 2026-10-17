外链999!wailian999！

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163firhgsik.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163uwtiawgy.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163atalugul.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163bjcurkpv.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163kcicjmnp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163rgfipvtk.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163jftmcmwr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163pgupqthi.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ashxvgta.html

a?.b?.c
来源：http://www.sxryk.cn/163fmtzefjg.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163qxjmahhn.html

a ?? b
来源：http://www.xuanzx.com/163tnzceyby.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163jpuukcns.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163yyizwhoz.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163jhuqlvox.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163qrmvjgis.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163fptruwzo.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163bnvvasoe.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163mygqwtra.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kxyadxcv.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163vitrogft.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163kmjshxey.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163qlenuehj.html

structuredClone(obj)
来源：http://www.xuanzx.com/163eiewlknl.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163dippldfh.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163vuqqrjrp.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163bnibjpfy.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163dwemxxpy.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ehzfyycd.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163fpvjtoba.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163qixagoys.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163enfpinsx.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163vislvbue.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lxsywwga.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163eposrnty.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163yqqelcmx.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163xdbaaprm.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163cftcygiq.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ugqtfzmw.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163uusfawed.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163pbabwqfq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163kzjlfaqb.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ipyhyenz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163vkghezwh.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163anvvrfun.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163dilismpd.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ggvwusko.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qhwgklpf.html

[U105] JS：节流
来源：http://www.xuanzx.com/163abxjpzsd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163rjresjgm.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163tzyendrn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163giddnhqy.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163asjeovbc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163jtrcklot.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163lqcvjupe.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163qgmekbjr.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163nwcukieg.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163krtrineh.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163qnpmtogi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163qvwbryjm.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163efgfdcag.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163cdaptegw.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163upqcvqlk.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163mbgkirhf.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163mrbjykfa.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mpsonoyu.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163njdrjsvw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nsyavjqs.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163twrxmvpp.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163mxqnbbxo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163hyinrwxd.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163uwuwbepk.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jocybenf.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163scgksdrf.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163hjpzvvmg.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163yogkyrik.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zecbloit.html

npx vite build
来源：http://www.xuanzx.com/163jfxthvio.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163wlauqffp.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163oljoqiac.html

================================================================================
来源：http://www.sxryk.cn/163axuueahy.html

统计汇总
来源：http://www.aibaodan.cn/163jspcgvqe.html

================================================================================
来源：http://www.aibaodan.cn/163znohfdxo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ydthljkt.html

Python ......... 252
来源：http://www.aibaodan.cn/163cngfovzh.html

PHP ............ 252
来源：http://www.sxryk.cn/163uskvxhmi.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163avtotdgv.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163qoqmjivt.html

Java ........... 212
来源：http://www.aibaodan.cn/163yfovzcjt.html

Go ............. 212
来源：http://www.xuanzx.com/163bbjneivo.html

Ruby ........... 212
来源：http://www.sxryk.cn/163smdyshbu.html

C# ............. 212
来源：http://www.sxryk.cn/163kazlbowx.html

C .............. 30
来源：http://www.xuanzx.com/163qtmykdbw.html

C++ ............ 30
来源：http://www.sxryk.cn/163tsxeajqr.html

SQL ............ 90
来源：http://www.sxryk.cn/163ufnnhbbc.html

Bash ........... 80
来源：http://www.xuanzx.com/163ocqpbtqw.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163vdwdpljt.html

Swift .......... 15
来源：http://www.sxryk.cn/163zddgliks.html

Lua ............ 10
来源：http://www.sxryk.cn/163zrdhdyke.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ztncwwnr.html

Scala .......... 10
来源：http://www.xuanzx.com/163mbrmuiaz.html

------------------------------------
来源：http://www.sxryk.cn/163tojoqnka.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163bqgybrgq.html

按章节统计：
来源：http://www.sxryk.cn/163aspjdual.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ffbhudwn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ktspzmsr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163wgkrosqx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ysablxlx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163inchpogj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163oszwqzeq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163iosajasj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163yrqwazjm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yysdtmfr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163frekfsrs.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rnongokm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163izhcooms.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lhfcuzym.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ljjgwglw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163esvkedae.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rwqgxyeb.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ncnribsk.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163jsjwzxbr.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163yypxpexj.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163wypkwlrk.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163xnmqtrhc.html

------------------------------------
来源：http://www.aibaodan.cn/163zzcnfdym.html

合计                                  2106 条
来源：http://www.xuanzx.com/163yhvhfbbw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163klpnqrgs.html

使用提醒
来源：http://www.sxryk.cn/163gajmukqr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lidcbmjh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163acgllsli.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ztpyxyvv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ddigrheg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163zuvotxkw.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163kzowqzhs.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163zpusxbfo.html

================================================================================
来源：http://www.xuanzx.com/163igfmqzqs.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163tganqqkd.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163kcpmpztl.html

================================================================================
来源：http://www.xuanzx.com/163yvrorjaq.html

【收录内容】
来源：http://www.aibaodan.cn/163owoighei.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163llbzshgl.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163mywatnsv.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163yparavmb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163fgevgkzy.html

【使用说明】
来源：http://www.aibaodan.cn/163mocfgsfl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163iiltmuij.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163dawpfamc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163qntgdpgw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163edcyduye.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163jcjuygpo.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163keutqvmn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163radodcdb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163gycdoipq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ojwnpzqx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163cfdxkiqs.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163lnekrasj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163baamahgp.html

【文件统计】
来源：http://www.xuanzx.com/163mhdgutuc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163zuwwwdcl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vutjoray.html

目  录
来源：http://www.sxryk.cn/163fsvdfeqe.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pswfcfgf.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163smhbfdap.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xrulcwel.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163hrxyarvf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163dtygvxyp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163yycipvyv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163gmxtggir.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fliwzzmw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163hysrkvng.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kaenyfja.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163gvhuuwvh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ucrnrmxz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zsxzycur.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zrfzyadh.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163yiivrxdy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ufrexaln.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163thdaajcc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163sqakycfj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ctvdlvjv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163xxyzghge.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vfhhnwlo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163gpvtpjck.html

================================================================================
来源：http://www.xuanzx.com/163reurnuel.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163stkhbivl.html

================================================================================
来源：http://www.xuanzx.com/163nthkcgyk.html

[A01] Hello World
来源：http://www.xuanzx.com/163dlkekunj.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ecozqtkm.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163atdrjmnh.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163hbypiaau.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163yuvmstng.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163ufzrkntv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163nebfbcmh.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163grnxnhfd.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ghpfrreu.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163nnhhseab.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163fldulmix.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163biphqzpi.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163rteamwtm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163fuktqbqm.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163grevvnfu.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163zvoapljb.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163swbdovvs.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163aowjyiun.html

[A03] 常量定义
来源：http://www.xuanzx.com/163kqrkdgxe.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163vosfnwhv.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163zisfwzot.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163vbxxjstz.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ppaxoprj.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163cpdkihdu.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163lvypxkay.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163uvxgevkg.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163snowkfwz.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163uqxjbvnz.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163sonprzvh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163uonrulsh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163psakmzjd.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163hhiykdun.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163pykiyoyu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163cmmjtqwe.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163grlanczf.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ianiklqm.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ttwnvmks.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163nipfmmwk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163xuylznka.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163etpcgvtc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163dxpxndvv.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ehabhazp.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163qakczusv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vqqvgwez.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163heoyrrky.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163yzfxbnui.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163bjulsiyc.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163axilvvzy.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163kiugtiuw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163prxpdbmg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163cykeekaz.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163vvuzqgct.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163urecjqsp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163dfwliqev.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163loyvngyf.html

Py:   str(42)
来源：http://www.sxryk.cn/163uhejwgyo.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163gbbgbwxp.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163lsiakmxc.html

TS:   String(42)
来源：http://www.xuanzx.com/163bpaknkqk.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163efgztfox.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163xeyshzxc.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163mqicupul.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163oatthuhf.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163velhlhtb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163qgofrwjo.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163htgthmei.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163nsyzwfba.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163wvkusbmb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ekdaimjl.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163nscbyjux.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163rzpvbuas.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163zxroddxi.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163raphqgob.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163lsncrpxd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ihrjvnca.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163rbvunhyp.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163gvyqcihb.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163dizqkprj.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163dfxupszp.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163uynfaxzh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163rfsabslp.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163fhjmazkk.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163scgscgwt.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163lpknoqej.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163dnyjzbnk.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163mdjrwyer.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163gvmeqauw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163jlhybbtf.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163bfijgghe.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163bnbbmomi.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163korlffgn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163dlfblbzc.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163juihsqma.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163espjfeaw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163brsrmvkt.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163flohpeeg.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163lwqzayxy.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xdolfjbv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ypbmutfy.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163imppovfb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163tftzncwd.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163lvlmeown.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163swrolqqt.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163dtypuarh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ypmkvkhg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163kiidqqrk.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163rocrzmqm.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163gjmfkhvu.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163pnsxorlb.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vwddsfew.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163uxuhjurd.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dxflltcv.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ufoikbdh.html


<!-- 参考信息 -->