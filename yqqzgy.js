外链999!wailian999！

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163bcxsokbj.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163boczwexo.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163kspijgho.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163liwkjmqz.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163tpqfpqya.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163txwllqys.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163kslcudmk.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163asydineo.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163tpuajxzd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163eykoyodg.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163iqwrmhat.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163gnwryfsb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163kqnriufl.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163vfrgccdv.html

println("Hello")
来源：http://www.aibaodan.cn/163hvqaqpex.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ybsiiqaw.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163hpcjtwet.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163jdludtcl.html

s"值: $b"
来源：http://www.sxryk.cn/163gqfmlktb.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163xgghbwkg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163nlkufgfj.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163fxroycyd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163zjtnveju.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qmqxsmcd.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163pdyxpnsl.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163xibovybq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163hrswvadf.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163xsmsejxu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163agxtiuxo.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163yovffoqg.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xpjzvmtl.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163zuvpckxf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163nurrnbco.html

================================================================================
来源：http://www.xuanzx.com/163oqbyxsgd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xdgsmaey.html

================================================================================
来源：http://www.aibaodan.cn/163pennyxpn.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163xuhclnok.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163caodlnjl.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ocsrtacs.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163omcklvsu.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163wmytnztl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163mhtwnrhd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163cebosnyf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163gdlirfww.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163jnpcxcos.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163frszarim.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cwfcljal.html

{**a, **b}
来源：http://www.aibaodan.cn/163xbznaoiu.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163xvekzboa.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163hpkicqyi.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163rvgrtint.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163kaiabbtm.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163iwxjrial.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ogbjxulc.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163evbgiqek.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163bqhtppej.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163wdmcpjbu.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ztwcockm.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163tcfubrco.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163iyuvcvas.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163plkjxxqo.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163tcrlnkmz.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mmeiygde.html

defaultdict(list)
来源：http://www.aibaodan.cn/163xezhukgm.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163fcxghpsu.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163txljmhda.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163necdvapc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163wpcfjnya.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163szpvlxan.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163xptvkuzb.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163pqxcaswo.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163brkxxjlg.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163arjlqswl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163pgxslovg.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163amlhvgxq.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163tsrkoqai.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163eaqhrvhw.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163teiqayuc.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ujuiuzok.html

list(zip(*m))
来源：http://www.aibaodan.cn/163rjqcrzmy.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163zzegtpdm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163cddumnqp.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163snqcvvle.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163upsrxzqa.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163gintixlz.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zryzcxra.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163nizsgkkl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163yarngrqp.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163tjfbgcvx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163cmsaofmo.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163xdahyhcp.html

UserId = int
来源：http://www.sxryk.cn/163qwzrthmp.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ugbnfltd.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163wtqwtkgw.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zrkqzhhh.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163kpovatmp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163davfrkdf.html

python -m pytest -q
来源：http://www.xuanzx.com/163snfhgbyk.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163nhngwasd.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163mcxobjjh.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163bkavyxwj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163qxmrlzjv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163cmboyvcl.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163qwjyryjk.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ctvqajkv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163limyjgya.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163jkeppede.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163acyuyxpu.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163nufbwzpb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163siojcyjc.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163retjscbs.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163uejvkumv.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ylfmfjbm.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163hznjqskv.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163crckzzob.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163tgtrytej.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163gpefgjrg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ejktbcwf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163obpyzqzu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163onrzgpbr.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163kmvolzrh.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gaxizgmi.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163vngyqrvr.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163qvuoxjbk.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163lptxadir.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163enicffpl.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163qvdazeyj.html

?string $name = null
来源：http://www.sxryk.cn/163mstfgnqk.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163mpcrcepa.html

int|string $id
来源：http://www.xuanzx.com/163yrmdgofb.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163kyvwnamh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163yjqajotw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ndzcwpht.html

public readonly string $name
来源：http://www.aibaodan.cn/163zrwrepkj.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163fkzvpmkh.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163bnxpksvs.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163vgvdwvak.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163xqwcqqqh.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ydbqowqa.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163mscxepuy.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163bfzhyjjn.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163frfejyfa.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163baiylhzj.html

$obj?->method()
来源：http://www.aibaodan.cn/163ogytyzky.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163lhottchv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163juknkmhk.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163nldgufzd.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nicbbaax.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163pmfxaoxr.html

