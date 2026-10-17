外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163rtpdfoqc.html

"值: $a"
来源：http://www.xuanzx.com/163vgofpoko.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163vhrppbum.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163yvyrjtbz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163jdiqobvm.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163lidrhzqa.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163htgnlbkm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163lcoxhsye.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163unazfjot.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163oddninjj.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ghjwolda.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163hrehakpg.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163bhrcazqm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163rsotwlke.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163bdkdadih.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163itgzkdfe.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163jkilwykj.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163lthdmbhq.html

println("Hello")
来源：http://www.xuanzx.com/163fatxlvqw.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163upropozf.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163gnascacx.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163jfgfjhpy.html

s"值: $b"
来源：http://www.xuanzx.com/163hyipbyss.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163rqlgespy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163cbnjchdq.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163xmevbqsd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ocdyybvi.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163hgwuqnbh.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163dhmzyiru.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163dfgaceem.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163zciuyjoo.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xiiiqypr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163vttqvczc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163dtkbazpz.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163wpnemaor.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163qsqvalce.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163gcpvdadg.html

================================================================================
来源：http://www.aibaodan.cn/163xguhqovu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ngoupomr.html

================================================================================
来源：http://www.xuanzx.com/163nqzobrrb.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163veitlmid.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163emsvfpex.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163hfwqibph.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163igpkkezk.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163eckloblk.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163frdkcxbm.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163orodgstk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163cmmbghow.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163hynpzdbx.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ofgkjpzo.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zqtgptzm.html

{**a, **b}
来源：http://www.aibaodan.cn/163uurmbrcs.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163gzypjwlt.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163daekrjmi.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163mlpqcoxz.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163vwwkhnhe.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ocslsrfn.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ykwdpnhx.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ebfdjdsn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ehahkmct.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ueoktagl.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bcatyure.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163fxihmgui.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163rdbfojdd.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163jywjwswj.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163aezaohah.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163wzwsnzao.html

defaultdict(list)
来源：http://www.aibaodan.cn/163kpuxnxro.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163qerwkgpy.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163gjvdismr.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163pazqxfux.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163gbpedxkg.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163beusemte.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163qorhxscd.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163qjsflyvx.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163srmotvqr.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163tgldqnxw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163dvznonln.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163tnnsoevf.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163fefbeuke.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163foclixjw.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163swuntubm.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163sfbcicqu.html

list(zip(*m))
来源：http://www.sxryk.cn/163fvxmtuue.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ysdkuukg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163hmltoxya.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163dosoqgae.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163adnwgatw.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163drhtwqyn.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163wkkehrxz.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163aeqdfuud.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163zciufqvj.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163gawocrid.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163uixjdmfj.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163bjyepqxq.html

UserId = int
来源：http://www.aibaodan.cn/163jshdefgf.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163afgqfqnx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163rxktngwv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fsqjkxue.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163uqagjtli.html

[U31] Py：单测
来源：http://www.xuanzx.com/163woknvouq.html

python -m pytest -q
来源：http://www.xuanzx.com/163pfnqjbcw.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163manvbuhk.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163neoaycfw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163bdmjhbbj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163dsmbdccw.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163qzttvkna.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ycbmahsm.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ahsmcukh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ukweqxsy.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163bnkgkihh.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163veeocbci.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163shozpxql.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163tozhnfpz.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163cmlfimvl.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163nvgwgkxn.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163yglbdcal.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163coccptih.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163lojhdmvq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ythlwtrt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163mdciyadb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163hcexsxgh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163uoefpdnj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163eiznuxrz.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163bupvfmga.html

namespace App\Http;
来源：http://www.sxryk.cn/163pdoyowqa.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163urkrmzgy.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163jvhwmong.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163fumipsxq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cabpyfks.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163rmjssnai.html

?string $name = null
来源：http://www.sxryk.cn/163xlhlqqup.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163xkcplqog.html

int|string $id
来源：http://www.aibaodan.cn/163ayqaxouq.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163jbehhlyh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163atripsbp.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163xstqoyjs.html

public readonly string $name
来源：http://www.sxryk.cn/163jmbrtsfz.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163cdsmljdx.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ejbdujah.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163dvahtehq.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163elrjzbdg.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163awtlsueo.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163qrzejcrz.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163uwascbmx.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163xqiuomsz.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163jpmrwgha.html

$obj?->method()
来源：http://www.sxryk.cn/163rdashawx.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163rcylgfcz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163mmgoqvlz.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163wjrfvdjt.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163singdash.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163vfgmfkfr.html

