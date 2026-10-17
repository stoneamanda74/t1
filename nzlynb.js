外链999!wailian999！

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163dckyjuqi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163romozykf.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163oybbhsar.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163atwinhzr.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163kiuwfxga.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163icxfrgrh.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163hklxsrke.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163iwfzlnig.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ufaztxih.html

"a" .. "b"
来源：http://www.aibaodan.cn/163dhbwqmmi.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163osfdmjqi.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163rkhlkjjz.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163leeyvtjb.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163xomakszi.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163nlaacyio.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163cnyqfchb.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163mclmimwo.html

print "Hello\n";
来源：http://www.sxryk.cn/163ytexklas.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163elnplhky.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163upgjdhjh.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163cxnllafg.html

"值: $a"
来源：http://www.aibaodan.cn/163fmklqeou.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163yhipxfil.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163lcqttpen.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163kjxqaqxj.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163pfdkjzff.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163icafwebo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163jozlflhs.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163uuqdrczi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163vrhyorat.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163jnzdrvze.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163izcudpqn.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163fdeiandp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163pggyyott.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163vvuqzles.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163vtdqxfgv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163belojcim.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163bcivdbkf.html

println("Hello")
来源：http://www.aibaodan.cn/163lyuhccyr.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163beeqnqwp.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ejgaxpva.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163urifbgly.html

s"值: $b"
来源：http://www.sxryk.cn/163jxrypzvb.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163onkbwmko.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163gcxaaeib.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163eokfdcjx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ifynryhu.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163rudhvskh.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163sxnojyaz.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163mjyvxhyr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163werxuedu.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163cclpqfwz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ijceudmk.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163gzafkmvv.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163rrsidtds.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163xgsngqbs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wruwyboo.html

================================================================================
来源：http://www.sxryk.cn/163qyrhywlt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hszljavl.html

================================================================================
来源：http://www.xuanzx.com/163hwkiduku.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163epdmhtgq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ckqkjjdw.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163tvyjhrca.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163yqsfsxst.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163flguamrn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163rxzkwhwl.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163omzusjyi.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163mncdkfbc.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ftifvoty.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xipcucwe.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163iqhqgvsl.html

{**a, **b}
来源：http://www.aibaodan.cn/163wkjxoriv.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163njqbwbnj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163tllxxlef.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163zfknkial.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163gshesvlo.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wbboctos.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163sjcgieuk.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163njkteizm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ysodnvca.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163dslysxxe.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163sbxtgmea.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163pixqgula.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163sugypfiv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163mhencrdr.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163uycixcnf.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163tgatltit.html

defaultdict(list)
来源：http://www.sxryk.cn/163tokfgumh.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163rwmrxyql.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163lemebpgo.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163rqtfxtet.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163kpkcmmbq.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ijzzvmla.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163duqeevcy.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163cylwcmky.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163uhalbjph.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163glaumset.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163zecjuvch.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163snisfaxu.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163gojvhpia.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163whjebeye.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163rkyfngve.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163nkpanyjm.html

list(zip(*m))
来源：http://www.aibaodan.cn/163epjhdgne.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163yindmfut.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163tcgyuane.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163rxawvggb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163irxowmtq.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163fuqwvstr.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163qdafotuu.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163yyctohwq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163irhudgft.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ngiqiyxj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163bkbalzbv.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163msljzsfw.html

UserId = int
来源：http://www.aibaodan.cn/163fsadppod.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163igugpnew.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163precbjoe.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163fxzujwqy.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163dslqwecg.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163loprbtwi.html

python -m pytest -q
来源：http://www.aibaodan.cn/163emulzgyr.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163iozruiwl.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163wgzbomae.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163fgyjctnt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ugkeqszx.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163icwcrmmv.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163sabzkjyo.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163gwqgybeg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163fccgyqcx.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163gidieiue.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163yzymwkyk.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jgohrkap.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ipuzduty.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163hhucywqb.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163stbnkhuh.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163yheipqfs.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163tpvgqinp.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163smjffdln.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gvlhmnob.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163weobirbk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163vmvugspu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163rhhhyxif.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163tpaoxhzt.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163kvphlmyt.html

