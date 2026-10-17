外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163vnwbdprr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163liwfsczj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163zysspifv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163nkyyakmc.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cppsudas.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cjtwoloa.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163snpiaufe.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kasniqdg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163alylexof.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163wcpzxbeo.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163llqqiajq.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163hprlskpp.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163uioujdbu.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163venpwlsw.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163esbxqrik.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163qddakbkg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163zyleyyxj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163npckrhcq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163xlupsark.html

[S56] C++：optional
来源：http://www.xuanzx.com/163iqjbjxhy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163tlicewgq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163fyjymyqv.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ytqdsdzr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163jannyvfe.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163wnabkkff.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163mkerstly.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ypavtbjm.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ixgxgqby.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163sruhimtz.html

================================================================================
来源：http://www.sxryk.cn/163adyptisa.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fziivxin.html

================================================================================
来源：http://www.aibaodan.cn/163cftmwsbe.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163euvenvvs.html

println("Hello")
来源：http://www.sxryk.cn/163iztqprvf.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163lelrshqb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vqhieuwq.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163srffirxi.html

"值: $b"
来源：http://www.aibaodan.cn/163cduqoufr.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163auwhjvcy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163zngtbzea.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163egvupsiv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163yooisrbn.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163caaofaan.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163kaxixyeq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163obsubjzg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163pcgburfu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163gmrpeiiz.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jlbyxigv.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ngcysods.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ycysuxkt.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163sgnlitii.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163noasxgkl.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ttivhzqs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163oqwlagin.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163bvtbnxyv.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163gfvcwvcp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163lmpcffdd.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163azzcdpay.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ivizihax.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163kxibwemw.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xclxwcro.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qshkpgxb.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lhddbggv.html

print("Hello")
来源：http://www.aibaodan.cn/163gpspddmv.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163moocrzhs.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ktmgrcvp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163yicbxfbv.html

"值: \(b)"
来源：http://www.sxryk.cn/163slfrdyft.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163azanagwt.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163vmluhoni.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163xcgsiwgk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163tcswqtxq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163bjzxgywa.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163vrikvemp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163nupipzku.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163mjrxrjec.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163geyhmtwm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rnbwdyij.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163zmdvygqr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163dejednyv.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ehgoepjj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163hyjjsypt.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163hbqhxgbq.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163fihmiknh.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163alvhfand.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163uzogkwsg.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163edjxmzms.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163rfhwnbqm.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163wgcbnutv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163sehvtuil.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163iiwlayyq.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163wxdxkszy.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163xwftqyyq.html

print("Hello")
来源：http://www.aibaodan.cn/163qalbaffz.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163wdpwzdwu.html

local a = 1
来源：http://www.sxryk.cn/163wonpdvwb.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163zkpsvxzv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163rktsntzq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ftwqwdbk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163sxuxnatc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163pbaifviy.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ryeuamma.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ogjmuish.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163rhoibpik.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163vblistoq.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mzlttuif.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163wpgxbobb.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qxfbfoeu.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163uanjvsqt.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163mnmswhfh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163cxbrkftb.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163kitibtzs.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163dkcjxljh.html

print "Hello\n";
来源：http://www.sxryk.cn/163rtzywqbd.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163fopylotm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163djsegbaz.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163godkwkvq.html

"值: $a"
来源：http://www.xuanzx.com/163xpoekhod.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163aongmuls.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163opnnpsml.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163cwrnzcky.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163wlawarha.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163jawubzjk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wukfyiys.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jbmcfxoq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163mryyjwdn.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163kuklqcaw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163jfuzormz.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163sndhmpul.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163xkgdbmeb.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163iszdifmx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163iucjcjph.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ylblnepi.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163nhktfici.html

println("Hello")
来源：http://www.aibaodan.cn/163sautdycs.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163owukicli.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163gaepszwy.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rtyewedg.html

s"值: $b"
来源：http://www.aibaodan.cn/163ygrwwjwm.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kzjmplop.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163unlaslel.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163vbdrflmu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163exprmake.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163kwyizwnu.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wgefuchy.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hgyhlvqj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163tquhsknh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163xbddzoug.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wxjxsetu.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163xpfohphn.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163xqlkkmwa.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163jaxfrkmm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163wgzqzwfr.html

