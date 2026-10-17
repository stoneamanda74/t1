外链999!wailian999！

[U105] JS：节流
来源：http://www.xuanzx.com/163ipzhyvbi.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163besqsjsj.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163zwwlajcu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ucsbmgol.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163gbvlmakw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163obivvdki.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163wjgmlvxm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163hlnczroq.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ywpcycjr.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qqzeqwkk.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ibheywjt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163pfptfxtc.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163mypscxeg.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163lidhecas.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163uolwmlul.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163realgyoh.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163lfobbpos.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sezwoyne.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163dptrozzb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vgvxkczc.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163zcutlrhn.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163outnsdhx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163rixvkpui.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163vbwmmtxp.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ndnqztho.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163qqccxxtg.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163bgijhvev.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163etstzckr.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163odezfake.html

npx vite build
来源：http://www.xuanzx.com/163haacuzph.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163dclfxpfb.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163namlsexo.html

================================================================================
来源：http://www.aibaodan.cn/163ttkqojwr.html

统计汇总
来源：http://www.aibaodan.cn/163pshfbree.html

================================================================================
来源：http://www.xuanzx.com/163mnflbgeu.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ztvpzpkb.html

Python ......... 252
来源：http://www.sxryk.cn/163sacskvpy.html

PHP ............ 252
来源：http://www.aibaodan.cn/163dejgwgiw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163bfdcnyhd.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163bmdidjdk.html

Java ........... 212
来源：http://www.xuanzx.com/163cgtimfdu.html

Go ............. 212
来源：http://www.sxryk.cn/163rhszmmgo.html

Ruby ........... 212
来源：http://www.sxryk.cn/163goqzguym.html

C# ............. 212
来源：http://www.aibaodan.cn/163dylwsrek.html

C .............. 30
来源：http://www.xuanzx.com/163pihbqdjl.html

C++ ............ 30
来源：http://www.aibaodan.cn/163fuynlbwr.html

SQL ............ 90
来源：http://www.xuanzx.com/163patvwsmi.html

Bash ........... 80
来源：http://www.xuanzx.com/163dqxocapq.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ljysnxha.html

Swift .......... 15
来源：http://www.aibaodan.cn/163zvqlwnpd.html

Lua ............ 10
来源：http://www.xuanzx.com/163qwubvqug.html

Perl ........... 10
来源：http://www.xuanzx.com/163lnpbkdlr.html

Scala .......... 10
来源：http://www.sxryk.cn/163wfmjditw.html

------------------------------------
来源：http://www.sxryk.cn/163oerikwxs.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163sboeeqfw.html

按章节统计：
来源：http://www.xuanzx.com/163wgwiyyff.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jvopesut.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qmkgrajj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163syjkmbva.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163aqlusudq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163xudppnlq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163jqefwqrs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163zbzipyqk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163cbnatcie.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cpcmbvel.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zemqhwza.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mrgsqsch.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163urqrtujc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gktyjdxn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163bxjqnqjz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163kempoxtv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bquzumfo.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ynbunlwy.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163kcdquswl.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163gfklluet.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163wuicuthy.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163qtqvamzk.html

------------------------------------
来源：http://www.aibaodan.cn/163kcvrdjci.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163giotcmsu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nkogdktn.html

使用提醒
来源：http://www.aibaodan.cn/163qllxjzhl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vbntjkem.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163hivylyqc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163fkruvaxd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163guvpckvw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163fzaorgpr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163xzimdrcx.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163biyvctqr.html

================================================================================
来源：http://www.aibaodan.cn/163bmanxgpv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163tnpemgyk.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163kloobaki.html

================================================================================
来源：http://www.aibaodan.cn/163jnyytlng.html

【收录内容】
来源：http://www.aibaodan.cn/163mfrflvep.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163clallcgs.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163mnjyxjoc.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163lryohpxc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163wypbltyc.html

【使用说明】
来源：http://www.aibaodan.cn/163uhneajyd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ygqhwzba.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163jfvkbmww.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163gownbzdc.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163wloortao.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163chadtdwq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163yalzqcyt.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163vggywyxw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163nbagbiag.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163jwgintkq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ilxnbbct.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163vscgosvs.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163kcfodllf.html

【文件统计】
来源：http://www.xuanzx.com/163slgvuhpv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163xszwlzkx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xavbngjn.html

