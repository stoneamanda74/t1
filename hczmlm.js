外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jpbfrtcs.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163jywiasoq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163cjnfdxrd.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163cphjoiou.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163bjdairlv.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163nadjpjfj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pfaewnmi.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163tcimfgoh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163smasxdpq.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jaabitth.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163iewbtttk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qrxyvipc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qezammja.html

================================================================================
来源：http://www.aibaodan.cn/163yevtilkk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163iczwuybs.html

================================================================================
来源：http://www.sxryk.cn/163oycliztl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163kopdlawt.html

println("Hello")
来源：http://www.sxryk.cn/163ckmqfgjn.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163eapbpmph.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163rtsjxmtg.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163aobaxiaa.html

"值: $b"
来源：http://www.sxryk.cn/163kdibgatp.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vtfjyoki.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163pkglkqhc.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163orqcbmjn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163dsaznohg.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kvrpylbo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163kajxgmum.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163woqimjuu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wryhmpde.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mabrqpfk.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163xtkcosxo.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163tpjpmgcm.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qipuvlvb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163vnxzosks.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163dhkxnaak.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163fbbaawuj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163mlmzztdc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163msesacwe.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163bjahqarr.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163uouiabah.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163bmuyqjxk.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163fkbafple.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163pzgjniyt.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ifsqxkuk.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163bscsmkys.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163faefkbph.html

print("Hello")
来源：http://www.aibaodan.cn/163omoesrjt.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163cfogjpzq.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ddksplid.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ymyrrfbu.html

"值: \(b)"
来源：http://www.sxryk.cn/163xdaacstq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163toodevav.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163mkawwaxd.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163xsfsqmzx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163rjrvuvrt.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163tpsqricb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jqjotyeh.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163mxbbvnit.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163cchdznoi.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163mldqbhdx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163dnrgukvv.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163cizodtpq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163oqymbcmk.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163eemeklti.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163wnrwzzxz.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163uwtahrje.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163byrubxxg.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163mqruejhl.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163kisavlue.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163yzcqoaal.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163hxcvrrdq.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163njywoahc.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163hssthndp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163fsnejbyn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163anripoqq.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163adkrflge.html

print("Hello")
来源：http://www.sxryk.cn/163hhykyzim.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163crqepiqa.html

local a = 1
来源：http://www.sxryk.cn/163zosjmtcd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163nlohmfxh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163axfvepwv.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163cngzcapv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163pisiigvu.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zubzybts.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ojhnmxvg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163kxgswoaw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wyvrigzl.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163dciikafu.html

"a" .. "b"
来源：http://www.aibaodan.cn/163labrpklq.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163rfbolefe.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163fvmubscj.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163evupqcfk.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163tmyfhpfq.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lbdnylky.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163rjrpolmh.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tlftnral.html

print "Hello\n";
来源：http://www.sxryk.cn/163uqdyjjms.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163wytqmlro.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ffadkpaf.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163oyppybqv.html

"值: $a"
来源：http://www.xuanzx.com/163vvxfvgja.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mebyndqh.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qjufumbe.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ukmdyyph.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163aioqoata.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163eitpqczw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ncmfdnec.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163nprwzgex.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163djkktcrn.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163jvpdlmsq.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163cjgyqzec.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163eoneejpp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163pfbbsihr.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163vpxaysaa.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163fruiqmxz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qwbocste.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163somgkxto.html

println("Hello")
来源：http://www.xuanzx.com/163jtaljrxk.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163fcvfmzdj.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xhuhbype.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163lgqtwxpx.html

s"值: $b"
来源：http://www.aibaodan.cn/163sdwvhjbj.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ifvfocnx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ktbethad.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163bqpzfvab.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163oxtozyux.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163abgvbxip.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163htholqiy.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163mrnbonib.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163amkhiqau.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ljkmbsyo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163fhvhtuvn.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163njjnzjpr.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163cxflioka.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163fifrkxty.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163whaavdta.html

================================================================================
来源：http://www.xuanzx.com/163zyikxgja.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163gunhnsqz.html

================================================================================
来源：http://www.sxryk.cn/163dxrvpdhh.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163mxqmhxca.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163htajkqru.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163tamnlzdt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163gauquzjl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163qzyoycex.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dgkfrsqa.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163afumtfbg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163mktbaypx.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163wozyzwjp.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163yhcdhxxb.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ioskwpbv.html

