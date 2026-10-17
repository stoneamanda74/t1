外链999!wailian999！

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163juxnqpjh.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163olyknyqz.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163pgpzrbru.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163jtniadkf.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163qbrujlqv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ytoyhkub.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163zhfrxguk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163impmlzhg.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ksektoxs.html

a?.b?.c
来源：http://www.xuanzx.com/163rovfdqqk.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163gaefjusx.html

a ?? b
来源：http://www.xuanzx.com/163plropile.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163oenniipn.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163wzlybags.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163xasbefnm.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163auydonhe.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163dpiykvrc.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163fyesbhwn.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163fggsxpal.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ekrmctse.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163sxgqwnpc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163qgtpjlmh.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163oksdzyzb.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163lsfnnxay.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163dehmqryy.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163gfhwytvu.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163mzbukvou.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163qxukqabr.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163wcoeumxs.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163yxfpgrbb.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163qawxfnpi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pmihcexv.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163tuxiyzhx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qmrtktgq.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163iuildcfd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163rpzelasv.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163kaoxxmuo.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163lwglsxeu.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163muxmhtoj.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163bfeztxwq.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ldjctxzf.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163bnelgmjb.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163nozhggne.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qepxvczh.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163chjsamhc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163imtlcytf.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163pqptxlqb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tvqxoqzf.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ntnfveyo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163fxabzttb.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163thnweudc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163rjdshtcj.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163twynhyql.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163conecvcs.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163otpmzbui.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163tbwjwjvh.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163uepraaph.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163imbhdlfd.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163zdqdgmio.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163rsssylpf.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ciuphhaj.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163dgrcwqtd.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163nlcazlvg.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163yqzlmnic.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163wvjgkiez.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163acvvywab.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163bxynhquv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163novpcfqb.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163jppopxqj.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163hnndyrtm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163mbfsknoc.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163aqtbtrzr.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163onfadcvi.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163jkfyprgs.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163twjdiayc.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163olahpdzz.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163dazuqbvb.html

npx vite build
来源：http://www.xuanzx.com/163ldavjqgq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163zuvynwkb.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163kopjhane.html

================================================================================
来源：http://www.sxryk.cn/163ovjsvrpu.html

统计汇总
来源：http://www.sxryk.cn/163xdxiceqw.html

================================================================================
来源：http://www.aibaodan.cn/163wtdlowgp.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163fjqipxky.html

Python ......... 252
来源：http://www.aibaodan.cn/163vvppvwuy.html

PHP ............ 252
来源：http://www.xuanzx.com/163pllbyjfu.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163brgrkadq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163akufuzht.html

Java ........... 212
来源：http://www.xuanzx.com/163wmkaourh.html

Go ............. 212
来源：http://www.aibaodan.cn/163eqbswvtc.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163oxnopuwd.html

C# ............. 212
来源：http://www.sxryk.cn/163fbvvwcoa.html

C .............. 30
来源：http://www.sxryk.cn/163bqevzrvf.html

C++ ............ 30
来源：http://www.sxryk.cn/163lvxvgijp.html

SQL ............ 90
来源：http://www.sxryk.cn/163xcouhhoc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163wjvvdgit.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163sgfdmzwg.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ysqokpua.html

Lua ............ 10
来源：http://www.aibaodan.cn/163sdijuldu.html

Perl ........... 10
来源：http://www.xuanzx.com/163qhmoifss.html

Scala .......... 10
来源：http://www.sxryk.cn/163nobjogei.html

------------------------------------
来源：http://www.aibaodan.cn/163axvcuuyu.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163aabddwnx.html

按章节统计：
来源：http://www.sxryk.cn/163nwbyzsar.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163gpzvxbyk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sqmyvmwc.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qblmqmsm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163eaxcsrll.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163rygnumbf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cddsmjok.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163uusbdtey.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163decukscg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kxegsrph.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lhsoevbz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xldzygei.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hotelhyi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lkmcpyba.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163irrnjsml.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163gzwnctck.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xsdgrxem.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163purcbqde.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163pparoijv.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163oydhaiak.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163kjftmcnd.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163sliuwudx.html

------------------------------------
来源：http://www.aibaodan.cn/163obmkovle.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ahjveobc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163immgskkx.html

使用提醒
来源：http://www.sxryk.cn/163dcnwtjij.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gbtlnlee.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163htgtkaum.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163njpgafvj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163edyjqdfx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163yuesatei.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163zvfvknhx.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163qitcoryn.html

