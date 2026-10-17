外链999!wailian999！

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163yvitfgec.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163eseryzfq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163vnjirwvy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ghkyrzut.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gpfjtqwt.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wwxavcas.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lnkehpry.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163bmwjwycl.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163oixcwgrj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163mxyhrfrm.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163cpmnqeuu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ofmuzdbh.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163vrdgtzco.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163qwnwevxb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163tqttqpue.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163fciawyqi.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163yvzhkjtq.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163oixrabtf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163zutmwucx.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163jlcggaup.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163fpoapqlx.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163yxvtgcdo.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163sqazvjbc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ikhvzzqa.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163yasogmll.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163egfhyawp.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163aodmwkvy.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163yorrvhou.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163zjfcvjql.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ajcinybx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163iwilxcuk.html

[S56] C++：optional
来源：http://www.sxryk.cn/163savrtizj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163acnqgsus.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lwouinsh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163diujvugn.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163sluseazp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jccdnpiv.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163onvonziu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163paqykhza.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163teypeyto.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163aodpiyom.html

================================================================================
来源：http://www.sxryk.cn/163sksnsanx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163awidtkbe.html

================================================================================
来源：http://www.xuanzx.com/163igyjhvkm.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163weqzmiwp.html

println("Hello")
来源：http://www.aibaodan.cn/163nbuxmkdt.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qypcusue.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163mzwevknb.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163uowzdcnh.html

"值: $b"
来源：http://www.xuanzx.com/163kytjmigv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lnoitunf.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163mmotrgae.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ibopwyge.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163fpzewirf.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hhdhsuoz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wdlmjmvw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dcdfhepw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163haevnkxo.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163vqqqhotd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163gchxvlkc.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163poffyzzb.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163tdngwlla.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ooxkmbbq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163edaqsorl.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163quzrhnuq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163qdbnibih.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dejflypt.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163sytahrdh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mpjqbogu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163yesnsimk.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ekbmbmqk.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jsmtkvdj.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163pewdqljw.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163zfyjvmfr.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163owyeqpdp.html

print("Hello")
来源：http://www.xuanzx.com/163trkbrdxm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163cpwsyyob.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163yzenlatp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163mkilcult.html

"值: \(b)"
来源：http://www.sxryk.cn/163orqcsgdd.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163wnfjpply.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163zzpdqsdh.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163onzrysnk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163uxdbjvqb.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163bgobmnbv.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xdqaztwd.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163sqjwhkek.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163zalsokgo.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163kklzvsqw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163zhflvjkr.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ajttkmya.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163cgnehrxo.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163lxewlohj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ecduncpm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163hxpfqkvv.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163yauqzypk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163vcyetzpf.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163jomqhlwq.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ekfmpeht.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163wlfempjv.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ibpgejra.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163eetxwyqy.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163sptkymkq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ulbviybz.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163mnowkclv.html

print("Hello")
来源：http://www.sxryk.cn/163nttbdvob.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163eqjuvzuv.html

local a = 1
来源：http://www.sxryk.cn/163yaxakrmz.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163snpnljni.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163egcqrrff.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163hkcyfinh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163giacoezc.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163cgihqanc.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163czbdmgbp.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ikeofdyk.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163tpezovfh.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163thgpzpbz.html

"a" .. "b"
来源：http://www.sxryk.cn/163fipkbsie.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163psddfrii.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163zrvjrrsi.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163hmzqcimd.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163crwymgcv.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ajwlevqf.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163zkxplcan.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163cyakahof.html

print "Hello\n";
来源：http://www.aibaodan.cn/163mbeqpxgz.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163hgbhbujg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ytgwbrxo.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163crydcqwd.html

"值: $a"
来源：http://www.aibaodan.cn/163zcxgnjko.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163sxdufpkl.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163udaezftt.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163hhlmufzd.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163niyzbpsc.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gjyxrnyl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163jfbvimie.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163lmqbuyqa.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163zxwdvbrl.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jjcmhhwk.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163smlgnaat.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163uksdwumu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ebgilign.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163lqdjismx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163fjqrubet.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163arjhvcfq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lktomges.html

println("Hello")
来源：http://www.sxryk.cn/163bupvrher.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163dpufekbk.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163cfzmagmt.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163rvbtvxqh.html

