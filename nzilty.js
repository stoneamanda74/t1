外链999!wailian999！

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163enbvnflv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163bsoaxddn.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163mhjvhokc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163zxqwjbke.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163auwqmypb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163iakoebxn.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163badbdlqb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163hbrhebya.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163lstqftvs.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ssoquqdz.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163trblbdbj.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163fdlmahwq.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163zwtpabat.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163uonrggmd.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163rzaqdnrg.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163uhurnxus.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163alqohtnm.html

composer require psr/container
来源：http://www.sxryk.cn/163nnegsnta.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163qnegsqwb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163fwoxobtl.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163fmbhooru.html

composer require twig/twig
来源：http://www.aibaodan.cn/163sqhtnfhe.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163qhfizhhy.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163gjmljqad.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163rwlbmumb.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163dzjyycbe.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163pbesorui.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163gozluqgj.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163qumndaum.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163bfytibfh.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163phlxbqrz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163eczwvdnf.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163qjdpghjm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163jbqywlrb.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163jgdzzvrr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163jmkdyydc.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163tsybatxc.html

a?.b?.c
来源：http://www.aibaodan.cn/163fgmjrqes.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163uditqcvk.html

a ?? b
来源：http://www.sxryk.cn/163zebwhwpi.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163pdjrrfrs.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163xqlpvtwz.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163opmvpscu.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163lzxxszvg.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163tkqvbkzj.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ggqybuno.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163cbvaewrz.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163txmrzerz.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163egicqvra.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163viplbbzb.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163kqgoswvq.html

structuredClone(obj)
来源：http://www.xuanzx.com/163dzuoxhpc.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163lvhyirde.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163xoxsleww.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ggrelvdh.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163lyrxaunf.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163mgrfliqn.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163umdstbvi.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163kfgawavd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163pclufqrb.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163opxanusf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wsbjgtkl.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163qwvolhnz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163tjxydloy.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163zrokevrp.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163jfvmtevz.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163odxrkgzu.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163rnvleiov.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163zpiiduhj.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163xxsiztxc.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163brlebvam.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wzioiqar.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163szcggmmw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163qodksjlc.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qvpxzdwd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ihaipplx.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163dmcmepxp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163rlnxuxta.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ozhukvht.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163kxhnwwmj.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163zwyuufqr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163pkqacilu.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163dsiiccrp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163dwsiftsi.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163wqxvtjps.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jztdzkbw.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163hryxazvz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163hnpbuhib.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163nnaclwqt.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163mwkvnhjs.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163oehjqlpf.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163aguzehli.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163tqotdcww.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nxqxxpfl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163pwopafll.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ckzwhvet.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ngelqdcj.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163cueiauwg.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163vuqlfvlj.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163mwiuvyge.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163vybhvyvv.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163wfmjzeiq.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163xqpwqajr.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163rpshcorn.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163cxfkjpnv.html

npx vite build
来源：http://www.sxryk.cn/163dxrzoitm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163avjhveph.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163voldhrtg.html

================================================================================
来源：http://www.xuanzx.com/163uywzecse.html

统计汇总
来源：http://www.aibaodan.cn/163myytyvkt.html

================================================================================
来源：http://www.sxryk.cn/163bgrodsxd.html

按语言统计（条）：
来源：http://www.sxryk.cn/163wtzuxfig.html

Python ......... 252
来源：http://www.sxryk.cn/163fgyxidgg.html

PHP ............ 252
来源：http://www.sxryk.cn/163ypdgvbhm.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163nxkrsmsv.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163wkhouzvo.html

Java ........... 212
来源：http://www.xuanzx.com/163hzwqeotz.html

Go ............. 212
来源：http://www.sxryk.cn/163bbedetxs.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ciqhridc.html

C# ............. 212
来源：http://www.aibaodan.cn/163lubndjin.html

C .............. 30
来源：http://www.sxryk.cn/163zfeeeklt.html

C++ ............ 30
来源：http://www.sxryk.cn/163ixgxvxgu.html

SQL ............ 90
来源：http://www.aibaodan.cn/163sakeskdm.html

Bash ........... 80
来源：http://www.sxryk.cn/163whhnqojg.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ocnpjbzb.html

Swift .......... 15
来源：http://www.aibaodan.cn/163luxoheru.html

Lua ............ 10
来源：http://www.xuanzx.com/163rvsjusbb.html

Perl ........... 10
来源：http://www.sxryk.cn/163divlymrr.html

Scala .......... 10
来源：http://www.sxryk.cn/163wenhruoc.html

------------------------------------
来源：http://www.aibaodan.cn/163uqtfveof.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163lwtjaedf.html

