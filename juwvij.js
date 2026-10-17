外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163kvcivfgr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hdaamjko.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163yrsqssqa.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163lodqkijd.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163mkrbeidy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163sjblznes.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163zsgqnfyk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163yecwfqve.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ocqdbhwt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163drwmveqc.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163cwddmymj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vvueyfrc.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163hpwvtfzu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163osrmfkcs.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163mvnugial.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163pusdzikp.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163nukhfzee.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ijtbjtem.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163eeilbvvr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163astsauok.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163uufpyywf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163sjazyxwj.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163swkxbttw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163slambqwt.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163lsniivsv.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163eosrwzxi.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163btsdunbc.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163snyhlpxx.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ngiacxtd.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163sytsuvwg.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163vioscari.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163czisnlmn.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163uejiollj.html

composer require psr/container
来源：http://www.sxryk.cn/163vjctgxoc.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163oaajqtap.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163rkykzgbr.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163mkegukom.html

composer require twig/twig
来源：http://www.aibaodan.cn/163cfkfyjky.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ykvwsewl.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163kmirjnuc.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163yxnylcbz.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163rtzqtbfw.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163namfreiv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163peiieniu.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163nefrakkq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163gcwloyee.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ejublikw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163jqhhxrnh.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163oguhrave.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163eoszgtra.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163wgututzx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ynazeton.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163epimpwhr.html

a?.b?.c
来源：http://www.xuanzx.com/163thcfljhn.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163iifhnthp.html

a ?? b
来源：http://www.xuanzx.com/163znyjmyxw.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163tvncpplr.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163mqxjnuil.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163uuyofwqz.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163xshchmmy.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163htcdydna.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163kmpwrgor.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163gathhduw.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wobpmaud.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163sihayzff.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ymnfjpor.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ngyosskn.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163pyexxmmz.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hojhexge.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163turcwisu.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163dqtvocfh.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ltxukprm.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163nftumebg.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163qpwjakms.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ojdpuqes.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uybnrbju.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163vnjnfgps.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xiwcohur.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163ajwrweuu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163yaykbype.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163fxvorpxd.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163mgarukxz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163aialazrp.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ygeicqzl.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163oeystkvu.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163hgmcpbhx.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163elzntbgx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163zjfebwir.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ydkmltto.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qwickhdm.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163pghkanjr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xckiptlv.html

[U105] JS：节流
来源：http://www.sxryk.cn/163jkizbfoo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163pspyyefn.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163cwgnhnhv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163cxdtljjm.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163sjnmjnhv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163prywsiyj.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163kunkmwcl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163lpcdlnzl.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ttybgeyi.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163umyzloyu.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163elfhjobg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163jphkjnnc.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163yopiolvx.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163nndlthee.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163nkrzmzvy.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ffxwpvfi.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163rxlffbwt.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zrxbmxre.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ehwmvfxt.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fvkvultf.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163quqbdlhb.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163gssswnow.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163tiiygmzl.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163vrntvxpi.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163hllmapzf.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163quzhnoql.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163mqqpxqxp.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163qbmaxdgr.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163jqizsfss.html

npx vite build
来源：http://www.sxryk.cn/163cueofvdm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163fzypdctb.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163gqflewmb.html

================================================================================
来源：http://www.aibaodan.cn/163cbgbqndu.html

统计汇总
来源：http://www.sxryk.cn/163ukhjammw.html

================================================================================
来源：http://www.sxryk.cn/163fxuqwbet.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163hkimgloj.html

Python ......... 252
来源：http://www.sxryk.cn/163ubsbycix.html

PHP ............ 252
来源：http://www.sxryk.cn/163yjwbspsk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ahukixqn.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163gyyurdaq.html

Java ........... 212
来源：http://www.xuanzx.com/163uogihdtr.html

Go ............. 212
来源：http://www.sxryk.cn/163jdcliewd.html

Ruby ........... 212
来源：http://www.xuanzx.com/163deomblhc.html

C# ............. 212
来源：http://www.sxryk.cn/163tfdabzoc.html

C .............. 30
来源：http://www.aibaodan.cn/163dkwtbtit.html

C++ ............ 30
来源：http://www.aibaodan.cn/163shbvwsyt.html

SQL ............ 90
来源：http://www.sxryk.cn/163gdyxopor.html

Bash ........... 80
来源：http://www.xuanzx.com/163pnfhqhzh.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163gcoxsqtb.html

Swift .......... 15
来源：http://www.xuanzx.com/163rzajaqmd.html

Lua ............ 10
来源：http://www.xuanzx.com/163mkezjxxa.html

