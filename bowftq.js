外链999!wailian999！

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163mrijromz.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163nvwhmiwx.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163maeuvver.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163isrrhang.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163tqrtzmfm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163qrkalsfy.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163rgtzdful.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zweoyetd.html

[U105] JS：节流
来源：http://www.xuanzx.com/163rilmjhwe.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163nauurujs.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163wordvgtm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163nqjdpihf.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163gnemktxj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163eddrxsis.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ufsvxwep.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163okjgvhrq.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163vbizcwue.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163unnmvbzb.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163yllavgtz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163zuunrpva.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163xnwcumlb.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ntzkjiyu.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163osklfybq.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163eagifwei.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163zdcqjcqp.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fxyuyypd.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163wljaygni.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lqqojgsm.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ijolovrr.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163uygbznvt.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xjihqkhu.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163fbdkutti.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163tpgvurxd.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163yeiktmrf.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mutfqtoz.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163yoosksgo.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163cajfqyhh.html

npx vite build
来源：http://www.sxryk.cn/163nvzgvkvs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mvatdran.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163hyvzbmui.html

================================================================================
来源：http://www.aibaodan.cn/163jbdriybt.html

统计汇总
来源：http://www.sxryk.cn/163wtkyvuzp.html

================================================================================
来源：http://www.sxryk.cn/163rdzhlzuc.html

按语言统计（条）：
来源：http://www.sxryk.cn/163rhdzbtoa.html

Python ......... 252
来源：http://www.aibaodan.cn/163sbjsdjgr.html

PHP ............ 252
来源：http://www.sxryk.cn/163abmoynya.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ucyhbwzk.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163pzxumnhy.html

Java ........... 212
来源：http://www.xuanzx.com/163gsqjetnk.html

Go ............. 212
来源：http://www.xuanzx.com/163hwmckvha.html

Ruby ........... 212
来源：http://www.sxryk.cn/163nrdvikae.html

C# ............. 212
来源：http://www.xuanzx.com/163grqgjfla.html

C .............. 30
来源：http://www.aibaodan.cn/163frrfuemn.html

C++ ............ 30
来源：http://www.xuanzx.com/163dgsidjeo.html

SQL ............ 90
来源：http://www.sxryk.cn/163djsnknln.html

Bash ........... 80
来源：http://www.xuanzx.com/163ictkcuiz.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163qzxrpdkd.html

Swift .......... 15
来源：http://www.sxryk.cn/163xiqldakv.html

Lua ............ 10
来源：http://www.xuanzx.com/163lxpealxz.html

Perl ........... 10
来源：http://www.aibaodan.cn/163mcdhdsdb.html

Scala .......... 10
来源：http://www.xuanzx.com/163efqfeand.html

------------------------------------
来源：http://www.sxryk.cn/163vqytqjcc.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163czaziomw.html

按章节统计：
来源：http://www.xuanzx.com/163adbyoahq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163rblhxvyd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xvzeewua.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pynagiwy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pmeklplc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163lfzcrqye.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ptmiebzw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vvocwqyf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dyvddpln.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uvtzgpqx.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qnsldiby.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nmwelrcc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xtjxcgyc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bmfshish.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cswkpfao.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163rorxpjty.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dzrpjnye.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163akzfjtpg.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ixblgfgy.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ensrbxfx.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163zoiplgpm.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163fdggqvey.html

------------------------------------
来源：http://www.aibaodan.cn/163laoxgpuf.html

合计                                  2106 条
来源：http://www.sxryk.cn/163knlyszme.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163dgsfhghc.html

使用提醒
来源：http://www.xuanzx.com/163ftmsrbxf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163schwpkao.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163ippsgrqe.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163erpcaqxe.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163feogxgaw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163jokvccwu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163pwxaomwt.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163buscxyre.html

================================================================================
来源：http://www.sxryk.cn/163vxfjblie.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163oapiuemm.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163hdtzkvcu.html

================================================================================
来源：http://www.aibaodan.cn/163whbjdhvj.html

【收录内容】
来源：http://www.sxryk.cn/163qlixgbuy.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163kzuzwgnt.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163plluqgbq.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163xozfkpuy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163chjtkswo.html

【使用说明】
来源：http://www.sxryk.cn/163hfyrqqwh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163nookazee.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163zxqkhuey.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163xuhutwln.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163slpryecc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163fdabcvqf.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163vhqtkbzn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163cldqsjyd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163hfxxzlmf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163opoawjdq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163qahnzjxv.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163rmbpmjvj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163sypquihh.html

【文件统计】
来源：http://www.sxryk.cn/163ytfowmwe.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ayjviooo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163avlqftcu.html

