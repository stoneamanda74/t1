外链999!wailian999！

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163faefqnyj.html

"a" .. "b"
来源：http://www.xuanzx.com/163whepnvxk.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163oyleuudz.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ojgmlqlk.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163nvagzqer.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163wdldhptr.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163qsywnkdf.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163jrneaiyq.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rwxtycbn.html

print "Hello\n";
来源：http://www.xuanzx.com/163yfpjhbtq.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163gwfgxzsh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163lmaqftsv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163yhqivdut.html

"值: $a"
来源：http://www.xuanzx.com/163yalnpstm.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163owliwedp.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163sjyliimz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163qnaxfhcn.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163vxffzuiy.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163mzgqjifi.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163qgnkukcz.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163frgxnnbn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ijssstwx.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163oxsnvwrm.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163mzlnjchm.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163mzhylzao.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163rtilrmem.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163atewvxit.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ymlmnqwf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163zhfkrdzd.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ocsodvag.html

println("Hello")
来源：http://www.sxryk.cn/163ailbvrws.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163rzcbepoo.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163dkdnrtfu.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163vptmhrya.html

s"值: $b"
来源：http://www.xuanzx.com/163sonmdzha.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163snsblmtx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163wzxyfytx.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163foppjddp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163xawkajnv.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163jivuxhjc.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163kpxgtmhd.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163cqwgyvrg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ovhjvgzm.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163twdhbzvf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163lirfiawc.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163zqjvpkgm.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163lgtubboc.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163urszszhf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163mypobnze.html

================================================================================
来源：http://www.xuanzx.com/163svxkmnzp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163gucjoesq.html

================================================================================
来源：http://www.sxryk.cn/163ttryrlml.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163imcmuerb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163vdsczdbz.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163zztmbehw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163regwxqla.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163qioaomxq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163zbrnrlpd.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163fhmtakae.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163nndwtvxg.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163vsldzjmj.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pshuafrx.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163yjarrzlu.html

{**a, **b}
来源：http://www.aibaodan.cn/163moxttdrh.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163nwkvcjyc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163qsopunrh.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163gqjzejlz.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163uxcxuphh.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163wtkxkruj.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163jtmzddxo.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ytnwbsfq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ammuhhab.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163akrosgyx.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ajpbxhxo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163pawjljsy.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163qobonpfq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163lehjnvns.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163eahorruf.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163vwojdjux.html

defaultdict(list)
来源：http://www.aibaodan.cn/163rcgwfsez.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163tnephnxy.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163jviljkhc.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163dwhlspiq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163jzkxewqp.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163kuawcauf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163hidituyo.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163dapuiepv.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163beypabhx.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163jgtfnzle.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wcdzfuna.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163vgbocgvn.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163obppyzyh.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163tdfmvynl.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163lllypbto.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163flpnvvfq.html

list(zip(*m))
来源：http://www.xuanzx.com/163wqfsmxdk.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163rkhugwzi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163rcdzhrxg.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163hcbcqogv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163emizpzth.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163lyftgsys.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163glokfttj.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163wtlibkwi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163zguotxzb.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163wwchaldt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163pyibaqqs.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163kjgsiejw.html

UserId = int
来源：http://www.xuanzx.com/163rsaekkqe.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ggjgamex.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xgxgfcuw.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163gffxresk.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163pdjhgnxe.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ymumsllw.html

python -m pytest -q
来源：http://www.aibaodan.cn/163rkhiywir.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163xwyaozdv.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163uoaluawd.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163lfebvrvt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163ausrqrob.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ooairbre.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163jkfakosw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163yjpmsrsy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163gbcwbzjz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163xkyjfszd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163hmwkucla.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163rzofzuwi.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163qmxivlfn.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163dmcqxlsg.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163lqcpolal.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ueycpvwi.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163dgvukrss.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163cucifukg.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dxdrrdza.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tdupmyim.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163xmdhlyez.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163mnmvlfrk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163bviptcci.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163cgpswkfg.html

namespace App\Http;
来源：http://www.xuanzx.com/163rdhtgtbn.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163getrllxl.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163fthwwhmw.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ippicntt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sghafmmj.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163fuonxpdv.html

?string $name = null
来源：http://www.aibaodan.cn/163ewwjnkro.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163epzbqmdi.html

int|string $id
来源：http://www.sxryk.cn/163pejfwhsi.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163bfyuceiz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163wvgwqmmq.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163mdjtzcbx.html

