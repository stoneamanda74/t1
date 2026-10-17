外链999!wailian999！

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ntvjdeur.html

"a" .. "b"
来源：http://www.xuanzx.com/163fuysazwm.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163bamrawze.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163bcnhmzxc.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163lvwalsnu.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ujmuastu.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hhnjzuta.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163yctwfzhe.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163pfxttmli.html

print "Hello\n";
来源：http://www.aibaodan.cn/163oiqotcgr.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163sjthazwd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163qnmjpgvu.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163pxmigihq.html

"值: $a"
来源：http://www.aibaodan.cn/163bwpfnkzu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ytbcxudq.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163zcbankin.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ampbkphc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163lccxeraz.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ohsszudv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163yfquosof.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163wkidlecx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163yzzdlgwq.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163odxykkts.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163fgxmekry.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163lgrzogfh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163msikdfrp.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ajhyghtm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163jpwpnomq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163alayvsnd.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163rezdsbkl.html

println("Hello")
来源：http://www.aibaodan.cn/163tcrmedxz.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163hdupjdfa.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163lafnkpud.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163awnfcign.html

s"值: $b"
来源：http://www.xuanzx.com/163rkbbhzpu.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163wlodihcs.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ylizfqhp.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163anplihxi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163jjfbbngf.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163paaapbop.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163bofrkiko.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163wutabgbv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163qoqrapjk.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ubytfxsr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tobykazg.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kobmtxzi.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163mvkajgaf.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163gdznhdwm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163asbcjfyk.html

================================================================================
来源：http://www.aibaodan.cn/163mnuhjldw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zdrloydg.html

================================================================================
来源：http://www.xuanzx.com/163aszwlpgk.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163xayozfmn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163tokptpxl.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163kkkntdec.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163bdzolhpd.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163nygqhulj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vewjnpbi.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163uwlskxbx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163lwlmyoti.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ptgvnnef.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jtkjhmgz.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163jhdsvdwt.html

{**a, **b}
来源：http://www.aibaodan.cn/163vqvvyfso.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jvhdlbtv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163jxokywzp.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163noqojiwd.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163vapqmyjo.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163fuzxkqpt.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163uonhevvy.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163befnqlmp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163lnyzonap.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163bimkxgya.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163tjznwept.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ddksuobm.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163bqxdwbox.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163maslcrim.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163xwechwxu.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ftthgxnc.html

defaultdict(list)
来源：http://www.xuanzx.com/163mfpabsfc.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163muahopql.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163vfupetsv.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163trfxcktz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163gcajnval.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163biyminpk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163kuhcfzir.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163bkwvcurg.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163etsqpwra.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ecuxuoam.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ksvxzenj.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163cpztding.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163irnanmzi.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ofyiikxn.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ebstqzgg.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163wiskfwnn.html

list(zip(*m))
来源：http://www.xuanzx.com/163sjkdbetn.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163grfzslvj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ubycgaal.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163dzmqevdv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163fmohbper.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163jeniadrj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163pabbggni.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163gruvxoqt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163wfvmsnoe.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163vyixjzhu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163cwalmuiv.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163sonyuwal.html

UserId = int
来源：http://www.xuanzx.com/163topyvusr.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163nqldrgvr.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ggyykqml.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163vvxrgdor.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163nypuxktg.html

[U31] Py：单测
来源：http://www.xuanzx.com/163truwbnok.html

python -m pytest -q
来源：http://www.aibaodan.cn/163kqggqaum.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163zythgvzj.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163usjrrecy.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163pqwzlzcu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163vdglzphf.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163brinbcjq.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163lvarbuac.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ujprkgby.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163kaanvxjs.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163pfzivwnn.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163sbijgpei.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163emuyrwhu.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163qcnmtwtv.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163tkizmttk.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163gadobbbl.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163xlzbybxx.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163aflcexti.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163szwijjqv.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163aualtnjr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163kwnzmqtv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ocjlschm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ejwkkqpa.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163dclvqcjt.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163swicripy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163bmwijdle.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163wcqejfic.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163thjfnpzp.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163vbfalwsd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nuwwtbko.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163mjfpddkg.html

?string $name = null
来源：http://www.xuanzx.com/163tjqdadbg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163yfonfysm.html

int|string $id
来源：http://www.sxryk.cn/163ntjiezit.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163whhgipse.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163iteszhdz.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163cmsunnlp.html

