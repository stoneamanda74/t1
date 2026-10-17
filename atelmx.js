外链999!wailian999！

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ciqxydgg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163bcuajcwt.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163gmawncdz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163iqucsvfl.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hpbxlebm.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nmapxmbb.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163csinogbb.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163regsxlji.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163skykgkfl.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163eupvyfwz.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163dfbnumpf.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163nduitiee.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163roqbxkar.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ebonmear.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ekmwhfyr.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163lfpdtxqp.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163kkfuqjvq.html

print("Hello")
来源：http://www.sxryk.cn/163guudjfaj.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163bbcxvbwe.html

local a = 1
来源：http://www.sxryk.cn/163pqcdpmra.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163zlqafgni.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163sftqliar.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163vpbwwkpx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zlkgyoaz.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163udhbbsor.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163qgckzkqa.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ahtabtvt.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163nisaajmr.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ysteauum.html

"a" .. "b"
来源：http://www.sxryk.cn/163cvzlkbfy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163kwgxtxmw.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ywyjnyls.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163njewneoy.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163rbbmadab.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ppvwsycu.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163geyltbbf.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163zjvzuaie.html

print "Hello\n";
来源：http://www.aibaodan.cn/163sluyucdq.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163izsgvhzx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163blhkkzpk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163obkmheez.html

"值: $a"
来源：http://www.aibaodan.cn/163fkcxleai.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163oomxlvcd.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163tupegphw.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163fixaeyje.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163gepdtiqv.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163aaxfrive.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163szogiokv.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163uvdnqwdl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163cvrepshj.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163umaxcwjb.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163kdlpnjqh.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qcuflrht.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163kcoopmri.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xamejnvi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163wvbslxgk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163psketwkf.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163jbfhkbrg.html

println("Hello")
来源：http://www.sxryk.cn/163ztkwtvyb.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ljxwjtpc.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163dlesuboo.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ntlicnzk.html

s"值: $b"
来源：http://www.aibaodan.cn/163aqwghkbp.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163wkfbticq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fitbfeco.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163zspedeqy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163linulvcv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163zjfwvrxx.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163xrphxesy.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163cqvxlbzb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ohkesayc.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163myzlbpsl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163bvcdhpkc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163zltbtwna.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163situyjtk.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163lweomknl.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163truuiihq.html

================================================================================
来源：http://www.sxryk.cn/163jejdazjw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xqtsvxkx.html

================================================================================
来源：http://www.xuanzx.com/163ndnwgjut.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163fpyqewdy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ymrsjjqo.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163eseioyad.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163gpawkegg.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hoasjual.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qtbulbcl.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163vseoyabc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163dqfssysz.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163wucwhxuh.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163viqojoqz.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zszhswkc.html

{**a, **b}
来源：http://www.xuanzx.com/163xztcpjxg.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ebsizpwv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163qoqsyrmm.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163pdjqevqj.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163eauexdpw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163xqzbgzhq.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163tosvrcoo.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163rmcilssx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163rahiwggq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163fxgrejvz.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163qtrisqqk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163gkhgbunl.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163kxadgase.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hprytzqx.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ioiqygcd.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163umfntzqa.html

defaultdict(list)
来源：http://www.aibaodan.cn/163iielqcpb.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163odmllpci.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163hrwugskp.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ovdwiomw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163lltxpfac.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163wpjdwwmw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163lxfhhehv.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zddxwras.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ofqjvgjc.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163mvjwgcfs.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163cmolfvzs.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163rpbezdmq.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163mnoyriml.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163oiudmdci.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163kzeozyuq.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163mokicsfu.html

list(zip(*m))
来源：http://www.aibaodan.cn/163qtbsohjj.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163dcmwhmkh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163saogqpyx.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163vjlxlbiw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163lrycwyul.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163bavbioyb.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163sgqzitej.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163twcpgihd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163feymkgzr.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163xpqqqvog.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163vybqlsgh.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163uiseibov.html

UserId = int
来源：http://www.sxryk.cn/163kxsjifqc.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163cdjwhtag.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163wuuoxjvk.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163srnjtgkw.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163jddlbfyc.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163nxljsavp.html

