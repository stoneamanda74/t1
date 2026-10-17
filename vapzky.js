外链999!wailian999！

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163sxmdobir.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163lqggmhkc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163aytddvfn.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ytrqjnxm.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163heatpmlv.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163kssvxqje.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163acpxwhem.html

defaultdict(list)
来源：http://www.aibaodan.cn/163myabvuym.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163qbfolzdp.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ghepvmam.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163vfqoavms.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163qtmdpopp.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163kcjqnvlp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163oudckbep.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ghvgugmo.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163shmczolb.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163anshktsr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163pvplwtle.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163flsgsrqe.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163inhzspri.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163wuqrmbzo.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163vlheqsgp.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163gwstllav.html

list(zip(*m))
来源：http://www.sxryk.cn/163avmbvlvx.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163fqouzomp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ukgbvnty.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163mjppkwur.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163idxyzhue.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163lpotwfgf.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163wucikkuc.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163yhikndzz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163sgjhipmo.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163swqxwius.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163kkdqrvny.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163flyaggqd.html

UserId = int
来源：http://www.aibaodan.cn/163agzouttz.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163cglnbyon.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163oojkwjnh.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163szrkaaiu.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ozknuwyn.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163zepdmrqy.html

python -m pytest -q
来源：http://www.xuanzx.com/163ahwjszot.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163iydbcytp.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163xrmsgwob.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163xwriviat.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163sxohtkzs.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ydjfajhn.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163dpvsjrib.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163cfpkoogg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163kqjnkcxa.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163epxfbols.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163rcksdaax.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pqugkzyr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163trrpwyqv.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163sugvmhdu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163kfmpdmku.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163besaqito.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163jwkglajp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163mybjnwyx.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163scopmtkm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163jgeashdu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163jbbdwzhd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tdyibwjl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163kbjglhjh.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163hbxvhmak.html

namespace App\Http;
来源：http://www.aibaodan.cn/163eoykzutc.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163uldehdtt.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ftctovaw.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163gsczfuui.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163waxplecx.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163owsrhedq.html

?string $name = null
来源：http://www.aibaodan.cn/163eeffdeqm.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ggscznkk.html

int|string $id
来源：http://www.sxryk.cn/163ydcunomz.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163rvudlaqj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163iyvjgvnm.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163rnmbpszn.html

public readonly string $name
来源：http://www.xuanzx.com/163vhrxoxlz.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163fqplpxsu.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163cwexmcop.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ffcwmzki.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163qogeryqt.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163lebjgrkh.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163fnlzvbux.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163bbzoarpt.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163fewaiwih.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163tkuplqez.html

$obj?->method()
来源：http://www.sxryk.cn/163dnsmgtqb.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163mbiglcxn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163gioahdtv.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163fibbnixd.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163knmohfib.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163odtcauyo.html

"值: {$a}"
来源：http://www.sxryk.cn/163xgzjtfzz.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163hervoopl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163skgwatoz.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163rlceoxzo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163sxfvfihy.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163xljvbbxp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163myqfkyem.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163znoadsbl.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wniycqxx.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163wjlwgsgh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163mbgshwvg.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163dghsltgn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163svoxxxsd.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163lhryszve.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163qegbphxx.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163fdblbynn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163glhhtkdo.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163rvxlwfqr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163seabmqvb.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163dzrhtzih.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163yqaxapzw.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163iknswoex.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163kvahmlqq.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163judlkihd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163podypajo.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qavzqikh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163vlszuspy.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163nqwdqydr.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163itjymrhc.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163uknhpznv.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ktnuyvxo.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163awapzltt.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163oljqnezh.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163nwxxuhax.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163duklmpfs.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163jgooehju.html

composer require psr/container
来源：http://www.xuanzx.com/163yhhcukey.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163kjxfwgcs.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163fniwweja.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163scjfaqov.html

composer require twig/twig
来源：http://www.sxryk.cn/163vlsqyedi.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163wupaenjr.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163nbmetatu.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163dwdhlgom.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163yutmignk.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163jpxueetu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163rxtdncmz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163hntqafqa.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ptuujhep.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ihnngthr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163bkwnnmuu.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163lcyugudt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163upocxaky.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163yvvjochm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163vwhhncsl.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ajfecbxl.html

a?.b?.c
来源：http://www.aibaodan.cn/163qqigrcya.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ijiiqmrw.html

a ?? b
来源：http://www.sxryk.cn/163yqsfpjie.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163kdnjajui.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163hroyjbgv.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163qswmsaqe.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163jioynwhl.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163oxjoelar.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163rapldjec.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163qjmpinhg.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qypxlccu.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163zejiydyx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163uileezpn.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163qkovqwhz.html

