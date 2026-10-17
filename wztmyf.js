外链999!wailian999！

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163kjzwycxm.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163dddqomew.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163xntmbxjv.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ofyhkeyg.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163nyyigepf.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163wcaouklh.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163dbghynag.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163njcbdtjm.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163qpmmepiw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163sjjegpyk.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163zcmmxzaf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ardtxoxg.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163pkxaqbwa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163zujsfcpd.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163xxnljcvp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163phtzaide.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163hpgystuw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163cznsserv.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163fugpaxcf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163nxfzkbvs.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163gekalwzm.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ejmxtyxd.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163hprkqlcb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163jxbwbbnl.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163tyqcetne.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ipqribop.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163lvhvqtxy.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163gfzcwbvu.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163lzyhrpli.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163utcoqtfl.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163oncjllup.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163eyuguqpk.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ttflqsxv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163itegbsdt.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163dntfhmid.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163riavwmqk.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163zxmutbbu.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tmphwase.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163cerbzhek.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163uzgptiti.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163jbnrgozq.html

npx vite build
来源：http://www.xuanzx.com/163wvrnixvo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163rdcywaqn.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163npevqzrx.html

================================================================================
来源：http://www.sxryk.cn/163iksfrxol.html

统计汇总
来源：http://www.xuanzx.com/163vhzhydjf.html

================================================================================
来源：http://www.xuanzx.com/163gyievzfw.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ydhppkgk.html

Python ......... 252
来源：http://www.xuanzx.com/163tsjeautj.html

PHP ............ 252
来源：http://www.sxryk.cn/163jlinkrhh.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163kcbhltds.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163kunffhmw.html

Java ........... 212
来源：http://www.sxryk.cn/163whvzpjat.html

Go ............. 212
来源：http://www.aibaodan.cn/163bipnqmgh.html

Ruby ........... 212
来源：http://www.xuanzx.com/163hoqohmef.html

C# ............. 212
来源：http://www.xuanzx.com/163mjonhuiw.html

C .............. 30
来源：http://www.aibaodan.cn/163qljmbxzk.html

C++ ............ 30
来源：http://www.sxryk.cn/163amaethhv.html

SQL ............ 90
来源：http://www.xuanzx.com/163edbasrwl.html

Bash ........... 80
来源：http://www.xuanzx.com/163dwpnrqaw.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163spvjoumq.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ukjuadxb.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ysimgbis.html

Perl ........... 10
来源：http://www.sxryk.cn/163bojgfxml.html

Scala .......... 10
来源：http://www.sxryk.cn/163pdidpmit.html

------------------------------------
来源：http://www.sxryk.cn/163ubcgsrby.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ckyarpxo.html

按章节统计：
来源：http://www.sxryk.cn/163quhidtgq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ecjxohak.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gqpmosto.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dvnxbxne.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qgjatjmi.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163plqlgvlh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163rmccxecl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jmkfpxbe.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tlpewyxd.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yiycbssu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jryzrnly.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163heogsuaj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163udyykprd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cqaspfmn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163nxmbdhid.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163qjpacdln.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vrwxgkku.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163klpovbmv.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163sgsayqkr.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163xmehbuqa.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163yzvvdycm.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163zhvsdrdo.html

------------------------------------
来源：http://www.aibaodan.cn/163ouaehkkt.html

合计                                  2106 条
来源：http://www.xuanzx.com/163dvabdlmt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jobxvvko.html

使用提醒
来源：http://www.sxryk.cn/163kdjuyeoc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hzmkxphj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163trmilvhj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ryfgmxti.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163qfwedmnn.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163dbajxmrz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163mpuvemxt.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163gvwtwnwj.html

================================================================================
来源：http://www.sxryk.cn/163srawldyb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163truflwdy.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163apuojizy.html

================================================================================
来源：http://www.xuanzx.com/163kptnsrkp.html

【收录内容】
来源：http://www.sxryk.cn/163oqgswkje.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163wksecwgm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163yzylmeoy.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163wkidiipo.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163zlbggnfe.html

【使用说明】
来源：http://www.xuanzx.com/163yvpxquyv.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163sdyeovke.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163qlhmjbbj.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163dbeptdjf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163eflacyuw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163qjeeqzyx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163xzlgyvvi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163xxfmsivo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163hegztaxd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163wkelgezm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163tjgxcqyw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163yqbscoyf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163dpncxruz.html

【文件统计】
来源：http://www.sxryk.cn/163brxndvts.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163lvzgfloy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163svrotgxd.html

