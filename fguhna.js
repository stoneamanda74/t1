外链999!wailian999！

[U97] JS：并发请求
来源：http://www.sxryk.cn/163drrcxkag.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163torputbp.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163wyojqxxn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163euqiqcmg.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163noayqruy.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163oadcmqfa.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jlbovjko.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163dxvgxxkl.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163obsknpee.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163nkhxpfjs.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163hcmvxbdm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163iaputvnx.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163taocxwpt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163zbbrgfyq.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ukjidvzy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vqpcgrig.html

[U105] JS：节流
来源：http://www.sxryk.cn/163hcmtnpbz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ovavyqpt.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163hwxqmibp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163wvmglqkw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163oadrilng.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163mwnhxgek.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163zmraahyx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163cijpheyd.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163dmwukqgc.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kqdtigbo.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163xwrgdpmq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163dhaqafgz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163yegpbtty.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163eixwmxun.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163zkgtzgzm.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163mrxtkllm.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qpydfsim.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dxfzbcew.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163jrhvvqww.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ppcsqfjy.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163dmfcndxu.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163blrtyxvq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163vmawqpwm.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163eucbvsoj.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163vyddmnfb.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ucerwjnb.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163wetwgfia.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163yufmvdnp.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163jalzdtdr.html

npx vite build
来源：http://www.aibaodan.cn/163diqcglvt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ezdukgnw.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163dqpgvrdj.html

================================================================================
来源：http://www.sxryk.cn/163gfqiesjb.html

统计汇总
来源：http://www.sxryk.cn/163prstznln.html

================================================================================
来源：http://www.aibaodan.cn/163fwxmyyzl.html

按语言统计（条）：
来源：http://www.sxryk.cn/163iznxmtuj.html

Python ......... 252
来源：http://www.xuanzx.com/163iudyvifr.html

PHP ............ 252
来源：http://www.aibaodan.cn/163mvoxybcz.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163yrtejwpd.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163qvxandnq.html

Java ........... 212
来源：http://www.sxryk.cn/163yvlyxuov.html

Go ............. 212
来源：http://www.xuanzx.com/163dcxnroyd.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ijhyrzhb.html

C# ............. 212
来源：http://www.aibaodan.cn/163rvhwhrhn.html

C .............. 30
来源：http://www.xuanzx.com/163pgsgsstl.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ijquusmu.html

SQL ............ 90
来源：http://www.xuanzx.com/163vffoxdat.html

Bash ........... 80
来源：http://www.sxryk.cn/163igkhxmlg.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163wtqfumqq.html

Swift .......... 15
来源：http://www.sxryk.cn/163ppbvphpc.html

Lua ............ 10
来源：http://www.aibaodan.cn/163cmxcvzel.html

Perl ........... 10
来源：http://www.xuanzx.com/163hssufpbv.html

Scala .......... 10
来源：http://www.aibaodan.cn/163gggswmly.html

------------------------------------
来源：http://www.sxryk.cn/163rubkmozx.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163cgdklbvu.html

按章节统计：
来源：http://www.sxryk.cn/163yfusgvmj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163jbsqifds.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mafmhrsy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vjdljwof.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163zrixsbnp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163tndpkxou.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ibnbojcd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jpdceyks.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163dnjwyjub.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163uiqcioaf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163iactsdbm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jogfoqxm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cgfnxmsr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163skzpzsho.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163rinqnkva.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163qstslzbm.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bfglurrb.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163akmwhuim.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163vxpuzmpu.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163rgvixqtb.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163mygbgebo.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163alkxxxor.html

------------------------------------
来源：http://www.xuanzx.com/163xupkjqfq.html

合计                                  2106 条
来源：http://www.xuanzx.com/163xswupbhu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kgzimkwr.html

使用提醒
来源：http://www.xuanzx.com/163klxcbswk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wnbdwjsa.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163mmnzkoiy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163djweuwdk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163axwqkjsh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163soqgkypv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163sykchaqv.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163snterxua.html

================================================================================
来源：http://www.xuanzx.com/163fqffjgum.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163lklpirnf.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163uuvzmdrk.html

================================================================================
来源：http://www.aibaodan.cn/163gqhnlrwn.html

【收录内容】
来源：http://www.sxryk.cn/163mcrwupxe.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163brhqyjor.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163rnxdndzw.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163whivygdw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163vzxyanvs.html

【使用说明】
来源：http://www.sxryk.cn/163zzpcxjta.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163mcagbktu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163xufwgjif.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163svrgapys.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163qcbzimpv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jrmoacky.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163qkbtpaux.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163peqdjtgu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163xiqpcjik.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ocbehgdj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163acifgpfc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163zqutqnvw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163urtxsmre.html

