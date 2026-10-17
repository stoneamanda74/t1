外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163yjhnklau.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163lbqorpgc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163arxenwwe.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ggmwznrf.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163olpretfq.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163jsshjach.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mbyutphc.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163peegsuuj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163beqhvxmk.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163bciewgsa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ynrlkgdh.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jqvohkhi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vgwxjjxd.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163gtmxlypy.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163cezgmkfr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qvujgjbw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163crybwfzl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163hemovclg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163euytildr.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ukgkahhd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ehxnxbne.html

================================================================================
来源：http://www.sxryk.cn/163xcwfzscl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163aswurlct.html

================================================================================
来源：http://www.aibaodan.cn/163zjbevbou.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163dhlapllo.html

println("Hello")
来源：http://www.xuanzx.com/163nhlznvzg.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163llljaesi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ltalblak.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163gksqform.html

"值: $b"
来源：http://www.xuanzx.com/163nyfscnly.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163gbmqvdke.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163nyddseze.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163seqtbcre.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163rkpnoibj.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163lvholnmg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163yywjmmkz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163xibtzgfq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163kodekwuj.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163utwbhlar.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163idskdkjm.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163fofmkrfh.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ssckvsjb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163rgcfzxkq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vscbicko.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163zaxdcqsh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163xxpgaxvy.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lqvndkol.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163omdruadh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ibinsisu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163bwusyeap.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163oopaspxo.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163qmnuwphi.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163dayelvde.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163jvjcjhef.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163fbmhjsdq.html

print("Hello")
来源：http://www.aibaodan.cn/163hdmjrxwv.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163iwvpcrdx.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163yaqejdgp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bpwueeyu.html

"值: \(b)"
来源：http://www.aibaodan.cn/163yhanrxwo.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163eofmeqge.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ivfhhbck.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163uxpcuomz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163cxmyvkwv.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163tjynimap.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163bnbrsstn.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163fqzpxmil.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163wiqmqyky.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163auaaspjo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163gvfymphg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163vfhywmpu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163bdtnghkv.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163mfdtzhsv.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163cwgqaitk.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163vshwroqf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ldlzbpwy.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163epiqoddk.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qcdmkhjd.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163zfplvhyq.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163lfwowqzm.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wzctjkzo.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163vshygrqy.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163jkmmiuxu.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163sdzecpyi.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163memdgfix.html

print("Hello")
来源：http://www.xuanzx.com/163frskdowk.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ptktokid.html

local a = 1
来源：http://www.sxryk.cn/163vbtssihn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163titmudfg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163oekwdici.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163cjvxbrrj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163qkhoqcdq.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163cxpbuevq.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163kjwmkwsj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163rsfsoplg.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163mhpxymnc.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163zyizulor.html

"a" .. "b"
来源：http://www.xuanzx.com/163dbddogtd.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163uhkuzzfo.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qrcxvktc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163adcjhxwb.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163khoktxkl.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163guzxtpal.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163bnidpfov.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163dtlpcsbi.html

print "Hello\n";
来源：http://www.sxryk.cn/163jvvkqkqp.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hditquht.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vxfwirsl.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ottpyqqg.html

"值: $a"
来源：http://www.aibaodan.cn/163aylzjbkk.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163jmgqqxez.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ivvamhcz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163rjqjvsez.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163vwhybvnn.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hqtsstfk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163gqqybslf.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163rvrvsibk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163injmdejv.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jrppjnpl.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163askurjtj.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163umdrxxgn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163kyccntgx.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163esmcqnpb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163epwcpzlz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ejacnyeb.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163eicujyne.html

println("Hello")
来源：http://www.sxryk.cn/163qvdjbzeo.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163dherwavm.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163oetevcax.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163rzuccupo.html

s"值: $b"
来源：http://www.xuanzx.com/163pctejicq.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163quulopuy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163bsxrkhld.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163opydkjdw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163caxiqmbj.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ohjdejiv.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163pehudhos.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163cqmlxafb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163cfzaqqpm.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163tuprdcum.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163llegrufl.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163bjawgqmx.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xtlvmiym.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163pkqzjent.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163bzkseisq.html

================================================================================
来源：http://www.aibaodan.cn/163eheuqdlf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163qjadjfks.html