目  录
来源：http://www.aibaodan.cn/163yjnnmwrv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163whamamjz.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163aaahdcll.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wfdoqqws.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163uhfeaghd.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163nstonagp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163hhvkejuj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163towytmst.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dubintoe.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163tmoxrvpj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163awrrrxub.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163tfzgfrja.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nluqxpwo.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rvdeiabl.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163odikosdq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163gheafupd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163iicqkwye.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mextukwe.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ycbeticn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163trfialcy.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ayzxwiyi.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163orvzcfpk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xmdopjxf.html

================================================================================
来源：http://www.sxryk.cn/163iwputlss.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163nmciqxes.html

================================================================================
来源：http://www.sxryk.cn/163zewmempo.html

[A01] Hello World
来源：http://www.sxryk.cn/163wspwdcpi.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163nzrbheig.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163etqdkmbz.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163wmkorsyw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163bqbkodcp.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163gdumyaxf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163sgldmpiy.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163jtnghcuv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163tylbzlbh.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163qilmmdqn.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163sfsakvpq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163gxllqqba.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163clslncqn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163yblopxiz.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163fkomvadl.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163dokrlvxw.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163lbgkcgfc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163xlzzudmi.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163efaxpkym.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163pfnhnkqc.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163tpcyftri.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163zilwsgmk.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163fhiakzhe.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163rbznisgx.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163nybhmgsy.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163qkvnljzx.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163vxcyewzr.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163epwgchlf.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163krkhrrns.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163eslpgjpn.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ukmqskvq.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163diqddfnq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163poobwrio.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163ifqcnepw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163fzjsmdrq.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ifccjllm.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163mqausfis.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163vzllzvkm.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163alylbvpm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163nydvhipr.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163fjlhvkvk.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nisblhzh.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dukshzep.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ojwuozpn.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hdboldma.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163nkozrdzo.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163cfnnhdgs.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163omxswldo.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163hsfhwjcs.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163lijxoigz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163iwtwqeox.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163uflvwqaz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163hjohwyvo.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163cybxxynj.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163icvzggug.html

Py:   str(42)
来源：http://www.xuanzx.com/163zizkutjx.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163azbibwkf.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163sphbxakz.html

TS:   String(42)
来源：http://www.aibaodan.cn/163tvpndcqx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163kvoebokx.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163zvaoidvk.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163zkbctjya.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163axccnvpj.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163wnwvzaaz.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163msqpuiac.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163zphmtjnz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163fqdxjrcv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163anmgjfmo.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163gqafrbps.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163cthprmut.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ieuxmumg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163wrefuuix.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163yeipfnkv.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163iwmjhkrz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163qwvflzuh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163lcklsidh.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163smsaitqm.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163kusmbiou.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163ivtcxfbd.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163sdjzpfld.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163jzhaxebg.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163wwlkkntf.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163diidrthw.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163nrbnonwt.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wfpzwsun.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163xnwllxgj.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163bwufeilx.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163svnfupzp.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163jnlcnena.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163lvbpmsrr.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163qjjcxnac.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163ggvflakk.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163askoeutz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163eyamrvbi.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163uqcqngke.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tpjghhfr.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163jdppwnsj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163evbhlsbv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kfnjpdut.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163tgfzzaxw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163nccicaih.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163qymdehin.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163kixyiwbi.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163dgqvudcz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163wcbyxytv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ofsclmnh.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163vomkxrhk.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163daplaxrr.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163igdpqzmb.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qcpxpyba.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163qesdozky.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qtzdxnup.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nlpglanj.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163widxxhds.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rmuymtst.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163zzbemwln.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fuvqmell.html

[A14] 注释写法
来源：http://www.sxryk.cn/163iiyctjor.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163bzzctazn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163plfrtaxf.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163blylbgnq.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qbnbkjkt.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163zltukunt.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kwmrsvyu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163kadcmgwh.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163klqpmuqh.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163rzeezosw.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163sbngypdw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163ntbdpgmu.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ytbwzjdv.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bdenxwmb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163xskssnzz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163qctcsvme.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163gbifcmwt.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163wpttiflb.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163abjoytsm.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163jbmdsaxl.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163tdxtftps.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163ccmeqeek.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ecegbbul.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163vtykhven.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163tkmkdrsm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163wksjtjdx.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163vgdwxgin.html

[A17] 位运算
来源：http://www.sxryk.cn/163oqrffrwb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hwjjoete.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163spvfekma.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dbecvljg.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163aieailkn.html


<!-- 参考信息 -->