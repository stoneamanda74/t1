外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ixirbnnl.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163nmdhtlal.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ibagdjor.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163vjhsatrl.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ytjocwwj.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163jfbewzzh.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163fbpsagmt.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rzjjdhns.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163zaokbixv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ghuvkhqg.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ejnzpumy.html

structuredClone(obj)
来源：http://www.sxryk.cn/163gdawdcwc.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163fljdsbxt.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163mkbojfyz.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ulaiuhur.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163tgmqergu.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wcnlwavs.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163irgrogzb.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163nsfuksxx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163sdwqpgkc.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163onwopyzr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163igkwalqa.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163mepnmshg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163mauptwlx.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ycylsgfu.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163oykasnuf.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ziygmtzh.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163xlqdqrnp.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163dgdbalwt.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163tiyotkep.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163xabwqojl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163pivdlgct.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163fnllespp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163dbgprqbx.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qlamwsxr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dsxowrmw.html

[U105] JS：节流
来源：http://www.sxryk.cn/163qrifyigq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163lyhswndt.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163lgrirmmc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163dkzwndhj.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ddwlhijd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163xnnttzxu.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163hmujuehz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163uudrsefm.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163agqltdzz.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163afhqiqvt.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ojkfaqsc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163hxytldjb.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163kqjtuppo.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163kgdxuopo.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ntmddqoq.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dratqijf.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163xybyhxsy.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tvanqvjw.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ilasozno.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ybfvbogm.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ijhwazli.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163cychdcuz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163psfqjspr.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163yjogafwu.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163wlygiajg.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163rswmsjui.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163kuyfkrlg.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163qbjxnchq.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163dejsitpa.html

npx vite build
来源：http://www.xuanzx.com/163wfstnbez.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163pcqoqqev.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163uqqgehou.html

================================================================================
来源：http://www.sxryk.cn/163sssgxcqq.html

统计汇总
来源：http://www.aibaodan.cn/163ydiirrod.html

================================================================================
来源：http://www.sxryk.cn/163eylqpeel.html

按语言统计（条）：
来源：http://www.sxryk.cn/163gepptvky.html

Python ......... 252
来源：http://www.xuanzx.com/163fpalknea.html

PHP ............ 252
来源：http://www.aibaodan.cn/163wnvlkugv.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163xhhutyxf.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163spxnwbut.html

Java ........... 212
来源：http://www.xuanzx.com/163xulcurca.html

Go ............. 212
来源：http://www.aibaodan.cn/163kpzqwhkd.html

Ruby ........... 212
来源：http://www.xuanzx.com/163eqwrgosh.html

C# ............. 212
来源：http://www.sxryk.cn/163bnvijcse.html

C .............. 30
来源：http://www.xuanzx.com/163csmcavef.html

C++ ............ 30
来源：http://www.sxryk.cn/163vbcmntyg.html

SQL ............ 90
来源：http://www.sxryk.cn/163vulbjjst.html

Bash ........... 80
来源：http://www.xuanzx.com/163mezctsls.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163tqilbdqu.html

Swift .......... 15
来源：http://www.xuanzx.com/163bthrkeov.html

Lua ............ 10
来源：http://www.xuanzx.com/163szcavicv.html

Perl ........... 10
来源：http://www.xuanzx.com/163martazhk.html

Scala .......... 10
来源：http://www.xuanzx.com/163emsgcjrx.html

------------------------------------
来源：http://www.aibaodan.cn/163odlbnznm.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163tqtanvpi.html

按章节统计：
来源：http://www.sxryk.cn/163lvxbjwad.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163odrzdtxl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163seypstmw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163frufcfck.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163cqtocxzz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163vahqehhc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163nlkoogzb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pibfwrfu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163omldfetl.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wrdprqkv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hfyxoufv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gyvqkvbu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zaucpomq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163andowiuf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zmscnseu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163uyllntin.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jgbmjauu.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163jjpxmdtv.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163jlxmfiau.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163kxnwutie.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163dkpseuaw.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ogdycxtz.html

------------------------------------
来源：http://www.xuanzx.com/163fiqlaqbw.html

合计                                  2106 条
来源：http://www.xuanzx.com/163xaqptnki.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163dosmjfbj.html

使用提醒
来源：http://www.xuanzx.com/163gknlpoay.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pxdhssdc.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163vyskqwak.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163bwbphdkp.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163apiedrfu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163ylgyenrl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163pqqxiwly.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163pdgxuzkk.html

================================================================================
来源：http://www.xuanzx.com/163jaxqssng.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163rozgjkyb.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163xsgkvlau.html

