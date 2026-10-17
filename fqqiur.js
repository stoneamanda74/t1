外链999!wailian999！

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163exvnwkqb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163osgajgjt.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163rchavvzi.html

structuredClone(obj)
来源：http://www.xuanzx.com/163mvnlpjiw.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163pvqtigse.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163zynpdmru.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163lxjxyuid.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163aoqzreiw.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163dikevmed.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163bhrxzhic.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163xpldjzxy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ntktuwjb.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163uetjciot.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tcbpjipd.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163nettganp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163bpddkncr.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163mlawtadf.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163hoyjpipq.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163sifjspse.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163wyiajbdv.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163pqzlpwxn.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163mmklujin.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163hnsgyvqi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163xyscvhko.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163pjhwctit.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163dppmwaow.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163zvfpvhxs.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yecmgywx.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163lefvmdgt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163fgsorfrs.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163zgdrpixd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163leglhkam.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163dhiutiby.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163dcsmrcpc.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163fxxibkiu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dqpkwjwg.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163xfthvssi.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mmpryzlp.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163pjbqllli.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163pvyhtucs.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163xbdgmxso.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163pyqntsul.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163srrbqsap.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163fksadksv.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163sltpqiwc.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tesmxcbz.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163rsxhodhh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163royqrexa.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163tocsfgyt.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163stccupwz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163eexfyqic.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163rzqdjndg.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163zbjpqmxj.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163olfoixui.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163onfbfont.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163suflrngf.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163tyqixwkp.html

npx vite build
来源：http://www.xuanzx.com/163lnrzkykc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163vzwtyhyu.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163gvxbuljd.html

================================================================================
来源：http://www.xuanzx.com/163pmixxphf.html

统计汇总
来源：http://www.xuanzx.com/163iufsgacm.html

================================================================================
来源：http://www.sxryk.cn/163hpchplcf.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163xhfxcqcr.html

Python ......... 252
来源：http://www.aibaodan.cn/163mxdoojqg.html

PHP ............ 252
来源：http://www.aibaodan.cn/163nryyxgvn.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163sqdkxfqf.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163oxamvpwc.html

Java ........... 212
来源：http://www.aibaodan.cn/163pepapzef.html

Go ............. 212
来源：http://www.sxryk.cn/163clotoulj.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163nxadxvrs.html

C# ............. 212
来源：http://www.xuanzx.com/163lkvxtqgh.html

C .............. 30
来源：http://www.xuanzx.com/163gmhkdgfv.html

C++ ............ 30
来源：http://www.xuanzx.com/163xpqfqpfh.html

SQL ............ 90
来源：http://www.sxryk.cn/163vtvmyqwd.html

Bash ........... 80
来源：http://www.xuanzx.com/163uemirvmj.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163xvilwbtw.html

Swift .......... 15
来源：http://www.sxryk.cn/163zjwkixmn.html

Lua ............ 10
来源：http://www.sxryk.cn/163icerljhn.html

Perl ........... 10
来源：http://www.sxryk.cn/163fklijikm.html

Scala .......... 10
来源：http://www.xuanzx.com/163rjfzxkvd.html

------------------------------------
来源：http://www.aibaodan.cn/163brhycliz.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163qjrnupzt.html

按章节统计：
来源：http://www.aibaodan.cn/163vswfiior.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163fiqaskyu.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163phlfsczx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ofikirll.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ambdfzhu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163igrhhzgk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pytcabci.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163egmiorta.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163paejomwy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163admcumiy.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163bohykrwi.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kzrdhecw.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pkdvjcfm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163spxeymrc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dtikjtqa.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163chottstl.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yeetcqyb.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163xnvkjyut.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163yryijskj.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163wkkaxkus.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163eohwfdvz.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163nbsrrshs.html

------------------------------------
来源：http://www.aibaodan.cn/163btnjpnsp.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163uzqbbtkx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mtieqfbd.html

使用提醒
来源：http://www.aibaodan.cn/163ndvfuidi.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qxzognpa.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163cekewaab.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163hcwnygib.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163oblxshto.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163xmkmmlyo.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ibqgkcdj.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163htryajsm.html

================================================================================
来源：http://www.sxryk.cn/163hyhcqqye.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163lqsveqht.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163hvpbfqun.html

================================================================================
来源：http://www.aibaodan.cn/163jvkalbte.html

【收录内容】
来源：http://www.xuanzx.com/163rnksrccc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163gahkvyuo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163rlrmcazn.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163qtmxrfmm.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163yjpafxie.html

