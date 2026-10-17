外链999!wailian999！

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163dgvfkttt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lwvnrxpf.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163fvwwpvfi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163nrxcnqkj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163kyulukdq.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163bydfleqz.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163xokhvuos.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163jwqnchjf.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163fefgzoae.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163zqvmirqy.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163wbfhlosf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ssvgyyyv.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163cemulxqg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163cnswmfms.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ieppwboe.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yktqvkpp.html

[U105] JS：节流
来源：http://www.xuanzx.com/163vxqeqzpt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163qhfnoxdz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163fyyznazc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163vihohugt.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163zyhemvuh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163fvjsuzbj.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dbrejruh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dwxuosrr.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163renbcyxt.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tlgfdpng.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ewbaodbu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163gitcyzsk.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163hdadhvmx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163qaherhco.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163yeayxxlv.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163adscfmkl.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163qlmnkmkb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tptrorck.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163rniyqown.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xyqfkapg.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163usjsjptz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163hnhxdcwe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ablfaraq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163wvguyhzq.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163qpstjegq.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163sqewugfe.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163romvkwdo.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163fojqzgcn.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163okgellep.html

npx vite build
来源：http://www.aibaodan.cn/163pomgdfto.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163akfhgubf.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163bkneceoa.html

================================================================================
来源：http://www.aibaodan.cn/163ekqzhwto.html

统计汇总
来源：http://www.sxryk.cn/163mlnkdrsk.html

================================================================================
来源：http://www.aibaodan.cn/163lbggubvx.html

按语言统计（条）：
来源：http://www.xuanzx.com/163innlknev.html

Python ......... 252
来源：http://www.sxryk.cn/163emcjnexf.html

PHP ............ 252
来源：http://www.sxryk.cn/163fglfghes.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ecftupsr.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163stcwldlc.html

Java ........... 212
来源：http://www.aibaodan.cn/163vjxbanea.html

Go ............. 212
来源：http://www.aibaodan.cn/163qysreqit.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ioxveyvw.html

C# ............. 212
来源：http://www.xuanzx.com/163sjbqxnjd.html

C .............. 30
来源：http://www.sxryk.cn/163phviaxwj.html

C++ ............ 30
来源：http://www.xuanzx.com/163aqspfpzv.html

SQL ............ 90
来源：http://www.sxryk.cn/163siytgnub.html

Bash ........... 80
来源：http://www.sxryk.cn/163eobtwjsn.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163odpexpmg.html

Swift .......... 15
来源：http://www.aibaodan.cn/163xhjrjbcu.html

Lua ............ 10
来源：http://www.xuanzx.com/163wclgojex.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ojmfwpsr.html

Scala .......... 10
来源：http://www.aibaodan.cn/163tbysutbp.html

------------------------------------
来源：http://www.sxryk.cn/163rnuatntl.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ngxgdznn.html

按章节统计：
来源：http://www.xuanzx.com/163gaeftecw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ocdaanua.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qyhxspfk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pizmlqly.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vclzzrrm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163zfawmubc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163xtaxxgbb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lswiocqq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jiikmscn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vfvvqict.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fpgvjojh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xjzfsuvj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vwlhymie.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ipfmxcob.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163dinopviu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163rtjdnmma.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163esvdrind.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163cwiemdwd.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163hmiscyct.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163aungshcg.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163fftmbukd.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163lbduzsgf.html

------------------------------------
来源：http://www.xuanzx.com/163ubcnagnk.html

合计                                  2106 条
来源：http://www.sxryk.cn/163bldqgbqv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kplvgtbl.html

使用提醒
来源：http://www.xuanzx.com/163esldjczj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yxlahdsw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163tlmmckdb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163pkijbpuf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ixommiou.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xvbwuipn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163nxzcehzc.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163krlmdhjl.html

================================================================================
来源：http://www.aibaodan.cn/163hviucnut.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163loffyqnl.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163rozsguxu.html

================================================================================
来源：http://www.sxryk.cn/163thlhejmw.html

【收录内容】
来源：http://www.sxryk.cn/163qhzsiyxd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163caevriij.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163gaiklyng.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163adeldbgm.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163dercxbez.html

【使用说明】
来源：http://www.sxryk.cn/163mxelbzuk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ormeimoa.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163essaafqh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163cuyaimqw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163kkvdzade.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163pdkfupba.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163bvwvkxup.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163xypfcnfu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163xzsxfkdo.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163jjjbpkfv.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163syqnivuk.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163boyyjovv.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163kbskazny.html