目  录
来源：http://www.sxryk.cn/163fwkyrudr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yytzpsfi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163jilvrpcl.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163hmloqjen.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lerpttxf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ujiukukf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163subdascl.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163sqnuqbpu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jikpwisw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163oorzzpxj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dwbulnam.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pjwwdkcs.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cthohaaz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163mxlygvek.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qwpxlfht.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163rlrybryh.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163gipvkchy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ltadfawi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ddcimdrz.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163qwsxtfgt.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163yqwhnixr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163dvjyzuyr.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163yhfwhnsv.html

================================================================================
来源：http://www.aibaodan.cn/163hrxiwuek.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163sttsfikn.html

================================================================================
来源：http://www.sxryk.cn/163mrzroarj.html

[A01] Hello World
来源：http://www.aibaodan.cn/163fyuzoumr.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163nfbpxmtm.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163fqgnlmhs.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163rxounplg.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163mypbnzms.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163gricntuw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163jrvcexxx.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163vxblcycb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163nlcbbbpp.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163ebzjljbl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163ilfuxaql.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163vgfwnzma.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163dpvvbuwh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163zfbqcbap.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163iomzlpje.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163pqcvtxab.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163wvrschkq.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163nowbfmhl.html

[A03] 常量定义
来源：http://www.sxryk.cn/163uzbbggbc.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163cjdurwqz.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ukqnteif.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163ejibzwlz.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163nczulfrz.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163nmibkoeq.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163tibfdaaf.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163wonznhrl.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163iswwduia.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163ymznzuaw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163iwrgpcru.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163klrmeyek.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163dsxiyvnq.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163erahtanb.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163xsxwmfnd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163hsjqupvw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163vuhdjnij.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163bggbmfmr.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163izywfczx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163rawsoskt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163yssashtx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ruvewgth.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163lrmthldb.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ualrlgws.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163cgoozanj.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163oibcqmai.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163okxglqff.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163fmttuupy.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163rxhrbuok.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163mdvjfqst.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163virdujkl.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163dstjuaqr.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ofpxljeh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163qvfbuyiy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163wjlhgcuk.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163iuutbhrp.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163czmotbrz.html

Py:   str(42)
来源：http://www.aibaodan.cn/163jauxrujk.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163sigizsia.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163boqpkxgg.html

TS:   String(42)
来源：http://www.sxryk.cn/163dmcigqks.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163fhwxyuci.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163faguqgsa.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163bptdzokx.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163rlstejxo.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163izhmjmow.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163ibrqblqi.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163exvbsbhj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163jrbgibsb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163rgifvhro.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163dcqomdzh.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163cdjrnmff.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163xccclwtr.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163yfsoppad.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163norehwge.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163uafgswib.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163sagxvirm.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163adpiybkd.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163blsouker.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163sudqivfp.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163ajeoklrt.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163racvsrwk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163pqduccei.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163wzcgtjvg.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163sfacgsge.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163kypcewzy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163zslebtmd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163zjktcjhj.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163afiwnlun.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163dhxlnhhw.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163hdeqwslc.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163smwbxcbg.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163lcpoocbn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163grlatomg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dvoxuvqn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sslfcwty.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vtsxqxah.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xredvrgd.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163oyvmbgjb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qnazkoem.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ewtclskd.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163nisdmuaj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163simyvskw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163mzrkeajw.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163zzaxuduf.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163kjxanmaf.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163xcgvlyej.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163mbhludya.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163cblfasoj.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163jqwbdcpi.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163qsoqarmo.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163azysixog.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163qzrlqyes.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vzgioeln.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gfugpgmt.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163fcymvsof.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kjumsrnw.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163rtlgmmrh.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ysdvvrwa.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163zahxrozq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163tlktrcuk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ktpksdap.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hjtzlxlh.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mihuezwy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163pydelcrs.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pzxacjfb.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163vhphbrtb.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163etsrqrbq.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163qjdzrqga.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163jfthffvw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163ydxhmjlz.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uoegsybo.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163pqorbhdd.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163llwxnkzn.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163hvjezrhn.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163bxsbxslh.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163rtrsvacf.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163kdmzyqcc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163gpwzkupy.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163ozzriuks.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163pkbgmjhf.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ddmuvgji.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163zobtmctu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163wxqfjlsa.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163agetlsgq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163qwfgzcnn.html

[A17] 位运算
来源：http://www.sxryk.cn/163xrkonuho.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uxnctqen.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163bnvmkpyc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rqvbbxog.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ilmpjkfd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nomspodk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163khtjoryo.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mxmkgwjn.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jcpfxtax.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163sewoqmmt.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163eguuttpn.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163xalrnbkl.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163hjkxljjz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wynakpuw.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163njhjhhlt.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ancicprw.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163egbuvcmu.html


<!-- 参考信息 -->