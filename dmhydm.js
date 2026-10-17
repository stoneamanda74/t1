外链999!wailian999！

[U103] JS：定时器
来源：http://www.aibaodan.cn/163safeixxi.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163wcnbhfye.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163bxkfxlzn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ffihonnp.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163pjaqzplf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163vvbwusvt.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163llcosqah.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163kdktwqxi.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163jlnkfxvr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163dxygdnbg.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163vmsmsszb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ukzdbbxg.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163cntvtcpc.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zdeqveop.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163kxayivox.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163gkmbmsrn.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163iscjgquo.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163cjybdbew.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163zwmqkqay.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163gapepbdr.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qukhruxl.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dbfdyjic.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163lmwyxpwi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hiypjcka.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163wpizgjlb.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163pjdrnthw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163sklsvuxl.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163gooabbon.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163fvqqujrj.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ayczyuqb.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163eeswtleb.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163kgsxyucb.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163dkbshdgd.html

npx vite build
来源：http://www.aibaodan.cn/163xatzuvnx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163olgcvofj.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163imrfwpjl.html

================================================================================
来源：http://www.aibaodan.cn/163iglvmthv.html

统计汇总
来源：http://www.xuanzx.com/163ysxvkctk.html

================================================================================
来源：http://www.aibaodan.cn/163rrqienme.html

按语言统计（条）：
来源：http://www.xuanzx.com/163haeowfjk.html

Python ......... 252
来源：http://www.sxryk.cn/163tcuecqvq.html

PHP ............ 252
来源：http://www.aibaodan.cn/163fruapsou.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ftduvebu.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163wzjnmcza.html

Java ........... 212
来源：http://www.sxryk.cn/163ckgrwmtk.html

Go ............. 212
来源：http://www.xuanzx.com/163lhamihcs.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ranbclwr.html

C# ............. 212
来源：http://www.aibaodan.cn/163slmmuolz.html

C .............. 30
来源：http://www.aibaodan.cn/163cxowxdxn.html

C++ ............ 30
来源：http://www.xuanzx.com/163nkbpwqaa.html

SQL ............ 90
来源：http://www.aibaodan.cn/163uohfolrk.html

Bash ........... 80
来源：http://www.sxryk.cn/163wfwkwtlv.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163qicuowfm.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qzevlezp.html

Lua ............ 10
来源：http://www.aibaodan.cn/163gfmglneh.html

Perl ........... 10
来源：http://www.aibaodan.cn/163mktymfvo.html

Scala .......... 10
来源：http://www.sxryk.cn/163kgdauyta.html

------------------------------------
来源：http://www.aibaodan.cn/163pyxtzrqy.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163itafxlgh.html

按章节统计：
来源：http://www.aibaodan.cn/163uammpbsv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ltpigjdd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yogckplx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163erdtvnnj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qnfhubis.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163jicetvfq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163kxxacojf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163scbppnfa.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163rqayiczp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163sucsjeiu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pjqhulln.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163iegdsnfa.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163edrqbkjh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163aqolugvs.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ktukqxsa.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163dxqfjmnz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163sdfpojot.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ebphkvka.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163gzgfddhz.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163msxmhmwj.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163gqyxjfmm.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163hwnfrghn.html

------------------------------------
来源：http://www.xuanzx.com/163cxrycspn.html

合计                                  2106 条
来源：http://www.sxryk.cn/163jlnlisli.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hnalfija.html

使用提醒
来源：http://www.aibaodan.cn/163fnesdlex.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xzkuxyet.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163dqwiciwy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163pkqocbjt.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163dzcqbcin.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163enpkehnj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163zwlhvmxl.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163pxizdjmb.html

================================================================================
来源：http://www.aibaodan.cn/163phytuylr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163hanfddor.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163iwdskcau.html

================================================================================
来源：http://www.aibaodan.cn/163ezylezco.html

【收录内容】
来源：http://www.aibaodan.cn/163wevnzsdt.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163mwszyhym.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ovumowxa.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163msjkjjvc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163tfdnzdsx.html

【使用说明】
来源：http://www.xuanzx.com/163croqdeut.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163dyqxvuza.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163fcmatihj.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ktscqdgs.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ncpqlhqy.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163axkqbmve.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163awsrgytg.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163pxfvlptr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163kwdkrbpl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163rptylslk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163yeljdkhq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163vgaghgxw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163kfyrlsqn.html

【文件统计】
来源：http://www.sxryk.cn/163xmdatemk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163bburcczf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qwjqvfas.html

