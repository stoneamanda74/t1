外链999!wailian999！

[U103] JS：定时器
来源：http://www.sxryk.cn/163gmbnscnk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163dfwgqqpz.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163rdrdmydq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ftljfahs.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163nxqirvks.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163mbsaqlqa.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163dforafsx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163fpynwmct.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163rxgxmmub.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163fmmrtnnm.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163agjwmwrk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163kjwbjkwi.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163dcxbijia.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163sknsqnqe.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163chfvhuwf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163gzmelbrn.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163afoxcotp.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163iiukwbrs.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vvjcbjxj.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nxqlwdyo.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163kthrglxk.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vcaqrzgh.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163oekmyqre.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rkmiscwy.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163pfduodmp.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163gsrllqsw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ecbidtxg.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163wggisjmr.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163voxbsinr.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163gldegkin.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163orfrgfsq.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163vqmjsvka.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163rcbmruob.html

npx vite build
来源：http://www.aibaodan.cn/163fowgntrk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163jqugavbb.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163htskfrif.html

================================================================================
来源：http://www.sxryk.cn/163xgdxudjg.html

统计汇总
来源：http://www.aibaodan.cn/163bcztdcbf.html

================================================================================
来源：http://www.xuanzx.com/163whlcaqzj.html

按语言统计（条）：
来源：http://www.xuanzx.com/163jafcpubd.html

Python ......... 252
来源：http://www.xuanzx.com/163wfxvossy.html

PHP ............ 252
来源：http://www.sxryk.cn/163cchdsfch.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163gkqelcwb.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ymnjwhvb.html

Java ........... 212
来源：http://www.xuanzx.com/163fotpgdqj.html

Go ............. 212
来源：http://www.sxryk.cn/163uwcniizd.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163kmmvcwhx.html

C# ............. 212
来源：http://www.aibaodan.cn/163aiosojlf.html

C .............. 30
来源：http://www.sxryk.cn/163bajenpxu.html

C++ ............ 30
来源：http://www.xuanzx.com/163zhbqsios.html

SQL ............ 90
来源：http://www.xuanzx.com/163stausqrc.html

Bash ........... 80
来源：http://www.sxryk.cn/163qfyigohq.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163nypesfot.html

Swift .......... 15
来源：http://www.xuanzx.com/163dddehefv.html

Lua ............ 10
来源：http://www.aibaodan.cn/163zaqbzbmy.html

Perl ........... 10
来源：http://www.xuanzx.com/163daxjriug.html

Scala .......... 10
来源：http://www.sxryk.cn/163iyiibsdp.html

------------------------------------
来源：http://www.xuanzx.com/163yohtercy.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163dybpiqjt.html

按章节统计：
来源：http://www.xuanzx.com/163mpvyrqve.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163inqyoiet.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163bqyxypem.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lvgwlfuj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163typyhsbb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163httodvhr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163rilahyil.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163uhnjscyy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163raxeejyy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zfwnqvmm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163oogkjomz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jnzhahgr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ujdngrst.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vwblgtsb.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ghfwdhqw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ofirzxxw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163znquesex.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163shriryvg.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163qacqbyge.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163nfugqtnr.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163hxcfdywo.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163obnmhcti.html

------------------------------------
来源：http://www.aibaodan.cn/163ebcwbhkj.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163qvbdvajo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gohxzppy.html

使用提醒
来源：http://www.aibaodan.cn/163rwlxlbqe.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ufmlfyal.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163kcudfjov.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163rqjxzygu.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163fhlgwmev.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163ajlnkojk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163zhviwfhq.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163xbdaapwy.html

================================================================================
来源：http://www.aibaodan.cn/163inhlxicg.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163hwazjcbi.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163odrmycbo.html

================================================================================
来源：http://www.sxryk.cn/163zyiiuxxd.html

【收录内容】
来源：http://www.xuanzx.com/163hjfnziij.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163uiljixzg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163rouzuhds.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ahuvaila.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163zzastquj.html

【使用说明】
来源：http://www.aibaodan.cn/163konoyble.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163vpgxbwiq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163mscdcjlx.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163aatzapdi.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ghzatnfi.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163emkoncsk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163uvhuyxvc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163jefbcvgl.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163wkaavspa.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163wuubqajb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163shlzopqq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163tefdxsup.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163zjhczgpv.html

【文件统计】
来源：http://www.sxryk.cn/163jtbqxndk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163aqylkcas.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qtuysldq.html

