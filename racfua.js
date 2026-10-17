外链999!wailian999！

[U97] JS：并发请求
来源：http://www.sxryk.cn/163etksyrfc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163eafjoxxc.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163wtdblfmf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163qdcwkotu.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163sdruislh.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163mzljaotj.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ofszsyhd.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163gsfodmgp.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163tztlfscm.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163oylbovih.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vfymjqne.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163hrxvznxw.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163mslmubvx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163jobdihwo.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163pwdwsiok.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qjosvwqj.html

[U105] JS：节流
来源：http://www.xuanzx.com/163mevwbqsm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163hhpamdlq.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163fbduqhhq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ehvkbwev.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163hpdomcyn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163zfpfqdhf.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163tmvfeqki.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163budbxbge.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ehcjgjzi.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jimhfhwi.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ttprmlkp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163qgdwxwll.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163wjjrhefv.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163zxubinyn.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163gjqnawnw.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163vhqqgoim.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163lzrpmbrt.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vtvvsjce.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163vmxwhjhs.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jqefcjrt.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ppgkvihr.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ztwbfjie.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163sracnwzm.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163tznfpyds.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ciffaacp.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163jnhgdreq.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163spuotlgb.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163bvuochiw.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163cwbhaxae.html

npx vite build
来源：http://www.aibaodan.cn/163gysvhjsa.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163zxjunzmi.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ubdlitgj.html

================================================================================
来源：http://www.aibaodan.cn/163zhwmmpkr.html

统计汇总
来源：http://www.sxryk.cn/163atyawchv.html

================================================================================
来源：http://www.sxryk.cn/163krsosxjv.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163zahiyddb.html

Python ......... 252
来源：http://www.aibaodan.cn/163ncviuhna.html

PHP ............ 252
来源：http://www.sxryk.cn/163cpgyfdly.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163zechejpg.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163mitdthiv.html

Java ........... 212
来源：http://www.xuanzx.com/163hjlqdvyo.html

Go ............. 212
来源：http://www.aibaodan.cn/163zsqbrmeo.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163fdccfdik.html

C# ............. 212
来源：http://www.xuanzx.com/163thbnbubz.html

C .............. 30
来源：http://www.xuanzx.com/163dhurswnu.html

C++ ............ 30
来源：http://www.aibaodan.cn/163czpvzymo.html

SQL ............ 90
来源：http://www.aibaodan.cn/163obpbcvtk.html

Bash ........... 80
来源：http://www.xuanzx.com/163eurdsxae.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ixtajole.html

Swift .......... 15
来源：http://www.aibaodan.cn/163bhjldfhu.html

Lua ............ 10
来源：http://www.sxryk.cn/163wfquuaat.html

Perl ........... 10
来源：http://www.aibaodan.cn/163gpzwqysm.html

Scala .......... 10
来源：http://www.aibaodan.cn/163rcmddekd.html

------------------------------------
来源：http://www.aibaodan.cn/163ovkinhhx.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163kbewlhoj.html

按章节统计：
来源：http://www.aibaodan.cn/163yyflcrcj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163bsdbpahd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mfvakrpn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163sxtroqar.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163bsurbelh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163aarmorof.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xaheozwv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qppxqfud.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163msuoaptp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163useteoza.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163mkppnbtl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163upxeumru.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ivcpzvlm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tfbwewir.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163oiaywudl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163tshjeucc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163krzwxqqj.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163rygzsbpv.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163mlawclhb.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ymbnfawd.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ribthuue.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163baoibzpk.html

------------------------------------
来源：http://www.xuanzx.com/163ycyratig.html

合计                                  2106 条
来源：http://www.sxryk.cn/163wlmpkytp.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gnposxxb.html

使用提醒
来源：http://www.xuanzx.com/163twuygshh.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ljskrdrw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163hgatvkpj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163pufjhllu.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163pxretlfh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163luzyuort.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163gkhcpbws.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163zcxcefgr.html

================================================================================
来源：http://www.sxryk.cn/163wanywsln.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163jknuqjee.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163gdrcligi.html

================================================================================
来源：http://www.sxryk.cn/163geixujnq.html

【收录内容】
来源：http://www.xuanzx.com/163qwogezjj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163uavyqwlg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163rjaatelt.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163fxhzurac.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163isdpiafi.html

【使用说明】
来源：http://www.aibaodan.cn/163xjlrnkyt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163qehvbzhz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163xkxsdygp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163ttoncfrl.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163bprgsrbv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163qupbxlyw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163tqnftrys.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163slvcaqic.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163edrbkwam.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163zutejcdf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163fsccynyo.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ivkvcphl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163qoawzukc.html

