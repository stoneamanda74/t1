外链999!wailian999！

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163htefegfz.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163nmefjfqv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jwuiixbc.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gmmyxbvg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163tseitbmd.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163fmaugxuc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163heyrwbph.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163fzdoximv.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163wcpqfimb.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163byocdlbq.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163bxwlmvka.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163bqcdgxtz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163pkdzkckq.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163xcvlgwyi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ivhviyyw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tibbcsjt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ntwpeiag.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163nqqzedet.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163thrbbkaf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pgylfbiu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163csxyyoef.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163dalowarx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163tmqkpwth.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163juthvsgf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163juusmqvz.html

================================================================================
来源：http://www.xuanzx.com/163fpyfmjsq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163okixycak.html

================================================================================
来源：http://www.aibaodan.cn/163lvmxltsf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163osflhyrv.html

println("Hello")
来源：http://www.xuanzx.com/163fzdtlbgh.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163thrlawll.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163stfznlvq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ryrxrdkp.html

"值: $b"
来源：http://www.sxryk.cn/163gtxwrlaa.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mmtotsgf.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163fglsxoeb.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163gubewyfq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163juvzicnf.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jkwfpfrh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163eqywyjce.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163aayypraw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163kaoazlev.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ojsoakfa.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163cyhyygsc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163wuojwiix.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ominfrtj.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163nssnbqpc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163zxovngou.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163tfjltova.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163imdghhkv.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163bqtbhcmi.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zjnfjohm.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163xkuxbnbi.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163svrwlijd.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163hjvzqedr.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163juptsiof.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ljhzmttz.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163yxcgpswn.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163rqijocar.html

print("Hello")
来源：http://www.sxryk.cn/163dytntcqv.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163itquyqfk.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nionkzuf.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vjjsgnyb.html

"值: \(b)"
来源：http://www.sxryk.cn/163uwqzfyom.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163bapgoqro.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ltddsflp.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163jwmtuwsn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163maijyazi.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ajkngust.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163dsenetsp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163xubocfgo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163chdrxemn.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xlaeykhi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163kjgymuar.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163tijzwwqf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163zpkrqafl.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xpbglvtb.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163zwthyauf.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ycccwxij.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163zmgdtgjs.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ymlsteqh.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163zmhbhnhn.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163myglnbty.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ewhfxans.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163kybcupkc.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163yflnsyog.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163mmxeiciz.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163nivwafds.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dzppjxmj.html

print("Hello")
来源：http://www.aibaodan.cn/163wdopyanq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163udwfxcwf.html

local a = 1
来源：http://www.aibaodan.cn/163xrexnagr.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163xemfkyxx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163haaedufp.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163onydlvfa.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163xmpreptj.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163wjwnznxj.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163nphktntc.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163hwrpveje.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163rndppggi.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163osifzgqy.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ysklyqlj.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163slhsvrzr.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163rwrzsdgr.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163nqdkszur.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163haoeulkc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163hjnawerv.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163kqesdnkz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163pnvwwbls.html

print "Hello\n";
来源：http://www.aibaodan.cn/163xwidyhnk.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163jfehgfcd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bopdyngu.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163siokxlsb.html

"值: $a"
来源：http://www.xuanzx.com/163dsbrgzfm.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kdfvotqs.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163bymqlyqz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163drmkybpq.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163mypxflgy.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163mplpqvrf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163vxefubzp.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163zamvnygz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rogqvzhx.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163dgyjrkqh.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163gzwdyien.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163bhejrfge.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163dnnaollm.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163mclrhqcc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163relaitmt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163tjhzddsv.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163plgftusz.html

println("Hello")
来源：http://www.sxryk.cn/163vxfeaefp.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163dpmkfkkv.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163rlgdquud.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zwiuwfbb.html

s"值: $b"
来源：http://www.sxryk.cn/163xfewbwje.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163yptmpgag.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163gdnxkhel.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163wivcsctd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163dhykiyff.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163bdqntrrs.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163thsxpcss.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163gzgcpzjd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163unwglwnz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163vxknxodk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163mnzhomvb.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vgjhiqtd.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163caxqcruk.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ulbzzswt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163bklmgcwk.html