{**a, **b}
来源：http://www.xuanzx.com/163pdajbfsu.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mpckmflw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ngnmnzta.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163xeiqkhch.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163dfjlpwye.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163fyjxnvxn.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163xgnekpvw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163kpkvqpbg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163jyhjsxcp.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163zubnblyo.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163fciqmlqi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163jopnvjzm.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ibnopvkv.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ophvvhdu.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163glaxvwix.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163jiyxhndj.html

defaultdict(list)
来源：http://www.sxryk.cn/163nrvoxael.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163vqgrjawi.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ottxygpk.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163sxeqdgnb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163slkwqwje.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163wxrmbvqf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163tqpwmnaq.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zethucvj.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163dzreevfj.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163tishahhm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163icothfvd.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163wqlzwbji.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163fogifpsz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163qhtozbse.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163upwdnyge.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163raticxpl.html

list(zip(*m))
来源：http://www.sxryk.cn/163tjqozvcf.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163qdunvlkg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163vcjdcqbt.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163jkdxflhp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163okrnjqdt.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163qbittxbg.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163aiiefwjo.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163upcsoaao.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163cylzhiuz.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163rmkykcsz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163xvihxank.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163wvuclptv.html

UserId = int
来源：http://www.aibaodan.cn/163erfnspxx.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163anoopvsy.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163sngaucfo.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163oevgqyaf.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163kgnxurpb.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163hfbopbxv.html

python -m pytest -q
来源：http://www.sxryk.cn/163bkocaoar.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163kzdclwzf.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163fikontaj.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163abszwvuw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163xktoriht.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163zojnajhr.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163bdgnjchj.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ntmdmcvn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ueldsdtm.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163gychszfs.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163iqwojqmu.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163azwasear.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163stlvkgxy.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163kelzmfdj.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163zpebqutt.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163jrolcyba.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163hzdpeand.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163khxhbcue.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ljhuiocq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xlxvpdrc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ecxatweh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163lpwsjxri.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ewqkkvye.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163dewhfyeo.html

namespace App\Http;
来源：http://www.sxryk.cn/163itieotkn.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163fadglwub.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163rlkhwink.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ofgkdepx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pziiqdwf.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ajwgelap.html

?string $name = null
来源：http://www.sxryk.cn/163ttmbqbmy.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163vtbjdlje.html

int|string $id
来源：http://www.aibaodan.cn/163gdggrduu.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163tebiwyjx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163zwknfgwf.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163uwjrhboo.html

public readonly string $name
来源：http://www.sxryk.cn/163dlxmyatx.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163xvwfrmbz.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163qlamyald.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163wkvynbmb.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163qjxcgfsn.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ftucrlav.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163wkkegziz.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163neknbeay.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163lmldstcn.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163goiflezc.html

$obj?->method()
来源：http://www.sxryk.cn/163hurnmscm.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163lhtwtyix.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163mruuxehd.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163jsfychbq.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wcavffqr.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163fdzxxsrb.html

"值: {$a}"
来源：http://www.xuanzx.com/163onwlaypb.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163qjruwxqf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163hbwcbbbn.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163hlixdfcb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zwxuvntb.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163wvpijsdv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163hgoaeyfs.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163pdeuyorb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163aonjyfqy.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163fdfzdhvy.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163krahyjzq.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163hvevxgqg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163zuiyrtyd.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163mbnjeakz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163wqbxxdzr.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163uxhaowzz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ijnoybli.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163thtrfafa.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163zeqjluux.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163oghypghw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163cjfroopg.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163vicwgqjf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163artmrnyp.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163khncjbgw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ijhisbiq.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ivnszkmh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ycywoxaf.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163xofatlin.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163jgbnjpmj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163sgbdhrkp.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163vkinkmao.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ciheankm.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ygcrbczr.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ljhbcmor.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163khxwlwri.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163wssnjfit.html

composer require psr/container
来源：http://www.xuanzx.com/163gmwlnfnf.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163hwzemheq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163sijhwjvd.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163nehphphv.html

composer require twig/twig
来源：http://www.sxryk.cn/163jitysjib.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163dfpjvyqy.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163kbxosoto.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ykypkgek.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163gndivkkd.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vnydsaqp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163zgjqnfyv.html


<!-- 参考信息 -->