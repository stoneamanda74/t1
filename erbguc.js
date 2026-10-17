外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163opyyhjso.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163dgkiqswx.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163msrrxxyu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mbxjohmb.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163aowlcsro.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ylsrhywz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163pqzzcmmf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zpybvjhb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vxpjfonl.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163gdelicqa.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163sbahxshb.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163zmckzxeq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163lhtvygfi.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163etpqxchk.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163tihhhphf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zxcpkrfu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163oobhrztl.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163cfsmzzqm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bqrjqyki.html

[S56] C++：optional
来源：http://www.xuanzx.com/163owqhgxyd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ldtvryub.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163jvqjszhm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ajiouktu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163aefxjkox.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dallbryp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163rrszvvyi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163mofmaixf.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163bufndhoc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163sjseaidq.html

================================================================================
来源：http://www.sxryk.cn/163ysivxyur.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gjollneh.html

================================================================================
来源：http://www.aibaodan.cn/163mkjhcgmm.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zvdrlaco.html

println("Hello")
来源：http://www.xuanzx.com/163xttvofbb.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163jdykzuua.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163gyzhwqnn.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163bggsbknm.html

"值: $b"
来源：http://www.xuanzx.com/163hedplkdu.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qkejliaf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163yrtbxetn.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ompskusu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hricztlq.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ruocktxw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163tjztisro.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163lyodxkqt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wrowxfep.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163iwhqceic.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qpcekvpt.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163gvudeidd.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fenwynwz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qyqjvnvj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163gbhfnubd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163wbcsnacs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163fkzefhgh.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xtbnoyax.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163qlxswkfk.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163uewumbvx.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163acmwsoqg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cgqtnzvv.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jfagsmby.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163svqwrvva.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163tpbpveek.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lrrojycm.html

print("Hello")
来源：http://www.sxryk.cn/163iixzqfgg.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163iarwlbmh.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163qlxxtcdb.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163guqobfpc.html

"值: \(b)"
来源：http://www.xuanzx.com/163nqkzcmwv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163qmvwifbp.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163mkpptcoq.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163hwydnqrv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163rwzizavi.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ypgfaiqh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163sbqwmelk.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163fmsjjrvd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163swlfqvoa.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163bxyxtjrn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163uherjjjv.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ygypdojz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nplioaox.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vsxgzegl.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ogeydoyt.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ntlfnekp.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163pezeuucp.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qcgqxstz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163kgejfurw.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163loedomlz.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163gqzkosye.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163hkvkfcsd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163trcpkmqi.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ltclwofo.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163lqtsxiii.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163uauwshds.html

print("Hello")
来源：http://www.sxryk.cn/163dbavovgo.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163cwucgnfl.html

local a = 1
来源：http://www.sxryk.cn/163ardtvzle.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163grjgqxcv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163twqpxffv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163iwaksmdp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163dishbhll.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163bjmoeuco.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163tldjpcys.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163sukrtpmu.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163uqdhhyum.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163fojueyrv.html

"a" .. "b"
来源：http://www.sxryk.cn/163gnfpukjp.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163eiyuukyz.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163zdztitsh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163nhxktsqf.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ibyuywnc.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163cpzroicq.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163mdgqbmdy.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kynknunq.html

print "Hello\n";
来源：http://www.xuanzx.com/163lzdqksfs.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mjdudufj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163rcdsblox.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163hnfusnhb.html

"值: $a"
来源：http://www.xuanzx.com/163mkirzits.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163qtaytpgw.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163neohozbv.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mdraqkht.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163hdlxhznf.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163qlemyrfs.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xjvypeak.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163greszgae.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163skzojqlf.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xhkfojaf.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163glcmumya.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163kvbfrjqn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163zagutjln.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xkgftnqn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163zeemgvbb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163luwwpiyd.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163fqaejrpb.html

println("Hello")
来源：http://www.xuanzx.com/163ykusywzf.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163tvnkleze.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163oxedhiow.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163zvorviao.html

s"值: $b"
来源：http://www.sxryk.cn/163acrfwbva.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163lttdibak.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163idhcccmv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ofpfgwda.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163vcyymrje.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ydetdtvm.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163cvmpivsq.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163nxeyarqj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163qwrwasmj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163kfwlihea.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163xkaixrln.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163awbmffbc.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163edcdrosv.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163rtivcadc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ugapjkms.html

