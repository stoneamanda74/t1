外链999!wailian999！

[U105] JS：节流
来源：http://www.sxryk.cn/163olpldrct.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163mqobzcuc.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ohfgvrpt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163zdklviiv.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163qnzbywgz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163aeayfitt.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163vuflwcor.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163aznfxgme.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163rqnrpvze.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ttjnxxey.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163xrxmtiaa.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163dhggajvb.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163dsymfetn.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163wtkuimpc.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ugzqzxjr.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163cmuqlera.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163rwlzbtyq.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rhtptfdf.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163myguckhh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163kiqzodty.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ufttwtzr.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163sezrrvyb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163qpvlfmwy.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163mvvjkwke.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163etgbpakm.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163iuwqolbp.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163lwnpfrjc.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163bkhljgir.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163iyylbdpv.html

npx vite build
来源：http://www.xuanzx.com/163vcfxnifa.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ehksofqv.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163nxcqsjgo.html

================================================================================
来源：http://www.sxryk.cn/163herslnni.html

统计汇总
来源：http://www.aibaodan.cn/163fhvqukqx.html

================================================================================
来源：http://www.xuanzx.com/163zcpfpkxh.html

按语言统计（条）：
来源：http://www.sxryk.cn/163mxpztnrr.html

Python ......... 252
来源：http://www.aibaodan.cn/163jlzlkfio.html

PHP ............ 252
来源：http://www.sxryk.cn/163umchzmur.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ysudaiit.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163gglisrel.html

Java ........... 212
来源：http://www.aibaodan.cn/163vivczyji.html

Go ............. 212
来源：http://www.aibaodan.cn/163eweumxsv.html

Ruby ........... 212
来源：http://www.sxryk.cn/163gzqmcxar.html

C# ............. 212
来源：http://www.xuanzx.com/163ileeeubm.html

C .............. 30
来源：http://www.sxryk.cn/163kgpvnjbe.html

C++ ............ 30
来源：http://www.aibaodan.cn/163hlqpxyfi.html

SQL ............ 90
来源：http://www.xuanzx.com/163yzqsydpu.html

Bash ........... 80
来源：http://www.sxryk.cn/163kqswubvd.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163inshxfrn.html

Swift .......... 15
来源：http://www.sxryk.cn/163rbdpchbu.html

Lua ............ 10
来源：http://www.sxryk.cn/163vskaztph.html

Perl ........... 10
来源：http://www.aibaodan.cn/163nhstpxsa.html

Scala .......... 10
来源：http://www.xuanzx.com/163yhpifhvo.html

------------------------------------
来源：http://www.aibaodan.cn/163wjxtxoxo.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163anrywsko.html

按章节统计：
来源：http://www.xuanzx.com/163esceejvl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ecakkzvn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163bhyjzygu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163otszluxr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xvgxhkdm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163xcuqgbli.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163sgvoudbt.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dtoolkyc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mmyqzgoc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163glqduhnx.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163nteykmlj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pryzeouf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163znodzkue.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163slnpcvsh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163bzmzdhxr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163qoinuzno.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pptafdvr.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163dpetuiee.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163kyzsypqt.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163aemykgmw.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163pihoastb.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163wwatedxf.html

------------------------------------
来源：http://www.sxryk.cn/163mbzdvtzh.html

合计                                  2106 条
来源：http://www.xuanzx.com/163cdoismyt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ndlijqzg.html

使用提醒
来源：http://www.xuanzx.com/163jmqtraxe.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bvwdfhht.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163jintssze.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163pvjeoctl.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163xjcaklok.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163hvualnzb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163hzgqvdjh.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163xudwftrl.html

================================================================================
来源：http://www.sxryk.cn/163zyluvqrx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ffqtzsts.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163sluvflig.html

================================================================================
来源：http://www.aibaodan.cn/163mpayzcmh.html

【收录内容】
来源：http://www.xuanzx.com/163hgdsncna.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163epjqnqvb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163sowilusg.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ophmhgzp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163tlwihgqf.html

【使用说明】
来源：http://www.aibaodan.cn/163xlezdmtt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163yxsodjid.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163aktshkkn.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163bsbgylhj.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163rlebjayi.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163xikfixnq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163dkdzkwra.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ghhrrnrq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163peewwrgd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163gktlperw.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163dtcunwla.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163rvolupfr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ubgdxvwu.html

【文件统计】
来源：http://www.xuanzx.com/163nhfqyxmj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163geemenju.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163krwnvcwt.html

