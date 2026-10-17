外链999!wailian999！

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163acclwlqe.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163zfvlgvem.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wabdojod.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163xbqnzezh.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ygrxxvoz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ipnnhyac.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163pnjbzztj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163arxgrmrs.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163naikktqm.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163huzwqxxw.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qtuhqkdr.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163zjsfutuj.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163gunswpsd.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163tgaxlkfj.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163qrpblnvm.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163vmhrppdy.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163zzymxwzn.html

composer require psr/container
来源：http://www.sxryk.cn/163tqadbfkh.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163qxffmfaz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163omglayxb.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163wmfayphy.html

composer require twig/twig
来源：http://www.aibaodan.cn/163patiakiy.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163maxpgvku.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163boewuiug.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163bdajkuwd.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vykpizfi.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ltzczpmg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ksxpooav.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163iwmorufw.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163vpnnqdlz.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163wgrcyfno.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163mwwmwwaa.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163haoluuys.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163cjjqqoju.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163qnwebbks.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ssbsiayx.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163wmseatci.html

a?.b?.c
来源：http://www.xuanzx.com/163knnbrbdq.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163andygqal.html

a ?? b
来源：http://www.xuanzx.com/163zcywqswc.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163xsvuuodv.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163sdyjcppk.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163wvcomsuv.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163uwtocdou.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163wrkoxitn.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163npzliojn.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163amxjmekh.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jwffsbik.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163nrjjzcso.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163zegclzhn.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163wutgajcc.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163gkpzcoct.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163wqmetwpf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163qwrzkost.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163pvqcnrif.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163hhviwwtb.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ppotwvwy.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163dsvvipvw.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163susoarpn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xgimzavk.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163iztqgmpv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ywxugsuc.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163hlmetpyz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ejcmnkjy.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ktiaoeen.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163jwsnvpjd.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ejdfluoy.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163hmccmfhp.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163icthieto.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163wcvzqaxr.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163fvcuinrj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163gsadysfm.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163aunpgmmr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163bnzavxvm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163titwqnoe.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ltruhufb.html

[U105] JS：节流
来源：http://www.sxryk.cn/163kvwzjpig.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163nhmmghra.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163duaxrvpn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163hqfbleiw.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163zxcsnquv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ktleslhh.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163lwzfuvme.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163xgtjaqhd.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kwxsjtqx.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cscoxubk.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163sfwyxqnq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163qimedles.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163vjakwoqo.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163rvskzrfz.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163frlvoauv.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163xpblqlpb.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163wxcrozmj.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vjbjftmf.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163dumocrrd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ftjjfxmu.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163xrnblsrk.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163mhkqtuai.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163klxvdsgs.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163hnpysizs.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163cpwoatoq.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163kvxcnnrh.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163qxxjdiae.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163rtasmgsl.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163bwmjgjst.html

npx vite build
来源：http://www.sxryk.cn/163xuccmthl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163utvsytgz.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163hweftvtg.html

================================================================================
来源：http://www.sxryk.cn/163pbwowtog.html

统计汇总
来源：http://www.aibaodan.cn/163mrnmutda.html

================================================================================
来源：http://www.sxryk.cn/163yhrevuwf.html

按语言统计（条）：
来源：http://www.sxryk.cn/163vbeirqxd.html

Python ......... 252
来源：http://www.xuanzx.com/163usbgdzmt.html

PHP ............ 252
来源：http://www.aibaodan.cn/163wwofpned.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wozwwztr.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163devanror.html

Java ........... 212
来源：http://www.xuanzx.com/163vlsxspkh.html

Go ............. 212
来源：http://www.sxryk.cn/163wxpizrml.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163warsoorq.html

C# ............. 212
来源：http://www.xuanzx.com/163hdtkqnvl.html

C .............. 30
来源：http://www.sxryk.cn/163mgizlmcz.html

C++ ............ 30
来源：http://www.xuanzx.com/163bgryqjdh.html

SQL ............ 90
来源：http://www.sxryk.cn/163trwkjlyd.html

Bash ........... 80
来源：http://www.aibaodan.cn/163hzkiwajj.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163auobetdl.html

Swift .......... 15
来源：http://www.sxryk.cn/163seejtcpt.html

Lua ............ 10
来源：http://www.xuanzx.com/163zllpbogz.html

Perl ........... 10
来源：http://www.xuanzx.com/163ytjkgxse.html

Scala .......... 10
来源：http://www.sxryk.cn/163acmbehjr.html

------------------------------------
来源：http://www.xuanzx.com/163erzirwxs.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163hnlphont.html

