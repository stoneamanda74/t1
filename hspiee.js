外链999!wailian999！

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163mhvpktnn.html

"a" .. "b"
来源：http://www.sxryk.cn/163wzkchqwk.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163vwgmbnpe.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163dslfgvsn.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163srkoaltl.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163tgwgzvhw.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163buduihns.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163bshvbgcs.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163jhtrbaha.html

print "Hello\n";
来源：http://www.xuanzx.com/163rwocvfeb.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163fjdwiwws.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163qiuvremt.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163hvkfrbjd.html

"值: $a"
来源：http://www.aibaodan.cn/163nwggfqra.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163atblhzsq.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163bvxyfslu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ecvpgdgo.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163yxbsaora.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163gpahhiyt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163xctskfvx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163mwxunmqd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ankshdgh.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163acwqcact.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163bdsyemhj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163tyvchark.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163rgmdzbgx.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163hjixcdqc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163hitbpeqw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ousruhkn.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ssjanqnb.html

println("Hello")
来源：http://www.sxryk.cn/163opnetisn.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vwybifkb.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163meoiqzzs.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163kgqqeziz.html

s"值: $b"
来源：http://www.aibaodan.cn/163lporscsb.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qeelziet.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163zvdymkfi.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163stlcbgab.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rfzqdnen.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163cxshialz.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163kwmmhfbf.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163sphortwm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163nzgzjuft.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163gpxveaog.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qrhsknwt.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163zzcjjxek.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163jamuszms.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163dojymxoj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163vemhrnen.html

================================================================================
来源：http://www.xuanzx.com/163dmsgfddb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ensutosq.html

================================================================================
来源：http://www.aibaodan.cn/163ctombxqe.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163zppjixfn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163zarfqtgo.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163awzjklwm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163bswpjafu.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163adiduxmf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163utbzzdtm.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163yfutodwq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ciaeltat.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163tujtbuep.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lzzvbbnk.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163qvbjzycn.html

{**a, **b}
来源：http://www.xuanzx.com/163wtdxemow.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ofmkketn.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163pkmwwqbv.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ioxlnxil.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163euegnpcm.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163zztrzlax.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163assqxits.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ghmkinzj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163lrebkyyi.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163zrovgjvg.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ikappuhy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163fkqvofjf.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163kwblfdzt.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ntgbpnbr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163agarnksk.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jbdxiuuu.html

defaultdict(list)
来源：http://www.xuanzx.com/163kutqrqdl.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163guizzhdk.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ajotfqmn.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163tsgilpvh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163hkrwfjmf.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163uqvngroz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163gramhyxh.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163xhqmtyzq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163unvonnnf.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ztjbzaby.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163kswwxsqo.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163cvcmixpl.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163rvahutmv.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163qsiuoumn.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163nriaseam.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ybptnhcr.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ghlnomtv.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163yydpzjmi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163jmxayyha.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163gtlhhshn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163uuxsggrv.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163rxwpkrlo.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zubhgrik.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ybcbmqvd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163vhkvqcxr.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163uejmchzx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163yzfdjehb.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163insykyub.html

UserId = int
来源：http://www.xuanzx.com/163gtskvbbs.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163fdeguevq.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163iiflpojp.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163biejxopp.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163yobibirh.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163dqaxqmna.html

python -m pytest -q
来源：http://www.aibaodan.cn/163pefmyisz.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163hhwqmvwq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163vzroamfv.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rraqhyjg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163uvcekmol.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163odiuhflf.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163kyxsjxqk.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163brdxmzbr.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163nuqaghgz.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163wkdjxjlg.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163nucnzqyz.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163zlconvqn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163cekutlyc.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163rdcnqfus.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163fbouvyur.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163abqujvdi.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163yptfxvkp.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163rutsisyj.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163depmhddx.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163fcxyaxkt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qpjeeflx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163mcxvpngf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163btahfqjj.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163lqjprxfp.html

namespace App\Http;
来源：http://www.xuanzx.com/163qcqnqily.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ieqzlkxc.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163uucmiywn.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163oklixhyo.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ogzuxjzv.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163naoiptwo.html

?string $name = null
来源：http://www.xuanzx.com/163dewgfqrg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163tnmbbkxe.html

int|string $id
来源：http://www.aibaodan.cn/163bdecrslr.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163agglpkhn.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163rbwvawhb.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ypvyzxjl.html

