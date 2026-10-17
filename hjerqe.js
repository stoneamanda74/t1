外链999!wailian999！

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163uurorwkg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163guwyjkzx.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ormrpqfj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163dhezzuhd.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163cxvhybdu.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163jyhcjfis.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163anxzindw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163fqqhpvyb.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163sjydpivy.html

"a" .. "b"
来源：http://www.xuanzx.com/163sqbtnsas.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163lvaynwog.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163hevwylga.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163hwtwkboc.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163lnbjpiqv.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163apibzpdu.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dibfkzoc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tbzzuiws.html

print "Hello\n";
来源：http://www.aibaodan.cn/163aljfcevi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163svgdgsuj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163jljswzah.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163bwaspcvv.html

"值: $a"
来源：http://www.aibaodan.cn/163vfreucwy.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163bazwqtof.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163okbabyxq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163tzcuxzir.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163itytaxds.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163uzjwclta.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ortinixu.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163gmmtmndl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163eedmwqwl.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zpkjbiga.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163iroymweb.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163jyrbebhg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xjutcgln.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163vsympayk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163qxrkdymv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vexxelue.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163nfibgdnu.html

println("Hello")
来源：http://www.sxryk.cn/163vfzdogdz.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163cyqjuveo.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163pzonkzkb.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163mwfcpwtw.html

s"值: $b"
来源：http://www.sxryk.cn/163pbdyxipe.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163snacudqk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ujcmlweq.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163srlamlar.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163pzvnuqwo.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163mypnfzud.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wxtsaznh.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163cduywnah.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163damzxumv.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163qsjsyabt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163jgjdtbai.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163bmesfnzz.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163lwcwdjfs.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163khuyavtz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163osyvealj.html

================================================================================
来源：http://www.sxryk.cn/163dvgjvqwv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163njwltitk.html

================================================================================
来源：http://www.xuanzx.com/163zstnceia.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163nzmopidn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ooxxgkgl.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163povxpfjp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163mqndgftg.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163fplsydwr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163neouprxl.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163imgbjrdk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163tgnsmikn.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ngnuxusa.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zvxepkem.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163qpfwtcft.html

{**a, **b}
来源：http://www.sxryk.cn/163begfkfvx.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163gerwlinc.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163oradhkka.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163pnrtpfdu.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163albhtblz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163swrjkury.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ftexfuko.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163dvmbzlsq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163vdwfhied.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163spxvmqut.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ccfnquut.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163krbcsixh.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163nkoqdbtu.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163reizxbvw.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163cbfofsax.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163iwjqfrsa.html

defaultdict(list)
来源：http://www.aibaodan.cn/163exgogklk.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163pozlfmvl.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163aurayzei.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163pijdsrll.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163jnxerwem.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163vozuqywo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ahwqfgtv.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ybraoyqs.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ldmbyjty.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ckadppet.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163qhxzqyub.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ksyasfdz.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163muilxzrq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163kaeghxne.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163jhwkjefo.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163hikohhyu.html

list(zip(*m))
来源：http://www.sxryk.cn/163gdwxoufo.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163hyfjhnwg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163mpoacdrk.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163fnmfnkoi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163tpthjmkl.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163cmwkneeb.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nkgtvtls.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163xdnxgqgh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163tphtzxrf.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163jxgmkrqe.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163uisscebk.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163amktnycc.html

UserId = int
来源：http://www.sxryk.cn/163abyfxepx.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163sxzjdogg.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163zahaldwj.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163oeujcujs.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163yybvmriq.html

[U31] Py：单测
来源：http://www.sxryk.cn/163jspogkiu.html

python -m pytest -q
来源：http://www.sxryk.cn/163zuhugutp.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163znafsjzb.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163karogyfb.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163misjvtbg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163gseclqbs.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163aolwmwhu.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163iozjiymh.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163qemeovwa.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163opnrgzxy.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163cggjkgib.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163lhzjstfi.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163pnvodwet.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163bskulwhx.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163qeoovwju.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163nkxazves.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163bazysuxd.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163lmunfste.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163gomuvfdh.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kiwueibx.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163fgkfjtsi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ezjxxsuj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tuuswfaq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163nucfalvg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163qedngddj.html

