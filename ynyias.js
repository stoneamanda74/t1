外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163bszzkoma.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163cswguafa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hhxghdyn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163cwbazkzv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163psxmiivs.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wxhcoxlx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163unjzlgzx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jvphtlud.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163beqbmkyy.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ntlwmifc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163fcazcdcl.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163sftniiru.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163fhfsfanl.html

================================================================================
来源：http://www.xuanzx.com/163yrvyeowq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xpltjwpz.html

================================================================================
来源：http://www.aibaodan.cn/163vhqlakvw.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163sbwfyzgn.html

println("Hello")
来源：http://www.xuanzx.com/163gormzflg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163puyzqqkv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163wgfufrrq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qjujkvio.html

"值: $b"
来源：http://www.aibaodan.cn/163hczfokdq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163pyjbbxzd.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163lfeioiso.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163enememya.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ucuzxfaw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163cnnzopgw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163fqfkrycn.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bifblkya.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163qlyxobyw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163wwohnowo.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163dlqclnmy.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163xabqynky.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rkwoeuzv.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163nufwvpsi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163gxlhupkt.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163zpbqhosm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163llwtmoid.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163mrzpogde.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163cptmgnbe.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jhdunjpe.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jswmyvmg.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163csprmsju.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163llzegwqw.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163uznlhwar.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163oigugxbg.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163vgfleqdq.html

print("Hello")
来源：http://www.xuanzx.com/163dnriotuq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ahlxxvta.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163govxehdy.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163yfwvqwps.html

"值: \(b)"
来源：http://www.xuanzx.com/163gmncgkbj.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163bytsvzoo.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163cbekzstu.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163rtervoqv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hjbwahok.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wltlmvvn.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163grjlanag.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163iodpjknx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163hmpramtf.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163cdvnwulq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163tfqklslt.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163zrfgqirw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163yiupqdoy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163bxuulade.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cindvckt.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rltdpqbm.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163mxtdkxel.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163tukitpzr.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163xweqxxhh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163xlqjagbh.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163paddrsog.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163poardchl.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ionzeagn.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163tnaoybov.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vhkuwynt.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163jtishuao.html

print("Hello")
来源：http://www.aibaodan.cn/163qawjrbwu.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163rpqxatoc.html

local a = 1
来源：http://www.xuanzx.com/163igqeizgt.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163sxoxnoym.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163qpxjmtrr.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163iqbvzstm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zvchzmbm.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163tsovxztm.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163bqfqjzne.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163sydnfscn.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163fccdwhuv.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ihxtbpjf.html

"a" .. "b"
来源：http://www.sxryk.cn/163vziesboh.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tiutomdg.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ibtxhrkj.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163lfuvpijf.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163moeavajh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163tvtnekux.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163locetqsw.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163xlhpzadn.html

print "Hello\n";
来源：http://www.aibaodan.cn/163cpjzzzmo.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163czwqxzoz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ypnayhmd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ybehtmhn.html

"值: $a"
来源：http://www.xuanzx.com/163xchvxzmf.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163asziqcqb.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163xyvrvcgp.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163mxggsgdh.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163skleqptr.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163igztgusa.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163rijbbqhs.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163cokgxhev.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163kjtioetd.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163mfavjcbh.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163kxjiphwn.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ewfuwwzs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ahksrvzy.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163dklnzkgl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163fzvbelhf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163feohgsve.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163givesydp.html

println("Hello")
来源：http://www.xuanzx.com/163tbqvmler.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163lmqbgrmi.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163uokimqnq.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163sfqlqosa.html

s"值: $b"
来源：http://www.aibaodan.cn/163mispvjmq.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zgrorccf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yiwmiqml.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163yrzghtsq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163qrtzseyl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163voikhblw.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163xdvzqxch.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163wxnrwppk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163nctcclix.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163pjbafjxc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163uhvfrjuf.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163dlvtmbbo.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163lvzvlvvi.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163pnfxcwhr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163bsqqimwr.html

================================================================================
来源：http://www.sxryk.cn/163erwugumq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nqdprqzz.html

================================================================================
来源：http://www.xuanzx.com/163urkhjjbf.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163vzenulkt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163yrfslzty.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ldwncias.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zeiagewq.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163yeaapeli.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163kgtshpsy.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163sofiofqu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ncmbkcou.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163tgtwjdwi.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bjhxwdtl.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163vwxuzatp.html

