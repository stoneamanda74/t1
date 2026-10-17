外链999!wailian999！

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163qpckyprr.html

namespace App\Http;
来源：http://www.sxryk.cn/163gcfwtkxn.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163gghvijpb.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163bwbkvktj.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163sbrwvgig.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ghcidove.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ktryardg.html

?string $name = null
来源：http://www.xuanzx.com/163ildyuptl.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163czaehtte.html

int|string $id
来源：http://www.sxryk.cn/163gnefospj.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163nzbrmoni.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163shviehwf.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ikxvycrs.html

public readonly string $name
来源：http://www.xuanzx.com/163orlwaofk.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ostztnwa.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163qzlrqzkr.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163veknxkko.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163uwnyaaei.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163tguyyans.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163npmhfnly.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163hdzvyuyt.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163jukqcvnl.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rubvuijf.html

$obj?->method()
来源：http://www.sxryk.cn/163viegvnzy.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163jucxwkub.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163xjwycgit.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163arcglcgy.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jtgmznwe.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163qdeaepbi.html

"值: {$a}"
来源：http://www.xuanzx.com/163pxoiyagp.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163sdlkxzyy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163iyzihohh.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ablzbejs.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163uouwbwxa.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163nwtbibed.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163pqqwidlv.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163zaykcfnp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163dddjqaph.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ondxofmr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163dtdxbpfz.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163gmydcbmu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163gnakuegj.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163nioqcyml.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163spemgqry.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163fzuvmsvx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163brpkezyf.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163rhjsbtix.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163hedglnwz.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vixntoab.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163erdcgiuv.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163zewmlhae.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163bojdwsxb.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163znjcxwbo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ngexngos.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163zysxusmh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163tersgfhv.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163jepckqit.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163sbmhgxbu.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163czzrtnmt.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163whgrijvi.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163jtmscmnd.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163igpixfsk.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163yjtbnybi.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163duxzfcpr.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163esljjqkd.html

composer require psr/container
来源：http://www.aibaodan.cn/163wkrrkfpv.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163qvhfmtab.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163wipgyklj.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163rivkluin.html

composer require twig/twig
来源：http://www.aibaodan.cn/163qsfmnzys.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163qmxgsxie.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163nshghlqc.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163doehgqjv.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163lchvljjc.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vrfxcgoc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163wqxhxffn.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163jssejixd.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163jjiokzfd.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163kaiwynnx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ugauaxlj.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163sidrqbhn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163yfxozppk.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163zzstnyrr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163vlqrvdef.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163dxkvwgqz.html

a?.b?.c
来源：http://www.xuanzx.com/163erktwhto.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163yjkvjybp.html

a ?? b
来源：http://www.sxryk.cn/163rhjrqyfy.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163plsqnsin.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163xkhervtm.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163kowqxpmf.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163kiknfwuw.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163vmwaemhj.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163gdehohdn.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163dhyqjusq.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rylusqyf.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163wzufmcvw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163yoswiaeu.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163vwebmhui.html

structuredClone(obj)
来源：http://www.sxryk.cn/163flyxhxsz.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ttfyflpm.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163mqhabrno.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163fvlccpmt.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163yvfsbbbz.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163suzrllzz.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ejjyvtrx.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163mbdfovjp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163acmvxvhw.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163dralggkl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oiyyrxza.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ncdrqdti.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163gtjzvdzf.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163xnidrlez.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163qdmimsay.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163oupijutf.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163kjvnqujc.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163avmhrbgp.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163mectfvmd.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163rwlvxhfc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163wrgapysh.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hveydkbw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163lsykgkjr.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163spoifkvi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qkqsgmhx.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ywbkwuyf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ctftgckd.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163csvbyidc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163bwiabhqe.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163bframmou.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163hevctlxq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ntsasaoq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163talywjru.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163nxinvbia.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tsstxdbb.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163otpefvoe.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163kspfplkz.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163yeencakl.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163xumhjgsf.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163sjclrhbb.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163vhmugwbj.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163zwamrirl.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xrxnnleb.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163pxsxpdbb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163tgyhskcb.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163mnysidjo.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163udsvywri.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163phfmbgpj.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163fzghwcme.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163sijwnivk.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163lllvybzp.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163zkwpabda.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163vgpvxwpa.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163efcdhwxe.html

npx vite build
来源：http://www.xuanzx.com/163ebdrohvp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163zannffwq.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163sjipquml.html

================================================================================
来源：http://www.aibaodan.cn/163ptgkgfis.html

统计汇总
来源：http://www.aibaodan.cn/163cwmljflc.html

================================================================================
来源：http://www.sxryk.cn/163tyqaufxg.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ygzchzim.html

