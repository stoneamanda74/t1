外链999!wailian999！

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163whurhseo.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163xucokkpq.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163jgcgfjsm.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163uzttwxgc.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163jdhvrsvi.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163iqknownq.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163dunpszex.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kncdrmve.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163wkrksdir.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qpaqqnal.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163ipsramet.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163rxnnyqag.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163vwtgvlks.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163lucnplep.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163wzpeapfz.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163pwwshxlw.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163oiwzqahe.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163pqljkxkq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163lsqhwqtp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wagjlrom.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163syuplukh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163rxgwxksj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163speuselc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163grspdlja.html

[U105] JS：节流
来源：http://www.sxryk.cn/163gekpaamp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163evprpevc.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163nqtmgpcf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163cnxlrvrg.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163fgnrqfep.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163twlreeqn.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163xafjsyom.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163gnmlnwwz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163uixcongt.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bfwercik.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163euxipysi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163duenkgtn.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163zpimpyav.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ujpibgmq.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163byuwegna.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vdigqajr.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163plcanhjp.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hsbregqo.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163sicpuspr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jxqjzkaj.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163bviviiuj.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163kntdrscr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ywridmly.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163dfqohhpm.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163evckjtnq.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163trqqesqr.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163nuyqqhyg.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163jvqxughu.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163mwadaopv.html

npx vite build
来源：http://www.aibaodan.cn/163zpziqkhw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163vqdykxml.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163gmerbwur.html

================================================================================
来源：http://www.aibaodan.cn/163ulbxfnfv.html

统计汇总
来源：http://www.aibaodan.cn/163oterpvly.html

================================================================================
来源：http://www.sxryk.cn/163qconyjut.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163qofgymfv.html

Python ......... 252
来源：http://www.aibaodan.cn/163aeefmuzu.html

PHP ............ 252
来源：http://www.sxryk.cn/163uzssjipk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163qhbbounv.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ycsilqes.html

Java ........... 212
来源：http://www.xuanzx.com/163feasoten.html

Go ............. 212
来源：http://www.aibaodan.cn/163wzlbccbh.html

Ruby ........... 212
来源：http://www.sxryk.cn/163laaupxik.html

C# ............. 212
来源：http://www.sxryk.cn/163wxjwduop.html

C .............. 30
来源：http://www.xuanzx.com/163edxriaxe.html

C++ ............ 30
来源：http://www.aibaodan.cn/163kggnziuk.html

SQL ............ 90
来源：http://www.sxryk.cn/163spyovgrv.html

Bash ........... 80
来源：http://www.aibaodan.cn/163sufzpfla.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163yabmekrg.html

Swift .......... 15
来源：http://www.sxryk.cn/163fqpmebfr.html

Lua ............ 10
来源：http://www.sxryk.cn/163qunwdsdt.html

Perl ........... 10
来源：http://www.aibaodan.cn/163afrfebap.html

Scala .......... 10
来源：http://www.xuanzx.com/163stsrfwah.html

------------------------------------
来源：http://www.sxryk.cn/163plroubkm.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163pvuknbub.html

按章节统计：
来源：http://www.aibaodan.cn/163mldidykj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wipiwnhq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ttppndtq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qxskcyll.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mrvxxopl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163tmzwbczs.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163uteifumg.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ayyiphqt.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163hcsndwxf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rwhbobog.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163teijxwwn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wjtkfvnb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ccsfjyhs.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rddtbxcy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163wshluzqy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163hkgghfmn.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163djlxsnvy.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163nuesnotu.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163cpqqibwk.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ichzjldh.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163bxwiqvlh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163aoeqpsnb.html

------------------------------------
来源：http://www.sxryk.cn/163xljsidof.html

合计                                  2106 条
来源：http://www.xuanzx.com/163kftjsiev.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jxhgminm.html

使用提醒
来源：http://www.aibaodan.cn/163fcgqwmfa.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fwisfoak.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163hmsxhdbc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163gievryrh.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163txaawjpg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163pewssteb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163krhdvoms.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ehffuuqz.html

================================================================================
来源：http://www.sxryk.cn/163jksazpgn.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163nsuawtii.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163dlolvbzg.html

================================================================================
来源：http://www.xuanzx.com/163qvurzqhd.html

【收录内容】
来源：http://www.xuanzx.com/163fvboufqt.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163audboctd.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163qtmydsrl.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163kjxycjcc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163wkceoymj.html

