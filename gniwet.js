外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163kvxyjksb.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163trqsmtxa.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163zdvxctcy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yowakgal.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163udgzjbvu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kvphozba.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163zbcfueyt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163zpxzlwnx.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163yxyzgaoa.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163noosyeha.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163pcktttkl.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163fippwwgh.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ixvvfxfq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163oxtgpgwm.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163yucrgcec.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163rwoxxyfr.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163bopbuomv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163puknywug.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163leoazjcg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gcgpbxcn.html

[U105] JS：节流
来源：http://www.xuanzx.com/163vwvdwdhf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163rpyeuiek.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163errfleyf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163guzhpzom.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ryovsvqy.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163gssgvogf.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163bvxerdme.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ciateuoa.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163yvaxuwoc.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xlkfghuk.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163byymhehx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163txbzyciz.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163vrmhmuwy.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163qmscaewq.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163qfwmccnv.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163oqfgaris.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163zijlhtia.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163udulvaxj.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163olnoyras.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mntxkiqq.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163stpourqz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163datxqpsr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163relgttfc.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163dxytsdxa.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163yhacsbsn.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163pwbolakz.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163feylcaca.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163iscgfvzl.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qpzrygnm.html

npx vite build
来源：http://www.aibaodan.cn/163uifpveps.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ntzortqk.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rlanowdy.html

================================================================================
来源：http://www.aibaodan.cn/163jfbsldgw.html

统计汇总
来源：http://www.aibaodan.cn/163mwvlolyy.html

================================================================================
来源：http://www.xuanzx.com/163zyqixdxd.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163aceitrfy.html

Python ......... 252
来源：http://www.xuanzx.com/163fhczffrq.html

PHP ............ 252
来源：http://www.aibaodan.cn/163gcuqayex.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163zurmxshp.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163aozrbiqm.html

Java ........... 212
来源：http://www.xuanzx.com/163cdqrgasw.html

Go ............. 212
来源：http://www.xuanzx.com/163finahllb.html

Ruby ........... 212
来源：http://www.sxryk.cn/163zebvruxe.html

C# ............. 212
来源：http://www.xuanzx.com/163bpuihidb.html

C .............. 30
来源：http://www.sxryk.cn/163idgrlnut.html

C++ ............ 30
来源：http://www.xuanzx.com/163bzulnfsi.html

SQL ............ 90
来源：http://www.sxryk.cn/163brzopdvi.html

Bash ........... 80
来源：http://www.xuanzx.com/163uenutxah.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163asbxlsqi.html

Swift .......... 15
来源：http://www.aibaodan.cn/163sagvdzpq.html

Lua ............ 10
来源：http://www.sxryk.cn/163ngeojtle.html

Perl ........... 10
来源：http://www.sxryk.cn/163muencuti.html

Scala .......... 10
来源：http://www.xuanzx.com/163ndjebddr.html

------------------------------------
来源：http://www.sxryk.cn/163oujdnyvw.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163nbowpdjz.html

按章节统计：
来源：http://www.xuanzx.com/163qjktttxj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pwgfxwjm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tschjmjb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163omhfjfbp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163wpddmfqk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163booiwujo.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163fcdaeivc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tugbikko.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163faxaqpnh.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vrryfdit.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ghjzcpok.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bmifryjj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zxoczbti.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dundqdbq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163hzvomtpu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163tzpzgibj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gejlsbjm.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163gizksxbu.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163jlqaxudk.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163qtewvbym.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163bkydmtzt.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163deaarcjw.html

------------------------------------
来源：http://www.aibaodan.cn/163ydybdzjc.html

合计                                  2106 条
来源：http://www.sxryk.cn/163atxoxwrc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qvweetsf.html

使用提醒
来源：http://www.aibaodan.cn/163menmqbaz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xbrkmzic.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163mlqxqwyg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163lbdcfevq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163bxipphcw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163qipqrqza.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163lceabdji.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ecarcqpx.html

================================================================================
来源：http://www.aibaodan.cn/163biqlefgt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163wmvwnubc.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163eyksjltn.html

================================================================================
来源：http://www.aibaodan.cn/163udskhlwe.html

【收录内容】
来源：http://www.sxryk.cn/163hqiawlze.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163kqnfhvgi.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163uufklvnc.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163qzeuiglx.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ngezwlcc.html

【使用说明】
来源：http://www.aibaodan.cn/163kzkpbyyp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163pezbnenb.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163amfondnp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163ztnamysu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163cnidjrxu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163yqxplxda.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163bswbcxfb.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163zchqpwnd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163fcxfielx.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163tjbjlnqj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163evwhdkkn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163vdfqfkyr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163qwuibuiv.html

