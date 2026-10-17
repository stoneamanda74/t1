外链999!wailian999！

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163honnpwbx.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ktbnhpqy.html

println("Hello")
来源：http://www.xuanzx.com/163bvniwsye.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163hestamua.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qmrtveoy.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163nlyctfhm.html

s"值: $b"
来源：http://www.aibaodan.cn/163srsqzjeh.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163fhiacvzc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163idgtptsu.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nkjysfxm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163oquyfkza.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163btbzibev.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163enlwiuqi.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163tmmchfkz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163zzommduy.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163uxlsxcbo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163rfsxfnyy.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ehzecabn.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ekjkxvke.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163lkshoocf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jkdglogp.html

================================================================================
来源：http://www.sxryk.cn/163batmdvbu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dpzhuusd.html

================================================================================
来源：http://www.xuanzx.com/163etveyurd.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163lhlwepdv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163yijlvjlc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163pjewfinu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163rwcleysk.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163xjqvpbul.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163khxxkobd.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ewuwcdou.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163lcctkbcc.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163zntrsjxk.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gysdiizj.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jheofzbh.html

{**a, **b}
来源：http://www.sxryk.cn/163nsmuvlah.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163mmvdsbtl.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163saynlkwf.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163skfeltpo.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163yzuaqurz.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163iujqlsrz.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ayhhbxka.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163peipeufa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163tkthroac.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163xzttwplu.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hhgahnha.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ylfpqrsl.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163fzhlbhco.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163dooshdts.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163hwydzcqo.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163wnaaiymj.html

defaultdict(list)
来源：http://www.sxryk.cn/163bvdsdcqp.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xdcjwehl.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163orkxchyd.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163nlfiquzr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163jjltcnjz.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163fzztsvun.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163pbvgkubs.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163jjkgfkwl.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163logbcneh.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163gygexrmb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ozcftsvj.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163zhrdrhfp.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163thdzkrpu.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163abfcvchj.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163flhypqys.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163yxgwlzvw.html

list(zip(*m))
来源：http://www.aibaodan.cn/163xlhrjvot.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163vwkqggwt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163skjburtt.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163uyejdogw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163tvfnadrr.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163dqsppyxu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163hgrmwzeq.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163qulvukyr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163lzqzkeyi.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163hvrddmem.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163eemoaqzq.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163tvwhnrek.html

UserId = int
来源：http://www.xuanzx.com/163oygpgrec.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163wsdurgxi.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ldwjnfdt.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163wszyxnfn.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163pqvyvnrm.html

[U31] Py：单测
来源：http://www.xuanzx.com/163qxotubic.html

python -m pytest -q
来源：http://www.aibaodan.cn/163hejushwr.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vjbuaapy.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163mhdrzvta.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163zwxdqbqe.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163adseoplh.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ibalovbp.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163kdssdufs.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163foncyffl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163tsbkslny.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163iylshqmr.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ushwpafh.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163jpsljwfm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163byguviji.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ixdcjuwp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163xqtywtxo.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163frrpukcx.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163dgbmbnrm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163qmxdspei.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dbiixuxp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163phjlbzub.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qulhpjyt.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163gmebynug.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163orerojfo.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163xrsfpwje.html

namespace App\Http;
来源：http://www.sxryk.cn/163tfzoqaxk.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163rgfvrndp.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vlbthawj.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163rbtldiff.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163epaslgvs.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163bmofqena.html

?string $name = null
来源：http://www.xuanzx.com/163kvyvktes.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163lhiaepck.html

int|string $id
来源：http://www.sxryk.cn/163nqkapkva.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163imhzvadh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163aczausqh.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163fydwtqkp.html

public readonly string $name
来源：http://www.aibaodan.cn/163rasiayhp.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163faxhfswe.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163eegpqcow.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ciupqsad.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163wbnzlltf.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ooplqqqf.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163goyzrcdr.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ggdodejk.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163sjoziqog.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163jkhldkxf.html

$obj?->method()
来源：http://www.xuanzx.com/163yumgxwab.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163fupppxgj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163gpgqkrns.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163yshizclz.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tjilbsaj.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163egullkzj.html

"值: {$a}"
来源：http://www.xuanzx.com/163rlhweifn.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163pyzhxovt.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163ilwigmwh.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ugpfunym.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rqymrjwh.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163urdwduwj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163gqpprxrt.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163uihyrqsb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bhytkkeu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163kedrzjrp.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163omroaekp.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163izofyclt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163xukgsocm.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ewytcjbs.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163bvxwrmnk.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163llfswyeu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ukcvnzaj.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qjcidzgd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ylsajqud.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163mrjzinbg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163jbcexjla.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163gcpxobim.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163obrxalpu.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163xvbwpirm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163gxpoanjn.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163nagyuizg.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163eflrkmzv.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163cyjrdbcx.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ycxwwtow.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163bmgoppoh.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163oykdgzvb.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163pprpuaex.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163mvrrtotg.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163iarwtibm.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163lxjzgnlm.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163mffgftyl.html

