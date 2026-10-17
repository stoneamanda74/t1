外链999!wailian999！

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163rjwmljgs.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163wavjyrdq.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163fwhwbbqj.html

structuredClone(obj)
来源：http://www.xuanzx.com/163dskbszma.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163vqlammpv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163aydaybkw.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163bnmfomhu.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xatykfpt.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163pvtfevyu.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ucdjelpy.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163mwwgebnq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ioqgmhvr.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163tryoghqe.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cujqiquq.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jxwfmaaf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ctamkpmh.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163tfkyonsg.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163soywarpt.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163nmxvkior.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163cfpgzyca.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163fvcvngth.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163xetahjdm.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163mmhmqlib.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163fnjhektz.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163sidvteaj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qwmmethx.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ykbhhqoq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rarhhuwp.html

[U105] JS：节流
来源：http://www.xuanzx.com/163egmdecxk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163awitwxjv.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163nkaklenn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ztimrpfh.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163kapmcbuw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163pkuzeczr.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163scjgmvub.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163rrwigitq.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163xewbdkid.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mbneveoa.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163kxybzgiw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163yltblmlk.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163fljorzui.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163osnzzznj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163jueyvzhx.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163zhyqqsip.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163sitbofcn.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bzoputvt.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163nseqavpe.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163axhfpbxq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163njrwjkno.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163kdbclsfe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163qhzojxnu.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163hesrtagr.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rhdutpom.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163gwmocpdj.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163yuteigqn.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ibbfspzd.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zsbvssic.html

npx vite build
来源：http://www.aibaodan.cn/163dflwelif.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ycfeukgu.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163bsuqavvi.html

================================================================================
来源：http://www.xuanzx.com/163wgzograr.html

统计汇总
来源：http://www.sxryk.cn/163hqucaiwy.html

================================================================================
来源：http://www.sxryk.cn/163rgphyili.html

按语言统计（条）：
来源：http://www.xuanzx.com/163xinimrgw.html

Python ......... 252
来源：http://www.aibaodan.cn/163yoglitzn.html

PHP ............ 252
来源：http://www.sxryk.cn/163xopzedhc.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163xfnabukb.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ovwcwvur.html

Java ........... 212
来源：http://www.aibaodan.cn/163dxdbnweh.html

Go ............. 212
来源：http://www.xuanzx.com/163oamovidc.html

Ruby ........... 212
来源：http://www.xuanzx.com/163tokbfqji.html

C# ............. 212
来源：http://www.aibaodan.cn/163dnmavbkx.html

C .............. 30
来源：http://www.sxryk.cn/163sswpcvvi.html

C++ ............ 30
来源：http://www.aibaodan.cn/163klmzdktp.html

SQL ............ 90
来源：http://www.sxryk.cn/163kmsbwedp.html

Bash ........... 80
来源：http://www.xuanzx.com/163bniqbgil.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163usctwxzp.html

Swift .......... 15
来源：http://www.sxryk.cn/163sooqgkcg.html

Lua ............ 10
来源：http://www.aibaodan.cn/163opbhjiin.html

Perl ........... 10
来源：http://www.sxryk.cn/163atceqyku.html

Scala .......... 10
来源：http://www.aibaodan.cn/163vgkbagsy.html

------------------------------------
来源：http://www.sxryk.cn/163iyghdxdw.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163zklbydsk.html

按章节统计：
来源：http://www.xuanzx.com/163sxlohmmn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163olgfnivi.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163dlhncubc.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pslizced.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163aonfargf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163xfpihsrx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163inccuiiw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mpdqzblg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163icnvltkb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tiyacwvd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ecvsflsx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lcjeyqti.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mcaceugq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kxrbdqzs.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163bfqebfrm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163utwxbuhj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163blgmsqag.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163gamkhsyy.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ijybuvob.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ofuicwjz.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163jojzraca.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163nontplko.html

------------------------------------
来源：http://www.aibaodan.cn/163dskwjeov.html

合计                                  2106 条
来源：http://www.xuanzx.com/163iqietcve.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163coyrtskw.html

使用提醒
来源：http://www.sxryk.cn/163shmvvivb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163icqlwlyh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163sckxvuhc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163ihlevncn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163lrlqlivn.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163uakaarwe.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163wdzvxhaq.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163mxiboaoa.html

================================================================================
来源：http://www.aibaodan.cn/163fmudioxq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163wrovwjqu.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163nzqqfnmy.html

================================================================================
来源：http://www.xuanzx.com/163migpzizk.html

【收录内容】
来源：http://www.aibaodan.cn/163enxldlyi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163oagivvmp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163rxnygzxj.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163gakyhyjq.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163isgtuemq.html

