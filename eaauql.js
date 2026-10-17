外链999!wailian999！

[U103] JS：定时器
来源：http://www.aibaodan.cn/163lztunnxa.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163lkwmawue.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163albxqfyk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163idtbtoxw.html

[U105] JS：节流
来源：http://www.sxryk.cn/163zgbhscig.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163lzknaxni.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163zbifobfe.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163gkktgjyl.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wcjwgsdb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163viihgddp.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ynrpiywr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163omglboat.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163nibslktz.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vuuxfifm.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163kwyswlbq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163obtmisip.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ixyyjowy.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163bzjmtoie.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163zqwdioum.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163sywkdrod.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ezcjdyij.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163coqpyqsd.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163raefyjld.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163liegybzs.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163rubwwbcq.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163qjkqjsow.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163mrhllphp.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163cgsnkhmw.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jrrvzjeo.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163nqlyiict.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163sxmvdhjr.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ocmadkwv.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163uaknrnnp.html

npx vite build
来源：http://www.sxryk.cn/163udxjswte.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163xkohxaix.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163sugrzavr.html

================================================================================
来源：http://www.aibaodan.cn/163qadcgcka.html

统计汇总
来源：http://www.sxryk.cn/163ldgppfyj.html

================================================================================
来源：http://www.xuanzx.com/163fxahwwma.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163kyehzqif.html

Python ......... 252
来源：http://www.sxryk.cn/163vnsobivb.html

PHP ............ 252
来源：http://www.xuanzx.com/163taikdqji.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163fmevpzuw.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163vtbssthr.html

Java ........... 212
来源：http://www.sxryk.cn/163zqfnkefx.html

Go ............. 212
来源：http://www.aibaodan.cn/163noownbyo.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ogojdkla.html

C# ............. 212
来源：http://www.xuanzx.com/163mrxabeeu.html

C .............. 30
来源：http://www.sxryk.cn/163theixfln.html

C++ ............ 30
来源：http://www.sxryk.cn/163reuuamla.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ndwrqpxa.html

Bash ........... 80
来源：http://www.xuanzx.com/163dqvfbsew.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163xevqedhg.html

Swift .......... 15
来源：http://www.xuanzx.com/163sljirrna.html

Lua ............ 10
来源：http://www.xuanzx.com/163oygzlijq.html

Perl ........... 10
来源：http://www.sxryk.cn/163bctywdgo.html

Scala .......... 10
来源：http://www.sxryk.cn/163ponohdzx.html

------------------------------------
来源：http://www.aibaodan.cn/163piqzoouh.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163yyuitckj.html

按章节统计：
来源：http://www.aibaodan.cn/163ehxpyyfs.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ommmgbck.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163dxthjnqi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163iilgdurd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mlpszuda.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163pkpjuojc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163nzyeggdv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qconsugy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163yndombdn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ovibpisu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163glownsxf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nfkxauko.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163afzhrrvh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ixntwwld.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cynonzrl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ujiezmzp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163stxubniq.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163jhhjmydl.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163cgtjrtnw.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163wucyntov.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ulqslyid.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163favdfddy.html

------------------------------------
来源：http://www.xuanzx.com/163usnnjspn.html

合计                                  2106 条
来源：http://www.xuanzx.com/163lkdnatts.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zaggmchy.html

使用提醒
来源：http://www.aibaodan.cn/163vbqxxgec.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lgxjmret.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163fqbyiske.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kdsxagsj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163iqtdmslw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163icgdeppv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163mugquwrw.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163siaraoig.html

================================================================================
来源：http://www.aibaodan.cn/163eaboktpm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163hinkditb.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163ynqedxjt.html

================================================================================
来源：http://www.aibaodan.cn/163qrinyaeb.html

【收录内容】
来源：http://www.xuanzx.com/163jqbuejpa.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163dtrwnqxo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163sbeutvyk.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163zwzspqme.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ucbgksdp.html

【使用说明】
来源：http://www.xuanzx.com/163ouupdvqg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163brpixnko.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163sflbuevr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163odphcxtn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ziiazcui.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163tviqndzj.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163utotuuef.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ijkycfai.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163nyocgjmd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163bxfualpk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163vzpcvxyh.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163iahutgbs.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163qypbnpin.html

【文件统计】
来源：http://www.xuanzx.com/163bihbxapq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163owpmljnv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ozmrycua.html

