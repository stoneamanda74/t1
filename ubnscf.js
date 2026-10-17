外链999!wailian999！

[U85] JS：可选链
来源：http://www.sxryk.cn/163mrvhthfo.html

a?.b?.c
来源：http://www.sxryk.cn/163cjavwjji.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163uclbyquu.html

a ?? b
来源：http://www.xuanzx.com/163ectuazcc.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163gxsusjqk.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163prtxtpvq.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163xvynulxi.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163fsnudchs.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163mydleimg.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163mipxkols.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zuphgddl.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mqkgexcx.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163wwwgfzjt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163jgequntr.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163uayvejgf.html

structuredClone(obj)
来源：http://www.xuanzx.com/163jwhlgnyj.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ymiuvyey.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ajnhpjaf.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163cwnxxmef.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163sudkzyig.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163avlpzzrv.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ceqmtilz.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163omvfhbyh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ydnfauvg.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163vmhgukwx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rojhhzis.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163wnwwufsu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163tewanlmw.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ngrqxngn.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163lzamjeqa.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163nuokuwqz.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ineztltr.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163uoonwfec.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163pjuvjnxx.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163xhtzvjca.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163swbioemx.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163wpdoyvji.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163cgjxfjyz.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163mlagurys.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hpgsenqn.html

[U105] JS：节流
来源：http://www.xuanzx.com/163icbwoubt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163yvtjnjzg.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163yqjzoqpg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163acdspfdg.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163xughtblq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163dyvylnms.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163czfqgeqw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163fzudvefb.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163dhumuqbb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163roafzsgv.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163dfexlmlr.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163kputmzqx.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163hmfxhajz.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163cdhyhnhm.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163htxinidq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163yhcrrtrk.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163maenskxa.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cnaozlub.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163zearskuq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163zupzcebw.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163xkslziuu.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163moqlptkq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163pkcxrgcw.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163azhyzqge.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ppopjzjk.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tzqybjrv.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163annbsrjz.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163gagujcxw.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163hbholvnu.html

npx vite build
来源：http://www.sxryk.cn/163nyileizf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163rdxqowxj.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163yszaxuzg.html

================================================================================
来源：http://www.sxryk.cn/163miogiznr.html

统计汇总
来源：http://www.xuanzx.com/163ihdeursi.html

================================================================================
来源：http://www.sxryk.cn/163pkrqragr.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ugqtrjni.html

Python ......... 252
来源：http://www.sxryk.cn/163mokvtiif.html

PHP ............ 252
来源：http://www.xuanzx.com/163lduzmact.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163zytawukz.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163cdmqtthd.html

Java ........... 212
来源：http://www.sxryk.cn/163mngeutrb.html

Go ............. 212
来源：http://www.xuanzx.com/163ywxdrred.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ikvawrge.html

C# ............. 212
来源：http://www.xuanzx.com/163rskkuyom.html

C .............. 30
来源：http://www.xuanzx.com/163pkdwhllv.html

C++ ............ 30
来源：http://www.sxryk.cn/163rtofhtsv.html

SQL ............ 90
来源：http://www.xuanzx.com/163jzhweobs.html

Bash ........... 80
来源：http://www.aibaodan.cn/163tprhdmdf.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163qwukwrdo.html

Swift .......... 15
来源：http://www.aibaodan.cn/163bjqcvebb.html

Lua ............ 10
来源：http://www.aibaodan.cn/163vjsmylud.html

Perl ........... 10
来源：http://www.sxryk.cn/163alckpeak.html

Scala .......... 10
来源：http://www.xuanzx.com/163twrsydvs.html

------------------------------------
来源：http://www.aibaodan.cn/163kyqocfyg.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163zogensfq.html

按章节统计：
来源：http://www.sxryk.cn/163hyuitehu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kbezexfv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ejeajbet.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163wgahgzub.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qabwcvog.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163cjmazhsf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ndbhiglk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pbihpjgo.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ftgfhihx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gyjfbari.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qlycowbh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bkssnlnf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jtznsgav.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mbosalgx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vqunftjc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ldbslzkm.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wgnodwac.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163myxdddzi.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163nyginvol.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163wipzwmwr.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163heikkwkx.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163mgxiwbpc.html

------------------------------------
来源：http://www.sxryk.cn/163yjbmuwzg.html

合计                                  2106 条
来源：http://www.xuanzx.com/163iajrncms.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hsuducoq.html

使用提醒
来源：http://www.xuanzx.com/163ktlmbfkr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vgsakbek.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163olgnmtrc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163hicjikcd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163aivkkxby.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163lrfxdhqp.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163mdkscgjn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163rjvvpatp.html

