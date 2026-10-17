外链999!wailian999！

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ijawnanf.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163fiesanod.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163xjpqghrg.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163whctkjky.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163auptdtlg.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163cdqyznze.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163sthehtip.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163dqejfqio.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163paubblpa.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sjkokezd.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163fsblsbrt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163itqvsvcb.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163aoflgmqb.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ajxigwqw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163zweftexw.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163usbajdqz.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163pbxyppmw.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163fsrhtvlp.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163vseuzflu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163iqocqvod.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163hhbigqct.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163lozcrozg.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163dvqbfneu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163irucfxil.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163nussbzhs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163xdkpskfx.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163uhycadkf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163dpppoaad.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163krgbvrhi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163wgsdxgmu.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163qllvtsni.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ezagwgbq.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ucfabzta.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ibuopuop.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163mmvjjleg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163enytdmfa.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ltctxgdb.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163oksnilsf.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163xvdvkuxa.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163lzmswhwp.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163vbvagcsb.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163agaaftqz.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163pzhbtviw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kepxpgvy.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pmwqhhkd.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163lxhkvzle.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163vohfhoar.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163uewzfmpe.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163wdhxmjhx.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163rrurfksl.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163bbfyqwia.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163tzafbwlc.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ksrtynuo.html

npx vite build
来源：http://www.sxryk.cn/163jixxbhqu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163nhmkfrws.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163kbroynfz.html

================================================================================
来源：http://www.aibaodan.cn/163rewhgehm.html

统计汇总
来源：http://www.aibaodan.cn/163wdltjzss.html

================================================================================
来源：http://www.xuanzx.com/163ckjnbelp.html

按语言统计（条）：
来源：http://www.sxryk.cn/163jjncufjx.html

Python ......... 252
来源：http://www.sxryk.cn/163sesenwrh.html

PHP ............ 252
来源：http://www.xuanzx.com/163gjflzsjn.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163jjyoqvyv.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163wjvewumi.html

Java ........... 212
来源：http://www.sxryk.cn/163madstirn.html

Go ............. 212
来源：http://www.xuanzx.com/163oidrqtck.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163kdxukbre.html

C# ............. 212
来源：http://www.sxryk.cn/163njwebwls.html

C .............. 30
来源：http://www.xuanzx.com/163hhmmybmx.html

C++ ............ 30
来源：http://www.sxryk.cn/163ctlbgruz.html

SQL ............ 90
来源：http://www.xuanzx.com/163udkkxloh.html

Bash ........... 80
来源：http://www.xuanzx.com/163vaacqqfv.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163svzwfxct.html

Swift .......... 15
来源：http://www.sxryk.cn/163ocmjkexf.html

Lua ............ 10
来源：http://www.xuanzx.com/163ogblliud.html

Perl ........... 10
来源：http://www.xuanzx.com/163uksjfsgv.html

Scala .......... 10
来源：http://www.sxryk.cn/163igdhumgb.html

------------------------------------
来源：http://www.sxryk.cn/163coaobmlz.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163pqtfqlog.html

按章节统计：
来源：http://www.aibaodan.cn/163jhduoric.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163gklgfwtl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fzyttspy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pdwoulmb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163swefztgu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163pxkfcyzd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163rlelxpol.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qaojarcb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163nxvegieo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xiudzqsb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163mqhrvvrc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ngqvvmjx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163voocbjhp.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163djnxwzjm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hztxzlqb.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163udymzvxt.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kpjdivvt.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163oxtlcnyt.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163sfcgdxez.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ddnmfoed.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ygflxetv.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163zpbpkhrc.html

------------------------------------
来源：http://www.aibaodan.cn/163zczkrkcl.html

合计                                  2106 条
来源：http://www.xuanzx.com/163oszqiuap.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yofvsjro.html

使用提醒
来源：http://www.aibaodan.cn/163pvbphwyu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ophedjxi.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163sspzrewr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163jqheavok.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163wgezfpvq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163kkcmamdg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163gibvyrod.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163rpxjbcjk.html

================================================================================
来源：http://www.xuanzx.com/163daunefyb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163mdbsnbxu.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163kuddykcx.html

================================================================================
来源：http://www.xuanzx.com/163pjiaovkm.html

【收录内容】
来源：http://www.aibaodan.cn/163ebytbxki.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ucajbczh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ueqldplj.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163iiwdzhcc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163qmolwkon.html

【使用说明】
来源：http://www.sxryk.cn/163fucokncw.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163puqvomwj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163vsavnlvl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163vwummtzt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163rxpqfnof.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163lcbmebqd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163kydfqcqz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163vphjziif.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163axkvbhej.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163vwpqugak.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163pylpqlzs.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163hdaltgmz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163uqqkkhyn.html

