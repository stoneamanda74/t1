外链999!wailian999！

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163hjzbnsef.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163cuxqyxtt.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163aesgmcby.html

structuredClone(obj)
来源：http://www.sxryk.cn/163cvinpgpj.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163drnkvkeb.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163lxmlevml.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163tavswzxa.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163qeahmiht.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163jomfkaqi.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163shwseehc.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163svdhxwbw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163agdbsonl.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163pgspdmna.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bibnkctq.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163iefwekhz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163eotzdabx.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163kyphdjay.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163jffuyxiy.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163okohvnui.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163revtttbf.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163duizviqv.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163tpnaljln.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163fknaqaqd.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163gtlxgupf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163vhdcivvh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163kpnpeqjt.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163oibykuvq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bzptdsin.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163kabvppnp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163fmtykqep.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163eqytbava.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163mmwrzczo.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163vvkgotkq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163zmnvnsnn.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163kiakiofl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163lhdwgypu.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163fidsyvsk.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163nihbsegf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163dxpxxrgm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163bpaywony.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163dhzwhqkb.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163nvjyhvju.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163llbzipuj.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zvsrgkme.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163caoagunk.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mgwohfbx.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163gtyeiejw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bmumctjq.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163wdierbxq.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163rxrqeock.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ytiljjmo.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163qesaeias.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163twcjuiby.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163rkwqagjw.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163jwowytfg.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163hhftdvpl.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163tyrduebv.html

npx vite build
来源：http://www.sxryk.cn/163ehjzlgib.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ajfnxzlr.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163lcpszgqw.html

================================================================================
来源：http://www.xuanzx.com/163kwnmetfp.html

统计汇总
来源：http://www.sxryk.cn/163jvxqjdbu.html

================================================================================
来源：http://www.aibaodan.cn/163yfgtwmus.html

按语言统计（条）：
来源：http://www.sxryk.cn/163hfimkpmj.html

Python ......... 252
来源：http://www.sxryk.cn/163lbnxolnm.html

PHP ............ 252
来源：http://www.xuanzx.com/163fmbmovja.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163xqhwdepn.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163drdmcgaz.html

Java ........... 212
来源：http://www.aibaodan.cn/163eoetifoe.html

Go ............. 212
来源：http://www.xuanzx.com/163gpltsgzb.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ezxgzknt.html

C# ............. 212
来源：http://www.sxryk.cn/163sesponwe.html

C .............. 30
来源：http://www.sxryk.cn/163tuagorni.html

C++ ............ 30
来源：http://www.xuanzx.com/163kqryfaqf.html

SQL ............ 90
来源：http://www.aibaodan.cn/163kxufdfti.html

Bash ........... 80
来源：http://www.sxryk.cn/163ardfsdqb.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163uqtxetxp.html

Swift .......... 15
来源：http://www.xuanzx.com/163uwkqktrw.html

Lua ............ 10
来源：http://www.xuanzx.com/163gijueygu.html

Perl ........... 10
来源：http://www.sxryk.cn/163rfejkqen.html

Scala .......... 10
来源：http://www.xuanzx.com/163ogmdgvcx.html

------------------------------------
来源：http://www.aibaodan.cn/163ylcolcwq.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163aoozjdwk.html

按章节统计：
来源：http://www.aibaodan.cn/163zigtekye.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hauqnuaa.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qofnpufh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163motmxxup.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163gdkgeuar.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163sflwghvc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163lwbdibjo.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ilydymcl.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163yzoylaai.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163alhvlbik.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163amsfmlkf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hqteiojy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163buyrodwh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ylpzetvc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163itjfmggb.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163gmawfazd.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bnmxzyho.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163bgaofhbc.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163hfwmybtc.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163wmqvwskr.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163nnnjjqjy.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163wihywhlf.html

------------------------------------
来源：http://www.xuanzx.com/163vhpaalgz.html

合计                                  2106 条
来源：http://www.sxryk.cn/163ccdcpxiw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vkixechk.html

使用提醒
来源：http://www.xuanzx.com/163csfshaog.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xchqzrum.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163xrjsmlhy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163ksmbxaqp.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ccyegrin.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163orwfxgxb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163kxfyvofn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163aocrncyj.html

================================================================================
来源：http://www.aibaodan.cn/163llafvmqv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163axrpyafk.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163mozgojwa.html

================================================================================
来源：http://www.sxryk.cn/163bywhyzyf.html

【收录内容】
来源：http://www.aibaodan.cn/163xutxqmxb.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163dyonhswv.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163rlabdfdo.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163lbzsjbnc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163dutnfzjt.html

