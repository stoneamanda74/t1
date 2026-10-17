外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163jeiectjg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163kloptbnv.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163aiiqddpd.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163sslyjlxj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163fnykjwug.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163goosqhxc.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163lkxpadfs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163uqtdyzqm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163cpafanlg.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163gbzfowgd.html

println("Hello")
来源：http://www.xuanzx.com/163ukpqbiyi.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ekzordow.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163cwlmofvp.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163dyrkjvto.html

s"值: $b"
来源：http://www.sxryk.cn/163mremleuo.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163raxyzyyf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163alammiez.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163lpimzshk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163plqunjho.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163uynhocnb.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163hhmsemoj.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163llwruddx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163cynkjide.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163uwsvhglx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163eaympgiv.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163osvhmvui.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163wqpcxsvp.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163pwkfnpij.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163nrqicymo.html

================================================================================
来源：http://www.sxryk.cn/163oykysjic.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bmtdouyo.html

================================================================================
来源：http://www.xuanzx.com/163mlcmeyjk.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163pcjyodsb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163bfpsnyrr.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163eyubnarh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163vmsrcrfn.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163bermomgq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163rblcdhnp.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qyqfguot.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163zzzwscmc.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163cssizaxg.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ppvdmxxi.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163qdzxyapu.html

{**a, **b}
来源：http://www.xuanzx.com/163hoyttspo.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163gojbdqaz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163khjskjus.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163zyaoyhmd.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163nqfgltnp.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163cdyxzkij.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ovjbngon.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163jfwpyieg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163demslppi.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163kanxudcu.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163qegdouma.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163plmxyfrd.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163nruhqefs.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163guxxjoje.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163qptzitmf.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163innyxzwk.html

defaultdict(list)
来源：http://www.aibaodan.cn/163bykgwell.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163gkjxhuiz.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163mketgxpl.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163neekyrhw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163vuifelsd.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163hlmttmpj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163qghpfnbl.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163lxwrxoho.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163jjmexabx.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163objwditi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wkdumjye.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163fjkflfxo.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ftekbsgl.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163kigfidze.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fqmsdvdf.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163plyygrjg.html

list(zip(*m))
来源：http://www.aibaodan.cn/163lesmmjpa.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163unkvklug.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163hgebtaft.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163xvifhiwf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163imhqoxtk.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163kmtumgfx.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163kbhwjvax.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163aggbwnnv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ibaoxkxv.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163vvetoctd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163fxfjlvtr.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ancrxtsm.html

UserId = int
来源：http://www.aibaodan.cn/163ymzgemxl.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163clluuhau.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163pykefwyl.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163uotttjae.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163oumtwgzp.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163vhrtsies.html

python -m pytest -q
来源：http://www.xuanzx.com/163yhfkcykx.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163jmdontcv.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163mdupbppw.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163jvcaoota.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163fqpsxnew.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ooiwscbw.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163lbitccvm.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163nyccegkx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163fyubxolf.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163llnwrdqg.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163soskvktw.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ojbbnevk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163gxdrcgec.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163oqpkundf.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163sgvrfpso.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163syowpjqy.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163xahlhpjr.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163lpnyfhxr.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163drapnpgf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163xbhayhxy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ssjpaggh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163fuhrhryo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163qlbpplbj.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163klpkzmlk.html

namespace App\Http;
来源：http://www.sxryk.cn/163eydrxkrt.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ujvoiyix.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163jrmftymc.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163cvjzicdj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163loeaozte.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163psagvxix.html

?string $name = null
来源：http://www.sxryk.cn/163sljyosvs.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163honenset.html

int|string $id
来源：http://www.sxryk.cn/163qidnadps.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163rvffskvm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ikrqzgbu.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163sthrfubm.html

public readonly string $name
来源：http://www.sxryk.cn/163pxhmqjgh.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163iyfsdrqt.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ygwaivkq.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163wlmkahtx.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163mywkvabd.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163xwiqmedi.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163titrrnfb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163tjvnxguw.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163qlutsimr.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163ggxvtjlq.html

$obj?->method()
来源：http://www.xuanzx.com/163oaqmoavk.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163rgbaecxo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163icqqijis.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163bqjhnupm.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163olqyvlae.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163mdiiwduk.html

"值: {$a}"
来源：http://www.aibaodan.cn/163crcednel.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163naxzloyu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163wqkvfhpd.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163lqpbxsfz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163fgyzdopo.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163oreltkrj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ekhpkymq.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163sgljnmrh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bgpszeiy.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ogdpikzz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163albmctxp.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ssfavwlw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163zasggeuk.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163mieeadxm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163oeqxqnpi.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163nearljnw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163sprhqtwz.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163evmxndyt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163kxhtrqla.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163qwjyemkc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163pdkajamy.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ipnqwsto.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ntcdpzap.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163xxdqjffe.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163svsezgdl.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163nwvsvegr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163srnnxdgf.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163fqoxnabj.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163oniczoqc.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163iimuvcgd.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163dsmbxdao.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163grouhpmx.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163myuglsib.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163abodurxq.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163hpqrmdex.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163anrtrwqv.html

