外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163rrsehwel.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163oznfzlpv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163nqnrubek.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163cqileolt.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163fvxtcpkw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163yeieanus.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163iyfmcfnh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163knqjnsjt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163eeolrybd.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163coensktz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163hzimejgx.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xjtqkknp.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163otwtpgav.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fzyorrlq.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163kxzkkomy.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163yghjxvlr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163kwzcekoy.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163insowlgt.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163nqgzocnq.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qogjevvu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ydgqbldk.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wowbhnbm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163gmgzqtuj.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163utrymmhz.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163fborlesx.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ticspbod.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163bbfupbke.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163uepnnkxd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163wglnkvrv.html

================================================================================
来源：http://www.aibaodan.cn/163himtxqmr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jkhctusr.html

================================================================================
来源：http://www.aibaodan.cn/163nviuupqt.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163plpkaice.html

println("Hello")
来源：http://www.aibaodan.cn/163ccisghyf.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163kqfqzzwm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163otexfpij.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163niapionv.html

"值: $b"
来源：http://www.sxryk.cn/163kahcmyyp.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163tpsmvopn.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163wejrxesj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hygtatfq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163evoemttm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163wukzapih.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qktwggxi.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163oypesijs.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163kvfdibtc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163necdayqi.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ituzaknp.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qwmstpgv.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163xssvqhqn.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163mwqmcdox.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ynscilns.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163jihrvfyh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163omgkgetk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163yjbkzgwm.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jwvrxrel.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xkpnriwt.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qpiyfwrt.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163cgpanjbz.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ylyuhbed.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ehvqwwij.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163mgulbkgh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163osadrzvi.html

print("Hello")
来源：http://www.xuanzx.com/163aksyyrsc.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163btcoouux.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163duvcpojm.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163bmsrfsyv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163scveiuwl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163lnprerfr.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163towikjvc.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163efxtphdg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163awtkfuzv.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163hikggrar.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163mbjonyye.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163dzejvgno.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163dccplbne.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163nierglix.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dxcxbhcs.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ufleaddr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163bupfkcyt.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ufrbzemo.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163vhapkxhx.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163oubpthbq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163qolrsxhv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163eaujpmnu.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163dclxeohg.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163cgiguxov.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zdnwihcp.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ceqdpnyr.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163vtzqeyxf.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bihaskyo.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ijkwkqze.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163gmxaglyq.html

print("Hello")
来源：http://www.aibaodan.cn/163ilqeiobg.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mtdntfdg.html

local a = 1
来源：http://www.sxryk.cn/163wzqdqksc.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163svleycbg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163baskcnjk.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lvuasnbq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163xmnkqohg.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163fyimjyzl.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ncifklun.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163fbybfnuh.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163hsxddpfp.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163gchdfjwm.html

"a" .. "b"
来源：http://www.sxryk.cn/163ayydvbke.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163wkctcnvt.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163prehdnrs.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163brzwudvp.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163najefcpj.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163nmhgxxnd.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163jzqtjscq.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hfphvhxh.html

print "Hello\n";
来源：http://www.xuanzx.com/163euuchzhv.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mvbveyvn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163snxuihkt.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163odhobgtz.html

"值: $a"
来源：http://www.aibaodan.cn/163ossposxm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163opbgaxxc.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163xpdyqgqc.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rbltoevw.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tstnchru.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163eytmxqjq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163mpewaogd.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ygvyghsc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163njgayqhz.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163reyupcty.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163iycozhhd.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163xbiyqggo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163rqffvtig.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163natxtojv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163hepfkdjg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163tdrigpiw.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163nangcunp.html

println("Hello")
来源：http://www.xuanzx.com/163ylhlkjzf.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163lxnmspfe.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163wusmgvch.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163chucfcmh.html

s"值: $b"
来源：http://www.aibaodan.cn/163bamkutts.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163bgrcrveu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163sxyslmtv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163rktoptuu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163nmvxuulu.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163twokdlnk.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163sjdymjod.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163inadtwhi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163vaqsxcci.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jwhnnawp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163gwatoemd.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163xcnzftru.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163vfrmevmd.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163yzaunovg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ycrcznvl.html

================================================================================
来源：http://www.aibaodan.cn/163neoekdxc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dsgczvbh.html

