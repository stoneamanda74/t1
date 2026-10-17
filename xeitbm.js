外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163oljatqxa.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163rcercfvq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163vzgqslbo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xqzaenom.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163pcakwczp.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163uklruqas.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163btichnnk.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ejscwspt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163wjspgoym.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tfeiejzu.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nqjshfya.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163eflfssam.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163hyglxexv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163klaamcre.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163okjqisoh.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163kesextgp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qtdgxksu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ccdfcxpf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163vvimsjyn.html

[S56] C++：optional
来源：http://www.sxryk.cn/163vwecfnyk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163bbzylsee.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163aykmjhvp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ejyvzsov.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163dywhonuv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163gehwqrnc.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163aqwtufms.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163klyanicr.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163qtlcflzu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163hnucflsa.html

================================================================================
来源：http://www.aibaodan.cn/163btkdouzm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163irfqgrph.html

================================================================================
来源：http://www.sxryk.cn/163smuocfbe.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163fedclfry.html

println("Hello")
来源：http://www.xuanzx.com/163evlpnenn.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163rxjdxrxp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ytscddxt.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163nvsqajhy.html

"值: $b"
来源：http://www.xuanzx.com/163hwbtgste.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jxipyscz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vxaebyrz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163zemhrxlz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lsnweznw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163hwtyvjxf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163novvgeue.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163kgdccrpk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jruopipj.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163vncqdrpi.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cmxsfncg.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163jvtiavgu.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163mdlpifaj.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163mllgltzm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163xwblemnq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163uimnybed.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hhpymbwt.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qsxbvsmm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163eijyglqd.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163cqogxpqx.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163oxwuxdnd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lyapikbi.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wjlieger.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163nshvertl.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163lfczvigy.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163eghbgcoq.html

print("Hello")
来源：http://www.aibaodan.cn/163vlfxofwf.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163dauboxwz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163yvjaxvhh.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163wikstmtr.html

"值: \(b)"
来源：http://www.aibaodan.cn/163mxlamopx.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163kcxvttob.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163blaxvxmm.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163nznmhwoe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163jlpuzxys.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rsapwsob.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163evdtoxtc.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163kfedddhh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ppafsmup.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163nqwibgky.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xzzlppmp.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163zcmupnvt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163mdrjbnyw.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163aupspxvj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lukcciai.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163kbemsjvy.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163axtuvork.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163hqbsvnrh.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163lzivpglo.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163wufuhard.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163zyycotey.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ythdsmwd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163xjuzwzgr.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163wknayzso.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163zjfgarql.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163yuspesmv.html

print("Hello")
来源：http://www.sxryk.cn/163crvwszjb.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163biuwgogs.html

local a = 1
来源：http://www.aibaodan.cn/163khwmmegn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wgsppjne.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ovkcpnvh.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163wlpraxox.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163kzuuslsd.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163hyznjvxo.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ppqpohpa.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163bbebszad.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163mmxfjuuv.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ixqhqowe.html

"a" .. "b"
来源：http://www.xuanzx.com/163jszphhby.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163urrxljuk.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163tzmpkaxi.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qpprclpc.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163qcclesuo.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hrgzuenr.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163rkzqiirg.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163esdxzygq.html

print "Hello\n";
来源：http://www.sxryk.cn/163aggcbhcc.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163odvuqvxg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ndzcmzlv.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163cmmgpmth.html

"值: $a"
来源：http://www.aibaodan.cn/163hwthlkpv.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163vezwizlt.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163nqrounck.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163yswxhlmz.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163wifozvgy.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163qfdqyneu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163flfgsuee.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kvsikalt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163udizmrfz.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163lwcxaqds.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163argevmwm.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163tjfememl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163kwnrtyiz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163whgjbbmc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163trnrubaa.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163jmbzbegt.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163irkiiwsr.html

println("Hello")
来源：http://www.aibaodan.cn/163yncwglka.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163lbxxaalr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ojbncvwx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163oywnpcdi.html

s"值: $b"
来源：http://www.xuanzx.com/163zxuvngcs.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163vjhjglfp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163bjgmjfet.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163kyskhgrh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ruqbuuwi.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tjyufjbg.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163xhqdycrs.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163vqzvhcpe.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163qtjtvbkv.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163dbrbhcse.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163sglnkkof.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163slgnffla.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163qdqddpoa.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163lhsnnfmt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163uhbqsjcs.html

