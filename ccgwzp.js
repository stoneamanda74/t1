外链999!wailian999！

[U99] JS：事件监听
来源：http://www.sxryk.cn/163gqtmmryt.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163itzfoccd.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163szfnsybg.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163wzhgpdxu.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163iwmakszy.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163nukjkgxo.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163umyhykwb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163qperfbmr.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163oltbvaqm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163xurnfces.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163cknssmql.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pkrlibwz.html

[U105] JS：节流
来源：http://www.sxryk.cn/163fybwimon.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163arwfkypu.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163pezznwqg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163dccyabuf.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ygyplxix.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163iktjuaml.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163pzcttixj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163npselaxw.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ptdpydws.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kjxdftir.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163izjteonh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163snglwpee.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163yuwgtmsi.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163lqxjszjr.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163yunddjdd.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163douihego.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163gsxggebv.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ounjyeom.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163lfmsaabl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rxwlwdov.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163mplxdvao.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163xczkboaw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163fnwmiyxq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ramfrjxk.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163omfzrxme.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163sewrwkuh.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163knhthigi.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163dnrpcarq.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163vaxzqest.html

npx vite build
来源：http://www.sxryk.cn/163qaqjeujl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163hubvknrc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163zjannnzs.html

================================================================================
来源：http://www.aibaodan.cn/163izzszyib.html

统计汇总
来源：http://www.sxryk.cn/163nescbazi.html

================================================================================
来源：http://www.sxryk.cn/163xznapwyy.html

按语言统计（条）：
来源：http://www.xuanzx.com/163vghqwigb.html

Python ......... 252
来源：http://www.xuanzx.com/163htutevrd.html

PHP ............ 252
来源：http://www.aibaodan.cn/163qyybrbwz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ptyacegd.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163qxcwvifn.html

Java ........... 212
来源：http://www.xuanzx.com/163xgvkatyd.html

Go ............. 212
来源：http://www.xuanzx.com/163hpdhgxer.html

Ruby ........... 212
来源：http://www.xuanzx.com/163qdmtplzd.html

C# ............. 212
来源：http://www.aibaodan.cn/163tblvqhzt.html

C .............. 30
来源：http://www.aibaodan.cn/163zaxnguoq.html

C++ ............ 30
来源：http://www.sxryk.cn/163lxsmoewo.html

SQL ............ 90
来源：http://www.xuanzx.com/163bvxwfiwy.html

Bash ........... 80
来源：http://www.aibaodan.cn/163wdrfhoqt.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ersvzadq.html

Swift .......... 15
来源：http://www.sxryk.cn/163ftkgzyjz.html

Lua ............ 10
来源：http://www.sxryk.cn/163mwysobrc.html

Perl ........... 10
来源：http://www.sxryk.cn/163rmgecuob.html

Scala .......... 10
来源：http://www.aibaodan.cn/163vhthgfcn.html

------------------------------------
来源：http://www.xuanzx.com/163zpxozxme.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163chqockrc.html

按章节统计：
来源：http://www.aibaodan.cn/163crufjpzl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163evjkhlxn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163acmhurtc.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vfpvirol.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163emfwmlpv.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ehygqufx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163rttevgzz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zlqnqxph.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163mnfjrlkj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yinvkivw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163soyryrnc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rdjzqxpm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163projnpyv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gpjqvdsy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163hzsahcxu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163thumifim.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fczesmge.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163othtalpl.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163fhmbakgk.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163doypixuf.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163shwqjhll.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163qwysrdjr.html

------------------------------------
来源：http://www.aibaodan.cn/163adhcwbco.html

合计                                  2106 条
来源：http://www.sxryk.cn/163ihrjvpdp.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pzkjkayh.html

使用提醒
来源：http://www.sxryk.cn/163ljqrgwrz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163crrxqzjx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163jgtbembs.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kvbyvrtb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163lfcccqvs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163nrhbnqtx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163vmjxxnve.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163sntzhzzk.html

================================================================================
来源：http://www.sxryk.cn/163ocortqui.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ixnxjvdy.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163dbjiupja.html

================================================================================
来源：http://www.aibaodan.cn/163jlnhfuwg.html

【收录内容】
来源：http://www.aibaodan.cn/163wbojjevf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163trilggmx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163qzjtrgta.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163byjhtkcs.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163pmjmmatr.html

【使用说明】
来源：http://www.xuanzx.com/163jfqgaxts.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163iompfsdv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163termvukd.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163mxqcpthg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163wmswqhow.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163pmpgdczz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ioleqtxa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163qmmqovba.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163vymdfxbw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163vdcybdsl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163ffwajzts.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163vwfjwggb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ipweanea.html

