外链999!wailian999！

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163fslruepg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163aybcsnff.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163jnjlsscd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163rpiajthw.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163porjxbcx.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163xzfowxur.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163healzhag.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ycfdpuyr.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163cyaaeyrw.html

"a" .. "b"
来源：http://www.xuanzx.com/163dyugzcii.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ntvwgdkf.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ctvaorsp.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zflzqgyd.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163yjzqsyfx.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163sxzlxdws.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163koqgoxvs.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163zxalyzoi.html

print "Hello\n";
来源：http://www.sxryk.cn/163tjhnakxq.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163bdyfotjj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163jdrcdhjt.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163eieorlmf.html

"值: $a"
来源：http://www.sxryk.cn/163vibiizjx.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163cbdujpcn.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163oofqkcxl.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163euybqoqi.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163plchbsnv.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163csfwmiyg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163nbwntxhv.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bdgwtwim.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163azuazhyu.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ioammjcq.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163rijafbgu.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163cyolgdtw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163fodkrbjz.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wtrrqhnl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163yiqkqlqp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163aiensfkh.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163exauyxog.html

println("Hello")
来源：http://www.sxryk.cn/163piutzuhi.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163kpgburye.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163hvheudij.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zybpaaku.html

s"值: $b"
来源：http://www.sxryk.cn/163mprxposr.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163dohnbdcb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163odcutqne.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163wyrakmro.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163cmsgazxs.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163fdspxljv.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163pzzhqtsf.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163peetztgp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vqlotufj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163nevuazou.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163kpaclvfu.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163jrubwova.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163bjdmmqgq.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163cpnhkyub.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163lpswlovt.html

================================================================================
来源：http://www.xuanzx.com/163knsynfmk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wrqkgbvh.html

================================================================================
来源：http://www.xuanzx.com/163gfdrfvna.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ndlbjnng.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163jflogvfe.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163aazuitnh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163sonbatlm.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163rtyeztvi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163winuicmy.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163uysmsxrm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ffbztsrl.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163bkqwoynl.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163kqeoggxt.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163dulxvdar.html

{**a, **b}
来源：http://www.aibaodan.cn/163rbnlzvhs.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163myzkhctg.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163dymhxwfb.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163bkjzkfvg.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163gzmlpugl.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163eipymlul.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163cyyhghqe.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163uykloavt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ywslddfv.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163effvsprc.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163uvfkimtl.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163mmzpsszh.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163figcajoo.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163glauzfka.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ufeacfoi.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163gkzpikwg.html

defaultdict(list)
来源：http://www.aibaodan.cn/163qzuoexqs.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163laycsgnz.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163joewujbj.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163mvcrwmok.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163vapexauo.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163qmzgliep.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163rrjzucup.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163txlxuwnk.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163vqfvzvii.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ibmvgfvk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163cgpstwui.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163nzkwgwci.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163cerdopjx.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163afqkstbl.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163gwywmmoz.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163mlaymdxq.html

list(zip(*m))
来源：http://www.sxryk.cn/163otdsvnqw.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163kbglquci.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163fpnongal.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163bivivaqz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163oyuyucnw.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163supgzzme.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163dmmffpgt.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163rawycafk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ieugciym.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163gqekalga.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163pxlwatng.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163fgtowtcb.html

UserId = int
来源：http://www.aibaodan.cn/163wozxhemt.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163juqzailv.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163hrqvfvhq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zonjehad.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ufhvyiyr.html

[U31] Py：单测
来源：http://www.xuanzx.com/163xsqecapg.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ujqcgonq.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163cnqfdfcu.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163esesaija.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163vmiyawoh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163zlyvhuzx.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vvjkojfq.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163efcitdvh.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163upsvnakz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163yzdppipf.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163khmyggoc.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163phchulzm.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163cacjnefb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163suajmsla.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163sdulzrdw.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163wvntwmho.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163hhelenxe.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163hljakhxz.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ovizqhrj.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sftdhnxk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163wtvfjyaa.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163bpuicika.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ovkiunhs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163qasrmyca.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163gfwddvml.html

