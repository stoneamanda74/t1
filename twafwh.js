外链999!wailian999！

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163uwvoulxx.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163fdiugdbe.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fdkrpfvo.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mofnrahm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163rvnavqub.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163bubopnwf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163kqdyueon.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163bdvtaprz.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163oamkamdd.html

namespace App\Http;
来源：http://www.sxryk.cn/163uquvnbmw.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163mujgwoab.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163fxmrrbcc.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163mgrolzmi.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tsiupcnu.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163lwtskixh.html

?string $name = null
来源：http://www.sxryk.cn/163qhzypbte.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163dhwlpixz.html

int|string $id
来源：http://www.xuanzx.com/163qcmmfrqe.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163uvhqsezi.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163xksjfyya.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163rfjwkzez.html

public readonly string $name
来源：http://www.sxryk.cn/163rvulzbfn.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163rsunsjea.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163mvawaaxv.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163avgestnp.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163hccqxxjq.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163zvxhkrfb.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163jxyzlcow.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163wmrxgwbo.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163jnfgtkdr.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163bdovwvqy.html

$obj?->method()
来源：http://www.sxryk.cn/163spjdivuu.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163zaufvhfr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163jadrljav.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ofpyvwrp.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ywshlpgi.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163spqpzazi.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ibywlnir.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163wygndmqi.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163gflwbtph.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163mwwirnka.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163bdiucjkj.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163vhfrxtyk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163rlmuffxc.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163wncrmmxt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163foxxqods.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163qppfhuue.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163axqcstei.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ogggunal.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163szwsmmos.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ubnwvfid.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163wghmtfcg.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163lcbqwkci.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ngravlpl.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163gftogtbg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163pveaogpq.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163tpxjheoi.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163wnrnzotb.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ylcfloso.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163jvlzmkxb.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163djkxsjxz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163qdefajpz.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163eacwvkax.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163bnxaqgzl.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163jrcagsue.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163uafrkmzb.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163wgovfpzw.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163zleuirgb.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ihpkhblv.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163qdsaatmw.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163bebaxrwb.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163acsrzgqv.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163cfyagkvt.html

composer require psr/container
来源：http://www.aibaodan.cn/163aljrqqqt.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163uwejxfyg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163vuckpoyp.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163aurfnrwm.html

composer require twig/twig
来源：http://www.xuanzx.com/163dejnothh.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163rmohddbh.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163zpybcrua.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163tudnehww.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163fxtwsmlq.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ofgjunwn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163gjhmumya.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163snozvlpi.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163iglvvdza.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ulwivgft.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163bezygees.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163pbfasitx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163zgrsabpk.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163bnfauftv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163hvvgreop.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163gzojvoki.html

a?.b?.c
来源：http://www.aibaodan.cn/163rnopmnhy.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163recahtat.html

a ?? b
来源：http://www.aibaodan.cn/163xznhohse.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163prwxzgaa.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163mysbprxn.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163hguayifb.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163evnodycx.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163keildtlc.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ungcaswd.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163lmhbdfat.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cktossax.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163zzzaoblv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163xdfzjhmi.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163jgmswodf.html

structuredClone(obj)
来源：http://www.xuanzx.com/163vjcutcfm.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hawfreoq.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ijdoypgs.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163pvgtwlxg.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163miearwik.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163yqmlspod.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163lxielsut.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163qjvsbcqs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xdlmrwiu.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ktlnladn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hqualugk.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163nqytmacx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163leuzzygb.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163oucfgiya.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163bcmlendn.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ypxgyvgy.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163zvsldhrs.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163kzvqizqe.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163oiufuamz.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163meknmdxs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163lpyqmyyl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163egdatyxo.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163vrtzaica.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163trrylzcz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fpxqbfmc.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ewqbtlsd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163lusuamdx.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163gzlcxmzd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ryjqfwuq.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ycjjpybr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ekslunrn.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ulwdzfzq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163kxspmlki.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163whuquvqm.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163muynmrjh.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163kfpxoqlh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163psqrwmzc.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163woayidjo.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163iazgapyh.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163mbjuehwl.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163mxmrtrnb.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163znngbyzl.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tplbkmam.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163owxbrstp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vkoyxolq.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163sksfcxfc.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163fijwlabm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163oabwxoyg.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163watihlep.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163xkqwfpoo.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163wzoxomhw.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163gzenkzse.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163rtjddzla.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163uwzwsoym.html

npx vite build
来源：http://www.aibaodan.cn/163fvpwnzua.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163izfxzydc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163eibxapzd.html

================================================================================
来源：http://www.sxryk.cn/163wwluewpl.html

统计汇总
来源：http://www.sxryk.cn/163dqaonvvd.html

================================================================================
来源：http://www.xuanzx.com/163nmsxxbop.html

按语言统计（条）：
来源：http://www.xuanzx.com/163uowvkkaa.html

