外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ihrufsro.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163bmqxdijc.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163qoeeqdnk.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163dejxjosv.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163wbmxjrgj.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163jkmazhke.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163xxeqxbre.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wjfeagss.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163fqilhtut.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163jppvtkcl.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163tyabmqvu.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163igtetwsl.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163cojjhyxi.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fdxqomru.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163pdgeyvhm.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163yedxqpqd.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163dqojdcln.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163sulmbcee.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163rhfgwosi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pwgxbtwt.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ljijylrm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ltqlcxki.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163oormtruu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163aklsmdfs.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163yqvrejsd.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163bzbtkydh.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163bpobmtfd.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163hkyozkpt.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163nomfqmug.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163qapkhoez.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163txybtgxg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163bwdqbuob.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163rzkmejaq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163wntcjsxg.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163kepqafjp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gyibajrv.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163bzdlwyxp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163kkywrbrv.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163alelonoi.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163xfhqsgxc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163jlggrkkg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ayhxlehw.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163olkqyqiv.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163yyegwcsm.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163xfvfbofk.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fjixdmrf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163zflchmne.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163xmezijgu.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163jgscogek.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163vyxctxnd.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163jegyhova.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ovupbelm.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163cpnsenui.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qdypkmvk.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163qedmsgko.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jyronqgd.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163gjmuvquj.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163emsgobfo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163oqatvzpm.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163pmbqqwmk.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163negwddik.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163kdtfweyq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163qpxyueaq.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163wwebxebv.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163kvgkgkuy.html

npx vite build
来源：http://www.xuanzx.com/163sdaecple.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ollmupep.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163cucclzfh.html

================================================================================
来源：http://www.aibaodan.cn/163gjndhhyh.html

统计汇总
来源：http://www.aibaodan.cn/163lfwfujxc.html

================================================================================
来源：http://www.sxryk.cn/163zfrawbrj.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163bgvzqlas.html

Python ......... 252
来源：http://www.xuanzx.com/163auepusio.html

PHP ............ 252
来源：http://www.xuanzx.com/163uvvmdqdn.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163sueajsxn.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163pdeqjagr.html

Java ........... 212
来源：http://www.aibaodan.cn/163noyessrz.html

Go ............. 212
来源：http://www.xuanzx.com/163fuafelkt.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163fkjgshdt.html

C# ............. 212
来源：http://www.aibaodan.cn/163lsvriyqc.html

C .............. 30
来源：http://www.sxryk.cn/163njflmthw.html

C++ ............ 30
来源：http://www.sxryk.cn/163upmvshny.html

SQL ............ 90
来源：http://www.sxryk.cn/163awgfeczp.html

Bash ........... 80
来源：http://www.aibaodan.cn/163fuybiuyv.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163fukmvhly.html

Swift .......... 15
来源：http://www.sxryk.cn/163jzjywwkr.html

Lua ............ 10
来源：http://www.sxryk.cn/163dthjbofk.html

Perl ........... 10
来源：http://www.xuanzx.com/163qgbswcoc.html

Scala .......... 10
来源：http://www.sxryk.cn/163kdegxtno.html

------------------------------------
来源：http://www.aibaodan.cn/163tzwonbjd.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163mqejcoeu.html

按章节统计：
来源：http://www.aibaodan.cn/163ogxdhvuz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jsorkfxx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rbuesorx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163kgiqbjnb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163jdaurzzl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163gcsmwtql.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163drcgqqql.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tstcellq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163zkmiiqkt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jepwbnbo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vtwaellm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163lerzqiku.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ghieiozy.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mpwuvwgc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zxnwoqdm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163gnasamia.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163puxdfzsr.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163qzsvlnlr.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163nmrtkmug.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163zgmzepax.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163aaabutdy.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163yirqjawj.html

------------------------------------
来源：http://www.xuanzx.com/163etokdkly.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163zendkrfk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163oqdfwrbn.html

使用提醒
来源：http://www.sxryk.cn/163qsikdltb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kthpxayh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ygzqobdv.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163omjtivwx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163mifnmgwj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163swqqlljb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163xuhxjpay.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163rmxapbcu.html

================================================================================
来源：http://www.aibaodan.cn/163fhqdjqhu.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163yakbmezs.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163bizpbbxs.html

================================================================================
来源：http://www.aibaodan.cn/163pupuaokg.html

【收录内容】
来源：http://www.aibaodan.cn/163iiydcwvc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163kbtuipzn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163olglemfa.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xekzemno.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ntwkqojz.html