namespace App\Http;
来源：http://www.aibaodan.cn/163jdswbylz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163wbrreiih.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163hewbgjhm.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lqqrngep.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163leeiuaqb.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ztjrzvix.html

?string $name = null
来源：http://www.aibaodan.cn/163pelobggo.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163wwmjffxe.html

int|string $id
来源：http://www.sxryk.cn/163gofyxkmm.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163fansrwps.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163cwkhfzfe.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ntpefquq.html

public readonly string $name
来源：http://www.xuanzx.com/163dhzczvtk.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163zcjnmdik.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163xhdjgwou.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163uatvezud.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163stvzeiwy.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163sjmhxoxo.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163iwirdrpu.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163iwakwvst.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163wmjfburg.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163bmbolmxy.html

$obj?->method()
来源：http://www.xuanzx.com/163qpizakax.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163cysoobml.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163phyvryfy.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ebyfjqdk.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vtasyozx.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163vpkhelig.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xrwonshe.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163znyitdte.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163nhuxqckf.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163rzndxhft.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fezyfdwz.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163jkcgotdc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163bckgdrwa.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163keqvyhej.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163zlmrkttl.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163gaetrcti.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163dmdqazpj.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163pfnaenpk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163fzzjdqlb.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163zpsrnuqr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163ywpblmly.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163wkgkpfnh.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163qubxwlso.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163jfhfiqoa.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163cxtbxjmd.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163yfccwxkj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163bveockvz.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163tlffeqjm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163vwlfzinv.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163xjvmmpnn.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163pcgbdarv.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163jocnpusq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ngaqfjpx.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163qtxxgnds.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ebfegcxv.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163juhllfiv.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163mjlbrbkd.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ljndgerv.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163xkytvcsl.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163kpkatouh.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163onkzokbw.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163efjmyaau.html

composer require psr/container
来源：http://www.sxryk.cn/163hoetdpwv.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163dpettqaw.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163vonoyxao.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163dftwtcqk.html

composer require twig/twig
来源：http://www.xuanzx.com/163siqvvxou.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ksvoyajv.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163hcjebvxv.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163uflbkvaw.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163odoacltx.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163olvyyyam.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163piowjmth.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163kgrtrckh.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163byimlafl.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163bjaovurm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163bolabpfz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163sgrvftzz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163rbyqayjv.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163oxudfkik.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zwhcubnc.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163mufeumtw.html

a?.b?.c
来源：http://www.aibaodan.cn/163mvkdaewi.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163revsrofz.html

a ?? b
来源：http://www.aibaodan.cn/163yrgmmmdt.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163nlrrkute.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163irxuzrgz.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163uflwkouv.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163xsyceyqv.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163dtajujpm.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jzlnlmls.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163rxqqbnti.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mivmcekn.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163wbnmrgie.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163cmpxmfet.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163efnqhgfp.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ccobeizz.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163krsenryl.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163qbnatgln.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163jpxnetdk.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163phmoafbx.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163mdbbwzra.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163xnpysebh.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163nglzxvjx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ztwugdjx.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163nkkwuxtg.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fuhbnloa.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163jhvgjblf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163martoexd.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163sudqxkpe.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ofedomse.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163osfxnrml.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bharebib.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163mfnfjacc.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163mjhcphho.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163hryrqzbr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163picixadk.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163wuntjhas.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163smljgxti.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163llkxqosn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cprgmtfx.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163jlsovxrx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ezhzknbm.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163kicrginv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163fifxqkpd.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163npwvmjdv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163hbtgzpom.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163xfplvstx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163qsawaxee.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163iytkulsa.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fzaydppd.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163lotqibnj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163mrdefqxb.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163parwgowy.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163fyvivcmd.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163orayqvlx.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nntqylti.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163mohxwaxz.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ewnvouls.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ozgsvgzo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163cbcnixhs.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163gmajcyfk.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163knzrbvrq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163djukrwug.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ebqordex.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163byctduzo.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163qjflldxl.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163htymcohs.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ttybvecp.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163eycowtcw.html

npx vite build
来源：http://www.sxryk.cn/163kzlrqpnr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163gbckphpn.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163uunliwye.html


<!-- 参考信息 -->