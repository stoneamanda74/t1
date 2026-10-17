外链999!wailian999！

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163bpgpknpe.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163faskvtfc.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163yxwarxqh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ofijjqgj.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163ezpfpetu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163aykiusxg.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163iklhsjpv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dwavdtcu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163qrnwirgx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163hpfzsxbv.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163sfdoxofe.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163dwkhmlfs.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163gbfgaqvs.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163thrsdeyz.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163xplbhweg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163crbqkuhc.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163shmtjzul.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163catgqhwm.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163esfkqavd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ebqksfrr.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163xtskqmjj.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163esxcvlme.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ypxkdodg.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dkyhdhde.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163gzrztpvx.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uysreqtw.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163klcsuxhl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kinjptkq.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163yllgexxb.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163arpvglui.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ifqtevvx.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163kaqadnod.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163iihtabsm.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163xnxcdaoz.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ulikydiq.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163bvkxlroq.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163uespfaxo.html

npx vite build
来源：http://www.sxryk.cn/163wermhrfc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163kwrlvlil.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163zpxitzbc.html

================================================================================
来源：http://www.sxryk.cn/163aseynfhc.html

统计汇总
来源：http://www.sxryk.cn/163sphqopos.html

================================================================================
来源：http://www.sxryk.cn/163qdlwbiox.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163qiafecpf.html

Python ......... 252
来源：http://www.sxryk.cn/163proaojxo.html

PHP ............ 252
来源：http://www.aibaodan.cn/163sspjapro.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ydawdclf.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nyifiaxq.html

Java ........... 212
来源：http://www.xuanzx.com/163cdtvylzn.html

Go ............. 212
来源：http://www.sxryk.cn/163uqwpaejs.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ervlwmol.html

C# ............. 212
来源：http://www.sxryk.cn/163vwckqbdu.html

C .............. 30
来源：http://www.aibaodan.cn/163zsbwvuxh.html

C++ ............ 30
来源：http://www.sxryk.cn/163qbkwgsmu.html

SQL ............ 90
来源：http://www.aibaodan.cn/163whfrepws.html

Bash ........... 80
来源：http://www.sxryk.cn/163emrlpguz.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163smgszfov.html

Swift .......... 15
来源：http://www.xuanzx.com/163xnyggjrh.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ybkujoeg.html

Perl ........... 10
来源：http://www.aibaodan.cn/163sojdfvad.html

Scala .......... 10
来源：http://www.sxryk.cn/163tigesgei.html

------------------------------------
来源：http://www.aibaodan.cn/163frldfzpj.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163vciesuyc.html

按章节统计：
来源：http://www.xuanzx.com/163yawdqrfa.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163thjbeexk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163pnlbunpb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yoyencry.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ofxrxyve.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mbwfrbos.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hcvdtwga.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ragzvksh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zwguilbj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163viiyxccp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163thiqluer.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nkkhutxr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qbyspxza.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tipgxfof.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163synegpup.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163uuhhybpd.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163unzfduba.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163zptfolmj.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163jzcjmghc.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163jtlxtfyy.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163bdtdduqv.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163dnltkamu.html

------------------------------------
来源：http://www.sxryk.cn/163lagwrzgw.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163uuktrewl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pauzqtfr.html

使用提醒
来源：http://www.xuanzx.com/163snvinuwy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cstoikoz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163cdhwufxr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163sjlkmgwd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163soveugud.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163yzrjlmhd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163nzthcpij.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163tjeidslt.html

================================================================================
来源：http://www.xuanzx.com/163lxxerung.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ncrdvtoq.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163jdkhkjis.html

================================================================================
来源：http://www.xuanzx.com/163tgphcbif.html

【收录内容】
来源：http://www.sxryk.cn/163eaduwbnt.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163odkoqcfg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163nxlyodsq.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163immthtrs.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163dctsuqgv.html

【使用说明】
来源：http://www.sxryk.cn/163uponszcj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163dalutijq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163sbkhphof.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163lrwxgniv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163fvqfcdup.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163nkpyvxwx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163akiabfeh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163obkysglo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163kauirbkn.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163wsgufmlu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ykqyndtw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ejfqjqys.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163napflwhu.html

【文件统计】
来源：http://www.aibaodan.cn/163xbjlbfdp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163twvpmhuf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jxrrgapu.html

