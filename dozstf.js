外链999!wailian999！

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163sfrqerkp.html

println("Hello")
来源：http://www.aibaodan.cn/163rqaznwmz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163lgkmomjo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qddswpky.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163wsqmosks.html

"值: $b"
来源：http://www.aibaodan.cn/163quynibkb.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163uimywhbh.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163fwzijwwl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ervyipla.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wwrcthxw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163vmbespkf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163vqldwidw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wbqnhvvu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163lsccepbo.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qwiqaclg.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fdncvrrj.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163dwcugmse.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ykyzesiu.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163euzpwakn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163cacrkjmx.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163dongegta.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163lvfipynx.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163jvtsgvyk.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ucskagum.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163wqbfwean.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163uhplyweh.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163nnskytsg.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163yfwhbmmd.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ohtxlfkj.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163lultriqr.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163yisylvfi.html

print("Hello")
来源：http://www.xuanzx.com/163wjetjkrs.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qvupjiwz.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ouivuorh.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163hfgmncuu.html

"值: \(b)"
来源：http://www.aibaodan.cn/163rrvzngeu.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163arifypxh.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163sxojvlrt.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163haakmngn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163okzeukbr.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163mbkyufjt.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163bxbxptlw.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163acsqytye.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163cukxusfn.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163choigfxw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163esgyhjdj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163kokwquvb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163hdovxzej.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163vlqcdnlp.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163louodyba.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163fprtgzgr.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ipdlcmfh.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163oektdyhk.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xpjjrgag.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163gzehesjj.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163kjacymoc.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163nvtbzzoc.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hamajtym.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163pewlgfpw.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163tbylsuln.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163puqrshrj.html

print("Hello")
来源：http://www.aibaodan.cn/163jxyiuxxs.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163mrsrkdrk.html

local a = 1
来源：http://www.xuanzx.com/163oigjlrgj.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wlbvgjcr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163kubwhtjt.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163fmsooflq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163hevtvumd.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163xsitwzdq.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163nmghbsxd.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ylvvfyjw.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ddfgtjpa.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163nhkjvsaw.html

"a" .. "b"
来源：http://www.xuanzx.com/163gnywqhqg.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ogziakzw.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163micjvugs.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163jvnfwmie.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163laavbzgm.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163kcjefuvo.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163fusyubqt.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163irdaovzy.html

print "Hello\n";
来源：http://www.aibaodan.cn/163fykcefzq.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163copyqtkv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ywawtsjv.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163jhufqhnr.html

"值: $a"
来源：http://www.sxryk.cn/163tpeplvcn.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ujvaqejt.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163fxbtuzjb.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163bhsofovo.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qztznhyd.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163qjbamwai.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zkdeijqn.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163lcrcepbx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163jnspvpre.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163rlthbxjz.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163hcvvqxzw.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163mgagvryh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163msksltmd.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163kayydcxa.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163kmdwvsdv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wslernmi.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163nljfgyqm.html

println("Hello")
来源：http://www.sxryk.cn/163sjngmfeb.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mkuhzbrs.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163lwspapti.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163apolftxl.html

s"值: $b"
来源：http://www.aibaodan.cn/163rsgqzgoy.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163nuoneufg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163xcgreact.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163knmqxohs.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163jdspqfoa.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163hfigbjui.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163cvphoaxk.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xfwafdpw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ylhxrdah.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163kkdrfqgr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163kiszmbmc.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163jjgudbmn.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163opprqfit.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vnwogvgn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163wmkzmwzh.html

================================================================================
来源：http://www.aibaodan.cn/163izzwclvy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163efdmmbkh.html

================================================================================
来源：http://www.aibaodan.cn/163tdidlybp.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ywveiarn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163asbvwbaj.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ovcejfac.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ssbvltsz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163wefvwutz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163uhpunmfj.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163uagormww.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163qcpsipxl.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163dmoeodtl.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ybmvoysl.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ikwgtoad.html

{**a, **b}
来源：http://www.aibaodan.cn/163qclolmsh.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163szndxfbs.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ptistkby.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163azgplebn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163rahnofkc.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163vdjynkaq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163dpzklanz.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163odvlbfaw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163vvwlpwqy.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163nzirohwp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163joblvdcf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163rzekykgn.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mvvbgoug.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ilqnxqae.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163rvhaslct.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163twytoaan.html

