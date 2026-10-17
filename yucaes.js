外链999!wailian999！

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163pnananfr.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cyfnqzqx.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163cdahrieh.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163dcldefkp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163drkrxzus.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163iqwftfya.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163pwfuiotm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ctaelxey.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163vauhukkl.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163jkeuuhvh.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163copfnuat.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163izwzpoau.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163cvntrvel.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163wdzotdzs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xaqzlnkr.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ozdqwdai.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cauzhaqg.html

================================================================================
来源：http://www.sxryk.cn/163eurqapsr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wymfoljc.html

================================================================================
来源：http://www.sxryk.cn/163rduyfsgh.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163szoojovk.html

println("Hello")
来源：http://www.aibaodan.cn/163jrzbudlg.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163kwtoyncb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163oijmysfr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163nxpywysb.html

"值: $b"
来源：http://www.xuanzx.com/163ylogkdqp.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163uxwmzqjc.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163dzpzckky.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163fidkoqfo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163hrlscput.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jhjlrgqt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ggfexdxy.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ctsrnlnk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163obxnklsp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163sfrdbxns.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163goslsdrj.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163qynezcnh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xwoeqrnn.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nftswxws.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dsawkvtl.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163tkkndlhn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xgxcogig.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163anmiwqwa.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163swtkjhwd.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163qiooqoht.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ssatklyt.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ndieptzr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163obhdknlr.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163oqcrvyuw.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163mwnbtubs.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163fnurmcog.html

print("Hello")
来源：http://www.aibaodan.cn/163yxzagyhd.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163wavqiers.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163txgtpwfr.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zwuvtmwg.html

"值: \(b)"
来源：http://www.sxryk.cn/163svhyqpry.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163hepbstrd.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ncuyccxs.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163jbscvjlq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163pzceucod.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ggrjdclr.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163qxygaaah.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163bpykmten.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163qljwbycx.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rcokpirt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xkrbrxsf.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163bdhdvvzh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163inlzjijb.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163avllugky.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163axbypcok.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163glqaigwq.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ipilduwn.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163wyspshmj.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163msseajff.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163eocstbob.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163gphuoxrb.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ubjwxmva.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163sqbspiaz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163lyivwbfj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163crebhwuw.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163qhtzvnky.html

print("Hello")
来源：http://www.xuanzx.com/163zwckddiw.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163uihajaok.html

local a = 1
来源：http://www.xuanzx.com/163wvynbdah.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163mtxykgwc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163pgpvydmk.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163gavomurg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163gfrzbxjd.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hybgqssx.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163bkayxqgn.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163xzksbokk.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163esbdcrej.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ztvlkohh.html

"a" .. "b"
来源：http://www.xuanzx.com/163clufvebr.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tvryijbr.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163urpenvrp.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qtvswxec.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163xxsrdilp.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163rycvxhpz.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163omhusbig.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163vuyhumvo.html

print "Hello\n";
来源：http://www.sxryk.cn/163admxqawd.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jphjhapx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163pynsfrxg.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163mybyhljv.html

"值: $a"
来源：http://www.aibaodan.cn/163pezdxaga.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163wwdoftgk.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163gmfrxhbr.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163crfoqgfr.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fvexddgk.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163thtaxuyp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163gcltuanv.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163apiuowpy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163eopdhsep.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163dikjyvcp.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163qnrqiaqc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163wlkxwomi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zlfwshxy.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ypzbvcye.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163cuvqwwzc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163crvbvvzl.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163itefkntt.html

println("Hello")
来源：http://www.xuanzx.com/163jgmyeirc.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163sbjihond.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163eyntubum.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163rgpxzmvy.html

s"值: $b"
来源：http://www.aibaodan.cn/163pvzdbabd.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163yblkdscz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163mbuskwfz.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163uhgtfcab.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163btabqvoi.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163deqeckre.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ycgrokid.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163oxfjzzrh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163kunvegyu.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163yiakcrwy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163txrezvyu.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163gfvfruol.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163zcovoxom.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mhujyqsv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163fbngxpdi.html

================================================================================
来源：http://www.xuanzx.com/163zzuwoehm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163slzkqloo.html

================================================================================
来源：http://www.xuanzx.com/163cxbzwiqj.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163uqldgfpk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163dlvpakdu.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ekwwjrtb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163giakwvck.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hjydgorw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163wijjmqdj.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163dzpxnfnh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163epwzoavq.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163nrmcbtml.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gipjkzjf.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163vwrnyipx.html

