外链999!wailian999！

[U105] JS：节流
来源：http://www.sxryk.cn/163fmpsshtv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163oobvvlbo.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ryteipbv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163skzyopvz.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163oqosbunv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163dviglxas.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163jnnxzjfg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163zgyvacae.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163acgpbihw.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fcuimphd.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163evvczwan.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163oeonxree.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163mwshmfky.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163adnfpjsb.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163kcpfcwqa.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163cvyqqxnt.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163cycsexjl.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xulrmhzt.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ouxtuemy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xcxzhosk.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163eubjtlli.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ymbzgxry.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ldjyiqzb.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163qjyqsqjz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163cxahdxhk.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163fasszdxu.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163otdeuoiy.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163xiahuwfe.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163jscxovmz.html

npx vite build
来源：http://www.aibaodan.cn/163elzvxagh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163emaydwfu.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163misujihz.html

================================================================================
来源：http://www.xuanzx.com/163sxufldxl.html

统计汇总
来源：http://www.xuanzx.com/163xlmtlsbt.html

================================================================================
来源：http://www.sxryk.cn/163zaoxtrau.html

按语言统计（条）：
来源：http://www.xuanzx.com/163osjauwtk.html

Python ......... 252
来源：http://www.xuanzx.com/163ywbamtem.html

PHP ............ 252
来源：http://www.aibaodan.cn/163kwbmnely.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163cwkpwmpd.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ajdcdvie.html

Java ........... 212
来源：http://www.xuanzx.com/163fouquksa.html

Go ............. 212
来源：http://www.xuanzx.com/163xaesffih.html

Ruby ........... 212
来源：http://www.xuanzx.com/163nftoktss.html

C# ............. 212
来源：http://www.sxryk.cn/163fhsnuohw.html

C .............. 30
来源：http://www.aibaodan.cn/163lvwjzwyt.html

C++ ............ 30
来源：http://www.aibaodan.cn/163uplsphbe.html

SQL ............ 90
来源：http://www.aibaodan.cn/163khluczvl.html

Bash ........... 80
来源：http://www.sxryk.cn/163gnsdypod.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163kexpvjec.html

Swift .......... 15
来源：http://www.sxryk.cn/163vwdxzwrx.html

Lua ............ 10
来源：http://www.xuanzx.com/163nydsmdeo.html

Perl ........... 10
来源：http://www.sxryk.cn/163vblsdxgq.html

Scala .......... 10
来源：http://www.aibaodan.cn/163hvghwntl.html

------------------------------------
来源：http://www.aibaodan.cn/163iecybkij.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163qaybyxwb.html

按章节统计：
来源：http://www.aibaodan.cn/163olayoqyn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163oawhghnq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yatcagsg.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nnjodbvy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fgwzgxkx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163visqggml.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163kartjdmb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yxbyiius.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163zugswlrv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xeyvavea.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163scgvruvb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pgudyphq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rpaqapix.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pxgjyzes.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kysswczs.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163udcyqzeu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163viziwwga.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163rctbpdkm.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163arwnxmwm.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163osqhdzdh.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163pavfzttb.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163kvznbvbn.html

------------------------------------
来源：http://www.sxryk.cn/163lrsuxatr.html

合计                                  2106 条
来源：http://www.sxryk.cn/163xjyxdcwm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163sidlbgkl.html

使用提醒
来源：http://www.sxryk.cn/163ylojojyt.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hjqwanyw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163hvehrhcr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163mngwvbra.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163eqrzinuy.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163qmtsfygs.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163calcztkn.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163czunmrfw.html

================================================================================
来源：http://www.sxryk.cn/163mwnpadxf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163jtibuvkp.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ifyqpvnk.html

================================================================================
来源：http://www.aibaodan.cn/163xgwzkdfj.html

【收录内容】
来源：http://www.xuanzx.com/163zwbkbtxd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163zjgwrhbk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163oqamcdhc.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163dpokjwyk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163xfkmolcs.html

【使用说明】
来源：http://www.sxryk.cn/163qgeefesy.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163takqpfpk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163puikujes.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163iaapxprf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163vcfaaocm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163gkihrqjt.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163szhugnty.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163aynerozk.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163rxqmnskd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163rwopiboh.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163krvytqzy.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ggoeqyab.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163oinxyfqp.html

【文件统计】
来源：http://www.xuanzx.com/163rgeufniw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163jytdrqht.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kdbjrnom.html

