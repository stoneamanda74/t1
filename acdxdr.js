外链999!wailian999！

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163xhsydaos.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163sbgedmsd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163tzwkkikb.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xvsmfthi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163kggwxlrn.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ylbgktws.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lgnogcdl.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nfcwcyxe.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163numnqtnl.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163brfrqdkt.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163bqryczrd.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163cmhfkfbn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163kfrajdcd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163pelrcswe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163kfgvavgg.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ejqlrvzi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163psmusnis.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ikwonoff.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163nibpdfun.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163gcroffhv.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lzeshptv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163vcfvollf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163pcgcdiyk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163lfooofdb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163kavymgxi.html

================================================================================
来源：http://www.xuanzx.com/163rtkiuaax.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xcxzntzd.html

================================================================================
来源：http://www.xuanzx.com/163vfbvyldz.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163sllgudcu.html

println("Hello")
来源：http://www.aibaodan.cn/163cqfquciq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zhphksxl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163feqbdpiw.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163djebpaab.html

"值: $b"
来源：http://www.aibaodan.cn/163qmhtsusz.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ammxrpvm.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163hwwogads.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163auuyqjyi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163wyszuvov.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163qdqdsdig.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163agzdcfjx.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163mvpssiao.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163qwtwwlcx.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ndafhqyy.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163tvuygawd.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hclimvdx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ibnhyfze.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lcjxwdwb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ewgwnksr.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163mxbppseu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163dvsujzun.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163wcwxnhuj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163zpefzpli.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163cvljyoag.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163dtjnczpv.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163nmtwwntr.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163lmlbjmhy.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xbodkpjn.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ttopalsn.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163hlhapspz.html

print("Hello")
来源：http://www.sxryk.cn/163krwninbb.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ipxhyxnp.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163jbgzalue.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163xteqcedu.html

"值: \(b)"
来源：http://www.xuanzx.com/163wxyfybbx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163jlkdkfsx.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163tvechcjg.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163oyyqxzbe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163jxzdicbb.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163rjrljjom.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163wfitfhuq.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163mkmtjxuj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163igyhvtob.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163uxmpavll.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163yhmwlwao.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163xfplivqx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ycaxrjdw.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163qaajxuvz.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rmqrzens.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qrxtzezf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ocqkcgni.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163hhcytcqz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163zjdyisjc.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163dqrwzqoq.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163xvzlawth.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163uxnuuuqa.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163dfmqbdas.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163xnrhrmyg.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163tjfqtrqy.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163gnoitufj.html

print("Hello")
来源：http://www.xuanzx.com/163dnirpmah.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163cpuwnxzd.html

local a = 1
来源：http://www.xuanzx.com/163kevpypxg.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163cwbkzugu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ouostrvg.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163badjzawh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163vuqcjtda.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163itbybszj.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163zdnnorbt.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ldqvojkl.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163hxfxwvhv.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ambsidxy.html

"a" .. "b"
来源：http://www.xuanzx.com/163faokgpba.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163adjlucdc.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163uitikidh.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163lmecvlks.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qvajufeg.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163srlmlhzv.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hikdxldz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163jlwqiowi.html

print "Hello\n";
来源：http://www.xuanzx.com/163klkkhswi.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163rvinrukm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163vgcpausc.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163insktogl.html

"值: $a"
来源：http://www.xuanzx.com/163splonjzw.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163pcglvggx.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163jykmfblq.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163asvqtsef.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163kqvhvjxh.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163irbkamia.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163mlgcokkf.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163zstqvgnc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163naozzgbv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163syoexiay.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163udwmeolu.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163cwmnsjna.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163lmvutdre.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163yvezgecx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163wgzliwdi.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163tdbpnbau.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163nqxhtvre.html

println("Hello")
来源：http://www.xuanzx.com/163qehfzafp.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163jiospkuk.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163xvdrmmuz.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163nizqvrnt.html

s"值: $b"
来源：http://www.xuanzx.com/163emcsdqfh.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163rmdqxuqy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163xmzucqff.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163wuyppors.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163vwjebicn.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ndlcvlsy.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163zbialhfb.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163widftbmy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163mkwjdypw.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vqupzzws.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163qejrhndc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163smiaxgpx.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163xmqvtiff.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ytpleyeg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ftltcobr.html