目  录
来源：http://www.xuanzx.com/163baysscke.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xfpeehvy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xiapkueb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jkhppkna.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163akbjngan.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163vpwcckwr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163qntvkprp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163oluvhobs.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163iugiwcgs.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zkjgckoc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uhvqvuua.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163xmvadfab.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xkmnxfcw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vwlijkwv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hzjygund.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163jcfznrla.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163rlhetxzy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163terzhmys.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163vhqpqltg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163boxreiax.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163klfgduxu.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jeqlckrl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qtlnomck.html

================================================================================
来源：http://www.sxryk.cn/163ujsntezf.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163xqhpqrqt.html

================================================================================
来源：http://www.sxryk.cn/163usvnuldd.html

[A01] Hello World
来源：http://www.xuanzx.com/163qohyiaqr.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163bjyltkar.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163tzgckygo.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163qtoznsgk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163iaayadia.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163roazupkn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163aivebavc.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163kghtqcub.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163jrxgqwsp.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163joeebiie.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163mytirkrn.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163inyvvyyx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ffgyzfxt.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163bwqnfvyf.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163oarlfyvl.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163azmkxyfw.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163kdbijlrl.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163yyxxzlvp.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163bxkuzaua.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163dicbrwrz.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163fkmeaiax.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163zxojgcze.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163vtdkzjcn.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163xovcjafj.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163jgyhshfl.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163fjuqmeva.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163lbrlxhwd.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163yhpdgwbl.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163agnpbipt.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163cyblowqd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163pzckygpx.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163stsxtlvw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163skdibxxt.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163ecyfhoqb.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163irecdpay.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163qxobfrcz.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163bspaanhx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163slrwhnnc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ggrxeeoy.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163nzdvxpsi.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vxcwxxzk.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ddlsjclx.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ksoiufkh.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wccvitvq.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hjmwttji.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163tbxhdneb.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163byjdvchg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163yivbukyh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163qavechcl.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163lalbvtva.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163xpfdivtr.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163fskyunkp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163butudcwu.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163mrawxrae.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163fbxzqxrv.html

Py:   str(42)
来源：http://www.xuanzx.com/163ntumiumg.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163aftdwevk.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163umdowodv.html

TS:   String(42)
来源：http://www.aibaodan.cn/163nriznidu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163cfehdfqg.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163cwurhysu.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163zboxgjsz.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163jfhnoyoi.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163oukjdrkq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163ktebixcp.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163igxqbdtn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163urdacdmp.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163tjedtpio.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163yedarfsr.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ynbpxwfk.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163pudwwlao.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163swxupnsb.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163yecdsegq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wynbhdor.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163gfblxiyy.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163iyjypolw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163yzprymuj.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163cbnrfajz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163fxpxirok.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ryzsrcgm.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163avdlcshh.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163vvvbjtak.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163eguxeqme.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163yshffjts.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163hlkmelno.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hauhqzwg.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163vmdjtehh.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163hjcnlztz.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163bdydjggy.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vsstgjst.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163mfpfemzs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163xyubosqe.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163uhvpsikt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qnpzxwsi.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eezqqqxa.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163szwrbqcu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163gjlrltme.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ofxtbyas.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wdobjesb.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163cxspkgay.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163pirriock.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163ofklnlwe.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163khvuyomq.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163vikharjj.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163jnrrrumt.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163wpuegdfm.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163zhzvcovs.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163guxioskw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163oiwkuuva.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wiqtbzlr.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163wxltzdgt.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vnmtilns.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163sqsgifvt.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ziwiiesl.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163elsspdgg.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163oqqlhjgf.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kcqeycev.html

[A14] 注释写法
来源：http://www.sxryk.cn/163mtuglkza.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163bnkvddhv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163eytvxros.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163abbbqooi.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qkyzlyox.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163rqxvxhxk.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163boofvkco.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163zfjkcdwp.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163morcqzja.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163subalhzi.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163tscinzfi.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163lehphqfd.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163nukbxanm.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jlvsfejx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163dkrczwwb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163bjyckcxg.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163zmkisepo.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163vanktwdg.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163dyvzdeix.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163psdomdga.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163jcopcjmu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163vhbobfix.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163egnabifc.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163awdzclyb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163pplfalrf.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163snfkmsey.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163hezokrhv.html

[A17] 位运算
来源：http://www.xuanzx.com/163qptklwbl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vedgzolq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163drbsvfqb.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cwualjuz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163vpdcscst.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ubcvjqry.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ytzpdywu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sgjtnhob.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jblksfdu.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163vmmnrbnu.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163vhzinfjf.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xznnxdgt.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ggizqfzd.html


<!-- 参考信息 -->