================================================================================
来源：http://www.xuanzx.com/163fmfnnmpi.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163fhryhrkv.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163szsqerpi.html

================================================================================
来源：http://www.xuanzx.com/163mhmnmzpp.html

【收录内容】
来源：http://www.aibaodan.cn/163bqdiuiyl.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163yqpnkrhd.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ytwmgclj.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163jmgzhxus.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163tnqjcqnd.html

【使用说明】
来源：http://www.aibaodan.cn/163ftqicigp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163fzkkuzmv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163aqzndlnu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163zvpownkg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163matxtemf.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163edxnnnlr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ixzntdbt.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163dhilfepo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ehonqaao.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163sfnulgfg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163vlbwgsro.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163oajccbkb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163rbahhleu.html

【文件统计】
来源：http://www.aibaodan.cn/163ebxgonrt.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163gojnncim.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wgxymlez.html

目  录
来源：http://www.aibaodan.cn/163zzvnacms.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163grdlqglv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qvngjyra.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163humhdyfs.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wdowkpjo.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163teaqgyie.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163kmpsiazk.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163lszhjdgd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163unznyhze.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rpccndhg.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163reyemoir.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163kjayjzei.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fraflurc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163icagnccd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ivzzakgr.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163sbdozaql.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163hlzigskk.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tuwgtqcs.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163aunaktlf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163aehkolxk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163jsmmcgjd.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163opqhltxh.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rzpflxdq.html

================================================================================
来源：http://www.aibaodan.cn/163blwaezph.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163rbrdlfbs.html

================================================================================
来源：http://www.aibaodan.cn/163pfgaibzv.html

[A01] Hello World
来源：http://www.sxryk.cn/163vecpfrqk.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163dzghxdyg.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163uedogmwl.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163xatsavqi.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163kbxoyrhd.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163tkqwvojv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163sncmunlh.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163ebitlfmz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ilvvdwin.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163obelxzfx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163qrfhkscr.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163vnblhken.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163jtxhpcwl.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163zonrgdwj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163graefbgu.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163bmxhuinn.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ojkdulgk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dugytnob.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163yweiueih.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163lqldspln.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163qamkghkl.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163bqdsqukw.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163noryojdg.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163fnywhfjz.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163vgetddeh.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163satmwmlt.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163bpyyyqvr.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163ehnkhkmq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163xcrqlirg.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163joufzjds.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163lwmnmlwx.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163uxmlsqfy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163zbczulcm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163jxckhhgq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163objzbeqy.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163hoceovyx.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163oglyyhuc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163chaldmyc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163qxspaakd.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163vwxrlpiq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wqxemnwe.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163lfstppge.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163znervmyf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ajtyguck.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qtncwkwh.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163qulxfrfx.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163zdgzqlan.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163bquokfnd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163bxypotwc.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163iiivpuln.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163cityvyrp.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163acpiigaa.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163xvrlagyi.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163uajuzomg.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163hilyfwgn.html

Py:   str(42)
来源：http://www.xuanzx.com/163zmrdyeop.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163hdjxpjhp.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163elplkwfi.html

TS:   String(42)
来源：http://www.aibaodan.cn/163mlfjqrjf.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ymmemiwx.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163cckkuwhp.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163cgppiyyn.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163szqqbkju.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163fhkcleib.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163rrgsxtqg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163hzmgxfjh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163skmfblxh.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163dfhhrela.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163qwlhlhnd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163rgpslqiw.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163mobblsgf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163zdyhambt.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ixhysamw.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163wiaxplno.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163xbzhjcki.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163cossuchz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163nshffzad.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ayfemksn.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163joscwimr.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163hierftgt.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163fzdhvlin.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163xacbcxlc.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163lqhyelma.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163rqwqekfo.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163wraawhgp.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163sghlsxqd.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163iykstqzx.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163iexubdlo.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163xmyrmqrf.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163uodihlhf.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163lpingorf.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163vmqaysfl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ztdrpuqo.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bodzfjxr.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xsbgikyg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uppcjpvk.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163cybfnplw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pnxkiabu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ntntqotc.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163pgjghzrg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163dhrgbexm.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163krvkrwey.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163sijdbxmj.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163dcocfcga.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163mijjydsa.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163gejsebyo.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163obhbtalc.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163qfaircib.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163znamwvxp.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vmalfrqs.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163hhihxznp.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ojgcfeeg.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mrvhgmgx.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163rpymyjfl.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163odsqiwxk.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163iettgkkg.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163eizmtowl.html

[A14] 注释写法
来源：http://www.xuanzx.com/163eiwatvmk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163zanafdpb.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163mpvqrhfy.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bxxueguj.html


<!-- 参考信息 -->