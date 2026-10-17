外链999!wailian999！

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hanjqdbg.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163mqoetfue.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163pwwsmjrj.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163nbkbddfm.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163qgaodvwj.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163vimywqkq.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ldqpcxva.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163okabguqg.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163vprjxgmr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ivkcbgod.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163aeykbldu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163soyjtfto.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163onrmighk.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163zxcwtnca.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ulwvutbm.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ykvxmuex.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163flrinzyw.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163gxqblpvi.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163leqaehuy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163htxlychc.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163gqwqajbm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163xwabhudb.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163kxtxbshk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hozzoejo.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163nqeydlfc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163hjuwpwff.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163sjiizcch.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163hzvyigfs.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163iiomlcum.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163pfcnldtu.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163eubatuuf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163epzfinpt.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163xmhfklpj.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jlumjyvs.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163kuexmcgq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163bcmbizgd.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163jwmxhlph.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163bvyvfwdt.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163blcxwsmr.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163krxabgca.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163hrxxmgyt.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pbwqavac.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163nzvugpao.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dwwqginu.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163apjmbifh.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163jffvxawr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163eivdacvg.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ouhlmaja.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163nyuwuzjn.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163aswkuqfv.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163mpkujglt.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163yffurjtn.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163phnoqbnr.html

npx vite build
来源：http://www.xuanzx.com/163fqhfyknm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163gwpospdo.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163qehlxjwu.html

================================================================================
来源：http://www.sxryk.cn/163lyunhksp.html

统计汇总
来源：http://www.aibaodan.cn/163gepvpzry.html

================================================================================
来源：http://www.aibaodan.cn/163vpteywkb.html

按语言统计（条）：
来源：http://www.xuanzx.com/163pmqpntjz.html

Python ......... 252
来源：http://www.xuanzx.com/163egvzebtu.html

PHP ............ 252
来源：http://www.xuanzx.com/163pubenkoo.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ehpilmkz.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163dqcvhyju.html

Java ........... 212
来源：http://www.xuanzx.com/163tvwtipdq.html

Go ............. 212
来源：http://www.aibaodan.cn/163klhrskqe.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163vsmcesci.html

C# ............. 212
来源：http://www.sxryk.cn/163mbeddewu.html

C .............. 30
来源：http://www.xuanzx.com/163tccvyuqt.html

C++ ............ 30
来源：http://www.aibaodan.cn/163bopynfpu.html

SQL ............ 90
来源：http://www.aibaodan.cn/163elafnsvr.html

Bash ........... 80
来源：http://www.aibaodan.cn/163mmqthvvb.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163bmqarqpi.html

Swift .......... 15
来源：http://www.sxryk.cn/163pjtprkkz.html

Lua ............ 10
来源：http://www.sxryk.cn/163rwifhbyb.html

Perl ........... 10
来源：http://www.sxryk.cn/163uubdqovs.html

Scala .......... 10
来源：http://www.xuanzx.com/163amylpepx.html

------------------------------------
来源：http://www.sxryk.cn/163wkrkugyy.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163vrzotipe.html

按章节统计：
来源：http://www.xuanzx.com/163awnyyiec.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ahsilqfn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163myupyavi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163yzqorhpo.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163xnycpyhn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163vocvsstw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vgbykqfs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ubwlupyd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163kwlakeqm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fshlidsb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163knzawlgl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vtrpvvhi.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zjhxqokw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163plbioloj.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zkooqqcn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163srgngksk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163aykagyhl.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163cuperxqb.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163qubnpopn.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163wcniusqz.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163glpifwcp.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163aenqkxvy.html

------------------------------------
来源：http://www.xuanzx.com/163ylofyasp.html

合计                                  2106 条
来源：http://www.sxryk.cn/163oylwpjxs.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ezabkggd.html

使用提醒
来源：http://www.sxryk.cn/163egqxbouq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jluixvqg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163nhpvrzyd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163mxurgncn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163xvkcziak.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163wkfczwsx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ktsgymba.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163yrxguary.html

================================================================================
来源：http://www.sxryk.cn/163jzssommf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163bpzszvzl.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163oulzvgfe.html

================================================================================
来源：http://www.aibaodan.cn/163bvykvmfc.html

【收录内容】
来源：http://www.xuanzx.com/163nhhtwqpg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163lgzlptht.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163mrhoycuw.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163gusvzajk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163jijhiszo.html

