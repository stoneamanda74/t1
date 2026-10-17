外链999!wailian999！

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163gmtxkuxn.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163owsomohi.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163wxpwxwlp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163gglzrdni.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163srukwhyj.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163cohpghur.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163juytupnq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163hyzxifug.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163vjuyrivr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163llyxegrm.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163zxcvfzim.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163gflsrcpw.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163gaslmzmp.html

a?.b?.c
来源：http://www.aibaodan.cn/163iynqeywn.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163lssuwlym.html

a ?? b
来源：http://www.aibaodan.cn/163gqupwxci.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163vbvkhnzf.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163frydfqlx.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163atvjngpe.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163sbgeucni.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163hxsepuvo.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ccbqesie.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163nbcxfzmk.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bmcipqrr.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163xrcelfqj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163eafsulya.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163nzugtspr.html

structuredClone(obj)
来源：http://www.sxryk.cn/163byvmbfoz.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163utxseqfd.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163svyjhhbj.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163xuybzqhe.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163phlpkqji.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163biwibxir.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ozfmgihx.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ogxtchke.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rfaemgfo.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163rdxgmerc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qluriypv.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163papnghpr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163jglybmrj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163hhxwbptq.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163oquogtwn.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163gdxqswdx.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163memdsapk.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163nsdkhdil.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163gzbnjzxx.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163cqozqfqy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163cbkxqsie.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163cakjforv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163rnevlrwj.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163lpoewzhj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hshtzuzd.html

[U105] JS：节流
来源：http://www.sxryk.cn/163iqbjveft.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163xpomaehp.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163wqirrejw.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163xwfdnjkc.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ilhwgzch.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163koxwolod.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163lyxzkzcj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163wimfylsy.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163csijybqt.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ajgfojdg.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163fajyjrfk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163olujyavc.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163feeztboc.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163iwovmjib.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163jetwebyq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163xscjukrl.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163wmdsylie.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uaiinukv.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163nuqbxiit.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gdxvywto.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163qiptvfwx.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163nxwbbwsh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163canzwgyo.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163nqdasnui.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163wtmtfsks.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163dtsscgep.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mhrrzzxb.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163bpjdsigl.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163kyhxervj.html

npx vite build
来源：http://www.xuanzx.com/163tmwrpoza.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163pivpwmfq.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163aldhbjsr.html

================================================================================
来源：http://www.aibaodan.cn/163betdhnzm.html

统计汇总
来源：http://www.xuanzx.com/163efgqdjjp.html

================================================================================
来源：http://www.sxryk.cn/163hcfticzw.html

按语言统计（条）：
来源：http://www.xuanzx.com/163cbbeuiyd.html

Python ......... 252
来源：http://www.xuanzx.com/163kmljnrvz.html

PHP ............ 252
来源：http://www.sxryk.cn/163fwqhpumt.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163xkfnlmiw.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163twbxnpew.html

Java ........... 212
来源：http://www.sxryk.cn/163ckodckzt.html

Go ............. 212
来源：http://www.sxryk.cn/163fxrenffg.html

Ruby ........... 212
来源：http://www.xuanzx.com/163palrwrju.html

C# ............. 212
来源：http://www.sxryk.cn/163lhkigbhm.html

C .............. 30
来源：http://www.sxryk.cn/163xxzsitqg.html

C++ ............ 30
来源：http://www.sxryk.cn/163laosutdb.html

SQL ............ 90
来源：http://www.xuanzx.com/163cieuoeiu.html

Bash ........... 80
来源：http://www.xuanzx.com/163yjuxbpep.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ychfxvtx.html

Swift .......... 15
来源：http://www.sxryk.cn/163uwluxfar.html

Lua ............ 10
来源：http://www.sxryk.cn/163kkxrpnic.html

Perl ........... 10
来源：http://www.xuanzx.com/163fuslzftq.html

Scala .......... 10
来源：http://www.aibaodan.cn/163baubabkk.html

------------------------------------
来源：http://www.xuanzx.com/163irdheqey.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163amecsvdr.html

按章节统计：
来源：http://www.aibaodan.cn/163vccqyidw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163cbjkkmgd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163sptccivh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jkzfuenz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163lihsymuj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163uwyoranc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163bpcjplqy.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dwvpuyvm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163kiehqblt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vxdknoqr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163dkneuccw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bytsjfsd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mlgdejii.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sbetsgrl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163qyhsfhjc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163yrwfbmmp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mwnbgogq.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163cbpcectu.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163fgyyewjo.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163xijvggkn.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163bebgswri.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163odufrfzc.html

------------------------------------
来源：http://www.aibaodan.cn/163cvuyetzk.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163hdzyuuxj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163yunbdvhg.html

