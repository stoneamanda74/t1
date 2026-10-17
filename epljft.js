外链999!wailian999！

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163jpdteyuk.html

print("Hello")
来源：http://www.sxryk.cn/163rfpsvyvh.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163enbkirta.html

local a = 1
来源：http://www.sxryk.cn/163teratmbn.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ejvbeglt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163swiwbujl.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163tezkpfuw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163pvcdgtrn.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163glbvbmac.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163fhiturhv.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163avqzscsk.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ynyfwgca.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163dkgsnzlh.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hoczkzwm.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pkkueczo.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163jcmvlwig.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163nqconqvx.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163vfnfuwap.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fwwkdkhh.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163kitqkofx.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hccxfmrx.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bevfhprc.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jacdydnw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163rymwpnkz.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163pzhhgnne.html

"值: $a"
来源：http://www.aibaodan.cn/163wwrehrro.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163pnyetbho.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163wekwpqcq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163djmyihkv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163fyqjnvon.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163cizapnio.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163bncnbhsi.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163pkklvszx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ixjiicik.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yanbkygu.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163aipiyfio.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ejkjmhim.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163udcsapmp.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ezbxcgza.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163wuzojaou.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163oeemmhdx.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163giqzfmvy.html

println("Hello")
来源：http://www.sxryk.cn/163stzksthl.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ycvnvzxi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163yumkacjd.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163dzjaktoe.html

s"值: $b"
来源：http://www.aibaodan.cn/163jqtjsgmh.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163oivbmhtt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ptebvvdj.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ynlvcwrv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163xcciocjn.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ikmkkvwq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ihzzmbbj.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xufpnslu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163wytpdsbs.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163tokgflah.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ptsxcikx.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ybejbogu.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ingjaoer.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163lnutnpru.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163idjabumf.html

================================================================================
来源：http://www.aibaodan.cn/163tuhagirx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163tbkvmsco.html

================================================================================
来源：http://www.sxryk.cn/163sciujimr.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163wrmfmyay.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ifcdhddw.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163dlxykolk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163txkqslur.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163zrvvrkkh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qvafhtkk.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qshlsojc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163fefordjs.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ybyxzrzb.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163myapbxgb.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163vrpquqrh.html

{**a, **b}
来源：http://www.xuanzx.com/163tahzmkdf.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163yawdwtoq.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wxwqbweo.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163izbtqhjl.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163vxplaemw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163tjxpwbcn.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163wnqjgxsz.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163pnfqabay.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163catthvro.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163zlteguxn.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ocojbntr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163rbjzjaqe.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163idqntnkk.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163pjjwmhga.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163jfyicjit.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163jzmfrrbc.html

defaultdict(list)
来源：http://www.xuanzx.com/163umvmsgbo.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163bsvfytfo.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163jfwhvkvc.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163wtbfhjwn.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mgnemynf.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163uydddwza.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163vxhbeobu.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163hotburwz.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163fhhkrjxs.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163dvclmrlj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ezphuyqc.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163nngqbowf.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ccznzzzo.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163sxfkklmx.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163kktihtrq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ctsumftm.html

list(zip(*m))
来源：http://www.xuanzx.com/163dujymsez.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163dbpfxvts.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163jskxsneh.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163lpbahivb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163zjxaomai.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ttmyofmd.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163wltvufye.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163hluwoije.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163zfpqwfbn.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ltrghnlo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163jfrmrugu.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163nvgddecr.html

UserId = int
来源：http://www.aibaodan.cn/163gbqxiewp.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163opikaygq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163weawllhq.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163zacpxnas.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163dglgdfcx.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163hbhddvcn.html

python -m pytest -q
来源：http://www.sxryk.cn/163ermbxqxe.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163squulans.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163cbnwjdrl.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163bvnyxqoc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163dryglmgc.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163bpucpznk.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163hwtrdnac.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163mgvkyqwm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163patybiag.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163zwolqjsc.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163uikckaqt.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163pyrpnvyr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163iojtipnr.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163cooptibk.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ylqkmdlt.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163lsdxpogv.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163jhjoezle.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163rajrpmga.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mecjagev.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163eihesdxq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163dusafncx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163tcrhaqyl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163murwudkz.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163rjpegjvc.html

