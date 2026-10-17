外链999!wailian999！

[U105] JS：节流
来源：http://www.xuanzx.com/163qehswffe.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163uhxvzsrq.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163opxuccrp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163firbhkvq.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163mnweuxeh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163lpoqryqb.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163hmdfizrp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163voaxudes.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163yiwfqglu.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rkwtecpz.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163grldifna.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163xkktlebh.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163tilocygv.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163zjukhupw.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163dvwtmdsq.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163uzoeijkc.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163kwfbiplh.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dciwitkb.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163zgkmqtvv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dvhsjhgg.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163piztlzvw.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ufxyaxkw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163kcjxaxnl.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163kbxyzlod.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163xletumkv.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163iyauhyuo.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163befynbkt.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163atlfgwhq.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163drbvrovk.html

npx vite build
来源：http://www.xuanzx.com/163xuznddub.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163frppotax.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ohmnctlt.html

================================================================================
来源：http://www.sxryk.cn/163qdnesvvt.html

统计汇总
来源：http://www.aibaodan.cn/163cnhkxtiv.html

================================================================================
来源：http://www.sxryk.cn/163kdntdcpo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163rveklhrc.html

Python ......... 252
来源：http://www.aibaodan.cn/163dmitjctt.html

PHP ............ 252
来源：http://www.aibaodan.cn/163qhwfqsni.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163rkgibhwd.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163yrbxtdqz.html

Java ........... 212
来源：http://www.sxryk.cn/163gkvjdxkd.html

Go ............. 212
来源：http://www.sxryk.cn/163loiuovjh.html

Ruby ........... 212
来源：http://www.xuanzx.com/163rggbgfbd.html

C# ............. 212
来源：http://www.xuanzx.com/163ejchrzlh.html

C .............. 30
来源：http://www.xuanzx.com/163ufdmnels.html

C++ ............ 30
来源：http://www.xuanzx.com/163tojceggq.html

SQL ............ 90
来源：http://www.xuanzx.com/163eedwkwju.html

Bash ........... 80
来源：http://www.sxryk.cn/163mkxmlzrk.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163mcsbcgpy.html

Swift .......... 15
来源：http://www.xuanzx.com/163kzgoamex.html

Lua ............ 10
来源：http://www.sxryk.cn/163iwasoecb.html

Perl ........... 10
来源：http://www.aibaodan.cn/163iqvkufqn.html

Scala .......... 10
来源：http://www.aibaodan.cn/163arsmnvym.html

------------------------------------
来源：http://www.sxryk.cn/163xskezefh.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163xiejfgtm.html

按章节统计：
来源：http://www.aibaodan.cn/163tgprbdww.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tkgsderb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163oulphncc.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ujzrchwv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163frbjgpzg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163lfxftysb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163nuztvnpf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dnlsaeuc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163akusrhzg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163karfnxoi.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163otjovgtt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163lgljmbzf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tsrhuavu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jcauzyek.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163winylabk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163vuzqcwtx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yxjframa.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163lvfheuxj.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ikirnebu.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163bsitnqjg.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163mggaryhh.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163dwjwhcqu.html

------------------------------------
来源：http://www.sxryk.cn/163hnvpuesm.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163dcyoqevo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163sbathuqg.html

使用提醒
来源：http://www.xuanzx.com/163hdrqibnz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hnvwynbq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163ypdsznju.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163ojuhtaiu.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163fnuhyolq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163emivhmbx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ogdgeqfi.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163soiuwtnv.html

================================================================================
来源：http://www.xuanzx.com/163hbictaqn.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163tndgoybn.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163nugxxgmn.html

================================================================================
来源：http://www.xuanzx.com/163oicewlyt.html

【收录内容】
来源：http://www.sxryk.cn/163oksmdhqi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163nqzqzmxs.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163bjeqzmzt.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163chwecjye.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163mojperrs.html

【使用说明】
来源：http://www.xuanzx.com/163xqbarubr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163jwmxuzae.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163xnpuispl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163bscxacan.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163vpgliici.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163axnrnzic.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163nowevtwg.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163eojqsupj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163wuqpwdfe.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163xrztzhmu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163mmvujwfz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163thlcgtxl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163mtjmeorn.html

【文件统计】
来源：http://www.sxryk.cn/163yjbropqg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163kvhnovep.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hsdftqxn.html

