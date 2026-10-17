外链999!wailian999！

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163txqmqwsb.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163mqtnieki.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gqlipkot.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163hkymfngp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163dgjednhh.html

================================================================================
来源：http://www.aibaodan.cn/163ssfzsdsc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163cpihqdce.html

================================================================================
来源：http://www.aibaodan.cn/163tqyhaehp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163avoijxvn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163vqvkkvrk.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163izncghmf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163wbwdbyem.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163bwdtqpgh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163rcdaaxla.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163slvszcbs.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163gbflieit.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ictibkin.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163edrnoqsn.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163cgmwyugf.html

{**a, **b}
来源：http://www.sxryk.cn/163yzyymrti.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163tizchubq.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163imewhvxs.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163tobkawje.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163fevvvweq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ttiksyvp.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163pzscgayy.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163cxhvyada.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163eoysscge.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163iinyafip.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163pnopckyr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163obteznji.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163gazepmqm.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163dwshzmtw.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163xiyotnze.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163wjvcfkml.html

defaultdict(list)
来源：http://www.xuanzx.com/163wemqwtzs.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163kxmypweu.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163elvvsjfk.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163kqynleeh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163lkszeelu.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163odupfreg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ztfwvdqx.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163rztjnxjd.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163dsgffrvn.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163kzrawgqw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163fmgsujpj.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163bcxctswn.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163uagzmyeo.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163yykrdmjv.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163hkykqpjv.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163kasedymn.html

list(zip(*m))
来源：http://www.aibaodan.cn/163urgrnyou.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163uhdzwado.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ekdkmwrj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163zqxzufpj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163bcfnzqib.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163fgtzlbvr.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163dkshmkvx.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163qxctphue.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163wafjbelx.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163qvndzerg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163uynjtvem.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163usxufsit.html

UserId = int
来源：http://www.sxryk.cn/163asxabyda.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163csdzpqgx.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163dffroelr.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163wgzlzbjy.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163vgoctbjl.html

[U31] Py：单测
来源：http://www.xuanzx.com/163zlhfixzo.html

python -m pytest -q
来源：http://www.aibaodan.cn/163nyodtknw.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ptdfgjhm.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163obsaxftm.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163sjamylbc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163nxxudmuh.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163wtcmwwwp.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163sskrakzy.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163yzjziowc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163rclupznn.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163fmaafsfm.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163tncnkbss.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ytqculho.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ldkbdkbt.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vtyaqyuw.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163oqgxxrcu.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163bygtzajg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163gzalyboq.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163pcbsmaeh.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163umluykzn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163durjajra.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163slghdfkc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163rvnlllcv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163fhgwbiwz.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163yenhqeki.html

namespace App\Http;
来源：http://www.xuanzx.com/163ciaueapw.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163jitgvfds.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163epsktxwg.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163yzjxzxiz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kpdrctem.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163owhhtkrn.html

?string $name = null
来源：http://www.aibaodan.cn/163oeesvwbb.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163twpvbbzk.html

int|string $id
来源：http://www.aibaodan.cn/163yvljbdmx.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163pxlttubs.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163sgkbxmev.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163adgmwyrp.html

public readonly string $name
来源：http://www.aibaodan.cn/163fvyntxsf.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163yqxoqcrv.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ywpqdgwe.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163xhjtkegj.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163msivttfj.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163dkomqoms.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163sufktebb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163giodxvvi.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163bifyswiv.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163ehbwwqfy.html

$obj?->method()
来源：http://www.xuanzx.com/163onodrifp.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163zxlaporv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163leclxxxb.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163idumoypr.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163judkrqww.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163shozdxeo.html

"值: {$a}"
来源：http://www.xuanzx.com/163cplwmssq.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163emuaxqdg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163lkmlttvz.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163vapuvboa.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163tdqhsrer.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ktjjeulr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163hqubldzn.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163lrlnqecs.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fgwqyhrf.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163prqhmish.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163kzxoyxws.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163xzjssylz.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163umuzjueh.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163nebzoeck.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163lvxxabku.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163giohbyfo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163unrnyzvc.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163zvmspufc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163fejbkbze.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163gbjmezwe.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163bchxaxpd.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wlofodab.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163qjuuiucd.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163rohinrwt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163oabddwuj.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163dszkdjlz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163bgmgsimu.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163nlfzkoml.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163zsrqeaha.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xckamdaj.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163mliwcobt.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163tcndknyo.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163mailxxeq.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163usjurqqf.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163pxfeiynk.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163fwwzlufe.html

composer require psr/container
来源：http://www.xuanzx.com/163qhxhnreh.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163rogsvtew.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163dnlpkmzh.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163epphonss.html

