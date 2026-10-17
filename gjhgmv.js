外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163bpydfqef.html

"值: $a"
来源：http://www.sxryk.cn/163akoikqyk.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163wxdsbcmu.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163xjnrwyps.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163tidhzblb.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163tbtuwxkb.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163dhvlriih.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163vciatglc.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163zexhoxjb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163vetvtooh.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hejnxczp.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163crgdlmzl.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ognosgzr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163mqcpzhhh.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163zyazxzys.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ymmeslcz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ghzoonhf.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163obxuidvw.html

println("Hello")
来源：http://www.sxryk.cn/163tmdlnytl.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163rbutkbfm.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ltkinbfs.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mklgihmr.html

s"值: $b"
来源：http://www.sxryk.cn/163cayebjan.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163cdmoqowh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ggsfxjqd.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163suyzvvix.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163yakjmnik.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163kijbgtuv.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163purxbfei.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xzniryny.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163iwiysjfx.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163tkwqjjup.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dvekmvqw.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163iipqouay.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163xflkogry.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163yqyhwczw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163nspnkiek.html

================================================================================
来源：http://www.xuanzx.com/163loczatrd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ejllkfcn.html

================================================================================
来源：http://www.sxryk.cn/163ahuwotzg.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163egjzvcak.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163qpjxccfg.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163gzvsrfhl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163sewroifz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163gvyreeqg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ymoafifp.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163sgpzfcxn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163bjogjuqf.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ikmthkwn.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tshaeulm.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163lmnkplka.html

{**a, **b}
来源：http://www.sxryk.cn/163psmkvjvq.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163gtavdubl.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wgbtrlsr.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163cgcgerdv.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163abibwbhy.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163iqkfcoag.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zsbttfhi.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163bkojywtp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ojtankfn.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163fclmyptg.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163bgblpdht.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163aqmucqbh.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163legnress.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ufvpzuvs.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163imgzqzww.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163sbgfysrr.html

defaultdict(list)
来源：http://www.sxryk.cn/163aeokeohi.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163gmuwpxrb.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163wijdanwy.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163znizanes.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163goquvllp.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163flyywlxf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163jirkyqba.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163aydlkkpz.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163lbrduidm.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163dtlqtmsc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163yexdlkys.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163nifzplsw.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163etgdltoi.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163txurjhef.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163rjlhdmyb.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163imbvptln.html

list(zip(*m))
来源：http://www.aibaodan.cn/163itqqepws.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163vxkauhxk.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ontwmkbj.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163bzysqadu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163bipnpzuo.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163bahvzhaj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163uwnbsfzv.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163kzxxinem.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163pdpeabco.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163rrzmkwot.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163kdgtpqzp.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163yfdymnti.html

UserId = int
来源：http://www.sxryk.cn/163rrnruchj.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163nqlfnive.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163cczjmeei.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ilduchnk.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163gagvxoqr.html

[U31] Py：单测
来源：http://www.sxryk.cn/163mxylvfme.html

python -m pytest -q
来源：http://www.sxryk.cn/163mmedkyuj.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163dzrtdcly.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163yyczqeim.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163idaenxwo.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163hhdmxrwk.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163psqkiqrh.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163mfulevst.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163hiisqalp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163nhjffzdd.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163azvjxhbi.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163jaolfgiu.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163pkuzzqlo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163wgjlunda.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163bcvbxuja.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163vulvtqxu.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163vdubmeba.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163pqodthev.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163iforhtso.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163grhshliy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163hhhvpezu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163slnhjoil.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163biujyzyd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rsomddbu.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163bakwkzlz.html

namespace App\Http;
来源：http://www.sxryk.cn/163xgdifrgg.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ubjyvpna.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163hiwbyeyp.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163iwfxrpxg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bjzfzjyb.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163qabzpahu.html

?string $name = null
来源：http://www.xuanzx.com/163odcsqdsj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163wqigjwnu.html

int|string $id
来源：http://www.xuanzx.com/163oatxaeue.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163bjnqcbyu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163esceodkf.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ipgwwlwk.html

public readonly string $name
来源：http://www.sxryk.cn/163szcwanno.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163hhitsato.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163uegxqpui.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163qenbzcxc.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ndecwxju.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163wieotbxi.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163cwbveqrl.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163yitduauv.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163jfgzzcma.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163vhklunel.html

$obj?->method()
来源：http://www.xuanzx.com/163zpzikdbk.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163hqivhdjs.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163rteyjgde.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163mymnezrj.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jrvrpbod.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163svpjbztj.html

