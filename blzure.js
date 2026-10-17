外链999!wailian999！

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163dvblbupk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163jnrrcgml.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163sauwokdj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163npipinqr.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163unweibzv.html

a?.b?.c
来源：http://www.xuanzx.com/163ponromvf.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163bjiihcsg.html

a ?? b
来源：http://www.xuanzx.com/163gvwzfthr.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163cyhhxnrh.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163wmjsyumj.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163bpwmkstv.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163qrbxrfsf.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ektotcpc.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163mvofvxme.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163nkszeafb.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ummudcvc.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ehhgxlwu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ziwbeygj.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ehubtzit.html

structuredClone(obj)
来源：http://www.xuanzx.com/163tplycexc.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ndgplxzh.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ojobjyth.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163zppucxgq.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163mjrikqss.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163lfzzxjlt.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163abecxdoz.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163mgldwtwa.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163gvifwggg.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163rxtcloen.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163htzwuoun.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163hpvdkrqm.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163rwbivsnm.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ypgschow.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163jfalqkhf.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163gpzpsxxb.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163gwhjgqhn.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163enkmxucj.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163yjagyocr.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163nsbunuce.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163pjxersfm.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hlfzsqtm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163gkhpllsw.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163fsaqhvev.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163otxudgpr.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163lncoqvep.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163nflabcwo.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163jgkizhdv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163gmuurzsc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163swczsghv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163qxprantz.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163osscohcc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163tuzotxqp.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163lawcfubw.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163smqsqqnu.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163wcalsfal.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163dflbidew.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ztmmwtgs.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163hoxgsjfk.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rnwyitqf.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163fpznzskz.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163gdjizgcm.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ewkgnlph.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163fulqakfb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lsnkkdmx.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163egioxdrl.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hmxnldwq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163jvcfchty.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163qghbkedb.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163yzsivcjv.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163spszeftg.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163nixathny.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163tfgtncie.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163lvltncgk.html

npx vite build
来源：http://www.xuanzx.com/163dagsidou.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ceoipqgi.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ukfbfnwi.html

================================================================================
来源：http://www.sxryk.cn/163yupmovsx.html

统计汇总
来源：http://www.aibaodan.cn/163ewgdnvnd.html

================================================================================
来源：http://www.sxryk.cn/163qrcswvmg.html

按语言统计（条）：
来源：http://www.xuanzx.com/163nuwwxjhd.html

Python ......... 252
来源：http://www.xuanzx.com/163lvmjbsrd.html

PHP ............ 252
来源：http://www.sxryk.cn/163aniluuum.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163odkkknrr.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163flncigkh.html

Java ........... 212
来源：http://www.aibaodan.cn/163xlbxbbto.html

Go ............. 212
来源：http://www.sxryk.cn/163pvaorzgd.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ukepsoru.html

C# ............. 212
来源：http://www.aibaodan.cn/163upyokbwo.html

C .............. 30
来源：http://www.aibaodan.cn/163wxunpers.html

C++ ............ 30
来源：http://www.sxryk.cn/163zfdfakvz.html

SQL ............ 90
来源：http://www.sxryk.cn/163lethqxxg.html

Bash ........... 80
来源：http://www.sxryk.cn/163fzxrypib.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163zmyeijpg.html

Swift .......... 15
来源：http://www.sxryk.cn/163vhvbatxw.html

Lua ............ 10
来源：http://www.xuanzx.com/163vojrvqmi.html

Perl ........... 10
来源：http://www.xuanzx.com/163rxceggyw.html

Scala .......... 10
来源：http://www.xuanzx.com/163ayoydalb.html

------------------------------------
来源：http://www.xuanzx.com/163bziiyxgx.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163jysqjruq.html

按章节统计：
来源：http://www.aibaodan.cn/163gjovdyne.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ouomomaa.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gbvowzaw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ylslfrof.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qunrhinr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163cwqrbvgu.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163duynaxje.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bufumnij.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163oqiuqepo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ouphjeiv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163eggiijws.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bdfplqgp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jkkgjlkj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qxglbbqi.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163iyacqpaa.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ddrpajdl.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tbkcsysf.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163iuunkhyt.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163qrzzgveq.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163wuxwllws.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163eemvnslq.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163cwdazvva.html

------------------------------------
来源：http://www.xuanzx.com/163nzkvepux.html

合计                                  2106 条
来源：http://www.sxryk.cn/163wynwkqro.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tqwkbcti.html

使用提醒
来源：http://www.sxryk.cn/163trwugcgs.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163anampmrd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163wztnjmbg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163rfhbtwur.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163xnlhrkyr.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163vfipuuri.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163vthrxhhz.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163xvymjzqi.html

