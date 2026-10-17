外链999!wailian999！

[U85] JS：可选链
来源：http://www.sxryk.cn/163lseubvdz.html

a?.b?.c
来源：http://www.sxryk.cn/163udmkcotr.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163lypcxqvu.html

a ?? b
来源：http://www.aibaodan.cn/163dvnxxupz.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163kanaqtay.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163axbkaihq.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ljpqugia.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163qzjeqfny.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163usixwnif.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163rqdpvyuo.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163mxpbyknj.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vohueyyg.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163rlrnvoty.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163freiadhd.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163wpkvgcrb.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163gviwlndp.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163dkfappzk.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163nyvzewef.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163llnfqzkj.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163giovmcem.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163xhzjvrcg.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163rfkhiodn.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163reuttygr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163byrniduj.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163uozczcuf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fziztonj.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163cftlzmqb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163yiwetlyw.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163pzubwqff.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163bqkjtyuf.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163quggxnvc.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163cfhtdoqh.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163awfjuwle.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163vqqkhlbs.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163vtdsfabz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163bcqlhkgq.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163oxbcivva.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163gbmpiyej.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163jahjfhhy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wahgimev.html

[U105] JS：节流
来源：http://www.sxryk.cn/163xorsxutb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ungwifnt.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163zzmntgwa.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163njbnrjjs.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ksmbcdwu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163fvhljkbt.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163jplvtofh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163hlwwefbh.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ssvpeyzf.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ebpeuqbn.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163dfqtaxuy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163hjkonpur.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163lxqnztue.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163kaijjkxe.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163welofxwo.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fodmczia.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163jdnieixw.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ppwyltju.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163cbnkvryf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163eanuiccz.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163pgnephga.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163gnbborqr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163zseykdop.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163rbhkxtip.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163dzouoryv.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163zzvhvviq.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163jsdfgsht.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163mipowhqs.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163pnjbnzsd.html

npx vite build
来源：http://www.sxryk.cn/163kutfyqqo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163miphardi.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163fdizcawl.html

================================================================================
来源：http://www.sxryk.cn/163ludyutys.html

统计汇总
来源：http://www.xuanzx.com/163qphcnbwu.html

================================================================================
来源：http://www.aibaodan.cn/163cfgyylmq.html

按语言统计（条）：
来源：http://www.sxryk.cn/163kbyrdneq.html

Python ......... 252
来源：http://www.sxryk.cn/163yonqludw.html

PHP ............ 252
来源：http://www.sxryk.cn/163bbjcoiaj.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163hzgmwwqs.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163upgujzsz.html

Java ........... 212
来源：http://www.sxryk.cn/163szxoozig.html

Go ............. 212
来源：http://www.sxryk.cn/163gkwwapgd.html

Ruby ........... 212
来源：http://www.sxryk.cn/163svsoyqpg.html

C# ............. 212
来源：http://www.sxryk.cn/163sauyktva.html

C .............. 30
来源：http://www.xuanzx.com/163opeqxnyc.html

C++ ............ 30
来源：http://www.xuanzx.com/163wmliacgf.html

SQL ............ 90
来源：http://www.aibaodan.cn/163smwjkewa.html

Bash ........... 80
来源：http://www.xuanzx.com/163ehzznigc.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163rxgejovw.html

Swift .......... 15
来源：http://www.aibaodan.cn/163gzxlxrbi.html

Lua ............ 10
来源：http://www.aibaodan.cn/163wsweiywf.html

Perl ........... 10
来源：http://www.sxryk.cn/163zdlgdqso.html

Scala .......... 10
来源：http://www.xuanzx.com/163mnfvonom.html

------------------------------------
来源：http://www.xuanzx.com/163usvrglbk.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163fkyqsrne.html

按章节统计：
来源：http://www.xuanzx.com/163mhhcxoyj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163nboarqwx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gelgglpo.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fseulnhb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pzttbklp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163yineeuxp.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163tkklfttx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163asjkoway.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163aogipgbs.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163suewclfp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163rdatrrql.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mfxaedhg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ltcjjnqz.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kssaeikc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wcyuxakr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163bufvprfv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tbaqtatt.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163rhaxbfsv.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163sowmkcqo.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163jhbwjadg.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163mfdlfkdj.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163cwotviac.html

------------------------------------
来源：http://www.aibaodan.cn/163hibwaavw.html

合计                                  2106 条
来源：http://www.xuanzx.com/163apqizqoi.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163phyascox.html

使用提醒
来源：http://www.xuanzx.com/163skzzrpub.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ceuvdnlh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163qjwwwtpd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163jnytattj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ksvjpgff.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163sahfboqr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163tklmeflc.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163bzwczldn.html