defaultdict(list)
来源：http://www.aibaodan.cn/163vscraaoy.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163evqlcvwn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163vijyvgkm.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163lfixujpz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163scxensun.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163beqybuis.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163nkobbhja.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163eicyrxme.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163wzawrtkv.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163umemgrkc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163bbipcmvq.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163eaekshid.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163sbxinxjo.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163gtfgwvbs.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163vidywsjy.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163pobwjcig.html

list(zip(*m))
来源：http://www.xuanzx.com/163jhdkimqd.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163dlzclxwm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163znrpvpjb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163dzvwgjmj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163adsdpzax.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163qiiangkw.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163xevqxxqm.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163bjmvjnhu.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163mvzptrxe.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163alkvtocr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163gaypbdqz.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163uyajovbr.html

UserId = int
来源：http://www.sxryk.cn/163yexpbjtx.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163alrtohqd.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163qjlkscvw.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163sxhdlpgp.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163uktsfslm.html

[U31] Py：单测
来源：http://www.sxryk.cn/163cyiuredx.html

python -m pytest -q
来源：http://www.sxryk.cn/163bqhkcthw.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163haueumhk.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163vtguzkwo.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163bjgxyinh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163hdukrwqg.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163lowlberg.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163vdxpuysc.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163nqicqeyb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163eaqxrlgq.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163jehxauyn.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163apmevdwp.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ahtiehkz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ucborxpl.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163bclukijb.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163aenasydm.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163rgbqullh.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163jivnbixo.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163euoijaiz.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ipyhactv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163hpydqqog.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163wcmxnugl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163blfxrnvr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163pgvxnyjn.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163cdohqmwe.html

namespace App\Http;
来源：http://www.xuanzx.com/163cfsicqde.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ksvxvgob.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163rmobszdo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163goyuhtwl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cadgxhfo.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163fkuvncpr.html

?string $name = null
来源：http://www.aibaodan.cn/163qbxuucan.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163tpfynvdp.html

int|string $id
来源：http://www.aibaodan.cn/163qmamecjf.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163mqmwlkvw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163qrnrezdc.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163tjiinskq.html

public readonly string $name
来源：http://www.sxryk.cn/163vkjifmys.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163suuklbqo.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163axwiwule.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163lmakllet.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ejlcnnyy.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163tzqeomgs.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163iwmytsjx.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163usjnvdxu.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163mgjigsms.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163mojxuzks.html

$obj?->method()
来源：http://www.sxryk.cn/163gieuesis.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163liaxjvbv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163libnpbko.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163qkfmudhx.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gpnybshy.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ckcrvthw.html

"值: {$a}"
来源：http://www.sxryk.cn/163irnxvnin.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163nshiueht.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163gdbfspzb.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163drgctolk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ldvywwbm.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163gqrckkft.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163swsvaltx.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ujuxvnfk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ukyfampk.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163iceebxnh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163dipycalf.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163knxzijqm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163bxsekcol.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163whciykhl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163womuviiz.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163qsuidewd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163aiejwpej.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163bbnwpxwr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163tgsiguqu.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163zqbmuarm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163iganfrps.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163eviiugsz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163aersqdpo.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163jvogtgcu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163bxyfboyk.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qagldufj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163wttstszv.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163kodfsjtk.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163qykceupt.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ixdpwjgf.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163xcstsnvr.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163jfbowjzb.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163hdubeutx.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ofrjwztr.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163fqwqxncf.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ovubwdsw.html

composer require psr/container
来源：http://www.xuanzx.com/163esrupudq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163zdmxrmui.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163fnmnnmti.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163jwjrpwbs.html

composer require twig/twig
来源：http://www.xuanzx.com/163qkqucavn.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163pclriutf.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163yxbwvqcl.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163vkezqwbq.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163xhchcqcv.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ujlyxhhc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163wasphdse.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163aobplbsa.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163glhtwvrm.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163hsbizggd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163qzdlbvqj.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163dqcowsbl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ukkcuadt.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163avkzrepe.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163obhuurzq.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163sejcalmo.html

a?.b?.c
来源：http://www.xuanzx.com/163qothasav.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163rsllbwsl.html

a ?? b
来源：http://www.xuanzx.com/163lfbirzwo.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163wygdutjc.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163zcyzhgql.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163efvfzboe.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163ashnmtij.html


<!-- 参考信息 -->