【文件统计】
来源：http://www.aibaodan.cn/163jxwrrflw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163wxwmqdri.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gvtokirm.html

目  录
来源：http://www.aibaodan.cn/163adegysnc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163waakitvv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xpzqyqcp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163tjxgrvfz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ezutripe.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163vjxenvlx.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163wzpvirvz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163haeclamr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163eerauasj.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zvsewxmv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163lavpeqna.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pvbkwekk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163eyqwrbpm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uteprdli.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cuwnanwv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163qekuxuiw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ereofbcd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163yatkmeqq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163gznkplbc.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163cdbbsuzq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163qpfchcbk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tdwxuzwh.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163apbzpnbs.html

================================================================================
来源：http://www.sxryk.cn/163cmhekaeh.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163wwmjmayy.html

================================================================================
来源：http://www.xuanzx.com/163kzdwgbpl.html

[A01] Hello World
来源：http://www.sxryk.cn/163vlkzwrvf.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163oqcproap.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163rzcuuojn.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163zsgrpsaa.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163jtcnodey.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163cjxowpdh.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163fynddjkz.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163unkmvanr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163ogojgqsh.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ctmozyed.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163rnvvevcj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ojayrhpm.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163qpmnwzvg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163hsvnvppn.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163amuwdffi.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163vwrdhxoi.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163blrkikbm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jhknnvtz.html

[A03] 常量定义
来源：http://www.xuanzx.com/163jtogfcdp.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163rctnteaw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163uezdufcv.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163emawdawm.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ohkjinke.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163ytgaabro.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163nlbwkrxe.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163opawbykv.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163gyxddfhh.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163oxvafgbe.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163jyfyhqvz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163efoveaoa.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163hnhrdffo.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163bdciwswr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163ymajeugo.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163asjduiei.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163iladsbit.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163lktpxbqn.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163wyfxvsfk.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163ycbqcacn.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ootueayr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ydcsrodd.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163uinpyrws.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dikdqeko.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zmjjoyie.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ygowmslh.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fmyncueg.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163stmsdunl.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163spjdsboo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163gomyzspo.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163rpdqperc.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163qooaoqyi.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163jvuuvmnb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163uzzfjypy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163fdbkrnen.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163wvkdxvnj.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163fxjlcqhj.html

Py:   str(42)
来源：http://www.sxryk.cn/163hqbldkpo.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163dhqdvitk.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163cpclunwb.html

TS:   String(42)
来源：http://www.aibaodan.cn/163endqdzjl.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163zedpsdgv.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163ykxcfokf.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163lfyjbotc.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163snywjqjk.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163chywdpfe.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163vplmefnf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163udqswscz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163utkxbayv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163luoymtyp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163znqwpcjl.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163osjqpnen.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163kyqgxtug.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163dsusjatb.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163vheswxmj.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163czwdshif.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163kuqicpyb.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163cydlclhr.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ofmejtyy.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163sspjgpbt.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ozpsepxd.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163erlkrpwf.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163jyqmtvkd.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163lhmmxrft.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163uyeevpmb.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163qorvbblz.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tiaffvru.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163vhofipeb.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163nsudmrfj.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163eovsnqac.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163ccbsuzwh.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163gaxptzkp.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163dbvqfqjk.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163rilbqysw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jvebcbwv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cevzogbv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ownsqcza.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xdynayxu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163pqwcotvz.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163iksgyloi.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hkfqzmfu.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163deneshja.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163cvvolbhf.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163ggcbofjs.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163acqrptnk.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163fmceegwe.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163hcnrxqzj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163lmqllrpb.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163cvxxiuki.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163jvwonjpv.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ocfbdueb.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163eiyhkmcx.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163uiqgbtyg.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wtmcbpne.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163kahzigjx.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163thrsgwee.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163drmsxmzk.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163evfxouiy.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vntldikm.html

[A14] 注释写法
来源：http://www.sxryk.cn/163jdxknwfj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163chjmzlwz.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163mkmogjzi.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163miepfcaz.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xkhjeubh.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163pmgcrsas.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sjkwmvwm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163thtkjmto.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wpnlqfpc.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163lsktccjw.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163osscftwk.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163qsunfhxk.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lttbibma.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163qdguytxi.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163dsyodosg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163dvocxijj.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163egbblgbv.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cdndwtkw.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163xvyhvnel.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163xryvnbef.html


<!-- 参考信息 -->