外链999!wailian999！

[U105] JS：节流
来源：http://www.aibaodan.cn/163jqauqbnh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163gfvcfjrj.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163wkydwezp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ebmaekoi.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163exyudjjk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163rhpmpjgf.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163gfgaqwpt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163gpwmxdzr.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163lpsulfxj.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163phfinrye.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163hcuqifad.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163nhhxhpiw.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163hzemrdlc.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ishtwhen.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163iazwyvtk.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qoaetaif.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163gsyhqjcq.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mwlamieg.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ktaewebm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163oqjfpclq.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163wwlkptru.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163drihdqic.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163xleneugd.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163mycyfzsw.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163puydfmif.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163taankoae.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163vwofsswb.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163fgdqgpcn.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163jedworkn.html

npx vite build
来源：http://www.xuanzx.com/163pauzetet.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163zrzffnzi.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163vodconic.html

================================================================================
来源：http://www.xuanzx.com/163vbbvmdal.html

统计汇总
来源：http://www.aibaodan.cn/163gghjgocb.html

================================================================================
来源：http://www.aibaodan.cn/163szxqhkkv.html

按语言统计（条）：
来源：http://www.sxryk.cn/163uzngbzac.html

Python ......... 252
来源：http://www.sxryk.cn/163iiecdzml.html

PHP ............ 252
来源：http://www.sxryk.cn/163kgscbxyv.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ptenihev.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163dtaprfvf.html

Java ........... 212
来源：http://www.aibaodan.cn/163tnxkivlj.html

Go ............. 212
来源：http://www.aibaodan.cn/163ujhuuntt.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ikpwsyge.html

C# ............. 212
来源：http://www.xuanzx.com/163hbnychie.html

C .............. 30
来源：http://www.aibaodan.cn/163ympymkes.html

C++ ............ 30
来源：http://www.aibaodan.cn/163jsviltco.html

SQL ............ 90
来源：http://www.aibaodan.cn/163mruzkfwg.html

Bash ........... 80
来源：http://www.xuanzx.com/163xmqvvtbe.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163gmccffqj.html

Swift .......... 15
来源：http://www.aibaodan.cn/163jogsupzu.html

Lua ............ 10
来源：http://www.xuanzx.com/163tblklxkq.html

Perl ........... 10
来源：http://www.sxryk.cn/163khjtkjdy.html

Scala .......... 10
来源：http://www.aibaodan.cn/163almymhge.html

------------------------------------
来源：http://www.aibaodan.cn/163djaabyww.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ibyhhudq.html

按章节统计：
来源：http://www.xuanzx.com/163xxrjhfoe.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wgwuugmb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lfycgqjb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163knvfqlih.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xwjajmly.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ezwhwgpa.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hkrtlijn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163asfkozyd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jobvynfn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tzngwroz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163kkvsoprf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kdzjcleb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gckjelmp.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163munqeibr.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lhlnrpef.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163engecetp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qvkytzrr.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163uacpakgd.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163nqxdacmn.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163sgxifecj.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163mhmafmor.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163efyuqeeg.html

------------------------------------
来源：http://www.sxryk.cn/163udgticjg.html

合计                                  2106 条
来源：http://www.sxryk.cn/163jlgyokmp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mkftqoth.html

使用提醒
来源：http://www.sxryk.cn/163fmjrthlx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163rwozoddw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163dlbmfbcd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163yufqojel.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163fnaejnhu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163cdpmkyfu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163dvmubcfi.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163bvelntif.html

================================================================================
来源：http://www.aibaodan.cn/163viujnnzc.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ykobbyop.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163pehzqdzn.html

================================================================================
来源：http://www.sxryk.cn/163savuffrm.html

【收录内容】
来源：http://www.xuanzx.com/163amoyneda.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163rbzfrgnn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163hdzcqyor.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163sdlsqotf.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163zimxeqej.html

【使用说明】
来源：http://www.xuanzx.com/163sqrcbykf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163tueaxsev.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163fiehxiru.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163xeqjdlob.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163dijafege.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163oiekbgbg.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163vfqqmouz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163hqskheix.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163jnwlphsf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163jhsrdgvm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163vnrakfhd.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163dgzmlxdk.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163ktsqvzqb.html

【文件统计】
来源：http://www.xuanzx.com/163bwaebycv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163lilbxghp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pcjtsaku.html