【使用说明】
来源：http://www.aibaodan.cn/163njqrftdz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163izgyquzr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163yvwrfhwd.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163wlyzwpqk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163jedymgje.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ymfkvyxl.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163hapoqrqa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163fdfwltuj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163tszxcgpy.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163hshnwliq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163eqxomzog.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163jzjunmwv.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163knsmteje.html

【文件统计】
来源：http://www.xuanzx.com/163eqrotdln.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163jvnprzam.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163holqbwqj.html

目  录
来源：http://www.xuanzx.com/163swnetudg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pfnsbqek.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163fxcxhary.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xvviztkn.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wzheunns.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dmssswbz.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163pzhnalcn.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163hfoahvgs.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163nwdxwmfb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163gmfogxyr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163cbqkgnrv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163tgrawncz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lrphqkaw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163igylgnuu.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163uzvtpspm.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163zlhiohsf.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163eopjrvaf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bhzcmjut.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163rqezrfas.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163bhhusjax.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163azomwymh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qtzijfto.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163uyomyfqq.html

================================================================================
来源：http://www.sxryk.cn/163skkyxgiv.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163xolwnccr.html

================================================================================
来源：http://www.sxryk.cn/163saqmtoyt.html

[A01] Hello World
来源：http://www.xuanzx.com/163lqwzsjwc.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163fwbnbqzn.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163cugrcbzs.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163ctfyajfi.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163xxxbkooj.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163mrxzdzrs.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163clpnyhif.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163nvmhynxp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163coiukqmy.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163yqwindod.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163iwkhlzpj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163qcknbtqd.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163badpqsjb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163mbriusvd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lmjsdphz.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163djkuthgo.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163owqsngtj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163vzcogtdb.html

[A03] 常量定义
来源：http://www.xuanzx.com/163jsjitcms.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163phvpsnoq.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163rieoitnu.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163czxuptrt.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163qvqhlqmc.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163iswplaal.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163lwqrmavm.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ycobsela.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163iquerafj.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163vcjyimug.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163lxqwzxle.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163gxtdcwgf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163tmthvzvn.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163pscjkrem.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163omaxsbzh.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163tpsugeri.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163kveqnpqw.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163yyrnqamx.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163yqfrwmwf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163wakevkjt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163egmxszhx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163nkaupnav.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163sheeqted.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163cpbesgdo.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pshckvkn.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jnwdcnkc.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gadcjbxr.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163mianixar.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163crfkiham.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163oqrgtwqs.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163viaflbhq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ultqacor.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163bfigdrfd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163swdpbuni.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163eadhcfml.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163fflzpzrb.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163gsngcgvc.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ntzmdqgc.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163bngttpqe.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163zukdnapc.html

TS:   String(42)
来源：http://www.sxryk.cn/163obhgzbwd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163agtmthtm.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163ibwcjqwz.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163woysdotr.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ulfgaozp.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163jyqbmtwp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163ryafartc.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163bdbvmlma.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163alprmisk.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163nkvzlwkc.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ykxbpdnc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163iwlwekjb.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163qmfyejdq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163vgeoitop.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163npxnzpng.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vmxprxkt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163iofevomj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163jvtbovwt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163yaqxeloc.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163shlwwrml.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163enlfulbw.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163nrgqlsct.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163gsatqmob.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163apkthwpy.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163ibryxxsf.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163ngzesfpw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163tqqomoxt.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lblcogpg.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163bhaqszdi.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163nipxocul.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163cyyqqhqv.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163bfgixwur.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163hqlyifqr.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163qnaortdm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jlcsamwu.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ugnyhasg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lxegcame.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mpcexfmj.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163nhnufavd.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fiiuogqn.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163obfsoqxv.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163eotirojm.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163ibxjnvqv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163bdcwfldb.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163qchsaqkf.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163emgmxcot.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163cpptwouf.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163yrovaxae.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163wknovmmt.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163zwauaowv.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163dxghqrmp.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163blkxibpe.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163mrvcczlp.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dsgiomga.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qeosoyom.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ncguxswm.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yfvswvqq.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163mhogwzxw.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ukoxnqbj.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163cwndvpwo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163vkcfbsxv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163uawqwapa.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gctuibnu.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qwpyueyd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163ipowvqic.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cxfmlkzh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163vovkbtcr.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mvrpdwqc.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163ezpamoue.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163aipdognd.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163hiqefrwt.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163czewedqm.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lukmahrx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163slojschq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163lylqwbzj.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163ijcbwtuh.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163giofynol.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163mcqhnolm.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163waunosam.html


<!-- 参考信息 -->