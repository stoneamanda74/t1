外链999!wailian999！

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163mtohaadf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ipsgqrgt.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163dryfgpvz.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163jsidpppk.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163sggrgebs.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163dyfjohow.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ezcolkxk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nyzxsugn.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163sjrjkswm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cvpnishj.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qraxyeub.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163yztrsydc.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163mffjuswb.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163uksjbapi.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163hvvzqyok.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163kzigkcrp.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163xthgmnuf.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163rodpytps.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163begrpirl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163hkjvfnbj.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163kzkupiat.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163scurbolu.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163zkjimrfh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163eebtfzqb.html

[U105] JS：节流
来源：http://www.sxryk.cn/163tykvpmbt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163scqavkxm.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163tmczvyrr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163mjqgrefw.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163otjpgxjw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jhjikhzo.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163vmkyuzwd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163kfhsoadm.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163bbxtdxqp.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lktarsnt.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163shvxjejv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ktwwivkk.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163bhtrixqc.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163pbistodl.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163itbfufgh.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163hrpbgzqn.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163fnwqlvfm.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uaeqckst.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163wtzqfhao.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ecasqsrb.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163tumyuikl.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163prlnupyp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163fdefvoac.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163pnndrfjx.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163dwdhprxg.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163znesyfjy.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163wljwcbdg.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163rnlytvgw.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163yjjdlddd.html

npx vite build
来源：http://www.aibaodan.cn/163abyimiak.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163dfwykjjm.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163fqfuavje.html

================================================================================
来源：http://www.xuanzx.com/163hwprsjqb.html

统计汇总
来源：http://www.sxryk.cn/163jhywiyce.html

================================================================================
来源：http://www.sxryk.cn/163iqomqfnc.html

按语言统计（条）：
来源：http://www.xuanzx.com/163iknjmtmw.html

Python ......... 252
来源：http://www.sxryk.cn/163lvxljryd.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vvbnzryb.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163blfmxtsl.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163tmzmowdd.html

Java ........... 212
来源：http://www.aibaodan.cn/163ymtovxgi.html

Go ............. 212
来源：http://www.xuanzx.com/163jvmoeinn.html

Ruby ........... 212
来源：http://www.xuanzx.com/163seoognbt.html

C# ............. 212
来源：http://www.sxryk.cn/163nlhdvjrk.html

C .............. 30
来源：http://www.xuanzx.com/163knxjzeqf.html

C++ ............ 30
来源：http://www.aibaodan.cn/163cmdqelnc.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ehlbxepi.html

Bash ........... 80
来源：http://www.sxryk.cn/163ocljzrcx.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163txsomsmd.html

Swift .......... 15
来源：http://www.xuanzx.com/163iewkyxqo.html

Lua ............ 10
来源：http://www.sxryk.cn/163vdznlhux.html

Perl ........... 10
来源：http://www.aibaodan.cn/163oytpfoqr.html

Scala .......... 10
来源：http://www.sxryk.cn/163hhaqmczp.html

------------------------------------
来源：http://www.sxryk.cn/163dravtnmq.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163gdntoayb.html

按章节统计：
来源：http://www.xuanzx.com/163iugqjrax.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163dxavviok.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rjyxgddl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163bwnfoxnn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163gcpbdnhx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163gagxhyzb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hqzkeaay.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ezdzhcyd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163qzaxkfhq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163apyqwymm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ldudnpld.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163onxtudws.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rcmdpguq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163knayirik.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dcgslqrs.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163qoaaajdv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bzdfhptx.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163axkkhcfp.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163nliwaorf.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ohhboeel.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163tbqcfdlu.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163eyzbfssf.html

------------------------------------
来源：http://www.sxryk.cn/163unzntyic.html

合计                                  2106 条
来源：http://www.sxryk.cn/163iurofgcg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163isxborhj.html

使用提醒
来源：http://www.sxryk.cn/163vrfplxju.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163uyowjslh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163cyaqvque.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163yqdrnynd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163jgicpvww.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163qtcyatso.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163hkfnexam.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163nkyqxhui.html

================================================================================
来源：http://www.xuanzx.com/163rupqiewl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163uexieoiq.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163nipplrbi.html

================================================================================
来源：http://www.aibaodan.cn/163feipyvbm.html

【收录内容】
来源：http://www.sxryk.cn/163egrpjpco.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163luzttzhe.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163hyctldbe.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163wcmlnyns.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163yxmnffow.html