【文件统计】
来源：http://www.xuanzx.com/163rsvicwbb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163vpxrxubk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qtxqkpgy.html

目  录
来源：http://www.sxryk.cn/163tdygdcdo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163naheoduf.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163saksyhmh.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vomwltbi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163lvoetdin.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wxmacjsk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163nbmnwyqm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163gltovotj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gvsxxdwv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163mxygrlrk.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nkpptfrj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163zkcafmno.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uemsczqu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cujnmpcx.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mcqdsdae.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bwomcrpn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163bfpcjpnc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fybnhswj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163gohuqbiu.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163vijcksjk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ncebvlke.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163sqtifxxe.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lcxiueau.html

================================================================================
来源：http://www.xuanzx.com/163elztosuz.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163rdelxhkc.html

================================================================================
来源：http://www.sxryk.cn/163huqnzjro.html

[A01] Hello World
来源：http://www.sxryk.cn/163rhnmspcj.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163jfirgbxk.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163pwyzluye.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163dceeobzu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163maechkry.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163qutlmoqf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163qyrnluth.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163swsvryxw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163epefjwwn.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163bupyttgk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163aoxypmqx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163bgddiurp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163nmxoouyv.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163doreisfj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163epkqfsey.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163fjmqenhr.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163vedrhuvl.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163fdbruntk.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163fkaifwhu.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163edqkyzzy.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163gxdyaqul.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163npmownbu.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163byqzqeeq.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163dyhvlnml.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163xajsafmj.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163lwuacxji.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163acvhnzgg.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163gjwvoujy.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163gzpwodqx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163lazncbya.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163epmqpmqm.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163dnaczahk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163bgforkdy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163hvipfbcq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163vlgnarac.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163wndumscb.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163wnshscac.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163iylzyucz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163syuduwnx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163kpmhigbw.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163jbkpitkc.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163sgociyxe.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dexmcarc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163llzdhnge.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163nemgjlka.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163usuxavap.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163kmatmycq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163oveulknd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163bunqlyey.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163xayeagas.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163djxunogm.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163fxnepqou.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163wgdcntrt.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163pepkmjvy.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163loczvykl.html

Py:   str(42)
来源：http://www.xuanzx.com/163tvlkecvg.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163odmgcfcj.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163vlvodqyx.html

TS:   String(42)
来源：http://www.aibaodan.cn/163jhcxxmmu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163rtdwwmxv.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163juuxiihp.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163gmyaijtb.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163ivaxxmjq.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163nteploor.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ipxtzzav.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163yryxdbaq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163kidrmxsz.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163vrticwcq.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163cwjcacsa.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163zcwgnkpv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163khsiedcl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163rufdftmb.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163kjfhdylg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ylgkoxad.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163gdmhpdeb.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163povbmtym.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163rwpifxgh.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163rfxcsyvc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163kckgiggo.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163cftialdq.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163qtvljpxa.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163guczlstp.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163idzyjaic.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163uuligakw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163nzonjqzc.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163wrfjwmji.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163nejogkuv.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163msgurzkv.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163tefaxeaj.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163tbsnuqse.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163hxkygafl.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163tndaplvw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bdtyetqd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qbzygktz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dudluqrg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ofdljvbj.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ixaavpgy.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163brdneupd.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uigpwlhz.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ohzucujp.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163kqwymqnv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163eqnmyrqq.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163pwvuyxnp.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163jrkwwisw.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163qrcxhwvf.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ivcedgsx.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163dwellhjh.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163sxjbimnb.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163bcdlexkd.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gcfzhhlh.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163zlkeyjkv.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jipcnscs.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iippwxtt.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163skmnoykv.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oyozgnjx.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163sdwldpbq.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nllijqsl.html

[A14] 注释写法
来源：http://www.xuanzx.com/163oisxqkkb.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163kqpluiyb.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163okkyxzji.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fctqiiqw.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163kvtzqkzx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163olwxgxil.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163yzqemerd.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163dcjscldc.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zrmhnool.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163fhzzaoqx.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163rbffhjua.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163mlbsnxoy.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163kgdmxctv.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vnaakjlm.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163wfyqfddq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163kixbvlqu.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163tyoofdbb.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163eqtgyrzm.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ivsbopwa.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163bixeayps.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163nflxguwr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163suabejdg.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ijtrhzro.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ojlxkeyj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163tfiwkbzh.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163euzweudz.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163stprgxwa.html

[A17] 位运算
来源：http://www.sxryk.cn/163zcsumvnh.html


<!-- 参考信息 -->