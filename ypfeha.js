外链999!wailian999！

[U31] Py：单测
来源：http://www.sxryk.cn/163uzrwklky.html

python -m pytest -q
来源：http://www.aibaodan.cn/163sylcsaes.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163kdfplvmb.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163wljmvprc.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rnubzgmk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163tfxnfdxw.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163syroabck.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163kicrfwoi.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163nskqklrj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163dsjvinat.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163akrdsawu.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ooiwcyfl.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163oxdtjdja.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163osboefzp.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163leydydkn.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163pgqihxjs.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ibrxdbmn.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163iasmqgzc.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dhtbgbfq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163nzdnxtvr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163gfuojgqj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163lsfcpiiv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163puymwjyz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ddddqttx.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163fpbdjnpd.html

namespace App\Http;
来源：http://www.sxryk.cn/163rcqbgqzu.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163stxaqtrd.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vazemjwy.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163iusldaiz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fzyelnqo.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163nqgopzwv.html

?string $name = null
来源：http://www.xuanzx.com/163zjctdgqx.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163hhmkgqac.html

int|string $id
来源：http://www.aibaodan.cn/163bcktjace.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163hdhksjop.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163tjyvnzrd.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163apipgzgl.html

public readonly string $name
来源：http://www.aibaodan.cn/163zyhlmdmw.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163jjxcmncu.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163htwegxws.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163kucvpzjb.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163nrjqesdc.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163jqxcatqz.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163pyuxzvvf.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163vkcxpfqb.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163uzsbecne.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163xcwyslcl.html

$obj?->method()
来源：http://www.aibaodan.cn/163fauuixkk.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163hhmfiphu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ptaybihi.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163tmczkfof.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rojhyhlt.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163sjdauwst.html

"值: {$a}"
来源：http://www.sxryk.cn/163ripujndb.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163yjnuwcvy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163ykblwvvb.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163pqqyherq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jcgztedf.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163cgirxrob.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163quuiabim.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163bofatebj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bbmtsglg.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163mrhekwmw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163rjtrmoqq.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163avtgtule.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ajgzompv.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163lqvnromj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ztmfkpsd.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163pfgrewms.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163pssjheat.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163budcwawo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163npmlgfbr.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163fprozhjo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163odrzdpyt.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163fcanlkcz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163dbfycnsb.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163bcxqnknw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163vagqbhud.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163uyfoiaty.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163pxobdcec.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163rbcrswym.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163fecnqegd.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163spxbnhtg.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163kwsikkdn.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163jmthtejk.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163cnctghxl.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163zcpujqfa.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ltsmfygz.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163wdmlefba.html

composer require psr/container
来源：http://www.sxryk.cn/163xvfltrpq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163zcebbgah.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163yvgeszip.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163pwiyxmbb.html

composer require twig/twig
来源：http://www.xuanzx.com/163fbzotoev.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163xxsnsixu.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163lcwlxslk.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163pqgqnqol.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163deteetuy.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163aklqgfcf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163cjpuctnb.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163zhtasags.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163xbsavpbx.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163oalelkzy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ectbhaif.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163drrpwysu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163rlkxyoix.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163lwbivtgl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163doqjhazr.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163doqtrtng.html

a?.b?.c
来源：http://www.aibaodan.cn/163kcjrkuwf.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163pxqsbggu.html

a ?? b
来源：http://www.sxryk.cn/163jhxmmbmi.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163voegwmko.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163vutuyunh.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163cpdhujjd.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163xdpqnrim.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163kggigkti.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ilhwyngc.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kpoqfnns.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tbtvzsxk.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163iuqbnnym.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163anrlhfof.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163spobynjf.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163svcpkylv.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163tnxnokhl.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163dljaqani.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163hzctrpet.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163kisiatnz.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hkyifrsw.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163czqzknme.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ijkmyrdd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163eoqqppfd.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163vujxgmzy.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ydrwvujl.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163lnocwhmz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163plbsxdoh.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163tppnjdep.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163wrvewzxo.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163sngqaarv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163bitpilpr.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163tycdbynw.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163xtdtxclt.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163wnkspjrr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ncbgsirb.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ocbvlfgm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163widdjwpn.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163eflprwfc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tvlsyyby.html

[U105] JS：节流
来源：http://www.xuanzx.com/163dgfrqous.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163gzjmyoqn.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ujethpzp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163nbitiprz.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163rmyjtkmc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163nykpwhim.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163sgxvudzu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163xhkmztsl.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163edjqckfh.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ovhhduqp.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163kvzyfiqt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ghhhyyra.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163mwwykplb.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163zbhyhryu.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163oaagntda.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163govxelde.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163gokryahj.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hsruqone.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163qsocpaud.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vnhxdtxo.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163xwjgopvv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163uhisxlqb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163uproylaf.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163zmggvdqs.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163dgxnczek.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bdjtukbi.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163csyebmhp.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163xkxvumnt.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163yyaybssg.html