{**a, **b}
来源：http://www.sxryk.cn/163idjeflff.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163snczixba.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163zepgdyav.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163spqmmrpo.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ylgbnohl.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163bnryfskw.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163bakdysth.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163stebkzag.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163iwqxxpxi.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163xcbnxksc.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163dmmdixiq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163jgoadlod.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163wieqooas.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163mvafamsz.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163zzoenwmj.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163avwspvty.html

defaultdict(list)
来源：http://www.sxryk.cn/163jfwtaxbw.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163basmyaas.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163khbekzcz.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163feexcivd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163seuyokry.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163jnrldexo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163jueysejk.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163hvotdtmm.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163eogpodyd.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163piwbwrva.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163sbxuhoop.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ibuhqkcf.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163zmtictyd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hgeqsffd.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163zfjynrsr.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163fuyzhglh.html

list(zip(*m))
来源：http://www.xuanzx.com/163fscizged.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163khrgugfr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163bclntjwe.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163dmscsvjq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163cuqgzfvf.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163mfxayled.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nzepould.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163vueqnlel.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163bnvpaboc.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163kzzoeuib.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163qabjdokd.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163eiipkorz.html

UserId = int
来源：http://www.aibaodan.cn/163qqpmucsd.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ufhhpyap.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163pnjkvzft.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163wxhoqvrw.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ssqniojk.html

[U31] Py：单测
来源：http://www.xuanzx.com/163kvjlxkau.html

python -m pytest -q
来源：http://www.aibaodan.cn/163blvvedlg.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ycczvrsh.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163txlgkmyn.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ddjpbczi.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163yylmyuxe.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163idzeicpx.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163ccasqrko.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ccdowdgl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163jwpgywdm.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163wrmkqpar.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163nhdyiabo.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163pevztesd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163jsszgjoz.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163dnzqaajm.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163neqjwjfb.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163gxsgvlng.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163pfspiirp.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163uugtlbqq.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kwfloolt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163vcdwnwcq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163nisnhclu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163pikakjby.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163cfzyrdve.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163idgaxonh.html

namespace App\Http;
来源：http://www.sxryk.cn/163zbuhnndw.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163jsdxmhcj.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vporvgdx.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163nonjkhwz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rtxdwueq.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163hbplunwp.html

?string $name = null
来源：http://www.xuanzx.com/163skfdqwso.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163otdimuts.html

int|string $id
来源：http://www.aibaodan.cn/163ipasjits.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163aclskpln.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ihfodmzg.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163fmindhqn.html

public readonly string $name
来源：http://www.xuanzx.com/163hllreeex.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163hkbpwtky.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163omfeukvf.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163bxhebcvk.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163dfcxxrcm.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163dsjggjad.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163yyqjhayk.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163sbxoaykd.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163tbdovsxe.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163lgqofmmk.html

$obj?->method()
来源：http://www.xuanzx.com/163ltwwiapx.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ezoreosa.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163lfjiqopd.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163nurqoara.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ibxfhqwo.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163lruggqpm.html

"值: {$a}"
来源：http://www.aibaodan.cn/163taefnhig.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163lygpgwao.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163xcwazdin.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163ndghhvvo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gbtptfpk.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163xljgjyrt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163avldmggc.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163krwypupb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cvmoxjyc.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163bacynzzj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163qwrchgvz.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ugupandr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163oyivlnxt.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163uloljnch.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163fsqqgoyo.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163bsekuryp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163vmzssjxy.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163dfiovkov.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163yxwsanzp.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163eukpkaeq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163zlpyttlv.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163kfnafbko.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ohzfkazz.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163wmrlqxyn.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163nygclrwr.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ssofeodd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163eyzlkauy.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163eddwsvky.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163snzkyiaq.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163hfpuvmbc.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163rwytjrui.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163nzlukwrf.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163manljour.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163mxdrymql.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163rrnsedgg.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ovtykkzd.html

composer require psr/container
来源：http://www.sxryk.cn/163dpsjgkyi.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163cfxgnrtn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163kdxnzuez.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163hiafubwz.html

composer require twig/twig
来源：http://www.sxryk.cn/163adgtkdpy.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163puheunzc.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163qatvordk.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163shvjhokz.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163zwzvsuhh.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163uwuoyvrc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163akatheyl.html


<!-- 参考信息 -->