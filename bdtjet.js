外链999!wailian999！

[U85] JS：可选链
来源：http://www.aibaodan.cn/163pajmzfye.html

a?.b?.c
来源：http://www.sxryk.cn/163shfdwqqx.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163darxiiau.html

a ?? b
来源：http://www.aibaodan.cn/163xaumitbw.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163bigvblcj.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163jettazyx.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163oyhkwtad.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ohqutcgi.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163yjqoiein.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163hkcvlkel.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163nofjgbfr.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sqhjehsu.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163wwnnkpoc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163mcbujosd.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163bdctoeja.html

structuredClone(obj)
来源：http://www.sxryk.cn/163hppevfhv.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163attlmuta.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ipdlvemo.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163bndnvrwc.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163bzcgldie.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163xtuudvhc.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163gabhfguj.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163luckpwlb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ihhvtlhi.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163gnwrifcj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nvlmhbah.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qlfvhjoz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163edbearym.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163zyqowjro.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163plmsqijl.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163zguddayh.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163pszvcdwi.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163oknkyrnq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163okibhmki.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163hgvhuquk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163igfvtdso.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163eszzxspa.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163unuatkxs.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163fbrkeepm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zpzxluvy.html

[U105] JS：节流
来源：http://www.xuanzx.com/163cxvisxzu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163yzgfknge.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163afsuowzb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163cxzoryhg.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163xfcuqnxb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163eebykylu.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ndpqbmwh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163jbmwsybe.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163yuotkpau.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dnmnrcuu.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163quyikbtk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ottxlmiw.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163hiximtof.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163elhfoumy.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ywtpxsxk.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ptvmasmo.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163bueyavrb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163prulukig.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ttrwjsmc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163okarpahy.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163jzjxgyck.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vxfyjloq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163edusfwha.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163tfebsrea.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163vogukgon.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163jnhbgwoj.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163vamvnpvv.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163wneupflf.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qrupukkv.html

npx vite build
来源：http://www.xuanzx.com/163xpwykrus.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ijeoclwu.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163lvmbsegp.html

================================================================================
来源：http://www.xuanzx.com/163vzlyhbzx.html

统计汇总
来源：http://www.aibaodan.cn/163edcyeafd.html

================================================================================
来源：http://www.aibaodan.cn/163bmrrjcns.html

按语言统计（条）：
来源：http://www.xuanzx.com/163upaxubou.html

Python ......... 252
来源：http://www.sxryk.cn/163dakxhlmb.html

PHP ............ 252
来源：http://www.sxryk.cn/163uipzpczf.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163gvpbisxl.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163tnaurajf.html

Java ........... 212
来源：http://www.xuanzx.com/163apureemx.html

Go ............. 212
来源：http://www.sxryk.cn/163fmlqurrg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163xfzvryop.html

C# ............. 212
来源：http://www.aibaodan.cn/163qjietdxm.html

C .............. 30
来源：http://www.sxryk.cn/163sodqkmbr.html

C++ ............ 30
来源：http://www.sxryk.cn/163dwuxfnpx.html

SQL ............ 90
来源：http://www.sxryk.cn/163gkkzgccc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163nmpaowtn.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163hyzszzbj.html

Swift .......... 15
来源：http://www.sxryk.cn/163dkyusdwo.html

Lua ............ 10
来源：http://www.sxryk.cn/163sjcrgnty.html

Perl ........... 10
来源：http://www.aibaodan.cn/163xbetfdft.html

Scala .......... 10
来源：http://www.aibaodan.cn/163ixkgwhaw.html

------------------------------------
来源：http://www.xuanzx.com/163gqdhsprx.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163huhgdclt.html

按章节统计：
来源：http://www.xuanzx.com/163kxwxbnrz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mmazricl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xrkchhlb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163unfuwpzr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163aimrigqk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163gsxltsgd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163tgykdrxz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zayccvnq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163engryumw.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gclzidmh.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163wgitxvqy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163plnlooza.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wouvldkp.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ajcakhmf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dbbwnngv.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163kkvshmnj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qtttqqeg.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163pttwjppt.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163cgnrcpjc.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163otzveymc.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163khygvybr.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163oczkvflj.html

------------------------------------
来源：http://www.xuanzx.com/163bxuydzes.html

合计                                  2106 条
来源：http://www.xuanzx.com/163zzpaahnu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163afrdmqzs.html

使用提醒
来源：http://www.aibaodan.cn/163kvmmdzic.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yhlhmrqe.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163iackhwqx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163drlebzan.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163jcitswuw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163huiekbfq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163uucnnsje.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163xxiesecw.html

