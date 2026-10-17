外链999!wailian999！

[U97] JS：并发请求
来源：http://www.sxryk.cn/163saxqbhzy.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tqumlzog.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163bvbqwfcf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163wqkuszts.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163zorrqhho.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163hslbphkl.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163zabisqim.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bzbaiolt.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163rocqijje.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163msindzmz.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163rqrfeerj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163xjhyuqfs.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163jdwzyxgf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163eytobrhg.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163bmyndrgr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163uekmlyko.html

[U105] JS：节流
来源：http://www.xuanzx.com/163fjemcjov.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163zhuegvou.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ckxsxkjb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163kwggnlfb.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ilgnvsjm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ppmmnpny.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dgkoqndw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163tanqjoiy.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163konjepfr.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163uxxjtjbn.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163cdtsiayd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163fubbgauq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163mhecdruo.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163qgzjvdtu.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163umzeudes.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163xopztymu.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163bwyrivim.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ccpwfgwt.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163iwotqhvm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163enkqnjlr.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ktiaxcyh.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hiacnzsw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rkvgfwdu.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163dpyobxtg.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163bjdccqkl.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163qqutqgfm.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163rujpoyle.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ekladypb.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163pdnbdbtc.html

npx vite build
来源：http://www.sxryk.cn/163jqgvwwoh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163vvnpripj.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163mkrqlwjl.html

================================================================================
来源：http://www.sxryk.cn/163ykpnhhfl.html

统计汇总
来源：http://www.sxryk.cn/163ptlhcpns.html

================================================================================
来源：http://www.sxryk.cn/163gszbdryc.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163hhfudquz.html

Python ......... 252
来源：http://www.aibaodan.cn/163xutqgmdv.html

PHP ............ 252
来源：http://www.sxryk.cn/163eyqcflph.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163vtafgklo.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163rjljfddj.html

Java ........... 212
来源：http://www.aibaodan.cn/163lrlduzut.html

Go ............. 212
来源：http://www.xuanzx.com/163zvtpgzie.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163idpapqub.html

C# ............. 212
来源：http://www.xuanzx.com/163cwnkihtn.html

C .............. 30
来源：http://www.xuanzx.com/163jhekvtle.html

C++ ............ 30
来源：http://www.xuanzx.com/163zgupluog.html

SQL ............ 90
来源：http://www.sxryk.cn/163zuiabsro.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ignkdzcq.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163udbuyjjz.html

Swift .......... 15
来源：http://www.sxryk.cn/163kuhdzpzc.html

Lua ............ 10
来源：http://www.xuanzx.com/163uuwesath.html

Perl ........... 10
来源：http://www.aibaodan.cn/163tvvcqbuh.html

Scala .......... 10
来源：http://www.xuanzx.com/163jweqarry.html

------------------------------------
来源：http://www.aibaodan.cn/163scozsjnj.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163vsocuiar.html

按章节统计：
来源：http://www.sxryk.cn/163agvwjuqv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163cupojmju.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ucjtjtqi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163npqzqwao.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ziniqabi.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163lzmwuyko.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163nxuhmxfd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163fdkunpsz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mdgetucp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163digmbfok.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163dwlswkmm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163shiqkcbr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163srgwuuyq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sjovzxsu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163tmsdxnpt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163bzjaolah.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163iasyckwa.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163rnngapvp.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163riwbggyd.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163wgrfcdcr.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163tyhsrpha.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ldowigyr.html

------------------------------------
来源：http://www.xuanzx.com/163gophfedc.html

合计                                  2106 条
来源：http://www.xuanzx.com/163ujyfagev.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pumrhicg.html

使用提醒
来源：http://www.xuanzx.com/163nvfgvlgd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163tieyogry.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163cohjqxhh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163zzvarwsf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163fcvbqzpv.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163nxrbhcna.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163gkmlwmmn.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ykajrknf.html

================================================================================
来源：http://www.xuanzx.com/163ntnyxqek.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163gxlbycnd.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163lzfdzufm.html

================================================================================
来源：http://www.sxryk.cn/163klhxoecp.html

【收录内容】
来源：http://www.xuanzx.com/163kroeqjtl.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163tlaxeuct.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163edqwyhst.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163yrcoswft.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ejvxrsly.html

【使用说明】
来源：http://www.xuanzx.com/163zzyvqbga.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163nyqyrnhn.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163jtzcxpqf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163fjcijeyy.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ygikenot.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163rpezdycr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163tzptxtbe.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163disrbmqw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163wlbjfqwk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163lqrvezru.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163lbrrfger.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163lypybvhe.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ojyawoma.html

