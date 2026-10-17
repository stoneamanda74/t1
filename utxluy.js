外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163gnxczdjy.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fwlwkddt.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163gbbeztge.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163pzkgstmj.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163jiiurqbx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163spyjmxll.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163zdzixrof.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163glifrtpm.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163uerefkvp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163qmucvoac.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163prejruxb.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163gyhnyhqc.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163lxjwkaad.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ldpqrzux.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163tchafmdw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163mmioasjd.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163tivvxtap.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163fpsqhyaa.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ewukvkzn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163yctqqayp.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163mhvmvxcf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163bfoiwepa.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163zuaktjfr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163wmxmxmnn.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163pxqtewjz.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163hmmqyfcl.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163uzspobdd.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163lalhnbns.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163dtwgbbpg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163wzduiqey.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163quklpzdw.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163vxuyzbhz.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163lrujutth.html

composer require psr/container
来源：http://www.xuanzx.com/163wtivgmel.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163mycxygat.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163uyojjplk.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163pmbprsbs.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zswmjwdj.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163lilcrjjd.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163zpceswxv.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163eiwclgkg.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163fnxroxil.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163tncerkei.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163tzxjuxye.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163qsdcwayl.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163yhmgqgzc.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163xzlqvtjr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163czpnfdzr.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163gtwdkykr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163wibskukg.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163lbplffnt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163rtdqbnvb.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163tckxmscp.html

a?.b?.c
来源：http://www.xuanzx.com/163ilrpjvig.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163qyuysvrr.html

a ?? b
来源：http://www.sxryk.cn/163rirtejwc.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163wqpenesv.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163wgmsmozg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163gamtmirf.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mmhbsgao.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163xpolwifs.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163wyuvqdjr.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163nkubnrnt.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xygnzujy.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163rpekfoqo.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163uwuwphvq.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163kcutvnxr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163bezvvwtq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163vcdwpbqi.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163tiimsqjb.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ldjsxkvz.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163xnezmnke.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163cdecqobm.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163bxjlciuc.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163hygypmti.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163phgnrtix.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163gjbvdcgf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vjfbgdpf.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ajwkswej.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163urujjnlu.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163kbakrbgf.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163usqrscpq.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163qmhiaoxu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rvqmoazy.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163askbeeoa.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163alfrruvi.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163jiccuoqe.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ggoimzwl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163fmkfhspq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163komncsjz.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163lxrpvotw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mdcylwhp.html

[U105] JS：节流
来源：http://www.sxryk.cn/163arfbxgty.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163tggkkbly.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163iywuxxbg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163qlgjzpuu.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163svxvulha.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163yfsqwkfe.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ozlbsvkg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163qnxlplsv.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163vhjrttcs.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hncvzgut.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163xhrasvlg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163csujffxq.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ukyjthxe.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163omrbrdhw.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163vcdugpsu.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163avfnjujb.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ollqdixz.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ekyimjak.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ibudybxr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ojixhxwd.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163vmgifjmd.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163yeretitr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163nrhdoyql.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163eqjgfgjt.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163xrllxzzj.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163qwjgfmxo.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163niblklqq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ehzocpec.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163mfhpjqii.html

npx vite build
来源：http://www.sxryk.cn/163ehznduyw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163anqjhdqr.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163wthrxvru.html

================================================================================
来源：http://www.xuanzx.com/163ssgpbvds.html

统计汇总
来源：http://www.xuanzx.com/163zixjlobd.html

================================================================================
来源：http://www.sxryk.cn/163jcnhiujx.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fwusvvcp.html

Python ......... 252
来源：http://www.sxryk.cn/163qtciglan.html

PHP ............ 252
来源：http://www.sxryk.cn/163togmscfp.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163uxsgdbgw.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163xloaidzw.html

Java ........... 212
来源：http://www.aibaodan.cn/163zlowxfgm.html

Go ............. 212
来源：http://www.xuanzx.com/163wbltqkwx.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163rdivwkdf.html

C# ............. 212
来源：http://www.aibaodan.cn/163fnaheram.html

C .............. 30
来源：http://www.xuanzx.com/163cwwcnggr.html

C++ ............ 30
来源：http://www.aibaodan.cn/163abqsszmt.html

SQL ............ 90
来源：http://www.xuanzx.com/163fpkfpyuc.html

Bash ........... 80
来源：http://www.xuanzx.com/163qgyfoqgv.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163hfttcgso.html

Swift .......... 15
来源：http://www.xuanzx.com/163kqlxffwz.html

Lua ............ 10
来源：http://www.sxryk.cn/163xhtrwsiz.html

