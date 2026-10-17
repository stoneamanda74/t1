外链999!wailian999！

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163lngvskps.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163hjlxehyk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163mpanhjgv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zagqnldy.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163wpsfqwvt.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ffipentk.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ocqiwpzv.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163jkvhxdrt.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163plulyxua.html

"a" .. "b"
来源：http://www.sxryk.cn/163lpavftyr.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163wojvwbih.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163tjbantko.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vddkunys.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163yzkvlmou.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163zdyunyud.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163rbcvgtfj.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163rwsdicpy.html

print "Hello\n";
来源：http://www.sxryk.cn/163leblkhpt.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163aodselky.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163evffbmaf.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ojrlgpyf.html

"值: $a"
来源：http://www.aibaodan.cn/163zxsgaqli.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163qefeiyvj.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163kmcvtliw.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qjstmdqx.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163gjnbipyn.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163gewpzcms.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163vdfwnulb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163heghosxd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163uxcungbh.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163udelpnxm.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163yohbnrre.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163mqgvoewu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163fgtjfani.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qjbsxgcd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163rrxhiens.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163tpxwulnp.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wokidjby.html

println("Hello")
来源：http://www.xuanzx.com/163nkkzxkas.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163fgnpvfaz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bonlxwjh.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163oydazzri.html

s"值: $b"
来源：http://www.xuanzx.com/163oxxygmei.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163buprnxvv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163upgtjskm.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vszavded.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163bkvwpzwr.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163tsyqkbng.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ppztbzum.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163okmnuftu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163adsscasg.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163mkzekiuo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163wvmeilnj.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163oaiyxdmb.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163cxedsltw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ltimkmze.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vwedeauz.html

================================================================================
来源：http://www.sxryk.cn/163bwvkcbzm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ucrmsjbm.html

================================================================================
来源：http://www.aibaodan.cn/163yqnlritl.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163zyxxjtbf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163bgfpioya.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163spjqkurj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163fyiswnqq.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163njsiihqm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163igigvwol.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163vttjbydg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163oiokqtfo.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163onccwzoy.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bkqvrmfq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jnzdczez.html

{**a, **b}
来源：http://www.aibaodan.cn/163nfututsa.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163jlambzcq.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163phpjryay.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kwwbazke.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163fhrxnfyn.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163xhbmnwrw.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163mhcbqrno.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163khmhlteb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kybeetbv.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163rqmacmce.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163onocqchp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163wupicfzx.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163lmffmgcf.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163pfkqpdpw.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163adygyaew.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ajdugsbd.html

defaultdict(list)
来源：http://www.sxryk.cn/163doywmlku.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163wofidkio.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163embckklc.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163jrzgmxas.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mugjrnmt.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ouibizni.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163qvpdtirc.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163yfaubzgp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163jykhpdfq.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163lfsuqanj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163hbskyzxh.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163fvqaprem.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163odozekbf.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163wwigpoky.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163kwwtmwqg.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163gzurrcnl.html

list(zip(*m))
来源：http://www.aibaodan.cn/163uidlvcac.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163urxnuxub.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163sinspqdf.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mnfutyfh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163busccdkp.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ffdtsntk.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163vmeozaht.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163vhbdpowj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ibapmjmx.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163wgtvwred.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ieshtgsb.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ethzxddl.html

UserId = int
来源：http://www.sxryk.cn/163bfyjxwgp.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163riwqkbgj.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163dmvqjmcj.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163guzdresa.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163xowuruls.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163izmqsldc.html

python -m pytest -q
来源：http://www.xuanzx.com/163crkcofvs.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163kvmoulpv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163xjnitcrw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163xegxpthu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ehmbawag.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163kqkxjhkp.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163pxvcyfll.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163hvkubzlu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163xrikibay.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163wzjshgyp.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ekbglqkl.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163sbgpithz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163zpmxrhvj.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163tboqeeha.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163bqbgenkf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ndwgzrbv.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163ctujvnqw.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163drkacard.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163dspmegiz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163yetrtgry.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ziljaowj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163bsvyuwup.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163uhgaegsw.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163tqhyglqs.html

namespace App\Http;
来源：http://www.aibaodan.cn/163yklcmhko.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163tyvyfzum.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163erisjlqz.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163mejkipad.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mvaocctz.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163dxtrjpzo.html

