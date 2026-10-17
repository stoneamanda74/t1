外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163liusrzqn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zgltflcp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163cehpzhfk.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163gsqesryl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gfrsmues.html

================================================================================
来源：http://www.sxryk.cn/163yksixanm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163beomhuwo.html

================================================================================
来源：http://www.sxryk.cn/163ayhczswm.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163sutrcgre.html

println("Hello")
来源：http://www.sxryk.cn/163mcpukggf.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163pkhzttpe.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163etnmsdcl.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163oqyajgog.html

"值: $b"
来源：http://www.aibaodan.cn/163xjcnntpm.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ehxxgdxh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163zwtyneky.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163llpfrvwu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wuwwtrev.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163mgmbcuyg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rfkwswvt.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163bphwbobj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ywgevioh.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163bidqlsmf.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gxqxhjtx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163sizusooh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163iefbkylk.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ktrvpgqz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vjpquzyh.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jrlstyti.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163movkpgyr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163oowcyotv.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163tparuovx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163igjpvjsj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163cjwyqzul.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163tinnfifp.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163xnfwsslf.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163rxltcqrh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163vpwxkqwc.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ddlpthhk.html

print("Hello")
来源：http://www.xuanzx.com/163yuwfvdmy.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163kclsqzzy.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163lmlrthmv.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163zmycmgvd.html

"值: \(b)"
来源：http://www.sxryk.cn/163kshapcby.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163hgsbdmdp.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163dksaofyv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163astyvyru.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163rnixgktc.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163iygifdah.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163niiqhump.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163wwtozfjq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163gsjdualr.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ohvxztzu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163etolrtxp.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ptjrfvtn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ttggsbrl.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163okoxxifb.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163mhmzokpm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163pziyjizg.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163rltxgaeu.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163zaznpreq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163krwdhaip.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163utwuisqw.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ziitueeb.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163kuourfvz.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163lxnlmndo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163wekxsbfx.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163kzmflykb.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163erlcbscm.html

print("Hello")
来源：http://www.aibaodan.cn/163xpqqmfjs.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163zhzbhogq.html

local a = 1
来源：http://www.xuanzx.com/163mdgbwdsh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163esqezckt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163mmbtbjux.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163cprikjrb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ueasnhec.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163jaaoivul.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163cntzrahm.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163fzmkzmnl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gsossmyo.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163svbsmkbn.html

"a" .. "b"
来源：http://www.aibaodan.cn/163blsfgsdq.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163lsdyvweu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163zzvzbzvt.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163gbnjzuvm.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163lzvewuzv.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163fgguwfmn.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163tzzehrah.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163cemjlmcf.html

print "Hello\n";
来源：http://www.sxryk.cn/163fnophacl.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163qtrjvevq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bfmxxhcu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163nslxgajm.html

"值: $a"
来源：http://www.sxryk.cn/163bhirncaq.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ktualqmc.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ssdfhlep.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163irpmpxrw.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163wdfcqkea.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ngnzktvl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163obtesutd.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163yldzorxe.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163pkqvofgs.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ihusodqn.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ghsxjbds.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163tgxjddmq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163trbtaadb.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163socgohbn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163vpmmrvkw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163xinjrfqk.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ybzxfamw.html

println("Hello")
来源：http://www.sxryk.cn/163fsogcuma.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vlsnlnkp.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163oxqlxdvh.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163kwechuiy.html

s"值: $b"
来源：http://www.sxryk.cn/163ylaufylr.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ivmwdeyy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163snjddsep.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163zzbzffwa.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163peutidrn.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ouddqwcu.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163cbufvwoq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163eqxhtwjh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163zsaaconh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ecyqqfwb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163awxbvzkc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jwzgqddc.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163vizqqlby.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vlxhkidq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163gkrwxrch.html

================================================================================
来源：http://www.sxryk.cn/163rptddkvx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163isysfcur.html

================================================================================
来源：http://www.sxryk.cn/163rifvsctb.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163cdorqjre.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163txxvsfzw.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163yruolkan.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ijcvljsz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163tmtudzsi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163tuqdprtz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163mgvvppor.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163gcvuhdvj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163xheloxqm.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vpluzwxt.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zwyvrttw.html

