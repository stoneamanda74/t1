外链999!wailian999！

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163peythufb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ooocnvzk.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163lufxmxxp.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163yrvptvnh.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163cuqqtprs.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163hcwnlwdr.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163mcqwtqos.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163cexgteeg.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163mkfhvohx.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163xozdmskh.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163nsfghwbq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163igtmxnod.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163yorfnypk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pividinc.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qaninwvf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163zqpwmjzh.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163mbxfeszz.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163zuayopwb.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163zutrllxu.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163cmdsignh.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163gwifxxlm.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163uinsujgs.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163mqhgigzy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163enaxydpy.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163tsgpliey.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163aztinqoq.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163eizdnupr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hcrwpwro.html

[U105] JS：节流
来源：http://www.xuanzx.com/163yrweejnj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163qqnwdhks.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163davpoghj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163xcknqirn.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163zcxqzhfm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163zkjjdsis.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163fuyobift.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163kfcujdfu.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163thodvghp.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163btxvcbej.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163hfmvhoif.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163igppvcyi.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163pdlxjqjm.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163pgklulue.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163jqtmuplt.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163qemieltv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163nfpuvmxr.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sayqxgqp.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xbpqrfwj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163uxoggota.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163okpxcnvw.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ggxdcqhi.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163vhudiqxx.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163zclmlnrs.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163honhutzc.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xtecpmsj.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163qonyknyl.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163pepmkfob.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163mqtveobk.html

npx vite build
来源：http://www.sxryk.cn/163cwecsqag.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163xqoufhno.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163zcumisjv.html

================================================================================
来源：http://www.aibaodan.cn/163bbgidsyl.html

统计汇总
来源：http://www.xuanzx.com/163ftkqlhsb.html

================================================================================
来源：http://www.xuanzx.com/163qnccncpn.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163kxtswvct.html

Python ......... 252
来源：http://www.aibaodan.cn/163puazglho.html

PHP ............ 252
来源：http://www.sxryk.cn/163tnscnftg.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ghpaeasr.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163croxumwn.html

Java ........... 212
来源：http://www.sxryk.cn/163pbjhywgt.html

Go ............. 212
来源：http://www.xuanzx.com/163aadvuwnl.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163bdgghift.html

C# ............. 212
来源：http://www.xuanzx.com/163lyisfgje.html

C .............. 30
来源：http://www.xuanzx.com/163ettdobib.html

C++ ............ 30
来源：http://www.sxryk.cn/163vtbecpyq.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ghrzvcvy.html

Bash ........... 80
来源：http://www.sxryk.cn/163ywangnqn.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163usdeyokq.html

Swift .......... 15
来源：http://www.xuanzx.com/163iugfrnli.html

Lua ............ 10
来源：http://www.sxryk.cn/163tcicvypv.html

Perl ........... 10
来源：http://www.xuanzx.com/163afodeaqj.html

Scala .......... 10
来源：http://www.aibaodan.cn/163uhrgnecf.html

------------------------------------
来源：http://www.xuanzx.com/163jwezlvme.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163gecplhvm.html

按章节统计：
来源：http://www.aibaodan.cn/163kushrfuy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163urofktpv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163sjebqkmo.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163slwfiyal.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ltvrvdxg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mrnatfju.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ktugjwvi.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fbmzjyxg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163bgvszrez.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mnvkgxrc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163snwepixy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xkpdwfiz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ltugklec.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ghmopium.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163qadwdntc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163cofqcxei.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vzqwxnsu.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163whszveyd.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163dhuouvwr.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163tdtqcgph.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163osdeqycz.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163rndsphdw.html

------------------------------------
来源：http://www.aibaodan.cn/163lcmgejzo.html

合计                                  2106 条
来源：http://www.sxryk.cn/163apwwvftw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163cbzdghef.html

使用提醒
来源：http://www.xuanzx.com/163tchlypan.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cgwxewmw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163zrnsfnvm.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163irlplrtz.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163mywdgmde.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163dzigafom.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163buoesqam.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163rppapmjx.html

================================================================================
来源：http://www.sxryk.cn/163ukakohau.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163blugjsqg.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163airsxwbv.html

================================================================================
来源：http://www.xuanzx.com/163jpmdocab.html

【收录内容】
来源：http://www.xuanzx.com/163qyynuxvl.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163keggsuxv.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163wgoollaa.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163jfnprpvv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163hcjziqta.html

