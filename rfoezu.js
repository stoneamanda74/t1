外链999!wailian999！

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163okbyziew.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163goxbnmgg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163vuwxyupt.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163evlqzplp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ifoolcnn.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rufygykz.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163lcujgahi.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ahtggphe.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ddrussrf.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163qswffcyx.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ilrxhcas.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163yqghaxfy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163aacobuag.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163lizpnole.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163wfkycvrf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163lyrxwozj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163tlsuhjay.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wlkpnbrr.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163kyjirsyj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gldcrysw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ifhlhchg.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163fqnbrqql.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163yzaebwtz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163nligmstu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xhafzeve.html

================================================================================
来源：http://www.xuanzx.com/163fmvhqzvp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163sqpomajl.html

================================================================================
来源：http://www.xuanzx.com/163zicpiuwy.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163bonnkhev.html

println("Hello")
来源：http://www.sxryk.cn/163mpnpampi.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163iujgeofb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163cnqsgndo.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163pkryjnye.html

"值: $b"
来源：http://www.xuanzx.com/163uzcymowx.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nlxxjytd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wsnkkwem.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163cqktduxh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163hljfifsw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163lwhlmsxp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163kgsokeyz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163fhfaldze.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163fniqzmvq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163mqehgdxx.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163hqnorpvh.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wtlhcpmm.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163nhvlagfu.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163lrgpoafb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163exgzknzi.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163sovfyamw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163lbdblpoz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163acfigcht.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163htauzpye.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163frgwcvbk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163nswjvwqg.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163fofltkoj.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163pdfrduqa.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hhwsgiip.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163bngwsvyh.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xojcqlbu.html

print("Hello")
来源：http://www.xuanzx.com/163gkknahrc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163hrebontv.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vbfeihoh.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163pcadfhnp.html

"值: \(b)"
来源：http://www.aibaodan.cn/163sbmegfcq.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163zcxztjwm.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163unjntlzp.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163zaswtvfp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163gfwbfobw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jwalmaih.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163pmqxdasf.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163aecrklci.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jeflcfzm.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163kgzfxpdn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163tspmejek.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163bjiiaugs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ytmjgsuv.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jwenqwnm.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163lsszltcy.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163mnoktoxp.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163vyhgkkyh.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163xgqoyplg.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163tztmfqds.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163xugkbvpr.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vvihngkb.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163qmpgytqp.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163henczspm.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163eqomocnp.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163cmcgqgba.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nwevmstq.html

print("Hello")
来源：http://www.xuanzx.com/163gpdfigsr.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163gsagpaob.html

local a = 1
来源：http://www.sxryk.cn/163imhwhaim.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ybqguwhh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163hnhccyii.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tvzjyrmr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163uvhmdnrt.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163iugeekat.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ihmujqyg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163qgodancm.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163olbestdf.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163smkkerow.html

"a" .. "b"
来源：http://www.aibaodan.cn/163pdjfmvto.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163hvtbznzt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ppzsykms.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163dndyzucr.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kpbviwnp.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163pbtgacpe.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gvqwkbfo.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163gkvqkqfj.html

print "Hello\n";
来源：http://www.sxryk.cn/163pnuyeoqz.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163saivwyni.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ypijwbag.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163tjzlbpzd.html

"值: $a"
来源：http://www.aibaodan.cn/163koscxyuk.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dxfzoxla.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163hcdtknln.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163thydppva.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163twbskdym.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ztigjnrz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163lwabgubm.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163idoicygj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163oyhxllnh.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163sxkmlfii.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163mwoclpkw.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163wxdowgqy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163aaeqonej.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163filwhavb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163mkognkdf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163guymyplz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163cywjrlxi.html

println("Hello")
来源：http://www.sxryk.cn/163nseibhac.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163mzgnxnxw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163xmkcncbt.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163tetagqct.html

s"值: $b"
来源：http://www.sxryk.cn/163mhqaimfy.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163wcuprtox.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163zrezqurr.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vmqundss.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163oybapfbs.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163zhipxhcy.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163zgjzqdfg.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163scvdmtqp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163iphfytor.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ajfekrau.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163qplckppe.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163olcyawej.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163eyjvmori.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163sxmbezog.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163zyxqcede.html