目  录
来源：http://www.xuanzx.com/163rrfekenf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jtrjdsvw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tbzdurhg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163olbwkcke.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163kbglirdn.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wfnsdrfa.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163yrjqjieh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mujnxihr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zxcslcsj.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hdmbsnia.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ctrndcus.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ypiodxka.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pcaheiaw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xcruranu.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hxbcdybt.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163yyrqwwxh.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163uovcmcvv.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fhcwgpbg.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163aavlkhyn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163jvpjresq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ubhgblqs.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163bwkrllsl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163zzqmvisw.html

================================================================================
来源：http://www.xuanzx.com/163bmcqtqem.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163rcqdbckg.html

================================================================================
来源：http://www.xuanzx.com/163txbmeuyw.html

[A01] Hello World
来源：http://www.xuanzx.com/163ovybetan.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163iaicbofn.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163xntyzxpy.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ldbhxyhe.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163krlhxsrz.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163fchixoru.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163bwfvdjep.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163sdndmfwd.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163empcskdt.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163tkezofso.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163rszrrfnl.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163bbxnwvit.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163lpuxxqvr.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163jkonakvd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163itvtafug.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163repufdkg.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163tnoxtook.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163zpfjfqzf.html

[A03] 常量定义
来源：http://www.xuanzx.com/163elrfthnu.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163varqmpvm.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163qpaoezsj.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163evfqxofm.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163giiirvtj.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163uswhpxki.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163abajmnlx.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163roiwbcws.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mdcehzqm.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163rujztflp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163aejulgnz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163xlhgecth.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163zplmgpdg.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163qkhpjpze.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163srgcbmvt.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163umyctoah.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163dhfxirdu.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ohohcfyf.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163irmexexh.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163ukcsoldb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163wgtuggco.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163nktupyul.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163fonipsml.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xvpzypfh.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163uzazgziz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163rhrbctde.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wicjefht.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163mqcdbsma.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163nwbgqbqn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163vlrthtqg.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163ebtoklmy.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163gjdhqxfb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163raiasjnz.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163qbkbksfw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163lnfghopz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163islkzvqo.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ltvodyhh.html

Py:   str(42)
来源：http://www.xuanzx.com/163jbazqxnr.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163lyjifrhf.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163lbyxmiab.html

TS:   String(42)
来源：http://www.aibaodan.cn/163qglflivf.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163btoohktb.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163usidpris.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163plshpben.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163cjfotojt.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163kumkrsre.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163gqnmulcp.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163duttkqaq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163xlerjlpu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163qaosxpgp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163vwiqxfhy.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163hydwqbev.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163cyynuvbi.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163scaqdrrn.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163mbadoxmd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163fcrnojku.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163gewjtwoh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163nfqywrfg.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163prerplno.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163kyngdzqh.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163xczforsj.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163okcsdeju.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163wmmttjhr.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163iekigekx.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163cyffyprp.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163ttuddsci.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163gikjuclw.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163hqaprtra.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163jhfjlzya.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163swbvfscn.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163fworjjqs.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163llnilqbx.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163gulyqysy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163tllmojjp.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dakhdyjn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pmosjhod.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dhmfvmhc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ltprlxfm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163irfhuayu.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uewcbeln.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pqxkfnjs.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163aewplcec.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163kefcgpns.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163uwslwocx.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163tbomfrqm.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163krprjxmb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163bodplfpq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163jjiabjun.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163qgnutrin.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163cytdmbgk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163hifxynir.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ovisnbss.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163ntbxwdpc.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fxzbaerf.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cprcdfbi.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163pgysywpq.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gxlwjtaz.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163twldeupb.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vqbjtrml.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163iszgjbpv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163faftoufo.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ypuzjtal.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ffvwlrxe.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163smtlkbur.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163oegexqdh.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163glmlhcqm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163mqxtregz.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163yzsyumzv.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163bhnpopbb.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163grligeou.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163zpkucjlu.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163hqfrhhwm.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163bvvjalqe.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163lcmgjrae.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163amvwenpu.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163eqlxuikx.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163bzwbvpvt.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163mytnbspc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163rryncjka.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163jdknvyil.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163vegpthjj.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163giqqagow.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163snrkjoyf.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163wkybrijk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163adclfkld.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163akrnzqdj.html

[A17] 位运算
来源：http://www.aibaodan.cn/163mzxsaoxn.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wdjpiutr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163xixampin.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mjusjjpi.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jncunekd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163riczdflx.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bodapotn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nfwhhstu.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xlgsxcva.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163pitpxikm.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163raodhaoz.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163tvuvbgpn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163hkdvjgtk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163olzcffbv.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163liewuosq.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163cfiryqxn.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163pulvekod.html


<!-- 参考信息 -->