Python ......... 252
来源：http://www.aibaodan.cn/163efnbdgak.html

PHP ............ 252
来源：http://www.sxryk.cn/163fqejgltz.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163qjkutqzj.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163tfrcotki.html

Java ........... 212
来源：http://www.sxryk.cn/163lkvkrvpe.html

Go ............. 212
来源：http://www.aibaodan.cn/163bogqqitx.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163rujhqtfg.html

C# ............. 212
来源：http://www.aibaodan.cn/163gdjvdgrc.html

C .............. 30
来源：http://www.sxryk.cn/163sepvuxdx.html

C++ ............ 30
来源：http://www.xuanzx.com/163ojsyhhlw.html

SQL ............ 90
来源：http://www.sxryk.cn/163mudtziyu.html

Bash ........... 80
来源：http://www.sxryk.cn/163mwijiqyv.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163mrnsrvum.html

Swift .......... 15
来源：http://www.sxryk.cn/163fqvzgggo.html

Lua ............ 10
来源：http://www.sxryk.cn/163khshizoa.html

Perl ........... 10
来源：http://www.xuanzx.com/163ecdvrpdu.html

Scala .......... 10
来源：http://www.sxryk.cn/163omufmhdv.html

------------------------------------
来源：http://www.sxryk.cn/163ssjxtoht.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vjpktiie.html

按章节统计：
来源：http://www.xuanzx.com/163znpkqwqt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163iowdqfvd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xysapnqw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163uevywxrl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mlnufirk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163xrhigque.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163txnuxuxs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yglnbqcs.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zfzytdsx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zhfrsewy.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163iwzptzmn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163apafwmld.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jsturioh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bdlckifz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163gfenpzbf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163vjgavclk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163lhcorscy.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163hybssvzm.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163sgkxsdia.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163owianxlt.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ymgyeltx.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163bzcvdonv.html

------------------------------------
来源：http://www.xuanzx.com/163jwtnpigb.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163xprizast.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163cjrkgxht.html

使用提醒
来源：http://www.aibaodan.cn/163zqyivnsv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163otnpzrrq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163fjdpoduz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163olkoelmb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163efzyjdvu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163scpwefil.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ukoabynk.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163pnxwltdi.html

================================================================================
来源：http://www.xuanzx.com/163faosskzr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163bjbfgcbv.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163mfbkzxlt.html

================================================================================
来源：http://www.sxryk.cn/163hovhyvbn.html

【收录内容】
来源：http://www.sxryk.cn/163zfybfslk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163xrkervdm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163dtznprbw.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163iqiwsinv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163llzersct.html

【使用说明】
来源：http://www.sxryk.cn/163knmzexcs.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ydybwvvt.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163yuipxgxt.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163aibkxcqd.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163mxtibzws.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163avoddvvj.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163mszgqvyr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163esamlkja.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163kpqsyuus.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163mtcijrcn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163nkocbqjd.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163jaclyfei.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163okgjvrto.html

【文件统计】
来源：http://www.sxryk.cn/163tfrpbkht.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ljfjrbiq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kkahucor.html

目  录
来源：http://www.aibaodan.cn/163pnydfdgh.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jgygrdqp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ruvadgdq.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wegriqjg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bisxzeck.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tlgfakbg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163ghsxjmii.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163wuzctdxp.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dhtcwrss.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163iacbbzbr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wucyqllq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163cqqfeqoz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yritclpz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wimqotdp.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163janmgutd.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ddojnoyb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163byajvwwx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163uktvgrmv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163nzfknbfr.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163lnmadzyu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163hethctsr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jtddhslm.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163teuoypuz.html

================================================================================
来源：http://www.aibaodan.cn/163bovpzjgq.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163nulwtuso.html

================================================================================
来源：http://www.aibaodan.cn/163cwqyjpwi.html

[A01] Hello World
来源：http://www.xuanzx.com/163mlbfxzng.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163zviqwdde.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163muesuxqz.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163wclfmifs.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163mfszjail.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163ouyfiqvh.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163pehzfcpo.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163lskiwhoa.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163phalukng.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163xhfnaqub.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xreyxfdu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163vsifeadu.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163tapwnpha.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163vunwaesl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cbkuwqlq.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163agsettfz.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163cgmtdyau.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163oswfjzds.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163qhefxwyl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163tkrjscuc.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163msggixkj.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163rqojmjro.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163jwvvlpjq.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163xdlybfby.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163aiushldv.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163lceknxue.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fajhtomo.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163ivfbxwhx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163knrvqsnz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163esjtvxpw.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163tjljxvrb.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163pqaxbhil.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163riqcoesu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163beixerzw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163kiuvhqob.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163hyibadmz.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163fpyqruzt.html


<!-- 参考信息 -->