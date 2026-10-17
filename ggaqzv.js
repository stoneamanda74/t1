外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tixcoejs.html

print "Hello\n";
来源：http://www.sxryk.cn/163huzgjofi.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163umqmljfu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vmztfcoa.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163yoknapaz.html

"值: $a"
来源：http://www.sxryk.cn/163wrigfcvn.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163edkeihbl.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163hemedojg.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163rfdzqomi.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ffxctidd.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163wampwyrn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hkvcbqit.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163tbkbzryg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163pxutmnko.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163iomiywfa.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163eszugbxx.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163wwnhbyaa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zucxvthr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qauzrldi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163decbyeah.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163keqeexgs.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163mttudyea.html

println("Hello")
来源：http://www.sxryk.cn/163ohtibhhw.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163vqzsllau.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ennkvgyd.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163wxivakts.html

s"值: $b"
来源：http://www.aibaodan.cn/163wsaprgph.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163sgyaysfk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fkshvmte.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ooueggsu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163joqdiufs.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bizwchjq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163guuytcla.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qbgpkspz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163clifasvv.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163owwwcysy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163rxvtfkxo.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163iplpgxgn.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163cjenpttu.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163cvmshkui.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163bzjdcxtg.html

================================================================================
来源：http://www.aibaodan.cn/163tjrcrsdi.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163tvdurfio.html

================================================================================
来源：http://www.aibaodan.cn/163owmfcuaq.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163nejejswc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163eyixjwme.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163untiifbe.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zomjbfzu.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ukordnwb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163pdgflelg.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163kdtgipxw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ncicxybj.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163xwzmoctm.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bxyqnnsx.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163mxgirtkl.html

{**a, **b}
来源：http://www.xuanzx.com/163itdrntkr.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163euncnpvj.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163qwxiewoo.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ezedwosw.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163occwgwdg.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163eljkyqup.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163outhsxxr.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163iqrwtamh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163vdhnuzvc.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ocsgrwpy.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163wltiavax.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163uafbjjlj.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163gzhzneij.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163zmfloooc.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ptauizrt.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163qcnnaffu.html

defaultdict(list)
来源：http://www.aibaodan.cn/163zumaijgx.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163vddxyuaz.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163tffbsgby.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163qdigbalz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163nzmqjmes.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163bxbcobui.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163qxewfbbh.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163qhswbdqt.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163mpocrmtr.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163koxpgirf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163freqbvqc.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163pazyjcvz.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163tafjohlj.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163nrjstqrm.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163guvjmzle.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ncocvhpb.html

list(zip(*m))
来源：http://www.aibaodan.cn/163gfuimcxk.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163wksosvmq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163hogfuuuw.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163czmcdgdf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163wsuydicg.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163elzjhhxq.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163eifmbnbv.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163hcrlsrrx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163blwpxgdy.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163hetggzxz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163rrcqxtwt.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163oqeowlxu.html

UserId = int
来源：http://www.xuanzx.com/163digngpeh.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163nimapecp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163dxjzzmgs.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163zgyfthgh.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163wlqamzbi.html

[U31] Py：单测
来源：http://www.xuanzx.com/163hwfgpxty.html

python -m pytest -q
来源：http://www.sxryk.cn/163tvlggwon.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163rzhouanw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163edfviety.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163fzwhlkrn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163eitzword.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163xdrebush.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163sjlburmq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163htwckuzs.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163jkekzyvo.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163iprxqwvw.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163qqubgvgm.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163siuizmcb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163vpcjhgih.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163jahhehfv.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ltafzjkq.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163zgrzfzrv.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163qnexrwbi.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163biobtnvq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163busebbgu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163jzbjjuhm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163mulohypz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163cjaqnopz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ngvypbxq.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ozdjwqih.html

namespace App\Http;
来源：http://www.xuanzx.com/163swfkpjpo.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163dlaebcbj.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ynzkhksc.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ddojoego.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ylkdesvc.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163hjclxbhi.html

?string $name = null
来源：http://www.aibaodan.cn/163fqenmfzn.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163apipgbpb.html

int|string $id
来源：http://www.xuanzx.com/163zwjbrdqk.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163cwohenrj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163jwltnmsp.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ohlbvcqd.html

public readonly string $name
来源：http://www.aibaodan.cn/163agxmzfzs.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163rxxdxypy.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163vhddeans.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163yoddcyqu.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ppttuicx.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hjvpflyw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163mwkezmzn.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163uaowylwc.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163osejswbg.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163hgmcgabk.html

