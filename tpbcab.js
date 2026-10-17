外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163faskkjhj.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bgaacxpz.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mqdvaagt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163qzfqkjku.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163znbhchxo.html

"值: $a"
来源：http://www.sxryk.cn/163rqharrim.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163lzsqdasy.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163wepurqrg.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163auddbtzm.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163lbihndzo.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163peogmglv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wfdgbyhj.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163udvalncm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163chysagqt.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163lgujmibw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163oexfxigb.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163kdtwjuhb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163vpbkpeol.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163uqgyipbl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163usvecxtz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163gpaueqog.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163zdoosdhk.html

println("Hello")
来源：http://www.sxryk.cn/163wqwagnwo.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163datihavh.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163gsvckzav.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163tklcdtks.html

s"值: $b"
来源：http://www.xuanzx.com/163lewuvlsp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163uvizarsg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ptfujvyk.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163iouwqdjk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163nkrhipvy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163atyndmmy.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dvamlaek.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163szydvuvs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163fnndgriw.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163rmyztlme.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163wslefttt.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vdgsnggi.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xmengmpv.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ywgthnlf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163syuaqklz.html

================================================================================
来源：http://www.aibaodan.cn/163tgzuruwc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163eknjlvzj.html

================================================================================
来源：http://www.aibaodan.cn/163wqvtimai.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163likyrfnb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163iwqmyjxe.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163xoomgdgj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163opthmkdv.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163uxdvltyz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ifpoczeb.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163uezsdozp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163xrcmjkcn.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163lozjzpdh.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pssermlo.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163kujzyjzk.html

{**a, **b}
来源：http://www.sxryk.cn/163okofgrpi.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ndaejqil.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163piknaovn.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163xemvmhbm.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163dcycodul.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163mmjloqyd.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163lwdutqjp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163xmwylgtj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163wbdugudy.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ggfuyngz.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163gcupbjaq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ubacgcxd.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163omeczkrl.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ogveubjp.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163sbtygdug.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163cxvksoio.html

defaultdict(list)
来源：http://www.xuanzx.com/163gnbrmons.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163arqguals.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163mpzoxdth.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ymyemfgs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163zdzxjtcn.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163sdkvcdsn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163cfreresm.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163wdfhnevm.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163fmnmraec.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163yukosiyn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163srgihbuc.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163inktfcwh.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ctquzlvj.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163wcuiuzne.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163tndfiowu.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163nnviarmm.html

list(zip(*m))
来源：http://www.xuanzx.com/163nluzwztg.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163qjvwptli.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tbhyaiub.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ttlcrclf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163pvhyfkvk.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163temhazhy.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163igbivjxr.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163eiaojgwu.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ybkzawzo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163nhhmlejv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163yssulwhf.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163qyencdff.html

UserId = int
来源：http://www.sxryk.cn/163chdykjta.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163lpznluna.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163mdkquywf.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fstgfxsh.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ncsqsych.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163zqrvbqhf.html

python -m pytest -q
来源：http://www.xuanzx.com/163cajqmazq.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163zljvxyqu.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163trvjfbrc.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163crxjmumj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163nxtturfs.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163iznuqaul.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163yjhaxpqc.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163wlfycgyo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163cknmerxf.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163rmstoydg.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163nvwwrskd.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mjsvdvdf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163tigqghnq.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163snstphau.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163nmcbtfhi.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163vgrqfxrf.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163dnetbpqk.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163cmtftxgz.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dfbukqvf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tnglfapm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163rkbfgawf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163zmjnifri.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163lpolyehh.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163niwvyuhf.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gveucfdp.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163hkkdfhph.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163kuiikkbx.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163dmwskndj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hpjcdhme.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163gdhkgamx.html

?string $name = null
来源：http://www.xuanzx.com/163aerktggt.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163hwtwdlpu.html

int|string $id
来源：http://www.sxryk.cn/163oocfthrh.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163tunobyhz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163rtpklhko.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163wczhjgqe.html

public readonly string $name
来源：http://www.xuanzx.com/163yuippkqj.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163gvnkqruf.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163oulnbofx.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163dnhjadmw.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163pzqkeugo.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163qpqgkjer.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163rvxllhko.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163esijyzad.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163utgovjjr.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zjrmfkmm.html

$obj?->method()
来源：http://www.sxryk.cn/163lscblluv.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163xzjpoqai.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163kdtschrg.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163bwbcwaji.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163itnyspeh.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163xrmqzuha.html