【使用说明】
来源：http://www.sxryk.cn/163pakyikfp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163pptvrrjj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163bwlcgzyq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163fnzgfnvp.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163tnpiyipk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163qqasdqzp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163mujldffb.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163egwdqhxa.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163rafvzqdt.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163wqcylntv.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163yinsmqdq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163cqmmvzrj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163hnkpcmbg.html

【文件统计】
来源：http://www.aibaodan.cn/163qgdadppn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163rehcfbbp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qfixarkx.html

目  录
来源：http://www.sxryk.cn/163mtcykvjy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wqpgxwls.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163eyhmgbdi.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163bbftegju.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xyztlzab.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163mdptqtbo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163kdtfekkb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163nyltbpfv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jxseeynu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ypmxfymp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163oybouvkp.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163xciwpczz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wbwvhfcc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zqbltbkg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fuolxwmf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163rqtrfhpx.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163eapwmyhw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mzvvmdmo.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163sguagnnt.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163znmpffhm.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163pyguxrrs.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163hdldsuln.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163sasdsuhj.html

================================================================================
来源：http://www.aibaodan.cn/163hocffsij.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163wmwvbupq.html

================================================================================
来源：http://www.aibaodan.cn/163umzfdifk.html

[A01] Hello World
来源：http://www.xuanzx.com/163udongoyp.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163bixpkgwj.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163nyelminb.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163cjrdspwv.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163rviydwwo.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163rcdjmgeu.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163zfuvzhcd.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163bdgzhpky.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163guozbhtk.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163uxfucybv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163kiuujwck.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163guapslpz.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163briphxlq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163idulmgzu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163euhrdzdq.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163vunvgsgu.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163toknfcln.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163qzfngzuv.html

[A03] 常量定义
来源：http://www.xuanzx.com/163fgdhehtl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163vfikkpgo.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163oylynplj.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163qhlvqfkc.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163wcpzkred.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163nibsdmnr.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163hszmswce.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163lspdstsj.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163uzljfccj.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163brxrvnbs.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163pyexlain.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163tulatywz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163qlewkgas.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163soskbilz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163bswrpwmm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163lqomvnzt.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163qbhbyaup.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163tmcxdeot.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163etyrupjz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163nrqqzfps.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ehmbkcbx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163jytvlswo.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163kammlkpk.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wronsfhd.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vcfhmgah.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tgvesuls.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163pvdudlhy.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163yltenagd.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163wiuwynrd.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163nbwkghym.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163dhqqbmeo.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163buvywbjq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163jjfzluni.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163yngoxkem.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163zrlfpwks.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163dxiyybvm.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163orunxlys.html

Py:   str(42)
来源：http://www.xuanzx.com/163vqlmhxlv.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163ldmblmqo.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163kxymhloh.html

TS:   String(42)
来源：http://www.xuanzx.com/163mhqivvzq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163zsszxgqz.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163degixykw.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163xkzubaex.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163hbygsjfi.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163hyhmccix.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163fcrwuens.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163eoasjupo.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163wdmxmtyb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163zdnlrfmu.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163rdvyjgdu.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163sjposspg.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163rvzzqxpl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163xmcrgcbr.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163ppswdtve.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163bqyyyyuk.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163lgsernyn.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163jbrexkyw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163zmofisze.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163oheipnwx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163zipiinrx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163vvdwkkup.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163vhfalqht.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163jeuueuoo.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163ieduasyb.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163vhaqxeip.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163kkbtqzab.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163parfgxay.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163bqkppibz.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163dmpvgvvb.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163tnwhijfx.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163gjfqffux.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163qpizecsh.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163nxnjhlta.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163llwkxxxs.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kyyyqlmx.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zrtjsmse.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bltinsmk.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163arkdpbnk.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sacegdpr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ggqudhyl.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163mjclokoj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163kcgcnphy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163uvqhewqm.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163yizjkcnx.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163lwaclynw.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163jxtooxwr.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163jogbqajg.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163bgjasqsb.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163ltietdeh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163lsyxkxov.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gmoemxug.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163xizpkokk.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163czoshwlu.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hogppaut.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vxdvvyjg.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iegpizsr.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163wscxdofx.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163whxuqsxe.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163sdxlscvg.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163jtzcbmay.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163xojkugyx.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zanivkqg.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wizghqdi.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163daqozyki.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hwltllcx.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163xtdchmgf.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pfegbcfz.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163twsvbsbc.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163pvqnixks.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163svjfpgxa.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ckgjrnaw.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163kdfydhgm.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163znlliirh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163dbxrewks.html


<!-- 参考信息 -->