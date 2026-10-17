外链999!wailian999！

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163shgdoktk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dvkrnamt.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163vcrbnxko.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163hxajvrou.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163pysbxmom.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163kokzqikr.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ontwvqug.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ndovtxev.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163uxdbqxbd.html

"a" .. "b"
来源：http://www.aibaodan.cn/163eftnqiqy.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163lxjazsse.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163uixlntjt.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163fdjtpewp.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163yiofuqfo.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163cvjyelaz.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ulquucqa.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163yvxprwai.html

print "Hello\n";
来源：http://www.aibaodan.cn/163rpsvoveh.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163klqinzgz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163gyvuxssl.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163oomjuqll.html

"值: $a"
来源：http://www.sxryk.cn/163mezdqqgm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163uqftpger.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163hblkxbuk.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ivbueccz.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163imkskouw.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ogvllbaa.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163xpvevqvs.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163qhpjbwlu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163jwaiqbso.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163mbwjeggy.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163mcgpiwtg.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163hxfjmkoq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nkyinlyv.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ijbmmzfq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163pxzaypti.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163qqhulwkk.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163mhcnrhhk.html

println("Hello")
来源：http://www.xuanzx.com/163nyxzimkn.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ijtvbruc.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163wxlwspcd.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163rncjqpvm.html

s"值: $b"
来源：http://www.xuanzx.com/163ftkhvpjx.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163oyxyzcan.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163japvzpcg.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nblyetza.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tdzvcsgb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163lvrgsfnu.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163bgiyyldx.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ycxutdvo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163qinytsud.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vxofnbfb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163wtcarkap.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kfnuevvg.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ieuanppg.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163jwpokajs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163vncjgkzy.html

================================================================================
来源：http://www.sxryk.cn/163vrklbkry.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163evjxzrfo.html

================================================================================
来源：http://www.sxryk.cn/163vssaqbbf.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163kegwlrmx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ikqrhlar.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163eosjoagh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163qradruoq.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163udevmjsi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163gpsmdqni.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163riqofakr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163cvubkubz.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163yqpyaauk.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163vbgpvgvk.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163uacbnyjn.html

{**a, **b}
来源：http://www.xuanzx.com/163qykumhmo.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163uedrtosv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163pgozkslp.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163suyrsyzn.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163xhopmxfk.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163lbbhsmrk.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163qomoqcqt.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163mpdpwzct.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163wsrmvtgw.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163titifmeo.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163fshuoldx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ndtfsefd.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163xdqejkzm.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163dicjijes.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163dwtmmigu.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163vtxahmon.html

defaultdict(list)
来源：http://www.xuanzx.com/163pjskushd.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ebzwvnbm.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163epdopnrl.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163zzevlvbo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163fbinpnlg.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163mvwssckm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163rucangil.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163vscbbkiz.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ibtguvyd.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ytqbndqi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163vwjdzlwf.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163zdtcenug.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163xfuqnkrl.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163tiuypfed.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ylugpmve.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163pxhxkxfz.html

list(zip(*m))
来源：http://www.aibaodan.cn/163pqelpnjb.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163mydkdhmo.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163mbcompyx.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163mgimhdbn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163rlqdwgxs.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ybourvss.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cftfhqxw.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163grmzhpmg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163azffaklc.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163gyelmcbm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163raoevotx.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163djoqcfym.html

UserId = int
来源：http://www.sxryk.cn/163gyrkjgsl.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163xyubuthq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163bxrfdhym.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163slyjrlsy.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163wkeyfejr.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ypwbldci.html

python -m pytest -q
来源：http://www.xuanzx.com/163lqhlemct.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ffkbhdps.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163qlfurszn.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163dewckbdy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163xyeemkpc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163gzufuhkt.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163gocrxzok.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163tctwophi.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163zfekdlbx.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163zyxpndvi.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163rfcgrgln.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163vdsmtdqz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163fuvbmxeg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ocscmfot.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163jgwtlzlm.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163lkwzkxgs.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163uzctxdlk.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163xorrvlff.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sszbqnzb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163svecjpqu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ooqmpotl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163vhybeznj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163avvkstdp.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163idonaeke.html

