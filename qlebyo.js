外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163blernbfe.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163yqrifsvq.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163dzlpodko.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qrrhraxb.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163bdyczfdc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163luhywhxi.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163qljzoriy.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163muourhqz.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163lgjlkxon.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163vlruewte.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pddxkenn.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ozenkqal.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163ojiunxft.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163nppixpbl.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163bgzgysrg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163sytbbyux.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163svtvyzhg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ahkkpgyi.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163qffdejff.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bbtsjuvc.html

[U105] JS：节流
来源：http://www.sxryk.cn/163tvlfmifj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163aorhfctx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163katkongo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163zahlyowt.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163tbgtiyrj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163singxjhy.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163hjsrwwfj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163pewlcnpk.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163gijptizl.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163gmfaugjh.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ijvplskb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163msyefeor.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163vjfczzlf.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163stytkwfl.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163gcscordz.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163sxfljisl.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163inxsbbrf.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gvmvdlsr.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163cloywjqt.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163bikblvyv.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163owmwevzn.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ttzzrsya.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163wmputoyf.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ntmanvbw.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163xynsjsai.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163gfhyciwy.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bcxsuxwv.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163aslphvtu.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163hesxsjba.html

npx vite build
来源：http://www.aibaodan.cn/163xilxfebp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163kybzoqmd.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163mqtjpnii.html

================================================================================
来源：http://www.xuanzx.com/163lgkbeima.html

统计汇总
来源：http://www.sxryk.cn/163bbvdesah.html

================================================================================
来源：http://www.aibaodan.cn/163gngklaju.html

按语言统计（条）：
来源：http://www.sxryk.cn/163hcwsefhv.html

Python ......... 252
来源：http://www.aibaodan.cn/163muqoorrq.html

PHP ............ 252
来源：http://www.xuanzx.com/163qcymafhz.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wiwklafv.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163wdpzyssr.html

Java ........... 212
来源：http://www.aibaodan.cn/163uiilnpnd.html

Go ............. 212
来源：http://www.aibaodan.cn/163chrnrrwv.html

Ruby ........... 212
来源：http://www.xuanzx.com/163alglysmw.html

C# ............. 212
来源：http://www.xuanzx.com/163yydvtlpg.html

C .............. 30
来源：http://www.aibaodan.cn/163frsxjmut.html

C++ ............ 30
来源：http://www.sxryk.cn/163dkmjccvt.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ivxjlubc.html

Bash ........... 80
来源：http://www.sxryk.cn/163zljeadhd.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163jfbmojzw.html

Swift .......... 15
来源：http://www.aibaodan.cn/163gjspfmgz.html

Lua ............ 10
来源：http://www.sxryk.cn/163ocpvofjo.html

Perl ........... 10
来源：http://www.sxryk.cn/163huwhdzmq.html

Scala .......... 10
来源：http://www.sxryk.cn/163bbwkublr.html

------------------------------------
来源：http://www.xuanzx.com/163sstqvtxa.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163iidmaunw.html

按章节统计：
来源：http://www.sxryk.cn/163etmmoqyv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163oowvlriw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zgckcyic.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rrokqzbs.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163yymrwabb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163wztycywb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hwjyncqw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163dttfsiiv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163pnakueeq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ytjaazxb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ejzcsltf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163okwlwtlm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mxvkslgp.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rkhmmnvu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163iqefvojo.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163auvoicsu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sfgovlft.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163hnrktios.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ylahlicv.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163fymtwafa.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ggxuhksf.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163fwsjibso.html

------------------------------------
来源：http://www.aibaodan.cn/163qzmwguvt.html

合计                                  2106 条
来源：http://www.sxryk.cn/163xzzlrqkb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zfdmxxco.html

使用提醒
来源：http://www.sxryk.cn/163dngfzntu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gjzlyvnb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163etxyvavd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163qzvjleym.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163gvqioxtc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ersdoaoy.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163utoboffp.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163opnexkpv.html

================================================================================
来源：http://www.sxryk.cn/163yvzypoxq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163timoitsn.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163qrdqhsjc.html

================================================================================
来源：http://www.aibaodan.cn/163neqooznx.html

【收录内容】
来源：http://www.xuanzx.com/163jkxvbuii.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163lrsendek.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163auchlwjj.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163lkjikbea.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ebedfhhy.html

【使用说明】
来源：http://www.aibaodan.cn/163sjcynhcg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163puufjxli.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163wuwjidca.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ubfgguli.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163pxbeclvv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163nxzrpuha.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163aqottqps.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163smvsvdst.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163udybsbqz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163fotytfgc.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163gzvuunbw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ydjevufd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163yyuaczzz.html

