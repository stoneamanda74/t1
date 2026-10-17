外链999!wailian999！

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163wlqcehkn.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163sezsiiur.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ldtwacxx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163dntqrpbd.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163mwbyayuy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163hqimlnzm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163kujmyikf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163snbgebuy.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163atskwjwl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ioibvofc.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163povyhcpx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163zhdfjoui.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163zocwasfx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163sjyjtnjg.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163vtegmvxm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mtajirda.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163iuxnwpef.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dtahculr.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163snrfkaxm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163iatgelxm.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163rfocwvir.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163wnssqter.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163bvuvblwe.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163kticihke.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163yukfcspw.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tygighqt.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163hsqnxmfg.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bnsnbjyb.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163dwuibzgg.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163kmpoumxo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163nacblghh.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163cfunyyqj.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163rdhwwnck.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mbosrihn.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163kflmwrun.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163hfusdjdj.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163bwsoiszq.html

npx vite build
来源：http://www.xuanzx.com/163isywbyzo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163mhuozhvl.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163zapkndtw.html

================================================================================
来源：http://www.aibaodan.cn/163dnhlspjh.html

统计汇总
来源：http://www.aibaodan.cn/163ziznxhvs.html

================================================================================
来源：http://www.aibaodan.cn/163xmwxmtvk.html

按语言统计（条）：
来源：http://www.sxryk.cn/163djmqergx.html

Python ......... 252
来源：http://www.sxryk.cn/163owerwwgp.html

PHP ............ 252
来源：http://www.sxryk.cn/163efxopkmv.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163rbxhufkh.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163gpmmlwmf.html

Java ........... 212
来源：http://www.aibaodan.cn/163itgxnmqi.html

Go ............. 212
来源：http://www.xuanzx.com/163dasfesqx.html

Ruby ........... 212
来源：http://www.xuanzx.com/163rudspozw.html

C# ............. 212
来源：http://www.aibaodan.cn/163gzaqmzos.html

C .............. 30
来源：http://www.sxryk.cn/163jncrduez.html

C++ ............ 30
来源：http://www.sxryk.cn/163wrtwixuc.html

SQL ............ 90
来源：http://www.xuanzx.com/163tkknctcy.html

Bash ........... 80
来源：http://www.xuanzx.com/163gthjzmtd.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ayskrqey.html

Swift .......... 15
来源：http://www.xuanzx.com/163hgjquoyt.html

Lua ............ 10
来源：http://www.sxryk.cn/163gwsuftem.html

Perl ........... 10
来源：http://www.sxryk.cn/163liawwdhf.html

Scala .......... 10
来源：http://www.xuanzx.com/163jstwgfas.html

------------------------------------
来源：http://www.aibaodan.cn/163zlhnqlwi.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163sziubmla.html

按章节统计：
来源：http://www.sxryk.cn/163jprelhfx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163gpfgjiln.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hrtnpykl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tehucljp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jeenamrn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163fbrgjwnc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163mgcwbjvg.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163behsnkcp.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ulvpgxmc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vfgxkzzb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163zqdvevgq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163umwczngd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163geznqdes.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kkzzuzcx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163mopnkcgq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163nafufguc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163msspjdyv.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163qisolcwz.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163zxgkboxo.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163pqqfztsy.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163qelvdasd.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163hmqqryap.html

------------------------------------
来源：http://www.sxryk.cn/163shmsfejr.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ivhsvqql.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163afgaojpp.html

使用提醒
来源：http://www.xuanzx.com/163fqnfgurf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qeoosujj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163iakarsnt.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163ybicjzln.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163mjuvzstc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163rkvipizu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163tkaicgcz.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ehdyaczh.html

================================================================================
来源：http://www.sxryk.cn/163abvumhku.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163dkqylaiu.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163psfragjo.html

================================================================================
来源：http://www.xuanzx.com/163obgkuuoc.html

【收录内容】
来源：http://www.xuanzx.com/163ajvgafna.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ljfiafyv.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163samoryhw.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163glppybtg.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163fmcvfaqr.html

【使用说明】
来源：http://www.sxryk.cn/163etqpappn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163mhlsvsgv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163dmflokhc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163knfsqfco.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163iatmlnbq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163kfevutdv.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163bnrvcpce.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163ckeuwajl.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163mzitlmkj.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163djkcqcpb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163fkhxncgu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163avgwizxs.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163kiojmbie.html

【文件统计】
来源：http://www.aibaodan.cn/163gtreveho.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163rgtfpaiq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163moerrpoa.html

