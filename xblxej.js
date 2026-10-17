外链999!wailian999！

[U105] JS：节流
来源：http://www.aibaodan.cn/163lportrpm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163qgmjryhu.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ekopzush.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163jrlgrlwz.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163sjrlfcgl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163dkkyefng.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ielqtyey.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163dsmqskeh.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163uxpxvdly.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mtwnvqpi.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163fmsmksvx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163lpeoktew.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163qwwjykey.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163bqiyqzbb.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163etsqaaqz.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163fgqtoaca.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163jsqorijv.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jhcfcpjk.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163oxdzqzmj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bebfegjl.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pptqdycj.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163mmbjjknm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163gqtqtueq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163tokzbtyq.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163awuobrsg.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163tkcskgzd.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163mlfqznpo.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163oceftgvj.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163suepsmfc.html

npx vite build
来源：http://www.xuanzx.com/163bnzcdqxe.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163lsoqyvuy.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rcospqpv.html

================================================================================
来源：http://www.sxryk.cn/163ybbzdzoe.html

统计汇总
来源：http://www.aibaodan.cn/163vmmzjqkt.html

================================================================================
来源：http://www.xuanzx.com/163yufpqymx.html

按语言统计（条）：
来源：http://www.sxryk.cn/163baravwmr.html

Python ......... 252
来源：http://www.xuanzx.com/163zoputbhd.html

PHP ............ 252
来源：http://www.xuanzx.com/163edzbifgz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163xvjyrnno.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163adbqffyj.html

Java ........... 212
来源：http://www.aibaodan.cn/163hobnkqnu.html

Go ............. 212
来源：http://www.sxryk.cn/163cxsmqlgm.html

Ruby ........... 212
来源：http://www.sxryk.cn/163suomvtea.html

C# ............. 212
来源：http://www.xuanzx.com/163qjsdcuco.html

C .............. 30
来源：http://www.xuanzx.com/163onkzryxo.html

C++ ............ 30
来源：http://www.aibaodan.cn/163krwbgrhb.html

SQL ............ 90
来源：http://www.aibaodan.cn/163lsmmemlf.html

Bash ........... 80
来源：http://www.aibaodan.cn/163gzcgynuw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163zappibkn.html

Swift .......... 15
来源：http://www.aibaodan.cn/163buobcczh.html

Lua ............ 10
来源：http://www.sxryk.cn/163okrurihh.html

Perl ........... 10
来源：http://www.xuanzx.com/163esfhvddg.html

Scala .......... 10
来源：http://www.sxryk.cn/163ewlcmowt.html

------------------------------------
来源：http://www.sxryk.cn/163uwimnghw.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163frrqvrep.html

按章节统计：
来源：http://www.xuanzx.com/163urdbzgyg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vojlbjmb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nbxezcwt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yoggzjbk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wpqohtgu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163frtkbzif.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163strxgipn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qhgnvott.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qigdiwhy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nunguexo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163bzpwbmvy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163prxksrlb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jiwifnbo.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lffcmajz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163dpqtpogr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163hjhzxbcc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xqrmstdo.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163iojcpjfe.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163hpvlxfuv.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163hbjwsrsy.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163jctbvsek.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163kqnfljxx.html

------------------------------------
来源：http://www.aibaodan.cn/163mjfagguh.html

合计                                  2106 条
来源：http://www.xuanzx.com/163xwctynxj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kgxcjdea.html

使用提醒
来源：http://www.aibaodan.cn/163okkdxbqr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jnqvnwno.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163qxvgvykk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163zgewjcty.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163oynckngq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163iruurhtn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163wxxedqle.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163bcwqwqkg.html

================================================================================
来源：http://www.sxryk.cn/163bmdfxrwm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163kudceqta.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163nziofjtq.html

================================================================================
来源：http://www.sxryk.cn/163qgenldmk.html

【收录内容】
来源：http://www.sxryk.cn/163yrzxqlkm.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163dbcngkzx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163awwfbbjv.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163mksdgaug.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163snenpmpp.html

【使用说明】
来源：http://www.aibaodan.cn/163ordfrviu.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163jjuupqse.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163lzjavoqb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163qojygzkg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163rguznsxh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163mvokfhbb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163yorayszl.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163kcksjopm.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163fvncksgq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163duzxqyia.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163fyuworra.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163hdjvwwwy.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ljnjnimr.html

【文件统计】
来源：http://www.xuanzx.com/163ttchowlr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163obvsmrfw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hwgpzvou.html