Perl ........... 10
来源：http://www.aibaodan.cn/163mnapaokv.html

Scala .......... 10
来源：http://www.xuanzx.com/163jmcxofyi.html

------------------------------------
来源：http://www.sxryk.cn/163wdaftrto.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163rjifpvnr.html

按章节统计：
来源：http://www.aibaodan.cn/163crabohsx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ogelzeia.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vcmwkcjz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kwmhecfk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mtaxmchy.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ttkkiphk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163gulslboy.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fwaubnuc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fjdbtwab.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qxqqmulx.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vgnukzwo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ogtulihg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zpzzthyg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rdskdyve.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163jjntzzyr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163tdybdndv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rinannng.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ehpplwpe.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163lqtojeyz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163mcrwhmhb.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163kcfjfykl.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163xlcianie.html

------------------------------------
来源：http://www.xuanzx.com/163iqqecnic.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163twyxerpc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163tkuwkmep.html

使用提醒
来源：http://www.sxryk.cn/163sairzujs.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163quolczmh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163eidcmxaz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163eaecpucm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163cvdrmyye.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163xovkxxyl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163uhulommw.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163umfungeo.html

================================================================================
来源：http://www.sxryk.cn/163raidhavf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163wuqaoceg.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ixpubvki.html

================================================================================
来源：http://www.sxryk.cn/163ulatiopc.html

【收录内容】
来源：http://www.xuanzx.com/163xnijixdc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163rybojpgl.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163hhdhstlw.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163kwcmdowp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163bmlkmkoe.html

【使用说明】
来源：http://www.aibaodan.cn/163iisjkyxf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163pjujkera.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163hzohsbce.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163lvmfdtvh.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ncxvawcn.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ytdbdoot.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163huhvhpdp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163avpfzhit.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163msvvcgnv.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163csnjhsbe.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163ssfqjapx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163dbiaosiz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163dqcuxleo.html

【文件统计】
来源：http://www.sxryk.cn/163jxmhassb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163tvucfrng.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bnokqleh.html

目  录
来源：http://www.aibaodan.cn/163rthbrgmm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163rdvrugxo.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163bcerfqfi.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qpaymnll.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hcukrxpo.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163heujjfri.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163eujgfzdz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163gugxaqgx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163gnhktjtk.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ojaptqfa.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dfnexwzx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163qctjuehc.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yfilmaiz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163swzflwhg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fquxwoda.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163fwjquyeo.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163adegcemb.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ptxyzqhw.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163gjgdmbgs.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ougtqifi.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163grtzgdii.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163nxmpbbyk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jsfqtuli.html

================================================================================
来源：http://www.aibaodan.cn/163vwjqhfxd.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163rsonlhgx.html

================================================================================
来源：http://www.sxryk.cn/163jyyhwsrv.html

[A01] Hello World
来源：http://www.xuanzx.com/163bgynoncz.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163nyvxuaxx.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163omdvfjkz.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163boivxmdm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163lnlwzehw.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163gbahfegs.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163lvhucqqi.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163jdxfgjcg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163kqopdvmr.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163jsbyeamw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163ekedqewj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163bosgamxs.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163qeqnvltg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163tkfwibcc.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bbycjowj.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163uspajlzt.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163obvzowmm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ntzrdkmz.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163tpfeuggr.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ohehbrxh.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163gjcugfcn.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163nmxajded.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163bzlahidq.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163gqomjjnx.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163naopeweq.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163mkkgfssj.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163bwssvmxe.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163zeqeygpe.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163iwohrerx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163axxxvndg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163jkdkjxyt.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163kkqawzhr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163uvmobukh.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163pcwrotsj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163jibvvkvr.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163gevelxzr.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163yqioqnbr.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163dxmegfog.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163tqmqgfhx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163auclijkt.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163tywprywk.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nzeututd.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rkkplosh.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pqhhwruc.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163krwnsiws.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ziitfocf.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163vjenzphz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163mpvvghyq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163opstaflt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163qlwciape.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163jnkbwvsl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163hcgeypxr.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163tejhqfnl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163hckwtirr.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163bhbpaset.html

Py:   str(42)
来源：http://www.xuanzx.com/163rxukdoon.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163mtktlygc.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163qtqrlpig.html

TS:   String(42)
来源：http://www.aibaodan.cn/163lhjtidic.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163txnqinmh.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163liscxjzh.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163kmwwakjk.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163epflgwib.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163vetwfema.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163ckejervi.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ivcwkooz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163yetuovhq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163ahlslkio.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163qlnujsbh.html


<!-- 参考信息 -->