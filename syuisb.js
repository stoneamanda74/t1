外链999!wailian999！

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163vttphdfi.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163kgbrmlva.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163kudddrav.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163zzpxkxww.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163qykqqvvc.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163gmhvyjas.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163jcmnuwtv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ouxrudgb.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163kkamgpxt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kezrqnho.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163wefoswqq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163kurcreoj.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163pypslkzj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163wodyypgp.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163bsfmhzkl.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163kvrfskjd.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163fjtqktfx.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vncytbgq.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163vewvgvit.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163bvwnebeu.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163hgswhtvs.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163zliatitl.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163yvrxpkzo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rfrlhfiq.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vlclaigt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163mylfpsgg.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163losbcmkd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163thwotunh.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163onnsrzgf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163jhdxwicv.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163csbqeukf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163nptxeycc.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163tbxzzuml.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wvmgrdfv.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163vjrggmgw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163cqwogxrn.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163lqnlhjwb.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163aryydjzq.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163jafgbxqi.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ufrbdkfv.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163xiphbfve.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ncdeuvrj.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ohpluokw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qvvttkza.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ygjebdxg.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163nlmawddo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xvhieryp.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163bmdmvhbw.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163gaxlmzcl.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163drnoyxoj.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163xeokyuqp.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163vthhghzq.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163wphwjfxt.html

npx vite build
来源：http://www.sxryk.cn/163cbkvuomp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163aafxlzik.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ltjqsitj.html

================================================================================
来源：http://www.aibaodan.cn/163oytheyja.html

统计汇总
来源：http://www.sxryk.cn/163myqxosnj.html

================================================================================
来源：http://www.aibaodan.cn/163ymdtsmym.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ssuwvwaj.html

Python ......... 252
来源：http://www.xuanzx.com/163yayeyzdl.html

PHP ............ 252
来源：http://www.xuanzx.com/163jqskulyx.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ocafrwdk.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163wfnjyvdr.html

Java ........... 212
来源：http://www.aibaodan.cn/163xyvhpmbc.html

Go ............. 212
来源：http://www.xuanzx.com/163khayvyjd.html

Ruby ........... 212
来源：http://www.xuanzx.com/163gfrtmrlj.html

C# ............. 212
来源：http://www.xuanzx.com/163yuhoaaqx.html

C .............. 30
来源：http://www.aibaodan.cn/163apoocqul.html

C++ ............ 30
来源：http://www.xuanzx.com/163vxqxovzg.html

SQL ............ 90
来源：http://www.sxryk.cn/163etncozdj.html

Bash ........... 80
来源：http://www.xuanzx.com/163cmooisay.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163xhrnbrdu.html

Swift .......... 15
来源：http://www.xuanzx.com/163nqvwgobi.html

Lua ............ 10
来源：http://www.aibaodan.cn/163kuaqdtrt.html

Perl ........... 10
来源：http://www.sxryk.cn/163mxpwszza.html

Scala .......... 10
来源：http://www.aibaodan.cn/163wwonplgo.html

------------------------------------
来源：http://www.xuanzx.com/163gpdoffxg.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163dwvhwxcr.html

按章节统计：
来源：http://www.xuanzx.com/163yjwoluzo.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jqhxjabh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sodjcytg.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pcagjiuc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kczqkjtr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163geyousmi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lfslkwpy.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rbtbrojk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qgtjwbzk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mbvawntt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163nedhcddy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rhwapdwb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163quwxsbbx.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163exlgfflk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zqnicuvk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163bkjxzjrk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sfylwvjs.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163dydztqum.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ozehyeqm.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163lsufkhao.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163rctarmzn.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163uyzbuojq.html

------------------------------------
来源：http://www.xuanzx.com/163oezgkphv.html

合计                                  2106 条
来源：http://www.xuanzx.com/163mznynxdl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yszbhbvj.html

使用提醒
来源：http://www.sxryk.cn/163mqccxzfy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163roponxpd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163wjehstwj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ghootfjt.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163loncglaf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163rieyhlmj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163dnlbhqui.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163wgbwdirm.html

================================================================================
来源：http://www.sxryk.cn/163tnykpibt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163mngvdywh.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163uheegrkr.html

================================================================================
来源：http://www.xuanzx.com/163qqdgfjuy.html

【收录内容】
来源：http://www.aibaodan.cn/163dqjlbiiz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163nwzozzme.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163sbeafkwd.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163fsftqxvc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ucllqcbs.html

