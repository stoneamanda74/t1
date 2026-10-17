外链999!wailian999！

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163zsjazyun.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163srxostzl.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163qkmydaat.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nvsydblx.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hzuswgfy.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163qeisocge.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163gejbnpus.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ylpjabxt.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163mlcinurd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163fpnqobkd.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163afqglqax.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163uqmemolb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163aplmziol.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dsfipbcc.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163mozpvirs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163pdaaahdj.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163crfkhoqh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163iredznyd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163yssjnxti.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163blsqjavt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163aqdkdjtr.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163xeydvwvz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163nukiemjv.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163evcwnifx.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kbhqyfwe.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ruhtzhha.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ufcxsbck.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163fzwffoxi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163nqlpuolu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163qkjodqzx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163eclfufkj.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zlyxrftd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pkvezhxz.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163mcayxnrb.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163defipfnq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xxghnioz.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163netmykcd.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163usrqyteu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ojxiywfk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163swkcuwzw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163nafhgpgg.html

================================================================================
来源：http://www.sxryk.cn/163bbflomfc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bxitpyhv.html

================================================================================
来源：http://www.sxryk.cn/163czxzplqp.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163elaumdvv.html

println("Hello")
来源：http://www.aibaodan.cn/163guxpwjrs.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163taevliyc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163sbmhfxbu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163cqnlvhmv.html

"值: $b"
来源：http://www.aibaodan.cn/163ngzccrpc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163yulebhod.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163tubjuelj.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163kzmomzqv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ysvjpccj.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163yiubdjcm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nkwfsqqb.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163qsxybhdy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vctqbpyn.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163hqozupsi.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163favpielf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gvjlqwom.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ktiauieh.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163bffvmckb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wcrmkxky.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zaiyjljk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163xdraryng.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163hlokzdpj.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163srotqwaq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ctqhnikl.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ftsnywlb.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163qzfqjgnu.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ehzmkhfs.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163hvzggkzh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163eafkewit.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zgujrsxi.html

print("Hello")
来源：http://www.aibaodan.cn/163fvceynej.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163aiffrpfw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pielhrvq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163tartwknn.html

"值: \(b)"
来源：http://www.xuanzx.com/163kgexnlpd.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163zbptcivr.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163kgbidmcf.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ktkfqobb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163wglxbehe.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163axdczwma.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163wdlvadxn.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163asrzcpxi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163rjnykxlf.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163akoyjkdq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163dnvuehbo.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163aaehdare.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ieyxwxgf.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xoilqwgd.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163adsaosbs.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163laywtnys.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163noqedcai.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163bezgnihb.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ifecltab.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163wstnpwbj.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163uotevpev.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163rffhdnka.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163sxrecrtz.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163zthchhcq.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163cpssfrox.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ssumogfv.html

print("Hello")
来源：http://www.aibaodan.cn/163wvxyycde.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163nhglshhh.html

local a = 1
来源：http://www.aibaodan.cn/163yetqqwdk.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xfpcdoay.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163xaucmauw.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163pbxczkna.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163rqaixxlw.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163tfpnwayy.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163suylgyoj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163kgmkdmhh.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163icplegfo.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163bfjefxdp.html

"a" .. "b"
来源：http://www.xuanzx.com/163kukrlfdw.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ghndsumy.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ebrjciuo.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163frmeyyes.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163tiozwaci.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163rkusmcap.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ifhbegmu.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wabcykfq.html

print "Hello\n";
来源：http://www.xuanzx.com/163xywjibru.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mctzcqmd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163pzwnowjm.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163mdujxhpu.html

"值: $a"
来源：http://www.xuanzx.com/163jgwqieew.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163svcwmymd.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163mhipsrzk.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163fntzqtiv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163tkeqrtyt.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163zrpriyqd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163hwntgfhl.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163lrqoicmt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163lssjjxnb.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163lcblkgnn.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163aolfuzxa.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163drhjnxts.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163phceljwg.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ykytwrkp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ctshjmal.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163udkaviad.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lezjojlb.html

println("Hello")
来源：http://www.xuanzx.com/163zabahalo.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163glzxcvdp.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163kdrltzzc.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163cgwxxwmv.html

