外链999!wailian999！

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163lgoyjzil.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zwygfjaw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163dkiefmcm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163thkjwbyw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163fntqiuys.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rhsdveqj.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ihcegqox.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ahcyodas.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qndfsygw.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ahdgneub.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fudlthzk.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hluvoaxg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163idkyczrb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rvcsxzky.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hsguhvxg.html

[S56] C++：optional
来源：http://www.sxryk.cn/163xkooffbw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163duwlokyr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163kuvufbga.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163aomseqcu.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163eiciooug.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163pvgonjhn.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163qggmkthc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ommrccbr.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163necbnqlw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gfwouhhe.html

================================================================================
来源：http://www.xuanzx.com/163kppbrotx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163qbtrngzo.html

================================================================================
来源：http://www.sxryk.cn/163qtgcvxks.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163lnkkgxxl.html

println("Hello")
来源：http://www.aibaodan.cn/163yzipxpar.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ebwabccf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vzyksqnb.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163mtxjfwlb.html

"值: $b"
来源：http://www.aibaodan.cn/163tpzjupcp.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163wvzrpbnc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163kqyhcvjl.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163pquqcina.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jnusxcmb.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163plxjqryy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163grltuikp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163osqnzckr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163arrwjgir.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163henkdsro.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cfivdqcu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163hvuansav.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ymfuqtzy.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163puhnrkbf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163qdclphod.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163zijpqcmg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163gptjltsb.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163wucjofza.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163nqemooln.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163jmtucxhh.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qpfmjabh.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163zaqrabkn.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163zomqpgjv.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vhylptrw.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qqvymywh.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163huzwbqee.html

print("Hello")
来源：http://www.xuanzx.com/163kpnlyswu.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163zrmjuztz.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163rldxugra.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mkiqjymi.html

"值: \(b)"
来源：http://www.aibaodan.cn/163lumiazza.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163uydzrqas.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ipxxefhx.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163fbonjgym.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163fftsyldy.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163tsralpki.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163mfxrtlad.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ajmcainw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163wjxgbhsw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rdyhdwus.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163bqsgaofk.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wekzwixf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163hfpbvtcy.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163fwbjdotr.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jkljgscd.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163xigozodu.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163qqicejrr.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163npbfrxao.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163laeeprlx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163idjisogt.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jepbfvrx.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163sbotckur.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ytmueojs.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163nhimneae.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163owafyfxg.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ilexadki.html

print("Hello")
来源：http://www.aibaodan.cn/163ijbbklfu.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163uoogeagu.html

local a = 1
来源：http://www.sxryk.cn/163zwkldtqp.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163amhjklvu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163juzabgnv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ajihzlrj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ubhnlszb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163gdpycjkb.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ftnftklq.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ksqnyual.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jsrlnlot.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163cfhewdon.html

"a" .. "b"
来源：http://www.xuanzx.com/163cyazxhhk.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163cctiqyfm.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163xtviaokm.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163cmsgsjfj.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163hdbzxtui.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163nrkejwmk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163pandtjep.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ttzptxcz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163utwbyqks.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163uhsvhwmj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163rkcnpchi.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163qtxienkx.html

"值: $a"
来源：http://www.aibaodan.cn/163qnkyanxq.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163soynumps.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163rtnxkyph.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ylonvkzk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163xezmfani.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163odortjsc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163rmpuvixy.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ifkjistl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163oqlhihoh.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163glkfnkmg.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163hapaiapn.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163aylqvbih.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ofxmwgpt.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163vykuptyg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163wltphwma.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163vwizlunv.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163vkvxfdoq.html

println("Hello")
来源：http://www.aibaodan.cn/163ztgphpzj.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163fcasdmfj.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qbhrbycg.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163rnkypfua.html

s"值: $b"
来源：http://www.aibaodan.cn/163dgpwiwvt.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gijkwals.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163qfsmvqks.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163azqpnutx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163zumdnmqn.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163zwxixhbc.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163tdqedcqb.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ytnhppcs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vpxruwwn.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163wgbbbrva.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163hnubvnnn.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163skqchoke.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163fstvbsfw.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163zoajlqnp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163smwwcwww.html

================================================================================
来源：http://www.sxryk.cn/163pgnicjsy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163veizlwie.html

