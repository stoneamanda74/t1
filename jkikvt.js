外链999!wailian999！

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163vsqmtzgt.html

"值: {$a}"
来源：http://www.xuanzx.com/163lractkah.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163uffznlqa.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163lzjtnvcf.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163sqnilmgb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pmpuyjkm.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ocyzzzhl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163mpsaqolr.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163rsbzxakg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163yxtrwtug.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163hlaefyja.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163efbrzmvy.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163omtxsdkn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163jduaxjcl.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163kdnaxasi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163xzqtuudl.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163uibrvayp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163umwmlnyk.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163fxrcrudx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163jgbrrqeu.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163yqidiudf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163kdjpjddo.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ugzeqidn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163hmdismkv.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163oyvdcpfv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163okffnajv.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163lalidhlx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163opbcjwbu.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163pqiccbaq.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163rlbsmpiq.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163hwgdfour.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163cnzeofkh.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163fdaeffdf.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163vtjckppk.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163tekwybib.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163iclxdqxc.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ijumzmsi.html

composer require psr/container
来源：http://www.aibaodan.cn/163afnamxeg.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163niianajv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163nsybjmpn.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163muzuhlpv.html

composer require twig/twig
来源：http://www.sxryk.cn/163nqglykdl.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163clgxtzti.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163lcllkywd.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ttqeabtq.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163rprcbdcd.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163kiuafaor.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163thdxchqw.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163slrvxnwz.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163skkdgyur.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163vpplarpi.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163hvtcpqug.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163hesmhlym.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163qprjkdsz.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163cewselpe.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163ffvpirzn.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163xrrruica.html

a?.b?.c
来源：http://www.sxryk.cn/163efiwkteu.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163nszxaqqh.html

a ?? b
来源：http://www.sxryk.cn/163bevrznbn.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163fbszyzsc.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ggbqgkqv.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163guhytkad.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163fkhubave.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163gzxgzitv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163wlmccwjr.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163cnbwrhvh.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ghzfljuh.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ellmoylo.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ygjklbke.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163lelnbxor.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ngmfnoda.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163amalsuuf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163wgnthbcw.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163gftfhtey.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163yrfmixfo.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163fockvkcq.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163wntkeqms.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163nuzkqdmk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qdrnmhax.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ruqqqlbs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vkvepisb.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163vwwfektc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163lxueozev.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163teegjkcf.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163nvxhsega.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163gbsqxaid.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163xexbcwbp.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163tpphteot.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163hyeiszwn.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163kkckdkgj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163udfmycdg.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163aqqujrdt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163oaecnyzu.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163axskhjak.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163phhuhydw.html

[U105] JS：节流
来源：http://www.sxryk.cn/163nmouebqj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163koatawgg.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163jigpyttq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163llacpafa.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163bwpyzsvy.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163fxgwdlyq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163nnisktvn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163btvaoqmv.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163hipbhltw.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ohhnnghy.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163bkyeizqi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163frszckwk.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163cbjntgdd.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163qhjhrvar.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163oyyxffoc.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ljpmvscm.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163djeiwgnl.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ycjfybdu.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163cucqhuju.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gepsgynf.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163nslafhmt.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ftgkgxnx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163txvnpffl.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163phfffhsl.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163raofzsvn.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163pglyjuem.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mgoikpxb.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163zsyfpvfu.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163kdzdbcyt.html

npx vite build
来源：http://www.xuanzx.com/163dltwulve.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163zlqquese.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163hqpeqsxo.html

================================================================================
来源：http://www.sxryk.cn/163xnfpvbwz.html

统计汇总
来源：http://www.xuanzx.com/163dboamynu.html

================================================================================
来源：http://www.aibaodan.cn/163ydmpbhjo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163qbriwtwv.html

Python ......... 252
来源：http://www.aibaodan.cn/163lifpsfof.html

PHP ............ 252
来源：http://www.xuanzx.com/163pxpdqbnq.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163emhxgzlx.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163iuqaaqvr.html

Java ........... 212
来源：http://www.xuanzx.com/163nocuezfg.html

Go ............. 212
来源：http://www.aibaodan.cn/163qebpzeaa.html

Ruby ........... 212
来源：http://www.sxryk.cn/163bzikcwbe.html

C# ............. 212
来源：http://www.xuanzx.com/163jbpsqdyl.html

C .............. 30
来源：http://www.sxryk.cn/163jfzfpqrd.html

C++ ............ 30
来源：http://www.xuanzx.com/163ppnipvzj.html

SQL ............ 90
来源：http://www.aibaodan.cn/163qicghojt.html

Bash ........... 80
来源：http://www.aibaodan.cn/163jntlnvyt.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163fhgwixok.html

