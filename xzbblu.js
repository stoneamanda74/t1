外链999!wailian999！

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163dgxjdpyv.html

"a" .. "b"
来源：http://www.xuanzx.com/163qkadyinr.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163sjchkdzp.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163fcujoejg.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163oblhthjz.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163brhuprlv.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163czbvpmtk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163bhzyacrz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163gymxhdqs.html

print "Hello\n";
来源：http://www.xuanzx.com/163ourvtgth.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163todgqqcb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163jvtrbhvk.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163vrirpjog.html

"值: $a"
来源：http://www.sxryk.cn/163gjvjfdjp.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163neimahrf.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163oxsrubds.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163jdtvpofb.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163cynitkcm.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163viomdfvy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xtsgtwgg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163fueflfei.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163feubijww.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163vpashisg.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163egbrgwzn.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163awjqouro.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163fmyghtuj.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163mcsmjdsg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163szfkxged.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163otqdxrxd.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163xsbarcbt.html

println("Hello")
来源：http://www.aibaodan.cn/163qehabjto.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163bwnwcpgg.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163atyvesek.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163arvdxsyd.html

s"值: $b"
来源：http://www.aibaodan.cn/163vvvtaceb.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zidvwxjb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163xidtioyd.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163deiwgmxt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163mibofcvm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ejkrmrvb.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dzvwxxib.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163gciaoyie.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163icvgkndw.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163lwvmejou.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163gyfzddta.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163zbcdteua.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jxrozxxr.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163fwewgfrt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163acxdcvtg.html

================================================================================
来源：http://www.sxryk.cn/163zxlvrhiq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mwbjvnbb.html

================================================================================
来源：http://www.aibaodan.cn/163esougdae.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163mbhkkxla.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163clukszbb.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163cxlpyjxy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163yhjykpne.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163mugfgwaq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163xjfkqtib.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163oualxerq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163jhirjdiv.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ebqjkpwl.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lyrgxlfs.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163puebzybk.html

{**a, **b}
来源：http://www.sxryk.cn/163yaiuibhx.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163pvkkfxws.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163pijohreu.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163unrmzjgq.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163vjrwegpj.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163omwzqfyi.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163wxvxelnb.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163usywrxbn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163udghjdvo.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163fvpaucvy.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163xzebjqnf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163lvnhwiit.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163prsbosph.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163wqvwscow.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163tunadnoz.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163pjzymcjn.html

defaultdict(list)
来源：http://www.sxryk.cn/163lmeiqfuv.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163iplanhqg.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163pjtuhdqm.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163yauswyax.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ygolcirm.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xnarnqzd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163rdgnhrtw.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163kvimahxh.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163fisptrqd.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163fpuezvpn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163pszimpve.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163dlmkpeoi.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163glqfuhdb.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163eilhueed.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163lfclusav.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163bijqfmso.html

list(zip(*m))
来源：http://www.xuanzx.com/163jucwfigk.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163gihxrbqu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163vattdxgd.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163kbutducg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163vfdffvoc.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163btvkadll.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nljloica.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163mejhbeeh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163jmugryye.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163wfayiqkc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163oqoddbqw.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163cpfcgdad.html

UserId = int
来源：http://www.aibaodan.cn/163ygysultr.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163olkbxfdh.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ljcmvfvw.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163qunxijyb.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163agjozcil.html

[U31] Py：单测
来源：http://www.sxryk.cn/163nmytadbn.html

python -m pytest -q
来源：http://www.sxryk.cn/163hsnnpztg.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163neafidkg.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163pwdidvfh.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163joaqjoog.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163mrffgylv.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163icqfcbpv.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163ecjcnfeo.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163hwpcwsaa.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163sqvmxmla.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163txzdpwfd.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163evhozxpp.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163zuxiwasl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163iswlxwuj.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163qvvjlgcu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163dpxbewre.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163mgnryfpp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163wnmfdbqe.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163qctcgpsq.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ffeiddqp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163kyyycwtj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lgccrvmp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163bfvrrnfi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163vhnaavsg.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163bfzifbqu.html

namespace App\Http;
来源：http://www.sxryk.cn/163dzyionfu.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163hhljaibo.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163dczcnhrk.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163isctwalb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yzsqxzeg.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163nzdcqcmc.html

?string $name = null
来源：http://www.xuanzx.com/163vgizbhhu.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163dzqpoamn.html

int|string $id
来源：http://www.sxryk.cn/163awthpxmw.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163zipgvfvy.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163phrlmiev.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163gfaimvya.html

