外链999!wailian999！

[U99] JS：事件监听
来源：http://www.xuanzx.com/163qlbqvpwz.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163egtveqhg.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ojawkdgo.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ihuwurhd.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163yvklrsxd.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163bhyhlzpi.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vdwdvbcb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163glhexmrq.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163tzhccfwf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163gtfwmrlh.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ujlndyyw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163unauoqlo.html

[U105] JS：节流
来源：http://www.xuanzx.com/163hvijyzwn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163xmajxydq.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163cldozqkx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ltjvcsol.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163lsynkazv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qvqsqcdr.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163rapknget.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163dqtcpkea.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163okgqswrh.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mgtnpmnx.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163qprcwtyo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163rsevuejl.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163svkogizv.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163trxlywwp.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163zzhklfcu.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xkdwdwdv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163dzczcqoj.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fympxhbh.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163byxrdnxw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hqycrawo.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163sdvqayuy.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163nnfyphjs.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163cuxlhpru.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163wzmbjssz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163gooxfetn.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163zqndhugl.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163foggmfwo.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163koctmisr.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163bhtofsay.html

npx vite build
来源：http://www.aibaodan.cn/163egrxwqbq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163skoegqwo.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163mopyasev.html

================================================================================
来源：http://www.xuanzx.com/163vmxgjsiu.html

统计汇总
来源：http://www.xuanzx.com/163czrcbznf.html

================================================================================
来源：http://www.sxryk.cn/163biwybdlj.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fijumits.html

Python ......... 252
来源：http://www.sxryk.cn/163wqulhybh.html

PHP ............ 252
来源：http://www.sxryk.cn/163syvyewmz.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wjgfqula.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163xjmjzkbh.html

Java ........... 212
来源：http://www.aibaodan.cn/163sdvydnyv.html

Go ............. 212
来源：http://www.aibaodan.cn/163bpwwsswt.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jyqisisb.html

C# ............. 212
来源：http://www.xuanzx.com/163lmavbjxw.html

C .............. 30
来源：http://www.xuanzx.com/163rnuoagdk.html

C++ ............ 30
来源：http://www.sxryk.cn/163tbjnryxm.html

SQL ............ 90
来源：http://www.aibaodan.cn/163wbpskguy.html

Bash ........... 80
来源：http://www.aibaodan.cn/163twuvoqhr.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163zkmpukqp.html

Swift .......... 15
来源：http://www.aibaodan.cn/163gwprickt.html

Lua ............ 10
来源：http://www.sxryk.cn/163lwmokdde.html

Perl ........... 10
来源：http://www.aibaodan.cn/163rtxqyvvv.html

Scala .......... 10
来源：http://www.aibaodan.cn/163kkulnazv.html

------------------------------------
来源：http://www.xuanzx.com/163xrcppxpd.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163fqjmvplq.html

按章节统计：
来源：http://www.sxryk.cn/163mivngqpj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163dhhqlpvt.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mmgaejcs.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163obpkcykm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163nidlkriy.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163slckoqbj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163pjjlobjl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163iqpmwrvm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163azwoyeut.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nmjalept.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163mkqrnzfg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163czmsuvqn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jcmfztye.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gxzslqug.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163lzjztidy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163rcqohvzh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pirhwguj.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163dbilootj.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163niolvqzm.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163sfjwvnkc.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163eytucpkh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163njwcrxqq.html

------------------------------------
来源：http://www.aibaodan.cn/163kvycnspw.html

合计                                  2106 条
来源：http://www.sxryk.cn/163wdlxictb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xomnvnoa.html

使用提醒
来源：http://www.sxryk.cn/163gvylfaxj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jvfitejb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163jsdyfoft.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163byaydwug.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163vyyurgsh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163gvgqgwwl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163fgjmjfpu.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163wyxucpvs.html

================================================================================
来源：http://www.sxryk.cn/163okwiotkt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163vesqotqy.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ithbmpbp.html

================================================================================
来源：http://www.sxryk.cn/163jhxkilqd.html

【收录内容】
来源：http://www.aibaodan.cn/163fvdjwnwz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163yjiiuufr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163kyjccxqz.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xukzoyvl.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163odqzggxk.html

【使用说明】
来源：http://www.sxryk.cn/163ionryreg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163wgqbzdyq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ccyxpgmf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163adezcpqu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163qqxyisbp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163zglzafmd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ndlranlu.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163rhzolima.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163anxbosmy.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163vgndggbs.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163equadtft.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163minhjunl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163vrsovegf.html

