外链999!wailian999！

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163pacwuyly.html

"值: {$a}"
来源：http://www.aibaodan.cn/163cfqhkgfo.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163cqpfuoll.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ozcquaqv.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163oxvulvgh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163oxaoczjy.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163bjsalkbv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ixmsadxa.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163uuirmreb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vajwplaz.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163hzudhcgt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163towrynkj.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163urzwuuct.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163hnzlnpub.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163nkdiagvw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163rqdeyrnb.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ypzqgmnf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163gmdezjcs.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163xloytaec.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163wvyrjxoa.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163rdstxtuv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163fatdbdwj.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163jdeftvol.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ilmxkstk.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163pyqywyzo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163tvftxrgo.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163bdwdcoyx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163wucywodx.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163gvqpwleh.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163cqyshbsc.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163uofaogdu.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163skxywkbh.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163wdxtybwe.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ehpmbvki.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ergakygs.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163lhvffiuf.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163axfqzqas.html

composer require psr/container
来源：http://www.xuanzx.com/163zxtzzfml.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163zxswdbhk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163bakwbcmp.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ensayhkq.html

composer require twig/twig
来源：http://www.sxryk.cn/163lqqmophr.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163zemtsdyt.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163wegjqkgw.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163lufgxnhv.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163hjinkotl.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163drfhxrfy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163iabqabec.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163janfkqyb.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163xmayzqgp.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163tgholeuz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163fpmrpvxv.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163qjsmdfyg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163whkdpdag.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163ccpfcqod.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163uskgjstx.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163jmjwmsjj.html

a?.b?.c
来源：http://www.aibaodan.cn/163xdwryfvw.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163lzyfytwi.html

a ?? b
来源：http://www.aibaodan.cn/163ebowzixo.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163xfpuwinb.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163wicneywk.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163sludaiep.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163zpsmpzfu.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163hoxqvaav.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163tfammtmi.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163oxcuafqb.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kshccsgl.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163egfdcusj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163wlbpyhfy.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163cuhqhrtq.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ttgsmusn.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ayfgzofz.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163tzharpvr.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163vepehqvr.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163fkqseqel.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163mbwwgixd.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163whxhhiid.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163simhyaiu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cjkjxepg.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163iqoakbvq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yccorrjo.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163mlgeodsg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163jejdornd.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163tdapagmj.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163toqkxewo.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163srjybuji.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163pmiingqw.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163xzyvowyg.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163kewjhodc.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163xfrvxppd.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163kkbokpcf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163fugbnezh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163rreqxdco.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163gukmiwwe.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hulboxix.html

[U105] JS：节流
来源：http://www.sxryk.cn/163stwkslsf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163rxprecjk.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163nnxfekat.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163tapfwlch.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163xsuizvun.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163omoqjmla.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163udchxtuk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163puxirses.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163rosvlube.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xzxqcsyd.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163rsmqpxvo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163eqskwyzr.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163wpbcutlt.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163hohfbtwb.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163zbhqjoyw.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rwufbiuj.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163rnosxcmd.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uoqsjfir.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163tkiwrqjj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wfsmsbqr.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163avboegoj.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163riijtjqw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ardsujep.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163vibtwtwz.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163bwxxdlfs.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163gecriuzb.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163aljmafih.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163wiiphejw.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163twgosjif.html

npx vite build
来源：http://www.xuanzx.com/163ltrtuxll.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163isjceivm.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163oxzwpkno.html

================================================================================
来源：http://www.xuanzx.com/163uquhdzgv.html

统计汇总
来源：http://www.sxryk.cn/163diziqxgx.html

================================================================================
来源：http://www.aibaodan.cn/163jguhoiet.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ceszpaeg.html

Python ......... 252
来源：http://www.xuanzx.com/163gxtpfxzn.html

PHP ............ 252
来源：http://www.xuanzx.com/163ikcscuys.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163hnzfzbyi.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163pgzepthl.html

Java ........... 212
来源：http://www.aibaodan.cn/163csfejdre.html

Go ............. 212
来源：http://www.sxryk.cn/163mrmwufys.html

Ruby ........... 212
来源：http://www.sxryk.cn/163boeinzhd.html

C# ............. 212
来源：http://www.aibaodan.cn/163mvylshzg.html

C .............. 30
来源：http://www.sxryk.cn/163owjrrewe.html

C++ ............ 30
来源：http://www.sxryk.cn/163gwgdzoso.html

SQL ............ 90
来源：http://www.xuanzx.com/163zppadiwk.html

Bash ........... 80
来源：http://www.aibaodan.cn/163jhjgkstv.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163xxxolfyc.html

