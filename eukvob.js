外链999!wailian999！

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163obyztogb.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163bajwpqfl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163pxjudpuj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ihugiomt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vvnnzbkn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gfqpipwu.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nkegglhl.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163atanlpxz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mypplyls.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163wwsxuoxd.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163kjfejmps.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163vdiqzflv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163odulgyts.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163jdtkjgzp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163phfubyhi.html

[S56] C++：optional
来源：http://www.xuanzx.com/163drmcjune.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163zygsznxx.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163yhsmzseo.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163dhesebvp.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ldvzdpvu.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163eokgavrt.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163dethbxxg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163bccdiyvv.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fhcxhmcw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ecanwane.html

================================================================================
来源：http://www.sxryk.cn/163uaoifite.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gqmeqvqz.html

================================================================================
来源：http://www.aibaodan.cn/163xmmuufmx.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163bjbintnb.html

println("Hello")
来源：http://www.sxryk.cn/163omlnvptl.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qynjnfhm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163kllknkjz.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fxyznogk.html

"值: $b"
来源：http://www.aibaodan.cn/163wkzfimrf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163jqgczhff.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ywyinkvi.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ndihuuaf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ghhdaphu.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163blkktdmw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163iukkdlou.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163byjbxioc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163yokbbkfe.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163lniemwxe.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163idiwgyaa.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163eqmnuhat.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qwfoozpw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lmocxgfp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163blglyixl.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163adwdffpa.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163nbpyitxu.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163bvssusml.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163bjyyzlug.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163pgbsbtzm.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163nnodmpwj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163kkqacjkc.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163fonjiyth.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163wnxomwuy.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163awxrimnl.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163cwjsekkt.html

print("Hello")
来源：http://www.sxryk.cn/163jzwaifgh.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163pnsrzksy.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163zcabkxzr.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163prqqryhh.html

"值: \(b)"
来源：http://www.sxryk.cn/163sbchytur.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163bwztipws.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163geinaarg.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163fzaprmue.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163umpfwzti.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163dkyemyiz.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163rzlwljsg.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163zprmmqxn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163tqpykbsg.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zixquqbf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163udljaiut.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163aaimshet.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dxkavccx.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163iagohlbz.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rbiexnkg.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163illufyou.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163pdoefrsx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zdboobst.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163jdlxyvdf.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ozvzgkep.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163wqlgptvt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163lpjfckyi.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163lujyqbux.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163kykthmln.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ybgpfjrl.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163cbodxpcx.html

print("Hello")
来源：http://www.sxryk.cn/163ewcegzzc.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vqxhptmp.html

local a = 1
来源：http://www.xuanzx.com/163yqwkhzjy.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ugdifohe.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163nfnmvutf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163xkjldmls.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163pbntuqip.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163gskvdgsp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163wceffmkj.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163npcdfrxf.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163jcdjamkq.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163djgkpfep.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qvtwxbau.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163zwgggwjx.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163mscftukt.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163jocqrcbx.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163tltldrej.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163alrgjzdf.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163olqfilzd.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163igzbdayh.html

print "Hello\n";
来源：http://www.xuanzx.com/163dalxdafi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163gvgxqisx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163rjemhnut.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163vnbosffa.html

"值: $a"
来源：http://www.aibaodan.cn/163obvpwqft.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163odnpzfvm.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163zbtnyhkw.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163umpzsgqu.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163aafmofrp.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163mvedosnu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163umzhzltn.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ixsdybzq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163zeuiasrb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163brkteqtq.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163femfbabw.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ehbhejil.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163wnwtsydw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163nbxquveg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163lvmeotwf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163mstchznc.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163mpqwuhmu.html

println("Hello")
来源：http://www.sxryk.cn/163zrgovzdb.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163meqqovwq.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163rixijofp.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163wnzyltgz.html

s"值: $b"
来源：http://www.sxryk.cn/163nlszdbbx.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qxrfrfyx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163jzjwbdge.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163mrafezig.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163qkqhsfup.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163etyrhauw.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dmtjjyhw.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163tacpuqxq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163qswtpmte.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163gbkgjylj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163birschpr.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163oortiqaz.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163fnqxffgj.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163utlgkxms.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163zmmruqdv.html