目  录
来源：http://www.aibaodan.cn/163uucrmmpp.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ayqbavik.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163exzgqyxb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163chbnjaqw.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163amtjscls.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wzvclxkf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163ugpdikca.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163trbbqguc.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ufvqqcom.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163xkttrpcb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ikwalaqy.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163tyvkdwum.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ksedysrm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163glcrtlek.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cngwygtj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163htgoujac.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163miukahcs.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tqfdwvto.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163thjdtvpl.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163htibdyag.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163xgzryctn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163okdwular.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163pyioflch.html

================================================================================
来源：http://www.sxryk.cn/163zvmtjxxi.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163ryxbacdc.html

================================================================================
来源：http://www.xuanzx.com/163nkpozvlw.html

[A01] Hello World
来源：http://www.xuanzx.com/163frvhuvgu.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163ndxstlus.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163jocofmnz.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163vvqxxtti.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163serbrydm.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163lhtupuhz.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163hxvjfuco.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163amppiluh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163ejspftcs.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163hgvbtsvf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163jsqxipdy.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163rqehkchh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163wqawhvzv.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ehkwmjei.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jmbkqnfj.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163sgqukqyz.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163gabjhycs.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163iruczood.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163frsydolv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163bkphecvy.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163dtobfnuw.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163fkchvxuw.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163cukaeaxe.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163drwnijvi.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163tdxfplkd.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163mudrhwtf.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163oaicpkmt.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163xxxbpzoq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163mpwjzdcq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163nfnlihcy.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ifftntmw.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ggjmhvcb.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163fpiofoyz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163injgybpc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ntbtstcc.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163wggreqhh.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163xbroymeq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163faxvynaj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163kbvmskft.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163gmqmlbrx.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163rqdgbnhg.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zrjtndby.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163tkugnwhf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163nvvrymhk.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163dhjurbbx.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163xzrwjqgy.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163cyticbrz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163scwwfgkz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163ultrgipi.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163qztuljqb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163zvpcsceu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163bqslpjwd.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163mexnjmpo.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163aaeicses.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163mabugwqe.html

Py:   str(42)
来源：http://www.sxryk.cn/163tdwhijow.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163ivjvlejm.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163nyznveow.html

TS:   String(42)
来源：http://www.aibaodan.cn/163oxhkiphq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ctepkzru.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163hjgcvlii.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163taeafnez.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163zidftvnc.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163mnyclvxt.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163lgmbfvzq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163matkuqnt.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163unfewqwe.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163kgfisoke.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ocbsphfs.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163hjnswknl.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163zpavipab.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ishhrbwc.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163lunkhaie.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163tqrwompo.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163dlnvrkeg.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163jwsazkxt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163dpolojci.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163btfptxyt.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163xolwasml.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163otnkwjne.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163prggweug.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163dcofbctm.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163arqkvzmt.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163jhzudfiu.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163lpcpnldw.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lvimvvxu.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163htjbgvgy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163quglwksp.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163pykxiwkc.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163trgdofua.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163qufjemoj.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ogoxcooc.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ogdcchia.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163irotlmuc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bemjrhnf.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wczxfvxj.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163pxvmtpkk.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pplmiwxi.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yuhbxroo.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163fvvutjlb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163eoolimob.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163vnazuatn.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163mdtnznlh.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163vydwsnvz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163pyobdple.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163fahtvzgi.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163xrkyegqg.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163zsslbyuv.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163gdehtqdf.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163uhtpnyiy.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163vpzmyogq.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yfmncuru.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lkmlujou.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163ybfhkgxg.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163okgddqrt.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163awkvmera.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jwqgnocu.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163nqmjutxv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163zfmdqzet.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zeagoslr.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ijkekroo.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163byavgajc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163omejngkk.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wsvmagpr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163mhqywbqk.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163psundrvq.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163unjfogdl.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163qclbizco.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163rfjdawop.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163vgnahqys.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163kjqcgzgv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163kkcjyecu.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163xymvcgxq.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wtoftnaa.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163npgiyuis.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163qgepuqzs.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163zpppnmtb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163jysvootf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ruwywucx.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163iwoyduqi.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163lecbgvul.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163hcighghw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163hnkxvmsr.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163cbaupqar.html

[A17] 位运算
来源：http://www.xuanzx.com/163ocmzadte.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oqvlkegg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163cfdhohwp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zkiexemo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163btvjaizw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mwacxyjq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zofpbofa.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gdimubbp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bsndyrjd.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163fffhcpex.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163dgxckdda.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163npparlmd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wszrfvnd.html


<!-- 参考信息 -->