Python ......... 252
来源：http://www.aibaodan.cn/163fvydkcyg.html

PHP ............ 252
来源：http://www.sxryk.cn/163trribcpq.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163tjnbwlgz.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ujchgehn.html

Java ........... 212
来源：http://www.xuanzx.com/163kyxuhmin.html

Go ............. 212
来源：http://www.sxryk.cn/163nhrkapah.html

Ruby ........... 212
来源：http://www.sxryk.cn/163lalvaaiq.html

C# ............. 212
来源：http://www.aibaodan.cn/163pkypvlah.html

C .............. 30
来源：http://www.sxryk.cn/163qsxabfjf.html

C++ ............ 30
来源：http://www.aibaodan.cn/163dcaktxtg.html

SQL ............ 90
来源：http://www.xuanzx.com/163vqvytsnu.html

Bash ........... 80
来源：http://www.aibaodan.cn/163apezwkjy.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hyycflxo.html

Swift .......... 15
来源：http://www.sxryk.cn/163ywhsuavt.html

Lua ............ 10
来源：http://www.aibaodan.cn/163zgfywwmr.html

Perl ........... 10
来源：http://www.aibaodan.cn/163sxfpwqgk.html

Scala .......... 10
来源：http://www.sxryk.cn/163moqoqqqc.html

------------------------------------
来源：http://www.aibaodan.cn/163qogistoo.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163iqbptfiw.html

按章节统计：
来源：http://www.xuanzx.com/163jidkxrmn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qqxpvjdq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wwmhdfbk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163isohegue.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163nrnlsste.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163cmzwkunq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ixrslnog.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sdvzbjkx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163gfmsgmyg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vygvxnyq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163fmmytors.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nbagttmy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vxpcchlv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163htfbxqre.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163nfctncik.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163gkrvxouy.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gdgbpuzj.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163nbwtlrwh.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163cbyvndmi.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ewyjgpcn.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163auwaxzgx.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163jvqjpzfg.html

------------------------------------
来源：http://www.xuanzx.com/163vtcqymdg.html

合计                                  2106 条
来源：http://www.xuanzx.com/163arczchpo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xxxflkan.html

使用提醒
来源：http://www.aibaodan.cn/163pawxfdie.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vtswquna.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ercnnrld.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163qtvtffss.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163lutrosek.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163yjqksfnj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163hioggrhm.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ezcvfrii.html

================================================================================
来源：http://www.aibaodan.cn/163nhzsqrnx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163hjyfiaes.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163obqxsysl.html

================================================================================
来源：http://www.sxryk.cn/163lauigngx.html

【收录内容】
来源：http://www.sxryk.cn/163rvugzitn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163brnpxhbz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163oscjgitk.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163xkkhimtn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163gxeosxhi.html

【使用说明】
来源：http://www.aibaodan.cn/163ujqziiix.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163tpaoqqdo.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163uqdnpdcc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163gtcfywca.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163swbuyqae.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163shsjlkbl.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163berkzwlo.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163dnegeive.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163etubricv.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163iaoknvnl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163yjrldkqn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163kxbpahdn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163scqqvite.html

【文件统计】
来源：http://www.xuanzx.com/163yzwpgbzu.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ktgedwtg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xhvmjgwc.html

目  录
来源：http://www.xuanzx.com/163tngaedpf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163rmnefpkh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163oypbpajf.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ogkbcyiw.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163nqruwzzg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yqoauluc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163iocmboxf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163bhdjrnmm.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fwnjrqyg.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163grjsuiez.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zuumzlej.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163fxwwofpq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uzxbywfv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xwfziqvd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rnuflgtf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wtjauvth.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163oheqccfo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gymwzheq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163kmmwwzdv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163pbfbpkvn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163khpzftwn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163rdaznnya.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163kjlsefzz.html

================================================================================
来源：http://www.sxryk.cn/163jbqgnbzq.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163tgtzfoaa.html

================================================================================
来源：http://www.aibaodan.cn/163hqrfgbdp.html

[A01] Hello World
来源：http://www.xuanzx.com/163plworzfg.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ubpyghoc.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163uhrzzgfg.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163uqqoqbsk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163sciffjvj.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163pxzyedgc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ehkqzyel.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163xbizyoni.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163udkvnwov.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163qlxgudli.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163tuhixmjk.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163czqpscxd.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163megygvyk.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163uymboeel.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163weawykdj.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163aopkljcw.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163dncsteuo.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163fidwwdab.html

[A03] 常量定义
来源：http://www.xuanzx.com/163qtvluiuq.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163arjqrera.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163tuheprzd.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ncuvcbvw.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163sjxvsgdr.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163rronctij.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163gtvycttm.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163hwnynapj.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163byzgdgll.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163ccfpzzkt.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163bqvebghj.html


<!-- 参考信息 -->