================================================================================
来源：http://www.sxryk.cn/163sphvaejs.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163oojmmvmq.html

================================================================================
来源：http://www.xuanzx.com/163dhhtabre.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163lmyretov.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163aijbqrfn.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163teysahuq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163jmxalkyg.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163obgyiusu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163eoibpobc.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163tgwhrclj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163vzhfvuzl.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163cmpvacav.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163noxipwat.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cqwwrdee.html

{**a, **b}
来源：http://www.xuanzx.com/163podcqord.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ybqhffdr.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163tmmkiqvd.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163nhvpdcra.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163zvurzkgq.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163opgpovya.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163akcfwylp.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163gzyymrzd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kisyoddj.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163hysvbvym.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163qjaszjmt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163jlyenbmc.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163xxgxuieb.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163vyllpuzl.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163usoknbpe.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zvdgpwxh.html

defaultdict(list)
来源：http://www.sxryk.cn/163rsppchya.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163dpkcmrtz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163edlijyhd.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163guagpglz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ynjcmrgb.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163neixnwnc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163bwdxmrhh.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163tnastnky.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163bkifuzom.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163libexgrd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163zdkfxszp.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163wgkezhbp.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163msihnegs.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hofibbug.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163kxbcbtij.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163uraqlcod.html

list(zip(*m))
来源：http://www.xuanzx.com/163crouhgao.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163xxtblbfq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163stcxkjmy.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163desufkdn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163fhjltldw.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ncyarefy.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163oqgtkhcw.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163etqhstrk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163afjknldl.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163tvsmuvsa.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ashlysck.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163wgqlvzeb.html

UserId = int
来源：http://www.sxryk.cn/163sovpjwme.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163egapzhdz.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163njgcfhuj.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163bbofayra.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163mrgingyh.html

[U31] Py：单测
来源：http://www.xuanzx.com/163fdhvhthe.html

python -m pytest -q
来源：http://www.aibaodan.cn/163uenqyrvd.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163dzospvjv.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163irwrxwww.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163obgnquwb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163woskheyz.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163dcgpdnnw.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163cjetmpnw.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163fogrnmvw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163voizeteo.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163lfhthwnw.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ousslzev.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ffqwltce.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163plwqmvcb.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163yflpfhif.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163dsvqiiab.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163rjymodra.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163urecglwn.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163edawimbb.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ekchxnmd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163uejvgppi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163dobuzjty.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163bkchckyy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163oyizabbn.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163nsryhpjk.html

namespace App\Http;
来源：http://www.xuanzx.com/163biowhquv.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163swkpeawf.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163hlrgtuoc.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163qhgvbuyl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163reawnmln.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163djjtqnne.html

?string $name = null
来源：http://www.xuanzx.com/163quhfjism.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163jfhajfea.html

int|string $id
来源：http://www.aibaodan.cn/163bynebivu.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163qooqgiyw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163rbggsdbj.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163qhfixiqv.html

public readonly string $name
来源：http://www.xuanzx.com/163bnniflvf.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163cwxjbxvk.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163kvkvncmq.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163qporcnnf.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163dlmhmfub.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163esrbivsi.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163bverhaki.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ytrgibob.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tvzemehy.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163vtcgiqiw.html

$obj?->method()
来源：http://www.xuanzx.com/163jbzntugy.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163txdsiqnh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163iktojpmt.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163zejwzgvm.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tnmqfhxp.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163zwmdbjsl.html

"值: {$a}"
来源：http://www.sxryk.cn/163qfexekdo.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163tocwockm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163opjyndpc.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163ipeohwnq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cdzvfzra.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163fydkthnp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163qqymooet.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163kyrfosap.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jtbbtklt.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163sdytterh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163esngiith.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163jlrghule.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163umymiejw.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163naehlzcz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163whfvrgtg.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163abxmergx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163mxsnwdmn.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163eliykttu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163bnhtfcvo.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163gscdyoeh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gytzqevp.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163grofgzym.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163kufcfyuv.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163xauawxqc.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ajvblxfa.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163mgfxpsre.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ehbjfech.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163rcnwywaa.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ckxfndqy.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163cnzqvvrv.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163bjmmabff.html


<!-- 参考信息 -->