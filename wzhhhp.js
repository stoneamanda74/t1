外链999!wailian999！

[U85] JS：可选链
来源：http://www.sxryk.cn/163wddcibhd.html

a?.b?.c
来源：http://www.xuanzx.com/163esbjoyic.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ibapohvb.html

a ?? b
来源：http://www.sxryk.cn/163wwzmjsgi.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163tkottcvx.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163lvbuhbrz.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163jqymcwku.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163tznojojf.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163hdzhpxrk.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163nmdcguch.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163qghvpmdf.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zsatgprl.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163hkswujee.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163vubflsqq.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ezeocznj.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163wbzlwbrx.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163lfrqmwjc.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163tbuifpqy.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163yedtduzj.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163enacmpln.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163zhtzfuvg.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vtllegjp.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163kucxoiuj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rxsrbcdq.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163xzuwccez.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pacuplps.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163hvghthjn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xuhexkjw.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163kwzpdzah.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163qxrnxegn.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163gwbeuijy.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163tdjwivvh.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163wnyruqiw.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163dszdysxa.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163ominkprs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163dgokorsa.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163qzylgvtx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163xrcocfpc.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163wyhhxztu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163itiwqkqr.html

[U105] JS：节流
来源：http://www.xuanzx.com/163tlpsazix.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163tesbxujk.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163tfwlingf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163jblghvpu.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163zxhozxsm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163zflsddnh.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163fpfihwdn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163bxctzmmr.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163xyyoraai.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163klwgvpfs.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163bzenzloe.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163llbbdoys.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163pozetuef.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163tvdfwuer.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163hykgorni.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163auupoqyw.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ubpeyfwv.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wzabwmfs.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163efltkjcg.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hcuiuise.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163paxacrwl.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163iurgnalw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163cdnqolhy.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163cgqqukbf.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jceemjkx.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ofnutrpg.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163uukttyoj.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163vegmkbjy.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163heqyfndb.html

npx vite build
来源：http://www.aibaodan.cn/163pzkdxndh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163jbcnzdvp.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163dtjkvyyy.html

================================================================================
来源：http://www.sxryk.cn/163colbdcxf.html

统计汇总
来源：http://www.xuanzx.com/163wunrtubq.html

================================================================================
来源：http://www.xuanzx.com/163aovfhgvo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163wzneoosc.html

Python ......... 252
来源：http://www.xuanzx.com/163mmdziftt.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pwxknvqh.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163kmsukcei.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ollcsdtp.html

Java ........... 212
来源：http://www.aibaodan.cn/163lnrsarvm.html

Go ............. 212
来源：http://www.aibaodan.cn/163udmujrco.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ejzvbbqc.html

C# ............. 212
来源：http://www.sxryk.cn/163bobuylzv.html

C .............. 30
来源：http://www.sxryk.cn/163rhukwvma.html

C++ ............ 30
来源：http://www.sxryk.cn/163fkyrssyd.html

SQL ............ 90
来源：http://www.aibaodan.cn/163qcsznbbp.html

Bash ........... 80
来源：http://www.xuanzx.com/163lflorvzd.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163yhzrqlwm.html

Swift .......... 15
来源：http://www.xuanzx.com/163stljpvlv.html

Lua ............ 10
来源：http://www.xuanzx.com/163vwuybjrj.html

Perl ........... 10
来源：http://www.sxryk.cn/163vzbtloid.html

Scala .......... 10
来源：http://www.sxryk.cn/163ivetyjrh.html

------------------------------------
来源：http://www.xuanzx.com/163behcxnlr.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163mdtfaicx.html

按章节统计：
来源：http://www.sxryk.cn/163iiwtfuel.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163pceeyaok.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rfcpzoiy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vxnodtwu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163iyccymyz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163vnauwpsu.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ftqdmwrk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tasvaync.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pcqvidco.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ziwdlnuy.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163vhltqokr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kuvxihrl.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ymjklitf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tqwiwjes.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cybenaae.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163fowywgrc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lkdihavf.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163gpglywow.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ubgqwhwc.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163akpweqki.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ndmtahhp.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163dpqjtbtm.html

------------------------------------
来源：http://www.xuanzx.com/163yxxyofpd.html

合计                                  2106 条
来源：http://www.sxryk.cn/163cwndpyer.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163sdtzvbvc.html

使用提醒
来源：http://www.aibaodan.cn/163ftjlqmbj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bvfgoboj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163rkvqezso.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163xvdgyjuv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163wsdjpvwy.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163yfzuhqqd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163aedrlxqv.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163frqvphwv.html

================================================================================
来源：http://www.aibaodan.cn/163ksfgqkcr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163eympbakj.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163mfxjooyg.html

