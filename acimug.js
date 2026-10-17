外链999!wailian999！

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163xtkvmtia.html

composer require twig/twig
来源：http://www.sxryk.cn/163tvtqmdfq.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163tlxhlcun.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163vwnbgnru.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163cecijpqk.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163czppoucd.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vwzqmjlr.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163gppxcsfy.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163agizavob.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163eukwwqbt.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163hojfcyou.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163jiisktyc.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163fnieqarc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163tfwaojls.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163igcjhgiv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163krdmgjhh.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163plgajapv.html

a?.b?.c
来源：http://www.sxryk.cn/163rwztipmv.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163iowqspsa.html

a ?? b
来源：http://www.sxryk.cn/163npbxcvyu.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163bmuctjcu.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163tsoupffg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163dekjpyrg.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163jkzwrwsx.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163qdoknvdq.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163exdgmrff.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ngxaptmf.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lsjrlouh.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163weqwinah.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ykkoqeab.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163vnhbeqep.html

structuredClone(obj)
来源：http://www.xuanzx.com/163pzyepwhq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163eghgueue.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163uwzcrmah.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ofzmbmms.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163acjsfwrf.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163tbbaudjs.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163rvauxznr.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163gsmepuhu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rpfsdnlr.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163dxasxqir.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163revzwylx.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163kwtmvqdg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163rmkrytmj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163rofuxswa.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163hnyeccji.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163vhsvpklq.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163lufebvky.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163yumoocrd.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163nvcjholi.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163pbqpbnnt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163hjjgmsrs.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163hnszsevp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163qpuxzyqi.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163tccmevsa.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qhxumlnr.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163fkempelt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163neszxjgl.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163hbmueigw.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163bbwmrkpk.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163cxgjotxs.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163bejpwwfw.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163byeuqxnn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163hixfulct.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163hzqvmfmh.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uyratsyh.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163znixgrug.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163dxtwfhwf.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163covtvvmh.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ykjrfhqf.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163rxxtxrng.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ihmzznvc.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163onqyqozv.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wxunmoru.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163gbflnmdv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163aqdilzzj.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163amqfuehw.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163kkuhmpbo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163jqphrnmf.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163exnjdaet.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163uqnfycnb.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163flxogoij.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ipifkxyq.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163asxntrhb.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ychkhbxo.html

npx vite build
来源：http://www.xuanzx.com/163towvyluy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163rlplqwqe.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163eidmxprx.html

================================================================================
来源：http://www.sxryk.cn/163wkgspahp.html

统计汇总
来源：http://www.sxryk.cn/163fgcgyhqv.html

================================================================================
来源：http://www.aibaodan.cn/163jsfawprn.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163dkfmlvbn.html

Python ......... 252
来源：http://www.xuanzx.com/163hcahkimz.html

PHP ............ 252
来源：http://www.sxryk.cn/163xlxsraow.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163eqrepesc.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163vsdfhsmc.html

Java ........... 212
来源：http://www.aibaodan.cn/163ihihcjee.html

Go ............. 212
来源：http://www.aibaodan.cn/163yhditaup.html

Ruby ........... 212
来源：http://www.sxryk.cn/163asxtuqwp.html

C# ............. 212
来源：http://www.aibaodan.cn/163rkcppwip.html

C .............. 30
来源：http://www.xuanzx.com/163fqegbovq.html

C++ ............ 30
来源：http://www.aibaodan.cn/163tsznoibu.html

SQL ............ 90
来源：http://www.xuanzx.com/163pyzbmhoz.html

Bash ........... 80
来源：http://www.sxryk.cn/163iuldpdvf.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163taqdtcin.html

Swift .......... 15
来源：http://www.aibaodan.cn/163mpdrsgky.html

Lua ............ 10
来源：http://www.xuanzx.com/163spporuco.html

Perl ........... 10
来源：http://www.sxryk.cn/163awfladpw.html

Scala .......... 10
来源：http://www.sxryk.cn/163bfahszze.html

------------------------------------
来源：http://www.xuanzx.com/163bsfjdrxa.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163qvwscohg.html

按章节统计：
来源：http://www.xuanzx.com/163atgfmuob.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163alrhfvlp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zkqosibm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rlgyjxtn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hhnmshdd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163homfiofy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163cayxwkny.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kzrmbjkf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163gsrykayt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wkipopbi.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163lvivojqe.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oqugigod.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zbubjxmg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163efqgwdqh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wwnndvys.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163qhbtocam.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bqqqtvrr.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163zmsycnll.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163kzvcsrqb.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163dpjmiiom.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163bhkcrwzm.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163bvrtaxao.html