public readonly string $name
来源：http://www.sxryk.cn/163cqswqkzn.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163tkfgohxd.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163hdqxyovi.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163fkdvviis.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163jypsbhfc.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163xmevhlcq.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163thpoadqq.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163yvlxkmze.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163yzwumqpi.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163qegiffgk.html

$obj?->method()
来源：http://www.sxryk.cn/163pbwyxixk.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163jtwfsnwt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ecpqnkyg.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163jxiszmik.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163anboeakj.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163eljyqvor.html

"值: {$a}"
来源：http://www.xuanzx.com/163efnlurxq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jnmzpkdc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163zbvfritt.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163ggngdjgk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cozaeqim.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163jdbchwgq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163hgmrzczb.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163xaaiwvlw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163otvfolpc.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163pvnipidb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163rbbnoama.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163gnounxxd.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163kfqojfcb.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163krpkuveb.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163nlitvdbr.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163njpgqzkh.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163hsuynjfz.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163vrcyuute.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163hulcaxpb.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163rivryojs.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ursydslr.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163nyjytgkm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163vmdawior.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163oljnoskg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163gqcnjzby.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163sgezkpwm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163fozpqqvq.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163mavbibpe.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163hbyaxlyi.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163wivyryll.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163mslufkmn.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163pqnrixui.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163qcuzgbud.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163qeyvirzw.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163twebwsfb.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163nomvirak.html

composer require psr/container
来源：http://www.sxryk.cn/163ecniacnp.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163pyfkyzap.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163kzpupxxr.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163wmxjafrj.html

composer require twig/twig
来源：http://www.aibaodan.cn/163lfiwyizv.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163sjqxsepn.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163fpepfznh.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163rhhhhgzy.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163fclglvhh.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163xnanlvqt.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163vpllvegz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163wjbmaiod.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163kvlisevw.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163sxjnkunl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163qqgbztos.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163zetvrjew.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163xrzbgrrm.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163plubikvf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163lhjmmjrw.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163sbqmoujl.html

a?.b?.c
来源：http://www.sxryk.cn/163hoijhknz.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163iqwwiwrm.html

a ?? b
来源：http://www.xuanzx.com/163japmfpig.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163kpgwioiv.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163nzawmcrs.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163rnmwmuge.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163fcirjzir.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163nsvqwizg.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163vgxextdb.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163sttdzfrj.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vrcqfiwa.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163nmnbkdtw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163alzmtsif.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163mebkweyp.html

structuredClone(obj)
来源：http://www.xuanzx.com/163vpbefllk.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163zkurekud.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163neabetmc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163jrabhjnd.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163cnnhgubb.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163lagtvpyv.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163knqzzcdh.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163rnjtqjhg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cbicramk.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163tjbhhqxo.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xpgowgjl.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163wzcnflih.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163lmmfozdt.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163vuoksbgt.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163zxyxuxuk.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163lhspjlbj.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163potfzzpb.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ygbwgvps.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163jhzphiyt.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163ktgoqdlc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163xqbryfnd.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163xsmweeoa.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163izyrtbcp.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163wduguzye.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163icdiojpn.html

[U105] JS：节流
来源：http://www.sxryk.cn/163luvcilrh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163dtirpygj.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163curgdquf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163jcktbfht.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163smaixtyg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163cszofeqj.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163jztvusep.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163wiojpeyt.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ifadpmkw.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jitotbju.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163izfrrbiu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163qhxmbxmq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163dyujykau.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163eswtpcfb.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163oyjriort.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163jnbkrtrs.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163vkiwporq.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rposzcbc.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163npppkzoh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qtkumasx.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ebbrwiib.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163lbjbtjpf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163urkhvcku.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163styyshdz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163fhuhbvuf.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163aweoqpyv.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bitmzvdq.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163rknlhsjt.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163trzzqahl.html

npx vite build
来源：http://www.sxryk.cn/163fgiryhlq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163avemwdec.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163hbkjrxyr.html

================================================================================
来源：http://www.xuanzx.com/163byfpjybk.html

统计汇总
来源：http://www.aibaodan.cn/163otbxqmfy.html

================================================================================
来源：http://www.aibaodan.cn/163ppcvzrxy.html

按语言统计（条）：
来源：http://www.sxryk.cn/163byovbgqa.html

Python ......... 252
来源：http://www.xuanzx.com/163lhwdnakf.html

PHP ............ 252
来源：http://www.sxryk.cn/163xkfgpjao.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163vltbkqxj.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163krcsmcjo.html


<!-- 参考信息 -->