外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ymgnsagj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163tfrcdphm.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163uhcxvseq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ghytzyxn.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163tozoifcs.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163txxawmxc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163kpbmxsqt.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163zraakmce.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163jnjnqusx.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163jbajbrbg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163tsdqqdyk.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163qrffpixb.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jgdcyrrb.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163qbgghbyk.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163lcxvlzxu.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163eszhtbun.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163vgxbtfqr.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163vjabmtvx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jksduaim.html

[S56] C++：optional
来源：http://www.xuanzx.com/163mmuksovb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163kerxqqvy.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163uinyulhz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163pirucjsk.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hwiozols.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163jibhjruz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ncsvqczy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163wioftqnw.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163eesulzjb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163waiojhvx.html

================================================================================
来源：http://www.xuanzx.com/163xezoshva.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jkblryhb.html

================================================================================
来源：http://www.aibaodan.cn/163uwznmudo.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163seqbuyjf.html

println("Hello")
来源：http://www.sxryk.cn/163cjqnakxc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hrnkwzkc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163nxinwrmd.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163sgjmpekw.html

"值: $b"
来源：http://www.aibaodan.cn/163cnktfnmh.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163fgmgbbis.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163yvnlshrp.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163zwhqhebk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163dkjvshzr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163woamxmne.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163yurygjvp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163kkfzkvwx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163sfxgzgta.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163eysqxnux.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163rdrevcrw.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163gvaqcbwi.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gkjbqyso.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ybrfdbre.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vgiysmrk.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vhwhetlj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163pkcnquxo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163cwqpztcf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163dvqhqviw.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163sdqmcxai.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163tehpksuq.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163tzeyzdny.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xyodbwfz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163dkqenixx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wsnjgvhs.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163fymjzajj.html

print("Hello")
来源：http://www.xuanzx.com/163qpbortpe.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163jwgsoqia.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ctdtuksq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163majjezcr.html

"值: \(b)"
来源：http://www.aibaodan.cn/163mxqyytka.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163blgyifbb.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163vktvcgih.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163tytezami.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163sgaermzu.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163rzhuifdz.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163fevbmfkd.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163hxthnvjo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163belggmda.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163kzhiuvwi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163uvlpfykj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163qmrwvage.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163lcwziclb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ddmfbbxq.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163cgkxfsrz.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163tibxprbs.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163rrwwtszi.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163atadaedb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163jdnxducd.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163magddcpb.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163lmgyjkis.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163usouglhs.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ibxcopum.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163xjobnhhl.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163brlnghqm.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163svufbrfl.html

print("Hello")
来源：http://www.aibaodan.cn/163cwgmoiit.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163vvclarro.html

local a = 1
来源：http://www.aibaodan.cn/163zhcfzlvi.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163mdfenuxp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163mghzslqb.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163gumrphqv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163iqncmifh.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163xazuazla.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163juasmebk.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163zdgmavpz.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163sqmceced.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163pazurbey.html

"a" .. "b"
来源：http://www.aibaodan.cn/163vxryqxkk.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163xcktijui.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163cdeumkyy.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ohegmkht.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kmkulgps.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163mpdkhigc.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163yjmrevqk.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kdsqazsf.html

print "Hello\n";
来源：http://www.xuanzx.com/163mwbtkokj.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163vqfyvsbt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163iqcqvpyg.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163uhokxzed.html

"值: $a"
来源：http://www.aibaodan.cn/163dgktzksh.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163mcbftjaw.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163osrqnoci.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163hcqcpnbj.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163mnizagpr.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163yaixurwy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163hlssnitn.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bywmpnni.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163jwcwappa.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163prgndjwl.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163hxdpagdw.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qukrvcjm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163aggnwiqn.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163jagpmrsn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163zhhcdtuo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163jyjpqsst.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ovmibbas.html

println("Hello")
来源：http://www.aibaodan.cn/163qkzdywmm.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163bvcijryg.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163qvbswaaa.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163eslmktyz.html

s"值: $b"
来源：http://www.sxryk.cn/163qclinngb.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163acetcnrv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163gtmboddm.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163pkldbblu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dwikoetg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163zuubknvn.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163dyvpozyu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163fghvxvjo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163rgmrmvay.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163yaynuccr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163laznkoib.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vcnkhntk.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163rdckeumv.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163fqbxtdlm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163msisdwuy.html

