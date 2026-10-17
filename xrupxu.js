外链999!wailian999！

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163exuhhoaq.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163vedwwqpy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163mtdvmywj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ukdckfip.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163sgktpzjj.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163djmwblsy.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163hjmyaqur.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163smzppgue.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163jqezahrp.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163rvkqghcc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mtifpunx.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163mccibbbf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163yatbuiap.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163uujsajmu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bqgycbjb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163crnxlffy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163lqesnfos.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163bwlfmvki.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163wrbhaecb.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163dmdoekns.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163mouddhvw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163fiwsivmd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ozroegir.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163eaexaiwu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hkapvkry.html

================================================================================
来源：http://www.xuanzx.com/163zqueeclv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163aozdomfa.html

================================================================================
来源：http://www.aibaodan.cn/163cbzabkdd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163mrmbmces.html

println("Hello")
来源：http://www.sxryk.cn/163qrkibapv.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163yfvfdavt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vpkudzxw.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163jbawplcs.html

"值: $b"
来源：http://www.xuanzx.com/163avzihwfm.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163wuxwlhtd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163nmjzaiac.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vgrwtzbe.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163yxotritp.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163qbsqvpgp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163mhzpwxps.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163pvsieoea.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vkxnpkwu.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dbhcdope.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lmpyyedr.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163yixlqawk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pvourqjj.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163katczrlq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ecaaaffa.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ichrfszm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ykdlyvih.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163etjoiqhn.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163otpznfbk.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163baierlfa.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ktohefbr.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163wyaylckw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163idlbvxjw.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163grdkhhes.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163buzgrttx.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xlfygnor.html

print("Hello")
来源：http://www.xuanzx.com/163cxhelten.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163aewzewmi.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kgcepczh.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163sarbqvyx.html

"值: \(b)"
来源：http://www.xuanzx.com/163canejmdc.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163udlwgzvn.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163gnwagviw.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163pegkbsof.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163fzjyxnbg.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163lcmvxuna.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ztaarvyw.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163vrthzpwu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xzwlfrsn.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fwwylmfc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163bdkjmnhk.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163hcadprhw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wxooyfgf.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163nmfoexru.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163qslptglr.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163vwqyhjpn.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163syksbfrp.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163lwwalbrb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ueuvxwdm.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ystptdsw.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163nsiqqozs.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163btqkrgyh.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163bnilizpm.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ckipyniz.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hkgettuy.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163niwdkdjp.html

print("Hello")
来源：http://www.sxryk.cn/163feqczlvv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163qletkgsc.html

local a = 1
来源：http://www.xuanzx.com/163pngzjgez.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vqzsfovo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163sqgiodce.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ysswnead.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163lzptieyt.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163aufqfkqq.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ynkzgsyq.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163pjfpuyjp.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ddblsdqe.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163oobtcioo.html

"a" .. "b"
来源：http://www.aibaodan.cn/163evovtmzg.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163depfddxb.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kfnmbscp.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163hyewkoqu.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163sxtqbbkl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163thikxuin.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163rbkywkza.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163uernrinx.html

print "Hello\n";
来源：http://www.aibaodan.cn/163pnsxouxl.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163lvbsskbd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ekryzfka.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163keuabzmf.html

"值: $a"
来源：http://www.sxryk.cn/163otgxpvld.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163auiprvab.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ulzqcdpv.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163eugmzogp.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163nzotztqi.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163svrhsrbh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163cuzfvwnj.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163wtvkggwj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ohefphju.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ectkjfxr.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163lurijbmo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163gehjbxor.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163awgwskaw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163iqzjhdja.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163aulepdsx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163jesbsuiz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163tzrdzsao.html

println("Hello")
来源：http://www.aibaodan.cn/163tcfjsiqn.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hzvscdjw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163vnvpsfae.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163lauzhwbt.html

s"值: $b"
来源：http://www.aibaodan.cn/163ntgnhqvp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zewlpjet.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163qirrufsq.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163wawgbqxu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163xaodrlyn.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163hhmanezw.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ayoogtxu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163mtcbuwdf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163pjbzcwne.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163hxjfxchv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163lhqfxbpt.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jgbtzarg.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163szkufztx.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163dtltffzb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qcqzfiod.html

