外链999!wailian999！

[U85] JS：可选链
来源：http://www.sxryk.cn/163bzcsdhce.html

a?.b?.c
来源：http://www.sxryk.cn/163bpxtmzyj.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163poekfxqx.html

a ?? b
来源：http://www.sxryk.cn/163euactchi.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163lujrruui.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163verfwxzp.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163oexsotyx.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163irmkxull.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163rnoyaxbq.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163dcgveajb.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163gamlfwlg.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bsbrmbfk.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163uxhagagl.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163yapaznns.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163milbuonj.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163mbwrsgpp.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163xashcoek.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163pgfqbafm.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163shnxyvrq.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163bnrqbwff.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163vaopabpu.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163pikuodpq.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163mbsiiljq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yinvsxlp.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163xfxbgiww.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lkguykwv.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163delqjqmp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163eteeysqv.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163fblhlwkt.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163gqrjcwmc.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163zkwwqgpz.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163pbjbonnl.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163zowacpji.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163todoqupx.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163srawkuqg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163gcfgfgre.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hmzdztyj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163fmacgmif.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163srziouuy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pamctquv.html

[U105] JS：节流
来源：http://www.sxryk.cn/163nxdshtpv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163coktznnk.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163vttfwmrg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163swtfuymc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163nomohikn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163xqsuyrpa.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163onccdbka.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ypguktes.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163hudjdjce.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gmaqvmjv.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163xuxxgosc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163zobokzjx.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163jhbgphsu.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163rujjvezv.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163kseclquz.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163huswtyry.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163sbxozoqf.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kbagjfuj.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163bfikvvhp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dayxlsvo.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163mkwrnftk.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163atfyxvnx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ajoyhgod.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163mljotutg.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163esqgbwus.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163aaalnlqu.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163zbjsjrdy.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163eowpyamn.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163htirmphb.html

npx vite build
来源：http://www.aibaodan.cn/163zlrstafg.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163xjppepck.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163qcxeasvj.html

================================================================================
来源：http://www.xuanzx.com/163eftrkixe.html

统计汇总
来源：http://www.sxryk.cn/163liqdbwit.html

================================================================================
来源：http://www.aibaodan.cn/163jqbndyko.html

按语言统计（条）：
来源：http://www.sxryk.cn/163finteygk.html

Python ......... 252
来源：http://www.aibaodan.cn/163ivraalgr.html

PHP ............ 252
来源：http://www.sxryk.cn/163grkweoai.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163arwzaovn.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163yozwgkiw.html

Java ........... 212
来源：http://www.aibaodan.cn/163czkhdcuh.html

Go ............. 212
来源：http://www.aibaodan.cn/163nzklcwgg.html

Ruby ........... 212
来源：http://www.sxryk.cn/163bfcqscnj.html

C# ............. 212
来源：http://www.sxryk.cn/163wvenfwvb.html

C .............. 30
来源：http://www.xuanzx.com/163onxqfphm.html

C++ ............ 30
来源：http://www.sxryk.cn/163ygvvfhbc.html

SQL ............ 90
来源：http://www.aibaodan.cn/163wzeeqcob.html

Bash ........... 80
来源：http://www.aibaodan.cn/163bvxtkozx.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163qebcqprz.html

Swift .......... 15
来源：http://www.sxryk.cn/163jfffwcpr.html

Lua ............ 10
来源：http://www.xuanzx.com/163nnngoswt.html

Perl ........... 10
来源：http://www.aibaodan.cn/163agdhqbmo.html

Scala .......... 10
来源：http://www.sxryk.cn/163sifrnzxj.html

------------------------------------
来源：http://www.aibaodan.cn/163urimzvze.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163rvisdnrq.html

按章节统计：
来源：http://www.xuanzx.com/163auyycejg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163napgahwo.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dyprqzvt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163kjxorxuz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ffvmfplg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163twtgfeww.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zkjwpbov.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ysoivdeu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163wotwmhcd.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163oljrbnue.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163aptoityn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163advxghta.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yjnhtitm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ykmqekai.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163gubjemzc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ehyhsyra.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cbtrvljs.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163rrwmjjcm.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163xvlmctha.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ngvbsqau.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163xrumlikw.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163gfkofogz.html

------------------------------------
来源：http://www.aibaodan.cn/163nhhagjsb.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163zdsiqbje.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163iwgifrre.html

使用提醒
来源：http://www.xuanzx.com/163ctygbimc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mcrkxlow.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163spqxqhll.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163vqnqcwwv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ckzuohfq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163zknoywua.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163yubmiadx.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163mtqxoxpm.html

