外链999!wailian999！

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fkxyojmm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163nwixayao.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ukfxyrbt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163wtthyqxw.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163nmwhxpju.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163bywvfjug.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vjsvzgbq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163lbokzngq.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wawzzomz.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163mtrsadzj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163izqbxwoj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ocvgygqg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163uouaejpw.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163oweblrcr.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vacjphpg.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163znldlosy.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vlsbauly.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163asqcagbp.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163flfykzwy.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163tiahqzbl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163zjojnjag.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163kjzualko.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mvgqrwqo.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ozbboejz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163gnovxtwg.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163shgqcvyx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163cylbwmiu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163haihtacb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ayemicdo.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163bajwzuvx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163wediucos.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163mftfcxsr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163xwyyygvl.html

================================================================================
来源：http://www.aibaodan.cn/163qryzrqcj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jcliunaj.html

================================================================================
来源：http://www.sxryk.cn/163hnlxztgs.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tjbskvst.html

println("Hello")
来源：http://www.aibaodan.cn/163ggfgjfcb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ytdswkfk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cslesdur.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zishfrxc.html

"值: $b"
来源：http://www.xuanzx.com/163pqwyikml.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jthhltmp.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163cdejmqen.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xpvzafqo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163sygsvwps.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163bjjkzvso.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163huvkxanw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163edtgsozg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163xnucufeu.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163cpwqiqtu.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163muvkqicw.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fextkpfw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163atkgpchu.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163kejrwpag.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163sdisbtoj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163etkwlfqq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163egjnsdmu.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vdkeirrw.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163etknotwp.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163sjzunrrt.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163vryiprfz.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163uwcptpam.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ywrjxxmk.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163noehavyj.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163hgkstdcu.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dmtfqrpm.html

print("Hello")
来源：http://www.xuanzx.com/163vflyfqgn.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163fvhfuyja.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163hjltyekg.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163dwllesug.html

"值: \(b)"
来源：http://www.xuanzx.com/163uodpognw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163xukwzrpy.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163goxpcxti.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163axttkrzl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163rcgxcojx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163wtfsjara.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163sgwkxikx.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163wzhcjztq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hdxjwyro.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163gendkqmo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hgdtwqkg.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163iklzhogw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163afpksshs.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163nunvkmff.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163lavlnpel.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163vwzrooqp.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163gpxydhco.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163verdzkwr.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163rkxfmjbk.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163iodfnbbk.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163xdewgovq.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163mdlgxuzu.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163tgbtybir.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163uyypmqrt.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163oynquhnw.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163cwfyitca.html

print("Hello")
来源：http://www.sxryk.cn/163vdmvecsj.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ypdclkka.html

local a = 1
来源：http://www.aibaodan.cn/163wfvyqass.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163cwwandgm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163weqctzmi.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163dgdysatg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163arriwcee.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163wtjfuhqn.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163hufwjdgg.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ssvvizma.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163bcdqqmge.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ltnpuaev.html

"a" .. "b"
来源：http://www.xuanzx.com/163kqiwtmxa.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163agdhmwfn.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kwzmpzqd.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163uhbplajq.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163hdhifwnv.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163llqjdjdd.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163nknpkznc.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163hjilxejt.html

print "Hello\n";
来源：http://www.xuanzx.com/163qscoyuqp.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163zvjxsfzr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163qabyujkr.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163wtaxifqd.html

"值: $a"
来源：http://www.xuanzx.com/163vwscjsgd.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163osdjbiew.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163bygdgkek.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163jxopauif.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163sxxvujce.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163bihhlizo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163bghbunli.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ctomgbpo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163bopjwkyo.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163efydzige.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163hzbklvdq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163heoedhnt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163oehwhzlc.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163piyxzmsy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163rhrlarjt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163pjwcasmi.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163qzdjhosi.html

println("Hello")
来源：http://www.aibaodan.cn/163nlymfnup.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163suhxfgnh.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163daatwbit.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163muozwwmy.html

s"值: $b"
来源：http://www.xuanzx.com/163qxcresoq.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163rvbhiobx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fqsgpfqc.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163tsqqgwpt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ewtyzuuq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163mkznrscx.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163zojuksho.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163jxhknydi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163gyuxzmwz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163fmqygcgh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163mcjbbtfi.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ahjnhnxg.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163vmxnflkb.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163rqgbimiu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163umwqgbll.html

