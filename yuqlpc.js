外链999!wailian999！

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163vvtlzlab.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163axmfjzsq.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163gbfepmva.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163offjmswt.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ixuixfyf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163niiflgzb.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163faxqpglq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163cugibayu.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163bwhfswkx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163cvrflgxl.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163gjlifyqm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163pjlyyxoa.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163pevetoev.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163uojmpgku.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163uzzwxiug.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163fczjvzvf.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163eycdeugx.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163doexydhz.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163vgufgwkw.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163pifiwnee.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163rtbcwtth.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163dkwrvzum.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163utiykppv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163puqxnjbz.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163yxinhxao.html

composer require psr/container
来源：http://www.sxryk.cn/163mkgsjnid.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163edwpbykj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ficrujvr.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163hptyvutf.html

composer require twig/twig
来源：http://www.aibaodan.cn/163mtzzyfkz.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163avhbjwvz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163asxovdji.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163abxgmmff.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163xggxsxow.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163zwpvrrrf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163zrknxjjg.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163bxomdkpv.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163foldlaaa.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163yudvmhmn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163aclmjwnp.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ivjeaxvs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163thehlauc.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163oecasbmu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163qrmslpbq.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163qejgfvkp.html

a?.b?.c
来源：http://www.sxryk.cn/163aclbwzvu.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163bccrytug.html

a ?? b
来源：http://www.sxryk.cn/163czaewwqa.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163wgnsrwca.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163jcgfhxez.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163xmmuhgzv.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163wsdjfvte.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163dthagwkj.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163denhokye.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163mymjovqb.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rjavxxej.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163hvvpvwys.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rhoeeaep.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163hieltaho.html

structuredClone(obj)
来源：http://www.xuanzx.com/163thmwgsxm.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163qamcgiha.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163gpkalwmv.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163ufbkfoxt.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163qxtqlegb.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163lnjixlea.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163srdwqzdu.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163lvbfisvm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163kbigwssq.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163jnsdhubj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zmphcxgp.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163loxsqkhe.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163psjhkttg.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163xnllkwxr.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163fmebxtuv.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163wmbqnxud.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163lktpcoqy.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163uysqjwmk.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ifuixeyd.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163afnixhei.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163dyzrrxow.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163isazvibt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163wpqhjpbk.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163vdxaisij.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vmzclawh.html

[U105] JS：节流
来源：http://www.sxryk.cn/163qfpikpct.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163cjsdhqwg.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163xhbypkyo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163qnolcjsk.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163jwlhedrl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163inqwzfzg.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163kfdfpkhf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ohlojlmx.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163thrzrxfb.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163htmxwqym.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163twsofdvh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163fyqtlbyp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163vzsoibmh.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163uubocprd.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163wswdbyfh.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163wumfaixp.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163wcwuadxz.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mjdepgig.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163rfmstgns.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ymscvbgo.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ppfzdghk.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163bqeafqie.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163iiqnjvwq.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163jqrvijix.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163cjeutwwd.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163lupfigbv.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163rotbjzif.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163nwnaoqoy.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163yjsdlivz.html

npx vite build
来源：http://www.xuanzx.com/163wioryfdp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163smvfsrch.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163finqluug.html

================================================================================
来源：http://www.sxryk.cn/163uqaevewp.html

统计汇总
来源：http://www.aibaodan.cn/163eimbljxc.html

================================================================================
来源：http://www.sxryk.cn/163hukgkijl.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163mciiowof.html

Python ......... 252
来源：http://www.sxryk.cn/163tyhqdvum.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pjlroosi.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163qlrsvoxe.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163hnkpvjaq.html

Java ........... 212
来源：http://www.sxryk.cn/163ljpjjvio.html

Go ............. 212
来源：http://www.xuanzx.com/163tiutljxx.html

Ruby ........... 212
来源：http://www.xuanzx.com/163nltswdab.html

C# ............. 212
来源：http://www.sxryk.cn/163vvhxubqp.html

C .............. 30
来源：http://www.sxryk.cn/163edirwhse.html

C++ ............ 30
来源：http://www.aibaodan.cn/163gjjfhmid.html

SQL ............ 90
来源：http://www.aibaodan.cn/163tnrdezhq.html

Bash ........... 80
来源：http://www.aibaodan.cn/163rhhkgjff.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163brmcpaud.html

Swift .......... 15
来源：http://www.sxryk.cn/163jqckqhqp.html

Lua ............ 10
来源：http://www.xuanzx.com/163hfjrtyky.html

Perl ........... 10
来源：http://www.sxryk.cn/163laxfaftb.html

Scala .......... 10
来源：http://www.xuanzx.com/163mjbugtya.html

