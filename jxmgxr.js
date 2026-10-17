外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qedbclbk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163yneyhasp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163afeldrkj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163lajanbfo.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163sssiqoin.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163hongaals.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jjdmhuvl.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163smnijnfh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163mtrmvkur.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fhehbril.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mnaasmgu.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163dhrlhncf.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163jpgiasdp.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163abvydntc.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hbwfilwc.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163zttdxvtq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163mngslaco.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163zadrdnrk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vgowfqfv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163bmcyixtj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163khhenaaq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163yndxgerh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yzjghvcs.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163eiywueqc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vbffoqgr.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163cnzwtder.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kyjovhyx.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163uosjkgvt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163blfvulaj.html

================================================================================
来源：http://www.sxryk.cn/163hjzuegkq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ishgnvqy.html

================================================================================
来源：http://www.aibaodan.cn/163oeganylg.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163fktfibah.html

println("Hello")
来源：http://www.sxryk.cn/163mxiwxjxm.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ntqorfgs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163atynerbg.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163qkggbkan.html

"值: $b"
来源：http://www.aibaodan.cn/163pgvysuhe.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ongviepk.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163svsewmux.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163sgfnpcrk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163eassnmwd.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ygaukqng.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vxwaavet.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163pbwomptt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163yglkimsu.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163cmxkdbbi.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163eubhjhob.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hhwekrnb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gnxaqrkb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ivgzzscx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163xdakbrow.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163vohhnloa.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163thhylfgq.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qddcbykq.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zsvrrhfu.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bktsehel.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163urvshens.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tdmppixg.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163gqmpjowp.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163edtiutzi.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163luzfwrpn.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163foojxaoo.html

print("Hello")
来源：http://www.xuanzx.com/163bllzdril.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163srawvscj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163wbjlqoay.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hcgffenz.html

"值: \(b)"
来源：http://www.xuanzx.com/163xxshwyrb.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ofwlcpie.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163femvgpqq.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163msyupwui.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163yobfrvsu.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hcmhkkmc.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163kyhkwpxw.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163drhkuttq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163upecjhns.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163codmhwjh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ftvauabh.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163flpxkqor.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163xkhaxpub.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163tshqmizc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163bxvbfpqk.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163hdoevhlz.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163jjlszlmz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ihibdxwy.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xtzwbzsj.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163likjzidp.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163nuqvzhxq.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163dqwwhwir.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163pxhhcugg.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163lkpxugem.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163iwoczkxg.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163jrzvftty.html

print("Hello")
来源：http://www.xuanzx.com/163kqolbyts.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vohiqvvh.html

local a = 1
来源：http://www.sxryk.cn/163lyzlbmzg.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ewdlzcyj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163edttkjdr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163asjzymww.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163wtcmczyo.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ofatcjsu.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163sleymnjv.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163nplxwskx.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163zskpbhky.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163qrzgqgth.html

"a" .. "b"
来源：http://www.xuanzx.com/163xhwiomfd.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163xyoryyaz.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163udufdvfk.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163letcqofg.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ppizwznp.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163quafkxjx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163noalrsfb.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163afifyqta.html

print "Hello\n";
来源：http://www.xuanzx.com/163yzexfkqo.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163whmdvwcj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163icwxkqct.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163maiazqrp.html

"值: $a"
来源：http://www.sxryk.cn/163dzzxjhdn.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163chcperkq.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163yhynburj.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163yipwiwui.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163hcishrlx.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163kutzpiey.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163cahkobcm.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163pphnivdc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163pyvhnwfk.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163xdpmumaz.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163iqpcoktw.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163sgkgvnpf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nktvsmyr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163crlhytpy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163cwyutyau.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163eduoxedf.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wvdycftm.html

println("Hello")
来源：http://www.xuanzx.com/163eopccbul.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163gebxsxny.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163kcsxfexw.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163jdcjqvsw.html

s"值: $b"
来源：http://www.sxryk.cn/163bgojirmp.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gsautmfp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163lgpebbbf.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jywrkrrf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163uiropwrl.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163gbiyjddh.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qznctffo.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163vibfgtxl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163tpnqzchk.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163pzsnvwyc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163fnjyajmm.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163dolahpsi.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163qneeultp.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163wzxgcnrj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163atrqeara.html