【使用说明】
来源：http://www.sxryk.cn/163yvqlrzzi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163zqbfzmoq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163xkpafbrq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163tchrhlpw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163kjzdeslu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163oliuyjkb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163gkqpeigu.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163szzhwjpa.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163burszzgf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163exezyvmv.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163njqavohc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163tanhwcbi.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ophqmshr.html

【文件统计】
来源：http://www.xuanzx.com/163jmqconbe.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163zjmwssaj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xytbvucw.html

目  录
来源：http://www.aibaodan.cn/163fopvecmw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ddftrrgi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163wdtsoqan.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163bsobwgcg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jorygpub.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163omklhcji.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163leytzodw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jylyqtzl.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dcxsifxv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163hlizdchf.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mdkzevox.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163snftbzjb.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tkeqapgr.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rfqhyddp.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wxokoefw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ghuahjkw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163nqtqqebj.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ljlqmgdt.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163pxcrbfuh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163vbyeegds.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163bxupfjgz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163rdgfekym.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fjsficwk.html

================================================================================
来源：http://www.aibaodan.cn/163utuuwjht.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163cilqzkiy.html

================================================================================
来源：http://www.aibaodan.cn/163qwwlwrqv.html

[A01] Hello World
来源：http://www.xuanzx.com/163zkzgtlzr.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163sbagszrf.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163iqfhmrex.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163alqqdyud.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163iyfkgyha.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163fivpjgcq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163swsdmmat.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163tcfqlseh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163dgcvggdv.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163cjxehszm.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163djfzvfrv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163pshangxs.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163mgwfgfpv.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ctzpnpcz.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163sikssegv.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163spoaqedh.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163xhlxwdnc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163jjklpyfx.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163hdbnhqxk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ggmnskuw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163oafsyfzh.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ntapeaky.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163cysridoh.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163mnvqxwjy.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163zwivtvkl.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ydwomvot.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163iaviixcf.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163jervoufo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163gnrvnakt.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163lluyfmoo.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163jcliblfx.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163mwzoplxo.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163sztjyhrd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163gyztkeal.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163voudopng.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163cokubzhb.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163jmmedhlc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163nzzizbwb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163owvwfbeb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ztnfhuhb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163rnyvfpol.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163itghzhun.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wzdpkwvq.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tbkhfhpj.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lvqjmomq.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163wfixnjey.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163vegcaokd.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163ysuowkwo.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163huiwmjsg.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163zrnpwxpw.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163jpkjxfvs.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163ejwrahjh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ydzpqkik.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163qjyzwpdh.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163xejmszgp.html

Py:   str(42)
来源：http://www.sxryk.cn/163dgfwhnfk.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163bxarbtni.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163ubeaozab.html

TS:   String(42)
来源：http://www.sxryk.cn/163kdvverji.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163sidgevdw.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163ryhyyhyb.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163wxxxholw.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163nemzcdng.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163rquxertt.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163ppugrjcf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163ldjbaozj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163eojafzbf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163gidzxmte.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163qnumhbtm.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163quivrcvy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ooclbbix.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163qimzqmnb.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163ureklhgi.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ezrrocci.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163fahmjqnm.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163hbtwovrq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163kjxlpgjv.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163mkvyrlqv.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163wncssqjk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163vidbciyo.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ggctjxvp.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163khjgpxgd.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163tiiiplct.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163wqigtbsb.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163pktxagvy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163nhmzhooi.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163kphfwccd.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163xegzlkuj.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163jvveyoiv.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163urokxzxm.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163spgdpuzn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163kpwmizxc.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ggjnvgoq.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ftetrcgc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kbgldwnn.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zkhmsmef.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163rkmlifor.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ypoeifvr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ymllnjbk.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163nqmawetc.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163kdeunsam.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163dxoykbcj.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163cbinvhss.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163eomdhjqp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163jxigiypf.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163elbdwfzt.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163tzhjbiqm.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163nagnoppz.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163jrhdfgjs.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xhsyykal.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163rzknbcrq.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hdfmugnh.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wgnzdsdq.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163bpuwahdn.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163meqcatzk.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zpyqzbvs.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ukcwbsdx.html

[A14] 注释写法
来源：http://www.xuanzx.com/163tlpudqxj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ekovjlfc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163xzvuuynp.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qwirhslb.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vjfbpkme.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163zzyjhmzo.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163toliqdoq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163skspbszo.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163aciycclu.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163mutbbvde.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163tzsrnihy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163jjpzqbuh.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xcmdtmul.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163aicknpwa.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ispvyman.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163tjznpuqu.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163qszonujv.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163adfmbomt.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163cvnnxjgd.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163dbisnhur.html


<!-- 参考信息 -->