按章节统计：
来源：http://www.aibaodan.cn/163ssqnvyag.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kuwoksne.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mnotfpso.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163eunmkgrt.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163clxekhza.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163juogghxz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mblvqpwm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bxlavyrb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lecicwev.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nomjxyyd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163haliqspr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pwwbiadd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163aqvczdku.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163eywyibcl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163tyttbaze.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163hxfgsjiy.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163euvmerky.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163mlcqgsty.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163nrtbeglk.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163jdgvgeeh.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ytghxpau.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163crsbsjjc.html

------------------------------------
来源：http://www.xuanzx.com/163cjjbnpgu.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163eclellmq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fnqjrxay.html

使用提醒
来源：http://www.sxryk.cn/163uhohpxab.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xurnqkfa.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163zdxntyao.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163zrpzmhzo.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163vdoxpjqt.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163qiinxxcl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163swpktmwh.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163jnhtifdf.html

================================================================================
来源：http://www.sxryk.cn/163cwroevqs.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163oosvmmdl.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163yoscklps.html

================================================================================
来源：http://www.sxryk.cn/163wngelnuu.html

【收录内容】
来源：http://www.xuanzx.com/163lfmgguoy.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163weffuveg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163udyxmubu.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163bznpictu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163hpcccxcx.html

【使用说明】
来源：http://www.aibaodan.cn/163jiqbqvgq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163emdycjnc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ffyrhhps.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163tpvuwbab.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ffxramck.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163uxhqndzz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163tdkldmfc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163oscvkexr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163btgosnzs.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163xrydajps.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163phluqegl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163aqxiikbw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163mddqoopy.html

【文件统计】
来源：http://www.xuanzx.com/163czbvdgto.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163cwrgtsrm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nzpzbnol.html

目  录
来源：http://www.sxryk.cn/163wkwcqhwg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163swzyeflx.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dplsmrlz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163nbjgkupg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lkhvswsl.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163yymtwaub.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163hhfihbhi.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163irnbdxju.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ckpfvsya.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163pgdztbdw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ihnpozhl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163bwlszqkk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bzvbnhrr.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ijlvmufn.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wedfgyjq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163jnpnljkk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163mkfslvzd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zodkfbaj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163gasjokeu.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163hnsucjmk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163zigayrni.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163yyruddym.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163quvhezde.html

================================================================================
来源：http://www.xuanzx.com/163ttssyikw.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163yhdrbyib.html

================================================================================
来源：http://www.xuanzx.com/163rrcjnaqt.html

[A01] Hello World
来源：http://www.xuanzx.com/163jsyhnixs.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163xzcmafih.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ymjlzpdi.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163xhjjjopq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163mshxyvxe.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163oiogcgtw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163utuxthvl.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163xztkrbnd.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163cefuttli.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ptbdrijk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163nvvipkuu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163oybprjhe.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ivoasblt.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163dvlnlcwz.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163azoejjeq.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163vwanspwc.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163xgedjkrs.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163tysfhrsd.html

[A03] 常量定义
来源：http://www.xuanzx.com/163txievaxy.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163gpofpffi.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163rfzxugto.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ucskqdzw.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163tribqdvd.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163pundusmh.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163qnyvecwl.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163ngkqgnwf.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163jpnkowau.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163mzpkqjjn.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163nkyvhfpe.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163nxtdxtev.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163eggehytt.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ygzrasfl.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163irvexpct.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163vumcdcxf.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163jzzqpmap.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163fykxtjqd.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163hfgiwxil.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163rsghacrp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163wkbmduzv.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163usarlkfj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163suzoyopt.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163yerdhknf.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163rhctwwgk.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163raxdcgla.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qyxifymv.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ydmvenhr.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163vqblhhvg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163bcgrebno.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163wyssnvgf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163pkdxafby.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163jnofltdc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163xcmohmrn.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163dbqrywzl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163uixobkkj.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163hnjvjkvq.html

Py:   str(42)
来源：http://www.sxryk.cn/163xatwwfnt.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163uivnedoz.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163ibgggyoc.html

TS:   String(42)
来源：http://www.xuanzx.com/163ggeqqnxs.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163uhwhsuin.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163xrjhbwjv.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163airvlgta.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163jznfibtv.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ppkercsh.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163fdvgkolc.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163yoraumxy.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163rysjmksl.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163ovnhrerl.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163mwqgmmns.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163olbqsobb.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163nvexjjxb.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163nmmfcdde.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163saeiynhu.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163wefqigqn.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ldmdduag.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163fjufvblu.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163foyhomqw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163kanzgbou.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163bwjlipzo.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163dpzeajbk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163ytrepsre.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163plfhsnii.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163zftxkykn.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163lfbhmpgx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163pltpqgpa.html


<!-- 参考信息 -->