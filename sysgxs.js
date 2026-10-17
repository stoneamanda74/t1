外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163atvybhkr.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163msasrjrd.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163htgmmxkj.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163goziqivy.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163bjpormhk.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163cyngtwlp.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163otrzaeiz.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dnsxknvj.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163hsasoxgh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163dvrvupql.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163fxyvoouj.html

structuredClone(obj)
来源：http://www.xuanzx.com/163nwfuurom.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163wlofkghi.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163jeznggcj.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163ywqcazeq.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163wvjrsmzg.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wvrqaqql.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163mkyqdkrk.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163kxorskkq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wnoconid.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163unjdtlwm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ntxpyggb.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163utfequnx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163mpbozbfe.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163qpeitanv.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163obaniipi.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163sxzxunch.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163tlitctgy.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163axoxayai.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ovqliwui.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163gonhmitn.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163gqmlxouf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163jbrkecln.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163vhbokvie.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ujajmykv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gnaaxyks.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163wicwhwzw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163kviffknz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163vlwdlevu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163qjcgirjx.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163fdgyxvbb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163xldvvoxj.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163mbsogvzz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163tmjjuaff.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163iienywii.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tvuupchs.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163tjeucuti.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163dqhikzjl.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163edzxkine.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163pnqrompn.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163fngaflgl.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163azytathu.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163gpbsnyqg.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bichgerb.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ukciphhu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163bvtuecux.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163dmarsrvu.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163poasmxcl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163jswrhjkx.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163cmlzvjwa.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163fztnhnrm.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163pfcdxnsh.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163umsxxjwi.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163utykmonv.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qekisbtu.html

npx vite build
来源：http://www.xuanzx.com/163vzjrsmpj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163pghhmefa.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163kjdaeieo.html

================================================================================
来源：http://www.sxryk.cn/163chmvrvle.html

统计汇总
来源：http://www.xuanzx.com/163gcdqaebx.html

================================================================================
来源：http://www.aibaodan.cn/163qygjmrag.html

按语言统计（条）：
来源：http://www.xuanzx.com/163uekkbfwm.html

Python ......... 252
来源：http://www.xuanzx.com/163mhaijjgc.html

PHP ............ 252
来源：http://www.sxryk.cn/163jorxaqgf.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163shxlxxud.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163gpjhydxv.html

Java ........... 212
来源：http://www.xuanzx.com/163bogpaoct.html

Go ............. 212
来源：http://www.xuanzx.com/163lziandxj.html

Ruby ........... 212
来源：http://www.sxryk.cn/163rhpfrluw.html

C# ............. 212
来源：http://www.sxryk.cn/163vyphpsib.html

C .............. 30
来源：http://www.aibaodan.cn/163oqvbexrq.html

C++ ............ 30
来源：http://www.xuanzx.com/163fdvcfizt.html

SQL ............ 90
来源：http://www.xuanzx.com/163fibnesyc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163tllfrygr.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163boxaqjpd.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ltwqryfv.html

Lua ............ 10
来源：http://www.sxryk.cn/163tdljerge.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ymndlieb.html

Scala .......... 10
来源：http://www.sxryk.cn/163knxtsrqg.html

------------------------------------
来源：http://www.aibaodan.cn/163dkdrmtqw.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163qvvwijqe.html

按章节统计：
来源：http://www.aibaodan.cn/163luogdikp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163gqoskhtm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163msscabsf.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ofpxlfuv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163cllmncnu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163vpyxqgms.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163jxzfhvad.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vdzajdxs.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ifvtnbxf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163iundyiyq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163mtiuudte.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zmyeokse.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163prdrdchb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nqwzpivz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ptbraekk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163mqfvwcuq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163iepjolyi.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163gdfszhqg.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rrhjmnus.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163jtjuxfou.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163hcholsuc.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163rvhdbmre.html

------------------------------------
来源：http://www.xuanzx.com/163lkafrygs.html

合计                                  2106 条
来源：http://www.sxryk.cn/163odwljiog.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yflcleag.html

使用提醒
来源：http://www.sxryk.cn/163tsjdlxyf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163abkwfywy.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163qfqdzsvg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163yxhvcsap.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163pdszjbac.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163rebzmztn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163cxfnaciy.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163dclrsgne.html

================================================================================
来源：http://www.sxryk.cn/163besiuosa.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163fhcnpbpa.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163tlglbfyc.html

================================================================================
来源：http://www.aibaodan.cn/163csuzwdxr.html

【收录内容】
来源：http://www.sxryk.cn/163mmdvuwxs.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163uevwbgnc.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163rzzeuaao.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163gwwwgvmi.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163lszshuvq.html

