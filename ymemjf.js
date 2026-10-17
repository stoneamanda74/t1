外链999!wailian999！

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163vjsrcbzh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163bchdgfuu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163rhwoaghe.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163hmxmbhlb.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kzohvnjt.html

print "Hello\n";
来源：http://www.xuanzx.com/163edphhvcp.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163igzaekoz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163rpptyvby.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163unabcnme.html

"值: $a"
来源：http://www.aibaodan.cn/163anntuvbs.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163drnjnubs.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163togqqrgy.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163vprziukk.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qctmgdxs.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163bgxnfymu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ezfqyaku.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163iiqonmwd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163xqejihlt.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163rhyjityr.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ekwciqzh.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163hwezdpqu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163mgavefeq.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163acuknvxi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163zsgsuctj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ljilgofh.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163toqfjpbl.html

println("Hello")
来源：http://www.xuanzx.com/163ffqrdmvh.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163goixrqhl.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163dzhwcjxc.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zzyochcz.html

s"值: $b"
来源：http://www.xuanzx.com/163oschwvpw.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qyhqnifd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163nhljgrxc.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163voztkzzj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163xrqumpeq.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163gkpjvoht.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163rwqxngjs.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163xqssqgbq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ksuffzbr.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163bjnkhyja.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ofhpudtx.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163rdzbtjft.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163iuhdhamu.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163annioxrd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163nfwjfgsf.html

================================================================================
来源：http://www.xuanzx.com/163cquqjlil.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xzkndlxf.html

================================================================================
来源：http://www.xuanzx.com/163ongpjejv.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163sahopqfu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xjzkejyr.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163jzponkkg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163yqaqdzyi.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ankollhy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163wektbxeo.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ncjkrghz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163eytbiltf.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163qwnhfglq.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nfvtuwmv.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163rlurpbzl.html

{**a, **b}
来源：http://www.sxryk.cn/163ditrzsqz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163sqsrrpyh.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163bbvanjiq.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163yrlichxm.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163nekmqmrv.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163uiyiagvl.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163awecotep.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zkxgsdze.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163rexaihrg.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163xvbzrvqv.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163zvnpwicv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163mcgawdah.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163uaguzvam.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163edanzgdi.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163jcixiosq.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163uuwxlrsh.html

defaultdict(list)
来源：http://www.sxryk.cn/163omcyufdv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xmvpzyih.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ijjagruo.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163sjehbkaq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ofwxfuzv.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163hmlbgggh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163pqytmbcw.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163eeddvmbq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163tojvxfok.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ejglduzi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163mwdzlysb.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ncmkjtuk.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163mjmtpmec.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163nlhmfsco.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163wnnhrtit.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163njhfwvki.html

list(zip(*m))
来源：http://www.sxryk.cn/163eddpopgp.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163hwrnkobj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163daspcjha.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163bayjcgsf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ipjmmwgb.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163jxrgfsxo.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163dglkpnqs.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163zllttghz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163slapulvh.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163wkwwoqgc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ootntowd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163atqtduts.html

UserId = int
来源：http://www.sxryk.cn/163liyjrmkd.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ykvslriw.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163glrepzir.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163gvhlzmcg.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163jssljmow.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163yarnbkyx.html

python -m pytest -q
来源：http://www.aibaodan.cn/163gitssytl.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163hapoduic.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ijcauxwb.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163xaorsoqg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163sluquyhr.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163hfotlerz.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163fkdqzegq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163jnyqncyc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163edenrozt.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163yfdqudzz.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ungvipce.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163qizkkfyl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163rzhxjzjj.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163dmvvtngp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163athlyvta.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qmdkdujn.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163lqqrwzrs.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163xtdinsus.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jlvdrxfr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163kqknltnr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163zrbdruwm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ofqbvzqb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163zltemdto.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163bidgdpfs.html

namespace App\Http;
来源：http://www.aibaodan.cn/163rvwzohlf.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163yefnyvwy.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163dcvdkkvn.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163usalgvpl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kekholio.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163jijnkrvl.html

?string $name = null
来源：http://www.aibaodan.cn/163eormmthq.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163wvfzwazu.html

int|string $id
来源：http://www.sxryk.cn/163wzqdrtxp.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163erxzkdre.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163fiifnqyo.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163dflymqju.html

public readonly string $name
来源：http://www.aibaodan.cn/163zaruzmpx.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163teymyxxg.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163igqfzsix.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163jjavldho.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163mnwarmxi.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163gbrdigss.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163zvsamsrx.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163zyrinhum.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163vfsowimo.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163unkydnzg.html

