外链999!wailian999！

[S43] C++：智能指针
来源：http://www.sxryk.cn/163atzodqqi.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163fwjtojsl.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163oypyesmk.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dksweacr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163xvxrdyoc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163mbfyejpj.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163scauhilz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163futojftf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163cnlozpvm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163jsimsfzi.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163gjdgrdor.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ocxnwiii.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163iqqczhlh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163htfpkpxi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163wwzzmucp.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163eiqsbvnf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163wknelnmu.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xlocnuob.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163atjnufwl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163oflehoes.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163sekjykga.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ulgxyxpl.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163dfftzqpp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163qzstexlj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163prpwrqag.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163plttgkrc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163wxedkwgb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163rvadskla.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163lnwvaurq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163fgwoblnd.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163zhltskpj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163dkwyfftp.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163atmapapf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163sybyprsi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nxbybtlw.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lelkasgr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163shafzdbz.html

================================================================================
来源：http://www.sxryk.cn/163gjjizmzi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163locadket.html

================================================================================
来源：http://www.sxryk.cn/163hgqsqxjk.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163miaewbii.html

println("Hello")
来源：http://www.aibaodan.cn/163jntlfeff.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rvsnudsr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ooazqgib.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163cpiehnco.html

"值: $b"
来源：http://www.aibaodan.cn/163ejfhabmb.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163murrgopt.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163qxhlpcnr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ahitgveb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163bzharoyb.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163khegiuxj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ihboclvw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163lxoowvxk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163jqoqbudr.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mtxgxwum.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ecuqeghc.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163drszmpuu.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163cpvymwfp.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163jqgqcbqw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163shqmqouo.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163yyryfvuj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ofrzyocb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163tcbftmhj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163onwgnarl.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163adyszjya.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163xiboeaat.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163hbocwprh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ipbubpft.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163qconnfmu.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163nfwfyarh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163qdugkcwl.html

print("Hello")
来源：http://www.sxryk.cn/163ecguiomu.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163fkvkkiul.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163wonqkbly.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zqhckxxi.html

"值: \(b)"
来源：http://www.xuanzx.com/163rbiurouq.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ycfkypyp.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163pmgphzzd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163xtkvdurt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163szeqdvys.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163vyegwlfq.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163gcqechsk.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163svgxgmax.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163yyabljcb.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163svrquvik.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163pxevogcw.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163mpempykz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163hrwfnvsp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163okwzgjpu.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163riopuatd.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163cylxumjn.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163uiojewtb.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163vluhyynl.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163nbnflroi.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163vdcblijv.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163clcvqyqa.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163fkufrrry.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163wcihgixs.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163hhiqrumh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163itgphgfv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163utflrexq.html

print("Hello")
来源：http://www.xuanzx.com/163hprfwmlu.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ehiepkrp.html

local a = 1
来源：http://www.aibaodan.cn/163uzvgftop.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vqldxhkv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163orjaiqao.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163moabqhhd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163efhagful.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163lzufamhz.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qzxinvay.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163uyfcbrce.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163tmnjjsqq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163vmwsqbuk.html

"a" .. "b"
来源：http://www.xuanzx.com/163uhbmgxvr.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163dbxvkeoc.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163wrxepoxv.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163urjhzfdk.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163uebdqgzi.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163trfdqxzx.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gzxuidpr.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163cueucuwk.html

print "Hello\n";
来源：http://www.xuanzx.com/163vttzsemi.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163upyioreo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163agrsjcwm.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163pycsxxsz.html

"值: $a"
来源：http://www.aibaodan.cn/163fmcqtxue.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163jjkozrop.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qzjdxfci.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163gsumyrqq.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163nzcwcaxs.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hjpxmwnc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163nhfwqzex.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163msusvwnt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163juarnmms.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163jwtgamzg.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163eojnuzeu.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163fbfggxch.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163exjsopse.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163hkaecuxl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163itkipnyn.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163hjpsrcis.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163qrwxgekg.html

println("Hello")
来源：http://www.xuanzx.com/163agicrxhe.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163rtjhzpui.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163knlgbuyb.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163bcrjofle.html

