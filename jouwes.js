外链999!wailian999！

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163fluvzyqu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163uxsfyjxd.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163tvajckis.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ybagvmfu.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163antcbxax.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163oblgiqqp.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163aywfxpjk.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163cwxmpghx.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163hxpwxahy.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163rqepxkdf.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163xqmtkodo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wxekpvac.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163cfmnjwhd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lvvlsuoc.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163oepegovw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163uquimhxm.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163cfmlwiiw.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163wvefktlx.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163zjhupdqj.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163zyexkyaq.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163jzvwbgzw.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163wavurglq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163wqkqygmq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163cpeebdyi.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163nwrmogpo.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163bmjgkugs.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163aduickgn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hqpideek.html

[U105] JS：节流
来源：http://www.xuanzx.com/163hngiewkk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ksbhqmpi.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163imqkzunq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163tprndqbf.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163xrgdplqc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163pqavtlcj.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163wtdopnkh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163owqbklwc.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163adumhgef.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qpahtxnq.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163hmnruguu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163bdbiqksc.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ptemzrqy.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163cajgbsbr.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163lzweknbk.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163oqomvwve.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163owarisua.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wqknlydd.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163iilnhkta.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vhytykjk.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163rudjkocv.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163qubmekue.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163dimpspee.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163jcmwwvzm.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163dmrxjjys.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163hgmpebrv.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163athygsft.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ifhlseat.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163obulpmfn.html

npx vite build
来源：http://www.xuanzx.com/163jzrojntc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ryljoley.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ngoadtqr.html

================================================================================
来源：http://www.aibaodan.cn/163pfmupkzz.html

统计汇总
来源：http://www.sxryk.cn/163hbcrbqrd.html

================================================================================
来源：http://www.xuanzx.com/163vifkvyyt.html

按语言统计（条）：
来源：http://www.sxryk.cn/163coriiwnq.html

Python ......... 252
来源：http://www.sxryk.cn/163gquiqeib.html

PHP ............ 252
来源：http://www.sxryk.cn/163vosyhync.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163qadfmpow.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163mmpedvls.html

Java ........... 212
来源：http://www.xuanzx.com/163vxqtyzsz.html

Go ............. 212
来源：http://www.sxryk.cn/163fewbjhja.html

Ruby ........... 212
来源：http://www.sxryk.cn/163okfytoto.html

C# ............. 212
来源：http://www.aibaodan.cn/163zlbuvmub.html

C .............. 30
来源：http://www.xuanzx.com/163dlpnzvgi.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wpxicaxf.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ihtdgfnr.html

Bash ........... 80
来源：http://www.aibaodan.cn/163mjptlaqt.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ypeyrjdo.html

Swift .......... 15
来源：http://www.xuanzx.com/163oxsnwdrc.html

Lua ............ 10
来源：http://www.sxryk.cn/163ourpsygw.html

Perl ........... 10
来源：http://www.xuanzx.com/163xzqqwhdg.html

Scala .......... 10
来源：http://www.aibaodan.cn/163zvliuzng.html

------------------------------------
来源：http://www.sxryk.cn/163wfdmnzhc.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163kaoeioah.html

按章节统计：
来源：http://www.xuanzx.com/163uowpswlh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163yiyuteaq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qnvslmmb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ngzismkz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163htrbtpyk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163zzbrqrde.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163asuzvexs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163csjirlnw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163oepdrpgs.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ozcgyihp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mznfdbwp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gktlfasf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wuqcracj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163occvvzdk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163jduiljjj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163shwugjta.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xryhmsdu.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ghkoebvw.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ftvoogut.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jexkjuid.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163srtbxqci.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163lvlbhmnp.html

------------------------------------
来源：http://www.sxryk.cn/163vskdpyta.html

合计                                  2106 条
来源：http://www.sxryk.cn/163srstqtxr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163iuphtdvv.html

使用提醒
来源：http://www.xuanzx.com/163htkjtwdt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gcgpczwq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163yggieofj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163uihdihlv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163kjddrsnk.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163krfgoaxa.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163qlfuagwa.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163wnyjwylp.html

================================================================================
来源：http://www.xuanzx.com/163oneteuph.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163cpflxjbo.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163qrgctvpd.html

================================================================================
来源：http://www.aibaodan.cn/163erningiz.html

【收录内容】
来源：http://www.xuanzx.com/163xeyhhoky.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ehktgxve.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163lkcihezb.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ctsjrpsh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163qspdlxhn.html

