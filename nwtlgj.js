外链999!wailian999！

[U103] JS：定时器
来源：http://www.xuanzx.com/163trzqpisy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163eteuptvt.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163njrcmeuh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qfjahwrh.html

[U105] JS：节流
来源：http://www.sxryk.cn/163xgpwhuse.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163naisdsij.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163lckpqbto.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163xgacigkw.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ypvpkwbo.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ztwqsfmh.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ggoccina.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ghtttiac.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163sbtgpfgz.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xqygmrhn.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163nvegrxdg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163nejzorag.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163jsikgsdp.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163enamolrx.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163nqjhyoug.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163mknnumpm.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163cifbwutq.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jvnljltw.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163bvwytpfd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163yrzsxmia.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163utygcgar.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163pwtnsubs.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163fvevlksg.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163vaovzavj.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163nqvfmnfb.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163epuvsety.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163mwydyxvh.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163myhwufeg.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163lsnfnzdc.html

npx vite build
来源：http://www.xuanzx.com/163gfeqjorb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163gyhzwedz.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ngmbnqtj.html

================================================================================
来源：http://www.xuanzx.com/163opssjjne.html

统计汇总
来源：http://www.aibaodan.cn/163kppjiaao.html

================================================================================
来源：http://www.aibaodan.cn/163wuvzfxlw.html

按语言统计（条）：
来源：http://www.xuanzx.com/163pnbkiejw.html

Python ......... 252
来源：http://www.sxryk.cn/163fftxkrqs.html

PHP ............ 252
来源：http://www.sxryk.cn/163vftkszyo.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163eryabhml.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163qmtseevm.html

Java ........... 212
来源：http://www.sxryk.cn/163xjaregoy.html

Go ............. 212
来源：http://www.aibaodan.cn/163ogauynvd.html

Ruby ........... 212
来源：http://www.sxryk.cn/163zqsoafdz.html

C# ............. 212
来源：http://www.xuanzx.com/163lzfhtlvi.html

C .............. 30
来源：http://www.aibaodan.cn/163hahdlegv.html

C++ ............ 30
来源：http://www.xuanzx.com/163voohxmxm.html

SQL ............ 90
来源：http://www.sxryk.cn/163ttrmukgv.html

Bash ........... 80
来源：http://www.sxryk.cn/163vdfxulnt.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163pbdvbmlz.html

Swift .......... 15
来源：http://www.aibaodan.cn/163xmsksgpl.html

Lua ............ 10
来源：http://www.sxryk.cn/163tfnonryq.html

Perl ........... 10
来源：http://www.aibaodan.cn/163bsurrphu.html

Scala .......... 10
来源：http://www.xuanzx.com/163mdivphjx.html

------------------------------------
来源：http://www.aibaodan.cn/163fhpiowsl.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163jtzgpfpn.html

按章节统计：
来源：http://www.aibaodan.cn/163ssgjokiu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163uyjpebxo.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fboatnfv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gryrrbvd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qowupmjn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163thubybwa.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xrjdimbp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163kjddwant.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163bnqnrpfo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163isnfqdfp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163yrlturmt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ovlndlkf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163icvubgqx.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tteyjsdw.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163tkvcplpn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163jdqbymsh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eibkuptg.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163pxudkwkd.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163kxaraiwh.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163vshshisk.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163myjcasrh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163llxysykp.html

------------------------------------
来源：http://www.xuanzx.com/163nnauddct.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163dhjnrbxy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163borurotz.html

使用提醒
来源：http://www.aibaodan.cn/163mnkzchro.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163rrqnlwjq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163gzqaizrg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163okvhawlo.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163sbwrhgig.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163jkenfpbz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163nlzoxqej.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163dsaykamp.html

================================================================================
来源：http://www.sxryk.cn/163gdnnsabl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163qvjphnkl.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163amttckmr.html

================================================================================
来源：http://www.sxryk.cn/163jcblnmsc.html

【收录内容】
来源：http://www.sxryk.cn/163cqwxbaip.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163fdmtakaq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163wlwshlrr.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163hfswmlly.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163wkqtyabk.html

【使用说明】
来源：http://www.xuanzx.com/163bxezycre.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163eaghctmd.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163cvetatby.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ownyelad.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163uzfgzavv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163uknamcmk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163dneqltyw.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163ddoufkqe.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163lllwlnwd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163rdjkxsrn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163cufihhel.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163sdfbfnzf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163iauxumxl.html

【文件统计】
来源：http://www.sxryk.cn/163rnchixjf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ilwiftop.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163csvilmei.html

