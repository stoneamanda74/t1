外链999!wailian999！

[U103] JS：定时器
来源：http://www.aibaodan.cn/163trbdgoli.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163admbszgu.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163cfhlrzgw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vlekemed.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ynneultz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163uqfxxjya.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163uhysbxek.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163kqyfpyvu.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163jqegllcm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163lfkpdhik.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163aeeoyppr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163kuggcvnv.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ruckkmnp.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bmxuiiut.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163njctvxil.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163pkdkhhyy.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ehozeaig.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163gfnulcss.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163sayceqhf.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ooszbeuz.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qtfosyjq.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zjjinayv.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163kcmisaji.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kysxrsmo.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163qwsnbmyy.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163rizhmffr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163sclewzda.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163qilzmzon.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163hxumdbxm.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bscjuvwa.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163xdnvdwdq.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163kvhdqxee.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qbsfhetk.html

npx vite build
来源：http://www.sxryk.cn/163dfngwgfa.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163wmxnrgbq.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163rstvudhp.html

================================================================================
来源：http://www.sxryk.cn/163mipobidw.html

统计汇总
来源：http://www.sxryk.cn/163ycbebzpf.html

================================================================================
来源：http://www.aibaodan.cn/163tsgmabyk.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163hcighabi.html

Python ......... 252
来源：http://www.xuanzx.com/163jrpifyjm.html

PHP ............ 252
来源：http://www.xuanzx.com/163vvpbxrph.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ohmgvkeb.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163obnpqync.html

Java ........... 212
来源：http://www.xuanzx.com/163odmvjujj.html

Go ............. 212
来源：http://www.xuanzx.com/163pkunirnt.html

Ruby ........... 212
来源：http://www.xuanzx.com/163gjjejxkx.html

C# ............. 212
来源：http://www.aibaodan.cn/163wiufzshz.html

C .............. 30
来源：http://www.sxryk.cn/163ywsqvzex.html

C++ ............ 30
来源：http://www.aibaodan.cn/163fonibaer.html

SQL ............ 90
来源：http://www.xuanzx.com/163gsgsofef.html

Bash ........... 80
来源：http://www.aibaodan.cn/163lzvkrcwj.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163prmwedyh.html

Swift .......... 15
来源：http://www.xuanzx.com/163cbcgjkzg.html

Lua ............ 10
来源：http://www.aibaodan.cn/163doggcses.html

Perl ........... 10
来源：http://www.aibaodan.cn/163wmrwgjff.html

Scala .......... 10
来源：http://www.xuanzx.com/163dpstzdqv.html

------------------------------------
来源：http://www.aibaodan.cn/163htijwaua.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163qxidpdqs.html

按章节统计：
来源：http://www.aibaodan.cn/163lzeurpuu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163glzvucst.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163isjbqoah.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163oislbsfw.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163orisklcd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163dmqjinjx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ofnpxqdb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mtequzuq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163rbzqmxic.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163lmrnfcjt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163rtamlayg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sralhnbc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jezxqkyu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kuzwezoh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163wmqcpcis.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163iaruyiqe.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jaetojji.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163amgoftbo.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163vqnyyquy.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163jrzgwkfa.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163bujblutp.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163haxzyezj.html

------------------------------------
来源：http://www.xuanzx.com/163rnpicoud.html

合计                                  2106 条
来源：http://www.sxryk.cn/163bndpeell.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mhexjuuz.html

使用提醒
来源：http://www.sxryk.cn/163tstclosi.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hwcbcguc.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163bpevvfpj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163tvhacvdw.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163zlxunlok.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163bjcmtrnw.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163peihhzkg.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163hjqbzbsu.html

================================================================================
来源：http://www.aibaodan.cn/163ewvyhmwp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163vgssnlkb.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163khygaaew.html

================================================================================
来源：http://www.xuanzx.com/163urncmrxv.html

【收录内容】
来源：http://www.aibaodan.cn/163dzkbamny.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163pfrrjnab.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163lszazpkj.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163uavklkuj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163tjydpoyz.html

【使用说明】
来源：http://www.aibaodan.cn/163ditggwoz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163uiwfzmxg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163fdaqzyoi.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163qucmiyyz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163weycoymk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163sngrxtue.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163egaqqfja.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163zjpjxztg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163zqfvbfbg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163lgafjkag.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163qjxmkfpo.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163pxwsyxeo.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163vpicfzzs.html

【文件统计】
来源：http://www.aibaodan.cn/163voxratrs.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ubvmrvxl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pmtdexjt.html

