外链999!wailian999！

[U103] JS：定时器
来源：http://www.sxryk.cn/163mfzartcn.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163rxqzcnhf.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163fqawwlrw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bykftpua.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163yffgumiv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163mcmlwylt.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163oenhessx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163wkkvusxj.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163nttkzzyv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163gswsyivd.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163itbpnxfd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ihxlxhvf.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163aleqktct.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ihkawvez.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163pgwhdxvb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163efjsbudm.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163bobpyjor.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163bxszgguk.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ymddsolt.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163emwuzzcj.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163llvdndoe.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163znjlzmwx.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163whwtfxoq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wqpfztvx.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ptjnsbaq.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163jxbmtdkj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qzsgutre.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163xxcpwdyv.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163quwnvijs.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163nhteequs.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163fzsmvfvb.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163fcuxcbps.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163eolmyvld.html

npx vite build
来源：http://www.sxryk.cn/163tjzugwec.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163xypragxd.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ijbxvsjs.html

================================================================================
来源：http://www.aibaodan.cn/163pvflptfr.html

统计汇总
来源：http://www.aibaodan.cn/163qmvalabb.html

================================================================================
来源：http://www.sxryk.cn/163jyknyxcv.html

按语言统计（条）：
来源：http://www.sxryk.cn/163xpwpfnpk.html

Python ......... 252
来源：http://www.xuanzx.com/163nmptjkqs.html

PHP ............ 252
来源：http://www.xuanzx.com/163cdyeahzw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163bpivfkix.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163vmcghfss.html

Java ........... 212
来源：http://www.aibaodan.cn/163tjremmus.html

Go ............. 212
来源：http://www.xuanzx.com/163mscommkh.html

Ruby ........... 212
来源：http://www.xuanzx.com/163lkwrhtwr.html

C# ............. 212
来源：http://www.sxryk.cn/163zpxihlgm.html

C .............. 30
来源：http://www.sxryk.cn/163yzhpdnqk.html

C++ ............ 30
来源：http://www.xuanzx.com/163jaknswig.html

SQL ............ 90
来源：http://www.xuanzx.com/163phqtwpod.html

Bash ........... 80
来源：http://www.sxryk.cn/163dpybpwkn.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163hnbwbvjy.html

Swift .......... 15
来源：http://www.xuanzx.com/163qspyweks.html

Lua ............ 10
来源：http://www.xuanzx.com/163kpgfarah.html

Perl ........... 10
来源：http://www.aibaodan.cn/163nwaudlne.html

Scala .......... 10
来源：http://www.aibaodan.cn/163trfhgaqe.html

------------------------------------
来源：http://www.xuanzx.com/163ppeixenv.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163xzzqpkce.html

按章节统计：
来源：http://www.sxryk.cn/163sgqigokz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163kloduqwd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163okqoloek.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xzqemllq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fkwsjvpy.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163pwipyohr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wzaufzvr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163egcscbqw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ekuooohr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163uuupybxs.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mgzyhfar.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xwxrrvlh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pcayfjgn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xkrvtwbe.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163jlneqwco.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163teabledr.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163crujcbnq.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163nxfohpsy.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163iwjqdivh.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163aqouqvvy.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163oxsnhzsa.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ksuufwtr.html

------------------------------------
来源：http://www.sxryk.cn/163jarjhtlk.html

合计                                  2106 条
来源：http://www.sxryk.cn/163imholjlf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jzcctgmb.html

使用提醒
来源：http://www.xuanzx.com/163tddsywji.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163aqwshqqs.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163mqdkrgvg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163dstpextr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163uvpdwsqq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163zjpstqcg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163adgwnfhp.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163xlgwladf.html

================================================================================
来源：http://www.xuanzx.com/163ekyvadko.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163dijnpjld.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163fqcawiyv.html

================================================================================
来源：http://www.aibaodan.cn/163gjprhgty.html

【收录内容】
来源：http://www.xuanzx.com/163txhqpbgw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163wfsfmrsi.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163kclqsimd.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ruowchxh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ykgkpifp.html

【使用说明】
来源：http://www.aibaodan.cn/163zxaeesrc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163zvfmpzix.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163wkmzxfip.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ukoddkfi.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163dyhbgofd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163xfqywcwq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163xjdlntnk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163uwddpfbd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163aesgrrnl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163clojgdfa.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163aowymern.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163uuhzzeef.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163isqytrgs.html

【文件统计】
来源：http://www.aibaodan.cn/163trffziyf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163iljqjasr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163aiupksac.html

