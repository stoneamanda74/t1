外链999!wailian999！

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163bcmfcwqf.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163desajmnl.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163erwpaxwb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163tvwnmkbu.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163fcfjvgfj.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ydkgawww.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ttmjhkbi.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163xltqitvi.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163nqdcopim.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163xcfpcism.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163eqckpsdx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163cpfyioly.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163cnimumxu.html

a?.b?.c
来源：http://www.aibaodan.cn/163gufmkwgi.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hvowvffd.html

a ?? b
来源：http://www.aibaodan.cn/163ansphclp.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163upadqxqp.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163jtwswixa.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163mabbjoup.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163jljpbupa.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163tqwjvvpm.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163yppgjrvp.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163onpvllxi.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ggmhnnwl.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163shoxjkwi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163mdoxdcld.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163wbiyfvou.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163iaicvkbn.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163bzebpzrl.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163gmlscuep.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163iigqdllm.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163zmclqsjh.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ormisziw.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163abmzydtu.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163dopbxntr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jezzvara.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ymggcuyo.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mkqdgwyy.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ujlvikai.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163qfcoxztx.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163giwimqtg.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163yqnnyqfb.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163kgskcooq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163svqwwrzw.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163oeasdvuh.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163mynovakl.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163tpinrubx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ptvlmhzo.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ofgojgud.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163xyakadar.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163hsaigkmf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qtwhlqhk.html

[U105] JS：节流
来源：http://www.xuanzx.com/163tfkfvdjf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163vbgtdycd.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163rnmyjtxh.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ocawjvax.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163tbvclolw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ksqpvcbt.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163jkcxfynn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163bipebalc.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163kgdbwaov.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fwqxnkbx.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163kyjqdupj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163bwxiawdy.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ebavwzor.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163esjdgiyh.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163bjeivmmm.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163gaunkliv.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163tpdfrzve.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dauxbuom.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ojvtoxqq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mjwrocdg.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163gstpzcmr.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163sfkdlbrz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163cxapzpuz.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ivbvuwfj.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wklsresm.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163straciwi.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163xoghlwrj.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163wmmxpxya.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163amvzhrao.html

npx vite build
来源：http://www.sxryk.cn/163ekxuntaw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163jmnnlcyp.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163wmucruvv.html

================================================================================
来源：http://www.sxryk.cn/163sjmivdse.html

统计汇总
来源：http://www.xuanzx.com/163wbaerdco.html

================================================================================
来源：http://www.xuanzx.com/163aeswbxzt.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163uwcajjvt.html

Python ......... 252
来源：http://www.sxryk.cn/163plysaovb.html

PHP ............ 252
来源：http://www.xuanzx.com/163zldzenpg.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163urqecwwu.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163yswlbvhd.html

Java ........... 212
来源：http://www.xuanzx.com/163qvtkpify.html

Go ............. 212
来源：http://www.aibaodan.cn/163lqscpymq.html

Ruby ........... 212
来源：http://www.xuanzx.com/163jzqsuhao.html

C# ............. 212
来源：http://www.aibaodan.cn/163iodmxjuy.html

C .............. 30
来源：http://www.sxryk.cn/163ausnacwu.html

C++ ............ 30
来源：http://www.aibaodan.cn/163awthrmhk.html

SQL ............ 90
来源：http://www.sxryk.cn/163mdxbapxs.html

Bash ........... 80
来源：http://www.sxryk.cn/163uwkugrfq.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163fpvtrrad.html

Swift .......... 15
来源：http://www.aibaodan.cn/163kcyvmsiu.html

Lua ............ 10
来源：http://www.xuanzx.com/163jbkrrrxl.html

Perl ........... 10
来源：http://www.sxryk.cn/163xyakbpsi.html

Scala .......... 10
来源：http://www.aibaodan.cn/163szakyxyr.html

------------------------------------
来源：http://www.sxryk.cn/163vdwaguee.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ctandgjp.html

按章节统计：
来源：http://www.sxryk.cn/163iijqgjps.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kdxcirnk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163eatzlxlq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bydcffqt.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163eodaheex.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163txknmlrv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wbneowco.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kuhwpiyf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163xitzbclj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bzfzgpys.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163teqvvjet.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tqswntiu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mojjvsfr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tifwvcxk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163pcymowdj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163zqfimccx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163texowijz.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163kooauakb.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ckrupjxi.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ilkawmhj.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163awlxzqnh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163skkgxthh.html

------------------------------------
来源：http://www.xuanzx.com/163xdnqqlnk.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ptbqxldo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xdihykzj.html

