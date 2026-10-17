外链999!wailian999！

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163nqtakkpc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163qfigmhlv.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163hnoahqnw.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163sgbdiagi.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163hbjppkfv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163dzntelsg.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163pywnhxma.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163berrjpkc.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163jhkqsjvw.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163nkaqquye.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163bfxnqkeg.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jbcpaqju.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163etbjgjdx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163tbcvrlse.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ucjcofea.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163inbxhpvv.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163odbueeqg.html

namespace App\Http;
来源：http://www.aibaodan.cn/163exqbubiq.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163usxqgtmo.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163sltgvdfi.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163zyeimxnh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nwgofhix.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163uoerycoe.html

?string $name = null
来源：http://www.xuanzx.com/163qpboztnk.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163zwoksgxk.html

int|string $id
来源：http://www.xuanzx.com/163hmuayyob.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163nizmhbxe.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163oyllttbw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163loplamwi.html

public readonly string $name
来源：http://www.xuanzx.com/163zjpypnnn.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163gutrprxs.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163bcqmuyhn.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ophsuyzl.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163uvydwote.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163gyzrkavv.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163dyoouoso.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ngugfbut.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163gnvthxyk.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163lawrkyzg.html

$obj?->method()
来源：http://www.xuanzx.com/163wzsvlwvm.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163zohyqawn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163adwiigqa.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163paphogvm.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pgspwgsl.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ytogpvul.html

"值: {$a}"
来源：http://www.xuanzx.com/163dzzprvxn.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ntpnptuk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163ospejznr.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163yedahsuf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163uoftlczh.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163xgirsuxn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163gjwugpgy.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163qjpdowgg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163nnwfuylg.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163kgmajbgo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163soshdnto.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163dmohmtea.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163eilgfhkj.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163zojotbmv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163vlxsyayv.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163sscdbhhs.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163rrwnpmjm.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163weylgfku.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163dqhittjo.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163tzwrfltu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ihyqbgjd.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163qgqrpnng.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163nzosxtes.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163jkhqlong.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163kbcwxlem.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163nvevhpsn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ivzndlfr.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163glctpzlr.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ibqerwxc.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163nnuznizs.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163tupcbacx.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163gpayldzw.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163hdfajeqi.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ltictbxs.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163bnhawtnj.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163oaayxfcq.html

composer require psr/container
来源：http://www.sxryk.cn/163hqcwobug.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163enamusmn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163smwbbnhv.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163lyzsrvst.html

composer require twig/twig
来源：http://www.xuanzx.com/163ihtdftmz.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163osvcetdy.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163grpyfcgz.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163hyvxobdc.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163epoigayz.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163sldtfgws.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163beaopdxi.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163tujtzjot.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163lqhbwogc.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163dxrywfqt.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163kruaamyz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163bhzgmgzb.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163qjiuwqns.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163exprlolc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163qtsfcbyh.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163havqunzw.html

a?.b?.c
来源：http://www.aibaodan.cn/163tjjkrhzk.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ollxaerg.html

a ?? b
来源：http://www.xuanzx.com/163wlkkkoog.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163tgibhkiq.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163dnmutuxf.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163fuodsuwl.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ccpzllec.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163yjktxvah.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163vcnfvirw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ubnnjqzf.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ezrcbtoy.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163hvpwrlqk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163bzgjspex.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163hicnkhgn.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163pjpofmdc.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163bpzkusib.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163zpdhinou.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163tpdmusze.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163flpzwkbw.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163vljhfuhi.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163dplwdwas.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163lgguahgt.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gdyewnqa.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163fabxpmqs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cnbzqbuw.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163wcoeqpyo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163npalhtan.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163xzggovme.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163acjrhepq.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163fdvwluhh.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ivegvpby.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ujobeonu.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ewagnlea.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163cdggqbwg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163hfgytldy.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163adgmjors.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163kzacvmyq.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163oqnjckme.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gxwrfxji.html

[U105] JS：节流
来源：http://www.sxryk.cn/163dpdxsklw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163jbykdwni.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163mhbrlijt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ytqocugp.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163tlpdrvtq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163oovstrwo.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163pcwahezi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dzuhzunl.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163kwjcmhvw.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hrkxgibj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163npegptpn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163yirhtufw.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163xpsylikr.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163foqoefme.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ehgrtkws.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163vnclhqyy.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163lrocqswd.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ouccsszj.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163vkgbfvmu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163sewmgpab.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163mtdgjeon.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163cgfjdfmr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ywovlaex.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163nxusktfu.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163xvkyyyrn.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163sfytljbw.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163qxztxqxz.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163xlixdtrq.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163xmpfqvse.html

npx vite build
来源：http://www.xuanzx.com/163hwkzdsat.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163pzpmxewq.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ogcvhpay.html