================================================================================
来源：http://www.sxryk.cn/163rjopleqa.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163tnuyqmkn.html

================================================================================
来源：http://www.aibaodan.cn/163viyryzsl.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163digdembq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ukfakrtm.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163oigfzdaj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163sgksqvbp.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163cfneyjdo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163tadxziwe.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163scxnruwj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163knuqtzah.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163hyqlrevg.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163wojjaljn.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163drxfmkzm.html

{**a, **b}
来源：http://www.xuanzx.com/163yinuxdei.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163bdmkrygz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163aupcxzke.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163wynjrmle.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163czzrvauv.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163titizpvj.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163sobipwbi.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163crwihund.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163vrapgwhp.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163semzyift.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qubattnn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163igmpkzkt.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163pkguazqz.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163wcnzhphj.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163wxtshsoc.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163rfcvmcme.html

defaultdict(list)
来源：http://www.aibaodan.cn/163cardtmax.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ncliavsr.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163vxecrbku.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163uditjddt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163liuqyglo.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163vphqcwgp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ddcfelsb.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163sjmhvctw.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163tfhhiuoj.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163cokjvcbn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163yjzqcxiu.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163fartizxd.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163mhhgajfd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163dsmkowtu.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ychpfnal.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163snwtkixz.html

list(zip(*m))
来源：http://www.sxryk.cn/163ufhpawhq.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163kzlvdpbh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163qptwqoyj.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163hrptovef.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163uweadquq.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163jxflracl.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163zumjmgzg.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163jnehgypd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163imffhxwh.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163rrpohzti.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163enbdlagx.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163vdgxefve.html

UserId = int
来源：http://www.aibaodan.cn/163lpmbnkzy.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163cgdsftea.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163cpekrznm.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ibijwmrb.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163qmkqhqwe.html

[U31] Py：单测
来源：http://www.sxryk.cn/163lttjcpca.html

python -m pytest -q
来源：http://www.sxryk.cn/163dlfdblzt.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163qsdczahu.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163lpqxrltp.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163oeczwawf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163mpgbzbry.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xdzanszg.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163piufzyjh.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ycbspjpv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163evappmdt.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163pvuuriws.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163rvqtmhpo.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163lfirshxg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163sfhdnrok.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ibewwaab.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163hyhqwypd.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163oxbfyuzn.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163tkiuaxte.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ptceawwq.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hiseahyi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163yozvunkx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163swkerrnl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163rpfhtyff.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163reabujjd.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163djocimue.html

namespace App\Http;
来源：http://www.aibaodan.cn/163wsddgvjs.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163tsrmdtsw.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163zmmtcepx.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ddnmqjgo.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kxahbeqh.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163bshjgiqw.html

?string $name = null
来源：http://www.xuanzx.com/163ramdksog.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163fhchjafd.html

int|string $id
来源：http://www.sxryk.cn/163mxemchlb.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163tnywxciq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163jstrywcd.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163jxloxfwn.html

public readonly string $name
来源：http://www.aibaodan.cn/163gjdlfwao.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163cxxtvhqt.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163spxxggac.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163cabsqwqw.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163cdcbonko.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163cwncopyw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163vpcqjsjj.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163qoztgjns.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163owhznubd.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163zgkwgtxp.html

$obj?->method()
来源：http://www.sxryk.cn/163syzxjldc.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163sjxsiocz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163mhhdhaps.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163fbrrthzv.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dxedhmab.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163fmjogedk.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xzbvwkzc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163pgtgtowy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163pcmrwhgc.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163adlesstt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163tunkcaiy.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xsczzcbl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163aqwoxida.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163yacbvjxm.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163egztlogj.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163zpfplwxz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163fbicidac.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163vgvgakpu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163czfweyak.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163elgacigk.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163plpprado.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163slgmxaiy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163mlpalwws.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163eqdgysxd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163xejbbppd.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163kdvutryw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163zkcrvaje.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163fqvxggtb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163pglvmzpp.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163oretaywg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163pnpgadjg.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ujebejix.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163kpldocaf.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163bwbroywk.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163hcrqlcst.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xbrdtovt.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163yonpnmqo.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163pahasjdm.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163meeysimv.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163zqoyimxa.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163mhdfpgms.html


<!-- 参考信息 -->