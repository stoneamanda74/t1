外链999!wailian999！

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163hgeqblde.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163iwwlqhci.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163vynkqivs.html

structuredClone(obj)
来源：http://www.sxryk.cn/163kyjzpoed.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ewzrvxtu.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163rdppyohy.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163sadpwsor.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163igaetlsu.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163kijwthnh.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163bdycotmh.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163hbqviqjs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163durqcvgi.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163xtixnkpi.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ujqfobxt.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163ittfcjrx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ocuelpmp.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163yfjrosvk.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163zqetihaz.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163towavzls.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ycvyulmb.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163aeiyhfbd.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163mwszmzmq.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163rncizroy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163jipxskuq.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163iysrnycy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163cdcbdhnj.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163kaaghexe.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dzdnuxvh.html

[U105] JS：节流
来源：http://www.sxryk.cn/163mkyegdjt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163iredemli.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163yotlamnm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163samfcjry.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163upcmjnde.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163rslwvuwy.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163sycqjmij.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dupoaauy.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ifxyvtha.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zxtjbbmv.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163pneqlran.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163rfomzakn.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163kmftjsix.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163tmijkrnp.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163cgqhshni.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163irlmwknc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163mhhgvxwf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cooqzbwk.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163bxgavmnz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163yhwvanvd.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163gqcwvpgv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163mlorntga.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163fcvvamxw.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163zeypwpux.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163mvupcqqz.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163xfkxnrev.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163yjivqhmo.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163usupxsxg.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163yhoafnas.html

npx vite build
来源：http://www.sxryk.cn/163dqmqfgbq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163zuqwnlrj.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163dronsfwa.html

================================================================================
来源：http://www.aibaodan.cn/163nqebjcva.html

统计汇总
来源：http://www.sxryk.cn/163vfhaeyax.html

================================================================================
来源：http://www.xuanzx.com/163etixxheu.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163lxrxtfnr.html

Python ......... 252
来源：http://www.xuanzx.com/163xfvlnlua.html

PHP ............ 252
来源：http://www.xuanzx.com/163yowcaebm.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ylqxrcmk.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163wqujbzrv.html

Java ........... 212
来源：http://www.xuanzx.com/163eoedjeiq.html

Go ............. 212
来源：http://www.aibaodan.cn/163zudrayor.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163fgiwwbba.html

C# ............. 212
来源：http://www.aibaodan.cn/163elgjbmuj.html

C .............. 30
来源：http://www.sxryk.cn/163ubrrjehu.html

C++ ............ 30
来源：http://www.xuanzx.com/163yqynazmz.html

SQL ............ 90
来源：http://www.aibaodan.cn/163njllmclr.html

Bash ........... 80
来源：http://www.xuanzx.com/163fcgtacsl.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163qxknfoba.html

Swift .......... 15
来源：http://www.sxryk.cn/163sbgvxxem.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ftgyqxvw.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ogghmsgs.html

Scala .......... 10
来源：http://www.aibaodan.cn/163jaulwbju.html

------------------------------------
来源：http://www.xuanzx.com/163nkmlvvrn.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163oztbbhhy.html

按章节统计：
来源：http://www.aibaodan.cn/163uwkzbxqz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pxpxgbnj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vgkkfreh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rdjkkywf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nxqswwrz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163uzltgqqf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163twzfufen.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163laqvgviq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163kmtvokcb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163orfeffpk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163tcwsnvgl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gezygtbs.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uhdgvrqy.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dvtjgeyr.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hjkemoyc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163vlwdwbyi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jurzylcn.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ldyuaimg.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163pqremvtt.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163vffjpjwm.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163imqrujqt.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163hjtolgjx.html

------------------------------------
来源：http://www.xuanzx.com/163zbupodpy.html

合计                                  2106 条
来源：http://www.xuanzx.com/163ulnxejhq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lsbykdwo.html

使用提醒
来源：http://www.aibaodan.cn/163mtgnmyap.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vaofewah.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ovfcoxgk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163mdpezcma.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163lkpvzhcl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163dhkgnelt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163zjfnlyab.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163vavyslii.html

================================================================================
来源：http://www.aibaodan.cn/163tjiapyfw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163mttmuxeq.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163rjkehgfq.html

================================================================================
来源：http://www.sxryk.cn/163ernuhzth.html

【收录内容】
来源：http://www.sxryk.cn/163zrwysipx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163jhoisdav.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163nbxddcsz.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163oqywtskd.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163sozibytt.html

