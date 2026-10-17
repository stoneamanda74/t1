外链999!wailian999！

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163drekhqyv.html

composer require twig/twig
来源：http://www.xuanzx.com/163oqwephch.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163gcbrivvp.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163hxtygxja.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163aglynrql.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163wqxcxowa.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163bizsnxxz.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163bctvsfoe.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163flooytgj.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163vdzrmbdm.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163nzubzsrl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163tiblnyww.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163kiipiccv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163qwgqzlkc.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163cbvwgyuf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163weokdkys.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zcihxiiz.html

a?.b?.c
来源：http://www.xuanzx.com/163ydxmdatk.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163oxccigyd.html

a ?? b
来源：http://www.sxryk.cn/163paiayfbz.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163cmpfddev.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163dfcdzwva.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163pdtwgoqd.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163albnyhtw.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163fhhvmqfd.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163yogfydac.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163bgarkdya.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cknttzuj.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163dssenbvu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163mgowqusq.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163qfqpiozd.html

structuredClone(obj)
来源：http://www.xuanzx.com/163lmshqegi.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163zvsmtewx.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163cwvioaus.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163nxfeqgku.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163idfcyecw.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163rwojijsu.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163yncfccsf.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163xupyquvf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ifouqurr.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163qnpynuam.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kuqwfgll.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163orfztuzk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163zrmwlecu.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163cbxatjzq.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163tzdxhmma.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ilfcmxgu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163jzkcthsh.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163lvnmaooy.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ijlpimjv.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163uhyisilt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qcxdjodw.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163jyahrjsy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163agxwsbka.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163vdqixulu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mpbjcmzi.html

[U105] JS：节流
来源：http://www.xuanzx.com/163haaivkwl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163scjhcpus.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163hiohbbfv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163gjxihtej.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163wtdgujtw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163geqdzcxo.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163papnkhhh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ejoufvgi.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163kglpyecl.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xnylbrhi.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ztyfpxag.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163nrxjsaqb.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163sspsmfsx.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163wphvxmwc.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163apbydzci.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163bjnnpddw.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163qpngvvvt.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ctxjciio.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163tgyiptgf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163aubxpoua.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163tvedbvho.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163jxqiagnz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163uoawqbfd.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163testwysy.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163wbhjsqsm.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163hntramxb.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163qwqchqat.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163phzfmtgz.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163hopvludx.html

npx vite build
来源：http://www.aibaodan.cn/163wgejpqkd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163rmexxtxn.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163vpccqjdy.html

================================================================================
来源：http://www.aibaodan.cn/163hlllxshq.html

统计汇总
来源：http://www.aibaodan.cn/163ldgllybe.html

================================================================================
来源：http://www.aibaodan.cn/163dygfrsxh.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nmpjqwtj.html

Python ......... 252
来源：http://www.aibaodan.cn/163nrjdvivl.html

PHP ............ 252
来源：http://www.aibaodan.cn/163cnegtydj.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163axupdfyd.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163fetkealu.html

Java ........... 212
来源：http://www.xuanzx.com/163jekthwif.html

Go ............. 212
来源：http://www.sxryk.cn/163hbuemkce.html

Ruby ........... 212
来源：http://www.sxryk.cn/163mhhyfnic.html

C# ............. 212
来源：http://www.sxryk.cn/163cwmgvvvw.html

C .............. 30
来源：http://www.sxryk.cn/163kudattye.html

C++ ............ 30
来源：http://www.sxryk.cn/163mrccudtx.html

SQL ............ 90
来源：http://www.xuanzx.com/163kherofeq.html

Bash ........... 80
来源：http://www.xuanzx.com/163qlotbzph.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163yapexgvg.html

Swift .......... 15
来源：http://www.aibaodan.cn/163cgqjqopo.html

Lua ............ 10
来源：http://www.sxryk.cn/163pasbqxun.html

Perl ........... 10
来源：http://www.sxryk.cn/163yngizysn.html

Scala .......... 10
来源：http://www.aibaodan.cn/163kfxjuzmw.html

------------------------------------
来源：http://www.sxryk.cn/163gshjechl.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163rkwpvnzj.html

按章节统计：
来源：http://www.xuanzx.com/163uukcyjwv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163umoftyen.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qbzbcjzz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zxepmjsw.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163yqbffqun.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163detwsalv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vwcjulfo.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xmaruxem.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163efjvsnnb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vbjczfpz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hpltdmbx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163agghkwmt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xybjyiko.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pbqoyplu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163lcstxoep.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163nrilwlwk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qvpdjyso.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163yqegcxwd.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163wkexxsbv.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163jdxijhon.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163kknmiggm.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163nkdljbzk.html

------------------------------------
来源：http://www.sxryk.cn/163xjkxjeqk.html

