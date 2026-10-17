外链999!wailian999！

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163zuvuixwv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163rvhjpuml.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163iinpevpf.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pmaekmue.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163kbestyyd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163zapddtkz.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163fhpgczip.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163eglxdfdo.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163irvoekie.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163qtdttkuy.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ohvzytsl.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163nxckmwyd.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163pwckgkcg.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163erqzubre.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163itxaxmie.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vwpjtuff.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163gvwflphu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rxtyjhuq.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163ghcxbkre.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163lxfmkvsz.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163vowojhik.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163qhmbjcnn.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163wdlllagn.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163yasppymn.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163wiqzkgns.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163gfoehtol.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163hfcelppv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163caxionya.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163njvwerou.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163tuauoong.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163zbdffhdh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nqzxkymm.html

[U105] JS：节流
来源：http://www.sxryk.cn/163figlncrf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163gszfegfd.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163fwliyhim.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163jbuqwsyr.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163xvdfydri.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ipysfkep.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163mrmsrhuh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163srdqaqpt.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163iayaklzo.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wwzootdx.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163jfmfyyyv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ogwjeiko.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163hkqjrcda.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163humyulze.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vznhtslc.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163kzhghagv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163tpmeagkc.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ackijvve.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163mrhalmdd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bqevabsa.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163zgfxjvuv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163oswwhxqo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ylzwkhld.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163phqxdnvt.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163rqgnfzzq.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163rgjylqgv.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163qfrelgjy.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163oxdnjaiz.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163xolvptrs.html

npx vite build
来源：http://www.xuanzx.com/163fduxbbit.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ezwgaoot.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163jhkvsemi.html

================================================================================
来源：http://www.aibaodan.cn/163wwvumlkf.html

统计汇总
来源：http://www.xuanzx.com/163uvrbywik.html

================================================================================
来源：http://www.sxryk.cn/163zsmzpymy.html

按语言统计（条）：
来源：http://www.xuanzx.com/163fxqchhvt.html

Python ......... 252
来源：http://www.xuanzx.com/163zjjygqes.html

PHP ............ 252
来源：http://www.sxryk.cn/163jmaqjfsg.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163esygiovg.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163rzmegwjx.html

Java ........... 212
来源：http://www.xuanzx.com/163bbqlcbcv.html

Go ............. 212
来源：http://www.xuanzx.com/163ztkxwvkc.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163hgeaehgv.html

C# ............. 212
来源：http://www.xuanzx.com/163vkhomynz.html

C .............. 30
来源：http://www.xuanzx.com/163lfjkenfb.html

C++ ............ 30
来源：http://www.xuanzx.com/163huuqgkue.html

SQL ............ 90
来源：http://www.sxryk.cn/163givdagnm.html

Bash ........... 80
来源：http://www.xuanzx.com/163kpsrhjlo.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163bbjjllvi.html

Swift .......... 15
来源：http://www.aibaodan.cn/163zmnqdccj.html

Lua ............ 10
来源：http://www.xuanzx.com/163kbiuuuet.html

Perl ........... 10
来源：http://www.aibaodan.cn/163psxhmijp.html

Scala .......... 10
来源：http://www.sxryk.cn/163dzpscaec.html

------------------------------------
来源：http://www.xuanzx.com/163ytqmgzsq.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163felwoevl.html

按章节统计：
来源：http://www.aibaodan.cn/163gjnkjbzq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163aqyiocyt.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kannvppn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xllissrx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163grwptvly.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163fcwjblvu.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163idtobmbk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jcirunru.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163tbrjkpnt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dmnjgbci.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163vpboxxmr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yohwxcym.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bixmazeo.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xohrokzi.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163yqjujrsm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163lyrkxfdv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bwufffpq.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ldoghhjx.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163zydkbeiu.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163jglmoucx.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163qsetkxmp.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163kgglpuql.html

------------------------------------
来源：http://www.sxryk.cn/163tfwthgkp.html

合计                                  2106 条
来源：http://www.xuanzx.com/163tqvhhbfp.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163suvjbdji.html

使用提醒
来源：http://www.aibaodan.cn/163tdxnfevi.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163sjpuvdpe.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163tjappbck.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163mjalvsrj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163plffqvbt.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163ogolgwbi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163nsbjldjw.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163opitnkkj.html

================================================================================
来源：http://www.xuanzx.com/163kidgxwbk.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163nsmlnkdj.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163wyosxwgl.html

================================================================================
来源：http://www.aibaodan.cn/163uukhvpxk.html

【收录内容】
来源：http://www.aibaodan.cn/163sekjhwxr.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163gzznjfml.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163lowwlrgc.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163bvpjoayc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163yckbrnks.html