"值: {$a}"
来源：http://www.aibaodan.cn/163afoomdsg.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163unhgpfrf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163lnnuwlmn.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163lwcpqygw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jfyxfpjd.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ypynhxka.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163mpbnutek.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163vcsvdkgr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163utsfrwde.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163reihpmod.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163pubrefbv.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163bkicgnoa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ohgqmkad.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163rdxbodpi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163wqyfkean.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163jabdctlo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163nhzoutdy.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163lzzxsrky.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rdcclvei.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163afpztfnk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163yzjdwnwd.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163sfdckrty.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163jwzytotg.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163npbeksfa.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163awoznjqx.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163gzxnxkjv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163mlodzcwt.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163vrprzlxz.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163nsytfahr.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ggivxnaw.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qfmfence.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163dycmhwrr.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ukfhluud.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163fynlyxcr.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163gphsexxp.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163pigyzmot.html

composer require psr/container
来源：http://www.xuanzx.com/163qaichxtc.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ciasotie.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163sputwlnt.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163oisrkgyh.html

composer require twig/twig
来源：http://www.xuanzx.com/163wzuuiqep.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163otdmccwy.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163boudwlhc.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163wzqqnjsy.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vcelowfj.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163echqeafv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ukhwguzp.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163bczugida.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163yvmuwzgd.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163lhbeznfg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ntekbsbg.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163rpteqntf.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163oiijrkfi.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163fslikmsf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163objhopkt.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163rayzvrox.html

a?.b?.c
来源：http://www.aibaodan.cn/163xmjxblqg.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163xuwjuzft.html

a ?? b
来源：http://www.aibaodan.cn/163affgkkys.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163jkfuqltw.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163oqzdjxyo.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163psmzakxw.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163wiknpfip.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163qghndppu.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vfjndsxx.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zsvswhxy.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oraikbkp.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ovtrtlaz.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163gpuemxum.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163myegqtia.html

structuredClone(obj)
来源：http://www.xuanzx.com/163nlfdhuja.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163njijcczx.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163lboudigp.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163xjukcrcw.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ntnovfkb.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163butnhfqs.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ykkwynep.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163noqsfzmw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jzfdknss.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163jvupwsuc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kcxzxqet.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163twufznaj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163lbkxtafd.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163xxcbpawo.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ddxxexsw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163hvfeltle.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163whevugby.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163qrxclcgq.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ztwvzlfo.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163kanvoteu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163eyxrqbnd.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163lygrulrw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163fyvnhklz.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163niuhmwny.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163aeczwrmn.html

[U105] JS：节流
来源：http://www.xuanzx.com/163beygpdki.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163lhnpywgk.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163gahkgryf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163zynzppnz.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163cjsvkiks.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163lpefvdda.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ggmfhsmw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163lwtbuyqu.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163yqhiudvp.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nweqwvko.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163cimcvxcg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163spndjgxp.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ccosnocb.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ecqbluot.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163llliieku.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163urdkeqeq.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163eanlraav.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mgnhqmri.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163sqkpfhcx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dfmeeeda.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163aucfjmln.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163lqskptmi.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163temqfzwc.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163uwhjufom.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163mgypolqn.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163kqyhwgwk.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163blkvmdnl.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163qsziapox.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ykmkxsam.html

npx vite build
来源：http://www.xuanzx.com/163etthoskm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163dbozlaey.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163iqwwnfei.html

================================================================================
来源：http://www.sxryk.cn/163apofqzfr.html

统计汇总
来源：http://www.xuanzx.com/163nlycsblc.html

================================================================================
来源：http://www.xuanzx.com/163sqibbzmw.html

按语言统计（条）：
来源：http://www.sxryk.cn/163qszivyvp.html

Python ......... 252
来源：http://www.sxryk.cn/163tngvztmo.html

PHP ............ 252
来源：http://www.aibaodan.cn/163kyixxjgf.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163zzcljkxa.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163cxminpbu.html

Java ........... 212
来源：http://www.aibaodan.cn/163sslymuiz.html

Go ............. 212
来源：http://www.xuanzx.com/163mxumkrth.html

Ruby ........... 212
来源：http://www.xuanzx.com/163atfmmpyt.html

C# ............. 212
来源：http://www.sxryk.cn/163kbnmyqyd.html

C .............. 30
来源：http://www.aibaodan.cn/163fkfwzdjx.html

C++ ............ 30
来源：http://www.aibaodan.cn/163qaifhjnl.html

SQL ............ 90
来源：http://www.sxryk.cn/163phytjsgy.html

Bash ........... 80
来源：http://www.sxryk.cn/163ptmplcsp.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ienpekuj.html

Swift .......... 15
来源：http://www.xuanzx.com/163waqngzky.html

Lua ............ 10
来源：http://www.aibaodan.cn/163etxobckz.html

Perl ........... 10
来源：http://www.aibaodan.cn/163dyjyatot.html


<!-- 参考信息 -->