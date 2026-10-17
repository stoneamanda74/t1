外链999!wailian999！

[U103] JS：定时器
来源：http://www.sxryk.cn/163qwnxmclh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163yesgnghl.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163lazxmxut.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zssdggsc.html

[U105] JS：节流
来源：http://www.sxryk.cn/163bvqzrlwy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163nctdndxm.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163vgpnnsjo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163lggqnshm.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ifsevobv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163vmpqobgd.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163meyjpvyn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163gyicqmpz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163aoajrqjf.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zkdmaipe.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163zsxwqnvt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163hlyaavad.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163uexamqpy.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163kzvikqgq.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163vcbdprwq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163yjqtpdvx.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163qengfqhm.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163prjprorh.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163sydhyjxp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163shsmktrn.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ecmrglip.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163yewttxeb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163wbiqvtsu.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163lsrokvqp.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163pfyoporx.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163uevvkevj.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163hylejdzi.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163twkpogzf.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163wobokhmk.html

npx vite build
来源：http://www.xuanzx.com/163gzxvgkvz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163nxgdmgwa.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ehsgxrnv.html

================================================================================
来源：http://www.aibaodan.cn/163bbovxvmk.html

统计汇总
来源：http://www.xuanzx.com/163vvzneplb.html

================================================================================
来源：http://www.aibaodan.cn/163jrnlqytj.html

按语言统计（条）：
来源：http://www.sxryk.cn/163evquooon.html

Python ......... 252
来源：http://www.sxryk.cn/163fyikdigs.html

PHP ............ 252
来源：http://www.aibaodan.cn/163bqbxqmic.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163lezxpfti.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163yxkbmqld.html

Java ........... 212
来源：http://www.sxryk.cn/163mvkggbpv.html

Go ............. 212
来源：http://www.xuanzx.com/163gxlplngd.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163tkpydyly.html

C# ............. 212
来源：http://www.xuanzx.com/163ilsweags.html

C .............. 30
来源：http://www.xuanzx.com/163kvzzuwzl.html

C++ ............ 30
来源：http://www.aibaodan.cn/163rchzbisw.html

SQL ............ 90
来源：http://www.aibaodan.cn/163fqwtlmxs.html

Bash ........... 80
来源：http://www.xuanzx.com/163uxdljczk.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163iomkzztj.html

Swift .......... 15
来源：http://www.xuanzx.com/163izmzjjdr.html

Lua ............ 10
来源：http://www.sxryk.cn/163xwwbcvck.html

Perl ........... 10
来源：http://www.sxryk.cn/163qulyasbi.html

Scala .......... 10
来源：http://www.aibaodan.cn/163pwcxanxb.html

------------------------------------
来源：http://www.sxryk.cn/163mdcjavkk.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163tepiwpsn.html

按章节统计：
来源：http://www.sxryk.cn/163owyttgzg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wiqydfql.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mcmbfpug.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qzjppmmu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ptbbzlly.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163guciodzj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gesstgtz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vmsfrapy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163jryelbgq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ndhhvjjj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163bzzzazeb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qazrvixd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163obbccbif.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vitqhsei.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xcwqrhco.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163wvezpkzu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bumqpqti.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163nmuumiys.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163wfqgfnpe.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163bodeuqdg.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ctlytgkp.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163lxdopwmj.html

------------------------------------
来源：http://www.xuanzx.com/163tyggxswj.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163wsunhpzz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163baunvtuu.html

使用提醒
来源：http://www.aibaodan.cn/163hzvonhkn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kgigqtez.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ljmtcgsz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163nwswhtxv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163znjvhecd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163wbufxcmz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163wwhnixfm.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163naqgxjjc.html

================================================================================
来源：http://www.aibaodan.cn/163uijnsewy.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163yfwhnzvf.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163reorbavp.html

================================================================================
来源：http://www.sxryk.cn/163aqrgqzog.html

【收录内容】
来源：http://www.aibaodan.cn/163smogjnku.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163kciwudxb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163sgjtrwki.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163hoskqumb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163jxgluwkm.html

【使用说明】
来源：http://www.sxryk.cn/163exymzdlx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163glwfekal.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163mlkrueyh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163fipjadur.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163pgabvibj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ikteccyg.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163xjcvivvg.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163loiycwoc.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163tedyquoc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163ajxfnnxy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163bvlozzwx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163gswdpofw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163kigzzppb.html

【文件统计】
来源：http://www.xuanzx.com/163wtlsquki.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163nomryktf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163upldpatu.html