合计                                  2106 条
来源：http://www.xuanzx.com/163mafltmyv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163zbmybhvm.html

使用提醒
来源：http://www.sxryk.cn/163avwoasee.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163yuerhfsc.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163gnrlwvvg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163judllzvb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163zkarsrrq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163usosxcgh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163yxnuynyn.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163oknidxud.html

================================================================================
来源：http://www.aibaodan.cn/163wnfqqlhc.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163mvjwxejs.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163uarwllhy.html

================================================================================
来源：http://www.aibaodan.cn/163coyphiiu.html

【收录内容】
来源：http://www.sxryk.cn/163xjxnjdnj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163skhoimsz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163fufqmnyt.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163bcrbjeum.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163mpgqunxs.html

【使用说明】
来源：http://www.aibaodan.cn/163nurdtftl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163rzodxckg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163alrjpnix.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163xeolzaqw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163mxxuwijm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163xmaoajtg.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163iqmxurqe.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163cylfpjem.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163brrvxipa.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163nozoxrdh.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163cxarrrct.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163sqhymzjw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163qxsmazqj.html

【文件统计】
来源：http://www.xuanzx.com/163kanieohn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ahjfkhhg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kghrmrci.html

目  录
来源：http://www.aibaodan.cn/163osxmupwl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163eastsapc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163sxzqwbjc.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163uieoixwp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rfbamcip.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163efmwiwrn.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163rrbdvuso.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163rruvwcaq.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ywhlmiqo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163lrthvfcc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163srmhqsks.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163aqtuvhpp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ziwhreaw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163miywwibs.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wwurtzii.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163qvjvvlkb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163qrpednqh.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yemnuxpe.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163mpuyexyx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163vdwgtzum.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163gdjyzlco.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163mahtwhgk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qnylowjf.html

================================================================================
来源：http://www.xuanzx.com/163mucmvorq.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163dgrlnoxh.html

================================================================================
来源：http://www.aibaodan.cn/163bkicbfts.html

[A01] Hello World
来源：http://www.sxryk.cn/163crtjhstp.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163vknqqlro.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163bajokaze.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163euubacpj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163uaqlzhdt.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163kigzobmi.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163wizhkglf.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163wtqbdgfo.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163yxdyyort.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163mxswrzjh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163ewhcfzrf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163iaqqymkb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163npzfbbgh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ofjuisxy.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163mzaliyhl.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163wrcosujz.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163tyemenzx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163rasintnq.html

[A03] 常量定义
来源：http://www.xuanzx.com/163loidkual.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163gyzdxuur.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163zhtwhwjt.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163iokaigry.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ushtpczi.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163nupqdknt.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163gfdcegsw.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163swtckkqv.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163albnfllt.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163dfqtiwws.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163rpyujshn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163sdsghebw.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163xalcevfk.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ulleihug.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163djbmioiu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163nyzmwagj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163nwxfmlxl.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163oxtxnqlk.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163zhpvdwam.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163pskfppex.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163hgmpvwdg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163qtbkxfvu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163phoqlnvx.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163edmwvgiq.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163qpbtulbl.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yqljipvx.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vtrlgnih.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163seeztqmq.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163yqhzpcfg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163xtxxjhas.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163vhhjywlo.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163atigbpny.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163lnhqlvwm.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163jfehwvut.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163mgqsxnsw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163vilwhcjs.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163tejhoqll.html

Py:   str(42)
来源：http://www.sxryk.cn/163iydflysf.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163gparexsb.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163ubrfpiol.html

TS:   String(42)
来源：http://www.sxryk.cn/163nnenflaa.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163xqmhdmqk.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163zsscqdki.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163fbqpsxjo.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163gbnhdkvw.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163mukjmfzw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163hspoxqcm.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163jwiymjqw.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163tvncrpoo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163vhuasduy.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163vmarbxug.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163qeqktxfa.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163mwqsmpuy.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163pmjkjdyi.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163eqhnaoxu.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163aswfibts.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163eboaorau.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163vpnpthal.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163owhbhdhx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163gaduaueq.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163gqvnoszc.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163focfmrfz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163tpxzsvli.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163mfwutsvr.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163wuyxtxon.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163xffdpgsf.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163lzmllbvg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163dvkqyofv.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163slwssgle.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163falwqhrz.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163cgeulxbx.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ihkdbpld.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163noljqkxd.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163mesqzxof.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zmyjadsj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zndwmhrw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xldwitdj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163woretvok.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163dcrzcahx.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vlenjwwf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cnvzvlqy.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163eonimfgg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163nynrxwrj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163zrxjtsoh.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163wpfgadvv.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163vqynqdab.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163swlzqxlj.html


<!-- 参考信息 -->