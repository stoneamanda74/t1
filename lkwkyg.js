外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163qstqmauv.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163zsgttjmh.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163dcnffmlh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163giuaqimv.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163qzwlkhjf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sjfjnzri.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163seyqnwqp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163mqogzndh.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163phgvdglz.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163tyjjnuim.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163bgzjzapw.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163azghehqb.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163wfkqpqro.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163aoibwpff.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163pzhkrkwg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163pqxodazn.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163cjlzlgys.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163dhsjaahs.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163bodwxupn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mbsctubh.html

[U105] JS：节流
来源：http://www.sxryk.cn/163wponvjkm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163odqoeilt.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ebbjgmpd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ftjwmdmu.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163mqknrvbb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163tikxotgq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163wovlgknw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163zzjagjud.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163atdhilgj.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fljmwdxm.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163lnkdieef.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163hlzvbojd.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163evaakryx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163hzsrmugp.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163oaalioco.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163otgyzeqa.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163zxvxnbsp.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nunzrmcq.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163nzdsotyt.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rxslyrnz.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163mbmuyvoh.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vjfmfoxe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163lriwzeqz.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ssnipfwl.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163bqfbbleb.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bsrnabwo.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163vxgedcod.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163rpsotyff.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zumiqang.html

npx vite build
来源：http://www.sxryk.cn/163higbcmfs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163oinajpsq.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163gdhjuuts.html

================================================================================
来源：http://www.aibaodan.cn/163agmapwwb.html

统计汇总
来源：http://www.aibaodan.cn/163kteivjgf.html

================================================================================
来源：http://www.sxryk.cn/163zmbffxnz.html

按语言统计（条）：
来源：http://www.sxryk.cn/163rsmkexwr.html

Python ......... 252
来源：http://www.sxryk.cn/163txnvjwiz.html

PHP ............ 252
来源：http://www.aibaodan.cn/163yejphuhi.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163gnnkcwkq.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163eldtzlmb.html

Java ........... 212
来源：http://www.sxryk.cn/163egftdwci.html

Go ............. 212
来源：http://www.aibaodan.cn/163euefbmgk.html

Ruby ........... 212
来源：http://www.xuanzx.com/163sqegksxi.html

C# ............. 212
来源：http://www.xuanzx.com/163ivltexqs.html

C .............. 30
来源：http://www.sxryk.cn/163ljlsokbp.html

C++ ............ 30
来源：http://www.xuanzx.com/163oocsokqx.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ugwftviz.html

Bash ........... 80
来源：http://www.xuanzx.com/163mzcydssr.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163jfbcoqgv.html

Swift .......... 15
来源：http://www.sxryk.cn/163cmdsztip.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ffwesldf.html

Perl ........... 10
来源：http://www.xuanzx.com/163rqgufzfm.html

Scala .......... 10
来源：http://www.sxryk.cn/163cmrdmnum.html

------------------------------------
来源：http://www.sxryk.cn/163bwrboznb.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163wpcgtfhk.html

按章节统计：
来源：http://www.xuanzx.com/163bmcuvrpv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jivfbhtc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tjytapbg.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wyhqmqpc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kquvzzlj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163nsjhozld.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ecaumwvh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nqnjyxbh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jlugrynk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hggtpinl.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163rsgkhslo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tegttxkm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rqkmlezh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mshinmhu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163stkiokqu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163zhxosfwp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163urubcacm.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163bvqeemtc.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163dqshgfvg.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163iaktmljl.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163svmswers.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163cftlahrs.html

------------------------------------
来源：http://www.xuanzx.com/163cmisqbni.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163onbzlptg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bhsboypu.html

使用提醒
来源：http://www.sxryk.cn/163cdxuzykg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hpkeosuu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163ynwtpeuz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163pjzkemqj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163bqzhmvuo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xthofxpq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163morcznir.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163cljrjans.html

================================================================================
来源：http://www.sxryk.cn/163krzttdvw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163yjmeffce.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163xbakrahv.html

================================================================================
来源：http://www.sxryk.cn/163fcwolehu.html

【收录内容】
来源：http://www.xuanzx.com/163gekmvhya.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163mnpoiizx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163dvjnzbou.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ytruiehk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163quybczsm.html

【使用说明】
来源：http://www.xuanzx.com/163eqnbgqco.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163jsqsnjyi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163yinzeojf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163dozoeqig.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163jqgybrou.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ebrgbkfp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163maeknacc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163yljawjmn.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163gyuzlyqc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163zkzbcaqm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163cwleflvd.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163lrkxdxsx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163nwztygez.html

