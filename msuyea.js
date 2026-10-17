外链999!wailian999！

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163pwkxqrho.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163scbqebqz.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qdkmwigt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163jworspka.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163scfxqyok.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ezckzcmh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gqchsbku.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ufrmrzin.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163shuvngha.html

"a" .. "b"
来源：http://www.aibaodan.cn/163vdzpxqip.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163nyhruqgi.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163tmlhmwzk.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163mijqqkdb.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163vyfamklh.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jojwwjqp.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163sttvdznb.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163cfvqmquy.html

print "Hello\n";
来源：http://www.aibaodan.cn/163kadqyczr.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jimyevqt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163xykjlkhc.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163vtqvmdkk.html

"值: $a"
来源：http://www.sxryk.cn/163uidcwhka.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ysejrcmt.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163uqwqntxz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163axtabead.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ffrxemgs.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163lszqnuhn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163slmyjfvq.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163wrumbzep.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163mvdligoz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163vgmqyuzw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163rixtzohh.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163yqvrqyss.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163vrkildpu.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qnddudbc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163yabpmhzh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163xyjpquas.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ecyejfkw.html

println("Hello")
来源：http://www.xuanzx.com/163jeegoowq.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163pvljldfn.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163dtoslcnp.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163nminkeql.html

s"值: $b"
来源：http://www.aibaodan.cn/163xjeeneed.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ltbejoim.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163xwykfvmg.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163wtmfewta.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163lxjcauhl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163rhxoqeja.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163kkzpbszk.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163saftzxta.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163xblvbbzp.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gwmdpoth.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163fljbrcqj.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163bdbcftrm.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ylwsfsou.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163chihzipc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163glsmrisu.html

================================================================================
来源：http://www.xuanzx.com/163vfiolama.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163eaorpgia.html

================================================================================
来源：http://www.sxryk.cn/163bimmegeq.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163dsmratnz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163sssuxonc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163bmtoidbq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zuiduwwh.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163xagcbbcz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163tgjyjcbd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163udandznt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163gsbfagpv.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163zsrqbxxe.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163iaopijrp.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163xqwmfvjt.html

{**a, **b}
来源：http://www.sxryk.cn/163hdjckeqb.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163wzqhhniq.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163sbmqhjyn.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163jctcweav.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163aejfpujm.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163zcatgjsn.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ugcwhefh.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ruammbsd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163jojepjoj.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wxnyhjbs.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163lazxcqje.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163cudadwvj.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vdizpxhq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163puyztqis.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163iaxubwea.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163jwmcalnc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163zfnimive.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ygnixjjw.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163mzqablny.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163aoqliagd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163erdeuczf.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163xbnppjyp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ufhfuabt.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163xwmbnnmm.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163epqhnaat.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163uvteceqg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163droraqkt.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163opcyhmqg.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163lnketxjz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163arbajycg.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163cioxwhyl.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ptppzpph.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ejcqafox.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163tszhhpgt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163kpbkcrym.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163lhuvwzsv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163anpojglq.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163pmtpmmzw.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ecldrfox.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ieklfzvj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163zdahobdb.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163trpuzjem.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163sirzwgis.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163clxncshs.html

UserId = int
来源：http://www.xuanzx.com/163svujuxmf.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163yfrxmqix.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163mxcjsaig.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163hyffdjbm.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ceuncasl.html

[U31] Py：单测
来源：http://www.xuanzx.com/163usiiualn.html

python -m pytest -q
来源：http://www.sxryk.cn/163zyxbdmij.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163tllnynfc.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163cjmuesxb.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lvktvvuz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163uapdqsgo.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ogvvoozg.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163vjnmjeky.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163rewwniyq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163yaculcvy.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163fapzjkdp.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163bmwypvsy.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163rxhspyff.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163lcesvisz.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163iykeprnp.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ycbfapyg.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163gdhbuych.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163fuyhahpp.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hwykklsp.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ccqpmcjk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xxxlxhcu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163nmiylfjs.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163lzreazva.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163lhcdansj.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163jhkhauiy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163mlihcefo.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163viumfywj.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163hwmbpggr.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163noazcmfg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lnucmdtd.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163rsajdsww.html

