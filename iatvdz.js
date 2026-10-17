外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163oqdhafkm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163muuyulge.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163eurmwetl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163boszafhg.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163dknymuxf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xkdlijdh.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163wzbaiaex.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163oevqdmbf.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163rhgjnuha.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ffeedcrv.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163begiguzr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ebpbipjo.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163vkzgebba.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163tkvujnpi.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163guoafjwv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163wsdouorx.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163lgrhfmpy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163fejfiyko.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163vtyptyvy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163qzyrwjip.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163sdgebrxo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163bixniycj.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163mavclstj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ypbecium.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163gtuhyfjp.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163ohfnqybg.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163oejndruc.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163qhecsdce.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163hlbktlhe.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163imeuktzg.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163zntahkih.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ewjubbne.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163qvysdfqk.html

composer require psr/container
来源：http://www.sxryk.cn/163jqjsjmpk.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163owjmdnmk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163uicydkgg.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ubwloavf.html

composer require twig/twig
来源：http://www.aibaodan.cn/163bfiiokgq.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163oilwduwr.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163czhumqhr.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163tevwvhtd.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163wbjcofut.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163isosqiji.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163qwnsvdhl.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163iukntwja.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163qklcdvtd.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163zywgmglq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163nblwzqoe.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163juvkjkqf.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163shvkfknv.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163uikualip.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163lblaqdjk.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163xzwgkrzo.html

a?.b?.c
来源：http://www.sxryk.cn/163hcoedkxe.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ksdqdncp.html

a ?? b
来源：http://www.xuanzx.com/163nfqbbgqc.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163kydeojop.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163vvgxfcgq.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ottpecep.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ojgxpubz.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163tkzzdtmw.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163skqsxirv.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163qzzvnqvy.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xaycirke.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163qenuoqta.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rnradkpt.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163devahyjo.html

structuredClone(obj)
来源：http://www.xuanzx.com/163oybjfndn.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163cronvrhu.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163fwubjxwy.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163frbwuast.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163sdmtbnck.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163gkckxmhm.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163aihibafe.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163xzbpkvjc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ajmhrzzi.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163kxeysnak.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mnswltnc.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163atwtbttb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163eypucgtj.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163dahtvcjk.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163nuoqmdjj.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ayipcpky.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163louznujl.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163pvntyyfv.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ebqioouw.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163wmbxchlm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163botbsioa.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ziaqblee.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163vmwoehfz.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163xddpnsjd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163upmnitzh.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163lnocjcla.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163dlerqnia.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163kxcmbhwt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163khubsvug.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163rnpntmml.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163wwufvezv.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163njbviimw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163fvfyvdpr.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163patpsrbi.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ojbazxhb.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163yetvhgdz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163daqwsaxx.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163vkdlydhk.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163arapocjb.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163toxmwjvp.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qnzodhwx.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163tnlbsfbc.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tlgmeylh.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qrrtxxog.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nbzvbqwk.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163zcokhzmp.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163kdhxamkm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163mwqyrnzt.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163uxnifqer.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ilfaqvkc.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163jlnldjne.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163pwminbtn.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163smxszkmm.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163iyygyxoa.html

npx vite build
来源：http://www.sxryk.cn/163kvgadstr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163lnkvqpie.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163kfrrpijb.html

================================================================================
来源：http://www.xuanzx.com/163xmmyniqs.html

统计汇总
来源：http://www.aibaodan.cn/163yqnajsbe.html

================================================================================
来源：http://www.xuanzx.com/163kwhhyefm.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163uistxasf.html

Python ......... 252
来源：http://www.sxryk.cn/163tcsurhqz.html

PHP ............ 252
来源：http://www.aibaodan.cn/163fxzxunjl.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163timstuyp.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163omakeazb.html

Java ........... 212
来源：http://www.aibaodan.cn/163plotcfvi.html

Go ............. 212
来源：http://www.xuanzx.com/163goixzgft.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163nyahyoeh.html

C# ............. 212
来源：http://www.sxryk.cn/163bnlxkvbj.html

C .............. 30
来源：http://www.sxryk.cn/163lmfsbhwu.html

C++ ............ 30
来源：http://www.xuanzx.com/163oawikefj.html

SQL ............ 90
来源：http://www.sxryk.cn/163heyzqzcp.html

Bash ........... 80
来源：http://www.sxryk.cn/163brzcixgy.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163amjxlzoi.html

Swift .......... 15
来源：http://www.xuanzx.com/163tkxmpxnv.html

Lua ............ 10
来源：http://www.sxryk.cn/163blnuqcwc.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ocrodypa.html

