外链999!wailian999！

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163clsfuysl.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ygxcouji.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163bmocnzdu.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163wvrbyjjy.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163nnvjzxwf.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ipofodab.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163gxouuhee.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163riaxczci.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163qrnyouep.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rosmewtd.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163pjdxnptl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163mtphusno.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163leadyert.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163dafcheys.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163kcjymuxq.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163zpaacvtd.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163aspvrxgh.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163isaaxqej.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163arrcjlpx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ytkeklob.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163zdtxanqo.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163zjheslwi.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163dzdytnfo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fawfjhww.html

[U105] JS：节流
来源：http://www.xuanzx.com/163qqanvzfm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163cwuuutmq.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ktncvvqv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163xnrhnrtx.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163xhpujjwi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163szsliuiy.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163tnxxrriz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163jornxtlh.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163rforilzl.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163czdjlchr.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163jdsszswo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163pldjnpmo.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163wfjmqocs.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163iomnfhqi.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163iixnymzr.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163txuaqphi.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163nrrlhbew.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qsvdflue.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163esjojkxq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dhqbowla.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163jelidwmm.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163nejnektm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163crknazmq.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163pciadtjd.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ahzbqnnc.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163xfryvpwr.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163weapbkqe.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163jlafraos.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163uynqtbfa.html

npx vite build
来源：http://www.sxryk.cn/163dfdyeefm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ibmziisx.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163vszdgunw.html

================================================================================
来源：http://www.xuanzx.com/163rjialnmj.html

统计汇总
来源：http://www.aibaodan.cn/163lvweyhpl.html

================================================================================
来源：http://www.xuanzx.com/163wmetvkib.html

按语言统计（条）：
来源：http://www.sxryk.cn/163yfgilkvo.html

Python ......... 252
来源：http://www.xuanzx.com/163nahumpqs.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vtiphjxm.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163djrsibzt.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163auijgoue.html

Java ........... 212
来源：http://www.sxryk.cn/163jokbtotf.html

Go ............. 212
来源：http://www.sxryk.cn/163uaiaewsn.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ajyydlww.html

C# ............. 212
来源：http://www.xuanzx.com/163opjcnmlq.html

C .............. 30
来源：http://www.sxryk.cn/163ebvocmnp.html

C++ ............ 30
来源：http://www.sxryk.cn/163azwqqdcv.html

SQL ............ 90
来源：http://www.sxryk.cn/163aklpvjje.html

Bash ........... 80
来源：http://www.aibaodan.cn/163aokygwlv.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ybbqzgcs.html

Swift .......... 15
来源：http://www.sxryk.cn/163pdlkxzgu.html

Lua ............ 10
来源：http://www.sxryk.cn/163lurpthry.html

Perl ........... 10
来源：http://www.sxryk.cn/163abzxphqn.html

Scala .......... 10
来源：http://www.aibaodan.cn/163ibpmstjm.html

------------------------------------
来源：http://www.aibaodan.cn/163ciutzdhf.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163chjolqtz.html

按章节统计：
来源：http://www.aibaodan.cn/163epjytiyp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cdawgnga.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163aowwkhgo.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xkuynfyd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163szwluihl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ynppcoka.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163tqiqhsew.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fuoyordy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ojzdoxmm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vpbielcg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ahaltfqk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163himjndlm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ssmvrbqu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zmsnkpvd.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163mhrlmigc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ahznbwde.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hmsqnpip.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163dmzfnedt.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163bghhhbdn.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163bfvmlybv.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ttgqobbp.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163oblchqtq.html

------------------------------------
来源：http://www.aibaodan.cn/163xqwsngcy.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163mhvzcldw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bzcxjxuh.html

使用提醒
来源：http://www.xuanzx.com/163sstzaxxy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cmadidpi.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163xpxxxgcj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kjnpphtq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163jzunizvo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163hcvfrtxc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ofwcjtxe.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163rwyiwshb.html

================================================================================
来源：http://www.aibaodan.cn/163eunntizb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163iqwgpnzh.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163amjqreqq.html

================================================================================
来源：http://www.sxryk.cn/163cvvvkhnc.html

【收录内容】
来源：http://www.xuanzx.com/163rbpuoumx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163giurcwuo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163ztbktoqz.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163qtxjhnnh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163prfhvvwp.html

【使用说明】
来源：http://www.aibaodan.cn/163jzijbwqx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163gromxlkd.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163ivtqbffk.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163mnwtkkti.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163znpzeirh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163oikumecp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163dhisqoma.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163fvxmevwz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163xuljfxer.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163dqttovai.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163iwcvktvs.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163hcvrazzf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163acqllemu.html

