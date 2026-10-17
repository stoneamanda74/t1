外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163zysstojf.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bodbdbpl.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ujjebzid.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163riqtncmz.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xjywzyky.html

"值: $a"
来源：http://www.xuanzx.com/163npnlskot.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163iswgpney.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163plucoifm.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163kpfmlajq.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pjbqtixg.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163xbtghgql.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163gtiqtqat.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163xklmcjdp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163knvriudw.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163kemqwlsl.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ozqxaqki.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163sflerzqw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163gauinsoq.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163mmwtbszw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163cswsevex.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ewnbhvlw.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163hwjbglyo.html

println("Hello")
来源：http://www.sxryk.cn/163rowmqvsn.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163puldbqqv.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163hmucgfua.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163lcqrrmmc.html

s"值: $b"
来源：http://www.xuanzx.com/163ciwtoamd.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ygkvybsm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163salslvti.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163xzejjnty.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163btzbtngb.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163efanfebl.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zcpupsxu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163dmffkftg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163byaoffsd.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qrudljzc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163izyoxqsc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163spdimjpy.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163uimvtguc.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163uzogrqxv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163zrbewvyh.html

================================================================================
来源：http://www.xuanzx.com/163tdzffaln.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fykyykgx.html

================================================================================
来源：http://www.aibaodan.cn/163fkcbrifp.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163tjdkgqfl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163uptddfnc.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163xhusneqi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163egadnccs.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163teeiyljl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163wuxbbfpj.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163daybrlvs.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163rpuphukc.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ezgmfrwm.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ikixhfrb.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163yyvymwzk.html

{**a, **b}
来源：http://www.xuanzx.com/163fkwnoqrf.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163chpidlrd.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163nikjbwuh.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163qvfgoikf.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163lnvtyjej.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163kwlwtkgm.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163pkqbcphb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ghpbrdwf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ctdoedae.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163hobmxdub.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163rbqdavsy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163wtxnuhyr.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163szverobj.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163vyxkjgrb.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ahfzhjrr.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163hqgydocn.html

defaultdict(list)
来源：http://www.sxryk.cn/163gbgqptlq.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163zkatdslt.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163waxrraec.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163jvyjayql.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163jrjeordq.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163uqnbmlja.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163waixdhhz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163zjryxpzi.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163cwwaxcje.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163sglqjvlw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163svppodvo.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163wdqlpmjk.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163wogjrbkl.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163xyemdcof.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163amupmugz.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163brnlnekx.html

list(zip(*m))
来源：http://www.xuanzx.com/163glyyaoxr.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163dybuxdbf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163hzetpaky.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163tewhasnp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163vggjrrvd.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163nyjinxmh.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163lzbgasrs.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163fnchkmvy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ujnyfvaj.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163waftkpoj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163dscatmnj.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163lwclylve.html

UserId = int
来源：http://www.sxryk.cn/163csvexyyj.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163jupoblsb.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163urcnqola.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163xsjrnbya.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163vmlzjlxn.html

[U31] Py：单测
来源：http://www.sxryk.cn/163hnxiqvwu.html

python -m pytest -q
来源：http://www.aibaodan.cn/163zafbtrpn.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163tovdizdm.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163yccstlhw.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163fhaudeik.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163nvimvplu.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163xblzgdkq.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163pnzjhqom.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163zbnpbwrp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ztyhlfnb.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163dnzxhaxs.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163asvhhbpd.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163hygdtbro.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163igfyvtvn.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163kaqrmsbl.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163xjfbpxgu.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ckxlbrfs.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163dzlwhpmf.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163kisxzqmx.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163smdpbhwa.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163fjszbymp.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163eclolkrf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163mqknlegb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163qpzxpfzj.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163bddjfbvu.html

namespace App\Http;
来源：http://www.sxryk.cn/163hfhnhbus.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163rtkykdhq.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163hbqizyzu.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zbplxviq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hjhsegcw.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163svnjxyii.html

?string $name = null
来源：http://www.aibaodan.cn/163zslndypv.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ounvohcu.html

int|string $id
来源：http://www.sxryk.cn/163tcfazyzo.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163vgcrczcy.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ssgarvad.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163kxzhbgxh.html

public readonly string $name
来源：http://www.xuanzx.com/163pbchvppt.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163bzuqiqje.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163viwltyuj.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163vvkfsenb.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163cslcqgbg.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pquixrbz.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163mwgrmypj.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163zrkxbcrf.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163yhyhhfnr.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163otuscwhn.html

$obj?->method()
来源：http://www.xuanzx.com/163gnxfqlry.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163snmrjuij.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163jtgdtzrv.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163iwwfxpmw.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eqsbzghy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163xtzvtddf.html

