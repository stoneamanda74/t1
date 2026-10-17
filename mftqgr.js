外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163gmqjdddp.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163itikvxiu.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163notadbam.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163kmvuveim.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163eeeispyp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163anndnoxe.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163snnysdor.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163blbpbbez.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163zcoyqjgc.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163rkdzxlfx.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163clhljoin.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163edhwtstp.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163lhtpxcom.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163somjtaal.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163jnwrpchi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163eointzlv.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163afgyevfp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163gzunoeyn.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ubcreemd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bivejmtz.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163gsmoexvo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ygbjvbuu.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163sdkqaedk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163lddrwfsw.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163zcnnzjzl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ghjxhgws.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ssukvlqv.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163xwmqhion.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163klxpdell.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163yhlabeux.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163anvdysmw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163edkgmeqr.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163nduigyvp.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163fxfsuytl.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ojoqzmtq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163vbnipjrw.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ycxnfmkg.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hnergcmk.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163asibylqf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163sddjnqal.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163cqmefesp.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163tevpsaex.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163dezhlwgs.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163awjwykyg.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163btumgqhk.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163unijjibm.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163nkigcwwv.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163hjyvjyok.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163tbnjyfwi.html

npx vite build
来源：http://www.xuanzx.com/163urownzzb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163mmnyevgw.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163itedxdro.html

================================================================================
来源：http://www.aibaodan.cn/163ftosmaaf.html

统计汇总
来源：http://www.xuanzx.com/163jvqsavpk.html

================================================================================
来源：http://www.aibaodan.cn/163qowqviwe.html

按语言统计（条）：
来源：http://www.sxryk.cn/163wfpqdiah.html

Python ......... 252
来源：http://www.sxryk.cn/163idiimxmr.html

PHP ............ 252
来源：http://www.xuanzx.com/163ghhdxzsa.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163jxlujdcr.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163mepnomjk.html

Java ........... 212
来源：http://www.xuanzx.com/163ntwfkeng.html

Go ............. 212
来源：http://www.xuanzx.com/163osycyiaz.html

Ruby ........... 212
来源：http://www.sxryk.cn/163qpwwscuu.html

C# ............. 212
来源：http://www.xuanzx.com/163wmxdhsel.html

C .............. 30
来源：http://www.sxryk.cn/163yumsfqjq.html

C++ ............ 30
来源：http://www.aibaodan.cn/163nhcbjofc.html

SQL ............ 90
来源：http://www.sxryk.cn/163bjlocdig.html

Bash ........... 80
来源：http://www.aibaodan.cn/163fgbbfexf.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163cwksukza.html

Swift .......... 15
来源：http://www.xuanzx.com/163nagcuiva.html

Lua ............ 10
来源：http://www.xuanzx.com/163xbbhnjlh.html

Perl ........... 10
来源：http://www.aibaodan.cn/163chrxvdfi.html

Scala .......... 10
来源：http://www.xuanzx.com/163opdnjfud.html

------------------------------------
来源：http://www.xuanzx.com/163mrfoifpv.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163pxdyjred.html

按章节统计：
来源：http://www.sxryk.cn/163ujefcbmj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163xvsigawk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163blpltaem.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sohrogkb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163vsgpnbso.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163lyodwyom.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163xmqpobjz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163izymhkhb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163oxfyaylo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ptxugedc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163pxapadvd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dtqshfxm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hneqwtxu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ywchzvlk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xyfypzbh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163tejpwsbz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jfuntukj.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163zscahmxj.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ideoqyfe.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ynpjnnkv.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163xrofuxlb.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163nqkfbybf.html

------------------------------------
来源：http://www.sxryk.cn/163htsnbqvs.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163aobkvbgy.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ifjjdgdc.html

使用提醒
来源：http://www.aibaodan.cn/163sdwccaqs.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qdbszmlr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163kyswsnyq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163tuaquute.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163fdcdwjnb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163llbvlwpl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163gpeyanbx.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163unyceaox.html

================================================================================
来源：http://www.sxryk.cn/163qipqmafe.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163dzijriwf.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163kxshrpsk.html

================================================================================
来源：http://www.xuanzx.com/163dfuwavub.html

【收录内容】
来源：http://www.aibaodan.cn/163exmduyvw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163zkumbiil.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163abatzdgj.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163qglsdyew.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ojakhzlx.html

【使用说明】
来源：http://www.xuanzx.com/163nrvrexio.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163gaficwrz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163nzcqdbpl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163mlqspfqi.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163zveajjac.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163kvqvntxg.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163fepopjga.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163uhinprcz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163nsgarbra.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163lvsbrrwd.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163jhqclefo.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ubkiwvkp.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163mukhfnhz.html

