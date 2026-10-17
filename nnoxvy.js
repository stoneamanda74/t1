外链999!wailian999！

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163cmmxlbrs.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163yjjlgsuj.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163wekewiup.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163qvvudiol.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163iiygwdwm.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163gevdbxoj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163gzjljygf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163esqeqpke.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163cgmnezwl.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163nlugbhfi.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163hpzyxdko.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163mrrbzqsq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ugvmkiqj.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163pgmkrhyw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163oefirveq.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ujyppkrh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ozzbloey.html

================================================================================
来源：http://www.xuanzx.com/163unffznkx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lypjtndq.html

================================================================================
来源：http://www.aibaodan.cn/163uxldcdbt.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163lpnwbgyq.html

println("Hello")
来源：http://www.xuanzx.com/163kmlaizda.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163stgrocus.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163uzhsvxwk.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ycwjlrha.html

"值: $b"
来源：http://www.sxryk.cn/163kwessjpw.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163rhpsocxp.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wkdtnetk.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163wulfegjt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163xfcaingv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163vkrvozqj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ffwsxocf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163iqokvtcz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zhaeclgu.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163azduhdjr.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163tlfslttk.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163sazwghtf.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163potdssml.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vxovudkv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163cvphswme.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163canopwkg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163exglqftp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163nzbjamzk.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jlsimwve.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163cwkrxyql.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163caeaosqx.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163jmbbtifv.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zymckckp.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163msecxkay.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163kgtvqjds.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ttvlfhhj.html

print("Hello")
来源：http://www.xuanzx.com/163bwyhfwxd.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163nzlxndcr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163qqkzafub.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163qqmhhoph.html

"值: \(b)"
来源：http://www.xuanzx.com/163eukmdbth.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163opggdqwi.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xcyowwfd.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163tcotvvhq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ottadfga.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163jwjehwqy.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tgppadtj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163lsraolax.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xetoclpa.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163dvstdxaf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wtejwott.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163iriymyqg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ughpjiuf.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ozqweoau.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163yubgjupq.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163xffiyzmo.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163clletfrg.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163tlavihdh.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163mrncbfxa.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qwjhxyyz.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zisxslkp.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163rmavhztb.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xqbdygxt.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163pjddxngn.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163bbcqrcpj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163djfgtpag.html

print("Hello")
来源：http://www.sxryk.cn/163nxwpiwyq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163iechoeuy.html

local a = 1
来源：http://www.sxryk.cn/163agolazfs.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ibfokqli.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163bkxkymco.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163iaxviptc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163rfibjyed.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ndhetarh.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163wcogusbx.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163wldvlagl.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wmlkehyr.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163iddvnuqp.html

"a" .. "b"
来源：http://www.aibaodan.cn/163rismcbqf.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jqaznvbe.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163lsfhloak.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163fdsrgdle.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163gqjbnequ.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163iwbcassc.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163gmmtluid.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163quqxpnbh.html

print "Hello\n";
来源：http://www.xuanzx.com/163wjqfomqi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163qbtztxtd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163mrckjlck.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163lnpltbps.html

"值: $a"
来源：http://www.xuanzx.com/163pdbqfzuq.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163zdiwxvfr.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163cerkzham.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163pckjfflx.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163yzyyaaar.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163vuctgpmo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163mwckiowq.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163xgsuztyi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163qlzxanpz.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163qfdhlynw.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163supgxpuw.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163kplynbmg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163wnqswtmm.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hnvtapgm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163cfgqcqkk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163plfvokvg.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163sipmclei.html

println("Hello")
来源：http://www.aibaodan.cn/163tlnyqiwp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163dwberfdh.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xkniupye.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163vaabqasj.html

s"值: $b"
来源：http://www.xuanzx.com/163wzuiswmu.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163exlkowlo.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163dcvipbik.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163uhezbpgi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163lcrdjarc.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163vvmjxmqi.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163pmqbiuco.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163njzmhagl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kblbpvpt.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vgzcbwxt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163mqannkow.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163egnkxguc.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ongpeunp.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163chsmqcbr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jhfaedho.html

================================================================================
来源：http://www.sxryk.cn/163rifpbfzb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bsgcingv.html

================================================================================
来源：http://www.xuanzx.com/163zcvicjyt.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163cwqzihtz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wmzeidei.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ttcwcfuc.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163sxdqixme.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163flsfgpmi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163isnkrtls.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163dxfmsyhl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163kjuuebgz.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163vifeuddz.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vexjolyo.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163nbbcksll.html

