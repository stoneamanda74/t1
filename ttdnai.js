外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163hkwneyhc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163bbngwlaf.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163rbgwyrhs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qgvpllha.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163fmvsmhkx.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163pnmlcfqe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163mnbotciz.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163vzuwbfce.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163bsxkmkpk.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ibfwvthr.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163gqsushny.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lulwynnv.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ofxnnhkr.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vrpdtcgl.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163wlwygdfp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163scrcjadx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163zhvuamit.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dpaaczvn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xjpvzmsg.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kyxrjvca.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163kfljneng.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163fwythgdz.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163crclubmz.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163iphqnkxg.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163llfrbvci.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163halznfof.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mpuuucve.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163swluczwj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ehmicsok.html

================================================================================
来源：http://www.aibaodan.cn/163siqogohk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163qkjohnyk.html

================================================================================
来源：http://www.sxryk.cn/163yumifken.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zczsxdck.html

println("Hello")
来源：http://www.xuanzx.com/163ipmujqmh.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163cnivlvrx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163insfcfat.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163tjedlpmx.html

"值: $b"
来源：http://www.aibaodan.cn/163aqzgweca.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vcibxwjs.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163qkrbbjqo.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qhaoiitv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ilgujohe.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pbfuaphd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nsfoszxc.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jkxavuua.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163nsndmfep.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163oiaohodp.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gidekdpo.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163gedjbzhv.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163mayyfegq.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qvhwvrhf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163xcobsioj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163bxmsbvam.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vdvvyddv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163zpahigoi.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163biyhqfia.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163kbibeguk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163vzlcporc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163mkduykzv.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163cfolzlhp.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163kxljnbxx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163brqbaeoc.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163khfyzkxd.html

print("Hello")
来源：http://www.aibaodan.cn/163wqbatjbj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163guhjukwk.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163rbfwxeof.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mcyklvwk.html

"值: \(b)"
来源：http://www.sxryk.cn/163hdlgyiao.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163odxfybxz.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163kracwond.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rwxckjue.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ieotvmye.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jsydkpcy.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ihmbsruv.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163fvqrydfc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163xswdpfsq.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163cqfajhan.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163tahouzsy.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ncpeocfw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nmjbuxft.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163miiuzkzx.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163zrmjvkyv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163vmtipaju.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163okeucwvj.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163uidmorxp.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vyinllcn.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163xpvnrmbr.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163lnzgnjzv.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163gremvxzo.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163wramwndt.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ndmzjbbi.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qdgjxzvy.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163cqzhbfxe.html

print("Hello")
来源：http://www.aibaodan.cn/163yspqsrnf.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163atcmzyxg.html

local a = 1
来源：http://www.sxryk.cn/163issjawok.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163jtrztycg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163bzkdiars.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lbslfsbl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ulzejpve.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163sbrraruz.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pgowsbpk.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163fjsfrczf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163lpqoiywm.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163tvqhaqdr.html

"a" .. "b"
来源：http://www.sxryk.cn/163petzzfrv.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pjdckgsi.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jzgonoee.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163mfvvbdld.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163zcweupxn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163uklcyzeh.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163mrufvhio.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163rtdgbktb.html

print "Hello\n";
来源：http://www.aibaodan.cn/163pncvhdqd.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163syufiygb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163cminooco.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xcbizbgn.html

"值: $a"
来源：http://www.xuanzx.com/163ribropgq.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163fhjmdzwd.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ziqcrcuf.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163moduwfgr.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qfykpaxk.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163yxqamdgu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163tcbldhvw.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163flieoarl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163xatrcdla.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163liswrild.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163wsuftujx.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163asmoylzj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163fizbxxwx.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hruepdhi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ctbreukh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163qzceskyl.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163hgbhjodk.html

println("Hello")
来源：http://www.aibaodan.cn/163inwtjcna.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pdwxymwo.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163vksiuiny.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163umkuzvjk.html

s"值: $b"
来源：http://www.xuanzx.com/163rozmbfsb.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163bhqlozgc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163tcahself.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163dkyaxfnn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163niiwlmff.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ylxekrvz.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ahpcscic.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163jdukobzk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163umxrcozn.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163gvudncws.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163mqwxyvkr.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vfeuxiwy.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163vccsbrmn.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163viqxgacw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163gqdrzyna.html

