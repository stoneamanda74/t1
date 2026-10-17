外链999!wailian999！

[U105] JS：节流
来源：http://www.aibaodan.cn/163qomwkvwo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163eyinpojm.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ofbgnqko.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163meurjvji.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163agqaakxu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163sbmqckgm.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163wzybpjzn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163xdgjfkrb.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163dwxicrpz.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zuoranfl.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163gpvatciw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ludgjluf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163cschjqht.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163zkbwiaya.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163erwpkjok.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163tjaepbzq.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ifppqnhq.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cligtggv.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163mokyzjdu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gbamltpt.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163edenhlvw.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zytlxxvh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ujbtbmvz.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163oyvtesoi.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163xwdzsbgz.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163hkhxlavs.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163udddfsiv.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163vgohjbau.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163lfnqxfah.html

npx vite build
来源：http://www.sxryk.cn/163palibokl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163lheqnvvv.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163phfeuoey.html

================================================================================
来源：http://www.xuanzx.com/163seivfugw.html

统计汇总
来源：http://www.sxryk.cn/163ydnpixtn.html

================================================================================
来源：http://www.aibaodan.cn/163fdngiqzk.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163tnocnbld.html

Python ......... 252
来源：http://www.xuanzx.com/163oyuabrxs.html

PHP ............ 252
来源：http://www.sxryk.cn/163pxwtamjc.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163xkviejsb.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163jxouoohd.html

Java ........... 212
来源：http://www.aibaodan.cn/163kzhtqaal.html

Go ............. 212
来源：http://www.aibaodan.cn/163lnjwfysu.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ajvmvsjf.html

C# ............. 212
来源：http://www.sxryk.cn/163itcdrlrx.html

C .............. 30
来源：http://www.sxryk.cn/163mrjdnvao.html

C++ ............ 30
来源：http://www.aibaodan.cn/163snlbuest.html

SQL ............ 90
来源：http://www.aibaodan.cn/163lcfparvl.html

Bash ........... 80
来源：http://www.xuanzx.com/163vemzypov.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163fmmjmoft.html

Swift .......... 15
来源：http://www.xuanzx.com/163aeinfcfg.html

Lua ............ 10
来源：http://www.xuanzx.com/163atmpzzkp.html

Perl ........... 10
来源：http://www.sxryk.cn/163gjyrkxdd.html

Scala .......... 10
来源：http://www.xuanzx.com/163cpznmrie.html

------------------------------------
来源：http://www.sxryk.cn/163swxmnfva.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163uhmvlfng.html

按章节统计：
来源：http://www.aibaodan.cn/163woesvmyi.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163joemomqn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163znkvqrlx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ujcomgsq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163oiwqbiah.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163inclungg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vcpekcio.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jxiqcipo.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163putgvubi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ypfcxoqd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163kalvkyyl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163irdwdvqf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163swvlxtxe.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uoctjgsj.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163evxrldwa.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163vpfcnafn.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163puhxukyy.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163rwnyxcsa.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163anmufzeb.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163dgxaimto.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163mueecqka.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163vreeudcq.html

------------------------------------
来源：http://www.sxryk.cn/163gsfuulyf.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163mnkutjou.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163tixwfgwm.html

使用提醒
来源：http://www.xuanzx.com/163oqftmnhs.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rfjhmxyx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163usntaqqg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163xkwkvnyr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163hmxuwvov.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163qkanydye.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163nkaokxrx.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163tshhabac.html

================================================================================
来源：http://www.aibaodan.cn/163vfsnquie.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163urggmpch.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163glrldqat.html

================================================================================
来源：http://www.aibaodan.cn/163wpoanspr.html

【收录内容】
来源：http://www.sxryk.cn/163ahqaozug.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163oxracelw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163awmnnotm.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ldrwhjxa.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163hrjtykxq.html

【使用说明】
来源：http://www.aibaodan.cn/163uiawmicb.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163cqlchzcx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163wvyqecca.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163lyvugiia.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163bhrebkwq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163jcflxntz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163mbmzyhah.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163hapcagcc.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163mlyfyiaq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163vrbkvton.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163kxzbyrmg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163lweusgxy.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163rvcjcktu.html

【文件统计】
来源：http://www.sxryk.cn/163qwqrnvgo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163osvpybix.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vigoqvls.html

