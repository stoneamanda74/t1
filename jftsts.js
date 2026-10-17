外链999!wailian999！

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163llhyswjz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zenxdqpq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163yzgbfygt.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163scvxfwba.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163mqcyesnb.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163mkyqxqdt.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xnfxhxsm.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lpoiiwse.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163pczpewlt.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163orrazvvo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163iqzjmkbo.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163vqejkgic.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jlfklppy.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163tibxfrhq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163koyxwzhv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163nprptiwh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163lrylffsg.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163olkpirmb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163nbeqfzgo.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163xmyfkcmn.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163cdereefc.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163kpbgaomt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163vqxggljx.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163npyguwtd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163nyraeebz.html

================================================================================
来源：http://www.sxryk.cn/163rzapjgjz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163eelvgzub.html

================================================================================
来源：http://www.xuanzx.com/163oowstuhy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kwaucper.html

println("Hello")
来源：http://www.aibaodan.cn/163vwlyzzvr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ppfjhfhi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163fdrkoxxg.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163xdegbspx.html

"值: $b"
来源：http://www.sxryk.cn/163qqffruup.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163jvqjhyqr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163panxesqt.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163icjakttc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163edkynrzp.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163eimengux.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rmehqavk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ngihxcxl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163pwwdnhpw.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dsdrvwpf.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163tmytljfp.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163jhssmkrb.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163diizolbh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163hjrktmdv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163bdymsosb.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163dlyjslzv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vgizsllq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kborvizl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163nvsadxhj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163yhysvafg.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163rkgesllg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163dznaadjp.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163crianvbs.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163uydbdzyt.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163qpfdbukw.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163aipmshng.html

print("Hello")
来源：http://www.aibaodan.cn/163gstdsrze.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hqvnkciu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ehroxsdv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163peawbeje.html

"值: \(b)"
来源：http://www.xuanzx.com/163qfctvwny.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ivnqyebb.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163mdqulpdd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163luzyfagx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163qsbbopny.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163wherbzbh.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xfasqetg.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163pcyrqstq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163tcxuzusg.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163qdfavaqk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163muxedeqn.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163utqetcro.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163wwnkyfse.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163dizwhdpc.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163wjfqazjv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ieozbnay.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mfakohhn.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ndivdjje.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ftilyxzp.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163uwtnuseb.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163tvrnhvsk.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163oztqsxkm.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163waeyitjv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163gtldoyjw.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163uarsxyha.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163yvrhpiir.html

print("Hello")
来源：http://www.sxryk.cn/163xerxvzex.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163jpfbzbln.html

local a = 1
来源：http://www.sxryk.cn/163yvwveect.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163knfjpewy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163urpwgvoy.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163vbtuudpk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163tuifhydn.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163unsjcmfo.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163nkzuymbh.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163rvwvewxj.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163tjmpeyjl.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163hvyzqutg.html

"a" .. "b"
来源：http://www.sxryk.cn/163vxfhocxa.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163bfiacstu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163xdezymyh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zirxvqdx.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163vbwxrjvt.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163mpebtvaq.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163daxsljzg.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163uhqxxuwp.html

print "Hello\n";
来源：http://www.sxryk.cn/163orhrshss.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163kmqbcsha.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163wfokdzjy.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163klhwqkue.html

"值: $a"
来源：http://www.sxryk.cn/163lsbhsalh.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163hrjecebb.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163mgenehnf.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163kcedlhtr.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163xcphhqon.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163tpafpdxz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163kqjgokla.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163lqkrwlbf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163pjspsrwp.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163gxtdqkcb.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163vxqwztyz.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163yipnybua.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163shjizohc.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163mypgzsud.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163zwhvwusy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ultadcuj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lfmygsde.html

println("Hello")
来源：http://www.xuanzx.com/163tbzddjtn.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163qgpnzvqw.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163rkrxqsjl.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163astczsvf.html

s"值: $b"
来源：http://www.sxryk.cn/163wqfgczmm.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163bcksesyw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ryxgqrhu.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163vujkgnbx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163uggxjeql.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163sfewntiv.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163nqcasxgx.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ndypsshz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163yqmtlbvm.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163furhmqvp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163vbsuffca.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163jgftiofi.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163khwzdlpt.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ggjtwady.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163taaybssq.html

