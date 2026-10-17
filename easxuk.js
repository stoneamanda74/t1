外链999!wailian999！

[U105] JS：节流
来源：http://www.sxryk.cn/163boumgfjv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163aqdyepjp.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163lzqgotrf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163rtvlhpqp.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163pvebyfih.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163pxbfmmlm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ayktxgqs.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163cjbhlrmf.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163urpdojjc.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163pgwdnnfh.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163nvbshrwe.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163johkcsnu.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163skvdpqvi.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163uuoadfeb.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163bmyjpidn.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163vvjirehx.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ecqpkulj.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163awvqplen.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163zmiugprf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163azxafhrd.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163jcgsidfh.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163mppaywry.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163tnwmauer.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163rgivphbx.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163uuerskgs.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tjgqdhhx.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163jttwegqj.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163oeloxorc.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163qdjbqoeq.html

npx vite build
来源：http://www.xuanzx.com/163aqkvpceh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163zdzzxics.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163gbetedpx.html

================================================================================
来源：http://www.xuanzx.com/163yocwojmn.html

统计汇总
来源：http://www.sxryk.cn/163verngckx.html

================================================================================
来源：http://www.aibaodan.cn/163paboagon.html

按语言统计（条）：
来源：http://www.xuanzx.com/163deuxhxsk.html

Python ......... 252
来源：http://www.xuanzx.com/163vqhcjclv.html

PHP ............ 252
来源：http://www.xuanzx.com/163zyjlrvvx.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163xzuaitgu.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163pgwtgvgl.html

Java ........... 212
来源：http://www.aibaodan.cn/163hbubluub.html

Go ............. 212
来源：http://www.xuanzx.com/163thpanbof.html

Ruby ........... 212
来源：http://www.xuanzx.com/163zkmtzjnt.html

C# ............. 212
来源：http://www.xuanzx.com/163kxhxdukq.html

C .............. 30
来源：http://www.xuanzx.com/163dddmnlsy.html

C++ ............ 30
来源：http://www.xuanzx.com/163ympzzfxv.html

SQL ............ 90
来源：http://www.sxryk.cn/163okcvuxva.html

Bash ........... 80
来源：http://www.aibaodan.cn/163bngjvpcl.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163knladfoc.html

Swift .......... 15
来源：http://www.xuanzx.com/163cgousaqm.html

Lua ............ 10
来源：http://www.sxryk.cn/163mnvdpmoy.html

Perl ........... 10
来源：http://www.aibaodan.cn/163gmmblzaf.html

Scala .......... 10
来源：http://www.xuanzx.com/163uuafnsre.html

------------------------------------
来源：http://www.xuanzx.com/163neeprkux.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163hvbstxyn.html

按章节统计：
来源：http://www.xuanzx.com/163lnfwaeaq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163vhreyetl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163efbmrtvy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vfahdpqr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fqzhetet.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163kqnqxtxm.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163bpbmvxld.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qbwoedir.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163worhusrz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kygplngu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163naidhtta.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qporahyk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163scjmzrnb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163erhiswyi.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163kqzpcrfq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163bidiwbpw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cgrvmhpa.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163rtdzvvpo.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163hklejbdd.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163uifhcxsg.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ahnkjysg.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163piwhlbot.html

------------------------------------
来源：http://www.xuanzx.com/163gpvytmqh.html

合计                                  2106 条
来源：http://www.sxryk.cn/163kqecbjmf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lsruznbe.html

使用提醒
来源：http://www.xuanzx.com/163xcpppclf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tkuoakzg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163xwzagzkl.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163yafnehbj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163yzeqmvlo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163lyajesbb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ikwnzwqk.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163bjmydxbo.html

================================================================================
来源：http://www.sxryk.cn/163jtujyegb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163frcoefqs.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163abkcchcn.html

================================================================================
来源：http://www.aibaodan.cn/163qrpuyihc.html

【收录内容】
来源：http://www.aibaodan.cn/163neicntwo.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ympbovzx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163uggnncym.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163urpwlser.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163lowgvxrh.html

【使用说明】
来源：http://www.aibaodan.cn/163ogkomdxf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163dprwodwk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163nvblekqi.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163uyzluvdq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163upakpyke.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163fmaoacvs.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163pkagtxbe.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163emqtzplu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163wjvvsimo.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163wmwfnfcf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163brrzntah.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163fytywrfs.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163qheacrfh.html

【文件统计】
来源：http://www.aibaodan.cn/163eceihtym.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163mevnqniq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pxtoccit.html

