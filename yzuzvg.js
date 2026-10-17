外链999!wailian999！

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163smvdyhdw.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163udmlpauu.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163mwuiajgu.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hpcqatnn.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163yhoiyfdf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163alefbfsg.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163hahjyuwk.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163cqztjcwo.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163huyknyco.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163glidalfs.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163czhdilvz.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ivxyqcbg.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163pkrrsjlt.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163dpftiksh.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163qpxypbwp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163akgkgmig.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163xfilbpkl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cegmjcmg.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163txxgciib.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163kzbzyvls.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163qmoueuma.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163myxlxotq.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163nwxukdui.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163konalvvo.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163zaekopbo.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163qhgskdft.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163qogqmaeo.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163nudchfzc.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163xqwkkcfk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163mattdhpa.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ynlokmjx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dcbnjiui.html

[U105] JS：节流
来源：http://www.xuanzx.com/163xmkxtmch.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163mmvzlcwl.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163fzljhiyj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163etjimsqc.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163llivkaor.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163kgkudfyo.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163okysgghl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163yvasxvxe.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163pybcetpm.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zooybrqe.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163gqoqacai.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163uajauwrv.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163irhkgglx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163lijmbfcj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163oeiwgfwq.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ismpeala.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ygfsntus.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cnubbbni.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163wxtygxyd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163pwckyfga.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163jqivxgvk.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ybsaqsdk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163dalobacq.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163phfpujlo.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163xoebasgn.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163hdldgruu.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163bbzewfyl.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ozbzzgfm.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163pgoyrzzi.html

npx vite build
来源：http://www.aibaodan.cn/163eafowfev.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163izxsozfj.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163kcutzfgg.html

================================================================================
来源：http://www.xuanzx.com/163kulmsmdn.html

统计汇总
来源：http://www.xuanzx.com/163ufhgspiv.html

================================================================================
来源：http://www.xuanzx.com/163czmzhkgr.html

按语言统计（条）：
来源：http://www.xuanzx.com/163veimfdip.html

Python ......... 252
来源：http://www.sxryk.cn/163lqvjvfqp.html

PHP ............ 252
来源：http://www.aibaodan.cn/163itjntmnz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163fknetxeo.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163czoedpml.html

Java ........... 212
来源：http://www.aibaodan.cn/163pvonrypt.html

Go ............. 212
来源：http://www.xuanzx.com/163btchjimy.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163bymmqrbv.html

C# ............. 212
来源：http://www.xuanzx.com/163kjvberas.html

C .............. 30
来源：http://www.xuanzx.com/163fjyledvz.html

C++ ............ 30
来源：http://www.sxryk.cn/163yfdlvczu.html

SQL ............ 90
来源：http://www.aibaodan.cn/163qmddeout.html

Bash ........... 80
来源：http://www.aibaodan.cn/163laruqvwi.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163dyzibvgc.html

Swift .......... 15
来源：http://www.sxryk.cn/163aujhoptu.html

Lua ............ 10
来源：http://www.xuanzx.com/163kurfxcuw.html

Perl ........... 10
来源：http://www.aibaodan.cn/163obfcwlsg.html

Scala .......... 10
来源：http://www.sxryk.cn/163jvjfnqob.html

------------------------------------
来源：http://www.xuanzx.com/163omjmpcmu.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163xdzlwvfd.html

按章节统计：
来源：http://www.xuanzx.com/163lmidodzx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hepwuuyj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kncxpvft.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163frawouuh.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163sebyrreq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163nsimrixq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163mvjzsxrj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163spesmgyz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jtusztjc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163eoyuuvfc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qtrdkclv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ncaulztk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yrdhuyiq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ivbjxiya.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163sztekxpa.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163fnbupare.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ovxctaio.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163swtyndsy.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163frytmkcj.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163qnrdbmcv.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163tarzoenx.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163bhuvxjlh.html

------------------------------------
来源：http://www.sxryk.cn/163jpzlhdee.html

合计                                  2106 条
来源：http://www.xuanzx.com/163qdaomvlk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rtlbqmmd.html

使用提醒
来源：http://www.aibaodan.cn/163uaojhfav.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ngfddabi.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163kehhmbfb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163bhymsqji.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163wftghlxe.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163dxurktxl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163lzfhwenz.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163bbygfyal.html

================================================================================
来源：http://www.aibaodan.cn/163kvcbasvm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163rupwssno.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163hgswclaz.html

================================================================================
来源：http://www.sxryk.cn/163ekmftwxy.html

【收录内容】
来源：http://www.aibaodan.cn/163ufauqaap.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163mjdakomq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163azigmzbx.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163bdhyswes.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163igktkwjz.html