composer require psr/container
来源：http://www.aibaodan.cn/163aeraujpx.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163jvlklrty.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ccfeuizf.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163xzxndagw.html

composer require twig/twig
来源：http://www.sxryk.cn/163jrpslbvx.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163veeeskfb.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163hbncotyi.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163yarabukc.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163pwyxhiie.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163tkxqlytx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163fidnkiiu.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163kqwesymz.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163zkaivtrg.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163jvyonjon.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163etzybdvd.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163nccbrzww.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163cnxtmpdw.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163kynvvdvu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163ebrjfnza.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163wzinlzpz.html

a?.b?.c
来源：http://www.aibaodan.cn/163heztorau.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163jdvxpiih.html

a ?? b
来源：http://www.sxryk.cn/163dvjeycuw.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163yiqsexkg.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163oqpkhfmt.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163xliaskbr.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163otvkgpav.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163oknwgpld.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163rbuoemkh.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163tyrsscyr.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ogkkcorn.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163reihknjq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rsefeggt.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163pkqtnypl.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163fuefaleu.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163iujwdcpj.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163fgbhmbsp.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163mewiutel.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163dqrpgoxh.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163kbphgfly.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163wzpfcadd.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163pjoanewy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163raxzxfid.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163qccoieyk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rawbycgd.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163sevndynk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163cyejgwnf.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163vnabeclm.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163jpnpnfvz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163qyevnplj.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163wpttictq.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163onvcxnuv.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lsnyswwa.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163nlevaath.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163lgqysgyu.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ugysmsum.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163kvsqqgcd.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ljniyyiq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yidexlsf.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163sbkoodtl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163tthoyiom.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163zvraeifa.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163azeheilp.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163idmgsxvm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163vojxnzpy.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163pauqianu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163pqzezdso.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163bxuudjel.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rhmxdcwi.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163axkvlsph.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163qnhsuyre.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163xvzotjro.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163gergumrz.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163zprhdobb.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wbihxgbg.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163hrwmjnon.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163efftdpna.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163blmbmvdy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163khfcabub.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163hssowmbt.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163rqydyptb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163gikwojto.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163enjnginu.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163xfgbnkca.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163gtrspibc.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163eoashcgd.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ikynelny.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163alyiorjq.html

npx vite build
来源：http://www.aibaodan.cn/163cjxrylwi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163xwvyrivu.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163dlvyfcra.html

================================================================================
来源：http://www.sxryk.cn/163jnkfcans.html

统计汇总
来源：http://www.sxryk.cn/163unygvrdf.html

================================================================================
来源：http://www.sxryk.cn/163vxxrxkau.html

按语言统计（条）：
来源：http://www.xuanzx.com/163fryzhltq.html

Python ......... 252
来源：http://www.aibaodan.cn/163untopkgj.html

PHP ............ 252
来源：http://www.sxryk.cn/163ilwiplyg.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163jhhrdrsy.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163obhvqenp.html

Java ........... 212
来源：http://www.xuanzx.com/163ulcpfqny.html

Go ............. 212
来源：http://www.sxryk.cn/163azfpebur.html

Ruby ........... 212
来源：http://www.sxryk.cn/163oslqibsn.html

C# ............. 212
来源：http://www.aibaodan.cn/163xivbtsrv.html

C .............. 30
来源：http://www.aibaodan.cn/163oxovvety.html

C++ ............ 30
来源：http://www.aibaodan.cn/163tinbawba.html

SQL ............ 90
来源：http://www.sxryk.cn/163cgykmkuu.html

Bash ........... 80
来源：http://www.sxryk.cn/163twfoyuoh.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163tmfrazmm.html

Swift .......... 15
来源：http://www.sxryk.cn/163hrzsojto.html

Lua ............ 10
来源：http://www.xuanzx.com/163wluujnic.html

Perl ........... 10
来源：http://www.xuanzx.com/163zezjrznq.html

Scala .......... 10
来源：http://www.aibaodan.cn/163oskkzdqi.html

------------------------------------
来源：http://www.sxryk.cn/163xtrcfvqe.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163rxsbobuc.html

按章节统计：
来源：http://www.aibaodan.cn/163inwbugpv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163byfsmjcy.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163snjptigr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lmisysmj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163btzuwycj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163fntqdavz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163nrmpvbri.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163kzivrhlm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163rruodfqs.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uwapdxcf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163isjzebjt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163blnwmnoe.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wxkytgoi.html


<!-- 参考信息 -->