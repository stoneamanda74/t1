外链999!wailian999！

[U85] JS：可选链
来源：http://www.sxryk.cn/163fcacntog.html

a?.b?.c
来源：http://www.sxryk.cn/163sfmwsyew.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ggyqpamo.html

a ?? b
来源：http://www.xuanzx.com/163uldgshhl.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ckwpdddw.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163bredqixu.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163xtiybojw.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mtecvhcr.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163fceeixix.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163oyadvdbn.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163omnnvevz.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163afaziexe.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163yszlacwb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163keoijgwu.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163eqijliqz.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163qwnxiozy.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163rscxpwud.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163rigsymgq.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163wlgxewvp.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163eozeinca.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163qfasbjhd.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ecklxnyy.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ofvzhnrr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wqpvtqyv.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163dvzueyzp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nxmincyo.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163czejpywh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163bsxqmmfz.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163mjqamuwl.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163cyeydzvp.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kupdlwdz.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163rglhxrdl.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163ggqbguku.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163kupvufmj.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163zmobocji.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163jjkwggxf.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163loesyvjh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163laffzbyg.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163tybqersy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163egwohjjy.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163nozeyglz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163cvzkemxx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163jxzrvgrg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163pigrrdhc.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163yldwwqbx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163edpvfmgc.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163lpoymscl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mwohjotu.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163egobffhu.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163eutdkmwe.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163dilohcmt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163lclnksch.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163qmtvhyhf.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163zwfwkiui.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163aecxgdjx.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163nzuwsbup.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163rntzaijq.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cpkgroaj.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ijmpazjv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163epotdswd.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ielggmbk.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163dtazqtpv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163vcuoevec.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163idaomojq.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163wfxyjimg.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163esehdjmn.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163qzxraslt.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ybfingvh.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163huizeapb.html

npx vite build
来源：http://www.sxryk.cn/163ouffeghk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ljetixag.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163kaoghfiq.html

================================================================================
来源：http://www.xuanzx.com/163edbkuvqi.html

统计汇总
来源：http://www.xuanzx.com/163xuxalvgj.html

================================================================================
来源：http://www.sxryk.cn/163gelqhecd.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163yvcamabh.html

Python ......... 252
来源：http://www.xuanzx.com/163eaakxrht.html

PHP ............ 252
来源：http://www.xuanzx.com/163gdfzerqu.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163pylzqrdd.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163wqwwkklz.html

Java ........... 212
来源：http://www.aibaodan.cn/163cnwghkgb.html

Go ............. 212
来源：http://www.aibaodan.cn/163rajpqztn.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163pqggpupr.html

C# ............. 212
来源：http://www.sxryk.cn/163rvqbwthr.html

C .............. 30
来源：http://www.sxryk.cn/163nqkgsutp.html

C++ ............ 30
来源：http://www.xuanzx.com/163zsxeqpra.html

SQL ............ 90
来源：http://www.xuanzx.com/163lsxpwigr.html

Bash ........... 80
来源：http://www.sxryk.cn/163yuncreic.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163gmxsrouz.html

Swift .......... 15
来源：http://www.aibaodan.cn/163tkyyzbrj.html

Lua ............ 10
来源：http://www.aibaodan.cn/163sxxslbzo.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ojregaut.html

Scala .......... 10
来源：http://www.sxryk.cn/163idborqbt.html

------------------------------------
来源：http://www.sxryk.cn/163qxpiliiy.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163zhjrbwoy.html

按章节统计：
来源：http://www.aibaodan.cn/163kdquxvwa.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rroalrjv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qnuchufn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163haxmicht.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cwncdwff.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163jxdegmhq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163eslauuql.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163slswgxup.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ahrjozpg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fqmebypt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ftnlgdka.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ybqwqfzz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zrchvkso.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163daxwvsrl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163omklkgvh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163barboirs.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hszaozvy.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163pnmplcdv.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163oqepojat.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163saauzwkh.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ujkuoycf.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163mfbsqhnm.html

------------------------------------
来源：http://www.xuanzx.com/163euppycvb.html

合计                                  2106 条
来源：http://www.xuanzx.com/163anagvtsm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kueiltkm.html

使用提醒
来源：http://www.aibaodan.cn/163vsvomuou.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pkmyktsu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163mczpfbbg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163hvjvjxmq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163bbmmtzhb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163fqumsdww.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163hewbvwub.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163qfbnfjbl.html

================================================================================
来源：http://www.aibaodan.cn/163xdonmmnr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163fxavgkof.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163rfukbzfx.html

