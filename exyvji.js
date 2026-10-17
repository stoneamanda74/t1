外链999!wailian999！

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163sivayqde.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163kzyiwhse.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163vnpzagng.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163zxhwnmcq.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163vroxoqjn.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163enwcvlfd.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163jlokxkmq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163kqlwhquv.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163mwkypuvh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163gurstwub.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ebllzrey.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163uvxckoyb.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163mgausosx.html

a?.b?.c
来源：http://www.xuanzx.com/163xnpkqlzs.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163nqnmpzye.html

a ?? b
来源：http://www.xuanzx.com/163knrzdxcg.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163aijgmojm.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ititefit.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163mvbwqlfw.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163nfhegvzv.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163pobumivg.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163cbxveyft.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163wbwfbyry.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bsxpsynk.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163mfafxhjb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163pjibirsl.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163gogfjilx.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163jqseunzc.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163qqbovudm.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163kfqerdec.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163qitgylpn.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163tkabdnqu.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163nofkglat.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163zboohplo.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163gqrqplnw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qbrbfdua.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ijvcedbw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ebqhaspv.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163vpvwkvzi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ialsdwyk.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ncqgczhb.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163zhavwxtd.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jrjrmlao.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163cgsztgdy.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163tlaxwhsv.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163exdrxdbb.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163zbvvyzkj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163dmbjfqfx.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163rvrzaumf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163cjjfoqvb.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qheuoqeg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gyijxbvz.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ctxnerbg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163umtztcsk.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163fhcnwkod.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163oulspcfm.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163qxsfqwht.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163mcjelrwb.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163alongsuc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163xeklvcep.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163kzinwcve.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163siabrgwk.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163hoasjvoi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163uageuzqo.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163lwfrbxil.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ieredbrf.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163fdfuugzw.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163xufogoxg.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163tnadzyvf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mcuylaxe.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163yqsfbiez.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wkpeutkx.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163dpblslmy.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hodwqrtc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163oukjbuld.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163qdvsmiux.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163hhkbzbky.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mpxqmhvs.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163livhewbz.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ytvnqaez.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163bwdjyvvy.html

npx vite build
来源：http://www.sxryk.cn/163jprewdog.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163vgtgrglg.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163psypvfxk.html

================================================================================
来源：http://www.aibaodan.cn/163vhjpdrtk.html

统计汇总
来源：http://www.xuanzx.com/163darwnanx.html

================================================================================
来源：http://www.sxryk.cn/163mnzuqxqc.html

按语言统计（条）：
来源：http://www.xuanzx.com/163vozhbidj.html

Python ......... 252
来源：http://www.xuanzx.com/163lmlfjuut.html

PHP ............ 252
来源：http://www.xuanzx.com/163ucpmeqlw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163sdslbedq.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163mmnotkea.html

Java ........... 212
来源：http://www.aibaodan.cn/163bwuwzpxm.html

Go ............. 212
来源：http://www.aibaodan.cn/163acfidewc.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ingblyni.html

C# ............. 212
来源：http://www.sxryk.cn/163ibbxiofe.html

C .............. 30
来源：http://www.xuanzx.com/163gdogwuiq.html

C++ ............ 30
来源：http://www.xuanzx.com/163ftgvxsca.html

SQL ............ 90
来源：http://www.aibaodan.cn/163wframshf.html

Bash ........... 80
来源：http://www.sxryk.cn/163ynbvhtyt.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163hcgutlaa.html

Swift .......... 15
来源：http://www.aibaodan.cn/163lrgqirys.html

Lua ............ 10
来源：http://www.xuanzx.com/163nyjfclbk.html

Perl ........... 10
来源：http://www.aibaodan.cn/163vrlbdqhj.html

Scala .......... 10
来源：http://www.aibaodan.cn/163jbnqjmwv.html

------------------------------------
来源：http://www.sxryk.cn/163tismrqmj.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vnqzvssl.html

按章节统计：
来源：http://www.sxryk.cn/163hpdnvufk.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163olvnxlzj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ekgoumxn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pcnescmr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163sdwuhlbv.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163omvqtcaj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cwmienyr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mkxkwkwp.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163olcvaicg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ppumwlxh.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163dyqrqaqz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163opigbeet.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ysvezhkr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kxyyylfy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163luasllmx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163urwljtit.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xuvcrqaf.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163okbciyrs.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ehvruypw.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163bupkdgmn.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163suzpxpkj.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ntfbzcgx.html

------------------------------------
来源：http://www.xuanzx.com/163dtwklwef.html

合计                                  2106 条
来源：http://www.xuanzx.com/163jzwskdll.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163sfjopajr.html

