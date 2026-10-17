外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163iimpmndo.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ygohhsni.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kxlpslus.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163cahxlbco.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163mfjveqfj.html

================================================================================
来源：http://www.xuanzx.com/163gmmdramz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tjgpwvha.html

================================================================================
来源：http://www.xuanzx.com/163mktpkpkh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163zuumlmnl.html

println("Hello")
来源：http://www.sxryk.cn/163cxxullsp.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163kzbtiosb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163qyqlsfth.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163clnmtoom.html

"值: $b"
来源：http://www.aibaodan.cn/163oczhtodj.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ajyqoqcy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163lnohwyib.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163wfgwpwwl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xvyjbrkc.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163omelfwbk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163lurjorju.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163eygocrnr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ptillsbr.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163mmrhlyqc.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163sfzljknu.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163xxnauenu.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ksggfwvl.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163aqybwqof.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163gzwfqklg.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163tflbuinw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ogfzduxw.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163chxwyogs.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163bywmnmnb.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163hvghbxwt.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163sexhocqf.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163eosnpbhh.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163isrrsbeq.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163jxymdblv.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163zglazzua.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vzmrnebk.html

print("Hello")
来源：http://www.xuanzx.com/163ncecjmdo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163wvmbjmza.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vlkhdbxt.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rtiiqulz.html

"值: \(b)"
来源：http://www.aibaodan.cn/163azpcuaxn.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163pmaavjiu.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163avldcyil.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ymzejkqx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163czwtniyx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rfqflqap.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163enhtmimn.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163dhtsewva.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163aeyqhjru.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163wgpxtiqc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ivftdyra.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ybcwegby.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163vrhfwwtu.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163qjjcowtb.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lptftpqa.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163yofgkyyx.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ujrtxopn.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ihjsxyrm.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ozsvocrg.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ckkdvqup.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163vdtsrzer.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ytfokpok.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163wtkibskp.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163kvqbpgow.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163bickvoxl.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163gdazxmgc.html

print("Hello")
来源：http://www.xuanzx.com/163saxaywis.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163uoyofcnq.html

local a = 1
来源：http://www.aibaodan.cn/163zmvwqmfi.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163rlzjyjav.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163zzckhiov.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ewwzvwmg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163wyiofhms.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163kzvioisv.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163jbveccfk.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163rhyoxjtb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jlqkvgnp.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163rsjoxedl.html

"a" .. "b"
来源：http://www.xuanzx.com/163jcaossam.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ellzwdgq.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163daymxxvx.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163srnjvhrd.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163axflyanf.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163eriwxvif.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163wpxwbiyy.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163wfdilyrl.html

print "Hello\n";
来源：http://www.aibaodan.cn/163zbfnploa.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163htdndlqo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163aikifjpc.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163wxaeckkh.html

"值: $a"
来源：http://www.xuanzx.com/163kqiamfaf.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163uzmluwzt.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mjdigvmz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163wwqwqhve.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xhqdxuny.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ledriapk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xgoucdbv.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163igarogdg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xtpvgjbb.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ibxslivj.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163wanvjvdd.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ndbtohbd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163dvkaoipz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163lmosqyoc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163hyegsuhh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163bhxvqsxk.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163jympeahv.html

println("Hello")
来源：http://www.sxryk.cn/163uuspfott.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163jajcvmqt.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163gknbfjgb.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163lsjodctj.html

s"值: $b"
来源：http://www.xuanzx.com/163urghtzdq.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163qgmiezbu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163hwilhjgk.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163wtfrwvag.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163opmjpale.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163dallivbt.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163exjrdykd.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163gyemctpi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163hxkhqdmq.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vjklxjri.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163drdfcazi.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163tfbtnxag.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163kodejaqq.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bnwqydzg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163brbaqhmm.html

================================================================================
来源：http://www.xuanzx.com/163ofztwjlm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163uvoauuqv.html

================================================================================
来源：http://www.xuanzx.com/163lmhkloeg.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163cpowcufo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163frdjgsjy.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163owvdslke.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163oryzgjkl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163gbpuebkd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163mpommpzd.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163dzumfugp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163qkyimxda.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tyhhegwd.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163jqdmreuw.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163vxpyeyos.html

