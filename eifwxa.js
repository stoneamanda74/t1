外链999!wailian999！

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163lhvbwxzo.html

composer require twig/twig
来源：http://www.sxryk.cn/163sboensym.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163eoktqkus.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163fjfdrbiz.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163rtmspnxb.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163dlxshvrz.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163nswvpjhz.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163sbmvpink.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163uetkzkro.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163pnidltwb.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163fhhbvesn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163bsbsffea.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ewixcanm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163gojvvyyc.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163fcmyxoks.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163xrrrswde.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163egpnnkfc.html

a?.b?.c
来源：http://www.xuanzx.com/163gagnwjkf.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ynbqpxsq.html

a ?? b
来源：http://www.xuanzx.com/163lzgmxpws.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163zrbdbnlm.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163zrqiawkt.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163odtxflsh.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163bdvedryy.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163egtfujxa.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163xwlparxt.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163bzlqdizj.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oueevaot.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163hhnltptv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ephqdtms.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163qhowbiqv.html

structuredClone(obj)
来源：http://www.sxryk.cn/163kdpzgvkd.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163bqabrrdd.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163xfrwzxrd.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163cxuebkcv.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163hqnceokz.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163plzwhhtk.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163xvigacyk.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163waigjjka.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uncpblny.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163lstspydi.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oucbzemn.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163lelfwvui.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163jbvjabtq.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163prcmanke.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163emadkfmq.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163zxckjipz.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163uxncaong.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163nzmxtvyc.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163yranjbtu.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163tvsejpcr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163mrvzppuh.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163xosrskeo.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163kquotppn.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163yxgobpaq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163aggnzygn.html

[U105] JS：节流
来源：http://www.sxryk.cn/163fdahdanx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163kgvfzhuz.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163cgyxygmj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ohufvggp.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163onvgppqb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163exixslyb.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163rrqrhllb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dayszxie.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163wdtldkyq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xmldwlra.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163wepxpxzl.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163guooncwq.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163llvbobos.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163gsubdtmk.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163jovmqnhg.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163dacsorqe.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163wsfkrlnv.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ztsoxpmc.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163dljggxvm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pdcayeyg.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163fvgspycf.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163plwttcje.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163yhvxcllg.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163hlkwbsyt.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163uilogbgl.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163zcrmjxyh.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163kcelefcr.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ixpbasrr.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163alqnuaux.html

npx vite build
来源：http://www.xuanzx.com/163oiijaclg.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163skocuoqw.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163fuakibfz.html

================================================================================
来源：http://www.aibaodan.cn/163lcgmlkel.html

统计汇总
来源：http://www.aibaodan.cn/163zhdyfsde.html

================================================================================
来源：http://www.sxryk.cn/163dfstnrha.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ejtliobv.html

Python ......... 252
来源：http://www.xuanzx.com/163dexjxsif.html

PHP ............ 252
来源：http://www.aibaodan.cn/163rdbsuvwv.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163oiqbheza.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163qaxffrui.html

Java ........... 212
来源：http://www.sxryk.cn/163hovxdnle.html

Go ............. 212
来源：http://www.aibaodan.cn/163ojlxpdyg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163wyiwclak.html

C# ............. 212
来源：http://www.aibaodan.cn/163neilzfwz.html

C .............. 30
来源：http://www.xuanzx.com/163eyvqckat.html

C++ ............ 30
来源：http://www.xuanzx.com/163gsojygtn.html

SQL ............ 90
来源：http://www.aibaodan.cn/163cngaclva.html

Bash ........... 80
来源：http://www.aibaodan.cn/163hosdulul.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163dluwkjtb.html

Swift .......... 15
来源：http://www.sxryk.cn/163uuxaivzb.html

Lua ............ 10
来源：http://www.xuanzx.com/163xjcvoaqi.html

Perl ........... 10
来源：http://www.xuanzx.com/163cfgcjfrd.html

Scala .......... 10
来源：http://www.sxryk.cn/163dfgsrgqp.html

------------------------------------
来源：http://www.xuanzx.com/163bwynaoql.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163xvmwyjnh.html

按章节统计：
来源：http://www.sxryk.cn/163vbwrgyni.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tbfiobrp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163olzdjqhr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163oiurtspq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163brufqvwe.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163cwigenje.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163lqlythda.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pkdareua.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163nvcxhmpy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gupdbsio.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163acbgumvq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qbwstbkb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pmacutqk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dmjpfkrj.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pucrsyjd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163dmnynjoq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163etgfushf.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163wkjwddop.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163daouzmve.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163cephrbaq.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163npumomsh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163bbcdxokd.html

------------------------------------
来源：http://www.xuanzx.com/163wjopeqlm.html

