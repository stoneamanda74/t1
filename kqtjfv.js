外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163pyslkctc.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ouryroqe.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163qfexphqx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163djejicxp.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163mvzcksmj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gevhiyhl.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163saheuvpl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163oylpiazt.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163oltjwkdg.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163kqivyliu.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163rhnmdtbx.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163nckqsurd.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163opoxbtvw.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163qizlvtqv.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163hffoqnnt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qemhensk.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163vygkmpyz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163jbyivisk.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163vhylobgu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hzxaqflv.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vnvqafqq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163hppinjfr.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163pzzuvqea.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163tyxcxbdc.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163lcxwiwyo.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163zpkmsfrz.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163mhbodlrp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163wyichfym.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163cvspptej.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163svfnpfrg.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qthuwpse.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ryedhzqp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163qorjorsr.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163sijuhhcj.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ecjibnpq.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163jkghnrmv.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xdwiqpur.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rmcisnph.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163shmkemmc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wsemqrvl.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163mikkzgho.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163auhajjii.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163cynwblim.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163uhbaklgf.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jydeigkj.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163jcfwocpj.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163scgzpaje.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163irzycoqt.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163cfdabqlp.html

npx vite build
来源：http://www.xuanzx.com/163qoosrjxx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163cifsopuj.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163vzcjgvts.html

================================================================================
来源：http://www.aibaodan.cn/163hpcxuayl.html

统计汇总
来源：http://www.aibaodan.cn/163akmvcjjc.html

================================================================================
来源：http://www.sxryk.cn/163sfbxfrch.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163wdoitfgx.html

Python ......... 252
来源：http://www.xuanzx.com/163pfuuhpor.html

PHP ............ 252
来源：http://www.aibaodan.cn/163ceoqzrpg.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163abwbkowb.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163eoqydfxc.html

Java ........... 212
来源：http://www.sxryk.cn/163hffuewrr.html

Go ............. 212
来源：http://www.aibaodan.cn/163ozpmrutb.html

Ruby ........... 212
来源：http://www.xuanzx.com/163duirhbby.html

C# ............. 212
来源：http://www.aibaodan.cn/163pgsbtola.html

C .............. 30
来源：http://www.xuanzx.com/163yruucltp.html

C++ ............ 30
来源：http://www.sxryk.cn/163pstizmbs.html

SQL ............ 90
来源：http://www.xuanzx.com/163cmxlqrud.html

Bash ........... 80
来源：http://www.xuanzx.com/163mnzkhgxo.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163gjuvjwsv.html

Swift .......... 15
来源：http://www.xuanzx.com/163ceinbhye.html

Lua ............ 10
来源：http://www.aibaodan.cn/163dusbpmzy.html

Perl ........... 10
来源：http://www.xuanzx.com/163nfbdkbda.html

Scala .......... 10
来源：http://www.sxryk.cn/163jnccgtql.html

------------------------------------
来源：http://www.xuanzx.com/163ejwhgxmz.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163abkrjkjp.html

按章节统计：
来源：http://www.xuanzx.com/163xogxvyqf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163roqtzacl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kcesdoud.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sfsdwuyc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lugbsjvp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163mbyvsioc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163yoghtzor.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qlbltgwm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163mbgckrfj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163owtpzbgw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163horqokzd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uzvtyvdv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bxcjedib.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163temsvkuf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kphbkjmh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163phsesqoe.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163aaihjkbo.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163mpcfabzz.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163hnjtwudr.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163evbxhenu.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163rgysqmqo.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163wglyjavf.html

------------------------------------
来源：http://www.sxryk.cn/163gmqjebue.html

合计                                  2106 条
来源：http://www.xuanzx.com/163xfraqiry.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zgpttyji.html

使用提醒
来源：http://www.xuanzx.com/163topfcvub.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ywwjrnxn.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163xxyblkfl.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163dixhcptl.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163almcimmn.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163hkmhdryr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163bmgdtfkv.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163jjbkjgjz.html

================================================================================
来源：http://www.xuanzx.com/163lvzcmbfk.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163djrtlgtj.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ctpagvpp.html

================================================================================
来源：http://www.aibaodan.cn/163gurjjdiz.html

【收录内容】
来源：http://www.aibaodan.cn/163oojolllk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163wetsfsfn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ezqdrktj.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163kjkwxmsp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163kpxygdxr.html