================================================================================
来源：http://www.aibaodan.cn/163drwfvcsl.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163akuqiwfc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163rpkuueek.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163yukkvori.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163xgaqhpgu.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163fwkfjnqm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nykxceve.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163fslbrvae.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163hnszkrnk.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163arwwtuxb.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163msblvqzz.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163gzxydwcd.html

{**a, **b}
来源：http://www.aibaodan.cn/163xbhitgyb.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163samncnvl.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163cyyszlmj.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163iweoiqij.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163mhkjjaxq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163zlrtzreh.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163rsyezcsh.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163yuuvzswa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163sestuiom.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163pudluqde.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163nlaylifn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ahqseoib.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163tnkxldnb.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163cgatikiy.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163wfkbsewl.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ojiepfkg.html

defaultdict(list)
来源：http://www.xuanzx.com/163lydhiwnl.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163sltjtsno.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ihqwshai.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163idlbhigb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163uefjogyj.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ctesqsuj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163joihxnis.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163mdpgkvea.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163zjpfebhp.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163qcghbtko.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ydjwonut.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163gboydesn.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ylxfvirf.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163uaazvhgp.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163odeummvu.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163hgkuqzbn.html

list(zip(*m))
来源：http://www.sxryk.cn/163ovdziurk.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163yiztjoey.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163qwnkupbw.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163zrqursep.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163sqkclzsi.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163yladoejd.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163asbhmbnt.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163chdgodsp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163exqbqwal.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163igdtsmbc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163klyzftjh.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163whuzrpgm.html

UserId = int
来源：http://www.xuanzx.com/163csxktjqp.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163dkilpfiz.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163htcfyniv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xkvernri.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163twchdrkf.html

[U31] Py：单测
来源：http://www.xuanzx.com/163zfbacgzt.html

python -m pytest -q
来源：http://www.xuanzx.com/163onsamzlv.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163aifrldwf.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163pazdlxmz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163obutgdjd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ptfxwoyh.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ufmecwyn.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163cmmdbyjm.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163eiqdoqko.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163izulaosz.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163vkkvozbm.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ufrbqfwn.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163kkambzdl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163awzvyskl.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163tuvxnukf.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163tnvnmhxa.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163yvbaicvh.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163noekdqjc.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163wmdeafvi.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163iigymgvd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ffoaajeo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163kxvlnhki.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163loghsyoi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163mstjdvju.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163pjkodnpe.html

namespace App\Http;
来源：http://www.sxryk.cn/163ukmxwzuy.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ezsrlmri.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163vhggnmnv.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ghwyondr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hepjakpd.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163okknpext.html

?string $name = null
来源：http://www.sxryk.cn/163gnliqyqw.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163drptlfqw.html

int|string $id
来源：http://www.xuanzx.com/163huzkmxzh.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163klykfryi.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163oszhndkd.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163xcmmpflm.html

public readonly string $name
来源：http://www.sxryk.cn/163xpxjhzcz.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163efmbpihb.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163eigvpqkw.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163sakpuoei.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163llfvmutc.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163hortgubw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163crvemeay.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163obiyyhrl.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ocuarlcj.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163eiooaduu.html

$obj?->method()
来源：http://www.sxryk.cn/163afasfspy.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163voielcyv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163uqhlyynj.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163wugsumjp.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dglxhboq.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163aludgbqq.html

"值: {$a}"
来源：http://www.xuanzx.com/163exkwnrlm.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ftfhksml.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163wnpnzear.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163kvuvppfv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qdqrsfmb.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163afcszxqe.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ygckmafv.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163rfvabgzj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vpbjrrtm.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163raybyvvx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163tfqslwsb.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163vqsjwgrx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163iivtbltp.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ugkcvkey.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163hbradfgl.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163tdfrbnmc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163xhgeafxs.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163kzehrvga.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ibhxgcqd.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163xekhxrfl.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163gktdzjql.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163mvabqsaa.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163mddbiyqi.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163gyexztlo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163vdxmqhed.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163hhowfjcv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163imqufrat.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163pgyffdvm.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163qmvmaysz.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163chnqcvrh.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163tdgmlsfs.html


<!-- 参考信息 -->