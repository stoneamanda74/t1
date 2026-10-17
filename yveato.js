外链999!wailian999！

[S45] C++：lambda
来源：http://www.sxryk.cn/163fplkzthy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163nivefjti.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163sevkpplv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163vhqrwqnb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163cvwscmxm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163byrwnfai.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163girzpmts.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rxofjqcm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rttyrlvr.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163yxddcrqe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163nzayuzoj.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163dwhkhkdo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163mgtvvnhh.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163utvcamxe.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163sooigilh.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163mgqwyvua.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ktilpfez.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163iefnzmyq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163bjecxyzd.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163toneyrca.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163sufgzwhr.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163lqkrwfbs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163eehmcihg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163qloqfozy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tzdprwyj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hueivzaj.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ufiykhwq.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kjntksud.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ulauujqg.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163eggtxbzj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163byvbwfpi.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163lcjhjglo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163emxioawx.html

================================================================================
来源：http://www.aibaodan.cn/163sbtlotgs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zgskbglm.html

================================================================================
来源：http://www.sxryk.cn/163uximmtck.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kpwidccs.html

println("Hello")
来源：http://www.xuanzx.com/163cbuczxci.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163abdgzrkv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ezekqatt.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163patlxiod.html

"值: $b"
来源：http://www.sxryk.cn/163bsimyvtc.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163letuwvma.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ugmjsagn.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163usizfspj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163lzfwziuh.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ffysgecs.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163qrewprvo.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163kaixugye.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163bdiimeuo.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tsojltks.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163exkzapoh.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163hxgeuvpk.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163bzgunfhf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163piesygjb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ybarwqpe.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ymopzige.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ytszfesc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163imqslwni.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163egmzhrzd.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163vudggwxp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163aqysufgc.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wrlroicq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ekgghnrf.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163foexbpvu.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ubrqcmld.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163bzbzvmdi.html

print("Hello")
来源：http://www.sxryk.cn/163auxsggqa.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163yudzvbym.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hwfxdcwe.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163cydvhpkj.html

"值: \(b)"
来源：http://www.sxryk.cn/163sowyqgtk.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ywsrztpg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163yqadngev.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163sijrnkvz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mtcuiovr.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jvbdqcet.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163kchqcybi.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163npcdejvl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163aicpdrcm.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163vrhgnwox.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163cqaufcdm.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163riopprrr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163rufcfiag.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vhanlxkj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163hgvllsyg.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163wccrjded.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163fsttresf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163eqsglahd.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163jgqkoovu.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163agqpwpel.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163xprmdvfy.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163uhldorsz.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163gtkdzzrq.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163fbmwpchh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163tymlocoz.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163nuzisewh.html

print("Hello")
来源：http://www.xuanzx.com/163vimarsgd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163zeqetkev.html

local a = 1
来源：http://www.aibaodan.cn/163peoynlso.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vvgykcbj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163npygljvo.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163bshezamd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vpgdgpbb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163zkxpdkxb.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163evysqkfv.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ikicikvd.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163fdsafixc.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163rufpreeq.html

"a" .. "b"
来源：http://www.xuanzx.com/163pozmjjci.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jenzjtpo.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163rukxdypf.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163wfektcjv.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163alednljd.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163jhzffere.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163yispeloj.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163juzcwinh.html

print "Hello\n";
来源：http://www.xuanzx.com/163hkcagmiw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ausdlyfg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163hmtvzjac.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163jlpjnfnr.html

"值: $a"
来源：http://www.sxryk.cn/163ybjcryhf.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163zhvdwvuj.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163tnsycbkb.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163lyiiznkn.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163pfxjtbhs.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163dovxfbzg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163qlzktkvs.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163bmqzsdjq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rtwvlwpt.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163noysssum.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163eofxjbkj.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163znqyqsxr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163hlwtzqug.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163wawtpbpe.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163awroqmzb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163plxzpxbf.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163npqbtozg.html

println("Hello")
来源：http://www.aibaodan.cn/163vwgdwing.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163dziitpkb.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ogqlisej.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163zzhuycrq.html

s"值: $b"
来源：http://www.aibaodan.cn/163dvyfuzqc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163sfonsyoa.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ryrzmwgf.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163tazxpsdr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163thgivxwl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163yfezjoty.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163kawexwix.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163soghuudr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163aqoopvbi.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wkbwjqyc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163pcazxjek.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163mpvnodss.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163krwtzyln.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163myyecstw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163nymolifu.html