【文件统计】
来源：http://www.xuanzx.com/163difqksct.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163rzgtfmjc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ctvygrnx.html

目  录
来源：http://www.aibaodan.cn/163ckytgjon.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163uwpzszzk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ifhummng.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xyvwlygs.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163sbkfjele.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163afphxzup.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163xaamulav.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bpiqkzhf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163auxxyawj.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163yfquywjw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vpvjumku.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zadqkdga.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163slcqzxbu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163erfshawb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163sbaehlvf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163octakwqh.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ndvbecez.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cqwshnla.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163uqmghucs.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163vmdrxpmi.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163quizajho.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163teksysqi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163wwomekza.html

================================================================================
来源：http://www.sxryk.cn/163zuelxvwi.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163atugkwbg.html

================================================================================
来源：http://www.aibaodan.cn/163ghlznfzu.html

[A01] Hello World
来源：http://www.sxryk.cn/163crrvbpdo.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163hnlriuhe.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163egklablj.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163mneexxyv.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163bfvnvgfn.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163xwpkshts.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163fvyfdplq.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163pnwmncgk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163yrgydoap.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163hckzvsqf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163jujcdayi.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163whacruij.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163mwbyydka.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163abqlxehj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163qevailly.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163lfhnkxki.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163qhrflchj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163fxjlnfaf.html

[A03] 常量定义
来源：http://www.xuanzx.com/163oaubrzra.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163zagoovmz.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163hlqsdtvw.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163kfkigrys.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163njhpgmzk.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163bytccdvu.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ukyaevkf.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163zzuluasg.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163dhcfnfwr.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163tjehwmfw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163upsfimiy.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163dnbmdiik.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163piaesngn.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163eswrtumm.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163akoapnyf.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163mfzmxpmd.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163lifyndzv.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163pojwvvkq.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163vrausfzv.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163dnciqvdu.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163scqraisz.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163toqzwavg.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163dzrrccma.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ejyiwxqa.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bjpfcgdj.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kshhonjy.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yiljhfsi.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ztrycqht.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163mndbovly.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163brzoslyy.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163dudtvkbw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163xvznsdqb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163xnvrvwuk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163tlbxydrd.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163ycvwoadc.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163savhyctx.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163lteniexo.html

Py:   str(42)
来源：http://www.xuanzx.com/163fcqkgdew.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163tdroduuu.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163svxxosri.html

TS:   String(42)
来源：http://www.xuanzx.com/163wkkpldsi.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163iugzkdjy.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163pcdxuxhd.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163dksflhlo.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163pvawyhef.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163nezmtqxf.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ssnilzgb.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163cxrfrdiy.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163qdkqynhu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163iwdnhovb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163bcoadphq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163xhcctzqo.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163wcqsugbb.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163lkamfrul.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163gkeiafko.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163inqjbpvf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163abrmwccs.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163jzdylkgd.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163nfuxobjo.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163jbopvexc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163xthkgdzs.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163uxkueuaz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163vvwrvirc.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163qwttsvhr.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xlcbibag.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163iktahdwq.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163nrsemtyf.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163hsnrpalk.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163cfbwddev.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163yjqxythd.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163gvkxrsut.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163nhmfytkk.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163yrohnyya.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163pvbukugk.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wlsllekr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163buegfkkr.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ltowshhj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fryjbnet.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163qfrdvcye.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hsmlumbv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cgvanhlj.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163kjfwczlg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163fyieooqm.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163pjcsxnjd.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163udklmxfp.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rfnthotw.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163khkbnuau.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163wegudhxz.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163asuodios.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163lgstqkad.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163safpydmf.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163etvcvtgl.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163ygzlzrjm.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fwhescpg.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cmkrshur.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163nwuxpdnj.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163byjmwakh.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163uodnaaul.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qgnceyak.html

[A14] 注释写法
来源：http://www.sxryk.cn/163yrllecfk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163zjguouhe.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ycuhagnq.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163yqocrhjk.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tankknnh.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163twtoxuke.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kiahbrym.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163qsswazjn.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ptmboxef.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163oofxedpv.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163izdoaspj.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163fdleixtv.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163qnzobgoa.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163yhsvedhb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163wchwwbvw.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163yhgpfslp.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163cwtalfgz.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163jfbpezol.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163awpqsvly.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163rmarxzld.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163rjhxkyba.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163dewjsiwm.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ligpxdsa.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163cpyuthgy.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163gxncrnbk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163gnrifkym.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163nropvtlk.html

[A17] 位运算
来源：http://www.aibaodan.cn/163xbatvcky.html


<!-- 参考信息 -->