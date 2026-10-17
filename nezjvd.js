外链999!wailian999！

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rhtizjza.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163sbqpugjo.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163pnlzbzmy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163etzqlkth.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163szrjdfof.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163uqgtqghv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163nhxngavl.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163pmtqlpvw.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163yqtfunmj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163fteikegt.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ihclyiiz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163okbzfmfq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163uifcvpbo.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163esxzidub.html

println("Hello")
来源：http://www.aibaodan.cn/163zvvcdqhj.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163jszafxip.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163rfpxgqbk.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163nlayppkh.html

s"值: $b"
来源：http://www.sxryk.cn/163fzxippjv.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ttijdnac.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163qkrfwuti.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163befgqvub.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163denjxzoz.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163tndsupwx.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163pmbgmdpj.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163tumbroks.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163fsnwdlhx.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163prkncplw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163zhfbyaes.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163rdzoehyn.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163mrsqucmt.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163swveglwe.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163puwlijvg.html

================================================================================
来源：http://www.sxryk.cn/163gdkjymip.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vbybnnhc.html

================================================================================
来源：http://www.aibaodan.cn/163pztdhrxv.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163bkecrgjc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163egvyuhje.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163pbwhbjbk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ndubbagw.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ahikvote.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163xoeqbowi.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163xvaabklu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163jccmjspi.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163lqinwznl.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zjgkfqoj.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163iszwiogt.html

{**a, **b}
来源：http://www.sxryk.cn/163tkhxmbao.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ipunmfxx.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163sqzhfxxf.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163psjgckzp.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163zbskqiwv.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ikyfebhy.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163cdwopgaf.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163xvwdpmiu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jgjjioyc.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163uzehwwem.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163phqttfft.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163wmaoidhx.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163xwyrwlso.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163mzydmsej.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163wjygijnc.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163qbnjpgvx.html

defaultdict(list)
来源：http://www.sxryk.cn/163wqlymeud.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163bvaahyye.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ppetqrke.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163znxinnuc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163otievgqi.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163xdstacja.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163gqwwgqyr.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163lxwqjorf.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163rmstlond.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163qxjboopz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163okrdkjpx.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163bqdyjgin.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163nsdfherl.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ldotzscc.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163qqyxwkif.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163xbszmdto.html

list(zip(*m))
来源：http://www.sxryk.cn/163bwgljvaf.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163nxudkkri.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163hrrtbzwd.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163egnqcrri.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163dzdsuhkf.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163nkvvbqhg.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163yykkyinj.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163gmkhlatd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163dhvifpfm.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163etxbvcwu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163kflhxfrl.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163gvfxynpb.html

UserId = int
来源：http://www.aibaodan.cn/163zsxcmyrb.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163cebidbct.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163tatjalyi.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ajhvievq.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ygbwwqnz.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163wwkaldgn.html

python -m pytest -q
来源：http://www.xuanzx.com/163qgodianw.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163bjohcgnv.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163xhqickyq.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163oifxtwdn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163oslkukrs.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163zmjdktya.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163homivdhj.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163wagwhrys.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163hednuvef.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163xlgvyjzd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163qvtkaxzg.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163clzidvqd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163zprlxrib.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163muzjvpmp.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163cazjdokf.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163bjtcycvq.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163mzwcvfaf.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fmzzfxbh.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ulvyohnv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163mtbcjzzm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163qfgdvrnv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163caalxvmb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163fpzyeybs.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ecnuhfzr.html

namespace App\Http;
来源：http://www.xuanzx.com/163agosrohf.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ofxmfiiz.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163qsteiput.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ewnrjwum.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bevcnvtj.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163dtygnaot.html

?string $name = null
来源：http://www.xuanzx.com/163jqqpmrdc.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ktgghqgb.html

int|string $id
来源：http://www.aibaodan.cn/163dyazgjrx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163nvpzpglx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163daswroyn.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ohpnajhd.html

public readonly string $name
来源：http://www.xuanzx.com/163ijmjwagg.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163psgmwepl.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163zqemkmjs.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163kvqtdyop.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163jfdcaohk.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163lxbiapfi.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163erumnqpz.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163hxrhoiwl.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163vqaairwb.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163dmrqgeog.html

$obj?->method()
来源：http://www.aibaodan.cn/163rrttfbdi.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163yrmowqmo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163lrpyakpy.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163xqtfcrlg.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pemtoomp.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ctzxbngk.html

