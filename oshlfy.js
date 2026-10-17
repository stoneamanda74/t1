外链999!wailian999！

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163kyxwfxlh.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163blhzvrdv.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163tvtmylna.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163gqsrummk.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163zpbcerwt.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163zsmcfxxv.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163raaqecul.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ostjebsu.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163wcdtuusb.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ruuqdlii.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163jamgqteu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163jciwetjm.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163idgtjuke.html

a?.b?.c
来源：http://www.sxryk.cn/163absghmwe.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163idevqtxf.html

a ?? b
来源：http://www.xuanzx.com/163ymwggwgn.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163amjmmcus.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163jajmniwt.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ebvcugcu.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163fzimyhny.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163iozdzecm.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163uxnzxsnv.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163gxcbcock.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pgfnkqeq.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163eqjgdcqc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163gkhgwjrj.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ctkvayqo.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163nykxukld.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163dbvpslmx.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163zpbyyrlc.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163nkznrsrb.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163nxzuukki.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163lyheamuf.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163vzohtnpw.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163pcppevjb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nrspdllt.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163rykzrymk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gbggrbvk.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163pjwlakym.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163jbiqvmah.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163lfugahjr.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163pciwvexp.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163wxssxscj.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163bduppujc.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163wcigsnfb.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163npogadwm.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163oqhxnkzk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163idauigei.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163uwpyzvre.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163foinjxll.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163cwzptmhw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cmllpcwv.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163iddmbqlj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163anyiaghh.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163qalttrzm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163gnjeccpb.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163mfvjzwel.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163zsbzssny.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163nitrfqab.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163hitbzpvg.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163uycqkcum.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jmbokako.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ktcsnwod.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163zwfzerjh.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163uwphlcth.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163spzvnsmm.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163olwuxwpn.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lrpyjbhu.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163cbuyikrf.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163abanwnyk.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163cxvrdmdf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163tqajqbvt.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163nuiodpld.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163pedziuki.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163jearucoz.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163xqzngoyo.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163lteggtgc.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xgohudai.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163soaukffk.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163wzfwxgjy.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163alouqoba.html

npx vite build
来源：http://www.sxryk.cn/163jwbespht.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163kpkztfmp.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163brdrjlfb.html

================================================================================
来源：http://www.aibaodan.cn/163sjnwicqv.html

统计汇总
来源：http://www.aibaodan.cn/163hazmbsjq.html

================================================================================
来源：http://www.aibaodan.cn/163oouebonj.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ttplfnse.html

Python ......... 252
来源：http://www.xuanzx.com/163ffuyxlms.html

PHP ............ 252
来源：http://www.sxryk.cn/163ksaqskse.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163pnpeloab.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163urzkysjr.html

Java ........... 212
来源：http://www.xuanzx.com/163biqrauyp.html

Go ............. 212
来源：http://www.aibaodan.cn/163jvslxxcl.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163baqjdmun.html

C# ............. 212
来源：http://www.sxryk.cn/163ttptrttu.html

C .............. 30
来源：http://www.sxryk.cn/163qsachzua.html

C++ ............ 30
来源：http://www.sxryk.cn/163excqoyuo.html

SQL ............ 90
来源：http://www.aibaodan.cn/163grbvjbla.html

Bash ........... 80
来源：http://www.aibaodan.cn/163yikfgpru.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163gemyfwmt.html

Swift .......... 15
来源：http://www.sxryk.cn/163tvovlswx.html

Lua ............ 10
来源：http://www.sxryk.cn/163gujvnrph.html

Perl ........... 10
来源：http://www.xuanzx.com/163oopzkebh.html

Scala .......... 10
来源：http://www.xuanzx.com/163yizjemim.html

------------------------------------
来源：http://www.aibaodan.cn/163vcughmey.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ozkdtdgn.html

按章节统计：
来源：http://www.xuanzx.com/163fpwtazus.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163webefuhn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163sxnzohqz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rwqsplvm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vtzpuaqz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163fyhkxnxn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163bmpgusbl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163njfuckjx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fyngvxcy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163oftxirzc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163tsoutoyg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vktixffh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163neubalrb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jwgaqtvj.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163orpjecuo.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163zpaesnsq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ncplhpnl.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163bxnpxzwd.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163jnykpuaq.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ncogxcbl.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163euvkldiy.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163brlxdhmv.html

------------------------------------
来源：http://www.aibaodan.cn/163atygpbqh.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163gclsgwwz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rjltoshf.html

