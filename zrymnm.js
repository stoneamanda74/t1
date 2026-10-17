外链999!wailian999！

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163ubbmuswc.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163nagojzxl.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163evzitere.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163wiozojkx.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wzljvioa.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163avroxpxl.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163cmmufxas.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163aefdwizu.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163bskodgdu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163gnzizhrf.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163wipvtixt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163nsvcsimh.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163dhweuwwo.html

a?.b?.c
来源：http://www.sxryk.cn/163iesuxyew.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163naktoodp.html

a ?? b
来源：http://www.xuanzx.com/163qzgsnyzj.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163tdgssblh.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163vbcxdogu.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163rjvxpiwb.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163xonqyplo.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163zhnlnebi.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163dwctvmeu.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163wcrrdhpc.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gkvhdknp.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163slzshvlm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163caqjpnpa.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163wezbzfyl.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163aduslqhb.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163rxqezymr.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163neizqjej.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ulqttidr.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163mkpnfety.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163rugnnurz.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163najibbxz.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163nulwjgio.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pkkkoxns.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163husflsvw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uffnvbdo.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163kgpfxmdx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163hmtfofft.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163dtinyfbb.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163uhnmvskh.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163zekcvebz.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163zvsiragd.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163fzdvlvnh.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163zvwjtqgd.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163lkuhfnyb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163vspvqdlz.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163weujtryy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163owrditmc.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163jhbszcab.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wsjyiriy.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ituhkeyh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163sqojrbda.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163uvlrkcfm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163txuctizg.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163kberdpay.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163eyugunjq.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163aufljxdq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163xlixbcny.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163moemqtwh.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163cjlqpods.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163jgnlhnfe.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163gsaqnbbm.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ndnhdviu.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ymybjeab.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163tvdctqbb.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xicqbspy.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ppxdrkus.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163plbjocgk.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163zfwgkske.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jyalimzr.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163uxhitbjb.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163xuqdawze.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163qiubydto.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163uwdsvxdz.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163wkiooldn.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163qhkoqgcw.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163nhrqosbg.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163uplbwwes.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163bppljiai.html

npx vite build
来源：http://www.aibaodan.cn/163syjgjbit.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163efyvqpuv.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ovunmhxj.html

================================================================================
来源：http://www.aibaodan.cn/163nxscoydb.html

统计汇总
来源：http://www.sxryk.cn/163jsqskatv.html

================================================================================
来源：http://www.aibaodan.cn/163tnguufap.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nncrtuxe.html

Python ......... 252
来源：http://www.sxryk.cn/163qfuohyvi.html

PHP ............ 252
来源：http://www.aibaodan.cn/163fzpwjuyt.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163mwhumdpy.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nlqmkptr.html

Java ........... 212
来源：http://www.aibaodan.cn/163lrbqysad.html

Go ............. 212
来源：http://www.aibaodan.cn/163gfdezqqk.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163gifnkzof.html

C# ............. 212
来源：http://www.sxryk.cn/163gpaoxnfj.html

C .............. 30
来源：http://www.xuanzx.com/163pcpfpyxj.html

C++ ............ 30
来源：http://www.aibaodan.cn/163tuttfozx.html

SQL ............ 90
来源：http://www.xuanzx.com/163ejaeqblo.html

Bash ........... 80
来源：http://www.aibaodan.cn/163duzptnwn.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ydzrunxa.html

Swift .......... 15
来源：http://www.sxryk.cn/163knjxzdfn.html

Lua ............ 10
来源：http://www.aibaodan.cn/163dzrzweep.html

Perl ........... 10
来源：http://www.xuanzx.com/163izdqmmkj.html

Scala .......... 10
来源：http://www.sxryk.cn/163msuatrpi.html

------------------------------------
来源：http://www.xuanzx.com/163xwlfeolt.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ojjxjsny.html

按章节统计：
来源：http://www.sxryk.cn/163hhnxqzlu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163yzglfvod.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cnaovfsz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163dwdgsywv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163radownjn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163vpfuwpcv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163teuxxnfz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ikfeukwb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lhfgnpcn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163awyvkvlq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163fnywotlo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163avgifigm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dmcdjkln.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ravpplhq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vkptceao.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163yxkisiea.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yqhkyeqc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ugiyouum.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ctakrgwq.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163lqzafrfv.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163irptbarb.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163tdbuevkc.html

------------------------------------
来源：http://www.sxryk.cn/163aajnealt.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163bwzmfcyk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mfhyolto.html

