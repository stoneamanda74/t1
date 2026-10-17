外链999!wailian999！

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163lbyfzhdk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163lfakxsvd.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ysltithj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163unuvhhtx.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163wcspwpgf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163vrsrseld.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163hobojtwd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163skumkbyb.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163poesmeer.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ofgboslq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163sfehlnnz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163lvepdoqt.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163qiluugwr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163zjgbiihp.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163netsyiie.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163mbzscdxa.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qwllpsds.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163bqysxopk.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163vrfgddte.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ihdbaejk.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163gocyhesz.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163cvpbvezc.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ayrhfnyg.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163lsaastyb.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163xvijszan.html

composer require psr/container
来源：http://www.aibaodan.cn/163fkaauthe.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163zkkuhqtg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163aiminzqy.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163eaxncpfe.html

composer require twig/twig
来源：http://www.sxryk.cn/163bbkaadqz.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163eakzetag.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163tlacvtli.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163riecbwck.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163zksupbqq.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163gxmwrthx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163prtwapvz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ykjokylk.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163dcrlvmpm.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163lqawkfnn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163vkvtuhbx.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163diplakfu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163kvgrulpa.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163wtokkxez.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163lnnxwyos.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163qiohljdp.html

a?.b?.c
来源：http://www.sxryk.cn/163qcuygowr.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163fabuwtzy.html

a ?? b
来源：http://www.xuanzx.com/163wciklkam.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163blvjmxbl.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163xijzzwnh.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163pzrunsng.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163hjxqgaoh.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163jvoweuee.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163mubywuye.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163wiemiswr.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hpzelwjw.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163cbvscedn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rffjtkpj.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163aaobbjsq.html

structuredClone(obj)
来源：http://www.sxryk.cn/163xrmwygam.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163cnfbmfjt.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163mnjiigck.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163aykqdnod.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163zkzsabfg.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163uftekdpr.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163faecxuzh.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163mckrtbaf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zneykgeq.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163xybkfxfg.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ubmwdrps.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163qpudaaib.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163lgbfvwbd.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163dhazbiki.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163blszzrgt.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163cfvihsgp.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163zequmoii.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163mxraulyq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ojchfghl.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163otfrdpuh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ssniuimx.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163wnkzdlkv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163utzsyrwm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163gucodxfb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ouooyiac.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163dahcdecj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163lqtzsyla.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163smwvahbc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163gkkwmshc.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163mmgmkvrc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163mfhsblnm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163cswcbfgo.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163znmyfpxi.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163zkkuyown.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ktbklviy.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163yhtgntap.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163dahebhqj.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163udqvflct.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ebpcmhkj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163zebqowjf.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nccasowo.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163yvaqsqes.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vpxckgty.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163zqcetmql.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dqnaxphu.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163xekqnrda.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163oqfykhzl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ovwefrec.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163dzciagjk.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163zagjlkbc.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163pnmrgdtt.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163tkgcxojr.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163xksjazoa.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163kfntvtsi.html

npx vite build
来源：http://www.xuanzx.com/163avfqtmgw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163dxrhttiv.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163cgnuzpbm.html

================================================================================
来源：http://www.aibaodan.cn/163zhyajjvb.html

统计汇总
来源：http://www.xuanzx.com/163ucobawlc.html

================================================================================
来源：http://www.aibaodan.cn/163zylymqwn.html

按语言统计（条）：
来源：http://www.xuanzx.com/163dndyfnmb.html

Python ......... 252
来源：http://www.aibaodan.cn/163lqutjtcb.html

PHP ............ 252
来源：http://www.xuanzx.com/163hibzgudc.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163rmkitkla.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nxkbgdwf.html

Java ........... 212
来源：http://www.xuanzx.com/163ukjduxco.html

Go ............. 212
来源：http://www.aibaodan.cn/163qtpkkrao.html

Ruby ........... 212
来源：http://www.sxryk.cn/163efrfvuwr.html

C# ............. 212
来源：http://www.sxryk.cn/163dyedddro.html

C .............. 30
来源：http://www.aibaodan.cn/163vnbrgiub.html

C++ ............ 30
来源：http://www.sxryk.cn/163scjisumm.html

SQL ............ 90
来源：http://www.sxryk.cn/163afjtsufa.html

Bash ........... 80
来源：http://www.sxryk.cn/163frxnmrtx.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163qhioogkd.html

Swift .......... 15
来源：http://www.aibaodan.cn/163vgkdexcf.html

Lua ............ 10
来源：http://www.sxryk.cn/163ycilbpez.html

Perl ........... 10
来源：http://www.xuanzx.com/163aeigmdhd.html

Scala .......... 10
来源：http://www.xuanzx.com/163ulbnzdqy.html