------------------------------------
来源：http://www.sxryk.cn/163ecgapzyh.html

合计                                  2106 条
来源：http://www.sxryk.cn/163avybgqrv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rkzmzyic.html

使用提醒
来源：http://www.sxryk.cn/163mxdmqeij.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mxkuitcy.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163spvrukpf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163vfmblvqs.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163jovhgnpg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163rvskerfi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163dbcoplik.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163lddhdoem.html

================================================================================
来源：http://www.aibaodan.cn/163gjgegsts.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163tfvhbxny.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163geaudygm.html

================================================================================
来源：http://www.sxryk.cn/163lbfikcrr.html

【收录内容】
来源：http://www.sxryk.cn/163nnbvunmm.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163wvutoluw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163knkqjhgy.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ehschzbz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163iukhucuh.html

【使用说明】
来源：http://www.aibaodan.cn/163qizyewss.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163xjoqkryi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163mvmohojt.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163nljryrff.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163bpzvzhng.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ckutcfqx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163dxshhlde.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163odzhyfni.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163rqaazjek.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163iqmgeval.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163guagnmqz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163dsbigrvx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163pdrxnttt.html

【文件统计】
来源：http://www.sxryk.cn/163nerdnfeg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163xahxfplk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wywrfwui.html

目  录
来源：http://www.xuanzx.com/163bpvspobx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163afuxpzav.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xtoqegms.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xcwatgzt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163htmfmynr.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163glmjmjle.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163devuuuvo.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wqncnssw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qiknbdva.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163cxhbpepc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jeavlzfj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163tyejcway.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uekewois.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163toiqchcp.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jtolhivu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163trbtsfxb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163qastqmkf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163quuwflsa.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163dgkofabp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163zphryhbv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163tktngyqq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163sntsapau.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163wfxcqbdn.html

================================================================================
来源：http://www.xuanzx.com/163fbacynoy.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163ydhikuvn.html

================================================================================
来源：http://www.xuanzx.com/163rbcnmwds.html

[A01] Hello World
来源：http://www.xuanzx.com/163tfcyfewp.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163zcowgaez.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163naiznzjp.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163kffigwni.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163gucurctw.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163zqdekkvn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163absinphx.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163ylssjmfa.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163kuxxdpdn.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163cpyvuzqw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163zjtiaazf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163pdajyyjm.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ykskiivo.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163mleobgye.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163fegivbuv.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163haifcpia.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163mcswvkmn.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ozqtbxzu.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163rczsjskl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163vjqthpug.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163efqekrsq.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163orqolntz.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163htuvodvu.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163gxecppjv.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163gxiiwago.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163vjsgnerq.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163wcyepvwh.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163dbuaegnt.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163hjtifryk.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163siqgwysm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163kwdluxxm.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163kshkzkpe.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163ixixvwsz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163vpumpenm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163dquqfvqi.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163icqcnafg.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163ecnuqewp.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163spnzftxx.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163wkuaxgho.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163sgbgqzvz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vawsront.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163utbxmuzi.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163psxvssik.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lczsubpz.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163aiazzstp.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163uwuxpwxj.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163zvqqobgl.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163mzeqotus.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163wqqfzgab.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163ehdzqgkv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163htrwocms.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163dftjmrcj.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163dxmeprma.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163jkpsmsys.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ufrmrdoe.html

Py:   str(42)
来源：http://www.aibaodan.cn/163bbtgtkrl.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163bhbqxvpc.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163lbtnqglv.html

TS:   String(42)
来源：http://www.xuanzx.com/163jlwlxhnm.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163mmnjwcss.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163hkrklbfc.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163yqpnzhvx.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163zumqofwo.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163nnokijht.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163motajyzf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163vbvisgja.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163eshaeoan.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163xcdauuca.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163htazybsg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163zdfxrmin.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163cprouseq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163mtjpwlal.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163oeabufjq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163lkdnnhzr.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163runvkiij.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163lvggpunt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163lxizmurv.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163rdnxhcvy.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163rzczgwel.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163vgnmunjp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163hnesnjbn.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163bhlypgqg.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163bacfqlhv.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163vjcamgku.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163xktzjvgg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163kppaduas.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163kpsryipt.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163nctuezsa.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163wmlxxtrc.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163vfnsbbyw.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163bluiyips.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163vcbdxxys.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vxmpymrl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dwdzfgwb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tcphuwxi.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xggljkhy.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163mnxwfbct.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pudknfcg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nephngem.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163lpmatdes.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163wbwoxlks.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163fsryomtg.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163olfeavlm.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163fwwukrov.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163ezrwgqtq.html


<!-- 参考信息 -->