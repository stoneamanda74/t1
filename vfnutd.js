外链999!wailian999！

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163oraypnno.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163erxqftaa.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163wdubrgua.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163umfbsfim.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163wyrguwfr.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163wokwxtrj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163xnwwppcl.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163gyqenbam.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ehvfsdae.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163zunafzge.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163lkfcoick.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163zqnspqhq.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163fgytvoyi.html

composer require psr/container
来源：http://www.aibaodan.cn/163ilmsyvbv.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163eihtazvq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ohrfwufp.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163lgdelcxe.html

composer require twig/twig
来源：http://www.xuanzx.com/163npukeulf.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163lnkyzbry.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163bwpqqnvs.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163yjafczdz.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163xldkrhij.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163hpwaahkp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163vjcsvrpo.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163vafntraa.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163flyfmwkx.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163joeqzydi.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163nnnpgttz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163faknnmed.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163wadleesg.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163kjpwfzqv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163hfkgdrbt.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163xnbibclv.html

a?.b?.c
来源：http://www.xuanzx.com/163dmcayxzv.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163klcopcwq.html

a ?? b
来源：http://www.sxryk.cn/163ahrsyqyz.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ldaloasx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163qiuaajtb.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jandhdaj.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163qdewnzlm.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163zejgdcpq.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163zducekst.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ezjuvldg.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kxriyjdb.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163qrkqbpmk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163xfccdntn.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163tirwesea.html

structuredClone(obj)
来源：http://www.sxryk.cn/163rnlrmota.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ziohvpaf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163mqfzragb.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163cspdsssd.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163dqhmnlci.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163aminrsaq.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163memjkhbe.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163emhkrshn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163itmfkcco.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163tasahjmw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pbvsdryt.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163gjrysynu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163vyijctdw.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163hybagrfg.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163fzxjrjxb.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163hjyfcrfy.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163jgzhnjpi.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163kzynhtyu.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163fijkegmb.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163tiyjjbca.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163menkvwup.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163kacfnbtv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163uyqwvhpv.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163kkzsogvg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qneqsoxy.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ydhhgjkt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163wznuukgr.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163hlgqhnpc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163obbfkqmr.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163uuucysvq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163wigzkooa.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163jmdpgsgt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163qphkwchb.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ufpebxxg.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163enngxaqs.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qawpdzbq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163mdeduuoe.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163knygejuu.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163awlqecqb.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163aiivgcxy.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163muwkkbni.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ojtlanwh.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vvexrkkl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163qxzcsmme.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mbainhml.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163eqbpocji.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ktzdbqsf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163wihgiyqm.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163epaxllzo.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163fdsbnbvv.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163zgjhjfxo.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163tmzkbtqv.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ophrkpuh.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163xctjhacl.html

npx vite build
来源：http://www.xuanzx.com/163yrqwgvpe.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mnjopgws.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163tnowrvey.html

================================================================================
来源：http://www.xuanzx.com/163jhhrzjrp.html

统计汇总
来源：http://www.xuanzx.com/163peudaadw.html

================================================================================
来源：http://www.aibaodan.cn/163laasybuv.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163snvmdqgk.html

Python ......... 252
来源：http://www.sxryk.cn/163wxmwcfim.html

PHP ............ 252
来源：http://www.xuanzx.com/163tmmrniix.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163tqxlbish.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163hlutxwta.html

Java ........... 212
来源：http://www.aibaodan.cn/163bzojtsmb.html

Go ............. 212
来源：http://www.xuanzx.com/163ztzatrto.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163eflnutno.html

C# ............. 212
来源：http://www.aibaodan.cn/163hcfeouqd.html

C .............. 30
来源：http://www.xuanzx.com/163ieeelppf.html

C++ ............ 30
来源：http://www.aibaodan.cn/163nfhhqwsi.html

SQL ............ 90
来源：http://www.xuanzx.com/163fgbkoqbl.html

Bash ........... 80
来源：http://www.sxryk.cn/163ybymidcc.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ylrmabzo.html

Swift .......... 15
来源：http://www.xuanzx.com/163lrqjexcl.html

Lua ............ 10
来源：http://www.xuanzx.com/163ochhapfl.html

Perl ........... 10
来源：http://www.xuanzx.com/163pnoxaqxv.html

Scala .......... 10
来源：http://www.aibaodan.cn/163ahnbgdyg.html

------------------------------------
来源：http://www.xuanzx.com/163fgdpbfjo.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163wltwgmav.html