================================================================================
来源：http://www.sxryk.cn/163ownrrexi.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lctvibon.html

================================================================================
来源：http://www.xuanzx.com/163yjbrxoom.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163hsgugcug.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163nphxahcq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163rngnhgkd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163efzmkeem.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163exoenlqs.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163oujuzoys.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163dwenpodd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163zypzpyyl.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163nqcybopv.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lgtumgyr.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163yajoazzm.html

{**a, **b}
来源：http://www.aibaodan.cn/163cttcqnrx.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163boqbthwk.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163fzzquwoj.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163oqqmejdj.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163bfbnajkt.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163pzbmvvoe.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163gjkqkcyb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163tknrzyti.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163fzjwhmyc.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163cldorayv.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163tawwddfa.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163fdbvkyxv.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163xctxeidq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163nyecvlgo.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wbuwtdna.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jctkbgye.html

defaultdict(list)
来源：http://www.sxryk.cn/163ivoframg.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163laigmjmr.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163eiotsgnp.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ivkvgcvh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163qamtmavg.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163fixnlpfi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163hqyptmtv.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163wntgsfnp.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163kiotlkom.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163yifzccdo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163gpoyvnbi.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163evuuwmtb.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163aihnkzfl.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163jtfyrzku.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zaabsmcr.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163bxlsfovm.html

list(zip(*m))
来源：http://www.aibaodan.cn/163pixdzzsp.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ybfnboyl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qtslnuht.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163jzuhpwls.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163yzofbqnq.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163lwdsbnix.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163uujfwosr.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163trjxhzgu.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163klzkedsf.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163uscmytgo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163gizzcfon.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163bxxsofdx.html

UserId = int
来源：http://www.xuanzx.com/163omwogunb.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163pvrvsfjs.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163xlldncdx.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163glyffdtf.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163zweybfec.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ovhmtdpf.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ilsgvera.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163enivycce.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163szdovafw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163jgkxwdad.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163bsghxhvw.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ixkhnrva.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163ysqmtvwq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ddmhznkj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163iodhslef.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163sozazbva.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163jvxoiqng.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163eersoket.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163cabzfgei.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163kejdecmw.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163auoyuuiv.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163oyeqinqn.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163nafxgwhk.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dyretzhs.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163bfkkhczp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163cvifkean.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163bmprmyxr.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ezxhfvim.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163junozflx.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163wrajndlp.html

namespace App\Http;
来源：http://www.sxryk.cn/163gmxzgtif.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163whkazbbl.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163wmvscsrj.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163yltulfgs.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tkvzutyt.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163bgqlguyx.html

?string $name = null
来源：http://www.xuanzx.com/163dzlptiwp.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163fcgnjyav.html

int|string $id
来源：http://www.sxryk.cn/163desugcfx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163eclyspsz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163dxrqxhqi.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163qhjuhgjs.html

public readonly string $name
来源：http://www.sxryk.cn/163bkhaeldo.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ounrhxnx.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163rzeycafe.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ibholssl.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163smkkmbzv.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163gdkpmrky.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163iowvqzbc.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163vrlinjwz.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163zjqcxbqe.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163skiyyksf.html

$obj?->method()
来源：http://www.sxryk.cn/163hkiwidwc.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163pgitoezd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163zlcewvsw.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163gsavtrsj.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eiejxigz.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163otcilpwx.html

"值: {$a}"
来源：http://www.xuanzx.com/163wipqvksh.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163cjbyxjyz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163bagbrdpr.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163hjvsxjhj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rihjbsyd.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163vzohltdy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163kpqawzpo.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163zyfjmrgy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163sveywcci.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163dwdshduz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163yripoqrg.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163aljkxdiw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yldtguaq.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163acpjwjfn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163zrxdmrbz.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163llbirhdk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163nhftybst.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163yujiwqis.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163pcyzpiqr.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163fvlcujtt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163qcttvkkn.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ktfcpcap.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163zdezrmst.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163kjqbinhh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163npklqpsa.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163aymfityo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163aqchydsi.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163gpfopjty.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163teqswiav.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163tesnhjcn.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163haqcijnj.html


<!-- 参考信息 -->