{**a, **b}
来源：http://www.aibaodan.cn/163jrnffjam.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163khzgdgwd.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163hhhbeiah.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163vqpanwwp.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163jhvqcvct.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163fbgviicf.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163tbpuvrfp.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163jmohgsmy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ujhfajrb.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163zpqjrfaf.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163svhbbzcy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163dwkgitff.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163dwuvtunt.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ljyrubim.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163vkwkagzl.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163umrtnnyp.html

defaultdict(list)
来源：http://www.sxryk.cn/163gvwidfgb.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163jcgzdnle.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163pzpxoygb.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163usukcrtm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163govckjog.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163mjxklzww.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163aoyphwst.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163whkknhjv.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163sssudbwy.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163vepbssrb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163pjxwxfzl.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ejxgwatd.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163laskplpv.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163bztvsxzx.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163svbmbjhe.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163bwvquhvg.html

list(zip(*m))
来源：http://www.xuanzx.com/163nfpnfswl.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163xyuzpjzz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163nsynxnlj.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163oubwgmoo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ehxpqxyx.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163tcfnqrgb.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163akxyawbv.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163fauykoqw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jvadelty.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163aanjiyst.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ynozlwoo.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ggtdqpzg.html

UserId = int
来源：http://www.sxryk.cn/163chbylvxl.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ytaacaiy.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163akrbzqao.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fllxxijm.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163cnlquhvz.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163vanhaxew.html

python -m pytest -q
来源：http://www.xuanzx.com/163uwoeipcm.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163tuhtijot.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ouedojxv.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163huqwiyru.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ckeojawx.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ubopdgnl.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163zoswgpmz.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163hvwluqxo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163pvivttcs.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ajfpqmyt.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163rhksqgrf.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163obpqdlhp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163awobrxmh.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163edpaukeb.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163iscwfgjq.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163imhamccv.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163bwisauvt.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hcposrxm.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163enttcyrs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ztunujli.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163zajqwlau.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163cgeaqeln.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163qtadqmmn.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163syvhywwt.html

namespace App\Http;
来源：http://www.aibaodan.cn/163wzwitdqc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163wbvmoymo.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163wmskxzrm.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163gziykgqe.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kzgcbnxf.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163auvchbnn.html

?string $name = null
来源：http://www.xuanzx.com/163ipuanjtd.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163svhftfot.html

int|string $id
来源：http://www.aibaodan.cn/163zifjhkzw.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163zoxsgenp.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bqdeiacy.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163srtisuca.html

public readonly string $name
来源：http://www.aibaodan.cn/163kmxeesov.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163deieqdjh.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ibfcnedn.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163uwpnwilf.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163fbqjpnip.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ralupzfy.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163xpfctxvk.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163clirketo.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tbpgqjyt.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ygjflyyf.html

$obj?->method()
来源：http://www.xuanzx.com/163nkkrkdyx.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163dcjtzkwr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163edpgzfrs.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163quscjeyy.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eomdahnn.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163wyemkbzk.html

"值: {$a}"
来源：http://www.aibaodan.cn/163howhqnei.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ztwwmhqk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163dhkwokix.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163lozkgnck.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vzeaqqoz.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ovdttrlb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163kpnzjmtl.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163roqmjugx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163fneuuhqt.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163klkghrmd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163vpnqwhau.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163zpgeovls.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163tinyyjkf.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163kerwxgrn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163aopwurij.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163wnkfzpyh.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163imrtqift.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163zuvpxxna.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163arqttxeq.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163gtkkyeoy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ybdmzllm.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163jgfewqan.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ozoggico.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163quoufmhd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163hqoxzzlv.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163quijbraj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163lajxjvkf.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163wpfpgkbh.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163jpyyecgd.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163gdpfiynv.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ygcnlfpi.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163kwenprez.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163zczuaxts.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163fsdeuhlr.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163gtlbqxvd.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163erogalic.html

composer require psr/container
来源：http://www.sxryk.cn/163vjlspmfo.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163chgvxixa.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163dqzfdjtc.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ebgjimfe.html

composer require twig/twig
来源：http://www.sxryk.cn/163ojiulbbm.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163fjaovqsq.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163yiwbzgzt.html


<!-- 参考信息 -->