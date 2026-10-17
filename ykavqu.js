外链999!wailian999！

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163csxpddca.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163qfuaydgh.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163vmwgixbq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163jppatevo.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163jnosbibn.html

a?.b?.c
来源：http://www.sxryk.cn/163sqkuuqov.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163gvxfemzl.html

a ?? b
来源：http://www.xuanzx.com/163kfqbiovo.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163btuijaue.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163tuxeqfns.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163xsjjhwmi.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163esafzefz.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ersfkwdn.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163olakdnaz.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163zprdmvxb.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163svhjrkct.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163frrgaomw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163czbxahza.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163iwieroof.html

structuredClone(obj)
来源：http://www.xuanzx.com/163clsuzojz.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163fjlxswkw.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ypgpbtft.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163vggrojrb.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163oeskutjb.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163yiyszvqu.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163uzesslhs.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163qiclnrgi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rsxwoqty.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163bzoyjqqu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ayaqecnx.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163jyjtgaub.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163vcqqjygk.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163hsynbvkd.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163twnbdgko.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163lgswthnc.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ypsvcwde.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163todxwkpx.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lrwpnumd.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163ltdxeibm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163urgddhup.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ijocoxqh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163qhmgsetx.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163jqiyhfok.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zrvucrta.html

[U105] JS：节流
来源：http://www.sxryk.cn/163agkfyfww.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163opubzjxv.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163rswdrccy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163cxltpmop.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163auzhrwuk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163kjrfevbn.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163xyicfdyy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ptpdxfyn.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163pyogmcrz.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qrgytjjm.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ohxabmmn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163bzlnygfl.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163dupntyad.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163nfiqoeya.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ifyudoji.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163nfzbdfpb.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163izkyskxa.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yfyvtjhl.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163hpuewrrp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zufzbzqi.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163usrselyd.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163zyksbeps.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163axbxghfx.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163yzjsaagm.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ckpvoyza.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163mitcvmrh.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163nbytlxtc.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163qnxnvqmh.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163wbtzxrtm.html

npx vite build
来源：http://www.xuanzx.com/163newungfv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163zxwfzdtc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163muyedzlm.html

================================================================================
来源：http://www.sxryk.cn/163glkxiajb.html

统计汇总
来源：http://www.sxryk.cn/163uluplvmb.html

================================================================================
来源：http://www.xuanzx.com/163dvwhxqzk.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ueohvvlj.html

Python ......... 252
来源：http://www.xuanzx.com/163lxqwzzwy.html

PHP ............ 252
来源：http://www.sxryk.cn/163hhtowqii.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163qkoofnvm.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163wwfvcdmz.html

Java ........... 212
来源：http://www.sxryk.cn/163mzdkawus.html

Go ............. 212
来源：http://www.xuanzx.com/163albrwcul.html

Ruby ........... 212
来源：http://www.sxryk.cn/163nidzslif.html

C# ............. 212
来源：http://www.xuanzx.com/163iahnhosl.html

C .............. 30
来源：http://www.aibaodan.cn/163hxgvlyzb.html

C++ ............ 30
来源：http://www.aibaodan.cn/163rcugnaqw.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ixmopdev.html

Bash ........... 80
来源：http://www.sxryk.cn/163rkqlysnj.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ygmijbfk.html

Swift .......... 15
来源：http://www.aibaodan.cn/163kgghmwmn.html

Lua ............ 10
来源：http://www.aibaodan.cn/163poilyair.html

Perl ........... 10
来源：http://www.sxryk.cn/163eyutgyxu.html

Scala .......... 10
来源：http://www.sxryk.cn/163zkdkwsoo.html

------------------------------------
来源：http://www.sxryk.cn/163ajeymxoc.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163iovogwcf.html

按章节统计：
来源：http://www.aibaodan.cn/163nwrhxbgs.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rgoqzclh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ljxdehra.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163puhugdds.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163xpjdaeyx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163gyuskijr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hnzqxwkw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163msmntein.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163hczhform.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rmedjiuz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tntkscqs.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163retvqqgs.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ldafmjba.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wkunbvqw.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163rwztgcda.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163svtnbccl.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rhswvhhl.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163bvcjycay.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163gbdnffzr.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163plhhbegq.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163hpjwynbs.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163haayzdir.html

------------------------------------
来源：http://www.sxryk.cn/163msnzabzr.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163srsvanzy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nwhmyvwa.html

使用提醒
来源：http://www.sxryk.cn/163lkpqkvuc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xhqetvqh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163ljaswxiz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163zabqmwse.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163mebnsltn.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163hhdbwhxq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ropfylso.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ffvbhsts.html