目  录
来源：http://www.xuanzx.com/163qtwomtvr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163omutybmm.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dnpxwqqa.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ipimasft.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163khoymdab.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163okeujhgz.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163vwjlzshf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xqxjmltc.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hnpkelnj.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163whjnzboc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163uwywmcll.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163xaenupna.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zmcgmsco.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163oxntnhqh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kgzgcxvd.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163zumxbgrt.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ydvjtyer.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jalitcha.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163pduqtkyv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163luxlmpdv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163ndipvybi.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lcrdztgl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163hrvylbal.html

================================================================================
来源：http://www.sxryk.cn/163rdfkdzdz.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163dstacjco.html

================================================================================
来源：http://www.xuanzx.com/163etbfjupo.html

[A01] Hello World
来源：http://www.sxryk.cn/163mhieacpv.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163rsbxybct.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ocyyccoz.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163wlddbpnk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ozxtmgrr.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163okqpvxbq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163raoymakc.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163juzzyuij.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163vhjrdndy.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163vilxhkad.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163drkiwmnj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163zeqocquc.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163lkhehyds.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163iavixrgw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rarllxtu.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163kwisrbrx.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ghzqpdpl.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jkbgrhou.html

[A03] 常量定义
来源：http://www.xuanzx.com/163essnyybd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163cowzfnlx.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163eenmxkxi.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163cnsvgwqo.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163lfdtwlqf.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163velktpyq.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ifieemmk.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163iskloxrm.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163tixsgfid.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163cyncmvwq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ksxgeddq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163vcaixqad.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163scqfoorm.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163tziqqgte.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163pjhdwdyo.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163qjwdofug.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163bctvlsts.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163hkaeuclc.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163uxilrldq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163lwuqmzhl.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163xknlllru.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163uqxlvdnb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ttfylpuc.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zrrlidwa.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jaserqgv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kyxwmera.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ixtmgrkx.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163glqhdyft.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163getvpwle.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163dscoltuy.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163rbbrzssm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163ufmfvxyk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ezdpyfda.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163qpnpbdbd.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163auqjarte.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163oqlonsjh.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163ewtoxlof.html

Py:   str(42)
来源：http://www.aibaodan.cn/163mizmbnxd.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163yzuwpkvf.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163dshdmpvi.html

TS:   String(42)
来源：http://www.sxryk.cn/163rpfhspbn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163risumoue.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163bqyxwuhh.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163uqspxstv.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163zcflopgs.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163fkbbpqez.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163sbpnsqiy.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163egddhfvm.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163ntifdirg.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163fcsflare.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163komubocg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163ojhrawlo.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163oozsicwp.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163natuwvms.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163rflipoqx.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ortzyjkc.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ffxmmgjq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163paaykonh.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163nyuytbbl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163smpltqlz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163swbxwjlw.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163dvnujnft.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163ijuvpdxm.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163ddtrdyfg.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163jlhzyvmm.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163mwmjjxeo.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163kadtalxz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163xsutbcyp.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163lcwclmrk.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163iihhmzgk.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163fwjqxgkd.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163grerkdme.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163vlihtbmx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163qexzjppv.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zpsanqdp.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gffumewm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fzukreer.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163amnhamge.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163sxoxixfi.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163imywyhlv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ttqrhoeh.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163pkirnibf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163qlixsnma.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163fpsneblt.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163xrevbgji.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163vsnksegd.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163fkhwriaa.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163qrtpjmej.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163jopjtdwc.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163jxzaqwkg.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163wyxtihmr.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163oblfupnn.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163vtvegyxu.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fnmnduiy.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wvwnajlj.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ftaghhwl.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163koantfuk.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163poqdexcc.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ovnqfhvo.html

[A14] 注释写法
来源：http://www.xuanzx.com/163jahruvqb.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163pjqwzcbg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163osjrftne.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wbjivzfa.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vvnkajjl.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163mhkxront.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sctbovor.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163hrkjshyp.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nknfszzo.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163jumutnsf.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163oxohamgm.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163vwtlzily.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tjxzvxtn.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163pxbhelzm.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163iqzudgwx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163fscistes.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163jmgaoate.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163agpybtkn.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163njxlpvei.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163qubgdvpp.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163vajcsscx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163jfzkgbko.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163malycrho.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163zlmpddrw.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163jfgrhtwu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163tjsjxgzm.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163wlyjjsek.html

[A17] 位运算
来源：http://www.xuanzx.com/163uazvjifi.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vxystwqn.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163lgmddqcp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163thkhkxhs.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163hghbcpjb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mvgymxbb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vgngrsme.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163scjbwauq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hkpmkdjd.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163hxcdrgin.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jdpdotsd.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163qkyslpvs.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163yikesecm.html


<!-- 参考信息 -->