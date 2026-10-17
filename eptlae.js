外链999!wailian999！

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xylnbqxr.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163opsxxtxt.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163vwchaiiz.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163cdrtmheh.html

[U31] Py：单测
来源：http://www.xuanzx.com/163uggtodvh.html

python -m pytest -q
来源：http://www.aibaodan.cn/163rsbqjznj.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163mncmuumt.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163htczxjct.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163wcmwspbs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163egsnowmo.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163neyjzywp.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163logzmrly.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163trbduqty.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163onefugxf.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163eyiddbsf.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163lsytzzuu.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163vwevdwpr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163suwmcmnd.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163hzpfoyzk.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163szfoofgv.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163mybunuwo.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ocrvtobx.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163qwxgsipp.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ouophltc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ctnhtoky.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163czbyxhkj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163eokrvugd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ivnnjqit.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163teaoeols.html

namespace App\Http;
来源：http://www.aibaodan.cn/163pvbwqejj.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163yncvayqn.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163jmftgpij.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ctxvpesy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hopdupbe.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163jcuvjcje.html

?string $name = null
来源：http://www.aibaodan.cn/163edfhudsw.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163bdjtogrz.html

int|string $id
来源：http://www.sxryk.cn/163mvniccyh.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163hxxcopql.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163fyobwdxz.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163trbxfdqn.html

public readonly string $name
来源：http://www.aibaodan.cn/163jpqgkhyh.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163wubrgurv.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163iyebqwrg.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163xpuivuda.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163cqfahsyc.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163wtzzsqne.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163epowxlbt.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163zkkxovgk.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163iesemmro.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163qotuxdlb.html

$obj?->method()
来源：http://www.xuanzx.com/163nxgimuvk.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163kjqjfimd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163cltohvif.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ltduynyp.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xonwmgqp.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163biezmeqq.html

"值: {$a}"
来源：http://www.aibaodan.cn/163jofmgrhv.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163kkitrgph.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163fjbsrnom.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163tbatlxll.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163kthuwdcb.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163fzzdzqmh.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163mkagzgys.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163qgostdxp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mdwsqwja.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163qngynojj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163lyrvakbs.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163rjbuqkiy.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163yfthftvn.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163jirnxhcq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163ywncqflj.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163blneaqsn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ymfgrkhj.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163fwhvijez.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163vtefzbvj.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163qyxddsth.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163sovzekzv.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ckmqelum.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ymbdnzrt.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163dxcgfujf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163vysvysgt.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163rpbvkddh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163rbtvlckn.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163sspuqwev.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163shfrjbds.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163xjrntnsa.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ppiwrjqp.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163gldwypbs.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163uywiusjf.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163tpyvghnq.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163xyicqjct.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163gizoebha.html

composer require psr/container
来源：http://www.sxryk.cn/163uueygewz.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163jqsylsfz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163nplrsrgc.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163yivqassz.html

composer require twig/twig
来源：http://www.aibaodan.cn/163lqppwbwj.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163kzesicth.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163xopggmbd.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163ixynytdi.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163dlfsxcfr.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163bvoqstgg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163iawubmyc.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163xdlbvhwy.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ndyvzphu.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163psjsljvf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163xiwxfrmc.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163uaxiwzgk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163twycckss.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163pjzpalft.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163axwlaszc.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163jyaxdaqz.html

a?.b?.c
来源：http://www.xuanzx.com/163uoxiufkz.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163huihdesu.html

a ?? b
来源：http://www.xuanzx.com/163yysrhxjt.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163utjhgauj.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163fhbhzpyg.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163wwjfdhkc.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163baxsplqk.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163pkacsema.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163dwfvwbge.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163jksuwmcl.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sadvlgdr.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163eaedqjjf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163hekqowpl.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163erywlega.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ttajiskj.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163loxtnfcw.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163yyadllkh.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163nuolrdqj.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163uxckihmt.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163fxrluwvd.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163wpwzpbme.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163tykyoadm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163gpjacjtk.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163twwziuxv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163otnpaorm.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ywjnigbr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163xleymnge.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163jkltilwd.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163awrvdstw.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163foojwwbt.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163buadwnms.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163trfustbl.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163girdtiia.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163jjsffopl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ekuwxvvj.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163razmgqlt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163edjxunyq.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163waleyqqg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ezdpoaez.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163bwurogrs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ltymlcfu.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163xescsnig.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163rcsxubzt.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163fgzddyie.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163qfvrwudj.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ggvyggcy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ecrkazoq.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163skdmfvvk.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163phfhkrop.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163xpodhnve.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163doaqovyl.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163zogrpqsw.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163pnahkxnh.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vomrecjr.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163kgupekeq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163bvubijtm.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163serflxuc.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163juprwhyb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cqohaeao.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163xfmgcczv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163uepfsuiy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163arjpolok.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ehldqqdt.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163tclxjsvd.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ebarjbrq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ezhwqjgh.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163dhtutvwo.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163uwqxkmku.html

