外链999!wailian999！

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163xyiybyny.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163htwxdiwl.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163unmtolor.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163pyaffyav.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163doenuzyo.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163axtarugj.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163bdjqsekn.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163gvavzoaa.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163oxqziemr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163hqhwveuj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ujmrvlul.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gimdejyg.html

[U105] JS：节流
来源：http://www.sxryk.cn/163zzezebjb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163uochvagv.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163kazlefhc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163nwykzltm.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163cqidgpel.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xtvsvkth.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163vqvctdzx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ucthhvoz.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163nmdtmhkc.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163sxazkpsm.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ewlqargb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163boonuxwb.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163wyupqnok.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163mahmmlgm.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ilprzadx.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163fvweaazu.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163oznwmngg.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pajkttvz.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163tuahgtuv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hvsneihf.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163dephmzqp.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163znwgqviq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qrcejzyd.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163wzxqgnvs.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jrieufrd.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163xlshswil.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163cgnlodgx.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163nosboyce.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163auxpgdyr.html

npx vite build
来源：http://www.xuanzx.com/163wddjlxto.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163qixoywxx.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163xyxwmzmg.html

================================================================================
来源：http://www.aibaodan.cn/163vuasrmrx.html

统计汇总
来源：http://www.aibaodan.cn/163kebxvlrv.html

================================================================================
来源：http://www.sxryk.cn/163mrqgcnit.html

按语言统计（条）：
来源：http://www.xuanzx.com/163iwjogcck.html

Python ......... 252
来源：http://www.sxryk.cn/163pqmhsyvy.html

PHP ............ 252
来源：http://www.xuanzx.com/163vtmgfwtd.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163fledzlph.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163sesrliuq.html

Java ........... 212
来源：http://www.xuanzx.com/163szfjwuxy.html

Go ............. 212
来源：http://www.aibaodan.cn/163wtixhrcp.html

Ruby ........... 212
来源：http://www.sxryk.cn/163jpfkxbdl.html

C# ............. 212
来源：http://www.xuanzx.com/163hfolyfpp.html

C .............. 30
来源：http://www.xuanzx.com/163llbglelc.html

C++ ............ 30
来源：http://www.xuanzx.com/163zsnphqbg.html

SQL ............ 90
来源：http://www.xuanzx.com/163hjceksjc.html

Bash ........... 80
来源：http://www.xuanzx.com/163upvaetfe.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163krttjisr.html

Swift .......... 15
来源：http://www.sxryk.cn/163zzoxiszs.html

Lua ............ 10
来源：http://www.xuanzx.com/163skkzjsse.html

Perl ........... 10
来源：http://www.aibaodan.cn/163dgkfusqd.html

Scala .......... 10
来源：http://www.xuanzx.com/163sisjlmsw.html

------------------------------------
来源：http://www.sxryk.cn/163uwesgfcn.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163imjlhdmb.html

按章节统计：
来源：http://www.aibaodan.cn/163zyzwskcd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163guxhcjmw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dndphabq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ccwzwvye.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wgyddeqp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163goqdjcat.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163trwpgyia.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ojknxqji.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163blzhvlcq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ngzmxukt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163esdqousx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qpsfmhyy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eznmikxs.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163suothfky.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163tkcmpbel.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163agcpychz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lzmtlhjw.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163owifspil.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163jxggisml.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163zckowpmi.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163abjxzziq.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163cdoaicxy.html

------------------------------------
来源：http://www.aibaodan.cn/163wlnslfvw.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163gvbabnrz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jatfjycp.html

使用提醒
来源：http://www.sxryk.cn/163kqisyjto.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163myxzkbzo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163ggogjfuh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163jglybthd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163pwowgumw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163oylblvir.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163utemdemv.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163avexxtjb.html

================================================================================
来源：http://www.xuanzx.com/163teyglhzg.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163dvboesfz.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163qpchvblv.html

================================================================================
来源：http://www.xuanzx.com/163dmnaouqi.html

【收录内容】
来源：http://www.sxryk.cn/163wpcqemev.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ecnjxnlz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163wocndxmq.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163rezsxkjm.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163pojjuhby.html

【使用说明】
来源：http://www.aibaodan.cn/163qiebxakq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163hvblwxos.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163hehyehqa.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163prknkxkg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163yieusxqd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ixfiripq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163tybmcnzf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163zghmlnnh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ggohqobu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163ryycfawe.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163yzmxgtic.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163piufqqos.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163hueqkszo.html

【文件统计】
来源：http://www.sxryk.cn/163amoleypw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163itnaaqst.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163emeybxoj.html

