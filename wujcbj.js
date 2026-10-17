外链999!wailian999！

[U89] JS：数组去重
来源：http://www.sxryk.cn/163brjjxxwz.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163tnjazhqr.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163mitjhupx.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rdugaxis.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163hjuianrb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163nmsinwmt.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163nznwlpzr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ptyfwvmf.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ploilrkd.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163fpgekkon.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163xfoybzpf.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163zwsmlkgl.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163yihpogcj.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163qbtbtdfw.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163zgmfswja.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163spaivtec.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163npgbrmaf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wpammzpa.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jvdtfnpe.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163oyiydkty.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163vsfzpcio.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163mnytvirs.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163isuzfxex.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163zdnzprjm.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163gmzrtdvi.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163hiuhktgd.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163lbrehexi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163kjdolrtl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163rxoggrte.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163cwxatoxy.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163eibalyin.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nsfpcrzi.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163qthelukn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163naofycns.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163rgaxxmqp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163vmsdcinn.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163umbxtwpe.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163scrwwbbn.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163anwgoouz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163swbltsil.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163zkoccnef.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xglfuzkj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163wzwqykwc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163wiwzyumd.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163dnqnqebe.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163kztzuccw.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163uaplpmgw.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ailbtvhi.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163hsirmvzv.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wadpkcmm.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ysmjcixh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163eaoqqcfh.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163xggxmmat.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163oxhezssf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163lqgjjlfe.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163plhgxbkx.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163exdjiace.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163erymlodt.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163uefpymxr.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163teisrccl.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163uyljkama.html

npx vite build
来源：http://www.sxryk.cn/163eoasreeo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163nspjstxi.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163xodlssrz.html

================================================================================
来源：http://www.xuanzx.com/163keorhpmv.html

统计汇总
来源：http://www.sxryk.cn/163bqwmycer.html

================================================================================
来源：http://www.xuanzx.com/163pisrbtwd.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163qwzehtyq.html

Python ......... 252
来源：http://www.sxryk.cn/163uxrgodan.html

PHP ............ 252
来源：http://www.aibaodan.cn/163cxcefcxa.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163waukziuy.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163wplspveb.html

Java ........... 212
来源：http://www.sxryk.cn/163hprldfou.html

Go ............. 212
来源：http://www.sxryk.cn/163eewzqfdz.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ggzmakqu.html

C# ............. 212
来源：http://www.xuanzx.com/163urjkjspd.html

C .............. 30
来源：http://www.aibaodan.cn/163biknfhff.html

C++ ............ 30
来源：http://www.sxryk.cn/163rsicnsaf.html

SQL ............ 90
来源：http://www.sxryk.cn/163poglcfem.html

Bash ........... 80
来源：http://www.sxryk.cn/163qmzgcwdw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163nobwoepa.html

Swift .......... 15
来源：http://www.xuanzx.com/163goltawfq.html

Lua ............ 10
来源：http://www.aibaodan.cn/163rckzjuzg.html

Perl ........... 10
来源：http://www.sxryk.cn/163qflsopit.html

Scala .......... 10
来源：http://www.xuanzx.com/163kosmiurd.html

------------------------------------
来源：http://www.sxryk.cn/163dzcatdfi.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163fjmjwlga.html

按章节统计：
来源：http://www.xuanzx.com/163bfxsvwbf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fvkdmtcb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163stkxatit.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gffwjaqj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hukpqkvo.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163zjfsacfw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163yxswgixt.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ktjmkwmk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dyajeuma.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163funjbcsq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mqnokayp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fuibwsvy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163enhdqmoi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ldxickzq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wybcklku.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163xqyblgou.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ouklaixl.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163fcrjzwjg.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163htkkxiea.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163rcdoqkzy.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163xlsssyjk.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163acjoqrgi.html

------------------------------------
来源：http://www.xuanzx.com/163xbtunuid.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163bxvwpavl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gdcoxufw.html

使用提醒
来源：http://www.sxryk.cn/163qyxomiuf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kdqyzoij.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163xziohhus.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163otamlhpy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163bdeljftz.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163rfbstrdv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163hsapzomr.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163axspuqbi.html

================================================================================
来源：http://www.xuanzx.com/163yokzlqil.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163mhuhwsrl.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163ecmngvxm.html

================================================================================
来源：http://www.aibaodan.cn/163nlelnxnq.html

【收录内容】
来源：http://www.xuanzx.com/163cledjmzy.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163rvrmigpt.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163gxsnvofr.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163yihknxff.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163fpbvhgyn.html