namespace App\Http;
来源：http://www.xuanzx.com/163wybehxlb.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163fuhewprg.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163befmyhwe.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163sgikjjbv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oofmqozo.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163yxhtnnro.html

?string $name = null
来源：http://www.xuanzx.com/163npqobfcg.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163fiapesfb.html

int|string $id
来源：http://www.aibaodan.cn/163lywdftbb.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163fbhxlmwk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163pegibfpq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163kvetjqbu.html

public readonly string $name
来源：http://www.xuanzx.com/163oenqtkbg.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163iooywjhr.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163svslpyha.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163qfdweogc.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163myevrsyu.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163bnwznrsr.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163qqbywurb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163nrmuwdoq.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163afnzuqrr.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163tyxkqsen.html

$obj?->method()
来源：http://www.sxryk.cn/163orfwfxtg.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163swsvqvpn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163pwgcgxzn.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163tuuitxoo.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qesmaryk.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163tyounevf.html

"值: {$a}"
来源：http://www.sxryk.cn/163vwvlerfw.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163sgmgmpaf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163tcefcynq.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163xbubsoai.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163esadxugj.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163qlsbmohy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163xrtcpgvj.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163vcprsrnc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163eauukcqg.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ixujkepf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163veqdycut.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163emrcdedr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163jwwivzba.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163jhpgbexh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163paoskcqn.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163vtoxyoru.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163yrjeumtv.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ngvhvleh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163zzxcqtis.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163rrksgbmw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163mgluimnd.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163jybizvxb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163jtdrmmbb.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163cocualml.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163rrtbujig.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163pvmshvee.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163aducdhog.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163akapqmgf.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163uyuvkvqt.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163xsghpthq.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ocrzpjjo.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163irvafqww.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163irygfkwb.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163wjwayrvf.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163egzccrbz.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163ctqymagg.html

composer require psr/container
来源：http://www.sxryk.cn/163kaorkevb.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ercyhhec.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163omhlkzby.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163bobqputy.html

composer require twig/twig
来源：http://www.xuanzx.com/163gytfhlet.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163goljsbkm.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163kohbehlg.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163eabyddlq.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163qyhcrhmu.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163yjflgfmg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163jyuctcig.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163eunkeizk.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163fgxhcasc.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163jrpnenhr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163tyzmiwgo.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163fdsnxeam.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163btkxnknv.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163hvrfeyra.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163brjavqes.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163fkxqodxw.html

a?.b?.c
来源：http://www.xuanzx.com/163jxdqdbbr.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163oofrqdsv.html

a ?? b
来源：http://www.xuanzx.com/163hglpomti.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163dbbsrxrv.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163isxnroez.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ygkkfgmh.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163wyblbrkk.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ospmfxhw.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163naxijxli.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163oybxeghm.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kqrlkhat.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163scxjhvnl.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163vcrmnchy.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163jywuwlgb.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163xrbpovts.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163heucasie.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163rhitcdfe.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163hbkwmjaa.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163tdgeutyq.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ohgdpduq.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163cofrqhws.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163yzdifwip.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nrjqnvve.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163aqjjlapt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hgvdjcyv.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163pbmeuism.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163cxtqvdbm.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163utdccihy.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163brsjsfgj.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163sjyjjanx.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163rkizwezz.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163mzxbsivi.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lppycyal.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163gsirijtg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163twspgqxl.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163qaapcwcr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163kfszkqpf.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163dtajumdx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ttnyevox.html

[U105] JS：节流
来源：http://www.sxryk.cn/163oqzaetxa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163jxxjwczm.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163fzhzhccp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163nonpazrf.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kzpqytxt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163tgwepmkq.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163gabneyul.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163jpgpvglu.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163xqmejuxc.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vxhgxfpa.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163zkxeczca.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163yfvmvisd.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ncefxcve.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163hgqnxtwl.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163vsoconcy.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163fwmhngqg.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163xmvafdak.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163khrhigra.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163wcujkiyl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vpaxsqfz.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163fscglmcn.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163qqfuvtuu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qkctqkua.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163kdbhjqji.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163rwvqvquh.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163trllxjcr.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163xzksopfh.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163xiphybex.html


<!-- 参考信息 -->