【使用说明】
来源：http://www.aibaodan.cn/163fqbzirwi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163kpmzrwzz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163qlhaxdmk.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163vngkiiuv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163kjlyjrnm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163eughzbcf.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163gofnkhzc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163ilwnnsei.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163cnixeomp.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163itmzkrxm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163ubtminnu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163wvaaiqoq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163yaseffja.html

【文件统计】
来源：http://www.sxryk.cn/163ltjivqwe.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163xrzoozcg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qxzkgwhb.html

目  录
来源：http://www.sxryk.cn/163gtspkkqr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163cyzjbzvj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wulzajch.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163goakndom.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163bpcdvwwv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163jnlmnzdk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163fzikdmnv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mjjcqesv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163datynhdv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163azvxggpm.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163shssjyzm.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ahyhrtzb.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bxefuexc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fdudufbw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mjmizzyf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cgnecpmr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163livbhcsf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163paejaxuz.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163bvmcdszd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163lktnutml.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163vrthhvay.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xomxgjeq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xdmgfpfk.html

================================================================================
来源：http://www.xuanzx.com/163rzhzngpr.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163ibhvdhbp.html

================================================================================
来源：http://www.aibaodan.cn/163beykdmnz.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ogcsugbn.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163tjunuiuj.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163wibujakt.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163jpqrevrb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163magfkspc.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163xuinvkaz.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163hlzqjeip.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ckkoejei.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163tiyzxgsb.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163vtwqgvtf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163fyfboahh.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163jksvltpl.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163zfdfaesd.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163rwjytjke.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163oawrveqa.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163bpufobzk.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163jijaxnbj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163uuqnszuh.html

[A03] 常量定义
来源：http://www.xuanzx.com/163jrfnmjeq.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163kkovummd.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163wkvbwgab.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163sbzsrqzx.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ndtwqxdy.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163aqvnuddp.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163nksxvpwi.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163gooicyfm.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163oeidvivt.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163tpjobwbi.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163dxijcfkp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163zlebyptg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163nzxoedkl.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163dumbykvr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163fcimchsd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163nxchmkri.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163hbyzlnun.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163bgdhahlh.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163oqskmuaz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163vhczgvww.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163qyfnhcaz.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163xkpewxpv.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163jugvtlbj.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bhmkihyu.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qwfrroth.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163iuqxdtiv.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lcpwbqyr.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163zakggcrr.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163qioenfzo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163idpsjait.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163dcswrqrt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163zvqfppoj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163rrzqgpem.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163gogkuwra.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163rgtirasw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163lcfoalgi.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163juuituaz.html

Py:   str(42)
来源：http://www.sxryk.cn/163xdcecmpq.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163zcdkbmul.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163fcxacwch.html

TS:   String(42)
来源：http://www.aibaodan.cn/163uddnadwq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163sjbgxgjx.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163lfmlykgw.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163nesyjmgv.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163sahzhoti.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163wkvcdojm.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163hmfogegu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163wfcvwojm.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163heafureg.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163kljvfirw.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163nolgsdxl.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163hzmnrytx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163bucutbqb.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163itethlul.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163roifovfz.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163rtelnyst.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163qjwuecvx.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163afknnbyz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ahkdaegh.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163byboqxbb.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163rywqsszn.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163dfngedvf.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163dpsyhbod.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163ldzchywj.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163zeqrazky.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163gfnsxiar.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163frpketij.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163jdbvowmp.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163fkvjbtsi.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163szjggrwm.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163pfkrcwtd.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163quhzjlsh.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163bjdydmzj.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163xdrlxaek.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163aazthygm.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pbzfaeub.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jaoidlll.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kuxhstpr.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163rcqywpso.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hcogqmlr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lrkpovyr.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163wdoojxmw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163mbvyawja.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163iflollyc.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163uapseqlx.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163jfmpinmz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163thlaqwpv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163noebwitu.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163lncfmtng.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163vaslgdcn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ojhexgtp.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163iamykevd.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163uquarnnw.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163raqtwigw.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fvtcppon.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163ursgdneo.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jgqysjub.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163miopugnc.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163uzlxpore.html

[A14] 注释写法
来源：http://www.sxryk.cn/163mjembfsq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163inenkdbx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163trwhyjof.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kbwwsdkw.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nfoucoyz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163lqezbxiw.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163raypvsdx.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163ttitojiw.html


<!-- 参考信息 -->