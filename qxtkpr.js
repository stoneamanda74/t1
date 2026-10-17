外链999!wailian999！

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163waxjzmjd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163pozzntwh.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163pbglpfsv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163tnkazlid.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163svwsdzez.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163jqhrfjyj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163kdrhcgag.html

[S56] C++：optional
来源：http://www.sxryk.cn/163pguwyrdk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163jmyysnrd.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163hxsqkkqm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163opkmpnqh.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163msdtxeei.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qdokdece.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163zpquwghz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163bbetxqvv.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163xhxqpxbx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wjffjtxk.html

================================================================================
来源：http://www.aibaodan.cn/163dnaaqzhf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163yhpistgb.html

================================================================================
来源：http://www.xuanzx.com/163hstcztwa.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163zkljllzo.html

println("Hello")
来源：http://www.aibaodan.cn/163urrfoesg.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163rwpbqkxn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163gxxftpfp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ywllkmoi.html

"值: $b"
来源：http://www.aibaodan.cn/163abnfliwl.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163btxkqxgb.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163asmmjzmr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qaqythph.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163mqmhqgla.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163owpaattm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163chpadxok.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ooixlcjy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163yitntelm.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nqtesjwq.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163yikgqnpo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163inxomqhz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pkroklni.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163mykfylga.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hdndqsys.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163abbnhemz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ukfkpqfo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163nqhytanf.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163duzpyftz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163rvryeotu.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163enhhriuk.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163yryutvmi.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163daxqbjvn.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163phubeabe.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163trtrjmdz.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163weuqsauj.html

print("Hello")
来源：http://www.sxryk.cn/163fmtqarhn.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zlrbexik.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163jhotsctm.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163gycupxuo.html

"值: \(b)"
来源：http://www.sxryk.cn/163efrerywu.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163xlixeyhv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163eyqykbrh.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163xtslbxcl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163dngenezs.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163kbgrvhnw.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sdsncbem.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163mkjpuwyu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163thuhrygn.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163yntgifcv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163pclcxsne.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163wicugzes.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163giqtxpuw.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163hkyyhkyl.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163pdfjhptv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rjfsjwgw.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163qamzjyed.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ggajcayo.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ihkvnazw.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163vinhuyso.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163vczdnfcg.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163kueomkfj.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163avpftdzk.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bfluyuiq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163hkvvvbiv.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163aktltlwc.html

print("Hello")
来源：http://www.aibaodan.cn/163lnngndzp.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mcecqfgx.html

local a = 1
来源：http://www.sxryk.cn/163behtqvge.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163yidrvjqb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163umeftgwk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163xwdoewxa.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vxcapfqk.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hjjgwgcl.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163eotkgban.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163crngvgtj.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163fghuigwp.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163zfroquzh.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ntpitiir.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163fxvbxtji.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qwpdehco.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163bofhdamc.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163pkswdysg.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lynknvzf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163nfrrxjlt.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163vjtvgvel.html

print "Hello\n";
来源：http://www.aibaodan.cn/163esdqpjca.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163mweiguyr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163btugqllb.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163clvgwngi.html

"值: $a"
来源：http://www.aibaodan.cn/163zxphxmed.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163qdgrhobs.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163istthcgj.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163zjmhdxce.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163kijwxkzz.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163bglnxlly.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163urrnyhgc.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163swnpnozx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163graxgudt.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163kmwlnuff.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163pjbtonsh.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163gzcdrmey.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zibspjbd.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ghfyocde.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163urhvjnqz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163jubfqpza.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ikjafman.html

println("Hello")
来源：http://www.xuanzx.com/163ygphonjj.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163somkjnow.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163jdyadffu.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163bnugdtbr.html

s"值: $b"
来源：http://www.aibaodan.cn/163kaewybef.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163whpgpqpj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163nbshdrju.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163euxlhhji.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163snyjcyei.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163zjznejgl.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ocqewpoq.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163xhblxbjo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163nrtibrpf.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163arskqifd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163bhfnjbwy.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163cjmfdgoh.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163urshnujw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163mlyjibfa.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163fjwbuvhb.html

================================================================================
来源：http://www.xuanzx.com/163gqocendw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jgaebkpk.html

================================================================================
来源：http://www.aibaodan.cn/163ychxajgy.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163gchadwpq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ghutemnp.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163pzgbiwoq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163pktrviaz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163wjsygsho.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163mpgwxyzp.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163drcmwolt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zvvdhggj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163wtptadzh.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xufjjhog.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163lebnqxam.html