================================================================================
来源：http://www.xuanzx.com/163jldvmrfp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163nblasrph.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163pdidjkwm.html

================================================================================
来源：http://www.aibaodan.cn/163wngiuhpg.html

【收录内容】
来源：http://www.sxryk.cn/163xtyvuqdr.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163rqzsqdpo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163wprjzoxv.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163hfdiyglm.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163garqccbe.html

【使用说明】
来源：http://www.aibaodan.cn/163sakqygoh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163kwchjewv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163xuohuymh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163glnqcwbc.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163mqolaieb.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163cexwcdxe.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163mscikkta.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163mkfievzu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163atjbqgry.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163pzskdcor.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163gertbswm.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163zvmaknnl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163uypvjmkf.html

【文件统计】
来源：http://www.aibaodan.cn/163pytwzyvz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163fzqrteqk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hmxcmwer.html

目  录
来源：http://www.aibaodan.cn/163wddebsth.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163oggkohhz.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163vleglkex.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163voqkyeuo.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qqjbjwje.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ccxtymnv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163kyhaoqca.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163qkbzwnod.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lusdabqv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163svrnmraq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163iwopudbo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163eboxtwma.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nkdtvzvy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yqszlvck.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bwkrnhww.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163gcqvqsfu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163qgphzkxr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163toyzwsfv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163ymqsxzig.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163cxeznnim.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163vqzknyhh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vscgkehc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163csltvdau.html

================================================================================
来源：http://www.aibaodan.cn/163scxpwxfu.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163wjzkkvhp.html

================================================================================
来源：http://www.xuanzx.com/163kkbgjaix.html

[A01] Hello World
来源：http://www.sxryk.cn/163wzmjfiay.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163auysousd.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ljsvrbfe.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jppuwpgk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163bkyqbudw.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163tgjiwpjj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163zecibdab.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163uuptdfub.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163huivftwq.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163xdshtarn.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163xsycoxxv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163diqykqhf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163bizxsvqf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163iujodndl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rwuzjban.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163xcjwwztj.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163fzjtrchd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163onhueqgo.html

[A03] 常量定义
来源：http://www.xuanzx.com/163iciuhntp.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163gimctdov.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163tmfcxtrm.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163jpowzbax.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163irdyjnhu.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163sffneckw.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163kifeomnm.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163fnxsginq.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163cpellgkh.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163dggqprnj.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163sfxxigiu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163bspipnwz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163kzjglncq.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163crsanbuy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163llmdeokr.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163hrkeyuxy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163ipfrcfrb.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163jdrvseec.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163voqvveuc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163pmtsgiax.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163doadepqq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163qgajnarb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163uajdaklp.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ofnzutbw.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yiqgccov.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uzuhlexs.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pnbetptw.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163fmymgihr.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163xmebqypj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163balbbglb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163oxwguesy.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163jncrfdxg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ewxqdruz.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163pscqvlen.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163bprybmhf.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163czryjtrh.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163rcksztzp.html

Py:   str(42)
来源：http://www.sxryk.cn/163ymkyvzco.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163kbaggdyh.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163fqaygigy.html

TS:   String(42)
来源：http://www.xuanzx.com/163tsypgezt.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163snlwrwdj.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163mqsdaalg.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163rkqphvhc.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163bphfxfja.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163zdwttxdi.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163cwdiaoat.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163lhptfgfp.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163aumokcot.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163lsagftgo.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163vzcawnbd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163bmxdobib.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ylmnpisv.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163yxsgkpsa.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163hgfduktd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163wwwpfwdi.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163jdfehevu.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163xkvkxwsk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163nvhiiyui.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ayipwbcv.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163jlzpbvtr.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163gkhmagrm.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163jsyksijo.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163lyfbswel.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163iadvxwte.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163loeismsf.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163wqrkwlte.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163crcjadqf.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163jkbhdvgb.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163odcfneuc.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163nytyusfa.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163mhyppxyb.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163vnjdeqgu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163lxaascju.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tqxroyrc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163morpnmxp.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ezufuxyi.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fxtlzbvm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163lyqvujvh.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jtteohfw.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lvlttcnp.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163yzpqcrsz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163krfuxlkj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163iajxmzlh.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163zicfopnp.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163mvlxzeuf.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163fueqtaia.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163eolasbld.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163bssnjjlw.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163xcoahruy.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163bfugczcd.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163molgmyix.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163belfjnal.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rreblgxu.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nuykafbg.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163vvygkjre.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163faatpswj.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163whijmcuq.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gbfhbstv.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163jlalleva.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163fezhloyy.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163hyvtepdd.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hwhnvciv.html


<!-- 参考信息 -->