【文件统计】
来源：http://www.xuanzx.com/163zcjjoxoh.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163osdjyuxh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163drbhjbcz.html

目  录
来源：http://www.sxryk.cn/163wuaqjeui.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rszwhpjt.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ueoipnuu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gywnkfmr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fnsfhhvn.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163jxnwaqht.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ipjmihnn.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163tgfjbgpf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163cqssaacu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lzvihdto.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163syrqcdls.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163wjsevknl.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163plnwpxeb.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jlebgxgi.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nhmoyrzi.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163nkngbdkl.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163vocfetmx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163vkyirexa.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163lawrfhtq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163fjmxxlwj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163bmbiimhe.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ujyffbjl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163qjcvyrwq.html

================================================================================
来源：http://www.sxryk.cn/163njcozhgo.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163mdnnlrxo.html

================================================================================
来源：http://www.xuanzx.com/163culnpekr.html

[A01] Hello World
来源：http://www.aibaodan.cn/163sywrtkot.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163klgrtsjv.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ngdfhdmv.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163mxmlqboj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163tlibrvsw.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163zlgzsuqm.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163kqhbshpf.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163paptmewb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163rzeuerrm.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163kgrxylog.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163hmxbjmkq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163kkcswygw.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163xfqpuwgm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163kgycesrz.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163akarybng.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163muoikuph.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163tamhjvea.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xhhlzvoq.html

[A03] 常量定义
来源：http://www.xuanzx.com/163whyuxucr.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163iiqxwdmg.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163veurdndq.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163gpctrlpi.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163gzonekod.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163kipsthus.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163jlgzywos.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163lxqqkmpt.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lmzcnyez.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163bfgbyeia.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163abndtwnw.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163sbhjanin.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163yzuhufus.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ozmbasal.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163wuyqssul.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163vrroymlc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163gsdcocqq.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ymcscbdd.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163dnfwiyov.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163gkpovhbj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163nejjprat.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163lfsnxwcc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vfmgmfnq.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163icpzhsju.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pcmwottu.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fefbzgab.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gdvjygib.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163yhdbwckv.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163yqurdfhb.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163wazmyjpm.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163grjacmbn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163syyamnis.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163fhhcxjag.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163izruofgk.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163cixpqtrb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163sqnmifzv.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163fcohdbxi.html

Py:   str(42)
来源：http://www.sxryk.cn/163tzmmnzeb.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163zmiokmii.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163rcaeapxb.html

TS:   String(42)
来源：http://www.sxryk.cn/163sfbnpqkn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ignsqhca.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163dkjrglss.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ndwjocsq.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163jsihtpyk.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163faugotsi.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163xyjjlpaa.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163uoqjpgig.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163lhnnfnjj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163dbvwgsoz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163opqyatpg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163pwggfmuq.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163aprscqql.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163nbmrspxh.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fjryjnxj.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163cnsheypr.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ugkjieft.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163dunqsnyf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163krnwmgbp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163aljuxmvi.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163hhwnfwjv.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163fwojpilt.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163clkzpvpu.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163wfglnena.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163rodsopkg.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163mqnovaoo.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163srglrfbm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163djpenjpq.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163ogrnxtux.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163iajscsrz.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163obqbakhq.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163xuzdulxp.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163neerbbzp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163vkerwkba.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xflwwmxo.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tafdamfa.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jwoksybw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gaepgelp.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163dbgxamjh.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jjmiiwvd.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163apbxnsmi.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163xiukkcjn.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163rrxohwqd.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163nwxuysba.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163jjtzwrdw.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163dbrouekm.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163szsmegiz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163zmqenegt.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163oqxlmbui.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163zojxybes.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163gqhezqjb.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nvrbafpk.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163drufnito.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qcwjwknr.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nvhbslay.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163emqzqpqw.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hksvzica.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163tvnmdnyn.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jugrgtvi.html

[A14] 注释写法
来源：http://www.sxryk.cn/163fyugzepv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163yegqyofx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163lnefhqze.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163soqucjsq.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wcbolbgy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163pcxcwxmm.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jurriipk.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163msnulwwj.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hcdpjkgh.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163iclznchx.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163kcdzkhzh.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163zneuzwqu.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fzzzwmrp.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163neyvqijl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163ldnoqlue.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ridyinnt.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163frryiwiz.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163bfpdoblv.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163cgnuprlo.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163cddslrmw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163rcraevkm.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163vpvtvham.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163mcupznvh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163zedsddts.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163wbedpzva.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163vyyfqgzl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163nvamyobc.html

[A17] 位运算
来源：http://www.aibaodan.cn/163xwseeqnq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xvsfmhim.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163kenwboxj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bihjtblm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163xozkjehi.html


<!-- 参考信息 -->