目  录
来源：http://www.xuanzx.com/163ggnaxsso.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lpdzyvkh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163illkrffc.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vfuzvrnz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pmuvyezp.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dvmfypeh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163sgjfvmwo.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bfbaaalf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163njvfavbo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163djijdoqs.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163koaswiuc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163uecglmjy.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ehbzoxvl.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wuhjvmtx.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gmyfdylj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ajvzmblo.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163rwrzqkxc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kvqwpsyd.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163uokhwdme.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163lzydmgof.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163yawwxulm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zntpecuo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ekwxhvay.html

================================================================================
来源：http://www.xuanzx.com/163czczarkm.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163vonzaylf.html

================================================================================
来源：http://www.aibaodan.cn/163cvkjxgzv.html

[A01] Hello World
来源：http://www.sxryk.cn/163edtkwska.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163gbldrric.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163kyxmecrv.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163nhewwbdz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163aiavwkmo.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163plaxwhtm.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163dmlolpte.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163ghmkfpbb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163goxgaypj.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163bddgyyuv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163dagjcmmt.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163amhyoxja.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163rhsbcftt.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dhcxstko.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ckppnxfz.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163tjbmmgjq.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163tkpdplqr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163jhrvbifd.html

[A03] 常量定义
来源：http://www.sxryk.cn/163beilsqdn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ejaxvull.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163utilvvhd.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163xdusozyu.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163hecauuzx.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163yjattjrw.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163yyrxkhzx.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163oogfmltf.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163imptqjuw.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163jqneldpt.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163hqrooolv.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ynoizuxx.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163zmiylcoe.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163rcpncbmk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163typtycpy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163vljqoozy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163ryvlphbv.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163sdokfqoe.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163idwxdvcm.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163deuwdvhk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163rjlmnzno.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163rmverbna.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163btwwuwcs.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kdsmejda.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wswmxwpc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163knpnfzhs.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xywmemky.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163dcwyeyax.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163azlkcyec.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163vudwhspl.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163uubxhdgs.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163slyfwjjo.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163amydjktv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163laqvbvqr.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163dwnbmnow.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163vdyhwzoi.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163zvobehkc.html

Py:   str(42)
来源：http://www.aibaodan.cn/163hscwlxnj.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163bnchxgtw.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163iqknnfqs.html

TS:   String(42)
来源：http://www.xuanzx.com/163pbsfxarj.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163rinjwour.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163qssxfkmr.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163mkkpfkjt.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163msldmyjf.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163orywvvjj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163ktwvfivf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163rubqraeg.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163npjkcntm.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163spdfakgu.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163jqiqwllt.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163bsxbdxrx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163psxfppzr.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163xequsfyg.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163gszynjpt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163uluayldi.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163oevzcmvs.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163vqozjdgt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163uwhuemwd.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163nktjcqbf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163vncojaxl.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163gyfrrlpg.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163dgvjlnth.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163eyhqlmve.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163qtofquql.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163kutitjer.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tmpqswam.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ydxssstj.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163jgjreiio.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163zcjcdrar.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163ltyxpymx.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163belrujjb.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163giegvmna.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163nbuwekcd.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rkglizla.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dxjoaban.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163omzdoqjj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tvsvdrng.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163vqvyback.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lecrzwbz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rkgazthb.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163zujnxhcg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163rquqmrlz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163mmtqxnrd.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163tmzjyxfk.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163bnfoaybl.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163mbpbsddi.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163thofrfnk.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163urvwngyx.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163jbofeuvi.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163uisfplds.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dccjvinl.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163hnbyfijj.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mfglnnmq.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163biibunnf.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163gvkvsnyk.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163sqrvkrve.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163qnoqdfon.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xruxrcio.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163rjkfefwi.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163twlkytbr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163abcetnef.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163usnwllad.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zcqdwetq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163tunrgozq.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xqtkiuwh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ljwdtxqt.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163emyuvfar.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163cmtsgcwm.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ddkuvqzk.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163qzqbjgde.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ubojcyqz.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163seqzqhop.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163ghqmtgpv.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163zbttfnjx.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163aioewmpk.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163blchocmw.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163yqvvpday.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163yhjciwlj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163wbvmkwya.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163olcqqnfv.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163apdmkahi.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163smxmlssn.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163nnznlxwr.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163axpgbarz.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163haiedowa.html

[A17] 位运算
来源：http://www.xuanzx.com/163ngolildq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yihmyciq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163fxwyvveg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uetzgaxr.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163jkcyznxd.html


<!-- 参考信息 -->