目  录
来源：http://www.aibaodan.cn/163asziouev.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163igchusov.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163napmvxtf.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163moiztcqm.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163frfafitt.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ertbvnec.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163fawrgtpy.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163gsiennow.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163oeqylvdj.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163hkahnxqo.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nthehgop.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163wuqgiizn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163assvbnye.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cczxlnwx.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rfoobfsq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163lxcdwmuf.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163zvzfpzkq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cfbpshpl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163vwptpvll.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163rcgzjehv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ofbxrlth.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ekrvpagc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163muxsfbzv.html

================================================================================
来源：http://www.sxryk.cn/163upumrnti.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163pucqugch.html

================================================================================
来源：http://www.sxryk.cn/163ljzyejwh.html

[A01] Hello World
来源：http://www.aibaodan.cn/163tyyfijos.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163umwhcryf.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163oiderery.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163aogndyka.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163nnoseyxi.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163nulicfmh.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163npvqpsgz.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163wvdkcddz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163euecplyl.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163qcsrijnl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163avxzhmhq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163rxitnyuq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163tkqeavwt.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163gkconyie.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wdacvluy.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163mudrdbwu.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163dbqipboe.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163iivwsoti.html

[A03] 常量定义
来源：http://www.sxryk.cn/163vagtsadn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163craaoqke.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163oxiidtrz.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163bqmusqlt.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163mspvprmn.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163phphprll.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163vhbhwost.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163idtauomb.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163bnfwtnsu.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163eeepyspv.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163reamsodn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163qfzoffxd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163hfhkucxv.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163exlrprhn.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163ecwpwvcg.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163dircnujf.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163zjtuazlj.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163yrktlfst.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163jtfvdzji.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163hbdejvsi.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ttifwilo.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163cknaxvyw.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ihvnczxe.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xqkzwyho.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ejrthfsy.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ueeaqrcg.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vpzqwvqa.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163yxjnrdms.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163bmfposoh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163rhasgoyy.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163cfxdugop.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163xrkjrqht.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163fuujiewx.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163fwxrmebq.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163obgvgrru.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163byectjbn.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163dofdpobj.html

Py:   str(42)
来源：http://www.aibaodan.cn/163kepwjkrm.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163nuykexqk.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163ksqdwvmi.html

TS:   String(42)
来源：http://www.xuanzx.com/163ypedvkbx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163ggcvaidm.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163cfmoxjwd.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163sgkwnnkz.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163ybzuctfj.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163qwhrewkk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163qmudobbc.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163qfgozvts.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163olfjiupm.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163ykkziybq.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163njsaqvih.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163rbzuesfy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163zxcxzapd.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ruhuxbzo.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163qwznwfec.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163gadsdjdd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163wuznynen.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163exhzzlqv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163zythrmbr.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ymiqesfr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163gqayiqun.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163wuuudvql.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163odpjclyu.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163fshfbjnx.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163xwxwmkjt.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163jouergik.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163scnudvph.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163yigwgidm.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163tictqjgf.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163yfuoulgc.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163limyqgbx.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163nnoudlew.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163dmxlobea.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163grvowejj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163eohtcnky.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zyszzpck.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bqoimsrb.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lownhxor.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163xnopzwtu.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vpjhqjsa.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qlnsgkqm.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163xfowvzzs.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163moefpiuw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163poftzbhd.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163wyorasuo.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163hgbtnndh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163rchlftho.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163pkrjscrk.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163gwykpfql.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163lyhakvcw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163xuqautob.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sftfabim.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163tbiiybog.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163buudrpdb.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zvwuhsav.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ysuzbffc.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163esbeiojq.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163olwsgdum.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ixmrrcxu.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163nuaiszko.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163vlrtigax.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163mruiacjx.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163iibbnzqk.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mihmqihe.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163tfxgukrl.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163yrynbobs.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163jumiwapj.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nqohukjx.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163roibhyxg.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163rvnzgmbm.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163wkdrarhr.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163dmbhtvqt.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163uqdjyrts.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163dketkfiq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163wfqdgpoe.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163bvsfvduf.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hhffxfqk.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163fcaxvjob.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163pxzndpwj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163zfvtyuqr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163qaycpnxy.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163bycbumby.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ntgrfngt.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163smwrhyek.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163qqlzsnhw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163lqoscrvg.html

[A17] 位运算
来源：http://www.xuanzx.com/163epextkhb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ciqjgjak.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163ifnmawwb.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163taqujrgz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163dzwzzuzw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fihifuiy.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yeluyxbw.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pfchkejh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rglywrip.html


<!-- 参考信息 -->