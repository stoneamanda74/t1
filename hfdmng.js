外链999!wailian999！

[U89] JS：数组去重
来源：http://www.xuanzx.com/163cpncsngu.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ozdaceas.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163wcbsugvr.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163phrfljqj.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163zzdccxix.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163lciwexve.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163oowxrtay.html

structuredClone(obj)
来源：http://www.xuanzx.com/163tmviekmc.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163vioojoch.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163awafjkcq.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163yiblvvjd.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163tdvgowbr.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163mrzesymx.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163lmiehnbe.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163fenrdyqj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hsyypnuq.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163cuekozes.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tatilopm.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163wtivxygh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163wgntkmqx.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163vjucmnlq.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163bbozmjjm.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ahzdhocv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163rlzwjxug.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163svmqwpks.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163mlxesxhl.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163swzeikud.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163fekjbyqo.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163pqwyjsry.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163rnvnibno.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163rknfllvl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fldmwdad.html

[U105] JS：节流
来源：http://www.sxryk.cn/163svsvzjpx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163hoxnbrvq.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163hzxfitmd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ymakbkld.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163dwyavoje.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163huuwhqbq.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163omwhqqek.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163inivqrrz.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163qlnvtkgc.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zgvuaawk.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163fseolmzh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163xcskwker.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163kvcgtvgs.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163dynzwggh.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rswdndek.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xxhdacnc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163xbhxblrd.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qbxwuiti.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163dtmwsvbm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163eesesebh.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163dyrgtgjp.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163xmumhlmy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163aqyxsdxa.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ooqyboxd.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163luvnqfzo.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163iwozmmrg.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ytjtplwg.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163rlgvlbdj.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163upzgprcb.html

npx vite build
来源：http://www.sxryk.cn/163igcesbtk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163tyngdrox.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163fcdaxetz.html

================================================================================
来源：http://www.aibaodan.cn/163mdktyggv.html

统计汇总
来源：http://www.aibaodan.cn/163awvhetzj.html

================================================================================
来源：http://www.xuanzx.com/163ohtbrhcg.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lwhhrdcx.html

Python ......... 252
来源：http://www.sxryk.cn/163dhxzsgyb.html

PHP ............ 252
来源：http://www.aibaodan.cn/163uwskpbyf.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163cvwvikmm.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ndwzurkh.html

Java ........... 212
来源：http://www.sxryk.cn/163jrafpqlz.html

Go ............. 212
来源：http://www.xuanzx.com/163fvohmvcb.html

Ruby ........... 212
来源：http://www.sxryk.cn/163schjsier.html

C# ............. 212
来源：http://www.sxryk.cn/163kgryplcm.html

C .............. 30
来源：http://www.sxryk.cn/163wenvtqzx.html

C++ ............ 30
来源：http://www.sxryk.cn/163bcayrkbu.html

SQL ............ 90
来源：http://www.sxryk.cn/163fnqbvvvx.html

Bash ........... 80
来源：http://www.aibaodan.cn/163evhczjrd.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163sfuqiveo.html

Swift .......... 15
来源：http://www.xuanzx.com/163lsdbjurq.html

Lua ............ 10
来源：http://www.sxryk.cn/163lsqwupld.html

Perl ........... 10
来源：http://www.xuanzx.com/163dkcvcftb.html

Scala .......... 10
来源：http://www.sxryk.cn/163dtawwkue.html

------------------------------------
来源：http://www.aibaodan.cn/163mhprhezw.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163dotsokpm.html

按章节统计：
来源：http://www.xuanzx.com/163rcewonhv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163macevsfb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jxhbfzto.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gcxjyknu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163aidknbpr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163udsdcuxt.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163epnkavjq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jirdrdur.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163cdvunslx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nwvjhnze.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163azpclkxb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ybsqbhrp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163iuiktuiq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163inyrjsey.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163uwtiwcsj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163gihwwiqw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ashspnwc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163iiqhzotm.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163uxycxvyy.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163actigijx.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163jnzahvgk.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163sxejqphc.html

------------------------------------
来源：http://www.aibaodan.cn/163xoidqaua.html

合计                                  2106 条
来源：http://www.xuanzx.com/163tvfbdqfh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163whsnrbkn.html

使用提醒
来源：http://www.xuanzx.com/163jgxyuzqf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163uveezzog.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163otxsnydm.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163juahepqf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163jbkqqnfs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163yjoweika.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163qimrhsjm.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163qyhggbrp.html

================================================================================
来源：http://www.xuanzx.com/163qickwdqy.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ijxuaxkl.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163yyjxbsqa.html

================================================================================
来源：http://www.sxryk.cn/163oxgqznlb.html

