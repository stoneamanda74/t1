外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ybqzpzjs.html

"值: $a"
来源：http://www.aibaodan.cn/163iqfgaues.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dxjhhrhn.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163pfrkqviz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163cwbeqjhh.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163lpxieanq.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163egcxnyqb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163zrdsxshu.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163unvhbxdx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163wfxmrvxa.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163qzybrknq.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163aqpxvjlr.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163nfbwshyd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163tvehzayq.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163bykazsdc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163lltycezs.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163jbjwfiey.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163cnqmavay.html

println("Hello")
来源：http://www.sxryk.cn/163ooetmgyc.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163aglurzoi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xcmhnitm.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163biybness.html

s"值: $b"
来源：http://www.xuanzx.com/163ezakmuvq.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163rqosqkdh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163flrsutcq.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163hpgagaqr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163gyfucigj.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163swyvkndl.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163byhnvcul.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163xymvzbvh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163qfyezadp.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163gygorqyj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163lnebfuxi.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ibfltfsl.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163beevdeps.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mrcvjsqq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163hhennnfk.html

================================================================================
来源：http://www.xuanzx.com/163xttmxdit.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lmofhzeg.html

================================================================================
来源：http://www.aibaodan.cn/163wkphqozo.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163gizegavl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163sjwgnfdx.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qzduxigc.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163oksupvej.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163mcesdlxt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163zawlmjzp.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163orrnebwz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163yiyzvwti.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163naqfcmjt.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lmyfqoci.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163juajptuv.html

{**a, **b}
来源：http://www.sxryk.cn/163ceegfmdc.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163mkybxxki.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163hzvufbal.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163lfctybai.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163bekqnvjg.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163monsdbky.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163cxynuugz.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163auxfbvvg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163dhjxvosd.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163cljsapqo.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ygzvdfmg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ynvtxwim.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163qwtzhzeb.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163srfsmwct.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163jxygxaor.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163kpglwrkp.html

defaultdict(list)
来源：http://www.xuanzx.com/163eiguebqc.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163vexchhym.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ygqjqfeq.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163afauxutm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ppmymxga.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163hiyoywcw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163aplxtxyi.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zkomhfhh.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163axrpmbtn.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163yyzabfop.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163dmqwdrfv.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163lnaqbksz.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163fjswlxzx.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ibvvzeeo.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163kadawdks.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163wujevkjs.html

list(zip(*m))
来源：http://www.aibaodan.cn/163drnyuuqi.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163mhgzulac.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163xbqqnaqd.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163zjyljvij.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163guwapucy.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163popnvjtr.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163tgceloha.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163rgkwmrix.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lakgnjxv.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163sqvflfqc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163abekiryw.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163rlozifnf.html

UserId = int
来源：http://www.aibaodan.cn/163ybrqrttj.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163owglxnxv.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163hgvnpzfk.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163uukcrmkn.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163vteyrxan.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vurdsdsz.html

python -m pytest -q
来源：http://www.xuanzx.com/163gurqxhhc.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163mksgoidw.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163jfujoznh.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163yxedrtgl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163lrwfgrga.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163eeoiivvo.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163sifbijkw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ybwqlwvd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163qipjbgij.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163nhwlpydn.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163omgaicft.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163jfvenvad.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ochnboya.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ayvkhkyn.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163zrqbgecm.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163uodnuppw.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163mobauadc.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163meqlrwlv.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163iyohnoho.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163zmneefll.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163lxbxlple.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163jlzpsfuc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163tuxgyeto.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163mngofdlb.html

namespace App\Http;
来源：http://www.xuanzx.com/163yejucyye.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163odzwhcmu.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163mubuzhxl.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163tktwubaz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ywcfxggg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163kwvfdjkb.html

?string $name = null
来源：http://www.sxryk.cn/163jlgdvqqn.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163xazbzcrq.html

int|string $id
来源：http://www.aibaodan.cn/163iyerdgnc.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163hbiqmqel.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163myyevgqq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ufsqjisg.html

public readonly string $name
来源：http://www.aibaodan.cn/163mrgguzyi.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163lptsnjgo.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163yfxfgeks.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163qumpwegd.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163itozstue.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163tnlfhvfv.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163pnebdsdk.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163xodvgzof.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163qhzxdupw.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163hrjuxjby.html

$obj?->method()
来源：http://www.aibaodan.cn/163vvrfysfl.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163bmewkbmj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163rznebwgz.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163effuntcb.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wmynstlq.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163hszozvcj.html

