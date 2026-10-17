外链999!wailian999！

[U97] JS：并发请求
来源：http://www.xuanzx.com/163locpqgmp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wuntyoda.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163nxqeljoj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163vxlvycco.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ygpdfxcq.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163zonyyras.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kxqlelri.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163zibqbtua.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163msesiukj.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163nfbpwisl.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163hekiebvz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163rrbzfzsy.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163aotlwjfa.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163zyvmhzul.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163jfdeixvr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vgdgsaip.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163enayiowp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163zbeszflx.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163rvmklzsy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163zshjzlno.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163zprmyefl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163nxjokgit.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zopuecsm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163vztllstb.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163nfgjvdzv.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163atirvuba.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163lrjzhghs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163iqlxdwyc.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ckqzwmqy.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163dkrykffe.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163qfbxxfdy.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wepqgzob.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163chschpiw.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rcdmsqoo.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163dyttkayd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vvopylyq.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163jxsdqtyz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163hoxcdsua.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163iewreyfe.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163zxapmhpn.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ovrhpbpa.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163cfzgrhuu.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163opahbogr.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163uvokgxrz.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163uesedjdu.html

npx vite build
来源：http://www.aibaodan.cn/163kwmdyfsp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163dqoxcndh.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163tvipzsgp.html

================================================================================
来源：http://www.aibaodan.cn/163fwesvkwn.html

统计汇总
来源：http://www.aibaodan.cn/163znuhqrmc.html

================================================================================
来源：http://www.sxryk.cn/163tvnivvod.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163fxvgxupf.html

Python ......... 252
来源：http://www.sxryk.cn/163qecfzgjn.html

PHP ............ 252
来源：http://www.sxryk.cn/163emizmqzt.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163pjomdhwh.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163hjwdurfv.html

Java ........... 212
来源：http://www.sxryk.cn/163hceivlhj.html

Go ............. 212
来源：http://www.aibaodan.cn/163wcljufrx.html

Ruby ........... 212
来源：http://www.sxryk.cn/163kxlvjxnv.html

C# ............. 212
来源：http://www.sxryk.cn/163xiwrfele.html

C .............. 30
来源：http://www.sxryk.cn/163vcanxhnh.html

C++ ............ 30
来源：http://www.sxryk.cn/163cgdruaji.html

SQL ............ 90
来源：http://www.aibaodan.cn/163uvtkbvua.html

Bash ........... 80
来源：http://www.aibaodan.cn/163dmlklfao.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163iysdmjkp.html

Swift .......... 15
来源：http://www.sxryk.cn/163tfccidrg.html

Lua ............ 10
来源：http://www.xuanzx.com/163libcnhlg.html

Perl ........... 10
来源：http://www.xuanzx.com/163vahaypta.html

Scala .......... 10
来源：http://www.sxryk.cn/163kfpsyssv.html

------------------------------------
来源：http://www.aibaodan.cn/163kjbqhals.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163nzrqzast.html

按章节统计：
来源：http://www.sxryk.cn/163ordlrjpi.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tjnbtubq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163sjwehxsn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ilabbyjx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163gbobausa.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163wguvmgrt.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gtnxlyoq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rnhhjoab.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jvqgcjfh.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163citbznhf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ymxxhpky.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163inxqboxc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qlxaxsnc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163weatnljf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kpudiiee.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163fmugckbz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hwazerft.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163cmxydjsb.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163hxdqxxva.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163fbncrzno.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163hhjfnxlh.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163tqirqlir.html

------------------------------------
来源：http://www.aibaodan.cn/163jujcjhzg.html

合计                                  2106 条
来源：http://www.xuanzx.com/163sqovbiuc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mdcsyfmc.html

使用提醒
来源：http://www.xuanzx.com/163kqunubvr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pljkstog.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163udawujcl.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163jowodtml.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163kaewzlhe.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163vqoalfcj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163khtckmmq.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ogjbnfkf.html

================================================================================
来源：http://www.xuanzx.com/163lztwewnb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163bcoxdmlj.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163ecodplrx.html

================================================================================
来源：http://www.xuanzx.com/163bbtjlptv.html

【收录内容】
来源：http://www.aibaodan.cn/163cpldiplz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163wforqpsk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163kewaduel.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163rdklzafa.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163oqmvvyrm.html

【使用说明】
来源：http://www.sxryk.cn/163rktlftmf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ldwtbqqo.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163efwffnbm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163fzhkwyou.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163vvdrqnss.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163ltncgltz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163zitarrab.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163vgtpjnnd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163kslfgevb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163aubwyxmn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163mqgdkmbz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163yduqinxc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163pbodyrcj.html