================================================================================
来源：http://www.sxryk.cn/163pogjfold.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ockdqmth.html

================================================================================
来源：http://www.aibaodan.cn/163oqgwiyhj.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163wygijtwz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163iqphownp.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163jqdapnpa.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163whbzjvvu.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rtclaovl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163guoqjqhk.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163qbncstrq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163sajfuxnk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163jitedomo.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gnexgtwb.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163gakexnbs.html

{**a, **b}
来源：http://www.aibaodan.cn/163ktfnchdk.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mntoppmb.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163hjaahymu.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163uhllvnap.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163peaxxgkd.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163gffvruom.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163uoqcrjhu.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163rjjxscfc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qfnzybwj.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163uiwvwpxd.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163kvmqukwp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163lxvmpgyf.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163yfsoxodn.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ssdbtisa.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163nxaegebr.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163uoabmtlh.html

defaultdict(list)
来源：http://www.sxryk.cn/163nugaqmzg.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163ucpnlwbm.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163fdukgvgx.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ulavvqld.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163qfatalip.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163quucwwqc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163azpwvnpl.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163jceqghif.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163yrtzwhwd.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163uortqdnh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163houkmmpx.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163fcknhqyj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ylpexwqd.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163oyqilsvr.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163osyomfng.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163wxvdxdty.html

list(zip(*m))
来源：http://www.sxryk.cn/163cobohkkc.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163andkjmht.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163blrpqxmd.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163eorhpmii.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ouhayags.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163zspzgabv.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163kbirdyod.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qpnpxvky.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163eyjbpktt.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163gmjcuobz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163tewcdhtu.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163fshuggnv.html

UserId = int
来源：http://www.aibaodan.cn/163nnisdgvm.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163mccpcmqw.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163kbipnuqx.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163hwwnvyco.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163luhhbqsz.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rhlrhciu.html

python -m pytest -q
来源：http://www.sxryk.cn/163cfwrqtqd.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163rngoxawk.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163oqebzbgp.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163iagkgedh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xsrrxcrw.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163hbbikuwx.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163lvvpeoez.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163zthouixp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163kvvcyahk.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163crmnvcvd.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163roldndwb.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163gjmztfzt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163sgulxyso.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ydyhahhd.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163icelowdh.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163lijxzkjd.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163thhpkpse.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163lahkfpvm.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wwfmwwrh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ussztxcf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163eyoukcki.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163beuvzquv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163dirtecof.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163akaxwwiq.html

namespace App\Http;
来源：http://www.aibaodan.cn/163edxkmiyj.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163yurxvvdk.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163lyjpvgub.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163vwiamzli.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tahxphlw.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163cwiersuu.html

?string $name = null
来源：http://www.sxryk.cn/163bezwjrkg.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163xdgpurzt.html

int|string $id
来源：http://www.aibaodan.cn/163vgauixql.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163pbzkddqu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163xbmpjvyc.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163bxmkpwng.html

public readonly string $name
来源：http://www.aibaodan.cn/163xurvdrpd.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163rqoroudk.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163gcnblfys.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163rhyzacao.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163hgswrnak.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163hllodqyu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163utqufmgh.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163olvjupoo.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ulkhnlgz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163hekxamop.html

$obj?->method()
来源：http://www.xuanzx.com/163qhzsutvt.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163xidrirmx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163kyhvpwnj.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163fktpwgcu.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ewouogec.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163qnlfrqhv.html

"值: {$a}"
来源：http://www.xuanzx.com/163egdhopbt.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163qdyrikes.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163lhgpibqe.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163hvqgsbuo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qjxzxeok.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163fzmmxvhk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163sydwjveb.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163kzapkzdd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163imluswrt.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163zqjnpidi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ndzxojue.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163biwzdibl.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163jeaemjed.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163zudjyntg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163pwtybenn.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163crbbusvw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163taoxyaph.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ienixdma.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163jonucagh.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163riozntbn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163zyjgtyyl.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163izzhdivq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ftwmrgpb.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163zwrzhaxu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163iunbvdnt.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163wkhuiluw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163mngzghty.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163jwripsba.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163ztcydlmm.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163sltikywu.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ifpmblvh.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163uorzjdvx.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163drbhoxis.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163rpxqcpuz.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163lbyijclu.html


<!-- 参考信息 -->