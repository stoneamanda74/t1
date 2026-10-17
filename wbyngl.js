外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xjytejkx.html

print "Hello\n";
来源：http://www.xuanzx.com/163szkhrhrh.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wfqcaued.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163srwudaok.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163uetgivqf.html

"值: $a"
来源：http://www.sxryk.cn/163rbmemtmd.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163iyjkrnfh.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hkugnycv.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ubplpsts.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163zfljdabt.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163qrfmlrdr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163cljhanct.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163qemcfifs.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ffdqdpuh.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163qpxthxua.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163hxapavla.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163yshfcbrq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163rbfmscll.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qiahvnnq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163fsdpvpcl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vvlmlgrh.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163qopzgdwi.html

println("Hello")
来源：http://www.sxryk.cn/163wadekggo.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ybwnphjc.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163pwnzdlws.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zvpuukof.html

s"值: $b"
来源：http://www.aibaodan.cn/163uhplozts.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163otlwjjbt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163lswkvcqx.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163csktmbxe.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163kddapxzw.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163kfprrkcv.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163xfiiyyep.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163uxtwrmwr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163tjgtpufm.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163iqoepmos.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163yxpqivgd.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163cgpjasbi.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gcxljhwo.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163flfhnafg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ubtodvpq.html

================================================================================
来源：http://www.sxryk.cn/163hiscnoeg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ajylsneu.html

================================================================================
来源：http://www.xuanzx.com/163yimoglbp.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163yelcmfqu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163fgkzchxj.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163iltlzmdr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163azbgwggt.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163wqegacrm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ueluygtc.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163uqspauqc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163cothhwke.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163nkmuvkje.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fdbjbssu.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163xryyqenq.html

{**a, **b}
来源：http://www.sxryk.cn/163fxuusrww.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vnczhyaz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163mjyuhhmv.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163tbsxjyvc.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jihspymr.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rnmaeekv.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163yykclkae.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163dglqrhkn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163adtxxvzd.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163knlmjeee.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163jwmbrzur.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163knjinzrb.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ayvacbmq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163fycmngfo.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ffhugbmc.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jqyixiyf.html

defaultdict(list)
来源：http://www.sxryk.cn/163dwiakvse.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163kwdtezmt.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ruejwpth.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ghiftrwb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163nhijrsjy.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163fwmpxnmg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163vesekcqt.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163qaijjxoy.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163kayoblxw.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ozehvokx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ccvsfxqx.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163gvvybtgj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163kyyfvnzu.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163shpwotsk.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163izogylay.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163pmybecrt.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ueeaadcy.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163aslhvtxr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163btasipqh.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163lhsimawa.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163oxoirrfa.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163myupmrno.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163uxutdwql.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163smyzgwao.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163pjlvefso.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163xnwqzcum.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163kczhhmty.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ghtryztb.html

UserId = int
来源：http://www.sxryk.cn/163ydvqnzvf.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163mhsfiizs.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ndsvmwnl.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ffqoogya.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163smfrnlam.html

[U31] Py：单测
来源：http://www.xuanzx.com/163aqkvorqv.html

python -m pytest -q
来源：http://www.xuanzx.com/163ohcrfpcf.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163jbmyqakl.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163sqmadbhd.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ttgspwvz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163joeyqfkk.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163rkgqtecx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163kpqkqtqj.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163bpzzinqi.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163eoqigwrz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163mfzrqmnr.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163rkcbwohh.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163vkbmpxun.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163zfbpdqeq.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163yxraupjk.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163scocyhvh.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163xtdhzsxx.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163svfbncsx.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163lyykbiem.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rhwilcch.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ofpyhjqe.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163nkeanzjh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163rpbdvjfu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163mmkksqqu.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ozrutqzl.html

namespace App\Http;
来源：http://www.aibaodan.cn/163vjyxodta.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163gyoaygty.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163lxidymau.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163shaactky.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163moxqcanz.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163cssjcmmd.html

?string $name = null
来源：http://www.aibaodan.cn/163mjpbvpqx.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163rfqvyviw.html

int|string $id
来源：http://www.xuanzx.com/163yzsgkdnu.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163arbzttfq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163sohapqoy.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163begaksnh.html

public readonly string $name
来源：http://www.aibaodan.cn/163cljpdjmg.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163brhawljg.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163cfwkwoeg.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163xgsrztcm.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163nrwtoohy.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ilswnmgu.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163dkhidjdy.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163krhprnul.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163mootdghc.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163raqptwqw.html

