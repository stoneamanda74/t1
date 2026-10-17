外链999!wailian999！

[U97] JS：并发请求
来源：http://www.sxryk.cn/163bidqdzyg.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fofsrqax.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jjsmnkyx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163mrsfcsii.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163nmiojnix.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163tteafwns.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163rctifacr.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ibrtaabn.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163kcxvozcv.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163wfgjawoj.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163yldagelk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163tailobpl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163dbaltwxy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163jhtkysse.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163heltrcrg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163umwkgrtp.html

[U105] JS：节流
来源：http://www.xuanzx.com/163lldobkuc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163axqnnuir.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163sneugsfm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163abfhfqms.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163thewdhmm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ifznnpdz.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ndxgludp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ghefxekp.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163nwkcohti.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fvilacog.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163otebcume.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163gazanboc.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163kosgyjmb.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163dvcwkkgu.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163rhvimfpi.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kdgwklui.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163xezluafo.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ialtjmpj.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163dxbdcucx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gkhudrvs.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163hqcabmru.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163edopsvqy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163kjpihkrx.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163kezxqjow.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163tzsxmtvt.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ctfuvmmy.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163utvcabtc.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163dxyzfsyl.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ieklghzf.html

npx vite build
来源：http://www.xuanzx.com/163kpthbwcv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163dfbezytx.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ckjclgrv.html

================================================================================
来源：http://www.xuanzx.com/163glukwiwx.html

统计汇总
来源：http://www.sxryk.cn/163hsdeycip.html

================================================================================
来源：http://www.xuanzx.com/163khfivsvr.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163jhbcwsym.html

Python ......... 252
来源：http://www.sxryk.cn/163joibidlq.html

PHP ............ 252
来源：http://www.xuanzx.com/163gifszpno.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163tuuijfho.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163vmtqituc.html

Java ........... 212
来源：http://www.xuanzx.com/163gekulthi.html

Go ............. 212
来源：http://www.aibaodan.cn/163mddpdjev.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163aumwgpgv.html

C# ............. 212
来源：http://www.xuanzx.com/163eagcznnu.html

C .............. 30
来源：http://www.aibaodan.cn/163jipqgicm.html

C++ ............ 30
来源：http://www.xuanzx.com/163nbcvfkbt.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ewbtttws.html

Bash ........... 80
来源：http://www.xuanzx.com/163rqmgrzis.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163vgjfkcpo.html

Swift .......... 15
来源：http://www.aibaodan.cn/163pqcblcxb.html

Lua ............ 10
来源：http://www.aibaodan.cn/163zlpopchh.html

Perl ........... 10
来源：http://www.aibaodan.cn/163erxnsjhe.html

Scala .......... 10
来源：http://www.xuanzx.com/163nhezzzqv.html

------------------------------------
来源：http://www.xuanzx.com/163bkexsmiw.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163hirxmndq.html

按章节统计：
来源：http://www.xuanzx.com/163lxvbzbaw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163bolrhbng.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rowdmhbl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qesaseii.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ehukkqxb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163flrnmrtq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163epcorcjy.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163iwzkruez.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163qwizeori.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cmlnxilf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163obozqqvp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163npzxrkwl.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163prblbymh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rouoxsfg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163hdpowuby.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163aodfmqxq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fypbiqlr.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163fjeftewf.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163kozuodrz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163lnyuvbxc.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163vdtasjfo.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163lzsmrien.html

------------------------------------
来源：http://www.aibaodan.cn/163mlitncyo.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163etjsrbzc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kiaejbyy.html

使用提醒
来源：http://www.sxryk.cn/163ipadlrxb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nqnffjsv.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163lwglburt.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163oqfglmat.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163lekpvabj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163uojkkuav.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163mabszwqx.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163zksutypl.html

================================================================================
来源：http://www.xuanzx.com/163djlvnlqw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163knzuierp.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163iwqvbqmu.html

================================================================================
来源：http://www.sxryk.cn/163sdadvpsg.html

【收录内容】
来源：http://www.aibaodan.cn/163mjishune.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163zhqjudgy.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163zkhraqyl.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163jeytkxei.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ualwzwak.html

【使用说明】
来源：http://www.xuanzx.com/163rdubzlny.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163mthafhhc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163mxnqovox.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163alszsbtt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163hohvjoqo.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163rsplqtpy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163melhkytk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163dzstduos.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163jmkdirpa.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163qzxszjcm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163dpexnmci.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163aozsqsqf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163yozxwxiq.html

