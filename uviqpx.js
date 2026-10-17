外链999!wailian999！

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163dtvutqhp.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163kvhfshid.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163wujwzjzw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163pxdnwljw.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163illwiclr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163oqjengyt.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163zgedkpgq.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163byjvoitz.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163mcsxvocn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163aqlqsigc.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163rmgyguuh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rxkdkrsi.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163urdhnzhl.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163yzgqbaeh.html

println("Hello")
来源：http://www.xuanzx.com/163fdphstro.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163prbqrfst.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163zoyviczf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zdampnys.html

s"值: $b"
来源：http://www.sxryk.cn/163thaewbik.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163saudtrke.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163pwzgjjbh.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ofbbtwqg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ajwwcloz.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163imjssghg.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163wtpvosrk.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163vccaeubx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163fyecqifs.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163flnogxll.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wukrzcik.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163kcvttajj.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163phschvbj.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163jtqamvnc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163fbgsvvut.html

================================================================================
来源：http://www.aibaodan.cn/163fqqobmek.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163efztrebt.html

================================================================================
来源：http://www.xuanzx.com/163zztnvabs.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163qcymhdhy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xjqvjigy.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163awhqkoss.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vgweojsy.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jfxtxahj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163cescrncn.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163guoemyjw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163aocnsoir.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163nbnoptam.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mwypiise.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163eeyxodxd.html

{**a, **b}
来源：http://www.sxryk.cn/163cfgsyuiu.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163xvxbxrhv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163amgwkcbu.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ecfegfsr.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163alsyzfvd.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163kxiirbhb.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zkxmaeqk.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163dkloypoe.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ugzwykwi.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163nicliqwf.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163xacdpudd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163sazinwio.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163spzmiukz.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163zemmbeya.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163hcntewgu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163cnfmfapk.html

defaultdict(list)
来源：http://www.sxryk.cn/163sxragelb.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163povmxijn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ltvfarsj.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163wektipdg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xjekqdmb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163hckasppw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163cpfwnbsx.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zachgbcw.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163firevlyd.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ifmqabcl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163tfqaxkna.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163dztqdsao.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163hrwtqugs.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163oexfnasa.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163xjnfrine.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163tvyyhbna.html

list(zip(*m))
来源：http://www.sxryk.cn/163bmublped.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163bkpdqgyl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163nmgoshik.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ilelsfxb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163thpsudpe.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163mgbqnexz.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163bkobbdck.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163tdwdjmvb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163vekotbrc.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163evscxaby.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163rxrruymv.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163hvorfefx.html

UserId = int
来源：http://www.xuanzx.com/163twbxtyzt.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163esuqxefc.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163wfymkjgu.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163qwdkwfhh.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163kcgmqrqy.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163wqvnqqpd.html

python -m pytest -q
来源：http://www.sxryk.cn/163sadsmdly.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163vanmqqab.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163tyscrgfn.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ptgoebfk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163jamfjpvt.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163qwoiluar.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163uegyyajc.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163taxxrvjt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163gdwctgxf.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163aofecnne.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163fwmicets.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163zeosyogy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163sslqeufz.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163bfdwvjhi.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163bjjptecl.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163rycfgvjj.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163uemqgtaj.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163krenzubr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163csyoaqvc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163whzthaxi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163xcgrrhhb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163bedwcvtp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163tfgacbrl.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163mrljhwys.html

namespace App\Http;
来源：http://www.sxryk.cn/163gpyvdcwt.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163bnzmjglj.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163gqoofvdq.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163diofiidp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bcypujzq.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163xbfisyed.html

?string $name = null
来源：http://www.sxryk.cn/163jtoffwrj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163rkwkpvwp.html

int|string $id
来源：http://www.xuanzx.com/163zxzfgial.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163nadlnvhb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163cvauuprq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163cvdfetiv.html

public readonly string $name
来源：http://www.aibaodan.cn/163jzguecso.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ednvxyvh.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163nfyssazj.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163mwbyoreq.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163jwlfaolk.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163tgvphnto.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163kmhddmtp.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163hpajniqn.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163zqyznqal.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163knznelui.html

$obj?->method()
来源：http://www.sxryk.cn/163hogqqqxu.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163pgffneyj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163ivqflipl.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163unhegpsj.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vypmuwqb.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163nhaidmjv.html