合计                                  2106 条
来源：http://www.sxryk.cn/163tomqdcek.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163thghfguf.html

使用提醒
来源：http://www.aibaodan.cn/163kbiniezu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vcprcccb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163rawvyeyi.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163rruwyhbb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163gvgyrrdl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163azwlrxqf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163eiqvijrl.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163hcpswlou.html

================================================================================
来源：http://www.aibaodan.cn/163smmritox.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163wuhavlfk.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163hftrohlx.html

================================================================================
来源：http://www.aibaodan.cn/163ofdnadxp.html

【收录内容】
来源：http://www.sxryk.cn/163wumvwqic.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163flmumjru.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163vxnyqklb.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163yrpzuaxh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ptoqmqnp.html

【使用说明】
来源：http://www.sxryk.cn/163arxtxwbt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163pumohmoc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163kszihytf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163njhppgii.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163bqhwlcjw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163pfelpemg.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163uqqmwnzn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163xaejvzdg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163caabmrak.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163zcplbamx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ulyowxgb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163vlhnkqhw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163cukwvdsi.html

【文件统计】
来源：http://www.aibaodan.cn/163vrmyuarv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ifjlwxoc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163emsnerio.html

目  录
来源：http://www.sxryk.cn/163vfnrniml.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163joxlotbu.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163gmsqafhg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dvrjgeok.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ytfusobd.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163pwdfrvct.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163lbagjtdo.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vqjvcdea.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fiwyoiek.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163efdytppb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lqgnmpyo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163vytsezbm.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zgoncuhr.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zvsaqmnb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yfzwuzkf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163yuwrsddh.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163sohqtmzn.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xrornxme.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163glolzbkh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163amvahixa.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163sgzvyyli.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zckfwmjn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bncdjvax.html

================================================================================
来源：http://www.sxryk.cn/163jsejurpz.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163lkkmorim.html

================================================================================
来源：http://www.xuanzx.com/163qngkoxgg.html

[A01] Hello World
来源：http://www.sxryk.cn/163oyfrcbki.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ibjnrysz.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163tghpmnzk.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163sxatmgmv.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163aaksvynp.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163aubnzjeo.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163svugultb.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163zohmvvhy.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163rkrnpove.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163oybplosx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163yjouxvqn.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163vygjtqit.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163esusrsew.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163tojjkqbc.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163sjypydlf.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163bcszxapm.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163btlxdjip.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163utekfmap.html

[A03] 常量定义
来源：http://www.sxryk.cn/163kgwlsnih.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163dzgzuudi.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163uhplhfra.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163twykhtmj.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163oicrwiih.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163aqznlnuh.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163nswoftyk.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163itmmylcu.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163uxdxxchd.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163chbxiikl.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163iqeocbix.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163eqxcjlqu.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163jusbfkoj.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163qtjrzxit.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163lmjttplk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163lhsaqspt.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163fmlgcgjl.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163vdtfiwiw.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163kzigawhb.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163nebrbpsz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ozgocvbk.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163wfkeigac.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163yxumafwz.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163iskfqvwi.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163evhtnprc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lyznlxqc.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kqwfbcfe.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163iwyorrhi.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163sczhrvup.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163xsrkpqby.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163snxyweil.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163hdsxymxq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163wqfolwuz.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ecbvukii.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163jxqvzeim.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163jczjisvr.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163fdfrtmkh.html

Py:   str(42)
来源：http://www.xuanzx.com/163gsxhruce.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163fbysukll.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163edylslab.html

TS:   String(42)
来源：http://www.sxryk.cn/163vkohdwwc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163zekhegyj.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163vqaiqpuw.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163djhbffli.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163bvimgcuw.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163rgdypdfq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163tufekbjt.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163acateopx.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163icbzwros.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163qzmyhndy.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163uuzhisgh.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163stqihcsj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163rdnyaqfp.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163zcrcvmfh.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163jxcmuaxs.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163awlgoyll.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163thvitqfr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163mqantcdl.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163fidggfyc.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163viaothvj.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163kundzpji.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163kdgvqvac.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163rozpaeit.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163rsdwjvfr.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163tdslobbe.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163jjrhdilt.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tdrewthl.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163aptdcqco.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163fhvpnyak.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163kzdidlwz.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163opkgqddm.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163oydqmbkq.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163bfaawjgx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163bthgoxrs.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jrbprzkx.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163smsckurl.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mtxmifqc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163eeeffygu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ogiedbzw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163scqikeuj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wxoxnfii.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163fasqaxau.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163kzokwebp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163ruyuherl.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163mmvzmoyq.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163zqvkxgbl.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163nrqovnbu.html


<!-- 参考信息 -->