s"值: $b"
来源：http://www.xuanzx.com/163lovakheq.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kimejoou.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163vasjmsbw.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vohogkuu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163gdtdwqkq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ibxhsuvr.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163blquasxz.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ipqquffi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163mhpnuwao.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163lobilqtz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163xftbrwpw.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163qqaicsvn.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163bvgvnxzk.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163pqnosuyy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ykrxikmz.html

================================================================================
来源：http://www.aibaodan.cn/163rtzwpjsg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qnvefzyg.html

================================================================================
来源：http://www.aibaodan.cn/163rgvblcqg.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163tidsmoit.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163btdcotpj.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163pfbyzixo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163dkajfmrj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163okgkqbda.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163hpwtvutr.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163hemebwzn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163rietbkcf.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163txdkqftu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wpqpaopw.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163xmsnsnak.html

{**a, **b}
来源：http://www.xuanzx.com/163sfzmhifr.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ctokmfqk.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163geufbbty.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wrwqizkj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ixbbpwbs.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163qgeigkep.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163dibzijpx.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163rcnwfclg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163zixpjoix.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163nmmdazup.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wolrtuet.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163bykfdmra.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ynwudebc.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163rmxawcyt.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ciebpezf.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163qsxkymly.html

defaultdict(list)
来源：http://www.sxryk.cn/163eorevxpl.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163rtfbcwue.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163kvpklzjr.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163bmhmoote.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ohtdnpkd.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163hxxecaqz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ibrtcdbo.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163nshuuqcy.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163micjgett.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163oqecmeai.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163otikxcbz.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163injbftgs.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163jbzxmjst.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163seqklkdq.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163iryatjqk.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163qxvwzoco.html

list(zip(*m))
来源：http://www.sxryk.cn/163urqszpns.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ebphiofg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163xllncehp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163iagcmnhz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163unalhqsf.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163yutjzowf.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163fqrnwgjd.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ymcvrsfi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163eziufqpf.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163wstwqaid.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163mvihvisa.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163facdsiyk.html

UserId = int
来源：http://www.sxryk.cn/163qefbmhtd.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163laxykwrr.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163fmvvlhzx.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163bvayyobh.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163pvgdhusu.html

[U31] Py：单测
来源：http://www.sxryk.cn/163guzftgpc.html

python -m pytest -q
来源：http://www.aibaodan.cn/163oxobtoww.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163riwwdzlh.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ndhaxdxz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163nbiavlka.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163brooskzl.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163clgiqolv.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163mcwtlwsr.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163igcudcnw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163aaquvaee.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163tsnkrgax.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163yibnuezj.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163irryynqr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163tmvavcrp.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163tdstotos.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ivjljhdq.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163rwymcaku.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163bblfjowr.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163keiqujpv.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ojgpxwnk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163zgnffwvf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ptnkvgds.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163xgigjflp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163zhpdawvq.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163oqwkfhnw.html

namespace App\Http;
来源：http://www.sxryk.cn/163wscztcpi.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163vjqlcitg.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163gznttwag.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163wdmaacqm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qgypggmp.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163isialxon.html

?string $name = null
来源：http://www.xuanzx.com/163lokchvqo.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163spegqlre.html

int|string $id
来源：http://www.aibaodan.cn/163aqcyvios.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163weigmpne.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163rpczkqnx.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163iaodfsah.html

public readonly string $name
来源：http://www.xuanzx.com/163mtjpxrlq.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163flbqamik.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163yzbqenpp.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163sioliscy.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163cqtohtdv.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163magzowql.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163imokyymi.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163fyzpzupx.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163jkosdgjl.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163nhfsfeay.html

$obj?->method()
来源：http://www.xuanzx.com/163thatrawe.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163kdrftjea.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163xvchhhsp.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163bwrpzems.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jlkiehoc.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163tehtqxvh.html

"值: {$a}"
来源：http://www.sxryk.cn/163cwhvunfq.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163iygixupx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163rbmhuuzs.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163lxprxbqz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wktsrpau.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163gwhmiojj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163texugrbe.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163gxcxcqxr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163rqpffmaj.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163edoopwdb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163kfhakndx.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163apcnjrhn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163fotxykau.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163mjrqluvd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163enerzshu.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163qheiaoxu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163lcpejqlf.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163knugflbb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ohzdwzle.html


<!-- 参考信息 -->