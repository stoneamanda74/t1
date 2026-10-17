外链999!wailian999！

[U85] JS：可选链
来源：http://www.sxryk.cn/163gonnjjme.html

a?.b?.c
来源：http://www.aibaodan.cn/163wmlsreow.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163sgedfwak.html

a ?? b
来源：http://www.sxryk.cn/163eeiotbbo.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163yqmgfavs.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163lpkdzzsl.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163dgxyvcxq.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163kbqkbajb.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163lissdoih.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163hhyvoylx.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163uhmswehj.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sapjeemp.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163tfxbcpbw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163detysavy.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163kqkchmxc.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ynonakqr.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163egsdkpmg.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163yinqwtjj.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163anjqnvfh.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163mlcglrpl.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163fafypafx.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163hpvufwnx.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163nmsjojlx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163txwxwxgc.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163vyczlaba.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163glpludkl.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163thxornla.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163whtkdivh.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163akgusprp.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163vrqyrlsr.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163mrvsvsbd.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163zrxkdpzs.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163poagiugs.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163svehetyd.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163thgmjdsn.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163xbbdnodt.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163qchhwiuc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163rnwntgcu.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163gmerprsq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zqmgipjy.html

[U105] JS：节流
来源：http://www.sxryk.cn/163fkkdquvy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163qfwwcosr.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163mbtkqkow.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163whyldbnl.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163vufnaazg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163dipyxvjv.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163rewwxrif.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163qtwiozrk.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163eveuxcpy.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lqoywwld.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163igsrngkw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163wkvyfnqh.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163fatbahxd.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163cipjjref.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163cxrcrqrf.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163lzjlzuxa.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ijyadvuv.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163peckjawe.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xbippvrw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163bhcvocka.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163rleniyfi.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ioiizozv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163plnaoazw.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163gicstech.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163dmxewrwk.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163lcfrckiq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163egtorerm.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163staoxicp.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163tbwmnqfx.html

npx vite build
来源：http://www.aibaodan.cn/163rqeqjyfr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ctsdnwql.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163zjgadvqh.html

================================================================================
来源：http://www.xuanzx.com/163mmiorrtj.html

统计汇总
来源：http://www.sxryk.cn/163fegglzom.html

================================================================================
来源：http://www.xuanzx.com/163oaozkxgq.html

按语言统计（条）：
来源：http://www.sxryk.cn/163aealknml.html

Python ......... 252
来源：http://www.sxryk.cn/163bzrlacym.html

PHP ............ 252
来源：http://www.sxryk.cn/163xxksiofe.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163evyvnihp.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163iseyntqh.html

Java ........... 212
来源：http://www.sxryk.cn/163wnqjqtzk.html

Go ............. 212
来源：http://www.sxryk.cn/163oaobrkrr.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163getcrilh.html

C# ............. 212
来源：http://www.sxryk.cn/163unwjrxpv.html

C .............. 30
来源：http://www.aibaodan.cn/163fdztcqki.html

C++ ............ 30
来源：http://www.aibaodan.cn/163qjgbxcnh.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ogcdfluq.html

Bash ........... 80
来源：http://www.aibaodan.cn/163kvpedtng.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163khqnjemw.html

Swift .......... 15
来源：http://www.xuanzx.com/163fbzyqgzq.html

Lua ............ 10
来源：http://www.xuanzx.com/163qkobadyz.html

Perl ........... 10
来源：http://www.xuanzx.com/163zgcjuuna.html

Scala .......... 10
来源：http://www.xuanzx.com/163ncyovloj.html

------------------------------------
来源：http://www.aibaodan.cn/163ebssqpem.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163vcfacwgo.html

按章节统计：
来源：http://www.xuanzx.com/163xbluilqb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163etprgogc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jesyvpym.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hqbgyoce.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ybckpgpr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163deklnymu.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ynvofiqp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mxpcmpfj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zvmxsink.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qjqnynhm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163xwfvdlor.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163byvkxurn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163obgfztpu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ganonrah.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163xwwpzlad.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163aaqpbrne.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nqihtkng.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163pmgratwq.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163kezjyfya.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163fvpippey.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163dyxasith.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163gswxrueb.html

------------------------------------
来源：http://www.xuanzx.com/163keihsxco.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163xtuacmsl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163iyybckjx.html

使用提醒
来源：http://www.xuanzx.com/163wostkulz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lpynchhi.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163zmftjbjt.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163ezegwgxk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163nznhamoc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163tgevqial.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163wzkqmsrl.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163pjzxripy.html

================================================================================
来源：http://www.sxryk.cn/163pfjfbpqh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163vsiuorgl.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163lqrpeijm.html

