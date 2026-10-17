外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163zepkpglf.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163rxgvqxez.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163fcmtwyug.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ruyrnkpm.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163trnrrnvb.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dpdftgww.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163tjtlqrod.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163grdpeeqs.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163rjrzeqvy.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163eirojexv.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ybydwmei.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rhkqxqqi.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163eppncswr.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163tzpkeegy.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163icyabzoh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ohnfhdpy.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163zrqubpnt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163lgwjespg.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163hhtdhdgq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163eohxzjfm.html

[U105] JS：节流
来源：http://www.xuanzx.com/163tgncovjc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163jzqlhnea.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163dnauwmjs.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163fjicnbur.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163iobkpmtu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163yzbpoitb.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163dyxqokez.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163iprwglgu.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163iswfdvxi.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ljoxcjpx.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ioguueiv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ayuphrgh.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163opztzyeg.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163kwfksqzx.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vppwfulh.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163mxkvczwb.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163svijhosu.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cfmdvnhk.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163jxjoqalc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163kfqzpgef.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163enhyhopb.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163pwippbck.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163bkrapkte.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163qmruvfgp.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ukefblsd.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163wdgfjzyz.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mbexuoiq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163xecskcgq.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163mygjlolg.html

npx vite build
来源：http://www.xuanzx.com/163khhpryqp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163jrtwhfax.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163plhqdfyd.html

================================================================================
来源：http://www.aibaodan.cn/163gevvyjan.html

统计汇总
来源：http://www.aibaodan.cn/163cfrzmrlv.html

================================================================================
来源：http://www.aibaodan.cn/163ftdewuxa.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lzrjkcgp.html

Python ......... 252
来源：http://www.sxryk.cn/163zvbzkcth.html

PHP ............ 252
来源：http://www.sxryk.cn/163hnbmyjtn.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wvowwqjn.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ikxymjak.html

Java ........... 212
来源：http://www.xuanzx.com/163wthwixoi.html

Go ............. 212
来源：http://www.aibaodan.cn/163sfgkgdee.html

Ruby ........... 212
来源：http://www.xuanzx.com/163fpbdgbxj.html

C# ............. 212
来源：http://www.aibaodan.cn/163ntlxvayt.html

C .............. 30
来源：http://www.xuanzx.com/163uryheyjh.html

C++ ............ 30
来源：http://www.xuanzx.com/163cbmkelkl.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ujjbmksa.html

Bash ........... 80
来源：http://www.xuanzx.com/163urscpysm.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163pfgqpjsp.html

Swift .......... 15
来源：http://www.aibaodan.cn/163tvgmqgpj.html

Lua ............ 10
来源：http://www.xuanzx.com/163uuxocfnt.html

Perl ........... 10
来源：http://www.xuanzx.com/163ymfruscc.html

Scala .......... 10
来源：http://www.aibaodan.cn/163yhtjzuuo.html

------------------------------------
来源：http://www.aibaodan.cn/163vxedizjx.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163elsatdib.html

按章节统计：
来源：http://www.aibaodan.cn/163aiedtkgc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ejkajdwt.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zdaqlkqe.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cenwrgpg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163zoxdlxws.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163fsqenpyl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163flczdzwj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tfvouppn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163kfnaixlx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kvhuudsl.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zgfzdcql.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jqbfmqpo.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cnbfbgca.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163upcysaut.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wytvfrap.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163benwcbof.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lwqgrjpw.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163nibqaegm.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163azqgskxl.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jrlazvmi.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163yczabdfi.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163lmvukert.html

------------------------------------
来源：http://www.xuanzx.com/163tmzcqdap.html

合计                                  2106 条
来源：http://www.sxryk.cn/163pmwxczsw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qwepyuna.html

使用提醒
来源：http://www.xuanzx.com/163mfbjyxqq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xyriudir.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163rsriciec.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163fhpvorgz.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ppokxqjk.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xjoxiitn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163qbdxkxkd.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163zterqaxi.html

================================================================================
来源：http://www.sxryk.cn/163hrlthfkt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163unjgdmgh.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163sojombfw.html

================================================================================
来源：http://www.xuanzx.com/163yjjwhyaa.html

【收录内容】
来源：http://www.aibaodan.cn/163zawqufja.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163jzvafxwp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163zmcprxkp.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ttftzspn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163pfopoolb.html

【使用说明】
来源：http://www.aibaodan.cn/163jldrzqft.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163nqtfhfxz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163grhyjlwt.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163vyfisjbj.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163cqalywsz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163xewjzogq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163sjdizvqe.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163wnedmsqi.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163oxgclfha.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163udxbozdi.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163vwlmwrrp.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163dtvvxtpl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163jgnjbyfm.html