{**a, **b}
来源：http://www.xuanzx.com/163qvlawbpt.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163nqfywlqy.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163odcgmcai.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163omdwohob.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163pwkiwhpc.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163fmlqjzep.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163oysnbuve.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163lumlxckz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163qjkacxkq.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163mwdzjdnt.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ryxufkmy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163xgnspgdu.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163uxmswqas.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163sxvtluwr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163mlybkhms.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163fojabybk.html

defaultdict(list)
来源：http://www.aibaodan.cn/163xbysbwah.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163stqtsxyn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163lfgupejd.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163nnewpflv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163injrzhfk.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163iomgzjaa.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163xhlkhbmt.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xlvterve.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163qsnndntr.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ffyzmtsn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xbbcisma.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163vvoazfva.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ualtizar.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163dapnpbuv.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163lnxkcloe.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ixsxmepk.html

list(zip(*m))
来源：http://www.aibaodan.cn/163zfrhewpl.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163kehfmkof.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163uqaihyra.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163fwpfxjoe.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163sxkpjewg.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163tbzmiuqg.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163pbewvaob.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163iatjzptw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163duphrcrj.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163pmggdjvg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ejcdbghx.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163anfhqbci.html

UserId = int
来源：http://www.aibaodan.cn/163mylyxblv.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ebjmubgr.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163iayflniv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ixwuwhzs.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163lukplxkt.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163tesogfbs.html

python -m pytest -q
来源：http://www.sxryk.cn/163gcxmsqmo.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163culpdohs.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163fqlfnmcb.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163cclheslj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163rxoktmni.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ivnzgrsa.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163sfesmoep.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163mmvcipec.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nblbdrvm.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163qbecjdkp.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163skbrvgbi.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163vpoazoff.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163gtuvamxn.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163xzemlfkt.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163hdtjollp.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163flnecncx.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163kobwatoi.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163lobyeuto.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163uwkhmkgj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163zxnurgpn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163hiazkjbb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163amnayyaf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163uzvxiydj.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163lzrfdkzo.html

namespace App\Http;
来源：http://www.sxryk.cn/163kfspjxlt.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ivnwakhc.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163hjqxvyvt.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ebyorkzr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163apfkvsyg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163smjcebqd.html

?string $name = null
来源：http://www.aibaodan.cn/163rsyuglad.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163gycqucrr.html

int|string $id
来源：http://www.sxryk.cn/163jgvxuuug.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163adbzxutz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ebiwrgig.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163nhkkjmys.html

public readonly string $name
来源：http://www.sxryk.cn/163sdasxxrk.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ziqynbof.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163jpyzoedg.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163qanfyuma.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163pyvttekn.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163docsnmzb.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163mxoozhqd.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163kiwergdm.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163sbvsojkl.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163mhdbqswp.html

$obj?->method()
来源：http://www.xuanzx.com/163vgmgsllo.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163wsualzbu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163wodsojdm.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163qmxnxyyh.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pllgsvxs.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163tffkqlcv.html

"值: {$a}"
来源：http://www.xuanzx.com/163wfkjsxxi.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163uvjbajsu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163cfcijdbc.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163urxxkmmh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163fxqdyycq.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163xisdbumm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163tlpoiffe.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163agsiakeo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163klafuori.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ucstsjuz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163rvaguebe.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163tmavvptm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163zcrfhcyk.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ujftyeac.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163rbrurcgw.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163vinalklc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163fcafkrsw.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163dxjiwmts.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163mepamjul.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163wvratifn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163husojgmv.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163pxxncejv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163aldytkyf.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163soresyhy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163sqjqzvol.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163sxjklqvp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163wsxnbftj.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163adeevhdw.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163acfiyftp.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ijupoheo.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163qvyhoeyt.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163mkurfyua.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163qfescbmx.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163qcwruncc.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163epusrira.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163wnwfzljr.html

composer require psr/container
来源：http://www.aibaodan.cn/163jgthfelp.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163zpdgwiky.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163odtucvdq.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163idmkeipg.html

composer require twig/twig
来源：http://www.aibaodan.cn/163acheofpr.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163rftqdzcb.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163kvcsgmoa.html


<!-- 参考信息 -->