目  录
来源：http://www.sxryk.cn/163fmyyowzc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tdhfxqfc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xgdvpnjz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163lvnbcbrn.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163okwbegap.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163flubvcmd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163ssnwlihh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163nsqyaspi.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ddckggto.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163gusqcqnv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tpapdtda.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ssyqxslm.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lzxrdcnu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163boryftwt.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163akjwiaxc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ciadguma.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163krrijejy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qjpaoloy.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163wlbqctuv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163iqmlozwr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163zdddwdke.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ojtipnec.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163donabluj.html

================================================================================
来源：http://www.aibaodan.cn/163kgfyyhjy.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163sydaisct.html

================================================================================
来源：http://www.xuanzx.com/163zexybfkk.html

[A01] Hello World
来源：http://www.sxryk.cn/163tddkifog.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163ricgmjma.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163bkacbufm.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ylkkkqzu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163abkzoncj.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163yxtyghwk.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163obmoaktg.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163nqugmvfm.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163bfmzmkab.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163nlsvdmfj.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163vdweofuo.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163evlnyxjy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163eevvusjx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163ljnrmeqd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ohnmhktj.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163qeoxlaum.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163lnchcctb.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163xdriapfm.html

[A03] 常量定义
来源：http://www.xuanzx.com/163csecxeip.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163wjrqjkug.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163rafflblq.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163mmzixnjy.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163xshxiyrb.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163gmzlkxdh.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163hnqnyeya.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163gafzzcjf.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lkinigwr.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163tbsxbdya.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163gyhmutxv.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ilpftjdv.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163uklibtli.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163qnalcyob.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163xolgqyhh.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163umeaqpgv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163cewidzof.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163rgvlqvav.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163uwgjhhwf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163aqahbptj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163mrzkhhmu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163uqkhfeaq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163yicqoupe.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163cyboxegs.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mjkeyzlg.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zjjdmjjd.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fkshrecj.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163qcplumvj.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163yaiubwqz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163ltaetzcd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163uvtsezdn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163uiqmsrss.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163vzdggkbb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163bmxdmxxe.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163toyhereq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163plvnchqw.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163hhjavdzw.html

Py:   str(42)
来源：http://www.sxryk.cn/163scrseacb.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163tpawhqqr.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163ejutftou.html

TS:   String(42)
来源：http://www.aibaodan.cn/163ucctvcww.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163atfapjyc.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163duimcndz.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163rmqvnywe.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163sxkarwjp.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163rommulrz.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ezycqoaz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163kaatsgzr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ytthayrd.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163yvctclak.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163rmcrplon.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163qpwhgdgj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163ftxmalwp.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163fosrvsom.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163ajgepowd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163lmispmbz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163nhbenvur.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163vrfnzbrc.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163kpfrpfhl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163rzaixuft.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163vqfkobcb.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163sdhpxwvp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163ygxywgxk.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163anfarjne.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163apmrvcqz.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163spkzifcm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163qyehdfau.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163gmfnphld.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163awzcptih.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163wriupoxz.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163ynrsqepd.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163pcgnfaaa.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163aczlupng.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163dwzuruzq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163olujohin.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nhgtojjj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163krmcdfjo.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ecgurqvo.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ovgpkswc.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bffgdogi.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163neqctdmq.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163rbthgtxf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163fhnvdpvv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163mbgowxhb.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163nccpgrdv.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163hoqkydrr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163knuazojg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163owmjprjo.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163oibdbmpe.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163fhclpboy.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163qbmytmnt.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163uquaynmd.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163xontivev.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qbepvicj.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rrlaxdrh.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163whukyuza.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dnbvfpac.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163suypuyxr.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zisbbdrs.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163fwytjghq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163qvysdssx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163pwwzgfrh.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tcetvegs.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jraqoyfh.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163jjfryufj.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163klfpdllr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163xqgryzny.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zpwtmcqg.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163lfdrufxh.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163uavvllpt.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163rjvesvxh.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ispxrrpd.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163qlemlcei.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163kmpibeqr.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163djcetego.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163nudezmnd.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163hsexbyve.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ibsppkek.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163ghjczsbp.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163hvavfnwa.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163iswacmgs.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163pvviwskl.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163pkcibynb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163rbsnoqze.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163gawnnaja.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163zppeyuzs.html

[A17] 位运算
来源：http://www.sxryk.cn/163hzvjqodi.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qbiifdzr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163vynthicb.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jhqwfrql.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163bcvamfxy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fkfwohfn.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hqsapdls.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ucteione.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xgwjaqvo.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163gkwgiydg.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163dbbheklx.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ckoljqvt.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163lbxqbhxf.html


<!-- 参考信息 -->