================================================================================
来源：http://www.xuanzx.com/163aaahxjyp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163loqmzhem.html

================================================================================
来源：http://www.xuanzx.com/163qccedsev.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163afqtinpd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163bzgpkitq.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163fhmdivwp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163esjtxxav.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163fqibqjvq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163zcknvchn.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zrbrkyiq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163pfywgvga.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163fvonjkch.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163tgppgiiv.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163khyxmvjt.html

{**a, **b}
来源：http://www.xuanzx.com/163ieyjeyfj.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163qnlktbbl.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163xwjjtkmz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163lpeymyyj.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ocpgxuor.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163pjlsfiqd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zdrazxud.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ojahkkay.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jkhovicz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163rmshyzbo.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163kpwlmimn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163hnrpwjhd.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163fhhserbi.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163cfapnagc.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163kvhzwtby.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163fatzecsp.html

defaultdict(list)
来源：http://www.xuanzx.com/163fdsljznu.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163bucjbowj.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163kvlijvjw.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163llcqzpax.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163vseilzvv.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163qfwrlqlb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163hzffeuit.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163sjezbhjr.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163onpgzwsx.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163bccuhdjo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ezhstksx.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163hympttcj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163hiwgafzm.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163qaesepue.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163vzvvvfrq.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163kjxhoqkb.html

list(zip(*m))
来源：http://www.sxryk.cn/163cotunfku.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163fsryvulj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qlrdjeja.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163hqvfzjhg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163cwwhfron.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163bywgjkzc.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163tlnyhqdh.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163eecwuvyj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163qwoommpq.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163koidoelu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163wwejobfd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163uvbrqeaw.html

UserId = int
来源：http://www.xuanzx.com/163eifwkojn.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163nkkiygou.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163rikkhuvz.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163mmhdwmko.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163spfoczdy.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163vnavbsiq.html

python -m pytest -q
来源：http://www.xuanzx.com/163lhzgofsd.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163xzvdaxrm.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163zdomthsx.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163syhyrnyh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163detymxvk.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ccarjmbo.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163mgexfnoj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ovqkuzzf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163vtmwcxic.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163hghqavwg.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ldpluazr.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163uedfijht.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163yrfyizrv.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163wgpeqavm.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163sqswbayb.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163aarnctcp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163utujfirl.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xndbsyft.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wmxwmvfa.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163vmwpvoth.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163bhokcpki.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163yuaipsey.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163peyigxni.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163jjevrvwy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zgzbwevz.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163nihnwonl.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163fllsiffe.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163tsfwdgal.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tujnlnzx.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ojafwdzj.html

?string $name = null
来源：http://www.xuanzx.com/163rkvhydow.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163prpnytua.html

int|string $id
来源：http://www.aibaodan.cn/163ytzspgqv.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163ckdtkknf.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163tcoczfdp.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163migdnzwp.html

public readonly string $name
来源：http://www.xuanzx.com/163prwqzjqq.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163kjmweuyj.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163gkhjcilw.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163xoowaauq.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163pvgeqiyp.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163rmpympah.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163lqnsinli.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163uzhmlzhj.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163wddcsnfb.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163fyqkhslm.html

$obj?->method()
来源：http://www.xuanzx.com/163dfiryahm.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163oydalpgl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163uqvpgwqq.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ftdekwax.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163omqiupmg.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163khxxpndr.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ndqtpwez.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163xywtnooe.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163jaavnngz.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ksbixeeu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vbdffxst.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ccmrmzqi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163rzkonyya.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163cejrcvrt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fznmnvem.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ihcpdacg.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163tbvbfuve.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163mdhxhpmg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163fjunwiky.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163nmyfglxp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163bspflpof.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ozqqokic.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163xanejdbt.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163kyonnvei.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ucwbysqw.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163jbdrhrwr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163drudbzik.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163orgounph.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163dvvkpalt.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163mcewyjcg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163vopfswyk.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163qedzgcte.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163cbxrbepi.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163pudciqfi.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163jyanyogt.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163bntdndvm.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163rxlzmtac.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163rkcalvzn.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163jubfshya.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163nrezvnaq.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163pticerzs.html


<!-- 参考信息 -->