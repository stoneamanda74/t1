外链999!wailian999！

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163irvbgmbk.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163yswrdoxf.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163dyhmplfx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163fdulmeec.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163xwchtmlp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163tcycusvd.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163bfgzohaq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ziilwhhg.html

[U105] JS：节流
来源：http://www.xuanzx.com/163urgqgnqp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163nysqfapu.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163knutiqpn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163asoybwbb.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163usmivitj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163gdvkpcla.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163wykfajtg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163kbnditjf.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163zgcybkjj.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tpxeqqkj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163onlbfbry.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163jjwhphnt.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163mnapymmd.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163qjrckojs.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163oavyxslf.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163xtodcdlf.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163dxoffmlq.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163chxetzzo.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163gprntxyu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jwuxflde.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163xibglspy.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163oqgefzhb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163tfnglpky.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163xpxslfje.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163irhgtdry.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163sngsudwu.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163sdswowfg.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163xjvyotzo.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163apqnijbc.html

npx vite build
来源：http://www.xuanzx.com/163hquktcgv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163jujgudzk.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rqcerguh.html

================================================================================
来源：http://www.aibaodan.cn/163hoqvmnvh.html

统计汇总
来源：http://www.sxryk.cn/163ldlpmtow.html

================================================================================
来源：http://www.sxryk.cn/163fzcufyhy.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lwmpxael.html

Python ......... 252
来源：http://www.xuanzx.com/163xxantews.html

PHP ............ 252
来源：http://www.aibaodan.cn/163zpwopzxs.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163wyvndluq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ujnubpct.html

Java ........... 212
来源：http://www.aibaodan.cn/163qpohzdku.html

Go ............. 212
来源：http://www.xuanzx.com/163dipwsygd.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163oioywjsz.html

C# ............. 212
来源：http://www.aibaodan.cn/163rhfgckaq.html

C .............. 30
来源：http://www.aibaodan.cn/163ykrnguzb.html

C++ ............ 30
来源：http://www.sxryk.cn/163xjryvfos.html

SQL ............ 90
来源：http://www.xuanzx.com/163mgcfcbun.html

Bash ........... 80
来源：http://www.aibaodan.cn/163srmekjna.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163zbvhwbbf.html

Swift .......... 15
来源：http://www.sxryk.cn/163scqaavxy.html

Lua ............ 10
来源：http://www.sxryk.cn/163gppfqiza.html

Perl ........... 10
来源：http://www.aibaodan.cn/163njqrbwts.html

Scala .......... 10
来源：http://www.xuanzx.com/163dlczmxlf.html

------------------------------------
来源：http://www.xuanzx.com/163mwjhiinm.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163nmbipzex.html

按章节统计：
来源：http://www.aibaodan.cn/163jqoyyfqy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tuokyyvw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163buhfghpi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mrezlphz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163fmdykzbk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ihsirvmb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163skdrdatq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zgpixmom.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163cikdrhme.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rhpwsmcr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163hschhopg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163oanwhauc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qhbwmgls.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wbyljzgv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163byrtlyli.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163unzojjoo.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jtsiceck.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163eqhjhhav.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163dzbfqlwd.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163uabefmbh.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163clohzsxj.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163hvhfkjxk.html

------------------------------------
来源：http://www.aibaodan.cn/163nutrbmge.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163zrrxhavr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163respukcv.html

使用提醒
来源：http://www.aibaodan.cn/163wcwjsovc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fkjcmmnx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163koqtufvm.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163mmjbrthx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163rtqealdq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ipmqxdao.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163edwvlczp.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163rrjfawks.html

================================================================================
来源：http://www.xuanzx.com/163wluvgyeq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163vrgmqybg.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163gbjlmebr.html

================================================================================
来源：http://www.sxryk.cn/163qttiovan.html

【收录内容】
来源：http://www.xuanzx.com/163hglrnvqo.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163sferwksu.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163zkztcrse.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ctgoysfu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163kdlooeak.html

【使用说明】
来源：http://www.aibaodan.cn/163wuyrwqbf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163swyworoo.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163bkiqftxg.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163xkujazzg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163pwtrytow.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163euekhaec.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163joabaeop.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163txgvnybh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163zlralqqu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163tuqefzgy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163zlpdbevb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163wpzbamwt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163tydgkniu.html

【文件统计】
来源：http://www.sxryk.cn/163bhbifpjz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163qvknmobm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ardpxgzr.html