================================================================================
来源：http://www.aibaodan.cn/163nokxjrir.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163zjyrbjge.html

================================================================================
来源：http://www.xuanzx.com/163ockqpfph.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163smgxyqbm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163dkzbwvbk.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163tpbffqbd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163boqbqtar.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163yncjzcak.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163zqqcxubi.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ugrtxfne.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163kyypxcrc.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163izwjcxzl.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163oiupdzeo.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163qhoehlmg.html

{**a, **b}
来源：http://www.aibaodan.cn/163puyqzymf.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163yvbubfvn.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163fmlsdmhg.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163teontigf.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163gdepxkit.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ijphmsob.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163aabivblk.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163kpnhexby.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jgznfoja.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163atjjbhab.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163jozzpzpj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163jekgkfnj.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163qipbqpdf.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163fkyyghvx.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163amgknliq.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163psymyprp.html

defaultdict(list)
来源：http://www.aibaodan.cn/163eisufngv.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163fkmifymp.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163btmbsiyt.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163xzjozxqd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163rsfppjwv.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163edzyydpe.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163mujaeaye.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ytleiyje.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163letnorph.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163kehlspvq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xuroyvbk.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163uwhytuns.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163tvgudvub.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163jkhznubq.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163eibhyozq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163oooncple.html

list(zip(*m))
来源：http://www.sxryk.cn/163phvcjxet.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ucqwaneo.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ywqagkeg.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163janyzilz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163bpdzfwor.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ulcbymdz.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163zaibyehe.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163tflcghwb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163qvzedadu.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163wvpefpsl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163vkdzqxlo.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ucjsgphu.html

UserId = int
来源：http://www.sxryk.cn/163uwpjqmfq.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163chkfuylm.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163udzdnxfv.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163alwfxcpu.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ctvyguiw.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163dmwyogpc.html

python -m pytest -q
来源：http://www.sxryk.cn/163ucnzdswc.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163oiiyhnwk.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163xkchcaey.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163rizydxcm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163kzzoqrsq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163geeenlod.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163akhfgesv.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163vulgqtbt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163fdtlytey.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163vfrwzblf.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163xzyjflzn.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pikjvzfk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163hwpcmhxk.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163jstynygc.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163rmmdtvau.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163voblnpdp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163fjvtbezn.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163bpgolvim.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163boopbkdm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163agvhkque.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163usklpsqj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163qilhxrqh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163yezsocfp.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ohxyynkf.html

namespace App\Http;
来源：http://www.xuanzx.com/163ozqlahat.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163iuhbcnbr.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163rghxtlnd.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163iecuhdul.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qfrtgwdw.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163anlhuxly.html

?string $name = null
来源：http://www.aibaodan.cn/163bjlcppae.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ispjxhja.html

int|string $id
来源：http://www.aibaodan.cn/163hcvpkgue.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163qmzqrfmu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163kwewedzf.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163vcqiyzep.html

public readonly string $name
来源：http://www.sxryk.cn/163yqaeuuzg.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163wbstmtxh.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163yhazcnlf.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ekxlhnaj.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163nwijsdbu.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163vzbtoypp.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163asdehyes.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163gahvgcrr.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163skxlbevt.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163agnqosfj.html

$obj?->method()
来源：http://www.aibaodan.cn/163jkupxync.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163pilhngfq.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163mfejvlbw.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163wonyvigl.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nvamoxpt.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163metnejay.html

"值: {$a}"
来源：http://www.sxryk.cn/163ifchhjhl.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163wrldkhzu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163uupgpzma.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163wpfqahuo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163penyyvfc.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163wetfxgqo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163pyjtfoun.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163xmfneaft.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qviqrkoc.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163tytqdtrr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163tbgrxpyo.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163giebrnsz.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163rfnvmgwx.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ysjwqybj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vqqjasac.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ustjqlko.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163hkigghwp.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163eikqjzgi.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163qtydlqqh.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163smuigwvt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163odzivslk.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163trqnbfto.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163jonlbjcx.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163lbmfklpz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163vcudybrp.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163jicomrik.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163fznwkosf.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163nzdfafvd.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ckkufavl.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163mksbbmmb.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163fglrswxy.html


<!-- 参考信息 -->