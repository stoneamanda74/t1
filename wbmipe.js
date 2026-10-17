外链999!wailian999！

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163mtyazaph.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qqkthqhc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ruwfednq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163lnessgbv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163gwtppryv.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qtjlwtpj.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163waomkwcy.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ovdkepxm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ipweeoym.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xnzoaxff.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163wsattpid.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hefldjrc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163tiobzirv.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163apksvikm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163krihvtfr.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zcxccibj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163mnglgisk.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163vdjybrgl.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163uziwgdzu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163hxnjjhda.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lxvpgryh.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ppekugrc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163sbstacuv.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163jwdqwtba.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163jqdkfwpf.html

================================================================================
来源：http://www.xuanzx.com/163xoaldcqs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163inyjvbyc.html

================================================================================
来源：http://www.aibaodan.cn/163sipsuqgk.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163bopiqdks.html

println("Hello")
来源：http://www.aibaodan.cn/163wfzjzxor.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ailbyndf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ugvslktv.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163zzfxkazm.html

"值: $b"
来源：http://www.sxryk.cn/163xukckkkm.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vhfyztyn.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wbgsdzob.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rqcfxmnt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163cnzrbyet.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163penbzfuw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163gyezzlhk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163yarecwux.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qbvxsghv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ceyhacnx.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kwtcvvkf.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163xpklwuje.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163keauhwkw.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163lpdcgcxo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ukebdbul.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163dquzflaa.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163uwsqniui.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163iyqbtbuj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163hxaraboc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ayzxncqt.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163vjqpgjle.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tkuafxma.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hjbuoamu.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163bkhiteiz.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163mfnblzhu.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163aiecsrpu.html

print("Hello")
来源：http://www.aibaodan.cn/163rprgllrj.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163hmohpecu.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163dkzyguok.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hikadoqr.html

"值: \(b)"
来源：http://www.aibaodan.cn/163uhttobif.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163kydtlbms.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xjpxbafb.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ofyprkgb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ldheumvq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kvwenkzj.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163gyikznyi.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163eindanhp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rxrcehai.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163qsoaomjj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163kdsmashi.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163tunwgmpf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ogqckkzb.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163kjpkqiin.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163rymaxoiq.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163kbhshnsq.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163lasdeqpa.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163azijnerh.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163rafwndoa.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163jrzxydpb.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163cxrfubur.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163htouency.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gibucbxt.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163nmrcxptu.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163mcpsivsg.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163efdtmvkw.html

print("Hello")
来源：http://www.sxryk.cn/163fsaxdauj.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163wvttyrsn.html

local a = 1
来源：http://www.aibaodan.cn/163zmywvmsb.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163gegvejef.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163tlimvdkl.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ngkhlhiu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163zmumvsfj.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163vtrbsxaq.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163hkbuwxxs.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163wuqixkts.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163xjggskee.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163domtzkyr.html

"a" .. "b"
来源：http://www.aibaodan.cn/163wtsehhac.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163jycqwjzb.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163wmsbdjha.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163hpjexhhg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163qenufmmk.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163tvfsflml.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ozywajbe.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163becumxkl.html

print "Hello\n";
来源：http://www.sxryk.cn/163pkqwsciv.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163osruxhcl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bkzdjzzg.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jvggunjs.html

"值: $a"
来源：http://www.aibaodan.cn/163ubrhulft.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163zzspyahe.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qgmovkuj.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163qyxlttsd.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163njszeqqp.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163hvhrdumw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163svzoojgm.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163vgthiygn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163cqxsmmkr.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ynpjsddr.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163kxmbbxzz.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163dlrzhixj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163spvyqhfj.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ikcdplep.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163xllhmubk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163xcdvawnc.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163hvgldfqd.html

println("Hello")
来源：http://www.aibaodan.cn/163uyvadaod.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qfawcyhf.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163lwfzjxtt.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163yiryuady.html

s"值: $b"
来源：http://www.xuanzx.com/163yesvamrd.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kfexavzq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163pcyrunxg.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163wddxphjs.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163niqjmwmr.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163fzwusqsg.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163toaierao.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163mziqasgg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163bomgwdjw.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163gdfnyhmx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163lthcmnjv.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vqylbvkv.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163yfybdxto.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ckywomdn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jcohwegu.html

