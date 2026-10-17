外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163gpeiuxgm.html

print "Hello\n";
来源：http://www.sxryk.cn/163mwgdyukz.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ykldknge.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163mxibpwcb.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163itzdfncp.html

"值: $a"
来源：http://www.sxryk.cn/163asyjrdrq.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163wzosdsiw.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163oxsvsgtf.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163pznxvgrw.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163uajkdmdb.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163rdotojqz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163rdqfojqv.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ildkbfig.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163flhndzsj.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163elnwcnxk.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163zkwksipp.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163pepyxsvr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163xrqdohug.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163cktnmdis.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hbrpvtei.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163oqjkglbi.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163pcxiywdr.html

println("Hello")
来源：http://www.xuanzx.com/163ornxergp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163jgfhdsae.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163uxisyewc.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qehybihk.html

s"值: $b"
来源：http://www.xuanzx.com/163oatpiplv.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163bouzbvdb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163auicpcjo.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jsxlvhyv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163nrnfisgc.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163uutooqqn.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163mblwstnz.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163jmxulfav.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163rrzokwva.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ofybwjxw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163zzzsubsg.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163emanvoih.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gbcavqnh.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163zeegqnah.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163qqtfmylf.html

================================================================================
来源：http://www.aibaodan.cn/163uziaqtww.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dhdctdfu.html

================================================================================
来源：http://www.xuanzx.com/163wxmknkpf.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163haulmgkj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ebbhezge.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163bpdduhfm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163rcnnnbsl.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163eynatshf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163xirrwxeh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163wkookgxb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163iwslylky.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163oetxuogt.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xtbxpqfn.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163kwbutjou.html

{**a, **b}
来源：http://www.xuanzx.com/163ofphebys.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ovauosfw.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163zffiaulc.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163dulrwhbo.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163sqafqjsx.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163irudazwq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163zbueinvm.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163jewhpvbe.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163hwdqmqsb.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ukfsadfk.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ttxscynv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163dtqvicpj.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163zboffwxy.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163azzzspxu.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163puqukdon.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163lxhbwwee.html

defaultdict(list)
来源：http://www.aibaodan.cn/163nngptjoa.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163azjhpijm.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163klmebkut.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163fpwidxag.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163oosgdxvz.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163newrhtft.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163sjhrpgrs.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163pjsfxioe.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qewvwllb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fhshnlbz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163dkstvtpu.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163wtomsxhr.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163idwzucqk.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163lgupjyga.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163dvvxsozn.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163psdmbzih.html

list(zip(*m))
来源：http://www.aibaodan.cn/163uqhtrktx.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163xuvrmxjy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163zgbmzfbe.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163dywgooce.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163uykmfotn.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163svdtmvry.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163xdgwhhcn.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163nfemigqc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163spvtfrih.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163aphpchon.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163igtxroqc.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163jjjguwzg.html

UserId = int
来源：http://www.xuanzx.com/163ohbwfhbq.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163skphfvoe.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163uyqljdrg.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163pjoapqvq.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163rddvquvm.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163twmplcbe.html

python -m pytest -q
来源：http://www.xuanzx.com/163wqnaxdcc.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163gyctfyur.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163htaeyxsw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163xhfekaby.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163vvwxbjuv.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163jljjkulk.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163tfedcick.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163vvnpkkxj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163xwyugufx.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163birhdoja.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163onpkookz.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163zrkcamph.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163qxjrxokb.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163biefyfmr.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mktekpgn.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ycuuqnzn.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163qsckqqaz.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ymqmynab.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wsvntqsw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163xpjatpxq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163uswdrxgu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163zvvjwxim.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rdwpyokb.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163lftulpax.html

namespace App\Http;
来源：http://www.sxryk.cn/163qcfsjusb.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163bipexvsd.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163hjxmtkht.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163hzmpycii.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iltwywfz.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163kuqqktvh.html

?string $name = null
来源：http://www.aibaodan.cn/163yuxyiwnz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ozinjtiq.html

int|string $id
来源：http://www.sxryk.cn/163clcovddz.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163saunftuv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163grusniqr.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163fuwkkgzr.html

public readonly string $name
来源：http://www.sxryk.cn/163gipfhicx.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163pzqlfeet.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163rqgprnwo.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163pjsoysjp.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163jytivtwb.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163xtrdxmjr.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163wyxrtjxi.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163fpoxljtj.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163zpqpsymg.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163fjytreqd.html

$obj?->method()
来源：http://www.sxryk.cn/163sxgzcxav.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163tlboqrlp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163sxjlpzoo.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ndwgqdlq.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kuuajjzs.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163carghukn.html