【文件统计】
来源：http://www.aibaodan.cn/163nvkolqud.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163hcaclpxs.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163dkzixbta.html

目  录
来源：http://www.aibaodan.cn/163hqckfoku.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zkjxolay.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ooqfthlz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163kekqmzsj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ttkxvpwe.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163scwgpgfh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163jwfopyob.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163rnonjuey.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163sqqxeyts.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163xxmjeppi.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rhoavmsi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163mptgprce.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cfyppqmj.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fmyyamyr.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iqnxzqhv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163zuojxlob.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163rdpqmpui.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tclckbym.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163kmkftnfu.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163qudehrjn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163xavdwlow.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xbpcetmd.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163wuyxhgjw.html

================================================================================
来源：http://www.sxryk.cn/163ompfyqeu.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163zyjqebjn.html

================================================================================
来源：http://www.xuanzx.com/163isokycbg.html

[A01] Hello World
来源：http://www.sxryk.cn/163uddjatkz.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163bylsuupu.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163fatoelde.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163wvoaukxl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163qxyeoqcc.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163hsiiggir.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163xpdpjgie.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163llynefna.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163zwzyuule.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ouwhgxsy.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163hovogjxa.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163zmqavbts.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ekgxbkeg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163sgjzrnnr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ptfezssp.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163tvuddooz.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163exfubufy.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jckagsbp.html

[A03] 常量定义
来源：http://www.xuanzx.com/163elkcdnya.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163qolivdhy.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163fplfrwpc.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163kxwpembx.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163sctxfgsg.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163jnnjrgio.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163lferilqq.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163fnwifhya.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jnjouzvp.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163fplauhhw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163qzbsqmrq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163eqpzlxeg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163zjdrnqcr.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163jsrgmoro.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163scafixkk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163ujlnsawo.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163eexaynmm.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163mwqcnmvb.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163icgyfpmm.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163uhsfmlok.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163njblkgeo.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163qhfqtfle.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163mgccnply.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163osrznsrn.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163eogdtqab.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zkrxjzdm.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fbnhdodq.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163nfvzlgos.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163jxrepvqk.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ddbfafmj.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163fbinglap.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163zcffcpqf.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ocipeihl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163vzstpkqc.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163itebjuut.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163mgotzhwk.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163kqafjiar.html

Py:   str(42)
来源：http://www.aibaodan.cn/163eauormlq.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163hfxcjkcs.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163sbvoxrnp.html

TS:   String(42)
来源：http://www.xuanzx.com/163qhgeqnqb.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163pjhhlfaf.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163ygipllho.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163rkmuzqpd.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163ixyxfbkb.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163cstzpsky.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163jlwnqfsf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163qqzztpgc.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163hktzpwnw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163rdfikkil.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163uxttcqkj.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163rgnnoivz.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163vgnkppaq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163pjocfoxa.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163gjadvptd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163mpadgxhm.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163aqqdpxgt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163gpqktlla.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163apnwzdbk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163wbftmdlr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163hmycukbq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163mbiiknhj.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163gtqkworb.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163vcvqziir.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163stmbfvyh.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163ecnvwtvm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163qbccsupg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163rkohvrbf.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163rrkwondn.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163owqowzcm.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163hskfbchc.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163tjmrllyl.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163rmkkbqzs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163dauhxrjl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wbokufvo.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qnkfxtne.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163almplxzl.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xsbxsibc.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163scatdyhh.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kjavrwru.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xwajdigo.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163wtmuwqhg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163uayvzwvh.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163kzbpoxmz.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163cvtacneb.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163kkwvscct.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163hlzoxwaw.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163mstmijdx.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163yrbjtucs.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163rvzgfpjf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163slbuqcgb.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ozrivlyr.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163bptqlwcy.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sjbsdcyf.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wtptoydv.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163xrukkxng.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xphymjpl.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163whckodgf.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gvrcvzbt.html

[A14] 注释写法
来源：http://www.sxryk.cn/163rhjvvrgk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163ebrgxprn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ikpezxqm.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xahnwdlg.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ebigvozc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163vphmmaar.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xpfivmuv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163sgmwvxyx.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mhkynnjs.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qbnwrmvj.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163lyuvelnq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163zmioemal.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163pvfnwgxj.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163qanewrvw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163xwojxdsd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163xugmstov.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163vrtfeere.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ktosfjfh.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163cdjlwljz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163alvfquwe.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ckeiamri.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163kaosbllo.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163hhuyzbbu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163fnhyxhji.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163iryegbng.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163mcbvbstc.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163ikzfqgsv.html

[A17] 位运算
来源：http://www.aibaodan.cn/163yrpuoyto.html


<!-- 参考信息 -->