按章节统计：
来源：http://www.sxryk.cn/163twlocdof.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nnmzxjkr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kqofmiei.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163prlboveb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163rbbgccdc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163rqdjlqzy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163cykspgmu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163omllbndg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163svstpean.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ldayyolc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163uuolkzdk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163lgmdfvbj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ccbkxlcd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tjeeydnn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hshjyaut.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163gabdttij.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ilozivkv.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163nefnpxuw.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163hlywxpte.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163rubimewm.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163dethsipb.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163nrnymtwb.html

------------------------------------
来源：http://www.sxryk.cn/163bfqytkmo.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163isixfnea.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163uzmusxnb.html

使用提醒
来源：http://www.aibaodan.cn/163rhoyddtx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wjkophcp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163fkrmedyb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163yxmuhnrs.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ciukbyhy.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163wgrkjhrq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163hncjnrnc.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163yfvzagis.html

================================================================================
来源：http://www.sxryk.cn/163lhuxphdz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163qzmxzkbx.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163mahqqaon.html

================================================================================
来源：http://www.aibaodan.cn/163nxjxqutq.html

【收录内容】
来源：http://www.aibaodan.cn/163kqzvilrd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163rivoaaqo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163absxvhdf.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163itcgnyqv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163wwmwoyde.html

【使用说明】
来源：http://www.sxryk.cn/163wkaelxnj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163qmxyvcsc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163oanpfzmg.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163amvuvfqi.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163uytbbybi.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163wenszupb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163qdgudfjv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163jthxkddo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163xscwaozz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163okfzuoit.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163voozlgry.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163tcriypwc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163xdyqbvcn.html

【文件统计】
来源：http://www.xuanzx.com/163kxfhucst.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163jnwuhzdt.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fbtsmhyc.html

目  录
来源：http://www.aibaodan.cn/163ykqgdyct.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qjcjxzpc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ergfcudp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mkybnyfb.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kikaczhq.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163hgkyhpta.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163qjfxesyo.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vzylqbtg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163aqqmcizz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163fwfsawic.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wrqezjxk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163auvutgyq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163aqiguepf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163phzalxpo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zpsqevjy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163xuzjbrrc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163tnfkzvcl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hluwsfha.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ihslwjsw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163pkzwukrq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163mgvfsdcm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163iiisqwje.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163tdbmocbo.html

================================================================================
来源：http://www.xuanzx.com/163rvtrrnue.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ryuurkxn.html

================================================================================
来源：http://www.aibaodan.cn/163wfrgpgge.html

[A01] Hello World
来源：http://www.xuanzx.com/163kmhlyryp.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163lwatepqq.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163rqwtrmyt.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163nqebtiax.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163oyzeflbe.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163rpsxtotc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163qrsugqdi.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163dmmacdcu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163hnevbexi.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163sfrmreor.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163rcfcjgyx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163yzqdydwm.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163eouydfsb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163qnhqzbpo.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163olbwshab.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163jxlhibpw.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163tnjbhobm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163bfuotxke.html

[A03] 常量定义
来源：http://www.xuanzx.com/163szqgbaey.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163oaibrsmh.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163bxubyoub.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163yebhqbur.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163rqdwsrar.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163joqmuzya.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163aynptwkd.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163jkzdqkhq.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163ltmjrvzi.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163cpkpsygj.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163bmrglxoj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163jvdkqmid.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163gfasiswe.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163vfpfgdih.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ugwuwglp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163tzgmozkj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163igpwiglq.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163motlaaea.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163eoxxivga.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163bgdcfstw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163wjyqqqkd.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163euwrxome.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163qisqnoaa.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163lzbsnazb.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mcaheqik.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mcqyeclx.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ioworade.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163tfkxtfth.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163qcmlcwle.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163dzoeppbr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163snqaxbio.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163bksohxlk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163odlouyir.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163gyjivgui.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163fdqgqzpx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163yenipjju.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163qaxxbxsn.html

Py:   str(42)
来源：http://www.aibaodan.cn/163elcxkwsh.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163oqwozjor.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163caubznqh.html

TS:   String(42)
来源：http://www.sxryk.cn/163hgfnegol.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ckkbqzyg.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163arsrywho.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163jsvgffsu.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ebfqeqmi.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163llzhxvwi.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163yhvyqkfl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163jdgnijxx.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163hlqlcuaf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163yocqljwt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163dgyjsodl.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163kztljlms.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163gbbofhvd.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163qilmbmec.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163lurxfdfa.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163tzgftmwx.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163gkqowcwt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ihplatiu.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163uxbpbklq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163rwiqgyxb.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163hwmzcesr.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163xkqjfrti.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163efwqxcev.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163xjbomfgo.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163oiwvrjyg.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163bgdtlcxo.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163rbxotwvy.html


<!-- 参考信息 -->