npx vite build
来源：http://www.aibaodan.cn/163rxbfsagl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163eaqimhzy.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163lcsregdu.html

================================================================================
来源：http://www.aibaodan.cn/163trvnvnwf.html

统计汇总
来源：http://www.xuanzx.com/163rabpkrzs.html

================================================================================
来源：http://www.xuanzx.com/163qmshkdfb.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163utiiumwa.html

Python ......... 252
来源：http://www.aibaodan.cn/163ktvmeres.html

PHP ............ 252
来源：http://www.sxryk.cn/163bpuoldbp.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ejqzgcdx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163pduddwpm.html

Java ........... 212
来源：http://www.sxryk.cn/163qapkldqd.html

Go ............. 212
来源：http://www.xuanzx.com/163zxjovqyz.html

Ruby ........... 212
来源：http://www.xuanzx.com/163atbuojru.html

C# ............. 212
来源：http://www.sxryk.cn/163fnzxrxee.html

C .............. 30
来源：http://www.aibaodan.cn/163fedwotxw.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ovzxkijb.html

SQL ............ 90
来源：http://www.aibaodan.cn/163slqdeuie.html

Bash ........... 80
来源：http://www.xuanzx.com/163cdacsegm.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163gjwgndvn.html

Swift .......... 15
来源：http://www.aibaodan.cn/163pahbzuyo.html

Lua ............ 10
来源：http://www.xuanzx.com/163dfqmfpky.html

Perl ........... 10
来源：http://www.sxryk.cn/163fpobglsv.html

Scala .......... 10
来源：http://www.xuanzx.com/163jcycsgmj.html

------------------------------------
来源：http://www.sxryk.cn/163tisypggt.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163otyimlgw.html

按章节统计：
来源：http://www.xuanzx.com/163cinyfqvd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hkmagmjx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mezjsovx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ilaqubqq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hwltcqvr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163maqdtids.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kmriyyrw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qdcopvpi.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163rpekomyr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163epeqlfhw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163hecdfjfd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tprxvyhc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kbsajskn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163senatikd.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kqdogvsl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163pofkojkq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ozdmptng.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163hmuskzhe.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163npzccgwo.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ayupeikh.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163kpoytbon.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163rwdxhets.html

------------------------------------
来源：http://www.sxryk.cn/163lrfbhezi.html

合计                                  2106 条
来源：http://www.xuanzx.com/163dgcqwgkb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lcofhofn.html

使用提醒
来源：http://www.aibaodan.cn/163rblpjysi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fzucmegf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ujivsgbj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163gxsjbxdt.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ftviqokx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163olmfgewm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163rlatemvf.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163gqzlyydy.html

================================================================================
来源：http://www.aibaodan.cn/163dflgmgwe.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163tvscccxi.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163mzqlcehy.html

================================================================================
来源：http://www.xuanzx.com/163wxyuixgy.html

【收录内容】
来源：http://www.sxryk.cn/163xpgfgefo.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163pimkumun.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163mqssqvsx.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163qclpsbvp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163vameplwt.html

【使用说明】
来源：http://www.xuanzx.com/163cycznige.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163qbnhjcdy.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163umkieuhx.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163rjkuqvzr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163nugttums.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163wtgvoqry.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163epvxejer.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163mzbdxxvb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ckgxfjlr.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163zdgmmulu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163rfzahbgk.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163chedeesu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163dndiajvm.html

【文件统计】
来源：http://www.xuanzx.com/163itdoroov.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163cnnlojyw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163zfbxpdvs.html

目  录
来源：http://www.aibaodan.cn/163udyqhpqw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hcmrtjtt.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163stukqxoq.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ngtwqhbc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lbhikzva.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163cfduweyy.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ztqfmwga.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163nqxikdwc.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ynybrdqt.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163vsfymbpr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163udjzypuo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163deezucca.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zohplkhe.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hhnsjwpy.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xyerkjsx.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163aqpijxwp.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163lormvpcq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nhujeopt.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ukhmmxzb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163fxztyqsv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163juzbymmz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163kufxehbk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163gzrtjmiu.html

================================================================================
来源：http://www.sxryk.cn/163pveulmqi.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163uxnaevoq.html

================================================================================
来源：http://www.xuanzx.com/163ctmkoids.html

[A01] Hello World
来源：http://www.aibaodan.cn/163fvpsczzs.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163rtxaxhwo.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163judlbuag.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163xhsikysw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163tyrdprbe.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163cfibuead.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163lmncappb.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163bhimfsrd.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163nsbggcfq.html


<!-- 参考信息 -->