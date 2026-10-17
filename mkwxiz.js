外链999!wailian999！

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163yjvuzfny.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163twynyiug.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163mhqklbzv.html

structuredClone(obj)
来源：http://www.sxryk.cn/163bxykopib.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163mobxxyyc.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163zonsyesb.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163brncxxea.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163oazrzzyb.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ykxelvca.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ycgndygq.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163gjcvbobs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zfqzfnny.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163vqeaylbe.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163alcntnmo.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163adkoxwkd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163cjfpbldq.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163srqlfetd.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ejgbykmb.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163oyczrlgq.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163aifqufjn.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163gbsysalq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163wpgpzmvj.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163ylqlniqb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ukseucgf.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163epczbdnw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163otditduy.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163rnitawzf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nqtinrwo.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163tjmdymur.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163hnphgtop.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ahxzlatc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163gskoyisr.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163vlbnaxtb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163sroihbww.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163uzqpytll.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163hiplycqp.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163vstxuhxs.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163waxonkux.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163fqtfitix.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ulgzyknn.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163yhjozypb.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xhyzqrdm.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163dgalpkja.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163chpdycld.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163gbpiulra.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iivlsnua.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ehxwnzov.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bbaqezpd.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163wamwppeq.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163miupbkuy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163wtlsmucs.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163hoijpfbj.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163jqmxfaal.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163gbbsxsbc.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ncrtawnu.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163fvxlepqi.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163wmihmgbz.html

npx vite build
来源：http://www.aibaodan.cn/163pbpzbqcs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163xhshvonh.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163bcmcsxrm.html

================================================================================
来源：http://www.xuanzx.com/163bmtwavvk.html

统计汇总
来源：http://www.sxryk.cn/163dssaywav.html

================================================================================
来源：http://www.aibaodan.cn/163osldmrfq.html

按语言统计（条）：
来源：http://www.sxryk.cn/163hfxeheqp.html

Python ......... 252
来源：http://www.xuanzx.com/163fzklrcek.html

PHP ............ 252
来源：http://www.sxryk.cn/163upgsxsml.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163tpofgeom.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163xqtwytub.html

Java ........... 212
来源：http://www.xuanzx.com/163tieciniv.html

Go ............. 212
来源：http://www.sxryk.cn/163uejjrhio.html

Ruby ........... 212
来源：http://www.sxryk.cn/163okzhgvdu.html

C# ............. 212
来源：http://www.xuanzx.com/163graerszb.html

C .............. 30
来源：http://www.xuanzx.com/163qalshobn.html

C++ ............ 30
来源：http://www.xuanzx.com/163yrllfpjk.html

SQL ............ 90
来源：http://www.sxryk.cn/163hjsdczfz.html

Bash ........... 80
来源：http://www.sxryk.cn/163vvmwuwno.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163kbkpnemh.html

Swift .......... 15
来源：http://www.sxryk.cn/163ijzmrwzf.html

Lua ............ 10
来源：http://www.xuanzx.com/163xyrhntzg.html

Perl ........... 10
来源：http://www.aibaodan.cn/163eiiamadv.html

Scala .......... 10
来源：http://www.sxryk.cn/163shdlgpnt.html

------------------------------------
来源：http://www.sxryk.cn/163pzuntqhz.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163yvjcjmcf.html

按章节统计：
来源：http://www.sxryk.cn/163tafwvcfc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fjtheuny.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yofybfxz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fyxwjxzp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ewobsdji.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163yyrljkug.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163oxmbrlrn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fbpcgoty.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dzdlpzzv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cdsxnjpi.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163xgfctbom.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bokfqqov.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dtzxdaxx.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163irvyghqa.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ugymukzx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163vuixxeop.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bpgzqkig.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163gwjuscaj.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163eubbzygt.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163xmdzvxcb.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163gugzahif.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163cpajagrp.html

------------------------------------
来源：http://www.aibaodan.cn/163jnlgtihw.html

合计                                  2106 条
来源：http://www.xuanzx.com/163hjjkwxyn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nqqijxgg.html

使用提醒
来源：http://www.sxryk.cn/163wmrfckkd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gyglkopr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163jeqnujzi.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163bbyrmplx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163iosgabyd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163rrcvyljx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163oolvoxwe.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163flxtmsgl.html

================================================================================
来源：http://www.xuanzx.com/163lmhnuzqg.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163wyvdmrrd.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163filgxdrw.html

================================================================================
来源：http://www.aibaodan.cn/163uowrxguf.html