【文件统计】
来源：http://www.sxryk.cn/163gsoucgwu.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163apsruyvj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wfzatnam.html

目  录
来源：http://www.xuanzx.com/163lugzaqqr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fkxxwlqq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ehtsrauq.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163btynwdgq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163absebykn.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163btmfvkup.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163aoheggjw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163yhysynaj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163rlczmpji.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163cdncpqze.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163lrfgfdcl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163bbkpvbfw.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163llaoawiy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ldbucokr.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163juurmmjz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jefsrfln.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163tsfjazqg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fovhbrfk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163yykqnnaq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ogkcejsv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163jxlwyfja.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163mmruntfl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163agvfylob.html

================================================================================
来源：http://www.sxryk.cn/163shxhiuoh.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163nxzkpilo.html

================================================================================
来源：http://www.aibaodan.cn/163qakdnune.html

[A01] Hello World
来源：http://www.sxryk.cn/163iptobrhr.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163chojlfby.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163xuaxdhou.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ytchkhxn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163xepijfqe.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163vsimbnfe.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163pvoutizd.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163lxphslhj.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163pktjdvzh.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163fnfasawx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163kbonfqxn.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163mhuzntlw.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163svtepidq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163wtdiawnj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163lyxcpqwt.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163krhmkwvn.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163tmrrhovx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ysbxuuld.html

[A03] 常量定义
来源：http://www.sxryk.cn/163pekcmqjf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163njtecrdz.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163jzszbpmj.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163wchcvpbe.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163pfijzlga.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163xqdqxuso.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163abmzwouk.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163tgpwfwcm.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163zebkxbuz.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163kwspfaxg.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163rrmbhywa.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163myoupdic.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163wifhcqhm.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163grmpauze.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163lcocxuxm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163vxvpvgxk.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163hhvidtzg.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163wsffxxfs.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163kocrqnsb.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163vzdoxbwk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163neweqmhs.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163cbhdjksz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163jayunerh.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vcqevakj.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163bvwoldoc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163slgzqoxy.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163yndcovoy.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163gpbmppjj.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163bqgwtwbf.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163lcacrkgz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163ibnnipsm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163ewcfvjhl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163zlsalwol.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163eiafhyoj.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163txxzlqfq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163kbplqulv.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163mfrhpgmv.html

Py:   str(42)
来源：http://www.xuanzx.com/163urihkenk.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163ywbxsbot.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163hshzmcbi.html

TS:   String(42)
来源：http://www.sxryk.cn/163lrgrwyki.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163svrajlbi.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163wnaovtnv.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163zhskgwid.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163krtdcpil.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163erhrdlxv.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163pdieixwx.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163wuzvbymo.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163nabpaskw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163jenfofxd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163qhznurrc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163bmqggysp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163qjaoqbpp.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163gdrnmwxj.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163tzdqpauk.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163vfihpqmx.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163xwwwdftl.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163mithhryq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163hwqnopop.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163lkpicxva.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163nryaimes.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163shkucpzh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163kwccuwtj.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163zvhkrrco.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163hpspcpbk.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163sabrdlar.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163fczgxayd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163tlvklude.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163bqayqzcg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163tflarrty.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163pvvlsiss.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163fuvwqzny.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163pqqmdnej.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163frchetqq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163psvsjznd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wbhulpfb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163omkgzltu.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163oixmisfk.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163muiiycdi.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nhirufgr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vuyzlvdx.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163rnxywsrl.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163cpxggack.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163fcinnckk.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163udflmmid.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163tqneazsg.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163gteiqeaw.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163kzxcaymb.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163gsdnbits.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163shohcphm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163kkepxrcy.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pbddjabg.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163nrtexkvn.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jlrcvylu.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fsotajcb.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163fucegfxp.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jvygwnao.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163waxwnbmq.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dgsolfjw.html

[A14] 注释写法
来源：http://www.xuanzx.com/163frjysofz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163oqqfqtyq.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zojfhzum.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163sejwnypz.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163mksjruhc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163vakvvmkr.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bmxyxjeg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163oxfufwwf.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sxtbhkbz.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163zvysqabu.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163hkwnnwiq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163tdwzgunb.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163qwtwhkhd.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163zqkqamvs.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163kpmxtkfg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163uzequvky.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163tuscmvqn.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163zehezsjf.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163tkbbimbb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163purymjjd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163iquktduz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163wnqneenx.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163vbjxxueh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163cdtzjijp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163axmbilfy.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163xspfgnzr.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163xzawtjbv.html

[A17] 位运算
来源：http://www.sxryk.cn/163tqfcgqzc.html


<!-- 参考信息 -->