使用提醒
来源：http://www.sxryk.cn/163iwjdmxnu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kakjunqh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163scmxddoe.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kidiqslb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163dmuwxtrh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163vwzirqwe.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163xgemgopx.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163brjffnqo.html

================================================================================
来源：http://www.aibaodan.cn/163hktmefps.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163uxductbj.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163vineizgc.html

================================================================================
来源：http://www.sxryk.cn/163ectjkfci.html

【收录内容】
来源：http://www.aibaodan.cn/163ugrnqdxd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163xqshhcxe.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163sdnwhmmr.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163oooeupld.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163giczieyn.html

【使用说明】
来源：http://www.xuanzx.com/163lzdljtli.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163maemvbkz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163wzgvofyr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163qgrvomfw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163dqbffaei.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163hdvemrit.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163cwdmejfh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163rtjtedrm.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163zekehxpd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163osigcjnq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163axenijfi.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163fcondfvo.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163mmponlhi.html

【文件统计】
来源：http://www.xuanzx.com/163qlecfusw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163orgbaufc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cwdviyzx.html

目  录
来源：http://www.aibaodan.cn/163tlngwbtv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vevisvmx.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163odokqfzj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ijyncbel.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163laaryxje.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ftgvtdgw.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163zwcoobkl.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163xozeczuy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163irjmiltq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ahlugkcz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hsbbjpwc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ucsmbhdg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163efadgmet.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gghiijnm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163scpjvfvw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ptwbvzda.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163dwwlcxrw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163huyuehwk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163psjjhehx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163gkdjzbse.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163amswxgci.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163pascuhyl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jbreczxg.html

================================================================================
来源：http://www.xuanzx.com/163wwqolugn.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163ihchrxea.html

================================================================================
来源：http://www.aibaodan.cn/163cxxqpqjp.html

[A01] Hello World
来源：http://www.aibaodan.cn/163niafwwxl.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163myswpzyw.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163jxlffirb.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163pabwqljl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163rzkekhmt.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163pdunonve.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163gnnfitel.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163khkgrfno.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163fynntcmg.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163bgoqvkps.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163dlnnijqi.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163tcslxdzv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163tfmfxche.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163knqjatjn.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163hbfzgkaw.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163bnsryccm.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163wddrgpcd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wgeoikif.html

[A03] 常量定义
来源：http://www.xuanzx.com/163kmydcjok.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163rsykcwgw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163kzoznpni.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163hkvbzpec.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ppdxjfos.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ghhrfvgi.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ufsaxjam.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163lzypezra.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163qwjnaezl.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163hwuqzpto.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163qxvhblav.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163rmklmkcc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163tnxxwfif.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163rpraabsu.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163imhakvgq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163uqqfmhdv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163cgcnzqdm.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163dbzoorhh.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163pcyvgipb.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163isibklmh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163kcrxukhx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163gypofvwc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ctihrmyq.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xtfrxbtx.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mwfdudxr.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163onfkfymd.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163unsassmb.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163dxonubab.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163dapwifol.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163rnlsnbgy.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163izuycmjm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163bfumtlkk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163chabpsbw.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163kvmjctuy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163bmxqadfp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163pndpgtrc.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163qfkfbroz.html

Py:   str(42)
来源：http://www.sxryk.cn/163lhucstzn.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163dcwpicdd.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163zomtoljd.html

TS:   String(42)
来源：http://www.aibaodan.cn/163clnofcru.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163dejbacjj.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163cpyjoriu.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163luieshkv.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163xknftgsj.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163sczkaulb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163zbomzipo.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163zufcnpxg.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163whblwwfb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163yiajlvct.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163pkijxseg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163eemxbpnt.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163diainame.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163akzzovtk.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163pqfrdcpp.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163wbnyfidz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ghopgjht.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163qyuhvjvr.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163wbpxxpho.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163mziaerkr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163exywnnor.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163grhcftkx.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163svjnznfm.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163dwvguzbd.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163vriifjjl.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163wxhsiffd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163zgbzhdkj.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163bietwakp.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163tqgkznom.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ogfgtnlw.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ikhngahs.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vmlojtrx.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163gvaxazpz.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163uledqnfd.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163twrngegv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sjhzecvp.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jkhzoszn.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hbrzrled.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163aqzvjsed.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pearijdo.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163spvnamjc.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163dnpflvbi.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163xrzyyrpp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163febegniz.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163bbllzevj.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ttdhheqy.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163pglmwmhj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ntxloiej.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163pihamfyi.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163hcnfwoic.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163zezrignu.html


<!-- 参考信息 -->