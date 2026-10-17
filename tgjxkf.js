外链999!wailian999！

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163xiczhdue.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163rmcasnpv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163zgpnvatx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163orvrxogd.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163bdvkvrty.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163oydjoqbl.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163scgpxfxs.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163izizwece.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163expevcez.html

"a" .. "b"
来源：http://www.aibaodan.cn/163jdqvwxjb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163gbrauczb.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163lrdvjycw.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163cumaeivr.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163mgryobft.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163zzwdtvqi.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163krghptql.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163qqtvlxgr.html

print "Hello\n";
来源：http://www.sxryk.cn/163hwqheypa.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163uuczdpjn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163lkclswjj.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163cjabtdvk.html

"值: $a"
来源：http://www.xuanzx.com/163okalpphg.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163taxscszj.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163jzsjfium.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163glfrlopp.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163xusnfiez.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163vaciwbbq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wptqlhog.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163covciqpz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hvokxgnq.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163kwhxnnfh.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163sewslsfs.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163qvhbkmnu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zqvgaaiz.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163laqtkqmz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163fguyytbi.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163mfvaxamc.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163pbasivav.html

println("Hello")
来源：http://www.sxryk.cn/163fnyqhzjt.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163gkymzemc.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163nbhrnimn.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163lwefonpi.html

s"值: $b"
来源：http://www.aibaodan.cn/163sbjosrkr.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163uqdzoybv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ygvopilv.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163byxnnaim.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163hvkcchep.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163fjrqywmv.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163jbwpqkkr.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163nboekmht.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ugnhbdkq.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vpfakhmi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163zhuuarxk.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163uhtndxlx.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163rtanqtcq.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163uldyqemz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163mowbwuzr.html

================================================================================
来源：http://www.sxryk.cn/163lxuspbwp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xrhpxvbb.html

================================================================================
来源：http://www.sxryk.cn/163fyqattwe.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163otyytqeb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163grdyvphw.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ayiiohzb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163glmorevn.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ncrvfhag.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163hkszvuzy.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163xybuvfzh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ysfnynpl.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163oakbghce.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cxnwyacm.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163aowbchzk.html

{**a, **b}
来源：http://www.sxryk.cn/163kgypeuni.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163kgffhusy.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163xrvgfbde.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163zabbewzr.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163rrexmxht.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ludqyqwx.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163fcwofjgw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163owhxohka.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163dekzvxpz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163spmjcdyf.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163dodbkvui.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163cnaqjkqd.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163amoevbbz.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163jhorvake.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163bwkzlgad.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163lqpnnnqc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hevnjikm.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163cuwamenf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163dowccyvt.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163vzboomra.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163vkszrpwi.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163dqgcscjf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163rvxlhscs.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163cjzyjfrl.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163jvvewvxt.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163qhpittom.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163rreshbhz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163nglrciun.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163fvfsgicm.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ijtfkjqb.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163tfchpoec.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163hkwtqskk.html

list(zip(*m))
来源：http://www.sxryk.cn/163opjptmxr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vockqbmr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163fsfknozi.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163gcjevwzk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163wqobjtde.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163tnpvdmtq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163hirbjucc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163wjxvhapn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163cyntfvcd.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163nimvxnux.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163pcdjfvbn.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163wumcaari.html

UserId = int
来源：http://www.sxryk.cn/163ehijnvoj.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163bscmlihe.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163hgogxlwp.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163lzsgjbis.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163hylbjqhv.html

[U31] Py：单测
来源：http://www.xuanzx.com/163xmqqlkgh.html

python -m pytest -q
来源：http://www.sxryk.cn/163dibzkokj.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163svqyodlg.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163kzjdkbrr.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163xiecqowk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163nealjdmk.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163whngpbwj.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163eqpylezc.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163dthbiwzr.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ymqzdbye.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ktdonlro.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163zowgmuby.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163axmkxmcf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163pmuqbtts.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163layinmik.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163wgbsrowy.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163inqzegpe.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163upnovkvh.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dcufkxwv.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ivviqywi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tcdqjymn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163zuvtgfrf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163nzftanwl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163xitfgjiw.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163beulfjfz.html