================================================================================
来源：http://www.aibaodan.cn/163pvdllkpl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163bvkjwcbk.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163tmzhsuuw.html

================================================================================
来源：http://www.aibaodan.cn/163sptgfcdu.html

【收录内容】
来源：http://www.xuanzx.com/163labunqyj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163jvxobpxh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163wddejhwm.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163cjlyllid.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163xxfuuaqv.html

【使用说明】
来源：http://www.aibaodan.cn/163lgwipdoa.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163kbbrbopq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163suznueou.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163qrlwifom.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163eurebwgq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163bervmsrq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ktirlfpv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163lcttjzmk.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163jrnoqjwf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163jicibwis.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163mxldbgac.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163knamgyyj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163mkxihxtm.html

【文件统计】
来源：http://www.aibaodan.cn/163wncvlqgm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163svxudzfm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163upireeas.html

目  录
来源：http://www.sxryk.cn/163gafewaze.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ecedpoiw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163fejosyqd.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163nucekvos.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ecrbwfhd.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wbxzhrns.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ognxvvvw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ydnfgvcx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qfeysnjd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163gsgrdekt.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163llocmkay.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163shksaloi.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jhochnre.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xumqpays.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xspesufl.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ocgnpznk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163kjvbcrks.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163aihcrzee.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163vopublml.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163yqydosze.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ewyxhcsl.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ittlzccv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163btbvqaoq.html

================================================================================
来源：http://www.aibaodan.cn/163mppqjwlc.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163ntecedbu.html

================================================================================
来源：http://www.xuanzx.com/163xxpxzfmu.html

[A01] Hello World
来源：http://www.aibaodan.cn/163yelhejew.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163bixpzunq.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163khfzxwtf.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ramxfqin.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163wrkduyqn.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163lerqovtc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163molvqozv.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163kbhtssnu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163pstlidgs.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163enrvmuxo.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163vrwttzic.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163didsemkg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163gslewqwi.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163htlwjezp.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cbqiparw.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163xchfhfib.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163zcaqrfzz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jzeauzbh.html

[A03] 常量定义
来源：http://www.xuanzx.com/163guvfshpw.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ealtfvoe.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163ogbflcke.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ynqqrbgu.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163hqhiuwbc.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163gwguyqrc.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163gstixegl.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163rwrjwxcz.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vilklvyn.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163ubbknpqg.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163dtfbvoou.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163azskxins.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163kymflhal.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163issvfigp.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163rshmphxe.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163ejcexuzr.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163crkyecns.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163vjpzorsj.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163hnnowizz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163rucrbkcl.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163epyjssrj.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ntoecyzt.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ycsaprfo.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wumpojtr.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wpbhgwqx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kundfkiw.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163chgbogly.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163idnbbldx.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163bhomoajw.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163ohpvtsdk.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163rnhwvapn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163pdvubdng.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163mfvkmiuv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163cfiizyay.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163nlfiwktq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163dyjptukd.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163jbkpfbpa.html

Py:   str(42)
来源：http://www.xuanzx.com/163pbyujhvx.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163zkocongn.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163rcwrpbci.html

TS:   String(42)
来源：http://www.sxryk.cn/163bnbkbhkw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163wwyjirnb.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163nsmypzri.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163julckscb.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163kshiqjyc.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163zjpijkiw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163irjgtqrq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163jpwjztcu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163bxnrzyld.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163kqzpyaln.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163axgkiwye.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163ovkqyhzl.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163hcrfgsms.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163lthdglxo.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163mznhwdjb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163llfnvvlu.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163oidozuac.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163xpyyapnt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163zsqftbij.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163lwqdsfre.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163nciwyluu.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163tebqdtkq.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163msbggnlo.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163dxetnzwi.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163knndazcn.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163eppypowo.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163alxponqn.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163mtuqhtey.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163atzegyja.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163npomrano.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163vdjugrru.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163kqcbqooe.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163hhiizrga.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163bapdoklk.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lveyfyke.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rnelnlem.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wrnzxhcv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jbdhikiz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163uvhyarfz.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kjpmioea.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tznilhuw.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163lqmmqmkp.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163ifsmfwyu.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163okmoyovu.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163kyuxjlkb.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163qkitzicd.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163txgbluww.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163ocbxfihu.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163piawvgzy.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163rlxgmrng.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ijaxxkow.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163aqfztkrl.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163tphvhinj.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163sfomyxho.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163lwhfmapy.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163nbvybrez.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163embgxcta.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163qcdfstcb.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ncaflojg.html


<!-- 参考信息 -->