目  录
来源：http://www.xuanzx.com/163pqwduitl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wxjnbkwd.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163gprxdjdr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163jsvydcuu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163pcbcdgut.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ouelzyys.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163bcpuljbp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163tiibglqf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163irjndhnq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163qvkaplpv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bclbhlqo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163elqypfmq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163aefwbooh.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jsqtwgas.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vvohdcrj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ceingxlz.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163gfzmnpik.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nvmhkgbs.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163dhiwzrmm.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163durlmzov.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163yxokhfjx.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163pxjjmsdh.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ajpbhkkk.html

================================================================================
来源：http://www.sxryk.cn/163hkeecnlk.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163iuufsmdl.html

================================================================================
来源：http://www.aibaodan.cn/163asxbiuxq.html

[A01] Hello World
来源：http://www.xuanzx.com/163vlmkrhty.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ujjfvqsq.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163upudramc.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163nirsnbtn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163qlabzayp.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163dcijsnwe.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163fzmhcqjf.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163nsxpykdl.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163eensmkog.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163gpdnfvlk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163hnbdoois.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163ywrvgiqw.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163selekien.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163yxglkeou.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163matbynal.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163mvzmjspr.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163aygnznbx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lwtmhqws.html

[A03] 常量定义
来源：http://www.xuanzx.com/163xovaxejt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ncyvpdpp.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163sssfkzaf.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163wovcfzar.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163gmxvnbsn.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163dbztbhpp.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163aemzweom.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163ogowiluy.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xnytqtul.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163ppswhqkl.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163izpdvavh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163eknuwuea.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163nqtdabhm.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163zhctipzg.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163adbjxpfv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163mihdqsfw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163sfytvsay.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163jiseizcc.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163lzpjkzoo.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163uahjpmug.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163bqqujewf.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163gkwsvdak.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163mxhjsday.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wmrtgmbc.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gbbsuadu.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pvulyvml.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163thaktheq.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163efujkeba.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163imizwtha.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163tfbztpsm.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163gxbnouap.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163helsuvfx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163mwmyyfhi.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163pbrqiefx.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163piuntdym.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163jpizlosw.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163lpfbylpj.html

Py:   str(42)
来源：http://www.xuanzx.com/163eepkqtil.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163xpgazhqt.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163hpwvqbti.html

TS:   String(42)
来源：http://www.sxryk.cn/163gnpwzyav.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163uamdzdnp.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163samsmrrk.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163zqlaakwk.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ffjeaskg.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163agwsgocx.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ivgbyqnk.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163undooipu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163xjwnyurz.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163srrfywsn.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163nkwedutc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163xcwcekml.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163xviezawx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163kapqotdn.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163lwcjumut.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163balvxuhz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163hnnjhfmu.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ahbkejis.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163jllyvibo.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163tqznngkx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163npjpkfnm.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163vymdbayb.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163pqvyaila.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163qoimfqxk.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163riiqpvgl.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163awuqplsg.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163vzdhucdk.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163obazjqxx.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163ecyleoqk.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163gaprtqaj.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163agqaepco.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163qeludbhe.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163himuowes.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163dfwqphkh.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kxmsrrwl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ejmpryfn.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ptsyisrp.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qobhowsz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163gfezjjga.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rcbsyhfy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163netjkedf.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163gnnmpguk.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163jyhfawpz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163xxzrsemv.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qwrqskyj.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163fcavoxgl.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163hqnxqmei.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163oiwcidum.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163hprzbhpz.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163itsmwwzk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163qykbkkll.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mlyxzusg.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163kpjfqaqv.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wdfrqtcj.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kebguusf.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163qrgnouvp.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cjmqytmt.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163dpxkwwvy.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ejzqbxgo.html

[A14] 注释写法
来源：http://www.sxryk.cn/163agcwqwfw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163qradsgxo.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qddeoawv.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163miumzrtz.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mdqlnqed.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163rqtbnhaj.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hugjavkg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163qoitcvel.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cvvqbqeg.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163xjisdsfi.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163gvkaelri.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163nisotmcq.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ukgdrrmv.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163rdibbeeu.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163qzzumbwg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163wvtojxpa.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163uogihshv.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163hwlfpqwd.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ngciirgi.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163eqncrgfx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163mxsvfbjf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163pwoowaja.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163vtmtwxls.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ugwwmfdo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163hfzofmsy.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ednolxym.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163yhggtehu.html

[A17] 位运算
来源：http://www.xuanzx.com/163jzmsbobl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vglfbhit.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163mspijtpe.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pxwmfzub.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163gofaclxk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163sjgosrrv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163smpnnvzp.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wpmibrdh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ufdzsqrf.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163rbuzofvx.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163fzvcyphk.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163krdohzqq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ejnbzjxt.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ykrujddr.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163yxdengeb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163gcxlxjou.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163udnaetxj.html


<!-- 参考信息 -->