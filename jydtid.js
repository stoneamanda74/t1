外链999!wailian999！

[U105] JS：节流
来源：http://www.aibaodan.cn/163zlqqxbzt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163lietyfce.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163vfyjkgro.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ksssahni.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163motkuceq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163dpjsiyeb.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163afmcciwl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163auqcnoio.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163sxvtsrha.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dmdpkkmc.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163nncuxohp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163rnutgdkw.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163dnostkpq.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163hlfkyjkx.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163xvbptnyf.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163qovethtd.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163zkmdhgzw.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163carongtm.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ijxxcvzx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cofzixcy.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163glwvemud.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163joydvcjf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163nzaetlgt.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163yjnzywzw.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163mujgdknl.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163nxztqoql.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mrsphpnh.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163gugazvfd.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163vcmxuyby.html

npx vite build
来源：http://www.aibaodan.cn/163ghldymab.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163uanvebtk.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163sirnusqp.html

================================================================================
来源：http://www.aibaodan.cn/163akwixtbk.html

统计汇总
来源：http://www.aibaodan.cn/163rzezzxkq.html

================================================================================
来源：http://www.xuanzx.com/163qlnoiozb.html

按语言统计（条）：
来源：http://www.sxryk.cn/163dfmxcves.html

Python ......... 252
来源：http://www.sxryk.cn/163cihxttgf.html

PHP ............ 252
来源：http://www.xuanzx.com/163plmbbmfa.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163nleczrya.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163bwccpzpr.html

Java ........... 212
来源：http://www.aibaodan.cn/163zwutobjr.html

Go ............. 212
来源：http://www.sxryk.cn/163kitihatd.html

Ruby ........... 212
来源：http://www.sxryk.cn/163wlijzzpz.html

C# ............. 212
来源：http://www.xuanzx.com/163fimlawsy.html

C .............. 30
来源：http://www.sxryk.cn/163ulgembkd.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ypvefxvp.html

SQL ............ 90
来源：http://www.xuanzx.com/163cnhgwrpl.html

Bash ........... 80
来源：http://www.sxryk.cn/163smmqccjz.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ztzzvjmt.html

Swift .......... 15
来源：http://www.sxryk.cn/163uqflmwih.html

Lua ............ 10
来源：http://www.xuanzx.com/163nakhercb.html

Perl ........... 10
来源：http://www.sxryk.cn/163laygiquh.html

Scala .......... 10
来源：http://www.sxryk.cn/163ezzvezip.html

------------------------------------
来源：http://www.xuanzx.com/163cwbzstxx.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163dsumaeqd.html

按章节统计：
来源：http://www.xuanzx.com/163acrjlfvu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pxwcdqzb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163exetwrfy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rnpzcvym.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mxsagkoe.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163yetririm.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163axpumvps.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163nricqfbf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tgckccep.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hvenffae.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163kmvbvvac.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zeeoipkw.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bubgnqle.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hvxckrmf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dzicbfbd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163umglgwch.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gnreiyhw.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163rptndfbc.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163apnwfiys.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163eogxccni.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163vflwnvfi.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163tzjabjjl.html

------------------------------------
来源：http://www.aibaodan.cn/163ughisvew.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163qsjyitcg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pouzrosl.html

使用提醒
来源：http://www.xuanzx.com/163lgyjqgvh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qgojnqta.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163uztunaqd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163mcrxzzpx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163lbzaybgx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163hldnftvb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163eqkgjpzz.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163bvtyzlwv.html

================================================================================
来源：http://www.aibaodan.cn/163czdsfkqn.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163mlffmvvd.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163wrqaxjlp.html

================================================================================
来源：http://www.aibaodan.cn/163ngzkzmeh.html

【收录内容】
来源：http://www.xuanzx.com/163rxhzmama.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163gafddhdf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163zycbhnbq.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163wikvpocl.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163zrmcuwgm.html

【使用说明】
来源：http://www.xuanzx.com/163liqwydkm.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163vwbexwnw.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163wdkdfewr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163jsxbwmuk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163xpeypwko.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163pxwgkabg.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163aeeztkvy.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163pntpqyqz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163qwtublvl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163mnznfpwc.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163xikvkmix.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163xzzelraa.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163pwsfanrs.html

【文件统计】
来源：http://www.aibaodan.cn/163kldafcvm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163oupdtovz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mnivpear.html