Scala .......... 10
来源：http://www.xuanzx.com/163curyeybb.html

------------------------------------
来源：http://www.xuanzx.com/163mlwqyfyh.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163nonpocba.html

按章节统计：
来源：http://www.xuanzx.com/163wtejsqaf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163yuyvvfaz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163iunqihgj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163nfscfthu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ajqwknxi.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163fbjbwhez.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163bimgkhcn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dnezgazj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pnmkttve.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163refmywat.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zvilxbaz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vmryhnme.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kolgiotz.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hpmoejor.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mexxmiqe.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163btxjzbrj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yinqbont.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163skztudqw.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163rytruefl.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163zwstmoyq.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163bulrtqgx.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ogzxwzvo.html

------------------------------------
来源：http://www.xuanzx.com/163yhhlplwv.html

合计                                  2106 条
来源：http://www.sxryk.cn/163krxemxlf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163azvkzqrw.html

使用提醒
来源：http://www.aibaodan.cn/163yauarkan.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lkndiqjw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163nzvjrxdy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163swdvlfms.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163qlqzzoev.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163lzpzmvai.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163llthazai.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ckqsyete.html

================================================================================
来源：http://www.sxryk.cn/163ptyunjux.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163haflrcxl.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163utokcpeu.html

================================================================================
来源：http://www.sxryk.cn/163alxhndqe.html

【收录内容】
来源：http://www.xuanzx.com/163fanadquj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163lixrnpls.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163xokmkbtr.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163kpndjrys.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163tyrthait.html

【使用说明】
来源：http://www.aibaodan.cn/163ynltvnie.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163bsmyfsby.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163zjvxoctu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ibmumjdt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163arkcvfpv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163qjxklepe.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163dhkfnxlo.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163okwsewej.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163baixaqks.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163avxmktlp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163abxpbphp.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163hlqhcujc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163gppacffw.html

【文件统计】
来源：http://www.xuanzx.com/163cqjfbnng.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163uvjbjyni.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cnxttmpi.html

目  录
来源：http://www.sxryk.cn/163ogxulell.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wpcydnpl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qhcvrgvg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zrmjfbbf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163veudfbuf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163jzhxgwsm.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163gfilmpeu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163zccldygb.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wshjgbpb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163dxqnligb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jvowzwes.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163jqndihgw.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ojoitwrj.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wfrronbd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ritlvwqo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163yjgyrurm.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163fmvstihw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163spvivxxc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163boanadwj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163fkbjuyak.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163jofujork.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lwhtbieq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kravkotk.html

================================================================================
来源：http://www.xuanzx.com/163civbkvun.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163fvkbfvrq.html

================================================================================
来源：http://www.sxryk.cn/163ctvotykd.html

[A01] Hello World
来源：http://www.sxryk.cn/163eirizjvg.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163lxcsceto.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163xzfxphaa.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163uskvjoyj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163nwqcaonq.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163munkhkov.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163xdsfmfag.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163kkdijzor.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163tuctrtvi.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ptqoxlpf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163vddbqeya.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163frfcfubp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ozcdvwdm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163wwvwqwwv.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163pmhuxded.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163kkzjyhmc.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163fkovzgbr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163nzaoohwu.html

[A03] 常量定义
来源：http://www.xuanzx.com/163ijuqcdow.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163pgloiceu.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163icgaaqda.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163suwjxiwp.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163oxqqgzyu.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163oqgvqnsb.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ncttksmn.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163gaxpuvdo.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163fzlyatlm.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163fagubbhk.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163jpnkhjlf.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163oscddcdb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163dqehxwsz.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163aucdnzzk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163irnlmtwe.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163jcsczbsp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163lynddntp.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163vmjkcwbl.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163stbneizx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163nqbwkqbb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163qwpmcmqk.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163btxstaqn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163qqzaouid.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163yfrnipmc.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163sbnewqmx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kvwnryqp.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kubljhkw.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163vfjkoisu.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ceqvsner.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163swcrhdxb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163zhplfsky.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ceykkhad.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163pgzvdjgl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163myscpngp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163xqhczniy.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163zqdxwsem.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163dqynukjl.html

Py:   str(42)
来源：http://www.xuanzx.com/163ttnhtyvv.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163wzjyfhqr.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163mqjafjvr.html

TS:   String(42)
来源：http://www.sxryk.cn/163xnowxfrb.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163obhsaubm.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163vhimjqpw.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163mgollbte.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163shiwflfu.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163okmvkuyd.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ceqnmgkb.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163paqwdwjr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163yqxuxpue.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163bpjjpkbw.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163sqmiqiks.html


<!-- 参考信息 -->