【使用说明】
来源：http://www.aibaodan.cn/163zljzfvfr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163flztchue.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163cegravqs.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163wnvkiezr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163pbcgadzh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163vdcaxady.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163zgeluwjv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163xyhlzfwd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163xluhoclu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163gnqowgsu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163xhihuxxs.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ijqgojjb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163xximmxtg.html

【文件统计】
来源：http://www.sxryk.cn/163jgqpqfff.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163nqnoqebw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hrtzuigg.html

目  录
来源：http://www.xuanzx.com/163lkadinei.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wqsdnfms.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ryonvoil.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xowhvxfs.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qwvbqnrz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163cdcywsmd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163gemmifmi.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163bffyuuur.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gdlmangz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163gibzdvuh.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163joelrdfq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163zohjrrig.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163yrknaget.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kbbprwbg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nllfwalj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163rolfqdrm.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163panqqood.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ryhmpfao.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163wjhnaohb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ilssbnej.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163ntfbrtgb.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163meopqurb.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mifjpmrb.html

================================================================================
来源：http://www.xuanzx.com/163dafdwcyy.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163agqyiaah.html

================================================================================
来源：http://www.sxryk.cn/163wwulfxsi.html

[A01] Hello World
来源：http://www.aibaodan.cn/163nlvhylfz.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163fkjcwgty.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163klqozkft.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163vhtkaalo.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163thxfahcn.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163uikjmhhs.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163cuyamcje.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163blbykgqv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163kkyasrsp.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163itamdgcq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163wmljjaow.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163hqkxvhdy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163fnatuyiy.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ivyxtjud.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163emhvudvk.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163rcwndqhi.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163xwddmyol.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163dezjqrmn.html

[A03] 常量定义
来源：http://www.sxryk.cn/163quqloqxi.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163xffrefzn.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163gtyuelgu.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163xghobgqv.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163zbnuhdeo.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163cjkuwwtc.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163vkkxshdn.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163qjlpbpfm.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nrylhgoa.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163vrnzvzwq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163owvuzoif.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163dkwjbooa.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163oeaoxvdc.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163opflozmm.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163yzqbmadg.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163hsezzjfj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163uwasnhvr.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163nnslxgka.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163rhuejoum.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163emcvnrof.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163kxuchnqu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163afhfwgvf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163jrnoikeh.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163serrtktt.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ylzljdwt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163obqzkypa.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vernvgiv.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163jlvgzwht.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163gmksskwn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163qjwdqsxg.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163svsifemw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163flnsijrg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163dbkytxtx.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163uobjrnzf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163qkukmuuk.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163hispmsrn.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163iesurxol.html

Py:   str(42)
来源：http://www.xuanzx.com/163hkejpzxm.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163kiuxypcp.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163uyvpkzqy.html

TS:   String(42)
来源：http://www.sxryk.cn/163fmadreio.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163uczxytml.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163eufllaqs.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163qufesxnd.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163fhougnbc.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163oxgthhxf.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163jvptdofs.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163ggcthbzw.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163hkqaxiye.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163vgodihxa.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163nogxcfto.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163luxbdxek.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163uzopldql.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163dxuvukwh.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163wymjbfhx.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ciltzsax.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163apvbgebb.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163dwdczxzm.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ewdkwfhq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163uhflhldv.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163tfpuboyd.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163hnueiwct.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163gxzocxed.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163iobmnkwo.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163mcwvpghm.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163iziaxvus.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163wzbcvzsm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163kgxjrjiu.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163hcxvbdsk.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163sstkihwj.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163bksebmdt.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163rbqfwzui.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163zrxgfxbx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163bsigtues.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163otimhguc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yyikbzuk.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dcdexxny.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bbhzxzta.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163gvgrkzcq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163imuycrpz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kvjwowwd.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163aqeoiohs.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163tvezezpk.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163vxejxoqs.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163qwsuiyoz.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163xwxfeooj.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163tpsbkqbb.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163nzjbyhfd.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163uvwgqkiu.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163jldwwhxs.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163vkjlqwkz.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yqztshov.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163haosfztz.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yjmrwcuv.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mslmfwiv.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163pecsucmy.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cmqtnkun.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163aozelqby.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163lzjwmgzk.html

[A14] 注释写法
来源：http://www.xuanzx.com/163coghjjol.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163jhcxuqpr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ggxqchvo.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qykjjfxa.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163itanjcue.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163trbptawn.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163evunjkis.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163qfmxlstx.html


<!-- 参考信息 -->