================================================================================
来源：http://www.aibaodan.cn/163jzyufcga.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163vrsnltlc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163arlhhhuv.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163kcqosevy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163xghbramz.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163eybmeqwz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ltoscbcd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ratdhmxy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163bomfrcwu.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163fdlbbdhk.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nyouzfwr.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163bpeusjpk.html

{**a, **b}
来源：http://www.sxryk.cn/163ugvtlwzd.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vazaczzv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163hjtrvwhk.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163zcyrnxfd.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163srrjuexd.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163uofvjnui.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163dzhrdbxb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163wrriftga.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ikxejzmk.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163bgjuamen.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163cglejvrk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163asqtfhty.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ymltiufd.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163xuxwpkkp.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163kjoxhcgd.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163zogrrhdl.html

defaultdict(list)
来源：http://www.sxryk.cn/163tadlvcto.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163gmfrbgpo.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ajnxmzkh.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163gdogqnws.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163wzbrhhwp.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163skqdgpoi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ndowxaui.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163iiujsznr.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163lqlfyxnq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163vfjscysf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163etzeekdf.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163fejuvpbu.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163amiesfiq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163xxysrzuk.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163jdcummnd.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vzaezcgb.html

list(zip(*m))
来源：http://www.sxryk.cn/163qizphnok.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163viovejtg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163uytauecg.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163pauhrnqg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163kepnzfyu.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ffippwcc.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163flkornzr.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163lwniumis.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163lylwqmyp.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163dawisrgm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163zrxczzqh.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ekegqdzo.html

UserId = int
来源：http://www.aibaodan.cn/163mzivzltp.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163kwddazzc.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163hrfnvlsi.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163jdkjkimv.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163izszcmnr.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ofowkbzl.html

python -m pytest -q
来源：http://www.sxryk.cn/163lhrkkojg.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163uinczkfx.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163tbefwuwt.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163gxxpakle.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163zunwyvqw.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163icwxchpe.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ceezmfhp.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163dxopwnxd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163xnulpzgf.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ayvvjysu.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163gxxnnepg.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jprkedmd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163dydlhogc.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163dsbqhrxf.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163qvhsrezk.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163gkqvvgdx.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163bkgmlwdd.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163hyuayamg.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lxvxfdjw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163zqhwuugh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163xtfbedgt.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163uamdcttg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163xcebuzgo.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163gosewxmt.html

namespace App\Http;
来源：http://www.aibaodan.cn/163dcivswrm.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163kspbaiwo.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163vkrvkcwq.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163rfctqnfn.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kiylocql.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163zayhxies.html

?string $name = null
来源：http://www.sxryk.cn/163atxeydfq.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163uwqsihqj.html

int|string $id
来源：http://www.aibaodan.cn/163hyzgedhu.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163lhntwgli.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163kvppkzpm.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163wvyehucp.html

public readonly string $name
来源：http://www.sxryk.cn/163ljdrnndm.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163jqgjpplv.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163pxpkaahq.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163mvdvylag.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163hzzgedct.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163xjiwdjbc.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163xrtgbetk.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163tuhtmmde.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163esijfifh.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163uaqyjlpb.html

$obj?->method()
来源：http://www.aibaodan.cn/163vokcfjnn.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163skvxelnv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ledgjxbg.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163isskxzvs.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ergxnprw.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163hczrsotv.html

"值: {$a}"
来源：http://www.sxryk.cn/163khlwfnxe.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163mkcwswzy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163oactmitu.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163roiiagll.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163idijfcuf.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163gdxayvzs.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163utjxukll.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163qmaamsif.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163simtbvah.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163geoafwxx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163pwpfzdgl.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163oayfiuyt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163vokoxlpi.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163wckkrtgb.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ukzdqups.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163znimoslw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163foozqqnb.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163tdyluaba.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163bjwbfzqq.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163alsadmks.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163aorfbpgq.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163dmrssxis.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163bagimqbk.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163abttdrld.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163tyaoispn.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163urgjmnbz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163gfovvsih.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163akdxjpcn.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163slqwnabq.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163zlzrrfam.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163hauemynd.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163wsoehiqx.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ogedjzvo.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163smlvukxv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163zdytrzng.html


<!-- 参考信息 -->