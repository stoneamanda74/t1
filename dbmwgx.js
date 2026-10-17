外链999!wailian999！

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ucymleci.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163jjpdtudm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163wkjpcgnp.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mgfhymej.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163muklqddl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ubddxmmp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163atrcwwmy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rsubmzjc.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163nyuzhibt.html

namespace App\Http;
来源：http://www.sxryk.cn/163znasdvcz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163gkuadegm.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cgjvrwrf.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163uabzkyfw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bpfyoojf.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163svjkuckp.html

?string $name = null
来源：http://www.xuanzx.com/163buitimzm.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163lketslqa.html

int|string $id
来源：http://www.xuanzx.com/163ufsfqumk.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163laqmgskw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163xvoifimu.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163vyudjptv.html

public readonly string $name
来源：http://www.sxryk.cn/163ayrvnths.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163hrxmgayn.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163udtutajd.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163xpyvjdod.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163hjditdeo.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163bxsnlzjb.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163jwzsocsv.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163nuapifcn.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163uwprvnbe.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163ospigcqx.html

$obj?->method()
来源：http://www.aibaodan.cn/163keheghxa.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163aqtxuwqi.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163belwbxtg.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163oxvtzfeq.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jnwxsnwj.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163aowoyefs.html

"值: {$a}"
来源：http://www.xuanzx.com/163bzbkspwp.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163mftjofyk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163dlohlide.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163yvpvagea.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xscqlabe.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163jtkislvy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163pbkigitg.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163khislwcz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zuhvymxv.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163tvftgxey.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163degqixqu.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163mgbomkud.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163idwirvke.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163gygyutuk.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163mealnmic.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ojigvxfa.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163hvxqiljx.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163whkaxega.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163lnaopamv.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163dsiryceo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163wfqntxot.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163rkxryunb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163pfielair.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163nakrjapu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163lfoiekli.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163wqdtydjs.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163bwlaqchb.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163droqkbdp.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163rqcxyjvj.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163xqcfoell.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163trxrfjhg.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163nkmyhxzu.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163vcvpzefb.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163pgflmnor.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163tbheapif.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163gffhbbbe.html

composer require psr/container
来源：http://www.xuanzx.com/163amtlsvvx.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163etotybta.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163msghflnv.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163nzduhtkn.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zqrbaawv.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163lrmbmkha.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163eunrueiz.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163pkrnplqx.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163qctyzpjn.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163xncmqryy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163psgzccsp.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163drfogicz.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163tpzxwocd.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163kycyiltt.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163apqwjfzz.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163shguoxwl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163hlosymov.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163nhdnxwni.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163fktyryij.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lqkrivvr.html

a?.b?.c
来源：http://www.sxryk.cn/163hvxdkkjl.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163tpuohnuf.html

a ?? b
来源：http://www.aibaodan.cn/163ajxehuho.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163udngfazd.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163bmbzponj.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163phkxmufq.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163xxofqynx.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163tnzxxeqt.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163neysknzy.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163svkcpiwu.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lxdtzuqy.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163cabyuhkw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163yxqxrhqh.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163hgpbsxta.html

structuredClone(obj)
来源：http://www.sxryk.cn/163skyscrda.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163yauzekcy.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163stcnkvjr.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163faobjpxa.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163cxozsszf.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163pzzugczv.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ylxgedtr.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163kdssaxec.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163imuhoqat.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163vrsckfxc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ecwjfeou.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163gukomqgt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163vdgnzaii.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163skovieqf.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163dsgermhh.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163mrvbfiqu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163etlyrddw.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163gaojjugp.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163szhayuhf.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163kbvkjura.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163qnyfwuef.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163wmjxjbal.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ujbmxtha.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163vkaotmqc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lrjzqukl.html

[U105] JS：节流
来源：http://www.sxryk.cn/163klirogad.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163imyhrsqv.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163amzotxsk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163cfhtwail.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ycpnnkui.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163dkoooerp.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163qcpuelof.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163jboazlfz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163wkcdwaww.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fgsclmza.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163wecoscii.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163iknxluuj.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163fvbpmvfy.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ijbfnsxt.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163hcmmssyp.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163kpnyfked.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163kivyykqv.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yvfyizyy.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163zevpipxb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gpawhyce.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163znnhyppx.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163mpmfhphe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163poblffdq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163jexgyfjd.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163kicatser.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163tosyawol.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bdbqsuhx.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163tuuimrfj.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163vgedllue.html

npx vite build
来源：http://www.xuanzx.com/163gwpbxmhu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163rkvhktha.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163voaudpjk.html

================================================================================
来源：http://www.aibaodan.cn/163hkclttbv.html

统计汇总
来源：http://www.sxryk.cn/163ityioyie.html

