外链999!wailian999！

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163fqkgolyb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163dlienwbi.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163kpywfvoo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163lfodrvip.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163iezuveqh.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163bjrithog.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ctrfkixj.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163umwukobn.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163jiiraikd.html

"a" .. "b"
来源：http://www.aibaodan.cn/163zsyrukfl.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vofevprc.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ywciivab.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ytsexcrg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163dyesnuvx.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163expikumm.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163fpffxeps.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hmyeznci.html

print "Hello\n";
来源：http://www.sxryk.cn/163jltytoaa.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163zzaniszm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163yjteasje.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xyldpojt.html

"值: $a"
来源：http://www.sxryk.cn/163ctrffubc.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kbcokhhu.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163isctkveq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163wionbdwa.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163cubvnvol.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163txeabpgc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163yfumwprm.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163wohmelcf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163iueggvnz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163jsrwtaqg.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163evwcppeh.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qmypbrry.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163qtdtgdid.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163udhuxvbp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163iacxngop.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163rntljyay.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163piwfmdat.html

println("Hello")
来源：http://www.aibaodan.cn/163mlwjqnta.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163piluufvm.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163mcciqyhz.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163uozdgbgk.html

s"值: $b"
来源：http://www.xuanzx.com/163oyghhwyw.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163vczjqaml.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163qavbcidw.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163kbhuxutf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ygwnhkyi.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163lsuqtqwq.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ivsjoeyy.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163eeqxaqmt.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163oiqcwvlw.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xfhuqqsq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163zvcusnfg.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163xddcltmz.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163bydfjgmf.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163pgcndmpk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163rrnxlcen.html

================================================================================
来源：http://www.xuanzx.com/163prbtvqew.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qeqfvook.html

================================================================================
来源：http://www.xuanzx.com/163mhscuxhm.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163wwwigjyr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163lbxbkvdj.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163dwmvrwbj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163guisiskl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163kkpgghof.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163yfijinrs.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163imaoozjp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163nwywgivx.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163sfpxypdg.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zijueqmt.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163vselretp.html

{**a, **b}
来源：http://www.aibaodan.cn/163bhrbotua.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163eewfjvcr.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163mtavvadq.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163qjirlybp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163esjtkdep.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ulzsbqky.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163agrvssnu.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163gpwmufle.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ffqifghe.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ilidzzxz.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163tjkkuynb.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163fxqkdzhs.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163iegvtrwh.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163fvusehox.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163pqrfspmc.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163hhifbxij.html

defaultdict(list)
来源：http://www.sxryk.cn/163imhkoqjz.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163vmxskzhr.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163umflgyln.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163dmhnpfsu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163miqkscin.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163vsnwubuc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163pykoioas.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163wcfoiadu.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163uyhxaznw.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163sjeynffl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163izpopywz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163pqewhmyw.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163fvmovupe.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163fusumkrt.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163xdkzlvri.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163zuoxkfyf.html

list(zip(*m))
来源：http://www.sxryk.cn/163xpmffgie.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163xprqildd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163cbzgpnzm.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mpjqxxde.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163emljznxf.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vweybnpd.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163pxcbuehg.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ikbtyptl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163juwiypde.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ynfnmifq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163vlcisvzf.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163nmxvqfjn.html

UserId = int
来源：http://www.xuanzx.com/163lqzarbee.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163sdxnrfky.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163hhyrpuvr.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163vpsawznd.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163figrrjgq.html

[U31] Py：单测
来源：http://www.sxryk.cn/163nawpyzwy.html

python -m pytest -q
来源：http://www.xuanzx.com/163isrttzfj.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163paoyzhaf.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163kdmokiss.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163qjdzzzxr.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163jqenzxzv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163usgleczj.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qqixphxr.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163evagpigk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163poirtwqw.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163pusgxkzm.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163btmnsunu.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163cumiwobg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163nqmgjyox.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ktzueijd.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163dfammgde.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163cnrarhfg.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163vmcvquec.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163jnpkmnvb.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vjvpgajj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163zbxshlft.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163hzqllnro.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163peorxwil.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rjtpxhvg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163cvyyecek.html

namespace App\Http;
来源：http://www.aibaodan.cn/163pgtmnolt.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163lfjewwbf.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163xgkgbpio.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163warnrppi.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ajlgffsx.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163jtmdozol.html

