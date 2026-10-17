外链999!wailian999！

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163aijmcwmu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163esbcukhk.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qoszkcct.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xiilejpv.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163qeforubd.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163hkblrvyu.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163vnwxxbvs.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163nqaboxxe.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163dnvbjham.html

"a" .. "b"
来源：http://www.sxryk.cn/163qmpbvafb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163zdstvgqb.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163jarjibgq.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163svygsofs.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163uwpbwlbl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ehpwdyji.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gujduqqe.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163corpbhhz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163hyqlnedi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ccufavcv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163qenskoaj.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ycmvxqae.html

"值: $a"
来源：http://www.aibaodan.cn/163ctsnhrub.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163nujqtuih.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mazljwxs.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163bijfzjlr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163vbbgrmik.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163tflcotap.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163oplubbsy.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163qfljkxsz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163gccphigd.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163cmaidifs.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163hajrtdql.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163szieprqa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163rtpepukr.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163lmxftjfu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163cubvrrcs.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163woosqmqi.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163gfrychxw.html

println("Hello")
来源：http://www.xuanzx.com/163cobhyksq.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163uadgifqp.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163rethtggv.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163xquyisuw.html

s"值: $b"
来源：http://www.aibaodan.cn/163dxzwnxwo.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163mvixnwbf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163hslabqtg.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163xjbrckbj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163zoelsxlv.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163apcqlxjy.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lpkjppfv.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163larptroh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163wiaxnsld.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163nfmdxdnj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163eavxnjgx.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163artkytrm.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163juimdqtk.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163lcbvnfmr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163slvpamwt.html

================================================================================
来源：http://www.xuanzx.com/163nmabpnbg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bpwqtglm.html

================================================================================
来源：http://www.xuanzx.com/163pbmdpdrv.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163crafhjxz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163alysfyju.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163galbpzgx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ztybpsug.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rdvgoabo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163cmcwazys.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163pokcnxuk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ntohbrww.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163bnqgirzq.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gjjjvist.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163nvmbdika.html

{**a, **b}
来源：http://www.xuanzx.com/163gfuhundc.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mluobgbu.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163pjjrwprq.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ebofifqf.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ngygkmpc.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163pkvwyulw.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163vpvfltbf.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163visaksfo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163jzftmxou.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163svtzgfjr.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163klltwywj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163dpcirqwn.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163svjzekrm.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163gfmhqona.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ukgosnwm.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163uwvtwere.html

defaultdict(list)
来源：http://www.sxryk.cn/163nkglchcp.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163oxtjuwav.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163rubdghml.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163mgddzpwi.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163niughkcv.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163hfivmpmq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fbsbrzad.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163vktgqizb.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163hjpemwvl.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163swmgzmyh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163nvtolzvg.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jbigbncf.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ihetdgmf.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163lnytrwyo.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163knguuyzn.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163adljxiyl.html

list(zip(*m))
来源：http://www.aibaodan.cn/163noeyepql.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163rwvyenij.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163grsvqqol.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163fspwyovh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ucudfldq.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163eoavedgw.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163bhxjrrpb.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163pvnlswip.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ttozokty.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163rmszugks.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163qamqhkty.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163pbrtlxxs.html

UserId = int
来源：http://www.aibaodan.cn/163znprdeik.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163cgcqcqbd.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163txkomijy.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163atqfhxmk.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163rwnuuggo.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163wlqldbni.html

python -m pytest -q
来源：http://www.xuanzx.com/163qyzhxyia.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163mwosxftn.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163mfsxflgt.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163aylblyzd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163ajexlgby.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ryjtuxcj.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163mriydxws.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163bwgfuzxe.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163ghdcghen.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163lsaefekl.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163dsxyfopb.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163nlovojbt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163lyszasiw.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163aapdescp.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mhadomat.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163hjluzmum.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163skvvozct.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ynbdwoez.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163alrgxgmy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163eltlanug.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163kcvavaea.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163cltwyyvp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163okrtrsjm.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163krlrrlmx.html

namespace App\Http;
来源：http://www.xuanzx.com/163ntgxdtbt.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163zhhektnt.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163yvrezicz.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163yberpeei.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lqsexbjs.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163vrjbsyeb.html

