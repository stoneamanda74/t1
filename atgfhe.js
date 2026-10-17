外链999!wailian999！

[U97] JS：并发请求
来源：http://www.xuanzx.com/163lsrprqmi.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gumogvhc.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163kecpamzu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163wkcovedo.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ehcrpmqe.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ellhroiv.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163oormxjvu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163qypzpubh.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163jurcxpal.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lgtpxlli.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163qeoibwmt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ggfarkki.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163liejesay.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163txfqrfis.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163jjhcfloh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mxmeinye.html

[U105] JS：节流
来源：http://www.sxryk.cn/163mnrjxdau.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163xldlhwda.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163butfonim.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163iezcnsck.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163zmglbkxj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163wajopoxx.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163flmerfbt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ahunxlht.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163wddzzsan.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ogjccqzh.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ncbwveek.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ujkyguqq.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163knmgwuaf.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163qghjfcoh.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163nczhdhoy.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163fskcbkkq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163wqrwkbsp.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163phcjakma.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163qbuoobqz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wrzwmlzc.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163kssraqpk.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zqpijuyw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163brxqkapm.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163winnjsxw.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163dzwgjgvi.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ozfquiur.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ojjyovtb.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163lebmpuvn.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163flbhaybm.html

npx vite build
来源：http://www.aibaodan.cn/163zbmwlzko.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163hmnskgsg.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163yihrshxt.html

================================================================================
来源：http://www.aibaodan.cn/163hbhlncsy.html

统计汇总
来源：http://www.sxryk.cn/163gmahpkyz.html

================================================================================
来源：http://www.aibaodan.cn/163sghmkqev.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ckhnizpx.html

Python ......... 252
来源：http://www.xuanzx.com/163pagaompr.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vjbbpwst.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ttywcbrq.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163lbvkzvob.html

Java ........... 212
来源：http://www.sxryk.cn/163luhjjxzj.html

Go ............. 212
来源：http://www.sxryk.cn/163dpmnnzgn.html

Ruby ........... 212
来源：http://www.xuanzx.com/163qctonuhj.html

C# ............. 212
来源：http://www.aibaodan.cn/163lbzoqxll.html

C .............. 30
来源：http://www.aibaodan.cn/163dnfrpgjm.html

C++ ............ 30
来源：http://www.xuanzx.com/163gmxqzijx.html

SQL ............ 90
来源：http://www.xuanzx.com/163xhdcrlfy.html

Bash ........... 80
来源：http://www.sxryk.cn/163midpzfsn.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163omlvmrdu.html

Swift .......... 15
来源：http://www.xuanzx.com/163fevtjiwz.html

Lua ............ 10
来源：http://www.sxryk.cn/163uxpseuhl.html

Perl ........... 10
来源：http://www.aibaodan.cn/163jhssbdep.html

Scala .......... 10
来源：http://www.xuanzx.com/163gjicxwdq.html

------------------------------------
来源：http://www.sxryk.cn/163imuyktiv.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163xwtmykvu.html

按章节统计：
来源：http://www.sxryk.cn/163pkxqesxw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163leylyoxl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ihgfpffy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hhnmqmud.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163vmlombch.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163gcoxqppp.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163dxliwnyw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163grndmnvc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163wrysszqw.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bjivoqle.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163mydwisqu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rbpjmcht.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eaxqfhya.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mhyydvds.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163eijgykvf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ahvnsrzg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fdmifvze.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163hvntnpzz.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163nzvfnbig.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163gnifwwan.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163qxhzxhoi.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163zaygqvbe.html

------------------------------------
来源：http://www.aibaodan.cn/163mhravjyt.html

合计                                  2106 条
来源：http://www.xuanzx.com/163ubiaaicr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jkyjazcq.html

使用提醒
来源：http://www.xuanzx.com/163unqdclwe.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wmnhdldw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163wnlgsiig.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163fszyiuhk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163mqcnolxs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163lzmxpdyx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163qkzoacre.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ktcpoyrg.html

================================================================================
来源：http://www.aibaodan.cn/163ojfarydv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163qukcywqk.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163jjknldtf.html

================================================================================
来源：http://www.xuanzx.com/163lgdcpgyb.html

【收录内容】
来源：http://www.xuanzx.com/163hfdboefr.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163findonxt.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ridglebw.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163nuwtfzmz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163mlrvgapc.html

【使用说明】
来源：http://www.sxryk.cn/163yezoeuxm.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163uettibqc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ndtolaie.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163jzdbsdnx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163wvamyrur.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163zryperdk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163einswrii.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163jrkkmsjn.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163eslrlebp.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163fhkkrdfn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163jlrpptoj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163xmbaahht.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163tsihxfhf.html