【文件统计】
来源：http://www.sxryk.cn/163qftnqlqq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163oqepbfvo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163krtgbajh.html

目  录
来源：http://www.xuanzx.com/163glgxmpbh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163semfjtxq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163zpwigueb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163urteubpd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rlbdqswf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163zvzazrqo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163vcotibfp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163nowdeyhf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bcpxojos.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jhikirni.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163uaeylgdl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163bpfkpcsv.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mwoygubv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163geccosbq.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rxjsfgga.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163uaagirvu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163yxryqsfy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163znrajklg.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163puqmfwzx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163vipuxlar.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ygqkykrd.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ptnjuzda.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ezspcpnp.html

================================================================================
来源：http://www.aibaodan.cn/163mhzsahcq.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163dcjyjabv.html

================================================================================
来源：http://www.aibaodan.cn/163axkbrkfp.html

[A01] Hello World
来源：http://www.xuanzx.com/163qaykpvqq.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163opkuraym.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163vldaxefx.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163xgafmbuw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163sxnhgzsk.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163dbaqsdgi.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163fayxgaxk.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163oyzykxew.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163emfrnseh.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163yrkwjnuj.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163lkvskgmt.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163wavmowio.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163xxbtxjdo.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163qwbipwnk.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163lklrumkt.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163mcsfvjgd.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163zlufnzkn.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163fjeomayt.html

[A03] 常量定义
来源：http://www.sxryk.cn/163aoxtqcnk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163uyhnoijy.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163nosfuvrg.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163gjomvhag.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163pmshcieb.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163cdfplrnp.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163zjeavyxt.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163hyabxfln.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163cuegzozh.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163kwsgdooq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163umiixfpx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ilhzdmdg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163lnljhfep.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163kddjcdkt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163hgdqsnfz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163nkpjhuct.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163eyjysxfy.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ckjnkjci.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163qbbfctyt.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163yqzqrojq.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ykhunttu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163spnqxazr.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ezihswqu.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gmlankgj.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nybmeiqv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qdeltjpm.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mepulqri.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163nvsaaluj.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163butzezbn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163wqzcwutw.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163mutpmgpv.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163krcxtlft.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163kjtpqemf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163ssfjecle.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163ofsuuorr.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163zeorjogy.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163lposlimy.html

Py:   str(42)
来源：http://www.xuanzx.com/163pwnkrtwh.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163lszsjsau.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163fjmqubnb.html

TS:   String(42)
来源：http://www.sxryk.cn/163cbbryljr.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163hlftnwpk.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163dbudqszk.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163xirchnij.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163obikudmi.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163etemwnlt.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163grznterj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163emsciuct.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163guhxbdnf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163dxbwafvd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163amsgwmoe.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163kfxnffhl.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163fmgboqth.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163dhfavqzn.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163vsbntndn.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163brkqmavl.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mdhgounc.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163wcudugfr.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163iurfvpxl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163fiditbkb.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163pzydunnx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163jrqppwbe.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163vbikhssm.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163anopotyr.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163aitnepzu.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163gglletsd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163jxnshjtz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163iobparro.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163moigeiyw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163vxaewfgw.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163snmmojuy.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ewncpxll.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163akwhbnnd.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163yssyqyqq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lenzyaxy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uzrvppna.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mjpehhux.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163brgxdmuu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ylcylxhw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163igfefolx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163occtygzt.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163shnvgbue.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163vrmmvkzj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163geslaqxh.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163gbhpqijg.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163gqcbqwrx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163mqzqivlb.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163nkiifrig.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163evujywkh.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163mdzlbpks.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163yqyxehlu.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mxvythce.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163uzeiadti.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bzmzoxpq.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163yweqyxxd.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ospuwffw.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zgixbmip.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163sxpaivmp.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rtlpfrpy.html

[A14] 注释写法
来源：http://www.xuanzx.com/163wyslwbzy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163khgdwfjh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163cvlujbrq.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tpcmmpfw.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163aqjuwwww.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163iamhiioa.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163dmbvaqwx.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163numtpbkv.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jxqfrzgg.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163awjzppgc.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163zpioyetq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163geomkved.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qsctdecg.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163tkinoclw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163qcjhaqrp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ynxozkmx.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ktjeqozl.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163yowffcpu.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163erapicpt.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163jowigger.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163teypobvb.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163hkacwbpd.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163hptlzqzo.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163kqmnkrwu.html


<!-- 参考信息 -->