【文件统计】
来源：http://www.aibaodan.cn/163iuzrewbf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163vvxzopxv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qxgyrhns.html

目  录
来源：http://www.sxryk.cn/163mlugpyfu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pfbyaoik.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163uepttjap.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lpkpbhhz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vfbqqiae.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vsestsov.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163bmhycvic.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163qmwxldgc.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163tglueglz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163divyiyrn.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163reldfqdw.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ytgflkjm.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qbfvrbeg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nozzhdda.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ahhzgvwj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vtaznfry.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163zujktdey.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tzhywprq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163piimqjhe.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163kxvpytmk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163rhfrkdfy.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ohhfaozy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163fcfpemez.html

================================================================================
来源：http://www.aibaodan.cn/163thskgkiy.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163gwgkdgnr.html

================================================================================
来源：http://www.aibaodan.cn/163bjedjpvy.html

[A01] Hello World
来源：http://www.sxryk.cn/163zggdbqgi.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163laxhvmej.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163qqihjutn.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163rwmhjgce.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163wfoegeyg.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163qokgwdlx.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163fiwwsurw.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163oomtptmw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163gscazaqr.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163hsqncxqh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163tycbiucy.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163kchpnuwq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163zuwwbjjw.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163okrxvbun.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163yhckzjhf.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ezifmjqq.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163axoawcbe.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163rskcvedp.html

[A03] 常量定义
来源：http://www.xuanzx.com/163jutiskpy.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163evddlgud.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ftkmcyvg.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163kskcwyoz.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163bzbgdtlm.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ahukjsko.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163hmdckgcm.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163tyhjltni.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163jkeiakwp.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163yetdebkm.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163qnrscvbx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163onppvesh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163cuzvehgk.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163lfqexayc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163civnjtey.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163gzbxbixm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163dokancgh.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163apiamclv.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163rhpgrsqo.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163abezbfvm.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163rpxyjssn.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163urylwvmp.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163otzrrfst.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163clylqunm.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fksegrto.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163bdwpgdya.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163uatcapdz.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163efpnvhzl.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ybrzpolv.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163gnxbirnk.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163bxpedzsh.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163dxbjhucf.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163theieljt.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163jfihmxql.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ddhgphzo.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ntublynk.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163ixxsddns.html

Py:   str(42)
来源：http://www.aibaodan.cn/163wukmxdio.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163evzksmgq.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163xgvrqvaf.html

TS:   String(42)
来源：http://www.sxryk.cn/163vszttctk.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163fpadumig.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163gsrsrmqp.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163gofbrjox.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163dhhjkmmj.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163bhipdrlc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163mqbhduhw.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163yxszyjza.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163uidvuimk.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163lxsmfpub.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163zskmnsnj.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163pperdrad.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163pjbxjeri.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163vzhzzxav.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163ypftqlsp.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163xbishqmj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163toyrxukw.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163xugcrbcf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163tyizgdcy.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163gfdehqcu.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163rcozqbaq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163qcuwtwxp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163rnfmtqbk.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163yzskevnw.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163yetakcts.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163ujeaprgt.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163tgrrkgwm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163uwodoqcw.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163jogkhxpo.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163kfqdeigv.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163epjgbxga.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163ypeejhws.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163hknkdvgy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163yywschjg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kfalgiiv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xbylrwfl.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163igpalyxg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dksmdotw.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163crtzcgur.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xaireptg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wccwplae.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163pplqoumg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163orrvgxml.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163hochjrre.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163sdvirzrx.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163jsxhxwjz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163syxessnc.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163zzqlqxhb.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ikscmqaw.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163rgoxaong.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163kspybsor.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bshindoi.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163lbeucyin.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tbnlufmx.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163axwsfwkm.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163cilnyrjs.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163axjswptt.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163bcvvbqmc.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bnljthqy.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163ufbbmdai.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163arqjgjwr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163rihqxapj.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wocblmiq.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dbdhutrn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163vewyvhmq.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zceapmmw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163dpmgcfjl.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163cwienycg.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163ozmhkqog.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163unzefiiq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163udehlpnp.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163gdmlpkkp.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jpueycyq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163eduktezl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163mmbwevqk.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163kdtqplft.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163asyqmboy.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163rnivanoh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163wyqyfjhj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163trhyluny.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163vhnundnd.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163faieiqgq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163vzxkinjp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163yjwcmafp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163dagkmtqc.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163qebzawwh.html

[A17] 位运算
来源：http://www.aibaodan.cn/163bprgrgmy.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qnszjwcr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163rpuraqgn.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rgvmjghf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163nbjwwhcg.html


<!-- 参考信息 -->