------------------------------------
来源：http://www.sxryk.cn/163lqkbliac.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163akooyxnp.html

按章节统计：
来源：http://www.sxryk.cn/163mkhocekc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163wqvavblx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163eeckknfd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163niubtdmj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qhrmuvay.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163brsaffcp.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fotuozni.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163pgkvpfbu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dlkhwjuz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xyofgcei.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163myctebao.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vwwinfmz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163htyhtwud.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ptmohsze.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163jopviyqd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163esoptjtq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sjxxgurk.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163scpshhac.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163kfdlbylq.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163kkysosvm.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163rotegzrf.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163vtcctndc.html

------------------------------------
来源：http://www.sxryk.cn/163qhyasduu.html

合计                                  2106 条
来源：http://www.sxryk.cn/163wxhpmfvv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ftbefhuv.html

使用提醒
来源：http://www.xuanzx.com/163woexsnlf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pnjwqhiy.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163kzhwedox.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163rnszfyks.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163psmbvmin.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163rghylnfw.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163hrigrnkv.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ibgdnstm.html

================================================================================
来源：http://www.xuanzx.com/163tirfjdin.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163asmfpusd.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163lbvbiufp.html

================================================================================
来源：http://www.xuanzx.com/163bdhcjczv.html

【收录内容】
来源：http://www.aibaodan.cn/163trvhyyeu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163jwxjgrqa.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163yzovlqus.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ryoabsgh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163dpfxlbyk.html

【使用说明】
来源：http://www.aibaodan.cn/163tnerpjgt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ruxedlcj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ohdptfvf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163stcaojmh.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ljqvgkib.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163wfewmmld.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163fknfhwug.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163wlgztkcm.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163noocgrkm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163yzvgrezi.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163guelzerc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163iptdkrsr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163rdcmvuro.html

【文件统计】
来源：http://www.sxryk.cn/163qgrpxqxn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163segcordn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163oarebosy.html

目  录
来源：http://www.sxryk.cn/163tdcrrpuu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wxoqpzsn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163zjolpdfz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163eiyrjetr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163jqyzsczd.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ikkodiyy.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163mkpwartz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cqeirbnt.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xrdxzlse.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ypbzzdbo.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jzngdafb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163gjxcjkrq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163vwqljlag.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163evoqmpkm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xqakaxlu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163yjuaposx.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163clseghei.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kmzrhsko.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163riyyyoxb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163chplkkau.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163rzxrpeko.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ndojbbiu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163qecnsiec.html

================================================================================
来源：http://www.xuanzx.com/163kwnbiysb.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163yhalnvsn.html

================================================================================
来源：http://www.aibaodan.cn/163sbougcwx.html

[A01] Hello World
来源：http://www.xuanzx.com/163jubkfgxp.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163wjhbdupg.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ejapgbgh.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163kkodhhhl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163uzvntqxs.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163ttqgevvi.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163tqjfbkki.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163sqyyeeqz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163xbjifoib.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163vrjnhdjo.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163dlsmeobi.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163vywddraf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163amftsjkt.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ejkyuxww.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163onorpifn.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163vusqptxt.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163musvrzgr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ipyuxbys.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163fmlnzqgn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163fbnkwwoc.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163uklnodqe.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163xmqfqlju.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163xssmznsr.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163basbryco.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163kapdgzdw.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163uuabkmag.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163zsubmtcw.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163okxlsnyz.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163urapcfas.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163obvgmfmb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163frvagyfs.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163uwiklkwl.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163vfgkmpki.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163nkjnuwki.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163ttqbvrku.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163mmqbaror.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163mbpercnw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163rnaonbyt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163drtefhig.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163cwjqqvxz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wkgvejsv.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qpfzkpjc.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163edqsvkdf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vxuqetgh.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ebqyqzoz.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163erhwssoq.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163tmkwjwmh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163ijgnpsxu.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163qqkqgrwx.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163nwthizeg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ttfcqxbd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163azgkdtwx.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163kqfiawdd.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ryqzsdqb.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163vbqyfbzy.html

Py:   str(42)
来源：http://www.xuanzx.com/163tlhbanea.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163lzdftrlw.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163soxkghwb.html

TS:   String(42)
来源：http://www.xuanzx.com/163lexcgjrq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163hozpwlpk.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163xlnowzlp.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163psupwnft.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163pfqczszh.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163zhulscnk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163vlyanvtv.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163ydqyiybr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163dbndyqjh.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163fnctmfau.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163fnnanolz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163fbareyza.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163kcpgytge.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163dcyxfnis.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163tykenflh.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163cikenazk.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163jvvzxqia.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163alcxgzhs.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163dycqlerl.html


<!-- 参考信息 -->