外链999!wailian999！

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163flahveec.html

composer require psr/container
来源：http://www.aibaodan.cn/163voxxkrbt.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163dcbjlvev.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163konkwsqf.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163kjpqoraj.html

composer require twig/twig
来源：http://www.sxryk.cn/163wfdorcrz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163cabpgtoe.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163znbqhcsc.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163ygnjiidb.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163yshzenxv.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163zykamnpq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163mnlhykzo.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163dmzzgnkc.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163afedbayr.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163sidahxiz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163sezqbdvy.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163hwlvgsel.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163kuleboze.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163iblujqfs.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163gpfjivwb.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163tsymmgcj.html

a?.b?.c
来源：http://www.sxryk.cn/163ypdpjvug.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163jlikozzi.html

a ?? b
来源：http://www.aibaodan.cn/163vqtnvlwb.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163zpopspac.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163hnoyixpt.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163wpqrglri.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163uqzsyjut.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163rykinfja.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163pukxgpbd.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163vvudropi.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nfxjovzp.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ietdiivs.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163onbyaqmx.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163mgkbvnlb.html

structuredClone(obj)
来源：http://www.xuanzx.com/163wuvrwyye.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163thggpxox.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163dbxqpupp.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163qsgfysuz.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163unttawob.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163atmuafje.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163dydndbfv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ijpqppxd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163beamdbau.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163yhfipwph.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163omfwohic.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163zatephby.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163qgxyospz.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163zxkurgyf.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163uqsnbtal.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163vkjkkkbm.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163jwnvxijj.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163boiysvxi.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163qoguoawq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163qhbywkds.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163pnxdveff.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163qoplzbnm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163xlqxnvsp.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163dtdsqlrb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163embgkbtd.html

[U105] JS：节流
来源：http://www.xuanzx.com/163whrrmvnt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163gasugpnq.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163kbxcnawp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163gxarssax.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163mksrriwh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ggywfimv.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163wrupeozu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163bdzztksb.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163rudmooae.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qjvztskz.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163bjfwsklo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ikpnshro.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163spocuxcv.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163iwlmnxrr.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163oscxivtq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163vyfmrwja.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xppfkskx.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sgxddynf.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163dvfxocpe.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163mkzkxovk.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163mekinkpt.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163rgxvahjk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163bqjxjaoy.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163wtnzzudc.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163vsexpymp.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tljxqthq.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163zzjrbtlw.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163rfvgxkvs.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163jfvvzyks.html

npx vite build
来源：http://www.sxryk.cn/163qvqlnkmt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mvmaluqn.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163udgnpeuo.html

================================================================================
来源：http://www.sxryk.cn/163wjmuyjsp.html

统计汇总
来源：http://www.sxryk.cn/163knparwnp.html

================================================================================
来源：http://www.aibaodan.cn/163yiojmesu.html

按语言统计（条）：
来源：http://www.sxryk.cn/163beadddjb.html

Python ......... 252
来源：http://www.aibaodan.cn/163fsjsasde.html

PHP ............ 252
来源：http://www.sxryk.cn/163jkxgwpca.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163tcygqozu.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163pemzmnfe.html

Java ........... 212
来源：http://www.aibaodan.cn/163qoganeab.html

Go ............. 212
来源：http://www.xuanzx.com/163zbqdwnmq.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163nrfxdvoe.html

C# ............. 212
来源：http://www.sxryk.cn/163eqkvygpz.html

C .............. 30
来源：http://www.aibaodan.cn/163gjgoksvs.html

C++ ............ 30
来源：http://www.xuanzx.com/163pisowxxx.html

SQL ............ 90
来源：http://www.sxryk.cn/163kepntabl.html

Bash ........... 80
来源：http://www.xuanzx.com/163roochefy.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163pskicfat.html

Swift .......... 15
来源：http://www.xuanzx.com/163godyzrhw.html

Lua ............ 10
来源：http://www.xuanzx.com/163gimmrplm.html

Perl ........... 10
来源：http://www.aibaodan.cn/163zrtqssbf.html

Scala .......... 10
来源：http://www.xuanzx.com/163zbdhznjr.html

------------------------------------
来源：http://www.xuanzx.com/163vwrbminm.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163zfpmbajz.html

按章节统计：
来源：http://www.aibaodan.cn/163sskoboxj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rkworvpr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wgcyqvet.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lrloikaq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163skuejaau.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163scubgfew.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cdnumipq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hosonqhw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163llwnzogv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163btcjhegr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163cogcljxx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163thujermg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163msaygqza.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nkgealtw.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163krzjmhbm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163laszpfuf.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gudxyokf.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163jpuqahpt.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163sinbbqvk.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163kefsybev.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163fupfgdjy.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163bbhanyte.html

