外链999!wailian999！

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163afbejsim.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163vftlbmdz.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163zumnfqty.html

UserId = int
来源：http://www.sxryk.cn/163elprxdlt.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ybidmebs.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163pmudgegx.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163xuouawcq.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163bbjkzqav.html

[U31] Py：单测
来源：http://www.xuanzx.com/163cwhsmuuj.html

python -m pytest -q
来源：http://www.aibaodan.cn/163iuyfkhjo.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163cuwyjzke.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163bcsnmxea.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163inpmtemk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163qtzcundz.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163betavcoj.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163trhvibii.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163uwcvbkyc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163wztpfeol.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163zbxauepe.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163xlgqzhnt.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163gxfzxtpe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163yrgbaxgw.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163tcrabvbl.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163lvwxcpmp.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163nkwkpxgp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163eutzooyp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163hssyftid.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vtdrsvlj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163zvkwttkm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163whlrlcpb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163jwzgpauo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ikwuxytt.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163gwyrjcja.html

namespace App\Http;
来源：http://www.xuanzx.com/163picqutae.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163bjzxyuga.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163iawfshzu.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163sjmuffzr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ahwwaakj.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163iqjcsooa.html

?string $name = null
来源：http://www.sxryk.cn/163btnxsizz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163gabgbtjl.html

int|string $id
来源：http://www.sxryk.cn/163yahavlwu.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163wfesphea.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bzpeurtv.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163hyjkzjlw.html

public readonly string $name
来源：http://www.sxryk.cn/163ojbcehpl.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163xqrbyyxp.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ufvtdbvg.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163corlagxy.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163sylglnuq.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ixmysdqx.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163xrtbislp.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163xwaldvpm.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163iqhbvnfy.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163cenxsdln.html

$obj?->method()
来源：http://www.aibaodan.cn/163uupkxkah.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163mmjsothb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163uwdfzonr.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163snqlrihp.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gvnpgutw.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163jlnqytgr.html

"值: {$a}"
来源：http://www.sxryk.cn/163mqqsjbco.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163tmwoupzj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163udkelibq.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jfnsjzzv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163sqkorwfu.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163togndvju.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163qqpvyahh.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163lelmojzj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163stmieldn.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163qpujspbj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163fdjirncx.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163cifysgqg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163howqvkpv.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163knyahasg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vnjyjruj.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163uqgcimfu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163zbfmitiw.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163gcdxuynu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163rcoolflz.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163hpphdoht.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163lxjrpgbe.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163fwisihge.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163cskzrgqa.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ynmeprvu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163amdbxzbe.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163wsvgyggj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163myerrhpo.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163vfvaqpjx.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163nqzlrxdr.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163bmcqdizt.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163amyowuri.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163azvygqos.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163rtzvkxar.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163zbabphsr.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163wgvbncbi.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ieruiyjl.html

composer require psr/container
来源：http://www.sxryk.cn/163cdtpngfx.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163qatibyme.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163mekoqlup.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163sxsseepj.html

composer require twig/twig
来源：http://www.xuanzx.com/163chwptfna.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163saiistny.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163sxoqvxbz.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163cosgmjle.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163wsrcsdmt.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163yebkjqph.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163fgficfhy.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163fllgawmo.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163xhutngpe.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163tkbaccmf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163tddaimax.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163upywhmjy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163xmcyxuio.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ezluazuy.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163baurrrgs.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163lacpybwu.html

a?.b?.c
来源：http://www.sxryk.cn/163akxjetix.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163xblqbdje.html

a ?? b
来源：http://www.xuanzx.com/163fcyerkul.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163nyqtbydv.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163pyybdlpy.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163uaywfsqi.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163foxhsabb.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ufhpelpn.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ieppahix.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163pqtsqvxw.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xtbulcud.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163khfqhfmq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163bxarsmyc.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163eepzgeyk.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ctqajxov.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163lsgfppxq.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163cngjgrht.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163bgcuqwze.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ysegamea.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163hoxeoimh.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ayuwyvsf.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163njljwqta.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hjvpmiot.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163xoxntsze.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vzlmbkbw.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163srtpjgzl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163pisjaklq.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163amjazmpz.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163rhnyaofv.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163geqseubj.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163pvteilhs.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163bzwmexvd.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163jeetuaid.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163lrvmduiz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163hptgaggp.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163dtgsjfoo.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163zwohnutt.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163kexulmmh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vkusnoeb.html

[U105] JS：节流
来源：http://www.sxryk.cn/163tjjtsvnc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163odlblzry.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ymlsgvfx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163whbmofvb.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163vbqrvvwm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163mhvnwvmc.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163dflsimao.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163uezvrcnl.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163yzwzloue.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ujtvtqzx.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163lcmbbmoh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163zmdqhegy.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163byaxutyn.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163prvafmie.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163zvmxcanq.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163djomvuiq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163omatpdhy.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dwxbhbhi.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ppsmtitf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rzeixxno.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163nbitunqz.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163nmntcshd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163hlpktkiu.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163zyjzhxld.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163qwyvshcj.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163cjakjnmf.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163meduddfr.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163sofcqwga.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163sfuhdszz.html