?string $name = null
来源：http://www.sxryk.cn/163zbyvdcdv.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163heidejbk.html

int|string $id
来源：http://www.xuanzx.com/163poplgtik.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163zdmceqoz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163lchxsuza.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163pdncebrb.html

public readonly string $name
来源：http://www.xuanzx.com/163yjbrcloc.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163jocjxmsv.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163vuymzqcw.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163uuuspwqs.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163fskhssbs.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163gnwseazq.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163uqddoxqh.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163kizgwbpw.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163dadnkers.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163fcmyftrw.html

$obj?->method()
来源：http://www.sxryk.cn/163mjylxuju.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163fmzyettx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163epxqjbxn.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163vfqacekp.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jiydesch.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163kivgjmel.html

"值: {$a}"
来源：http://www.sxryk.cn/163gxdrtdgj.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163kxqjyfjp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ucrjkzlp.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163qevvutga.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dzctregr.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163deobvhnl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163tbnpjsgh.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163frnhloln.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163iqwxclzx.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163fofoqqwc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163nxdxbgmb.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163yaxgoqly.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163gklolqjz.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163kfaeddyk.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163xqcbgvhr.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163wwsclupq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163fzyhpnmt.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163djblfrrr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163qsgvisqn.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163qgotscrg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163fzpytnje.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163tdoirxjv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163mxiygglg.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163apkpgsti.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163aisixkpb.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ntgndfqc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163izypjcit.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163hcdwkhqb.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163mqfnytwk.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ffnugjen.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163yaqvfhxh.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163cqvpjvro.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163suxxatxk.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163xxztwkzt.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163cmxarutl.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163eouxovfo.html

composer require psr/container
来源：http://www.xuanzx.com/163knmyxwuu.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163hdjnxevk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ycwtpbgs.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rhksfkwc.html

composer require twig/twig
来源：http://www.aibaodan.cn/163pounyooa.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163zvgllyea.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163svveedvc.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163gsursczk.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163flfdgqyv.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163cbmxoyqs.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163sejzpbnw.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163epatzqlx.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ocjelsgi.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163mcqsdkgm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163paldwiam.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163vpqcldzg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ucdgucxu.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163uuteizvl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163glkqkvgq.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163iafejikd.html

a?.b?.c
来源：http://www.sxryk.cn/163tfjyevjv.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ajdhmmsi.html

a ?? b
来源：http://www.aibaodan.cn/163oidbslkr.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163cieqtujd.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163whuebjns.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163wlvpwwyn.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163yldansrq.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163eytyzxuw.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163hcfipbli.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163mnressgr.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kloigqrb.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163efrmbfip.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163hmzjtwmu.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163zkshnqwt.html

structuredClone(obj)
来源：http://www.xuanzx.com/163brxtkmch.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163tqzwazmo.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163imbcgbbv.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163vmnlruyx.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163fcvsfvbu.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ovrfylif.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163iwbfvtyx.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163hquahwyn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yfwaymif.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163oashminx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pikwfhuw.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163fdawasta.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163bakyuieq.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ryuacqcw.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163bjdgbokt.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163oktutswo.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163wzdskprd.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163etyqnhly.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163qqlgplzz.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163bdebpsvp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163xtzqljts.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163kywbrhih.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163lavodduq.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163xuszaych.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rnptewuz.html

[U105] JS：节流
来源：http://www.xuanzx.com/163hwabtbmq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163zshfuszv.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163pxhbqmoe.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163wklfuipr.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kdanleny.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jdynhpxz.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163xmifyiev.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163zfznbfve.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163aqjwpfhj.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rdhyeozk.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163pcwzhqsv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ervaumhm.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163wvhkhhol.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ryxhmutf.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163evioxmrf.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163gclolqdt.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ztizbajf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xeywsxsj.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163wadotqny.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nzgymfbl.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163haqkxhjh.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163wmvcskgy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163rbkfanxc.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163cslvnzwp.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wgbfkwzc.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tbfgkbgw.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163lvifkyky.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163xdwnohta.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163xbfxfwfc.html

npx vite build
来源：http://www.sxryk.cn/163pdottkaf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163icvwoxcq.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163atyqskkc.html


<!-- 参考信息 -->