【使用说明】
来源：http://www.sxryk.cn/163apptgwim.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163prpthhwi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163elzjnaps.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163tpoopqsg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163jczntjay.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163hgjccscw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163qzcjwrcy.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163aahrknxs.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163nuoowzyq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163rjupfrxm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163nlxlzato.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163pcosqaaf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163rfjeorko.html

【文件统计】
来源：http://www.sxryk.cn/163wmiiwuzj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163sjzjlfcg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163eemewsnz.html

目  录
来源：http://www.xuanzx.com/163bzppxdpu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rbkhjizi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163kjhicpvz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163tadgjpud.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163adqqutyf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163dvtbhxwm.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163uevqibbt.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ljhrnlwg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hgkqppdz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163qlvgwybv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hcsnezjl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163puxeuotf.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pjjdfbwf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163giduwxps.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hghggzcn.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163rvzotryx.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163rjtgtjnr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lranfefs.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163qcextnxu.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163gnltgzsl.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163bnjpeuip.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vibplkeu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163azdkjcqj.html

================================================================================
来源：http://www.aibaodan.cn/163yndagcmg.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163mgkofvkl.html

================================================================================
来源：http://www.aibaodan.cn/163fjpbdqgn.html

[A01] Hello World
来源：http://www.sxryk.cn/163julyrrbi.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163hkgdwebq.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163lmdzspuy.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163tqtiehps.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163eibhrwll.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163tlkpyjsy.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163lglisbfr.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163tvoliukx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163yejcmxns.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163mpogbgak.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163bbdawnbw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163svjgriou.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163jrkojsaq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163pjzyfesu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163eobweolm.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163sdewoddw.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ihgnrdfs.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163opsrcaxn.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ephutuze.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163pehtgaak.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163nhxjsimg.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ktprpxtj.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163crcfxwis.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163omdgwvex.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ahuvdajb.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163qdzgjnlj.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163yavkbups.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163hmyzbptf.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163nzgjbuwx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163lwkydsqc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163sxiweqyb.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163addbhetg.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163llxhjvzu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163foxithwv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163mwegcogb.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163twumaniq.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163qdgzylvy.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163bjoqmdpd.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163dbwohrxk.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163gsbrpxvu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163glmtrlii.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yjfqrhzf.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xkgxsivc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163owweuxeo.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wchukmca.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163dfdhhcac.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163arlsamce.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163avofiayx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163ghqyllmr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163dsknciuq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163exisifft.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163snwgmycw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163admwghai.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163khmoidkz.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163vbkycjld.html

Py:   str(42)
来源：http://www.xuanzx.com/163dygehuqb.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163orswbukn.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163djmbjpan.html

TS:   String(42)
来源：http://www.sxryk.cn/163vznlpjth.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163cjrczmyx.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163pckjiswd.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163sdtgnmci.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163mkjdjjls.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163akehfgcr.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163mldopkdl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163olofpgnz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163qfvtqzxw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163zhvbzgsh.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163exvgdain.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163uybnmlhr.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163imwwykqz.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163tefebwkp.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163ccjzoxzf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163vylqloov.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163uchfcoen.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163namymnin.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163jkwxrfos.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163moeqlwhi.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163tthybzlq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163syojyjar.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163bqcgenmp.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163iltuwqfm.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xxnbhtbp.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163hrgfdkiy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163scfkdvgg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ypdyvotg.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163gzjraqjy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163edrwskcp.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163lximnggo.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163gqkuwtlv.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ylcgkrou.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163ageoozfy.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cqmdpvoc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hlwlwstv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163efdyliqw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mewsshjv.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163gguuwpyf.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163igbzqxuv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hsxqiphr.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163ezkbrkcu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163tjeavtig.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163occjbpzo.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163wscczvhg.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ldsrpktr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163jyksxtgp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163cakhmjyb.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163dqrzkcps.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163lypeplzs.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163sxctwyqq.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163daoagcvt.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163dhtzovnn.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qvhphqnr.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gkjfwfdm.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163jghbyqvu.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xvcxpmlh.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163lbdmrqcf.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163owvkbpbk.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163zxrpaqwc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163lutpfkxw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163yixdhphx.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bqqwxqwp.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ccdxljlk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163nahalkmo.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ewfvgcty.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163zkleglnm.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hwauetws.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163tgmtgigl.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163nferfezl.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163ouyzxoyy.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ontqisyj.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163wyfycmxg.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163womjxfsw.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163arkqdpsw.html


<!-- 参考信息 -->