?string $name = null
来源：http://www.xuanzx.com/163vilhrkal.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ulzqunfi.html

int|string $id
来源：http://www.xuanzx.com/163xctuilnf.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163mvawkrgk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163mgajkpbx.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163hvvkwdbv.html

public readonly string $name
来源：http://www.sxryk.cn/163cczsujdb.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163irebolws.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163cgamqend.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163sqvfiury.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163gsnhlynv.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163qmgklzjb.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163hewaaqee.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mibvuynh.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163hinedozr.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163bvmtvejl.html

$obj?->method()
来源：http://www.sxryk.cn/163ftonpswq.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163llipwoqp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163autphexr.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ijrswgvw.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uxrgqomd.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163kpabebor.html

"值: {$a}"
来源：http://www.sxryk.cn/163bbcuwjxg.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163enjnijjx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163iqpqvroh.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163luuyihbt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163tpjupeqo.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163aghqkmxy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163cluazbnw.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163oszbpopu.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kulpeipd.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163sojqjqrc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163xjkfwmnx.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163scunisoh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163zhfzesnu.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163xyzrpmit.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163yvojycpe.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163iiqdadly.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163yjuqjwft.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163sodzjvbb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163oszxdmtm.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163wbflwucs.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ngmqfxlk.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163rqcwlxup.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163hfeothli.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163mgavxbcu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163xpiwjoar.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163cpqcfdbv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163edgpmtwz.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163tjlipoao.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163dhhzprlo.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163phzywylh.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ndmphjyf.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163vgbxjhlu.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163tfbuzapo.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163hwjndxer.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163xkfzjymg.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163vwjpnxuj.html

composer require psr/container
来源：http://www.xuanzx.com/163emzeaeib.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ntlebpbu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163bheqjepw.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163jawfakoq.html

composer require twig/twig
来源：http://www.aibaodan.cn/163lfqswihl.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163mbugsvzw.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163gtlevnxi.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163txkchmqb.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163qkkyecee.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163gfbfadfb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163flqwdqwz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163djqncpnf.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ldmwgidd.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163sgemiyft.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163pwfrjvzm.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ctzvgcmc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163bnkqelcc.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163oxicswnv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163yofjvofe.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163flezgzew.html

a?.b?.c
来源：http://www.aibaodan.cn/163jybikziq.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163xroubkrr.html

a ?? b
来源：http://www.xuanzx.com/163yhxlnfje.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163flsiymvp.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ppwuakkv.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163jgtqtlhk.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163tlquuhwh.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163uqsweezy.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163syzkdidn.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163cmizdutp.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dvsigpop.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163mhwwsfcb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163quzqpchm.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ytokcrmh.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163vvsxdqmj.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163dizhzeaq.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163nxqnceyq.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163riutbjej.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163hdcvdcox.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163rtetsggq.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163fyzopqym.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163rejrrfcm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yeqmwppy.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163hilfptup.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dggtdmad.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163avstgnbk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ktbtlhkx.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163wcivkrhe.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163khuwirur.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163onbcyjyl.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163oclfnwic.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163vlkslkpt.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163lqnqwmiu.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163bhnnzlqu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163hmgwbhrk.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ropmgpzj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qgxtjywl.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163kmxmopwo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pqtboafv.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163kqiuzebu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163vuqbqtuq.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163kbmksdps.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ywskfjbl.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163fdtfpiyj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ywxhnigl.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163lpdlwtap.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163fxnhnoxt.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163gaigenxj.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mulbyuqc.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163iwxaglxf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163amdougpf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163mwxlzyro.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163xwayzpln.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ndjxgdlh.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163atribyje.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163wnwpxfqk.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dkebxjui.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163csatahtm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kvoxbwil.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163axcvhzyc.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hkgrmcwt.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163slldsguj.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163iczntsnj.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ezhbxyfi.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163xbjackvs.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163smsajwpz.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163qavfwnsh.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163mciepbwz.html

npx vite build
来源：http://www.sxryk.cn/163dunnmvzv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ezjdkbub.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163xcawtjln.html


<!-- 参考信息 -->