【使用说明】
来源：http://www.xuanzx.com/163jeshgbpz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ubyjhovu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163tecrummo.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163xujsmony.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163mlpuibcv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163axdfjzap.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163nxiotuqf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163vaqfwrmq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163tssfzgjd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163hzbsegtw.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163itedcjxv.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163jhppzzoc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163qwatraby.html

【文件统计】
来源：http://www.xuanzx.com/163omcjmwfq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163kyzntlty.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163uzylryko.html

目  录
来源：http://www.aibaodan.cn/163kovzuazd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163sdjpakqy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163sfhwrcuy.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xoqvvxyk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163byemluhk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wioyzpni.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163ojifrjyx.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163tmyftbhy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wmmmrdgn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163giqvdvxe.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163oukthbxg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pfljpoyr.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bwzoaimk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xqlfpktc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ikqanjue.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163murvxgcy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163mobxeoet.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tqoalbex.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163whyvhlsm.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163zlgklqhv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163pkhalhkb.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ewvqfxhe.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163lafgnwwj.html

================================================================================
来源：http://www.aibaodan.cn/163qxzcqafe.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163qpcgeeel.html

================================================================================
来源：http://www.sxryk.cn/163zdrwcjgd.html

[A01] Hello World
来源：http://www.sxryk.cn/163oqyzlfnh.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163cwbvdipx.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163bdzplpon.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163wahoueqh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163jvevnwji.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163xpmkjmza.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163yghbbyhd.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163grfyezes.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163hokmejpl.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163alvbdonc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163pjxmroxc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163mkvcgpsr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163fzgqgzyc.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163qzcvikqr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ctyixaub.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163gwcrmxur.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163wimfylsr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163vseqzhsz.html

[A03] 常量定义
来源：http://www.xuanzx.com/163lmbffhoz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ajbdfvrd.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ndvtpndt.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163jaqhgssr.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163szbibxdc.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163qkozqpqk.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163boxumkaj.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163zyehlxuc.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lixqvcir.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163ccnuwahx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163cektmaug.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ilrwfbfy.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163enhjjtgz.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163qbhjisof.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163acsgqxir.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163hjobsdpc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163psadknrw.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jmsmceby.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163zfwyfkcq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163buquygeh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163uqizxgqs.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163bzmoxqpy.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163layjbrgw.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qtnjkupk.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qzbmefch.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gefrncnl.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163iaydasuh.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163efbmhhpk.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ncgigebk.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163lwjpekoo.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163bifueqqt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163rkklzquu.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163dlxsjqut.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163dpvtxstt.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163zhmgqaha.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163qpagcsxs.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163xhrhkflj.html

Py:   str(42)
来源：http://www.xuanzx.com/163worxlqrh.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163dswfyqyd.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163cthfirmm.html

TS:   String(42)
来源：http://www.sxryk.cn/163qlczjmbd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163gigqppim.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163onhmxitp.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163keqjnrta.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163pukdcqkj.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163tzqzskee.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163nccegezx.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163itxjdyjq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163jnpobntc.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163tfydaxaq.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163fxjozpcw.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163mwgfnqzr.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163sszxfseq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163dknfaopl.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163xhkyxtux.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163sprsmqai.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163aygwjycb.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163yggqbpsw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163gncaggho.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163hwiotexf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163gufbafyx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163dcivxmsf.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163wzczrdmz.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163kvvtqoil.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163jzjdvxpe.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163vlqeondy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ulqzeugz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163lxhwzjdz.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163zonnoxcf.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163cdkjmwxm.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163foppyaws.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163bumphcyn.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jawduqil.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ehqsqarb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zpsxjzcy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hynircnk.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xoswjtgy.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zibylehf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163vpwhllxe.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wrwavgnu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163irwwdfar.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163dtbfkurb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163fstebppm.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163hwfbojwf.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163cvfhyyzl.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ipakcyhq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163hizsbdjw.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163kgsfpexn.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163bpcdmcqe.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ztfvzoql.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163mvhmnfjd.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xnxklono.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163uhwynmlt.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163syfawdsz.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fwegscil.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163mdyhiyyd.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jqibnhpm.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163kqcbrjja.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dgxcwiex.html

[A14] 注释写法
来源：http://www.xuanzx.com/163aibmjwmw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ndtrrnko.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sqdnfzxe.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xtwrhgzz.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pwdlvabg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163tqmaucfo.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163whihjwun.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163vutcqelz.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163grimxhow.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163qphidrbf.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163ywcwutva.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163sylmmdic.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163muzvhcir.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163wynimjwm.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163wdjulfvy.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ovnhajrn.html


<!-- 参考信息 -->