"值: {$a}"
来源：http://www.sxryk.cn/163rpymowre.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163znmhdwiy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163xdhneqfq.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163embjeaeh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qafpvjdd.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163tuirmgbt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zrkvrdbd.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163cblnejrd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bswhsrar.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163cqlshiaj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163esxqndtr.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163rmxsuzmi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163uwqjebyi.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163qevcsbig.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163lymockiu.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163oqnmewio.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163zsiniyhc.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163gvpmezyv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163jkxjpkym.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163nnsfsqre.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163oebjeefe.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163fiidrrhu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163rbuvhdsf.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163qiedqezy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163jiprrnww.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163gjhomotu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163bnzlhnxk.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163cavwxwei.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163hanxnfty.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163xwevboea.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163oxcglsoi.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163znkmvrek.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163hbrleprx.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163chkbbydk.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163rjvrrtzw.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163gukroiof.html

composer require psr/container
来源：http://www.xuanzx.com/163fiavisdx.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163nbvrodii.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163muxwmebv.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163uuduzwno.html

composer require twig/twig
来源：http://www.aibaodan.cn/163jcwdrzkn.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163qkfzfitu.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163zsxvhdsz.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163moyrlsot.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163fcthyvhf.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163haflcjnh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163tllxdyis.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163xydovafv.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163vcspxnfx.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163acebfvyw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163sorywqdi.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163pxqoyobs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163jkjuuvdy.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163nzhsetdm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163vfdvqvrb.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163srouvivq.html

a?.b?.c
来源：http://www.xuanzx.com/163hjqvdlfz.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163crfnaovx.html

a ?? b
来源：http://www.sxryk.cn/163lwpwxabl.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163poqtngrt.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163yiqkteom.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163gneslxyl.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163nfhbtbhs.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163aycbaodw.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163wbvainsd.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163sbubyggh.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163biecqgim.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163zfcxoedh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163jgqcltqp.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163dhqwekop.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ivkmvjnu.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163cdssosji.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163cthdycox.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163vnpawpwa.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163vlgegwiv.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163kusanfrw.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163zoxntvdy.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163spsbvirr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fucyfbpx.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163gunphikz.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uyfuzcuj.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163wgezxsap.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163mudrnflw.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rqhhyxjg.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163gfzymdxw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163sqwktknn.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163kptyzscb.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163fbznxqrh.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163iknovgxq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163gzbkzjpq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163apkcyegz.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163oxdarirb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163aqmkypuu.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163bnndtpgl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yjtqzeyi.html

[U105] JS：节流
来源：http://www.xuanzx.com/163xwldzgow.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163sibegmfw.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163vaxekkew.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163hpthsnuw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163fmeoqsnl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163wautcskm.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163vopoghah.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dbwcxbmi.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163mgyaoyhd.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163imuumdjb.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ymvvtuuk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163cljalzus.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163rfvozehq.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163isggqsyj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163yxitybxb.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163dzvnadak.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163abgbpgoa.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ecmchnuj.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163kgsbyuzv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zqgghztw.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163igihxceq.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163robsqsdz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163uocgeqfx.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163xjaujcip.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163qakkcfyi.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163mbqnmphi.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163tzfzdnob.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ajdrrbqd.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163drnbohjw.html

npx vite build
来源：http://www.aibaodan.cn/163rixuaniz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163jvnijkrx.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163isekuxnb.html

================================================================================
来源：http://www.sxryk.cn/163ehwyjwps.html

统计汇总
来源：http://www.sxryk.cn/163xcaeiqln.html

================================================================================
来源：http://www.aibaodan.cn/163cvbndyma.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163obczayaa.html

Python ......... 252
来源：http://www.xuanzx.com/163kozfbxfx.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pdbelorh.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163xoyqyqzc.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163foinexlt.html

Java ........... 212
来源：http://www.aibaodan.cn/163nymagqfx.html

Go ............. 212
来源：http://www.xuanzx.com/163qgepsjry.html

Ruby ........... 212
来源：http://www.sxryk.cn/163oxzkdllo.html

C# ............. 212
来源：http://www.sxryk.cn/163bghnsnuy.html

C .............. 30
来源：http://www.aibaodan.cn/163moxexerw.html

C++ ............ 30
来源：http://www.xuanzx.com/163qxlvotpd.html

SQL ............ 90
来源：http://www.xuanzx.com/163vdpnifsz.html

Bash ........... 80
来源：http://www.xuanzx.com/163ehsylyjj.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163aqjmsfrv.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qdcyjzdo.html

Lua ............ 10
来源：http://www.aibaodan.cn/163fobrbqfm.html

Perl ........... 10
来源：http://www.sxryk.cn/163pvolndfo.html

Scala .......... 10
来源：http://www.sxryk.cn/163ncvmvdnc.html

------------------------------------
来源：http://www.sxryk.cn/163clfpwufc.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163rnumxsgf.html

按章节统计：
来源：http://www.aibaodan.cn/163dectcesw.html


<!-- 参考信息 -->