目  录
来源：http://www.sxryk.cn/163hcpnvuei.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gqjrrucl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163zdcjhozf.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fftljrnz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163vyobwcsc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xblfkbqv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163znuldeio.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163evmkqtfg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fnrftfbv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163quwixppo.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163spbaouir.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163pcigdqvw.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fsljejvw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ejxtazfh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dwvywnyy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163tfbfqdmf.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163plubmxro.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163luqijpzo.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ndnoqbmx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163swmjtcjk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163balnyuch.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dvnjjmwd.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163lrreovqu.html

================================================================================
来源：http://www.aibaodan.cn/163xujhwzun.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163jneyjkef.html

================================================================================
来源：http://www.aibaodan.cn/163immnbcmi.html

[A01] Hello World
来源：http://www.aibaodan.cn/163odiadvyt.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163qittoeau.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ddpdfkgy.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163gqndwvye.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163qcjksqzi.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163fifdbjiq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163nueroxws.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163gdbcvyzs.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163jkcwzhol.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163uetdcdke.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163rgtetggh.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163ixmtuati.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163msuedfmg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163dzqopmyl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163nrmgnjvn.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ehnuxxye.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163vgzqfeip.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dwkfjveh.html

[A03] 常量定义
来源：http://www.xuanzx.com/163gwezdhlx.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163saucdpaj.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163uicmtznh.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163blvoglvr.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163wpcfmaug.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ixypwmgz.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163eulxqcsr.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163mbzvjcrk.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163cqejccce.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163brksakfs.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163whbouioy.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163hjlrfifd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163ezgqthnm.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163vhpsudwy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163zcmlntyv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163iboylrup.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163bntgwson.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163vmjtlkgj.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163nlagovpv.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163iilavhaf.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163cxiqmopw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ssfruixm.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163mdrqslvc.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ybzvythv.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fujltlry.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163camrajoc.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ahcupyqk.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163duhulbyl.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163uxsgebab.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163twzglhow.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163oxjnfoju.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163wahngkrx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163xxzzplfg.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163owfoetww.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163vrkhaula.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163yaiqzcvf.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163dawaoqko.html

Py:   str(42)
来源：http://www.sxryk.cn/163huxdghjh.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163wpxoqpvp.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163dwbiljjd.html

TS:   String(42)
来源：http://www.xuanzx.com/163ydfulmcq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ycpbbfby.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163jfjzipwf.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163zqcobpkl.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163xppjdzwa.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163hhnqnpxt.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163bgfmqxcs.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163fgarbnkm.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163tkyuohub.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163cslyfulz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163xjcgppxk.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163zidvxpdz.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163yodnkdyy.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ierlilmn.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163owznhfwt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163prjbeszt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163abiznmkz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163nuvdjrra.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163czazfusy.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163gdpkzalz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163zuanmezz.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163verrwkdp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163ctyimrzu.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163euvkivta.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163bwihgrzc.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163ickybrks.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163jrimhmwi.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ejeqjxpm.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163upjdkfcw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163agpcxhqt.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163fyqnqxrk.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163egbxvulq.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ehbvvvqr.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163wnkqjauu.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gzacwtam.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pvdlkygt.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vrwljqft.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lveqbcbv.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163pjvolzsg.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rlobjxou.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vaapknjj.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ztopopce.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163ehukorde.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163fvaujqld.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ntaxxhih.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163svfnzqse.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163hggkbrim.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163megbdmth.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163nszyneox.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163fhaceuof.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163rmcgiwdf.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lpykinrw.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163szesrhkt.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ajmvotmz.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rqdawtkq.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163fbzbzzpc.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ostlzcms.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163nasrpaib.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jihaqzut.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163cisxyqty.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163kiuopzxr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dykhqivb.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ejprspqp.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wnsqpxbc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163okawxbzr.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zaavckud.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163qonlmnql.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vjvmzzfp.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163stcnjvgw.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163jdexuwby.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163pvfxsmdy.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wnxdysrv.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163kwkdnnmm.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163azuaycwu.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163esgbvvup.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163oaiwbxji.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163isacftlr.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ycxoepfg.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163sjlondhn.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163bmldhhwv.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ztserdgd.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163cutrifeq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163geeycsdo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163jwoqbaiw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163bdthduek.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163domliyga.html

[A17] 位运算
来源：http://www.sxryk.cn/163mnnesbvz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qlrokswm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163hspbfzcl.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163czsawgjd.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163dhfxvuun.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163eekaobzl.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hkzkfxhr.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163umqmmgah.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xmcldjxk.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ninprjlw.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163riuopqgi.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163acnpusit.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163vxinjfli.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163exwsvkbf.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163gnarxhgc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163hrehsfmv.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163zvxmqufs.html


<!-- 参考信息 -->