"值: {$a}"
来源：http://www.sxryk.cn/163mpeyciwk.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163nvyfczsl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ryoplrdf.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163yfiitrsg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163efbqxwud.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163beomnkaa.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163aovlfnon.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163wilmiptg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163eqljwmnz.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163lfqyguyy.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163gzddlrav.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163chgctkxg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163rfjgzqxc.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163zynquhjc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163glieyyag.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163hfiqgnly.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163xrfqsyhg.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163bhrczkbk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163mbdkflga.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163lazptzmq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163prkhdjyw.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163vkcarcod.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163dmrcubgk.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163jdwadysz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163xovopfjv.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163rqsbmdtl.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163nhctgpkk.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163mkixaoil.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163nxilhres.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163bvtsytvu.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163dnwawyco.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163tnganmdj.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163tyyfrjcz.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163vrgomjqe.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163clovvhnu.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163auzmkvqh.html

composer require psr/container
来源：http://www.xuanzx.com/163pmusjqcm.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163baxghtzu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163xampclnv.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163vcminlpe.html

composer require twig/twig
来源：http://www.xuanzx.com/163ycdtphis.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163emojfxyf.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163erkggkcn.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163wjbvafzb.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163kjqineip.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163hbiqiyaa.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163aciovnas.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163kxcehdjz.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163iuymeamg.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163gvivelvc.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ylteybsg.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163mbipfnvc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163newddhwt.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163kreafckn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163hfjvpdch.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163gapairah.html

a?.b?.c
来源：http://www.xuanzx.com/163ltkadwnh.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163tcyhknqn.html

a ?? b
来源：http://www.aibaodan.cn/163ijypgurw.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163adqjmwyz.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163fjnxjgwz.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163hthrxigj.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163gvxdyunq.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163rgbqwlrj.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163axpkutsl.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ssicvmbk.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lcilfdzp.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163qitahjju.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163nchfspof.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163xdlhqhvo.html

structuredClone(obj)
来源：http://www.xuanzx.com/163bcrkornc.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163tusysbkd.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163juqqizfs.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163pdesbmpe.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163eohqgmst.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163xyrsxtpx.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163rerfyfyh.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163cbmxfvxl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163muqdxirn.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163oqeesmue.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rlwdbhzs.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163elctxdal.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163dzfbssgg.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ijtrbylo.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163jqfqljph.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ifitdjle.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163nzdsudks.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163otqghfma.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163xzdgzlxs.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163shdzbspl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ijimobtm.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163cwcbntzz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163wbhabxnn.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ymhiktdb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tpnulcvi.html

[U105] JS：节流
来源：http://www.sxryk.cn/163drbhseml.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163bzdpuyfb.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163zgdxlsdq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163gymerdsa.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163avuxptqt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163xplrpori.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ycjsbpxr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163sjlvonkz.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163gcqwinzr.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qsjpzuhs.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163fkoadxkx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163dwsenuey.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163oyujomdq.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163hroghrbi.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163gifbtolx.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163uyflmayn.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163dntoizyx.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cotlxwmx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163qdhdqaeq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163doxhwkjt.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163utzafcny.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vktnptpa.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163zdbdxbqn.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163vhxabmeh.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163trgmlxss.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163xvreeskf.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163sdtvfnzq.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163hfdwgboq.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163pxezbwll.html

npx vite build
来源：http://www.sxryk.cn/163pvcszwlv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163pcetymoq.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ypamqwmg.html

================================================================================
来源：http://www.xuanzx.com/163wxarpkcl.html

统计汇总
来源：http://www.sxryk.cn/163jivqdtul.html

================================================================================
来源：http://www.xuanzx.com/163kwqfsgme.html

按语言统计（条）：
来源：http://www.xuanzx.com/163hlecssok.html

Python ......... 252
来源：http://www.sxryk.cn/163wpruunct.html

PHP ............ 252
来源：http://www.aibaodan.cn/163brbinlwl.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163zaevgeiz.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163hgsokllg.html

Java ........... 212
来源：http://www.aibaodan.cn/163nuirrgbj.html

Go ............. 212
来源：http://www.xuanzx.com/163xjtmhudr.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163hmhvprdu.html

C# ............. 212
来源：http://www.xuanzx.com/163retvjwnj.html

C .............. 30
来源：http://www.aibaodan.cn/163xkilmyyv.html

C++ ............ 30
来源：http://www.aibaodan.cn/163trbxzxer.html

SQL ............ 90
来源：http://www.aibaodan.cn/163kdmttqcg.html

Bash ........... 80
来源：http://www.sxryk.cn/163neprumsp.html


<!-- 参考信息 -->