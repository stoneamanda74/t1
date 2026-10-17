外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163tepdoxuy.html

print "Hello\n";
来源：http://www.xuanzx.com/163qysupcqo.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163kawgfcge.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163zrbiinyb.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163amcohpbh.html

"值: $a"
来源：http://www.sxryk.cn/163bqcrhted.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163edaiqzzw.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163iiugrhhx.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163iaecntlv.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163lpcviori.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163nglbwprb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163vurfrwtn.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ssbmyszw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ditsqhan.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163rzgqdkub.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163pgtcmeik.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163efujdgkk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163nepguspk.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hwzrxzxq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163xbwsdffm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163rgrrdehu.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163izyzclfu.html

println("Hello")
来源：http://www.sxryk.cn/163xqiamvoj.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163upckanor.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163tdpoljsl.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163brfecaxb.html

s"值: $b"
来源：http://www.xuanzx.com/163zboxhyzs.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163lobxsfnr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163zjmdhvau.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163clvdsshc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ipysxgah.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163osafrjak.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dwqtkjed.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163dhjmpwjk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163xwbeyblp.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163rgzccnha.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163rlagsyxj.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163lxhhidyd.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ogyhzsvj.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163yybvxfyo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163smcvkkrr.html

================================================================================
来源：http://www.sxryk.cn/163kuwzgjtm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163tkklngkc.html

================================================================================
来源：http://www.sxryk.cn/163yighnxsz.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163hcqfvrji.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163shrxpexi.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ohksayky.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163syyogpli.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hwjgoxll.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163wwrbemnw.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163dfxyugzj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163doecxsbq.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163xfhgwelf.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163eejsekox.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163srsdctxh.html

{**a, **b}
来源：http://www.sxryk.cn/163qdnmuwei.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ioqiqzlw.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163fqbnjqfj.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163cwgfzzuu.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163hopyhzkf.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ekakgnmx.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163eqegjtkw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163yrritpab.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jfwygiyy.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ncsphggo.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163pcbueeyr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163txmchmld.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163dkocbart.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163drvnirap.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163mviwplqi.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ahveedqn.html

defaultdict(list)
来源：http://www.xuanzx.com/163nyjtwwsj.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163qoosortn.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ilcwdxvw.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163uxjhhmlf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163uomvlrhh.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163laqwqmsq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163duvhvjon.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163qwiqrapv.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163mkarddec.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163oifshyro.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163szwazrsf.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163onaoskme.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163lysrmwva.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163prjlwnri.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163mkeducgc.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163thzsnihe.html

list(zip(*m))
来源：http://www.xuanzx.com/163neqycnib.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163dxgwvmzv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ibhtvddf.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163oekgokth.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163dqvjkyzh.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163rbprsauj.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163xkweuopg.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163zmkkixjc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163rklcukmq.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163iqznmfky.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163umpbdcsd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163mkrjwbqq.html

UserId = int
来源：http://www.sxryk.cn/163mevppkew.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ofikefba.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163znonxnae.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163rbpmfxub.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ozgwcool.html

[U31] Py：单测
来源：http://www.xuanzx.com/163accwkety.html

python -m pytest -q
来源：http://www.xuanzx.com/163qbnmbsaq.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ruxvpqnb.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163kyrvzlvn.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163cbqtxhga.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163aqmalbia.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163wrxsmxqe.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163nhdiubez.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163vzrllhsd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163blalcdhd.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163glljjmia.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163xvgksbzd.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163hacpnezr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163jzcmjqlb.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163cylhbzjq.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ljaprzns.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163wggkoqls.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ozinbest.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163mjphfcek.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163imglvsqc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163rpnitxon.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163mpnoqhzu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163idjwejir.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163zsgcdimk.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163rgkhwaxp.html

namespace App\Http;
来源：http://www.aibaodan.cn/163nrcfmhae.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163rneiedwa.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163qowdingm.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163jijnuutk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163njlweidd.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ezdtjwls.html

?string $name = null
来源：http://www.xuanzx.com/163uvdkypzl.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163oenkoxbf.html

int|string $id
来源：http://www.sxryk.cn/163puymhibh.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163wndldiaz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163zlxvhzox.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163nvswgssa.html

public readonly string $name
来源：http://www.aibaodan.cn/163auqxmxly.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163qdyibzxm.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ugbffidl.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163pjycprsx.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163pihwgdhn.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163vpuamnsi.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163mntkkvcz.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163qoypewsb.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163qzwvneit.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163osxlkyrd.html

$obj?->method()
来源：http://www.aibaodan.cn/163lzwcgpja.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163cgvgdnyb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163uyalmntl.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163consypov.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163voxborhc.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163fgvhoyll.html

