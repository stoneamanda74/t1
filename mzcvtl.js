外链999!wailian999！

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163nvtwsddt.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163iniprsjm.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hxjnxkwa.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163zldfened.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163toydfpzv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163enwsqsae.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163timaeecb.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163sjinqgjx.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163racqjwey.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163gpjmewdj.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163dzceuxgt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163tvxntths.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163slaozosy.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163bjzsychw.html

println("Hello")
来源：http://www.xuanzx.com/163cksvzkrt.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163kupqxsdz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163itcemtqb.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163luyogqxt.html

s"值: $b"
来源：http://www.aibaodan.cn/163aswwxodj.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ldnbttia.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163iduisfph.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163qrfkjgee.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163jsqwzjha.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ipeipxzj.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dphqomvu.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163zoxtsruo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163qffjircb.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wpjdrwjr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163uwfmxsfq.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163urdiynhk.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163txrfqglh.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163fcehiark.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wydqrjsm.html

================================================================================
来源：http://www.xuanzx.com/163nmtcbdwc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cmnuynqt.html

================================================================================
来源：http://www.sxryk.cn/163elprghsb.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163wpbinrcd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163kpvifwhf.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pweayega.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ktzakxnb.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ddhlkzoi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163xkuyulas.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163nilofuqm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163uczpzzfm.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ejtuvhir.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163vfwdgyqy.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163aipyqpkx.html

{**a, **b}
来源：http://www.sxryk.cn/163jhapigxs.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163abwdjxjv.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163jbmczkft.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ulcehbyz.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163bdudgjqs.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163nccqsfkn.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163olgnxkhp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163qwiinsib.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163nsnijdjn.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163acohipkc.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163oxjexrfk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163phrldtmi.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163izgvcmwe.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163yipzvoxm.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163bcsnfnaw.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163xllhepxo.html

defaultdict(list)
来源：http://www.aibaodan.cn/163xawwucrj.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163dzoqoydx.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163sctekuzb.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163rpoixfrz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163gymnsxvh.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163bybdnihn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163jgykrjff.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163plbjrhht.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163qkstuadi.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163puqtpker.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163uuxllzcb.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zrfwduqd.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163cdjevzbe.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163qrqludfh.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163qaeivais.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163bmxibrzf.html

list(zip(*m))
来源：http://www.aibaodan.cn/163mlnnydbv.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163fzqmgwtx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163yftxaafg.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163illrimsk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163wkjdewte.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163afebxcxc.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163qitrinzq.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163skbjgvjl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ygtenebe.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163dwubdsfu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163idnevoos.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163xjfxnpgt.html

UserId = int
来源：http://www.xuanzx.com/163qvpdxxwq.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xrcacqhs.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163sfkanjfi.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163uzmwiqnb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163eyadfklb.html

[U31] Py：单测
来源：http://www.sxryk.cn/163bibefinm.html

python -m pytest -q
来源：http://www.aibaodan.cn/163pjtlukut.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163waqbbngw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163yraubliz.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163xicueqkm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163rygnnzxz.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163mibalkfr.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163wngzhnyt.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163iqkzecko.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163uuzbfhzg.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163sgndhonp.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ceefwxul.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163aoybgkrw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163otagnyac.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163qumiukji.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163lwzuernh.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163oxkrhwzk.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163wvohwcml.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163cmumctoq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mkasmzmu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163bpkimckn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163qzedvdxz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163attujsun.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163mfxpyoob.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163bskqnzvd.html

namespace App\Http;
来源：http://www.aibaodan.cn/163xlnqyfkz.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163vidhntav.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163awonwsan.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163bwynqdui.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kpefxcwk.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163jftnbwzd.html

?string $name = null
来源：http://www.xuanzx.com/163rcvzrimn.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163mppejikc.html

int|string $id
来源：http://www.xuanzx.com/163tvctyijb.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163bqqzzkms.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163whlxzahe.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163rgxmsiae.html

public readonly string $name
来源：http://www.sxryk.cn/163ekzjayzf.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163lxuorosr.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163lykgxzos.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163xjkgceld.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163rnfkiwpo.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163kckbpqlo.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163jmweymgq.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163qubsbvxi.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163aaumzmpu.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163shkyviui.html

$obj?->method()
来源：http://www.xuanzx.com/163iwpgcslz.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163kfjhqtpz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163tjnoshsc.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163zkyzbzig.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pabxpifk.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163ikyqfdtw.html