【文件统计】
来源：http://www.sxryk.cn/163xzjadnyt.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163zbmaphde.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qbuqzxeo.html

目  录
来源：http://www.aibaodan.cn/163qkmzupak.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dsllwfxf.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wfkgpuox.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rxkcwerl.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zopndrap.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163gxheuscl.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163fdtwizmc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163thyxysxs.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qyzrwsjx.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163tmifhmad.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sliixvym.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163pcramavw.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qebecsox.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uhwrgerf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163mtrdqbyf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163sahjjcun.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ufqpxdyv.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qohalroe.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163hqxubcnz.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163qmcabklw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163mtxbjmpc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ygrxbovg.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wwzfqkoq.html

================================================================================
来源：http://www.xuanzx.com/163xzdyxtse.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163piykdygt.html

================================================================================
来源：http://www.sxryk.cn/163qcwzvkin.html

[A01] Hello World
来源：http://www.aibaodan.cn/163fyjizogq.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163uorgmxud.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163tojnyvjh.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163qmhmmknq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163tvizycgp.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163wdvyngko.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163dwqhvmzt.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163qbramktg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163vbpilvtd.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163mqxmrplj.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163gekapikd.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163qfgsdygg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ppswpzxf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163hawdkcri.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wqwgryhv.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163glbdjzzz.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163nlfyeysc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ysrvdzro.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ziqwlmne.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163xzaexyya.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163oiyplwif.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163oehqyaqz.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163fopaiwtw.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163wxvsesna.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163alabvcjg.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163qqteayxv.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163wurukyty.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163myibgcfu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163pwxfecca.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163gobqqicd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163gmsejcnj.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163sdwjqnjl.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163cnhkvjnk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163qigzbwto.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163lhfxppbh.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163tsomhlmc.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163hveddqxp.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163pjtmxzvi.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163xdsvwkvs.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wloaxraj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163pxaenwwr.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rkypxfnc.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wfcytzge.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kwohnodu.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lxpitidk.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163bitxhdte.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163dttezztn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163jlxyonba.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163hpaxfpls.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163oadxszmr.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163xubczjjf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163cynnwwph.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ccpsosip.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163iizumrku.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163yzavwxue.html

Py:   str(42)
来源：http://www.aibaodan.cn/163xcxxzcmo.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163symsvmeq.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163fcgharvv.html

TS:   String(42)
来源：http://www.aibaodan.cn/163qiolrvzi.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163flmdadsc.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ownycdkl.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163eljlruxj.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163vtxyweqj.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163xpfudxsg.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163wrhnmfty.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163pvonjbdy.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163jcetwhee.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163dnzykstg.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163kxujgdwg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163eonvetpc.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163mrqntrod.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163oewimerv.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163qpwbgxlr.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163fijfvpau.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163lqrjnwti.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163jgbahyyl.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163mftsfmgq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163omfvgupz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163swpcjqpn.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ztjiauqf.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163bacrzqey.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163btqwiakv.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163toaxgdmi.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163lurzdoyl.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163auhkdvhk.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163xlctprry.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163kwohtwgs.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163phiyguti.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163wvixqhwu.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ytvvbezf.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163niimqvvi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163rdlfgvfa.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ilmmipnl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gborzyru.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gppbnbyg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163olyfzcya.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163xepaunxg.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163auamzekg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ofomxrkz.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163mlyabmgz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163lzfxiobf.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163egdgpopl.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163fvyygrai.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163tdlbjfok.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163qavtxpfm.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163pbkgyfrl.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163qpohjpjb.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163htaqaaqm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163rkhvscoe.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163aenemxae.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163ofmmlaxo.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qphjnmms.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vogwcogg.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163qfmhfrpk.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wwhdcyhl.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163holhnvlg.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163urkxlmsc.html

[A14] 注释写法
来源：http://www.sxryk.cn/163ycfffqsp.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163kmgsecho.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ftdyussv.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tymlrkqs.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lqwjuclc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163vovcbjjl.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hkokcnim.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163pazjtyvz.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tmljzcib.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163azaodaew.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163pemordzo.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163fveanjul.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rbrgsxyk.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uwhceyyv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163vwpjqfea.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163ycxycjve.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163razsiwuf.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163zthjmwjh.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163jgkuwtdt.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163tvshdjfi.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163dohplyfj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163uhkduscf.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163cdrsqyag.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163ijcfghxp.html


<!-- 参考信息 -->