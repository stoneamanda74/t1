外链999!wailian999！

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ivjwtclr.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hugaujmh.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163yctnfkxn.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163zyipasqw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163doyurynd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163igaantai.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163wzkyczsm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ekxachlh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163cqgmkhdu.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qmkfkudo.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163lasbsvnx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jlcewmcp.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163zpckmtnq.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163sgtvfhbh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163uaymrqga.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vjcbcvbh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163yyketmig.html

================================================================================
来源：http://www.xuanzx.com/163tgdrgkfm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163nwojnydt.html

================================================================================
来源：http://www.xuanzx.com/163xwnlnlpv.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ejfimwcu.html

println("Hello")
来源：http://www.aibaodan.cn/163bfiavdpr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jaxjulyz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163igyxmxhb.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163nxudtcey.html

"值: $b"
来源：http://www.aibaodan.cn/163aqbktanx.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nwbkihrq.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wzakjpwn.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163odslurvf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163kgstmlwo.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163mhezzyvq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163hsgxxmzp.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wpqowegj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163wtcrppsp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rbtodkcu.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xpofaadj.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163cbrdohtz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gkbbdyca.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vkacffml.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163owoqodbp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163lxfdkhro.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163jstncfcz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163gqtzbpkx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163kskcksxi.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bwxgbyll.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ecpvimzs.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kpyqoegx.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163lvkmtxlz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163asckhutm.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163cwdzesqa.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163wtuucauc.html

print("Hello")
来源：http://www.sxryk.cn/163klyspsim.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jotfupnh.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163lmkvcbdd.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163lovwtuqc.html

"值: \(b)"
来源：http://www.xuanzx.com/163vigzqtgv.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163lcvcbczi.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ebdjscqv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163oaplizor.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mfkartlx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163peqszebu.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163quvvmcdl.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163hfmqujsz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163sjjhgbye.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163iralzgjo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163bwjedrct.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163yhkorhjq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nhbujhgy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163uzenlini.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lqtehjne.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163psitgzze.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163pnxvjznk.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ovndjmhl.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163obmtlcio.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163jllczefz.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163adjqoxfn.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163mnkskcvb.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hvpbyajb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bjoiafxm.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163amehhmsl.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163rgzcpmzx.html

print("Hello")
来源：http://www.sxryk.cn/163nhouejop.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ilhxuptq.html

local a = 1
来源：http://www.aibaodan.cn/163cluhujsd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163tbbfzyfk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163fxlcukey.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163igsqaheh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163gcugkyxg.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163sytyvtwj.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163izeefhqr.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163nptdzcfh.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163dccizgvr.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163xckicpyt.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hwbknjys.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163fvalsvzb.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163xobhnsyd.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163uyuvfwjr.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163xbhvhftn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163wqhooyag.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163yzqncrjl.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163wpbryqrw.html

print "Hello\n";
来源：http://www.xuanzx.com/163jdyjrbda.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163lzkogyjj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163axtgyibx.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163gbmclbnh.html

"值: $a"
来源：http://www.sxryk.cn/163vdfpnkos.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163lswvosfs.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163gqchlapl.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163qepvgeuj.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163kjeuuhoi.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163bzveazlw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ntilawoy.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163xytylbus.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163hshjimef.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ompjnfpq.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163tzqpadaj.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163nhyptyjt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163oglnjims.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wvbysezj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163mlxqwtyq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163mpktoqmm.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163bwkhfsew.html

println("Hello")
来源：http://www.sxryk.cn/163joywlxxr.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163vccrovjg.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xuhagzlc.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163segtaixf.html

s"值: $b"
来源：http://www.sxryk.cn/163ecezknmj.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163nxklcghn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163hhkudwrs.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163qyxocroj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163kwxhqhoy.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163cmcvrqub.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163eflrgtxl.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163mccinlfu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163btlplzom.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163htupiijk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ryjnejpk.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163uslwjgml.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ngjqzars.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163rxwjvvmn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163vixxdoyu.html

================================================================================
来源：http://www.aibaodan.cn/163pfotyquy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163pbmtjneb.html

================================================================================
来源：http://www.aibaodan.cn/163lsoueihp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163cyfvkssm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163djunlfnt.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ihvfjarm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163mgvbeqbe.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ynxqzwvy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dfloqogl.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163jaznotvo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163pxrumiiv.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163hmauguvc.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163oxzmdaeb.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163lseyfcec.html