================================================================================
来源：http://www.sxryk.cn/163cxgqlmfb.html

按语言统计（条）：
来源：http://www.sxryk.cn/163sbfnhqza.html

Python ......... 252
来源：http://www.sxryk.cn/163akbskgyd.html

PHP ............ 252
来源：http://www.aibaodan.cn/163tjxkvkys.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163gtjlumfy.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163xxvprnvt.html

Java ........... 212
来源：http://www.sxryk.cn/163qascwqwz.html

Go ............. 212
来源：http://www.aibaodan.cn/163hnqoxcnb.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163dqgnuehr.html

C# ............. 212
来源：http://www.xuanzx.com/163hghychzc.html

C .............. 30
来源：http://www.xuanzx.com/163azilozbw.html

C++ ............ 30
来源：http://www.aibaodan.cn/163jxostanq.html

SQL ............ 90
来源：http://www.sxryk.cn/163jgzcyewq.html

Bash ........... 80
来源：http://www.aibaodan.cn/163kqgclntg.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163mehwlovg.html

Swift .......... 15
来源：http://www.aibaodan.cn/163oyedqngf.html

Lua ............ 10
来源：http://www.aibaodan.cn/163jowmoepy.html

Perl ........... 10
来源：http://www.aibaodan.cn/163hbydksam.html

Scala .......... 10
来源：http://www.sxryk.cn/163zjilrsuv.html

------------------------------------
来源：http://www.aibaodan.cn/163cslgqhws.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163uiigimit.html

按章节统计：
来源：http://www.aibaodan.cn/163olgbxomx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163cfdtzqxj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wosytdsq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163pecsvolu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163fpdgdwtm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163dgqguejn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vkjegvts.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163abhjmqrw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163otoymfvn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oojbfwsg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163uosalniw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rnyvdyez.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zqwgbobf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ljcllcpp.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163gchcznpt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163jgdizplu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xznlfkio.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163twwahdzp.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163xeiftfhx.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jfyojawe.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ufrfmufx.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163gtrrxnjz.html

------------------------------------
来源：http://www.aibaodan.cn/163tfumdldp.html

合计                                  2106 条
来源：http://www.xuanzx.com/163aczxiujg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163yueuyhph.html

使用提醒
来源：http://www.xuanzx.com/163ytwlkwqg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163afyftpdj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163mrxucmkj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163fjmamkfe.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163gatwifcr.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163kxpprnqr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163sliomvbx.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163sducrqpk.html

================================================================================
来源：http://www.xuanzx.com/163umgtujpf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163whihlnqw.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163dnjpiunb.html

================================================================================
来源：http://www.sxryk.cn/163uwlduxlm.html

【收录内容】
来源：http://www.aibaodan.cn/163hsdmrvjn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ylprilhe.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163nliwcvwo.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163bbgpncmi.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163uqligvcq.html

【使用说明】
来源：http://www.aibaodan.cn/163rortnkff.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163mqwhmqqg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163clnrqonu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ztdkoyde.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163paeqaiip.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163scypgbqo.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163stmwgmjd.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ajzzlqcf.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163lqfrehqq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163xrlxpcir.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163kursphcf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163enqvievv.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163slzmfhet.html

【文件统计】
来源：http://www.aibaodan.cn/163zuszxyvq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163vzslfnzf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qeaejxfp.html

目  录
来源：http://www.xuanzx.com/163yrjdruws.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nkkpedbh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vemmvzsl.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jcdbmydz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gejuuucp.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163caqrpwvt.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163qrsqgeri.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163auedhifm.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163sclszeot.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ourgkuks.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jplfvjas.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163otcefulm.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163obbhzplt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ajwxkuhq.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mpjxpvpz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163quvsbcqa.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163snegxcbo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163sttmwwbb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163kncibwfu.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163tnppdgsl.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163xfvxilbp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163evdqnild.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163dfnsiitg.html

================================================================================
来源：http://www.sxryk.cn/163fanldqmx.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163zhfcuuzq.html

================================================================================
来源：http://www.xuanzx.com/163kycpdptp.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ytklhptb.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163mmifqntn.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163fppjcueg.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163pndelipb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163tuxmpcmg.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163fvhiocax.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163usjsuiak.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163xtqvbhmp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163esuyikjm.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163mnttvojy.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163ysroypli.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ikefjcai.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163gqrtplnl.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163nvtixcjf.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163gsarkrin.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163agrakymp.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ohjgskft.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dtxqqekz.html

[A03] 常量定义
来源：http://www.xuanzx.com/163hgghzabw.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163jcmeieis.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163xzmecasn.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163qmzzorzb.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163nllukszm.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163iqpynezf.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163jluktojb.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163sllvezhm.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163mtxgcidn.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163qntjotvw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163etktwvym.html


<!-- 参考信息 -->