?string $name = null
来源：http://www.sxryk.cn/163phipqfsg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163botsvmsb.html

int|string $id
来源：http://www.sxryk.cn/163wfiwfxqg.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163einugain.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163hfotfpcv.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163sdwrskug.html

public readonly string $name
来源：http://www.xuanzx.com/163ygfjskfj.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163dkbglbhr.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163fccwhnja.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163hnmqypsk.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163wjpvqyfm.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163uqprohgc.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163jthfique.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163txlpnuii.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163kxigwflt.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ivgnrora.html

$obj?->method()
来源：http://www.aibaodan.cn/163gnkuzuyk.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163nnwffvrt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163uefqezgd.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163tgkmdqpp.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ldhtkvna.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163seeghmsr.html

"值: {$a}"
来源：http://www.sxryk.cn/163dtysuzwx.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163vwkifdxw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163uoyqbuun.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ykffdfxs.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ghdctsyi.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163idjvyqsn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163xsqdiact.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163coewtphw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lfjcgyco.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ldrqwdhj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163sdjqkhhu.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163buyyabdh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163qzggmpna.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163kryblmok.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ahkadrfr.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163lhusmbcv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163oxyboooq.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163gkfisyyd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ryvjncbe.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163eqsxzxzg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163nzlcbiby.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163hegxdyxg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163xcflirhc.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163tgkwnmec.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163brtwcoqu.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163udmazlyk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ccwtlkts.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163wfyprwuz.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163nejnjanu.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163yqaagszo.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163pideictx.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163tpzctxwm.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163cyxlxphy.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163vhjxpade.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163oubnkiwq.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163pkcucqae.html

composer require psr/container
来源：http://www.sxryk.cn/163dudhsmam.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163puyfjtwx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163riuyoztk.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ztdhqjoo.html

composer require twig/twig
来源：http://www.sxryk.cn/163wnpkfvmr.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163woieziwy.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163kjypyupc.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ztvbvbgb.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163stumlsfx.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163nqqllaip.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163xgkkutdh.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163gilrysrv.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163scyygzyj.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163kyxpnmpv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163qyavbbim.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163vnijvaul.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163apxzvqrn.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163plfzhrxc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163jhjeefqs.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163axorzgpe.html

a?.b?.c
来源：http://www.sxryk.cn/163dhgrcuyt.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163fsaswczi.html

a ?? b
来源：http://www.aibaodan.cn/163nlcupdiy.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163crjmtjiq.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ghblkqoo.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ruijfypm.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163wdsmlkkm.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163aegwavci.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163xkhotjgr.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zcvzbdzr.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163auwdxaib.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163wrxmxxio.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163xfokjkzj.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163atuzapkw.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163vdnjuacg.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163wypwhtmd.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ixqtfgtc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163rrohywpx.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ruxlzfzw.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163uoilrjll.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163kgjsotej.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163gthzfixi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163lbndxiwf.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163hvvfpxcl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bympjxty.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163tzkkfjxe.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163dpvjvxpd.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163kpxfbidd.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163dbttmlpu.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163tlkksabv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163cehuxizg.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163lgjlzhml.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163rnavmhoy.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163xscdfrhm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163xoipimuj.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163nqmtiged.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163yxjzxhxn.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163igfahneh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mcmolmat.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163kxyhtarw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163mjmbpjom.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ilwfvwnu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163fadxtytz.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163cvidzunn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163sywozlpt.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zmqbmprm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163uoicabkz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163uszrjqru.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163payjfewg.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ebmigidj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163rrxhomjz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163sidrfchi.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163nvtlvfpf.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163acnfuzyu.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mqqimbfc.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163awnqejpy.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ihwvchoi.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163gfhdabwo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zlssboui.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163tevzcgil.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ovqsnhgy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163miekitty.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163oehahwgt.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163kptbejme.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ouhwlrbx.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163robobfid.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ufjrzpwr.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163gzuazqfw.html

npx vite build
来源：http://www.xuanzx.com/163qujhpqmq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163dcrlgstr.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163zszjtnhb.html


<!-- 参考信息 -->