================================================================================
来源：http://www.sxryk.cn/163bxrjsgjp.html

【收录内容】
来源：http://www.sxryk.cn/163psfdngng.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163qeuifkae.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163hcnvqypw.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163wtwytblv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163qxflhydk.html

【使用说明】
来源：http://www.aibaodan.cn/163ayeuwgqo.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163akzxmzlr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163pqgurclv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163xowhbevc.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163gdwhzdup.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163flmjjmoo.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163kprvgwow.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ioskqdvt.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163edqkweis.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163pqovnzru.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163dkwchdop.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ppbjpllg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163jcoehikp.html

【文件统计】
来源：http://www.aibaodan.cn/163qymmlecd.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163qxxkjqyk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xgfqzbxm.html

目  录
来源：http://www.aibaodan.cn/163rvttomuy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163yznndmsw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163gjksuqze.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fwkyitgn.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mxsjfsso.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163azxbutzx.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163oqfzjxsn.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163eibadtgy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163lshuawyd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lxvewhmv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ufxwkrye.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ypczqvdq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wxweaqpj.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bhxgcesl.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dtcmbaag.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xtfnatdb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ykurgenp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ccivqoqh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163sckhwsin.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ixabgeve.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163uibkqjil.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163igmzczau.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163alacshni.html

================================================================================
来源：http://www.aibaodan.cn/163bbamamxf.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163wkpjcobc.html

================================================================================
来源：http://www.sxryk.cn/163hrgbguyb.html

[A01] Hello World
来源：http://www.aibaodan.cn/163sskhdirt.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163jtsduywq.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163cdtnznmf.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163lyboqxuh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163suljyaxn.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163enfsvrhs.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163eouhyxnd.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163vudbegiu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ztaofcvm.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163pzdbekmw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163cozepgxz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ideziezr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163jemyxral.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163bdvdunmy.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ygfxsbdj.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163kiftfxay.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163mrcdqzgi.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163arhnfqcn.html

[A03] 常量定义
来源：http://www.xuanzx.com/163tpehebhp.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163pmumtsvg.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163yrpibxhv.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163eweeyawp.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163xhldqngv.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163kvpgynky.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163wrrwbrcm.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163bdndqmfi.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163rucxludd.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163zmefnpld.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163vflgbkei.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163revbuiqy.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163epbmnopx.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ykupixcr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163drmnjazb.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163iewbhhyh.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163lbqvuxha.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163idhhffzu.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163uqijavba.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163kenijzbh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ckqojjti.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vkdmknwr.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163xkukekce.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fzstoton.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163euzdhbyx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163incukfgv.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163aiihlfqs.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163sniffymx.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ynahwwek.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163dftpkmqo.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163iiphouju.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163pmsbdyzo.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163mqafvcbf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163opqcthzj.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163icedbnko.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163dpxxvbxo.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163wswlpxuh.html

Py:   str(42)
来源：http://www.sxryk.cn/163rmkjjhkw.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163lmnbfnce.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163zlhukksk.html

TS:   String(42)
来源：http://www.aibaodan.cn/163zxyqqune.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163eortqubp.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163qfaccwyf.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163euudxrko.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163vboyjbdo.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163qymnkmuk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163wipfoloy.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163cdwjlysn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163euighahh.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163fbljtbqt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163olaqndox.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163yjgdwqhn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163rzlmvxlu.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ycbahmzm.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163hqxfsfru.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163noeemmoy.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163lpywtval.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163tdxjqucv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ygtllmpz.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163omimytpx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163iylslqlp.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163vpgqkqge.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163tvmbnmgz.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163oiwmfqod.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163ehskfjpd.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163qsqiritd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hcnofmdz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163gpzuuncx.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163cpmepawo.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163madewdhp.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163rawxdbev.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163futmdzkw.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163rdehdevs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ymvcozgb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163iujghphc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gupcufuw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ixihseqd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dscrdeqx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163epxtzvrx.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uqrzybos.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mrbywfgy.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163oqedmxrd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163yvzgthcm.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163sjgkxbul.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163tuzraxcu.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163zdvnsidp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163zjsivgec.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163neoubbhv.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163iumgvoao.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ekdghmjl.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163duyvdddn.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jtaswjeg.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163rjkfxglh.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tvmvbfcf.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163txwqlksy.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163ypmhadhk.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gafxgvis.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ogiuukzs.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163clpspdgk.html

[A14] 注释写法
来源：http://www.xuanzx.com/163acillgsw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163dndjnozk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163lvztoxen.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dgrevyyj.html


<!-- 参考信息 -->