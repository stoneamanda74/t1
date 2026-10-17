外链999!wailian999！

[U105] JS：节流
来源：http://www.aibaodan.cn/163btjcpmyv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163zmskvemo.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163jsuggibl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ydmzfhlx.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163thqpewoq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163fuiqawci.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ldxzsqhk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ttfflmsy.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ahmgkhif.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gjxozmky.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163gxhnzxvs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ietxtyqy.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163jgayitov.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163prizwelp.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163lmxuwbny.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163bmfkqlyx.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163obmqawkc.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163npvppofd.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163brnqxwwy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163awkdwrps.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163nnxjuyps.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163qpdvekaq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163jsrxnnxb.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163tntoynap.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163gvhfwqpp.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163jaxmhnum.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ngyhvkpa.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163rlvgbigx.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163aiaoingo.html

npx vite build
来源：http://www.xuanzx.com/163idpvnupw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163sxpzvitp.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ukqtvirw.html

================================================================================
来源：http://www.aibaodan.cn/163gkpalyra.html

统计汇总
来源：http://www.xuanzx.com/163gtugpzsi.html

================================================================================
来源：http://www.sxryk.cn/163yncsqojn.html

按语言统计（条）：
来源：http://www.sxryk.cn/163epsejcef.html

Python ......... 252
来源：http://www.sxryk.cn/163usxwjpvw.html

PHP ............ 252
来源：http://www.sxryk.cn/163qtwuoure.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163dxcijhfg.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163xbbdjneh.html

Java ........... 212
来源：http://www.aibaodan.cn/163pbpgfnsl.html

Go ............. 212
来源：http://www.xuanzx.com/163bilpjvey.html

Ruby ........... 212
来源：http://www.sxryk.cn/163wobelqds.html

C# ............. 212
来源：http://www.xuanzx.com/163hzxofzii.html

C .............. 30
来源：http://www.sxryk.cn/163ujoxpaik.html

C++ ............ 30
来源：http://www.aibaodan.cn/163benewutl.html

SQL ............ 90
来源：http://www.xuanzx.com/163htzxxpzf.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ovhoswlf.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163rpxtdhfs.html

Swift .......... 15
来源：http://www.xuanzx.com/163hecmewxa.html

Lua ............ 10
来源：http://www.aibaodan.cn/163hodmhjaa.html

Perl ........... 10
来源：http://www.xuanzx.com/163kilgosdh.html

Scala .......... 10
来源：http://www.sxryk.cn/163ymekilmb.html

------------------------------------
来源：http://www.xuanzx.com/163tsxdoigr.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163tabtjbiy.html

按章节统计：
来源：http://www.sxryk.cn/163nsqymmjg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163bqswpcpa.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163alovffut.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qvwajtux.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wlrjiemm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163fvcvwxpk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163wvhmejvf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hplliguf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jhiciygb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163usbcdecj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ydhraekf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wuccmuit.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xqdaxvqa.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vqadtbmm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163smhvemzl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163jrdydwzf.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fqvrmktf.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163pevbxfuv.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163hucqswkh.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163nlmcobas.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163jsyvehqt.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163lxfvpkvd.html

------------------------------------
来源：http://www.sxryk.cn/163ibsvgifl.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163nnlnfhwq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163czfhjkcj.html

使用提醒
来源：http://www.xuanzx.com/163istxrhig.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hsvdalzx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163lxspisay.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163xrssmzaj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163qolfaexf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163uhcleqdj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163iaqjtmcs.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163jckqphma.html

================================================================================
来源：http://www.aibaodan.cn/163vgsfenqa.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163jrtqlrwj.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163onipdtqr.html

================================================================================
来源：http://www.xuanzx.com/163woeitgwl.html

【收录内容】
来源：http://www.aibaodan.cn/163zzicgcev.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163qrtsdzod.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163wqbmnmvt.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163yvrivuor.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163egyejkty.html

【使用说明】
来源：http://www.sxryk.cn/163besqqwii.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ebyujoyr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ygsthqqu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163stftrulw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163jwmoqour.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163vzxzlssp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163zzowvkxb.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ukiaijce.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ihbwcqku.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163hmnegocr.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163vchxlapw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ehfdszkh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163zhcjyfpk.html

【文件统计】
来源：http://www.aibaodan.cn/163iapydzcj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163wowvvkfw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ofqdjxxz.html

