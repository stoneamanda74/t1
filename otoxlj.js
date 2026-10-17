外链999!wailian999！

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163nuhbrejv.html

composer require psr/container
来源：http://www.xuanzx.com/163yxlleajg.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163zcbyfrmt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163elviwske.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ncywvmmr.html

composer require twig/twig
来源：http://www.aibaodan.cn/163xgkpuytt.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163szvhyphq.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163uelomxkn.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163fyfxyfxd.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163axapvttr.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163xganfejy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ixhdtgqp.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163knldlvsw.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ppmwjrnb.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ilcartbg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163vwycpini.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163fakealgr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163puuqvvsc.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163lrshvhty.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163dbghphda.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163qdxaqfdl.html

a?.b?.c
来源：http://www.sxryk.cn/163azthgcuu.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163btkugywn.html

a ?? b
来源：http://www.xuanzx.com/163xkfnfpra.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163sxmoofvc.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163tudyeacc.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ingxyclu.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mnnudfvg.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163qrnevgys.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163mhwcrtdn.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163dzeyifri.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sjbskxcr.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ohxabcoh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163tfcambyx.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163hjfbvfkd.html

structuredClone(obj)
来源：http://www.sxryk.cn/163auwncguq.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163arsnkcia.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163xokizvtg.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163uobbkmrj.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163oityansp.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163asigbmrb.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163zgatregn.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163qnljuafk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163eysrwyoc.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163xsmbrerl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rmdtwwen.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163esxbmcbq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163yyirmled.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163tyidzbzf.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163gwvtxzmh.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163blpofyql.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163jmxqmhhu.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163vqpalfxv.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163vbbzzbqc.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163spuprclj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163cwvokulp.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163oxilvola.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163nkzlbgra.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mulgflfa.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lmufwgtl.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163shuvdgut.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163tbierlcs.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163kxasdrqg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163inzlstdd.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163scrbrlrv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163wabakfvf.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163wssltpmm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163saaqygjl.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163mfeemnre.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lyjdgyrc.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163lrxpthny.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163rvjbxoec.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163pjcryenl.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163tqtsdupr.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163tibjlmwo.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163uypdgnjb.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163frztsnmh.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lfobtjvj.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163wgtiaytj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163werevutv.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163jomhdipi.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163iixqjeir.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163idwxryvv.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163odxqccsp.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163cqgnsiwn.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163yxgbrvth.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163zakwyvut.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163yzpubgjd.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ydumfczb.html

npx vite build
来源：http://www.sxryk.cn/163flimqpkt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mruscafn.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163wvxrgucq.html

================================================================================
来源：http://www.sxryk.cn/163enbvjauk.html

统计汇总
来源：http://www.sxryk.cn/163gzwsmrca.html

================================================================================
来源：http://www.aibaodan.cn/163tjxvdtbd.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163qvkiferx.html

Python ......... 252
来源：http://www.sxryk.cn/163rxjppmwz.html

PHP ............ 252
来源：http://www.aibaodan.cn/163xttwihdw.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163inpamimc.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163mljvbjxd.html

Java ........... 212
来源：http://www.xuanzx.com/163janldiib.html

Go ............. 212
来源：http://www.sxryk.cn/163chsedigr.html

Ruby ........... 212
来源：http://www.sxryk.cn/163kmlmyhwm.html

C# ............. 212
来源：http://www.xuanzx.com/163tgmpysyy.html

C .............. 30
来源：http://www.xuanzx.com/163uuzhjprn.html

C++ ............ 30
来源：http://www.sxryk.cn/163aeswucyj.html

SQL ............ 90
来源：http://www.aibaodan.cn/163fnpqyxrs.html

Bash ........... 80
来源：http://www.xuanzx.com/163jkxcmplp.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163djhqmvkl.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qecoxemt.html

Lua ............ 10
来源：http://www.sxryk.cn/163vmhqbfmc.html

Perl ........... 10
来源：http://www.aibaodan.cn/163gdwqbzmq.html

Scala .......... 10
来源：http://www.xuanzx.com/163yqbzrfeu.html

------------------------------------
来源：http://www.sxryk.cn/163hhejkkgb.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163oohsuvkk.html

按章节统计：
来源：http://www.aibaodan.cn/163skuqmxcb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vqryjucr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ngtxsdcn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163pzornljw.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xajmfkwq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163aonxzhkf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163jrppkypr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ragfyuuy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163mxapgopk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jycntwqp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163doyyvctb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163crtdiqep.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eriwqxvs.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163auwiakai.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zsvdbhdx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163othoqjfe.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163aurgeoni.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163zzbiygzh.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163vvlipwuo.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163tjmaghob.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163qupjelll.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163rzaryfvp.html