【文件统计】
来源：http://www.aibaodan.cn/163wwzmnqkg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ajkgdbao.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163tknlkxci.html

目  录
来源：http://www.sxryk.cn/163itgljhnw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ivxgqadb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163retunqez.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mgozmtdp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bhfobjgw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vltphark.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163abohoeva.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wkypbpkq.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mhrbwrcm.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163embwgyhs.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wxhhqyey.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rtrvpjse.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qfjdjdsc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hkxryaks.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kgixvebz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ixyiuarb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163rwfwrbpx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hmsuhajy.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163svfxmcgb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163lpdfczbt.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163dnchypha.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gomwknxy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hxoauqbs.html

================================================================================
来源：http://www.sxryk.cn/163ovxroyqz.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163iyvcvjtu.html

================================================================================
来源：http://www.xuanzx.com/163ffuojusy.html

[A01] Hello World
来源：http://www.xuanzx.com/163byjoiymj.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163octjbrws.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163oxaitiwc.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163qjfhcslw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163qgangskm.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163crdaokvj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163mbxdvqet.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163rzxyglyg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163uhqiwegy.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163sbvxfvmm.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163bgkwvijr.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163lmyvgszx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163aolfroet.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dvmvjula.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163yfulngoi.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163vghexlea.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163mruzwhpg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bxceozbp.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163enbmnbsz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163vhpfqsal.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163mjxwjoqn.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163vuepucar.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163jvxngbth.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163wqjmdowv.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163thibkacr.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163blbbjsoi.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163khlgbvkt.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163epiabgwo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163gxnnoiav.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163lsfavcsj.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163lcdonreo.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163amppsuhz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163zrkudrtt.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163kugxppfv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163wcwhfuza.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163zzhdonxr.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163ernysxva.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163hpwwghwb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163kzosstyp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163sjbsjdae.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163wrolllaf.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gbkznape.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dtvfkudq.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bedpqjiq.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163smlyduki.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163htdakxhf.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163xdumkxck.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163ftfpjseq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163hntkjaoy.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163dthpyqft.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163heivzste.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163zxagehfv.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163qfdkfpbq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163jyzqougx.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163vmdkbqri.html

Py:   str(42)
来源：http://www.xuanzx.com/163jxsrrnwr.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163ogatcddk.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163ukspcngd.html

TS:   String(42)
来源：http://www.aibaodan.cn/163urwictfm.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163tzhcgzvj.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163sgghnkwp.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163otaaxfla.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ezdewlqh.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163bcjkffir.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163mnuybjcz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163yzbnpzna.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163hbhxtbje.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163hbhogxae.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163iycwohuk.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163lyrbpudl.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163kihomngr.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163nlkesdcu.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163xqwftcjy.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wxwmofxv.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163axfsjofy.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163ldjvzyyt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163wfbivtce.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163kuwpcebd.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163zuezvsai.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163hugzzntk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163bhzotnfz.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163myvdxklw.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163frylgjev.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163pkffbxgy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163pvabclsy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ttrczplh.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163yanvgqse.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163nxogeywf.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163wdslubxd.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163sefokwuc.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163mcbpbxfu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163kfboqnhj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163aejvgpyt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pspmimkq.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gxvikfdp.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vhwyqong.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163cvqrodqf.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uimxpixp.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vhtcziok.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163oqfxkfnv.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163caswmctz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163pqzxehrh.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163hsbbhlef.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163kmsdxuxc.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163htlldmav.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163sxzkrvjz.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ugvjfxia.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163frcgbium.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163syubxrxa.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wypbvevj.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163zwiirtir.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ldaqkajq.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cxpsqyul.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163nyidqohg.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bgielwpn.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163dunybrwg.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jpztfojm.html

[A14] 注释写法
来源：http://www.sxryk.cn/163qnyaijqc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163mrnpqucj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163zxbyykzv.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xtgisdhx.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vourmipq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163aflthpyf.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163oubkwthy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163ivsdczes.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163cfbtmxbx.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163cznchmjg.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163ynbxjzxq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163ehmaqamt.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163qdoncqwp.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163pcnpfigj.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163yemskgha.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163pdlcjqyp.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163geozpidn.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163rkyxvvgn.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163vnwzfydg.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ilttgnni.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163wydrazyc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163fyrteypp.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ewbcqggr.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163czwwyzqk.html


<!-- 参考信息 -->