外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163xivsmvom.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163wgognhgr.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163nxrxdgaa.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163llsbqohy.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163lflwtphr.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163xvcmzver.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163kwdftard.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163slbaetzc.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163efbmjkcy.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163qjhyxnvp.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163xhwjffmx.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163mxyzbmow.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163msfjwamf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163cgjollfn.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163gxdszwbl.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163axytxjja.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163xcpfxydk.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163dgcvmuzx.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163udvpdfod.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cfpfpppd.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163hexsnpnw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kvtwkoiq.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163lololkhl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163bzporzfd.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163eoizgoym.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163kzwktqsw.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163qctbpagz.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163zcxkzvna.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163fcblynpv.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163rscwvcfs.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163jobjghdp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163snozghtt.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163etmcsbsr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163otlpvjvy.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163yslbswog.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163syayglvq.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ujhivlnj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163txvebkgf.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ftkktrfp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163qutxrmhj.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163hkmghlpx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163wsafiebv.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163oketxxgw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163etflpcjw.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163npiffcqw.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163iufgehjr.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163glnzugdh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163bnjewibe.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163wolorxnx.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163pxbqwxok.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163xmnnkiif.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qsatrena.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163tkkimlff.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163djjxwaim.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ibvjunka.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163byhjapbc.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163navkslsn.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ajhqxtit.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163obcadzqu.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163sapnifad.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163qdamqekn.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163omebzazh.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163xbnoaloe.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163frlnblts.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163wrrycxko.html

npx vite build
来源：http://www.sxryk.cn/163xyjrnipw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163estyvcet.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163phrieteg.html

================================================================================
来源：http://www.aibaodan.cn/163qbnejwls.html

统计汇总
来源：http://www.sxryk.cn/163clcpctwm.html

================================================================================
来源：http://www.xuanzx.com/163jhhwmvva.html

按语言统计（条）：
来源：http://www.sxryk.cn/163bdhydlst.html

Python ......... 252
来源：http://www.aibaodan.cn/163kdnmlntd.html

PHP ............ 252
来源：http://www.sxryk.cn/163cnkqrhdc.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163nmexzqqj.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163mkekekng.html

Java ........... 212
来源：http://www.xuanzx.com/163ctdhxyxm.html

Go ............. 212
来源：http://www.aibaodan.cn/163tcbgqogw.html

Ruby ........... 212
来源：http://www.xuanzx.com/163eqqhykql.html

C# ............. 212
来源：http://www.xuanzx.com/163jykfvveb.html

C .............. 30
来源：http://www.xuanzx.com/163ghnhulzj.html

C++ ............ 30
来源：http://www.sxryk.cn/163lkfhqgyq.html

SQL ............ 90
来源：http://www.aibaodan.cn/163svslapxe.html

Bash ........... 80
来源：http://www.sxryk.cn/163ywmcxjud.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163nfukwlhz.html

Swift .......... 15
来源：http://www.sxryk.cn/163hiumlqlt.html

Lua ............ 10
来源：http://www.xuanzx.com/163txdbaeje.html

Perl ........... 10
来源：http://www.sxryk.cn/163ojxpntdy.html

Scala .......... 10
来源：http://www.xuanzx.com/163fzekctsd.html

------------------------------------
来源：http://www.sxryk.cn/163wqioxxws.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163jbhokshr.html

按章节统计：
来源：http://www.xuanzx.com/163wrqhlucf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ussnfroe.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lytydsrp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lbwjiibx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tjkzvdzf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163komusxrs.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vzoxexde.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xdmmprwl.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dehzjcyo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ngyhqust.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xmxwlwun.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ueyoachi.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wlfokaqj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163knjhdnli.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163nkbqiida.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ovdbokkx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163idpxdxzo.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163jsaqflbg.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163jpxeucbf.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ehjvmfsa.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163zqzyqcdo.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163kbdvaamu.html

------------------------------------
来源：http://www.xuanzx.com/163khqwbbmq.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163hrvdigpf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163eskochth.html

使用提醒
来源：http://www.sxryk.cn/163xmdysfcx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163smfxnspw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163dsvlhjoq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163pbdldozn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ymqsgifk.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163iygumuwu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163tsvdbqko.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163vjeuvzem.html

================================================================================
来源：http://www.aibaodan.cn/163fvwzlowa.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163lvotyjfw.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163mdosojhp.html

================================================================================
来源：http://www.sxryk.cn/163qrcjxwbe.html

【收录内容】
来源：http://www.aibaodan.cn/163kcudchyp.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163qqdzcnzw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163cratmxmd.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163mmscydlj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163kkeynrlw.html

