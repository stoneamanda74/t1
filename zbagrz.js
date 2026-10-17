外链999!wailian999！

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wnvbftmj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163rbgseevo.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163wbqzrrwq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xzxxnasb.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ifdzwccq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163adzgopwp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163xpsdolbx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163leoixqwi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xuzmojue.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163myjpwbbl.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fnqjqucb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163poqscltm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163kfhatohc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163yvbbcobe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ayxswtcf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163nvuaqfvf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163idbdbbkn.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ebgbeuxz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163fersvvmg.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163tsqxnmmi.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163vnsrjxni.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ionwgwnn.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163prrccoli.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163djlppjeg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qpcfgywk.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163zliipsiw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163dzfgruie.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163alhpeuzu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qfiqoazn.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163dumxbtpd.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xcmznnij.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163baklxinw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163rjrgezbd.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163mwvytugp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jwpelglv.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163seqwytgv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163pjwqvcnu.html

================================================================================
来源：http://www.aibaodan.cn/163ferfxavj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hajjgwjx.html

================================================================================
来源：http://www.xuanzx.com/163knjnsjbh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163pnqybbhn.html

println("Hello")
来源：http://www.aibaodan.cn/163lhrrocya.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163mdgzeiiv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vrasdkgw.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163jzuqzbim.html

"值: $b"
来源：http://www.xuanzx.com/163zkgyztdp.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163cxnvejpq.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163epaznool.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163wmwiquqy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163bieoqtmd.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163fueotyuj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163mhpbtoju.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jmlssokl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ehvusnya.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163chwnyvnu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163eksvjnqa.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163umhaplgb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163zyeqlacb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163bnmruxsa.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163jhojwqwj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163navyftbn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ysekrxwz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163htfuvcvv.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163qlhcsnsf.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163raozyaaw.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163gbnlxreg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163itzhvpfq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163fxwxxyeq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163pfawrolv.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xnvkusmn.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163xjtnqukh.html

print("Hello")
来源：http://www.xuanzx.com/163nozkizkr.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ntptpdbq.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163kvyyeuaz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163lbtdbzbu.html

"值: \(b)"
来源：http://www.sxryk.cn/163feikiwdf.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163qkdzdkzh.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163vdnirygz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163efytdmjf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163usomlsok.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jxdqoxji.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163clpmqhaq.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163hlqwxisx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163akvvdagb.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rebtmnlt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163tjwfdkti.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163qxldczkz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163nlbqmzwc.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163fjldqqnl.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ajsgnbxw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163rvotwoch.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163gmrtiulp.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163clhkyfal.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163abwkrerv.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163eunvggdj.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163hotuiuqn.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qthfilmz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163htifdytr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163jpkxvdvc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163omkzvcew.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dmtfpuhr.html

print("Hello")
来源：http://www.xuanzx.com/163sdoerzse.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rocaoret.html

local a = 1
来源：http://www.aibaodan.cn/163yrempctm.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163gensjyct.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163tktayrbh.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ilfuevsh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163dxkgynty.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163yxmaisxc.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163qcwfzxjr.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163cklxhhkf.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ravoycvj.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163eepmqqgr.html

"a" .. "b"
来源：http://www.xuanzx.com/163bpplebcp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163zhjheqfk.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163dfxkitob.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vygvpvwv.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163zrzxojrb.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163flfqftch.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hksndjll.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163kenlgewr.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ugxmbevs.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163gqphbgwr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163disqgbfg.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163imktnept.html

"值: $a"
来源：http://www.sxryk.cn/163sjqgeyso.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kmhpcdha.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163dhlieuxl.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163llzkvbnv.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163vkvkdcdh.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163xzvoockq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163aqcuqffh.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163bqrrgteq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163sazmfmzi.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xgnqmkya.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163udpoealr.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163nejychph.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163oagacscz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163rbomwhvl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163teshpsal.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163hgzshzgj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163bnbszjxq.html

println("Hello")
来源：http://www.sxryk.cn/163nftktmbh.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163kzvwdhmz.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163jcbvrnyi.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mmrridgk.html

