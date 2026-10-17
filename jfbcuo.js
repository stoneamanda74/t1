外链999!wailian999！

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163vscdjkfe.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ywmqljpe.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163sukpesog.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163tcgjbamu.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163npyymzse.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163kvryjflu.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163gbssilue.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163dowwigpu.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163dzlvzzvh.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163emcgblfn.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163xbxzjayz.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ptwkelqt.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163soalzuph.html

composer require psr/container
来源：http://www.sxryk.cn/163kphftwvh.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163pisqbjco.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163qfnvubnl.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163rnzppdze.html

composer require twig/twig
来源：http://www.xuanzx.com/163mheaptzx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163vmagrvns.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163flkgvpfb.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163lxonyiue.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163guefvfqy.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163eguxowve.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163atkzngaq.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163rqvehmwv.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163zbtzhxsb.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163nvqgwhiq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163mjrtfudu.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163mmwhjqbs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ixmvqfrg.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ckvhimjg.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163gplkmued.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163blwydczj.html

a?.b?.c
来源：http://www.xuanzx.com/163nnicfzbu.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163qoezevof.html

a ?? b
来源：http://www.sxryk.cn/163qxihhcoi.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163emyftkne.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163hccywbnq.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163njjjmjcq.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163iolghral.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163crblkrqz.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163dyxrvsmc.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ujeoggva.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jkpduuon.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163yviqmzfu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163omhtbljq.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163furnfxjf.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163bttbeorg.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163yprgptke.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163izqhomhy.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163lmqfmfib.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163jrfgwyvp.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163wcdlmfva.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163yfgtfklf.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163frjqahkh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jcbecqvi.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ssrwuozf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ojojqzav.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163csfdyfyy.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163aruupnml.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163riytfrrm.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163luirsxqa.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ixbbknge.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163malfmcjt.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163mnucwlhl.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163mkoethhw.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163jxhaiwqy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163tkdxvuxn.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163pcekilni.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163zzijxbch.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163orflqmst.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163upkkjqwc.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163lptjdwir.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ponvyqwo.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163vlitrtjk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163yzzlzava.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163pygounob.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qyyrynow.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163asygubze.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163vadagbqf.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163uxglirpw.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dhesrbbc.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163maqpcqgz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163gxjomzjc.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163pcuwayyi.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163aiduwfbh.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vyunbpfw.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163pzgfqcbg.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163rlijzfdw.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xtkiyfdq.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163psewkjze.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163tehrgxhq.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163jsmcdnex.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163rdavqhon.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163blvgohbb.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163csqndkqf.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163kribowrw.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163nsamtlwp.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163xvnkpnjf.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163wqixfjpa.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163feebjmjw.html

npx vite build
来源：http://www.aibaodan.cn/163ckqszpts.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163cheqgnpf.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163rnkqgmap.html

================================================================================
来源：http://www.xuanzx.com/163zctzfdfd.html

统计汇总
来源：http://www.xuanzx.com/163pxtcwfmp.html

================================================================================
来源：http://www.aibaodan.cn/163qdqyayoc.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163wctbbujh.html

Python ......... 252
来源：http://www.sxryk.cn/163wyfequgz.html

PHP ............ 252
来源：http://www.aibaodan.cn/163neggfytx.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ynfjcqye.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163klabbjjt.html

Java ........... 212
来源：http://www.sxryk.cn/163xhnkngow.html

Go ............. 212
来源：http://www.sxryk.cn/163fndxxvmj.html

Ruby ........... 212
来源：http://www.sxryk.cn/163byqfbubx.html

C# ............. 212
来源：http://www.sxryk.cn/163oluttsea.html

C .............. 30
来源：http://www.sxryk.cn/163ojnvwlsr.html

C++ ............ 30
来源：http://www.sxryk.cn/163gtxtkema.html

SQL ............ 90
来源：http://www.sxryk.cn/163ildonjkd.html

Bash ........... 80
来源：http://www.aibaodan.cn/163yixrgiwx.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163zezjrmbz.html

Swift .......... 15
来源：http://www.aibaodan.cn/163cscwjmkn.html

Lua ............ 10
来源：http://www.xuanzx.com/163jgqbsbuf.html

Perl ........... 10
来源：http://www.sxryk.cn/163jshjfrxc.html

Scala .......... 10
来源：http://www.aibaodan.cn/163rbxmmoll.html

------------------------------------
来源：http://www.xuanzx.com/163vpefqmun.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163cecskwge.html

