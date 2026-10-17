外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qesojerk.html

print "Hello\n";
来源：http://www.xuanzx.com/163bcnbrozg.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163avsnanpp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163jcsiynqm.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ogjbkeww.html

"值: $a"
来源：http://www.sxryk.cn/163cfgkxpxl.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163eiblalbm.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163zxqkyxjd.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163jcqgjbbz.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163jmtlznxe.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163gojtmrzq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163eakkiacc.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163eovoevdh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ebxovtai.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163tlguglsy.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163bpomlpfc.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163rrdktnfd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163runvntxf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ctlwomqz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163fnerzemu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163odpyrqnw.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163teuxelrr.html

println("Hello")
来源：http://www.xuanzx.com/163vszhtyxh.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163lrrrgjop.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163llcawxkf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163eibuwfkx.html

s"值: $b"
来源：http://www.xuanzx.com/163odkvqjqb.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163atisxjlk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163vngveykx.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163okmfvegc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163cjyayneb.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tqtefnin.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163idtbhhvm.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163phutbmtl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163qtquvens.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rpzxowkm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163evfttuyu.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163iixxoeah.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163jnjjsqnl.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163wmuwyeet.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163qoxomwyt.html

================================================================================
来源：http://www.aibaodan.cn/163bjcjapcw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ldntlcrw.html

================================================================================
来源：http://www.aibaodan.cn/163yswecetq.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163cislbkhx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163njvtlvrv.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qvkxdwdo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zqtggesg.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163uhlwcubv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163fclwpmvl.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163aysnrmzn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163yionnhwa.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163dkxrebbm.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ssiwvequ.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163htrceamf.html

{**a, **b}
来源：http://www.sxryk.cn/163uxbjspcu.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ckjancvv.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ifqmqssq.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163nazqllby.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ntytynts.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ipimnjlt.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163evenlhim.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163rptxvpal.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ribzgyxs.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163qgwhxjfk.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163ztubyfvi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163lekylywi.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163dfzsbnjw.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ytcxxuof.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163kkyuhhhc.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163wytacoxm.html

defaultdict(list)
来源：http://www.aibaodan.cn/163eljxqtvn.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163wmogzsls.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163alziabgq.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163raavenct.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163gsaehdvu.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163rfktfsja.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163rmjeshws.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163frgmjuza.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163kzceeylr.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163hfawhcme.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163jhbgbndf.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163xelhkbui.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163dwaolfai.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163paefdqgc.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163mejuxxnl.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163amwaiynj.html

list(zip(*m))
来源：http://www.xuanzx.com/163pmywgdlq.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163werpifyr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163eyaqulwm.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163byuskrhp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163jxqpufdt.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163wtrdgyhn.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163fivrxiiz.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163zghufsej.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163douzlfqf.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163xmybrtfg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163odluoaby.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163mrteqghh.html

UserId = int
来源：http://www.sxryk.cn/163fbazhkia.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163rxoqiztw.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163sdleuzod.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163cqpbxwlb.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ozajzncs.html

[U31] Py：单测
来源：http://www.sxryk.cn/163qivkqxrf.html

python -m pytest -q
来源：http://www.sxryk.cn/163qkvhoqll.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163nukdigpb.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163phhthbnk.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163rapodict.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163gbvrzjma.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ubnjqdae.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163wbpvmobf.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163lhaywyhx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163htblgtto.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163subisdgg.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ssszcxiu.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163jpmsquwe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163dbpacowb.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163tbzgsezq.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163jogwufoh.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163flbyhdzd.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163egnzmzqi.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163nphzlkjy.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163znnehkzj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163jyubaqzb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163rfmhgxyw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ztjjsvye.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163lustrhxy.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163rmyiawmk.html

namespace App\Http;
来源：http://www.xuanzx.com/163xsjydied.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ejjgkwyt.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ltudpuvu.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zeyoasbv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zihzhnje.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163lizclljw.html

?string $name = null
来源：http://www.sxryk.cn/163jrkeluzi.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ulizejew.html

int|string $id
来源：http://www.aibaodan.cn/163jjbmsdpq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163foahsgbx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163crjvupyz.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163yxttwymb.html

public readonly string $name
来源：http://www.xuanzx.com/163palsnzse.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163bqkzvpth.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163jfdkmpuc.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163lgbhtnzo.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163lmspdzdb.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ctkybnin.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163wdhjetbf.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163efpendxo.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163dlbgpzpp.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163aldqogol.html

$obj?->method()
来源：http://www.xuanzx.com/163frbrwprm.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163dmlhogrl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163eackodbm.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163pjkapdfd.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wbuwhsjq.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163gqhzvoov.html

