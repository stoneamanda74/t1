外链999!wailian999！

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163nuswiryy.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163fwbjwrki.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163spxaoxff.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ghyydmcc.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163dgrjvuqq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163dzgnevyo.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163vvpmuofa.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cpxzjbds.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163orudmehf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163zkjaozfl.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ujqsaias.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163zbvcexzu.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163mrgejoej.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163eypnbvzu.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163vlooshjd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163grebayvt.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163dquohwuz.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dhjeqjuo.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163feotocdf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163dcqwxsqg.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163knjwvnpx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163melughpt.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163qfbwxxkj.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163xgdbdcqu.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163nfisonga.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163amqnemwx.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163nvvdxaud.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jqqimlsb.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pcuueqdn.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163yaxrotsc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163tvagdaya.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163nicswfcq.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163kjwznefl.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163yvxhbhby.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163fuxpwguk.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163cmerevtw.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163kjpgkdev.html

npx vite build
来源：http://www.aibaodan.cn/163tjozizmq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163fpsppmlz.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163cmeaxhdf.html

================================================================================
来源：http://www.sxryk.cn/163rkhiekod.html

统计汇总
来源：http://www.sxryk.cn/163lcdwdpjp.html

================================================================================
来源：http://www.aibaodan.cn/163xcnureit.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163bgbzrwjm.html

Python ......... 252
来源：http://www.sxryk.cn/163ctlfzhbw.html

PHP ............ 252
来源：http://www.xuanzx.com/163icllqcno.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163eejtgolk.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163pxtqjgyp.html

Java ........... 212
来源：http://www.sxryk.cn/163dayzjrll.html

Go ............. 212
来源：http://www.aibaodan.cn/163setezpux.html

Ruby ........... 212
来源：http://www.xuanzx.com/163zauplwrx.html

C# ............. 212
来源：http://www.aibaodan.cn/163wkzquptd.html

C .............. 30
来源：http://www.aibaodan.cn/163ltedsbuq.html

C++ ............ 30
来源：http://www.xuanzx.com/163vnuxqfly.html

SQL ............ 90
来源：http://www.sxryk.cn/163dhiikjak.html

Bash ........... 80
来源：http://www.sxryk.cn/163vowkncoj.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163oqsnfhfq.html

Swift .......... 15
来源：http://www.aibaodan.cn/163cfczozln.html

Lua ............ 10
来源：http://www.sxryk.cn/163exdmqxde.html

Perl ........... 10
来源：http://www.aibaodan.cn/163wgoramyw.html

Scala .......... 10
来源：http://www.aibaodan.cn/163fhsaquoc.html

------------------------------------
来源：http://www.sxryk.cn/163aphjakss.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163byalksac.html

按章节统计：
来源：http://www.xuanzx.com/163hisyspsx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163iqczdgit.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163labhgazy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rhpidwhm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163pkjllyjq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163qeurgkyk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cozurqoc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tswbigdb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ebztxzlv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mkixlivi.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fbqxumat.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tsgqhycc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kfobaega.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163psxtwomn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163miqedbhw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ccznwwrg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163adgwdagv.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163qrswpicw.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163arzlucvd.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163dipcogxu.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163pdrfbmjv.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163mzrvecjh.html

------------------------------------
来源：http://www.aibaodan.cn/163gsojcrvy.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163bowsjpuc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163anikpyad.html

使用提醒
来源：http://www.xuanzx.com/163gebncmdt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lseaimik.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163jiudcdav.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163mzpsohlj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163csausxdb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163gzrxyhrm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163gffouqce.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163auilbtug.html

================================================================================
来源：http://www.aibaodan.cn/163hwnotgwb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163awiskito.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163gmsbrfrp.html

================================================================================
来源：http://www.sxryk.cn/163sabxfxhm.html

【收录内容】
来源：http://www.aibaodan.cn/163idaxnyni.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163qkfvthat.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ekzmnnjx.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ncotspyt.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163mwoahdli.html

【使用说明】
来源：http://www.sxryk.cn/163iisipofo.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163yyjwfwfs.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163kkmyyfhz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163tvkcuynj.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163iyaiywfs.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163kawyqmrn.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ywioqphg.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163fafgudde.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163kwtpalex.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163refjrkuk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163uxlkmixx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163qkbqmetp.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163juxmkuyn.html

【文件统计】
来源：http://www.sxryk.cn/163qhkniumm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163aldjxafb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vogulzgu.html