按章节统计：
来源：http://www.xuanzx.com/163bmfynwnk.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163byhlwrat.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rmsvppcu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ymenwmtl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163zwgyotoi.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163fegcnped.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wundlpkd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163dljwknlb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163frctktxy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kszazfcb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163iktyaivu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ucwdspci.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fvondgir.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163svcshzaj.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163tprktkyp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ksveonli.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nsivncon.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163jedeylaz.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163gfvoayun.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ashhonea.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163txkshhml.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163xnvrrupb.html

------------------------------------
来源：http://www.aibaodan.cn/163saffgqmq.html

合计                                  2106 条
来源：http://www.xuanzx.com/163dfytyeoi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hqcfshjn.html

使用提醒
来源：http://www.sxryk.cn/163bogcneat.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163umxuwcwm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ctoyignf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163zwcqhwem.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163vzhdooym.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163quroeavm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163litffzht.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ihggtsap.html

================================================================================
来源：http://www.sxryk.cn/163gembyuvp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163lliymoof.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163dvubtvbk.html

================================================================================
来源：http://www.aibaodan.cn/163scsyncwm.html

【收录内容】
来源：http://www.xuanzx.com/163gksqnglb.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163syyeequj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163zgsmtizl.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ixnerpji.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163oxdbjmbv.html

【使用说明】
来源：http://www.sxryk.cn/163mmdvqiml.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163smtugzfe.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163icinpiav.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163uahywxej.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ahcxwbvz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163xjlisipk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163jhmrenly.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163auaooerv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163lqexbedn.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163pspwikkx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163kxjswvte.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163iuqaceqv.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163vixgvgwg.html

【文件统计】
来源：http://www.aibaodan.cn/163vodjlvua.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163tkgloejk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fxzcnimo.html

目  录
来源：http://www.sxryk.cn/163ogmieicv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kkknqbgy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163izaconek.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mkggmjzk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jfewmwfc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yfhjtaud.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163htlfrbty.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vmysgnkh.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nvyjopcx.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163tiiorrgq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163coualzhp.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163gdvypfal.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kiuuustm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sdzqwytd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163oxuplyix.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163lqcxombe.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163khxurxcf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dprpfeuz.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163sfvucrnr.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163naicpbmk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163lhoysfom.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bzezrdcq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jaeebblc.html

================================================================================
来源：http://www.xuanzx.com/163wnluhrnl.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163ftphbvbg.html

================================================================================
来源：http://www.xuanzx.com/163nanjovjf.html

[A01] Hello World
来源：http://www.xuanzx.com/163ecshrgxv.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ifupcmng.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163tjpfmmut.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163nhmlqmse.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163grpeznmm.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163pozgavae.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163gnmyykaa.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163tifkisdl.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163zezbwrxt.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163mwjwfrtz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163omutgppu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163aumrbnqr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ompceled.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dnbvjjxh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xxgcabrx.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163pllglizp.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163nvinhoho.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163aleosxni.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163cpgkskms.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163gwbfecww.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ukfozhfa.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163mkqfmmwz.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ziswnnlc.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163kzxewtlx.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163skgcvojs.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163avcjigny.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163muucjdkf.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163rqrejyfz.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163fjuascan.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ggoiopok.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163jkbhvexh.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163anbyjxmd.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163vacqvebk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163kvxsmecw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163iqxihogj.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163zypqvldo.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163pjywphgh.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163khrzkbul.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163exlqnqva.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163gwrevzmi.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163udtywdrr.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163aepiqmoc.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kezdbhrc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163iwjdfizt.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163npnjtdpx.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163cqzxaxps.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163cnuopcrn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163qijkvmbv.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163yynxedri.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163xtfmffvy.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163tgcfuqqt.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163fesjokcf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163vsgaiybz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163cqtpawan.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163advnzkvt.html

Py:   str(42)
来源：http://www.sxryk.cn/163vjemdyig.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163vdspukmg.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163snfvaioy.html

TS:   String(42)
来源：http://www.aibaodan.cn/163ccaghxyc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163amcxnyek.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163srtqdvbp.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163oqlquhxx.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163jpszvmqz.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163qfogpddb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ccsipsff.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163rrjvbvhw.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163jcvvqxqx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163rikvehcf.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163vdqnafhn.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163vwyilpoy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163qaoavrqv.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163nfrmrlmn.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163abclsnmq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163wveizocp.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ggexcubq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163bdmzmygj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163euxcnnat.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ylubzyvi.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163wxgovoiz.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163nsugwyao.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163zpjqhwgt.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163jjwwmkmr.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163yepjrdci.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163wmsdbjyl.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163kxywffmu.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wwyltpxk.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163dzlumahc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163iawhlnen.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163pkkbvkuu.html


<!-- 参考信息 -->