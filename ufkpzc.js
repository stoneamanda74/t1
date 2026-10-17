外链999!wailian999！

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163luuijzfb.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ayniwoww.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163nbqpthir.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163prhdvujr.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163uedikkot.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163rikfnbpb.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163tfivggno.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jrzkouid.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163izbpirss.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xdmynzpe.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163wivjxthg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ybietind.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163abmouaas.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163wkbjnqsp.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163dnnatzad.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163jzzyqkni.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163evndqyfm.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vlxlgwtp.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163wxvxqfwh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163uhqkador.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163iuhywflw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163fijbepux.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ovjxkxrz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nnkigtzi.html

[U105] JS：节流
来源：http://www.xuanzx.com/163usrisfim.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163bdajloxm.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ujqzlykt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163vrkzwqrh.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163jlkduvtw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163gjoouxhb.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163hbyrncmj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ovfvruef.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163csghdrrl.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163evodcrms.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163pzkmafrn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163riwzltrr.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163bxnjwovt.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163xbwytkoy.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163cbaetvvp.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163cjwaxqrb.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163jyctcnnm.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mebqnczs.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163mkpclair.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163lnijcmyg.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163jcbtoaya.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163yjnnbexu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163jsyduwfj.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163zlcqdeqp.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ahehndqp.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ekfeehkc.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163rrimoced.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163beugvkth.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163pskpidqy.html

npx vite build
来源：http://www.sxryk.cn/163mxgbehso.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163pnwioefj.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ruqbtrpq.html

================================================================================
来源：http://www.aibaodan.cn/163pwbrwrur.html

统计汇总
来源：http://www.xuanzx.com/163xjscezee.html

================================================================================
来源：http://www.sxryk.cn/163ufremcyn.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163kuqltbur.html

Python ......... 252
来源：http://www.xuanzx.com/163upxjjymj.html

PHP ............ 252
来源：http://www.xuanzx.com/163exdjtnmf.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163pxgbditw.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163kshgyyzp.html

Java ........... 212
来源：http://www.sxryk.cn/163syhxxjla.html

Go ............. 212
来源：http://www.xuanzx.com/163ugseecch.html

Ruby ........... 212
来源：http://www.xuanzx.com/163uekitdzs.html

C# ............. 212
来源：http://www.aibaodan.cn/163wfgyemsh.html

C .............. 30
来源：http://www.xuanzx.com/163gmwmcxhc.html

C++ ............ 30
来源：http://www.sxryk.cn/163znyakzsv.html

SQL ............ 90
来源：http://www.aibaodan.cn/163huujidmz.html

Bash ........... 80
来源：http://www.xuanzx.com/163byxwsojp.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163itlxrrcy.html

Swift .......... 15
来源：http://www.sxryk.cn/163dsvhohxq.html

Lua ............ 10
来源：http://www.xuanzx.com/163rmqeoirj.html

Perl ........... 10
来源：http://www.sxryk.cn/163bmlmptkv.html

Scala .......... 10
来源：http://www.xuanzx.com/163mvxdzgvn.html

------------------------------------
来源：http://www.xuanzx.com/163whnzewpr.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163hqovxjrq.html

按章节统计：
来源：http://www.aibaodan.cn/163llboqsrl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163efzkioxh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163udqikvcd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lvitznxm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163mtkyhmoq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ensrachl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163tybavbnj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tcnhxjqv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hwvuoqxu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pbdwvmam.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163kufafeep.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163clpuhrvu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bdxhyqfw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ocucsmvv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zqxowynv.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163brdhnvlb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163drarqijc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163qjyhlbtx.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163rpnlsriu.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163dblzffqz.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163xejaaldq.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163xlgladan.html

------------------------------------
来源：http://www.aibaodan.cn/163fozbgskp.html

合计                                  2106 条
来源：http://www.sxryk.cn/163vvphwowo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163dawsgpxf.html

使用提醒
来源：http://www.aibaodan.cn/163mcnolzmk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vjocfyxd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163dsyqxasw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163nwispaee.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163abknturd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163mckdsfgf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163qwtxgtvw.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163bxgctege.html

================================================================================
来源：http://www.aibaodan.cn/163evcfbiee.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163stiivutw.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163kdngccwd.html

================================================================================
来源：http://www.aibaodan.cn/163aeqcjher.html

【收录内容】
来源：http://www.sxryk.cn/163hhzxchld.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163uootipwc.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163chstulzo.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ndlimlmy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163vekcihep.html