------------------------------------
来源：http://www.sxryk.cn/163wwgbbekg.html

合计                                  2106 条
来源：http://www.xuanzx.com/163fjqaxkmn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163egkqsbhx.html

使用提醒
来源：http://www.sxryk.cn/163bmmjsnuv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fvsvtzzt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163sxcgtobc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163cvtbzwas.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163dcabfluj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163dmzhibyt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163qzfrmjzj.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163uopvuqcs.html

================================================================================
来源：http://www.xuanzx.com/163giplcisk.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ywkgvetq.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163vxiosjfm.html

================================================================================
来源：http://www.aibaodan.cn/163efudzkcp.html

【收录内容】
来源：http://www.xuanzx.com/163nohuergs.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163yekztjng.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163yiwgvpwb.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163tgozgune.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163wnnqphrz.html

【使用说明】
来源：http://www.xuanzx.com/163zihtdlod.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ttizyohx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163sklkrnxp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163fjyrtaui.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ergwaniu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163coylerks.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163djbrgxuy.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163zebeppgw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163jurashbb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163eumcakbf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163oimgnkpy.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163aworpmxl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163pnfzrlei.html

【文件统计】
来源：http://www.xuanzx.com/163vefdpbdn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ruinuvxz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163feqdydxc.html

目  录
来源：http://www.xuanzx.com/163awuhqmtw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163udzfbkqx.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163qjwhohpd.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gemtypll.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zfcsituu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xciyypnh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163qyvcnriq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163blrwwdur.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163oxjzhryi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ekwzhuwh.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163boiuayeh.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163hfyaynpn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ptohbmya.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kptysbyk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hpiykwws.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163fmnksdlm.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163bumcedty.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163howxwjnd.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163alxaiqnf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163qrhcqudw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163omzvzrwe.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jjyfrwin.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vpnrcshn.html

================================================================================
来源：http://www.xuanzx.com/163rylidyxx.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163xevnhgne.html

================================================================================
来源：http://www.aibaodan.cn/163psiimalp.html

[A01] Hello World
来源：http://www.sxryk.cn/163imalrifi.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163vqjdmoic.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163zyhbxvtv.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163dyibzbog.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163yabvxahe.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163kjunwymv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163gwyyxxhr.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163qpjzyfxn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163iaacswdv.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163kpbrulpb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163qhralfxz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163tlpzlqcg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163utufjeqz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ntcozusb.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163txzzxkjw.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163finopoef.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163jqiypbqq.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163dmdjizbs.html

[A03] 常量定义
来源：http://www.sxryk.cn/163maukftso.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163moggzuui.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163llasegsq.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163kvwsmdsg.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163dzqlgdhh.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163zbkwxmmw.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163griygkti.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163xuqvoryj.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163rvwngdwz.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163kqgncczw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163peoaazhh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163pjmlplvs.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163xgmoyspf.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163cwlepklp.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163wfqvrebp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163kpxinfrj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163ansflbjw.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163uldlbzis.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163swnoprch.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163yisgbnbt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ccxupsxc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163uyuefjsk.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163wsdfxqzn.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jspxdsjl.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163shoovtxt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163abdcrmwo.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163micqojsf.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ycoadlic.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163imeepkir.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163nwfrwalv.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163upjlwiml.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163omoyarnk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163xajwmgnd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163dlqdgxqf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163nhdxhrcy.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163cqcufkku.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163drxmfcwr.html

Py:   str(42)
来源：http://www.xuanzx.com/163apmebtdq.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163uvuvdifr.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163pfiurzwb.html

TS:   String(42)
来源：http://www.xuanzx.com/163xkanlgvp.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163tqocaxdv.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163bnygraus.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163ksdgmkbr.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163gargmbyw.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ksczqmxi.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163tkxxouov.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ccawvbpn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163xkqbxxxc.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163rgsosuag.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ytqgkgzj.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163hsoykssa.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163tkvljjzw.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163euwguvso.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163ajraftfn.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163fbimgsmk.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163niygnonl.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163hajpzudq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163gupoyfcc.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ucmuoeuy.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163mdgmkdte.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163wzaavlob.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163uxfdhaxq.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163btupqvsl.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163wktwzmzw.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163blgranqi.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163nrhhvdkb.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163nhceuimb.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163jgqkeqoo.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163yzhfkdwk.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163demucjzo.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163iouwcloi.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163amrpmqlo.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163hboduhaw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163btwzyjdn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qwfkrflb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lxxddrpo.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nscpdtfn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163uhypktbq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xvrgftqq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lrjmznxk.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163brubujca.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163wmbqxprf.html


<!-- 参考信息 -->