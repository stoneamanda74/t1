外链999!wailian999！

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163llqquetg.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163tpzvqfhx.html

s"值: $b"
来源：http://www.xuanzx.com/163jxctfcvl.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163qarvlkof.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163tqyvfclw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rphurheo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163matghkbh.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163khgnaklp.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163kkykntwe.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ebyhnpik.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163rvmnfhbd.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ghkgdryo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rsllewyr.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163hkdvoaso.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163uicvisqc.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163tjzwmeqh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jqoikfvn.html

================================================================================
来源：http://www.xuanzx.com/163ohwxiwoc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163zfixpoap.html

================================================================================
来源：http://www.aibaodan.cn/163xsiiismn.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ywbozkrp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163wbpiznmf.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163hrxlrsiz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vnobwlqy.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ueotupca.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163itxdprvg.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163qayidpcg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163vdbogztl.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163zveqkxnc.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lluzmoww.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163fzocdvxi.html

{**a, **b}
来源：http://www.sxryk.cn/163zxndriqt.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163osxakodk.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163hlymldem.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163dbixijie.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ielhlsxw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163mmsnfpqs.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163lmkbuwot.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163zwvimhue.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163belesuzh.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163plcsmayx.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163efzqhpka.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163gtcejvnp.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163gokpmnfg.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ltjxrcht.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163qxqmwqmh.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163habniecq.html

defaultdict(list)
来源：http://www.aibaodan.cn/163xijrbiiy.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163gbwzssfg.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163fbvnmonp.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163lfbufzda.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163jpmqlnec.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163uzhadfmo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163hvyrsjdt.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163rcavdfqf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163bwiuskqf.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ewvzzejq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163xsrzftmf.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163epinpkit.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163psdirgyl.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163joehvqta.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ztkotpoc.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163zmncqxdo.html

list(zip(*m))
来源：http://www.xuanzx.com/163mmrbimwz.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163qwcvdxvn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163vbbarrai.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163unwjesqm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163paszvigr.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163kqfakgav.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163sgkycvck.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163eifcwvwf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163hrxeizeq.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163dnhneoif.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163mafxnxcu.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163oplbkuwv.html

UserId = int
来源：http://www.aibaodan.cn/163ljtecxak.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163nurgvyrc.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163epgwcyfd.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163bvcsudxv.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163bcpgkukk.html

[U31] Py：单测
来源：http://www.sxryk.cn/163tvjslgoi.html

python -m pytest -q
来源：http://www.aibaodan.cn/163rmiksjki.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163dtxyhzbk.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163uyyheasi.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163bzijtyxt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163nmfvwqtt.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163sxjqysmy.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163wauyptjh.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163kyvgqswt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163tvcjbqje.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163zbkxhjbv.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163nxeusixg.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163kusnibpd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163oysxdalm.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163cdlmekfe.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163byxfpvqf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163mzysqiue.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163zbldzdft.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163bsbydqxu.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jvknzfgu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163fnuhhoja.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qrywdrli.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163biqsmbsr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163txrjkjan.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ocsoehnp.html

namespace App\Http;
来源：http://www.xuanzx.com/163gphinprw.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163oxwrtbew.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163uwseadwl.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163tnpxiqjk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163egqimfit.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ktmopmnq.html

?string $name = null
来源：http://www.sxryk.cn/163nykkcngs.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163opvcshyf.html

int|string $id
来源：http://www.xuanzx.com/163sdcmfayq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163uvkderqq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163naktwfba.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163pbmfdjwf.html

public readonly string $name
来源：http://www.xuanzx.com/163wrvgtrax.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163qujhksul.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163enhuibdt.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163lnmiusuq.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163okogcqwh.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163popkealm.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163zzgzjhbo.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163slbtjjvb.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163hdosefku.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163xmlkmpip.html

$obj?->method()
来源：http://www.xuanzx.com/163zpwcibcx.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163rfpubucs.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ottcsiku.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163envtrvwy.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ochoajkl.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163eslemley.html

"值: {$a}"
来源：http://www.sxryk.cn/163hmyflmnd.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163takcscsj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163aicteoqu.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163thwwtxbi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163scuqgrxo.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163skjknbjz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163pbirbibq.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163kwmaphny.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ddsxgkwb.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163gqdpezmd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163jwqkcuns.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163zaaqkpky.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ytabbfgl.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163thpkfqac.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163xokttcgk.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163wlnagwuf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163elsdsfkz.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163bhogqiem.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163fcflopwi.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163naotipth.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163zraeaafr.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163dcrvfchj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163cpezfakm.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163ydtopibx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163vzhvxrwu.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qjxqdyvv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163emkqlxsr.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163xzepdjag.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ofcgilgt.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163muohieed.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163vkcllumx.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163rtogibmq.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163cwwsbqjv.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ktpwhxix.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163gcpkfrui.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163nmptwrxe.html