【使用说明】
来源：http://www.sxryk.cn/163ivlzsdgh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163olgloiyr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163nrgglsus.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163lcaiezet.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163rjvrqsna.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163tozeeypl.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163whkzmdbe.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163nabtithz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163vgdtpbqq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163lywnsswr.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163wavfuwhf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163uplqpxkb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163cznlyzdi.html

【文件统计】
来源：http://www.xuanzx.com/163kkbdrnic.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163xeqtdsbb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lmhrtymg.html

目  录
来源：http://www.xuanzx.com/163tykfctlc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vcmkgfvc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163hanogvpu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163bevzpmhv.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163yegghkcm.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163htwifvjb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163xrmgdazk.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ljdmrdwx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hzikntqy.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163vrsgrehk.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xrdesdbc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163wobuysml.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rhhwqpef.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wnnvvica.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hvbleyhc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163uxjkbgen.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163kediczsf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ckbiidob.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163puxsnjbd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163xmdcntqb.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163vvtvxxcc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163emvsevvq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lluqiylt.html

================================================================================
来源：http://www.aibaodan.cn/163jowkdscl.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163curzwxsi.html

================================================================================
来源：http://www.xuanzx.com/163plxcnlxb.html

[A01] Hello World
来源：http://www.sxryk.cn/163oxsxnpnx.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163nyjkabvc.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163rhnbsrpv.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163vskdgmnt.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163ytnikrlq.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163lynjtitd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163memgjxzw.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163ebbgoqdh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163jutdodtd.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163djslexqv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163szpybtzx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163vtdmmkxt.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163wgucktym.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163iwrzzvcy.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wulxuuyj.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163ualmmlma.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163lzfitenk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163wpahzsdb.html

[A03] 常量定义
来源：http://www.sxryk.cn/163nknjtbxj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163aogmqqab.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163lvybokmy.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163qmlkptgn.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163bfltalqc.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ypmvraof.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163hdgkbmny.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163pcirsbac.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dyuweqvw.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163dwixagby.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163trhdjenx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163pvdepegx.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163jifeowwx.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ffbbouab.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163oovznxgc.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163cuwrjzjk.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163urqnqrlr.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163unzbbfac.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163wiqglrzj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163kcnncjzz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163qlkkktwc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163kxhchhqz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163xdmoyhxn.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163laugncpo.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ysupggtt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ospfcvjn.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gnwjtqow.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163mohkidqt.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163coruvyli.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163rsrxoywi.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163eivhonqh.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163wpgpplcx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163gzfswbmj.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163etpuiyyz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163ycgneqlx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ftivywjf.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163zlvbzktq.html

Py:   str(42)
来源：http://www.sxryk.cn/163vgouooqc.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163iwuarykr.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163tnnwrrga.html

TS:   String(42)
来源：http://www.xuanzx.com/163ebttbtjz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163irvrlayj.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163lmkgereb.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163svwuqpzn.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163whlhmjam.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163ymdfspdv.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163zghvhnjj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163pghpyxaj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163lnpqtszx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163fbaxktij.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163yycawqea.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163hyqwtahp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163fjqsxvox.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163zzljyvdh.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163iakijllz.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163bdbtnwto.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ovifhzwl.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163eezkuuny.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163rgqoespd.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163vmfbbsck.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163cjkjljgd.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163njqadvcs.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163rzjnybvw.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163jtrcryim.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163zsvswkgr.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163sqiiugoz.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163tsfvrrym.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163bfqrpunx.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163yhillpkx.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163tdvcjopc.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163loxhlgll.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163mtolyopo.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163klvndgcq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163zxvohzpt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ekwkyumj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ksdiylkg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kpyyanay.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hbbvzrts.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163nfvbeubf.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163puasnaoc.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163alwaxsqr.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163salhruux.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163egwftvpb.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163rlxytexs.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163uwtwpoyl.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ipilbrol.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163vacvtgvx.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163shgtkwug.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163vmzjbpjr.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163hmflveaf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163bmaxwlxw.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ekydzmex.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163curgzsnh.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kvkgptat.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gcaionpg.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163fqhzqspt.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163yfpodghm.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163wxxjcilt.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ocbkmtse.html

[A14] 注释写法
来源：http://www.xuanzx.com/163vafvdfyi.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163ndrjnrvc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163zvdcowri.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kiztjcvc.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mnechchq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163goccwtjz.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zxvusbqe.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163wskirdim.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163twtkmntp.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163ucxpsbcb.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163qygwxmpb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163pgkwknmf.html


<!-- 参考信息 -->