================================================================================
来源：http://www.sxryk.cn/163pctnzdeq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163yahtuagx.html

================================================================================
来源：http://www.sxryk.cn/163riuismax.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ttrlygff.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163igndvpna.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163avajzswl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163vojrtktq.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163fwtawixt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163dlloktld.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163wvihaswt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163tjiumzjv.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163bgvrgcyi.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163yeijljsv.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163okmitpow.html

{**a, **b}
来源：http://www.aibaodan.cn/163uzxgrwja.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ttlfuoue.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163uiemjjtc.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ajbnksfj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163kumwcazg.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163yvtpctsn.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163wslinxrz.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163thrcdcel.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163pzmxauku.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163xyvinkwt.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163kriuymnx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163vfyvipgc.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163iczhgkdx.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163msqkquxc.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163rzswumdo.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163obomvurc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163bwhrvugl.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163emjyblhr.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163hbexbfjn.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163yfcumpfx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163fotpmcdb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163bmotjtdm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163badxzjsd.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163kvjvbaxh.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163wqdveehz.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ycxsjqrg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163czkyttag.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163wvkfbtoc.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163atnolqig.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163pskfczed.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163bvrrgvgs.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jdmersqa.html

list(zip(*m))
来源：http://www.xuanzx.com/163oxlqiuch.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163fmijlywc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163xrtrydml.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163vapydatu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ytjhzrfx.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163dwzflbgo.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163zqbhnifx.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163einadace.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163zauvculq.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163tkqgmrli.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163tdxybqan.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dpzokqyk.html

UserId = int
来源：http://www.aibaodan.cn/163fzhawbtm.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163rfrjvssm.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163xtvmltig.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163gdwrtwjz.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163aagncqls.html

[U31] Py：单测
来源：http://www.xuanzx.com/163itausbxw.html

python -m pytest -q
来源：http://www.xuanzx.com/163kunyjdha.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163aboitkwy.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163jliwjvwk.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163eopolwzd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163fbfmlpnd.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ylhiagso.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163dhmdeiqc.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163mcjrvwlu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163tpmlbewc.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163iefgxgyk.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163mvynkevn.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163oivivkad.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163qbzukzgn.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163fjsgsjnm.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163wdmadhyl.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163skoxufhw.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163qfozjzpv.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163rhcjmush.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kowbkrvo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163acnmqedk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163qxoygryh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163fprwkdgv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163qnonmkmc.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163tvwapskz.html

namespace App\Http;
来源：http://www.sxryk.cn/163fnqisyba.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163pshuwmaa.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163hbypttzx.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163wmmmgvyh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xtsrcvis.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163rlfvhpvs.html

?string $name = null
来源：http://www.aibaodan.cn/163golrcrjq.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163jzrkejcg.html

int|string $id
来源：http://www.xuanzx.com/163epvjrywo.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163rqztbeam.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163dqelisso.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163jozzvnfa.html

public readonly string $name
来源：http://www.xuanzx.com/163naegcmha.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163upsongou.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163bqzzzaxu.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163fjybapix.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163qpurfmza.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163jqdbpryj.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163xmrbdvxl.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163eyjyepmg.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163wbtjvxav.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163qfcozkaf.html

$obj?->method()
来源：http://www.aibaodan.cn/163cmjlnzxz.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163wkftslrf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163vulhqmlf.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163mengetjb.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qrtynahz.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163xjnyicqu.html

"值: {$a}"
来源：http://www.sxryk.cn/163prhegqsg.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163wcaclwxt.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163qvrucfya.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163vcnowjkc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163uqcggtsx.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163jduvjgiu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163vtzjsgni.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163shqixwlu.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163etjhqqvq.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163xebnxidx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163cdlcdgce.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163uxrfbkgz.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163zedwsyae.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163vvsldovn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163emjwyupl.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ipcictlj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163fujxvhhm.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mrckukvn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163dsokmupo.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163bxvgtopm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163wdspnodm.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ulbeaafr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163zbxeaykc.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163mhplmkxs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163kqntyeyy.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163yszwlkhm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163hrvdypzo.html


<!-- 参考信息 -->