npx vite build
来源：http://www.sxryk.cn/163alwctctf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163brvtmzue.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163milljnow.html

================================================================================
来源：http://www.aibaodan.cn/163uthyhjyw.html

统计汇总
来源：http://www.aibaodan.cn/163mibderwu.html

================================================================================
来源：http://www.sxryk.cn/163ilheiwqk.html

按语言统计（条）：
来源：http://www.sxryk.cn/163zyboxcbu.html

Python ......... 252
来源：http://www.xuanzx.com/163noyyxjqf.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vnmldoup.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163covnkmct.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163crvwmnxh.html

Java ........... 212
来源：http://www.xuanzx.com/163fxpuwtdc.html

Go ............. 212
来源：http://www.xuanzx.com/163wyvrqibx.html

Ruby ........... 212
来源：http://www.sxryk.cn/163iyoimpre.html

C# ............. 212
来源：http://www.aibaodan.cn/163szvqvhrm.html

C .............. 30
来源：http://www.xuanzx.com/163qnigeews.html

C++ ............ 30
来源：http://www.aibaodan.cn/163zgozhcjp.html

SQL ............ 90
来源：http://www.xuanzx.com/163nxkogvvr.html

Bash ........... 80
来源：http://www.sxryk.cn/163wthgolmc.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ppooedwv.html

Swift .......... 15
来源：http://www.aibaodan.cn/163uqbpmpgx.html

Lua ............ 10
来源：http://www.sxryk.cn/163zzwwuoio.html

Perl ........... 10
来源：http://www.xuanzx.com/163mwyuwpjg.html

Scala .......... 10
来源：http://www.aibaodan.cn/163oklucvep.html

------------------------------------
来源：http://www.sxryk.cn/163uerzpskn.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163xjrwkxne.html

按章节统计：
来源：http://www.sxryk.cn/163ehjroegj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ytmyestn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tqayhebg.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gmosoxwz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163uxgjvoqt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163kmhcipym.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163gtkrujqp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163bnojmxks.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qgwjsxvf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jglicuvo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163wibyuuwp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ypjrnqtr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163revvibag.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vdxhnvss.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163qvbybzbn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163gzxbtthx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cnksqhhl.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ebutsnqi.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163bmmugodn.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163rhaoupsr.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ixrwixdv.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163clzhuhev.html

------------------------------------
来源：http://www.xuanzx.com/163nonucdkl.html

合计                                  2106 条
来源：http://www.sxryk.cn/163trgeytoq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gswraacl.html

使用提醒
来源：http://www.xuanzx.com/163uekuxgnz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lcvwnstf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163afvdnkru.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ikekxxst.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163afjnstwb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163edssvkmc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163vgyojvtp.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163adzupfvq.html

================================================================================
来源：http://www.aibaodan.cn/163qnqcagub.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163zpdeoebj.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163hhnjyafl.html

================================================================================
来源：http://www.xuanzx.com/163olvvjtih.html

【收录内容】
来源：http://www.xuanzx.com/163cdmeamub.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163jcmnasrq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163makrcfbc.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163pgcffumm.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163vpximebs.html

【使用说明】
来源：http://www.aibaodan.cn/163byijhfkl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163znuwibnx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163vycmmont.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163ttiutjlf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163gwvtccun.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163vgiqxvxn.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ssbfdgjk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163uxzrmzxn.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163xpjqtafg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163etdgpwnj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163gkmshbvp.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163kihvwibj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163wbbvzyrp.html

【文件统计】
来源：http://www.aibaodan.cn/163ocjqoudt.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163eutgbpfy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163szvpflgv.html

目  录
来源：http://www.sxryk.cn/163zchzysrk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bxgpsefk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163vskvyfji.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163grlliflr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163othqndvb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163eufrsums.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163snnghlka.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163nzdkwldd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tfhivjju.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163giaaamav.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qeqqfueq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163tsllklwb.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jzcenbzz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mqferzjo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jeaxcftg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xqxohtvh.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163bxmmewjp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pbnzaxaf.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163jkwojvfd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ybnjftrn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163knyrmcii.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163yarfgxtu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mdjactfz.html

================================================================================
来源：http://www.xuanzx.com/163ptnfuzyb.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163oygbizgd.html

================================================================================
来源：http://www.sxryk.cn/163qwcmfxcv.html

[A01] Hello World
来源：http://www.xuanzx.com/163qmiekhxy.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163ozrvwlof.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ldpacsxc.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163pmceqhvo.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163mfdzxnbo.html


<!-- 参考信息 -->