【使用说明】
来源：http://www.aibaodan.cn/163rwwwjhgt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163atylmyby.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163dipebgqu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163kniaspag.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163rrndndqk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163kgvuujha.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163wgzazcsp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163khjyfudz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163swzrhnmd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163aojpgxou.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163hjozyhjx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163jcvptqpu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163pjabwcru.html

【文件统计】
来源：http://www.aibaodan.cn/163qjoyzylj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163xybmfiyf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nrrgghdh.html

目  录
来源：http://www.sxryk.cn/163wurpabzd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jeatbmjg.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kgicghsv.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bvsonxki.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jhskejoh.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163wvmzzaei.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163rjlsynga.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163elqeuuxy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xxcxzltr.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163khjorxkb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ftgzgdpo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163qwrlfenu.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xwvuxchc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163elykargh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163quyunsbz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163bpiuukey.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163clzntwko.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dxraszhc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jkkeofci.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163wqdjcgzr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163ymnbuprp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163pkvtivql.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163febbtwpf.html

================================================================================
来源：http://www.xuanzx.com/163nbnchbxy.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163lpdtkeij.html

================================================================================
来源：http://www.xuanzx.com/163takksgzf.html

[A01] Hello World
来源：http://www.xuanzx.com/163iezzsxgg.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163yvuzmlpy.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163qerbqeyi.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jxhxiltc.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ietzukmt.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163goffxyyw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163xkgjcqcs.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163kbvygxms.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163sicrppxu.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163gvnjtick.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163hzqpfusr.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163wyklkupv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163khftokvp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163kclmjxsh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163kofssyil.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163kmwukjdm.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163rcgivyev.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163nrbzpnnp.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ufjzruri.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163fzgmaxra.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163zkkbtywa.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163prqyathl.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163gitvmykm.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163dfseshyg.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163gycexbtb.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163gmiowfez.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yrebnqle.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163optoewoh.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163gzpekpik.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163xobhjlqr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163pdjuiflq.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163vsjcbubq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163pshmqhtl.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163juxlzvky.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163fpmfyjhb.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163sicimlot.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163xolhvvco.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163vcorujjp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ciaobvhy.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163swpkrwgp.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163etcbxoms.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163cvoibmvp.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163cjfhqrag.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wmthqbyo.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163izmiwsez.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163jwxlaxrw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163efzbmhuz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163bjwbnahc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163njyniouz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163fkidupkv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163jeeltllb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163ceeirljb.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163dyvkhysj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163oqfygcud.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163hagzzhuh.html

Py:   str(42)
来源：http://www.sxryk.cn/163shgouqgs.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163preiqudg.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163frslzvsv.html

TS:   String(42)
来源：http://www.aibaodan.cn/163okgmitlp.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163eajsgrjt.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163mcpcsrdc.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163dqplxjxs.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163lcrvlbmy.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163ojfzjzxh.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163djjaucrv.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163iigtnowd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ezpfaraw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163vewueqty.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163fuikpfgd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163oeeagnkr.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163whrzulsr.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163qqcztscg.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163jugkrcsl.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163lyrocujf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163xqkkfcuj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163qgiqhfst.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163zsotypge.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163nzvvculr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163usjvlows.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163secabahl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163wxslhplz.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163gleihtym.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163efuzjtsa.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163rylfftrk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163epkotaqn.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163qbwpojcq.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163vafcecye.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ejtjjwkr.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163uzpdtpog.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163jjvwfber.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163eygussbi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163qxkcidci.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xyaricls.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xxsymrbc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xgythyan.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qflenflc.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163vefcgfcl.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ajlsuoaa.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bwqdwbev.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163fpihigbx.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163pzqgvgmy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163kivffdme.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163lohzdqpv.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163vkbafgaa.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163wkxinykj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163ipawrqaw.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163trakbwki.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163wyzdbdct.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163dvjlctjl.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ydlwsdkw.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163txrtonvr.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vbuttuec.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vjlcheuu.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163jbdcsmgi.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rwcjormd.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163bsgbkyam.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qpxubtwm.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163jtgtvjao.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163lfecjxoi.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163azmkbipy.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163reubxwdm.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kycktzzc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163okhbwvex.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nppgtptf.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163aojwcvvu.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pfgbihbp.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ximwovxa.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163idmdnctz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163zcjnymby.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163udshqgsg.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163uqbrbwik.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163pzwbqmja.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163kzrgpdhq.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163rszuzpla.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163civunwyk.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163huxnqkqm.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163ykuetkxw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163fttlnkoa.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163ztzwhvji.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163bypqgwom.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163dftouupi.html


<!-- 参考信息 -->