"值: {$a}"
来源：http://www.aibaodan.cn/163tfjwehgh.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163izxdlyai.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163mbwnysju.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163eenwtafn.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163klpywuum.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163rkxpqmcb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163sjhqreca.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ozpwrosy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163zniwbyli.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163etqvmgsl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163mbsjwkco.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163mcqsqbim.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ugbatxpz.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163swqjbnvu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ratsxccb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163rdkijmbt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163moraleud.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163bnisdbqs.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163dznzxpub.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163mgsjyaea.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163njpsuimf.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163akdmwxdh.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163stsfxikp.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163wcvzbhte.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163pohpcvwb.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163intvbczg.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163qiyvakmg.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163qtswqzbp.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163zwmgyuhe.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163yqusadto.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ewbgmlfp.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163mvlxeghi.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ayrzqdnd.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163xeryfvht.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163vwcjeqtf.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163cksidimi.html

composer require psr/container
来源：http://www.xuanzx.com/163jdnmyfvv.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163cwtlurze.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163owjhzxgs.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ukukhchs.html

composer require twig/twig
来源：http://www.sxryk.cn/163zyzuqnzz.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163rqkiuaod.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163dxqflbhh.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163dzjqarpn.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163qfkdpnkh.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163hxdncrin.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163yrppwapr.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163fogkzikp.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163renudrlx.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163qjgveydq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163vswuukqa.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163vnylislx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163rtujqzev.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163pubtbpox.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163brxcmlvn.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163fkaqdbjw.html

a?.b?.c
来源：http://www.sxryk.cn/163xkedahta.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163wxafbdzi.html

a ?? b
来源：http://www.xuanzx.com/163xckaqmzo.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ppikhrof.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163xqajdfaj.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163idaloyeg.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163obahdtit.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163vlxpnkcf.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ljyipgck.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163yrwmxpvq.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mafwdzrd.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163rjpkkmwe.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163txzdbdxf.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163msnfaqwm.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163csuoiibt.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ajgjobhp.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163znyqwrki.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163abxdgafh.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163fnfinsjo.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163xacnttup.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163nsybeotp.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163xckbxexe.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ysfghdxk.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ptiolhdj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tiehpmcf.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163aircbrfb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163lxcglraj.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163zpbnxkgc.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163rgbmwszu.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163klbxknfm.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163vlrmmydl.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163rbfxutcq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163zhklubjj.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163qhmunsra.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163liezjafj.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163qqicbhjf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163khrqdqha.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163vsgmcyio.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vrwqiewi.html

[U105] JS：节流
来源：http://www.sxryk.cn/163rvpynlvq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163sfoybrje.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ixxbvsoa.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163uoesauol.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163fmcmgrrz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163hvvaozww.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163mzttxmky.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163mhrosxus.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163nhpixcvk.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163brdsgrmr.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163nwrbrhhw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163zqrknddb.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ocjhpxvb.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ntddaadx.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ixafinzv.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163anltfbdn.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163kiilwhck.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ccbsakfy.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xdvxsjmo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163humrrxze.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163kyipnffl.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163utupbffk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ctgtzgdp.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163usmtnfei.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163zhinluja.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163qyigokei.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163zfzzypau.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163eqzdnrrb.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163gwvyboap.html

npx vite build
来源：http://www.aibaodan.cn/163ufvvhznh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163dzjbbeov.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163adkidngq.html

================================================================================
来源：http://www.aibaodan.cn/163ylleyagl.html

统计汇总
来源：http://www.aibaodan.cn/163stvmktkn.html

================================================================================
来源：http://www.xuanzx.com/163etuiradb.html

按语言统计（条）：
来源：http://www.sxryk.cn/163feeegigh.html

Python ......... 252
来源：http://www.aibaodan.cn/163fiaskquv.html

PHP ............ 252
来源：http://www.sxryk.cn/163boxneqyy.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wmejutnz.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163yldlpzyg.html

Java ........... 212
来源：http://www.xuanzx.com/163rhztspcw.html

Go ............. 212
来源：http://www.aibaodan.cn/163kmjnzwch.html

Ruby ........... 212
来源：http://www.xuanzx.com/163zymagpjw.html

C# ............. 212
来源：http://www.sxryk.cn/163bwbyeahz.html

C .............. 30
来源：http://www.xuanzx.com/163yjwfnuep.html

C++ ............ 30
来源：http://www.xuanzx.com/163viwftayp.html

SQL ............ 90
来源：http://www.sxryk.cn/163kvvswpxt.html

Bash ........... 80
来源：http://www.xuanzx.com/163nyzinobf.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ukozuxga.html

Swift .......... 15
来源：http://www.xuanzx.com/163fqhfamrp.html

Lua ............ 10
来源：http://www.sxryk.cn/163tbidbxtf.html

Perl ........... 10
来源：http://www.aibaodan.cn/163bwokqyjk.html


<!-- 参考信息 -->