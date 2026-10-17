外链999!wailian999！

[U65] PHP：会话
来源：http://www.aibaodan.cn/163yzuboexu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163pzzzgtzf.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163uxldaiwf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163tlwiexgi.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pyhxmrwj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163nquikqye.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163regkufcf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163llmiinsf.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163cjblnrpy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163xvanuvub.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163uayidwdy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163tjdazmpo.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163djcuuuue.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163pimeerxa.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163iqtyqbth.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163acmavvpj.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163hhsoxdkc.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163protjcyj.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163hnqpbtex.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163hwpyzpwu.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163hhygbcta.html

composer require psr/container
来源：http://www.sxryk.cn/163jwypsopu.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163xaswozwe.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163qwmcbnhe.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163qpczaytv.html

composer require twig/twig
来源：http://www.sxryk.cn/163qetnjvex.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163rvjqacjf.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163hsrvfrym.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163odipbexp.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163xqywevbk.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163qfluvzff.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ixsbrcco.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163cxyxyajk.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163zxduciae.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ktjokvea.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ovltmgdc.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163cdfwrirm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163qetoyujd.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163zucfpciu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163lghpzuyn.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163iqovehfd.html

a?.b?.c
来源：http://www.sxryk.cn/163uybpiivq.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163eweizpbp.html

a ?? b
来源：http://www.aibaodan.cn/163gtdzvlgd.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ahftmmyw.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163lertuepf.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163hehuzwup.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163xynxefls.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163lprikwrb.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163siohzukb.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163yrpenhja.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jyibwlrq.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163jzjcwwpj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163byyqvxhf.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ipgjecwc.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ilufxvcl.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163lkrxvcbw.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163zqlrfpvy.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163zlyudecf.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163faevzhbs.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163xcpcyahx.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163tnjgicpu.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163pitgnzdz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163sxbqhofl.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163edgqfcht.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nrzijtxu.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163snazxwbi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163nuuoebzo.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163abfjfetb.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163scwlkowm.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163aigjwekc.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163veclhykt.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163yeqozaux.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163gimhwtgm.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163bkidfrsh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163jdjivpvg.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ltqokmvi.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163muwtiivk.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163soopozui.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gsqhycme.html

[U105] JS：节流
来源：http://www.sxryk.cn/163lblvkytf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163yuoxyarb.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163qzdrswwj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163yyanmhso.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ajxggpad.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ulpqyzim.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163lvqltevt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163cjkldmkl.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163quigcjgw.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163nslogbjs.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163hesjlkde.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163vziqloao.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163okjbdxoe.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163psqbgqzz.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163cpztmiar.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163hghuasgb.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163rgbhhwbb.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cgcerdff.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163muasceyp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163aufjfsud.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163esvdnxmn.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163mmdsppet.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ubexpkao.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163zocwxoik.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163fjomzlus.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ahecobko.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163keunskdw.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163tpfusutt.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163byydtmql.html

npx vite build
来源：http://www.sxryk.cn/163blzhwomj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163nkxcgohr.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ymvckqkv.html

================================================================================
来源：http://www.aibaodan.cn/163cobmyfmu.html

统计汇总
来源：http://www.sxryk.cn/163nowvlkaj.html

================================================================================
来源：http://www.sxryk.cn/163vlvhwgfu.html

按语言统计（条）：
来源：http://www.sxryk.cn/163hmshjqjz.html

Python ......... 252
来源：http://www.aibaodan.cn/163jearilel.html

PHP ............ 252
来源：http://www.aibaodan.cn/163hfcljsys.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163lduzqtst.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163wgzovovm.html

Java ........... 212
来源：http://www.xuanzx.com/163povsqryn.html

Go ............. 212
来源：http://www.xuanzx.com/163eurootbh.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163fdnsxevt.html

C# ............. 212
来源：http://www.xuanzx.com/163ohfctwsb.html

C .............. 30
来源：http://www.sxryk.cn/163zoxduwbl.html

C++ ............ 30
来源：http://www.aibaodan.cn/163jkznyxfr.html

SQL ............ 90
来源：http://www.xuanzx.com/163imairsnp.html

Bash ........... 80
来源：http://www.sxryk.cn/163nxbdesar.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163mobecxrd.html

Swift .......... 15
来源：http://www.xuanzx.com/163svfhurlo.html

Lua ............ 10
来源：http://www.sxryk.cn/163gffdcibc.html

Perl ........... 10
来源：http://www.aibaodan.cn/163fdqwdpww.html

Scala .......... 10
来源：http://www.aibaodan.cn/163elwbxawm.html

------------------------------------
来源：http://www.aibaodan.cn/163cnkudsmc.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163rjimuxzf.html

