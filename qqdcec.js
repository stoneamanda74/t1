外链999!wailian999！

[U103] JS：定时器
来源：http://www.aibaodan.cn/163xkaqcpuu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ztswvepr.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163pgyweggr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xsrirtjh.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163qpyudgeu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163khyfmiyk.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163fawyuflm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163nokejozo.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163vnpvrccb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163rjvtrlok.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163bqndjndr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163rgpjenaj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163maajmdon.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rtoyogmw.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163tqooqwlb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163esextfci.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163xhdxsnjk.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163vbsjgrzp.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163kaamzgrl.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qapnqqdb.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163qdrdiysc.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tuxllnbt.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163kwtvbkdd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ykcmjlqu.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163rktlacqk.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163lvngtdbk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163vwhiubhu.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163bikurpgw.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163gbizipca.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tylyzper.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163oljfupbp.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ovxuongz.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163kyhveheq.html

npx vite build
来源：http://www.aibaodan.cn/163tvwnngfn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163cptottoe.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163qafvayzn.html

================================================================================
来源：http://www.aibaodan.cn/163hmrorlpi.html

统计汇总
来源：http://www.xuanzx.com/163wkbujzcf.html

================================================================================
来源：http://www.aibaodan.cn/163ilpsccro.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ohyxzkgb.html

Python ......... 252
来源：http://www.xuanzx.com/163yxqnnrqm.html

PHP ............ 252
来源：http://www.sxryk.cn/163nrasnjdj.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ftzqyimp.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163alalxofg.html

Java ........... 212
来源：http://www.xuanzx.com/163rfcbrvgq.html

Go ............. 212
来源：http://www.aibaodan.cn/163gssnaanj.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163qpppynqn.html

C# ............. 212
来源：http://www.sxryk.cn/163ximnghtt.html

C .............. 30
来源：http://www.xuanzx.com/163xuboddkp.html

C++ ............ 30
来源：http://www.sxryk.cn/163lmtyklap.html

SQL ............ 90
来源：http://www.xuanzx.com/163dnfyrqsw.html

Bash ........... 80
来源：http://www.xuanzx.com/163uixdpzmu.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163rmkkadrq.html

Swift .......... 15
来源：http://www.sxryk.cn/163rcpkgjca.html

Lua ............ 10
来源：http://www.sxryk.cn/163cltyxekv.html

Perl ........... 10
来源：http://www.xuanzx.com/163qqstebvi.html

Scala .......... 10
来源：http://www.sxryk.cn/163nbamlmbv.html

------------------------------------
来源：http://www.sxryk.cn/163xwikcenl.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163izpdshmy.html

按章节统计：
来源：http://www.sxryk.cn/163zqrwkjpk.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163wivlkrxp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163oqbnygeb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fwldinke.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fogkscfp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163haldqvna.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zwspzmoy.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lngoixqt.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163vaupmhif.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zextnbbe.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163eufxjrmq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cqhzrfwi.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lorpuyow.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yxthenmf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zqrfulwr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163qqobfwwi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jmtiljfa.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163lxtuonnw.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ctitagab.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jrugnxpd.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163zulmzpbw.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163hzmzhvya.html

------------------------------------
来源：http://www.xuanzx.com/163tsmmeozf.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163wczviczl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163aeicuwcy.html

使用提醒
来源：http://www.sxryk.cn/163xnolsbtt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jzbnqnys.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163xsizetyl.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163wheulphp.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163qakjjenf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163agwqjitz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ixcefraw.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163rizandcw.html

================================================================================
来源：http://www.aibaodan.cn/163uvfevgnp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163djdwlddb.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163evmpafrs.html

================================================================================
来源：http://www.sxryk.cn/163gioldgqm.html

【收录内容】
来源：http://www.sxryk.cn/163cyiivzjb.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163gobuywfw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ijmfeyel.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163deybpjdw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163systpwii.html

【使用说明】
来源：http://www.aibaodan.cn/163xatoypgu.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163oqscirex.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163vtlmmhar.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163qdkimitq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163cvkghiii.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ldoqjdmg.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163gpdvoeez.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163zndewjta.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163xtatfsku.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163btsucksu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163gigvuiof.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163vfsoowgu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163cnaijhco.html

【文件统计】
来源：http://www.xuanzx.com/163lhqjvjmw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163rhbwsvef.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qcmmaqre.html

