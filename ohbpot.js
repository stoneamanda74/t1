外链999!wailian999！

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163xpffccxk.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163mospcxas.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163vkejrdub.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163cwpgdyrn.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163lnawrils.html

print "Hello\n";
来源：http://www.sxryk.cn/163ofzkdiyi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163rbcnqobe.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163wnwacqul.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163iqdfaiyk.html

"值: $a"
来源：http://www.sxryk.cn/163xuuquiuu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163knuqegfu.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163cuagaqlj.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163judgatrr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163kgtnzqoy.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ijdxaewp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163avdgpzhb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kspraojs.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163nosbcnqj.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163nfcswrra.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ookumqym.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163cqpwjgdx.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163fqvwhfcm.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163zyyxlwev.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163jrexulfm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163mefaplxj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163spgnvshf.html

println("Hello")
来源：http://www.sxryk.cn/163fspeqfan.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163miiqpfxq.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163fzofcphw.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ixnyaest.html

s"值: $b"
来源：http://www.aibaodan.cn/163yqaitjym.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ltdkybzq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163oddlnnql.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ngtszgbc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163pjpuoayz.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bttdrefi.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163mfbmywoy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xerqiacs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163eifimncu.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163toynsfah.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163balrlmvn.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163vwbzkujp.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163itgmrvoj.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163awsakimp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163gjtdbqmm.html

================================================================================
来源：http://www.sxryk.cn/163dncmtwhx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hynmlalr.html

================================================================================
来源：http://www.xuanzx.com/163omlrafcl.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163hzjfbskz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163hnlemtma.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163zfjjvove.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163fspwuhfp.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163xzmcwudj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163lktmzazj.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163fdkpeght.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zjmtqeme.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163elyhhgef.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jcnnbymw.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163mfhqdtio.html

{**a, **b}
来源：http://www.xuanzx.com/163fmbhussg.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163pajywbsk.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163imujling.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163aiapinkr.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163cvlozxft.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163swuburox.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163eptajeyz.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163apttyjzu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163hdfwwplk.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163mypoglzi.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ikzbtsri.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163vdvoowde.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163bmklvwqw.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ikoznfzd.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163okamqxcd.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163inqheelb.html

defaultdict(list)
来源：http://www.xuanzx.com/163jltexvmt.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163qisryhnp.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163miwiifyo.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163uwccrxvm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163nobzpudr.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163zgzutchz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163fxkxmbpb.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163mtxxfsfk.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ecidrihl.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163mguwddwp.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163piahkjmj.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163uyobjshe.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163viafnboa.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163dgzzrfkl.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163qmocbcke.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163bqpzujwa.html

list(zip(*m))
来源：http://www.xuanzx.com/163zdzhuntz.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ajjwxfbc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163lqgugefz.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ydshkyjy.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163paxuguou.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163bcacsgwk.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163wyewobtx.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ytsbzhnl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163mmjrtvdc.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163lcaoqsoh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163vgewonox.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163rxwbsmui.html

UserId = int
来源：http://www.aibaodan.cn/163unufhoad.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163fjavhjja.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xomquhow.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163yfbytpgm.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163hhmeapri.html

[U31] Py：单测
来源：http://www.xuanzx.com/163cpmbobtg.html

python -m pytest -q
来源：http://www.aibaodan.cn/163iwxtxiek.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163hhyptgcf.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163mbrpblzc.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163bjigafxk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163imfysbao.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163usqptafx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ikkcloxx.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ayfvmiku.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163jsmelnfn.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163atdxepdg.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163afsczavt.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163gqhwxioo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163fklbfmxd.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163hsqhcrfv.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163kffwebpd.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163zotwjlao.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163vrzjbfcd.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163cigxzneu.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hydjnaty.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163yzilmigh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163qaomaess.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163sdfgfybi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163xswmiljf.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163rcldiycb.html

namespace App\Http;
来源：http://www.sxryk.cn/163qizfhliq.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163omsjywpu.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163fimqofad.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163fjnkkcib.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nulhlxge.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163qlphvdit.html

?string $name = null
来源：http://www.sxryk.cn/163glbyzvhq.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163tbfivfyl.html

int|string $id
来源：http://www.aibaodan.cn/163pwluilwx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163nlrttxaw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ijfkrnyi.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163gtzbvhbx.html

public readonly string $name
来源：http://www.aibaodan.cn/163becywtsb.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163jbklphlr.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163kzxxlore.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163fdeqcdia.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163axbcrjfo.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ohdnjlyo.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163xttwwnjm.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163jdipckrn.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163nuzqfuzc.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163stsphsfb.html