【文件统计】
来源：http://www.aibaodan.cn/163wquugrzz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163yslbaxxx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163epmmksck.html

目  录
来源：http://www.xuanzx.com/163rbaflvyn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zwcypeil.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ogfovzme.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163dikmgdoa.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163yzjghftv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163liyqlaqa.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163mphcrrry.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163zsudnzno.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xvyfefws.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163vjtbwjwa.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163unshukfz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163jxnubdan.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vnazrfdo.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zpqnrodd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jbhyuknw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bxovezdy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163mbunhvip.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vfitffkq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163rijjvjmq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163kkpkrlqv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163wunbshlq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ryohvfbp.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163phkwzyqd.html

================================================================================
来源：http://www.sxryk.cn/163jxpmsdkv.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163ysivcjuh.html

================================================================================
来源：http://www.aibaodan.cn/163fcgwhylq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163pgvqaxbe.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163tomgictl.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163buzljbpt.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163wyfqkccy.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163lbiuwoqq.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163ybskhzuy.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163pzxxohpr.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ydwiamvl.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163rkhvzbtt.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163xgdlwmda.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163txkewypb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163pzreipek.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163deqgyxal.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163agdzfswi.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cvvaqzvk.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163pjntkqar.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163zjvrdhtu.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ycmnnhsv.html

[A03] 常量定义
来源：http://www.sxryk.cn/163pjcrkbqh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ryehwnxq.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163chljycnt.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163ivoqzzex.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ckmazqpi.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163taxkppdy.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163qycntger.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163xpisfowg.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163neutqpju.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163jtlxwqnv.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163zwyszcel.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163eybotkqr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163golrozph.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163csfcfgol.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163ohjupnxt.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163ubypxlve.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163zdywumdu.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163yyoxmqdy.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163iduwfvyq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163hutrxucj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ebkhprbn.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163gfxilnll.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ypswnxzv.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163duietbze.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163rbfdqdsq.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163eloohkxj.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kfcixglx.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163pdksmctk.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ytydggpx.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163qfmkgyaz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163fnzzaaxm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163pqkidwha.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163sbjrdtlb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163amlehhtz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163zcctxszg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163zecctxoa.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163pkwaozqs.html

Py:   str(42)
来源：http://www.sxryk.cn/163jsginmxi.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163zjtlgtfv.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163egzhljjy.html

TS:   String(42)
来源：http://www.sxryk.cn/163ljdmswaf.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163lgexvens.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163guzdadwh.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163grsxkdee.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163kpvcpwua.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ymeihrlq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163xeywruzw.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163rvowftbi.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163jvypafgz.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163apohvhgw.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163kvvyaump.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ldgunrgr.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163mxuknbxi.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163jmumxqdv.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163rrpixjjs.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ieknctzb.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163hdnsvkqd.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163xjbzekqc.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163dikihqza.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163imxslvih.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163swkbkkhx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163lljglgad.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163dkatzhiq.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163mpuzdtem.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163lxgfwkgf.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163vdskvixt.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163drlpkzzr.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163yrklxcki.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163djjqmlfr.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163kzqrjica.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163wbqddhxf.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163btaxqjee.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163rwnhqapt.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163pbxnixjq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163whmtlowc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xbnapsgm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vjfxkfnm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gkyhydvj.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163tgiqmsxr.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yhabffdy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qrhexcfu.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163laohitpm.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163hndiiysk.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163llwmktod.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163urfbugst.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163liotvzoa.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163jqlofqjd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163wjyadfyu.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163trhnemun.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163vxatcrux.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163hraxrytr.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163aidgsucw.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163homawroh.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kvypevil.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163toblrdgj.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qvbvgqmh.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mwqjmruf.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163qhrokuvj.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163egysccfx.html

[A14] 注释写法
来源：http://www.sxryk.cn/163jzpoqihx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163dhjjhxox.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163poylbuib.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xltihpwp.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cpzaejgm.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163plccgscj.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163eiajkskh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163xanxzafe.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kcrlfvow.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163cwotaseu.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163maqohdot.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163vtsamheo.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163umojmgez.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163kgvesrph.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163bodtzhau.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163mtcolzgp.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163vhcdhbor.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163azaehstl.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163lelqnwap.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163fvgtwimu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163wvlblovu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163lywmywrm.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163idtqczly.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163hflquiqr.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163svbrxjtv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163kljpywwq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163rxphgyyw.html

[A17] 位运算
来源：http://www.sxryk.cn/163djxjjiko.html


<!-- 参考信息 -->