Perl ........... 10
来源：http://www.xuanzx.com/163ushosvly.html

Scala .......... 10
来源：http://www.aibaodan.cn/163aggwxflp.html

------------------------------------
来源：http://www.aibaodan.cn/163arkkrtpg.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163qrpuciof.html

按章节统计：
来源：http://www.sxryk.cn/163zvixshqs.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163lomghzcp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jftmwexu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xrjhmzst.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nqulcxlt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163nwsuywjy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163uqyeygmj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lrldtwrw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jcltegsi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gufhjgoj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163frvttrbl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bsjeacav.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163inyhhgre.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vwbnagih.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163rwwmbdae.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163vdczbugp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wqfymgyv.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163zfjqtcii.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163dtbzugrp.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ilmliqeh.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163dkewbmqu.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163jvbiopin.html

------------------------------------
来源：http://www.aibaodan.cn/163jfgfnmmv.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163cacpknyd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kkvimhwk.html

使用提醒
来源：http://www.xuanzx.com/163diovfdki.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163octmxkhu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163mpzmcwwk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163khiennfb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163vwkudsur.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163viubqjxk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163cxtqeara.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163zaofttdf.html

================================================================================
来源：http://www.sxryk.cn/163todsfvyn.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163wvgromcs.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163wjkuegtm.html

================================================================================
来源：http://www.xuanzx.com/163yjhdwecw.html

【收录内容】
来源：http://www.sxryk.cn/163kdnbvgjy.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163rsoozmsr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163qlyuanux.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163cdxzirgr.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163exiyctuw.html

【使用说明】
来源：http://www.xuanzx.com/163lbzotbim.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163jdeohkwc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163eaeimpyb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163jdykerha.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163vdhnfhss.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163kpwmxvqb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163gsrmrzna.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163zftkopoj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ihnbldbb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163xihyxgwc.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163hwuenzzl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163luarfihl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163ywpntway.html

【文件统计】
来源：http://www.aibaodan.cn/163pqqmxsvk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163qrrlfmbn.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xnszyhva.html

目  录
来源：http://www.aibaodan.cn/163lnscujac.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tgnejuih.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163gxvibzaa.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bmbxfjot.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163unsztkiq.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ybywnkrp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163dijplwxp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mfdghkup.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kuvblgkb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zekywhhv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tsqyrgcc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163vuymtwbq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mgcyiovt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qhtupdpo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163skkjavfq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163oijmvsvq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163etinrkdq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ovzrdvsh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ulubribg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163loikknjr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163ildhdnww.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163okycladp.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163clvgoanu.html

================================================================================
来源：http://www.xuanzx.com/163vfpbngpv.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163zhkrxwpy.html

================================================================================
来源：http://www.xuanzx.com/163duzduphm.html

[A01] Hello World
来源：http://www.xuanzx.com/163uoqyvfyk.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163dzllrioc.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163mlbqcgfc.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163ypuwmalu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163xcxtartq.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163unzaqphs.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163azckskhb.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163oavkawlo.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163xitoezwv.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ruvxdhuu.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163gpdionla.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163poywhffu.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163mlrnings.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163lbemmfff.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bijmyflq.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163kvcehiqz.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163dkguwswi.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163qtcmdpvz.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163vyqvrtpf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163omqvfzrx.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163lsfpzpyt.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163edmzyrqj.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163xnbltimo.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163imlwhnwp.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163jwufydoj.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163slgfyhte.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163elrczlpi.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163dyxikcrg.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163wrkrjojm.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163btqevpqd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163uvqdzrir.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163prulkzlx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163aeqbimvn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163lrqvxhei.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163mgmfczab.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163eyuzbhqq.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163wmkuzrjq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163cewlnxbk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163aunbjngk.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163slnhevob.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ogcwbqih.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xutvdoof.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wnnwhngk.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dnperatj.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ljrgrhxy.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163hyoocjks.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ixriayhp.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163knypnokh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163qbpyoepy.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163ixrsvhgg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163drnbnxhh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163ftraopoy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163ebtwwqze.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163rfxiwwum.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163nsdsrhey.html

Py:   str(42)
来源：http://www.xuanzx.com/163lubsdoss.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163yaojxoqk.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163iiakgynr.html

TS:   String(42)
来源：http://www.xuanzx.com/163rgoiixjn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163enorfwgz.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163bfungblc.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163wkvwfgld.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163wzemztqr.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163gpssazio.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163qluzgmvi.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163arpntbou.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163ltlvulow.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163buiugcqp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163svogrcvd.html


<!-- 参考信息 -->