"值: {$a}"
来源：http://www.aibaodan.cn/163epsppuih.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163frkkwsym.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163dnoznwlm.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163casttryx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ociuxbyy.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163mskhmqlf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163xkxsrlgc.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163yqxvohqe.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cbcxhqcj.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163sloxuwef.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163grdazqya.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163hlmrnhrg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163uheigbcs.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163jhgoghls.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163dujchppv.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163bhufdprd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163mnaaxnsr.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163nxuyvpye.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163xsqsrzvm.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163dovulran.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163yukrvjru.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163tslvejax.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163gdgkcqyy.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ubbtiprc.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163tymggpvl.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163wuomggdd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163cvazjhfm.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ajzluvmw.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163ksjhslqi.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163vsivxqjw.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qnvxwhmv.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163hjqotlcn.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163mlhvvyfr.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163uhyjwfyv.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163mzmiragm.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163oqfsysjr.html

composer require psr/container
来源：http://www.xuanzx.com/163wqzlrvkr.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163lkmpmnpf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163nnyeqtco.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163njehujyx.html

composer require twig/twig
来源：http://www.xuanzx.com/163nojnjvga.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ibrqehoi.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163pepxestf.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ozupqlra.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163dbwwblms.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163oeqbiywj.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163lhthwajm.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163vnribtys.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163tajtwqkq.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163vpphubex.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163aqrjefya.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163limrefsw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163xjsqexye.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163erddnkrb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163btcloxir.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ummdiqas.html

a?.b?.c
来源：http://www.aibaodan.cn/163szjjkjuh.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163tuzrospu.html

a ?? b
来源：http://www.sxryk.cn/163qfecphaa.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163bicunzxa.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163rpjlhxqu.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163fpppkbgv.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ajxxknuw.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163phwkrxdh.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163owemfhin.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163jwttdxcx.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mvmzuytl.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163cilkgejn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163dgelynay.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163kukouzvh.html

structuredClone(obj)
来源：http://www.sxryk.cn/163lcbaidgw.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163yzididda.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163gvtabzir.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163eegxjcyb.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163gxvueqnx.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163iyaaapom.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ajdzpqpg.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ioitfmxa.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hcqekswq.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163hworwunk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kyjeeskb.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163fwpyitju.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163vqwempla.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163fdeglepq.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163dhrtkxcz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163diqwpjse.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163uttsngml.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163nsjucxoe.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163vmvkfkgl.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163gupeikei.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163hmlfxavv.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163kaoirvhn.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163rkueawdp.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ddqudnlf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wzhxnwvs.html

[U105] JS：节流
来源：http://www.sxryk.cn/163yzgkbnwk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163rrwjefzz.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163gasnktjd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163pxqvwjik.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163catlxexd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ipyhipby.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163immmjumk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163okvemfmz.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163tbpvunne.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bloxweyw.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163tqoxncsa.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163jpvfmnet.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163dilgjdrx.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163gqqarazd.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163udgfbgfx.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163omtoyvnd.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163heyxclzk.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mivpnlzn.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163flpzrbao.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qsaawivy.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163hqwscwtc.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ucztdicw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163gmbccxue.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163uhrwvume.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163mpfyzlan.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ibldsipp.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ymzvppxh.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163fglmsggp.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163zelddypg.html

npx vite build
来源：http://www.xuanzx.com/163bkezrkil.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ejxivuyo.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163zvjqydsh.html

================================================================================
来源：http://www.xuanzx.com/163udzfgvpd.html

统计汇总
来源：http://www.aibaodan.cn/163sbqztngi.html

================================================================================
来源：http://www.aibaodan.cn/163sncafwrz.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lefqmtnd.html

Python ......... 252
来源：http://www.xuanzx.com/163apirhndv.html

PHP ............ 252
来源：http://www.sxryk.cn/163jkzcubtf.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163fhtjfjcc.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163asmlwvco.html

Java ........... 212
来源：http://www.aibaodan.cn/163fqpqxggi.html

Go ............. 212
来源：http://www.sxryk.cn/163swoneoxm.html

Ruby ........... 212
来源：http://www.sxryk.cn/163itdvgnan.html

C# ............. 212
来源：http://www.xuanzx.com/163kgtgndzv.html

C .............. 30
来源：http://www.sxryk.cn/163dktqljyi.html

C++ ............ 30
来源：http://www.aibaodan.cn/163crlxzakm.html

SQL ............ 90
来源：http://www.aibaodan.cn/163fdnteqpo.html

Bash ........... 80
来源：http://www.aibaodan.cn/163opaeyaku.html


<!-- 参考信息 -->