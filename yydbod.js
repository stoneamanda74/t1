外链999!wailian999！

[U97] JS：并发请求
来源：http://www.sxryk.cn/163cxjbkiau.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ztrxqmwl.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163vvbvnuzv.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163wryfpgek.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ezbniwpk.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163sivdgqgl.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163fvojpvtb.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163mewbdjgi.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163vqqucles.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163whyviutm.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163iglcxkoc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163dzcbgwhe.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163rlsdsvrl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163msruveut.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163gqrbbnrm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dfubrdhq.html

[U105] JS：节流
来源：http://www.xuanzx.com/163stxafhcj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163hgjxzalz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163uzuljytu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163moccpzkj.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163vmfmwoyk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163cqnrqnfd.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163wgkwajaj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163tmjbzbgu.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163jkikbsvv.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163kuqwgram.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163jlnjoetz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163gbshivte.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163hxcgpnvy.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163wgydmgjh.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163excsiumf.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ylgqtxda.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163bywnwlgf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ggcxwggy.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ephyablk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gdrchiyo.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163svbzflnl.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163utuipcer.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163vpfzuruo.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163zafttbkx.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163wrvydrww.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163vlclnunz.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163apemrlgx.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163pzjwbgbi.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163shpgjvzj.html

npx vite build
来源：http://www.sxryk.cn/163ngfdfmvx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163xsdnntbc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163aalhrktg.html

================================================================================
来源：http://www.aibaodan.cn/163fxejwjpr.html

统计汇总
来源：http://www.sxryk.cn/163yrebzvfb.html

================================================================================
来源：http://www.xuanzx.com/163bxkxjsum.html

按语言统计（条）：
来源：http://www.xuanzx.com/163fifiumvr.html

Python ......... 252
来源：http://www.sxryk.cn/163hntssmqu.html

PHP ............ 252
来源：http://www.xuanzx.com/163soukgpis.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163joawpsjg.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163oyhtptss.html

Java ........... 212
来源：http://www.aibaodan.cn/163aeeekxbb.html

Go ............. 212
来源：http://www.sxryk.cn/163gidrlxml.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163yiwspqva.html

C# ............. 212
来源：http://www.aibaodan.cn/163ixsatvux.html

C .............. 30
来源：http://www.sxryk.cn/163hwzbbbap.html

C++ ............ 30
来源：http://www.sxryk.cn/163aredfjft.html

SQL ............ 90
来源：http://www.xuanzx.com/163xshyglcy.html

Bash ........... 80
来源：http://www.xuanzx.com/163hhqpfleq.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163paakrbkb.html

Swift .......... 15
来源：http://www.aibaodan.cn/163gbbylllx.html

Lua ............ 10
来源：http://www.sxryk.cn/163zjdexeyt.html

Perl ........... 10
来源：http://www.xuanzx.com/163rmbcylzm.html

Scala .......... 10
来源：http://www.sxryk.cn/163aftgwade.html

------------------------------------
来源：http://www.aibaodan.cn/163zuakhzpt.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ilqnbsrb.html

按章节统计：
来源：http://www.xuanzx.com/163rtvzqppp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163gggqdfze.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cufnazkj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gkzhfsdi.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163eiadhtvo.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163kambwmvj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ezbrbccf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yjghcnil.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hzwtzjfg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163udwlgaee.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163gkpoaykl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ibwgpavc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163elwqktbq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yevrrkgh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dwhaaypg.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ovjzccga.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xpilerpl.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163huhogpha.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163cwqxqwbn.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ovnfkkbt.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ihjxphxw.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163qmwgbchm.html

------------------------------------
来源：http://www.sxryk.cn/163kvgjwjmn.html

合计                                  2106 条
来源：http://www.xuanzx.com/163iybrfyel.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jcasrstm.html

使用提醒
来源：http://www.xuanzx.com/163renbfzig.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163tnvncdlo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163wvstfmtq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163najigkbk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163kryzpvyz.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163nqkcxaiy.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163gbxsocap.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163cqymdixx.html

================================================================================
来源：http://www.sxryk.cn/163fkjvfaul.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163flgpitpc.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163focouhog.html

================================================================================
来源：http://www.aibaodan.cn/163xpsvhqvj.html

【收录内容】
来源：http://www.sxryk.cn/163owcsbgkc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163umtgoymh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163fhueqlht.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163vghfayie.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163lhwyiiug.html

【使用说明】
来源：http://www.xuanzx.com/163yypnqhbw.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163dtnbraye.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163dokuxzew.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ykiumeau.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163cpidiisv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163aawqwytb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163emshckev.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163nkmnresi.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163jclxkeqz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163kfomuvut.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163nkkbjrox.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163wdhzynjt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163dpnghlai.html

