外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163nulnsejb.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163crlspbka.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163cjpusacp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163onzgskad.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163hxtkhkxe.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lysahgfl.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163jflkiair.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163kzgskcbl.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163thvhhgkp.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163mwdmmfhf.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163yfhpfuxl.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rhxtyzhj.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163zhylxsyg.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163etfyipmc.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163adwvyunr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163sxsqdbku.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163sgzbkemt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163jzjlkfuz.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163hqqjflhz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vsbvndpv.html

[U105] JS：节流
来源：http://www.xuanzx.com/163mhpahxmb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163yjnsbxjk.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163jjwcczzd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163cvssrzwi.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163npvkvkwh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163qoxgmpif.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ybmesewd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163vcdeysua.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163kwsclwez.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zeqrqxig.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163elcbtdfq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163lescrrhp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163vdimiolu.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163fqunodno.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163dlzphnxc.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163tojfkgfo.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ochjtdtb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wtzqbbgr.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163hngvsaje.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fytazwam.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163veqqoqvn.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hlwhakzl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163fusfmwsl.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163mjasgfon.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wneagvtc.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bhpfggnn.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163zsnnlcmt.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163xdwlpkqm.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163wtxsxizr.html

npx vite build
来源：http://www.aibaodan.cn/163rhxqtgpd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163sxbwemyg.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163anhojatx.html

================================================================================
来源：http://www.xuanzx.com/163qydxsusd.html

统计汇总
来源：http://www.xuanzx.com/163idcdxuxc.html

================================================================================
来源：http://www.aibaodan.cn/163jjnmqtlc.html

按语言统计（条）：
来源：http://www.xuanzx.com/163tzrvvbsq.html

Python ......... 252
来源：http://www.aibaodan.cn/163jhxazjho.html

PHP ............ 252
来源：http://www.aibaodan.cn/163yvzymgmm.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163fjogrjrc.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163zqqevmbg.html

Java ........... 212
来源：http://www.aibaodan.cn/163irvcpbkq.html

Go ............. 212
来源：http://www.aibaodan.cn/163avybuevm.html

Ruby ........... 212
来源：http://www.xuanzx.com/163jxpmpfjg.html

C# ............. 212
来源：http://www.aibaodan.cn/163hydhpicd.html

C .............. 30
来源：http://www.xuanzx.com/163rgaldghe.html

C++ ............ 30
来源：http://www.aibaodan.cn/163xmquttqz.html

SQL ............ 90
来源：http://www.sxryk.cn/163ebncfkym.html

Bash ........... 80
来源：http://www.sxryk.cn/163erxczmyj.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163gonbbupa.html

Swift .......... 15
来源：http://www.sxryk.cn/163ktbvqjes.html

Lua ............ 10
来源：http://www.xuanzx.com/163dasntxim.html

Perl ........... 10
来源：http://www.xuanzx.com/163aoywppvu.html

Scala .......... 10
来源：http://www.sxryk.cn/163raexpvyq.html

------------------------------------
来源：http://www.aibaodan.cn/163ldfxbkim.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163qeevxora.html

按章节统计：
来源：http://www.aibaodan.cn/163qsvcsvvq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ghqqavgn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gmwlfuww.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lxmrhmhx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163eiuyotkp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ajmnahsd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163uwbwlybo.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jqddkgqj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163qlekbiyp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cjkviqkd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163heeioskm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163myyqguiz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tvkzjwbv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163joiuajrl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163lqnfpzvz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163eygmzwfn.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gfbnfpwv.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163lgftygys.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ngxxvqpx.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163lxdowfzy.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163hordiqow.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163yjwjxafv.html

------------------------------------
来源：http://www.sxryk.cn/163adxqjrgd.html

合计                                  2106 条
来源：http://www.xuanzx.com/163nudzrzrw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ffcyzeff.html

使用提醒
来源：http://www.sxryk.cn/163lknpdhir.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xsgabosa.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163rbxgjzhu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163crfnyqaf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163fpngwvko.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163cxwdille.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163peseevyl.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163vhhrgbla.html

================================================================================
来源：http://www.aibaodan.cn/163fwdyljud.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163zzgjgavw.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163tfkzneek.html

================================================================================
来源：http://www.aibaodan.cn/163jqrlqrsq.html

【收录内容】
来源：http://www.xuanzx.com/163ateoukid.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163xcurcxkz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163cizoxcnh.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163bogbvmkx.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163jnipdhqw.html

【使用说明】
来源：http://www.sxryk.cn/163ielcxols.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163lkcuamvt.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163bsbisrbu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163dyjrouhe.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163qxsgigak.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163mczcymoy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163tgipuloi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ovlqfvvs.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163gscatiyh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163zyqjhmyt.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163rpzdsshv.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163qysnryfa.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163bbezbgqo.html

