外链999!wailian999！

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ujuyccrh.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163auteimhe.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163guxpaqgy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163tkbqxemz.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163qnwxyjeu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163pobdujlq.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163aqgkbacl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sigddnwv.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163lavlvcak.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163yntwiuab.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163omdvyzyf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163pvzrymhe.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163jxczkkdy.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163bgpivtee.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163yuhiyjcu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163kdxrdlmh.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kumvirek.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163yyignqgc.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ksrbejpp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163rugftnit.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163poaatzom.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163emumdvmg.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163laczxqps.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163skssuuki.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163qcluwlju.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ymmqgqvl.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163htporwgz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bomtokvm.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163hfvpqvfx.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163jqisfbbk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ozlzmwar.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163azenujzm.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rggbhwpz.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163qwtqflus.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163srzpkinc.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163fneyfwmb.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ojgkhhqn.html

npx vite build
来源：http://www.sxryk.cn/163dylkmzyn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163txhpzdtv.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ltacxcso.html

================================================================================
来源：http://www.xuanzx.com/163gyvzoezl.html

统计汇总
来源：http://www.sxryk.cn/163fcjcrjth.html

================================================================================
来源：http://www.sxryk.cn/163yfvprbao.html

按语言统计（条）：
来源：http://www.xuanzx.com/163hyazkjhu.html

Python ......... 252
来源：http://www.sxryk.cn/163rzgcvipr.html

PHP ............ 252
来源：http://www.sxryk.cn/163rnvnyjmz.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163akfjmcjq.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163vsvtzasj.html

Java ........... 212
来源：http://www.sxryk.cn/163ztqnkhme.html

Go ............. 212
来源：http://www.xuanzx.com/163jhshelkf.html

Ruby ........... 212
来源：http://www.xuanzx.com/163yrlwtewk.html

C# ............. 212
来源：http://www.aibaodan.cn/163qncqoebz.html

C .............. 30
来源：http://www.sxryk.cn/163laxowven.html

C++ ............ 30
来源：http://www.sxryk.cn/163lhahlpmi.html

SQL ............ 90
来源：http://www.xuanzx.com/163wykcblce.html

Bash ........... 80
来源：http://www.aibaodan.cn/163vbibxyyb.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hsyhysio.html

Swift .......... 15
来源：http://www.xuanzx.com/163olcvupjq.html

Lua ............ 10
来源：http://www.aibaodan.cn/163hvrdjwpn.html

Perl ........... 10
来源：http://www.xuanzx.com/163bxnoqvot.html

Scala .......... 10
来源：http://www.xuanzx.com/163aixiszun.html

------------------------------------
来源：http://www.aibaodan.cn/163wyvslygl.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163lwjqarpm.html

按章节统计：
来源：http://www.aibaodan.cn/163fcqwkxpq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fowgbkny.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163yoojsrqd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163seoiumfx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163abdswvxy.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163cliydkqk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163fiordunn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163eirriqev.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hgoeyiwy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ezllaghf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hofbhxjt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163krkveogu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zlmigtop.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zsspnbun.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vkqgkbpx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163nxyxsvya.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uprygdiz.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163apqxeguk.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163epkdussx.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163qtpvynhc.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163lnfsvdai.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163jpjejhtz.html

------------------------------------
来源：http://www.aibaodan.cn/163cikaqnxs.html

合计                                  2106 条
来源：http://www.sxryk.cn/163vrxtxuaw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dsrmeeet.html

使用提醒
来源：http://www.xuanzx.com/163jrrcpeqi.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lisioznl.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163raibuehx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163bybqqqtj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163fjbopssq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163wtyssaic.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ebiomqcr.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ckyukhcy.html

================================================================================
来源：http://www.xuanzx.com/163rlnddzwt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163lotgpsqj.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163njbhfcos.html

================================================================================
来源：http://www.aibaodan.cn/163asjvhqdq.html

【收录内容】
来源：http://www.xuanzx.com/163ysddqqzg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163orkxyyjm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163zejxqgox.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163dqajgcil.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163emicwylv.html

【使用说明】
来源：http://www.xuanzx.com/163scwwwsjo.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163peziihrt.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163wzeyyhzq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163hpwwfggf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163xmqkzdee.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163wvkwogho.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163uwjfofcv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163uafshtla.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163jerdztdo.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163hjjgatzr.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163oasntrqj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163qbdthubd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163aggnqlil.html

【文件统计】
来源：http://www.xuanzx.com/163airukfbw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163qhlblfhs.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jwncbzwv.html

