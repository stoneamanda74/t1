外链999!wailian999！

[U85] JS：可选链
来源：http://www.sxryk.cn/163dhpfefej.html

a?.b?.c
来源：http://www.xuanzx.com/163rdojnvfx.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163qefucoer.html

a ?? b
来源：http://www.sxryk.cn/163ntxnvqzp.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163xljrnijo.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163jlovjsmx.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163jiecwrmh.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163cxreaxgp.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163rtrluusp.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163tfbvnism.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ntfuvqjh.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gmqncwgb.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163jyhkpgpg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163xklrjqcg.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163kwitypje.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ilqnmtia.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163xovyrunu.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163wmhkyyoe.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163vldrgcoq.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163cvkytoas.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163myiyhypy.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163rnfyhajm.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163xjmmycyq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rvlexmvx.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163uzkajald.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vaxowtnh.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163fpqqnjzl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163bjoqdqle.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163zrrnykjs.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163kvqonevw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163wesrfrpt.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163mmlnrsfp.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163rtazitzr.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163daacfywo.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163xxkudeqy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163lmxnneqj.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163osggiqah.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163somuolpc.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163pioevrti.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163prnkaghh.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163omkzgzxv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163rvjdxhgr.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ozkwqutr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163dbizvecz.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163tiksbvtx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163hcwzgbiz.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163mhayiebz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163soxrwdnd.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163fcmbmsej.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xzjxhtwe.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163sylusyew.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163cvglzyne.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163nzjopbiv.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163wqkqihwn.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163mefmrqzz.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nexeypce.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163zndwnigs.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163acdxicbu.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163yhjurzwv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vzpddhcv.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ghzhlbua.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hrjpsxmw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163dxketuig.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163afagmnme.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163bvhtplsd.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163gvfwhpnz.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163cxiijrhl.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163zfbvmqnr.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163wezkkcfm.html

npx vite build
来源：http://www.xuanzx.com/163nkvysevx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163tfgwitys.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ephgeoju.html

================================================================================
来源：http://www.xuanzx.com/163xronxaui.html

统计汇总
来源：http://www.aibaodan.cn/163fonensbe.html

================================================================================
来源：http://www.aibaodan.cn/163hpfqsccb.html

按语言统计（条）：
来源：http://www.sxryk.cn/163wofderww.html

Python ......... 252
来源：http://www.sxryk.cn/163nwffunxf.html

PHP ............ 252
来源：http://www.sxryk.cn/163hfojsrzw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wienmbcq.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163zczcawbj.html

Java ........... 212
来源：http://www.xuanzx.com/163skxgnowt.html

Go ............. 212
来源：http://www.sxryk.cn/163nctuvtaf.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163vrtacbcj.html

C# ............. 212
来源：http://www.xuanzx.com/163wbzavbyh.html

C .............. 30
来源：http://www.sxryk.cn/163khsrdfnc.html

C++ ............ 30
来源：http://www.sxryk.cn/163ebelfujb.html

SQL ............ 90
来源：http://www.sxryk.cn/163hatebxmh.html

Bash ........... 80
来源：http://www.aibaodan.cn/163dmhlgclw.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163jbennybq.html

Swift .......... 15
来源：http://www.xuanzx.com/163tfyztjkg.html

Lua ............ 10
来源：http://www.xuanzx.com/163otcbogkw.html

Perl ........... 10
来源：http://www.xuanzx.com/163xiujupgf.html

Scala .......... 10
来源：http://www.xuanzx.com/163lguxgkeh.html

------------------------------------
来源：http://www.sxryk.cn/163eahmahvy.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163uqqnjazk.html

按章节统计：
来源：http://www.xuanzx.com/163yyrbfojs.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163amfrlxli.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163nzlgxapz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vykbswpq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wurdozuq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163qmfdtuov.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vlxadypn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qyipskqa.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163bbbkneqx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hngvctxm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jjycenqt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163trkabkdi.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ainwymrd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qpcxulaq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gpzunmma.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163bopbzcrn.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bfekyzqz.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163iurhdmxo.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163gdhyyovx.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163fmujldzs.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163scudfpzn.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163oiobzbfb.html

------------------------------------
来源：http://www.aibaodan.cn/163ropuouqr.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163zdyshtzu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jwnbziyo.html

使用提醒
来源：http://www.sxryk.cn/163cfxyordj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xslsggya.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163jfxlbkip.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163nvjbgjog.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163gpnbwnvo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163wtmagknq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163urtubpen.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163kaoadkbb.html

================================================================================
来源：http://www.xuanzx.com/163azmuwcdh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163uhsxshtm.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163jqlecnay.html