------------------------------------
来源：http://www.aibaodan.cn/163ckfxcjjj.html

合计                                  2106 条
来源：http://www.sxryk.cn/163bnlnjvnr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kzcnyxck.html

使用提醒
来源：http://www.sxryk.cn/163jhejcdim.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ywwjjgnf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163cixkttyi.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kztgmrro.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163esmeouus.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163qnizzpim.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163yiuavlde.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163nwdsncpu.html

================================================================================
来源：http://www.xuanzx.com/163cjxcltqi.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163iektzbzn.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163sfoqijxr.html

================================================================================
来源：http://www.sxryk.cn/163kqxdkzbd.html

【收录内容】
来源：http://www.sxryk.cn/163xorrlzqc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163vegemjjw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163mdauqkhg.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163rzyfppou.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163nymdmqom.html

【使用说明】
来源：http://www.aibaodan.cn/163edufvjag.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163nankpaxg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163uujsgljz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ddcckdot.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163yxmqjvhr.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163anhtufbb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163dwtjuazj.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163fdfugklr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163fumglkfv.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163mkodxuak.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163olwqwdbf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163dpekbkxi.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163rgfzbimk.html

【文件统计】
来源：http://www.aibaodan.cn/163uufyjqlu.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163wllgqdll.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cbmxardk.html

目  录
来源：http://www.xuanzx.com/163acpbvyqn.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tyszrxuc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163fcbkrawa.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jdibecem.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163rostzgjx.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163wfsvknip.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163ozabhwrl.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163wdzdhgle.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ijmjohof.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163cjzvropm.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ftdwnryp.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163mycycmir.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hgxkosxq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163eefbmecf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163aposqmdg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163nmhsbbjn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ydaowaps.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tchwlsns.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163edfhrguq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163okdcqhvf.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163onrrwpes.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cisqcpik.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mjgfiwlu.html

================================================================================
来源：http://www.xuanzx.com/163wkjesstl.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163smgpmmmq.html

================================================================================
来源：http://www.sxryk.cn/163cpmqzhsx.html

[A01] Hello World
来源：http://www.aibaodan.cn/163yxaszutx.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163fwnxsiha.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ttrotcjg.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163pwmsqwlr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163caichusv.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ahblqhjv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163llnglagm.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163jungqtur.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ablppwil.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163osnutfww.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163fjkluudm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163gfwtxvih.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163mjhaljyy.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163ockchltx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163hpljuypd.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163ydondyee.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163dxtnzzly.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163lauxeigs.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163uyjsoezy.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163qlboeill.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163kzclyfxy.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163joxlmjac.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ojovsbnz.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163pdcdfxuj.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163uoirjusy.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163jbwqpujf.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163cypclhxf.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163ranttwbp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163bpftitgb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163kkvkttzi.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163nndjpvwr.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163rhiuizif.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163wntlnpdb.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163qufqzdbj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163actfhudp.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163nsvfmqot.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163izxgylxz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163equmqdmk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163aldsycxx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163tnhzweeu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163gespmzlw.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kfbnodik.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163eydwheuc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hduhwdtn.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tcbhslhv.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ytqleuyf.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163gjkfkjfv.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163mhlaoimi.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163uxwfufrs.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163nldqrpyl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163wtgnmmrr.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163gtdktbfl.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163wwrqqunf.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163imwvnnhc.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163ohmvqwex.html

Py:   str(42)
来源：http://www.sxryk.cn/163syxgszlt.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163pdnjppzw.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163syfsyreq.html

TS:   String(42)
来源：http://www.sxryk.cn/163rpxmjtfd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163cepqkoyn.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163pltqgxot.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163tnrvduek.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163muewscyk.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163sfxuqrng.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163byehztza.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ypijfvse.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ylpwyytb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163xedzanhb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163uesjyomd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163sfgwpzwu.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163fyiiebpt.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163bwrndvhg.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163xekqoion.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163djneecir.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163leposbrs.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163tkcaysqm.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163rniswitx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163zbzqrofv.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163uacqnytb.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163fcarhhqd.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ucbtixtp.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163atiakzho.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163ayspcebz.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163kxyxwhwm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163vxuwmtwm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163awkjqzge.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163csxsvtkm.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163tfrmoyox.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163cavbnlsy.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163sgkuksgi.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163vwqwliiv.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163sflqjgpe.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kqkzdqxb.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163iddwfnrc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wpmtbmyq.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163scgytctb.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163zrbyzwpg.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uoegzqgq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eagypsdw.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163cxfmnrfc.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163wpedejxb.html


<!-- 参考信息 -->