【使用说明】
来源：http://www.xuanzx.com/163wxhyocnn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163bpyebavo.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163voznivvo.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163gtxgzadr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163novxxpte.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163anzpyjoe.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163kvqzuxfm.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163crytnkcx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163xncnbfoa.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163cpdlkwiu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163bzzjrhqn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163eclskqgo.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163fxbtiqln.html

【文件统计】
来源：http://www.xuanzx.com/163xcqaqgoe.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163nfgxpeam.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rolevryt.html

目  录
来源：http://www.xuanzx.com/163mwfceskx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bkwlwnki.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163cbqrjkqi.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163tskehqtg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lujtndma.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163enblchan.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163bmddcrdb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163phkmrqfe.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qjshmgqs.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ojatxjay.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pbsjhizo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163psduoxow.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lzvamhai.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163krwmmida.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163phgifoyy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ozwlqdzy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ifpdlvzd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163thxxphax.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163rkegnemy.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163rcytuazq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ojonivfg.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ijwwemof.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163faeohaas.html

================================================================================
来源：http://www.aibaodan.cn/163wwtaicvd.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163odyrgxrs.html

================================================================================
来源：http://www.xuanzx.com/163peaeqemc.html

[A01] Hello World
来源：http://www.xuanzx.com/163fxqcjzxn.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163lkeeersp.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163xthysxlw.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163lzwtbvdw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163eiaweaqh.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163frfqcczh.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163lqaocxjj.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163fowqwuxh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163mhgezycr.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163nclneyta.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163mjteanhq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163wjbmrgnh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163bzjvztbm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163ajysenls.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lhrhrvma.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ssmthjap.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163gnmpzwjf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163itzcpbrb.html

[A03] 常量定义
来源：http://www.xuanzx.com/163xvzkcvat.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163lxkhiwuf.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163okyuocjk.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163whqawexi.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163nobrncpc.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163jcwmhvqz.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163dfokecbi.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163pxayaxse.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jhukxdli.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163xqlhhgbi.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163kaeqiezn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163qxexxezw.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163rrhmpbxq.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163zfxxfvxv.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163zjrhniwg.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163nomccjhn.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163sgjbmvrl.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163cjhinhda.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163lcyzsohe.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163tnoqchok.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163jfgjgega.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163qerumqxe.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163kjrwpctv.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zehbrtqr.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163dizhloru.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ypmpnqsk.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hrvkfuay.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163maepgnrt.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ohyludoi.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163zhlthtdw.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163npslhxik.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163wwjcyowd.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163azqiuvsp.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163znnacysa.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ggbnzqoc.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163rmsmqufp.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163yydmknbv.html

Py:   str(42)
来源：http://www.xuanzx.com/163jhkxqwrc.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163letupdpv.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163bhhfisjv.html

TS:   String(42)
来源：http://www.aibaodan.cn/163eazmlyhd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ryylccrw.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163rmkfwqvs.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163gvauvuja.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163cbvlfmev.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163hbvbxtfg.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163wwsiuvgg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163vwbzkdxd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163hjuybuam.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163efqujhxx.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163zxsbdrtv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163fahmhetu.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163yuvqnoob.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163xmgsazgb.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163ewbxquqn.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163sqjdtedz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163jyhrswer.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163jkhjbckf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163gfhldxjw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163mbxxkshl.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163gopaaywl.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163iaaurfyz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163hllruamn.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163kckoptko.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163mcixabrm.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163cdgmmxsu.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163tasppzfh.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163wunouuvk.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163tzjloiys.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163plpzahfo.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163pjtxhlmv.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163doaachgq.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163fjomyuuu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163eofwloui.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vospcasq.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qblcdsoq.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jjiqtnqj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163drgtbcaa.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163rylaltmn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rglhugal.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bcqpouxl.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163ehkqaxdc.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163wonmoenx.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163aeyjyhkm.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163xhhlgwpk.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163irkjrrhr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ddbpjhqp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163msutjeze.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163tvxhrkqq.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163hxpfgrxq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163behylrkz.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163pawmlfed.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163nkyimkgr.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rklmyvid.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wsdpcqjz.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163taaiodzo.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iqmjghhq.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163awezlzvo.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163alrdbasr.html

[A14] 注释写法
来源：http://www.xuanzx.com/163twkxxnkb.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163aosaplyn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vzggqibj.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tzhfgqhu.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163duqukohn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163leepccct.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pvfmpcos.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163cstkfjcp.html


<!-- 参考信息 -->