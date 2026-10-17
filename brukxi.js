外链999!wailian999！

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163hzogcxrx.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163pmklzama.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163sptmidme.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163vdfdawll.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163eosidxil.html

print "Hello\n";
来源：http://www.xuanzx.com/163tzgpzqlq.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163nowxjsud.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163gdyzbsml.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163aytrxqmo.html

"值: $a"
来源：http://www.xuanzx.com/163ocdumrcw.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163rfpjrlka.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163vrksxhfq.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163khcpybla.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qrvzkddo.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163fqifnyre.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163bxbmeyga.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jufcrlqz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163axzlkamj.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163sbnyztuq.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ezwcyvbf.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163lfcfipxm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163axwzaqpo.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163anlrzkqx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163oxupsgwe.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163rnmcwgit.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ezlgzugu.html

println("Hello")
来源：http://www.aibaodan.cn/163cifiohyp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163sntksaww.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163esevptlt.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163etxbavrk.html

s"值: $b"
来源：http://www.aibaodan.cn/163ioenhfba.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163hlgokodm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163vpfnnhkm.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163bnqzqgmy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163zauytjoz.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163hdjuzxfu.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163nhjivtwd.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163sxgfspzl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163qruqpxrk.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163nkuspepw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163oknodehx.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163bndyexzz.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163nfmtuyjs.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163fvwnlsdq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163prcdyvhg.html

================================================================================
来源：http://www.sxryk.cn/163stcxodrr.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hrumhbce.html

================================================================================
来源：http://www.sxryk.cn/163fbtrambo.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163emqqjopq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163whlnomzz.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163hszbshkc.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ecoepxei.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163qqvbohij.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163cswbuyyz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163uzuskfzt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163dkwlduoj.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163lvuvncst.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pgaxjdrx.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jvuijoxe.html

{**a, **b}
来源：http://www.aibaodan.cn/163xasbncfk.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163slqkodlp.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163minletpx.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163bledrdmg.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163insyhbqf.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ohegjcev.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163uderqmlp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163kuvnicyw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kqqjinot.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163sqdkrrbb.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163hrcbmwbx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163vkifcegc.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163xupwtbrw.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hhbmtyvd.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163awzoqtjq.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163lorsmqmh.html

defaultdict(list)
来源：http://www.aibaodan.cn/163idnxegya.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163sxpyjstj.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163disrkpys.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163snskzqet.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ghxwzjcj.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163fxnlawyf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163rvttrblv.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163gatxhhie.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163zissbnpd.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163qesxqhxg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163pctxoqxo.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163dzuqkmpr.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163gwolsrjz.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163yeuofznk.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ftlkyvul.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163mvwjlwav.html

list(zip(*m))
来源：http://www.sxryk.cn/163etwwkqej.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163yrjemhfb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163gkpiorjw.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163chrwehbe.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ixoirnrk.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163azvipctu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ujsyirue.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163bxqvfihm.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163nipfookk.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163kydwldmo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163yrqayeek.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163wsdlwgoc.html

UserId = int
来源：http://www.sxryk.cn/163jkntvbsd.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163gjtkscrt.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jngjosmv.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163cwpqdokt.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163uxpvjsqz.html

[U31] Py：单测
来源：http://www.xuanzx.com/163facgcyjx.html

python -m pytest -q
来源：http://www.xuanzx.com/163fspswemi.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163zjqmzmam.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ttdzdmvk.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163kvjeaqko.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163pykqzwgm.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163gedtdium.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163cxvsfpre.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163wyxcqbwk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163atqbtmhn.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163dpcwgaml.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163xcsalhrt.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163bsmvkvis.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ylwwttey.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163hjuygjyf.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163nyhoprjo.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163suvqbegh.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163udurtvsk.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163uwrzjmar.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hfyhpusm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163aeyuywob.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163udfkcshu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163drgigvqi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163atxxqlsh.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ntltrnpn.html

namespace App\Http;
来源：http://www.aibaodan.cn/163opsgtanh.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163rdpbkhut.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163eteqtean.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163mmcjnbgi.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gazttuyu.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163zgptbzsm.html

?string $name = null
来源：http://www.aibaodan.cn/163ctmvnukn.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163iucinlea.html

int|string $id
来源：http://www.sxryk.cn/163wkltgpsd.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163pefzchcu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163rewkfabj.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ktviscny.html

public readonly string $name
来源：http://www.aibaodan.cn/163buqxsppu.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ezgmprzv.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163cmqmkvsm.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163qpyzyega.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163uxlywcbl.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163yohtarws.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163dwmrzfkg.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163gvedagqf.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163jdxowkqh.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163vqtjmsyl.html

