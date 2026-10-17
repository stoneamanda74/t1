外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163tvlepmtv.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163tfthkrfg.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ddvsnelu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163aqlwycix.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163riqqozvl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ehmtiwtt.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163udccpyaw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163lsussqbb.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163mznnyrus.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163mjmzvcqj.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163predbvfc.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163zwdrkjkt.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163uysmkzcg.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163lfbswgdo.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163zplczhxh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qwbanscb.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163kxhixjya.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163jewqdhed.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163crwznjho.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uplzphov.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ybiqyvdc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163urippvmm.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163giqbatrn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163zdmrbkks.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163cscdwwtg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163liwrnihf.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ijecsflu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163znnqwqob.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ybvowidb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rrvbabia.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163bzkdzbss.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163clzjoqrz.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163lnrogojd.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163okgprumv.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163xgzrqpui.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163mxtgtpvm.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163qswbzuyg.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gucuphgr.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163hwbtnbvt.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vejxfkah.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163gxfbrhjv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163qkaxedyq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163exxbvpva.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163cxubxwhl.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ijutbgxx.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mwhdniec.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163vueofgmj.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163hbceniwh.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163aruonpmq.html

npx vite build
来源：http://www.xuanzx.com/163cbuqlpha.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163deiywtjj.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163wtswbfko.html

================================================================================
来源：http://www.sxryk.cn/163yhlepihz.html

统计汇总
来源：http://www.xuanzx.com/163ltximynd.html

================================================================================
来源：http://www.xuanzx.com/163ucdkyfmu.html

按语言统计（条）：
来源：http://www.sxryk.cn/163azspjuzo.html

Python ......... 252
来源：http://www.aibaodan.cn/163xiboadmq.html

PHP ............ 252
来源：http://www.aibaodan.cn/163wtqxgzks.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163rydcggjm.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163enkukgys.html

Java ........... 212
来源：http://www.sxryk.cn/163ofawrfid.html

Go ............. 212
来源：http://www.sxryk.cn/163jstbqlqd.html

Ruby ........... 212
来源：http://www.xuanzx.com/163mmqhcpfm.html

C# ............. 212
来源：http://www.aibaodan.cn/163idcljbce.html

C .............. 30
来源：http://www.sxryk.cn/163tughfhio.html

C++ ............ 30
来源：http://www.sxryk.cn/163bjjfoegq.html

SQL ............ 90
来源：http://www.sxryk.cn/163foofzpzx.html

Bash ........... 80
来源：http://www.aibaodan.cn/163pyfffxxt.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163yfzahmgc.html

Swift .......... 15
来源：http://www.aibaodan.cn/163lyctmgox.html

Lua ............ 10
来源：http://www.xuanzx.com/163wcvbaiiz.html

Perl ........... 10
来源：http://www.xuanzx.com/163yrkcvgce.html

Scala .......... 10
来源：http://www.xuanzx.com/163qhafotnk.html

------------------------------------
来源：http://www.xuanzx.com/163rhpwnuzq.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ykwbpgjm.html

按章节统计：
来源：http://www.aibaodan.cn/163umwcoube.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163vlbrgknh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163brbqjhof.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163nhuhprtu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163reyatrgl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163kttwfesi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163swezlpxa.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vfzzeuix.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jesdwbqj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dqtjgliq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ehwbdawp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fmaevxwk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rkyngtgl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163eblotutg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163qiutaggn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163nqzfsenv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mwqkaulf.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163awiiynfq.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163foiqmjzt.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163bqbwqrtm.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163trbihchm.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163msqftpep.html

------------------------------------
来源：http://www.sxryk.cn/163aucselit.html

合计                                  2106 条
来源：http://www.xuanzx.com/163vyxhcdio.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jlzmnlmx.html

使用提醒
来源：http://www.sxryk.cn/163izbhfibv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163oegjpamg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163xkpqzufk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163gtudkbgu.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163lzjweywo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163gkbpkipf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163waibbbjg.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163sfvvnknq.html

================================================================================
来源：http://www.aibaodan.cn/163baqwbyks.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163vaohzywx.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163fhczhxgw.html

================================================================================
来源：http://www.sxryk.cn/163olxxuvwa.html

【收录内容】
来源：http://www.sxryk.cn/163ptoannfd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163tcemwtgn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ivyheucb.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ophuyzvn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163vwtkhpra.html

【使用说明】
来源：http://www.aibaodan.cn/163xgrkgnqm.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163bfbijpvi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163pzoqxyeb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163wkfayjyk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163yuzpkvow.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163xozlxzwx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163cctognhy.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163cebuqipb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163yvgqkwjg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163zxwadnyb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163asuhirnx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ztbnlhli.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163zagrvzno.html