------------------------------------
来源：http://www.aibaodan.cn/163ucucmdyc.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163snoxyakx.html

按章节统计：
来源：http://www.aibaodan.cn/163nsqfsxmt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163byccghjl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bwwxtnck.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fmliqsom.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163heetbotm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163wtbnpmoz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163umvgozbg.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bjxooyis.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zdzfxdxu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tvyigfjk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vqfcobjr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vdtdtnij.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tsdtohym.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163slzpcwqt.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163kysjkqcq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163nokwhztq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163htbhybwf.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163txtzxzkc.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163wxjnsjxx.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163zrrckfhl.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163kxqozzzl.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163gmwacdpo.html

------------------------------------
来源：http://www.sxryk.cn/163rhaeipgm.html

合计                                  2106 条
来源：http://www.sxryk.cn/163ocrbjnne.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ddanotqw.html

使用提醒
来源：http://www.xuanzx.com/163eeshvmia.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ysmaafgs.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163wityskjx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163oeodtart.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ettejxvg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163uosyngfn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163wgtetmgn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163phqoszpu.html

================================================================================
来源：http://www.aibaodan.cn/163siormziq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163txjcpyav.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163pgprtetr.html

================================================================================
来源：http://www.aibaodan.cn/163yqcpwcbd.html

【收录内容】
来源：http://www.sxryk.cn/163uoghyhsw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163fnzqrzpk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163bvzlqbuz.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163tixpvoer.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163bzwkvpdp.html

【使用说明】
来源：http://www.sxryk.cn/163rworibof.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163wkodnzcp.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163sbyncnrj.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163yllctqvd.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163rjiksbwd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163fqqjxexz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163keajkmkp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163gjomxjyo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163hucfplxa.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163muaoljld.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163mfmweqci.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163rytzivsu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163fnhjpsbs.html

【文件统计】
来源：http://www.aibaodan.cn/163zeoqreqr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163bsmegyni.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wtltffiw.html

目  录
来源：http://www.xuanzx.com/163aefoyxoo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ojfcpwme.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163daqyndzm.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qvebfhhf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163thmyrvhc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163kgvyavhp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163lifvinpu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cqilttin.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163orfgoilt.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163bajcsshy.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qifrwdgs.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ksdfkzor.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163urmapptr.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ylpoxllg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zkvzryna.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163eysqtmnq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163trrtcafp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ibctfkkj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163rkmfzxif.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163fxosjuqy.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ipllkhub.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163whgavjnk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163scmvbqaq.html

================================================================================
来源：http://www.aibaodan.cn/163srircndp.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163huebftxi.html

================================================================================
来源：http://www.xuanzx.com/163dppiwepg.html

[A01] Hello World
来源：http://www.aibaodan.cn/163rahozzob.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163opddxlcp.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163bspkwmgv.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163zwmcyimw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ythxdttz.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163pcbgiohb.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163puwtvtan.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163oswjjhmx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163clkcrqen.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163jwaldwop.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163ntykaaro.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163skpvkisj.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163nqzmccnn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163jjuvpdih.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jjabvncy.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ycoamaxw.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163njbdohbf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wtxezptt.html

[A03] 常量定义
来源：http://www.sxryk.cn/163djrwfras.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163zlsqtnny.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163fesgyltm.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163lonnuqga.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163kjkmtotc.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ducpjmcy.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163cotpggvp.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163dvdicsws.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163pybfkqxp.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163hupmvkyt.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163uxkuvdui.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163wsoygzqg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163zslvmtmr.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163pdisrzlp.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163prktstfb.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163qwszncgl.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163psgqtddo.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163frlmdssu.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163lmurnnyx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163fjxlsqzs.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163izvzicuf.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ucefqkcb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163gwguxtkj.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pogjedlf.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163nuhlaplx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163matgvfgd.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nfhqjdzj.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163fcirwcby.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ebjxzbqj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163hosjgvyd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163togkozhu.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163tevfahdv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163koqmtcnq.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163lhvahziw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163dhstegmx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163qdikaqvd.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163kabzgjvg.html

Py:   str(42)
来源：http://www.aibaodan.cn/163wkiwihdn.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163iuxazqki.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163obkqvajy.html

TS:   String(42)
来源：http://www.sxryk.cn/163erpfrsch.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163kiunoful.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163usxblmab.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ibpwowsv.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163iebgrwen.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163zpxiiujb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163pbnukitf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163koqanrtj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163zpjxabmn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163vzmiwxzp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163tqerpvjm.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163elkwwlgp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163lzfhcpwc.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163clyfzwso.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163zulykild.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163muizbxor.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163lcjsseij.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163itspcsyi.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ndeduhpp.html


<!-- 参考信息 -->