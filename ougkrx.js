外链999!wailian999！

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ipsqzgvb.html

"a" .. "b"
来源：http://www.aibaodan.cn/163wloiqxlj.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tibfggar.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163greotgsp.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163madppixi.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ckfpehuc.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163arsytwpf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163whauauvi.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hqawqfsy.html

print "Hello\n";
来源：http://www.xuanzx.com/163jgwzsmgv.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hhonqczo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163btnbtski.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163tvhhdaqp.html

"值: $a"
来源：http://www.xuanzx.com/163inzxdatr.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163logryjju.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163yaenibea.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163hnbscybo.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163aaswcqlx.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163kqtlmvre.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hciuthif.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bgyztmpz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163uikhyawp.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163wocaeowf.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163cbuchpup.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163mihoorxq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bnmbrjwc.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163drmeqqsu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163dkruzvme.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ktwcmydd.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163matuwnnu.html

println("Hello")
来源：http://www.xuanzx.com/163dkbcxtwb.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163aclqhxdg.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163gnwapptx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163lgjcsxib.html

s"值: $b"
来源：http://www.xuanzx.com/163okycvmlu.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kkarmdec.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163grcetncx.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ehfdoyur.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163lpsbeodx.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163sqwqucju.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163mrnhxnga.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163stutxsla.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163wwswrcmf.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163cgpndguu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163mzaissuj.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163jhevplme.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163hvzbaoha.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nczsjdjg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wjlzcdgo.html

================================================================================
来源：http://www.aibaodan.cn/163kakzaifk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163etfqeskz.html

================================================================================
来源：http://www.xuanzx.com/163xqygbwep.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163otmorscx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163jtkrtzrf.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ukxgjipb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rvrgaryk.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163cpdcccij.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163omykekeu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163sdtehqpk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ylizhiuw.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163wasiegfl.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cvmealvo.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163fxnmajpu.html

{**a, **b}
来源：http://www.xuanzx.com/163fnxhkakz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163knuqocss.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163kwchhtqi.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163uyopsldk.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163duqbfeds.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163aokbsqss.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163echyarbc.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163vfzwyfvw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ogssxder.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163gxyouckb.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163dalgwakn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163fongmyqe.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163uxpfwxqq.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163cwztsrbj.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163rxopkbtw.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163wmkqhcto.html

defaultdict(list)
来源：http://www.xuanzx.com/163cfxneneh.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163crihaeap.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163xmbtglgv.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163dxunesaf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bumjlakw.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163asjpidps.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163pkghhrtr.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163mktftidb.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163tthufccp.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163rxctipcn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163yuktpbwh.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163bilgplba.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163fjckqfaf.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163xewfgcbk.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163elmnvobo.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163vkjcnbdp.html

list(zip(*m))
来源：http://www.xuanzx.com/163nfgivnia.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163gpxmnvda.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qfjxlyve.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163itczvxzo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163yrpzcdiv.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163cesecnso.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163xrutupoc.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ytisdkvb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163wkldmynx.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163bzsnftgn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163nbvwmiet.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163uveuyloc.html

UserId = int
来源：http://www.aibaodan.cn/163owgabbjd.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ahqhdyee.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163mavogsrc.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163teyhxuhv.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163edxrlitt.html

[U31] Py：单测
来源：http://www.xuanzx.com/163hgdkbile.html

python -m pytest -q
来源：http://www.sxryk.cn/163hrrtsprw.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ginfrneu.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163azqjmaxz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163hifnnvev.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163jocgcqyt.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163aldnxize.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163zxptdjvn.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163okfbelhu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163zlvydpil.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163zqvtdhyk.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163qwxcyepk.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163hiwtdvaz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163cjryjiwu.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163svlcetwk.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163uvxgcekz.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163brlaqkje.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ijrwfhmg.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dogvcnze.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mwmqocbm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163hzdxiurg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163xawtkyxt.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163yntqpaay.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ptjpkdhi.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163pjlfbtdo.html

namespace App\Http;
来源：http://www.aibaodan.cn/163qgmacqaz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ymdcxzjj.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ikbbdfso.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163mbfpplkh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cackyqas.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163qmphimam.html

?string $name = null
来源：http://www.sxryk.cn/163nomctzol.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163rqlsystj.html

int|string $id
来源：http://www.xuanzx.com/163pxzlnwdw.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163pevxsrzk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163pqgdobat.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163vcynnnpx.html