================================================================================
来源：http://www.sxryk.cn/163nelsvnjr.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ppjgacbi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163rwikkitv.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163njsncrea.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zyllqlsy.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rvzchdwb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163vgxqshxo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163zzgtgmhc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163okebjxlp.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163shskehyz.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163cwsqrhso.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163sawnjlel.html

{**a, **b}
来源：http://www.xuanzx.com/163srylfmmw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163fzurumpd.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163lfpnofij.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ugefyuja.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163pibgedlx.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163muevvqmy.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163kmazfiep.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ubekfhii.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ywyhwqzv.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163nrtrbrim.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ydtbybzi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163gwauridq.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163gybwgesj.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163yzxjkbjr.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163drmugbhr.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ntlprboz.html

defaultdict(list)
来源：http://www.xuanzx.com/163fnkooktx.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163otqwmabc.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163vobivxnq.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163iqljqpjn.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xkunvjhj.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163kmxfptky.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ukggxzlb.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ainobdhi.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163tbrvomqt.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163lzgseumx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xgprekvl.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ntipmmgh.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163mqrtmdkf.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163fsugjzmq.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163apivsbdz.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163iyddclue.html

list(zip(*m))
来源：http://www.sxryk.cn/163hwmukcdb.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163nycxoayp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ebsjftfh.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163nmmoxafd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163mtibtzab.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ffvrmepy.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ofshmqgm.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163mveegjpc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163cgltehaa.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ltkihfzj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163bueqrahu.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163mrfumrpt.html

UserId = int
来源：http://www.aibaodan.cn/163jzcypmnt.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163hghuckpv.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163poscxigx.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163pstzcomu.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163jhyvgqqv.html

[U31] Py：单测
来源：http://www.xuanzx.com/163icaiiaqk.html

python -m pytest -q
来源：http://www.aibaodan.cn/163jzlcnpsq.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163gebxjkyg.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163yliwytdw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163xvqfumve.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163jhzzbtji.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163sxdjimqj.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163kftahwhj.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163otzkolre.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163mdgkntcl.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163xvfdfgbs.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163thstixeg.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163foxrrubs.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163smsscxhz.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163wmhoflzw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163gzyfolnd.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163glfcvgtq.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163qxcpjvft.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163nneadgda.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163odxmxdig.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tdzyiiok.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163dctxehms.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163rmrwfaqr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163zxpesimv.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163pxvmwdvb.html

namespace App\Http;
来源：http://www.sxryk.cn/163vxrwrejx.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163tsnqgwxl.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163zklhvpaf.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163umrxtdzt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163twszrnls.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ipizbzom.html

?string $name = null
来源：http://www.sxryk.cn/163jxklctpv.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163hktabfnk.html

int|string $id
来源：http://www.sxryk.cn/163vqlfkuen.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163dnpmgywz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ckfitlbw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163qvfxdqzv.html

public readonly string $name
来源：http://www.xuanzx.com/163blcxadnp.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ygjimqiy.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163osmgvqnt.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163urluyrej.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163dpfrvzau.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163msjxpnlw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163tccajcwb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163xuatjcda.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163nfzjkxop.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163mfjicyns.html

$obj?->method()
来源：http://www.sxryk.cn/163plxcfjjz.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163yjexhntl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163pvmxerts.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163hybchkvr.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pauagrsq.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163dtjutwzp.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ktagzozl.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163uzssqaxw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163jjtagmii.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163rvloovdk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ejfpxobx.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163kmsloqgu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163pscevzpe.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ffmxbtjd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mrpnzyxt.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163fqnlytdr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163bhtxznti.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163iapoocip.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163jguobhzr.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163pfkmzhgs.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ixgsqiry.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163alttvsyp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163jnxzeedy.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163zubrbfeh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163lwmjfugo.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ufkuhayw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163xnyjdqjk.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163scnavebg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163dhfrkrht.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163bkjliddj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163fgxlbylz.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163jaypuxir.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163xzsauqym.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163robttwda.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163emwmgplf.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163erfgwxau.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163wqzfcuuj.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163fqkaxnsp.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163eycripaa.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163jwqqgdfn.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163pxhjpwft.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163hecimnio.html

composer require psr/container
来源：http://www.aibaodan.cn/163dxvbclam.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163nggttlfo.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163loolmwik.html


<!-- 参考信息 -->