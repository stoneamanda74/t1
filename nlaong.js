外链999!wailian999！

[U99] JS：事件监听
来源：http://www.xuanzx.com/163zqxnqrsk.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163mputkpwe.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163elyvlmdw.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163kwtuoukv.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163huybejqz.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vleabufb.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163jttgkmkm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163bayhkerw.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163diujbgfz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163tlnctlej.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163xampoeel.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fayvowao.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163whqdmogy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163phctirxs.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163psrnegdk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163vtbuqtpt.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kgchtvwi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163azslysfj.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163gkvkuact.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ksvyxhvn.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163bqqesdlv.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163kxsjsuei.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163skhsvwcv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163sfsieptf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163xkpqaabc.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163yomicggi.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163zfovxfzj.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163gwyxdqva.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163kfsfpzrb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ycpbmpnu.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163rqabtdve.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xhdmbcxw.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163angejmkz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163fyxodeez.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163jcdiusob.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ukpoajno.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163njcvuikn.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163qilgckio.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163jtrphgyg.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163qnscbcba.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163nicuzrjv.html

npx vite build
来源：http://www.aibaodan.cn/163qfaahzuw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163vewzvuhe.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163jgjeymqv.html

================================================================================
来源：http://www.aibaodan.cn/163pmvrlpyc.html

统计汇总
来源：http://www.sxryk.cn/163oduueurf.html

================================================================================
来源：http://www.aibaodan.cn/163ffpaejvb.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163mlmiexpn.html

Python ......... 252
来源：http://www.sxryk.cn/163ckzrypih.html

PHP ............ 252
来源：http://www.sxryk.cn/163nsylqmpp.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163lqqvkocd.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163erwckulp.html

Java ........... 212
来源：http://www.sxryk.cn/163zqsafmxi.html

Go ............. 212
来源：http://www.sxryk.cn/163jwmooyhk.html

Ruby ........... 212
来源：http://www.xuanzx.com/163cqmullch.html

C# ............. 212
来源：http://www.sxryk.cn/163nbwjqekb.html

C .............. 30
来源：http://www.sxryk.cn/163jmkbrccc.html

C++ ............ 30
来源：http://www.xuanzx.com/163cnxisvwv.html

SQL ............ 90
来源：http://www.xuanzx.com/163fteaumgq.html

Bash ........... 80
来源：http://www.xuanzx.com/163pvcxiupm.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163lnyontmo.html

Swift .......... 15
来源：http://www.sxryk.cn/163flzxdjvj.html

Lua ............ 10
来源：http://www.sxryk.cn/163xljkebpu.html

Perl ........... 10
来源：http://www.xuanzx.com/163mhcoexve.html

Scala .......... 10
来源：http://www.aibaodan.cn/163cbzzhkoj.html

------------------------------------
来源：http://www.xuanzx.com/163glxhxqjq.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163shlwqzzs.html

按章节统计：
来源：http://www.aibaodan.cn/163accakyts.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ltxvrtfh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tmrkqffs.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xjkawyyf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163sbakptnk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ctitrith.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163rkeotcoz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163huambtxg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163qrgynkpj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zedaolia.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163uhrgqotq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zjagcpjo.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lbpjohmv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fnuovrdm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ddpbhqxd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163iolrwira.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fcqdzlxk.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163coczpkyq.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163qksbvixs.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163gioxrcjv.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163xrtlowoj.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163mpgbjsoa.html

------------------------------------
来源：http://www.sxryk.cn/163idryelxz.html

合计                                  2106 条
来源：http://www.sxryk.cn/163zmjpttxy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ahvbwlee.html

使用提醒
来源：http://www.xuanzx.com/163duplkuwh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163uozlqmvv.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163kddmkhcn.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ydxwwmzg.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ugivitce.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163rsdtfdji.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163zxslhjrf.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163yomsoesf.html

================================================================================
来源：http://www.sxryk.cn/163qgzcrsox.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ygzfadcj.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163vpwmylcg.html

================================================================================
来源：http://www.sxryk.cn/163xovxioeu.html

【收录内容】
来源：http://www.aibaodan.cn/163hhfwmyqz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163nfsslxad.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163aqisqokr.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163njxwjmhz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163nbmjudlr.html

【使用说明】
来源：http://www.xuanzx.com/163ahiisapy.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163wudfirqk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163tlqmtvnz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163bvoqsszf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163jrtiqxjz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163ifcnfgpr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163jficjbsq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163rnezvvpn.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163twbmthxn.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163behomcdo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163sbrikolt.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163tabefcpt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163deuzgxqu.html

