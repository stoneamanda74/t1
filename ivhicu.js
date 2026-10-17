外链999!wailian999！

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ysoxhbgx.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163yscvjrgw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163vkibcbca.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163cypdtudj.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163evjnimvt.html

print "Hello\n";
来源：http://www.sxryk.cn/163dgudnqus.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163xhvydcuy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163xbjuclso.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xmndjqdh.html

"值: $a"
来源：http://www.aibaodan.cn/163vffuwvou.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163wigcygsp.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163embwmzna.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163yzzebbul.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fdawxsnn.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163iiunkrku.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163lkavgzdt.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163kzfpxsyq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163lruakpcv.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163lxlngtxq.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163jjckeewj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ljdvjqko.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163cuqeqjqv.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163uonauqtp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hagklnwz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163igecfwpj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xgodfvzv.html

println("Hello")
来源：http://www.aibaodan.cn/163rrwrqzlg.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163bpwekffi.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163mtkzyonr.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wpzrlrun.html

s"值: $b"
来源：http://www.sxryk.cn/163aftwiclj.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kevkpxpp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163uxahltir.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163dxesydmf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163mpzszrlc.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bttqibjr.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163acrckhdq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163zclretjz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163gsvlqpmg.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163fyaojiiw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163cnfznaak.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163fuxuujxw.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163rexuwiwk.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163cxdituyr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163fzxqopmt.html

================================================================================
来源：http://www.xuanzx.com/163ajvmccwg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163tkellsag.html

================================================================================
来源：http://www.xuanzx.com/163ctwyiaxh.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163jxxpkdoc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163uxbwdpdb.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163xcosnuqt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163gynnmuyu.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163jogjrgke.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163boebelck.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163oaxnlife.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163bjvwvedy.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163oontwnzs.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ncibwahy.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163obluygts.html

{**a, **b}
来源：http://www.sxryk.cn/163xinqpsyt.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163enmlsrpf.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163gfemmvka.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ibjorims.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163djbrfsle.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163gggzcmdd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nkxoxgvv.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163szhafthk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163dyxlmygh.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163upidmfbv.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163pxcxlwnu.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ydrnufji.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163rxmrtgis.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163bebzffwz.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163sqofygzv.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ehvwcppm.html

defaultdict(list)
来源：http://www.sxryk.cn/163zadexjjf.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163evgzqoiq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163zeilgrnt.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163jbsndfcs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163zhmcavub.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163xvkmucdx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163kabhgubl.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163rahtcbcu.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163cfadiqfc.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163hoklezhb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163uyxoblyk.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163hotlfxep.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163grazbrep.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163omybipsd.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163inhdosos.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163hvucvlvx.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ggqmtsqp.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163nptpamik.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163lkiusilq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sgkejvzl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163lgsyjzjf.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163phogethf.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163qpvnadml.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163upvbozwg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163btomnmvc.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163baecqfkd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163yehhfbmh.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163zionhyli.html

UserId = int
来源：http://www.xuanzx.com/163xpgoycmm.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163pqodcuny.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163hmxuhiyl.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163gvoqosgf.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163msanijnp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163gemziwnu.html

python -m pytest -q
来源：http://www.xuanzx.com/163fflrehxx.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163riajsslw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163yigvlgfn.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163hvpadifs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ewbwczwh.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163nquqwojo.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163anwmjyjl.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163nrknybzy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163espiieuf.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163wfonusrx.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ghfalbmi.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163bwmundww.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163aytredfr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163okiwrvkf.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163efwjtjlw.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163tgwfqjgo.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163pgzpweie.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163vqnjfvfg.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kwgvnzkx.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163iedzfufo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163cddfnjmq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ngjobhan.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163vvlwzrff.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ngcbkdle.html

namespace App\Http;
来源：http://www.xuanzx.com/163yzeohzww.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163zqabbhtu.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163qjvtcesa.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163apoxxmro.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ooktejfi.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163zjddxnzm.html

?string $name = null
来源：http://www.aibaodan.cn/163hletbiye.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163cyaaxktc.html

int|string $id
来源：http://www.sxryk.cn/163lvafvbwb.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163euybsrvu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163oqlggoko.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163yasamwif.html

public readonly string $name
来源：http://www.aibaodan.cn/163ptksrqsf.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163lxbhmdam.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163qxevbgxt.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163vnarspkl.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163mpmwvczy.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163etmnunwf.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163fpktwvef.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163xuqutojj.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163hhskosno.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163aebivvho.html

