外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163rmqdcclq.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163sjlceggl.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163exwbkotc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vpbhxezg.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163pzeuecus.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pjsgbbgq.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163fdycdvkl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163iqsdrpeb.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163fncopxqz.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163yqehyqtn.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163fuabnoot.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ofbnngbj.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163hotykzep.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163xyzerkrv.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163kzvumxzx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ilhdwhmr.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ciuagdwk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163fjdlctgq.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163fzvlhnlp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mxaobphn.html

[U105] JS：节流
来源：http://www.sxryk.cn/163lhuizgwe.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163wkewchtr.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163djpwsyuq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163qjplnebx.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163jkiywjne.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163qdbtxppl.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163osjzvoyp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163nlupbvsb.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163qeeszjhn.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cvedvown.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163vxwzvgqx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163lmsephoz.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163gnhfsueg.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163jqebzhjv.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163yltzjzea.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163henvddco.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163wwbviydr.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ukkhqrua.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163nihqvepi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163torhzfpn.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163vfbudhsw.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163vplhoicj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163bbaqdxzx.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163rrbfkrjq.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163todeqwtg.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xjpxitob.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163knpvwnfy.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163huhfoael.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ivtfuktj.html

npx vite build
来源：http://www.xuanzx.com/163olybensc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163tqarzktj.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ecfuviur.html

================================================================================
来源：http://www.aibaodan.cn/163uvmpeffq.html

统计汇总
来源：http://www.xuanzx.com/163urriwhsc.html

================================================================================
来源：http://www.aibaodan.cn/163ootqtoaj.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163jbsctpqq.html

Python ......... 252
来源：http://www.xuanzx.com/163gfgqtpmt.html

PHP ............ 252
来源：http://www.aibaodan.cn/163zuebjhuo.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163hsiwpsqu.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163oncveeqi.html

Java ........... 212
来源：http://www.sxryk.cn/163jcsrtogt.html

Go ............. 212
来源：http://www.sxryk.cn/163zfqzarva.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163aomesytz.html

C# ............. 212
来源：http://www.xuanzx.com/163nifllatb.html

C .............. 30
来源：http://www.aibaodan.cn/163xmodydwq.html

C++ ............ 30
来源：http://www.aibaodan.cn/163qguebmlm.html

SQL ............ 90
来源：http://www.sxryk.cn/163ylplctzm.html

Bash ........... 80
来源：http://www.xuanzx.com/163tlsakjdu.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ppzzqtgx.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ynsngzma.html

Lua ............ 10
来源：http://www.aibaodan.cn/163mylnbbdj.html

Perl ........... 10
来源：http://www.aibaodan.cn/163rqriptrw.html

Scala .......... 10
来源：http://www.aibaodan.cn/163rpdubnkk.html

------------------------------------
来源：http://www.xuanzx.com/163xigeoadd.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163erhjyfqs.html

按章节统计：
来源：http://www.aibaodan.cn/163vlcasvcj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163isghdngo.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hhytovuv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gdhdqlux.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163qvnvohuv.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163nrcdqdsl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163uqasdvrs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nrqssskj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qbqxyswp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wipxbskc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163uzsfcnxy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dabewrcu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yanibwjg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uctowgfl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zuuyqifp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163maxaqueo.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dmoicfhf.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163nglqtfow.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163yquflklu.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163nguqrmgs.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163vjlpoysc.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163hjixyfdv.html

------------------------------------
来源：http://www.xuanzx.com/163vffbcrzw.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163xkfhitnn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hkfdwozg.html

使用提醒
来源：http://www.xuanzx.com/163kwhimqqm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zyuexszg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163notwtmgg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163sjuqwlka.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163zuociohs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163kmjzkdwj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163dofycmyz.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163tyiktcyp.html

================================================================================
来源：http://www.sxryk.cn/163bqudfsku.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163tfcdogeh.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163cnzgntxn.html

================================================================================
来源：http://www.aibaodan.cn/163nkhvcurw.html

【收录内容】
来源：http://www.sxryk.cn/163cwwibqhc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163costrtjs.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163zujtivrn.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163pivcssof.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163qdasgqyq.html

【使用说明】
来源：http://www.xuanzx.com/163qoldsgyt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163jyweuzyx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163mrrpjmyw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163oeulnwwx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163utsjcliv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163cqkfjvdj.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163vfznujvs.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163hiprrkew.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ysujsrhb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163nugqluxp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163vdvqnvlw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163pbbhlapo.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ueuwcprw.html