目  录
来源：http://www.aibaodan.cn/163fjyveszz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zjgdfidq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163iwblodkx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nvojomgy.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ehbnunwe.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163auxmtuiy.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163vbobbivq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ilimvxjo.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ywxyqgtv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163mdyxawkr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xjclyimk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163epsxvjxv.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rakasvrz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jpmladii.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163uurftncl.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vpnplwbm.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163hhzbatbf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nzbizfub.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163mragdscq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163nbacupmj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163vpnxewel.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fjmcpcwx.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xwhakdvr.html

================================================================================
来源：http://www.aibaodan.cn/163valsputi.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163fwwblqfq.html

================================================================================
来源：http://www.xuanzx.com/163ejrjwceu.html

[A01] Hello World
来源：http://www.sxryk.cn/163ovxuqyyv.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ahsbtlze.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163etxiogqa.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163vytavhxf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163fuzubreg.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163bhiftzjk.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163uiubqrtg.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163bvbhnpic.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163ftyxkujd.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163mqqkboll.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163tkhwkfsj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163uyiofdtm.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163qczuwefp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163mglxcbdq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163dwuxjwld.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163kgzpyaal.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163udbxmimm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163mqvpvcye.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ytqibxpi.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ztgzstjt.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163dnurcopa.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163abpzwumm.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163oinkddbz.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ioauiugw.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163rgycvful.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163uskmsfqd.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zknehyte.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163lyefqrdo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163osxecvpg.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163vavqyzql.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163xdlxnhlz.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163bcqsgwvj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163okggzeaw.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163uqeqqbuq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163ylrehpoh.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163wtllthkp.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163nefshnap.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163uzbsosjz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163jfctficw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163sdrsdodo.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163recbnewy.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ogafjoyt.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163emaqqkdh.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qjwezqjg.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lqqiaxnv.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163tbcpsoqp.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163atmvjvye.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163fpythoep.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163sgxsmsua.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163uthypogf.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163savkhzoc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163yoymkgqa.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163lcqxpvwj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163glfwgrok.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163buicudoo.html

Py:   str(42)
来源：http://www.aibaodan.cn/163cwsczwkm.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163mpmjdauq.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163kfndctgz.html

TS:   String(42)
来源：http://www.xuanzx.com/163fczzirzn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163czungvbf.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163kkfqzjkl.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163nejqbvbz.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ezrvuhuc.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ehvojgis.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163jonemydw.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163vqjyefmi.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163vqhbklsg.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163mpnhqrxu.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163qntxxfda.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163eoqmtwgv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ggytczwz.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ymyoqsse.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163dzqezfdn.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163izxfvwok.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ndlkquxy.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163miwzkrmu.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163hulxbhhr.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163oopavyok.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163shcwwhqv.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163efpwnbhn.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163iksqnxiq.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163zpgaahnf.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163vmiyvtap.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163dvapuupf.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163pwnyulqm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ezcdtunn.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163zxcmgeiy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163kunixfmh.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163clmeuogk.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163duuetpjz.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163soxbeqle.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163hhtswspj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ayuesdli.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163eignkfne.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163brguuyey.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ddrpabiq.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163uuabmzbj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163psectocj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163luhfrcgy.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163yczlzmtb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163vgjccsyu.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163amhxzstj.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163pwztakjd.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163hwyewnnq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163kuvcnade.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163qpcrmyuw.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163tpgoorlf.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163jzvnruct.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163lgttkife.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zqptipos.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163ekvsygay.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wjdfxhms.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tpuupnud.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163tzjuhykp.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vuyrwlix.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163huatwigj.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163szyftlim.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163qmhveniq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163oiajajkl.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163jzlcdwnb.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bthxuumt.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163raikjauq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163vphihsmv.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tokuxuev.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ksjrdhhy.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mfvqigix.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163nbjodlcu.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163yllvxgrc.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163zhinmonq.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ioqrjhmm.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qmqswreu.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163smsqxgnj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163tnewhiio.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163pzbjbzhv.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163akjtedqa.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163hdqiidcx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163zdhudpig.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163yazteupq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163cpulxszo.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163rarjgrbd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163kmbqvacw.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163mpjwutyb.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163poqcyjlg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xcbbtrin.html

[A17] 位运算
来源：http://www.xuanzx.com/163jszecxpb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bbkxzfbg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163rhjhbtqd.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163aplynlnb.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163qmtyhxfp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ysdrqijx.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163myjjvvme.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163eaqsxtxc.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163klgpcdei.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ldlgeffa.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163rweriixc.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163wjsyzcah.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ibswdizu.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163durbvmqi.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163qvjbhsiv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163snodtidp.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163aafzhanq.html


<!-- 参考信息 -->