目  录
来源：http://www.sxryk.cn/163vtkihsgo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163amojzort.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163hjssbwtk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xsueufhd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163roglwnfc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163puakxqxw.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163klroygmk.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163rdbwzivo.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163pqznzddf.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163sxwnyrtk.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qzahhfpt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163sunrdwhz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dlcepheu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ytaidydd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iricdhob.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163fbxwuoha.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163mmtzejnq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mkjqgbom.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163wfwjuknv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163jkzkvirj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163msbvtoul.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163trmohtgo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163gkptjaal.html

================================================================================
来源：http://www.xuanzx.com/163izvmqkgp.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163qvtxmjea.html

================================================================================
来源：http://www.sxryk.cn/163begcwarg.html

[A01] Hello World
来源：http://www.xuanzx.com/163zmekhlfi.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163xnfsjaeb.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163afnppbfz.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163dwidaofi.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163spacnkxt.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163kuuauask.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163wbwglbqd.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163wkdkrsom.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163usedtgdb.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163bnqdltbv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163fujqbrpd.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163wwtogeyt.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163piskatpm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163mjftmmxj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163owzawzjf.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163lgigrrcn.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163jxyfrfdq.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163vrtpaerd.html

[A03] 常量定义
来源：http://www.sxryk.cn/163sssevrmp.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163bnvlmzvq.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163xbqftngn.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ffsrccbj.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163meodyiji.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163zhxxkwcw.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ackdxwzr.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163cgmemchc.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bryuckij.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163tdchkcco.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163tbczwcnz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163thjoahjg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163jhprcrjl.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163itmpftmn.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163uurbrmvs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163dlvjrmxx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163auxcbzgc.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163hyvnedkb.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163chumbakg.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163lifdgana.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163rqaqdfql.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163kgevhkcp.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163sburdlkt.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lkvuxobq.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wnrmcoff.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rvxoyorq.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wohzbydt.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163bnfuwtqn.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163osbrrsqr.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163qdsajvnl.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163stugvjkk.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163vijoelgs.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163xstemuhk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163svrpruwf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163tyizxkjy.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163bdvuauix.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163zeqafkev.html

Py:   str(42)
来源：http://www.xuanzx.com/163rtgkzhzb.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163qyupqlct.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163ujtwapwv.html

TS:   String(42)
来源：http://www.aibaodan.cn/163sopltwkl.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163qccjvteb.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163epakwwzr.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163zbpfaxaw.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163kbslnpaw.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163aovpliuk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163cyoarfql.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163sdokqpcw.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163kbglscro.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163atxsouzy.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163dwdiklzx.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163jlipriox.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163pwrpuhmt.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163knkoyzpj.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163nautofsd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163fpbrhqit.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163wygcdkjh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163lybkagby.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163vxooahna.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163bpfpatge.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ufeokorf.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163xbjebren.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163fjxazgpm.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163iyiezloi.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163puxebpkf.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163vaojfxqx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163vguocvdq.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ksennfsw.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163crdrsbev.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163qywzmwsa.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163hpxunvgl.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163nhiycbdc.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163egfuzgyk.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163cpqhdhnz.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163okmloxxt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mymicmmx.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vnovbhct.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tmxxfppx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163sgqjtowp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lbtulcys.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gkhshqxw.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163dlmfpuoj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163uwchhqnp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163qdshwhiw.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163bluehzog.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163vceyqnzx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163qvenmpga.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ofpbpzsr.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163mxswygur.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163acpalcqk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163xybjokus.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qlqgodmq.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163attuihtz.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jnebxdck.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bbqhusdk.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163spxkylcm.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bgznbwlh.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163utfipqva.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xdxjfabj.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163idrjqjbw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163wjmypngt.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163timtobmh.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tkceqvlt.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pzsgliol.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163xgghfhcm.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jjridlhz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163rxmzqhcv.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ogqulrbe.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163umggkrfn.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163qspywgnd.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163pgjrotgn.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wwzfracu.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jpcooslw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163jrycuwhj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163irxzaujb.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163dihtmoee.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163trynnloj.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163eiqnctwp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163fumtxjlv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163coqlheci.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163nuzoedrw.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163qolkuaha.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163wntgsurh.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163umuwfvwz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ntpwowws.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163dqycckid.html

[A17] 位运算
来源：http://www.aibaodan.cn/163nvydiidt.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iqrsriyv.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163nqrmyqzo.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ocanprky.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163wcvymbuy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wysdnjve.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dzhcbahb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vqpyeqeg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ynzcxekc.html


<!-- 参考信息 -->