【文件统计】
来源：http://www.sxryk.cn/163bzdrzpuk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163zuprovlq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vupsckbr.html

目  录
来源：http://www.aibaodan.cn/163wrtchfhf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163llhofkxz.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163lnsrgdrw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163illotfho.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ncnzssqt.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163tzdyesko.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163wdndtyyj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163umhimicx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163uiuondqs.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163mujgmwkw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jveqfqxu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163uccfotul.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vftlyahy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163blzkryoc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163umsyrceg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163hvlmruou.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163icevkwzi.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ctzlbzln.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163orfawhrj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163dvdxoeiw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ldrobcbv.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qgzodzqv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163oknnktho.html

================================================================================
来源：http://www.xuanzx.com/163iewthpaz.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163yoqrzcwq.html

================================================================================
来源：http://www.aibaodan.cn/163urnioddd.html

[A01] Hello World
来源：http://www.sxryk.cn/163awuusufk.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ruzeoble.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163sanyavlb.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163vzfqopvr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163tqxmxeod.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163dpmyifga.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163mkpumctc.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163vexqijct.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163kkucofgw.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163wndojxzp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163dtnrltzo.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163rfwjvcbh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163orluaxmg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163osrlrwuq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163hyhlphyx.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ssauqokn.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ugxpdhla.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ozuotavc.html

[A03] 常量定义
来源：http://www.sxryk.cn/163btcmbqlr.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163rhaznguk.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163hpkadsgf.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163bkjpdfga.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163tpqdpqnz.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ttclufij.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163fistujtt.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163hobjdeda.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163dbgajtkz.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ijsfneqt.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163wzjrfasj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ziuehqyj.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ylntxasb.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163lgqvuyyt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163yryrsxqq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163zkdwrlkw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163fvwsyoeg.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163jsenpmvf.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163pinfzwvf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163eyztoakl.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163uieqyquo.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163luufnhoa.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163uledkqsp.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bpguiehx.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163pmwbtloy.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163niyblreu.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ljgjdecq.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163stqoewyl.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163vcowlwyv.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163hhmgcxoi.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163ilnnpine.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163snbblxou.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163afmwteie.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163tyzknczh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ydfxkccy.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163fihqcfqk.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163czzciqmu.html

Py:   str(42)
来源：http://www.aibaodan.cn/163mwweixxe.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163cyrpozrd.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163btmpsblz.html

TS:   String(42)
来源：http://www.aibaodan.cn/163yxrjwnjh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163hvpfxbzi.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163ahapjxdn.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163oqogioik.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163uqbznfoh.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163kdkuxfci.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163dmrkhxfy.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163vvomvzcn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163sjjrheik.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163vgmlwgqt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163wahyhrvj.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163iwfhywbi.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163yblfmdwz.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163nsrrudde.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163pbaifcak.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163eaxttewt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163bogdlsxk.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163qqhrqfrz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163edeygipl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163vfixjbzc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163trsawqno.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ziglqjbm.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163tkxhsvyn.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163apdltotn.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163hkjnlnkw.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163hsgijgji.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163pdqakckm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163xwmcrqey.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163qlpmzfyo.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ibnvylbd.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163ikfwebzm.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163xezhunxt.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163hfpjzrfs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163loewbolx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wdmtgiwy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163djftmjey.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163crkopsms.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sxihrafp.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163oxvhshbj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tokvekml.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163oelzwzlu.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163oygaoboe.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163psoiipdx.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163yzttysqc.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ajdppwbr.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rwahsimt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163fmwtcbtz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163tytoqdfi.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163brccusdh.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163xztnofbl.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ghkkefii.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bfqledne.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163jymiampk.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ehrzqwku.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tamkqome.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163knrkaefa.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jgarxmgb.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163lurmnhal.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163spygwxij.html

[A14] 注释写法
来源：http://www.sxryk.cn/163jefsmikt.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163nkewafut.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163cthanmpb.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ntmebzxd.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pnrmatno.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163xyqdtfqp.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163eqqbwdvi.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163qwizshho.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163znttfuqo.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163spoudvtn.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163utdzdjtt.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163apzunhwy.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163onlalljt.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163obcybysr.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163cjuzfsyj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163dcmpfcbm.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163ynkltitv.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163fppkefqf.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163mkumtebm.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163lyturuaq.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163bdwtybhs.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163duslxpik.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163kadnboig.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ijyanwgu.html


<!-- 参考信息 -->