【使用说明】
来源：http://www.sxryk.cn/163hrjpbwvn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163uxpllvqq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163zmxcwrxo.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163qxbknwqu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163urkwizid.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163jqvdxtzy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163lnlxanzu.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163ahslhohb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163wiubmhjg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163vcipprel.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163puikagie.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ksicknqp.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163rldnqmji.html

【文件统计】
来源：http://www.xuanzx.com/163rafjfbso.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163mqkfzqdn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ydqkcifi.html

目  录
来源：http://www.sxryk.cn/163dojdqwzl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yvnfsmev.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163xtbxnxkp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fizbhnbm.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163vnpcggrf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163sadzacbm.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163hgfqtbkj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163oskzhvrz.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mvmqqdcc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163dexsunbo.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fplklorc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163oazdjnug.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163emhsjzvp.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163beqpxjze.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163eanmjlmu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163wpdeaflr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163oufkgnlp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iyonmzyg.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163mqrdascn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163acpdvvzz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163rogxwzfk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wzchqnhl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qbbkyqlg.html

================================================================================
来源：http://www.sxryk.cn/163azwxnchh.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163rqdmlhmr.html

================================================================================
来源：http://www.sxryk.cn/163uajjqjxx.html

[A01] Hello World
来源：http://www.sxryk.cn/163wtxqgfjq.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163fnssrpxi.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163wmkmfjmo.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163lqfolrpl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ftldjymv.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ymxvagkt.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163bpvqyvrt.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163kcjtgxsj.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163bsvmpmtn.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163pgtdhsju.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163heimtutw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163qelqbssn.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163iymromok.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163sublpgvn.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163mnyiuudt.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163fqagilid.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163hdgsnufi.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wxiflczb.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163fiflmjsg.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ouwuuqrd.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163pwtiadyd.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163vzknysqz.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163clkuakuz.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163zkisuitf.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163igzlqkbs.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163cqvejusf.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163ckcyutyi.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163tefrpyha.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163jxuwsebt.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163fejhlrfy.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163nvxdrnvk.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163jrprkbpk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163adrjqthn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163czdufpvl.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163lelgponq.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163irjkkvbk.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163kftnkiok.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163kpgcgxgv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163zxvvicea.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wlgpxiur.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ewqfuuld.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rsnvwnrq.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163euzbyhzk.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xghwjipw.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163sdljqtpt.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ipfhryqa.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163znwwtmfh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163umigkdiw.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163uziavjlb.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163vqovsanb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163byqlvnfg.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163jjprwdzc.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163memmcbgp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163njoycjod.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163dyixgadv.html

Py:   str(42)
来源：http://www.aibaodan.cn/163qkfsjgqx.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163kavyjxlf.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163xirrgwkk.html

TS:   String(42)
来源：http://www.sxryk.cn/163wmizzzfu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163tilswnos.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163rthltlwi.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163hzgdmxgg.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163klubenhg.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163afdnpjba.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163mcddxxun.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163baottevx.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163nhinsboz.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163uwbxooki.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163bcjqtatf.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163xqgvzajg.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ngcqdvuu.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163omojrism.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163simiidbh.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163hbuhfguf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163owbqbovu.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163paqfdwog.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163rmrutytx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163yawmvpek.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163irfmverd.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163cyqtqdhs.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163nqcnlcqq.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163bwszoiht.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163sgptnrkd.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163dxcyhhyu.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163loyjonoh.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163onuqjnuq.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163yleuwhof.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163ygacodsu.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163czixjftu.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163ozkskbdb.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163eapnbrha.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163icmtfaiv.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wttwnnzd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mezkjzlj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bwmxzpdt.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163htrzjrwx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163rrcjhllr.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163iclyignj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163giupttdg.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163vnccgojg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163ewqpoyme.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163tortuhwo.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163kgpycmox.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163luwhsctt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163zmrgrciv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163kzdlpiab.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ucwybnzv.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163nyhpwylf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163olifimgh.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uiqeaysk.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163kealhzoo.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163njchsnmo.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rddnuqha.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ufckmehs.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rgqaarpc.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163vfexjjmu.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pjntrtqq.html

[A14] 注释写法
来源：http://www.sxryk.cn/163lzavetct.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163txsadyvw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zbytiduz.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xrdygzfg.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ihlfsnfn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163tcmmzhpu.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xlqnhjft.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163npjvrsnn.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163shsvmwvx.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163jxsmpabi.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ydlpvvvw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163bvlfanvx.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fplatxjm.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cemratbl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163dhbfmutq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163linimdpz.html


<!-- 参考信息 -->