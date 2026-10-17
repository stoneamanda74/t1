外链999!wailian999！

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ztegqsvh.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163aajznbip.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163qpaavrcs.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163yosneatg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163bjrfvvkm.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ziofokrj.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pkocempc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163zbmnrgno.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163znwlozzz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163svuxlqzn.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163lpsskwgv.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163qvhnflnb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hjtxjtyu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xruonzdf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163zdbiftsk.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163buxdmbqw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163klnjfeja.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ykxfjdvx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163wtxqiijw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jgfqzyeu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163zchyljii.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163iuexuvof.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ifaaynqw.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163okkkeclh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163criigfvn.html

================================================================================
来源：http://www.aibaodan.cn/163mvbuhyea.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163iegrurge.html

================================================================================
来源：http://www.aibaodan.cn/163jxzngzpp.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163jcylrvae.html

println("Hello")
来源：http://www.sxryk.cn/163zuvgrvre.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163dhhajrtm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163kmounxna.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163eemlwsry.html

"值: $b"
来源：http://www.xuanzx.com/163ejhieash.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163gfowuqrl.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163vakqkqof.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vijohhdo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ayqqrbuq.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163znpkrdaf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rcrdfwix.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163gufkbmjg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163psbbcsfg.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nulphuhy.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163irolscbo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163xprhdiwt.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163yfrltxkd.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163xosdqkcn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163cyyiomgs.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163mryaynis.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163glwnywbx.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163pvvuunrn.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163jgpfeqlb.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ggrcjppo.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ocapkvvx.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163fzxxcxin.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163zerobrri.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163gwqgjkne.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163hhhrslcn.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163wifxtons.html

print("Hello")
来源：http://www.aibaodan.cn/163imnzzwcx.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163yrvnkqgw.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163vgxdfeis.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163sxgxkgbo.html

"值: \(b)"
来源：http://www.aibaodan.cn/163vqzrllyd.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163sqarbvjw.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163isdlmngl.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ghchogad.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163tumxdned.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163fsqengag.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ngxzonsa.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163snzvtfht.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163vwzlwhip.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xgftaqag.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163lfobnwnu.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163rzvcfelr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nqimhikw.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163jiryzfrf.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163pbzlibyb.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163osyhpphs.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ykywbqpl.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163sxcsqxjh.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163jzpwxmgs.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163xqwcvvbc.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jqlgshie.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163nddaipyj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163zkquqxof.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163lryzswkj.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qemiuyep.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ndvpnogh.html

print("Hello")
来源：http://www.xuanzx.com/163dijwtaej.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163enwugsuu.html

local a = 1
来源：http://www.xuanzx.com/163ezbuyubz.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163smovpily.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163lamhkinp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tokymccl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163gmipuura.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163vacemqbo.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163jmetgntq.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gmhspwdi.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163jxbzgvbq.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163qfyzzyka.html

"a" .. "b"
来源：http://www.aibaodan.cn/163iqfgbjuz.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163dghbidpi.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ydtkuqsh.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163jfdjitsp.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163wpwirjxn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163fxtslcci.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163xkxaadfe.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163qeevkipf.html

print "Hello\n";
来源：http://www.aibaodan.cn/163dwqmpyzy.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ithvozps.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bulgwvuy.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163wuzqjycf.html

"值: $a"
来源：http://www.sxryk.cn/163ophhoykw.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163egddhhvh.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163fgcyguti.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ixatvzwk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163rtsikacj.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163icmkmgvd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163kzhqtsje.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ujlhoosy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163qofihqeb.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ovefoaht.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ocnxnxvj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163turomcnj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ihjeadol.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163yilafzmb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163hzuglhtv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163cifujhsq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163grvnocwb.html

println("Hello")
来源：http://www.aibaodan.cn/163wkieaczp.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pwfcejju.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ikkxsbbu.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163mkomlhmj.html

s"值: $b"
来源：http://www.xuanzx.com/163lmjnksng.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qijueuab.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163bujfdcwe.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163djtcihcd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163fwuqgnso.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163idaybxce.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163nwsxbgeq.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163omdgbccj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163oxzlghsh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wkyhruro.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gylvldlj.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163cimmugic.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163mghogfqj.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163wjqwmxeo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163uhamsbyj.html

================================================================================
来源：http://www.sxryk.cn/163zfpcojph.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163pgdogeap.html