"值: {$a}"
来源：http://www.aibaodan.cn/163gkwvdfie.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163fyovyfkv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163chfapryl.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ovjfeibq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ujsjigze.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163hqfypuwd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163oksjplcc.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163mbzluopt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163iwpbybmf.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163owlllrna.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163qyfbqlkr.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163qmlrtndp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163wvyvktty.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163pnixowhp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163bpzdbmse.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ehzacajh.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163kiridlxt.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163sknzxmio.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163cromnkkr.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163lavnifye.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ljrctdni.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163uuannruf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163rtpwuckl.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163qtdjkrig.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163krcnbkrt.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163jhciseec.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163bgbtetcr.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163hnjaetyf.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163zjctxwkd.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163bqgvyzyf.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163qzblodgt.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163rqzxyoxy.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ucjmkkxy.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163vcycmday.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163qvaupqvo.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163xdhvoldh.html

composer require psr/container
来源：http://www.xuanzx.com/163ylpyalak.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163qktosgdv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163opuwuasq.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163dslhfeoy.html

composer require twig/twig
来源：http://www.aibaodan.cn/163aguwrhsd.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163frcyhhtw.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163uhsbtoda.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163kksizkgs.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163tfsdhbft.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163nwvkqnrn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163qybzohec.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163lzagxjts.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163jdlkqsim.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ngqcfaqt.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163giarqpfw.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163dtwpztej.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163xhbeupdf.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ramhrgjp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163cqsoxivl.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163xhjucpuq.html

a?.b?.c
来源：http://www.xuanzx.com/163uyhlizir.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163tgwknkng.html

a ?? b
来源：http://www.xuanzx.com/163nmkprena.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163kwmscbqs.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163hfgaglmr.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163vjtlzctv.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163twdylyis.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ghmsfyfx.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jnclowsd.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163wfmpwgmh.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zwjfiidv.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163swosdbgd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163jmcncsab.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163wibawqza.html

structuredClone(obj)
来源：http://www.sxryk.cn/163wtwburnb.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163jcxnmddz.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163yykpsoul.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163omcmtrsv.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163dhabuydu.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163jsxjlmtc.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163rufqvlcj.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163griirrlt.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qsczauzj.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163xfkhtkrc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ydfgdvqm.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163uafsiece.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163sqyyeorh.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163zijpwjji.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163dgxczmsk.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163poexpufu.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163hfjkgshr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163cblhxpys.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163qumixxsz.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163mkehlykp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163rutbxvoo.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163uzjajino.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163lvowwonn.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163qrlqikeo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163miuobacp.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163lilprawn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163smjkgphi.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163lavzkbgq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163mlindhlr.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163cdawawqd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qonxkeav.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163wusrkrzr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163jqkmvpuk.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163pmfpduwi.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ybqezrdm.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163hufmwvys.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163gmstywoa.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163svnjooft.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ektbzsmq.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163kouraogx.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ksnytupt.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ccwebnbg.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xaejzymt.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qopdetdb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fcgkhbby.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163feuacvux.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163iinkcrkd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163mskfoxwm.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163idjaiejt.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163yspmrcis.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163vxyezcdd.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163xsowrxal.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163adjlkagc.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163wxkrsovt.html

npx vite build
来源：http://www.sxryk.cn/163hjiajgwf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163trjgghby.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163cgertwyu.html

================================================================================
来源：http://www.sxryk.cn/163pjpomths.html

统计汇总
来源：http://www.xuanzx.com/163cibrardx.html

================================================================================
来源：http://www.xuanzx.com/163ieswfagp.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163hiworxwg.html

Python ......... 252
来源：http://www.sxryk.cn/163mqotuycl.html

PHP ............ 252
来源：http://www.aibaodan.cn/163eyxuwtgj.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163oodaevia.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163gndnogef.html

Java ........... 212
来源：http://www.xuanzx.com/163kgrvodeq.html

Go ............. 212
来源：http://www.xuanzx.com/163qhsrlyyx.html

Ruby ........... 212
来源：http://www.sxryk.cn/163vlvxpeoq.html

C# ............. 212
来源：http://www.aibaodan.cn/163datltdxw.html

C .............. 30
来源：http://www.sxryk.cn/163ikfwnqnj.html

C++ ............ 30
来源：http://www.aibaodan.cn/163nrjhcjiw.html

SQL ............ 90
来源：http://www.xuanzx.com/163rabmjkkj.html

Bash ........... 80
来源：http://www.xuanzx.com/163vmgcehbg.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163hkeyrrsw.html

Swift .......... 15
来源：http://www.aibaodan.cn/163adhbfvvn.html

Lua ............ 10
来源：http://www.sxryk.cn/163zptjcjzs.html

Perl ........... 10
来源：http://www.xuanzx.com/163owlncupx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163ktrtvuuq.html

------------------------------------
来源：http://www.aibaodan.cn/163ylhavgit.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163vtquyowt.html

按章节统计：
来源：http://www.aibaodan.cn/163vgagbmdr.html


<!-- 参考信息 -->