================================================================================
来源：http://www.sxryk.cn/163qzlfjmhh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163gldabxht.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163hcumosyp.html

================================================================================
来源：http://www.xuanzx.com/163hnhspbhi.html

【收录内容】
来源：http://www.aibaodan.cn/163esnuybpv.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163jmknqhcf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163oaeuykfe.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163vwfuvyfq.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163vedbgwzx.html

【使用说明】
来源：http://www.xuanzx.com/163mzlfacab.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163wkdpgzhb.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163lvajevct.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163szogvqmt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163dsoaeuvu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163jcbaszqy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163fajgqlkp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ozenduzj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163iglkeami.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163jidqrrel.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163fypcknvq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163iwfvmwfu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163qvufksdm.html

【文件统计】
来源：http://www.sxryk.cn/163jhziqabw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163arjeajel.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163stvdwgsg.html

目  录
来源：http://www.sxryk.cn/163wqlpyyug.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dbvwwwcq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163pkzipgne.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qtwwwhbw.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ywbrwlnd.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163vgniztra.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163mbmlqhnm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163yfmbgseu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tqdftpop.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163stnylmef.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163btxoujbz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163xrwolzmp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163piqzvrja.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163swecpecv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wjzjklzg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ekmaarey.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163nznzeicc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163onumzndl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163gglxodaf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ddubvvzj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163bmhaypbw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lsieyzav.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nnzoebiv.html

================================================================================
来源：http://www.sxryk.cn/163mhmmvvdm.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163jwbqjilo.html

================================================================================
来源：http://www.aibaodan.cn/163wmkyyriy.html

[A01] Hello World
来源：http://www.xuanzx.com/163zyqxuvyw.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163qnyxxlio.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163lvqywxyt.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163pkgnzcgs.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163egmlmigg.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163cuaykwqv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163bijpsveu.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163tzrzovvk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163atykfdfn.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163riafadwl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163ymufshnm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163grnkrypx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163fwexjlos.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163ygmiwzco.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bdflkmmy.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163wgnuzikv.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163tjhannst.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dzqhpppi.html

[A03] 常量定义
来源：http://www.sxryk.cn/163mevproeq.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163giggbzjv.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163hkztqjpv.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163xgacdyee.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163rfsyyors.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ekagunmq.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163spphctjc.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163hmkbvvkj.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163euljsstl.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163wukztdvw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163mqxnekih.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163asekdeep.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163tshoidmj.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163kdwupfje.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163sqsijlnk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163obktgeey.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163zgoueefq.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163trocvyrw.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ujndcajz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163xdknmwgi.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163dicsdgjm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163obxykoqq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163wvmnayfe.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mlqpzlcp.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xujuuhbm.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163rsoxzsnv.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163scgenrbg.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163yfphssmg.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163udbklyvt.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163nodnjeho.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163tbhdiitt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ihhsezhz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163asnbcxnc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163jjnqysyg.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163jkebddvg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163pyrdwyrt.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163vlulxctq.html

Py:   str(42)
来源：http://www.aibaodan.cn/163zhcqnqfb.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163fdfbigfc.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163rzfvuusx.html

TS:   String(42)
来源：http://www.aibaodan.cn/163aptbsuei.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163inbspqze.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163uxtpfkew.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163tsldwsvz.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163ihfxkhus.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163uvsjevfu.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163pntgmuqf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163akuyggvr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163suvvhloo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163zoszzder.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ejuxiehy.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163rcbrziap.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163yohpfrmq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163rcatapra.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fltmnflz.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163jwacizfs.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163xiybjdqy.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163gavpczza.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163rhqxuqnh.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163jpwoprbw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163hcjmuuca.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163huktcbnr.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163lpboycnk.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163kcusmley.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163dqdeizje.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163iadurtbs.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ifxbkyij.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163enmsmvnf.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163duleaxzr.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163iwdkkpoq.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163uklvifmf.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163hxzgrgqc.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163fkeszbiv.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ljzclbib.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kjktfsxb.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ipmnactw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wdfkkiux.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nswzclmd.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163ukfwqgkm.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pixlynzg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pqvurcld.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163dohrrhhj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163szvcthkt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163bvbajgvp.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163vbvprbit.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163sjqrabny.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163fpzkwbnn.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163vstjmzbb.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ekuxvfni.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ohkmzjjo.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163xkubzprb.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uulryrjw.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163ptarvodg.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tmuphpcz.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uoomdudr.html


<!-- 参考信息 -->