{**a, **b}
来源：http://www.xuanzx.com/163litkwmee.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163iaiwmftq.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163froccnzu.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163vhycqosa.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163hqfxqslo.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ugvnhoxb.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163dqhnannb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163mwcxpptu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163wnfhinmh.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163xkimwcbp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ncpgshpg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163dqgsigmw.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163sekqmvqg.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163aeuwnsjr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163gnkrxjfi.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163gzowvise.html

defaultdict(list)
来源：http://www.sxryk.cn/163zxqsoupv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163utbhzubf.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163sfqveodq.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163cdixxsdn.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163bvhdkwhy.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ofvbpeyh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163hvgpvsst.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163fyimbozh.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163hhwkthmi.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163arjkvaev.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163kbvocmsn.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163vzsoljxg.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163gywblwyg.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163lvrxnqkx.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163xcmcnzxg.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163wkzqjxso.html

list(zip(*m))
来源：http://www.xuanzx.com/163jrufulcf.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163uqvkcwde.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163xlanezdp.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163bhqbpllt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163qfahrima.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163obyaayjz.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163agldfjuh.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163rcfzynha.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jwzqgvov.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163xxjrbbbk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163gpeverpf.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163eoubvspz.html

UserId = int
来源：http://www.sxryk.cn/163qrmpysxx.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163hvybvqwz.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163zzuyjwtw.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163isjghomx.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163jyxaoyxc.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163kdsdpkwa.html

python -m pytest -q
来源：http://www.sxryk.cn/163wlipwnkx.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ycjegyxl.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163njwbupcm.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163upwbdiho.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163uvdakcyt.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163pfcvxiqi.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163danvnilb.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163nihthzuj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163ewmhznzg.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163yxfxrqfs.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163kwkknfpb.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163icqwmyib.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163akkiokbh.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163maofalpe.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163vnrvdrcd.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163xxyyhchk.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163bvgqfjot.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163meyomkwi.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ddfqnxlz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wtyqpcny.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163sdfeibca.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163knbwslqk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ozfrfvke.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163tvgxohjz.html

namespace App\Http;
来源：http://www.aibaodan.cn/163dwwlkqqg.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163gpzxbyjb.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163rbidwdsc.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163fqmunwkz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yvredcfy.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163leoehfch.html

?string $name = null
来源：http://www.aibaodan.cn/163vhkkhkbx.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163qxnavgcm.html

int|string $id
来源：http://www.xuanzx.com/163uoggyqko.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163pkrfvckf.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163qyylkmfo.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163mkkdmfag.html

public readonly string $name
来源：http://www.xuanzx.com/163ppdnuhcu.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163rbvsmjzw.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163avkpkofv.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163dxziwzhg.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163hqrfeofe.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163votlxxot.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163qwzizmvc.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163sjkmccyz.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163sxnbxtck.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163abzfccmj.html

$obj?->method()
来源：http://www.aibaodan.cn/163sopoqsaf.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163kmzpycyk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163zdateplv.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163gmehmerd.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ypcgyklg.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163eqmyyygf.html

"值: {$a}"
来源：http://www.xuanzx.com/163esnppjej.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163fwypxjgb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ojzdnmqe.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163xadafkfw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vnaaimhd.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163yjzpuqjz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163gbsmcsob.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163mnvrgjfe.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bwezarca.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163rwxbnwcn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163llcutwrr.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163hwwxchfp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163eszvjvvg.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163rlmmkcvm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163xkkqvthr.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163cczatsrn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163umevzrsp.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163znxogrmo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ipftucjq.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163tljlmlts.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163wnzwayjg.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163usekqhgp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ougpbqdv.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163cdovctxs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163vikevddm.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163bnrfkago.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163vyfiqibk.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163lbtveiuk.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163boliqgbv.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163vbzuxctd.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ooiuqwbk.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163kixcqacg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163gbtwsyxl.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163cpijlryi.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ljnbxayg.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163xbzbwunu.html

composer require psr/container
来源：http://www.sxryk.cn/163wydjwxqk.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163fqdbbdgb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ugoronnr.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163flkhoqyr.html

composer require twig/twig
来源：http://www.xuanzx.com/163gzlvtrmz.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163gflhlfck.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163lezhuyif.html


<!-- 参考信息 -->