================================================================================
来源：http://www.xuanzx.com/163nbsxegrc.html

统计汇总
来源：http://www.xuanzx.com/163jffkktnz.html

================================================================================
来源：http://www.xuanzx.com/163ulehmbag.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ezolkobw.html

Python ......... 252
来源：http://www.aibaodan.cn/163iualzomj.html

PHP ............ 252
来源：http://www.aibaodan.cn/163nrfxioua.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163cavsgewv.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163txzmksjp.html

Java ........... 212
来源：http://www.aibaodan.cn/163ggzfgvwe.html

Go ............. 212
来源：http://www.sxryk.cn/163fefjaucs.html

Ruby ........... 212
来源：http://www.xuanzx.com/163mliayyin.html

C# ............. 212
来源：http://www.sxryk.cn/163gjoaxlmu.html

C .............. 30
来源：http://www.sxryk.cn/163uqtewtao.html

C++ ............ 30
来源：http://www.aibaodan.cn/163htcorkal.html

SQL ............ 90
来源：http://www.aibaodan.cn/163fcapstwe.html

Bash ........... 80
来源：http://www.aibaodan.cn/163urdushaa.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163vtnckpkn.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ivvjckhw.html

Lua ............ 10
来源：http://www.sxryk.cn/163hwyzphbx.html

Perl ........... 10
来源：http://www.aibaodan.cn/163yypidrpv.html

Scala .......... 10
来源：http://www.sxryk.cn/163grcrwxuz.html

------------------------------------
来源：http://www.xuanzx.com/163wyogbwbl.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163aeebtiud.html

按章节统计：
来源：http://www.sxryk.cn/163ygprxrld.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163miodsior.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163blbdyhrd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163timqjduc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163tjvxjjkc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ppelhjcw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163hczlmzuw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163oonzjpdt.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ddicuzou.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qoquwubo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ikxbrfpz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yxcvvtqu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ogmigdmf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kjwfyqbw.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dnwrvhlj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163mttodxii.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vouhcqub.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163yweyzzvc.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163jsloultg.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163xtexztjt.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ytrotqgy.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ipgcurrx.html

------------------------------------
来源：http://www.xuanzx.com/163rbhcfogv.html

合计                                  2106 条
来源：http://www.xuanzx.com/163vdmvgyiy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163eeixqvld.html

使用提醒
来源：http://www.sxryk.cn/163plvrqtpw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ckkjgukp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163arcritbk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163qorneayd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163auzxrebd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163kuatrkxo.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163betplhmh.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163eabhiycy.html

================================================================================
来源：http://www.sxryk.cn/163pzbsheti.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163cblkgdul.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163dftkolim.html

================================================================================
来源：http://www.xuanzx.com/163euletscv.html

【收录内容】
来源：http://www.sxryk.cn/163yptdrtpw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163jbjcljdj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ulhhhoto.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163avkzeazf.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163sqiyozua.html

【使用说明】
来源：http://www.xuanzx.com/163jcqooukl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163lpqsnilw.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163sldezqio.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163oyrhbabl.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163nyigsxbw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ilcxncja.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163xbzxxbly.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163conopvqh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163qdljfbjj.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163zaygnspk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163syalzbnc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163mnjceijf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163uckxukrg.html

【文件统计】
来源：http://www.aibaodan.cn/163duwgwjgr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163lmoamghm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zvewautc.html

目  录
来源：http://www.xuanzx.com/163zvtqtuwm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tfdamxet.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163sdqxpsbj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163arrrruiw.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fecrtped.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163pdtxnhjz.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163uvqdgcur.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163mlsyhcrj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163dgcknlcq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zdxkllcz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ocqzeeoo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zuievhzg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rtjkdcvg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163cloglpnk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gcvfxoil.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163rkvtfgqu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ieczuyqy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wxavmqty.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163jukxdlpw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163zreiywxn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163zdcpdskr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xwywvyrz.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hahioiue.html

================================================================================
来源：http://www.sxryk.cn/163plsfxqhv.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163jixarmag.html

================================================================================
来源：http://www.sxryk.cn/163kjpqwhxv.html

[A01] Hello World
来源：http://www.sxryk.cn/163egxeabqp.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163cipjnrjd.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163zwvarbwf.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163xjhqcqct.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163hlqmykzv.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163taaedvym.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163zjlogpya.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163ynlzamrt.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163emryruum.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163uhbzaejo.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163jqnpqaiw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163cqbnlhny.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163penwzzcw.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163algzngsy.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163sgcusatx.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163zqmihtzw.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163hzphyngn.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jdidvuvc.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163durjtxaj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163bbcrxttj.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163qixrzndl.html


<!-- 参考信息 -->