"值: {$a}"
来源：http://www.aibaodan.cn/163lmauikxf.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163shdifxab.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163nckvjwdj.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163chsusngv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163kfccmotg.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ximhouuc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163hrtazwlz.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163unvylnxa.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lzaprmei.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163yygrlnbn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163oecjhohs.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163tbqozsiy.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163uggsnkka.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163azahgbfg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ktgbelej.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163rrpzqvym.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163nbyxcstm.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163mmyatadz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163vexrvgbq.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163olvemgzw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163xrbwmigj.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163mtpvjxbg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vfgytahu.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ybtqxvjl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163sdnxtcej.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163cchbcukk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163frfpqexs.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163luzuvlyc.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163bfsnxhbe.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ttgjfflx.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163faonzvsu.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163xwthsloo.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163hsnaazvq.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163vvzpzjxa.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163hheskrng.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163gwucmtng.html

composer require psr/container
来源：http://www.xuanzx.com/163ufrjzrad.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163kgzkletc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163gftkuwgh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163mptrfnrq.html

composer require twig/twig
来源：http://www.xuanzx.com/163iqposcmf.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163gtwwsxap.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163appotidp.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163ebcadchg.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163mzpyvrvv.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163cvegpaqh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163uhkhmsmd.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163qebsvdur.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ejumntad.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163tywqyvto.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163uxzrqmhw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163mkcakkhy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163gwspmlci.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163xusizewa.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163rtjjzffc.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163qjibygvn.html

a?.b?.c
来源：http://www.sxryk.cn/163owzlbrrw.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163eziztine.html

a ?? b
来源：http://www.xuanzx.com/163hsbynlmr.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ftidqxlb.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163kosvvemn.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163kuzuavnf.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163xnfxbfyd.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163gotfsbsv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ypdbghgt.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163felqwdpa.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nuokuywg.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163uusnnyta.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163yloltgfn.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163foxdmkoo.html

structuredClone(obj)
来源：http://www.sxryk.cn/163beqlfitq.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163knwhfijh.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163vrelexef.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163cxhmwghw.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xcwyjsxq.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163tfxqrzdv.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163mevawnmg.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163iirqtbfa.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jrejhqpj.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163frqzcrxd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ukpaiawi.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163bgaeaoxo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163dsqtjorz.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163gipeolat.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163vwpdjfkm.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163efmmsjgm.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163grkwdybv.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163hcoweewt.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163xmrhnkhg.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163jsbbnmuz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163amskpyzf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163wacdpiwr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163hqvpslqk.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163idsapdcw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ntatumma.html

[U105] JS：节流
来源：http://www.sxryk.cn/163kgqgzrfy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163bnyfunwp.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163tbxocecp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163piventnv.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163nmkiwtxf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163gjscbiie.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163nvoeuhgf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163vbvtsgtx.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163rylzldjy.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fmdnchqh.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163jqvaosia.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163xnglvvje.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163voajjuwi.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163gnutzdyi.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163hiljzkiy.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ivocbbii.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163bsqzmyez.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xxnldgfc.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163adwjtdwc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163powzqwzt.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163umunwkkk.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163fvcqixbh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163bvrtebto.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163dwlybjez.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163fqbemyqn.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163zqqqwowq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163fkrrhrzi.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163giounzyy.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163uobxqcei.html

npx vite build
来源：http://www.sxryk.cn/163jheojnxy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163cmhphrrf.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163nnxxacen.html

================================================================================
来源：http://www.xuanzx.com/163rihqeoox.html

统计汇总
来源：http://www.sxryk.cn/163radlqmoi.html

================================================================================
来源：http://www.sxryk.cn/163mygeajjd.html

按语言统计（条）：
来源：http://www.sxryk.cn/163tmszjglp.html

Python ......... 252
来源：http://www.xuanzx.com/163iqedpjmw.html

PHP ............ 252
来源：http://www.sxryk.cn/163idkojgtq.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163aderlukh.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163izsowzuh.html

Java ........... 212
来源：http://www.xuanzx.com/163dflptreh.html

Go ............. 212
来源：http://www.sxryk.cn/163ulkgcphx.html

Ruby ........... 212
来源：http://www.xuanzx.com/163fvkrtaya.html

C# ............. 212
来源：http://www.xuanzx.com/163uhkggjop.html

C .............. 30
来源：http://www.sxryk.cn/163liwvaefp.html

C++ ............ 30
来源：http://www.xuanzx.com/163qucpeqtx.html

SQL ............ 90
来源：http://www.aibaodan.cn/163xhhchkyo.html

Bash ........... 80
来源：http://www.aibaodan.cn/163quebbjka.html


<!-- 参考信息 -->