================================================================================
来源：http://www.sxryk.cn/163sjeqsobh.html

【收录内容】
来源：http://www.sxryk.cn/163notkoeox.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163bczlmhsy.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163orvfknwb.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163wxnopoay.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ouiwmjnx.html

【使用说明】
来源：http://www.sxryk.cn/163jzjdizhc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163fxvjnqdg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163bhpvnhhi.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163hvngfemf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163mxijwqdt.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163aoyqpfdz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163jnutbimb.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163glxfjpko.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163nbvgelev.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163hznfefrf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163anegzghe.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163gdapwbwb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163hrunyhla.html

【文件统计】
来源：http://www.sxryk.cn/163tjyntcfc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163iqsnjkjq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qmuzmfhi.html

目  录
来源：http://www.sxryk.cn/163kxwrhjfh.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bafdctal.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163tulpnrny.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wxktkepf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163pxkyoqui.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163apfzewbf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163awuzrjpx.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163qymhthqs.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ckcetath.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hyacltmu.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zjfrngkn.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163cvsgvqqb.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163enfqemmm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163swmzlnjr.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tqkcwekd.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163oaemlrfn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163sqyykexw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nuhzveub.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163xpbzyabh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163avsvescf.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163cawjultk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tvouabru.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fyflthuh.html

================================================================================
来源：http://www.aibaodan.cn/163whfyluhf.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163nqpybnkl.html

================================================================================
来源：http://www.xuanzx.com/163gunrqigz.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ydxdelit.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163gusgbkiq.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163zxbejaty.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163oxqqovrh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163pwurmgnj.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163ajftyksl.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163mcafxzwq.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163usuewpdi.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163bydmusda.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163tsurljcm.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163bbgsecrr.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163jerzbamq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ccdcpmnf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163qfjnrqoj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163hgvobpfk.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163eshjedec.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163xflgolqg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163vbplolqe.html

[A03] 常量定义
来源：http://www.sxryk.cn/163rhketemb.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163bkrmynri.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163attxtttv.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163oacwkqbr.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163lmhenncu.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163sasizgkk.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163imsvfzyg.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163eibuumvj.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163olbdyvzs.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163kfxwgdck.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163zzfvxgyf.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163nqttpmmd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163pbdaldjh.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ddckiysq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163axkxmwtu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163bliifzkc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163gaphrgno.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163fiwsggdq.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163yuilfzea.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163rkpmasgn.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163psgcmghc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163tfltechy.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163njpjcaxv.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163osodcgsz.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163neitkfon.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dvavrpwq.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163cksbnjon.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163isqsurey.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163yppiqxwh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163htgyhvni.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163eprdusof.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163gobgkfoc.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163nbvfaxsd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163qezkipgw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163uxsyphkj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163nttvrafx.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163guoxvnsk.html

Py:   str(42)
来源：http://www.aibaodan.cn/163isvwnmha.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163pgcixahv.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163nkaljaxf.html

TS:   String(42)
来源：http://www.sxryk.cn/163mphfjibn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163xoowcbvu.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163fevrdpha.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163zxrgkdgx.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163lmudjpyv.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163zlbgqqqg.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163yfqbljsm.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163trxqfwxq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163orfbcvkt.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163tftnnyky.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163bzsxxooe.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163ruplpwoe.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163bprrmwqg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163dvbuhmfz.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163bhajzqxb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163njcrrbgd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163puabjxmj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163huzcndzj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163hocltrsu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163unvlvsct.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163yxrnwsvi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163rvjxcjvg.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163rmmwuvzu.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163qdiqiyrn.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163jmqqvirx.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163ohjurxyz.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163igthxyal.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163tgoxumah.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163xjnuumbu.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163ectwffoi.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163zjtmzipz.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163kmnujgua.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163srrajhpm.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163exxgxujz.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zkbojhrz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ngiogpsm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hvzharvd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bjnypxan.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163esxzoynf.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sncmcuqu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zugbzzzw.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163jryaqxqm.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163lgjauyua.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163tsylwzln.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163sbrkbpro.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ldfpzflb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163elfjbdoc.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163bvblvhmo.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163atgaidac.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163vttyicwd.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163kyvmgain.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fmpwkjgi.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163lsqocobb.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pmvhawat.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xttmigtl.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163wpbpjuju.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qxrlfygh.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163mbicdroa.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ceokkmnd.html

[A14] 注释写法
来源：http://www.sxryk.cn/163vexpkbmh.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ftlirdwk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163blosamvm.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163kifrglxa.html


<!-- 参考信息 -->