s"值: $b"
来源：http://www.aibaodan.cn/163ujctfetc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163habuihxs.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163oecqjcrf.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163qbjuypag.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163vfyueqvd.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163uvewfpcn.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163mmlmrdvr.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163himupyan.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163kosailen.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rmwvpvia.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163iuwqtgsx.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vagjnvbw.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163dztkgjue.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163wytawukd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ayveaswz.html

================================================================================
来源：http://www.aibaodan.cn/163mvcfiwwk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mkaunbls.html

================================================================================
来源：http://www.sxryk.cn/163utvfaeuc.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163lfefzgcl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163gzwdaosc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163arztmrcb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163dhnivken.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163wbxbmwde.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163wxpdzqnw.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163exwccakw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163zfadnynz.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163rvpxzxhz.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163bykatlib.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163vyozlcta.html

{**a, **b}
来源：http://www.aibaodan.cn/163toxupeyr.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163uzjjbsdq.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wrnratxj.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163bywvammi.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163exsnupum.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163fkosmigd.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163pyqaknfl.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163wejkkjyx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163kepiukea.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163rgikthwy.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hhbqxifr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ziexvpnh.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163rcpmsuay.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163imoxvrib.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163eefooerg.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ruvjnxgf.html

defaultdict(list)
来源：http://www.xuanzx.com/163ihikndmk.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163anynihhc.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nojtfyke.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163idxnwxjo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163gzsvnxlg.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163zyvqlmek.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fxyderfg.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163amttbcjm.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163afhnrcgk.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163akzcrtjk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163hvzyenzv.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163mygstfek.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163vlvjizuk.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163lznhtrfh.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163lljthzbb.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163nixircld.html

list(zip(*m))
来源：http://www.aibaodan.cn/163hhqgnfah.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ymepoqqt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163bfpjqwyt.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163yvantztg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163qprsenzg.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163wbhteeeg.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163vjuwqqdj.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163opygybip.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jzvchnbu.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ashvjjtf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ymthggpz.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163xznhwaue.html

UserId = int
来源：http://www.sxryk.cn/163dsqvsmhh.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163mzqkchjs.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163wdbeyjjq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163rqkaaaan.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163qqormwrj.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163xtadqwxf.html

python -m pytest -q
来源：http://www.xuanzx.com/163xocyhgnp.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163imkmfflg.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163gqxurgre.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163vbuoioet.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163liicsxeo.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163rkhezuyi.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163aaqtkbcq.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ttwljyab.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163qgbcwbaq.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163yscjgtud.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163juetlgnm.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163cnizonfd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ufjfmajr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xmgcldku.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163gdgyoasw.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163xuthqbel.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163isyzxqqs.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163pxskkfmx.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163isforwta.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163hgnpwvgh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163mxkhokvg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163lqwqfarj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163igqdjerx.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163nzjivkej.html

namespace App\Http;
来源：http://www.sxryk.cn/163lavlerlm.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163xfzqckmt.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cvmmzqbz.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163rgkaqpnw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qyxhuele.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163zljpnkdy.html

?string $name = null
来源：http://www.sxryk.cn/163giemgqmu.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163zktedazu.html

int|string $id
来源：http://www.xuanzx.com/163wjenmoqn.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163hzmuvrdz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163tjisopjf.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163xszrtlcw.html

public readonly string $name
来源：http://www.sxryk.cn/163zgcdkwaw.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163olymhojm.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163rhvtwlwg.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163hevasprj.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163eyszoyyn.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163quxleqog.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163qnuciilt.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163cktiylcw.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163bzuyxuds.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163chuqftbk.html

$obj?->method()
来源：http://www.sxryk.cn/163tavcxbse.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163afmzsrpt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163daxptyjr.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163aqnhkhtc.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ehpbdqmj.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163vsgxemjv.html

"值: {$a}"
来源：http://www.xuanzx.com/163wibstipx.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163pqucxvnj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163yummrghh.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163dgllanbm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163sxkywfyb.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163jpxghmjl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ybaxbqvc.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163tzvoffbi.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163sygozlci.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163caqfxvph.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163qvjuoxvu.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ipqvdcpa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yagwqtek.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163pjntqhvm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163fofphvff.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163oksvumye.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163akuhpyhe.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163drmlfnsn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163vfboaxzr.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163wejmduhq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163oyujtplr.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163gbeqygme.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163gtbktcjq.html


<!-- 参考信息 -->