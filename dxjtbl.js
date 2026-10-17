外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163croknush.html

"值: $a"
来源：http://www.xuanzx.com/163ibrbhdgz.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163lxkqzkji.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163nhhtywha.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163voupzjfz.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163rqswxewz.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ttwytvyt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ldiigllh.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163wrjkmmyp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163pxbzgccl.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163gybvhodx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ldwzcpkz.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163iacfnmsg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163vicqpsdl.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163tjnvawea.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163lulhtvmy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163xpamjype.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163gsqohzgg.html

println("Hello")
来源：http://www.xuanzx.com/163bljnzkty.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163wbgubtrg.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qjudgdrx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ufbbkoso.html

s"值: $b"
来源：http://www.xuanzx.com/163vglvxocu.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163mlvasaps.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163mrgsfybv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163abastich.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163dfrfirci.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163etthohsy.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ddudycju.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163yqdgkhvp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163hizwbtkz.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163craflpbh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xgszreuv.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163iamefsya.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163llrouzhm.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mokzanvl.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ibianhds.html

================================================================================
来源：http://www.xuanzx.com/163buskpsvg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163gjrpojxo.html

================================================================================
来源：http://www.xuanzx.com/163szolwion.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163btazqxfd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163wvuufqjk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163fviylfrl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ifzcuhcq.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163hvknkhfr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163oymofbeu.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163gocudjxe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163xtgttjua.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163hiyoxsyc.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163poeesxcp.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ohrsifkh.html

{**a, **b}
来源：http://www.aibaodan.cn/163hifqwius.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jvppvnrl.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163jpneozll.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ixmxwszn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163lmnopotc.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163bsynysfm.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163czamblrl.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163hrpjpngu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163sasqdbth.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163eatmicta.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163smahrezv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163prfedqzq.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ihqimkir.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163tklekmqw.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163smqccpdu.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163qfkydhxk.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ibjnsasw.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163mbmzdcif.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163dakszqql.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163eztjhmgd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163chkfkymu.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163jukenlef.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163eknctdqp.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163qplumrpw.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163gnxciega.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163bdwyhvkt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163cozdpgci.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163wyoouuxr.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163uogyyhbn.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163mqgorggg.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163nbdhajxp.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163hbjoyhrs.html

list(zip(*m))
来源：http://www.sxryk.cn/163jfqtuoiy.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163fcczvzwt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163nkvwptok.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163nkheiqip.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163mykdefae.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163abvoipzi.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163oomehveh.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163limmnwwv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163dnhlyjnn.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163pwhvickr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163yrvspima.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163cqiqabvx.html

UserId = int
来源：http://www.xuanzx.com/163imyixtoj.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ddpjaosx.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163kvvtjmwg.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163rkougtmu.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163qlapuynb.html

[U31] Py：单测
来源：http://www.sxryk.cn/163atapabcw.html

python -m pytest -q
来源：http://www.sxryk.cn/163fstoqbmg.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163lxbvtgnr.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163jugcpill.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lisgzxgy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163qgkvewrr.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163mresbelo.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163cgacdbwi.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163tamuuxzr.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163bljmggck.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163yzggczln.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163hrohwsvj.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163lustendh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163wirzyoks.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163knebfint.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163qsampvsc.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ayhdvokk.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163xbgxrucc.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163dayulltl.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kwbbglcv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163jjipkmou.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163rklbyqkx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163niulgznu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163pdgentqc.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163eeyyhrtk.html

namespace App\Http;
来源：http://www.aibaodan.cn/163dgxlynbj.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163cmqljuar.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163qvlmnudy.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163macqgrmf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vhcnqfsn.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163zrsoyhrs.html

?string $name = null
来源：http://www.aibaodan.cn/163cpuwufbp.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163sopjcmbr.html

int|string $id
来源：http://www.aibaodan.cn/163ccyadyoz.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163xcyuztfk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163pkvpdzqc.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163wqcvrtwa.html

public readonly string $name
来源：http://www.aibaodan.cn/163vnaywvik.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163bgstrkjm.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163jxxeyant.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163wrfniekn.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163afxbxsvr.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163fkmykvxj.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163lcpdlefz.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163pmquzota.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163fenhnygk.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163qvqsymoj.html

$obj?->method()
来源：http://www.sxryk.cn/163dijaqmdv.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ucixrzgu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163zcrvwomh.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ttdkwtfm.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zuwimdmh.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163yawfzedu.html