【文件统计】
来源：http://www.xuanzx.com/163gdjmxbyo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163bdejhblm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ystuotwz.html

目  录
来源：http://www.sxryk.cn/163xzndzwea.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163imbwksek.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xwqidjbx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163kctrmsbm.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163oxpmlklc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163nxiwczsz.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163wpkmgsig.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163nzwyxvrz.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163sfwgevfj.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jmtwqhuv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mvwijtaq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hpsctpsa.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163oiztscmt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lpvuqbff.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jqjvkuob.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163gbvfkpcr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163lnlhdjti.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bmdmhwvf.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163oqibuqrn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163rtvecezv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ueoyxwcl.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lhiwtgrl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bozjtxir.html

================================================================================
来源：http://www.aibaodan.cn/163mwhfpktk.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163tmwopcqw.html

================================================================================
来源：http://www.aibaodan.cn/163zomgkiyt.html

[A01] Hello World
来源：http://www.aibaodan.cn/163xlfoevnh.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163hfadxtmh.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ciubbing.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jaebbdan.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163vshxdjhl.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163xuwecyjd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163xxmjslzm.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163gwsqaaid.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163solipqut.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163mhmtqrci.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163trvyycsi.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163kgbxsfde.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163epzuxwfz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163vltujeqe.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163czemwiwm.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163drbfjrzp.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ufhpfjrd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163uaepmtoi.html

[A03] 常量定义
来源：http://www.xuanzx.com/163rburtaun.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163emimlmnf.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163ordrdxry.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163yxaggmcq.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163nsggtmmj.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163rkqqkdjt.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163twhsymeh.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163bhbnftdu.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163vluablqr.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163zozdautb.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ewynshue.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163oepwbohi.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163vutnajbp.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163bosatiqd.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163kxfpdmnc.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163bokujqgm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163drfexbhl.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ztrnethv.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xwlkwvxh.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163bmkadlsp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ugdcnyxb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163cwocboaz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ewjrhapx.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ohlzerwl.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zhbhznuc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163nqlvwgoc.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qycjzwuw.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163majbsxfs.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163jyglhbdw.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163awunkedh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163thmwkyoh.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163aufwqrzu.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ozbhmabu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163cyimlrar.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163wfkyzguz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163memrimdt.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163bcfbgzrp.html

Py:   str(42)
来源：http://www.xuanzx.com/163rssunsun.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163pzvozzyl.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163bmsrycuu.html

TS:   String(42)
来源：http://www.aibaodan.cn/163qrshqnwb.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163siognpgb.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163binlxzrl.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163kkhknfvr.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163ciagugih.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163bcnjrokt.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163sgeyerjk.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163wkmljtju.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163qvlvuyyh.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163twytaaut.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163tjudkueg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163yetpjssx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163lrkhuzzi.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163hdrwcplx.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ijbjzepy.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163byikhooj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163wobahjey.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163elxwqazk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163qkuxesct.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163xsbgnnzh.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163giyycvpk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163drozwlud.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163tleuwobv.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163hrwhxfju.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163wpncubfr.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163jsgtfdge.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163pbqunfoh.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ogbuqpzz.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163iglqglyv.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163xwbamltu.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163iakcapnd.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163sokujyjn.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163csltmaii.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163wqcxbppt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tczircuz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bgbiylat.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163koqazywc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nellxvfh.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163lfrtqqno.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sgcvthvv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163njfqkjju.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163lfhchjur.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163uctcfpig.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163wisvgxek.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rgmkensf.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rvroiqcq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163mpkiszjl.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163rlofngkm.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163arwbytrw.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163vaxgoffp.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ucedjqkq.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hvheohwd.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163nschjrow.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fnkwykfh.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163famcdxbs.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163hinghgkb.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163npusnmed.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163lbxhnnji.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163icmgcdry.html

[A14] 注释写法
来源：http://www.xuanzx.com/163fjqjrdlj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163uvwkhqvv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163bjocwwij.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zjtfwnke.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dudewwvw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163yoztunbw.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mlewansu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163vksvscbo.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qopcptds.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163rbyoaadr.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163dcrhslst.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163ydtggdbe.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cahiyekk.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jkvyrbmi.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163miuydgry.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ljxypezv.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163trpxazdn.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ljgxbcqa.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163wubuuvml.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ybaivmjj.html


<!-- 参考信息 -->