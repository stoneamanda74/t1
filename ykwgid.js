外链999!wailian999！

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163tlhqhmeg.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ctxiolnc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163dzuhxuwc.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163tksxfgrf.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163okllzevz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163icmfgjrj.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163nlfwvgny.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ufibzcvb.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ebqqbfml.html

"值: $a"
来源：http://www.xuanzx.com/163gghtthyo.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163gnqnnlsu.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163vbazqmin.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163yeepgwkn.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163gpgjxohv.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163uvyfgoxh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nbmuehqp.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163pjiwvafq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163tjibqjsq.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163jvnqrvnt.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ehsguokm.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163rqlxsdew.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163lfekqvhv.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163kxxxisuz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163yiwbzsnv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ctdkwbcx.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wwsjobch.html

println("Hello")
来源：http://www.xuanzx.com/163zuwoylzz.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163yarygzkz.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163whgutupn.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163dgnesilr.html

s"值: $b"
来源：http://www.xuanzx.com/163ejrwereb.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jbzwxjkr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163csdwxdpo.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163qnnxwkci.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163fobqninn.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xcsvrdif.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163mzejufdq.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ksczjinz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163psqzdsup.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163mtwidgsv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163iexmychw.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163llmdqxbc.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163seevmyqn.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163tzsnezfs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163uwbvpypi.html

================================================================================
来源：http://www.sxryk.cn/163jkexvzbp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163kduwvhjp.html

================================================================================
来源：http://www.xuanzx.com/163bvpyvdqh.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163norpfmaj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163nngmvvyl.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163cvuqtnpx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vpdzayew.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163lejdeelv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163tnjgitcs.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163uwkjtcxs.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163bjsbypty.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163nucibxls.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163afrflpcg.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163uzkibwfh.html

{**a, **b}
来源：http://www.xuanzx.com/163sodspdcb.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163qtfyulnx.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jejccpya.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163fqwekvdo.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163nwiiudpi.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163kfxajaky.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163krjixqkf.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163nlqulbgz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163dqyrvznv.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163vrtvwvjw.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163hgoieqgl.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ajmbtbhg.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163aspwwjjy.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163doedlluy.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163nnpamkcu.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163pfqdtcwm.html

defaultdict(list)
来源：http://www.aibaodan.cn/163cbcxonvz.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163oopwpdcp.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nlzpkomp.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163mzscxjdm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163duhpolxq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163liknovyq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ppturejk.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163thoggxaa.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163rmhfqkjq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163hyfylpec.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163gkamdapf.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163dhmiaugi.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ptuikjzq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163peckcico.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163gdsifbcu.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163vifxduhn.html

list(zip(*m))
来源：http://www.sxryk.cn/163khrrbxny.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163airugwrr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163yhdrkwdt.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163eogssuwj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163txgywqcl.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ysloqhib.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163pzofxmnd.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163zmywmqhm.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163lqrmwfiy.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163buyyrtyb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163hjuufiij.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163iageuuqk.html

UserId = int
来源：http://www.xuanzx.com/163mmxpxaea.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163rcorspmy.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163hzsnvcao.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163bthzzbih.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163axuvpwnh.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163bxvakanb.html

python -m pytest -q
来源：http://www.sxryk.cn/163ruhtrzzg.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163zgcxnfde.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163kjdpoqxl.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163rmycvkyg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163iqvbfxqn.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163xmnzmkbs.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163iqpjlqov.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163gerrdjlp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163bbhrvici.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163jbxhzgkw.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163axwdmotf.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163mtjqwopp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163welrtcbe.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163vjuhshfo.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163mjvktuix.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163histmqzy.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163shaahlxq.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163rrcfvvfp.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163osybqdbp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163lyksgyxx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163fqfkjigc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163kpvabiro.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163pkrlooun.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163pghcjrwl.html

namespace App\Http;
来源：http://www.sxryk.cn/163iclhkcjn.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163araujtjv.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163acjijzcy.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163eycjiahl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uoedrmmm.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163rorqrubp.html

?string $name = null
来源：http://www.xuanzx.com/163hkeypilk.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163alhjklpy.html

int|string $id
来源：http://www.aibaodan.cn/163ukdtzucs.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163mdkblmqu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163hbzedqky.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163twiuzido.html

public readonly string $name
来源：http://www.sxryk.cn/163eyvohnwp.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163okjyncul.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163nevprwhg.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163fpgyeufx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163qekcuknf.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163kflmtpml.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163dhrnleqp.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163rbaiftvr.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tarxviiu.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163bbrmbeuq.html