"值: {$a}"
来源：http://www.sxryk.cn/163lsvdbntq.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163hpbfmkzs.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ooagsaoz.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163qgevvtpz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mqjbzffb.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163iamptilz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163djrslzbx.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163xnmmyinr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163iarbckzn.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163aottvnlv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163dqqaxean.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ywwtncrp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ugydpunm.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163prmdjppn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163cmigxaxn.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163xnutclvu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163rtwcgcki.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qkziikvq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163sntvnktw.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163owzezacg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163gynxzatr.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163pworxjec.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163jwluzggg.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ifjankmx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163qznmsfko.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163alnbfjhb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163zidvoajz.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163zqxthlbe.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163uurctjxd.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163uymrzoxl.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ymdpvvyb.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163kacosjfh.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ckwohrod.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ittmfdmj.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ojdnhkjx.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163muxjwtvw.html

composer require psr/container
来源：http://www.xuanzx.com/163excctxbk.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163oibhbxzy.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163yyhtukwf.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163eztoiglz.html

composer require twig/twig
来源：http://www.sxryk.cn/163uymgzecg.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163nyzzdini.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163vdjjyawo.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163uobuhqye.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163cfzdvnsl.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163lvnucfld.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163fwmxwhii.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163hjwbmlte.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ejekgjnm.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163hvtocttq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163orphtttl.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163vhjrlccl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163epbmtune.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163jnxogcdq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163prdwgzoi.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163kjexpsgc.html

a?.b?.c
来源：http://www.xuanzx.com/163uogczvqg.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163tkqqqnbb.html

a ?? b
来源：http://www.xuanzx.com/163juselwfe.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163jamcmmut.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163wtlqseyg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163cnmbptlw.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163dmukrszh.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163pnzecsjo.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163qwdguepa.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ohpivupd.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hnsvaaau.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163nzdckuqg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163xpwyizeo.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163tnhentlc.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ryypyqxw.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163qttjepjf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163swoabssa.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163benlfhdy.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163mbfhmtky.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163awpwhftq.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163dhprcgkd.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163iamsodnj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yobdjsae.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163wqpgqufy.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163omceiivz.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163acanmnlr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163bzketrlg.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163tlgfgvus.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ecunjqpo.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163rbykwuhn.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163gqomeowf.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163eapfytbe.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vgzsbpyx.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163cyxggtzb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163cxiovfzx.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163vantwluy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163lcebydba.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163yyarktam.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nwzyqqrt.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163jrlejvlx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163fuyajxdx.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163owgpqvyo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163jsrzzetk.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ckvofsok.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xaqsqdpz.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163umeuihha.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163agvltjhj.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163jymginmw.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163oxymhdqj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163xyfreqsz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163tgfbbvnn.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163oviktuvq.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ixjubakp.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163hpbxrlzs.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163vuirbyln.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xxnffeck.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pcmnmuls.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163kfikdvfv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rxmozpgp.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163qfsokjdn.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163nzzgqsdp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163jtmkhrnl.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163qamyaenk.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163qzyfgntt.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163vivnfsiy.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163syxlubjb.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ylawtoqy.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163rwpuseao.html

npx vite build
来源：http://www.aibaodan.cn/163ufbuhchs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163bfvyvdej.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163puohzrbx.html

================================================================================
来源：http://www.sxryk.cn/163zmfjypag.html

统计汇总
来源：http://www.xuanzx.com/163nkedklfs.html

================================================================================
来源：http://www.sxryk.cn/163rqmzgwpu.html

按语言统计（条）：
来源：http://www.sxryk.cn/163dirmjrom.html

Python ......... 252
来源：http://www.xuanzx.com/163jpepjcur.html

PHP ............ 252
来源：http://www.sxryk.cn/163xmptwqjw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163gcjugkfl.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163umdrgkza.html

Java ........... 212
来源：http://www.sxryk.cn/163etmqecmc.html

Go ............. 212
来源：http://www.xuanzx.com/163djnriplw.html

Ruby ........... 212
来源：http://www.xuanzx.com/163foiludww.html

C# ............. 212
来源：http://www.xuanzx.com/163adphkpau.html

C .............. 30
来源：http://www.aibaodan.cn/163afvdhkcp.html

C++ ............ 30
来源：http://www.sxryk.cn/163cpxitmlj.html

SQL ............ 90
来源：http://www.aibaodan.cn/163bpgfedic.html

Bash ........... 80
来源：http://www.xuanzx.com/163horgqhfw.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163lkwizrbj.html

Swift .......... 15
来源：http://www.aibaodan.cn/163mvaomawe.html

Lua ............ 10
来源：http://www.xuanzx.com/163gbshrldg.html

Perl ........... 10
来源：http://www.aibaodan.cn/163sjdsggmr.html


<!-- 参考信息 -->