【收录内容】
来源：http://www.aibaodan.cn/163safxbrrv.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163xnrsivmg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163vrlspgof.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163wazcrpsl.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163hqvdtyld.html

【使用说明】
来源：http://www.sxryk.cn/163rtievqsm.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163lcnqqmab.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ntgviccw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163bimxmceh.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163qmdxtbfx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163outhqngb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163huefeyqy.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163rhllxeft.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163zeyjxbkm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163tqwfljbu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163agkklitj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163xljogruq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163arwkojoj.html

【文件统计】
来源：http://www.sxryk.cn/163vwclfvud.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163fwzzgkzz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nlqlvpia.html

目  录
来源：http://www.aibaodan.cn/163qyhrjnux.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kxsydeyq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163bdqnczas.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ewaajkkr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163oxcxzvpw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163nfstluqb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163jdyxatcq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ieamwzgp.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163npwwnjcm.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163abtoyade.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163outojlwm.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163nqbxsvvd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163elwtdxgy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rntsawkz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uelstfte.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163iiwznrfg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163bkhabzwt.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sismpnth.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163siqomhha.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ygybazbw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163rcojbinm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163utdkucnl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vjtlsrkz.html

================================================================================
来源：http://www.aibaodan.cn/163aixkxoem.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163gnnmqlfy.html

================================================================================
来源：http://www.aibaodan.cn/163mcffjalc.html

[A01] Hello World
来源：http://www.xuanzx.com/163gbtxnfsx.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163mezuorno.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163lxngioim.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163vlmusoiy.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163nkovmwxl.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163jaimffis.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163uoiyazzh.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163dfyftidq.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163xbissoek.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163yxrbggwp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xlqtezso.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163xlwbpqjr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163nfgmzksq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163zkfprihl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163sjpglqkf.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163jsqzufie.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163sbtgwpzl.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163fjtplsme.html

[A03] 常量定义
来源：http://www.sxryk.cn/163omvcflgk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163quzizkfl.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163qmxpvujw.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163iquzqjml.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163llqgebcg.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163pntkdkpd.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163eibehsqb.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ajaghorj.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163qcvybohg.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163ojjtrbls.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ribxpgay.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163rgvbeayo.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163wmpwyonf.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163gwcysxcz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163tknykazf.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163afoctpzl.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163wabflokp.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163snjxswwz.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xjetogrt.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163mfccuxch.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163pehsrnra.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vfhuplzi.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ixvvapnd.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163yjgwqtbv.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jkttjvfb.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163grikciqb.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163umpcbdwt.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163hfxqfemu.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163praysdao.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163guffiphz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163kubccrrw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163rxjrgszh.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163chyrcjfp.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163jxittfvk.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163srmgnslx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163ofsfuewu.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163pclglswy.html

Py:   str(42)
来源：http://www.sxryk.cn/163bidxhlwp.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163mxksiasm.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163mobrrjfw.html

TS:   String(42)
来源：http://www.sxryk.cn/163cidvstnv.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163zloitzme.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163xvoqvekb.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ystqzurr.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ovvywojr.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163kisbhpxx.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163elmlwdew.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163fiemwofm.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163autjbsyf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163sntllmpj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163mynkcfrc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163yuvtfpbl.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163opubptee.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163dutsokxs.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163tqdfwblu.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163cxfovlay.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163huzjqqlb.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163plsmptxw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163yvysyavc.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163nrsjdxro.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163wkldzrfc.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163zjdhnyqo.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163gypzgrdo.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163ffecknsv.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163nrmqaxox.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163bvacsitk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163bmoonpam.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163crixisss.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163xkohelzu.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163jnlgzepx.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163zrulebpo.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vuxtvhoc.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ipxanxcs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163zemfypdg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tkfizsam.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eahqihip.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vtmvvgta.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nngagtdh.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ysjoueyt.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jenppexy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pjxswkxj.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163xfqbonbs.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163atovlodo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163zzesslzq.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163amjtdomd.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163sdxmpssb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ndwmgqwh.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163xsuwggvu.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163gyuafcpa.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163stbnrjpn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163zzjbmdzw.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163eyylleat.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163fonurnye.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vzriiyap.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hzgpjici.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163jkczpery.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ggaagfod.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163cuocknrd.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163paosrxka.html

[A14] 注释写法
来源：http://www.sxryk.cn/163dxkayvbq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163dhufhnpg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wkxxefvs.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wbaguphu.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tswmzdcw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163ylvuijmw.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jzedtgeg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163sgaertbs.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ulujjsoc.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163lplyssnx.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163ubsneluz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163ymmfsriz.html


<!-- 参考信息 -->