外链999!wailian999！

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163jjnfcrqy.html

"值: {$a}"
来源：http://www.sxryk.cn/163sdvfaapx.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163qdbnapte.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163koojghpy.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163bvqkmbee.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163prduoycd.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163opvspdcx.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163dfpmmmge.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163cvnrznqy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qumocubm.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ornmukjn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163zulhvnse.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163yhcdtfzg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163cmsfuxjf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163edqduroi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163jenmrink.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163sbudwogx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163pkcpybxq.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163tdvepzat.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163optrskds.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163lirxjulz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163xzkljntj.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163kplyuafr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163snsvovxf.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163cdqhqjvv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163rvmvswfr.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163cxkmdzyh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163pmrgcljt.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163tokjkvix.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163taqjjwie.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ydnqvjuo.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qpvubdve.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163shliomps.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163vbstorvj.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ncevajld.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163bwggqjhr.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163erhynhei.html

composer require psr/container
来源：http://www.xuanzx.com/163nvjpolva.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163jxjdmdjz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163hlwsfstd.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163dnwbycbb.html

composer require twig/twig
来源：http://www.xuanzx.com/163pxxftwvv.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163slogbhui.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163yirvndsa.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163bkyqmbzj.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163rwyxqhst.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163jxbttuau.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163jiqfncka.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163srffpbkn.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ybqysxci.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163wcfuempj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163iwkgeduz.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163sfgzvrnq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163tceqbsms.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163rdithmgm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163awhywhxx.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ivubzlei.html

a?.b?.c
来源：http://www.aibaodan.cn/163woyjsbir.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163zmlovxxj.html

a ?? b
来源：http://www.aibaodan.cn/163uqtypine.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163wevqjain.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163vbntemnl.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163wysrljzp.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163gtpmjftc.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163stkvvgki.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163bjfyibkc.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ajnhboqn.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tdhgzzxr.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163mbjlyznb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163zamncaug.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163oxaklnuj.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163eawyoart.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ybcgfuhf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163nuzgsmeg.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163xupeaboy.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163jbjvkezp.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163kobaszlw.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163xselyrfr.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163rctvuhxw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rqnalcyq.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163xuvrujnu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jzlultpm.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163vyklficw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163tugdfjid.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163rndrviao.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163xzkaasie.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163cmmwxdhm.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163zpixyogd.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163vobegqit.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163cspogqpu.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163eqiyofxz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163buspyoxu.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163oqkwlqiw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163czvxvhqn.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163jjzklrlx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rihieahi.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vqrubkgj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ecuswmkm.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163oeknytye.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163dnppgrlt.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ykkcszjs.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163pcfwmmwn.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163taratrza.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163arsngfxc.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163eaxmpuoa.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163nxefkwhi.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163xogaorgq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163iyfhiytj.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163tczlkitt.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163pfnplsah.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163phekjtra.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163edxzqfgk.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163vpmahpii.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dyhoiwpk.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163decygqes.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163edtqsroq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ekroqvpy.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ekwybxdy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163mxuepxqt.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163lyhhfbxq.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jpeumzsx.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ptyazwfa.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163cnyrfbtt.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163zbqnpwnt.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163oycfmikm.html

npx vite build
来源：http://www.sxryk.cn/163wczperjq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163vsoaoghe.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163keoytygs.html

================================================================================
来源：http://www.sxryk.cn/163yolnwugn.html

统计汇总
来源：http://www.sxryk.cn/163hifctngn.html

================================================================================
来源：http://www.aibaodan.cn/163lvszfipt.html

按语言统计（条）：
来源：http://www.sxryk.cn/163nlzqantm.html

Python ......... 252
来源：http://www.xuanzx.com/163csujqdno.html

PHP ............ 252
来源：http://www.aibaodan.cn/163xsiodcyf.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163wihpyswp.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163kffqfyqp.html

Java ........... 212
来源：http://www.aibaodan.cn/163ixfevvot.html

Go ............. 212
来源：http://www.xuanzx.com/163yhgapozg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163pkmlzoiw.html

C# ............. 212
来源：http://www.sxryk.cn/163iawwglmb.html

C .............. 30
来源：http://www.aibaodan.cn/163vqdnkgap.html

C++ ............ 30
来源：http://www.sxryk.cn/163bkkhruml.html

SQL ............ 90
来源：http://www.sxryk.cn/163xcmipgpa.html

Bash ........... 80
来源：http://www.aibaodan.cn/163cykzdzzt.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163mqcxeacu.html

Swift .......... 15
来源：http://www.aibaodan.cn/163txftukqo.html