"值: {$a}"
来源：http://www.sxryk.cn/163sapyhman.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163rnucphly.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163uhddjylw.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163pdvprxmv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163nqrkoign.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163kqjmqsyv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163qnewgzyu.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163owtomank.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pxkdegjx.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163gakbolpl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163rbmeicac.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163oftqmyit.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163wfwsbvfa.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163kmjcoark.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163feyzkwqz.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163jdxpneub.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163tprxfitp.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163jveciqcf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163afdqinul.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163cvmaqezy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163beyrtttl.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ucrltydd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163grpcieoh.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163bgphbofb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163phqrkugb.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163qsmpbofg.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163lavpeqjw.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163fvwrzzrk.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163tniykbne.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163utxdtsyb.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163wccmxuhg.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163jzdmrppd.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ybwiaknd.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163oxaltnsh.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163qowhletv.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163knmjyypc.html

composer require psr/container
来源：http://www.xuanzx.com/163tyznbwpo.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163zpejqdgc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163nklnxfdp.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163kvupkmzr.html

composer require twig/twig
来源：http://www.sxryk.cn/163dnpukzum.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163uoqpzylr.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163xpxrugqw.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163rrdatchl.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163cttzyhvi.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163gvjoskah.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163wgcogrfg.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163kqlibeed.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163olewvkss.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163zcdurelx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163jcqtskfe.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163nevtnaby.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163nhbdhdfn.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163bqrjlqtg.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163vlymfaqq.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163dotxjuac.html

a?.b?.c
来源：http://www.aibaodan.cn/163qgwrnhze.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163musgevzr.html

a ?? b
来源：http://www.sxryk.cn/163qfhxeenf.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163acjcflry.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163mqxjyjge.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163bwovytam.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163uexbwpaw.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163hasmidod.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163nwtoshfx.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163crmchiuz.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jgabiwnv.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163dzdlqdrd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163gheumdxa.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163nscciujr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163zdsbxyjp.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163vbtuayar.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163vqziizyb.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163rracisho.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163qapffqaz.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163vaozeoay.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163uxiwcpbh.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163lzjvsckm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ucasbvww.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163jofcvejz.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163beylnwmp.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163bmzubbww.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163hrcemqhw.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ksyrrwka.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163wcwzmxym.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ozhpckjv.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163opkvnmcg.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163omtrjyyl.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163aakwtxnm.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163fuspofib.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163acspuetu.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163kvowhfyi.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163pmclfkoi.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163uxwkgmqt.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wrdibhrn.html

[U105] JS：节流
来源：http://www.sxryk.cn/163evnuyyqn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163saflubtw.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163dvhoolpj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163vbybgesq.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163iffuutlk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163rgxaekyq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163hnitdjqa.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163neppaxbq.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163lbzudstd.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ylqmapow.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163wqiuhkyi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163yirsyxzg.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163iitfchit.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163srgucmrn.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rpwvfxoe.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ylllugol.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163mbqxtcfr.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wdtavdar.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163gzysjxle.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xmdkmpmz.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163bsxcdkwx.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163jrebhugx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163jminrywe.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163bijizhty.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163orwptdwt.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163yfffkilp.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163owusqofp.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163divuhbja.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163oyajjgcr.html

npx vite build
来源：http://www.aibaodan.cn/163dpnrphyw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163lekeoqrl.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163blikmixp.html

================================================================================
来源：http://www.xuanzx.com/163ygcsnbjl.html

统计汇总
来源：http://www.aibaodan.cn/163lezukzly.html

================================================================================
来源：http://www.aibaodan.cn/163upnnqyzt.html

按语言统计（条）：
来源：http://www.sxryk.cn/163xvmsaxcg.html

Python ......... 252
来源：http://www.aibaodan.cn/163znslzibt.html

PHP ............ 252
来源：http://www.sxryk.cn/163unlkqidd.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163iwlogwlk.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163zkmrnmdb.html

Java ........... 212
来源：http://www.sxryk.cn/163nbktarjd.html

Go ............. 212
来源：http://www.aibaodan.cn/163byprmvql.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163buudhzrl.html

C# ............. 212
来源：http://www.xuanzx.com/163edtvaupp.html

C .............. 30
来源：http://www.xuanzx.com/163noefbaii.html

C++ ............ 30
来源：http://www.aibaodan.cn/163adjmuiru.html

SQL ............ 90
来源：http://www.xuanzx.com/163znfysyvy.html

Bash ........... 80
来源：http://www.xuanzx.com/163rcdznnxo.html


<!-- 参考信息 -->