目  录
来源：http://www.sxryk.cn/163iqkqwynk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nagdshix.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163prszzzro.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xabstium.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jkftfqzk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wunhoswe.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163llzovyzg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163irjxnacj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ahllotpw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163xqxoluec.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dblfiumn.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zhulqadi.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bjngwczw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vodlblev.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yvzssrai.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163blucrokl.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163uihlbmnq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dluxorvd.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163pxpzoidd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163gsyygctl.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163vsqxjqwq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163pwptaamq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163tpjfoimf.html

================================================================================
来源：http://www.xuanzx.com/163sjnmlzfu.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163aacefmsq.html

================================================================================
来源：http://www.aibaodan.cn/163ayugrdgx.html

[A01] Hello World
来源：http://www.sxryk.cn/163yiitzieh.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163hhevfzrk.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163vctsucwe.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163hdklcnus.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163xruxxwnr.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163gsewfyzf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163paljdaiu.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163rkjcvatf.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163hlsgstsp.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163xiebyvep.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163nfblmoas.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163llmlnzrr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163tcvvwbhn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163jblmetla.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163yvdyqvgr.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163yrnyudtw.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163zujokjyu.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163bureivms.html

[A03] 常量定义
来源：http://www.xuanzx.com/163tkvqplbf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163zwwvqhvu.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163kdafxrju.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163pdfoohxp.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163mzefxmap.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163yiqilnbj.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ptrjiftw.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163vwpgulqm.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163umzvminx.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163gdftokdq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163wwkxadtt.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163fprtxrxo.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163abioviyb.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163uewxckbt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163umeeaxzc.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163pgvvgxgy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163numvecwz.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163osroetsd.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163vpgislip.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163syroyxux.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163lxfinset.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vsdzksug.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163qdmcytvi.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hutodgwl.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zgciicop.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xfkmjpex.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pyslsvmz.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163icvitrhd.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ltclhjkn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163rswkouzg.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163mxkzchiw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163gqdrioxs.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163aylgsfnl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163dstzaxgg.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163qixyuntm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163croalnfr.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163aoqbdqve.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ahyhepil.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163egcvstre.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163bhhvjmaz.html

TS:   String(42)
来源：http://www.xuanzx.com/163tyscrybg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ndycpklk.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163yhnaloxh.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163qrcojnda.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ltmceicm.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163bdbjfxkp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163gdjxcguq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163uqzpmcfo.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163uauhzoym.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163vcicbcml.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ljltdlef.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163gowtbeso.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ymjttghk.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163gpycfrbn.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163mkdacrkc.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163gklocgxs.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163oxzjeqvi.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163chuydcgx.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163xkjleqjh.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163wrweybvv.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163hzzshfyq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163mhjcmifv.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163scgpjklr.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163bhyusqqe.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163ozgmhvao.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163dagaknrh.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ycznrbxx.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163gvanzpvs.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163vcqagend.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163mhmsyhpd.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163ycqpjbgp.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163qrpzrpnl.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163iblcwbur.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163gddnxuhm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163eumknels.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lllzqiki.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jnonjbpv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bsyuudcf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163dlopwjgo.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pbjompov.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163crljxgpm.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163phprkwrg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163wpdzfihi.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ktmxhlqf.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ypqizhpi.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163xumwdnsr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163zjsikxwz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163abbzlpmv.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163tquqjvzf.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163hehvynfj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ynxnrnjx.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qelijtzk.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163nbscsiju.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163azdqpefn.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kamdcubb.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163fzqxocvz.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cgletlek.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163vqimlamy.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ncjvyhux.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163ouqbaxjb.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163fmgsrots.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163lcxeiydy.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kqhkukua.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rmazxeif.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163uwvvwonh.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163oyernkfg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163jktghvws.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jwudolar.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163eblhwvvu.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163trxutaee.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163yacarlie.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jyfpvjwl.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bmnbujez.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163kandlvbb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163psyhdrbw.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163jcaahmrz.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163vorqzhmb.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163psmrdedq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163oiyrqabj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163flifjwvs.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163agqettoj.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ibuuphmf.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163xnoalzdu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163hftpszmh.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163sjigwzng.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163jrdzhwrt.html

[A17] 位运算
来源：http://www.sxryk.cn/163vvpylzxs.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dxjgijvd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163hxydtxnr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163esumhkri.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163uhcnacuu.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bgrscrsk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lkngaloy.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cabixako.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ntrblwet.html


<!-- 参考信息 -->