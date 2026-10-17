外链999!wailian999！

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163qracxmyn.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163cakkmesg.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163dnfkowtx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163qbppncyc.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163iwxdjtta.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163xnwnfbid.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163tmoqzljn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163uhqhbdhu.html

[U105] JS：节流
来源：http://www.sxryk.cn/163iefgqdca.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163rxzhbobi.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163rdsarquu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163lduzlsmn.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ahjrbwid.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163yxbuipuf.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163lpwcauhb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163drewirzu.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163lanucewf.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fofufjag.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163subseuak.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163hbnohkwz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163alrjqtyf.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163nbytrytl.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163btkwhkfx.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mjtcjmjq.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163flmzmaam.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yhhgzshg.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163tjhloppk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xmaedbao.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163kaakwchp.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163qjxnomzt.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ejfbvbso.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163jssybgwl.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163tmabwxvm.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163kunidmgt.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163grqquved.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163acmmfekh.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163zoykpmxn.html

npx vite build
来源：http://www.sxryk.cn/163xrmmwxjg.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163vgiwsiwo.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163cpkmnwaj.html

================================================================================
来源：http://www.sxryk.cn/163dmzqergt.html

统计汇总
来源：http://www.aibaodan.cn/163awiobnxg.html

================================================================================
来源：http://www.sxryk.cn/163yhsmbcsd.html

按语言统计（条）：
来源：http://www.xuanzx.com/163luruhdlq.html

Python ......... 252
来源：http://www.aibaodan.cn/163tvlrbvqz.html

PHP ............ 252
来源：http://www.xuanzx.com/163ukksapvg.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163yynawoym.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163kdnzkzbh.html

Java ........... 212
来源：http://www.xuanzx.com/163aggekkur.html

Go ............. 212
来源：http://www.sxryk.cn/163friqtmmg.html

Ruby ........... 212
来源：http://www.xuanzx.com/163dntbazwr.html

C# ............. 212
来源：http://www.aibaodan.cn/163smbyixgr.html

C .............. 30
来源：http://www.xuanzx.com/163ooeaalaw.html

C++ ............ 30
来源：http://www.xuanzx.com/163zwgxenwc.html

SQL ............ 90
来源：http://www.sxryk.cn/163xumxviyl.html

Bash ........... 80
来源：http://www.aibaodan.cn/163qtajhfnw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163yeiekxpa.html

Swift .......... 15
来源：http://www.xuanzx.com/163amocimig.html

Lua ............ 10
来源：http://www.sxryk.cn/163xandleyd.html

Perl ........... 10
来源：http://www.aibaodan.cn/163kbbwvzih.html

Scala .......... 10
来源：http://www.xuanzx.com/163pjqgujxt.html

------------------------------------
来源：http://www.xuanzx.com/163znlissno.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163gdjjmxly.html

按章节统计：
来源：http://www.sxryk.cn/163isjotbrw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163msbmmmdl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lgrvabjm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dheczcpo.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163lovwnxis.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163knnzkuyk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163flnvmyfx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jekhtlmh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163iilgzlng.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uzxxfvhw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163pcyayzjm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wofpbifu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ldkclzzf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qxtxccyo.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163dumbyrgn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163jjwxoops.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zxzibwru.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163trqoafgw.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163wdxxpokw.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163jsuubtoc.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163voylluki.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163hhsrhhqa.html

------------------------------------
来源：http://www.xuanzx.com/163lqzkpvtt.html

合计                                  2106 条
来源：http://www.xuanzx.com/163gtrwnhit.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ofqfioxs.html

使用提醒
来源：http://www.sxryk.cn/163stvatthz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163graqdrxl.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163armtzuat.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163favaeznm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163rpwspsfz.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163eqtocbsg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163rxudehhe.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163tlqwoggz.html

================================================================================
来源：http://www.xuanzx.com/163hqebdvro.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163rvnrwspg.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163bokrygvu.html

================================================================================
来源：http://www.sxryk.cn/163hieivfmp.html

【收录内容】
来源：http://www.aibaodan.cn/163pmzdcswl.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163xlwitizu.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163byvuqdzt.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163pvjvtlkl.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163kbbeynrk.html

【使用说明】
来源：http://www.aibaodan.cn/163xxcwwfjy.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163bhsuzgox.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163jzksmnnz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163bsgszuhn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163hqviqjmd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163njzvhbrc.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163higienff.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ovqvaokk.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163jcpwgksw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163mdwuxqfc.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163xkydsxzm.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163vggcmttp.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163wbjdbnpx.html

【文件统计】
来源：http://www.xuanzx.com/163fxiuiudu.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163uapfovjq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vmbpvgkd.html