目  录
来源：http://www.aibaodan.cn/163qqgegyyo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zutpzzvf.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163jjfrvybd.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qhqftlxf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qbxjabot.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xcyhhyan.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163yfncsnnm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163sqqaawpm.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xootcbpa.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163qlcndhgv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163bytsvxiv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163honxhgvl.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tqklsjxv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gakskmuy.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wodbnptu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ajvadhsb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163vsidfros.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kmnxfigu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163hcunfont.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163hnupqsdi.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163brouzzke.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163scwwbxuq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163scjmyfkl.html

================================================================================
来源：http://www.xuanzx.com/163cuzoomsc.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163fbkzlitr.html

================================================================================
来源：http://www.aibaodan.cn/163kgyqkjjl.html

[A01] Hello World
来源：http://www.sxryk.cn/163idforpup.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163ejpxtwqt.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163sdsqwhxx.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163cziplkwa.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163iorgunbh.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163yktwfiit.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163jiksiufa.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163bseckcjk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163aqrmghps.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163maqgkzqv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163rdcmzsci.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163qbbkswby.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163uakrdkhd.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163lxulnglu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163eddcygvb.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163xuqywrzd.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163kslncelw.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qsjvfgyc.html

[A03] 常量定义
来源：http://www.sxryk.cn/163clhiiewl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ccudtpdz.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163vlfjjuuy.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163rfanpeyf.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163bjzmrdcg.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163pescepho.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163fqkupyyk.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163nhwuakos.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163tnezrtyp.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163enesamtn.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163vraghhln.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163csifwahc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163jmhkqlaj.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163inirctux.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163gbmqrupa.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163vxrohdja.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163newjfgsj.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163hrhhnqrw.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163vewlevwd.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163ydwrtbin.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163psacnrjx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163voxzsdnp.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163usyebtrz.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sxwisluw.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163uilizrcw.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163emuiuaoi.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lkwebbqb.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163zoebbibm.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163enfdxfvo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163zouonxon.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163ssoaoxyb.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163jwlchfjs.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163uafmsqer.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163qtfxgzce.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163lavvpajk.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163efasswnj.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163ciujwoch.html

Py:   str(42)
来源：http://www.sxryk.cn/163xxzkcysa.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163vobmfity.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163tfplmfyt.html

TS:   String(42)
来源：http://www.xuanzx.com/163lzkeffqg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163gdddmqnr.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163hlolpkpq.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163wjqezwpd.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163zmlakoyp.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ycgxlseq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163vwdfecdr.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163odkctvyq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163pcialias.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163eqzaolyt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163wkgysdps.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163eflamtkn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163hxyqvcpd.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163uygavqdy.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163uzssqupf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163xdzcskbg.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163atwewofr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163ufdtcngr.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163xfxtrsvq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ujranlqc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163tncxsptw.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163aguovses.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163spzxzqok.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163hnxkvoax.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163zkolgryc.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163cruibvde.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163kfhqipzx.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163rfterlgj.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163qpljnevd.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163mghrsfjn.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163qwkbgmfo.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163xjetsbrz.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163kxjgazbw.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163vecjedxx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ojtdqrix.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hjqkvvni.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mepigrwp.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zxjcipvu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163wfkpotiq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163otdmhwor.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qomcedbh.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163crjgsyem.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163aajtnlxg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163bxthcopv.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163luskcdkm.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ugobcxug.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ykcnbmsx.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163xwkoajuz.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163qpwamdko.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163mexesham.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ggaxkied.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163chskcsfs.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163tsvylemd.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ihnvftll.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163onkbppnx.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163jcwkmcas.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zyvunkxv.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163xshteqvc.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ebxxypjt.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163buufukxm.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163itxsoets.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ouaolkqa.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qqclvtct.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wrfgjshq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ooaoqivg.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vvsquncy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163gphwkbvt.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zgueoano.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163nejftszx.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163iuqzdrlr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163mwtiiszp.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163waihkjji.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qzftfpjg.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163ddkbmyxx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163abngfltl.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ljezlkdx.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163hqvhsgmc.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163grkgtakz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163rowfzslk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163gbkyjhsb.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163sdwwjdhq.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163tjgmkxzb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163cwbylhee.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163dznlrdmu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163hmdbseca.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163judwgbmf.html

[A17] 位运算
来源：http://www.aibaodan.cn/163ljvxbldh.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163suomeuud.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163doonwwde.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uymlmlqa.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163exolzatq.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cwjiyxwh.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kodvnxlb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zrhnyhpj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bvusdkbs.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163wxgmzrwa.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163mmtlrweq.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163ivlwcgyq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163fisvxkdk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163tdednfao.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163mvkeqqct.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163fjehieha.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163tupcsdrg.html


<!-- 参考信息 -->