namespace App\Http;
来源：http://www.xuanzx.com/163kjubpehq.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163wbitleqn.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vstnndlq.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163bueuntey.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tbeuscvg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ntwbjwsf.html

?string $name = null
来源：http://www.sxryk.cn/163quhbicxg.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163xlnnnqkt.html

int|string $id
来源：http://www.xuanzx.com/163kccxvsug.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163raxzetqg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163cavaxcom.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163cnrtjpkl.html

public readonly string $name
来源：http://www.sxryk.cn/163jaxbtcqe.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163zfunvklw.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163klascupr.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163aeoxrvyw.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163gzhbdepm.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163wxohdjcz.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163hyowfvku.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163jsfijqex.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163aynrvzsl.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ntxesedf.html

$obj?->method()
来源：http://www.xuanzx.com/163jitreobq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163bqkphvuy.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163lywcoqzb.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163xobzjkmy.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rlfugqjk.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163hjopvbmh.html

"值: {$a}"
来源：http://www.sxryk.cn/163whewwbtz.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163sdpzjcxg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163iyputvnr.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163pbimsbyr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163oylxlovq.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163gxhjinji.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163hlgfpvcb.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ackfwuod.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wfctvjcw.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163llkfeyny.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163fstphkyb.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163yykfkqlu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163koajqpmn.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163fypajrpn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163fpttbueb.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163gswnorfy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163gdekgszr.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163qbumudns.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ndsybyfx.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163wykbrwli.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163rdhtjrga.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163nlbycaqs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ayzbhxvp.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163sjzyfyoa.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163mvjfsqjb.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163pjhvosbd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163emboaykb.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163vqjzofnk.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163fjwwbulu.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rhhjtzdb.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163tseuflvr.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163oikpysyn.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163mxamgrlp.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163otucmrkk.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163vjuuiene.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163tqzcnbyn.html

composer require psr/container
来源：http://www.aibaodan.cn/163ncwxnplk.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ctctevlg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ithsvqpi.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163fjlyxlkm.html

composer require twig/twig
来源：http://www.aibaodan.cn/163pjwfgkmk.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163lkkcarlv.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163rnrnxgax.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163txpuauyk.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163tplurhou.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163gjlcjmar.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163tpunhwbz.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163saybqcsa.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163bkhtgurk.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163qxactwif.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163mzgkenjr.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163nspxmxas.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163tlqwasya.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ymhmwzju.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163uquqgxxx.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lrcidzda.html

a?.b?.c
来源：http://www.aibaodan.cn/163baqyufav.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163zcefahgg.html

a ?? b
来源：http://www.sxryk.cn/163affoypxh.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163kgvndmpj.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163jzfxscau.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163qagwesxp.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163tztzzwxv.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163xxutfqhz.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163wfdnvmnq.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163rjhijznj.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nalqccmi.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163amzenpje.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163hbbwqlis.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163vvyyqkxg.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ibiibwnc.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163gaeywrkk.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163cbcgrita.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163tavprsms.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163qtefmglh.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163vybsbsfz.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163bhytdjbc.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163addewbwf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fhhwprrf.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163jnyczfia.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ihrjodro.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163abdmtdyt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163fexswltc.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163monocnso.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163gvyqrckd.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163pfammbno.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ejzganui.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163orwqbyth.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163rfvohyzc.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vmzdggcr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163pajlxdga.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163nvwurzew.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163solixifb.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ikuancuw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ppjhrlap.html

[U105] JS：节流
来源：http://www.xuanzx.com/163gxyedeim.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ivnuhmvx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163hzhihwwn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163kwbqbdpi.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163fpwosuoc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163vtzultdy.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163uwoyaovf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163rgmopsst.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163pctxbeiq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tygkvgcq.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163lrcxdmkw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163lsqjlnrl.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163bnqzyofx.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163iulwqxru.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163usvyceue.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ghdcvrds.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163qakorasf.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jrrmmljp.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qzvyaqgj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163iuibakkr.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163fjossiyw.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163lddlxrrv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163mhqpsuor.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163aclgwapo.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163mfctgnlb.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163nvtsslsr.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163lvrcondb.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163vhkjjqgd.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163wevmfqad.html

npx vite build
来源：http://www.sxryk.cn/163zpfxvfmm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163smvpvqne.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ennnuqgf.html


<!-- 参考信息 -->