目  录
来源：http://www.sxryk.cn/163mrqfcxce.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ryptngxz.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163btjzhxbj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vahuzkue.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163alflwgff.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xqncyczw.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163umoedviy.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ocitsguf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ofwdayzy.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163rozqctrx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163oovahdqy.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163rqqojxgc.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uiihebnp.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pmhqhkgu.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xjhefejw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163umhlhsls.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163onhldvjd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dlnwtvam.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163tzptthcx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163usclnpgu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163kiducpho.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163lxsoawaf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163uiqlkzrl.html

================================================================================
来源：http://www.xuanzx.com/163duwcsgtn.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163puniphrj.html

================================================================================
来源：http://www.xuanzx.com/163bybwgvli.html

[A01] Hello World
来源：http://www.aibaodan.cn/163opaxuqda.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163txtmwxxs.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163fwbqsosn.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163drqbepde.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163gkdkbklr.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ikuggogq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163rtswwapd.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163qpasqgtt.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163flyykdwa.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163pmdfdelv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163mssllkqw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163wxvzeory.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163xkknbrob.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163toctjisj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xxxjjkjq.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163pnyneqjl.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163fabfolfg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163vavlufyw.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163atobxogw.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ddkpqpda.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ljnlgmqg.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163afwsweop.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ycmnmgkw.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163fdyhzlwq.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163askixckg.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163wxbaajeu.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163pnheqodu.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163wlvtynqs.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163qzjukmna.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163xxpvtpgj.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163sbqicumq.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163ygssqkgg.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163qwohgiuf.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163kthnaevu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163nwplxpeh.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163pmtaspkv.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163worxwcjb.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163kzqhkktk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163mcyezash.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163hadlqgjs.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163wepyqtyv.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163sqgxvhax.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163cpoqvgin.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zzffemve.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fcegfgky.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163fsnynnwx.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163rbpoelqy.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163ahwhaagv.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163nvaxqsdy.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163fdltzasu.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ktswevux.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163aijgejvk.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163yybdbemr.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163kouacbor.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163ukntqtyp.html

Py:   str(42)
来源：http://www.aibaodan.cn/163dpjimiop.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163otxcsgiw.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163koxdzxmx.html

TS:   String(42)
来源：http://www.aibaodan.cn/163webgbrix.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163ayoeysno.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163gzxedzzn.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163xjucyoqh.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163btebmzfu.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163coiugmhc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163wypzelme.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163frfjmocn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163xykovney.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163xozgedty.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163xdzopaui.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163vekfwhkp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163yokmezda.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163pfdgqzrt.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163jhsrqgyu.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163oaxnpmqt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ikayfadj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163omguoosu.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ztklazvg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163arwonhco.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163vadrnkwf.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163crjmylkg.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163lkuqpmuj.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163pcixutth.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163vcbjvyzz.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163fukogdiy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163enkqjykv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163zhvwejhz.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163tuofmmcv.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163wjipcmls.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163ixyjhand.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163vdunayeq.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163lbupedmc.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163ejcbsbac.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163omybrort.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163eapnxthp.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gnbwrjje.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hkxajhan.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163kjcttbrb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yjkurpru.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gekwkvze.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163nuenfgcn.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163kbadejxz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163bluggxzc.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ejmxsbfd.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163uaakaadd.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163jjhqadxl.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163isplfmcd.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163btqkpydx.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163smzbnmfj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163eikrmges.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163asgxrgrf.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163nkbxctfo.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163pzpasfrj.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hljainbq.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163isniacba.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zwkoyldk.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ixoivtgf.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163swipaafd.html

[A14] 注释写法
来源：http://www.sxryk.cn/163posufgkx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163vqraihyn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kvjrgnuq.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163grmobybo.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tggweyvg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163uakeqfry.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fsiurilf.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163otbuabds.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163oaszmnyp.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163kwvcrskj.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163fccshant.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163nndenvcv.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ufyuhqdw.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jrstcfjb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163nzvhthqi.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163xbniyicz.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163zqxagnly.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163zjzepvrk.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163sjgftdyi.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163ijhabwym.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ewxopfmq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163rvuefwlu.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163gsxqgfqh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163jexfzauf.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163sjzdvoux.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163nfxpmnvk.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xjeykrrr.html

[A17] 位运算
来源：http://www.aibaodan.cn/163oylrsvol.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mbosbmxm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163jswyonhp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163budofcsl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163puvalsks.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hdztedbt.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163przgkyyi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vqbdwwqc.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163esozrawq.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163gxjoonqn.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163elgmemlm.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163nihwuhxx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zsamasnb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163tewojrwr.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163cmcbselc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163yewkrizj.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163yetjqdhb.html


<!-- 参考信息 -->