【使用说明】
来源：http://www.aibaodan.cn/163ldxyvzgn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163fjokgnrm.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ttulyied.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163nclilevq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163efksypvj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163rzrijymb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163nmumsniz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163enekjugu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163arohfugx.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163tqkxevzy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163toxuhomg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163cppbihhk.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163wefwkijj.html

【文件统计】
来源：http://www.sxryk.cn/163boedqjtt.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ezeeoihy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xnexhsco.html

目  录
来源：http://www.sxryk.cn/163rnwmxdsk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ingzhazs.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163esulkfko.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ctpzozxl.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mvuppnqc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xrevpcci.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163bidrotzn.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163lncsnjzr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fjatswnh.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163omijssyy.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163esmclemo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163fxehmqte.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wtxjrbbo.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qhcoeuyo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dxhmkrzv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163pespypue.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163eozzssoc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zgqhojmr.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163fearpsiw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163bfzbjdvw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163sggrbamk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tshzoglq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rgzgjkcl.html

================================================================================
来源：http://www.sxryk.cn/163cjjtcfdg.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163kohezscs.html

================================================================================
来源：http://www.sxryk.cn/163swdfnhzw.html

[A01] Hello World
来源：http://www.aibaodan.cn/163huvdqwjn.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163ujxsnyqe.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163buvrlydt.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ahdbpieu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163hlehcaht.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163dptimfwq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ohybjivl.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163sdzzkjep.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163dgtmdsly.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163hqwnojmd.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163amkkrbpp.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ydfgcvep.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163pvmbpshh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163yepahqqw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163bfqqhjpe.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163vpjeqxrl.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163wexlxrxk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lhcmeqjg.html

[A03] 常量定义
来源：http://www.sxryk.cn/163sphnpuwj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163yzyuuazn.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163lxlhxase.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163pbbdhvsa.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163efokshbi.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163hqlxbyhz.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163euzfbdgv.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163pxacusyd.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163ecztulkq.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163izeexvla.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163tacmvphm.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ivbffuou.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163jjtojrft.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163czvdpops.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163qfymidlq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163bjpehapx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163duxmdpib.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163izptdxkb.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163fxkvmwtr.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163oznamomp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163bkhueodw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163eydpswnw.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163jxhwibsi.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163etttkmfl.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kjypmnxs.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163iwjoazja.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bslavjfb.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163hkjjcjmf.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ooezcdzu.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163buokckhf.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163anhwwmnf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ovfuonum.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163nrdvykkh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163zfbeozml.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163rlzrygiu.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163znxugggd.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163hcfxhjjk.html

Py:   str(42)
来源：http://www.xuanzx.com/163ddehzfvu.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163fbnnmerl.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163sigwmnxq.html

TS:   String(42)
来源：http://www.aibaodan.cn/163mdidcirx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163znmilsxr.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163gezrjswo.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163usnxotph.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163wcmdjcse.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163phudzquw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163eenosljb.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163tnkwpbdn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163oqpfojvx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163fugnvlxv.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163bvnqnaqe.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163edsrlfsn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163uvzrlria.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163boagdvid.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163wdrpyibn.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163canqqjef.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ndzwcnro.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163xnnhtabp.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163beqqmkgc.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163tjpphcnt.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163ghxmugxt.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163cbgxrngo.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163xukaxxec.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163cbghavis.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163ubjzjpyu.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163ypiolbhn.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163arvsruzk.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ywbxfxxy.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163yjoxvqxv.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163ejjoacgr.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163aparcsjg.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163jqvsehoe.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163rjljntne.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163wdltmwxx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cmsfbeev.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ugdfeprr.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tgbrunec.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pbmwzxkh.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163kmroffjd.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zjkkhezn.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kxdtaelv.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163neaimvgf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163pedjbiqp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163slnawqwf.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163kyjdxhip.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rxydrqpk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163vpdjwxqj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163vojnwbwn.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163zkurpmto.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163lcrxhujw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163dsecglyc.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ugecmvgr.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163kcsmxkpm.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163javvkfbg.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kpjamoea.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163uyayuvun.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xbxkornl.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163eausyxdt.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xwozksmb.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163mqdxeime.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163zytdtjtf.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163nqxdwhhr.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163eqnznuzv.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ianmwzba.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ndmylkdt.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dacyspnl.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163jzueajca.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163omdqxpjg.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163frjmlrjm.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163ibsfcslm.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163bnrtynuo.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163difjlzba.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163msfgmdnd.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163ngkimuvz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163aohnosgz.html


<!-- 参考信息 -->