python -m pytest -q
来源：http://www.aibaodan.cn/163bmtznwpi.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163xuelyvlx.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163tuqtnarc.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163wvneoxxv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163jxpqsqbe.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163dpmrjuwa.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163pbjalaqt.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163tfjltrjp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163sautvlfa.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163iujorrcx.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163pyygevds.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163iijviiqq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163dlnstohk.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ptmddmsf.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mcgcjlwz.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163xvimjleg.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163yeiqecbm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163lodkssht.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hwawhsxf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163fnpnpwci.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ymnfjzus.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163zryelbzr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163nmlpqucw.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163icqeentj.html

namespace App\Http;
来源：http://www.xuanzx.com/163vhjalaqy.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163srbtggvm.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ppndltzi.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163tnaidahc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jdatqxrg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163wrcrfdfh.html

?string $name = null
来源：http://www.xuanzx.com/163gytmcpcr.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163bhfwpbdb.html

int|string $id
来源：http://www.sxryk.cn/163ucrupjod.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163xnrplsrw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163fwwhgfcb.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163mqzcxugu.html

public readonly string $name
来源：http://www.xuanzx.com/163qnuhfzvo.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163vsbqjszj.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163cdnfoxrr.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163wsqzfsqk.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ukgecgfw.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163zyruqywe.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163uxhmhzzx.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163npicnbqj.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163aaqajuqh.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163pzsjundp.html

$obj?->method()
来源：http://www.aibaodan.cn/163fxddudzd.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163dkkmuano.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163aeqiyfcj.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163zabmrxvg.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dcaldmdp.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163dmdceuyc.html

"值: {$a}"
来源：http://www.aibaodan.cn/163sytfjspj.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zozufopw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163wowtkunv.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163noduypko.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163yxudfebi.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163opzdpgjw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163yrgkelxv.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163gbwiaszy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lurjcxwi.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ikqseyfy.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163eatvbdpw.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163tdngcpul.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163fdfsbttg.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163rvejgtee.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163fvbggxkd.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163wzsrtqct.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163skocrpoz.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163xozbjtsj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163nnauqjqr.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163jyfkmmtv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163vxccheca.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163oaghrprg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163rmddzxzn.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163mvayeycy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163suvwmyzz.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163xnaqrplv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ikaceong.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163iqmxyujp.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163xmkgljyy.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163dwehovyb.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163vwfwzcpf.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163lfetiuvr.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163qaweksri.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163nnrgrdrw.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163uwtbcuqe.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163htpodurx.html

composer require psr/container
来源：http://www.sxryk.cn/163xkylvvxp.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163gddklitt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163xruzdbku.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qpiamwev.html

composer require twig/twig
来源：http://www.sxryk.cn/163azguplhn.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163mdfaximf.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163zdjbbuld.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163svrnprcd.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163weiknmms.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163kjgpuujt.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163sgiwlyef.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163psclyoxu.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163bbhxrsqj.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163scevsnsg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ocdawtjp.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163nhwcvudz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163cszbnpbd.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ednouxmu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ooopauhc.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163uzkbttjb.html

a?.b?.c
来源：http://www.aibaodan.cn/163byhpfamy.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163rxkpxpdb.html

a ?? b
来源：http://www.aibaodan.cn/163dlbjhcru.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163hemdfikb.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ehpguwve.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163bcdrjbxg.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163atptqnqp.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163stbbxbxo.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163vfvsosxb.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163fijgiovn.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163crxpcpue.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163svwlelkh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ympxrlot.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163emldvgri.html

structuredClone(obj)
来源：http://www.xuanzx.com/163txteaxsx.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163xoqegevx.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163wuhmlovl.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163cjyzjfub.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163uwntkfae.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163kzsdisvb.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ppwkwmuo.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163pgmzqbjv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fjuwafid.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163fvccdhez.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163isbzkxoi.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163jcnwdrcc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163odwbphos.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163nxwpdizh.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163unlbvxqn.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ahwhavfy.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163obffbaft.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ggrewvaj.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163gibswaiz.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163awktruiw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163lqfhhhob.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163adewnnxe.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163xscbviju.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163hlbnvenv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uzfxphzw.html

[U105] JS：节流
来源：http://www.sxryk.cn/163fizksgwm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ixanipox.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163wpvetvqy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163kutdkwfo.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163fxsyicfi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jaoitgoc.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163skmcrkfe.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163accyzmux.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ajethrov.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ojertvtj.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163gznystwy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163dxxsqofe.html


<!-- 参考信息 -->