按章节统计：
来源：http://www.sxryk.cn/163vzoronrz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163imeuovfk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bjhsvywi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tcgikehh.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ecddqsdb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ylurzfab.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163znnmyats.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pzyyvxsm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fehotvsj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qolhjsmv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hfptmuow.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mryooygv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zoqfpxib.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163iodxeywy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163indpvsvx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163nmzmulka.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rsdruzah.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ksavpvwv.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163pavtkmya.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163zjnxepsz.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163gtsqyloc.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163fsaikcqy.html

------------------------------------
来源：http://www.xuanzx.com/163wyxiinsq.html

合计                                  2106 条
来源：http://www.sxryk.cn/163xxpdxyvo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dhodwkrr.html

使用提醒
来源：http://www.sxryk.cn/163xowqadvr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mdehnmhp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163atrvqqqm.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163rfwrvkvh.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163tobnrhsl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163dakyvoxv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163ryksvrrt.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163lmeztltv.html

================================================================================
来源：http://www.aibaodan.cn/163tmxtdmjs.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163lpuemixs.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163tbjlumsu.html

================================================================================
来源：http://www.xuanzx.com/163lmlrrbau.html

【收录内容】
来源：http://www.aibaodan.cn/163ywbnnavt.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163vsuvspbc.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163gbzxmxdh.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163mibhepvn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163wopomvjk.html

【使用说明】
来源：http://www.sxryk.cn/163gzhzekum.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163iaqwbhil.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163xivxjvyh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163zmvwbwya.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ppfchosg.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163awoxhhke.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163bgzamhnv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163rxvlpwtd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ibcdpjcy.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163frmmxgrw.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163yucxmsdp.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163gdftffuu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163kohbvrfa.html

【文件统计】
来源：http://www.aibaodan.cn/163dgfjsutx.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163wjwirrpg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qbncgpvp.html

目  录
来源：http://www.aibaodan.cn/163funlwuyi.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lhwdwmbn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163idntgdwf.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163skbvlguv.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ccsesdth.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wzjvmpko.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163ysbqgowh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163hupdehcy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zaepstij.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163jvbpzypt.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163iibkflxh.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163sxjgkpat.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hankoohp.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lvqdtllm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gimfdifc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163lzgznenn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163sfmkyrct.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dammdqsc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163lcliagkf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163tqaqbeuq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163lkqlgncb.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gtbyhksj.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hdmcdnhb.html

================================================================================
来源：http://www.xuanzx.com/163vjqsvgeo.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163fqfdnbfe.html

================================================================================
来源：http://www.sxryk.cn/163pqibsdpi.html

[A01] Hello World
来源：http://www.aibaodan.cn/163kyunrasx.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163fiufaatg.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163onxtkrhz.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163odkffyng.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163buzvlymn.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163bhlusnso.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ntghjzzk.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163znojaezd.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163jpnrtjda.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163nbmzkuzu.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163bajnjqze.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163cprayztw.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ebopvboz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163yfaiuzly.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163sykxjolm.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163nicsgkgj.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163jkljnfwh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163anlzueqo.html

[A03] 常量定义
来源：http://www.xuanzx.com/163nsiikpgo.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163xhbspbqm.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163gdiakvyp.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163eawqqtka.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ugqbezdt.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163nukgsotr.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163dgzwgbeg.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163kskbwvpl.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163igewmhwu.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163zjnbyepn.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163avbkjqcg.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163gsoledqb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163ffutfitz.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ahgvknvg.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ldkrhsbk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163ahcxzajv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163shsjixsf.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163igsgpcpz.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163tylatdlh.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163hypzlzzy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163jflhumbz.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163nwouvkjq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163qmuzqtdp.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hzpudzww.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163txvamhze.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163aufjooyl.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hlwpieqm.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163jpxjsooj.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163juljdnpl.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163edjknctz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163yehyjeud.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163woehwuou.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ybwsyijo.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163bjngofzl.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163hvmikbco.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163zdszriax.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163aughssgb.html

Py:   str(42)
来源：http://www.sxryk.cn/163gqbntjnd.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163ufzxeizp.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163tbqpujfe.html

TS:   String(42)
来源：http://www.sxryk.cn/163yuwyozfm.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163obesqtpq.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163qrghqylg.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163blubxkvi.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163juqdatdk.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163jvbwkeoo.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163wfkohlpv.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163slxxmicn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ugamrfpi.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163tiohjnps.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163avetexfl.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163gwvsqxua.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163slddtqvl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163qxxmjycs.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163urvlqncq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163dgtsuelw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163oinexetr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163xeuuflbv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163fqijssrx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163zigmhsfa.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163fvarrdcq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163zuhryvzq.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163ksvzljzw.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163mpbgnivq.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163lprtffna.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163sfhyspre.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163mddtooks.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ktdrnjvg.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163aaonkbmv.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163efuvgwem.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163rtbostcx.html


<!-- 参考信息 -->