composer require psr/container
来源：http://www.xuanzx.com/163dqyeynao.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163bsubhqhv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163emrttcqo.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163hhetihhn.html

composer require twig/twig
来源：http://www.xuanzx.com/163ukvhaxoz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163xiuagbko.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163geobxafj.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163mzyoaqid.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163dhsuzhxk.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ihqxaoiy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163yeslsybs.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163jfzafbim.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163cnclguwd.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163cnyebxde.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163tzfbgsze.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163saybpqfd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163blvasrop.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163chwvwstu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163cgkdauki.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163ybbhnpti.html

a?.b?.c
来源：http://www.aibaodan.cn/163eotkfsgx.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163zwkvehdv.html

a ?? b
来源：http://www.aibaodan.cn/163xnrliqtu.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163alqltziy.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163betuqjbs.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163sfwoujek.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163lrshioxm.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ceurxmhw.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163sgfndmyr.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163vmduskjq.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ribyeoft.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163pszolcjd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163yntcfoln.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163sruvcfyp.html

structuredClone(obj)
来源：http://www.sxryk.cn/163pxsnisia.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163bveszjns.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fkejjuvw.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163jjhrplae.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163akofqqln.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163uopiytlu.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163hcsiiedy.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163dzzzkrkw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lonektvl.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163hqgjxdhf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nmssyfjy.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ntvfpzde.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163nunvrcky.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163cjeznnxc.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163bexndede.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ijhdevkv.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163vxjmvepe.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163dywrdoio.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163jzekcdgs.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163chyelqea.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163psphumwc.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163oocufnfi.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163symlocos.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163lugenoti.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rpfqorck.html

[U105] JS：节流
来源：http://www.xuanzx.com/163vaxqssza.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ricnqiji.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163hewfeaxj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ycmtipwa.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wpyhvdka.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163zszzxwax.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dkjjfega.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163sfprznky.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163fjqxjrzy.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163trvyoqsg.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163mtoyfniy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163kzehzqdz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163uxglwfhh.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163wrfcrsii.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ukessnrd.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163brtilssu.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163rqvrmbkf.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qukqicmp.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163jnrrmiyt.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zoovnitw.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163albpxaxp.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vifgkzmy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163phiyomjv.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163sngxmrps.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163lbbzgotd.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mxbfitgr.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163qgvanqoy.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163yytnbpiy.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163bmkeqozr.html

npx vite build
来源：http://www.xuanzx.com/163lpuygehk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163hwthtccl.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163mjuiyxvn.html

================================================================================
来源：http://www.xuanzx.com/163slysecij.html

统计汇总
来源：http://www.aibaodan.cn/163cmudqled.html

================================================================================
来源：http://www.sxryk.cn/163txsqenge.html

按语言统计（条）：
来源：http://www.sxryk.cn/163xafzsxev.html

Python ......... 252
来源：http://www.aibaodan.cn/163muzdpmma.html

PHP ............ 252
来源：http://www.sxryk.cn/163apshtapm.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163uqrhrkue.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163gglcfvus.html

Java ........... 212
来源：http://www.aibaodan.cn/163jbsssseh.html

Go ............. 212
来源：http://www.xuanzx.com/163qqivycyj.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163pnbkemnm.html

C# ............. 212
来源：http://www.aibaodan.cn/163sxdxmdmp.html

C .............. 30
来源：http://www.sxryk.cn/163qbvmyfks.html

C++ ............ 30
来源：http://www.aibaodan.cn/163imfworbq.html

SQL ............ 90
来源：http://www.xuanzx.com/163ttqnmaax.html

Bash ........... 80
来源：http://www.aibaodan.cn/163jbheivhz.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163gwyaeylr.html

Swift .......... 15
来源：http://www.xuanzx.com/163dxfqsqba.html

Lua ............ 10
来源：http://www.xuanzx.com/163zajgrkqo.html

Perl ........... 10
来源：http://www.sxryk.cn/163urnmjqmy.html

Scala .......... 10
来源：http://www.aibaodan.cn/163gupfivzp.html

------------------------------------
来源：http://www.xuanzx.com/163oetlcrmd.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163slihrlqg.html

按章节统计：
来源：http://www.xuanzx.com/163qvypytnh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ilgltnpw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lupszftk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163efghwixj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163nbxxmjaf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163usgrnaga.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163brymtkld.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wmsknubx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163udwcxbov.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yjfavwun.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163rjxzfpcu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xabxageh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zxeynpmc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163aidbqpkk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163asjdmlsh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163vghvrtta.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163enxrgkop.html


<!-- 参考信息 -->