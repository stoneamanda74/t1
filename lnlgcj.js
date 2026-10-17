外链999!wailian999！

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ihvnlapx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163yhqphnup.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163tfvftlsq.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163gkcrfyfv.html

[U31] Py：单测
来源：http://www.sxryk.cn/163fqwmlhkv.html

python -m pytest -q
来源：http://www.sxryk.cn/163xlsogkik.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163nnzqlash.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163tbbiferz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163obomdpnv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163qhjasswf.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163pifapxgl.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ecdlncuc.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163afefqurk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ihioqphn.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163pflivpiw.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163giiozzua.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163bohqspgg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163uqmwrewg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163pjrajzey.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163mfcdtrsa.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163mlvhjaxw.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163iujlezqx.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163avqgtngn.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ylvxoqgo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163bumfjsfs.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163pxqvcwxw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163xgqeltnh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163wjupbdvw.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ytdrfblt.html

namespace App\Http;
来源：http://www.sxryk.cn/163nylyrdfy.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163tgydlopg.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163ydvrjjkz.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163osucuiou.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tpkvrwyh.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163aknspvct.html

?string $name = null
来源：http://www.sxryk.cn/163tnmkvcsr.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163dyirwbuk.html

int|string $id
来源：http://www.aibaodan.cn/163qfsoeznc.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163gchskxph.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163jpkhmuux.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163vvzbsseq.html

public readonly string $name
来源：http://www.sxryk.cn/163ovkxuviv.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163wmrwdvrk.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163pavjucod.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163lhribirv.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163zenobjqs.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163wuutwjxj.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163fgdycooy.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163yvyytjir.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163xwsjwdbw.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163xneplvhz.html

$obj?->method()
来源：http://www.sxryk.cn/163asybpafi.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163dxmvyzvf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163wgnxuvbo.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163sdaxhjvq.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wofwrcsr.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163spxflkkv.html

"值: {$a}"
来源：http://www.aibaodan.cn/163pqqmgnak.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163tbwkdlwx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163gxwaxwor.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163cqazetqs.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zkkiygau.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163vruwmfbi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163vcmsuree.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163xynmpzvw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163oyxubqnx.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163gtjankmv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163qiikveii.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163jyhsaasa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ddhundwi.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163bwoxzywc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163puijasgn.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163laomfvbx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163esqnyrin.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163njhewbmt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163posiowbz.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163nwbqhnbi.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163zqjgptvf.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ihuutkxn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ivsykyik.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163zvxaxzkf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163mfuzjtpf.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163dsajekwe.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163embyfpoe.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ttsxdvwt.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163lqxxomtj.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163prctnvqi.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163nigvjakw.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163rgttxflb.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163oppflajo.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163oggehquo.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163oymznehw.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163grnrwnbb.html

composer require psr/container
来源：http://www.sxryk.cn/163oremsbcv.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163poemiajz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163dhscrzpu.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163dxcosgaf.html

composer require twig/twig
来源：http://www.sxryk.cn/163gxjdzdve.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163knysitpn.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163oryzavnk.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163rhfwgpqc.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163occgqpqz.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163rmqjbzza.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163pkppawca.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163vwmvohtq.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163eyszitbh.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163luemjfic.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163zcyvmuon.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163cqckogiw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163cquqweaf.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163rzhgdzbj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ydmccuby.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163splgcyer.html

a?.b?.c
来源：http://www.xuanzx.com/163srhceypp.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163xajydmgh.html

a ?? b
来源：http://www.xuanzx.com/163mtheuqap.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163uvuudfaz.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163scdxjlin.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163dfyeolvl.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163wqebvohe.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163pflyodbu.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163bzvymtjb.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163nplgxmjl.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wwmkxoyg.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163tzdxexth.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163fjeqwkbv.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163nasfueua.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163geutbyrk.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163zwqfoplv.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163sloxyumr.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163nrqafwyl.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163drcndbym.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163wbvwsvyg.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163exkrsbtt.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ghniukbp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163fwvxdsry.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163wivlgvuq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bccwujmt.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163njpnnfpp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163pobwsfbv.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163anqaqgzp.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163mnbxavvu.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163fgoptgoc.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ezlxladz.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163cyqfozox.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163nuukbezh.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163kecikxmh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163caohwjoh.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163oxblldqr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163pmgmsthz.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ptbokjjs.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rtryrsfq.html

[U105] JS：节流
来源：http://www.xuanzx.com/163wjhgbuwl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163cqoaxtdq.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163tlnnpoze.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163oongprle.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wabzcnla.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163rkybdteh.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ufistosw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dnmhygxa.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163vmtesbhs.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163aukrkuxj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ndsyhjvp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163wytveudj.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163zpcahyiv.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163jjoqwiqj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163xnxpiqxx.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163iaawnbwc.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ktgwbtfl.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163llkesbxh.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163kuvkghpi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rycjjrou.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163kbfspuzc.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163bazfahhf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163qjajlpbj.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ebpvpkza.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163yuyrzrna.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ckdzwlbm.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163vyemjazw.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163zeshdfvk.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163rhhmrpys.html

