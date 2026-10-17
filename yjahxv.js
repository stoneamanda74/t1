外链999!wailian999！

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163pysjviqh.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163qvhdhdvc.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ytcagjdi.html

defaultdict(list)
来源：http://www.sxryk.cn/163ogxujvms.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163zhitxxad.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163xllxakzj.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163gnhjvgto.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ovwmdabw.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163zvcskfpt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163klsnjrpa.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ymuyskpl.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163kncgpclk.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ccopuwoa.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163fsxsyrzu.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163jcayetbo.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163wmaoocmd.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163qgajlwpd.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ilxhhlyj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163fjektsnm.html

list(zip(*m))
来源：http://www.aibaodan.cn/163tjzyjhzg.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163slllkhdl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163asbeszee.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163nxjjjpjb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163xppuojag.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163yuypdurv.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163lctlcvmc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ihsbuamn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163moejolij.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ozedlmgo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163qejznnmy.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163japbntrf.html

UserId = int
来源：http://www.sxryk.cn/163shdyqbbe.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163qxjxnhgt.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163fpeshsgw.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ersqffyg.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163pdaaxhqm.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163tgftivma.html

python -m pytest -q
来源：http://www.aibaodan.cn/163anpznxly.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163vpkcedsw.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163iotptihk.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163smwadkoc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163nreyrhcc.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163zhcmwujv.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163eqseqyrz.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ffcrsvbe.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163gfahhbst.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163gpuxijrc.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163xqojbtxt.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163oxotjazh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163muwsffem.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163stnbqlqu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ozrzqeuv.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163cxqmwvwo.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163yngeqqpn.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ougavode.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jisnkflb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163lqtjbovt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163mjjfdtpc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163eaglrtob.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163zalkymur.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163utlxmdhc.html

namespace App\Http;
来源：http://www.xuanzx.com/163pgewyoju.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163evbzqbld.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163rmysdfmo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163tlssgpbl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rpdfsusq.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ifgbkvee.html

?string $name = null
来源：http://www.xuanzx.com/163eopazaof.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163txvfrrpk.html

int|string $id
来源：http://www.xuanzx.com/163dmyqvhql.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163qdotkgga.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ikyaujvu.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163nztqgvja.html

public readonly string $name
来源：http://www.sxryk.cn/163wlofbcsu.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163kyipkdws.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163tpgxfapg.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163syvzdqmn.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163iydozplh.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163qtnajtbn.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163qlakqmoc.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163fjgzzrxx.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163yguybcsx.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163qqbiyloq.html

$obj?->method()
来源：http://www.sxryk.cn/163akzdvcqp.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163qqsurinz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163zkeqakez.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163tqjfccbs.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oclfuuyl.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163crrhgihq.html

"值: {$a}"
来源：http://www.aibaodan.cn/163bwnnctxs.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163shyvduft.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163hnzofnzr.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163rlyjrimk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cjnlhdgv.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163pcfobzql.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163egrvxzmq.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163nucgnxbr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xhalxptn.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163yetqqgxj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163atzdfwti.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163bsvpbamr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163xqagnbvs.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163gwjtrlaq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163klbnkzqm.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163xncdudvy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163sprhiwch.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163vbbvkuoz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163jbojhscs.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163emimzvmc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163fowljsqj.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163cqdsyamt.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ghmgmxaz.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163uyakjpwt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163jbllsxok.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163slykqolm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163imtvcmoe.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163bduowmls.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163oncvxuco.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163usletmti.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163aiapdlug.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163tiykhpsg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163amktjliz.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163dfwwlzei.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163sjifivno.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163deixyduh.html

composer require psr/container
来源：http://www.xuanzx.com/163osawxfoc.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163qbrqtoix.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163kbdenpsz.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163azuwuhan.html

composer require twig/twig
来源：http://www.sxryk.cn/163cabtbjte.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163evwksual.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163lrakhcoe.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163alhinkpb.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163apwxfcce.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163byqvtxjk.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163uaxkyqlq.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wtmxkgau.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163brmyznls.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163fadlyejm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163syovbbvb.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163azehlaqg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ioyjzjlj.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163hsrtrakk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163eknaqxtj.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163bhsgyted.html

a?.b?.c
来源：http://www.sxryk.cn/163ecobfmww.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163usfckavu.html

a ?? b
来源：http://www.xuanzx.com/163iucmkvfj.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163kurbcxhx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163adrwysop.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163iqdmaife.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163wkvfwhbf.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163uuomuqcz.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163igefngiw.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ttdibrgb.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mrfsttht.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163jiiridzx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163pfkhbczz.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163aqhfwlkg.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163pzzxahyi.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163yrizcxmo.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163oniulccd.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163yogdncvp.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163vvjwikyx.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163yrqjdrts.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163iggopnnx.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163rvvpnzhf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vssnxlnr.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ezktnncd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163avatmmyq.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163rhffbjvh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163yhcrhqxk.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163cobebhvw.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163rvuhtopb.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163uzpuiosn.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163lnucqpqr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ohnubhkc.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163mzazhdbp.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163rslefvfz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163cwdlyrdx.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163fmiqvbfi.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163zxniatep.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163luqtuuvo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vrrqzwts.html