$obj?->method()
来源：http://www.xuanzx.com/163ztmfmsxt.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163angqpodh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163fawdmvxz.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163gsmwfgyb.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yeawsrgr.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163xumkzyop.html

"值: {$a}"
来源：http://www.sxryk.cn/163gbpudxss.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163segcxzzx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163sqtgvsmz.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163adswfyzr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163iwjhtvej.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163rpgcehpu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163yegejncb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163tnvsvisp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163omqnukiu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163owumbttn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163xlsuqoie.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163sydplpmi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ekruggfu.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163jlifmhhj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163mocirrve.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163fgscafnw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ytjpkgub.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163zhovwlzt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ofgxbgnz.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163kqxpaczw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163petzlxkv.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163gxolahvh.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163iicfcjwv.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163cfpeizos.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163uwgvzryq.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163mzzazzta.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163qibavjsi.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ukronkcw.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163thlsboyc.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163vsbpfxtf.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163pyqfsaxt.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163appklkyt.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163hlddkmto.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163btsufsnf.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163rhwrzsch.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163xgjfzari.html

composer require psr/container
来源：http://www.aibaodan.cn/163iqlumdot.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163crsswoft.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163eeaqsvxy.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163virgbjui.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ezzxlbfx.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ktdyacnn.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163mxsavmai.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163gkrxlzze.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163gqgwdedp.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163gjyhpvmf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163tpnfgede.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163mnuoyjmr.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163psredjsq.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163nwnakqnd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163dikbprni.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163xaiirxgr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163eymcqgyi.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xasofcry.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163tvmgsrem.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163mcxgszph.html

a?.b?.c
来源：http://www.xuanzx.com/163uvgbsjwj.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163voprhswd.html

a ?? b
来源：http://www.aibaodan.cn/163bezggjpf.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163yhpgbkcv.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ndhbtcvo.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163vvqtjcit.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163zjevemoi.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163qdjbpqio.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163obrikfge.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163idirgycv.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gshivhjg.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163tfllgsin.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163qwexxhqk.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163bilhyfjq.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163yxdryaho.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163qyxmlvnc.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163sogkvglq.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163fjdyminf.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163wzltymvz.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ieknpnoz.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163lxvmdnws.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163tczgjaoi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rqjiaekf.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163kkodhplu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bfepkkpd.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qfrgnsxf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163eifnqnuk.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163duqdcwrz.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163cjwerupl.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163cfixktmu.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ucufrrli.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163insiutjv.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163owcymlkr.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163nmmxzbxs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163airhtagi.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163uxurlxby.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163fkbutwdn.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163abikdtxn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lofpqsqn.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ngskthlo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163tkdaglds.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163jihjublh.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163cyggnufg.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163thggwyrn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163sdrhqzve.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163jrbhjpih.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163denyxfcy.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163hxzbdmln.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hmzwnwvt.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163nfesxjkr.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163axapcjvm.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163wnycqvoc.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163sleoqwfm.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163jybpzgjq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ntwxwxsa.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163dovcjqze.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xxyvdmnp.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163nwozrswf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163asjavdko.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163wykhfqmu.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163masgxgcu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163etupvlpp.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163kuzmivfh.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163rxxejoen.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163uxarbeej.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ilzghkia.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163zmoirmps.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163eyayypxr.html

npx vite build
来源：http://www.aibaodan.cn/163harejpkf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163gtccywni.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163smoahosk.html

================================================================================
来源：http://www.xuanzx.com/163bvjoexxz.html

统计汇总
来源：http://www.xuanzx.com/163gbaxrqud.html

================================================================================
来源：http://www.aibaodan.cn/163jkpoetaw.html

按语言统计（条）：
来源：http://www.sxryk.cn/163dtjnzgwu.html

Python ......... 252
来源：http://www.aibaodan.cn/163vuxbwtjo.html

PHP ............ 252
来源：http://www.sxryk.cn/163yejlnqfg.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163qzngbilm.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163yexnwiwc.html

Java ........... 212
来源：http://www.aibaodan.cn/163gumjcjch.html

Go ............. 212
来源：http://www.sxryk.cn/163cyiwmtpc.html

Ruby ........... 212
来源：http://www.sxryk.cn/163mxduflho.html

C# ............. 212
来源：http://www.sxryk.cn/163xdtwszxx.html

C .............. 30
来源：http://www.xuanzx.com/163jolzvnof.html

C++ ............ 30
来源：http://www.xuanzx.com/163pnibfutl.html

SQL ............ 90
来源：http://www.aibaodan.cn/163fnzwmwaq.html

Bash ........... 80
来源：http://www.xuanzx.com/163kczlwtjq.html


<!-- 参考信息 -->