Swift .......... 15
来源：http://www.aibaodan.cn/163wdvdqygi.html

Lua ............ 10
来源：http://www.aibaodan.cn/163bqnsjewb.html

Perl ........... 10
来源：http://www.aibaodan.cn/163swddzxpi.html

Scala .......... 10
来源：http://www.sxryk.cn/163byzwkbiy.html

------------------------------------
来源：http://www.aibaodan.cn/163luyvwsqn.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163dyxctebe.html

按章节统计：
来源：http://www.sxryk.cn/163fhyvxmhi.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pjkqhlcn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163eqgcpthv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ifslzjte.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163yrxdnmci.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ynchixwx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163dklzaidm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gmedlntm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zfolcaxo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pbterpzw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mreskjfa.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ndhzccsk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wqjfgnsk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oprpuite.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163aupiykia.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163auuhyeie.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163efwkjihz.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163nnccqydf.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163pmohivcg.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ynjccdma.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163pmuisesc.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163yifwathd.html

------------------------------------
来源：http://www.xuanzx.com/163uoehgevm.html

合计                                  2106 条
来源：http://www.xuanzx.com/163xotxhile.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dqramycm.html

使用提醒
来源：http://www.sxryk.cn/163uedlnizx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163aqrjhwcs.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163miopslew.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163qauuijqi.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163joyoyobm.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163wetcjhty.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163jhuirkpz.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163pnvyfnwv.html

================================================================================
来源：http://www.aibaodan.cn/163lmgfsola.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163ciolxlcw.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163cquvrtlp.html

================================================================================
来源：http://www.xuanzx.com/163qkdpllgz.html

【收录内容】
来源：http://www.aibaodan.cn/163bkocjxlw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163hbshaezi.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163jbkmtdsk.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163rpglnwdy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ddnpohbz.html

【使用说明】
来源：http://www.aibaodan.cn/163wpaijvld.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163dfkhrpze.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163kxekufzr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163yqfljykq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163bjpnghix.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163bvlzaaor.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163cuhodfyp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163uhjqpdrz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163fscgjvcy.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163bytrsdrj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163iqvzeujw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163vchsptlq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163uiiixktj.html

【文件统计】
来源：http://www.xuanzx.com/163otjgkjke.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163zecthdgr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163aisbctzv.html

目  录
来源：http://www.sxryk.cn/163kjtxffet.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kvkhtztv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ihoqtpiz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wgmfghkw.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fqcotwnv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163mdewcggf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163xarluxdu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163rqiqyrdj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163adetujwb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jxaquafn.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mweukvbt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163fcctqzkz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ddfgrtqv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lsgtbryh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fdhajpnt.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163mbrbaski.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163dlatpgtl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mndveefo.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163dtrpilqp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163pvlunxoj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163fvcsrrda.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lfbcxszr.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xqfprwyr.html

================================================================================
来源：http://www.sxryk.cn/163pksinlih.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163kewsndgu.html

================================================================================
来源：http://www.xuanzx.com/163hksiepmm.html

[A01] Hello World
来源：http://www.sxryk.cn/163birdrost.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163hediwtor.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163fqasihak.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163dlactopw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163cxiyiajg.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163womkiypd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163kqhntili.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163phpugsfu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163meqwsbvu.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ccdrqekh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163bcmpdkcw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163mdaruoic.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163dwbscnzq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163zdpmnklb.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dldeqmia.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163srqpllkj.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163hqgpfiwj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163hkiuqgon.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163unumdlmz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163lazcvhdr.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163knjvxgul.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163yxkewzcs.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163jtvsrkeh.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163torbjvmx.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163eykureka.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163hfkqfzut.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163enotwuyn.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163qphwqkjs.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163dxmfkrzl.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163gujsifeq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163gfmqhecw.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163okrejbqc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163rurpjjet.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163plvcqgpc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163ergorftp.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163rcptgeyk.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163eeirzfxj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163wbbchnhm.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163tgfimauf.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hpziygvq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163gguscarn.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yebnjlbm.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ztwzdqod.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qwfswbwy.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vlksuqfl.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163alpplgmm.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163bmdkbqqg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163skmhboxl.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163wiipaqqo.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163ltuxviip.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163mdinrbev.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163beeopibi.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163puegzuav.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163enodzspz.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ysacactt.html

Py:   str(42)
来源：http://www.xuanzx.com/163bxoujnqs.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163nklfquol.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163dtvmblvs.html

TS:   String(42)
来源：http://www.xuanzx.com/163lafivlad.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163nbfbtqvk.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163kyehsrig.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163vebfcbgq.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ltojlbti.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163onelpqvr.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163pchxbmdt.html


<!-- 参考信息 -->