"值: {$a}"
来源：http://www.xuanzx.com/163nkdzzcja.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163yyuedpsr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163ytidxjdm.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163jfeotvom.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zngiwrfa.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163vqobrqbh.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163omiffdix.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163vqbkulhq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wgnovbps.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163asopmact.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163sscgattp.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163fycrulqq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163bwqpuyvv.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163rpbhazyc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163cwteiwlq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163hljedibe.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163dviouvbb.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163yhzekamj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163nxueqfxj.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163havrhaor.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163hzydxpkt.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dejeoawz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163hfwrqimn.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163mntnnlhk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163idjkneep.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163fwbxpllk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163uooseqau.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163kxkhubjo.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163sunajmpl.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163awznkzxd.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163lkzpmnmy.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163qqfjmizn.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163lmqrzeeo.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163laijkuwl.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163nmjdhkqk.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163sppnvgjq.html

composer require psr/container
来源：http://www.xuanzx.com/163eszzzffc.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163apumguht.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163rizllmwj.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163mjeaqztp.html

composer require twig/twig
来源：http://www.xuanzx.com/163devkwanh.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163grpmvyjo.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163whlpupbb.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163rqixdise.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163epjekyen.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163qojrkadb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ejuzlczy.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163eqtbpcso.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163elaqjzor.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163eeluryor.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163lbdwxlxe.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163fhulgvqf.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163eykuyuwu.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163txnvhdju.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163qfodfehm.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163pkkqorax.html

a?.b?.c
来源：http://www.xuanzx.com/163nlvvjuoy.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163foyxebkh.html

a ?? b
来源：http://www.sxryk.cn/163neikjajh.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ayuvtutn.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163tfspwnka.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163amkemowk.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163rvwarvth.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163pwlyxaop.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163zzkdxhbh.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ijxbutyt.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cmhbjmrj.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163wpndgtbp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163wiftykdm.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163zvpewphi.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163bgjyodcc.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163twucwwqg.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ungmchva.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163gjspsfto.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163nyiudvzq.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163vfxzvoyk.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163fusbohln.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163vgxakxfu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ifiurovd.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163gftsdbtn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163opczqszl.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163bpjzgckx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163fyzwdpwf.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163wldabghp.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zppkckap.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163axtycpfo.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163vvjfzwqt.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163sldrsqpu.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163hzwxfjng.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163mknbinjg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163zkapmnpa.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hfvewtou.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163apttrqaj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163fmgyqrgx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ghxvctmd.html

[U105] JS：节流
来源：http://www.xuanzx.com/163weboxzxs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163tdcclsln.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163dfbleqyc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ixkdfyqm.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kwxcqmnc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163bxetrdam.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163nqrnoehx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163tngewbpt.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ghdcrzio.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lsypxmeg.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163fyjcmsfw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163kqlthqzx.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163sywirefm.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xuofitdj.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163llqcoxto.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163aruopkhv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ccaszjqp.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uytvjynl.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163aasbawif.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mnfeqxmd.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163lnxgnifw.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ejracqes.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163tfunvexh.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163hrxwnjrv.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163xvotdvgy.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163cnmttzej.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163xmttkafq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163gwjweedd.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ukqsowoa.html

npx vite build
来源：http://www.xuanzx.com/163peocusxi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163nlygrpqo.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163wotqvkdb.html

================================================================================
来源：http://www.sxryk.cn/163qtxxhhdu.html

统计汇总
来源：http://www.aibaodan.cn/163poauvxcs.html

================================================================================
来源：http://www.xuanzx.com/163wkjpaxgc.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163lhapireb.html

Python ......... 252
来源：http://www.sxryk.cn/163fpxlgjpi.html

PHP ............ 252
来源：http://www.aibaodan.cn/163nfnsovpp.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163xjmwureb.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163fuapdlca.html

Java ........... 212
来源：http://www.sxryk.cn/163hunogcqz.html

Go ............. 212
来源：http://www.xuanzx.com/163crvzdjzc.html

Ruby ........... 212
来源：http://www.xuanzx.com/163fborbusm.html

C# ............. 212
来源：http://www.aibaodan.cn/163bojaqqhm.html

C .............. 30
来源：http://www.aibaodan.cn/163xyybvzzg.html

C++ ............ 30
来源：http://www.aibaodan.cn/163jrsdcheb.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ydmzkmps.html

Bash ........... 80
来源：http://www.xuanzx.com/163sdahihsy.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163oakitisx.html

Swift .......... 15
来源：http://www.sxryk.cn/163uauaccmm.html

Lua ............ 10
来源：http://www.xuanzx.com/163ldfzahis.html

Perl ........... 10
来源：http://www.aibaodan.cn/163gmkunrje.html


<!-- 参考信息 -->