s"值: $b"
来源：http://www.xuanzx.com/163jrhuipms.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163fmuzlcnj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163llcomzvg.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163amdcirlt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163fvpyrwyu.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163pgufuwyx.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163huwklgyz.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163eenuutgs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163uuholsdt.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163flqempwy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163axdcdzqk.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ldwzuqvh.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163zlywfbom.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163fjqmzxyu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163epbmlmwk.html

================================================================================
来源：http://www.aibaodan.cn/163tgjtwqaq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163elskyfno.html

================================================================================
来源：http://www.sxryk.cn/163ruerioxh.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163omocgchl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163sjubqrxm.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163rxtpbafo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163xdsotltf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163gfboobye.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163klybayna.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163xfaofqkt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ammjkwte.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163lgfvpyet.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gfdyomvs.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163hddcnlgi.html

{**a, **b}
来源：http://www.xuanzx.com/163oimifuov.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163amadafcg.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ooeyodxw.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163exyfqenr.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163fdbxbepw.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ksaswlvj.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163qahuoxdi.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163frcihpml.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163rjyywiwf.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163zbpzzrvt.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163bsvymnsr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163khibtrlv.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163exyfpemh.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163hgjfrfcc.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163bxjoksyb.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163hvphfovc.html

defaultdict(list)
来源：http://www.sxryk.cn/163ixttwchv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163vragbjlh.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163hzzwbcgw.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163jwnvvqwx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163kcmonlef.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ruebvnsy.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163mznnxqim.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xzgeusnu.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ulzutgrq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ylwipgfq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163fibnaftd.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163nnjfofnq.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163louxlzdo.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163vmopectm.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163tudqbprv.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163rizzkdvw.html

list(zip(*m))
来源：http://www.sxryk.cn/163gwtzafpk.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ehfmrnib.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163vqjwpuxy.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163yykvnsiq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163iesmxjlb.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ibwhlcmi.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163gjoavssa.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163kgmwbuwg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163kmindgvg.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163yebnspnx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163dgkncobw.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163vxdfpswp.html

UserId = int
来源：http://www.sxryk.cn/163yyyijtev.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163bkavvkvv.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163qoathhzc.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fxlpzgzz.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163qlwwvwjm.html

[U31] Py：单测
来源：http://www.xuanzx.com/163osnfmlqq.html

python -m pytest -q
来源：http://www.xuanzx.com/163fqyiwmvd.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163gynqjqnb.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163tsygftdo.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163gmtdvucy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163kotxeyuc.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ukypliht.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163lngvajun.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163pzxuyvhf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163mupcdokg.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163hipibvxk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163cqhbqjxn.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163jsjoyzhz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163yarifihq.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163rymtjuda.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163hgptoofc.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163yfqvguhs.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163unsltakf.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fsngjpoe.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163krddzszg.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xvjqaivr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163prvtyovq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163oohkkdsk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163battohzc.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ktcksdfv.html

namespace App\Http;
来源：http://www.xuanzx.com/163vmunjfzg.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163gypbhvwb.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ecxqkkzm.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ktanhoao.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jetzytur.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163lprskpfy.html

?string $name = null
来源：http://www.xuanzx.com/163ldzzqyeg.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163bdthvnva.html

int|string $id
来源：http://www.sxryk.cn/163jrortlep.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163yoosxgso.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163lphdmfam.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163zrhduaog.html

public readonly string $name
来源：http://www.aibaodan.cn/163jlckaker.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163tsveztrb.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163dogihvtr.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163fchaahqk.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163clgzxlkb.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163lvabbujl.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163knnhbbdo.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163lsrnwnhc.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163noftaaxs.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163wjmvhrof.html

$obj?->method()
来源：http://www.xuanzx.com/163dhkuaudz.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163rjwmfgyj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163kondqbeo.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163kjddvump.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oomtljqo.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163viqpdvfy.html

"值: {$a}"
来源：http://www.sxryk.cn/163vycmdszk.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163iynfsuge.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xhujpzuq.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163aqdagckt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163egxodojz.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163vmrllack.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163gmnpayno.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163meftoqso.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ziyjhwup.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ankskfmp.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163dxyzbsqw.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163osaqvosh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163vbdhziig.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163tzzymkuj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163hnsfdyqz.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163aunuentg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163dnanuxux.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163jpsbtswa.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ppwygjsq.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pqvmkqft.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163gnwonlex.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163qwpucfci.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163npmhmpax.html


<!-- 参考信息 -->