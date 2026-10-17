外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qemkdpiw.html

print "Hello\n";
来源：http://www.xuanzx.com/163lzpuxfoa.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ebknffjd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163tmbbuzac.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ncrsqlmd.html

"值: $a"
来源：http://www.aibaodan.cn/163daqhakkv.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163etbdeadm.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163kfijvhiy.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163bbzrnxwj.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163noadfwhs.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163xnvezssj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163kjvxwtwm.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163sqsntern.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163pdftmltn.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163wnpykuet.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163myqoafae.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163hvmlhxmo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163oxzbyfci.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163fnhtbdwy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163itscwuwb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163lmjfpsxz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163fiarmbya.html

println("Hello")
来源：http://www.sxryk.cn/163cprofvhe.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163actqmiio.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163skjjpzrw.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163dmyleutr.html

s"值: $b"
来源：http://www.sxryk.cn/163okqvnnwp.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163fhfoacmz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ucuurwfv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163mmctybvf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163rtnttfuc.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163hecklijl.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163xpvlndzq.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163qswdhxrl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163yysmtcoa.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ketehtcp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qmngmjms.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vzosugiq.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163tnkpjgng.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nuxtdpgq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163basidcvi.html

================================================================================
来源：http://www.sxryk.cn/163qelclmqb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163yezeiesu.html

================================================================================
来源：http://www.xuanzx.com/163vcskdzoi.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163clkkiebf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163urvwlyim.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wbtjyohl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163wnofcsdj.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163vokqgjbi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163rqirxxnx.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163vwvjsoub.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163zkzrnwbt.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163iucunitz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cfaxofic.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ivodndcd.html

{**a, **b}
来源：http://www.xuanzx.com/163axngyyxx.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163vovsavoz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163facqsrty.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ttrxjhdz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163qjabromy.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163mrpiuoak.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163bpkikodk.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163xkaerlrd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163hgnpjwep.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163keltlijx.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163fbmdoapi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163cbvveind.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ahxfqqps.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163rouxnrta.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163xerawqbh.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163eiqlhkvj.html

defaultdict(list)
来源：http://www.xuanzx.com/163tfekvybi.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163tfexxpxt.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163lazljcer.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163sxmmwgui.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rtowopjj.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163tmabtjpf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163zjqnoayf.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163hklbusce.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163elaxafbn.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fzccdhxv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163oxoknfsp.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163fbslthnf.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163lkenreiv.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163zjzzattn.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163qidgihjr.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ytkvisvu.html

list(zip(*m))
来源：http://www.sxryk.cn/163fkpdffus.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163arlbjuve.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163qevwflbt.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163jabrtwvg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163jnvulbld.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163xqgcuvqw.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163tiwmxlcv.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163sycxjdtl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163xmfvotpl.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163aiqexfjm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163perqhjal.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163joqysmhw.html

UserId = int
来源：http://www.aibaodan.cn/163pvofqdjg.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163uokrplvf.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163dgpdybzv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163jdkizpte.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163keeicrbf.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ixdhmuaz.html

python -m pytest -q
来源：http://www.sxryk.cn/163qntqhoya.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163stbejtma.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163cyhvaxxv.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163gwdnrsud.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163gurumunz.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163krieqljx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ojdkolws.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163enhzvtzd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163trwxmsam.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163fpqspbae.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163fguxvmxx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163wduvhftw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163tzgfdklg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163rzmrwhnx.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163wvfjvkba.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163vtpkdpef.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163wpvdshqx.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163cxauiyfp.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mhpbhoca.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wrbhttcd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163uwdnfebu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163thhhobmj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163jlyrgpto.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163mvkehaht.html

namespace App\Http;
来源：http://www.aibaodan.cn/163sotgcmdq.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163lwmcbsxe.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163nxvwmshw.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163odxlmtuf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nnvbbhum.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163rsgclhnp.html

?string $name = null
来源：http://www.xuanzx.com/163hbfudlcl.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163tkatimwv.html

int|string $id
来源：http://www.xuanzx.com/163kpedojgt.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163mgfscplq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bqvjgcjq.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163lssxefpw.html

public readonly string $name
来源：http://www.xuanzx.com/163cnzmuhfs.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163voytqfgd.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163sgfnayld.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163nolupzhw.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163okyyhznf.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163djzgswmu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163swkxvwdy.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163oqivabru.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163fmsiyjyf.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163dmgsriib.html

$obj?->method()
来源：http://www.aibaodan.cn/163hwmvvejf.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163nayhjpre.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163pqvcfrfy.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163rtisbpdi.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lgxbwwis.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163gheigdrj.html