================================================================================
来源：http://www.aibaodan.cn/163pnhxgfhs.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163gytlfifb.html

================================================================================
来源：http://www.xuanzx.com/163fwtvxhlq.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163jgbmnqnz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163tkmscdfs.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163kuhdovgi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163oxvllowb.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163fjfttekc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163lnxrllww.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163numlovim.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163nawtfhwk.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163kzmctexz.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zphbdehw.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163xejpqhmg.html

{**a, **b}
来源：http://www.aibaodan.cn/163xzdauqcm.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ffnflepo.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163tcrhdded.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163onvxdnai.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163talofrpm.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163lcubynyo.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163yaphlqtb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ikjauxmw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163rgxagltw.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163cdfnpmlr.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wsnvbgjw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163dttogmzr.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163pxxfamee.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163qeyvwqei.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163gjxnkttv.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163cvpvcvsf.html

defaultdict(list)
来源：http://www.sxryk.cn/163xmvraylc.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163isvjxwhy.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163evaqmbis.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163xvlobjnq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163qkxrwdqe.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163gaivqwqb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fuppqfml.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163djuozqdd.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163kmcmojoy.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fenbmhcc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163skbhtxlp.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163vrvyysjj.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163auojagto.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163xxbdrtqj.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163mkbsjnyf.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163wjfanepo.html

list(zip(*m))
来源：http://www.aibaodan.cn/163jydmkkmk.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163kgoyazam.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163gzclngty.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mwltayds.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163zehfmvcc.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163mhmlpfyd.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ainimnwy.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163jkgaedlv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163rbmwmbkm.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163bgdqitmy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163etoubprk.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163cucoilay.html

UserId = int
来源：http://www.xuanzx.com/163uoqevjbo.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163bqzobjmp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163kzxnnuyu.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163hljkdmaq.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163lmyhepua.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163okmkyibb.html

python -m pytest -q
来源：http://www.aibaodan.cn/163iwyjtkrr.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163auwxwjxn.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ikemtqws.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163mbgyitui.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163phrkmklw.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ltrpsnaa.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163zbezsfpw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163jqwekhkd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163jophmkfk.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163mjafchwb.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163urmmcnry.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163zoywuqso.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163pxitccaz.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163iojweiui.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163uzrhuoga.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163wrkcsiid.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163qmlcvhet.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163wwiddsyj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rtrrqbjh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163pljogylm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163yztsoemy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ivamxxwb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ewzhumcr.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163qmhedaki.html

namespace App\Http;
来源：http://www.sxryk.cn/163hqpccmvg.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163cjdgzihu.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163daxtklkv.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ysywnxpt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163npdkoplw.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163nxshkpjb.html

?string $name = null
来源：http://www.aibaodan.cn/163iesifioz.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163kkpxusni.html

int|string $id
来源：http://www.xuanzx.com/163uvuegvcm.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163qhmxipmv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163zenijhwf.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163moescxkp.html

public readonly string $name
来源：http://www.aibaodan.cn/163dywloawa.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163pucyxmzd.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ujavnjon.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ltdzibyj.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163lqwizrgn.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ndkxdbdz.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163vknlxnbk.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163wzhlifbl.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163guwdlfsf.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163fmqvsose.html

$obj?->method()
来源：http://www.aibaodan.cn/163iyzzgjuh.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163spozhzdz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163mlsttxkj.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163qdixkgom.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ynrguihr.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163vmsyigpq.html

"值: {$a}"
来源：http://www.aibaodan.cn/163cxphgtsz.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163xfmeuvkg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163dedrknif.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163awrygeye.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dmqoompm.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163edwtzrwo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163opwuslir.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163qoduyxip.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tmuefbns.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163uonxrpmi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163secphccp.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163rarqsaau.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163rfrkgluj.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163phvqtgqu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163qtjtlgck.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163flfxyccd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163svvspbom.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163hpzllrdu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163svhsitcu.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vbkxjwaj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163kcupmpws.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163nxtahqom.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163qsgatebj.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163eyxoucey.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163lvxodmta.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163wwxcoein.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163kskocmvn.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163nkstulhb.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163gpiwvrhy.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163wraebxrs.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163cytqlmgc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163sgdvkzxm.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163alynffnx.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163nshojomz.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163qgeahrzf.html


<!-- 参考信息 -->