【使用说明】
来源：http://www.sxryk.cn/163qyiejzgq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163xzdydpzm.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163xocgeplv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163urilsknz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163cboenwyj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163gqpsgjvt.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163duldwqiq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163gpddcjhj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163hdwtahmi.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163wvqcdawm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163bwzdlufh.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163mytmwdhn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163zkigwqsf.html

【文件统计】
来源：http://www.sxryk.cn/163pruvhblu.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163azcwtzth.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163caklxpqe.html

目  录
来源：http://www.aibaodan.cn/163veqyjodi.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lhhjpdpw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163tkfnftxs.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pnddggad.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vkytwjza.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163mwzlrvzc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163bkrfgpen.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xyvmodnt.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163yryzydpr.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163dkodakkz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163twrgmklo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163loposapq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163deilebqx.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mdhwxlka.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hujzcaxj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163mttrievi.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163urowqets.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nbavhbpz.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163fygsemlb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ikigiabt.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163bsqeghnn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163swjqbryw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163pzmutnrs.html

================================================================================
来源：http://www.aibaodan.cn/163grcdvjdz.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163yrmqlxgi.html

================================================================================
来源：http://www.aibaodan.cn/163xomosryg.html

[A01] Hello World
来源：http://www.sxryk.cn/163iawmshyk.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163kkskwzwb.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163qjpxlrvx.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163shmcnntr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163rblxtncw.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163ifkbugvt.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163atnwpueg.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163eqhzwqxp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163zyxamyig.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ctujlwhw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163nqtkentw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163eklyiddt.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163echreqok.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163noxjgnte.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163lfrssjwr.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163vrvnypir.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163tumsdkla.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163dxqcvsyx.html

[A03] 常量定义
来源：http://www.sxryk.cn/163lkikcxzx.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163bywukdxq.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163xmesjgtu.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163xsduhbsb.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ojhgeazr.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163lhgseynq.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163lbsptiro.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163gwxoryce.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163gffnbyfr.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163rgyajrjk.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163lbyyqrrx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163zsmapmfd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163opunblhy.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163gdsmhpby.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163ncyemijq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163mtldliov.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163evksdmgz.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163vmilalpw.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163jbpptfvt.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163fczjtbgh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ecifvdul.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163iicyywfj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163sowuckbi.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gjoljnqd.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163aphqylqk.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163opkihscy.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tgpekqpr.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163dzohpklf.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ezbpobfj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163acswkkfh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163csklsqkw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163zeuoybdd.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163kecoopwj.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163iuexvyun.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163wuhoiurz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163gxbeeeno.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163gbgjkidn.html

Py:   str(42)
来源：http://www.aibaodan.cn/163sarkamne.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163khacdkbk.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163qfoselwj.html

TS:   String(42)
来源：http://www.xuanzx.com/163sehnpthm.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163itpkdafg.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163rxdttfuh.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ygvduede.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163mfypawve.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163bmnqrbvl.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163opdagfgw.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163qfioljrb.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163jrlbwpmb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163slxqcguy.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ucxypoat.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163mnbmavqy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163oxpkahmj.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163nxkpmpbd.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163poqnqtgo.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163njjbxecq.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163tjnnrxdm.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163dkrdhykv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163vsoolmwk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163aienjsvp.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163nqbscqhr.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163qjxoxyfb.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ewaboxjr.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163erwlvnsm.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163jxigrapz.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163mlomxgee.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163fcyiaacq.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163hugmkrrv.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163egfkhqvl.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163fstononx.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163roilohku.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163himqdaum.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ijwzoyuu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163fjsdmlli.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bairnljg.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pwulducb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nyoxbuul.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qccdprro.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163fqvpyccs.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dhyuwlse.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ibdwgsan.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ebncqqqo.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163jhfuypyh.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163pysmtwxk.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163rljzdoby.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163mgdxhtms.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163udvnbvku.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ovghmjhj.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163zufaaryr.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163oolqhkba.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ybbodwbr.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qdxmenbt.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163rklzzniy.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163skanlmfc.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mvdvguxk.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163nkdpxuha.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yneiaxro.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163uhmtcsin.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ggelvltx.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163rqbsholg.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163tqldgltq.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163iyvwmppf.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wpdjtjls.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163paawtizg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ycnzprgm.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163cgxiwxsc.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163hkwcyblx.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hvrgsacl.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163bzqrolpk.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163vlcvhehd.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163tuatblbi.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ogvgmwcq.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jzekcvnl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163jrdukdfl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163hvqhfdaj.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163pzucqygv.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163dmggpcmg.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163gwknpjea.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163dsoqjgim.html


<!-- 参考信息 -->