【文件统计】
来源：http://www.sxryk.cn/163rehoiztq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163wbpeaizo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vaxntihl.html

目  录
来源：http://www.aibaodan.cn/163gvxqkkbu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163zpxtiyid.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163enxpxafj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163yvscjkia.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ucpgunro.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ydvkbbfm.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163pyuiywvf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163srjmczub.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163riqogivl.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163upkefsam.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163akyhpdjc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163wwnafbwk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163baykijbi.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ugmbqwyj.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163djzuewrh.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jwgdnccf.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163rxpcurhw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163idchqrfj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163esrhmexg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163lrbmunlz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163fsbopxdh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163egzlhyuc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nxoqgbfn.html

================================================================================
来源：http://www.aibaodan.cn/163uzyynyqd.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163irdljuxb.html

================================================================================
来源：http://www.xuanzx.com/163bazxmtza.html

[A01] Hello World
来源：http://www.xuanzx.com/163vkggiide.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163bepbozat.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163stqsrokc.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163mfkcokcr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163yymjuwhe.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163yigxrftj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163xlubjheh.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ddhfbbkk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163pngqesmb.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ropuhlqh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163gnvdfqtg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163dkgmsqyd.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163rdwnttwt.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163cgqscsth.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163yosndfmp.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163vszumxkv.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163whxblsgx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cvsgufxj.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163bfwelzca.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163dorxklfm.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163aunexjoq.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163kdpipoqf.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163adjfkwcy.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163oattbgau.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163qptlpqfi.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163gocmvbau.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163sqgpjsbx.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163depfdkir.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163scwnamnh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163fvvryvmw.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163dhmeeywq.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163rwfwnykx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163pyxwezxx.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163ydcnksyo.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163lshugjsa.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163swwknjdk.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163llbmoqnw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163eiztlaib.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ufacszcv.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163bnkrupye.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163phnabfxq.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dqltlqhu.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163umtlumgd.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163grxswyci.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163acrmmkkb.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163vtiiqnck.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163emqoghzs.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163kmwdiqtl.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163yhxdqpmq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163qdslpnug.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163gpxklufg.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163xxlwowks.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163comqrjoi.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163gulfbsey.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163oeayiflz.html

Py:   str(42)
来源：http://www.sxryk.cn/163kryftkvn.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163rqtptqis.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163fwprtaee.html

TS:   String(42)
来源：http://www.xuanzx.com/163kcluviqj.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163jgdzyarv.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163tfhlgfjh.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163dbdmzapw.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163srejopiv.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163ramtrfst.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163awnacaxd.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163octnwrig.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163wuguefyq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163gaxwrfdv.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163czylbgac.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163njumhayt.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163gepylvqg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163tnjwbyev.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163mnvgrycr.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163hzgrxdtb.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163omrqeesf.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163jlavfpmw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163yegxcibg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ktxcqoyl.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163hmeoyuuk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163mdmxdwer.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163thauhicq.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163afpoueiy.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163lzxcfuqj.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163nervaxav.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163cisgymqr.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163snuchcwb.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163kmvrqwns.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163ubovyipl.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163lbmkpypx.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163pgjuxoyi.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163drljotvk.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163kacveolg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lwposlpd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uelrzsup.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qkbuvwmm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dygeaiwe.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163sntnieoe.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bigidplb.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cqtxontq.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ctveuqvg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163gvuccyni.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163yyidmkdp.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163bcyimxmw.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163pqtyapvu.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163bgxoqoad.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163cxpolrej.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163dbudkcrx.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163oilxdwuz.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163jxpvfrtm.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kvubykyp.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163eummlafg.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zmfoyzxn.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bnergdrz.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163xxmlbnon.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pkydqtcf.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163sjtpudjh.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xktdpyay.html

[A14] 注释写法
来源：http://www.sxryk.cn/163bqmtzhqa.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163tmlcgvtc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163rtwayxwb.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163elskwveo.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xzyztcoc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163vficqvzp.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rmmaxnwp.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163gvrlfcrt.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cbzcpdlr.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163iulpzqax.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163pnrvdajl.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163fjyfthwa.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163xxglrnkk.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163kgxqnsok.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163cpgrijlm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163gzcrjmpj.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163pkbjswdo.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163sjjeobbq.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163wqzghymn.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163vshnblqx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163wdcncahy.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163pocbqjce.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163mdkyxckx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ffvfsnlo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ofpjtvhk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ixnutpuy.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163jlysuxaa.html

[A17] 位运算
来源：http://www.xuanzx.com/163qloxcmph.html


<!-- 参考信息 -->