================================================================================
来源：http://www.aibaodan.cn/163bxxzvsgv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163nnaxyenl.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163rjtsisfn.html

================================================================================
来源：http://www.sxryk.cn/163kcrxypgr.html

【收录内容】
来源：http://www.aibaodan.cn/163kdciajgj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163vaeldqgb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163mynlgtkr.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163npqascrd.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163mwnpgekt.html

【使用说明】
来源：http://www.sxryk.cn/163jgogvdga.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163maoqukdj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163pmnqkoxs.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163vtvgkalk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ehotnhip.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163nidxfcyx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163vfrvmudy.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163bnngnsvw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163lnelgnpc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163qyhokoxv.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163hhamaktv.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163oojaokwm.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ovbaqcps.html

【文件统计】
来源：http://www.aibaodan.cn/163xgtagyec.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163lupciamb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tjozdtao.html

目  录
来源：http://www.aibaodan.cn/163zntlrkup.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163krqbnple.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xegdyfys.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163mgglrvqk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ktklbvqx.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163mummsasv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163lrnakjai.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163whzgzoyq.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ptxtntwd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163cugmxvvt.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163escggtci.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rwqpqjes.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fcwfmgzd.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kskhyrmf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wamsnnla.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163vjzloiaa.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163clqptpei.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163daznhfdu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163elthpsft.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163dvamxcks.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163iyouyosw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hsnnkghi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dzykvihs.html

================================================================================
来源：http://www.xuanzx.com/163koqfenjp.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163nrepzjfx.html

================================================================================
来源：http://www.sxryk.cn/163zbplwafe.html

[A01] Hello World
来源：http://www.sxryk.cn/163bnmejuhx.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163eerkfusy.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163jbjlzjmq.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163krimxvfp.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ayxmzqmx.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163vcazrxbs.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163dpsfbslo.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163ucbhzgqk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ajpbaxik.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163naejigvs.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163qqcfjepv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163wcglmyuf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163pmiftgmv.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163vrsrpizv.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163kfkkoalw.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163syzznjyf.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163wpxoxsxr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rdkuheuv.html

[A03] 常量定义
来源：http://www.xuanzx.com/163tiwstfsl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163pmwnifgq.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163dcsrvicu.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163xrhnvubi.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163jdihlpis.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163uhvzszyu.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163kemiiqae.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163qgcoiwvy.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163sdwjknpk.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163rcafmeba.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ewbfsqzy.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163qsoxrusq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163bnotxhjz.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163dxuptwnr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163gxalbnhs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163vscyxbcd.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163eyivhoii.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ydobydqn.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ltkxlbqd.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163bvtmrmdg.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163pidghleq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163qwzcbvlb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163creaczfv.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tftuipjw.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ucjrcixa.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163cxyydumz.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zmimzypi.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163dvdtcsae.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163viahnwcn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163vjpenkrh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163edapbymx.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163fzxkavhm.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163sstxmbpk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163faxtjohr.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163gnklpsci.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163dbnrhrtq.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163tzelpudd.html

Py:   str(42)
来源：http://www.sxryk.cn/163ydsjifib.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163uqqkwsqy.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163qwuryyfm.html

TS:   String(42)
来源：http://www.sxryk.cn/163ebwgmjlx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163molhvven.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163wvtogcgm.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163lgijlwqh.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163cbbmsiwf.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163nyakgqwn.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163znrcclty.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163lhalhecs.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163shikcaua.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163gomocxox.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163jbrfdqar.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163xtghkzav.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163sjwtlevt.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163fvrkuaxe.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163agaijxtf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wfhwioht.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163xifnpvyv.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163jxzjeuaa.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ygujyduu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163lsghjuuk.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163htbvitzl.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163pcbcfgvf.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163gglbclrp.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163wtylelhc.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163wvrdtnpa.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163jyjqhepr.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163pozfeuru.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163nialjxrn.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163epwnacvj.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163cqyqeovc.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163usanejyo.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163glvxneij.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163afimrhbu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163hwoelyll.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xbqqzjik.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163umwabytg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mhqhkmzh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zfbxpmqk.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163anbsvyfl.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163klubhrud.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163osebzxbx.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163fbeiqgov.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163gnvemior.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ocmrijhn.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163muzgduhu.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163bdjrqrov.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163rnvbsyxt.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163dlqzpzxx.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163marvnotc.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163qddffxke.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163vmymduwk.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163drjrgkcs.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163lgolaodc.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tzvijtve.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vnouevms.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163fkerfrbc.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kyyczbjl.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163hsgmocvu.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lxsbasyd.html


<!-- 参考信息 -->