【收录内容】
来源：http://www.xuanzx.com/163pizhojbv.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163vvvzdrkv.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163yznywbgo.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163nncrbasi.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163lfszyppm.html

【使用说明】
来源：http://www.xuanzx.com/163bivzvvmo.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163jkslseln.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163mmhewwjy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163vsrihmjg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163fowwbeaz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163juwkpija.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163gxiovqgi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163jybffzzb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163exwykpuf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163afspluth.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163habpexth.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163lkqaymlm.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163owbnmrmc.html

【文件统计】
来源：http://www.xuanzx.com/163aorcwikf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163povwzlmd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xdaaimiu.html

目  录
来源：http://www.sxryk.cn/163nzxnpkjm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qjanzeoj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xvcvatst.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ucbnhevu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163hilenkmx.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ktbveynj.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163qelkrgaq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163vknhmijc.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vecirrid.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pvbcdqfv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xuqcclhi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163asjdxirl.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kaktmxxh.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fcpqrvom.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fgbdpyrs.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163nyrbiauy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163znkbbhqr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dahzgqzc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163gbtythsn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163hxdgqssq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163kdwvsizs.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ixhnuloo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163kljltuqz.html

================================================================================
来源：http://www.sxryk.cn/163sgiygree.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163kgsuqcmb.html

================================================================================
来源：http://www.sxryk.cn/163ggwycqvd.html

[A01] Hello World
来源：http://www.aibaodan.cn/163fomqbpfx.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163lcbexobg.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163rqccpfjz.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163poxlrwfr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163gogxtidm.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163xwetcbbc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163oadpwxpr.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163eylnwzti.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163haaaaktm.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163fqbkphbt.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163xjgupwfi.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163fpqeanjb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163etmjlmjl.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163ybdtxeyc.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163gxsfweri.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163hrobxdpk.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163abtvsqvb.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163tkqhgrgb.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163nzurbdhq.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163fkgacotu.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163fkjaqppc.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163gvjpgwli.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163esfholbo.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163dgoamexn.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ftfotdft.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163uxapqpkf.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163egjrxpxf.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163qemarfuz.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163zpmbuteg.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163hnnyetxi.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ywbmmjrs.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163pqvyguhi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163njxusjuk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163buvaiota.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163zbllzfeo.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163lbdybbaq.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163hnwrwtzp.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163ltchmlaa.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163mldpdgxt.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163fsigsplf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163rucjhygv.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163grzfdhuk.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163diuiopwu.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gzlnayhd.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163huwmnvoj.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163lsruhnlz.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163rctosngp.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163fsjrailt.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163chakwrek.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163smztcljw.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163gpmxfgck.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163pxsmamsl.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163pxjvgurp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163hrraycor.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163bynomsdh.html

Py:   str(42)
来源：http://www.sxryk.cn/163nrgghqgd.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163mkvcnnpz.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163yweaatxq.html

TS:   String(42)
来源：http://www.xuanzx.com/163iazzbnwq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163fzrtluwh.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163dpwwtamc.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163krsfnkrm.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163nfefomzc.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163rrqtvadp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163besswfua.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163eyyipmos.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ghyqader.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163kxmchyad.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163metezolw.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163fyayorak.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163mfwqeznj.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163giornadx.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ctdkuetx.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163zqrphael.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wxguygsa.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163rnfiaxtt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ploxgpyl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163tscvtqoq.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163npdpnklg.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163cqimfysu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163gfgfsohu.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163vdbmbunw.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163bwcxigpr.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163najneppk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163pdcgolqo.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163huhcujfk.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163mwzktnbx.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163orbabpss.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163jpxuejai.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163ufpqguhf.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163yfvzjmkg.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163flzpgjrd.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nljtfcvd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163izwyftkb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163oriralvm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vqvjwhpc.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163szbfxavd.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dwlzubxv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rmxylpkx.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163tdeubgne.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163ihzrqfog.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163massrgtt.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163lyswlugd.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163didrjnyk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163whwycgql.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163cfjnaamt.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163tewzhers.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163kynvqsbp.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163npkuhhzy.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pnkjrzoi.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163fmvazrjb.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163srbfvwlb.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ububcpyg.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163xztrwuwy.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jcvvawsy.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163grrwpwak.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163uidbaucs.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163pawgbsyx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163wxqznyjz.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163eierricq.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163kvioamsc.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163eyewhooz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163mieputrt.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163pbhfnjsq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163crtwppai.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hoaoomju.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163bvdxthvp.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163bplhigaz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163amhfonwh.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163irifqgpl.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163xvhqjsec.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163kkcpkjws.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163gxterljb.html


<!-- 参考信息 -->