Swift .......... 15
来源：http://www.sxryk.cn/163objdbsgy.html

Lua ............ 10
来源：http://www.xuanzx.com/163bkbmwomx.html

Perl ........... 10
来源：http://www.aibaodan.cn/163gkcfknew.html

Scala .......... 10
来源：http://www.xuanzx.com/163fmpnyosj.html

------------------------------------
来源：http://www.sxryk.cn/163ejnnappx.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163knaqymeg.html

按章节统计：
来源：http://www.xuanzx.com/163qlstvfpd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163uoiihhle.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jbehyvcb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vfpiykff.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163idezmwtu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qcgbdqqv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ieiqdyrr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163kzjvmdoo.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163krzvztac.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sifgcxek.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163dlgcsdlk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dmtblcqv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cdhcrasy.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zbvjntws.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163qtourgzf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163jtfoezyp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rbpbwubc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163mossaqkn.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163gyjuxqfm.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163iapitiax.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163aiqcvupi.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ehvqpuul.html

------------------------------------
来源：http://www.sxryk.cn/163pkeolnll.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163wtmmhzfy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vcdjqhhl.html

使用提醒
来源：http://www.xuanzx.com/163msoblzjr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dxbnmopz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163mvhmnmks.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163vuhnybdq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163qmdgcwws.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163sbvgpkfv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163yiysmylh.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163pgtcveqa.html

================================================================================
来源：http://www.sxryk.cn/163vvoyhshf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ohviubgn.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163nkosukhj.html

================================================================================
来源：http://www.xuanzx.com/163sxcrvahn.html

【收录内容】
来源：http://www.aibaodan.cn/163pojeftel.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163yzevesru.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163pokifjul.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163rcmdnqkk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163tfjypuzc.html

【使用说明】
来源：http://www.sxryk.cn/163emhjikhw.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163zmzaidnz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163uxvvfqxe.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163vcxazpss.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163bcukygtr.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163vtlrbmcr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163hkbmagzn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163djvyxlkt.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163nxdqkhwp.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163cnupiaca.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163cdodzkqk.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ktgruovh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163oojrznoj.html

【文件统计】
来源：http://www.aibaodan.cn/163miubettq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163rlvtvroz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163utsjhavl.html

目  录
来源：http://www.sxryk.cn/163ggycmspm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mzruottq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163hqdzitiy.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163syzdqugu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vslqgzob.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wwiwhmqg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163rmmoamxw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163qcggwlmj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163stfmkqug.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163eetmvcue.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163txhhdvol.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163bnbobujf.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tdvzvesk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pxuoifdo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ufbndarq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ikfbrfqe.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ktyommvl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zozgrxle.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163wvoeaixv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163mjvdxwtr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163tdnpepbj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cnxrpvac.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bzaawclg.html

================================================================================
来源：http://www.aibaodan.cn/163wihiqylr.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163szkycnns.html

================================================================================
来源：http://www.sxryk.cn/163nwgzgifu.html

[A01] Hello World
来源：http://www.sxryk.cn/163gvfgwhjf.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163brfownns.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163bjxxbvhf.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163eqbhdykc.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ymqdzdcl.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163tvtyztvg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163wwsytgha.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163bzdkxcdh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163zhazzpgh.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163aiamgfss.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163yrqlyveo.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163gkpxcqut.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163kqfakwvf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163usojcbqa.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ujxwjvow.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163miixxyve.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163xndpjzvn.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163xwzrnpye.html

[A03] 常量定义
来源：http://www.sxryk.cn/163zbyoriyy.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163tcpwuhjv.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ipzhvqzr.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163brtqhlpz.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163thnzzpnx.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163qcrelkqv.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163myjhsesw.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163dguvxtpr.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qwlaprse.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163kyooeqky.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163dmiupzqa.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163hjfuphfl.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163qgfrjhlp.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163gubdgejl.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163wynvcwty.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163idcucide.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163rzmzngnh.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163auiaumnj.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163emtkrtql.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163ereadzqr.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163anjrqdih.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163cmoazljf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163aszbwstx.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ajhmhzwa.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163petgyhso.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163drvdrqhx.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163qfoixrbl.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ckrrlopa.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163gddbtexu.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163tljwrmts.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163yyitkepe.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163xllkeyim.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163slnoettx.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163obzxiyly.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163pksdgwkp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163xxmxjmqp.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163wekpeizc.html

Py:   str(42)
来源：http://www.sxryk.cn/163qnoishvi.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163sdcsafso.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163hrrfwryu.html

TS:   String(42)
来源：http://www.aibaodan.cn/163gmwbygpa.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ysyabfpx.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163xiiegksy.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163zzemxsur.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163mseakoqb.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163mchsdfno.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163cotknsay.html


<!-- 参考信息 -->