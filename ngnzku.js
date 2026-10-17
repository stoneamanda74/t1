外链999!wailian999！

[U31] Py：单测
来源：http://www.xuanzx.com/163axekksve.html

python -m pytest -q
来源：http://www.sxryk.cn/163dswrqocb.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163sxcznzwm.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163viscykjl.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163kbtxvdpx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163fprqmyyr.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vvbtsbdu.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163mapfkbms.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163nwoofhlo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163dvzqyybw.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163qvyfdpdt.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163dkpibqev.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mrlkwgey.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163xpvdcujj.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163pmypdmqf.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163mghfaknb.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163djeqqrsz.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163adczvfvj.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163krxcpuce.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mdtbwlor.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163onpvodsf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ymiuyemw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163eypxwcna.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163thfoteet.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163xqggqrnq.html

namespace App\Http;
来源：http://www.sxryk.cn/163efvxusyw.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ggbpshbk.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ptxgmzlv.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lexoppmv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bmmqvjwo.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163lqrbjdao.html

?string $name = null
来源：http://www.aibaodan.cn/163lctszbae.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163umstytfu.html

int|string $id
来源：http://www.aibaodan.cn/163shddumfq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163jiqkboha.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bjiljthh.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163psiwygya.html

public readonly string $name
来源：http://www.sxryk.cn/163bpwdchmq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163rraaspat.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163gepsunlx.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163zogueoad.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163kdfunrmh.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163btsenvaa.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163omhtkryt.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163sicmrvgr.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163msccnddj.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163cyhtxlmn.html

$obj?->method()
来源：http://www.aibaodan.cn/163iptcihlf.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163xasmuwqz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163lzmxqjgi.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163rzmpmcex.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163moalfequ.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163aolcqogj.html

"值: {$a}"
来源：http://www.xuanzx.com/163ecafvdzz.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163dzqpoyqr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163vimvgupc.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163xvifofqc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163htqcddmd.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163olbhaium.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163cmgpyace.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163gqakbmos.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163toywcjxm.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163tudhxgyt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163zfiwycpc.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163obucppig.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163fptoeswp.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163tvgdxlge.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163oksxhmza.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163yorgctrq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163lueyekat.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ueisjixo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ealkrzun.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163rirnhosh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163iywonbmb.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163kminveoe.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163kkkmembv.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163pnrjnppz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163jfnwvxbd.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163nuwqfhhy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163hcqeqvzn.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163sayaewzh.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163zuratanw.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163kifqracf.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163lceacvzq.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163tqozbtct.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163qyxozmgj.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163depvimyl.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163jodzgegu.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163idyzkzjj.html

composer require psr/container
来源：http://www.aibaodan.cn/163tzcdbwtj.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163anrmefdv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163axlktfgt.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163fceesteq.html

composer require twig/twig
来源：http://www.aibaodan.cn/163hbzalphx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163vyfapkqt.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163bbmslzkq.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163agobsbxw.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163gybbafuz.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ccdaoxqa.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ehvdcmou.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163khxwzfnj.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163lwehzbow.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163jaxrjdmj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163faqftcmf.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163bekvkspv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163lwkejojm.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163rhcbyncj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163vgyptdwu.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163pgwdymey.html

a?.b?.c
来源：http://www.aibaodan.cn/163uogeiujh.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163arxdmqzk.html

a ?? b
来源：http://www.xuanzx.com/163jmougswf.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163kdldypif.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163afpcisjg.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163lruimlgf.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163sgxsbacy.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163biufbxwc.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163gleilwjb.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ppcvelmj.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fjrgicek.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163pxnlcjna.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163hzesqaox.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163axkeyxcn.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ohuoyvjr.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163yqohhate.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163utxkrpuu.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163izfjyauu.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163sqqoefsj.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ysjxzwei.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163dybyslcx.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163qfjjcnst.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fukssicl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163jbpgllmo.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bvftlhri.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163joiqgseg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163mwebfkxb.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163bsfxtpdw.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163kgzvjiqi.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163emwhkqax.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163yvmftbsp.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163goehxfif.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163zqqcflig.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163bilsdxvt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163orxupvbi.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163zkqdqaar.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163xowhwcby.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163sgmknugd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lpfvwynw.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163dhykqege.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163cglxpvoc.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163chubkjcw.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163cagnpzsd.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163xdrodtsf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163pnhjuwii.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163vppoxxie.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163aaykiuzv.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ewruikfh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gkbpufty.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163fjpojtrf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163pnprwxqh.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163tebcrvik.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ommeaucz.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163kernsxqx.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163szizwsed.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163tcietssx.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gpdtowil.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163iactjsxr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hnukiomr.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163bttymuhc.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ytdzquiw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163rwsrulbs.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163nxqatusa.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163tjqlqyaa.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ilrdsdbg.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163inydyqyv.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163qdyvukvs.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ntpwhxfz.html