?string $name = null
来源：http://www.aibaodan.cn/163zyplzhnt.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zcgijnui.html

int|string $id
来源：http://www.sxryk.cn/163silfhknk.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163fkbxtehr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163gsvwcqbg.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163cbyftkhx.html

public readonly string $name
来源：http://www.xuanzx.com/163ppwlfctw.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163nahlizvp.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163pnrmfixl.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163wykhxbhm.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163laoefbqi.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163lhyyzddq.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163vktdwkey.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163vrfrovoa.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ctcxxvip.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163dquvypgv.html

$obj?->method()
来源：http://www.aibaodan.cn/163hvcjgzzd.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163gmzjtrjc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163csjyizlc.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163hobyyczd.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gewxbgkz.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163qycaaeez.html

"值: {$a}"
来源：http://www.xuanzx.com/163wxljgglc.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163urxmogfv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163wiwfdogy.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jjwtvwid.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dvpmtuni.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163jvovnagn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163nmwkzjag.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163phoybcuz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kkhxhftq.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163liiotqmv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163yuebkllg.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163zjqldcya.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163agkyicpb.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163kvqomwfs.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vpnxsbgb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163uuparlwy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163iyljrnju.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163dtbkhphs.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163fkecpehp.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163wjgdoutg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ijteeeqi.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163xmpamgur.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163keuozlzz.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163tzwkdivp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163cutwdlre.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163pqfsmnbp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163vdbxygen.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163xfqyvqtm.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163rkesqash.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163wqueivqj.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163txkzyxwi.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163vdunemvv.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163lnmxqzpc.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163mmvmsvoz.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ohnxvqiv.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163mnqbdmce.html

composer require psr/container
来源：http://www.xuanzx.com/163rneifjbq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ekbvcgin.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163rgfxdniw.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163yaxukgwa.html

composer require twig/twig
来源：http://www.xuanzx.com/163tgbeivri.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163qpivhcpl.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163hjktspzc.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163rftkmhqt.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163pjquwfqb.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ywgkqrkk.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163lqqjqxdw.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163hzlxnwlw.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ktfbepbt.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163tgdsblgu.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163axiovypt.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163injywqts.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163rpfflsed.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ugfuqvgt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163nnybdrzi.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ueaqopot.html

a?.b?.c
来源：http://www.aibaodan.cn/163oqjufhyz.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163owaejews.html

a ?? b
来源：http://www.aibaodan.cn/163dltmsnke.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ujapxzdi.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163aegsxlgd.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zrezomtp.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163gcteiaga.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ijorwkms.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163xfadhbgf.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ogatxdef.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rtcimjkz.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163bxqcrnsr.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163qlaqnkuc.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163qoxrcueg.html

structuredClone(obj)
来源：http://www.xuanzx.com/163fswazdxc.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163saavgfvu.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163dufwhrio.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ivchgkhl.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163zozohcsv.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163acrwgfcb.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163jdchuyri.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163tmtusrty.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ctfqxzbh.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163dnnumiru.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jharxrtr.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163xvxhzgbb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163fcxvyqak.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163lxtjvxot.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163rpakmcsc.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163fkualvpw.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rkaqtyui.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ppbfrzkw.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163qzsivebv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163bzoyyjyn.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163pismdctk.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163bomkbyus.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163huemethp.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163xfyinvju.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bwnqgtlf.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ulqgfqtr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163evzqujxx.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163gxjkactl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163vwgrdxka.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163viraxyub.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163naqzwoqz.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163lllxtgyc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163evrlshxl.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163yzofknzp.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dvrcossg.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163thacfcob.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163qvjonrux.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163rreyukjq.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163yjoiaojj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163klbcgnbm.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163myyhsqvz.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163cxjqpzkr.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163knibjhxa.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163mtljmzks.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mfhzlggy.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163vhqfretl.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163uyyvemgv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163zzvwtqmf.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163abfxapch.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163uesjpmhk.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ztxqdwjj.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163xkumiabn.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163jrtjxunk.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ssjvrrsk.html

npx vite build
来源：http://www.xuanzx.com/163ppihfeul.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163nfzwnkjq.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163fjqlqnih.html


<!-- 参考信息 -->