namespace App\Http;
来源：http://www.sxryk.cn/163ebtgkrex.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163jztwgyve.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cnrykkko.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163gwswjahe.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ichlvuhd.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163sbcowdla.html

?string $name = null
来源：http://www.sxryk.cn/163mjvkcwkf.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163cykgqlzh.html

int|string $id
来源：http://www.xuanzx.com/163pxewimbf.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ejuugubk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163bktyngal.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ilqkseqm.html

public readonly string $name
来源：http://www.xuanzx.com/163gllqxmct.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163wkuhmwgw.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ellkdxoj.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163zrppwjwf.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163pqrhmbzy.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hkzmlyps.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163onlykmxp.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163gswdrpzb.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163vmrxwpkw.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163tugjmgzc.html

$obj?->method()
来源：http://www.xuanzx.com/163bvmioymc.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163lynyuoxq.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163lbkmbjqs.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ypppfmlx.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qkanqmcg.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163calaelxo.html

"值: {$a}"
来源：http://www.aibaodan.cn/163iflszkwu.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163jsjcudma.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163yimpafyi.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163zxvcbggq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cjbwwfmo.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163buldjqmj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163zwypdrdn.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163mdoxzodw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gxfzuhrc.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ofrfaqjm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163uiwrityk.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163lasobmkg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ffpxwjhk.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163oyhbzypc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163pbecljqg.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163jwhdskmg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163qsxkvcbc.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mdnflckh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163mslluxit.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163jwfnlpbd.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163mmevolrf.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163mtfhxfbr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163mdruvino.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ntyhdgxh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163rvvswrrm.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ijrqxkxr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163avkruduv.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163bmgfwxun.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ccwavgng.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163hsqzxkxe.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163fazxtqie.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163nsdxrirh.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ruvybveb.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163kcfxqooy.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ivvtxvku.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163znfkneqy.html

composer require psr/container
来源：http://www.sxryk.cn/163dnlazqoy.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163uzevdecv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163bythpwys.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163xabgznrr.html

composer require twig/twig
来源：http://www.aibaodan.cn/163cqftvnpz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163kwdvonve.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163vuptvvpz.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163hsurmlvy.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163aeumdrjv.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ljleottq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163hywaivte.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ouwfoqfb.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163bellbfcg.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163tyrxajwy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163sjzavtwn.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163qwpkttqp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163tudfthgi.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163gjemyopa.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163uehqloaw.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163wihwzqwf.html

a?.b?.c
来源：http://www.aibaodan.cn/163oixoidji.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163umuuqwfx.html

a ?? b
来源：http://www.sxryk.cn/163lmzupxer.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163tqqtgtyo.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163axdpirkv.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163tfssfzxu.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163mfubxisx.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163cxcnpthj.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163olalvzkf.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ysjyzbmp.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163abgwyalh.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163sywamuud.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ktdmnhcy.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163dnmtlzkd.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163gmgxkpei.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163hikivwba.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163kjxjsctn.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163bgcgkchg.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163eslizwbc.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163dauaxcqb.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163oalmefhz.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163hqxecvsy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cejxoghy.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163nskrjvrg.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eferpqrt.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163odywsjww.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163sauagruu.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163noxxcvll.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163kmglflgi.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163tsaviicq.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163jfjrrcoj.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163hiqtwtgt.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163fpkuhvvg.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vxhrtdih.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163awqmoudm.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163rycatmzf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163rrjnmcay.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163jzeteucw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xcsvwvgr.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163tsfblcru.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163nffvxkep.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ezwzhekj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163owatyhwd.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163hgeuzthx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ftgyapfo.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163usrooxay.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163vrxuxwew.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163egcwdhte.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163knjclnen.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163iitkxram.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163bewbrpms.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163kxcbeqrg.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ihggwbzb.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163yanowzjn.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163dnjtihbm.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163rhsircbn.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wqshgmzz.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ajonzvqk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ymczqclu.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163hbizmrwy.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ikioipop.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163worrpdty.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163eldgprbz.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163abauaynm.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163porkjwzd.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163tppzvhwy.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163behfgsdi.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163gfldcodk.html

npx vite build
来源：http://www.aibaodan.cn/163dscsnwcw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ehljtigu.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163hguikfab.html


<!-- 参考信息 -->