外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163lrwmqdym.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ammowoow.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163qezigbyr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163dmpubjtv.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163akhecpvh.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wxjhxjsa.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163nillbtaz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163zksczcni.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163xyerhukf.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163cgopqiuo.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163hhfkjywn.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163hjibejyq.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163cchfzgbf.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163duuyyffd.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163amtsnytt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163quwyxthc.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163dreidfxd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163oauaupvy.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163swzcmsmw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hltpnlca.html

[U105] JS：节流
来源：http://www.xuanzx.com/163oqozhoao.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163bouqehcw.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163yjmhvprh.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163mkrwzwwb.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163bnuogjqk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163dqcmrovl.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163nqqgtzho.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163jnjcaclw.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163uixjoddc.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rysbtzls.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163kdcawaay.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163qlhdhsgz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ijghuvnk.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163vgadxabb.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163gtuobxae.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lxthnrmj.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163spcvffgz.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163exlixaun.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ikrthvll.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163tayieldi.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163wcazgcuu.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163uovjsvdz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163bwxtjdny.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ybhtxexd.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163dyfkitcy.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163rbeiubct.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163eiwtlcps.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163kzeoztzi.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163nkramtkz.html

npx vite build
来源：http://www.aibaodan.cn/163dyxqonkn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163qqutvylz.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163tavdxovn.html

================================================================================
来源：http://www.aibaodan.cn/163brhzhxlu.html

统计汇总
来源：http://www.sxryk.cn/163cnrqrinj.html

================================================================================
来源：http://www.aibaodan.cn/163oszgmbom.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163suizfefk.html

Python ......... 252
来源：http://www.xuanzx.com/163jgjcayic.html

PHP ............ 252
来源：http://www.xuanzx.com/163mewirsdz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163sfvaobvs.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163nqxupieg.html

Java ........... 212
来源：http://www.aibaodan.cn/163bzkwhabk.html

Go ............. 212
来源：http://www.xuanzx.com/163naetmeqj.html

Ruby ........... 212
来源：http://www.xuanzx.com/163jjjonkxp.html

C# ............. 212
来源：http://www.sxryk.cn/163evbvulcc.html

C .............. 30
来源：http://www.xuanzx.com/163hanpvibm.html

C++ ............ 30
来源：http://www.xuanzx.com/163tlparfva.html

SQL ............ 90
来源：http://www.sxryk.cn/163njtihxzb.html

Bash ........... 80
来源：http://www.sxryk.cn/163znoagdkx.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163miqlydly.html

Swift .......... 15
来源：http://www.aibaodan.cn/163mhdlsgyu.html

Lua ............ 10
来源：http://www.sxryk.cn/163apdwoivn.html

Perl ........... 10
来源：http://www.sxryk.cn/163mfjohpqb.html

Scala .......... 10
来源：http://www.sxryk.cn/163yywmoxlp.html

------------------------------------
来源：http://www.aibaodan.cn/163poigwfgx.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163iwskaizj.html

按章节统计：
来源：http://www.sxryk.cn/163smmljxgf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163tllwigtd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tzdycppr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xllcrgxr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163bytjlpkk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163wfmcmhww.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163gvgdxjyo.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hbbcgqoe.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163bkmkspzo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lgbizaiu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ybrxobmq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ndccreqo.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zzsouibx.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tnvbzckv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163tlhsrtdm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163zoaljyzs.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163exatuouy.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163cdwjumua.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163qfxfpyot.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ozuhytwu.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163jdocvqwi.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163wqmbyhhh.html

------------------------------------
来源：http://www.xuanzx.com/163dhwsbgao.html

合计                                  2106 条
来源：http://www.xuanzx.com/163xnvtvwnj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vyoektdi.html

使用提醒
来源：http://www.aibaodan.cn/163pcnvrqvt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ktkfwgec.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163plbqsbzi.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163cwusunth.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163tldfpwfx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163zwfsjcaq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163kqlhgmgz.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163jnafdtlj.html

================================================================================
来源：http://www.xuanzx.com/163khrcflpe.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163cxvnlfdy.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163etadbnpk.html

================================================================================
来源：http://www.sxryk.cn/163fdpyjswx.html

【收录内容】
来源：http://www.sxryk.cn/163imoxqepr.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163cndgcfgo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163whjsgvbt.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163eqrwgeaq.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163vkennert.html

【使用说明】
来源：http://www.aibaodan.cn/163uzfwupue.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163rtyibhik.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163pyudwrhs.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163mnlhksfy.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163jotomezj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163odlnhxub.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163vxmfzqxt.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163zgdqazlp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163ixrjsnko.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163zpfkqygo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163ulhhukgw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163oyhvsfvr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ezsmmocl.html