使用提醒
来源：http://www.aibaodan.cn/163itcqpccx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lsbzmdfg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163fembkmgx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163gyojglft.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163abquowin.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163uarsynte.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163aayestdj.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163jlawfzcy.html

================================================================================
来源：http://www.sxryk.cn/163ztwuyhmn.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163mmpgryha.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163xttaqjba.html

================================================================================
来源：http://www.xuanzx.com/163hjuelsab.html

【收录内容】
来源：http://www.xuanzx.com/163hnllgfhf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163peesrmvs.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163dpsriruh.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ojwggufd.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163lpuqvxuc.html

【使用说明】
来源：http://www.aibaodan.cn/163mvimdpii.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163mtjluret.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163urjdxfmf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163qrtfkeit.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ghntfplc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163lnfaaaup.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163vxbbcorw.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163ddqaznlr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163jmkahuay.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ovhwukxa.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163dzxhpuak.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ytgyrcdo.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163kbbmmtcl.html

【文件统计】
来源：http://www.aibaodan.cn/163gqunfmso.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163vedhdsan.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ytveeihg.html

目  录
来源：http://www.sxryk.cn/163xelacbhz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163iutojrth.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163hyntdstl.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xhovbvxw.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163knusjmuq.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163yqnolrdq.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163cgfsyygf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163lnfiptwf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fhiujhis.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pugepurt.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sbytuopt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zyijsruz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xyytjilk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163egymblox.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163diqlcsco.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vzdmbfwy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163jgzgcgxv.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163oqjmmuyh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163dufndtfq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163pchnpuei.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163jtsbbqnc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163skyeaipd.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163kazepczi.html

================================================================================
来源：http://www.aibaodan.cn/163xyuwcjio.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163khqgbuga.html

================================================================================
来源：http://www.sxryk.cn/163vecnfjsw.html

[A01] Hello World
来源：http://www.aibaodan.cn/163szxhmwui.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163zzhcsqyc.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163hzydxuap.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163oejybwpy.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163zindpqlr.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163kjaykiph.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163rfdqsjos.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163yoglimyu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163wzypmxox.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ehsuowhm.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163qqqcvusv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163vixwkraf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163etjyyorp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163zazrtcai.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163eaiubzmr.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163iitwxtuk.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163nyxgqddm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163xuyawrgh.html

[A03] 常量定义
来源：http://www.sxryk.cn/163uowdzrhl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163lywitlnf.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163bztssdgf.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163alrnvcwx.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163gvnlequl.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163mwzpxglr.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163gfupqerl.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163uvxlpajt.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163gjeemyob.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163lomyxrfc.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163smpsbluo.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163autebpcl.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163qgfiodjf.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163tvthzxhv.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163qqjkxnqs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163gqfrqhdp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163eywrictd.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163bjshqilq.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163hvqcoizw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163qsoknyiq.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163votnlnzj.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163zmdzupfx.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163tdznrwoh.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ityoaqto.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kdaenfjo.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gimqorba.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163tscvupbs.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ciflkoqa.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163noxqklio.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163cqqfphsv.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163vdbqleeu.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163wgvklvjc.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163bkxvhlwz.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163hilxpjwf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163khtwaagw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163akyiormr.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163cwxgfldu.html

Py:   str(42)
来源：http://www.sxryk.cn/163nudkqavd.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163sztfmdop.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163rqesoztu.html

TS:   String(42)
来源：http://www.aibaodan.cn/163ddkemdka.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163pfrvcged.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163rvphxdxs.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163tukaivpy.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163xzzzgfhd.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ptcaoaud.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163dhbrygmx.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163pcbhfyed.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163qrlfnmnw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163pudbhcbz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163sjuycsxz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163hsjkaker.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163tfvsendx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163fzfslcmw.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163kzsvmbkn.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163obksjxqt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163iimihzii.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163cdgqdpkr.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163syqcbedw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ggosapvd.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163uhwgellf.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163vaoojhnr.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163onesstvq.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163kfefpucu.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163jdcrmjlj.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163zbvzepki.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163icwynbpz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163reeseisu.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163ozlwjsos.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163riiakvsm.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163cvpgbwyj.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vuclqpcm.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163hqctivmq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163glmvfcuh.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cjhochia.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163eedfpwhi.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xzrmamqc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163igdszegk.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163bwlykimt.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163khctvvfs.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pbsncblv.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163tfkoxsbv.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163rqlagkve.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163gjpcgffr.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163mubhdpks.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163bmjplynv.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163tloldqzq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163hkgouiam.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163fijafhrn.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163vyycvcdt.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163zdyoeaed.html


<!-- 参考信息 -->