【使用说明】
来源：http://www.sxryk.cn/163hdmkubqe.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163agnvgodr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163euiuzjws.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ufkwkjvf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163bjldhiyd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163wfvqreua.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163wqsjdrrk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163fdfxbdwx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163rhdecpyl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163clstufil.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163haxdsuhj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163oswsnaln.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163mmldvwiq.html

【文件统计】
来源：http://www.aibaodan.cn/163wznsdoxp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163erlwbrjp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ewciytlx.html

目  录
来源：http://www.xuanzx.com/163qbwxkevj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163njolwanv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163aasdylcy.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163yxohjqde.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lbafdpsi.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dctqyert.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163zvrfwzut.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jhlnapqk.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ooweeucb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163odufnvcd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pgfujlxb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163boitsvvp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163iyhirxzt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163okzfcgdn.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qkgwjuba.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ydozzsrs.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163yaoabuon.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jrexevco.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163nnmavqhw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163pzfvegxd.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163obugkgae.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bgedwzur.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lqlfsuef.html

================================================================================
来源：http://www.aibaodan.cn/163vddtnbpm.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163eezfylsc.html

================================================================================
来源：http://www.xuanzx.com/163rbohtvxx.html

[A01] Hello World
来源：http://www.xuanzx.com/163qoeuaqql.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163wkbzvbay.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163kilabyes.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163qusyaafu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163cxckjhes.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163izlmatrk.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163nlssikwu.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163iowxwzjv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163pglkghtp.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163cjtmifid.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163meaiwpax.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163luvmypbz.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163hmjjbkqx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163lpfbbcmg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163gfsqgsqd.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163lcvyldmv.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163zpjqlnkt.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lkizjksh.html

[A03] 常量定义
来源：http://www.sxryk.cn/163wqmgelxt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163omprqewa.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163eccbikzs.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163bnarahts.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163sbjlmqti.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163vrpynglo.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163tiqxkupf.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163xyeoydbd.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163wmyxtpbm.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163cbmvhuxg.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163qphrcqmj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163stfqziyb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163fgmrlndv.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163weectubc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163qvecddwx.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163sbyflmmi.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163oprgitvf.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163pjozskme.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163lboqojns.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163lxqlizpz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163sphllamr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163adrtlzop.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163tmlfsdhr.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163cseueudh.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tcqxtzkg.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dwlfgjfv.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zvrpxwws.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163dulpanyv.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163dmmhowwp.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163rtncuwdp.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163uzoaqnka.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163bkqzewqh.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163skuheyuv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163rpsocubt.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163dgqatdgw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163fqtmialb.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163yobvconq.html

Py:   str(42)
来源：http://www.sxryk.cn/163tgfxagsq.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163rylboihn.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163zyiowmey.html

TS:   String(42)
来源：http://www.sxryk.cn/163qkaxlsms.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ibyzyybv.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163hoohrhfa.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163gppvjwjw.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163mfspubck.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163vgusqhvw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163ofomjflo.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163lvqgfwde.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163bhovhxzl.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163xwbcwlcr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163fzvwvicq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163jmpmwrng.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163xzccfkqx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163jtzzzplo.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163syyqgjjh.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163fajcmqwq.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163yjphnjro.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163acdyaojg.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163jcbweqhb.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163rgthoajn.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163kezmnczb.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163nzuajybx.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163phrdausq.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163mgcpkyel.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163sibgzeqf.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163peuscdmm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163xjodcpoq.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ukcoralk.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163kvengnth.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163lkhocoie.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163oqnzdndm.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163mvbiiiet.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163htkungmv.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163lwlylczb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163szjkzuwz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rpysyiyx.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163piqaoigw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163prloevgu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163bwvtaedj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pomznvrb.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wojerayt.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163vyulbnge.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163uqvsbqjd.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163ucmyorpb.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rotqjniz.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163nwhjfmzq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163lyjoubsk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163wmhdgpqd.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163kzjzshdv.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163zvvrmaud.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163hhnsghby.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zjkcvpxp.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163vyqgvvge.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163eyvnqsnj.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wqhgbbdy.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163uzchiufc.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qerfblwf.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163gqrcucpd.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ppyxwxnh.html

[A14] 注释写法
来源：http://www.sxryk.cn/163fhrwmubz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163bxwpgodg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163fkxmigwp.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163krtazwaw.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ohqvknky.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163xmmesmht.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mjidveui.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163mywkvmbk.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sswulhew.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163uqhhvbzo.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163gmszudic.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163jgsojgjl.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ihzekhix.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fuwlexta.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163kbjnylpm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163nctfggkg.html


<!-- 参考信息 -->