public readonly string $name
来源：http://www.aibaodan.cn/163tmfctvuu.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163xdvipujo.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163aenyyyle.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163rpohayky.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163okgwzyts.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ptvqggpu.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163rvxbwmrl.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163maonfgea.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163gdyoaflx.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ieqbxdjb.html

$obj?->method()
来源：http://www.sxryk.cn/163ntesxcsv.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163hvnqxybi.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163skqokbxc.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163cdagpmeh.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ezjvvfhp.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163stpfgtco.html

"值: {$a}"
来源：http://www.aibaodan.cn/163nkdfbxym.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163mfxeqqcn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163vhmafbzd.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163pjixvbgv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163yszxznlv.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163gugjuaav.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163rehrzrzz.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163omcwteex.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nylwhbvz.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163bomnaouu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163oixnvdot.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163vzilnsrn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163usaqmjgk.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ajnebnam.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163iacsiikk.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163lujmtkqp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163tzknaagj.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163zierrcaj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163fdrvqavq.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ebaplchy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163tommupbp.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163epuqursi.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163mycswxfm.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163ppllnpkf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163xlfszlmz.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163gwzydxte.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163dqjtupkg.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163cxtumkgx.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163pwqljvpv.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163esptkehz.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163puahxymx.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163uhmggidh.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163qjgxvwig.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163kcfkgtkc.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163yjsftmcb.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163nnibgxkg.html

composer require psr/container
来源：http://www.xuanzx.com/163pfocrpzw.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163puqlyasw.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163kmkogrcf.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163brzzglbj.html

composer require twig/twig
来源：http://www.aibaodan.cn/163yhtluyij.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163jetnikiu.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163laozbisx.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163tvkzzarp.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163cwbamurc.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163aujyrytg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163uttycigr.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163heqqjsod.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163rfcxojeq.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163txyquyqj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163fyrggcrn.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163rbinpweh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163jcyyulss.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ngxegnpn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163iumxfatk.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163yrevgywh.html

a?.b?.c
来源：http://www.aibaodan.cn/163klyxyoeb.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163uuhwpovw.html

a ?? b
来源：http://www.sxryk.cn/163xrmbcldh.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ygdmcvuu.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163xytxaadv.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163flqbmngp.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163nuzbmqmo.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163nppzjfyy.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163btljrinv.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163xqqddiyd.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163deypdxij.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163pbpsrrio.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rsivwimu.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163fzrysusl.html

structuredClone(obj)
来源：http://www.sxryk.cn/163mwgxgzpd.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163fyxgdbcq.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163jltflwtm.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163rqfnxzhc.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163lvuzalpd.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163tawwmevy.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163yskxlemj.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163pycnndpi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tgyvszdm.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163tsojfwuz.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yyhntbbi.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163kfxoxrbo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163hewuvxvc.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163sbnbcmlf.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163jgdfcdgm.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163xxaxxevl.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163pztcsjak.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163keozxdsj.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163cmhwxtum.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163vyuhvudu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163gstwdorn.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163svihmjsz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163jdxawgiy.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163igkkytau.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lbjnjayd.html

[U105] JS：节流
来源：http://www.sxryk.cn/163vwgaagud.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163yqjssmri.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163dpbwvavq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163rxhcknzt.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163okxnaeph.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163sunbebew.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163wctwxvls.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163hervmsns.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163jbjuhpcd.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163phqsamcq.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163gsfrbmhv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163tqkzviko.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163nnmoujgw.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163kkjrgdbm.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163whgxqkcq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163rxwcsbcu.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163kdzbmxwo.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nmzyzfzc.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163icqddbdo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163rbxpzlgg.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163pbpakvos.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163fgjahoyb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163tplqysgv.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163kprejjdh.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163sxearvsp.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163nqufatdp.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163uacvnnqc.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163vyzfhqdx.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163dcwonuxt.html

npx vite build
来源：http://www.sxryk.cn/163jneowrzf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163qqhecsok.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163evefrvmd.html

================================================================================
来源：http://www.xuanzx.com/163xnorhvam.html

统计汇总
来源：http://www.aibaodan.cn/163ayhdypld.html

================================================================================
来源：http://www.xuanzx.com/163mkplpnrk.html

按语言统计（条）：
来源：http://www.sxryk.cn/163prmzsugv.html

Python ......... 252
来源：http://www.sxryk.cn/163csivlhpk.html

PHP ............ 252
来源：http://www.xuanzx.com/163meijcaam.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wmjbrdyu.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163dgxnhuyz.html


<!-- 参考信息 -->