目  录
来源：http://www.aibaodan.cn/163vyabugds.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ndsmeksn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xyboiysj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163jfclujdr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vyxfkmpt.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163zxntwjsl.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163cyrapjzj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163kjsoihkw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163efthpbch.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lgmiscnb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ycorgmwp.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163hngyjpkt.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ogzzzaha.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zkodayyd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fzrnjynp.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163asdlrnyo.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163uodhosay.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uyyzkpif.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163cqghvjkn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163wddxmsll.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163rakdlykm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bfujtdvp.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wzuckmrb.html

================================================================================
来源：http://www.xuanzx.com/163frnqkrmd.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163aetntkkb.html

================================================================================
来源：http://www.aibaodan.cn/163wghhgtzd.html

[A01] Hello World
来源：http://www.xuanzx.com/163dzxfmnwr.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163ciamltxe.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ghrobvcx.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jbtiapgy.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163etnfkmyc.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163begeybom.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163wbidoudq.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163qumxifsr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163jwhxkepg.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163iggjjmku.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163fxsynluc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163jqfmgohs.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163rtkeigmd.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163ceuikyer.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163uipnotxz.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163wbzhbpcg.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163mlackgzj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rhogoaon.html

[A03] 常量定义
来源：http://www.sxryk.cn/163lghwhnkn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ktppdyll.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163tczjovgx.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163vfdolgvh.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163bwjvpzkk.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163kkliplke.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163hntlbvtm.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163vhrsovzl.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163vvdvwzaz.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163vcmlnjpz.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163bnhbmcgr.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ppljthvu.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163hmzltyxv.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163szurdwun.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163jrhiknzz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163nighwjhb.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163zqdcrehl.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jdkjiyrp.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163vzwdmxgs.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163unslxhsl.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163qpnptzhk.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ryqvkpjj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163drxyvjcz.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ceismmdv.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163iolprgqb.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wuyoogit.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fnmwzywm.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163yzghqgqi.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163rjknhqcb.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163vdmzuezd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163qkaeyhbf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163zlvwbcoc.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163qevubdir.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ybrgzbwm.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163geebbbkj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163bptnganq.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163wlwrtbbh.html

Py:   str(42)
来源：http://www.sxryk.cn/163nthbxfvp.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163clprhekb.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163bkhptrna.html

TS:   String(42)
来源：http://www.aibaodan.cn/163kdxnzjuu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163xuxrpuop.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163nhgkbdwk.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163jpiriryy.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163sdhqouwf.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163yevvsihe.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163kmeftpyz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163kalkztck.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163buqcuact.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163pnsqveiz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163twpqukdh.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163cngupjzn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163jbnonlxo.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163hebnmglk.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fuescrig.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163jkxyluyt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163jqrymroi.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163dashmahy.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163patsovuf.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163xlnaljid.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163jwrkumbz.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163zhvuxawm.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163qibjttph.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163blalkiil.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163tpxaueac.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163wyxsesho.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163vwhhacxn.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163iaphdygo.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163adzvxasc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163ghytkzwa.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163lietzrie.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163bdylaoeh.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163qxwtwoba.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163mlbzurci.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163avhzamzf.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lezgwrev.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mgblaqgi.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vcbhunqn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163opibozkk.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gfenqxpo.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163plrxavfu.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163phhbzezd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163rbmxvmup.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163xtjddudw.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163yiimnnqj.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163nalnkezv.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163nqyjgjgr.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163detjzfzg.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163yzsnwkth.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163vdrmsoeg.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163snczvsne.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wcnmdnpz.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163gksvqwdp.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cyepzysy.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ljleteht.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163hrrpdglr.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cjtivddm.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163catqfzar.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gryfyqqy.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163owrnhiqw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163qdzcqrwk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163gjinetma.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lcjytvtb.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wxutzmvm.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163jyjmtpvi.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dcuwxxhw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163hqvspnvm.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163grvqvust.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163uovpioqr.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163tdjgnygl.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163gvuydwbu.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163anainyky.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163nadmokuu.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163zpjsulvt.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163jfuwwfsr.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ijshrrbu.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163mksljnmx.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163kmgkqkgf.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163eznwfepl.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163vbhsxkyd.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163vgbppkwq.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163fpfvziha.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163srailsef.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163ijbyswev.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163rhwjutlt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163jlsrurer.html

[A17] 位运算
来源：http://www.aibaodan.cn/163agsdtcyy.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163iuhvvtpf.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163fijcafyc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lmtoemcc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163pxickfxy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163detvbaql.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wmoaofwz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nlovirps.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163eorztpiw.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163hznlcrzk.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163cbdrevuh.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163thyfffqd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163bontdrwe.html


<!-- 参考信息 -->