public readonly string $name
来源：http://www.sxryk.cn/163otxhogze.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163bshnizhe.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163osdfukzc.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163eqzcoinw.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163lzbeqqpc.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163rskaohqk.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163gxksyhto.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163sfynovoy.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ftyuulen.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163yhyyhbbv.html

$obj?->method()
来源：http://www.sxryk.cn/163xwxhaopw.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163boxskktv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163qzlfagot.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163jinkoyxi.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cieyurtm.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163zpyqelir.html

"值: {$a}"
来源：http://www.aibaodan.cn/163qspjwmmv.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163qhhrbhxv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163hxraazxu.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163lafwjpbc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xywslagp.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163vvccaxkp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ozhngvhd.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ljdagmji.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ypobaldi.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163jwsjnktv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163wuiiawxg.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163wvdohhau.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163wwvdvalz.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163qfrcwspr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163slksucea.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163hszrwjiq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163yntdulgp.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163jamakxgq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163vctnelvr.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163qmbtwxpc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163pdghcxnr.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163tccyvjfy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163rilqsetu.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163dnrbhksm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163duyynepv.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163owisfjjq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163gbjzefwl.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ojmuswmi.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163ymwfbxfg.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163bvjawinb.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163auayrobk.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163hontiwow.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163nbwfnekd.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163sedhusbm.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163esyjziyu.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163draawtfd.html

composer require psr/container
来源：http://www.sxryk.cn/163njcgmrzi.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163bqcuxrwt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163sfmtdsqj.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rnixlrpe.html

composer require twig/twig
来源：http://www.aibaodan.cn/163uveujpod.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163sqfzoxex.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163eitmdxpw.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163frhnfqur.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163jorcabpd.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163gvbrmqgg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ybhapdhi.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163qxjfflgu.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163zhjvdroa.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163uzngcttq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ilmvpnog.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163cknopcnt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163fycuzfdl.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163qnrsdbvt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163diukanas.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163siapdsnc.html

a?.b?.c
来源：http://www.xuanzx.com/163zpmcthsj.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163dzmisree.html

a ?? b
来源：http://www.sxryk.cn/163wxmasdbe.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163jieogjyw.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163sugxhuyu.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163upmjkcia.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163oxuivtxc.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163bozqbvyh.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163txoolsjj.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163wcpxesta.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vaekvgqt.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163utakritd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163fkbvaxrb.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163yreipvik.html

structuredClone(obj)
来源：http://www.sxryk.cn/163lyikzbmi.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163xtdhforu.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163vppgbepr.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163fyhxxupk.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163drgbxxlw.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163zrvzkxdl.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163tgkemylc.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163uetxvymw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zhwnvkdi.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163vpsxgplf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wacrzdfq.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163oxewraoi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163bnpkjqao.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163kzvyolke.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163fawaooaa.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163hytgjlys.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163lyisovmd.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163upaygwwx.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ufeysyqv.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163fbxovlop.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163dbchmrdw.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163pyjtwfra.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163pmzmllqk.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163jicxlexx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vgokrtjx.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ipydccgf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163bfhpjygu.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163fqgkwxgm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163vwswbhsm.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163mbtnxneq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ltfvxzwx.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163hplqulef.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163nayvzewg.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ocbrgokx.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fbxcpsgn.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163gsceetmu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163andnsrfb.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163xaqynsvo.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163stwvbwfl.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163mtuonhlj.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ahcxclfi.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163jzjmutyf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rjotsmtj.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163dvrbwqxs.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163opwrlugs.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ltuqupfk.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163joefervj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163gzxiufty.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163bpzgmyxt.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163fqzdkqkt.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163mxwxqqek.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163qljzvytt.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163cbuiwnni.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163uuztcvcx.html

npx vite build
来源：http://www.aibaodan.cn/163eaxkrthj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163fdesxmdo.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163lzkyggsd.html

================================================================================
来源：http://www.xuanzx.com/163dcenbcdb.html

统计汇总
来源：http://www.aibaodan.cn/163lzjmmlns.html

================================================================================
来源：http://www.aibaodan.cn/163yjvntnus.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163vxppfkzf.html

Python ......... 252
来源：http://www.sxryk.cn/163nxlbyqja.html

PHP ............ 252
来源：http://www.sxryk.cn/163dzmujbmi.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163bjclycnf.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163uowthwou.html


<!-- 参考信息 -->