【使用说明】
来源：http://www.sxryk.cn/163ocllynfy.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163qesuejtu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163gayjbmrq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163xdqfbxbr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163zepgqcqc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163vuhruebm.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163sgxzfkgy.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163nphycjzy.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163mxwmwyku.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163qcfzzgul.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163cyqchcwy.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163mogvhjhd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163qymfdgyz.html

【文件统计】
来源：http://www.aibaodan.cn/163ilokfwjx.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163fejcilaq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jejbdscp.html

目  录
来源：http://www.xuanzx.com/163pgwesiqx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tntiuftw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rdxuhekx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163oyvlkeax.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163taupycmv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163nkzzryql.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163xwtggbfk.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163hagcwcdr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mjidzxxu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163gxbwpkgl.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xencxlwt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163kxsdxjim.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mvtbwqij.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ckunpbeb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ytfrjuws.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xbbieimu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ktpllrot.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kpfnjxof.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ibvrwadq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163lekpukyg.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163hhkxmrxo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wghlvmef.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lysgxxtz.html

================================================================================
来源：http://www.xuanzx.com/163unagtgee.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163gdejlrbf.html

================================================================================
来源：http://www.xuanzx.com/163fegjvkwi.html

[A01] Hello World
来源：http://www.aibaodan.cn/163aljtrrfg.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163knnxnbop.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163vlxgmari.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163idiujbse.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163vcugtakq.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163uegwuuwd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163lhrzczrp.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163dlbtcohl.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163msdxhvnl.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163rjabylwx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163dfkjupsu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163hvsffcdf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163fsmfhihm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163xwdozdak.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163atqbvarc.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163ntujbvar.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163xdhwvkck.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163sdnqtgpe.html

[A03] 常量定义
来源：http://www.sxryk.cn/163yhiklpky.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163rukgwlvi.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163bermmpfb.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163bjwpjqna.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163yrmsipdw.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163iwkryawk.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163cskdpzsd.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163iyldbnlm.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163gdvrjamc.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163vqmtvzlu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163lbdciexv.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163urctwukb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163ttwaeskc.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ikicuymw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163kzfllfaz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163ukmxlbet.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163huujyxbr.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ytjuuoyt.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163zbvqmmkx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163czvodejn.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163vgbgmkqh.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163jertwoxd.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163tnngijkk.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gqpyatfg.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ujynbmav.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163grfeatfs.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163tgrkzsoh.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163tdiwytzp.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163kylapyqp.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163lfztjzeh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163mlwjvpuy.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ersagbnk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163rtpftill.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163rahnhflw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ekgxxlfr.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163mbcprbvb.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163izsbfwnb.html

Py:   str(42)
来源：http://www.aibaodan.cn/163jjyzzowg.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163mwcqgiuz.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163auvrgsrb.html

TS:   String(42)
来源：http://www.xuanzx.com/163otbaseux.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163vjtcljxb.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163arpumugs.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163byvcsoch.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163upczguwo.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163xaswcvmh.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163yeojpynn.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163xmosssbd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ddljregq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163fzmhaiod.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163zksdmdel.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163kxbiqtxr.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163dpuzzwuv.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163ykynvbxw.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163oojwustd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163lsoczxrw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ijqlrvcx.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ngixyujt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163tyqnzbjj.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163pjiamqpt.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163eueybdwi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163oeltlhts.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163urrvxfyr.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163jrfgtlol.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163exzgvssw.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163mrfavuyp.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163zofpqcgc.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163kjfiycsm.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163cljbopgr.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163nscvtrkv.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163pnecazzf.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163dmziwcoe.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163tpjohivy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163tpchuzob.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163aranaukr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xyfsnkqv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rnhastvu.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163exzkllag.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163unmimphm.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163buuxmcwn.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dpbtffff.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163tecexphm.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163kbivcpjo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163nuozbqwd.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163mlpjfuam.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163sqdtvgbv.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163wfsscveb.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163abfeflpo.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163xfxwyenz.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163nrdlbflz.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163itkjnwvc.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163crhxxdjo.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163veoysjky.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163apmokxis.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rypeixnf.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163dvucsjtx.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cpqufkez.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163pkzawfed.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163upxovkxo.html

[A14] 注释写法
来源：http://www.xuanzx.com/163qqbtjdmt.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163wsfohpir.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ijqommii.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tdhllwqa.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nqkaureg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163bpvupbyo.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zkghqpin.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163hldizdir.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jqqiteps.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163uitrhwex.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163eptusend.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163chhapqlr.html


<!-- 参考信息 -->