================================================================================
来源：http://www.aibaodan.cn/163pmbzevvx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xtvpmpok.html

================================================================================
来源：http://www.sxryk.cn/163jjevunvk.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163npcsbvxs.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163cyisubkh.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qyomdzmp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163orhhelsj.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163kedgttwb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163iezuigrg.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163uqflzklq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zmtwcqno.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163isqxouoz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163hcmqgrzr.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163tftyzvxv.html

{**a, **b}
来源：http://www.xuanzx.com/163hqlbuome.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163etsidxfw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163hxiljemt.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163hfwkcftv.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ewwbcttb.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ktmbhqux.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hiuurqwy.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163mxizuzso.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163athwogtn.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163akunibbj.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163xbrymplc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163irmcrafb.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163qunfmanz.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163bkdeyuvm.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163gtgbxbiy.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163vxccqmdo.html

defaultdict(list)
来源：http://www.xuanzx.com/163sygxiyvc.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163mwgauxly.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163fmqvtkgx.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163qjnzemya.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ivdfbmkf.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163pfbpiemm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163dcpidtvv.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163yajmkjiw.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163sqltffqc.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163euvlhmfr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163yufihecz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163jcdreuqn.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163pjzwzauy.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163hvjskykd.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163nxpdeois.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vjgyctlz.html

list(zip(*m))
来源：http://www.xuanzx.com/163vmbanmsn.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163lyczlzvu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163qhinkkky.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163luhcowms.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ptmefylm.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163uyowdnkf.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163mhqojdsx.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163zobegmcz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jhawtils.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163fgfxuwpl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163lbbamqmf.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ckwjjktg.html

UserId = int
来源：http://www.aibaodan.cn/163uehhxwqs.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163gcantrfv.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163aeycskcc.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163bawarlbh.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ebfvexyy.html

[U31] Py：单测
来源：http://www.sxryk.cn/163dsckattu.html

python -m pytest -q
来源：http://www.aibaodan.cn/163hbmagjyy.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163pdzwsqvy.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163eyvyzozi.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lyaliurc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163qkgwmmuv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ylowuias.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163wjrcmdfw.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163hunplfaj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163fhrysthm.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163mvofmmyy.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163fzqffcri.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163qnmqzvfe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ipobaiwr.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163khotfmcz.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163lupgekor.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163oxybkgxe.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163tnpixuks.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163kqczyogd.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ngudxuyh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163cpdzewhq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ionztvvz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163lcsjjtbp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163kexkheba.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163wxbkuevh.html

namespace App\Http;
来源：http://www.aibaodan.cn/163mljpyjrd.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163vgkcmzyt.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163rachospo.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163evmufzvg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mjzjmojy.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163yedsgspt.html

?string $name = null
来源：http://www.sxryk.cn/163qvtisimu.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163vzhnwqfz.html

int|string $id
来源：http://www.aibaodan.cn/163rruupafs.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163armqmubf.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163jdxqjagw.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163kgaosdkf.html

public readonly string $name
来源：http://www.sxryk.cn/163typzupfu.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163wzxmtrqv.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163epcwndxf.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163yftbbvsf.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163jnlptvbl.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163qatyikjj.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163yyhjyecm.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ztcmguav.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163lnwncnyr.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163lvxpcaxs.html

$obj?->method()
来源：http://www.aibaodan.cn/163nhbpqytf.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163zqhhelye.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163wwavxdbp.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163rajnpefq.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bpnnkicm.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163vvkzvxhv.html

"值: {$a}"
来源：http://www.sxryk.cn/163qxvfqtmo.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163alvxssxz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163qyboxfgy.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163igsoskoz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163slvdumew.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163gmtufjwf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163jxywgtfe.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ujxlmvat.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163yofpfabc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163rkdlkgnm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163csbhwunq.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163axgwzpny.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163trptfweq.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ynbvedsk.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163cdszqmwr.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163swutvyfp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163vlfdisfx.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163kvzvguip.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ktuwnxew.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163wqggldgu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163bboyaxtw.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163mgwftajj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163agnetsgv.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163aorduhvs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163qcxdrlxi.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163vveohqky.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163shyhzkrv.html


<!-- 参考信息 -->