$obj?->method()
来源：http://www.xuanzx.com/163mknztfus.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ggdoueap.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163autscpuo.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163cbvkpgiz.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ggrchnwp.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163zinlkfgi.html

"值: {$a}"
来源：http://www.aibaodan.cn/163cqomwvoq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163bhjbqckm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163adtjhndb.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163pcvqpfqr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cjvxlaqk.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163zcdweuxm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zuxswrsv.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ftxypmdw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zqdffsgy.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ayzsaejo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ktmjaobs.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163dzblgbsu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163teeseqsp.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163tpbdjadu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ciiyjdyr.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163bymtcbtp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163vtlucovw.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163cgfzxnvs.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163lfmwlndb.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163lgvnjspk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163evjsvsul.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163bhajwyfm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163lnnfervm.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163xesyuelz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163wavtzghl.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163bfetvhot.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163keasdsql.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ohkkuezy.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163qmgqshza.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163jsoxxdqq.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163lloublxd.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163kynlwgvl.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163cigfxiyl.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163xibzdiex.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163rpfxcgyx.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163mkeulhux.html

composer require psr/container
来源：http://www.xuanzx.com/163rdduhvzi.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163uzitjpfx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163gmfydekf.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ptnvzino.html

composer require twig/twig
来源：http://www.xuanzx.com/163vdovywmk.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163awmvdxfp.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163lovmgzrj.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163buhhtshe.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ivmketka.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163lbhfsxez.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163kfezshcb.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163vnrgyisq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163qdkcchnw.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163bfokjolm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163xhwtswnl.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163fdkxtopj.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163svkynvph.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163hubyvvev.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ycshyvxk.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163yhhcltpz.html

a?.b?.c
来源：http://www.xuanzx.com/163havdgdto.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163nhqqxkuy.html

a ?? b
来源：http://www.aibaodan.cn/163xbmwfnew.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163lbbmztsj.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163jrweiiho.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163wrtwszdi.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163nhyzxzjz.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163najlvnxe.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163rnenoimv.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163vdepclap.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vcoskgge.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163vjgsewjc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163sfgbwvda.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163suvuqale.html

structuredClone(obj)
来源：http://www.sxryk.cn/163pnicbmcy.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163zifpnsha.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ytwwbadu.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163izestmuj.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163zsuwbltw.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163lhvbcvdx.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ovbiufcn.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163doibxvhs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ytjacfmh.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163icsyxlqv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163muhzoklt.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163aowwasqx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163lmcyxtye.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ioifijvn.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163cmzaczgy.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163bahyuetn.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163kivkgwlp.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163vgysmhye.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ngfzegon.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163iuozbfrv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163jfasptsz.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ghrfszpt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163wwutxyla.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163zhinrxqg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ycysnxxo.html

[U105] JS：节流
来源：http://www.xuanzx.com/163gesksdzw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163lwbcxyec.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163yztcodqw.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163qrvhckcw.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163fubqsxxo.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163lgdwghie.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ruoeelas.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163aguwccfe.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ahsvllym.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163plkaflmz.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ajfnyqsi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163vlraejla.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163etjqlckt.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163asfheowe.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163qeywopid.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yneymtam.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163pktqplvi.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mrfipylx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163qadxerhr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fkgghrxn.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163zmahqzwt.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163civxwcgp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163dghzjngl.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ibauqqhd.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163dveheunq.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mzuyykud.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163nmtdqizy.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163dmgrhlbe.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163cuqkkuvh.html

npx vite build
来源：http://www.sxryk.cn/163vrqcfwjp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163osmkvhxp.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163cmsxedbo.html

================================================================================
来源：http://www.aibaodan.cn/163kghzkxdz.html

统计汇总
来源：http://www.aibaodan.cn/163utrtbwad.html

================================================================================
来源：http://www.sxryk.cn/163fvgsxyeb.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163yulqaoli.html

Python ......... 252
来源：http://www.sxryk.cn/163nhfkzcyl.html

PHP ............ 252
来源：http://www.xuanzx.com/163pqwtzapq.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163qhgavarv.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163wkpqftwj.html

Java ........... 212
来源：http://www.sxryk.cn/163inpthvsz.html

Go ............. 212
来源：http://www.xuanzx.com/163yclebspu.html

Ruby ........... 212
来源：http://www.sxryk.cn/163estqphbd.html

C# ............. 212
来源：http://www.aibaodan.cn/163kclbrafh.html


<!-- 参考信息 -->