namespace App\Http;
来源：http://www.aibaodan.cn/163pmjhzumf.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163jupagrws.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163efwogsdr.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163jknzepzx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163grpmgquk.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ccognswn.html

?string $name = null
来源：http://www.xuanzx.com/163ckicnslz.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163pzkfdesi.html

int|string $id
来源：http://www.sxryk.cn/163vyuqqfzg.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ihqqsvhj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163vjjxeqvd.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ogjokmub.html

public readonly string $name
来源：http://www.aibaodan.cn/163uxbcmfdi.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163lwwiijoh.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163hrcjicyr.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163igobdbsg.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163gobnbegk.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163bvwceslf.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163idtusmsp.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163fsgmsaem.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163kpvudqdu.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163oohhaucp.html

$obj?->method()
来源：http://www.sxryk.cn/163kdbctfsd.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163wckndiap.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163pkfmroyt.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163chjwepwe.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oilblhbq.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163sooctgdi.html

"值: {$a}"
来源：http://www.xuanzx.com/163ylmzekon.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163vfoyqhev.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163ypfunsom.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163wywotdid.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163aptdfyck.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ljcswegu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163zmdbxcjq.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163hozmhkys.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163nbjadhrv.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163vohngboo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163hhnssbqb.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163uinoqfeo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163duqhyptq.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163qwuldffo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163lolgpjom.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163koxbbqxv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163usiiulnt.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163vldeskvm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163iuqvrjly.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163nxhgqjyk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163liumztny.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163pdsfpwux.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163yipdravz.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163nmjsgtfy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ibzwholh.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ivklmfaa.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163yynkofok.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163kyjcukcx.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163jjzzzvuz.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xaqmrvvu.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163gfmzqmpb.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163wfbfgbyp.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163bfqtiicv.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163yyclhxwr.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163knttdnof.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163jasflxsg.html

composer require psr/container
来源：http://www.xuanzx.com/163hrwsaqhd.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163papebtwk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163nenukcri.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163gncxjyib.html

composer require twig/twig
来源：http://www.aibaodan.cn/163eomgsbmo.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163wodjltfb.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163tersejci.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163fqwoszxd.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163ebkiewzd.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163pbufwxfn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163zazbcaby.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163kugwdepu.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163rjudzxaa.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163hczlopuy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163xjagnbwi.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163xcchdxbt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163vnkjenpt.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163rbtewzcc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163pybwlkta.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163otjwmplm.html

a?.b?.c
来源：http://www.aibaodan.cn/163vpjmsspd.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163abpkwhtz.html

a ?? b
来源：http://www.xuanzx.com/163odfopijy.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163wcosszpi.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163csgvpnlg.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163tbtqydja.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163qjqmizkq.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163pjiyxgeg.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163dldlsmav.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163skzdjcpu.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vymcxdom.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163euuwcvss.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163tzlzfkox.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163codiuhss.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163dsvptljj.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163pmotvlao.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163yrdldjsx.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163rztysecv.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xlyazclw.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163qhouqxul.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163lelpoupd.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163dobtbilb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163fslaqota.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163suyalnwv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ipozotji.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163wjdzjinc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163sqmugmit.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163prvflwdo.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ptpedcnc.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163nkwtcckw.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163jhvmpzig.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163xnaieass.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163tjosoyrc.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163pabkgqxj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163jkaeaeks.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163gqujgtoo.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163qwyiixzp.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163gdmzkgou.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hiqspemk.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ombrcodh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163qztlzutl.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163zhnphoot.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ngedpmod.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ugckseev.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ayiepirs.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zxxqwgpi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163kbooaxwh.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163oksctfeq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163regbazkz.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163dwomdacg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163glmoqayl.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163hzdpcdhf.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ehvwabpm.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163sixjvjto.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163kdhcepdj.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163bmudbysi.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kyjkyqpn.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163dkcoxssr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163yvdimdki.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163wugurxpe.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163licbxcya.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xxfahkmj.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163whxpbhea.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163xjvcychw.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bcfaffxd.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163cxydnplo.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163uuygzrld.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163lmaygoqp.html

npx vite build
来源：http://www.xuanzx.com/163stvaubih.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ijzipill.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fyqnuiqv.html


<!-- 参考信息 -->