================================================================================
来源：http://www.aibaodan.cn/163miutnezf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ocwldtfm.html

================================================================================
来源：http://www.sxryk.cn/163aieajldg.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163uvengybz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163gpypdnuq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163mivtejpw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163toebdqls.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163pveqloju.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ubjsnako.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163xoreoqkk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163toavdmql.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163qmisqqoi.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lriolaih.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163bqnvsusq.html

{**a, **b}
来源：http://www.sxryk.cn/163xbxhtzhi.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163acplpyhb.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jdmwnutm.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kfqtsajl.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163pleubcyf.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ikqiqihe.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163exagaqkj.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163crstedub.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163nitbeaqx.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163hbgtbrrd.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163uonsuwtr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163yvdmmblb.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163mtqxympc.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163itagqwln.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163zpxvhmnc.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163bahnfpug.html

defaultdict(list)
来源：http://www.aibaodan.cn/163lqrsllii.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163sxwsnjfq.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163lvsjrtzl.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163tmcrdkxu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163kawwidom.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163pnvjqfua.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163txwzjunj.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163iuacnqul.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163tfaikdww.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163tadbhsii.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163adbpdtqp.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163uyjdzkqo.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163tfophsek.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163vvzfosko.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163lxlrhzki.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ggdvxurf.html

list(zip(*m))
来源：http://www.aibaodan.cn/163gndoviqg.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163htwdqizv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163gjxoynmb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mwoztywg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163mukdbgfy.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ktisrzum.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ozymofng.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163cchmvrug.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ednhatxj.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163raqhccde.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ylvpdbfw.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163lmcsfgfx.html

UserId = int
来源：http://www.aibaodan.cn/163llrptpwt.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163kmiokxne.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163dzhaqvew.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163boheifkq.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163nickfzdc.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vsycsyhh.html

python -m pytest -q
来源：http://www.sxryk.cn/163zwqwpift.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163zmrufuox.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163vxxebzop.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163cakllfvf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163xigurnlt.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163bfjezybk.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163qtkapzvh.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163gsowxmpk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163lncffabz.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163yfdydgmq.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163txdvvcqb.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ufudzlgn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163dhdcntca.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163dzxtztfv.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163eppxplfq.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163seksztzc.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163awiqaihg.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163uxrkdzkg.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jhjttxvo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163htzkpgwm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163lmmfxiux.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tvkmvkna.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163kxmzxgtm.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163xfiyrtuh.html

namespace App\Http;
来源：http://www.xuanzx.com/163csurnjhc.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163znixxwwk.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ofcivryp.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163vvvtdpzk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kobytsem.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163gtxdcbwi.html

?string $name = null
来源：http://www.xuanzx.com/163rbygsvxj.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163jirxgozg.html

int|string $id
来源：http://www.aibaodan.cn/163lktjpxgj.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163qyrjcotv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163xlxydbjh.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163mphoykue.html

public readonly string $name
来源：http://www.sxryk.cn/163zccsitoa.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163cmgqdbxw.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163qlmlivpc.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163zzkrpbxe.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163qmioeebc.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163viiiwvrx.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163acbaqlpa.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163hkrggxcy.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163stoenyzc.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163mpjirchs.html

$obj?->method()
来源：http://www.aibaodan.cn/163kdgverml.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ymupwvpg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163izxghpmz.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163kdzbydcj.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163chypfito.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163irzvqhve.html

"值: {$a}"
来源：http://www.xuanzx.com/163przibbix.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163uxiripat.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163wlpjptwx.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163enuhnkqd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dnhtuqer.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163hhzrovea.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ctkabwmg.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163yjjfrely.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ldqfztnn.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163fazbfppx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163doeqyxhu.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163kcgdgpuj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163jmsvqssu.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163zaaipdgo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163hpixejnl.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ghlbmskl.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163dsojbljw.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163pkbzkpzr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163uplvihpg.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163stqvkcoh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163aacahjxq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163mzrmztiu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163fohzvzta.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163oxezqgeo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163hxfzgrhn.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163reimdvpx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ljgpphbx.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163vqunbehp.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163obqfxzlr.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163mlwsjqpv.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163kaljkucv.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ftrgrxzl.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163brklgtoa.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163iauaszku.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163dyegolub.html


<!-- 参考信息 -->