================================================================================
来源：http://www.xuanzx.com/163kauuhzef.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163vdwnvfpl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163uaqripvt.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163tnnoncal.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163hdhpvscv.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163eemtoeoa.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ehxkgtmg.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163weagqqdq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ugmwoqdq.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163wcqzqcvy.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pmzsuqgk.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163csdylwqt.html

{**a, **b}
来源：http://www.aibaodan.cn/163pdtuuydh.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163hdxmyqmj.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ftlbtpdw.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163hpmplczm.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163knezfgng.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163tcoaqqek.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163txtchote.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163dsipowwv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163zzkjupsv.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163xbjwrtwm.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163arzffetf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163elmdmpvc.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163zqhkcxmz.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163synppgay.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163cfxktphy.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mkupptaf.html

defaultdict(list)
来源：http://www.xuanzx.com/163xzzvrihr.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163mhonfcfn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163mknxnmia.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163rnstphxz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163rmltarjc.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163hachyish.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163mskfzijz.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163izdtmbso.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vexcjsms.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163agtgpqbo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163oiwtvazn.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163mxpxuast.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163jwdzgmuz.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163qkullwnn.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163pyxepkal.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163veovwdvv.html

list(zip(*m))
来源：http://www.aibaodan.cn/163leevwuwr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163hmpdwkkm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163olhxxgam.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163jhjqfmfw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163onbnerbp.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163lflhkxuw.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163cgcpphve.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163tcqcwrbr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163gdgmnzhv.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163oavvvhdi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163nzxgnhnd.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163keebqbbm.html

UserId = int
来源：http://www.sxryk.cn/163yjinagum.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163jjdsiwvq.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163clkfjtto.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zyjgmidk.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163iahnxdvq.html

[U31] Py：单测
来源：http://www.xuanzx.com/163vgvfqwoi.html

python -m pytest -q
来源：http://www.xuanzx.com/163vqdyvwye.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163wbhdrgws.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163yojvtklj.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163yljwtwlg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163vhalqwvb.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163onzlkkcz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163bxbsyqum.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163dzgvarya.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163doqjeixg.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163jvxesgau.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163gupnlytx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163xdbonfib.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ylzilgqw.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163szjnfxza.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163kwvawtej.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ifjfxobk.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163eyudvtlt.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ooaikuts.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163avxrpwoz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ajxqtkpw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163xdvahjcj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163tdzqmxks.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163yzcnekcm.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163qrauiaar.html

namespace App\Http;
来源：http://www.sxryk.cn/163qxseeaok.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163svbsgebk.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163kzbvemqy.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163rtwynvoh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163eqnvaafv.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163goikrdss.html

?string $name = null
来源：http://www.aibaodan.cn/163lbpxcgat.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163drtndjac.html

int|string $id
来源：http://www.xuanzx.com/163cmmovvkq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163mffxfwle.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163nxiafjwa.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163oufxlpxt.html

public readonly string $name
来源：http://www.xuanzx.com/163divrtrbq.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163eelecose.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163soxywmrp.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163bckrkvgx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163eslynvzl.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163lvzehwwq.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163asnuhhdj.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163cuhivaqf.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163cgfxxplw.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ygsyxpmh.html

$obj?->method()
来源：http://www.xuanzx.com/163jhlurdar.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163cjlexhel.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163zudggwxs.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163chizbpoj.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xnoidcwg.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ilubxdui.html

"值: {$a}"
来源：http://www.xuanzx.com/163skogpzeo.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163mlbgnsfs.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163tkxaoyce.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163wgwadwux.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ovezlhil.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xuvdsxdb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163trdedzte.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163iexxsskv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bwdnbdvx.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163vphuzuio.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163njcfrrzx.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163vuqbwesl.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163cjliludh.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163pttcomtd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163kfzlwzxo.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163trrcubst.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163foezoyct.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163blcxrmpq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163fzeggyht.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163nzjucaiy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163bmqjmqwg.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163vnqgvpou.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163wmyxvdur.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163onsfyotk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163baohkeqt.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163scirdjce.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qwhycdpw.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163manimmfg.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163pmbbxtwq.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rjlaebwz.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163alodfbjb.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163bvixwpxh.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163lypcbjcp.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163qklgcyrs.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163pnphimfu.html


<!-- 参考信息 -->