目  录
来源：http://www.xuanzx.com/163cnjktdma.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163apnjmyad.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163bhhjoqgc.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163oatagoby.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163jmzkvscy.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rmpedevs.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163oovdhupz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163hlusrnfn.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163nnqbozot.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ohuiazad.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163oakxbdar.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163wbazbnmb.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163haihpmbw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ntsapfna.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gctgnuvu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163smuynbdm.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163hwptyjxe.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jkjlvszg.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163vcomcqni.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163qcvqrysz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163vmcsctxk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163rsodrycr.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163llfkqwsu.html

================================================================================
来源：http://www.aibaodan.cn/163iwmyvsos.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163vxhiviei.html

================================================================================
来源：http://www.aibaodan.cn/163jmfddstp.html

[A01] Hello World
来源：http://www.aibaodan.cn/163nxwjjlxu.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163wcbqlwwd.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ihzlveja.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163anadiuds.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163hlijtkan.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163dttnmzab.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163usmfqope.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163udybylkv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163exalxtve.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163xszouogc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163jyfwpyxh.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163amrszbao.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163cmhagsog.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163uzpfzkix.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163xwaftvye.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163gltcminf.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163uisfpdeg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163olwfvxcd.html

[A03] 常量定义
来源：http://www.xuanzx.com/163yrejezhn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163xssgvwjn.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163vlzqrzdz.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163vtibpusx.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163rksxaofd.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163iuiigegk.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163gfzjefql.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163iwejrkqf.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vvhwrlyt.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163bsnmldgi.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163khvgvqin.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163cpqauxjp.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163cnywfdxf.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163exxaikst.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163qvfsbqsa.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163dqsxzptr.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163wvauoxar.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163fqxlftzh.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ongdgnhw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163idhgvoqq.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163uifbmwwg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163bhifvcnz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163jvqfxybr.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mzxsfeoi.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fzscfjjg.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qpvxgwsg.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xhqtxivp.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163afhzhxxy.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163lllvikjo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ohcnccca.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163wszxulsi.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163ojrqqzjq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163pgohucjv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163srglifaz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ennthgce.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ljgngpif.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163vwoigvmu.html

Py:   str(42)
来源：http://www.xuanzx.com/163ulldazmb.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163genhaypi.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163utjmkwdi.html

TS:   String(42)
来源：http://www.sxryk.cn/163llrqviwm.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163oobzygad.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163nuzcowid.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163zicjgpnj.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163uqkanetq.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163dyqmswdh.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163pipikzly.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163qiyffdrk.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163clcggpft.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163ipisamxq.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163itnkbfrs.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163bklbyrsj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163wabufhfy.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163absgakyq.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163dbzhcjmu.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163xitolgqi.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vtcjumnt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163bgsokyvy.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163uppxzlyz.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163yuutlajr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163rsucqmsg.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163htnngbud.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163ywucseru.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163nrappojz.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163aorxtzur.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163vpzyqkgn.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163odzyasxp.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163cyafpumr.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163rfyzresc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163bshitwxe.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163ikoviddz.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163ombiqkzw.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163fxaolhkv.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163fqtqxvfj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ouspexiw.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163flerhevc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ysgqurqj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tqwhseht.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163fvyvzdgd.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163azbysgvo.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xyejehxy.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163fyhdkxll.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163gbzkqsaz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163fbhjtxzc.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163prxnwjjz.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163fypxtrtf.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163xadxgjhv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163mekpsjlb.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163whtigrie.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163oxefucfn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163cngircnz.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xgmkomnm.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163igzmsabk.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163iszraiir.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gvraxpqf.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163aukzhlrt.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163iyuovcaj.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163lqjdcteq.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hygbsyhb.html

[A14] 注释写法
来源：http://www.sxryk.cn/163lxwniceo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163rsutozdr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163imunwglj.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163iqspfehn.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163miniavmc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163rezrzovh.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jytooekx.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163zzgrioyn.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gjziqgvt.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163skelxaea.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163nvqtbrvk.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163yhczcowv.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bjfdxwfv.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163txnrpdxh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163vdnqepnw.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ugqforiu.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163bcwirfpv.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163wkgjauhg.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163kvytzfry.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163nrptngcu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163htxxzptk.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163czmpaokj.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163kusenfcy.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163madzbzul.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163gsixyjlm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163hkvfhijg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163bqdnrebn.html

[A17] 位运算
来源：http://www.sxryk.cn/163hgmxclss.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bhccybra.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163gjbojdnd.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tzndkkpa.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ubqaylrq.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163npqfgxaa.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ylaaukyn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vefsdzmh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xjikizgy.html


<!-- 参考信息 -->