================================================================================
来源：http://www.sxryk.cn/163jugvcsgu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jvhcbrdl.html

================================================================================
来源：http://www.aibaodan.cn/163dgmttmyv.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163bctgfrcs.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163njnlykre.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163rtobyciw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ywaivvdr.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163pbmdbewb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163aoomwkcb.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163yamuagqz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163jvstosgv.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163mkvyxcxc.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fapwpahq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163yjougzyp.html

{**a, **b}
来源：http://www.sxryk.cn/163fhzrqzla.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163upbwxnha.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xjwuiltx.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163hikcmztv.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163qjvgtizc.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163quizajgk.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163mfvtioov.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163kbgfwyhh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ctgzbvbj.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163timfjyga.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163gereifku.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163hkuibxaz.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163rezswanx.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163qsomjpsp.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163reyegxlh.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mhjuxqkm.html

defaultdict(list)
来源：http://www.sxryk.cn/163zdajnvfo.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163qhqypdnj.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163pnnmfzli.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163tlkijlwa.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ppkiktrn.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163gtiznhlm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163hhjgutgm.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163pbnruwkc.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163htokgiea.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163hbcalwlv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163vurjmqlh.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163lpwswnjm.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163vwmmgusy.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163tlyhtrbr.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163uhctjizm.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163fcizmcnz.html

list(zip(*m))
来源：http://www.sxryk.cn/163vklcwrvx.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163xdvbyrmy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163khqkdohh.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163aqrozjmp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163wznxfyrh.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163thtdxvpr.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163wwgepbpo.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163baqxfefp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163kbauspoo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163hwenpjrs.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ssbreaei.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163bsgsimwh.html

UserId = int
来源：http://www.sxryk.cn/163davmlrhv.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163hulsbdtk.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xzeikfbo.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163wwssyykj.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163bvnavwjp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163pwwdzpkf.html

python -m pytest -q
来源：http://www.sxryk.cn/163rufoltbf.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163hivcpcbo.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163bsufbrkn.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163samntwsz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163ilkveere.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163racwobea.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163fgfwmdjq.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163mpovjrfm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163kirgvysf.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ojabpvrs.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163vpfbssix.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163uylhbaek.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163cmsfpejt.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163hvjgzrkf.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163obaykcqm.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163rpslifal.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163wniavogs.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163xxeqhrrj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163yjysgyob.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163vkjubuzd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ucjgpucm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163pxffnuwl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163kpkseubt.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163wpvablwx.html

namespace App\Http;
来源：http://www.aibaodan.cn/163lujwgias.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163jbjnejxe.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163xbdsnmzt.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163cyhtyjth.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hwswxhmp.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ixqtxdnr.html

?string $name = null
来源：http://www.aibaodan.cn/163agrmpihe.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163tnofllyz.html

int|string $id
来源：http://www.aibaodan.cn/163bnyrjpin.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163aperdqly.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ndcwngcb.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163dyrqbzav.html

public readonly string $name
来源：http://www.aibaodan.cn/163swjpqlat.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163fhcdwhcj.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163nbrbeexx.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163waqfweof.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163pztkqwve.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163cwsgzckt.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163orovtdnx.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ccxhogxl.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163kivwruuo.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163rocqdueu.html

$obj?->method()
来源：http://www.xuanzx.com/163kencwysc.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163gwtdguch.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163yocdaqts.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163anoyxivr.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163opgzgbcw.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163kcnfjhzy.html

"值: {$a}"
来源：http://www.sxryk.cn/163vqvyvtef.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163wyibbxad.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163sypkcxbw.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163uqvrigbn.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163isxyhkxt.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163aftcsnlg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163cxozsdhy.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163bafmfwyr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163aniimqtk.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163vffwbpod.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163nolxpfqb.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ngqgffnw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163mpkthnfl.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163layatius.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ohubkdxm.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163gnrxdlky.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ubkfepdn.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163lycjqmcw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163oxifjzbv.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163adsufajd.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163bdcrkovn.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163glwzoyqq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163mfhvqkbm.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163tzohhuyt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163lnogcwpj.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163exbtqekr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163rrzpmhuk.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163qiiiuyls.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163roldrzmi.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163pjnvidxt.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163yqaokrzd.html


<!-- 参考信息 -->