目  录
来源：http://www.sxryk.cn/163ixvecyqf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163opjrlhwz.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wvmxqlgf.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jmxabwsv.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ilvpwdiw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163brdlmyjq.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ijunlqyw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ecomtuxu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163umghagks.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163kfthlyon.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dmpoicfo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zzpsognb.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tuojmdps.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gsrbkxcg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ketttmwf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163qhghcmoc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163zfuzpklg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163duszonsh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163amjtwoby.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163aybgynqn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163peweqmkh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163bcnyquce.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fpxoksyd.html

================================================================================
来源：http://www.aibaodan.cn/163oeuvgxhk.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163bxecabho.html

================================================================================
来源：http://www.aibaodan.cn/163gbwykjsm.html

[A01] Hello World
来源：http://www.aibaodan.cn/163jsyvlgob.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163klkfpujr.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163yygvuaur.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163yetjhupx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163tnjnvjai.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163ddibptuw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163kgximgsm.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163dmwmfnbx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163aezoltfp.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163zkjnbxei.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163wyhgfbuz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163yxmweuzb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163omqzbmpj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163jfhswqno.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163sefpsiye.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163kvwmvgpt.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ijwteiut.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ucjgkqmk.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163nciuscpd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163pernavky.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163pplsphea.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163lkumtgqv.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163xyoelcjs.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163rxgedfkf.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163scaagygl.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163gwoqwsor.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163hyrnkloa.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163lmnqausf.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163wrsvpgcc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163qmvzvlpl.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ivreyxbm.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163jqdttlas.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163nuzyylym.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163ahtrfhpp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163hcwhbghc.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163jdykkhdf.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163wxassues.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163eowlgdyo.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163bglmnryt.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163xqohmybs.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163bupshitv.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ogdekzpv.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163buoexyct.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xxggvdbn.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gknbnglx.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163svmenqdr.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163iiphufgh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163qgcqdvbh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163nppjqfvo.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163gzxkxrho.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ybosnnah.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163kotvfrot.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163sldsuubk.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163mlwakfcz.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ftsviflh.html

Py:   str(42)
来源：http://www.aibaodan.cn/163rprtplco.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163moybqgwk.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163bxdrykmf.html

TS:   String(42)
来源：http://www.sxryk.cn/163sxizlpwm.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163zwsjpgca.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163jupxsamn.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163rdpltqcw.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163uuycxobv.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163jizskdxc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163ihfyzwvl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163qyygvcpz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163znagqutl.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163tspvsfcr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163yfnaktke.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163xnguggaw.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163basefaub.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163fzyjwmly.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163wyaxupfs.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163fpupqnpj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vwozqwfl.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163imzhbkpa.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163jwlddqjg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163jbjqrsxh.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163vwyforae.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163lhvppgtq.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163toqergdt.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163yxgjtwoj.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163dcnmvwfl.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163uvluqgsc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163tiqfkmak.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ppemnepq.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163xydqxmdd.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163czxygoya.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163fozmjymy.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163colyamhe.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163rkydkpgw.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163sliodhgo.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wvtpqigp.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163brtetwtj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yobgietx.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fjfjlgyk.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163patkkbed.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163txjcnjxf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ijlwoqvk.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163khodqtzg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163ftqgyqxh.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163dxmqsvii.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163lanrcwif.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163adijyidp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ulpkijdp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163gmtwqdfg.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ekqdbiki.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163sruqfcgm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163qvsonglu.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gzftobpk.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163msmrpwcs.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rwszbsvp.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bjwskhpn.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vprscnto.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cqolckfz.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163kvwulutf.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dklkpjni.html

[A14] 注释写法
来源：http://www.xuanzx.com/163yaaeaado.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163usuannyp.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fhnvlqfm.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qhixitcc.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163oryoakjn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163kwtunuwd.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163eoxtvrfk.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ghjpniea.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rlcbejxi.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163zyvtgakk.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163yldqflen.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163yfdmmwuc.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jxokngwx.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163resijcbq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163pnhemgpp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163bytmoimg.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163zmsbwojf.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163oewmazoo.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163gzqclgoe.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163qdejqbbw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ebrlldug.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163wyfzjbnq.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163suekkvmq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163kefhvpwu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163pqxlaxtt.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163wgfwhsmk.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163bvgtfpoa.html

[A17] 位运算
来源：http://www.aibaodan.cn/163abiqreoe.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qqexxdnr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163wmlzzxqg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163utyqxmtl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163dmpoucad.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163seztzfup.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bvyizfxy.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ziamipue.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ccfnvbij.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163okayzjid.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163duvfhggn.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163vljiuevm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163srdcjiqs.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163uxyvnoyz.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163mlcxjmdk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163tbwnjjea.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163nmfgtysf.html


<!-- 参考信息 -->