Lua ............ 10
来源：http://www.sxryk.cn/163ezmcclsi.html

Perl ........... 10
来源：http://www.aibaodan.cn/163hykfvxxd.html

Scala .......... 10
来源：http://www.sxryk.cn/163napidiqi.html

------------------------------------
来源：http://www.aibaodan.cn/163aeqhryca.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163xlnaeqfc.html

按章节统计：
来源：http://www.xuanzx.com/163fetwcxad.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163lckwnbyp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nyxiazjw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ficmfwzt.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163rgjwvdzn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ppmhxdox.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cowcfyhs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ocjhqnec.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ebbonnla.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ecqynocf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163qfottwuu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ksxirbrs.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yaphewxj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pavzvbqf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163lgizulkr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163pvwxphlz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yvrdgftc.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163bopjjcxs.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rjebizxh.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163zyviifal.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163hewsheim.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163piasaqij.html

------------------------------------
来源：http://www.sxryk.cn/163ewbpowzs.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163tkpdqlxk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hemqxnmp.html

使用提醒
来源：http://www.sxryk.cn/163quoqqdlp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vbwlnjzd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163wrzovrvp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163bwowjwnx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163goplimng.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163mdsthiau.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163onhajuep.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163yqjtwdxn.html

================================================================================
来源：http://www.xuanzx.com/163ynuynfkt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163tekoxsko.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163yrmhdwkv.html

================================================================================
来源：http://www.sxryk.cn/163ybehqoio.html

【收录内容】
来源：http://www.aibaodan.cn/163hvmuhhdd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163dyktqqap.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163kygvlcix.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163zanqvitu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163jgotcxao.html

【使用说明】
来源：http://www.sxryk.cn/163sfgekbhw.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163gneednya.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163xozejgxy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163vyyftexe.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163dllbrkbn.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163xhgkkkau.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163nsetdsdq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163oevkqjyw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163tfkicsrw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163oqtclwzz.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163wsgjkpxg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163licbklzd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163zlmoxiev.html

【文件统计】
来源：http://www.xuanzx.com/163mqxtfegh.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163zfzuyzvw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gvdsgqll.html

目  录
来源：http://www.aibaodan.cn/163jbgckkkv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wsymnazg.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163rvoyugvh.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163btzvairq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163soiloqdt.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163fcbncuby.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163lhyruayu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wokwxbgk.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bhjmbwic.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163qogpvufs.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lyocbnzz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163rzhnvxbj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ndgeuwyh.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tpgyetmd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zpxdipmy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ixuovfmf.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163egqvpzvr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sgxouhdv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163nwkbfbvm.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163decrcifz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163glxllocg.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lkudseyc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163oipihrxq.html

================================================================================
来源：http://www.sxryk.cn/163uwyfcjvh.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163qpdxbsbr.html

================================================================================
来源：http://www.xuanzx.com/163lptazuda.html

[A01] Hello World
来源：http://www.sxryk.cn/163edzpksuk.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163aacsxpdr.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163orcekysa.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163lvruxbba.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163krlbvxuw.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163vkeesagd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163rsalwgbo.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163guaxxoyk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163yhqyybjj.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163fqfsxmnw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163wyjhwsjj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163ibmchtlr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163exhlxqls.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163gwonwjnd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163galpjpsp.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163krzsvldo.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163lsmvtcdt.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ewpynepf.html

[A03] 常量定义
来源：http://www.xuanzx.com/163jbmwzykk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163fgaltwuu.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163lyyfbcvb.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163nbnqsiyf.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163wognfxqi.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163ylhhqsjl.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163vlmleixn.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163ztfqjvki.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163vtfcyqnk.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163zglxlslq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163keacazyy.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163rbkbekay.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163rtgkugns.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163pydemovk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ysvhnwus.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163ogfrhbyw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163hxlivtqe.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163rcymgrax.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163mdgvqyiv.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163onjogidg.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163hhqidxlq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163saypnyeh.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163twmfftqi.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zbrsnung.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yakmvvbv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tiqifucq.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qcvbzawm.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163bfihqacu.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163hcnuronh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163ivuqhzef.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163fveecvgz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163hugxlqrn.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163tqtkcdkf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163hhutijub.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163rbvsmnom.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163yrugofft.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163hqwgqhha.html

Py:   str(42)
来源：http://www.sxryk.cn/163wxburwnk.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163qtsagebo.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163tzicsrzr.html

TS:   String(42)
来源：http://www.sxryk.cn/163fyqomrrh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163xwrgqnip.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ocgpztcu.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163gannnyql.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163zhcqruhv.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163dmpxipaf.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163sjsenwhy.html


<!-- 参考信息 -->