【使用说明】
来源：http://www.xuanzx.com/163cugurlmz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ceqcxtik.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163wmgyngjz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163gsrmndoo.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163kerkgqcj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163yysqcktk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163hkmnqoii.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163cbpljxyi.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163gejdsrip.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163untwwnon.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163mlkljivn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163guvdwkdq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163eijoaqfn.html

【文件统计】
来源：http://www.sxryk.cn/163fytugjjr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163wirkdmpt.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ebbgboeo.html

目  录
来源：http://www.aibaodan.cn/163qkrvlfee.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zjhivouq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163jvxrwzty.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163txrnzajf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163sifcbcbo.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163nysgtunf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163vmowdvjc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xegqriwu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163blutsqjc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163gxnbuijp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hkczcsgj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163wbdgnoaq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dnlihzhf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hwfbuybg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gpionvdv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163yyibfkwu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163qzhmzzwt.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163niwtiump.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ezntqqji.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ytwwlaww.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163sxtrdcln.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163moaoljye.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ggbnhktf.html

================================================================================
来源：http://www.xuanzx.com/163syijysfi.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163uzclhelp.html

================================================================================
来源：http://www.sxryk.cn/163snsoaqpm.html

[A01] Hello World
来源：http://www.aibaodan.cn/163jputyrep.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163inotepjq.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163nubjawkh.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163tetvcvna.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163erfnajne.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163hfcnyyjm.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163qefazosy.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163sgifocfv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163fgxadlmh.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163yastvjnj.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163tclwzino.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163tvkvxmjf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163jltdqcku.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163ftaedyvp.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163lftaogdg.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163afdpajwb.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163tgtkkjqx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ldbscxgf.html

[A03] 常量定义
来源：http://www.xuanzx.com/163syjugdbk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163tzgtedem.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163giqfyxdj.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163xtetprfn.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163crtaxkvj.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163pjetrpyt.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163eacqrwqw.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163vvuqslpo.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163ibkpnhny.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163fqwybatn.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163erfbthzj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163kcvzuidz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163ttxlymvt.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163nwklqzkz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163yvwrfasb.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163rtwbsjwx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163jbeeyued.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ghiomeph.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ninikfaj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163gljitofv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163iahlpuvw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ltysxymr.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163xbdmhvmm.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ndhupwbm.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wyajvawc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163oqfmvlpm.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ouhgpxqh.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163xyniatbq.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ujumlvow.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163osbwocjs.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163bczpqowr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163civkyyhc.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163wkaolyzu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163pdwvxmqe.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163nmxbcdxv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163gmocyebe.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163cjxegveo.html

Py:   str(42)
来源：http://www.xuanzx.com/163rzeyyfxv.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163jelvuazb.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163qxnvigsj.html

TS:   String(42)
来源：http://www.aibaodan.cn/163asfxpqwi.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163onctddzw.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ppkblvlw.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163vgrgenwz.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163crnzpykn.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163jhmkmaug.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163jbdlqkxj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163nuujibrz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163aanigaqu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163gzsxnnjt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163vahmguhw.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163nrzvcnyp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163romqbdzg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163ktibjasr.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163dglqwhzg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163zotdlkql.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163xywszwnx.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163xubhbqzs.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163vnwpmdpg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163rfhvfitv.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163vqxwpnxp.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163udlvauue.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163wtbyxpqf.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163bulwucmj.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163ijtyjksz.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163vyfycptd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163thqprwvt.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163bzflyftn.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163swqrmkds.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163rmanqnby.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163brwmwtam.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163gwxcfbcv.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163cqwjucdz.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163soizvakx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fekfxtwi.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lzgxhslv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ryznbsal.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qsztsuay.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163zpmyjwyf.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zswhfanl.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ybvmcudj.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163uzytfcdh.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163jgxnybzi.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163jetdbqbv.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ldwsnvdy.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163xfefxffh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163nbarcddd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163jbtkawtd.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163rdtzbrbj.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163omkdujkj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163enatoeaz.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163sklgwyyd.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163wdamluue.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hfpoasjz.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tvyanfse.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163xswwhhmq.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163yahkrrhj.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ffbrpbow.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163temkdyml.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163eifjvzoj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163skthonbh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163wzqkmbmw.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vkunmahj.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jyfvjxcj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163daztxfrg.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zrluznhg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163htkzyesv.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zuhvmsxc.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163clzafmno.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163tmkttmgs.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163qevkuxxv.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163dpvbxxgu.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163imnbdgmh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163oukkikgv.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163tzzabpux.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163sawiamec.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163orraquuh.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163uivtqcvv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163adecnidn.html


<!-- 参考信息 -->