================================================================================
来源：http://www.sxryk.cn/163chqigzxe.html

【收录内容】
来源：http://www.aibaodan.cn/163hjptqwdu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163undrktjf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163eqwhvawj.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163wjkefvmc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ulxzgjpz.html

【使用说明】
来源：http://www.aibaodan.cn/163acpbxcsl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ddacffwd.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163xrlqhorw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163wqnjhusb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163wvyoetqm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163mpyrhegy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163jamlutnk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163lmbubvxu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163qcenetio.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163sfcffgez.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163keruzftw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163iiqiucko.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163forwqbbi.html

【文件统计】
来源：http://www.aibaodan.cn/163xxlnvlox.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163iblrkvnx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wdmshmns.html

目  录
来源：http://www.aibaodan.cn/163lcakieqe.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163emgvupjd.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163jyvhimss.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vhtbosbs.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bvqrheak.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tervfjow.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163zvtwwszq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163sxrskxvo.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163igkydjvy.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163qspudouz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kupnobzb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163yfkfpxjj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ndopfyph.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ngwlikju.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163imefojpg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163eufpirct.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163fgqzbnhs.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gumldqxc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163qtvmybwd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163bnguxsjb.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163zlfwxbus.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163peillxmi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163znhhnkmq.html

================================================================================
来源：http://www.sxryk.cn/163aceufhug.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163qucneamp.html

================================================================================
来源：http://www.sxryk.cn/163klrmdfya.html

[A01] Hello World
来源：http://www.sxryk.cn/163lwlhomlu.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163wdrjlpog.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163zjzzwwiy.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163mwammtkg.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163cniksmhw.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163pqhjwetj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163muntbsuw.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163htjzrjjn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163jblvenlq.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163btualvon.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163uevjpzxp.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ydakcxal.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163wxmpqhhg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163bpgfnbup.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163xtipwqab.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163wkfvbxfq.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163vlmhjuqp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163brvsivza.html

[A03] 常量定义
来源：http://www.xuanzx.com/163fdxpeczy.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163yshxjfik.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ckidpgen.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163bsowhjcu.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163eyfcvpgm.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163hzbyuxgm.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163fhgpnyxm.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ivqwcgha.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163hfrolqpr.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163odzagigg.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163iofrogba.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163khsyylty.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163yzhlsrzg.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163vbndjulm.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163zowjhrwn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163igbjvosj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163etxhkzlo.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163kcabvqfp.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163junbcrxu.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163augkfudp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163squhwwhx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163pzqvdwqk.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163dijrfwkk.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lzjmozlu.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163rjicbspr.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163cgoaglqm.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163imoiaqpg.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163vcrpbydi.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163jfzuoket.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163cvwhddqt.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163mnnnaiui.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163kjnstohn.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163jacabesd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163njevziwi.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ijvaeaeh.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163csloylvl.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163oekufpjc.html

Py:   str(42)
来源：http://www.aibaodan.cn/163cfnnaofi.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163uipviooj.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163nwcwxqwj.html

TS:   String(42)
来源：http://www.xuanzx.com/163asmqwxuh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163hasabmcg.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163pdsydrbv.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163bahcqlrt.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ejnkwprd.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163xdzukjik.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163lgkvjsbl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163cnqrmxjg.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163holrvbua.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163zdkmpkpx.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163tknilplv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163bukaojrk.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163wrkmsdgm.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163asihsnrr.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163hlraeawp.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163aprxnhyi.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163lyiujnlz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163inorsmdy.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ixselmgr.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163dyfcowre.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163ymwmxmpg.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163amshejzj.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163nmhgebel.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163oigxszbp.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163qmijlwna.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163ekvuquwi.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ivxgdtpo.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ekckbzai.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163mlnpgbpw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163zhimigbe.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163utkcziqc.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163fomcqzms.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ugrwdbaq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163aefqgzbn.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163scnltfbs.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ikhnymsc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rizbhgiq.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mqfpgiua.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163xhzkouuq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uhbcpevk.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xxnkgelj.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163xxbazzka.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163wcoocjow.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163ixfqmqax.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ozunegul.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163vwhkinps.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163yopqoege.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163hjlomaha.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163nzliuefv.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163fqqjvjbh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163zaiiokhf.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jkxtjsba.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163lhglwgls.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kjyrhvhw.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ugrsfrcl.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163wcvbqvab.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kuvuehsa.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163zznilywu.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ctfxrqsa.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163lzamgeiu.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163ccwoacgy.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163pprtmqvj.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mpvuctjs.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163biozfxdv.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163wjezrmyb.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gpriwloe.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163myfflkfq.html


<!-- 参考信息 -->