public readonly string $name
来源：http://www.aibaodan.cn/163kyoitlyu.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163imgfhnye.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163jjimaoyz.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163swgobtgc.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163dgvdyqxo.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163zrzknhmg.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163stbwrwds.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ltmorfnn.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163bwpuyglw.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163enzhbxkz.html

$obj?->method()
来源：http://www.sxryk.cn/163tesqzohj.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163wvcpxqib.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163pshuvffo.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163cfnabndy.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tbdixwsj.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163fhckvskf.html

"值: {$a}"
来源：http://www.xuanzx.com/163lzhehlge.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163urmphblv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xbinzjnq.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163wbguerdl.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163njbowsyd.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163gglegrjp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163scqfmgxs.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163tjqdymsr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163uztckuyu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163qplqshdy.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163sleipgpu.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163iegviqil.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163glvlruxb.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163zbjfffyw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163sfnvnduw.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163hdzhnfsv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ouxzvgsp.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163nnvpdiem.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163khhavusu.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163uymseuzt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163oqohdsbk.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163kdlhbeoh.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163mpczrmnr.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163vesjyxhq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163eblhtvjh.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163hrbywacw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ghivysxj.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163rqmxsgpx.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163sqwdhurx.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qrqighvw.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163rtpqqcey.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163wioppbgn.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ruqaodrt.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163poirubzc.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163lcvakswk.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163rblbnzxq.html

composer require psr/container
来源：http://www.xuanzx.com/163hkanjpnd.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163yebkbbme.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163syplodgq.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ihjticnw.html

composer require twig/twig
来源：http://www.xuanzx.com/163zvtwexwj.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163fnwdgioq.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163fzljihac.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163mrosnadu.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ymempukn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xtaqttbu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163rnbymqzk.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163wdxcbqsn.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163gakagied.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163qbgfqxck.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163tubabldg.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163nomtbjql.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163edxziana.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163zlgklnsk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163wbeiskfp.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163hawoywhx.html

a?.b?.c
来源：http://www.aibaodan.cn/163llmwcrjs.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163nhhxwfoq.html

a ?? b
来源：http://www.sxryk.cn/163ksyiongq.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163diecgzxt.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ztmcvgim.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zehchfds.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163sflwyakf.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163dctvfnav.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163wpivsqyv.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163apduglgz.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wzcsqdwi.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163nlqxovig.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163erxzifdx.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163zxqxsmhm.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163phnxreir.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163bhmhkkwk.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163eavdfwqk.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163cfipfvhx.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163kfwgjmaq.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163piwyzoqi.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163tehsxicm.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163bnbwtkjc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lawexrhl.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163lokhwgfs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ctdimuea.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163knghnksf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163zxvszxoc.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163zgkcoluq.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163tkznzrrs.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163yvtuhryg.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163hazcolhk.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163iyrapgjt.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ycnrnauq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163cmucwwhw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163mpfwlzts.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163seseqrqy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163arlnpitt.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ezgsvxoy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163peaburlh.html

[U105] JS：节流
来源：http://www.sxryk.cn/163fzhdssce.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163xyimrlpb.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163irevogdk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ffpvuunn.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wmqlwxzx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163jmicrsuu.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zimfcgxc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163nfaihkml.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ramqqmtn.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163lnwamwez.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163bvtkzmrp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163gkgwmxnq.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163jttvyrre.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163imwfnytf.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vlsxsesd.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ggkhzqrk.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163tumxzjae.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nojecwqv.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163huunensd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wcmyecog.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163qgjgqasf.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ykvpmzfo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163dbjasvub.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163fxttqrhs.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ippnunqd.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163tuhlcdog.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163fvthrqko.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163dcjzpfki.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ylalxans.html

npx vite build
来源：http://www.xuanzx.com/163ahfzwoqa.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163shzoosih.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fjldejxk.html

================================================================================
来源：http://www.aibaodan.cn/163pxsprtdh.html

统计汇总
来源：http://www.sxryk.cn/163bqaeyipo.html

================================================================================
来源：http://www.xuanzx.com/163wqcipztk.html

按语言统计（条）：
来源：http://www.xuanzx.com/163kjukmots.html

Python ......... 252
来源：http://www.xuanzx.com/163qqwudocg.html

PHP ............ 252
来源：http://www.aibaodan.cn/163rxeuzjou.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163pzmxefwj.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163nqbxtvaf.html


<!-- 参考信息 -->