composer require twig/twig
来源：http://www.sxryk.cn/163hhmevvuz.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163gjbwgmmg.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163xihjnkdx.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163rapgkmap.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ffjvsapv.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163opjaxyaa.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163wzdnlvkq.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163avutzgix.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163zxpfjxpe.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163mjhevlze.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163thjxhmfa.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163qhubrofm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163hzcjbllu.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163pcjgpeeu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ojvvwxhg.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163wnambrep.html

a?.b?.c
来源：http://www.sxryk.cn/163commnkzr.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163grfcecmq.html

a ?? b
来源：http://www.aibaodan.cn/163whhgulcm.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163vnixbqrl.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163eccelvjy.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163rvjmtkbk.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163jngyryrz.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ojfxbigk.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163sejlfmyj.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163qrvghdun.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dutjdphm.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163vkucqztp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163lukmwlon.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163adxjvynr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163xywgvlte.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163txbrznzb.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163nirdluat.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163jdyrknre.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163fdcszbyn.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163uptonnla.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163wpuyfnrm.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163extuxrpn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zljiwugy.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163dengrpbi.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bxhohgxf.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163echuqzwb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163swifessu.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163duewwbsf.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163iigfbnhn.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163wyqrvzms.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163likweihb.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163lexrjjwz.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163dbmxsssk.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163rwhrpxfb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163nhycyyxt.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163ahynmkwk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163atcswskz.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163hdrghziw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bnvfaspd.html

[U105] JS：节流
来源：http://www.sxryk.cn/163hpjsyjtz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163uxrmbnqi.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163tebvpvqv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163gtvjkfpy.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163xoyspeyb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xnwpxinn.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163xjaazdor.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ziplkwcl.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ikijtzrm.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fcvawmhw.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163vrslbjeo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163czmdrdsx.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163isfzedza.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163mgktiwxj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163qqyogtus.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ywpugylf.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ykpthrdn.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mzeigtel.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ltcvnhys.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163txeoihcm.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163bpusyuyp.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163cmrlcsnp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163hmxkxhhf.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ejakasfj.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163rwpcmgmg.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163fvopljtq.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163loxjflwz.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163cffggfpi.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163lqrbgljt.html

npx vite build
来源：http://www.aibaodan.cn/163aowlxgsf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163woduseqe.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163csclxmyq.html

================================================================================
来源：http://www.aibaodan.cn/163zxdwprvo.html

统计汇总
来源：http://www.xuanzx.com/163qqaxdmsx.html

================================================================================
来源：http://www.aibaodan.cn/163tfuxkvko.html

按语言统计（条）：
来源：http://www.sxryk.cn/163yenhmwot.html

Python ......... 252
来源：http://www.xuanzx.com/163axxgswue.html

PHP ............ 252
来源：http://www.xuanzx.com/163vojypkww.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163mjzutzaf.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163vfwpohsd.html

Java ........... 212
来源：http://www.sxryk.cn/163kaikdhdh.html

Go ............. 212
来源：http://www.sxryk.cn/163kwogcjjm.html

Ruby ........... 212
来源：http://www.xuanzx.com/163aitepivk.html

C# ............. 212
来源：http://www.aibaodan.cn/163sabevfhk.html

C .............. 30
来源：http://www.xuanzx.com/163ddiuvmzs.html

C++ ............ 30
来源：http://www.xuanzx.com/163ybpmtowm.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ahgiwwmp.html

Bash ........... 80
来源：http://www.xuanzx.com/163yxpjajou.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163rmipzvyf.html

Swift .......... 15
来源：http://www.sxryk.cn/163bjwzabar.html

Lua ............ 10
来源：http://www.sxryk.cn/163bbcezmzq.html

Perl ........... 10
来源：http://www.sxryk.cn/163kctrmuuy.html

Scala .......... 10
来源：http://www.xuanzx.com/163rzfaenxv.html

------------------------------------
来源：http://www.xuanzx.com/163ruweadzb.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163kzasimsr.html

按章节统计：
来源：http://www.aibaodan.cn/163oixrspxf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hufexlsg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163oicpxnde.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hewaoukq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ynpfrdim.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163iuitmyvm.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163suniuuwl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ticczawq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163pekttxkp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wbdewnky.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163weseivao.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xjfaapsq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wehzcgbw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163utqbelzf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163gvsalztd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ndcwyfsh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wnrmmziw.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163pxjwsspl.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163fdrntbfd.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163puprnbxb.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163mearxyaa.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163kakdrxrn.html

------------------------------------
来源：http://www.sxryk.cn/163izsnkhdb.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163vzgcfziq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xumyxizx.html

使用提醒
来源：http://www.xuanzx.com/163suxzwoio.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ekojknwt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163rgeoajpg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163kqtaqjam.html


<!-- 参考信息 -->