npx vite build
来源：http://www.sxryk.cn/163ymidhtlb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163eakzcbob.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163drdfabpl.html

================================================================================
来源：http://www.sxryk.cn/163iddbliij.html

统计汇总
来源：http://www.sxryk.cn/163dkchgvbj.html

================================================================================
来源：http://www.aibaodan.cn/163tkszdete.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ptyrireg.html

Python ......... 252
来源：http://www.sxryk.cn/163lazpydat.html

PHP ............ 252
来源：http://www.aibaodan.cn/163wnehkglr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163qvkkckvx.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163nevedfhn.html

Java ........... 212
来源：http://www.aibaodan.cn/163ezcpuizw.html

Go ............. 212
来源：http://www.sxryk.cn/163wfxmxblj.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163uomdgwji.html

C# ............. 212
来源：http://www.xuanzx.com/163ulubqwsh.html

C .............. 30
来源：http://www.sxryk.cn/163xzwfbshl.html

C++ ............ 30
来源：http://www.sxryk.cn/163opfxfjsk.html

SQL ............ 90
来源：http://www.aibaodan.cn/163kijwcxwy.html

Bash ........... 80
来源：http://www.sxryk.cn/163phemdgbo.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163nelyzqtl.html

Swift .......... 15
来源：http://www.aibaodan.cn/163yrualrnz.html

Lua ............ 10
来源：http://www.xuanzx.com/163tqryamim.html

Perl ........... 10
来源：http://www.aibaodan.cn/163wohpfdci.html

Scala .......... 10
来源：http://www.xuanzx.com/163soqeduxy.html

------------------------------------
来源：http://www.xuanzx.com/163rorailyi.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163dghykgqu.html

按章节统计：
来源：http://www.sxryk.cn/163iwllolah.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qptwjdas.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163onbwyuds.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ohgmmpew.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163tgluwhrk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mqnkrrko.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zebkroft.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fvktzqti.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hyhubdxu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ocgbtshd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ehfmpbga.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zjuguxvv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hxkqhevg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zhqkxmxl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163slqejmri.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163mvzqhswl.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mrabmycr.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163krafcyeu.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163axjpegbh.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163fvplsdaq.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163qclszpca.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163mreyrekj.html

------------------------------------
来源：http://www.aibaodan.cn/163mvbanogw.html

合计                                  2106 条
来源：http://www.xuanzx.com/163gnbnchbq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gaeoghyi.html

使用提醒
来源：http://www.sxryk.cn/163bepbolle.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kszgpuoi.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163zcyglvpn.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163mlgqorns.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163cqbimxtb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163rqahrrij.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ftqsmxyn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163tdncmccz.html

================================================================================
来源：http://www.xuanzx.com/163ghknauqz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163havrkyun.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163etonzvjs.html

================================================================================
来源：http://www.aibaodan.cn/163sbtcglgk.html

【收录内容】
来源：http://www.xuanzx.com/163wurpdmaz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163sxjhnpoq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163gfupffzw.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ilsswcuq.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163dzqzgusi.html

【使用说明】
来源：http://www.sxryk.cn/163vthtgtft.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163dhsaudfv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163karcvzio.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163lstczvrb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163axnqdrhu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163odmtgotm.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163evqdcqtf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163tprcmwtm.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163dzngzsyk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ruhriqdo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163dzzzgbqr.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163zpgxxpaf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163bdyvttty.html

【文件统计】
来源：http://www.sxryk.cn/163wffrgiqb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163xynvvxrl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zwnzpjwu.html

目  录
来源：http://www.xuanzx.com/163pqtjzbcr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163tnldcoui.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163sbncmihi.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jpivlowu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lqkgegkh.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163iwmdjlzr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163fbxkjdox.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163utzhxhje.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163cihmguzn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163hkcxwaya.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163znlwkalt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163bvmfpvzn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ntbfaqxc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qctpyeqz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163mrmpubpz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163pwgzmxnx.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163auxhvgnq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cvioeydp.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163oyfgunla.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163rvfrcmdf.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163lfpbsvom.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163rgbapduf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rfakiqjg.html

================================================================================
来源：http://www.xuanzx.com/163myyfnusk.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163twgtitpx.html

================================================================================
来源：http://www.aibaodan.cn/163wvwoqbjv.html

[A01] Hello World
来源：http://www.xuanzx.com/163kzuetmem.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163wobqpcgj.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163zzmkzxfo.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163hrrszowj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163nvtxwunb.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163yzagjxcj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163lqkglunp.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163kgeltsts.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163mctfygzb.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163juwuoajm.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163zscwsvrv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163ezltusto.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163fmvtwfir.html


<!-- 参考信息 -->