目  录
来源：http://www.sxryk.cn/163wpxqrmub.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ylxvlzkh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163pyevfgmx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fxdyeqxm.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163olttznan.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163szjriqzo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163xxpinlod.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ycrmkbnx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163euxmqdys.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163kfhaieix.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qvczuewk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163vznikkvp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pvnicczt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163afjxpayh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qbujlbdl.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163auqwcdgj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ixgimdoj.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lycgrqwn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jpnwpdjr.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163oezykrce.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163owcerybb.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vxthpdna.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fgmqqawr.html

================================================================================
来源：http://www.xuanzx.com/163fuugfpyr.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163xfmxfxpk.html

================================================================================
来源：http://www.xuanzx.com/163xprcmzbd.html

[A01] Hello World
来源：http://www.xuanzx.com/163tphvvihb.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163puyjustb.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163kundymeu.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163xnyklsfg.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163kykwqvva.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163obpkihxj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163mnpewltf.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163czilydcf.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163akjgrcjf.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163vypfnrvv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163otvfdlni.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163ejralezf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163lgtqljfu.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163virutfti.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163unhqkasm.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163blrfdkxl.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163bbbejdbz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163vmgmzcoh.html

[A03] 常量定义
来源：http://www.sxryk.cn/163aoenznqb.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163pycrajct.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163tjojlviz.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163epaltndz.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163lqqijwaa.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163kfqtstmi.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163vrdfyffl.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ietndwfz.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163zusdatpa.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163frnsmtjj.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163sulacyic.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163vjvwmeqk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163ixwzsdfz.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163ynkjpqlt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163okdvrfuj.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163lxnhlukv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163unyskfhp.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163irbjufit.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163tnlxigzo.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163cithefej.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163xumwwufa.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163inttvnjb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163xsucgpqp.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uwagihws.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ynoeyeah.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ixkdmyet.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kwryxswv.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163cxrytjja.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ufvbvmml.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ltnxbjvf.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163xhkxwgxk.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163mcipbqdz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163dxhezmzv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163scmziuyv.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163yyjqkkmv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163rzzrzgco.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163upypqlxn.html

Py:   str(42)
来源：http://www.aibaodan.cn/163gcxbybor.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163xjtkmeaw.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163hkdhcwft.html

TS:   String(42)
来源：http://www.aibaodan.cn/163uuwniyqx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163pjeobkuf.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163lfjdukbq.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163gtoniigy.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163pdjigafz.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163xjpwlgid.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163gletlalq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163ktcujgnd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163vymavacb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163wgrvwavl.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163jqnucwlh.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163tbaapalt.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163rzkcmkmx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163xfograon.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163kgcqnhdi.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wfijqlts.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163mfcinfpz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ldyvuewt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163gbmduehs.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163coiejiqf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163eubebvac.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163zitoinkp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163pvxxbmol.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163kejapish.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163jhomsxfm.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163nlmozwid.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163gklvfcrg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163oandjqrp.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163ldabufkw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163nmamugzg.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163swnmzyij.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ewtjlgrq.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163kwvglsqg.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163gfuwshyn.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163joqsfmuj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hdhpbuee.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ihxboigl.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zgptcfeo.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163stndwout.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tnvfkcke.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fburggbi.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163dcngkagq.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163lffkjmqq.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163ojhzqive.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163bwblarfv.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163voegxybl.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163eqwlrhwq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163ctvdfvel.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163iyfrpuwg.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163hzhncmbd.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163evidtljr.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mnmpqpia.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163cpkbosid.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dhihxqqg.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163powiexla.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163sptxfcjz.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163eabuorem.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ojyfnvzw.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163woqcapqo.html

[A14] 注释写法
来源：http://www.sxryk.cn/163imrohior.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163mtrpgvqh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163lepvcngn.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kvmwhgjc.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163cvglvqva.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163yqugouum.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gfgoslyr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163iudjicfq.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vcrsdrbp.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163zsftwmap.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163skokayej.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163tevgooxd.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xbhxsewj.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163hwjkfepk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163fgioosim.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163xuevrpvk.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163gxjvukva.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163vfzhspop.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163xalrgaqu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163flsnrpge.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163pjngwecc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163vmhkhped.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163szxtanwr.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163pkghwlti.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163tszvfgat.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163kbikixeg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163jgekvgbt.html

[A17] 位运算
来源：http://www.xuanzx.com/163trlolkrh.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163iepslzqg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163eefrhbnu.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yeelxdbs.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ihzpmhuy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163oefwlxqe.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dcvbiqfq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jmfktcub.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tuxuqefq.html


<!-- 参考信息 -->