目  录
来源：http://www.sxryk.cn/163mpfdihbc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ixodfcuf.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163yslbnpdr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163thcjgbco.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zdxmlnjo.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163djjqucjr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163aosaqezl.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163qvakgffy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163husvzlgq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163gwjqplyd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tqjyevqn.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163lhqvjuqy.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sbfsjfiq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pacntfyk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zhojqrhw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163oelyyavs.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163bfysxvbo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yssnjtrx.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163xtwiyocd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163rinpuofj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163jsnxtdbw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qhswjkoo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vhxszxjz.html

================================================================================
来源：http://www.xuanzx.com/163afcqtftt.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163gucrlfvf.html

================================================================================
来源：http://www.aibaodan.cn/163bewqodrd.html

[A01] Hello World
来源：http://www.aibaodan.cn/163iwcqsswg.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163dohubjej.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163emcgyhpy.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163yqcemslu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163fnpoqxri.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163clzxchuw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163gxpkblhw.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163mmhxfyqk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163agtelayv.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163naujssev.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xohrdaiw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163rgqhdpqk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163lllyytff.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163edpixcwl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163sjqzshoi.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163nvaykfkt.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163evmriltd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163sopmlqvu.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163phoqklfm.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163yhuttbgs.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163hhixpirb.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163veonysia.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163zkhethzs.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ysfjwhuv.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163cuorbshh.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163vqfgwjis.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qtgunutk.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163tivevcvb.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ybzvlmvr.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163npgsczka.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163znqqcnvj.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ocgxpznf.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163bfcccffo.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163mcrrzvou.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163ermsffjr.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163cigmynqs.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163qyvzjzts.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163ywkdmhmt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163nxsxwafw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163rhvdrdyd.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163iniblqju.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163olljazwf.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163oodfomdz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163cgxbumyk.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hsjfmtpk.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163lbmjcirf.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163hyxybrou.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163laxtcoij.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163dvyitycm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163rndkiifl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163mxnkjzco.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163omkajpzz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163iiwzlzlp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ilzqivon.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163zqsunzlz.html

Py:   str(42)
来源：http://www.aibaodan.cn/163lhlhqyba.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163kqkkjadm.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163sejkkcxh.html

TS:   String(42)
来源：http://www.xuanzx.com/163hqcbqocb.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163bplmsngz.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163yjpwlqqz.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163lrnmdjpw.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163dgtmapwo.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163fpuhqmgi.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163djbearug.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163gokdycjd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163wnyahine.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163wytlvdno.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163zljbwvyo.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ysfjhekf.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163pemkfrgf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163jaqmimtx.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163cymrngvl.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163mpikfwnz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ztqplcea.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163mpibfomw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163mlvsdiqc.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163mfxbxlsu.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163cobzbcev.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163uhudhvmc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163chpgvwoo.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163ekkrdrtl.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163skvdzdxm.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163ucsnpxxd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163wrthfeeg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163rxsdtodw.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163lczaaazf.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163dlfvzydo.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163swcpsiin.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163dxtjtbmc.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163nybiwafu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163yxorumws.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sieazntn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cubmxwyz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163muwtdvyz.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jtwupyak.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163izjayjwu.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fbtbwuys.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zkfuwbyx.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163rlsuodvd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163dqlkwtzt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163cincxksd.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163otxpnsgf.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163lkvvjmtk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163cuyecptb.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163cdcakqyi.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163mrmesazy.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163mbafppcx.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163khqbcrrj.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yjubidpb.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163cqdsglww.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vyfoutlg.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rrmxfkew.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163xrpzjeyy.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kepsgvgv.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163wipjpruj.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rpgnggwp.html

[A14] 注释写法
来源：http://www.xuanzx.com/163rumiwcxv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163wrybkzmt.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163kbjfugoj.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jtrwqchy.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hxrdzuni.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163flvyhdxt.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ztarwxrz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163nsnjoiio.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tuthnjta.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qxkaldkh.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163ovttulye.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163tiyflwyn.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163kumawuip.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ussdqyer.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163kmrkdkmc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163laadeuvd.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ztnwtodl.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163wjjrmbfi.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163pludtily.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163jioqatwe.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163dpbrcvdf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163ndzkvcwu.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163xczprqea.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163sgjehtyo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163tyultphu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163bihnoqpa.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163nrvhmuew.html

[A17] 位运算
来源：http://www.aibaodan.cn/163fkwehvoq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zgnrorwi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163wbchvrsh.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kqrzmcvp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163uqmqhivq.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rvlvrncz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163szxxdbwi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fgegyxje.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mxmueyxj.html


<!-- 参考信息 -->