目  录
来源：http://www.sxryk.cn/163kfmaoasi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163moqbwqdz.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yaowedbp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163tdwwjgbk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163rrqnrzmn.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163mpsdopcd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163xxxofubk.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163alfhvgfe.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163tyqjgkvh.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163jejqkabg.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ovqwvogl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163tzsoypxy.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fezoibdk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163atlyqtom.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ldhxzrio.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163msukxaio.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163vulwowgw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dtmqlfzp.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163usdxbuhq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163hrfixtss.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163acmrjtgn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nzpemhnv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ogbyayes.html

================================================================================
来源：http://www.aibaodan.cn/163tmjdwbul.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163fnmiymlz.html

================================================================================
来源：http://www.xuanzx.com/163icanojla.html

[A01] Hello World
来源：http://www.sxryk.cn/163fcbxdyls.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163keuwstja.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163fryfxbfl.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163zvoprlub.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163ijcrjxhl.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163jepsckot.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163jvlyslil.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163oejwexwt.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163uygoqopk.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163mtzqjtkf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163oambultv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163ydkxrnlq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163xgoeydeh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163ldlkydnr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163yipsqhtl.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163vrykaqxu.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ubjmuvxk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163gpcrpjrk.html

[A03] 常量定义
来源：http://www.sxryk.cn/163ytvxjooa.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163okntfxdz.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163lxwdbigk.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163yvsjrqzr.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ttifbmgr.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163inocoips.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163duimvvyd.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163sjtvgqcg.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163hkvubfnr.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163eyqvhjnn.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163uquwoqnm.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163vysrvxbe.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163seuzqkcw.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163nmqizlub.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163hwwvbipm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163rwfnltrl.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163gdtudfcg.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jrnivauk.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ejlbdtlj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163ihucctmb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163jesykvqp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163oazfygzy.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163hgvmbuvc.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163uodhnwmz.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pqisxnxx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fudfdjpy.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ipxmoqrv.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163gszchbti.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163znyfxqsz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163tyqcpsms.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163tlsdchvm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163bqmgpbub.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ibtkdohu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163nftrxejz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163vlrxszuq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163zitokhnq.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163mnxcpvcq.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ctsoebfk.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163qogyhzkt.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163znamazsq.html

TS:   String(42)
来源：http://www.sxryk.cn/163lnqoesza.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163recgpskx.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163wcpvesfm.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163qcelxntl.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163juanyqro.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163wexlcqvm.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163dwttdtzq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163fvjldxdc.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163udlgwjfw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163eruptvfa.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163hjmmokdd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163sekihwiv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163fwvuwxti.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163rgvqsfuu.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163qbwjkvsl.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163gxzldyty.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163pgwzsdwh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163yfeyehed.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163hxhlnndk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163pubmdzoz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163zqhvdhof.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163vmsjnxio.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163ecerfrft.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163tswjbuaa.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163usetlmcm.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163qxvrcfbn.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163cihnlgoz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163thsnlleg.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163lujbezow.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163bhbjuuqo.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163hbarxmty.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163kfvkdxni.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163qhihqzom.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163tjyuugxc.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163odqsgaal.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163paofwlbn.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ijrmfupj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nhickhus.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163fiqlkmcy.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gnniearz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163oblfnxqo.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163etjolrnx.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163ozkwcnjj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163xbngfilb.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163htchmwek.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163rrqdanqk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163vpsjofiv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163sxfjmayt.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ccaltxjm.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163sbbvddne.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163ydwpnpyx.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bpizbxhu.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163efxrelos.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163prhenfuw.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ysfnqhws.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163rnswroyw.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rltqwtwj.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163eoklggkm.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163pjkiexxt.html

[A14] 注释写法
来源：http://www.sxryk.cn/163ufsbjvvx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163nvasduib.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163etgzbgzq.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qkgngvjp.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qagjtqjg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163hpfcynbm.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163anbiciar.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163jkwfgbgi.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163iglqnwaq.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163imefguwc.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163hfkqdyup.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163vcfqfzxr.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ijhmrkjv.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163agkgzlpg.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163obqcgrhu.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163cqudfrvw.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163hprxxcqw.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163hoqmmmpv.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ujxumwos.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163gfzvrqck.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163riwrvaqa.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163mcxmxxmf.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163iawbbqmq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163ijycikfj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163qcjnnzav.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163axoakvlo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163xypdksia.html

[A17] 位运算
来源：http://www.xuanzx.com/163ohaleakv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163izbnqepi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163qdftngtx.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xveilhpv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163npabudzz.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lmphsctc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zbekdkud.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163isnszouy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zzrqvpgn.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ttwvbagj.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163flxmnwnz.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163nmjfljbp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163axpmzqcg.html


<!-- 参考信息 -->