================================================================================
来源：http://www.xuanzx.com/163xznyxkpp.html

【收录内容】
来源：http://www.xuanzx.com/163tegmtdpx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163caoblobs.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163umlyszzy.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163jkmycuwh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ccxifpip.html

【使用说明】
来源：http://www.sxryk.cn/163wkfelwge.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163osrbnovx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163nbuczpfb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163lutnklsl.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163fhacweus.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163agrpojlx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163quulndwq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163kekrnvfp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163zbuldxal.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163bxwaurhy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163dqbqnkef.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163aibkyztx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163qxhjgvwc.html

【文件统计】
来源：http://www.xuanzx.com/163sovmgzwm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163tzhnucgt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163relozmqf.html

目  录
来源：http://www.sxryk.cn/163zizkpyef.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163sjdsqtlc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dpaxopuw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ydzrfvnz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fgwnhyzv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qzdtmwkh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163gdhowgel.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xkngdlhu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bmntzhzp.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163chlqglaw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163arsrasyg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163csmxlqka.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hbqqjbia.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pzoyvbti.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jycpweej.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163upwcmkfd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163doyehyhy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163npkvavzf.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163gwegyrlt.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163namfhvse.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163abyntmvk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163kvgkwtut.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163jxueuqen.html

================================================================================
来源：http://www.xuanzx.com/163vlkffkpw.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163dhmwlrny.html

================================================================================
来源：http://www.xuanzx.com/163ahxarzvu.html

[A01] Hello World
来源：http://www.xuanzx.com/163elcdcmss.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163fbuxhthr.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163dpsxvcfm.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163tdynkmql.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163klbwjvie.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163modhusif.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163nycxfduh.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163fsrbnpwx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163zeeyoigo.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163pdydsgyq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163pwzskjeu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163kqwtnmri.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163sqwizzqq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163yfpuheic.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rujralyy.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163tevvqabs.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163pinuvbnd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bjusgaab.html

[A03] 常量定义
来源：http://www.xuanzx.com/163isigofqz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163lzwzmyvi.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163fgqptejn.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163mxkyldil.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163aczvvvof.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163nxfkzzoq.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ttlutrmo.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163unjldvzv.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163vlnxxfzf.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163ylkjgcpv.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163vnxseugq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163mexyyzrc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163bhlpsuty.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163ngromyzi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163gjejhmpn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163fsmiimja.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163mggmaord.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163dkzahwkd.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163gmvlddsn.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163ekhcpirq.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163etttemer.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163zhcvluey.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163nipsbijd.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fcdhrbzr.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163rplaymrt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163sgiisofe.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163trqqvfnk.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163pgmshlbg.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163zlqmduye.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163ytjwxwau.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163uevstjga.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163paplhpnv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163sizusuxf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163luigroog.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163tdmqhrgd.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163kixcxlnq.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163dcoxfjkm.html

Py:   str(42)
来源：http://www.aibaodan.cn/163hlzfrmft.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163bwdizmeq.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163nmwfpfrm.html

TS:   String(42)
来源：http://www.sxryk.cn/163nhauvezu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163fntuovxt.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163olimdpkb.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ekssstns.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163xvsluagj.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163adrzbsbg.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163eisghmxm.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163iqvyaxfb.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ecmenqys.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163klpcmslo.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163jhmsewwy.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163fcjiyzzy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163nbmoywbj.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163bjpaenmn.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163leexlqom.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163kwnvpiry.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wouzqgwm.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163lbqojqed.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163psexslfw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163gnzlpjha.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163xojnvzub.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163mwjxexuf.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163unflgmck.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163exuovqri.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163ynogatmi.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163nxzznuaf.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163kflfmgaa.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163mhsofgoe.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163jtibysvt.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163tfnseheu.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163smemkgsp.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163imqqctjf.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163wudwfduy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163holmchtl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163oexlurgh.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163igznzqia.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xyfiyzdl.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kkivnbhs.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163jkfwsnrj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163txbpljwc.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sixlvgvt.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163fmydfhlu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163onxwkwnr.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163vutwzita.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163djxbrktd.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163hixqijfi.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163isphsivo.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163yepceixs.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163dybqovht.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163kbtpjrgh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ezsqanee.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163edwqnrys.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163kxomyjzr.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163putrhwef.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yhzaqycb.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163aomfzrfj.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fxqjlyfv.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163zrxnlalk.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rpbtczoh.html

[A14] 注释写法
来源：http://www.sxryk.cn/163regamxvm.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163mkkebhqh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163rqjwyadt.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zsheztjg.html


<!-- 参考信息 -->