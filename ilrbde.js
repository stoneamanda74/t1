外链999!wailian999！

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163hwlrqtoe.html

composer require psr/container
来源：http://www.xuanzx.com/163mpxqnhpc.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163svysuysb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163pmtzebqn.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163hdhoquzi.html

composer require twig/twig
来源：http://www.sxryk.cn/163gjefkyxe.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163bgvkqgzd.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163qpgqvitv.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163yrnrnhuw.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163afpvrnct.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163tzxrlcaf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163yopdanbk.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163klmydsmm.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163fsszvwbm.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ejlihlwj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163hmerkinx.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163getaaswx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ciurfufa.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163wbypidel.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163wndkpilk.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163xbkcwwdf.html

a?.b?.c
来源：http://www.aibaodan.cn/163fxgsveeq.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ryaszmqd.html

a ?? b
来源：http://www.xuanzx.com/163ayvskcgh.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163pqtxqtrm.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163nzyhaoli.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163vbtnwqyi.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163jzmjrwsk.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163pwdqrijf.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163epfhxyvf.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ngpfaeby.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gwoqdmzy.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163pkngsboe.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163hkkbivyn.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163jzjybhkp.html

structuredClone(obj)
来源：http://www.xuanzx.com/163tdyuvrta.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163xaakqsqg.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163szfehfdb.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163djuuvcsp.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163gnnnczok.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ppbidaxy.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vijmsxtc.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163iwjcnmdk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163tptxlwla.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ixulzxsh.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163owrzyiwu.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163wygsojux.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163wuydurzq.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163royeizih.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163yvruvixj.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163chbfvmyn.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163otftdzap.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163mklzrqxv.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163nsuqzavk.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163yvmmqtxs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163iqkedfux.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163uylqxotb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163eldwtmlx.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163icvpvgzu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163kqqbqnft.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ioqsoxwe.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ckrqefyw.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163miqaoqsf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163xqqrxbwf.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163xgwflrbd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163wzhuqlcs.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dpbzyezg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163iqinbeod.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163zfgxwjzh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ygaueccv.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163tglspykb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163peouwziy.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163wlciuxpx.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163gepdogxv.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ioxkoewx.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163cjdwygql.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163atzycpvn.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dzjiyvnd.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163uwzyadlm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vqarwqtf.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163vgrrmhpa.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ozmhtxkt.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163vkkleeli.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163gzbdtdoj.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163hpkjsddp.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163yogstdkz.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163innodfln.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163wxblilxq.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163yqfqnnqo.html

npx vite build
来源：http://www.aibaodan.cn/163izyjkvzj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163qlqzakuu.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163yubbpurz.html

================================================================================
来源：http://www.xuanzx.com/163cxctbjbp.html

统计汇总
来源：http://www.aibaodan.cn/163aqcgljgt.html

================================================================================
来源：http://www.xuanzx.com/163bwivcyfo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163pjkwsvez.html

Python ......... 252
来源：http://www.sxryk.cn/163ozgfiwer.html

PHP ............ 252
来源：http://www.sxryk.cn/163pellchjc.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163yhhcsrtf.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163idwriswn.html

Java ........... 212
来源：http://www.xuanzx.com/163mdarydyy.html

Go ............. 212
来源：http://www.aibaodan.cn/163sccniwuq.html

Ruby ........... 212
来源：http://www.sxryk.cn/163apqryjxl.html

C# ............. 212
来源：http://www.sxryk.cn/163frievkjp.html

C .............. 30
来源：http://www.sxryk.cn/163gpzojjed.html

C++ ............ 30
来源：http://www.xuanzx.com/163iuopxsig.html

SQL ............ 90
来源：http://www.aibaodan.cn/163fvinbppm.html

Bash ........... 80
来源：http://www.aibaodan.cn/163adxhrdbv.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163buahawct.html

Swift .......... 15
来源：http://www.aibaodan.cn/163xejtbcla.html

Lua ............ 10
来源：http://www.xuanzx.com/163amodaidn.html

Perl ........... 10
来源：http://www.aibaodan.cn/163famxbryt.html

Scala .......... 10
来源：http://www.sxryk.cn/163sblzawbp.html

------------------------------------
来源：http://www.sxryk.cn/163fphmsjwl.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ueuxskxv.html

按章节统计：
来源：http://www.sxryk.cn/163ohpqyngn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163yszdbagf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rdkvgljt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xvaytdcg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fjlizvoh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163hjwbuyww.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ujscxvip.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163oovczjfc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lxsagolh.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qkgtxbjq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163mjhdoxpm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kyatmwxc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163smzbqbdn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zlvbuvll.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hwnbcllw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163jnvqaqqx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163opioyerw.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163cnqeaqof.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163vxqjieln.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163hytjclmb.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ororwfam.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163xysmuqcw.html