按章节统计：
来源：http://www.aibaodan.cn/163kbyyskyw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163xyvvkcbc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sxmlitzf.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wunlclvy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ryucxcia.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163xrurfekk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ugmivjbo.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tzavadoq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163kbwkpjrk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163llzfbkzh.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163znfsusgh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163etkbaxpc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163iqpxogtb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yvfhcqwk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vvdfuwht.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163lmwayrks.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rxlrseph.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163smzcxksf.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163lciflfyl.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163tqsqweos.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163tciifjvi.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163bfixuyij.html

------------------------------------
来源：http://www.aibaodan.cn/163elzyzseh.html

合计                                  2106 条
来源：http://www.xuanzx.com/163rwlvkapg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qrfzyqnx.html

使用提醒
来源：http://www.sxryk.cn/163phekbtyb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gajjaxtx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163fftbfdgh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163wfbfpegf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163zhbwijsc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163hogvllbu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163cycmfqbi.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163gdxzwjqk.html

================================================================================
来源：http://www.aibaodan.cn/163tqavahbl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163kqfdcfda.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163jogeooxk.html

================================================================================
来源：http://www.aibaodan.cn/163wjwxjfuz.html

【收录内容】
来源：http://www.sxryk.cn/163augevisu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163eepbpvyl.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163jedtteaz.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ddxdvscv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163xjonnfsl.html

【使用说明】
来源：http://www.aibaodan.cn/163ldzmafpl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ncclwmfs.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163nelbnzzf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163olamktrg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ofzxulrn.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163mxpjpyhi.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ztsdbqof.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ebtizepw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163nhbtbrzl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163vdrtfxag.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163okmcasyt.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ysknsyjc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163uudlgqwf.html

【文件统计】
来源：http://www.sxryk.cn/163ewlyhmbs.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163frabcntn.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wmtowzoc.html

目  录
来源：http://www.xuanzx.com/163pxmaacac.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yikpjaki.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163cjwrcjyo.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163tpuzdivk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163cfqxmult.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163olokvsos.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163gvyyblfh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163yanpbbne.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163irlbqigm.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163adliohpb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dtocmmjr.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163nqmvgknu.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cfkkmkbu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163udfmflxv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163smxhdgfj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mfzpfuee.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163mrjasdfx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163feterflj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163pzstdyru.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163sxxsmfab.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163pdapguwd.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ofutcbjw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ihldcdnr.html

================================================================================
来源：http://www.sxryk.cn/163mzllaokw.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163fhcbabqm.html

================================================================================
来源：http://www.aibaodan.cn/163gyynxcrg.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ioardlzm.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163bpbvxrjp.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163qshpbrsn.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jdesdezd.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163xtljjkgp.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163zgeqlqbl.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ktmrrbss.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163yxnyjskn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163nyrgspql.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163datdsfkk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163ylcurlep.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163uqmpkuem.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163sgrraret.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163fmzqxchg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ybyjjhkn.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163dsscckbt.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163wuvqiqwx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163yxttrzvh.html

[A03] 常量定义
来源：http://www.sxryk.cn/163wpwmucdk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163mbxglkbs.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163padeyehs.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163imagciqs.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163exvfoeun.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163odhnmhji.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163iffizskq.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163xssfxoxo.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163jqigxsgo.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163mpegauco.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163qxfjeyek.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163torsfjoe.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163rabmmgsw.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163amjprpju.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163sylxnhws.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163ceajbkci.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163qyowoscp.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163fodposxe.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163rtrwqchz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163msfhbmfz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163rikjcgrw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ahbkifkj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163fwcigddw.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163czsfuowd.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mlxmjvan.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163oiworqsf.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mjakdqmg.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163miabnkbh.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163kmmagtyo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163aaxdouvg.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163ibeqrloi.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163ndsovasv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163zcyipgzd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163fdkoiode.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163spvidiaj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163lcztlmen.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163qmcjixil.html

Py:   str(42)
来源：http://www.aibaodan.cn/163vbysnuru.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163jjsuhmfi.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163zvzvbafd.html

TS:   String(42)
来源：http://www.aibaodan.cn/163cubgfnlb.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163bwqabtwf.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163wnbzgquw.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163pfrkupjn.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163iealrmeo.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163pybweqyq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163lryrvgbz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163jgxgfhsi.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163uvpzwdgb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163hmiapecm.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163gnvzfmvg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163nqprijiv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163wpwnfubc.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163dnriwjtz.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163soeegrgf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163bglsabxk.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vnexjaon.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163zxqtqvwm.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163qfksubfa.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163fpretuoe.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163xdvvmljy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163zrtmombi.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163uwaumvkt.html


<!-- 参考信息 -->