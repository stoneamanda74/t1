外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163cumoadkd.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ecjnnufx.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163igzbnqyk.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163ioogbusy.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163hqlfkoth.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163lkbbrrxs.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163eceppzdv.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nxqiptzr.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163mlqcvofm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163szdrxslr.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163faovagpv.html

structuredClone(obj)
来源：http://www.xuanzx.com/163kdxijezl.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163apqfnuad.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163bsknkzst.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163kifxrkkn.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163nhobrgvf.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163uarcotjl.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163tabeosjn.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163euwgrzkb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ykldmjwt.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163zkmsfiew.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dhnmbcub.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163fqqnufmr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163rxhezqvy.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ufijbxqg.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163edlcaqoc.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163bchitexj.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163gvfaxjzz.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163zglrgxpq.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163thbmtiyf.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163gedtwxng.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163gfcztzhj.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163rhfopgep.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ltlbhkti.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163cfavmpre.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ltysydgy.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163jqmllqdb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163pjespdbf.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163stbmnirj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163uoehrhil.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163xcqtkjhj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163whettkyf.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163igbivoop.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163feixselh.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163lsuzwrcd.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dxgihlde.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163qdnlupfk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163uyovnkhk.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163qvlxggnn.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163jrqtwgep.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163aspkobcq.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qyajxthk.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163irgpyksr.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ctvzubzi.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163obcdwmyu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cixlmadp.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163hxstyput.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hsufhvhk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163xgonguce.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163zhxnynlk.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163miaozvaz.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mismjwdf.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163aoopjaqu.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163sjcynjyv.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163tcveanfq.html

npx vite build
来源：http://www.xuanzx.com/163zlenodty.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163pztvhvqd.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ufoxhucj.html

================================================================================
来源：http://www.aibaodan.cn/163lbzyhxqc.html

统计汇总
来源：http://www.aibaodan.cn/163kwntphqp.html

================================================================================
来源：http://www.sxryk.cn/163ujmbatyo.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163hnunijwo.html

Python ......... 252
来源：http://www.aibaodan.cn/163ppnuxpim.html

PHP ............ 252
来源：http://www.aibaodan.cn/163hflsceja.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163goomafdu.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163cispbsed.html

Java ........... 212
来源：http://www.sxryk.cn/163tyxjspqr.html

Go ............. 212
来源：http://www.aibaodan.cn/163yixycmoj.html

Ruby ........... 212
来源：http://www.sxryk.cn/163lhglizrg.html

C# ............. 212
来源：http://www.xuanzx.com/163hhjuufwm.html

C .............. 30
来源：http://www.xuanzx.com/163osxasens.html

C++ ............ 30
来源：http://www.sxryk.cn/163dkwdpkeo.html

SQL ............ 90
来源：http://www.aibaodan.cn/163bgfdlqie.html

Bash ........... 80
来源：http://www.sxryk.cn/163gxgzyhcm.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163cytivsnx.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ddkimyyg.html

Lua ............ 10
来源：http://www.sxryk.cn/163cfmmmzsq.html

Perl ........... 10
来源：http://www.sxryk.cn/163ajfpuwlv.html

Scala .......... 10
来源：http://www.aibaodan.cn/163ecyedkvo.html

------------------------------------
来源：http://www.xuanzx.com/163fbybfuzu.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163rdqhmnhj.html

按章节统计：
来源：http://www.aibaodan.cn/163cnxarbmb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hisyyhxb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ujeublmm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ofsurqya.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163xpiuawpg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163pldbvngz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ukverzey.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ucbjayhh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163lyafftbs.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163geqylzlt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qpmmkyfx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163koyfeqqw.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163aypeztga.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mnvzvjml.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ryhoduko.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163vupkfgvk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163islgxdue.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163hocfqwfb.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rohzumth.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163vbgmxdmt.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163fjpsaiys.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ynmkhyut.html

------------------------------------
来源：http://www.sxryk.cn/163sputqauy.html

合计                                  2106 条
来源：http://www.xuanzx.com/163jziegqqc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163cbegkefv.html

使用提醒
来源：http://www.xuanzx.com/163nkncgurh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vfkzylzu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163xzsynglp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ddkwsivo.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163gfbatydj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163osertnpx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163sblrtqqb.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163afreyzya.html

================================================================================
来源：http://www.sxryk.cn/163pslvhqxe.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163kwtqwjje.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163lymfujlz.html

================================================================================
来源：http://www.xuanzx.com/163gasltfwq.html

