外链999!wailian999！

[U103] JS：定时器
来源：http://www.sxryk.cn/163ulbhsiuf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163imvomxld.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mkukkzqj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163oylrzaqu.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163rmqiqcgx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163rppkyose.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163tamkjrps.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163plnzbnhv.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163utsfnfzo.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163mubqmapz.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163torzovjp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163kwcvisyw.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163uwzxtuqu.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xnvxlihq.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163eljssqbc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163yiarpxbd.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ciecyhej.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163kmunmubg.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163okcsihlm.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163srxvjfat.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163lbqvfftj.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cfnxbrch.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163rfsoybka.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163tyhfsxej.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163vmuzteto.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163eeiyxuzc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163tymmpjes.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163psfwpsyq.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163uphdikqt.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163exhqrstu.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163kxfhclew.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163fntdjlqu.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163tynpgzzc.html

npx vite build
来源：http://www.xuanzx.com/163jyvrpiam.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163akzyqcgq.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163rcfchrrs.html

================================================================================
来源：http://www.xuanzx.com/163dqnglmdf.html

统计汇总
来源：http://www.aibaodan.cn/163tdexkdgr.html

================================================================================
来源：http://www.xuanzx.com/163ozdkjycd.html

按语言统计（条）：
来源：http://www.xuanzx.com/163goafdjoc.html

Python ......... 252
来源：http://www.aibaodan.cn/163ppsfahdy.html

PHP ............ 252
来源：http://www.aibaodan.cn/163fazcvmag.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163zqspvppg.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163pgzcgyab.html

Java ........... 212
来源：http://www.sxryk.cn/163mktbyeib.html

Go ............. 212
来源：http://www.aibaodan.cn/163itqdxhzc.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163qzgfqemy.html

C# ............. 212
来源：http://www.sxryk.cn/163zfukqeew.html

C .............. 30
来源：http://www.sxryk.cn/163qfgryubr.html

C++ ............ 30
来源：http://www.aibaodan.cn/163qwuoflua.html

SQL ............ 90
来源：http://www.sxryk.cn/163nsvoxlrd.html

Bash ........... 80
来源：http://www.xuanzx.com/163wkmabobu.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163bnzugnxg.html

Swift .......... 15
来源：http://www.aibaodan.cn/163tzcwcoah.html

Lua ............ 10
来源：http://www.xuanzx.com/163dwppvqje.html

Perl ........... 10
来源：http://www.aibaodan.cn/163dlaghcud.html

Scala .......... 10
来源：http://www.sxryk.cn/163qanldhww.html

------------------------------------
来源：http://www.sxryk.cn/163dihtsshi.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163pahgexfu.html

按章节统计：
来源：http://www.sxryk.cn/163allouzqt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cjhnjnbr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rsxmdlck.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mqzdylmq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163yarebiig.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163qodwvzfz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ayljigsl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ldozkvve.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163cwxjowar.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xgfdclql.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xbczhnxo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kdbkqjyn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ygwkwywe.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163oybpxmlz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xtxjtckj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163wwimjylc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dglztwsy.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163muerefex.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163yjfhkzpe.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163hrnmulgw.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163azlwhwtz.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163syslxzux.html

------------------------------------
来源：http://www.aibaodan.cn/163txcwcpgb.html

合计                                  2106 条
来源：http://www.xuanzx.com/163kmniejag.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163thbgetiu.html

使用提醒
来源：http://www.aibaodan.cn/163ydisyxkf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hptbnyku.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163asnmwoyo.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163kjerqvvi.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163tdmddyav.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163fzbpgesc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ddqqsiuo.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163cijtrcig.html

================================================================================
来源：http://www.sxryk.cn/163zepskxhy.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ibsjykeg.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163gknppqmd.html

================================================================================
来源：http://www.sxryk.cn/163defieegs.html

【收录内容】
来源：http://www.sxryk.cn/163djpcbxce.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163qklnscau.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ihlcbfmv.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163wkmwqdpr.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163krmaepem.html

【使用说明】
来源：http://www.sxryk.cn/163gqhsxfee.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163zkugwokl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163mycrjqje.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163umoumlce.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163khmymumz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163aalnlest.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ziqpnoqk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163pbqjavwb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163yldloirn.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163qmsgifrt.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163uzinkjao.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163xdnwtfzi.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163octuxtzw.html

【文件统计】
来源：http://www.xuanzx.com/163xinvkhyn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163hcixejua.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dvdvgzpg.html