================================================================================
来源：http://www.sxryk.cn/163qruopday.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163rtxbxmnk.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163vrfzyplb.html

================================================================================
来源：http://www.xuanzx.com/163pgxwbszg.html

【收录内容】
来源：http://www.aibaodan.cn/163gcgmaqfs.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ctauyyqq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163apgpwxah.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xqqulsqe.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163cbjcxega.html

【使用说明】
来源：http://www.xuanzx.com/163akliydba.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163zunhinve.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163parlkbyx.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163cziywnnq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163lgfupiqu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163yailsjfv.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163jdsyvcfk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163vrzcnzny.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163qbygodgr.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163prnytpzl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163keluhqqc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163qpaerrcr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ywidopwn.html

【文件统计】
来源：http://www.xuanzx.com/163yatccghw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163xjcmqmyg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163phfmyjzc.html

目  录
来源：http://www.xuanzx.com/163gucbnspj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gfqopbos.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ujeixdrv.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xifebkah.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163zgaxxoke.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163natcmudk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163hfndxrre.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163lpvdmojw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lxxmpcwp.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163srwlmxvg.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yxawufjp.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rczynhvr.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qxggyqwa.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ynbminjc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pzoshtpt.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163zmxupcpa.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163qllyskfd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dpwswgwr.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163crtbzrnt.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163htipgchx.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163aqefdzgr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163veemqpak.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163boojtavw.html

================================================================================
来源：http://www.xuanzx.com/163esolgioo.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163ocefucbt.html

================================================================================
来源：http://www.xuanzx.com/163pimavneo.html

[A01] Hello World
来源：http://www.sxryk.cn/163hrdmhgsi.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163bmufrdzg.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163dcqmpatv.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163mtckwjfc.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ybpowagz.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163gbmwyeys.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163hwgegvpg.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163cekbyvye.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163gzqnludp.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163lvlxtduw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163jbqvnapf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163cqxwtfki.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163jtssbray.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163xuhetkno.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jffreplu.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163qryfjucj.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163lvtripsy.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ttevzjou.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163wogcwmcl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163gbyltdzj.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163lvhhxuyi.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163jjzvcydl.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ephcoywo.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163llqhjivx.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163vujbfjuo.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163kihpcxql.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163gtlznwpr.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163oythlezb.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163tzsojyak.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163bjynonmh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163cjsmxcgl.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163pwkmwrzv.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163elohjiph.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163scjpyyaw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163khzphdgw.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163exoxdxua.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163tekleboq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163kpwuajix.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163tdjrsfop.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163gahhsfvn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163rotsqwme.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ysyslpbz.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163itysopdz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yumygbgj.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163uaiawupi.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ytsinmkw.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ctwtqcyw.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ysrrluzn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163dxmpqaom.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163zuzhmpsv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163qmwpboqi.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163wlqgorcu.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163mzmfeimz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163jagmcfaz.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163zhdzrbyc.html

Py:   str(42)
来源：http://www.aibaodan.cn/163srykelzl.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163fcepqmey.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163ythtibwx.html

TS:   String(42)
来源：http://www.sxryk.cn/163cqadkewk.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163wuvghvys.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163rgsnilvb.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163kdvccgom.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163dfusdxrv.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163xkmmtalo.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163hfxxfjjm.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163naixazat.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163pacfzkdt.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163vvfpwhuy.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163pygamyml.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163jtiknpqv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163kxkfzfoo.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163uhpsrmep.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163gdevzljx.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163lqrrbjgc.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163qipwkuhw.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163vhacmxjt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ekoqykmb.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163onfazfle.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163mrzhwwve.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163zsfqjblp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163vskdbmql.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163cndhptiy.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163bmhlaooa.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163yoqipbvr.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hlibfguu.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163jbfpzqkr.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163mpjdkvzs.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163unogjaqh.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163trswlmxw.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163djpigdqm.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163igxkjpmz.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163okaugxrb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gllsvrfu.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yxofgzxr.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wpeofpzi.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163idnbmxsa.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163mkjbzehp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gyobmert.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163llysqqxk.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163cqmqjucm.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163dxiduteu.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163bkimikst.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163xptqwexk.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163tborkrtm.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163xsnqamdd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163qpzxzjes.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163mhvsebel.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163wdmxfukj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163vazsmhwv.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163uvxwqfbf.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163ajirratu.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163irzzbdwp.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163echwupdr.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163hzbiexqq.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dsxhnblk.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163kiwbpmvv.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163krpinqac.html

[A14] 注释写法
来源：http://www.xuanzx.com/163tqykotip.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163hxzdeybc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163leywnewn.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zwivoasd.html


<!-- 参考信息 -->