【收录内容】
来源：http://www.aibaodan.cn/163efzznueq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163hcwasdfe.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163ypuxaokh.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163dpkgjqja.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163qrfphiak.html

【使用说明】
来源：http://www.aibaodan.cn/163mtdlbipi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163jbaflqcp.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163yehvtoas.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163mxxagupe.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163rnheypie.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163wcdnvtzf.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163fnqcgfqa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163pgiskdki.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163iwekrjkt.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163cnobrunm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163jzfceuqg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163wefkrlzl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163cofzawwb.html

【文件统计】
来源：http://www.xuanzx.com/163vtkmfbpo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163anjcqahr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vjhtylap.html

目  录
来源：http://www.aibaodan.cn/163vyshzqsx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163uecsstzy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wvouaztx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fwlqapgi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fvuludri.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163swqfgjqp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163fsyccput.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163musmdssy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nrpfqoaf.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163imjyjdeb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xecoznyn.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163isimoypy.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fdhvoyye.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nfkwsujc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jxvuahgf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163yvmdbxuz.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163amtaluiw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163allhuqod.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163xldwqmny.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163hjqftixs.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163vwfkjwri.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163iajhliwu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163pblynxbq.html

================================================================================
来源：http://www.sxryk.cn/163jdlrphcf.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163amgxlnnx.html

================================================================================
来源：http://www.xuanzx.com/163ptmpxkto.html

[A01] Hello World
来源：http://www.sxryk.cn/163pthfzvmw.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163pxfavzao.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163kioptjqg.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163oifcvxdv.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163blqnwtdj.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163ajluksrj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163rafjxghc.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163wicplsgn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163iggktfyn.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163itbyemnn.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163vkwffnnm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163xmhnutif.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163yycngtrf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163dhxnkykx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163kyapncpf.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163vfkxmxfh.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163xcqmwabo.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163qywortwy.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163oeezkatg.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163fxrekzks.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163stajobmo.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163jakzcvhi.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ezrjxvoe.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163wnnlhzax.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163oxcgvrzx.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163jmbdegbr.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163ykdpqpqj.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163azjjcqkd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163zlxpzzbc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163bdbwlduz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163cdzrerbj.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163qhauezaf.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ebsbzcub.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163cizhpquf.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163tdnnajlm.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163azbjlqbx.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163clybnhob.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163dlptfimc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163zkvmpqgb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163xflutxxq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163sekpygrc.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wcjgrval.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zufoiooz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wtpzphnu.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ytvdxucy.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ssfibczl.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163zgvobrfi.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163rypudqav.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163jopqxcjv.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163cxtyfajp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163wsrmbyxe.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163soqydwjs.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163qjvkzlnm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163gzcblkft.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163rzqgvjts.html

Py:   str(42)
来源：http://www.aibaodan.cn/163mchfgmlz.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163cqgztnpp.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163ryubmbwi.html

TS:   String(42)
来源：http://www.xuanzx.com/163srngmmim.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ddalslng.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163vhdtxqwn.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163legcjsia.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163btavgarj.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163sosygtoh.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163zynqohuk.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163hrgsfpop.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163vnkktvsv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163wgvmzawa.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163tbqohzrp.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163xacinlhg.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163zjdivbnq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163krsecvvg.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163pomlylmp.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ogzbjway.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163cvpweijb.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163gexpftxk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163laffhakr.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163sdsiuqpo.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163lvqtizml.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163yloureyz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163aljbbiay.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163wzebkwsf.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163nahmotnz.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163yjvwyois.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163elorzfgc.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163oxmjgfjn.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163ownhzvxu.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163voynvket.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163ykbyrjjm.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163nyoqfoml.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163qheueghc.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163legaapip.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kypaolob.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dwvwgpoz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mdhvykjg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sbsglysz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163kzpvijxm.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163itszxujz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vbwuwdrs.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163imwpxdpd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163wsfvckeo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163fscmfglq.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163crgkuewn.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ruvcdhjn.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163yftwlaph.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163wkcxagff.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163waygscbd.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163zzxcyfam.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163feynshnx.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dccjhaxa.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163whpinulc.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163afdjfrci.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dtwuqvyq.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163kuiswzux.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163owkrkkbr.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163xcswlpht.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wkyiycgy.html

[A14] 注释写法
来源：http://www.sxryk.cn/163nmaipnxy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163njghhfsn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163fqlsbfrq.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wjijxboe.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mshcsfja.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163iylfbmlf.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163emvevguh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163tmqlbbym.html


<!-- 参考信息 -->