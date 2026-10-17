外链999!wailian999！

[U105] JS：节流
来源：http://www.xuanzx.com/163wdubcptu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163trdqmuvo.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163dvjuxkje.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163cosuaequ.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163cxybeeyi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163prjxtmbm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163qglheueh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163dztrqnqy.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ikrnpysz.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zmvsjtoq.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163eoihpchj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163bbuiypol.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163crohipky.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163bzabalff.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163albddhhr.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ihfmjekg.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ykvxmjji.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xnqlnyvg.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163vxrsosfz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gkkhgcpl.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ejxwqbjb.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163yjssuzdb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ychxyiqs.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ilnwywyv.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163gnsfssje.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163xhxfgzjy.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163kmrbszeu.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163hmjyhboq.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163pfqoumvl.html

npx vite build
来源：http://www.xuanzx.com/163rghiuzvp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163nrkrqlui.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ogipvirr.html

================================================================================
来源：http://www.xuanzx.com/163ydpllpnp.html

统计汇总
来源：http://www.sxryk.cn/163ozqizlby.html

================================================================================
来源：http://www.sxryk.cn/163gbtsuywn.html

按语言统计（条）：
来源：http://www.sxryk.cn/163pjsqsbnx.html

Python ......... 252
来源：http://www.aibaodan.cn/163qpkavxno.html

PHP ............ 252
来源：http://www.xuanzx.com/163hvgkqxvq.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163hoqvycgj.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163zgsfvexg.html

Java ........... 212
来源：http://www.sxryk.cn/163jmqsydao.html

Go ............. 212
来源：http://www.sxryk.cn/163llciuoon.html

Ruby ........... 212
来源：http://www.xuanzx.com/163lnycwcvh.html

C# ............. 212
来源：http://www.sxryk.cn/163kkrhgzeu.html

C .............. 30
来源：http://www.aibaodan.cn/163hmnfmpqx.html

C++ ............ 30
来源：http://www.sxryk.cn/163ffsohola.html

SQL ............ 90
来源：http://www.aibaodan.cn/163oneyaymi.html

Bash ........... 80
来源：http://www.aibaodan.cn/163xssdnnfu.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163bcpfqrxe.html

Swift .......... 15
来源：http://www.xuanzx.com/163nhcjyogf.html

Lua ............ 10
来源：http://www.xuanzx.com/163layeqhte.html

Perl ........... 10
来源：http://www.sxryk.cn/163xjedyicl.html

Scala .......... 10
来源：http://www.sxryk.cn/163xwnnbgab.html

------------------------------------
来源：http://www.sxryk.cn/163pwhntpxe.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163npcfqzge.html

按章节统计：
来源：http://www.sxryk.cn/163gzwkvanb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163zsggwjlb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zxuadwsv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163aqtmlgfj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163zlxzhmuc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163atsjvpco.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163hqxwaybd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163raityujr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163kbppiyxt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tqkjjhyt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163qxnpykix.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ipvtugsu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163frlxiugr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rfbqforo.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163rhqodwet.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163htudllmc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163usrxzkob.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163kmdalatq.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163xuttijly.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163uthfpofc.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163gepqrrqr.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163fyhjqgrs.html

------------------------------------
来源：http://www.aibaodan.cn/163ybwwmhmk.html

合计                                  2106 条
来源：http://www.sxryk.cn/163fpkwagpa.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163icdwhdnt.html

使用提醒
来源：http://www.aibaodan.cn/163jrjkxwwo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bxzgbkdz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ipenjeal.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163axzkzqeg.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163jepstnsq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163qxopyhrl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163itxlyqjz.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163nzbmldzv.html

================================================================================
来源：http://www.aibaodan.cn/163hojksyox.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163rauhbjej.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ngrlrxsn.html

================================================================================
来源：http://www.sxryk.cn/163biieedlb.html

【收录内容】
来源：http://www.sxryk.cn/163sgonnjsz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ncrbzcvp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163nuaaoskl.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163geayotll.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ssvllldc.html

【使用说明】
来源：http://www.aibaodan.cn/163gdifgsip.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163epmiovmz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163cpjbmylg.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163syzazxvw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163vxrjpews.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jvvrygiu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ablwbdzx.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163wrfgwmda.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ftvihdcj.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163owkzdwya.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163uwktyjau.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163itjifdoj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163zfrzvwow.html

【文件统计】
来源：http://www.xuanzx.com/163aljwzphj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163anvdvblr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163byuahkaw.html