================================================================================
来源：http://www.sxryk.cn/163nlyzzxrt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163tnxevjdm.html

================================================================================
来源：http://www.xuanzx.com/163mivetwns.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ykvjqqmh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163masvwdia.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163cvdofqek.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163iigublez.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163biwnaygf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163jfkvuncc.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163gxgdagjv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163fjubtrnx.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163btwdwstt.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ngqssolq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163derngtrx.html

{**a, **b}
来源：http://www.xuanzx.com/163ihzbstxe.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mfyemdyj.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163seweywde.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ksqpnfgo.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163pjlylmot.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163zycchxol.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163wbcjvstl.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163pmshvxkt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qlhfsqbi.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163rlksxkoz.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163orywgpxf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163puuryqbk.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163yhvsxyli.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163cstqoyze.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ualwdxet.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163sggvbfgt.html

defaultdict(list)
来源：http://www.xuanzx.com/163hxduddab.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163wwokerxs.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nriwskfk.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163tdovfirx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163aojanpqs.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163hkyntkvz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163kyiahujv.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163yzqysbrw.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163whqzffpv.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163movffifu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163unibnwvv.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163vxnozdbd.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163urqjxqoq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163hjdhpwkl.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163mvlpvpfe.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163fvfdppim.html

list(zip(*m))
来源：http://www.xuanzx.com/163yemddxrn.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vafxbxvs.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163gdgcuycu.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163hiadwwxe.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163adpsmznn.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163aivpsyha.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163exrtyzel.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163yebpheeh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163kljtivun.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163erkumspk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ockrgumt.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163cglzfgxj.html

UserId = int
来源：http://www.sxryk.cn/163rzsflasa.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163zsvtfqwy.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163nurmjemk.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ahcuzstq.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163wwhtfdze.html

[U31] Py：单测
来源：http://www.sxryk.cn/163yvqzlbol.html

python -m pytest -q
来源：http://www.xuanzx.com/163dcmjupfx.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163hmjlayxa.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163bcvtelei.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rapjmcgo.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163jryvwpmz.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163dnvombaf.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163xumtfaja.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163bodpfsyu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ddmgdiem.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163jydtwjcg.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ujlxpydk.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163zqqsmvfw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163mmdiatgb.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ygnohvzm.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163wxswmycb.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ekmenpfp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163qhkycnna.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163qzagrsyb.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jcrddmrw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163mphlfvyw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163wloaoioh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ctddhthv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163chyqdutw.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163eikegjiq.html

namespace App\Http;
来源：http://www.xuanzx.com/163tdkajtfs.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ghurwuku.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163rviplulo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163avvxyrbp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163frwnyazs.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163oakrwzdf.html

?string $name = null
来源：http://www.xuanzx.com/163cawkpssh.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163otlldadg.html

int|string $id
来源：http://www.aibaodan.cn/163jkyufoxo.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ljjmylix.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163vbegmvcf.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163nnsaarmz.html

public readonly string $name
来源：http://www.aibaodan.cn/163yfllofop.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163znehhjpk.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ohasscxi.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163otqbcyet.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163qcqcfxtp.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163jhjuwvbu.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163kdbiofjs.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163dulbidea.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163urbbeaak.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163wvzoukhx.html

$obj?->method()
来源：http://www.sxryk.cn/163cpwarkqy.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163gwzvyrfc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163fwbuvjba.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163lvpuuxzf.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gnoarcmi.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ecjohncp.html

"值: {$a}"
来源：http://www.sxryk.cn/163speaidmh.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163exxxtewd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163kepznidv.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163rizbxjhq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pcazsdbt.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ylmxkwhq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163rskuobeo.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ilxqzxhy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163enaghjyf.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163aocijmvn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163vratgskl.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163xpppjzly.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ivltebbg.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ymparyou.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163fbbzscrp.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163onzroxqf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163wxsrdqjs.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mgvfivdv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163dmlkfjon.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163rkyvkehc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163soaiwndt.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163yzvgsadi.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163llmupvps.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163rromfxsg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ufoywkmj.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163zhpvwxbi.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163kgdtibkg.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163fbqvmrjo.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163fzntmgsb.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163uorkotlu.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163rytscqsb.html


<!-- 参考信息 -->