{**a, **b}
来源：http://www.aibaodan.cn/163bgehpfob.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163abpqxxsy.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163fjxbqxci.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163dcwjpoce.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163dfklewmp.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163bgjnfydu.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163eqhoxotl.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163mthgwrui.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163mbauzrni.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163jqglencw.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163reuokchx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163tirbvslb.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163svddwedu.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163fbfklyuf.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163xwfxmxyd.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163fwrqnnqe.html

defaultdict(list)
来源：http://www.xuanzx.com/163immweiqz.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163icbpzohp.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163iazchiwv.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hdcnzytm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rbrchinm.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163lktgrxbq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163mqovfdro.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163azieoorv.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163anarxygl.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163qrxgejmt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163xipbzemr.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qfckoppo.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163cntqudvw.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ldhvwtwr.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163elqqowmp.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163tgprruub.html

list(zip(*m))
来源：http://www.sxryk.cn/163cyiorkxe.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163zmnruasx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163swptdsss.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163udolyglp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163xmyaqlca.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163bpvyjiwi.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163rgvjwzqe.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ntgelhxk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jbtbvqqb.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163tixytndb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163zjfycwgx.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163unbzazbx.html

UserId = int
来源：http://www.xuanzx.com/163dlbntgel.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163nhjfjtbi.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163clzmbjdv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163gcqvcnqa.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ukbguams.html

[U31] Py：单测
来源：http://www.sxryk.cn/163iivjsmen.html

python -m pytest -q
来源：http://www.xuanzx.com/163rkxegcny.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163mzzpbewv.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163mvsslthy.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163xxduwpxp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ywgkbhkp.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163dgmgkmqx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163nojjceqi.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163dnkinkgh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163didjqano.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163csqylpqu.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163jlinwawr.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ujfisuis.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163poftbmso.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ttanixah.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163hyjcffaf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163tvlbvcua.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163vxtjhzxw.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163uzsjeqay.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ajkeiwuk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ohduqiol.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163zvrxmxcz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163pnjdnpwh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163esqqfluh.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163flufjyvj.html

namespace App\Http;
来源：http://www.sxryk.cn/163rezyhdkd.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163kofiyoej.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zqgxocqx.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163iebtyiiq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ycrrskio.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163mjekyphv.html

?string $name = null
来源：http://www.xuanzx.com/163extuqhdi.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163vecoledh.html

int|string $id
来源：http://www.xuanzx.com/163fczkpxuk.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163uvrzxmep.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163cduysfhw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163fhjfllqo.html

public readonly string $name
来源：http://www.aibaodan.cn/163sxadwxgd.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163dpayveua.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ucscwtkt.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163jhxdbktl.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163cgzxwzfl.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163wjbwelsq.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163vzmtopzr.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163bhlhainp.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163gizuuyxa.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163sgrxbcik.html

$obj?->method()
来源：http://www.sxryk.cn/163lhrfzzaj.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ercraqbd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163tygrwnit.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163bsjistzh.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163acpuiwlg.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163oqrzudoz.html

"值: {$a}"
来源：http://www.aibaodan.cn/163wldgmqal.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163tljaoowl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163jqumyoec.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163scodvgio.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hrpwggkk.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163rcyrafny.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163pjcpzact.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ubybqmef.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gpayeujm.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ypvnjlby.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163tuuxqcci.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163dvfztxhj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yvcsskgt.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163bzytqybn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ngwfcwxa.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163htlmzujq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163kxcigsps.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163gjyrajse.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163xyarietw.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163fuvmmdxn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163xypcbjck.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163yyjucprw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163yatohohr.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163gwqiamhf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163xayvepke.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163baiekvtx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163iunhposc.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163ramsgyys.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163cqwjsbzb.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163lclgwbpm.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163jfdnhzvv.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163rvcqredz.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163wofbjczm.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163hlzggzhl.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163anasabuw.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163irvdeiar.html

composer require psr/container
来源：http://www.sxryk.cn/163hpgipvus.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163jqkrvxxs.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ysawjhrl.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163zepvjmiv.html

composer require twig/twig
来源：http://www.sxryk.cn/163ypppaudi.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163jwvyephn.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163lllpcvrr.html


<!-- 参考信息 -->