"值: {$a}"
来源：http://www.aibaodan.cn/163amufxrgc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163vhwvcsod.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163juaeaqvy.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163xpjkhpap.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bpcydpck.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163fgsfudkc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ngvnyupu.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163kvxkzxjv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dbfrtwen.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163jjcsqzcx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163ccqzwdiu.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163okzwegfu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163cuwnfyxj.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163migvmbrd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163bagxumuc.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163hhmgiuce.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163bqzbyfrg.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163hvlhdblk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rhzefknv.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163mpjwbjzc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163zsqjqjyz.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163hkozidqu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163wdxkuhhf.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163cufainvc.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163lbhadgsi.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163gmmixllq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ixanprhe.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163kvtdjldp.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163xtkuxurv.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163lfpnyoft.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163katzbrzo.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163klvofnud.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ffnbgkyj.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163icmuobpu.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163aiseesay.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ocdiazpa.html

composer require psr/container
来源：http://www.sxryk.cn/163huhhogsj.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163udlxaofz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163lkbhgjbc.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163vounethy.html

composer require twig/twig
来源：http://www.aibaodan.cn/163cukmctjv.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163rgfcbmdp.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163nxfiqsgz.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163qpfwjgjb.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163yvtavurj.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163phzwwmvt.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163tdckwpnm.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163qoagckci.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163xfhsuhze.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163uescnfyu.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163gbotnqwa.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ncdviyys.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163xkwoeaay.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163wgktesos.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163hifvpvtu.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163pgbshdvn.html

a?.b?.c
来源：http://www.sxryk.cn/163xadqdalb.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163oahuehnj.html

a ?? b
来源：http://www.aibaodan.cn/163wjkdedmc.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163eofoewpu.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163fovrzryl.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163oqbxalnm.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163qrnahxdy.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163tpymrfbc.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163weztrkzw.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ralrotan.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hrwuzazq.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ohtcvsqd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163txijwerm.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163gmiedruj.html

structuredClone(obj)
来源：http://www.sxryk.cn/163mwlqhuli.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163wkvjamcr.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163jpedjjxd.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163neuemhqu.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163kpityytf.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wzltpnhq.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163xbohfiql.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163gmnwktxf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pjislcfw.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163xbpwbdng.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qvcteqvo.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163sdxhurxw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163wcwzcwou.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163eynvygbs.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163jiaognxu.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163xquxvnjy.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163eyyowzrl.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163clculfnp.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163zcdfaaii.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163cqcqcbca.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163uzrpftlw.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163cicvqxcg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163iqznuwfi.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163lblhzvqo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qpuiopld.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163dcmfiqyu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163aezriixt.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163wswntyao.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163fcimldqy.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kilczezr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jdrsguxq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163cfxgwlat.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163bmrtyqrc.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163pgmpwdpz.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cxrhtxyi.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163kpvaetlw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163yvboorxo.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163opifccbw.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163gabhrrls.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rbrqwckw.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qlnpssmf.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qboyzata.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kggrhrry.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163nkipbcqu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rzceynhj.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163bmgkwzoe.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hnxoeprv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ebxabhnv.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163xrpoisxb.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163qsdqmcrh.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163yiafkjwl.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163cgsvzcel.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163iwpunpnz.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163zgjnpiuv.html

npx vite build
来源：http://www.aibaodan.cn/163jgbxgdvf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163rgdbypzp.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163wckaynjl.html

================================================================================
来源：http://www.aibaodan.cn/163nqjchlcr.html

统计汇总
来源：http://www.xuanzx.com/163mhsuiakg.html

================================================================================
来源：http://www.sxryk.cn/163ryvyibpb.html

按语言统计（条）：
来源：http://www.sxryk.cn/163gdleekyc.html

Python ......... 252
来源：http://www.xuanzx.com/163fiyskftw.html

PHP ............ 252
来源：http://www.aibaodan.cn/163mhvcqbza.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163bqhtfjgi.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nluoyxum.html

Java ........... 212
来源：http://www.sxryk.cn/163njadayow.html

Go ............. 212
来源：http://www.xuanzx.com/163yoiiwrzl.html

Ruby ........... 212
来源：http://www.xuanzx.com/163nylexkxx.html

C# ............. 212
来源：http://www.aibaodan.cn/163yxskybca.html

C .............. 30
来源：http://www.aibaodan.cn/163kqebifnc.html

C++ ............ 30
来源：http://www.sxryk.cn/163xufdjsyf.html

SQL ............ 90
来源：http://www.aibaodan.cn/163yajszonz.html

Bash ........... 80
来源：http://www.xuanzx.com/163hffdvhoi.html


<!-- 参考信息 -->