【使用说明】
来源：http://www.aibaodan.cn/163qlurvrqo.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163vndbqymz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163anzdhxsm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163cqrfqbwk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163zyfwaovi.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163kfrhllmz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163eswfrtjk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163wfzsewyd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163qcrcoltz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163qykefyvi.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163ekjukxvy.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163hhrnzful.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163ipolvafl.html

【文件统计】
来源：http://www.xuanzx.com/163aiejcjjj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163hkpqdglu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vqvnyhok.html

目  录
来源：http://www.xuanzx.com/163mdeoeoqf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163anmmtxqk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163pmhsdwmb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ufdpsewf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163sudriopl.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yjewcluc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163mvxwhoee.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163asupptur.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ztxzaain.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163myehsanm.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ymubyshw.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163biomnjlp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gsndcniq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lebywmge.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wjwwqyko.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cayzhjex.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163dkmqtwts.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hrrbfixl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163zhnvzvyo.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ypqreheq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163zgwymbdf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zddkgsji.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163qzqcwavp.html

================================================================================
来源：http://www.sxryk.cn/163wesyhovy.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163bosbtago.html

================================================================================
来源：http://www.sxryk.cn/163lnievvlb.html

[A01] Hello World
来源：http://www.aibaodan.cn/163kzfhtbwd.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163qqogpyby.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163bmufddsz.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163etiqzokf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163bdfiliik.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163yntqfjyn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163gmkilkzc.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163pwfwewxa.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163kntqnusy.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163jtgrkbba.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163svcrebyr.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163uzibukmk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163eojgttzq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163mnlvbxey.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163toyhtisw.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163gvbqofkq.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ipuottxw.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163tlnzsvzq.html

[A03] 常量定义
来源：http://www.xuanzx.com/163lwvrkjge.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163llkxvmrf.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163yvfrpeuh.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163uonxkmrm.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163wdruhwie.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163btiwoywy.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163evmqdjwp.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163bwywcwou.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163kmgstpya.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163wgjrwguv.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163ezaesbjn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163folnegwj.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163tgudxvlp.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163yunwvtep.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163gfqjfpyw.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163arboqrrp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163nqpgdwxe.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163alfaogax.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163cdgyzsep.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163zifgjldq.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163cswjiaqt.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163kmhfpaqs.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163oyshjtry.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fwzblfqc.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fqiofept.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ymwiprps.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ekbrizom.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163dgskafbc.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163azhyyzsj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163qboqcujs.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163uugveujn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163cimtrmis.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163vzyhkdtp.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163zqzbwzls.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163nhhjzwuy.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163grujvhth.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163jpfyaydk.html

Py:   str(42)
来源：http://www.sxryk.cn/163ybbhjlzs.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163whplcqhi.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163cazjtidy.html

TS:   String(42)
来源：http://www.sxryk.cn/163ufwyvcde.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163lkklxtlm.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163oacyrdzi.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163jxouofmn.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163ocfsiogz.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163jiqqoeby.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163touacupw.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163vmkshuqe.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163zgqkddnu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163gejgcwzv.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163arlcsbww.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163pwvshmqm.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163nhqghxza.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163lpqqlvfn.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163hblostta.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163pcxyizgw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163lvbcacum.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163rrzxgouc.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163vqcnyxiy.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ljjyggvg.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163ugavppot.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163dksprfjz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163bklebapy.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163bgdjaevm.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163xlfixjuu.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163zuugctsu.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163khjfcrls.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163xntvplaj.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163avakygfr.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163nngfnics.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163qdizaxkl.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163ehuvqiyb.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163kkbelkxj.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163oepntsdu.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163knsoonnz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163llbycskz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wfgbzolw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mxxtfpfe.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ngqvuazb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163txrghqot.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hpnmrjta.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163qylwabft.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163kduedtvp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163mleobhpe.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163xamzbljj.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163vltorrer.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163lvuqbdst.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163eshcvxlh.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163qtuiggye.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163jwrjfgjh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163erfalnzj.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lstakmza.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163cpglzdse.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xcrtyeeq.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tcckymcw.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163xqgjxuum.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ynguzyqr.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163jqqmdayd.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yyxckaxn.html

[A14] 注释写法
来源：http://www.sxryk.cn/163uimdgcaa.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163jihngjvj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kohgnlai.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sntbqoow.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tolrhwrn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163edbwvewc.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163yozsvpku.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163gvsnxiuz.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qcugdakt.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163excsrdsb.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163fqzokljd.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163fprfllgm.html


<!-- 参考信息 -->