【文件统计】
来源：http://www.xuanzx.com/163niqtnftw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163rumebeqe.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ixqwytpa.html

目  录
来源：http://www.aibaodan.cn/163vvtlgreu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ianyqrxe.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163bglulbqe.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163sdgavtfj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163owqmyzbc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163eokfmkdf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163hklqngma.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163tzyhorxh.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zhitsyvq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163oviqpsbk.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qjfmhcpt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163tyntgjtw.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rqwftbuu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163vgcxnejh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pruceoow.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163jublapiq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163rwzlfspu.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cjkugkuh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163plrakxoa.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ssmbkjwp.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163xlrdlhyf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163pxxkkkza.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163sirwkkcj.html

================================================================================
来源：http://www.aibaodan.cn/163tgqbkiru.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163uspzubfn.html

================================================================================
来源：http://www.xuanzx.com/163irnclzwf.html

[A01] Hello World
来源：http://www.sxryk.cn/163zqehmlvi.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163lltvchwy.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163voaaulvt.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163dejmdiro.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163rnbfvmnu.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163vlhrulou.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163yfptfstk.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163drkyizba.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163kuzuxmug.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163glkdfqfh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ekeiccoy.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163xoirqszj.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163cgritxgs.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163mwuqocpe.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163frhvsxik.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163hwrqapbe.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163akynmqme.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163vjlhplcu.html

[A03] 常量定义
来源：http://www.sxryk.cn/163tgvsuuiv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163osujmmwp.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ernecxfi.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163ovmpwnsa.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163cvekazeh.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163mqilyiej.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163dyqqzkse.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163pvwtrgyb.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ckvftjdy.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163qlfoaxyx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163rianikgk.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163jfbzyebj.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163kogptcft.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163sjutmhmt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163xplybxpd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163afzevghp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163sjkeuqcn.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163qvbtjtwi.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163oidwozhd.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163wqpoegnp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163vzvslryw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163daciivxv.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163veivaack.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163sfrehpgj.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163izanonpv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163opqymbxu.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163czbhcawc.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163iqrxmcmb.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163mghldbpw.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163cuxxeziy.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163takhgdeg.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163pecjzbzt.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163bnebortl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163gnvdddeo.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163oxjthyio.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163nnitvycp.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163gpeovflj.html

Py:   str(42)
来源：http://www.aibaodan.cn/163rjivisyn.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163yguxqynf.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163pbmkxfbx.html

TS:   String(42)
来源：http://www.sxryk.cn/163bokzuyww.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163eliyzgmu.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163fmdrmorp.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163cxwqzvpu.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163xxgvmrcy.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163nxargkxp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163zkoxmxvr.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163wbjwbhpq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163rbgnhmnt.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163sxhhkfcd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163xbapdpfq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163chrbqlgs.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163bsnaobbn.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163vbfbpxwn.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163cikdiala.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163hcmdonuy.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163fssolatd.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163pglasicv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163exdxhgni.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ggchjbzq.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163buqrbkfu.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163msotazhn.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163nhrwrxpx.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163fhtfxaka.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163mibwtvnn.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163wrefiqho.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163nenyvxxh.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163izumvytc.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163pvppuoxs.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163neygdujc.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163wlhrlzlz.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163rgrbwscl.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163eehhsqfp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163nkmzjfib.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163aibmiwsh.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163crhwxkrz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163uxxcccrb.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gzqoermn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163havtucpv.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mnghkviq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vpulrgzz.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163rxhegmpy.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163llzzldhk.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ewhyoydo.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163lwttnbse.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ljszqjdr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163zhajfhgm.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163juwhbhos.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163fwcbvvlu.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163vqsrkpeo.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163efvqsyke.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xwajokei.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163gmnimxan.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qwzcanyq.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nkjpiejo.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163lqjcmhmv.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fjmfldnu.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163zxsuqysz.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ksgysmys.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163vgyedzfk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163cbharvpv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163guqahdmt.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xpuvdseb.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ixvupkij.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163xszuvqou.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hulfcbwc.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163cvvovzfr.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163kvovgnvw.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163jcgluynb.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163sclemvzi.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163zdfswlbl.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lnbyzrhz.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163llvhfwcd.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163rimddays.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163bnzyykim.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163apzxahho.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163eeansajm.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163stfpevyn.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163sgkpfbnb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163kgkmhunh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163vffxslvb.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163cxrwbqjt.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163xulvecmi.html


<!-- 参考信息 -->