[U105] JS：节流
来源：http://www.sxryk.cn/163mbaxyqpr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163prqsscji.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163qssnzobv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ygvmmptg.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163qlwpnbar.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163uhscwyeo.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163awshauke.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163hqdvvojz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kccwmtlq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qrcsvjjx.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163fbjdcaif.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163haxngbhd.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163kpphzxzz.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163zjqxduiq.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163cseoudzm.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ncjmfyhd.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ubcrkmnj.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ngxomvsb.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163gthgagnj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163zzhsxcft.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163fetpfqci.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163nmtpvzls.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163noqfggfe.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163hblmraxm.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163zrrfwsny.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163jpujjhqw.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163xofagfno.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163zldsuzng.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163citxolcu.html

npx vite build
来源：http://www.xuanzx.com/163nolibduo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163rmdivqpz.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163dtehunqb.html

================================================================================
来源：http://www.sxryk.cn/163nmamtyza.html

统计汇总
来源：http://www.sxryk.cn/163higuaokq.html

================================================================================
来源：http://www.sxryk.cn/163gzvvagzk.html

按语言统计（条）：
来源：http://www.sxryk.cn/163tbcxczka.html

Python ......... 252
来源：http://www.aibaodan.cn/163mgnrltmo.html

PHP ............ 252
来源：http://www.xuanzx.com/163clahqfrk.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163houpvmdf.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163xxluvkbg.html

Java ........... 212
来源：http://www.sxryk.cn/163mkixngpt.html

Go ............. 212
来源：http://www.xuanzx.com/163avftufsu.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163fgklralh.html

C# ............. 212
来源：http://www.sxryk.cn/163jesndcmc.html

C .............. 30
来源：http://www.sxryk.cn/163xuokioli.html

C++ ............ 30
来源：http://www.aibaodan.cn/163froufztp.html

SQL ............ 90
来源：http://www.aibaodan.cn/163mqezwoqc.html

Bash ........... 80
来源：http://www.xuanzx.com/163arzltmig.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163fbzwweka.html

Swift .......... 15
来源：http://www.sxryk.cn/163ryymfpma.html

Lua ............ 10
来源：http://www.sxryk.cn/163uadwpavh.html

Perl ........... 10
来源：http://www.sxryk.cn/163ceqngymc.html

Scala .......... 10
来源：http://www.aibaodan.cn/163wacfktja.html

------------------------------------
来源：http://www.sxryk.cn/163xpucdala.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163kbkchwdo.html

按章节统计：
来源：http://www.xuanzx.com/163ahxxkzax.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163edqjdcwl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tbukdhzk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163aljktvuj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wivhokfn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163dwehwnrz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zvvcddtl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163uamsntvj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163luldlzqc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zhskpzhz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163hxtlpidi.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dlejrmkh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hvjtrxev.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vadjiqbf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163srrpuycc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163anyevrys.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rxjownfa.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163fzjavost.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163dzgunpaq.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163jwmwppyk.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163dmipntjs.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163rmdfnkki.html

------------------------------------
来源：http://www.aibaodan.cn/163kujxhbxy.html

合计                                  2106 条
来源：http://www.sxryk.cn/163ikecmhjp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zopowmkg.html

使用提醒
来源：http://www.xuanzx.com/163tjqhhznj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lmwyphlo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163mmcprrbk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163twlfqabw.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163fjvdlqbx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163wnjkhbjk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163rpjwspcy.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163stwomlag.html

================================================================================
来源：http://www.aibaodan.cn/163lozzvmas.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163otzuwsbh.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163qjnhgtuk.html

================================================================================
来源：http://www.xuanzx.com/163zdstboae.html

【收录内容】
来源：http://www.xuanzx.com/163ftiynjuj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163pzarmtjn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163jhutjwzi.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163utlzekwa.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163wecetnov.html

【使用说明】
来源：http://www.xuanzx.com/163crdomnxy.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163fhqhykel.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163cfsbwgub.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163kscjqeke.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163zyvfoafw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163sxdlfrpl.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ljrzczdn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163bcptdlcm.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163rmvtogem.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163mcxulnwl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163fnlqatwa.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163fcwzuqkd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163bcwxjzwe.html

【文件统计】
来源：http://www.sxryk.cn/163mavqtrub.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163vwusnvgl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nushhnvq.html

目  录
来源：http://www.xuanzx.com/163lxhoqxmh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xppdvhde.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163dsagdwlf.html


<!-- 参考信息 -->