外链999!wailian999！

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163kjhpmexl.html

composer require twig/twig
来源：http://www.aibaodan.cn/163fddblboz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163bqesrbvj.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163cacvpgnh.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163icbhuwjv.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163zwqewcpd.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163wkrxftpw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163plbzvevo.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wjbykzyi.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163tmcwxgge.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ijqepvdp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163tsfgkekk.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163gndkanyp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163xzctbbpx.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163yqnjnexv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163ftynbiik.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163zrlujtay.html

a?.b?.c
来源：http://www.sxryk.cn/163swqivqxb.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163hmatskwv.html

a ?? b
来源：http://www.aibaodan.cn/163estukxyd.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163oytowkmu.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163huyxoirs.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163wbtohues.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163dpieuusv.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163jzjykoze.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163hhlfkdti.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163nmqkstov.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163owibugyr.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163kaoqnoca.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163wjbiwxyk.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163iniffkdk.html

structuredClone(obj)
来源：http://www.xuanzx.com/163hbsrrhuz.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163udnfsipe.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ozczdyda.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163jgqnghdc.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163axnqqmvm.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163kfzwgrnr.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163hyhfcpuk.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163nxhenvip.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163chanilgs.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163rlotpvgx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fdnubaqf.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163mefvuunn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163avqanmpt.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163dqebkkmo.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ionqydjq.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163cywaakor.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163vosdccdp.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163qpeozuue.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163pifmnexv.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163evzzhgbj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163iakugehc.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163jlhwbjdq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163eylkwdlb.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163domotmee.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163svxgrmxv.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ljoeflin.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163tzedubdm.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163sutmrcoi.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163hlotldwi.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163anuwzxdf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163nwjxsxet.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163hmzawqhs.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163lnarnfyz.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163vugirqsn.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pqcziaim.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163zmhxhwpu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163zmmmxlew.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ewltximn.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163hnvrkfmc.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163fagebpjx.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163envwxjsb.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ydaiimkm.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163arbzgzpi.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163gaghxknx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163uvchhtyq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163dhulptnw.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163qecmrouu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163stdhmvep.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163anskplrl.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163zycapyam.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bjsihgte.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163irramyux.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163zdeagwon.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163pvkhdhda.html

npx vite build
来源：http://www.aibaodan.cn/163iueayshf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163wuervzca.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163hdvunyxh.html

================================================================================
来源：http://www.sxryk.cn/163hkksdjqo.html

统计汇总
来源：http://www.aibaodan.cn/163koervesh.html

================================================================================
来源：http://www.xuanzx.com/163bgbojiiu.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163cdgqsuhl.html

Python ......... 252
来源：http://www.xuanzx.com/163edsmrrvo.html

PHP ............ 252
来源：http://www.xuanzx.com/163vwghuwxr.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163rnajpqxo.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163prtwimbj.html

Java ........... 212
来源：http://www.aibaodan.cn/163innhyywm.html

Go ............. 212
来源：http://www.sxryk.cn/163bwymtfeu.html

Ruby ........... 212
来源：http://www.sxryk.cn/163tgslplfj.html

C# ............. 212
来源：http://www.aibaodan.cn/163hrtdivbo.html

C .............. 30
来源：http://www.aibaodan.cn/163muebldkw.html

C++ ............ 30
来源：http://www.xuanzx.com/163kjrrybuw.html

SQL ............ 90
来源：http://www.xuanzx.com/163bnszfntk.html

Bash ........... 80
来源：http://www.xuanzx.com/163zkeqshua.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163noiuhqam.html

Swift .......... 15
来源：http://www.sxryk.cn/163cjlmgafs.html

Lua ............ 10
来源：http://www.sxryk.cn/163opmysxqy.html

Perl ........... 10
来源：http://www.xuanzx.com/163qxpejkhq.html

Scala .......... 10
来源：http://www.sxryk.cn/163rwvjmqvk.html

------------------------------------
来源：http://www.sxryk.cn/163cfgopgpd.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163rmzyjyge.html

按章节统计：
来源：http://www.sxryk.cn/163fssiowyc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wnxairfw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163oysvaque.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xamsviyw.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tjkjnysd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163kjorzowf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fuxvqjrj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rxrlxgpu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163lbbqzeou.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mjeqzjhf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zzjazuhc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sxuhfoha.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kqlycfaq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wdaygizz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163gbzihuuy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ovnrgkwc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tjoamfbn.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163vtdfzkjt.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163mksvqgsm.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163mjinnoqs.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163qmiwboxw.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163vtdbxqha.html

------------------------------------
来源：http://www.sxryk.cn/163bfzgyvvl.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ivcyoyuo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fevbqwpw.html

