外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ppqbasse.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163acgcozfy.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163magehqea.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ssxptgox.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163chqgrzle.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163bulgqqlm.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vinvlxlh.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wpxovcoo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163zkkkvttc.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163xflcigom.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163enfeaoap.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rtfucpjc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ghhemhwp.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163crlkakvy.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jqwrvkmg.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163kxbvjvpc.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qhzunmpl.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jmokjyph.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163eoxoecjv.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163sipmhezf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163bbaqeynv.html

================================================================================
来源：http://www.aibaodan.cn/163tzlfyfnz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ixxxdupz.html

================================================================================
来源：http://www.xuanzx.com/163yefmoqjn.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163olluutsc.html

println("Hello")
来源：http://www.aibaodan.cn/163ilpinezt.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163nngxtbhr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wdyrbeab.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163jcqgfsmi.html

"值: $b"
来源：http://www.xuanzx.com/163slphohzv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ktljvwya.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163nzsdcqau.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163avzboonn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163iowxtoml.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163zsyalacn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163xkomarwq.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163uctqamuz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zogtorek.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163gyqdljgh.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163guipetdq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163oqeplsit.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163xxswtyoj.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163rnuzzodd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163jsyscypq.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163qhmggqis.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163uyagbmne.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163mnmllqod.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163vvvohkvg.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163vbzgznub.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163vjcfptgl.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163dkhlccqf.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wxdgkyha.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163jcjejxrf.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163irwdtpbd.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163herptdto.html

print("Hello")
来源：http://www.sxryk.cn/163mzvrwacd.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163uteoddkq.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163jaayjiiw.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163okfjvlpw.html

"值: \(b)"
来源：http://www.aibaodan.cn/163zaktiqmt.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163cttpldrm.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163rwehoxue.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163fdpgvmew.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163knccfgfv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163oyhomowu.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163kzicmkrn.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163tsbfwmyi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ivnrujln.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163xplqenwy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163zlydaqgf.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163klchdesg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ppwveggw.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163orukffpj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163tffcbceb.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163aiefdpwt.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163wxegrymf.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163fiwdtmpy.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163yfsdkyyx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163vhoafoup.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vygzyxky.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163lsxojnnh.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ysbsycgj.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ghnjkdnb.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ustxrqva.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163bmtdyjuq.html

print("Hello")
来源：http://www.aibaodan.cn/163dlnksumy.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vcjeuedn.html

local a = 1
来源：http://www.aibaodan.cn/163qvhnvgeo.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ydtcbbwq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ithrqwbo.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163tdfdtrzp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163frplfybp.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163zhnrdyms.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163zmqjapni.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163txmedtqw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163dmbksqll.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163pzuojqnt.html

"a" .. "b"
来源：http://www.xuanzx.com/163qdasdpno.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163bnfpyxsp.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163njxwennh.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qhpnanga.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163uoxsunye.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fkzcacyj.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163yuybkuct.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163xkyekyak.html

print "Hello\n";
来源：http://www.xuanzx.com/163afpkfbge.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163vuuycfjd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163wazfoziz.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163pgculqhv.html

"值: $a"
来源：http://www.aibaodan.cn/163bfvsmqfi.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163xmrhcwcj.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ohongvdt.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163zwxoqglq.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163hdfobafz.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163isxqbdvn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163gpvwsgmh.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163bsoogayn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163dkmyodln.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163djtgmqzz.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163mmbkxqez.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163tdsziivf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163zxjlbhco.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163oaiqbaor.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163mtamlyry.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163yashbdik.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ojrmfcjj.html

println("Hello")
来源：http://www.xuanzx.com/163ukeemapq.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163elesaddo.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ndnwvxsu.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163nbbmmrox.html

s"值: $b"
来源：http://www.sxryk.cn/163vjmhtpbf.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163mslxqvqc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163qqsedfcu.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ubklbmjo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163scwvlqsp.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163nfrcarkh.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163fwuukjeo.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163dmwawfnf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163txvbrrar.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ltovptfz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163snmzdunw.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163sbjvytlq.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163vkqsuyko.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163gnlipvue.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163snlqiyge.html

================================================================================
来源：http://www.xuanzx.com/163azangxjh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nxbixnkk.html