"值: {$a}"
来源：http://www.sxryk.cn/163ylyrtzps.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163yyjzptrb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163lncgycou.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163drftudgc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163stuslhrv.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163jcdfojev.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163juvuxxof.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163gfxvezfs.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wmyarfim.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163lcrosgul.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163gdyctwjq.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163fudgrjdw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163orhpvqes.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163lhryfbbw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163csphmozx.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163sylmebjr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163nitxraym.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163cmrzfjfn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163tdiytzhe.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163wygpwluy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163jqvoiazh.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163rmamngoo.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163onkotonh.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163cduhbbds.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163yyfwkmie.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163xtwqbcmw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163scfscokq.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163rvdhomub.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163ctkvntov.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163vwycwsyq.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163dtelpzhh.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163epvpbamh.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163khfejdyz.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163bhtvbkry.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163oldhbezr.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163jrfydubk.html

composer require psr/container
来源：http://www.sxryk.cn/163wzggudws.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163bdtrhwlu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163tiegmakt.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163zfiimydg.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zqoaltqv.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163xvtgqztd.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163rpjjeebu.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163kxmmmihg.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ycflkdpg.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163zrjqdndg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163pljxtoyr.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163nkxhchgw.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163rfwextnk.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163whlkvkcn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163dozhnpak.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163crqpenff.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163tpfcdroi.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163thivankf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163gxzusryb.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163zgeypzuz.html

a?.b?.c
来源：http://www.xuanzx.com/163mqdiizcf.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163fmkihoha.html

a ?? b
来源：http://www.sxryk.cn/163ouncjvqf.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163tnsmsrqo.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163fqtiaslk.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163dolmsczt.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163fonoeiuw.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163rawgxaty.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163fobhjhwn.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163hiwkmeuz.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qejcbgdr.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163iplfymam.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ynuwnfvw.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163inzpdwxl.html

structuredClone(obj)
来源：http://www.sxryk.cn/163jzzisqwq.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163atwawwtp.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163uhpvmpix.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163sdermmow.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163jzatwonx.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163tmafvtyb.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163rkazytgf.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ndfucwto.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gwyprucw.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163dnrxzovy.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nznubvyo.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jkzpkqsj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163tnuyghps.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163mfydytfw.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163kmcznspl.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163gncsuskl.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bxhhrlyh.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163ggqattea.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163nxuflsop.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163bulqfkip.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163sqclhpnn.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163emyqnswt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163zwpaengg.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163nkqvexar.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fsmwnjsi.html

[U105] JS：节流
来源：http://www.sxryk.cn/163hnhixdkj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163nroamgdp.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163lxhfwxrn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163gfgmqtde.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163qbuiqiju.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163jzidzadf.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163adiainbg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163kktlwabj.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163kbjrclem.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xzrairga.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163nwdwrxrx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163cdyocguw.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163uxemtssy.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163owqeohqq.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ariglcvn.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163hzuvrucs.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ndzxlvkv.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ycboxkma.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163vtllirkj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xtulcisq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163fwrzzkzr.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163wdgoboxs.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163iywozeky.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163mputriko.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163sbwkljyc.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ijcvqdrm.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163nayazmhp.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163jhjuiebx.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ffkdipqn.html

npx vite build
来源：http://www.sxryk.cn/163kzajwejq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163kqrthzpd.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163finszspm.html

================================================================================
来源：http://www.aibaodan.cn/163topswvns.html

统计汇总
来源：http://www.aibaodan.cn/163aenjbujx.html

================================================================================
来源：http://www.xuanzx.com/163szziawxw.html

按语言统计（条）：
来源：http://www.sxryk.cn/163emohxmmz.html

Python ......... 252
来源：http://www.aibaodan.cn/163qqjxypcl.html

PHP ............ 252
来源：http://www.sxryk.cn/163lbdwnpey.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163jhxhapwd.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163fyucjqlz.html

Java ........... 212
来源：http://www.aibaodan.cn/163kuenewbx.html

Go ............. 212
来源：http://www.aibaodan.cn/163zfuubstq.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jgofhjul.html

C# ............. 212
来源：http://www.aibaodan.cn/163lwqpqjjy.html

C .............. 30
来源：http://www.sxryk.cn/163cypgacrp.html

C++ ............ 30
来源：http://www.aibaodan.cn/163xolyqhvx.html

SQL ............ 90
来源：http://www.xuanzx.com/163rckproit.html

Bash ........... 80
来源：http://www.aibaodan.cn/163gafyflva.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163rgusfmmu.html

Swift .......... 15
来源：http://www.sxryk.cn/163mtgwarcz.html

Lua ............ 10
来源：http://www.xuanzx.com/163koafhyfl.html

Perl ........... 10
来源：http://www.sxryk.cn/163pyadccea.html

Scala .......... 10
来源：http://www.aibaodan.cn/163wlnjcvvf.html

------------------------------------
来源：http://www.aibaodan.cn/163oeuojssg.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163sczraydv.html

按章节统计：
来源：http://www.xuanzx.com/163mvxxpvfc.html


<!-- 参考信息 -->