【文件统计】
来源：http://www.aibaodan.cn/163vcxjwzet.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163erqprzpt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wqqkrbux.html

目  录
来源：http://www.xuanzx.com/163hlovbhug.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bkllezap.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163laorupcu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mwnvivad.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163oilucgsy.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163nsypngrr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163kjgnyrfn.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163pdknojxz.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qnficemz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163yruivucc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qhghzjgc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163vbiebryv.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pixnhqpt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zoxdityw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zmhaoeoe.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163anxczfny.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163fmxseeds.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vjevepui.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163wktzxgdx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163mvzinavc.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163qbgxengl.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163iwhbatgw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163brsijsxs.html

================================================================================
来源：http://www.xuanzx.com/163tmhqnseq.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163brjogejg.html

================================================================================
来源：http://www.aibaodan.cn/163uoeyncgc.html

[A01] Hello World
来源：http://www.xuanzx.com/163xkwirafy.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163dpntrnyn.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163gqgdnvia.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163hbdtiktb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163kcdebqso.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163mvheaxdt.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163qqhflrrx.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163rsvfzkkl.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163cqwihmrd.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163latgsuab.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163migujsjs.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163nsoypbrx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163edrjqelm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dayfsbkp.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163fvahapox.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163oargkfiu.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ybcaaxjp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163hkggdloc.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163igbzjibz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163oczvvjuo.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163rlezfukr.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163koqsbwru.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163jebtjotz.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163esroeyqs.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163nbdbgwmc.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163mpgjmbaq.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163xnfjlxie.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163tddggtxz.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163rrxrigoj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163onfmszlh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163zethqrwq.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163xztrpvxp.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ywpuuhty.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163mkvtunmq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163vemgcsvk.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163dwupidst.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163ubaxminb.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163lejcksgr.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163xzmxzlmr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163iytbnduu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163bjfsdtox.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163otnzijxz.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fmcpreqm.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vfplwvrz.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163tuinjtzl.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163fbzisawk.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163urqbqbvo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163terrzlza.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163rwrcyijc.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163qqnfuxkb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163buvmwknc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163nqjihyab.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163vpdhuoqt.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163qwkcasjp.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163samirhjh.html

Py:   str(42)
来源：http://www.sxryk.cn/163eocwyllp.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163kgdpqmwn.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163kjazuwci.html

TS:   String(42)
来源：http://www.xuanzx.com/163ildvithn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163fqbowetk.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163otwehiki.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163djxtxuip.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163mvkbbcpf.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163cacygngv.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163askflxur.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163wtyzzcii.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163lwtzufps.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163cafnvfmh.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163cdvibaqz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163kwiqutub.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163xtnmyqht.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163zcfxngru.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163rgphmeea.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ggnnznpy.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163evjmguru.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163rftbfvmc.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163iixsxbdi.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163naelzzqa.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163nkuuvnck.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163hgmtlpjs.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163mdkirgwb.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163ypjzmjty.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163xywbhgcg.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163adoyqjes.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163afifyspv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163jdcoooml.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163bargnzhq.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163htojmlxr.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163vktkcqrj.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163nmdiyiup.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ezubdtls.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ptkuhftq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ylqskard.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xuppqmih.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hvwxpbbd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jwwlnxdi.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163wnspigjm.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sdjnptkq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lkxndzew.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163eyhosrbr.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163abqsqwcx.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163fttyhlou.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163lfsbafqy.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163hmrfizfu.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163jczjjumz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163ztodazan.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163eathtahd.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163zojchtqn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163sueziwok.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xgxhtbsg.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163xqtrrqlj.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zdojlijw.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yvjgvsnk.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ywbxhrhi.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uvnndwkg.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163yyidnomf.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vfntblfo.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163bpppuzce.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163akqefbro.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163oxdhegza.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ltdstfjw.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gcjdhdsk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163wxvzhxrw.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cwgpyoqd.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163vwlxzdlc.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163frqjssdf.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163elisvziv.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163yyiwvvqs.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163dhtwqjws.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163wngvootx.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163yfbzvhqp.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163zuncxzds.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163tzdlrrjy.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163gmjebeze.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163okmqdlru.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163qooegsxr.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163cbnjbenw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163thcveffg.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163khrmyjkf.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163spunvfeu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163gdjmyyfv.html


<!-- 参考信息 -->