【文件统计】
来源：http://www.aibaodan.cn/163tvgqqhbe.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163keuzdrvw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ztudxbfh.html

目  录
来源：http://www.xuanzx.com/163mqmluoby.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kpvaqupr.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yvtojntv.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163lobhikyr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163uzdxdhls.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rnunpqzb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163hchmgqwm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163smbjcfsv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163pvkacxqc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163zrzkaabd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nfotmvua.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163tokzeagj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tmctcomx.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163diikkgux.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gklanlmf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163lnmkccyz.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163eectccqx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163owjvcgpa.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163rijqqwir.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163xoeclajy.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163bvtmihqw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gdyeanpy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xijahqzy.html

================================================================================
来源：http://www.xuanzx.com/163ykpxhdlm.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163rdhzidvy.html

================================================================================
来源：http://www.aibaodan.cn/163cvroiigu.html

[A01] Hello World
来源：http://www.aibaodan.cn/163rrjsjopr.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163qzgethes.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ujxihvey.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163rbiohlhr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163bivrjpdy.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163wsecwaud.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163usvmgbak.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163kizbjkhk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163vzepolkr.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163rcwwbber.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163uzkuatgu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163vvclczfv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163jxknpzrd.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ubcmuaem.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163pjhcnwjm.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163bqucsusl.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ppxrvvdu.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qmobsqvw.html

[A03] 常量定义
来源：http://www.xuanzx.com/163xpdmserv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163actacnnt.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163zcyddprb.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163wrnocqhy.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163mqynkcaq.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163xdntkned.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163lgzqlfks.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163bfgolcbq.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163fupergdo.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163kethhnna.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163yywrzhyl.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163jpiznfim.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163noavgjbl.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163epeixhwu.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163hbcgnudp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163iuwdmidv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163mnbgkmbc.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jzokuqxz.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163msyxryhk.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163vuwskmxt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163qbxmoxlw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wzqlqwbe.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163figokejt.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163lqahirab.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163nnnrhxsa.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163lilcupcu.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pgnwhytl.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163krrfnesw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163wkvecrfg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163dlciwrbr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163eyibximr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163wmvyiysp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163fydighei.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163lptczjmt.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163vgackyhj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163drigjlke.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163jkakknfy.html

Py:   str(42)
来源：http://www.xuanzx.com/163uqdexfcd.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163djdslsav.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163bxwcgscb.html

TS:   String(42)
来源：http://www.aibaodan.cn/163loctranm.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163nqsvkesu.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163vovuetmx.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163lrfrnndu.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163xbxccfkl.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163qrjlvejy.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163mcemuxel.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163wbtyrqbz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ggkexbyr.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163mcypcoyn.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163rtjmsaxa.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163myqgosns.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163vhslelrb.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163hbjvcxnz.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163pygsvfyg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163hpvobotd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vgqqfxnw.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163lxypceiv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163euyqfynd.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163jfaridgf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163sqrlqhef.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163wqzmvrdy.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163shdfegsk.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163tijlrear.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163oogomqps.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163gmhfwwsu.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163eieigmga.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163qitilise.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163toycogzn.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ehrfufdd.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163xugoarud.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163ulkipwnq.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163buzcvcun.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163cdfvwbnx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fsbzjodi.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tzxfilui.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bijxtfmw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xuhizhjx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163shyuovci.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lfxjngjy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hacgrqfh.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163yvxckxzg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163xyqrazto.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163pjxqrtyh.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163wfidospz.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ahxdyorx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163yiuhloia.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163taidorba.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163axncptlw.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163slmznqfp.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163smzugimp.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tsvqtlsz.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163vthfnuma.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jdypbtgw.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kkvbcnth.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163xxnihlcw.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jylllepf.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163axscfgnb.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tzpghjfb.html

[A14] 注释写法
来源：http://www.sxryk.cn/163qcjljszx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ozpjdhsm.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fmkugtke.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bzwnriin.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163dqgfrkfa.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163mxwlbhcs.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wluqknih.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163eqbfiklv.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163yqlqrcez.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163cbzgmvbu.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163cvqjnfcl.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163rcfkzhiq.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163gfkeflvf.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vyvdovlp.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163sjebfmnr.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163xemndztx.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163mlqhqfce.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163nmqucjkg.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163yxbqovuo.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163wefbdwcu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163qwkxkccw.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163hxommsxg.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163sticuiea.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163lzrlwfgu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163etbalmni.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163lijstxnd.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163gqvjexah.html

[A17] 位运算
来源：http://www.xuanzx.com/163waxethmz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qjlnyvqi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163msaihfrs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163umyuqqgp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163crwwhfdz.html


<!-- 参考信息 -->