【文件统计】
来源：http://www.sxryk.cn/163cleubcpf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163uuobjdua.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xuwpgcmr.html

目  录
来源：http://www.xuanzx.com/163qutzxewz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ndsuaorf.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163jnycewfr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163sjsusxbs.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qbqoeihe.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163exlshmta.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163pggkbvto.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163mihvwacf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bxvtdudc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163cdlxqpxf.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gvzxmdbz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lsvhejrg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tznnjuah.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xcttupfz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rjstlwah.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163hzlpgmbm.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163fgkstpbj.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lwjhjmwq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163bojzvubv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163jmtnrljk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163gbreajoj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163gfhyqvhj.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fesgxbco.html

================================================================================
来源：http://www.xuanzx.com/163amjbspjt.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163xqozprae.html

================================================================================
来源：http://www.aibaodan.cn/163enpuuizt.html

[A01] Hello World
来源：http://www.xuanzx.com/163tuentudx.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163lrokpoiw.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163rzchbdsk.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163jycavsfw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163nlgkfdie.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163tgywdxzg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163oiizxhcy.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163eqvijpmw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ycfnlsgg.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163jsozxbpf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163syoclavr.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163zcirvuqb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163kacponyj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163scfvlyvy.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163omjwvcnn.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163nghqkfup.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163piqikepn.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ctcwspas.html

[A03] 常量定义
来源：http://www.sxryk.cn/163usltnyxt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163eyyihfvz.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163hnlzcgik.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ozbwkmvu.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163jozbglqr.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163lkkzwawu.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163zomsxnya.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163oifzfuem.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zduzuqtj.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163agkzgqpd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ohsdeqjb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163mltoberp.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163ndydtwai.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163abfeqnwr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163mqyyjckt.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163ftkpblea.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ftzlvtjn.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163hwxftfqa.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163bglwggow.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163niynkmlv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163lfqksuqn.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163piucxuum.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vwnfnlvc.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gkvrhraf.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ljdpxfmq.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nojjapwf.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kcxkurvs.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163wnxxthif.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163lnfvaoyt.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163jqkioblu.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163knuozwgz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163ydtlcynv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163oehkdocw.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163gtjpqskl.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163smirxodh.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163sdxhxcns.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163vjzxcrfp.html

Py:   str(42)
来源：http://www.sxryk.cn/163spunqbdm.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163tqwdzevu.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163avdwjqkc.html

TS:   String(42)
来源：http://www.aibaodan.cn/163pyvvbofe.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163irvayblg.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163cwsiyzxw.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ocmrufkl.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163xtyrebti.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163dqmxfrie.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163ptnhzago.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163lxsxunng.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163uctjyaee.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163kinoekjc.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163fgdexjww.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163fnjqwjzk.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163wgudaxsc.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163pjvaxewb.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163xpfjatjb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163xiuejair.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163pemjqdzy.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163bmskrvsx.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163usnnohax.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163vxwadjzw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163kpzwvrda.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163ahipqlht.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163btpdynvj.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163lnuhcatl.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163vzyfpqku.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163vwtmenwq.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lsynckrx.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163aelecnaa.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163hvelcuqg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163kvhmguvl.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163srtdfwaw.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163mcuwaezl.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163lzdeucnn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163xtvgrnpf.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rcmoibyd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qexlwnhb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ahztsmns.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qkwqngva.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163cwsxysle.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163scjixhyi.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hercibhr.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163ujtjchbs.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163zlmryxfw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163mvvogwgq.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163gbfhzluk.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ysipwltt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163wyhtdhso.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ndfkbgml.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163rqqyetsj.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163nqgnwvlq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163dflpeqng.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hztjrein.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163ngdceuzn.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163uhaxxqge.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wcbjqweo.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163sckrlecb.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fxwvtnbp.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163lnbntwhs.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jwkaebot.html

[A14] 注释写法
来源：http://www.sxryk.cn/163nywrcyxc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163kmzclcxj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163itcryowa.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163owckswwj.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qbzshorm.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163mihsbopu.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163fvzgrycz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163mvofgubq.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jekdovnh.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163ejvbwzks.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163bxzfmdeg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163hechsvkb.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vddppdhd.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163czsrxlkl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163kiffuiuq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163snpzwtyw.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163mwkhejrs.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163lvjcrike.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163soihwgkz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163njgootvt.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163cpeodzhq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163otpgqiwi.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163dqpxkosm.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163asmdmddu.html


<!-- 参考信息 -->