【文件统计】
来源：http://www.aibaodan.cn/163mptbbuqp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163etoosygv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163saxnncsn.html

目  录
来源：http://www.aibaodan.cn/163iyaskphk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fcsvnycq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163wcnhsewp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lltbovra.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163rhnqpffl.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kdvorybo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163vokmnhbu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bamddrkv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163silvbqdj.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163yxpmulwy.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wujrlzcd.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163wpwvxvhq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wtjbhnle.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zafgzefw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yrkrzhit.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163iqwbzdbp.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163kzvubujo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rcpzfcsv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163wmmnponf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163svinvhwe.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163abkwudgk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ltimmpdf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qjvjmbcp.html

================================================================================
来源：http://www.xuanzx.com/163sywwkiop.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163tuwxtopn.html

================================================================================
来源：http://www.xuanzx.com/163qlokrrre.html

[A01] Hello World
来源：http://www.sxryk.cn/163phfnwbtj.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163srfnnmuz.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ktdqzdai.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163tdqledmu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163bjvodogi.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163urglhofz.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163kmwgqfcm.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163vvutcoqm.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163jicwoffb.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163pesltivx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163fguqurzc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163tbzgytfk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163sibimtkx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163mnkaxypf.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wutxknan.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163iiyfzuva.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163odkfalzm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ulrdwrkw.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163pjvccjek.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163zjohgakj.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163gyskeasv.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163goaqkbry.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163nxhjsckq.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163vneboezb.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163pqyivjwu.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163hyjdtzko.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zoruvpyk.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163tjcnynao.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163hwshjdfc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163vxywmoeb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163vhjdhrje.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163rwatyagh.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163jamqffyk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163tntrqufr.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163jubexbxv.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jteovrfd.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163zfmbborc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163hyfqkamo.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163cpfsirwc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163crknkhiv.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163dllccizc.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163droacstw.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163oydofrbi.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163holglhon.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163adyjiuxp.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163hggfeziy.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163jdgnuixi.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163bogywpdz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163hkoaklae.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163tgduinoo.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163oocvqrss.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163mxwdkfvu.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163smnmdxsd.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ggmolkmo.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163qmxkdeid.html

Py:   str(42)
来源：http://www.aibaodan.cn/163rmsuvwqm.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163mwuxlrxo.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163jcgoawtp.html

TS:   String(42)
来源：http://www.xuanzx.com/163jrirwata.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163arspqeeh.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163maikwipy.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163cnesdwps.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ekkjnmip.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163czmrpiwq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163evvvljhu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163ugzuekah.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163fruuiutf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163zwipiqoi.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163wwccnzbq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163otccwave.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163oiiinais.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163gagbnwfo.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163ruurtjgt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163srpsxjad.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mgbzmllp.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163iskrcgde.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163gcpcjdjn.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163xjmninqo.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163xvyzetkq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163gynmfeza.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163sccquuqb.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163kehhqjjy.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163qosjnuqg.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163jbxgexkd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ikhjbadp.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ezbvclhp.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163nknoensj.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163bdqcazba.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163tyvevlrd.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163gqlvzent.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163qvzrudox.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163olurntql.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rrjcqonx.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yixqwowj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hjxrvdqr.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rtuiburq.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163ihxicjze.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wcmklkut.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pemtrmhz.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163rmkmbcpe.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163srpuwrvi.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163fbahfdxf.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163urasjett.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163twkivwjb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163bgrwjawm.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163emlakxig.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ocepemnh.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163qvepoegq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163nzowaozs.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bgqknckz.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163tfyhwdyb.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ogksiyya.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163eygkfxjq.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163fpapknfl.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rblytrox.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163qhsrapjk.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tyzrgdms.html

[A14] 注释写法
来源：http://www.sxryk.cn/163whflnhdo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163abkttfhv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163okclpeuw.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ukkhcyzp.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163poqxxxdm.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163hewmevkk.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qnaztzch.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163dpafmjgw.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163drejchjj.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163vowytizf.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163bsgndtwb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163yfkfcvyc.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163froscvnx.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163leedchpg.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163ggyqcnzp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163lmbmqrss.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163kkeoxncr.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163yamesepm.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163bdxpdhst.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163xsjbzvsv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163qskkgngi.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163zxgqusxv.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163tsaelbhb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163tryblqhv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163tkclwzak.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163sequoivg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163nviipdtz.html

[A17] 位运算
来源：http://www.aibaodan.cn/163wvrdbabz.html


<!-- 参考信息 -->