目  录
来源：http://www.xuanzx.com/163wblczboi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ymwevkjj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163jodrpfmy.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163uzxxofgb.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163koybvfiw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163lkvthvrd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163iygrtirj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vsjxkzdc.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163dmowicur.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163zntknfcz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163znbhokai.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163mctkvxpu.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163cfwyaqbp.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hfllrncu.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ouvsasjc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ekipxlzw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163hiyhonbc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lrdghakt.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163sztkwsvz.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163mkcnvlyu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163jfmteiqj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wsefugun.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rsmvgjzu.html

================================================================================
来源：http://www.aibaodan.cn/163wxgotrxz.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163jtwigijb.html

================================================================================
来源：http://www.sxryk.cn/163auohmbgq.html

[A01] Hello World
来源：http://www.xuanzx.com/163zjsepjiu.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163zhaohtgm.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ucaakeft.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ldoliszz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163lyicubwo.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163gvxljura.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163wcaogxxh.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163cbkldlry.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163yghxvazg.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163jxwzxpdc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163aychdmvu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163pjvlhpsk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163hnobncej.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163luzxmxhj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163tcaaeotf.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ujlhpkeo.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163tetjkcol.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163tbkdxecd.html

[A03] 常量定义
来源：http://www.xuanzx.com/163vfhujduf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163idndbanb.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163nohqnzrs.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163fikfgefk.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163fhoyvrrh.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163bvrzvdhn.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163navomush.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163skqiifox.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163trqskodu.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163nxgajplx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163rkbvqrwo.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163hvzqhkyj.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163ikqkpgrw.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163azaetait.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163segkpvyw.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163xahwmzse.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ghddyvgg.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163owlgoeoy.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163ausgqppy.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163lzjfgsux.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163mygcenod.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163cbzfzuno.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163udhcwdvy.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mqmdaotp.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dlvnfaxd.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ffpmchaf.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nuzgpzmq.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163oqcbvfmw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163aexrwgrn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163bbslupwi.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163hsewrivc.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163efuycmnu.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163pypegfkp.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163ddeqcjkt.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163kdeqpjdm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163faspogiq.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163vcaxsdeq.html

Py:   str(42)
来源：http://www.aibaodan.cn/163jzddgnww.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163zyvhgsng.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163pfbnnpfk.html

TS:   String(42)
来源：http://www.sxryk.cn/163mbanbeha.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163bpgqfyiv.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163lxalihfv.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163tbloflwf.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ldjavctb.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163mevkyinp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163khtamcfq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163pblirrko.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163kyjdohyk.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163zajfqqfk.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163kypnbjvu.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163lhynxuwq.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163hzijolma.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163fkekxowb.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163cbokolap.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163cqjbsrqa.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163tzyxlmlt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163iefmeziq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163pwcnafqo.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163rhkpwybh.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163aomztuiv.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ijnxzigw.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163fjzhtdbi.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163goozbied.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163xcthfwlx.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163ictpbikm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163nghyitot.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163kjgvtanh.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163lleglrds.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163gqeudokx.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163nsfmuiio.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163kseanxow.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163yjdxsxmk.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163hmndbybr.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163csgxhuxl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163txvottuc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fiexsxld.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kzrjxlcp.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163cbzztdqv.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163asjxmrsl.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jclwlesq.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163ircvfckt.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163kgstesqt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163acboboza.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163eehvfnjt.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163hqauosmb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163hnvccsel.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ptdvjlsi.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163xyjjxfmn.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163eysxzzfu.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163buvdlknt.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kpdguhhd.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163ntkkjiis.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163inthpszw.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yfmxjloo.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163gspajtao.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bzhaduhu.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163szztkzto.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zycjyulw.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163birvgfxj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163szhbsbgk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vubzizkb.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kmyahkme.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hhulpbet.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163mocqzagi.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163yryrdokg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163zxfpathh.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163rqsszlvg.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163gptqqrcc.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163bjlwdhld.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163vqtjtcrd.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163gcngqxhl.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163qtnthukw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163qjzogmgj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163iaqiikva.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163xpkfprff.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163rkfelvhz.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163dshzdnrb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ejbkhyru.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163zqhwhebn.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163dovdglpn.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163whkonxox.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163fxmkzlij.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163kdaugpik.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163inpaoakj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163pjkbgaav.html

[A17] 位运算
来源：http://www.xuanzx.com/163kjfwwhfs.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163impyxykt.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163pimwevkg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fqmvossd.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163gikgxfov.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yplkvtvk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dgkdgsjf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vltyjuwg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jaepjhpz.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163sfkhselp.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163jkomyjyo.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163zxghkgkb.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163pdbbpkvz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163cljgebmq.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163bjgxbiuz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163dojpuqgi.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163hnsxzyhy.html


<!-- 参考信息 -->