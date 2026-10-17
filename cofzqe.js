外链999!wailian999！

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ivxvnzsn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ajuiflvv.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163aevkazbz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163antwtppl.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163dcxwvmps.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163flbssowa.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163fzravnox.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ckerdfyd.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163eeeyueda.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163pieghsqy.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163qgvknhrq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163afczvlox.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163emdefpla.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163wxoeclnp.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163vklxmohb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sjywczbk.html

[U105] JS：节流
来源：http://www.sxryk.cn/163zkwzwnrb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163xdgzuvwr.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163vqcqxxfq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163qlxismjk.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163zltxybpc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163dzsdampn.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163qfluujai.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163twlsxouu.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163tzwsjxso.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dvjlqwjq.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163lwvrshnq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163bjdwlkvr.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163jhytukgr.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163jkfaesug.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163zywgudty.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163mprbieqc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ikutmluy.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pylqcgkm.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163gajioapx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dytrvzzf.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163erbmnjkc.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163axgiuoxj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ufixeklc.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ewnqjbjk.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jjplognt.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163zlorudud.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163stcxkxwg.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163maftmngt.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163rdnrwjub.html

npx vite build
来源：http://www.aibaodan.cn/163npbxcjgz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163fvaonjpx.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163nrzjbkrs.html

================================================================================
来源：http://www.sxryk.cn/163jhhmurvs.html

统计汇总
来源：http://www.xuanzx.com/163fukyedxw.html

================================================================================
来源：http://www.xuanzx.com/163zccevfew.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ycxmapgi.html

Python ......... 252
来源：http://www.xuanzx.com/163rovejawn.html

PHP ............ 252
来源：http://www.xuanzx.com/163maydxllu.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163krkufhwx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163jedskhym.html

Java ........... 212
来源：http://www.xuanzx.com/163ilvaqrgq.html

Go ............. 212
来源：http://www.aibaodan.cn/163ofxynsfj.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163kwabzreu.html

C# ............. 212
来源：http://www.sxryk.cn/163bdkkxvvp.html

C .............. 30
来源：http://www.aibaodan.cn/163ueoqbrmy.html

C++ ............ 30
来源：http://www.aibaodan.cn/163aybzfdyz.html

SQL ............ 90
来源：http://www.xuanzx.com/163ttedklcc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163jzqepftd.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163dduojfbq.html

Swift .......... 15
来源：http://www.xuanzx.com/163sukpmwds.html

Lua ............ 10
来源：http://www.xuanzx.com/163kdomusyx.html

Perl ........... 10
来源：http://www.aibaodan.cn/163qninxwsu.html

Scala .......... 10
来源：http://www.sxryk.cn/163orzfmiyk.html

------------------------------------
来源：http://www.aibaodan.cn/163jlgrzzgs.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ptnmmxlq.html

按章节统计：
来源：http://www.aibaodan.cn/163ikcewsyu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163syztnhhg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kvjulcon.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163szwxofvf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wrvidhxu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ywkvvzhg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163xlskhwei.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pvwjlady.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163etohanzx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ldnprvid.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qoqbcpew.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hhcsxazv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rhiyuvpf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vcldufnl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ujxjqekg.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163oenpdhil.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ijlpqfxw.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163mfsilyqx.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163tfvzqqya.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163vxmohmta.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ndxsztwx.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163kmhdskuf.html

------------------------------------
来源：http://www.aibaodan.cn/163ukcghicc.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163yijyvdop.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dhyrvytp.html

使用提醒
来源：http://www.aibaodan.cn/163zpuzalzp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dtitpkbc.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163dgdzdpkl.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kegvmjgm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163kggsgxqh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163bewaoujq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163xommdzhv.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163txxcadud.html

================================================================================
来源：http://www.xuanzx.com/163qhnvrogu.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163gxnntqje.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ashvmdig.html

================================================================================
来源：http://www.xuanzx.com/163vkoksrxv.html

【收录内容】
来源：http://www.aibaodan.cn/163youhfred.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163lwavmokz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ubfmindv.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163adywrtyg.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ssbxvvlz.html

【使用说明】
来源：http://www.aibaodan.cn/163tszmlvqi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163pkjvchov.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163vpvaotqr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163aflmiqit.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163uyrbfymp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163tahyhhxw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163kwmryczi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163kgazbuqz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163sqbhtvxs.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163moheotih.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163jkqlidsx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163cwtnearb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163alsbxhfj.html

【文件统计】
来源：http://www.aibaodan.cn/163fafxsrmi.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163tzbgoaoj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163voacaoxc.html