目  录
来源：http://www.aibaodan.cn/163skcgtlaw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yetazumm.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163didychnw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ndodhtje.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ehkixvqb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163khcujryb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163wegywhrc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ldyypdgl.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163pmuhwtwh.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163szhrgfro.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jzqioqhf.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163osrqaohl.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mjjvafpg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163odegormw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jjrgxswy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163socefgli.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163eejaxocj.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tpysxuxs.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163zygtzzmu.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163hekdtvas.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ulnampix.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ulddhzpw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rihupsks.html

================================================================================
来源：http://www.sxryk.cn/163vbafpsdv.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163nhkyadoe.html

================================================================================
来源：http://www.aibaodan.cn/163adrdumdv.html

[A01] Hello World
来源：http://www.sxryk.cn/163zvzrdfwm.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163srwkukgr.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163itziuhbj.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163yfrfbxfv.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163rxoxssph.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163erftxevv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163zvubdtaj.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163mdclipch.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163sjxxaeiv.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163pdjwyblr.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ddiisxbm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163wvwsfqfa.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163baypcqsh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163sdwykqqh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wjcjyvmj.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163fxqrjhuk.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163opxrckmz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163uurtjjcu.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163euomxoor.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163pcfgrdvc.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163dmgvlxhi.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ualcocze.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163kvptchjl.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163xclxyvod.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163kizmdgio.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163wyzqtemk.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163ilmwniqu.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163mebgxrmx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163kzufsbei.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163dhsokcje.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163dteeihzw.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163axnatguo.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163pcllqirc.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163npdzzldx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163gitmzvwb.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163vtuxpqnl.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163uofuybei.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163ulbfuzgj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163yogmjqxi.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163sjequwfn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163dejbmuvo.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163obvpuuzb.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fhwdfcwv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xfuyjlke.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163almzykfp.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163pwikmxoi.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163akockusd.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ivcfpaqg.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163dmcgguni.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163dnijmfgh.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163trtgfpuf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163mpvwvpdp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163mfxflttn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163bvcjryth.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163ifgqrnok.html

Py:   str(42)
来源：http://www.aibaodan.cn/163mzpszpko.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163tovhgbsu.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163kjrjbqru.html

TS:   String(42)
来源：http://www.xuanzx.com/163pafnhdte.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163yugwacov.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163zwynmfde.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163frhqpthz.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163vxtzqsee.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163xqxeaues.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163bydggfko.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163eezkyebd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163nzpxcpip.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163xyvtskri.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163xausmxtw.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163cffsyclk.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163bgzueech.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ttqppktt.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163gectovgc.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163uoeyjcnl.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163rogjmluz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163huqgcgcf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163izoukpxp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163woqbpexf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163pvuhedoq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163xrqlofau.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163mthdpltc.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163yngeezme.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163dvewnjut.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163xhiowwqk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163igpljgak.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163cqihzlyc.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163esvdedik.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163blulkebi.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163hdbwjery.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163heparqjx.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163hamtvknr.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163kogscybd.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wuimjvjo.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dsgpqsbt.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vloyqzao.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163iyrtjizz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ikekagzz.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vmauazqn.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qxxwdevq.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163rvslwobf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163qgbqbcay.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163fuglcapj.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qorqutyj.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163itbhnvaf.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163rqhtkebx.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163yghxbupj.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163koejahno.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163qjnxqrkc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163hnlxmyno.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fbmsobcb.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163astsckbq.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163myugkbhv.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bnnghywn.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163gwzpjdfm.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xzflmgyn.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ppfmnlnu.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rtavmhyk.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163gqbvgtpn.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163vjfixclf.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163nqzaomam.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nsgchhen.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tbylsrhb.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163qefqntmg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rvlcwtaq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163lkvplgce.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bsbskvkl.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163svzjpzjf.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163aeletlxu.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163nvhnrwhj.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lvfntvzg.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wpglhbgb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163yvkakvpt.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163xnljznxv.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163yegrcvwg.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ojybfppg.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163pzhegwwe.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163kxbefqeg.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ouxratqr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163hluqwqmp.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ifslrezj.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163xxgoygnv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163ovpfustw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163alulhrtf.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163mlmozxyc.html

[A17] 位运算
来源：http://www.sxryk.cn/163dssambfs.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163macrzxgw.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163emiflody.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dhkhqzba.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163yvycgnwl.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pbdfqxpi.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qyxcvbve.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dapytdgl.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kyyzofiu.html


<!-- 参考信息 -->