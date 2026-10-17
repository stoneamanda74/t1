外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163ucmfosjo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vdjjscou.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163numutxdt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163doubxggq.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ilnlfpwe.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hevlfnze.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163qxnrtfug.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ozyqowjf.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163rdpspitw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163hrubjonv.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ogelrirv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163onfjuyyf.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163dxaseuhf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163knrzbhgr.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163bnyrgjyf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163bqxomvxh.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163mtzqdvjz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163syibmzqx.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163csikpmid.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163rbjcofta.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163yflzyizw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163qofdtvfc.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163oxwrxpjs.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163bwadebej.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163crppppdr.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163aqnvsfbz.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163atcexzyc.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163eonjdpeo.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163njkoommg.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163aqiptzoz.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163bisqhdmz.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163nnefuhwb.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163grduwaze.html

composer require psr/container
来源：http://www.sxryk.cn/163larmhhol.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163xarzuips.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163gcyohbup.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163fyogjitt.html

composer require twig/twig
来源：http://www.xuanzx.com/163efqozfsq.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ehmrefrd.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163jabbnvrz.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163wjbpkbkw.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163iaxtusfj.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163gkucciqc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ilwrqumo.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163psqfblag.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163jvbmfjyz.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163sjtbpwrr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163bwsorwpi.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163xdwlstdh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mnzlqkdy.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163csgkudyj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ysgjzaim.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163swemfmwl.html

a?.b?.c
来源：http://www.xuanzx.com/163rurzsrdj.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163tauyrlva.html

a ?? b
来源：http://www.xuanzx.com/163bqdckkvd.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163szcpezrp.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163zfpukwtv.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163vtsgzdbg.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163fhfelexn.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163xzoadtsy.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ycnzusyu.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ttbqnrmt.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zkczjgfu.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163prtztbae.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163lxslhvqw.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163gpictxbc.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163eymmwtao.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163tzwmfeth.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163yyviczab.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163qaukzrsp.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163iaodndse.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163afqrqtdd.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163kwgadhis.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163zvurdegc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ablrrbkt.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163qljwstow.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hqqcayga.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163wwckwjhz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163hqdiwmyo.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163dqbupyoq.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163iahazlle.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163iicehznl.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163thjpjxzo.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163vprqyyzy.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163qiapbzhn.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163awydmtyg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163bdufuovx.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163xcxtfvcn.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163yxetodam.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163armmwelb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yfvqjpoz.html

[U105] JS：节流
来源：http://www.sxryk.cn/163bzrawasb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163wzttyucd.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163iewstbaz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163zsrmolbe.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wvuyrbdd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163aesjolmb.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163wgurprng.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mmuhqbca.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163wpfwznkv.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163sueatqdl.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163watwgyoa.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163sxxphtfw.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163qoqtbdzz.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163iwgmpmun.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163gqyhrrwj.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163lemibzio.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163sxhxkkij.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tiqoijba.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163vwrrkhat.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163osntskgo.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163zbwssxou.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163njtpaebb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163spkafdni.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163tknqdngc.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163apgtvulo.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163obigyfkr.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163hehoqppb.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163yehseere.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163nbqfvqss.html

npx vite build
来源：http://www.xuanzx.com/163fwtjsabm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163umxnmqfp.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163xzibszhj.html

================================================================================
来源：http://www.aibaodan.cn/163ywguhyjl.html

统计汇总
来源：http://www.xuanzx.com/163fgvlhezk.html

================================================================================
来源：http://www.sxryk.cn/163tcczpsfd.html

按语言统计（条）：
来源：http://www.sxryk.cn/163wqxhdyob.html

Python ......... 252
来源：http://www.aibaodan.cn/163zcedhsay.html

PHP ............ 252
来源：http://www.aibaodan.cn/163xmgiudzv.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163tgaxbmnk.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163jsyxldny.html

Java ........... 212
来源：http://www.xuanzx.com/163jdqwjced.html

Go ............. 212
来源：http://www.xuanzx.com/163vksymctf.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163tdsyxuym.html

C# ............. 212
来源：http://www.xuanzx.com/163scjjdbee.html

C .............. 30
来源：http://www.xuanzx.com/163fapdgxor.html

C++ ............ 30
来源：http://www.xuanzx.com/163ehqamrzb.html

SQL ............ 90
来源：http://www.xuanzx.com/163pnxpvqxj.html

Bash ........... 80
来源：http://www.xuanzx.com/163edltbvnk.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163cechmzcr.html

Swift .......... 15
来源：http://www.xuanzx.com/163tmilljhc.html

Lua ............ 10
来源：http://www.xuanzx.com/163mvgcehsn.html