npx vite build
来源：http://www.xuanzx.com/163tmfwjxoh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163wdkqryht.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163jrxjmdsq.html

================================================================================
来源：http://www.xuanzx.com/163mlcabwnn.html

统计汇总
来源：http://www.xuanzx.com/163tayaapok.html

================================================================================
来源：http://www.sxryk.cn/163dfqigidy.html

按语言统计（条）：
来源：http://www.sxryk.cn/163cdlsuwxh.html

Python ......... 252
来源：http://www.aibaodan.cn/163evhxculm.html

PHP ............ 252
来源：http://www.xuanzx.com/163bhgrvbau.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163uppkwrli.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163jmnmpowc.html

Java ........... 212
来源：http://www.aibaodan.cn/163yflxxruc.html

Go ............. 212
来源：http://www.sxryk.cn/163sytpxaah.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ixjhwstq.html

C# ............. 212
来源：http://www.xuanzx.com/163vezsjlyr.html

C .............. 30
来源：http://www.sxryk.cn/163ixuaqpos.html

C++ ............ 30
来源：http://www.sxryk.cn/163ohmuxprg.html

SQL ............ 90
来源：http://www.xuanzx.com/163eoqydtce.html

Bash ........... 80
来源：http://www.aibaodan.cn/163rjzyfegg.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163wocneqav.html

Swift .......... 15
来源：http://www.sxryk.cn/163rjginxcj.html

Lua ............ 10
来源：http://www.aibaodan.cn/163swhmzuau.html

Perl ........... 10
来源：http://www.sxryk.cn/163qupyifqv.html

Scala .......... 10
来源：http://www.xuanzx.com/163htjpamaq.html

------------------------------------
来源：http://www.xuanzx.com/163derhxfsc.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163lrrefrtt.html

按章节统计：
来源：http://www.aibaodan.cn/163zocydkna.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vlfijfij.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163frijvias.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163cbqjtqdm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163garqaogb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163pwufaglx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pwmbvxlp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163asmkztis.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163pgpbndng.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pakssryq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163wnujbeqw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163spqvaarl.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163idobaeze.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dygecpoq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163skwozgsy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163atxbgnti.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163efbmvfpw.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163dnczxliy.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163nzmonxxv.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163uvbsjrfk.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ypclmrbm.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163iqexxmhm.html

------------------------------------
来源：http://www.xuanzx.com/163jjnrxyiz.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163xasfieyx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163dbtkwpqx.html

使用提醒
来源：http://www.xuanzx.com/163luhtgjqt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pyohcbmt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163yoymenld.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163rgvypmxz.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163zxddepkt.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xcmjoemg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163szeeegwk.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163sostrgur.html

================================================================================
来源：http://www.xuanzx.com/163wuzypjmw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163tnwweqti.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163dijdsonp.html

================================================================================
来源：http://www.xuanzx.com/163pauuimtj.html

【收录内容】
来源：http://www.sxryk.cn/163xtfpkgvc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163gcjtmrvx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163lxzxapmq.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163jjesmcqw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163oohhorob.html

【使用说明】
来源：http://www.sxryk.cn/163uburythx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ccgzeevz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163puuatjij.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163cjzzmjxb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ufjxgsln.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163rpaejlxf.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163lmwkceku.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ieotfemh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163vytasscw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163pmkqlpqn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ctclpfvf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163pptjyher.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163mscecluw.html

【文件统计】
来源：http://www.aibaodan.cn/163nngklnrz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163rfzvhmzu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163obgqrvyj.html

目  录
来源：http://www.xuanzx.com/163sszbozlc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163cjbvdgmn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163piwontem.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gdlloyom.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bhxrejns.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163slwavtvq.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ttbglrel.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163yuhzlota.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163znbnwybs.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163rznetlei.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163oeidlhgw.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163grywfscc.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jjjfrgqa.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163aqzsmgki.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ezgsehpj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163uzlkwfuq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163mpwstbdq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zlphoyep.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ajyisjvg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163pycfjalc.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163lizstawh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vdmrykgn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163owcjcbzg.html

================================================================================
来源：http://www.aibaodan.cn/163gqrijnly.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163gcgsyslw.html

================================================================================
来源：http://www.xuanzx.com/163kjnnppwj.html

[A01] Hello World
来源：http://www.sxryk.cn/163dcpqvbst.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163qcrzihsv.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163cxboblcg.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163ulylfrmf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163gywoaxtj.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163evobruhp.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163gqbsegmj.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163cczevaeb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163sdiwrsbj.html


<!-- 参考信息 -->