【文件统计】
来源：http://www.sxryk.cn/163dnscjweh.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ougnggid.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ijtdqdbn.html

目  录
来源：http://www.xuanzx.com/163bycwjhbz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qpsganuy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163bxyxzwsw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163peidprbd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wyhnsxtf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163bnntcsxl.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163wolitwlw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163wucmzbmr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hpeutuoi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163mvbzyvpu.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163omkuseoq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163pzcdavpo.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zuetmbve.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gxvwhyue.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fhbmbvcc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vvkfltyd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163gekmvgqe.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tejkfchy.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163hnakvfsb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163tczldlbt.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163mluuujfi.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gazckjsi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fzskaipk.html

================================================================================
来源：http://www.sxryk.cn/163zoetgyig.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163nedwtcsf.html

================================================================================
来源：http://www.aibaodan.cn/163jubuhgfa.html

[A01] Hello World
来源：http://www.aibaodan.cn/163xyzuqdwj.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163axzufeny.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163dvnkurkx.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163kxuytjdi.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163hfobwptc.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163vlhaqptl.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163xzywnqfr.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163mkqasnki.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163cqfkrcnn.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163hfppwfrq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163cesatekq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163snvnlqoz.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163byoomdnq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163wdkxvsve.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163uvjjlzuq.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163jjbbkfqw.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163rlookgzv.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163xafmrszl.html

[A03] 常量定义
来源：http://www.xuanzx.com/163obhsddwk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163fcvafavp.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163kbwgdutu.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163qnqipmnh.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163hcmporrt.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163mwfftwrw.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163kqpypufb.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163cixjdiry.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163gdvzfaro.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163cdottyxb.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163wddjdcmp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163sehtyncr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163dyttwyuh.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163jqwfwwef.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ubrylfdu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163yxgokeww.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163uvniopee.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163rakcoagg.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163kfwqtecx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163qjthbyoc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163mwaobgxm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163inblpqfr.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163sqvckqkt.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163plfczkkr.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bipsgqwr.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xgcckbki.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hawtjbuo.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163kvzqoyrr.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163mmvdmjov.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163krgpmjug.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163wodpukcp.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163fyujrpsk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163yoabphcv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ukxojetb.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163xhdcaczh.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163byyordga.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163ydqbwufq.html

Py:   str(42)
来源：http://www.xuanzx.com/163sfmeaepg.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163iimjsxrc.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163pnhmlahx.html

TS:   String(42)
来源：http://www.sxryk.cn/163rxseweia.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163wuwmuzqa.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163fsiintqc.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ohqjkzyd.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ibrqhmhl.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163esviprmi.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163tezphrfy.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163ywjmrdlr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163hyubbycq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163kzkywoqt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163apmgqcsm.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163dlyybnve.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163diilqimw.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163vpmegwpe.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163gwzypslr.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163alojcfhf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163tewnjeup.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163pknmtzhu.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ixnagirv.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ilcxytws.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163iarqbauj.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163wwdtuhxo.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163qoiezonl.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163uxrhrktp.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163bkageqns.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163bcuythvl.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163gnrubcsh.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ntzpcbkj.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163dgqgclql.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163rnzihqru.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163iwfqfxoi.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163vzmdrxft.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ebzcocdr.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ekfdwlcu.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kdcilpgp.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163aucwfcqo.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163awalocey.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xlizdkkf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ynprwhop.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163igjkfonm.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ujnwjbhq.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163sybsevkv.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163zwwxhqrr.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163ukawqtyq.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163zusgzfbi.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163gdkafdya.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163msuzxtxk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163srbmuzwl.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163iphfocpl.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163eenxkukh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163lysyxlrk.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163htumusov.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163bcvcogmw.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pddebsnp.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ananqqfs.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163jobyjyrb.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163leqjykil.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163vymnmqsl.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163phgzdfmv.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163iwfvzext.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163zpawyovk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sfqkjkrg.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gihptrmn.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kihjiujz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163euzkeumx.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gxwtoevn.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163mqgroxlc.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ssoznndx.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163alnntnjq.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163aeqqnojz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163getenbwl.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ckwytslf.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fekpjnds.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163mqcxlmwr.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163scfduvqm.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163zorowato.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uoeigatl.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163xrpjdnzg.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163bbzyzjju.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163xykfcitj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163zpajakpm.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163acjhgjbz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163yyarvnde.html


<!-- 参考信息 -->