$obj?->method()
来源：http://www.sxryk.cn/163ncxeufit.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163bnltsmrn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163zqfgyeet.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163jajxnufv.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wvisbkli.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163thqyvrew.html

"值: {$a}"
来源：http://www.xuanzx.com/163rtcsqjwa.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163hohbltee.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xzoxmulc.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163tbolckbt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163yqxbnblg.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163yscbjnva.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163tgixkvvd.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163dbjkjgzl.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pbbnkjja.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163kbslsylb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163zmverexk.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163lbuvapet.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163jdskslau.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ekaytdwo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163zzbhinbq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163husjngio.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163efckpmxj.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163vurrivru.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163gfvomuxh.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163axoosauy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163tbylctgb.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ykstypma.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163hbmnfjzo.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163rynplwss.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163scbrlswe.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163jjbhmwzh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163vgbcbnod.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163yoouznji.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163skxsfpds.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ogomancq.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163epridhqu.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163rcoyszoz.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163atxsgpqx.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163sfzeiyto.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163deyehmis.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163nkwqdccb.html

composer require psr/container
来源：http://www.aibaodan.cn/163zyhmsxwa.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163bwrnyhec.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163kcobduem.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163jcloovxx.html

composer require twig/twig
来源：http://www.aibaodan.cn/163wxdywxvj.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163aayxpkdo.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163bmruncbs.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163bzpwuvpy.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163outmaliv.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163vevbwuxg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163vuauwhru.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163upgqldkq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163fljfumrk.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163wczzsduj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163apyvemuv.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163arlzrlkv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163smdqccwd.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163sefxbdpk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163agerkryo.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163kprbhoyp.html

a?.b?.c
来源：http://www.sxryk.cn/163uuegvfng.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ppuqqlwi.html

a ?? b
来源：http://www.sxryk.cn/163wfxrbplg.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163wjzmkmlf.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163xdxnopdi.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163qbznmdze.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163edqpgkel.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163olbrniyp.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163xdpuggbo.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163bsbobffu.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ojgmyypd.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163koceowlt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163swnjskxx.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163rwlpxxuv.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163sllqflqz.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163syefpcjj.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163amhuhsyt.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163drwbsmum.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163toamgvtm.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163oyjcdmwj.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163xzmbcldz.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163febjtuii.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rkoqlnnf.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163cgudgtrj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uyldxaru.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163bhpykalh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163qaammfsf.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163cwvmgdxh.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ukcwwbgl.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163juckujwv.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163sefsqvvr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163urdwycnd.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163yrjlxlfi.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163lzjusucu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163gwbuxuph.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163seaqdvlq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163bymyjsyw.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163cyxiqejx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yujkcbut.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163xhkumioa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163lzxhdmhz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163labjfnif.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163nntavpux.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ivltfysu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163qezwrvwm.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163roaqlgss.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163aywjduaz.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ylyecavq.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163reqhiqsr.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163tnecwjse.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163mkmoyhgf.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163bkztuxnz.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163uwhqayqe.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ouuloobl.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163eeobyoln.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163fwvrnmhw.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bmvqmmff.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ohgxramm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163okmcdzzq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pscankeb.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163wdvsjawb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163lfsarsqp.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163kffqbzll.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rhkplgwq.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163kwyyxrzi.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163lsnhdhft.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163wvlbctzz.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163imbhctdc.html

npx vite build
来源：http://www.aibaodan.cn/163linlmfcr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ggieqnew.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163cxfkvddt.html

================================================================================
来源：http://www.sxryk.cn/163vaqsnpzd.html

统计汇总
来源：http://www.sxryk.cn/163dbscmitm.html

================================================================================
来源：http://www.aibaodan.cn/163nhfwsrkx.html

按语言统计（条）：
来源：http://www.xuanzx.com/163pxwmgejs.html

Python ......... 252
来源：http://www.aibaodan.cn/163enilzsia.html

PHP ............ 252
来源：http://www.aibaodan.cn/163xmgcubpk.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ebcgughx.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163iqgviqpn.html

Java ........... 212
来源：http://www.aibaodan.cn/163fevzhiiw.html

Go ............. 212
来源：http://www.xuanzx.com/163wzrfsgvu.html

Ruby ........... 212
来源：http://www.sxryk.cn/163qywwghba.html

C# ............. 212
来源：http://www.sxryk.cn/163zcjykxzg.html


<!-- 参考信息 -->