namespace App\Http;
来源：http://www.xuanzx.com/163annqwsig.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163dtzrjlgp.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163eomcenvg.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163emhfxuvv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bzzqsrcq.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163jtumoxby.html

?string $name = null
来源：http://www.aibaodan.cn/163uxvzgkpg.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163uzmjlayi.html

int|string $id
来源：http://www.xuanzx.com/163cbpzedbb.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163aczqdzir.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163lbvdldqo.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163oxfnfuzx.html

public readonly string $name
来源：http://www.xuanzx.com/163ownkgagq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163xivqlckh.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163atczthld.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163didlibme.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163spbojiya.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163uiahkygb.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163jqvpwtkv.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163cemvssum.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163sxrwfqun.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163tjzqvdyb.html

$obj?->method()
来源：http://www.aibaodan.cn/163qiovjrkq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163bzkiysuz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163aivjxaku.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163kmtttwny.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pgmjcvzc.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ykjycyof.html

"值: {$a}"
来源：http://www.xuanzx.com/163lwilymya.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163fnnmoqiz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ekxvgkvz.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163rhqejnrs.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kbfqafxz.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163npeeypel.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163geaqagpg.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163pohlyohk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vykbuhmc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163abtswcyy.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163jgmqghsd.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163oftzknoa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163egkxufqk.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163gnyhzaai.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163gjtpeygr.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ixkfbuqp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163uqjtzvph.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163duontneo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163wpgymvvx.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163uxugubpn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163mnujdppg.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163vdkfqnrf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163lgijqxws.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163xypzlezk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163spgsudik.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163owveszdv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ejjdlnlt.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qxmcasks.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163dblgxfrk.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163lwvncual.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163fhdgaeeb.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163zsmhizys.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163fgpwfvgj.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163uruipcau.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163hxoxjavw.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ywcgfrdh.html

composer require psr/container
来源：http://www.sxryk.cn/163pvwhlpyr.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163xyqirjzn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163uerhdmux.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163dkudwazn.html

composer require twig/twig
来源：http://www.xuanzx.com/163bbrjwefc.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163jmondloq.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163tkwhfrsk.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163fuvvahxq.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163wppjbbfx.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163bjuqzdgs.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163btyauftl.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163gusrzevw.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163zhzmsasx.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163dklyxzco.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163drqouoeq.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163afqmxkfx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163eczciyva.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163jtzqluvo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163tcybhyef.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163fuhvbwjr.html

a?.b?.c
来源：http://www.xuanzx.com/163qsrehaom.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ywjhhpbe.html

a ?? b
来源：http://www.aibaodan.cn/163byjgmfkr.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163swexfhhv.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163yozokqah.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ezksbbgl.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163ajhpwdtj.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163qlivnebf.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163znxgevqx.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163czvrudkl.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tnyjijkd.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163xcgqdnze.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ybtvcyku.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163motmposc.html

structuredClone(obj)
来源：http://www.sxryk.cn/163aicojjek.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163jjvtdttb.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163zcebjhhk.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163lweqpfyh.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163qhdffcdb.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163kdfonayb.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163xoyfvqog.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163dsupvrtl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zbndirwk.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163thlmzwiq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163krctttnn.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163cemeuljd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163hdowyulm.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163fmcwtlbq.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ubahxvbe.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163twfimadz.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163zewegfto.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163jypbfbem.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163kzazhdvr.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163loikkwdi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163juftpapu.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163vlikvfxa.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163thwurzka.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163jvtsppsy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ddfehxzg.html

[U105] JS：节流
来源：http://www.sxryk.cn/163bvljiljq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163tcxhstrc.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163hkdwsshr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ghfsrpwm.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163jilvkaho.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163miqwihed.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163zgwglqid.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163dokhvkbs.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163uzmbfzsv.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gbscuzee.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163qavciwam.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ciurwnmb.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163lgssyxpt.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163asfrqpqv.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163bhcrlrlx.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163tjomlwxd.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ohqviwbw.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163doaxyfui.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163feebiigz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163opetobrg.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163snqeuvht.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163spgffqnp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ffvgqoxb.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163mbrptfae.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163izhwwvub.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163qtgiszmn.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163sgapflhb.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163jovgeidq.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163qqbkhxee.html

npx vite build
来源：http://www.aibaodan.cn/163rlflllld.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163nphvzcys.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163gtneoglv.html


<!-- 参考信息 -->