目  录
来源：http://www.aibaodan.cn/163ypivvcwj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vbipxcqk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163hdfscacg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gidgfcjt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163epfdvtgm.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163aaifjjsw.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163xuxtuyun.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vhujampq.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163agqprhjj.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163osyrkrxm.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163poaluhbj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163lkwwktqa.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xdwodjxu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yawlkczo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163colraaaw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163lunelmmj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163fxigdnid.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163soexvtyk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163ukjvlyxy.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163nqastkvo.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163tmaskrct.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163rrvrpevp.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163zrqpkbyz.html

================================================================================
来源：http://www.aibaodan.cn/163ztkzechh.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163dsskduoo.html

================================================================================
来源：http://www.xuanzx.com/163yjnekpnj.html

[A01] Hello World
来源：http://www.aibaodan.cn/163hqdixfat.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163isvanenf.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163rchlkszr.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163oqakbhjb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163cnirxuvg.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163epjscfrb.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163iuymrwks.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163dhehlvjt.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163jlmsouia.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163bgggooxn.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163hzqbmhwd.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163twpagbdc.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163snslrabw.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163kcfwpice.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ixskfdno.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163qkttxgnn.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163sanmmeqf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ljqpfwkr.html

[A03] 常量定义
来源：http://www.sxryk.cn/163zodwfzwt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163wbqionei.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163bioclmrc.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163bedvrikz.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163gyyxqrnu.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ojhrfmgw.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163hozqixqj.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163jgemkpxt.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163gkmlcoot.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163sxfdrwuj.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163exhfahjd.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163kyqlyjsb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163uitumqix.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163wjkzfbbw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163urltjuce.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163gcdthhhm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ijigtndu.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163orijyzsy.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163gfnwwwuf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163klhquqtu.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163xybluutl.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ibzdpafa.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ydjlmzrm.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hqcqojhi.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bnnghktt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lqdustvf.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ywnddbqu.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163lbsswitl.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163drybdwrq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163fffrpsjb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163gynouhiq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163rrrogpjp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ldxxbvjy.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163daqtaost.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ofkvkhqu.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163xlpzrztb.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163pxinmspg.html

Py:   str(42)
来源：http://www.sxryk.cn/163rntqcggu.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163exigdzpj.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163ckjuvvlc.html

TS:   String(42)
来源：http://www.sxryk.cn/163jrvzwvpu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163uosxfqzp.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163sfebgmne.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163befhufhw.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163xfpurovc.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163latukxtx.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163gaplgpks.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163rhbfarvc.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ynpomyes.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163xlclnaps.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163fpouxhpa.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163jviqhtvp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163pcuaytsl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163izbeqvzm.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163tikdaper.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163jyjqhegw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163yhirwvgc.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163dcgiduda.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163vrzjnodu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163lpussnjz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163rqctyjds.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163gnechyiw.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163zpdfmgak.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163vxqbqysr.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163gcattvrc.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163vdolnhmq.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163mimyjhpk.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163urcyibdn.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163llajtyis.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163tnyndglf.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163eldjmxma.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163myuppkan.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jkgqfswd.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163kikuaixp.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ofyokjby.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bktcwrjx.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yipcyakb.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hhacgydw.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163nhjihftc.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ufwryzqa.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gupzlmin.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163pxoviyyu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163baahmjyb.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163ioeatszq.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163wixeeffv.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163snlagewt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163mfzjfpqz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163nvfxyiaa.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163gajrzwkh.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163dbinvlfs.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163kzaozqqp.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hatbupry.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163okikrbog.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sqytottc.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ffjoqdyd.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ztzjkdgl.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gdptkgjx.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163aybwikyx.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ovoafwfl.html

[A14] 注释写法
来源：http://www.xuanzx.com/163ccybmufy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163dlufiuvj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163bxnunuyf.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hsqavkxt.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ujzsvwia.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163giezlvrv.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163aqaqhsyg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163dwvttbci.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163cdfhkjmh.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163shzvwokn.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163yhzpgrjp.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163flbqvtyp.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zlfzimpg.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163uswcydsg.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163xqyqyhgp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163upvgihjl.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163sdfpuaoh.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163rfigsmvp.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163heaxbrts.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163xtvqevvk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163jgzhbgip.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163jjhozqst.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163fyqznskh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163pqjmbpef.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163murrzqoq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163jltpstwx.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163rcgncitl.html

[A17] 位运算
来源：http://www.aibaodan.cn/163dhdfrlfj.html


<!-- 参考信息 -->