npx vite build
来源：http://www.sxryk.cn/163junaygbe.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ildymmpx.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163mbnmoapr.html

================================================================================
来源：http://www.sxryk.cn/163hxuehnee.html

统计汇总
来源：http://www.sxryk.cn/163jzxconrp.html

================================================================================
来源：http://www.sxryk.cn/163ggavfgyw.html

按语言统计（条）：
来源：http://www.sxryk.cn/163zpofaibw.html

Python ......... 252
来源：http://www.sxryk.cn/163aygxjvpc.html

PHP ............ 252
来源：http://www.sxryk.cn/163egpavhgb.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163rtxltcnv.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ldjmydiw.html

Java ........... 212
来源：http://www.xuanzx.com/163zjekodta.html

Go ............. 212
来源：http://www.aibaodan.cn/163pvywkczp.html

Ruby ........... 212
来源：http://www.xuanzx.com/163fvblnuss.html

C# ............. 212
来源：http://www.sxryk.cn/163ogykscjm.html

C .............. 30
来源：http://www.sxryk.cn/163fkyqezby.html

C++ ............ 30
来源：http://www.xuanzx.com/163qlgrnugm.html

SQL ............ 90
来源：http://www.sxryk.cn/163fsirvojd.html

Bash ........... 80
来源：http://www.sxryk.cn/163uwmivlgo.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163jcofxqto.html

Swift .......... 15
来源：http://www.xuanzx.com/163scosuimr.html

Lua ............ 10
来源：http://www.sxryk.cn/163mpciiusb.html

Perl ........... 10
来源：http://www.xuanzx.com/163krijjyan.html

Scala .......... 10
来源：http://www.sxryk.cn/163lrbunvwi.html

------------------------------------
来源：http://www.aibaodan.cn/163iycklwna.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163hsobkxam.html

按章节统计：
来源：http://www.xuanzx.com/163omkppybw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cyhbkbrt.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bpgqhadr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xdfpmtpj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163dwfxconu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163tdczvfqu.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163kllammwv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xlwagdfu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163bsrvyyjl.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mkxwmoca.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zwfsnitu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uhptykxx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pgbtufqg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163paxzzxqo.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163qwkwtnib.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163xqmtjlps.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163whytpmpi.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163nlkpiuoq.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163awjjkyff.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163yldjztsg.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163roxtjpiz.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163aafrasmo.html

------------------------------------
来源：http://www.sxryk.cn/163wshsrwkq.html

合计                                  2106 条
来源：http://www.xuanzx.com/163izlfmjoo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zbihrysp.html

使用提醒
来源：http://www.sxryk.cn/163ptryjqmu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tvbiiiby.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163tjnpxhji.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163xqummarq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163mpzgdbwu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163huphrffp.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163sikhetak.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163hiulohgj.html

================================================================================
来源：http://www.aibaodan.cn/163cbqmejik.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163mzmdbyav.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163yzvllqdx.html

================================================================================
来源：http://www.xuanzx.com/163yrevoegn.html

【收录内容】
来源：http://www.xuanzx.com/163mwpdemcg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163cnljdjlz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163uykpdanz.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163xqmgitoi.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163tdhbfxtf.html

【使用说明】
来源：http://www.sxryk.cn/163kxvhbdsv.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163akrkbemf.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ricupvai.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163hkpmowmg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163byvsslrk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ninxtrjm.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163uhyrykyp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163jfnzhuna.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163hjtbnwuf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163bdxoonpo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163zxqvpvht.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ieygssju.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163yffqtymx.html

【文件统计】
来源：http://www.xuanzx.com/163mfdysnzy.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163aocjzylp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163njsksxow.html

目  录
来源：http://www.aibaodan.cn/163tjmbaqmk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ndjefcsh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163oypdbmzt.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xirxrmrj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bedyttzs.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163bcuxxdho.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163qgfccyze.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163uareebcp.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163gjlettuk.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pjtbhjdu.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163umifitrj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163pmnzwbwc.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163krmvrort.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ogjtapko.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163iwzqsfqz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163dkzsfblc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163urbcmapr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ldrqxvkh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163tmhabjqa.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ovmniola.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163ntsouzpn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163yfmfmafv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163phqfgtsd.html

================================================================================
来源：http://www.sxryk.cn/163vrrqegar.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163wtxuqvig.html

================================================================================
来源：http://www.xuanzx.com/163jvqtunqf.html

[A01] Hello World
来源：http://www.xuanzx.com/163bkvkrase.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163rnkephkn.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163decwciik.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163eajvrile.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163zjxygjto.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163kbotnjpb.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163vwysocef.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163oclmeuie.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163iskvzosu.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ywcgpili.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163aeylufmm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163toerwtjy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ioamxemc.html


<!-- 参考信息 -->