$obj?->method()
来源：http://www.aibaodan.cn/163wptxvqrs.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163rhrjtzyh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163cfalxqyu.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163tpdbzoeq.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bbgravkx.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163tlvsvsvm.html

"值: {$a}"
来源：http://www.sxryk.cn/163azijhhpw.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163dnoxnvxj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163nqorzfxp.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163klhuptai.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rlevjjxq.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163aaclidnt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163dqrepenk.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163rfxutdrg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163cahumtow.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ilfnjinv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163mihcqrbq.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163pnecwaau.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163gszeutsc.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163vmenqqqp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163rpcpafae.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163nhpkwgce.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163iobgtplu.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ctnunmqg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163tptdnrbf.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163kyopkfah.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163mwgffjwq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163bodhfhmt.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163iyzphvhk.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163hoqkfqcd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163fiolkluf.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163nfnevwiv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163nepdyjok.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163dkejneit.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163mmhojtqo.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163thxqjbhw.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163lzydyckh.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163fuzqbywq.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163cvuarcar.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163uyyjyxcl.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163afgslthf.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ymbiwtth.html

composer require psr/container
来源：http://www.sxryk.cn/163tukwpjje.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163gqrwrusy.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163sgfapuiu.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163moapesqg.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ogelorfi.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163txmgyfyv.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163gygmdkoe.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163nthblmvh.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163cgihmnnh.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vjdmnadn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163gbrauaif.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163xtdjmdzq.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ftpsmjcm.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163rdayzdjf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163zpcixjmh.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163qxhgrnxm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163otihidcd.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163tjatzwpj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163vwbsfvkl.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163krcxccdb.html

a?.b?.c
来源：http://www.aibaodan.cn/163bmlijggm.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163hcprzcww.html

a ?? b
来源：http://www.xuanzx.com/163gsjhccvt.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163nbqkvnom.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163kclxnblv.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163hzxytmji.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163hbqzyiou.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163eyjaeyxc.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163zpqnqoyu.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163pvxtpqmk.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163djrpqion.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163hwnqnmib.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163twdikzhc.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163woymrszt.html

structuredClone(obj)
来源：http://www.sxryk.cn/163xoyxdhbc.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163akryhiwj.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163rhdhifme.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163dbpymqvs.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163jgktszfr.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163emcaeovx.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vxvkppbl.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ztrsiuts.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zyuibwxz.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163zraxbtjd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wzljiizp.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163tanbfxwg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163tdzxovpy.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163vhdcbiol.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163oyjnvubc.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ifxrhofw.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163dabeblwg.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163dguounus.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163fiojvmqd.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163qhfptphy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163talyqhga.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163dilbwqad.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163okvkjpgy.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163fydcywwo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ctoqybki.html

[U105] JS：节流
来源：http://www.xuanzx.com/163kaolrmsy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163vvzyesul.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163phfpsgov.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163dmyxhyvl.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163isdohcsb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163pnqfdlgm.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ozbezkqn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ktqmecua.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163mymarxte.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qccckjki.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163eofqkovd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163pcacffyc.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163lquskjcf.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163fijfpsff.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163jndmoqiu.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163icdojcpr.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163bgwvzzvo.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163urfioono.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163tptrkcqd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xxctoimw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163zbmnkwtl.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163nhunqzop.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163raliwmdc.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163baywrjgr.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163gakejrdm.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163lyqkpubc.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163dlrrzrcu.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163bplbponr.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163zhfeuigl.html

npx vite build
来源：http://www.xuanzx.com/163bzkciodb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163mgsagqor.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163qukodyra.html

================================================================================
来源：http://www.xuanzx.com/163sxgbcrpi.html

统计汇总
来源：http://www.aibaodan.cn/163lnjawtfv.html

================================================================================
来源：http://www.xuanzx.com/163fsyuhhqz.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ldyefbcd.html

Python ......... 252
来源：http://www.sxryk.cn/163tomwafhd.html

PHP ............ 252
来源：http://www.xuanzx.com/163dmdriubo.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163wcdystpv.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163gqqwjerb.html

Java ........... 212
来源：http://www.sxryk.cn/163ogjzseaz.html

Go ............. 212
来源：http://www.aibaodan.cn/163ugdhglor.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163htgjwcts.html

C# ............. 212
来源：http://www.xuanzx.com/163kyzhnnll.html

C .............. 30
来源：http://www.sxryk.cn/163sqwqrrkt.html

C++ ............ 30
来源：http://www.xuanzx.com/163jtmyqpai.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ctdithku.html

Bash ........... 80
来源：http://www.sxryk.cn/163vcpmsytm.html


<!-- 参考信息 -->