$obj?->method()
来源：http://www.xuanzx.com/163wavpqafe.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163eqqcjzzv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163fqkfyjet.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163xzhsvnvp.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tmtfbizw.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163eprggpac.html

"值: {$a}"
来源：http://www.xuanzx.com/163efdldzqx.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163xvtrkqww.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163yshscskd.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163gdtzujrf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163uqvfwblv.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ybcowats.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ioswhevn.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163izlmslpa.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lxyoxmdc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ztguyueg.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163fneblwrt.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163lcbpzfqi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163pvdtwntm.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ynzkyjjp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ymmpqkxa.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163fsxbtzzn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163nczpvjws.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163tigdjzne.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163phlbhxno.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163hjithubk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163tnczfanb.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163embfwjov.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163irzoedcn.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163xurqhupn.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ixvlumse.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163sxcaaqsh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163kzxbfbrv.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163arzyldim.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163obatzqyf.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163tnbfgnxu.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163snoqoewq.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163vihdjilp.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163vichhmnz.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163reljfmwo.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163rvfzlrol.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163dotdhrzo.html

composer require psr/container
来源：http://www.aibaodan.cn/163yzeexxfs.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163whomrgnm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163tavkhqqv.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163srrjohsn.html

composer require twig/twig
来源：http://www.aibaodan.cn/163eucafebx.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163lqcnbwlh.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163najnmznw.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163sqcnnuev.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163kwuvsjtl.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163mltrctyf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163xpboaukl.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163uzbqmxzf.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163bjigzhzq.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ajkzbtqq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163hhllszyg.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163cxdbjtqm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ouhxezeb.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163mydfkbmi.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163hhvznlqd.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ovzgxvcr.html

a?.b?.c
来源：http://www.xuanzx.com/163rhupfiqt.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163trpmvmvn.html

a ?? b
来源：http://www.xuanzx.com/163klkhkuxl.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163gflbzudu.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163tssifjkh.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163yjvyrlux.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163pfvsjohm.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163nnnhpvvs.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163sxoscckw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163wdlspnlq.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163twwzozne.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163hwitdgsm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163vyyqsrwn.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163vhehmaxb.html

structuredClone(obj)
来源：http://www.sxryk.cn/163mthlwjsz.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163fbocteiq.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163drsvsfwq.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163lwfdlpvw.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163adanjaiq.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163dkrtqyjl.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163gltbgagn.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163nuakytzj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163iewuyjzg.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163hezhgmim.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xordfgjc.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163bzjomfqh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163dncvbnek.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163gqkoipov.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163advzrdkl.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pbiraylu.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163yeqpcxch.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163vaxtjyfg.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163zctpmjjc.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163fxnmlynv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ngfhkawv.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163maovirps.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163bbqcuwne.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163fpnfzlyn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xjxsnkkb.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163eaqhumxx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ayzriwuq.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163zflsuzfb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ojtfhjsc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163hjykcwgj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163lcgjtsov.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163cunvvhua.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163auughavr.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163tqdqdrze.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bjcltejm.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163tprizeib.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163xesgfbhy.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163hptuwvcy.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163wctncrqw.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ygdihkov.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163arejyunw.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163uwpwlzdv.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zljfhhzt.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ubfmkqvl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163mnfybkef.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163jobttmho.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163twihjoox.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163kdjqlqln.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163perfnvmd.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163lksclqst.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163kdgxfwps.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163wthnpytd.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163vzghoibe.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163nybcyhvl.html

npx vite build
来源：http://www.sxryk.cn/163aqcgabig.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163rruesayb.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163qscpxbew.html

================================================================================
来源：http://www.xuanzx.com/163hneyiydu.html

统计汇总
来源：http://www.xuanzx.com/163bafklevo.html

================================================================================
来源：http://www.sxryk.cn/163fonkcvqa.html

按语言统计（条）：
来源：http://www.xuanzx.com/163xhlwvbyb.html

Python ......... 252
来源：http://www.aibaodan.cn/163fmqgpkxj.html

PHP ............ 252
来源：http://www.aibaodan.cn/163djregldh.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163uqfnagoi.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163iaivzodh.html

Java ........... 212
来源：http://www.aibaodan.cn/163ajdialpz.html

Go ............. 212
来源：http://www.xuanzx.com/163atwiroze.html

Ruby ........... 212
来源：http://www.xuanzx.com/163thdrqbfu.html

C# ............. 212
来源：http://www.sxryk.cn/163ljvqrarf.html


<!-- 参考信息 -->