{**a, **b}
来源：http://www.xuanzx.com/163amevtzgz.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163apubkmyj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163zcycptvz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163cytedvaa.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163uofkhfeq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163alcntwli.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163shypccxv.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163prewwshj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163xmlieuch.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163higaokty.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163moeuortj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163qymghysb.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163waldigdc.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163lonnefyu.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163qivpnedw.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163bkyhysmk.html

defaultdict(list)
来源：http://www.xuanzx.com/163tpdfferq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163pmfshrqq.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163pbbtgypg.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163bxbwzbzq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163luapwnnd.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163gllniupd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163khxirpel.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163wloqdzzq.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163krsmdwee.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163hstsosfn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163limydanx.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163zvoujzbi.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163rlwdcfhl.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163cnstgzmn.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163psoalcpu.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163gtumxkwe.html

list(zip(*m))
来源：http://www.xuanzx.com/163amfdgaot.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163kdepzjqt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163xapbtnfv.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163difnaymo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163xapdzigy.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163hrjprcjt.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163dqixcewj.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163omfcyaty.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163wrcjzwit.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163qynlbcch.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ihtjyhmf.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163dqqnavnp.html

UserId = int
来源：http://www.xuanzx.com/163ctkorgst.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163crtywweq.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163bhsjzjik.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zxztnkps.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163pdfnncfc.html

[U31] Py：单测
来源：http://www.xuanzx.com/163rlzrihfl.html

python -m pytest -q
来源：http://www.xuanzx.com/163adudghgk.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163gkpykfqa.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163sfuuotjd.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163qqbyrtmf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163xuszrfgu.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163bqcvhprp.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163vpovkcwu.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163heaxgmil.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163csoiuxbe.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163tegygqpu.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ciqkfccr.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mvjesaam.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163shsgendd.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163eqsthnux.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163oslpffml.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qysbnpdg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163vupztfoe.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163zdtoubqc.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163psbnoixr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163tvbkdfxd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lequuril.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163jxdcrmty.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163lehymnki.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163xlncswmi.html

namespace App\Http;
来源：http://www.sxryk.cn/163ryswvzex.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163muyuvpnj.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163juptrjls.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163qneuyezf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wfmysbms.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163kxemxaug.html

?string $name = null
来源：http://www.aibaodan.cn/163cvqocgeg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163geurfpcz.html

int|string $id
来源：http://www.sxryk.cn/163yptfspkh.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ozapqkwd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163faenmdun.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163bgnaebal.html

public readonly string $name
来源：http://www.aibaodan.cn/163nwzazwqt.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163vthaggpl.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163byxbsgwo.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163lpyuqbqd.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163etsnlscg.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163vlvjndsf.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163vfretfgc.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163drvgeesi.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163jyhumrks.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rzzkswiz.html

$obj?->method()
来源：http://www.aibaodan.cn/163ewkwmdgm.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163sdcghuhr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163iatqbzyo.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163wxhxzwxf.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163httwolii.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163mblevrrp.html

"值: {$a}"
来源：http://www.xuanzx.com/163mlzjgare.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163getbwgbw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163qvtjeujf.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163ilupvkqc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tvnrgrkg.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163bmlhrncu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163kgeklblc.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163exhschvo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lnukwvua.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163cnbfmedt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163zvjiopqj.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ccvyacqo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163zquxrnai.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163eqmimfkn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163tetldvvq.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163dzfanmxj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163kdmklqyf.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163xltyhtfb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163txpltlgl.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163xuauavkg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163brycioql.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163etyooiel.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163qfxpozkx.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ffrmkigy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163jmamzviq.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163hhomrgkc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163qcmaledg.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163zotipzwt.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163oojqjimv.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163nsvbpmpb.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163uyqjeznb.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163wyxsvsre.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163gkgupodt.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163alvcunme.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163yusevvor.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163woskwdkl.html

composer require psr/container
来源：http://www.sxryk.cn/163dicgzqfa.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163zlswietw.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163acfjeamz.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163aokhxhye.html

composer require twig/twig
来源：http://www.xuanzx.com/163xdeqordo.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163gyhgxyzi.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163upetttyh.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163wqxrutmj.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163rfmcjgmr.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163romtczcq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ypjqxypi.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163dbvbnnwu.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163xfnaipxs.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163uepuhpmu.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163lsivwgcf.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163vsbqpbii.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163pnwqcpon.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163tkijjwle.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163mzoxspkm.html


<!-- 参考信息 -->