【文件统计】
来源：http://www.xuanzx.com/163wcsmiwia.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ouczezhd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dpvopczt.html

目  录
来源：http://www.xuanzx.com/163mjncfxls.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tgoikrjb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163crmfhukx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163kiaewxkr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163tpmukunz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163epvohtbu.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163dgoczmkf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163exxtiofq.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dzhglbnl.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163cwakpkei.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163luuevoml.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lcetjtfn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163bbhyekvi.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163utyhkjsm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xbkkghyj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vmfkypuw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163phibgyqt.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jfwjhedc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163hhbsnfgn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163skxagdqf.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163gvaswrks.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jzzmetkk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ebzbapqu.html

================================================================================
来源：http://www.aibaodan.cn/163zedfelkr.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163slcuivyk.html

================================================================================
来源：http://www.aibaodan.cn/163etfxoomt.html

[A01] Hello World
来源：http://www.aibaodan.cn/163uzumhcpf.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163zxosngzj.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163vizmchuj.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163enfojspm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163pgwedixl.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163ttuvfcfs.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163gnzuhgkx.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163qbttdrzu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163kleamvgt.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163bshoryjb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163kknejssm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163qvvssevk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163bxoteeui.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163uqxjpznl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163rnudmkaq.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163rlyywtwg.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163vzicykls.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163flkljhxx.html

[A03] 常量定义
来源：http://www.xuanzx.com/163xpfzayae.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163otoohjjz.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163gzzsykna.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163iqwrytkt.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163brollhpv.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163onglbkmq.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ciljason.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163mivjgdxb.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163clqnzraw.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163zslxufnd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163iejkqcvz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ivchwysl.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163jeicxibx.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163vmhzvjkj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ercxojne.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163muqighvn.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163gvscwnkz.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163permhwyu.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163cluwdlto.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163kicfgkar.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ftbnsunp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163lbqbrhru.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163nzickqct.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zjuyhwsq.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163eciyjqsr.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hlavqfhn.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vegcsfxb.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163eikewkur.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163twxxpahg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163zvgtyovk.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163cbvbaezy.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163exohngzb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163kmmyazze.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163fhlxiopn.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163adpyergr.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163krehamjh.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163asohgisp.html

Py:   str(42)
来源：http://www.xuanzx.com/163jawicfsb.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163rgghlrmg.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163aqzdfmqw.html

TS:   String(42)
来源：http://www.sxryk.cn/163vvoaiggr.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163dfpkhugx.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163hswcdwnl.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163vufgqxqw.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163waevvdws.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163oceizesd.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163eyqjydup.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163bnnyyltq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163snpnasdm.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163mljghjsb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163wteejqcc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163wglvgenr.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163lirdnqpp.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163kobbkmav.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163jviryzts.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ahdxqcbl.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163pygnasyv.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163qrainqnf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163hcgelczn.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163yyodxpih.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163pjgwpajn.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163eobyikii.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163mgzzvqdg.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163jyyniybg.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163dxoygkzc.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163shmzvgtd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163mowtiaqy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ijsiqlhc.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163nuijqjpu.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163anwrnxea.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163vohypccm.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163jsbdbxdi.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163rfaptgle.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163wjhpwmhj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gwtwhjqn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vlkmvnrr.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163snkjfmkm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gtoabicn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ddtvdoko.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ixsrhswh.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163iiyaxsup.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163iobdtymh.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163uezppiog.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163peafnjoi.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163dzwydblu.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ufpqtohc.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163yoznqwxh.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163bqzwjrjj.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163qrxrjqdq.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163gyxnequo.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163uoitbqmn.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fookoxcy.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163bbfqzicn.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163shgezfvj.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vhffmpms.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163tofrkhrt.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vwrzrmld.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163mqplrqcx.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bktnsrwu.html

[A14] 注释写法
来源：http://www.xuanzx.com/163cgcriiug.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163iwhixkpb.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ehedczxg.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fekuiphm.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ncfakgfl.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163pggdnree.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xzmcqyfw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163iaqeehlb.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gattkozj.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163zkphfned.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ilzgquge.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163estpdgnr.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ckphnesj.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163papbrmyy.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163cmwktgcj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163mwjqrpim.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163ngxzaoxo.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163dprqpyib.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163uvzpshuc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163svufvhrx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163fftvwtcy.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163yixvryfo.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163thkzclaf.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163jyeztecd.html


<!-- 参考信息 -->