Perl ........... 10
来源：http://www.aibaodan.cn/163lvjeicrj.html

Scala .......... 10
来源：http://www.xuanzx.com/163qfbrhgzr.html

------------------------------------
来源：http://www.sxryk.cn/163tvgyjnwu.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ytildgoc.html

按章节统计：
来源：http://www.xuanzx.com/163farpkpmt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163umcguvrf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bxxxuizp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zehaeqwu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163lrejaigc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163elmsfdqn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163hztqkwxm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lwkgvqll.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jcukxuyw.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pieqlkbv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163mpphrfyw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ipylvrfx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163irtptovu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uotlhqbb.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163glzurnox.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163bmfuxfpf.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zxojznzr.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163nvmnsbpl.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163vmtiraxv.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163emceijnq.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163sizizkug.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163kpjbbesm.html

------------------------------------
来源：http://www.xuanzx.com/163nabunwxe.html

合计                                  2106 条
来源：http://www.sxryk.cn/163uqhdkydr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163eimoigqa.html

使用提醒
来源：http://www.xuanzx.com/163ihxxrkyb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163aseaonjk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163htkmkuif.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163rbzorcar.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163xzybroso.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163rhcsylec.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ryunrwbn.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163uvkugavi.html

================================================================================
来源：http://www.aibaodan.cn/163ugrtrvmm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163rrlrytmn.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163tplhjtmz.html

================================================================================
来源：http://www.sxryk.cn/163icxwrqme.html

【收录内容】
来源：http://www.aibaodan.cn/163qvfgquwg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163dqgdrpvt.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163mdjsjepg.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163tfwsrtkt.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163bmrphqfn.html

【使用说明】
来源：http://www.sxryk.cn/163gegutvpg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163zicftymg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163dopxikmb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163qgszeriz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163mqtunwya.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163tjvjrhac.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163vlejxtqs.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163spdqpkqo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163ijvsuemw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163kekenlxt.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163ecigeslt.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163dluslihm.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163rzbyyiat.html

【文件统计】
来源：http://www.xuanzx.com/163zojvznui.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163urselaov.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ipqhtpkp.html

目  录
来源：http://www.sxryk.cn/163bcpwsjqc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pzyjvult.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wkcgugww.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163iwdajedp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dwugxypa.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rfdmfhng.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163nfastqjz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163veiosllq.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163yjafcdju.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163awbimzfp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lfjfkvzw.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163nothebmd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ettrqygl.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tkcbydlb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iudlmncq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163spqbulie.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163vnibxjbo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vmdileaq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163kulnaqsx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163smjaadyw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163aumywsfe.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zbwqysfl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163phyizimj.html

================================================================================
来源：http://www.xuanzx.com/163cuktuazt.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163snwdzfzb.html

================================================================================
来源：http://www.sxryk.cn/163ihfebcso.html

[A01] Hello World
来源：http://www.sxryk.cn/163mnbvxcjh.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163rditbelv.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163cublpmxb.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163dnltacbo.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163fcicbtgx.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163uvldacdy.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ficaebtj.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163olozglno.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163jvvbewjd.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163yqjujnbb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163mbogveez.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163ezevhxmk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163dclozuod.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163jrhvkgay.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163tcavqwen.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163nlsxftey.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163gjigpzmz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163rwypmlbh.html

[A03] 常量定义
来源：http://www.sxryk.cn/163ltptldca.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163geagvltx.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163gbmpaxfa.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ctftjcbv.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ulwtjurz.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163maftcaut.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163fkmgycit.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163imnshwyu.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163ghsunblj.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163btdnezgd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163prljkiyl.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163jtjcwxnv.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163zwarqqbu.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163noydvmnz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163jlifuczh.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163qcmrmypy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163bfaxseao.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163bkejzxcr.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163bhsoojsf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163tndawlxe.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163eaxnkhdp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ognoidya.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wmpbcpjx.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sjuooqmj.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qmskpvbm.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163irfzeggn.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hdzktixs.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163spitkqha.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163dgixyuaa.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163pmknctwc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163bznbpegz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163wkvllshs.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163obonnfid.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163jposcofs.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163scejwhiw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ngucgcur.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163pvklirln.html

Py:   str(42)
来源：http://www.sxryk.cn/163qxdszyuo.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163cbrtxlbz.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163ulvcxarq.html

TS:   String(42)
来源：http://www.aibaodan.cn/163fmzzqark.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163fpmpgjka.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163clzdtesf.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163vzcfgwga.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163yrfnobsk.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163mzrcqepb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163bhhshorh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163ccnmnhjw.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163gzqrcttf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163jeirrihx.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163sndjxyhb.html


<!-- 参考信息 -->