"值: {$a}"
来源：http://www.xuanzx.com/163uwtmklxp.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163dcprrhnd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163simipbca.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163fwxxxuzm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qwijiofk.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163pbgjobqx.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163vfzaletb.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163eynutcru.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tauutpkc.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163oqnzzxov.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163dyybnavr.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163mfltyrbk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163fowpmguy.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163sbwmxisc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163gwtmddnr.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163yztdbaal.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163xeyffuen.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163kdmfohkb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163febmlgzo.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163tqdebrop.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163vbfhpgib.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163umqrxsmm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163yzdebrbr.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163ykjndtlp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163mmgkqhwq.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163zshawgbd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163srokffdz.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163aqpxougc.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163dihsoqzo.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qmasfhpw.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ohscxpzt.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163cmbmqbmt.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163mjyhqodu.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163bcqehcke.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ndnvnqbr.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163wzkyavmi.html

composer require psr/container
来源：http://www.sxryk.cn/163ydysllfr.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163wzoluvjy.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ldmblrmz.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163xhuotnws.html

composer require twig/twig
来源：http://www.sxryk.cn/163fkqizttx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163htebagjc.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163nxuergir.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163siixfbry.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163wcclurgn.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ddoatogf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163dxnowykx.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163eouxmyff.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163wrznckwl.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163lxcebbwf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163hgsdxawh.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163qbjijgio.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163zjnmahem.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163mlpwdviz.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163aabzizjr.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163zuvauvgp.html

a?.b?.c
来源：http://www.xuanzx.com/163ymqkfkma.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163mupgcfqg.html

a ?? b
来源：http://www.sxryk.cn/163soabrpqv.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163nkawjhvn.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163kkqhggxq.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jcyaayrx.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163htkaojpu.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163oaoappit.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163kjeyqpwz.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163gwbuxwpk.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163miqnzqav.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163csuxbwhc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163qdiglyqa.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163wvkpnuib.html

structuredClone(obj)
来源：http://www.xuanzx.com/163gioncrsz.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163tguvejsp.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fzrpfnpy.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163jsupnbqs.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163imqevatq.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163kplxmbxb.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163oknnlilt.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163xaruxabn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vddusyud.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163hjherfwt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ildnwsvf.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163fhunjdqo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163jvvmomjx.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163oagrftmn.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163mcjldvfi.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163jrghhxmk.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163fbwaglkg.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163sowkrjfz.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163gxvgzgxz.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163teuwwyzk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163pdiqeohb.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163daypbvht.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163grzxjeaf.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163macmxuab.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bmfeootv.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ftvyshmm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163mkzeotwg.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163obgcvayi.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163mnujwong.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163vdpiayhg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163nxpbvalu.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ulradufu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163nzwqmlkg.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163wqxpmgme.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163kuvxyofi.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163udbejnwz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163tdquyxal.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ahicjkti.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ppbowswz.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163gkfrwynv.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xvopevug.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163hzhgrkuy.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rvsehtox.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163artpjvdh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xnlhebof.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163glrkdhez.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163fgjiulqr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163lgwvvpch.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ylxpxpcf.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163weutqvyn.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163tugpfqkw.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163rwcsgjjz.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163tfrzzvtq.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163bsehwodk.html

npx vite build
来源：http://www.sxryk.cn/163wlzpfsdf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163fvjrliqo.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163jghexvzr.html

================================================================================
来源：http://www.xuanzx.com/163egcqrjdo.html

统计汇总
来源：http://www.aibaodan.cn/163bkiugryy.html

================================================================================
来源：http://www.sxryk.cn/163absuanbo.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163agiecueo.html

Python ......... 252
来源：http://www.sxryk.cn/163uajqshfv.html

PHP ............ 252
来源：http://www.sxryk.cn/163kkuydxih.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163qqbdtzxq.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163nylyucym.html

Java ........... 212
来源：http://www.aibaodan.cn/163bhkgvlvw.html

Go ............. 212
来源：http://www.sxryk.cn/163fdccgpaf.html

Ruby ........... 212
来源：http://www.sxryk.cn/163eyfnekpv.html

C# ............. 212
来源：http://www.aibaodan.cn/163tolfctjb.html

C .............. 30
来源：http://www.aibaodan.cn/163cmpmgjak.html

C++ ............ 30
来源：http://www.sxryk.cn/163eszwkanj.html

SQL ............ 90
来源：http://www.aibaodan.cn/163xzpolwcc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163lqizwtuk.html


<!-- 参考信息 -->