【文件统计】
来源：http://www.aibaodan.cn/163zciwkect.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163pptfnnni.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bromncoi.html

目  录
来源：http://www.xuanzx.com/163qzotlblu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163brlfskjk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163pjrwhgrr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ttytdthj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163rgaigmew.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163anwweuda.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163boxlyohg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163tymozusg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wlwbutbf.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163uucqtqxp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yqmjvxea.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163goscnyqk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pczymovs.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ozwgequv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vtgctlgo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163uukxqlnu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163bpctywce.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163poecjquk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163cllcxxjp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163dmjjfvsx.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163fslxcywl.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vtcinbhb.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ojawmcpy.html

================================================================================
来源：http://www.aibaodan.cn/163dzonqfls.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163qpgvhhfw.html

================================================================================
来源：http://www.aibaodan.cn/163dxhelovm.html

[A01] Hello World
来源：http://www.xuanzx.com/163ibfscejx.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163aasfcqbt.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163kdehezjg.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jkzkmoni.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ufpdfpfu.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163acqholnz.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163hpbymkoi.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163zcamilmd.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163vzfakbvm.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163zyqcbtzv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163izjzgjqa.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163eipczyhm.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163dnxhaspk.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163yricqbyd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xnqzsbzh.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163opcuklyy.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163vvbvsmeb.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163axfczive.html

[A03] 常量定义
来源：http://www.sxryk.cn/163ckeylixt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163hfrdcsxf.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163jllmzcfv.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163tzkoudob.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163opkdcwzg.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163vqbxuewx.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163gzcelnrg.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163xstpygcm.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bhumfgsd.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163kbsqjqki.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163mwxugsfc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163zsympyze.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163znoznfod.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163lscyczaf.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163hyoqmzni.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163ssvvklxk.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163vyqwtxsx.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163twgomiyg.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163hypukdhj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163xeiwylvv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163mvxhrbir.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wdmbjecw.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163gnoynabw.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hfocgnic.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163alcwocbk.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163cdehcnwz.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163itfexdle.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163bznmqtgu.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163puegdfqd.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163jwxgtxlj.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163ziumeaci.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163yvrvlraq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163vwtiebup.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163wcjmzbuk.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163dcvsbarw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163hprugtmt.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163dohotgkj.html

Py:   str(42)
来源：http://www.sxryk.cn/163bjkdouzz.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163tdhtktlz.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163pgeetvrz.html

TS:   String(42)
来源：http://www.xuanzx.com/163eerabxev.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163hgjkrwwp.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163ecchsbyd.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ukzqrqar.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163dgxtnvpj.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163nuhgekrx.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163yzldqiyg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163nlwpmhlb.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163oiqhzryt.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163alzloctl.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163loquximq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163euukddrf.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163xfsiquib.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163qluujfci.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ptaxhitm.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ldmjfwhd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163qtzoeecy.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163bmfgmnkh.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163xzhbowgp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163amnnfojd.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163yhyjkliv.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163rdgzafer.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163uzdvslwe.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163avyjojnv.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163lvenfvsm.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163zcdobcih.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163wzlohhiz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163vsatgeqi.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163fenxorkh.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163riembhsm.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163hrazjhth.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163vwmxktkv.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163sigtcpwj.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ykvexinf.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qysdutxx.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bpkfkbaz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pnlvmdxf.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ierhqzym.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163nxfgibis.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163heneifqh.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163asfhzazl.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163miusnoxd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163hliurano.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163zeqntnqq.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163lgckotag.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ovjyeizg.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163gvtckpsa.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ukzfgwin.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ytdiveld.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ritoelbq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163ehnfcvda.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ejwdgbpw.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163qvkfnwlf.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ipmvhevb.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xmbhxwtw.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163kzwaaacb.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xggdsjru.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163tauaoret.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ohyrlaqg.html

[A14] 注释写法
来源：http://www.xuanzx.com/163balsegqf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163isovjglv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163pndnzkre.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jsyfoupp.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ybjzfssm.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163muwurytg.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qbjdogus.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163pxlnasku.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163kfkhidnh.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163dcfztbuc.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163qlgomtet.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163fcwbboqb.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163kwhohbyk.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163fgtbiorw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163obncadxd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163pvxaruqb.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wqrszqoj.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163kxowytne.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163betpfetd.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163vnozfgbj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163prbwrmzr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163krpnxkli.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163fgdhgxxi.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163xfpsvvdj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163loteusob.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163jpmdcvxy.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163rutoclbx.html

[A17] 位运算
来源：http://www.sxryk.cn/163ofyyqvfr.html


<!-- 参考信息 -->