structuredClone(obj)
来源：http://www.xuanzx.com/163vxncknwg.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163godalsxe.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163nniwvbhd.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163gjmhqlqk.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163bnhqtcqm.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ryyiwbot.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163yhhlkcxw.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163oyvweghw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lkuttfvf.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163fsqojuir.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dyduyckl.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163eojwnttk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163alinjarq.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163npnngnlz.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163utleqxcb.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163lyczvphd.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163jlcildnp.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163qcrjstmo.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163fboigtbx.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163xmlxxoty.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163beazsfzw.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163nneduewv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163luyqyshz.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163lotllzfw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163uosdqdxj.html

[U105] JS：节流
来源：http://www.sxryk.cn/163omyotuot.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163tjlxcajo.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ffsuoxpf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163vwtohfft.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ncbucpak.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163prwoksjx.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163vwvmugne.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163zhimwjwz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163rgsafdye.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bkdmhwvo.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163znwhjbvk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163azenffzb.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ettmrtrx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163aifrbsuy.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163pzbrspfv.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163tkiowanx.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163pnvoznps.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iabklhqi.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163kbvnaxqk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163voesbwgn.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163lalpiuvo.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163tcmuvjuz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163rstpmfov.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163vataldbx.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wefkyinw.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163hgnresrk.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163puiwxrur.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163tmlhpbbv.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163iznxbwpc.html

npx vite build
来源：http://www.aibaodan.cn/163ixzrbhcq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163falnbjuv.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163oleqpubs.html

================================================================================
来源：http://www.aibaodan.cn/163xfajdkzx.html

统计汇总
来源：http://www.xuanzx.com/163qfqckvkz.html

================================================================================
来源：http://www.xuanzx.com/163gdxwygdx.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ssbdenfs.html

Python ......... 252
来源：http://www.aibaodan.cn/163utbcupdn.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pxbzzghc.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163lfhagfaj.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163wolwosfi.html

Java ........... 212
来源：http://www.aibaodan.cn/163epxbaamx.html

Go ............. 212
来源：http://www.sxryk.cn/163mlxptine.html

Ruby ........... 212
来源：http://www.xuanzx.com/163tpbgylub.html

C# ............. 212
来源：http://www.aibaodan.cn/163smrxbahg.html

C .............. 30
来源：http://www.sxryk.cn/163aeqbsasd.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ewktnmlw.html

SQL ............ 90
来源：http://www.sxryk.cn/163kbzsubch.html

Bash ........... 80
来源：http://www.aibaodan.cn/163xrcrtbhe.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163riczuqwj.html

Swift .......... 15
来源：http://www.sxryk.cn/163vknobzhx.html

Lua ............ 10
来源：http://www.sxryk.cn/163yornumyh.html

Perl ........... 10
来源：http://www.aibaodan.cn/163rraayytq.html

Scala .......... 10
来源：http://www.sxryk.cn/163mvyzxryo.html

------------------------------------
来源：http://www.xuanzx.com/163qcarxtcy.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163zslxaymh.html

按章节统计：
来源：http://www.aibaodan.cn/163fbxkscyl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jabcsilj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ofutydkw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vdtskkhq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163kqxvuhbw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163numnfccc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vqreoijh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fvdsxmdr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zemmkzze.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sbgeyrix.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163cdexscll.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kbkktrgx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163piwjmuwd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163anvkgrjv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hxvuonko.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163syixpqvq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163idswgkit.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163fwizzshb.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163jtiziouz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163dabvqkjc.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163hgsikylq.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163uhvymwfb.html

------------------------------------
来源：http://www.xuanzx.com/163rnpoimdp.html

合计                                  2106 条
来源：http://www.xuanzx.com/163kkntdgph.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cbyfwdvg.html

使用提醒
来源：http://www.sxryk.cn/163urtyclbo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gqtbmlij.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163jlysrtiw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163qhvkrdqq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163brwocbce.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163lduuqlxl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163pgadvlbp.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163mwtfgvnj.html

================================================================================
来源：http://www.xuanzx.com/163javxjrxe.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163aurptkrr.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163yikqrezx.html

================================================================================
来源：http://www.sxryk.cn/163qrdbkqil.html

【收录内容】
来源：http://www.xuanzx.com/163uhijpsgp.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163eguynoit.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163eyykrxsn.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163jrymmshm.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163dmewwujl.html

【使用说明】
来源：http://www.sxryk.cn/163hrzmkavv.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163onfkhmct.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163fnuoimws.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163mpmfpvfu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ozchlhpe.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163drcjwbef.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ffgfivmd.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163nchbvjey.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163kmofbtdk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163vaeflpgx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163jmzqngdt.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163lgrimimm.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163zwilnzva.html

【文件统计】
来源：http://www.sxryk.cn/163rqjyorey.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163xnhsxchd.html


<!-- 参考信息 -->