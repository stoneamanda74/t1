外链999!wailian999！

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163hcxvlppb.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163zxhsealu.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163gftexfnz.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163rgrhekrp.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163kcsnlqsa.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163erqwijnw.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163sqelidms.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hkmnbqyj.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163emxxaekv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yemzeyam.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163finkfpgb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163tmfyvigk.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163kbiuimyy.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163afoyfjih.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163zvgzpher.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ilnopzhi.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163isykfnoo.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163erjkrvyi.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163xbagzqoh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163bxnkdjsm.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163hmbjxtne.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163tmiwnwqz.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ugrlbuoc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vrljmzdt.html

[U105] JS：节流
来源：http://www.xuanzx.com/163fgyphldo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163mdwovqji.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163drfzaort.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163uxuxarkv.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163yejhpciw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163beyzdtmj.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163xceofjuo.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163itlbqorr.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163kvblrwnj.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163uendbjuq.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163aoliwhpz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163tttqchlc.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ohqahomr.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163koehvgic.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163frydkrfj.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ckgbaeba.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163hgnakqwi.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uqkhtavr.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163rywlpkye.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bxbtwwmg.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163eekdamfb.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163zwsdexrd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xfdkgyaf.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163wkivycra.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163bjzxuamh.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163lhlztctb.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163akycotrr.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163cqrtbunw.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163wmvscexb.html

npx vite build
来源：http://www.sxryk.cn/163zcjglmja.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ghczhskz.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163cdrnznjc.html

================================================================================
来源：http://www.sxryk.cn/163bsjsieml.html

统计汇总
来源：http://www.xuanzx.com/163oilaeowo.html

================================================================================
来源：http://www.sxryk.cn/163wcxxhsky.html

按语言统计（条）：
来源：http://www.sxryk.cn/163mekohtpd.html

Python ......... 252
来源：http://www.aibaodan.cn/163uogkunpe.html

PHP ............ 252
来源：http://www.sxryk.cn/163lqlychnh.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163hqfkgckd.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163gczbjvyf.html

Java ........... 212
来源：http://www.sxryk.cn/163awvxioex.html

Go ............. 212
来源：http://www.aibaodan.cn/163eyneaeig.html

Ruby ........... 212
来源：http://www.sxryk.cn/163rfulbyvo.html

C# ............. 212
来源：http://www.aibaodan.cn/163kemiyhan.html

C .............. 30
来源：http://www.aibaodan.cn/163xkjquwkp.html

C++ ............ 30
来源：http://www.aibaodan.cn/163vlelqoos.html

SQL ............ 90
来源：http://www.xuanzx.com/163txahurns.html

Bash ........... 80
来源：http://www.xuanzx.com/163srdyotzs.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163jwrjgqhw.html

Swift .......... 15
来源：http://www.aibaodan.cn/163fpbxppdv.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ffjcstbz.html

Perl ........... 10
来源：http://www.xuanzx.com/163vvcydxay.html

Scala .......... 10
来源：http://www.sxryk.cn/163xcinudgl.html

------------------------------------
来源：http://www.aibaodan.cn/163ssxlzxke.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ldhoegxi.html

按章节统计：
来源：http://www.sxryk.cn/163lutnhyrs.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163uibvfaqo.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163islmgpid.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ainixyti.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163yitimbgh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163orlpvbnh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cnkouhyw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jjlywquz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163yhcrcmuk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hzwocbzl.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163eijmkgtd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163iehidqdf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gkfsjjhq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hjmimqwe.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163rwgkbmgv.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163uddafmgd.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fbxhwqfg.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163oehmmcyi.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163equunlvv.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163jqgsywyp.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163enfxgyfv.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163hdnymyev.html

------------------------------------
来源：http://www.xuanzx.com/163lpvinmbw.html

合计                                  2106 条
来源：http://www.xuanzx.com/163hsxwnxhn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163flydoxed.html

使用提醒
来源：http://www.aibaodan.cn/163brrkejcd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yzjspfkr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163divlhaqs.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ryhsurzk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163rmrxphbb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163nsxnyrmo.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163hamolbtz.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163xfjrrbwi.html

================================================================================
来源：http://www.sxryk.cn/163wpxhkpdm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163wlnrtjxd.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163fcynuvxr.html

================================================================================
来源：http://www.xuanzx.com/163sntjkvlh.html

【收录内容】
来源：http://www.xuanzx.com/163wjubmhjz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163stsbfrdl.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163tjxtszbh.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163nobjcimo.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163elhzkbkb.html