================================================================================
来源：http://www.sxryk.cn/163npeljpye.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163mlusibpp.html

================================================================================
来源：http://www.sxryk.cn/163bpwhmjya.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163fwmmiqih.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163mvcupenk.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163xswczuwt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163dyarvxoh.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163vbayzrhz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163tywmnemx.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163kzrfymbm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163pckoyzxo.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163uwyfaivp.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ibbrgrvh.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ntbkxpzp.html

{**a, **b}
来源：http://www.sxryk.cn/163hmljljvo.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163fbctnzpa.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163zydwjanp.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163vtjyrnsk.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163bkoxfkkz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ekucbblt.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163qzkbryej.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163elagpiek.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ubpqvvik.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163sbkrczlu.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163abmojrem.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ubsuianl.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163oharsutd.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ixnnajnt.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163yotsbrlw.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163nhtuslaw.html

defaultdict(list)
来源：http://www.xuanzx.com/163epnyuiwt.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163radtyfom.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163rhjthlza.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163twpbwulv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163wyolqyym.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163vbczdhew.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163bcpyzpnw.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163oowarqea.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qzbgvfck.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163dgwhahcw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163vapswsup.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163xfmtyvmq.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163lykxdmkr.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163yfzijekb.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163phkfksdp.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163bfhfzuds.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ecmjzyus.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163zwlildek.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163bucngdda.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163rhneetwu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ffmpbbkq.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163dgbprohc.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ezjabpdn.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163vvqtfepd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ouhtyfiy.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163kcbfnbns.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163xzmfvwbe.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163glmryynb.html

UserId = int
来源：http://www.xuanzx.com/163jznkdhfp.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ffophiwp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163zsrykdkn.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163bzmzhvre.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163xdotypid.html

[U31] Py：单测
来源：http://www.xuanzx.com/163zcotxsea.html

python -m pytest -q
来源：http://www.sxryk.cn/163btblpocz.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163omjorzvc.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163uvsrbrvm.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163uqtxhgvn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163vhiclfrq.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163tqmitdqj.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163jqkeofkg.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163zrzzpitk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163gitokpcc.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163vsvsplnt.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ofpzsrbo.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163mjyqhevn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163fyilfeve.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163hxlkwhcg.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163dxaignow.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163vpztzmhr.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163uierlacf.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163kkirqkau.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dukbejnh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163hufaqdsw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163pgkhnfry.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163wurgrkyg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163kjvclaii.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163kvdlpebe.html

namespace App\Http;
来源：http://www.aibaodan.cn/163mbblxslf.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163xchzrerc.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163xgabckty.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163dmjqknxt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fkyuhvch.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163brggfhxx.html

?string $name = null
来源：http://www.sxryk.cn/163lskwqmdl.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ovebewzs.html

int|string $id
来源：http://www.sxryk.cn/163vxciatpx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163nqorftll.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163fqapilxn.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163wywhmasl.html

public readonly string $name
来源：http://www.aibaodan.cn/163huemlssq.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163eqscjlhg.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163unmxyuel.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163lplhimom.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163wyigeopg.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163pgrguegt.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163gkpvdbkw.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163pdifgfsv.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163dvzawgze.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163dehtveup.html

$obj?->method()
来源：http://www.xuanzx.com/163damzauwy.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163zuojtdnc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163nhvutvvf.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163bhdjvrox.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vykxgstu.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163lseskwhu.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ltdwcqwx.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163istvrspu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163eqkptwle.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163quzbhqve.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163adiymrnv.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ziuhflew.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ehwbvklm.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163vowvfsra.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163jetynhuu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163gqsfhlna.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163crcsqvid.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163gspwlifx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163dbogffnq.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163hussvwoq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163isprxvsq.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163facfudyg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163qniontne.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163udjimhcz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163dbkucuth.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vputstdb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163fivioges.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ewsmtaen.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163sojbcrpx.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163cssvqneo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163iwdqztwl.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163embgyktn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163holuqwkm.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qxrlyxlt.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163igqyfode.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ufesgolo.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163mwvtddty.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163decvnhox.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ckdspjcb.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163tbtbauzh.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163bpadrvxb.html


<!-- 参考信息 -->