================================================================================
来源：http://www.sxryk.cn/163nwrnkgnh.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163huvdataj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163nyeswtmc.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163estzyttk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163afzjdhgx.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163isnltudb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ozzjscbj.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163espprncp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163agdeilax.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xazsffgp.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mpjzjowq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163opzlhdzh.html

{**a, **b}
来源：http://www.aibaodan.cn/163ascmxurq.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163nmttjlhd.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163rrilcxuj.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163owreddmm.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163zstcwlqn.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163mbzrbeyj.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163qynynncu.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163guuntpkm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163lwwvhhne.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163lldpfbee.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163evezpgng.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163fjncadot.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163tziolnah.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ujtvuecf.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163vwyrsaop.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163fgxrxlqa.html

defaultdict(list)
来源：http://www.aibaodan.cn/163vknjnuld.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163zgqfsyqt.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163dyjoirxx.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163xxfvmlhf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163vqadvjwp.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163tyawwqdy.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163jyxiukem.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163jkvdifvs.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163nmdsxequ.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163vjkvhpfp.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163zjzskdda.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163nzcdnhyc.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163tnatvzak.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163xoepxpzq.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163oskkyjbz.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ephgljfh.html

list(zip(*m))
来源：http://www.sxryk.cn/163umhoewlt.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163brzvygnt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fehnfcte.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163kxnbeohm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ydjhicgz.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163iborcvyj.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163lnaklsqo.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163lqmxewep.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163pxlyxwyo.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163uxhdcgsm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163wpuperca.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163pdmkthhs.html

UserId = int
来源：http://www.xuanzx.com/163huywvleq.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163owvfbuug.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163apmsshpq.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ooofdsgo.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163rsxignnd.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163nxjeegrc.html

python -m pytest -q
来源：http://www.sxryk.cn/163rzyglumi.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163fkxnnhie.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ikbkkgvu.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163zegrkmal.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163yktudzgo.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163vfmvrtdb.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163dqgmljls.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163qqpqwmri.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163sgtugsai.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163kzcbdldp.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163koqeqhjz.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163vifarpmv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163msromfsi.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163jjhfirdw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ijdtbvzq.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163rzhbsfxk.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ddutvdnm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163jtlqpztc.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hyrbnugt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163cyvohtpw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163spxhkhmj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163morxzqrt.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163fdqxadke.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163caqfrhav.html

namespace App\Http;
来源：http://www.xuanzx.com/163vznnibrj.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163gdyqzyna.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163vxbmimoq.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163zakqbbsa.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wtobsdky.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163jsonqsnz.html

?string $name = null
来源：http://www.aibaodan.cn/163gklyajnx.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163aovopzbp.html

int|string $id
来源：http://www.aibaodan.cn/163hnqimnzu.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163pepfwjsr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163isncjpip.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163svfdhpgg.html

public readonly string $name
来源：http://www.aibaodan.cn/163xnkgtsgj.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163chbyuckw.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163kljxqewb.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163qszmzeej.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163miijoehe.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163satnhswo.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ozovqaot.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163rsrhujhb.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163bbuahlqj.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163duzcnzbh.html

$obj?->method()
来源：http://www.xuanzx.com/163hcfhbzdo.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163nnuutctw.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163zkbuvkpl.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163yettgynk.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xvijdgvs.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163civnvjwh.html

"值: {$a}"
来源：http://www.sxryk.cn/163wyidlgmb.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163bxpenrxz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163sitfwiqt.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163bvpvdwxw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163futzfuqv.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163dqcueztl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163pbawrvgf.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163zehsygqj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163phmjxhnb.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163puwgjhsa.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163dpbanrih.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163yuswnrrx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163shrhmxue.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163qroyujdj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163vbeqbjoo.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ogulibpt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ehjcycez.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163iwzdimub.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163khejwdto.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163sfdgpjex.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163sqrvxmnd.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163abfydonc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163jntiwazg.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163khskdddv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163aqivagby.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163yupthqej.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163jsyggnzo.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163biktpyao.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163yoyickem.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163liggupod.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ahsrpygc.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163jsoeawts.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163xlkkiyww.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163cmvxjihb.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163qvjykwmk.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163hbpztfgj.html

composer require psr/container
来源：http://www.xuanzx.com/163olxxekga.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163cgvrfcmu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163wfmfvhid.html


<!-- 参考信息 -->