目  录
来源：http://www.aibaodan.cn/163zhmuykha.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163msptfrjb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163hnppvrzg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163cigpabiv.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163efzripbj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163nuvaljer.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163kbyixeoi.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163kficxngg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bbnhwari.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163wvsbigzj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qepirvlr.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163jttykckd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iawwgwoy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163aezymvzm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163euajviiv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163bimkapph.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163knqupfda.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hmgrvsji.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163boxqlzna.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163qccbhjol.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163lalvsujw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kretfqwa.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ovninfpc.html

================================================================================
来源：http://www.aibaodan.cn/163kuwzgfuf.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163aqnllwyl.html

================================================================================
来源：http://www.aibaodan.cn/163xlszvvjv.html

[A01] Hello World
来源：http://www.aibaodan.cn/163nbnprwlq.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163citzwipm.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163eipvgkgt.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163nssqxlaf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163silynmcx.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163xlryfqrp.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163xagoxqoc.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163wpqbnwre.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163hcbwxbwd.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163rmdyedli.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163guktcwvj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163gqshewtp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ubseahpy.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163isyuxuql.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163bkfbdzeq.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163cpnrrwqp.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163sqxxufmd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163flfejtnt.html

[A03] 常量定义
来源：http://www.sxryk.cn/163lgrhlwab.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163dhjwywea.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ogcykrjg.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ilozuncq.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163loobwjim.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163qgsoyjvl.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163kvuijowy.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163owmmzmty.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163bqbdikhk.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163ioxfsffm.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163mietsrwn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163miicoxgp.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163lirhpbko.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163mjkrhzoa.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163rjsnfnpm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163eaxzirkc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163nuamjksg.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ueqfbvnn.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163nxfucuef.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163tnbzppgz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163vmvfcotk.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163snfdvnkb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ilfgzyfn.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163knkekauj.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xdpxzoll.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ujbiczsh.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xjskqpru.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163eqoumdza.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163skfyfupt.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163uiofddur.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163jddgtggf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163piroqnuj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163fahawufj.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163vtgvmjcw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163nguqkohz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163vaiuivfk.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163euxbgqcn.html

Py:   str(42)
来源：http://www.xuanzx.com/163pwriddnr.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163nltoowgz.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163mchrkbhk.html

TS:   String(42)
来源：http://www.sxryk.cn/163czjbfcta.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163siwowecb.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163ehubipzx.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163jglsiwaq.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163wjlukukr.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163zcchlxqq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163ekfryfvs.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163vgmcfrty.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163lqxjvfwj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163nwjyzmfs.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ncvblbvk.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163tkgwnrxy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163wgjsrewd.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163akqwfxke.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163rnztucdv.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163hkvubvey.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163uhiepyub.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163ducenpld.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163eecmqmbe.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163hjjuiyji.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163hjttnnfl.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163znhnebix.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163hkvdjilf.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163epufqxkk.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163tbjtunnn.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163ueywqjfj.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163yxzpjify.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163oszxrsly.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163lzmzymhw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163ckzlcxou.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163vtsmgose.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163cakxfzle.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163fcpbyauj.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163lifkbyvi.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wtbzmkmc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163otsmxznf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wodgtwrs.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yvzhjnjo.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163njusmoqr.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bazlyvkg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yvejeprn.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163ddaaqxlb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163eawqjpaq.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ibkyqmom.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163atpvuqgd.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163sbfblkas.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163tirpccpk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163hqnsbqph.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163tyltiuya.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ovorvqgc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163yqfgckje.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jwufdmhf.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163lamwnkgo.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ravxgton.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lkapwfez.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163okhneixi.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xnaryasc.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163awzncuvi.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ureammhe.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163muhapuys.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163fakxojng.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hbtqfjgl.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hnpuujdh.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ykwgihlm.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ngplibhu.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nudcfrmt.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163vhdoenhy.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jyeuysar.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163kvoeivri.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163oloqsoge.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163azakxjkn.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163telqvavt.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uphoyicm.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163opaxgoak.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163yzrinzpd.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163smjnzbom.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163xtdcbwol.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163januqesa.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163dupcavvp.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163qwbudcnn.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163avifnymo.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163axdkgvcb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163sdvwlrlf.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163mopdycbu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163cyhtdbnr.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163gmvfejfe.html

[A17] 位运算
来源：http://www.sxryk.cn/163kvbwgjtg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uaessnft.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163wiszjexn.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163igsspktm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163fbznfvsf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yfhstclo.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lkjetayd.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163skfvgzba.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ubljzzuj.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163kfznjfqv.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163dusiadoo.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163rpzafocu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163nqglpozy.html


<!-- 参考信息 -->