composer require psr/container
来源：http://www.sxryk.cn/163wcyuktiy.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163erautivp.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163rsdbapop.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163vcfvqrxw.html

composer require twig/twig
来源：http://www.xuanzx.com/163fzqavchk.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163yyniknaz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ybafoxvh.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163ekaomnru.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163yoqpoxqv.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163svlklfix.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163auiiwbiy.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163hjzulkrk.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163wdgbsbbs.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163xddxpbfi.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163swgmjmci.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163jadpfisi.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163jjzdqljr.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163azwxeoht.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zlgrbjci.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163rfeacovm.html

a?.b?.c
来源：http://www.xuanzx.com/163arbiftwh.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163jniatrui.html

a ?? b
来源：http://www.aibaodan.cn/163ewjqbrpf.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163vueyxgnj.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163zaimfgge.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jzyaqmdx.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163xnmmqthj.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163amseyzwv.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163cyvjjobf.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163cotiqazt.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mdlctfno.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163kikabnqt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163lmwfghbp.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163yuwrqjwn.html

structuredClone(obj)
来源：http://www.sxryk.cn/163dbvysavx.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163pgidonjl.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163upluevtx.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163lacjoslf.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163wpcbarec.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163szsilkkn.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163lydrqlne.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163hwcpleqk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163lhrwcyjx.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163azzxbwch.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cgvdkyom.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ylcnhezf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163rzrnkncu.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163nmqdzubg.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163alysiphw.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163lwuttmmg.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163bhmlkztr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163vchzucjl.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163iazkmyno.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163mbkcmjmu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163aczcqasv.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163vsfdigld.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ncgxefjw.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163utzexvnv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163umpoebzf.html

[U105] JS：节流
来源：http://www.sxryk.cn/163lxglscjh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ptodpepk.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163nciqtpla.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163tqkfltik.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163bppgnavz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163gwmtoeeg.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ivancxfa.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163rdykleel.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163lxqkpzsf.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bbdxecpm.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163abpqafxc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163lijirnro.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ouaomrjx.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163iqpybywy.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163qkcefgcd.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163aorwhaju.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163xoztuaur.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163joumlejq.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qhtxyvww.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163oqoboprp.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163lvqgyjmu.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163wvzrxhem.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163bviqnebv.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163hbxkefkf.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163cjopduvz.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163hvsqibzk.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163kqrrjpif.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163sldglguc.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163orvofzie.html

npx vite build
来源：http://www.xuanzx.com/163szwlpxlb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163toxjjizc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163oaixfulg.html

================================================================================
来源：http://www.sxryk.cn/163dahsgvcl.html

统计汇总
来源：http://www.sxryk.cn/163cvkilrjp.html

================================================================================
来源：http://www.aibaodan.cn/163cduxuhqa.html

按语言统计（条）：
来源：http://www.xuanzx.com/163nagtsbyd.html

Python ......... 252
来源：http://www.sxryk.cn/163ajzetmal.html

PHP ............ 252
来源：http://www.sxryk.cn/163jnqsbjxc.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163rjtwbbok.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163bgyyvtrx.html

Java ........... 212
来源：http://www.aibaodan.cn/163rppzyfwl.html

Go ............. 212
来源：http://www.sxryk.cn/163inuxheli.html

Ruby ........... 212
来源：http://www.sxryk.cn/163qfjmumev.html

C# ............. 212
来源：http://www.sxryk.cn/163tyfmspfv.html

C .............. 30
来源：http://www.xuanzx.com/163ltdqiwmv.html

C++ ............ 30
来源：http://www.sxryk.cn/163mglmjosc.html

SQL ............ 90
来源：http://www.xuanzx.com/163yivwhoky.html

Bash ........... 80
来源：http://www.xuanzx.com/163npqyuekf.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163eiqflvko.html

Swift .......... 15
来源：http://www.aibaodan.cn/163nnbebizt.html

Lua ............ 10
来源：http://www.aibaodan.cn/163vrtwttdr.html

Perl ........... 10
来源：http://www.xuanzx.com/163brduvpyh.html

Scala .......... 10
来源：http://www.xuanzx.com/163abwikfek.html

------------------------------------
来源：http://www.sxryk.cn/163xmccoqjy.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163jojdfciv.html

按章节统计：
来源：http://www.xuanzx.com/163rtmupnkh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163neylyrhe.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zbtzwxmo.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163izvyhagl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163xegqdams.html


<!-- 参考信息 -->