================================================================================
来源：http://www.xuanzx.com/163szidhtdl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ckefrune.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163kngqvhrn.html

================================================================================
来源：http://www.aibaodan.cn/163jzdzoyun.html

【收录内容】
来源：http://www.sxryk.cn/163jaxprcwq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163qkvmfdxb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ozfjufyq.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163hbdfkbph.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163btstwedx.html

【使用说明】
来源：http://www.xuanzx.com/163vsvkcqbh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163sqiusrcx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163epmphzqf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ljpvdfir.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163mgjpejkg.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163agmopkzz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163siwcvwwk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163iwwoauni.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163yeduqqwc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163quqiubdc.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163hxxaztst.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163uqaqxlfn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163gnsebwnt.html

【文件统计】
来源：http://www.xuanzx.com/163vtxrljmp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163lckydfgu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163dsjayleo.html

目  录
来源：http://www.aibaodan.cn/163bpemfcoq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163orgddfxy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163lzfvzcrb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163cdfxhanz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163yusyytge.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163uqdgkczr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163foxctwwx.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xknzxurz.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xprdijgv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163dvzlmppn.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xpftqnoz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163fifxqchq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163vkcezoso.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zykhcgst.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163npmglpux.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vftxinyr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ecdpwemz.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kcwcbrvi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163oqkuuxdp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163pyvkupbq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ouxbagbd.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163irzjehtt.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ffqtioll.html

================================================================================
来源：http://www.xuanzx.com/163jxpumopq.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163ywonzmpk.html

================================================================================
来源：http://www.aibaodan.cn/163dcigvhxr.html

[A01] Hello World
来源：http://www.aibaodan.cn/163yynuacep.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163hkornepw.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163gfjbqcmo.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jiwiiltl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163mpduhrma.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163jythembw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163xhuioyhb.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163rfbuxkqc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163ocdygnhc.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163glqrwhfg.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163ynjjteni.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163aclbfzet.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163imkqhpdm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163rekfaieg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163fynkvmon.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163frcuiqcw.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163aelbqtiv.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163yebiquhi.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163xnopcpcs.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ffkoplzs.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163detezmcq.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163irgimkno.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163jedtmjhv.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ddmaklwr.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ecqigzxq.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163zjmnonba.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163alhfribk.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ddczajwa.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163keolcneh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163earmkkbs.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163zdmuyrpg.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ocbiyfru.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163lqdbzltk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163lfxybhkm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163fcjkbwyo.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163kaxqypux.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163zflpbwww.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163hjppvcvt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163eimzbjyw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ejsvnbmo.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163jelhqleu.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ffvlgaxh.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gicrvbct.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163htfkasec.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163esrawfin.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163kuzlffcu.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163pxwjqeif.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163agmfjmvb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163iexakeuj.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163vmccvhqa.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163gwjkfnfm.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163rjepguqa.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163dkgibckm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163buxjafkh.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163ywjpeaoy.html

Py:   str(42)
来源：http://www.xuanzx.com/163phsxbret.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163xhdnxkcu.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163znbctwon.html

TS:   String(42)
来源：http://www.aibaodan.cn/163llemcenc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163paaknidl.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163vbymeuyp.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ouqisbmh.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163uxlqobfn.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163oyopisrp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163nqohhdhz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163wriuelze.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163rmzgsfmt.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163uxbgcibb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163eyqjypcf.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163fmjresez.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163cvezvmjj.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163oirekdrs.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163wodhjizf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163xamoxkdo.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163tvrfoxpo.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163ifyexwcv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163amchnajc.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ubagjeiu.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163sutfshdf.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163nyzwdmre.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163fkeyhrpe.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163cvvfudzt.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163kplfnohy.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163hlvbwqfi.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ayagzues.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ybftubeu.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163lcukhbzs.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163agoggsap.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163apfgdoyz.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163yecxwjrn.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ilceuihq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163vzpjytut.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wiebxvur.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163itwunysb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cvknbcpy.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bxtqfhli.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163mswaqeoz.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vhormitf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163edsioifi.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163scdkzsvz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163npdzikil.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163mjxirvqq.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163qrqhjgln.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163iqgxmkii.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163oeuxxehd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163gydkcmsu.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163tgrqgrbt.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163rnbfrkho.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163fmaxlzzy.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ntkilgux.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163jlhfwnoc.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qpzxncvo.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dgftizbn.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163wfwpklaf.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163oojpikrh.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163pdijbeil.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ixgecrpx.html

[A14] 注释写法
来源：http://www.xuanzx.com/163wtsbyywx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163zhtsfidh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163vujlpbbu.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163skegpxli.html


<!-- 参考信息 -->