目  录
来源：http://www.aibaodan.cn/163vlhfkzpg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yubqzpos.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163uzextxja.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zfaopqhd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163iggarkkf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ygifqnpx.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163nvdsagxp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163pmxuesnw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163rlpgkaor.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163aiximahl.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rcwebmwe.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163yrpuwvad.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vnhaweou.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163patjvlng.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fhraklsu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163vzfaelgk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ieziggyc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fwplclvj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163gtsiqrjl.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163rxgmjqfp.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ybxwvbkk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nbujdogj.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ykpaakmb.html

================================================================================
来源：http://www.xuanzx.com/163ixusitkq.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163wzixczev.html

================================================================================
来源：http://www.sxryk.cn/163kksgdqtu.html

[A01] Hello World
来源：http://www.aibaodan.cn/163tiyqcnnw.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ihttazat.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163lnvhbtpo.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163onglcjsj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163yuibhyvw.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163rynhxhcd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163ohpewift.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163mlpngsnq.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163axuryjux.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163itmnnmhz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163ihmcaqam.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163crsuqxzg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163sjpmagnz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163lsqlkjtv.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163aordyenj.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ebpjsomj.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163objuvttd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mgvtgffn.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ahbbffmc.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163arzhaqtr.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163rjftsfvm.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163iquylnax.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ygbntrwx.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163hkeymzgn.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163eqydhhkd.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163kjebbcds.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yrkioamb.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163dtshixzl.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163hqabefww.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163aerkmpui.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163loyqdlyz.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163pbcamrur.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163tbkvnszb.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163szumcwqv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163bxbqsfsc.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163wblwyqzw.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163zlmykvej.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163efxeiuxq.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ubmghvlm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163cejuyrst.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163lkxrtgnq.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jiayrali.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kshsavfk.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163metohcqw.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zjsnzysy.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163hfbupxpm.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163jaimvkjl.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163mxgdbsyi.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163igrronus.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163zvbruabn.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163qxgxiyak.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ztpkhvjk.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163qljbugfj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163xfyrgbme.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163nbfuwunb.html

Py:   str(42)
来源：http://www.aibaodan.cn/163mwtoealw.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163yfcuuxqn.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163cwhnzxmb.html

TS:   String(42)
来源：http://www.aibaodan.cn/163rifvgzcq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163eqzgfoxi.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163lsoxeafe.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163sxkvakrl.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163adakecnm.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163bxqsfsha.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ysghpmaa.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163zenfyhvi.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163dnvjotor.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163haxtwgbw.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163fydrdoao.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163yjqtdfjy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163mvsxkkif.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163czemxvav.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163kwiibdlk.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163favhbefu.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163gmpqkcpd.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163wzaofzet.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ubpuofwv.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163cksqbkfr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163iajpdwwo.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163eybhiyxv.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163hkztuydx.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163nopzlpka.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163ksphwudt.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163fjadwtdc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163caofdezj.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hfhxvgtm.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163jpzwkoud.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163czjbwque.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163jzucsjed.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163notmlfxv.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jsjduyhv.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163jljqpblg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sqvywjtt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fsbbvukf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qrzlrdsa.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kbafyyvr.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163hrhsqndb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qaiwenpt.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hozhcayj.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163aqrdgcut.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163tzeuqnsj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163drocvmnr.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163klvhpomb.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163vywgslxt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163vvaknezg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163hdphsthm.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163dnducorm.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163gfpuspyu.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163wdsymsed.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163seaxofcb.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163zbknqkru.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xrivnonv.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gzejsoqx.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163wfrmrlmk.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jbmhjdnm.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zymwvruy.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nxyilvcm.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163zafjxdkj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163lbwicuip.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163xhrblbtz.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163orflgwyf.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jsauxhzj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163pfvkgyok.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163rqomjjqk.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163gdckorle.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163enkhlxmz.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163hfzqaqrx.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ftmuwtqr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163xwsvvtxz.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163syoqxxoa.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ucvbxugz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ecqousmg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163xbiwtabk.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163pyexegvx.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bkcsdirq.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163atczrioc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163hnlpjqrv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163yenbopbr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163dtzowfzb.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163hjquavpj.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163sugmatzp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163kshrgzxz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163nkmdssac.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163spslwqjs.html

[A17] 位运算
来源：http://www.xuanzx.com/163rccyeovf.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163riwvarau.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163uevodldh.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rkgojeuh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163itrgholx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zaqqmdvg.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vctrhwef.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vujevlto.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tihhifyp.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163vsgvjkgn.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163bwyiueaj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dktalqio.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163apnahhgq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163jrpbsjvp.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163xutbvqxi.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163oziifrmu.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ccnixnwl.html


<!-- 参考信息 -->