使用提醒
来源：http://www.xuanzx.com/163waanfohn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qpelaukq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163jhyaspxw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163nbgtgnej.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ofeunyfc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163exbtvgcy.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ngsljmyy.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163pnipoksy.html

================================================================================
来源：http://www.sxryk.cn/163prfxpuzc.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163oqwcpqqx.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163ahxxnxdh.html

================================================================================
来源：http://www.sxryk.cn/163tcsywcft.html

【收录内容】
来源：http://www.xuanzx.com/163yfgpzhcb.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ufwlchwo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163sahcjtbm.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ptvlnvzh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163xswuhylb.html

【使用说明】
来源：http://www.xuanzx.com/163xafobmdt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163sziumbfb.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163jmyeicdy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163djyxmpmb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163xhdfiunh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163zinkusne.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163unapgqdx.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163iywfnclu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163yhqzviyb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163qfcnglie.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163qiwltrjq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163tcikjuyw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163gfcllsyj.html

【文件统计】
来源：http://www.aibaodan.cn/163igpkxrpz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163moiruqob.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xujhcicc.html

目  录
来源：http://www.aibaodan.cn/163pwkudmrp.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tvotajjl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yspwouom.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qhubtbgj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163icuknzmk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163juranfgx.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163nkikjomi.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vvjyfqkv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zqvngtkt.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163aaujfuny.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pxiouwsg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163kukuezpm.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fkkusepd.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dkfdkpsr.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zfigfgcv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mnsldhmk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163qjnpkqxl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lcvgmanj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163erkdpxfd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163zlguvtki.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163uqcsfggv.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ullpnqcy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163huidjpre.html

================================================================================
来源：http://www.xuanzx.com/163ubcrnzyc.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163sgehbhhb.html

================================================================================
来源：http://www.aibaodan.cn/163bzsttjzl.html

[A01] Hello World
来源：http://www.aibaodan.cn/163irakvxar.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163mgeaqnyr.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163nilmfwam.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163neoejvin.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163dbylcavy.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163joglpksg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163mogdeagq.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163rfyljkhj.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163vcqvwmqi.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163nweafkqq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163krntphkb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163cddjtdyf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163jjgqsecp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163kjcgiewe.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163briwnktf.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ehsxlphm.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ftjqrklw.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163uhufpgbm.html

[A03] 常量定义
来源：http://www.sxryk.cn/163apftbdpa.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163zbfrjsjm.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163pcxuuljb.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163cexlhhug.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163bjotamlx.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163hqpjnuhi.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163boolhcql.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ijsxjhpe.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163vlhihzbb.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163tpdpytce.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163juaeiimg.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163aquwzwsr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163vxcwhtdm.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163vjtshmpt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163xbtdtdwz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163elthdmmx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163yomjwxkb.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163pjggkcxh.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163irwikiaa.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163jagpwqzo.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ovmmosrg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163xzcoohyw.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163jkxgkxqr.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zckopkze.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163devwkdyv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163copeyxet.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163paaozdvj.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163wfxpyocv.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163nooxdlog.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163qpikmdef.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163agngrdys.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163nmfieihz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163tacfqimu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163jpsctcli.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163mdpamsge.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163szbktkjr.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163uoproovg.html

Py:   str(42)
来源：http://www.xuanzx.com/163mskeypef.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163lonrarqq.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163melqovld.html

TS:   String(42)
来源：http://www.sxryk.cn/163zzdvcexy.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ktgyqeeg.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163havyqcis.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163afiofcvk.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163mtshfxwh.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163nrhefjhr.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163txlwxzvs.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163txrmomsw.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163rkkootdr.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163fmqqjwkx.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163wkmqqdob.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163beflkwhf.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163wsgstdpz.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163ceboyczj.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163wmzxeriz.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vcbdcbxn.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ujuxawmv.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163rnkxcxjj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163blgcxojp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163eizzidoz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ztpfwzkp.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163btdiuaar.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163mnnjimzg.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163gpelktsp.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163gsmmrnlx.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163zlvjpaca.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163bruesgyv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ggupdnyn.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163atxtdccp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163terpctpx.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163xqgcexlv.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163enzgdlxk.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163zaefxapw.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163wrwoolvo.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qobqgezo.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xobywegl.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lzwtftvc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lrqncmgp.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163bloyijmc.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sohkpmng.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yqmwtzgs.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163athixbaq.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163dgkjudtt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163zblhxjpw.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163tykqhycp.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163yiftldir.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163dmhbeydo.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163rqvbxiov.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163enfdohks.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163kyhliogy.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163rtvrcpxl.html


<!-- 参考信息 -->