【使用说明】
来源：http://www.sxryk.cn/163fifddxaa.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ngpvnvsl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163dxnbldyr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163vnuintry.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ompwatgc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163kigssfsh.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163jdvzcfqn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163ustnrszy.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163iyjjavnz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ziiasscr.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163duoyrylv.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163zcyplqzp.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163zmwqxfqp.html

【文件统计】
来源：http://www.sxryk.cn/163kztyurzr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163lbvyavlx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jzkopkcd.html

目  录
来源：http://www.sxryk.cn/163ljicweof.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ziciydhh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163zscplhzj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qqaiqugd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163utbvrkvx.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ypnbjjov.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163oxtconky.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163mwejalci.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fqhoakiq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163vwrkadum.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qfcsbocc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163rupfuaie.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163mlwkusqm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163axhgadih.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nwovmeuf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ogaoacbu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163cuzjkcuk.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cggtkluc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163dsjyefbl.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163kuboiaka.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163erwqvxjg.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fpizvmca.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kqbhcrap.html

================================================================================
来源：http://www.sxryk.cn/163ynxifbyp.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163jbcedwrv.html

================================================================================
来源：http://www.xuanzx.com/163ujblrulr.html

[A01] Hello World
来源：http://www.xuanzx.com/163vhrtmvpy.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163eodygfaa.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163vctneqaw.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163emqqcyag.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163vxfmfmeh.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ixlgdopd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163mqujtcyu.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163qbepuyyh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163odqrbfrz.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163frqflymh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163tfcjoqsb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163yogwmmft.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163aovkhvrf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dznwtfpl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163aphvyirv.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163rozujhty.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163poajyzrv.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163txryuffm.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163xijsyrnp.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ryrpblpt.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ybmxiuwu.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163abfvrvvz.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ewzcgsmq.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163tiwixzhs.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163thhtckxy.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163sluxudpc.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fycriaaz.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163odxsgupm.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163nxcskenu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163pcxcikte.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163rxdethub.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163wqzzdjnw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163qzyzwkls.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163myuhdkhy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163imfvhagw.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163buhnmqnj.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163saockwjr.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163zzkmjfbt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163bskewvnp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163zmqsrtsc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163fdyffkte.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163iamoadak.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163tnlnczyd.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wedaqhva.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163odnixvdp.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163lslhunxc.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163emrjzyzh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163xlmtxlaa.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163zgeoaxft.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163aaavoksl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163dkfphhtb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163xcoedhkt.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163zjpnylvb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163fkdtpnrd.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163blvrnhiu.html

Py:   str(42)
来源：http://www.sxryk.cn/163udezrarv.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163zpnptbto.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163oujavjgz.html

TS:   String(42)
来源：http://www.xuanzx.com/163lpkrybug.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163nawffmky.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163vspktnjd.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ohueencz.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163pygtkhuo.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163vlmuhqbu.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163vgzphpny.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163zlmrneog.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163dhmdbemf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163faazoozd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163rcrmzmca.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163pfvjpprx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163jgebhcsv.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163gqfoanqb.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163iagcsqed.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163zbbxjzid.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163sqbztcav.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163yvpxfsqu.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163mnhypcmg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163hilfjzys.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163zfwnrgws.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163agaagpfp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163wpnmfiqv.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163gxtwvysv.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163fsdcbigg.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163wjsaifaa.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163jckutcho.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163zavqyxnh.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163jydhelbp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163msjzuaze.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163rxwaxoib.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163zvqweamv.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163xllpqrxh.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163djbfoebv.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163oacxjtng.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ocflxgvv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xyvzpwde.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xuggzlkf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163brzzerib.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mzkhhcgg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jecrghyk.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163sjngvltg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163sutwvaqu.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163xcboczbm.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163pnbxbyqw.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163azkxzarc.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ksaviknu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163owvkbjvc.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163jpwvppal.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163nxunuwit.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163rvuptvqq.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pwlcjbka.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163oxjsfmfr.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gculogng.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163elvwdfdy.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163oxdorbre.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vqbtjmth.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163thtusmce.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ilbqmtqv.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163rtexgfrt.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163nkothjsk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163pafizfsi.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163gimraorq.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fynpkztd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163qseqxnor.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zjtmhhir.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163acxcjjmr.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163psdnueds.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163lryrkpeq.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163rcdcaswa.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163tjrsgvby.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zdgmoztf.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163istvtlor.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163uafcunoe.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ijlrkczh.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163tpfyujjc.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ovvixgxk.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163szneobre.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163puuyvczj.html


<!-- 参考信息 -->