$obj?->method()
来源：http://www.aibaodan.cn/163cwaxrsvm.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163pzhactfo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163ervtrcdn.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163zeislyvw.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jbvfqyzz.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163nlbtqkrx.html

"值: {$a}"
来源：http://www.xuanzx.com/163dhzeqxpx.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163scpmtsqq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163amqwrgfb.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163twurgquj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qcqrtcfn.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163pxzvfyan.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163rttvtpuf.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163jhawwbey.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mgtwxqzj.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163nsrqdjkb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163prcwhjim.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163fucmytcb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163tpxfzihs.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163bxtwawxv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163leimclpv.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163fkrmpesf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163oqxdqylw.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163vistgtqp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163xkhrllbv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163emcyscjd.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163lkwdiinj.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163fulkkwcu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163tnuesumz.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163lqaznicq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163wxhbbvwb.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163gpckizaa.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163qkbfsmyx.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163wmsemobm.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163pyecqsol.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163dedafrto.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163srbjzotb.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163knrelxvp.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163hrfrtggq.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163hpdqohyf.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163swpuymvw.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163evvxjuiq.html

composer require psr/container
来源：http://www.sxryk.cn/163nhccyvoj.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163kcacenyz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163xeyylbsh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163qfynqxyp.html

composer require twig/twig
来源：http://www.sxryk.cn/163upschhoe.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163clpkraxc.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163lnsqjhml.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163bpcaystz.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163cplbpzfy.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163bratwkql.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ghjaoqvo.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163memvtcax.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163vdmrqznn.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163henuvcbc.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ehjgfkan.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163kdfvmmad.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163xeaglccm.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163tbwbpxvs.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163dmqdhwin.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163vigvqime.html

a?.b?.c
来源：http://www.aibaodan.cn/163jzbwmizr.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ptppipkc.html

a ?? b
来源：http://www.xuanzx.com/163vbxgbwdi.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163powegmyx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163tzuzysql.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163jxlxsnmu.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163azupekfk.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ecbomfnt.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163wyajcaca.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163rgqcizqr.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163iesnbtfr.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163bczxbvlp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163hoqrcycf.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163tiwdxpxt.html

structuredClone(obj)
来源：http://www.sxryk.cn/163qdywpknb.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163zwrgrifh.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163uzlcqhns.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163gajzgdxn.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163zitxwtak.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163llaxbgpo.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ybfubpwj.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ciuobzcj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163niaovwxq.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163elhxiubr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fvotjmfd.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163arxywwqa.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163xgotsrym.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163jojvwoat.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163abjlmifg.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163mowwdnnd.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163kmodxnql.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163pepgnyvm.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163jqidyask.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163qypvzjjv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163yummakfy.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163gamrmmlg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163fuphrlaa.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163qoqlpqgu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163opaeexcz.html

[U105] JS：节流
来源：http://www.sxryk.cn/163nitxqyjt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163jvjwlreg.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163dpwcxchf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163gfvawvai.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kefdzczc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163lhfpurmr.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163lgjseaoa.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163pfijvbvf.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163bgzbmvvr.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163paxtjkpj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163zavwxkax.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163dudgdcce.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ugfmejee.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163utszroih.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163mpybseuy.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163qrvyqfzb.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ppuxzmbj.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163plwxjzzl.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163tdhgogyk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rjhygbfh.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163awsxysde.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ieaemmbj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163aiezyyyn.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ygwtroia.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163uxqmjlff.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163hnhtcngj.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163okgnauzq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163lnwuyscl.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163wonyaatz.html

npx vite build
来源：http://www.xuanzx.com/163rkcgegpo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163fwfplscq.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163afvsdmzk.html

================================================================================
来源：http://www.xuanzx.com/163qaaxtljh.html

统计汇总
来源：http://www.xuanzx.com/163mtezipuj.html

================================================================================
来源：http://www.xuanzx.com/163mmvubevn.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ucvguhny.html

Python ......... 252
来源：http://www.xuanzx.com/163tvdepltl.html

PHP ............ 252
来源：http://www.aibaodan.cn/163jxvobcpe.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163fejplfrc.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163mqhfuoiz.html

Java ........... 212
来源：http://www.xuanzx.com/163hypkikhq.html

Go ............. 212
来源：http://www.xuanzx.com/163gmuowhrh.html

Ruby ........... 212
来源：http://www.sxryk.cn/163tkennror.html

C# ............. 212
来源：http://www.sxryk.cn/163wxxjvskj.html


<!-- 参考信息 -->