s"值: $b"
来源：http://www.xuanzx.com/163rdnadqfx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163kfadbrkd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163apwgalca.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163jyowdenl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163pdjhresf.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ikqpkkjs.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163xepmhqlp.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163hcaeyybi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rmikqdbf.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163yziladbb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163yrmftfam.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163nsahukne.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163nowtwuzi.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163snllupfr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163psgliefy.html

================================================================================
来源：http://www.xuanzx.com/163xtleidiz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cfncpytq.html

================================================================================
来源：http://www.aibaodan.cn/163zcpchipo.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ztauypbr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163qrgarjfx.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163efofsikh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ztajzmdg.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163zenzyzly.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163zuayqkkg.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ljdasqna.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163znbqowtl.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163fiviymey.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163maaxoiou.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163naowqzga.html

{**a, **b}
来源：http://www.aibaodan.cn/163bbicunpd.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163tbuhqsmq.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163cnqhcwdh.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163rakyegrw.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163sjijrpof.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163nrqlvanz.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163awurshzd.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163pdqhehyw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163qjdjvdig.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163hijxdxes.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163auvjeyki.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163aqtcpdah.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163llsftsdo.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163llrwiayc.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163zqeewscc.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163rthvmhhh.html

defaultdict(list)
来源：http://www.aibaodan.cn/163tznpvscv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163ogqisjws.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163bbcltrsl.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163uqgjxcuh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163yyyeulpi.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163redwghty.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163kxvodwov.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163xylqwbsv.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163mnybtnow.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163gltbahac.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163jmdcfovy.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163evnyefjm.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163irkgkzbv.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ejjqqxjr.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ivzfgpab.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163nstvvfnd.html

list(zip(*m))
来源：http://www.xuanzx.com/163pflqhiec.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163yrucwtjn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163wtegxqfg.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163xwpfflrg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163cjujbqzo.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163xcmwysdk.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ffydmnqu.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163hiiecxmu.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163kwtsinhv.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163aipryszv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163sryyyizq.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163qylbgcol.html

UserId = int
来源：http://www.sxryk.cn/163eodnatee.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163rsistpfk.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jykodcwj.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163dtupuqxm.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163lbvugabc.html

[U31] Py：单测
来源：http://www.sxryk.cn/163gbriqqve.html

python -m pytest -q
来源：http://www.sxryk.cn/163vlmlwomi.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163tfoimadf.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163yfwvprxb.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163byvakwwt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163amipzsta.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163qgsncpwx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163jrdnihnr.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ulzpqqxa.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163zpzvctpl.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163cvfynqle.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163cqgtkira.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163wydebsgl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163evqunktd.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163xniiypsu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163shdqqbja.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163pxgzvtov.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163obrklgay.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163bcyyurrw.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zhwwcahh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163idalhutj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163mpsrdygz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tfvweyet.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163kzmswyqt.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163sfugqhns.html

namespace App\Http;
来源：http://www.aibaodan.cn/163bmgzxldw.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163icyxkmst.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ykkwcrfo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163jnobiapv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lkywjslt.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163chxkrurn.html

?string $name = null
来源：http://www.aibaodan.cn/163icopxusk.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ifwsfgfp.html

int|string $id
来源：http://www.sxryk.cn/163sdvgtatr.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163oqzzjekj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163lhwgmsdn.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163fbfssvse.html

public readonly string $name
来源：http://www.xuanzx.com/163gkyjjjlc.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163kqegxcud.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163wvtluywo.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163fkdokehr.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163bgfugizi.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163alvzjvxi.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163mwlktrrw.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163vdtaafhb.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163mxxduyhl.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163wtcbbhzs.html

$obj?->method()
来源：http://www.sxryk.cn/163zqwziipm.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163izzyefci.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ydxclnrw.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163jjbkgrxn.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wbaxxmfo.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163eyttyfax.html

"值: {$a}"
来源：http://www.aibaodan.cn/163crngqkpj.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163lqwnszvs.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163hzjedqag.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163hpvlabtb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163yjsyeynb.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163zklvyiso.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163gguwriot.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163qakiwjju.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nmajlzql.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163mjnqsaja.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163uaealjix.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163bhvcogwb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163oypuqsrs.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163srbdgmiq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163xvhkkude.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163sbxcuoya.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ibccidaa.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163zttxxocu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163vlvhraxk.html


<!-- 参考信息 -->