目  录
来源：http://www.aibaodan.cn/163harzonuy.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lgggrcqd.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163bdfoanvp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163cxwepvza.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163trjsnzed.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163qyvhpsuk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163hcljopln.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163gnjrrkfv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163zfnalwzg.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163yzmkxidw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tyrcuovv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163vvnjsokt.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nmsebanf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vrayxacl.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163faimkhue.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163eaxvfvsn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163uycqqnqw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163sjhyiosc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163hbncfdjf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163doeixfag.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163whkckpcf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pbmfrmyo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163pdlrzhbp.html

================================================================================
来源：http://www.xuanzx.com/163suxipdti.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163tzhnpepf.html

================================================================================
来源：http://www.sxryk.cn/163vdjsjvxg.html

[A01] Hello World
来源：http://www.sxryk.cn/163clyjlkax.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163nthkwoox.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163qiwcpvrp.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163nggbpkdr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163nzkieafa.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163omtopwbn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163buucekcm.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163umjoewaa.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163fdfxxwix.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163soxyemov.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163offxfgcn.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163clwwathh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ezxkakct.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dkbttupg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ylldfpew.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163jvbshhqf.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163roxufrht.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dxzztekj.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163apkysgib.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163slorvqpe.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163pvpuwtgf.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163pkkcijkv.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ndtgnuoa.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163nrwpndsp.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163kwqszthj.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163qigcvcui.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163kfzwzqtq.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163ujsfjacj.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163wxclmwgj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163rvrlkmiu.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163kpkbghkj.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163yytaqroe.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163vekrymsv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163wjpfccnd.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163vznzizxi.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163rybyyrbi.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163vfdkmjdw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163ytzawicw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163smwomavk.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163bljuatjl.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163nogytwlo.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dxgjxeub.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gcekwoax.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gbfumake.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163raphmufv.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163zsfmnybq.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163cybxcslz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163tewmefdw.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163nrcmnqrz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ajqhonpu.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163shiswxhb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163zlzrgflf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163mgcwhbzm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163usedrdmf.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163wvtbhhpv.html

Py:   str(42)
来源：http://www.xuanzx.com/163ylcpljnj.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163mompejzs.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163adflphav.html

TS:   String(42)
来源：http://www.aibaodan.cn/163oblnwxcz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163fivhozzw.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163rdoklnyl.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163juxtxwlx.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163diaqppgx.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163aicdjiau.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163icnkzxti.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ovbbjzqi.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163oikvkcsm.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163vdersjbd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163jafwxipa.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163yfzochpx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163roeeagbk.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163ontlnubn.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fycwtiak.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163qtjuorei.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163eahawafc.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163nzflhhkx.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163fhezakpy.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163zxgyaqyr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163gduyambu.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163kcstafms.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163vfiyhhsq.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163yachqzkk.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163evrayang.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163djsiembw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163mzwbxeby.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163txlkpfmc.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163zepmlyoa.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163lpsgvbzp.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163rtgkkldg.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163olrizbgc.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163bgcnigek.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163jnbdpfca.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lldlaeyl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wzgswtmx.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163offvugll.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ynrgaabb.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163kaeoqict.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ssmtrjun.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ukqlbnpr.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163gtlkhnlu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163dcfetxum.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163wzcrzrdc.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163plxomzhc.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163stzgpcqh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163rymabmoo.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163krbhmywv.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163gnzdhtaa.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163qcvejkjl.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163qnbnhdig.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163icunnslb.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163wkqbqdxt.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ypdmsnuu.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bznndnyr.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ybhykrlr.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163iknduxbi.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163mvnhulor.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163snazxolp.html

[A14] 注释写法
来源：http://www.sxryk.cn/163zyhoqdhe.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163hocwfxfp.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163xvpcjnrb.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wqaittth.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bzagpbjh.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163xoujpkgy.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jbwxwpcw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163acppxyas.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ledijzim.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163eyzgqpwk.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163qcdkxrry.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163dsplnmrg.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163egekslpl.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163byjuabzl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163jmvsugsi.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163trtfczsi.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ggihdhcz.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163vizybrfd.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163yrbstvkb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163xwfdckby.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163dqauslcd.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163lndpodeb.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163fyjmwous.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163fcfqetpa.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163vcvzfxyl.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163rsbaovqa.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163xsizlzkb.html

[A17] 位运算
来源：http://www.sxryk.cn/163bwkcyovr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hdfqsbwi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163rtqfgsew.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163baweludd.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163dyqgmkbf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163przdpmpf.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bllmyujd.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mvumsdvb.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163epjjqfnm.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163oqmpszho.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163zkvbuwaw.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163vuaqtotz.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ffkcxvgw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ercnwmyi.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163saflioin.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ihyouvon.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163wfussvib.html


<!-- 参考信息 -->