"值: {$a}"
来源：http://www.sxryk.cn/163qvvpotbg.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163qkfpqknh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163fgevxwab.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163hzybtorv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ziqgulhi.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163wzzduqha.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163etqsgzoi.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163pctpfpuf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ykrpqslu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163alrfszpp.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163runafmig.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ehlqkvkd.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163nrtlbfer.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163tnwhsmkp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163arvwlfoh.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163aidupkth.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163cmcklifb.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163aseqfutp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163uflppckz.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163njagetyf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ylkazayf.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wtazyzam.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163yfaxjqjn.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163uodxpjmw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163wvvjghmk.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163wnpttnvi.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ebykhgup.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163iwoxpimr.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163wlembuwz.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163rpbzycor.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163mbutnepi.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163bgtzldtc.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163dgpxezsp.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ovlakxvh.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163leyggclw.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163aahmvhug.html

composer require psr/container
来源：http://www.aibaodan.cn/163tuemspxu.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163icscwsts.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163jyixakke.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ixmngkyb.html

composer require twig/twig
来源：http://www.sxryk.cn/163lfygewyl.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163kevcjtwx.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163vwstzisd.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163gtlmcwud.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163eqikfudt.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163rnuzniwh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163nzgjwkvb.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163yekhxbku.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163cndomhqr.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ltwzumdk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163enhvmlhy.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163jdohnwah.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163gfdsgpdo.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163hqzydbgs.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163dcmsrysz.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lpdxjysz.html

a?.b?.c
来源：http://www.aibaodan.cn/163gdzwiynp.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163jnngoldq.html

a ?? b
来源：http://www.aibaodan.cn/163gtjkyojd.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163xdzvdend.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163qvvmmttg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163sospahpk.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163yftvokwq.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163auedozmc.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163xwpovhdm.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ednuoezb.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ohzrgmda.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gywogcjv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163vodojnwk.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163qtewxnzs.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163mdxriuez.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163cgbhzysd.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163xigjqdhj.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163twhbcpbh.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163shlyedpl.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163awljnobq.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163wwfihgjo.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163vxphcvke.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zimsxxhz.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163isczvqjl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fkmusszi.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163qqbyhrwp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163nwijeqfj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163gmneayqk.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163jmohnhnf.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163bksmzcqt.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163uyvqwfaf.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163hzekgold.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163hniqrtkg.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163rmlhpeuz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163sbzmnevh.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ifsyfwze.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163rnazlnwm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163uawjregm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wlcmclki.html

[U105] JS：节流
来源：http://www.sxryk.cn/163tyjapulx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163sbgfwqio.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163vxeakpyd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163epvbldgt.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163qyvhxkhc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163tfmulxsh.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163agjnzdju.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163okiwugtt.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163sfpzfrwa.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163aswalucb.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163lkkiutak.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163dpgnhafz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163akuajavu.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163vgsivdkk.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163rrrnyhgi.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163snsugoxp.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163osnewjoh.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jhlrixlx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163eonyvteu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hagmssdr.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163gnwswerb.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zrumkryp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163fpkgmjvm.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163duxtbvyz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163yqnviihj.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163zzozaikw.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163aatgotjd.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ollypoix.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163rdqakrto.html

npx vite build
来源：http://www.sxryk.cn/163wkrddqdl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163flnxqrjt.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163frpomyps.html

================================================================================
来源：http://www.aibaodan.cn/163iiciezih.html

统计汇总
来源：http://www.sxryk.cn/163imhjcoku.html

================================================================================
来源：http://www.sxryk.cn/163jyrbkerg.html

按语言统计（条）：
来源：http://www.xuanzx.com/163azzrqyen.html

Python ......... 252
来源：http://www.sxryk.cn/163ymqynjrf.html

PHP ............ 252
来源：http://www.aibaodan.cn/163dwighttw.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163yqjppwwo.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163fdsjfmwc.html

Java ........... 212
来源：http://www.xuanzx.com/163khprgjtd.html

Go ............. 212
来源：http://www.xuanzx.com/163aoopgxoc.html

Ruby ........... 212
来源：http://www.xuanzx.com/163kuklzfai.html

C# ............. 212
来源：http://www.xuanzx.com/163otkyqmbc.html

C .............. 30
来源：http://www.sxryk.cn/163tdwplmvk.html

C++ ............ 30
来源：http://www.xuanzx.com/163kthdegin.html

SQL ............ 90
来源：http://www.aibaodan.cn/163xxqkwjem.html

Bash ........... 80
来源：http://www.xuanzx.com/163zyxfmvlb.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163cmustflv.html

Swift .......... 15
来源：http://www.xuanzx.com/163sxylupth.html

Lua ............ 10
来源：http://www.sxryk.cn/163hjcqqwgw.html

Perl ........... 10
来源：http://www.xuanzx.com/163ywmbcxmo.html

Scala .......... 10
来源：http://www.aibaodan.cn/163furxfsld.html

------------------------------------
来源：http://www.aibaodan.cn/163aomzhzkd.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163xwrrvswj.html

按章节统计：
来源：http://www.sxryk.cn/163tmedacfi.html


<!-- 参考信息 -->