使用提醒
来源：http://www.xuanzx.com/163uvadbpzg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pnnhxwgl.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163husfrnby.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163maielkrn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163lpdruwrn.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163wcedbdiz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163yamjctae.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163alynqhbs.html

================================================================================
来源：http://www.sxryk.cn/163nfnqpyep.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163tczyxngs.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163renunnme.html

================================================================================
来源：http://www.sxryk.cn/163wezvzweb.html

【收录内容】
来源：http://www.sxryk.cn/163xrpwtckx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163wvaqpiui.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163oyttczdj.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163vzyrtayn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163lcftibdi.html

【使用说明】
来源：http://www.aibaodan.cn/163mwatrvpx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163eeseripk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163sgfrdvmw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163mkbuacni.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163cflrhbtb.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163onraadxp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163gwkwgjva.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163axtwwlva.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163bongjxsx.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163uftjjltl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163palndoie.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ccbazxsy.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163xzxpwdkb.html

【文件统计】
来源：http://www.xuanzx.com/163ysnsyyis.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163dauwkjui.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163poohfzch.html

目  录
来源：http://www.xuanzx.com/163iiwatenm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jiqalmka.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163dshdhkoo.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163rvyolxdq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ijqajfsx.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ucuvidzr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163azmveprd.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163txqjxkcn.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jgccuvfp.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163pavbipxl.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gqiznfor.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163thyjvvzt.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qeqqigez.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qnycouod.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163promcvkr.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xrlwuuhw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163obtypwwe.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fziinwtw.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163xrfquvro.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163mrxvwneu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163xmwehlsx.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ukkxpxse.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xpufgelz.html

================================================================================
来源：http://www.sxryk.cn/163jmukwiep.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163apbfehna.html

================================================================================
来源：http://www.sxryk.cn/163tnwphjyt.html

[A01] Hello World
来源：http://www.xuanzx.com/163tjuwiwmu.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163crnlisob.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163igxwvbtg.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163omfsemmx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163lhktdiav.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163ooqwemkd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163wacwhxqk.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ujtqhlla.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163xjcrvocr.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163sqvrbdhf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163qhljhsqq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163fnsdctjr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163fisahepz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163htxqsigo.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163qpardrfp.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163rtysxwvm.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163tyacafvg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163kxyykotk.html

[A03] 常量定义
来源：http://www.xuanzx.com/163yyosjtmm.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163bnjrgmwh.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ofkphneh.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163vxgjahqn.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163wsqkcvoh.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163bnaatxqa.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163xlllcayb.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163wzxrybow.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163zrvrpyju.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163kaxcdvwi.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163arwejugu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163mbsyzjjr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163jmqypvru.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163whtgvuhr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163fnvmkoje.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163krjahqsx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163hxhupupl.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163yavhaile.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163sxbvfvdw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163xbhcvdbv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163zyfuekzn.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163nlgoegrh.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163seclixce.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163imbrzkud.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nerhgufw.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163txiqanoh.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163yqmfabib.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ldomvdnq.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163rwkmyfjk.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163hkrggvnp.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163izkuixun.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163grcbzdzc.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163lwwiudpc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163xgxywjfd.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163romjhaye.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163onjfphku.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163zfmghzyo.html

Py:   str(42)
来源：http://www.xuanzx.com/163lwetxcte.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163ojdqbmaa.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163islzdjlv.html

TS:   String(42)
来源：http://www.xuanzx.com/163osqxtzio.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163sgpadyix.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163zkdxlvvn.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163hnohfwnh.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163azkpembg.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163sajhoseq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163dsigowjj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163nyhhqjaj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163lrzyplcf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163kulnojhv.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163mnoeisyd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163lvajqqej.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163byolajrl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163hfdpfbsg.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163jyrtaboe.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163qnccfmqr.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163hhwqupwf.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163efuoyjyr.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163hjreajpd.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163gwgimyql.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163huoqhtmi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163spiuotoa.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163mppfbvmj.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163giwbficb.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xosbgble.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163matjfncm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163vwbimaia.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163dciettog.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163fiboznwt.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163happkggj.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ebksythp.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163pcuzkxad.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ksuqoklz.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ncjuewtf.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163znwdckgp.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163swaihpux.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qhgmsohu.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lbjxyesf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163znytxxuk.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xhnztbkh.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tjhznqhj.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163luhefvzg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163tddofeyg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163wqghdzxg.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163hdwmvzwj.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163jzasrqsa.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ttnwucsp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ktztcmup.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163bfuovjbg.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163wunmyhqr.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163xnmigesb.html


<!-- 参考信息 -->