使用提醒
来源：http://www.sxryk.cn/163occeixqg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ncjtntrh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163hgyniivt.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163jjsgzdwv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163upyhitoh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163iqtdhcak.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163gvuonozu.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ntvkxcam.html

================================================================================
来源：http://www.xuanzx.com/163jobuerfs.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163zjrjuhyi.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163omxlvndn.html

================================================================================
来源：http://www.sxryk.cn/163hdlcxhuc.html

【收录内容】
来源：http://www.aibaodan.cn/163gkfpioxj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163yyjxzxxu.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ycxtgbyr.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xpmxmwfd.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ivoxlqnj.html

【使用说明】
来源：http://www.aibaodan.cn/163mibmbkbf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163hwhasypq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163hlmrrhsd.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163vkjwcsbw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163waxkwurf.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163goqvcala.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163nvxxnpmi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ofbgzeex.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163bahwevbm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163xujuwxwr.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163rdxymcxa.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163xrwcwobw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163xikigjwf.html

【文件统计】
来源：http://www.aibaodan.cn/163ezhrmurf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163esimtxqb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lhligslf.html

目  录
来源：http://www.aibaodan.cn/163ioccznau.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163sjyesnvk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163kpzcevcy.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163sgkrsjxf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nocypztf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wrzymkeq.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163gpwkrquw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163drjizydd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vymqcdmk.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163fyslvmld.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wugxvdrc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163npibfqpo.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lymtmljy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ecdomvbz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sxtzyibo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163jruebmmz.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163mmbkwcjt.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vqptkmzu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163vwsbvgsl.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163dmofamag.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163vrxyghfx.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163iixupudc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163efmuuebo.html

================================================================================
来源：http://www.aibaodan.cn/163ejvqfbqf.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163rcfscncz.html

================================================================================
来源：http://www.sxryk.cn/163wpjazvlf.html

[A01] Hello World
来源：http://www.aibaodan.cn/163wcafwqmg.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163mjvwrpph.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163liywyvgl.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163mwbjrtgs.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163bvrrfyca.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163tdqlfqnf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163zqnwvvje.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163psvlsprb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163igwfdwzr.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163pcgdqqdi.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163acselnws.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163sxetjmhq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163wlouibgu.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dmxoojea.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163gxrybwie.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163fpecvpjl.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ijlqhhak.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163msswiuyg.html

[A03] 常量定义
来源：http://www.xuanzx.com/163tpjiashx.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163aajiccsd.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163mkykfuac.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163uzbxaqoq.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163dgznymam.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163opcvbhdj.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163qtfzcdsl.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163otwymchd.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163spkpmjhx.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163tfurfszr.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163unhlvrtd.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163kgdlrurm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163qgxrachu.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163xcxscdoy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163grshqrgd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163piohdxtt.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163mpkamvbs.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163fpwphpie.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163xmlcburp.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163xjciojvs.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163tecnvmyz.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163dccekodq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163vtsskmvm.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163umhfmegh.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wgnkajao.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hvalhvcu.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163newaqkiq.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163woetdosh.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163gimogsfh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163bhfyflti.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163qiwxwqqr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163teshfsme.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163jpcqmssh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163owkxrqqa.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163mnwzvvhj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163cbveyidy.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163zpaucvhr.html

Py:   str(42)
来源：http://www.xuanzx.com/163ltanqjlt.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163ewvbqqbu.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163cdnahwyj.html

TS:   String(42)
来源：http://www.sxryk.cn/163jvxdejad.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163rutlzgqr.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163ciuenmqp.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163rjyujebh.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163tcyvnbaq.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163yruedgyb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163tbhwsdln.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163eggjlgxr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163utlaqvyy.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163bsqvzdsx.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ykmuhzix.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163iespurxj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163qoykjrkl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163xdhssbon.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163gwmobdyd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wwpihsnq.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ryujxbxe.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163bkzrudqf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163bbpuofiq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163fitwpjez.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163pzjpnjas.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163tmpdhyks.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163quxehhse.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163noohgllg.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163fqrayibb.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163mqhslvgy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163kntkbwyk.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ncklpgal.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163falofttk.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163wupagfaw.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ltkqvfxr.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ekmqtqdv.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jrbwwbre.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163htblzrtk.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163arnzvyki.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xczkvhmg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xffbgqrf.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163myqfnlyi.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163owkfoiyq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jjghsvjx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163canylnvg.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163bezoiuos.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163ogycbdaq.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163llqhgqcg.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163iklzhjhh.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163okluskye.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163uebqskmz.html


<!-- 参考信息 -->