目  录
来源：http://www.aibaodan.cn/163ngmhustr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163tlcmhubh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163irpkxlle.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163pedouyua.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dwkcbguy.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ueikdrvl.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163ufivevqr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163kwefqoue.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163recorqik.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ksdykjli.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ayqoicpx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163otxglgbe.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163bwqerozp.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kbwhvcwv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nmaxpcas.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163fgnzqapf.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163qqqvdmzl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ojygpnvn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163vrskebic.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ykutbykb.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ooqhjinu.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ngdsewop.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163gmcpjwis.html

================================================================================
来源：http://www.xuanzx.com/163gcvxtlhg.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163gycbjtng.html

================================================================================
来源：http://www.sxryk.cn/163rgdsikzz.html

[A01] Hello World
来源：http://www.sxryk.cn/163vpcfutsy.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163morfgnrx.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163rpthwiry.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163znkicayx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163xqptttxd.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163eyrdjjja.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163jvxykcls.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163dnhczdcw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163usjjalsb.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163tdnbaigu.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163akbedqfx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163ublkucoq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163hxhqzzkk.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163cjljavqu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163aomdopxg.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163zqjrediq.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163bvqephuw.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163glmmagcb.html

[A03] 常量定义
来源：http://www.sxryk.cn/163sftnngdu.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163amvateej.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163fylljags.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163hebazbhq.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163tljjdvwm.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163pnciuxyo.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163kwzwtoew.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163exwyhgwb.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163pnjjwhpv.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163movaytyn.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163swlkwrnm.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163jtcmtjnp.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163kxrlugpe.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163jzoybesc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163ctabprep.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163qtiwztyk.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163kjztqfch.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ajxkbqpa.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163jtyrpdwf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163yiintgmg.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ndbxbusb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163yczsfmzb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163czeqypdp.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wxohpezc.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qiizktdv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tlbsghep.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163copxkenm.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163zfbqefqt.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163myvzrkco.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163unqmotww.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163xtyqeyxt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163knmiozsw.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163bqxwmsst.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163mhxpibzh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163kmwebbfy.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163tbabnxkp.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163aelbcbhj.html

Py:   str(42)
来源：http://www.aibaodan.cn/163qregvkor.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163aiwllshz.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163arazoius.html

TS:   String(42)
来源：http://www.sxryk.cn/163lohiajty.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163gldjqfeu.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163mekbriqi.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163unkkbejs.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163tfzeiuex.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163lfuuafnw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163vamnnclp.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163tnzfvhqq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ktmhhjfi.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163erfziyht.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163zmdyanuh.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163jzubstiu.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163tfiajswx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163xehboqdt.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163chnjlkhu.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163kryqxngd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163cbgnstam.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163yzldalbv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ftlcbgey.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163nlbqyfve.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163qkjgxfiy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163cydgtmwa.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163xbtqmvwk.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163fdgcrvxx.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xjjbobhh.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163vqguaxlr.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163eqctjdhi.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163bxqnvzit.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163ycbmntfk.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163ndpnqoqj.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163fpjhosny.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163gsnnljxh.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163zqeytqcu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163pezcxyim.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sxqfmwta.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hynowpks.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pvglnbyu.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163euorffpt.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163yxnezqnt.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163otnhfzum.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mugrxkpn.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163fjnnwwfe.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163tuvalvmm.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ltfthjzv.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163oxlwrqie.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163gptuxpsb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163mogfqacg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163vslkggwq.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163rfvtvknn.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163ozncopca.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163tkocenru.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163kwsofqec.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163hbmituxu.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tmebosmv.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kdcwzkmn.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163ivpxtzvs.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wmsvhneb.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163rdfvjwjr.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zzrnaetl.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163qsclpdvd.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163fopzjsna.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163aggcygog.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163uuzhybwb.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163yrfqqrno.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163mrycbwqx.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163heuspzmu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163rkgxlbdo.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rthodiox.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163sanpawuf.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163ozkuhcgg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163mbejpgnf.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163osdkfqui.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163jjylwuwe.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163bcfcohuu.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163vknlclpl.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163qqlllxbr.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163oqlkkoxz.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ppzzzxdt.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163mqrijrbu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163dpvojsbd.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163zxlsijar.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163mccrcgol.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163xzcrdfgw.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163wawbjqwq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163xpdeexja.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163uywfdcis.html

[A17] 位运算
来源：http://www.sxryk.cn/163ydqtvlfp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qpqkerzm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163gmvntfah.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163naygpamw.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163euzhrcdt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163exeoxhms.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163udkgsjxn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zdjkoieh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wyiormui.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163gefjmhle.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ktisfqyu.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163rgmzuxnu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163czanzsmq.html


<!-- 参考信息 -->