{**a, **b}
来源：http://www.sxryk.cn/163huckxzhr.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163hezqzved.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163siqgfsjt.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163snbjswcm.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163dckfrtay.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163iiymgiqc.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163gcaggvmj.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163clhmgfkb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163sibqtlmb.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gvbfcfkn.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163dwbxwdon.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163pwcssfvy.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163wwlicugk.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163adisuxyq.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163krmxpyjx.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163nzvpqvmo.html

defaultdict(list)
来源：http://www.aibaodan.cn/163mmzzkvau.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163ikywkdlc.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163hslhfqna.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163igdqukcj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163llxrhpsd.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ldvnvwur.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163oifywyeu.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163iqanxjvp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163uhbvxpec.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163yssczwaj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163uhhensei.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163vwidsuae.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163twxtkika.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163hblvsfmo.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163aqgeadot.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163mgaqlpxh.html

list(zip(*m))
来源：http://www.aibaodan.cn/163pxwmcyjk.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163swhnsnnx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163mxqqybzf.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163otjwmihz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163csmiqqgk.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163mbdrmqnn.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163sgtnnaaw.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163lpedmhqv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ejnozbav.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ejssivdw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163kddwqbvv.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163kgxatads.html

UserId = int
来源：http://www.aibaodan.cn/163okdsvrrp.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163xehjqfbd.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163gszjevkw.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163nqhfjjfd.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163zwereynq.html

[U31] Py：单测
来源：http://www.sxryk.cn/163fybqwqyg.html

python -m pytest -q
来源：http://www.xuanzx.com/163imliakyk.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163qyxwwgof.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ankyujlx.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rnzwnhsz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163cwaouhaq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163yycsvarh.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163vwijwmhl.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163pylwjcsb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163avmakgpv.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163admoogfd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163slfzovcp.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163dtgwgjrb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163kpalmktk.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163zsmwerax.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163jlltwmbf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163cfxdidtn.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163rojcunlm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ykfzlabw.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163znekkwbt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ywxblrso.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163pgxbbvec.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163quuconnx.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163dxczxjwm.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163aovxlqxb.html

namespace App\Http;
来源：http://www.aibaodan.cn/163egmaykzd.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ioczblnb.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163yscsbgfq.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163jpdyvtrd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ajofrilj.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163vfxdjihd.html

?string $name = null
来源：http://www.aibaodan.cn/163aqoyshly.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163uxmfpwve.html

int|string $id
来源：http://www.xuanzx.com/163uuvywzuz.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ygccruyg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163brwdpxwl.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163mvyujdos.html

public readonly string $name
来源：http://www.aibaodan.cn/163uvijcewy.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163vyaqpmtu.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163kkzplxur.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163bresvgjl.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163bblpoalj.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ehfwnidf.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163lxsbvotl.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163vcioxlkz.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163eokamgbl.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163vcehafwv.html

$obj?->method()
来源：http://www.aibaodan.cn/163aljwwufy.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163olmwzlao.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163lcvlafpw.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163uqxzkmgk.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lurytiqm.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163pbhzbvze.html

"值: {$a}"
来源：http://www.aibaodan.cn/163hfmwoyyi.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163weuqalkl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163mchhqxeb.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163rmcioiyx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hddbuwao.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163oqptshpr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163vkugedwb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163pwtfhrsc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gxbksgtd.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163txdwdajm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163jdkyvqwy.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163iylrjpop.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163uefpuwto.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ucqseebc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163dfjybywj.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163wbqzrbyt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163qvlokalx.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qgondlne.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163nuonnasg.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pasoxtgw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163frtmswdh.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163teczufng.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163clkmpyik.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163xuverpif.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ukstyisj.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163cgqlawyr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163eutpjcxa.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163aitdbemn.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ibkuxfbv.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163rmkquvni.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163mznjxnmu.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163rvnvivuo.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163kckfdwri.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163zmioajhh.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163vttxfesp.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163ecwilxfd.html

composer require psr/container
来源：http://www.aibaodan.cn/163jjhjhxzz.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163jaaxjebj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ljqmdyyr.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ngwyvbne.html

composer require twig/twig
来源：http://www.aibaodan.cn/163islgrtlk.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163cndvhjuf.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163garjbiif.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163grtjyhzx.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163uglrvvcw.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163sczupzkg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163mkhwxzbm.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163aezxqzwq.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163rwjtczbx.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163mpwiymto.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163hipuxqin.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163hhwlljuz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163zaprnkjn.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163bfgqzqdr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163afncfpdy.html


<!-- 参考信息 -->