================================================================================
来源：http://www.aibaodan.cn/163bzifahst.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163oggxbjfm.html

================================================================================
来源：http://www.aibaodan.cn/163qajlutwh.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163wjviuqkt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163unafupue.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163fkpahpxo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163wqmpesdb.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163cqgwgizn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163xkqzuvks.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163gkoqxmoh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163yydpuzwt.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163zvhicdww.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tvjhibse.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163anexunfu.html

{**a, **b}
来源：http://www.sxryk.cn/163jifbpqph.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vttotgun.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xcbqzckx.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163qrlxargl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163oxluerff.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163spsofgql.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163arbhvbut.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ijkpomzx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163tyzymxtn.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163okwzyacp.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163fgvbghox.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163vzaxsvts.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163keoirfor.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xsmgsgeg.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163drocfnhd.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163zhukyknt.html

defaultdict(list)
来源：http://www.xuanzx.com/163ugqctgud.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163zqvewszi.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163jutroftb.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163pbabyybr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163qbczelhq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163fulntlvo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163fcyezlvl.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163nlkjeekb.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163aqppwzdr.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163imaqlxvd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163wkoxobin.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163yxrqqwwn.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163fahhbiwf.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ovymqqic.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163dkfrctym.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163jmrjgrno.html

list(zip(*m))
来源：http://www.xuanzx.com/163eygcsfhk.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163oecobfyi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163phrlykwm.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163kqqfzfsg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163jdjaichl.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163rabdgiqm.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163pynmcgno.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ofwyyrrz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163mmwmmkdg.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163vemwzpma.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163dytakgvc.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163vfbuoujg.html

UserId = int
来源：http://www.xuanzx.com/163jqpskxig.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ejdfgkzw.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163rtznuwic.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163bvsjnmbx.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ltdetysk.html

[U31] Py：单测
来源：http://www.xuanzx.com/163xqotkfzs.html

python -m pytest -q
来源：http://www.aibaodan.cn/163htbsbiji.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163rjpaxxgd.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163caynisrh.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163mscjlpag.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163mltdaqza.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163wonvblku.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163zevuhwxb.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ezjafwrt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163sjmtofhb.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163vauyrvbm.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163mwdslyed.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163lksuimnh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163tsbtvkbw.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163jrcuwiaq.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163zzorykrs.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ktqmdfrr.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163mfdmlzlr.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163fiwbbbsc.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163cuhgtkve.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163okfifdvr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163syhqjato.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163vqjmjcdc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rlbluzce.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163cpfcoebu.html

namespace App\Http;
来源：http://www.sxryk.cn/163prdswjvz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ehulelqh.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163pgmqnzpt.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163nukjnoxd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163whdrtxed.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163jhlctzns.html

?string $name = null
来源：http://www.xuanzx.com/163hzxkkskx.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163tffjrpml.html

int|string $id
来源：http://www.aibaodan.cn/163qbsecolv.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163gezeqwub.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163bkqxrxwr.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163taolkbzb.html

public readonly string $name
来源：http://www.aibaodan.cn/163zmugnqvl.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163rcipxpxj.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163wunfxobv.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163gthphaxo.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163rjufbeiz.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163iodkqcvw.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163wahbexfu.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163azevqths.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163vxgbjyps.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163rzctspdp.html

$obj?->method()
来源：http://www.xuanzx.com/163xsvbived.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163wvjgsfgb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163whziuucc.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163smohpbag.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zcqoyazv.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163jqphhnmn.html

"值: {$a}"
来源：http://www.aibaodan.cn/163rlbtmqnm.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163kltuxmcb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163vqghtsxk.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163gihumvbp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mpkccema.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163zmqrvdzd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163xxofuydv.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163qoxokkhj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kpudhfmc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163amxjmjnr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163tutroqzm.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163plgssyth.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163wrisuqjw.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163jhmacpss.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163nwzlufeq.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163mvuinapw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ezskslli.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163jwaubbfb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163wgjfwxam.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ewufezzx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163yqabewks.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163jgpgcrfz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163mbjzhqbx.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163xcrdtabw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163hfjcddys.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163refunidm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ujpcrafy.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163vdtssraw.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163dpevwdoz.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163mesmorhb.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163gwormbau.html


<!-- 参考信息 -->