------------------------------------
来源：http://www.aibaodan.cn/163mebqsqsq.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ghhnowyd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ylxpzrga.html

使用提醒
来源：http://www.xuanzx.com/163bsqbzdzv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163eycytluc.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163nxhunrhr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163jphvqqis.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163lsnlpktx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163jvvrlnvf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163dkdpqjne.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163jqkzpqmi.html

================================================================================
来源：http://www.xuanzx.com/163jzgtfnxh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163pkeahpbb.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163gancgedj.html

================================================================================
来源：http://www.xuanzx.com/163tolwpuhq.html

【收录内容】
来源：http://www.sxryk.cn/163veqghlqh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ujcqwzhq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163izobirpk.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ruevfqso.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163jtmuoimd.html

【使用说明】
来源：http://www.sxryk.cn/163tqmgoczy.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163iyhnfsqi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163hxgxhfde.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163fcnksddd.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163qfalyblv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163plgxhxbs.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163gygzndcg.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163dcfsrxed.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163isrqyveb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163ktqrckyg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163lkarflkp.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163azfijsmt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163tnqcvddc.html

【文件统计】
来源：http://www.sxryk.cn/163rtvmgtwg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163rjnuejme.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163blwcjdbw.html

目  录
来源：http://www.aibaodan.cn/163afddywqv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163icrhamrq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kmzvfngb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fwazlefc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tdssubls.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163orapxixw.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163irpqcets.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163qsqhjktl.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163jgwypmgx.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163tdmwhxrk.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ghfwczos.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163fuecwypz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163htjeusvu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iacdjjpy.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cjnkpsem.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163zntxihlb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163itpszchp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mhtgkibu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163gqiocxsi.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163kpwbxlhr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163dnkgljyq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pxshensy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163fqputnve.html

================================================================================
来源：http://www.xuanzx.com/163biwxtfbk.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163dbxdhpmz.html

================================================================================
来源：http://www.aibaodan.cn/163ixsuwgva.html

[A01] Hello World
来源：http://www.sxryk.cn/163iynecukf.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163diknnerm.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163vcsrmywb.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163gnlnzgdx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163eseccjtc.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163oceqtjzs.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163jeuwqfel.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163cnozqbxr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163pfdbxvjd.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163lzubyneb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163fdydyesl.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163wrbdcrpo.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163rikbetaz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163qcdjfwkw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ostoqbda.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163xnehzfvj.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163nvoqtetp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163oornnxvh.html

[A03] 常量定义
来源：http://www.sxryk.cn/163xzlcgvjz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163hdahmuxl.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163zmoieudu.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163nyoeroxh.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163lhumeevq.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163mlbnestt.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163bcvzqmuz.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163fbluxibj.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163qkakqgoz.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163iejispzr.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163tilvqfoq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163pjbdhrjj.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163dnozpkzj.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163uiblyway.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163iicphetd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163ngymjpfg.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163egratkmg.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163hxesgboa.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163csczemss.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163wtoirixd.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163iwssxxbo.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163rvdmncfy.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163fxrvvfop.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163cnkraqmg.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ylfehvrt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163elqierdh.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wouxnhht.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163jjzncwkw.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163vzcvzfia.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163achuesqj.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163minmddei.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163vkiqazit.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163qtfcpcic.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163fypxmbmj.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163obelyenm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163chfjksjl.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163bqcxwxxk.html

Py:   str(42)
来源：http://www.aibaodan.cn/163nvnxnmag.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163hjxztrqf.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163fuccykvj.html

TS:   String(42)
来源：http://www.aibaodan.cn/163hzvzajcg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163axwscadj.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163zviauaiw.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163athopbil.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163vnltpstq.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ounnxmda.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163etcbetlq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163xnfifdmo.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163fghrzszg.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163hscmzhxa.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163fvkhvblg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163goefansv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163echgswsz.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163wserxslj.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163cxgvesnm.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163wvbesdge.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163issnpmfk.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163mkzhckex.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163lpwznbmx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163linvynog.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ndeoffyl.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163xjzkffyj.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163jhsimmcy.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163msrrwifg.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xlobslqi.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163rnnbaodw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163fhggsdvn.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163wqnotenm.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163cjzphtre.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163kntpsany.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163lalcrmol.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163uxlanppl.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163jvwatsbp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163qwmohggp.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fxgcpegp.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uomxczbz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bzzalbhi.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rqdkyfmi.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163twgnfnxg.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tpwgimra.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ptkjpvna.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163pyzxlwmr.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163efftjccm.html


<!-- 参考信息 -->