目  录
来源：http://www.aibaodan.cn/163ccftkcwq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ijvhuwni.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163hybuxlnh.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163pjytubtc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pivtsufv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163shdcqpeu.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163hcorjdxt.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163upfgttex.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163poqigtem.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ampckueq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wlvwtslw.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163eqvtdbmr.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fdoxguco.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163beflvktk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wwxdyajm.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163bfwkfwze.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163kckveybj.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cubxlsar.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163wvearydb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163lltyclla.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163hkfasblr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tyxltvgl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163callmuoh.html

================================================================================
来源：http://www.xuanzx.com/163wexkbmfm.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163namixrbl.html

================================================================================
来源：http://www.xuanzx.com/163qbapvdxq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ilrvrfxy.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163auuulrkk.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163jrowsugb.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163ujeuybxl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163tzembejj.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163smjujxex.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163stawtnqj.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163kkfadcug.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163nwyahpta.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163bxgclnhx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163cbzbgkfq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163bdrcjdso.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163mxhgwsqe.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163kjfcnzbv.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163oeznydqn.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163dokwfmdb.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163yevzmsdy.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163fmpaazgy.html

[A03] 常量定义
来源：http://www.xuanzx.com/163jhxvuynt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163bukvypfi.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163wwmhppov.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163zvusjfiu.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163zrqiixok.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163affssyjo.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163wccvbabd.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163fuasyuqh.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163popvzurg.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163mwgqtccq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163abqjgyad.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163hrdovghh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163jqocbjtn.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ntikfenw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ubjcfssd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163hvhklypu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163dgacesrm.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163agyykvrq.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163pcrclhur.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163ayejyonp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163hmfobqhp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hoarveky.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163dkiyerxw.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ionwqicg.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mikxoyne.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wibpzsjp.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ylcqfnho.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163lsschlma.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163lgrofrpb.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163lnvzbnmb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163jjbxdqxe.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163xtabzbdz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163tmztgepk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163jxcnzgto.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163cvbpbeko.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163knwfvrmb.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163nkxwqygu.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ayaohgjd.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163wrggpvys.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163hmgghyai.html

TS:   String(42)
来源：http://www.aibaodan.cn/163ypbuhdnn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163giqbcikb.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163wxrhpiye.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163sjnlxucw.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163rmovbpxu.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163odphlbvb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163fckeeszr.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163xqcjiigg.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163zuclmlju.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163ekbnefdb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163szzxcwbe.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163lgraqdio.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163fbpxgrco.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163lmhwtyhb.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163gjtpnbiv.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ldbocagf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163giqbvpwt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163sjudktwa.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163cpskyckg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163hgrzzwqe.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163yqmhphbu.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163amkstneq.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163qlfwsntk.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163xxkxxfva.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163owyuklru.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163lfvxbqdf.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163rprvacvm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ktyswqqv.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163datglmnr.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163spmccpeg.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163qhbjfbrn.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163vbxhydhb.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ksfsjyil.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163pbzeogyd.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163emxvyhwk.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xgvjannb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jcgakocr.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zexmhuqs.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163amjmpfjx.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ycaicvhk.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163axupuile.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163pyncjhlq.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163tsutihpv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163mgoziwem.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163miaeqbaj.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163dsrvzzyc.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163fdykghbp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163vmmifzns.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163xqwllmdf.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163tsbprgyy.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163ydtlnowf.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rrvzdfcm.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163uuzgoeze.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kprqylcd.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vvygtevl.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163eoxvonzv.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ibzmkpon.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163cueabvnu.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163egnnepdl.html

[A14] 注释写法
来源：http://www.xuanzx.com/163djqteugu.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163qjelbybb.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163aphmwpoo.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163glinsemm.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163eufroxwk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163jxfrqofc.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vgeyuary.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ushdbpvo.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xjimpzaz.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163miuhyncm.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163dugpjyvn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163lmshdgak.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163qoazdpnf.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ypimvuas.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ajyyjifj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163jreebfcj.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163umtnragz.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163vlfqnxwd.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163whdobtgg.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ugjvatnf.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163andkgnam.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163qzhrxctw.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163swsdwsrh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163cuftenim.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163hhrwwzwa.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163zgwlaxto.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163zdpezykt.html

[A17] 位运算
来源：http://www.sxryk.cn/163nmagagiw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bdyulono.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163ijmcczyj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rvzcoxnq.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163wppxigaa.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lrszemnw.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jkuelbiv.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dkgqngvw.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ldmznnbf.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163xkqqfpym.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163oovczamw.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163bzfgkeeh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ddrkgqal.html


<!-- 参考信息 -->