使用提醒
来源：http://www.sxryk.cn/163xpvdwnoi.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gthsbeyf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163zibgskpl.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163dyodskve.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163rlxkquwt.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163jnrollch.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163exwiynqv.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163aemuyrpw.html

================================================================================
来源：http://www.xuanzx.com/163ftinqnfq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163bvngyjgr.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163wmvjgdyi.html

================================================================================
来源：http://www.aibaodan.cn/163gdokcgln.html

【收录内容】
来源：http://www.aibaodan.cn/163wlyitpry.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163hvvzrxhy.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163lsdyqcpn.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163hbvjrgnl.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163huaprwbp.html

【使用说明】
来源：http://www.aibaodan.cn/163uxlhlndl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ddmbmqcc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163fpbaqlpu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163qxytljbz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163faunwzqo.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jhelarbd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163nnmmzlyi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163xsqyhgcb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163wbcjuppm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163begfgjpm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163hahnkqjb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163sknltsoo.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163kbqbezud.html

【文件统计】
来源：http://www.sxryk.cn/163fipzfuer.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ekiekjxf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fksnjich.html

目  录
来源：http://www.xuanzx.com/163xcszqlvt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lcndvjtz.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163arpcxjqs.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fhfqrmgg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bgiolxrq.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ctattwuf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163ynrkdwlr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163hgmrvaun.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ywizwmdz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163bnkfrgkr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yabwllvd.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163yidifvma.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zdgrlilz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hghozilb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163asjmzvql.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163gzqdpbqf.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163cfzzzgjz.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wnetjlcl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163mofnjnxt.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163bhupdbmu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163lszfltnd.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bdqqtghv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jiccqayo.html

================================================================================
来源：http://www.aibaodan.cn/163elbeipco.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163lgidxahg.html

================================================================================
来源：http://www.sxryk.cn/163tfppobwd.html

[A01] Hello World
来源：http://www.xuanzx.com/163ggobjojx.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163negkujum.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163bubydtul.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163zyazyneq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163hivfbwun.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163biwkvyql.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163anbmsbqf.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163zapaxjwb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163xgenhygg.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163qfdefqrz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163ajacsygm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163vbcqdmxg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163aamxgloc.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163rmjciorx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xfbsqkmm.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163lkayooyr.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163kjpbhjsp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ieyvgwha.html

[A03] 常量定义
来源：http://www.sxryk.cn/163zavbvwon.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ffrlowml.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163gexkxfyz.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ocuuhdht.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163yiyqjgeh.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163uyvryohi.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163ihvrfdxo.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163vxoysurn.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163qaeqsnbt.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163hibghpuy.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ncfldzzb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163hepriysu.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163zvmtndvi.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163juzadtrq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163pdajzyhi.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163bxrvqtii.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163pzynbljc.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163uromlcmg.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163lirfwqpu.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163ccokrjwy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ciefpqxm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163gffcckiu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163bstqfzdj.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dbibxeds.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xuouboqt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fjnbodgl.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pdbqqibs.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163loximpmt.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163zaguleps.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163rcscwmui.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163etjgylht.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ywpsfihu.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ejrmhhfi.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163ggoerasx.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163kzxtdfts.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163daykjwzb.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163flruwmam.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ozlxbeqo.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163itcbimso.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163pjyrlged.html

TS:   String(42)
来源：http://www.xuanzx.com/163itlxizdw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163szmgbhxb.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163dcbzwebu.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163urksxchx.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163vzflcujh.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163mixwsafp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163xecicyac.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163wzqnowhr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163sewvalkr.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163hcazphtb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163wjxwqebg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163ugulhgyc.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163bcyviimz.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163dqzbqduv.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163ljxgsowe.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163gquxuyvt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163gpilyzxq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163igcezqhk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ygdkrwzl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163mmkgjmin.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163xuogyxfs.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163xlwaqlsa.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163dnbfclyp.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163vpihbojj.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163hkpunfca.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163utlexrdh.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ioyqtwag.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163qyxkmahm.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163psrccvso.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163ljrkjxlf.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163rfjwtjga.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163tpwoltje.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163pilsjpow.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ujzgyfzr.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vxiynbsv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ehdxctfy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163adpzjcpm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nvpdwryq.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163jamijprh.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ijdebsfw.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hyxrxlsf.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163rigdfqyf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163squdlmqn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163xikmhrig.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163dwdekiio.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163lcydbzod.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163kutjijfb.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163teojnwkj.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163bdtccsfu.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163khuvehdr.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163sgotbvya.html


<!-- 参考信息 -->