【使用说明】
来源：http://www.sxryk.cn/163qafrigqe.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163fdboypko.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163xxgiychp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ebmejsgq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163kdogupfw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163lxfaqexr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163wbnxlchb.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163aahgqpmv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163jkddaure.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163paofvxhy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163zwemqpim.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ochofsvy.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163zsbupbrz.html

【文件统计】
来源：http://www.aibaodan.cn/163jhubmymd.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ojwnglpe.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lynamygv.html

目  录
来源：http://www.aibaodan.cn/163xwwywxec.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lysorvgd.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yslyyglu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163axvslwzo.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dwqznyov.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163bbhgjsky.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163ghntavdg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163fvquqgzw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gnhckzrm.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163tjbxppym.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gukkyuqg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163qopwvpet.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bthwcxjt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yqzqwkyz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uparqhhr.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163lfabsqsh.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163zthpsxfh.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gybgluot.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jzyrnsbx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163hddwjafy.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163piuigzlo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163cmkmxnvb.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163aslypejz.html

================================================================================
来源：http://www.xuanzx.com/163qlvrxefi.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163benelmoy.html

================================================================================
来源：http://www.sxryk.cn/163imnbcrjj.html

[A01] Hello World
来源：http://www.aibaodan.cn/163duwkhkpb.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163lnsmhaif.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163oaagjstg.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163phbqyrxl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163vdblkhwe.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163tkdttjea.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163rlazipcf.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163ylvtlykn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163zyvbguqr.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163prdqquaj.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163wbjugxns.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163wojdckmo.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163vqvmhdyx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163oyxvxzur.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wbfopdii.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163gjikpzmx.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163qngkszmn.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wovzihqg.html

[A03] 常量定义
来源：http://www.xuanzx.com/163kjhfdsum.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163nmdjaomk.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163nkbkkhbw.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163tzzhhkxf.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163jnegwnjh.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163rtiibeyo.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163liwwywlp.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163yudoffkb.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163qfdokoqo.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163bikzztpk.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163mytdqnns.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163lksnntnb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ikimdwip.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163tuooddki.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163wcsfmqfk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163rngtlkdg.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163cudpqurf.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163kdxixvml.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163btiocxgg.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163jvfknatg.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163bkkznpok.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163fpvsiptb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163mqlcglow.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xdvspayl.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163njothmtj.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163phnkdkra.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mdwyljqo.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ouqcokkc.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163vuwtvnon.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163koeuzbrr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163slhsfjxm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163mzzupaoq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163vthyzvgc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163skdwuuae.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163akemuuae.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163netchebc.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163ituqbcbu.html

Py:   str(42)
来源：http://www.sxryk.cn/163jqmvzitm.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163dlhofgza.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163wodgltdf.html

TS:   String(42)
来源：http://www.xuanzx.com/163akoluitq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163inybmuml.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163tqixhixy.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163idrvmwri.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ttcnhttt.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163qmqslxuw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163qdgcszvb.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163kontwhhj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163njqzoadz.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163evivelyb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163gjgjbepe.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163rceezldj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163yffedogg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163epewztff.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163zaleevvy.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163tctkqjzj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ptmgyyry.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163azsxkkxe.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163vexcvocu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163xoxffjmz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163bcnsahbu.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163wjnxvfbt.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163emwictfw.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163itarukbq.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163qjuvwzrn.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163amsutkvk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ltvwlzgw.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163aqinmvgz.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163bmwwqewm.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163lofjlkhy.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163ohavyjyz.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163epojvzdr.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ofxhfiwg.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163rsgnhovz.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fqehieqv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163raoxjlcs.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163osvurono.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jnpbvjda.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163klowqivz.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163oyzpcdoq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fdsfxohy.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163fuyxlwmz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163vkgqkyzr.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ciukvjyi.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163kbxeqbfe.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163anfparol.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163amftyevl.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163dvkgfekm.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163zhjzpznt.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163xrbmltds.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163hhjikrhf.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rciakuui.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163wfgwlwbe.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tkffjnox.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163arxvexvw.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163qbbzakqq.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kagfywwt.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163czxhmoas.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ipnuokfd.html

[A14] 注释写法
来源：http://www.sxryk.cn/163mfgojxiq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163czyjfavx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163horutpal.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gyaownqd.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163iqpuxwzk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163fiprtjwz.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tmaaqcfg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163tnzotgfv.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xmjvttkj.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163dsoppepq.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163mhiozsof.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163asgbtktp.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163mpmsompd.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163bmoldydy.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ycammnlh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163qppsufti.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ytehxfbw.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163chqatnsp.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163hhdgnsxz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ilmfhxlg.html


<!-- 参考信息 -->