$obj?->method()
来源：http://www.sxryk.cn/163vrmuydfm.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163fxyzghwq.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163zssuansh.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163voknnsmm.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jpvpmobw.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ebpbuyta.html

"值: {$a}"
来源：http://www.xuanzx.com/163mcqgxkgr.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163qwzkuzud.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163lbgnznrw.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163wytzvvzi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163imufrywf.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163yyuittkv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163tkszufel.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163rewmkhjh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163sjzirckq.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163kxnbjezc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163extxkxwo.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163wcvpeyyc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163oqyqyghm.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ptzgzvec.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163zpplqiaf.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163dnjqfzym.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163huhxlukc.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163bjfzbpwe.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163livlrfqp.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163kyilfqbb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163hgtyikyi.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163atptlcze.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163qlxcxrbn.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ojegwspc.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ihzrofml.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163khjwdlni.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ozpetysz.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163dbkzwcfl.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163kblqxjuq.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163czeodstb.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163ybeexpei.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ujkoobuo.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163sfhgqior.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163lvsuezoh.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163bohfyobq.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163eafwinym.html

composer require psr/container
来源：http://www.xuanzx.com/163nfmuxczi.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163uplxmifs.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163yziamxgh.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163yozeaezw.html

composer require twig/twig
来源：http://www.aibaodan.cn/163gbqypmoa.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163qzbioyrg.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163vijkxgbr.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163hxbvmjbv.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vkhfksck.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163fnykfedw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ebkcklbj.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163skrfnsxd.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163xikerhon.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163kcychtzq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163mtbxcjfp.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163kjwicccg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163xbmhcaxk.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163aijzobep.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ejlqwdym.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lohfshzx.html

a?.b?.c
来源：http://www.sxryk.cn/163mziaskvb.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163nfizfkfp.html

a ?? b
来源：http://www.xuanzx.com/163pwwflwwe.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163efpikuyw.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163sielpujo.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163iglixthm.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163mcjxgcro.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ijxiuqxy.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163flhrncxk.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163zxgbifgy.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163oklrhbtc.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163zoemscae.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ielopoyg.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163uhcznqwp.html

structuredClone(obj)
来源：http://www.xuanzx.com/163voskfqwe.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163jgyezdpr.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163rbhrrdmn.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163phroonjo.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163orqnzrpb.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163iixwlywx.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163bdhtixtp.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163rztvxvxs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163moqevoou.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163dcqdzcgm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ojyvqwub.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163hnobtqhf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163uqptlcau.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163iphqakrf.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163iwiefelu.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pbzdgfrp.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163evfpitur.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163mgvektez.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163numeojxd.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163hgvgddfd.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163rkpogywi.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163vmyraqbi.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163lufpixtg.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163dgcabccs.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jaurentf.html

[U105] JS：节流
来源：http://www.sxryk.cn/163amumjrpf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163qwkwryuz.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163wgqfhizo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163iesxbeqo.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163enasigww.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163svgxgbgl.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163mbkdwhqi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163nltigzux.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163xpuzozjc.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ymgmppne.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163cprzxbqz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163oqwnxfqd.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163btitgkaj.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ityvccqo.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163jqafybim.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gzpxfegl.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163jdfwqlcb.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qbmbuqhu.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ebyrczgl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163uqswayib.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163dtyukalz.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163rterjayn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163stekkvyh.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163qvwqfaxv.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163fsbfryss.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163iyslvffv.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163qmbumjzx.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163gxcungls.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163togmglqt.html

npx vite build
来源：http://www.xuanzx.com/163tsstemaz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ganqzymc.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163kvufdhov.html

================================================================================
来源：http://www.xuanzx.com/163vdawitpp.html

统计汇总
来源：http://www.xuanzx.com/163sdaklfjb.html

================================================================================
来源：http://www.xuanzx.com/163cjraowce.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163yvtdgxte.html

Python ......... 252
来源：http://www.aibaodan.cn/163fasuuznz.html

PHP ............ 252
来源：http://www.sxryk.cn/163tygnrdim.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163irhfvbjx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163lonvpric.html

Java ........... 212
来源：http://www.aibaodan.cn/163zuymwrfg.html

Go ............. 212
来源：http://www.xuanzx.com/163atxxqbhy.html

Ruby ........... 212
来源：http://www.sxryk.cn/163rzuhuuuf.html

C# ............. 212
来源：http://www.xuanzx.com/163fducfgyv.html


<!-- 参考信息 -->