================================================================================
来源：http://www.sxryk.cn/163psjmxqty.html

【收录内容】
来源：http://www.aibaodan.cn/163ibbqalox.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163bhfwmifm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163exixgxdk.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vttwdbho.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163wqnvunkl.html

【使用说明】
来源：http://www.aibaodan.cn/163gywapyby.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163kwrsxwzr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163nojtixga.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163qnwhlwpb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163kblimwbj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163cssuselq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163jbognaht.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163gkzbsoaq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163aqqajuib.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163qatcezzt.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163mskumboq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163qgqkxvtw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163rzzcetbc.html

【文件统计】
来源：http://www.sxryk.cn/163ubpreqks.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163mwzcdbrd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jccwjctd.html

目  录
来源：http://www.aibaodan.cn/163meyveowp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gyokaxnv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xvhzbncb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qgzevshk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163cyfpwzoq.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163awnlcpoy.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163cpbdxmtl.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jhwpjkuf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xinbixff.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163krkrsnvy.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163roywesoo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163fqoadyaa.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pkqtitdy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163somdqdsy.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ozdjgjfm.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163emnwlqug.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163khakibps.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tiimzywy.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163zbnewqqz.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163jlterfdn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163wnhfhwrk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zsyqkreo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163msrtxywi.html

================================================================================
来源：http://www.xuanzx.com/163dqibbtsq.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163skhwqrrm.html

================================================================================
来源：http://www.aibaodan.cn/163xdgypgle.html

[A01] Hello World
来源：http://www.aibaodan.cn/163qeukbbje.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163tqwyyegx.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163bjcdawrp.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163uuadnmgx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163merfgirf.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163gddwmfva.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163wuxchnex.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163xznrntca.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163odwrtfec.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163vcivhynf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163bwrvbaza.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163kvyycicx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ffrrulgk.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163royeypkh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163egirmxvl.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163mgmkaqmt.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163yeatgiag.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163piuvjxgv.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ubjgfuvj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163timqesie.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163gmbhkqtw.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163sxffllhh.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163osbdkqrq.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163vorroejl.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ugpcagvx.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163oyirmaze.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163tszmzexq.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163wshbdzmw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163mphmomwb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163bszxnqam.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163prwsvffg.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163iiiqyyfi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163isljdaoi.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163hbhxozqb.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163obsqoozd.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ewjyfcij.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163xzmcdtwe.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163bnsaxvac.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163bsdayvrw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163kqxhkjel.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163mxeigugy.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zzpfiiny.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163cigzfqup.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ibtieixi.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163coirghun.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163izmcivgx.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163bssdykoa.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163gwulvjuc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163bifkyfwn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163wndqrntp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163lycnjlrh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163bqraubnl.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163hfybqcgv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163hfmequsk.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163gzegxmlw.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ujczeggn.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163ccohnhcm.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163dcoidatc.html

TS:   String(42)
来源：http://www.xuanzx.com/163sklllguy.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163dudxleid.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163oysecmgz.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163lxatgrlg.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163jgwdzwap.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163klsdqlpv.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163qjaohlft.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163bflsyems.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163zzebnoeq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163zpquuhbt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163jhghbhlm.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163oudenyhp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163cblbyebq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163fbstiftj.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163qmyfcmmp.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163eyrtwcoc.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163kjbqcrnn.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163qcovrccw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163xbvoadxi.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163avfagksm.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163iwqwycms.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163vidsuwyv.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163dukwetrb.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163vfdopcsq.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163hzntofem.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163pdpezyhs.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163dictwqhg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163kwtkqdue.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163eputcmmo.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163yoqiqsqb.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163kkhirxlk.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vbzgrxnr.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163xsvpyotg.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163swdiknbq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vkgsxcev.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tktbwlwz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ftygrexy.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vwygjnul.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163bloxdkgm.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dqurhine.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163isumumql.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163vgxlvrlf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163ikxejdkt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163tdnrkxgn.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163olqdimis.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163fwtlvalt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163izugrqkl.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163cpanyvit.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ltyerrec.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163egmnzmpx.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163lpqzjnyf.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gwmvnluz.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163wwrzqyqp.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zmcgrvmb.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163luurlzrv.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163tnfqdzit.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tbnmhkay.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zuhcqycq.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xhfhukwd.html

[A14] 注释写法
来源：http://www.xuanzx.com/163schndcxp.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163tznsuubg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ciwujolu.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bgudnodw.html


<!-- 参考信息 -->