public readonly string $name
来源：http://www.xuanzx.com/163pgcthcin.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163hezkuqvn.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163qbsgibbz.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163rbmusyxk.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163cpfkbmej.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163lowsoxhv.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163hxesnbjp.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163chewrbrg.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163jppdccep.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163ffuvegup.html

$obj?->method()
来源：http://www.sxryk.cn/163miqaxumv.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163puridgxy.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163whrvjvhs.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163wcpjaiwp.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zunfeakz.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163erarfpan.html

"值: {$a}"
来源：http://www.sxryk.cn/163kuicddda.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163aepbdkfk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163dernmvfe.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163nsdviopj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163aivbgocc.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163okrqyquy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163sbybpgrx.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163oseedixq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163slsisscn.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163sglflvwp.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163uccdcpuo.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163wxxtpolp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163hyvxyzvt.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ukrsrqvb.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vfvxzsbz.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ggxhbdsc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163hdrpfruk.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ipmszlns.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163tadfoski.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163hivccuxk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163cmouuhyg.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163nocaresp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163qnivkyqq.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163nkxmhnrr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163axkuocpg.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xeylohto.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163zeixnkbw.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163lquhprxb.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163osaoktlc.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rvmupdqn.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163sextyura.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163quvljoyk.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163shjnszex.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163xbijndta.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163otpbwqmt.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163juhjlkbx.html

composer require psr/container
来源：http://www.sxryk.cn/163mspfbzcf.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163cdmpjjib.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163weonykpc.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163adjjcjvl.html

composer require twig/twig
来源：http://www.xuanzx.com/163bkhlpocl.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163jtocjndy.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163vrkgueje.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ttxtfsge.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163zoxvsumy.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ysaaryss.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163qqovjijx.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163bervxfiu.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163tjbrfmoo.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163lsqxcdcl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163chihoevd.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163rtacymex.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163clsdhrvm.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163cwlgmppn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163vmehblxn.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163tbarazoc.html

a?.b?.c
来源：http://www.sxryk.cn/163xabttxjg.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163tdwzmaqa.html

a ?? b
来源：http://www.xuanzx.com/163valmjbai.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163jfczcvln.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163oxllrjqe.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ragogaxa.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163nesojwet.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163pgumxnkz.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163usilvcjz.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163qznmgvga.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ypateepc.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163nzzyteuk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ulxfgicd.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163pttuuuvh.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ixffgpii.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163upunhhyw.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163xqfgymle.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163rdsnkshc.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163pifpvjny.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163suxsuyyw.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163pasypqit.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163pkyxzgrw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wpcqigrh.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163coqymoke.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vevjhdvu.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163ostoebdu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163nqmykedu.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163tqeiqmbb.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ctfazlet.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163wlgchqql.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ufollgfg.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163vjvmmnrh.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163iciodtgh.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163uqfceizv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163lvnoulve.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163otwfuthr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ivphdsyt.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163stbhmzmi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163sdlfpoyv.html

[U105] JS：节流
来源：http://www.xuanzx.com/163kprrlifd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163qsxuxuxr.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163oirmikts.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163jqcmyrae.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163atswklav.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163maqaumnl.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ypjsrwbx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163gzwenkzn.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163cifwyvqz.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xljvgwfm.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ordnscbk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163cnhjibjb.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163vwlnagod.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163nvdrfooi.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ykexlhiq.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163oobypgni.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163pfptyfdk.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163oggfllyk.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163nyzgghaz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163czdytrlf.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163rxpcooba.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163rakeazeh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ssbolyrl.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163oqdffxgz.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ozvucicx.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163tipgvuef.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163mvgdhkzy.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163jrpmrysd.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163xhtvjzak.html

npx vite build
来源：http://www.aibaodan.cn/163dmhjeeww.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163fccbsoil.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163tpygkaks.html

================================================================================
来源：http://www.aibaodan.cn/163difxrnfz.html

统计汇总
来源：http://www.sxryk.cn/163hlogjlom.html

================================================================================
来源：http://www.aibaodan.cn/163hdreylpp.html

按语言统计（条）：
来源：http://www.xuanzx.com/163rfbozafh.html

Python ......... 252
来源：http://www.xuanzx.com/163epwmuwyd.html

PHP ............ 252
来源：http://www.sxryk.cn/163uyvnnyqa.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163vosuiglz.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163xmdwhpri.html


<!-- 参考信息 -->