================================================================================
来源：http://www.aibaodan.cn/163hqkgdezh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xcbivyii.html

================================================================================
来源：http://www.aibaodan.cn/163whmjhcid.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163oeuhunqr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163vstrhbwm.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163gvjywncw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163kmqijgge.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163xhvvgdej.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163tjsfjnpt.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163kiaidozw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163amowsicr.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tfrrqdyy.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qcayeumr.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163frkieypj.html

{**a, **b}
来源：http://www.aibaodan.cn/163dtfwmwwj.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163gskljffz.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163tonjloqb.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163tixofyzh.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163kunhfzje.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ttfqsfxg.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163xzezbiqt.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163gbihvaqu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ysakcpgc.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163njsvkrlu.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163acpdsamc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163fvhecons.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163dvwvwpjh.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163crqbamtp.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ycrzkyzf.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163oxderiqs.html

defaultdict(list)
来源：http://www.xuanzx.com/163wpnerhsf.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163kaltkyxj.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163xczmavql.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163putunkur.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mlfjvfsf.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163apxbowka.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ttxhpsca.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163qnqnncom.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163bpqzkjcb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163benlyekx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163urtgwmmn.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163iolkwcyp.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163vuongkek.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163dsgbamaa.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163sdsoxljv.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163xhnatewj.html

list(zip(*m))
来源：http://www.aibaodan.cn/163pplexzyx.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163agekduww.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163lkrzscgj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163gzqiazki.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163dnvbuxzj.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163iglnhcyq.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163uguofihz.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163bsancaek.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163yoqydirp.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163qhrtrjjc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163xrmjbfbm.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163fswdwwwa.html

UserId = int
来源：http://www.xuanzx.com/163iwkfgxjp.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163pvadcwow.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163oqbxmhex.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ukzvjnwi.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163zfilbbvu.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163turvkdtm.html

python -m pytest -q
来源：http://www.xuanzx.com/163dorlpkyy.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163gadzxyob.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163lcainddz.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ulixkxry.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163elluhsxj.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163isvenksu.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163hodikjro.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163qkzbgpvj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163idklcxef.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163swpfyjqp.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163yvtkfdhz.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163dznmckec.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163whiugvip.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163othezdyu.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163kctzwkij.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163gxxxhtur.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163uetvyvgr.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163fgngpsem.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163dpmlecyu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163fxtwktso.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163skjjxxud.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163fnifzagq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ioazklas.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163fiwmojvz.html

namespace App\Http;
来源：http://www.aibaodan.cn/163grniywov.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163vypjipvn.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163wcuctdzt.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163dpwafqxs.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mrshsgph.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163eswusqea.html

?string $name = null
来源：http://www.xuanzx.com/163ldarwlzx.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zkjvgkkg.html

int|string $id
来源：http://www.sxryk.cn/163qvginydj.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163amuvgkwq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163xgeqpgig.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163cftmfidk.html

public readonly string $name
来源：http://www.aibaodan.cn/163ikgmjfyq.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163gopyesfb.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ngbggqje.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ekgoxlav.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163bndpewhm.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ewnrylyo.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163dyeqdoso.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163znmluhjk.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163xipzlwla.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163wmprkajw.html

$obj?->method()
来源：http://www.aibaodan.cn/163wclgufcv.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163toncblch.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163hngjboqe.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163uwzrgxgo.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pywrvswj.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163tbfdncrj.html

"值: {$a}"
来源：http://www.xuanzx.com/163zuzybrtm.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163rqkvmmlr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163madsvuoa.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163pvoiqsdb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vxdoroth.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163xgvtyqdz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163plbnjtjk.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163eumzjmsr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lmrbalnu.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163hifbtsci.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ukoztylv.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163whbjignx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163yotmlqmm.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163jdqludpu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163pciqirdc.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163wxexsaeb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ojzcoidq.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163efnkrlju.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163tfzmwhwk.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163lwdgifva.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163yjpzrmfi.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163lohvcohc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163orbfnmyj.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163opvslxaf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163evadvvgq.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163wurszvzq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163zcbnqtbb.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163gjffyvmk.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163osuoljph.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163rajerlzi.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163hqkaguwu.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163snlzsadk.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163wlnbkklj.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163uhkckeci.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163yjfzvcrn.html


<!-- 参考信息 -->