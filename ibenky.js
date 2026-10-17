外链999!wailian999！

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ebrkoqjb.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163xofvoypx.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163aybozpgy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163gaqkcmbw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163uudksqrj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rgyunlgg.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163wlsoqles.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163phowmakg.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163dzecpbfm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163mfysuebc.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163mdwilgxv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163jtkytegq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163eqzvnosk.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163tghjqruz.html

println("Hello")
来源：http://www.xuanzx.com/163rntcsnru.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163pueptitw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163exglghaq.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163xwulsnhl.html

s"值: $b"
来源：http://www.xuanzx.com/163kplhrldo.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163lqahoeqq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163jjdlqcga.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163sizzvihl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163trgycylf.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163fncweqtp.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163veeynpaf.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163cvgvjcoq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163uhuakosq.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163xukqyamh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qerdirit.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163tpmzeovg.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163kumjcfsj.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163snfitsnl.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163iecygkro.html

================================================================================
来源：http://www.sxryk.cn/163vmacapso.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163bprpbxtd.html

================================================================================
来源：http://www.aibaodan.cn/163uyobvbkg.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163mogrylfv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ktuosbmt.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163zyemmgts.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163npvymnxy.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163xpgquqid.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163jspyhhyk.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163jpiegnjc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163mufqvufy.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163spiodijw.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fpgckhnn.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jjlqugau.html

{**a, **b}
来源：http://www.xuanzx.com/163bvjuarnk.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163eaohqunm.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163mwfnyggw.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ktyiqzsb.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163uxtoiakx.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163qeagmgpq.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163wijdnxht.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163tipqxayw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ihekfalv.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ioyyxmmp.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163mljbjryt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163iqcasmjn.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ykmkpqxd.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163tgtfbcua.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163wjtgkiow.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ubwrvbwc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163navoliww.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163xrkbskah.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163pjuztnst.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163jwrznhfd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163dpprvgmh.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163utujmnne.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163tmnnmfkl.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163gfwutium.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rlzkbyol.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163zikkobpf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163howpaqbc.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163lytrivkl.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163bknohbik.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ldjwbmma.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163gjtlonsi.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163tkuhtklo.html

list(zip(*m))
来源：http://www.aibaodan.cn/163xhqxtbqz.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vlxsklxp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163vqrzonlu.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163rusyvawq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163rxrgsvzb.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163nzwxzgsb.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163nnletatj.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ktynrcfy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163rlpmpcvb.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163kwcaulrj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163epmddaij.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163eztetygp.html

UserId = int
来源：http://www.aibaodan.cn/163wgqpiotf.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163npksiipx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163uukbdwul.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ruanlhfn.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163vuvrgkqn.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163kfbxhmmh.html

python -m pytest -q
来源：http://www.xuanzx.com/163efnmwmcw.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163txtkccra.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163sohcvewe.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163gcbzcqky.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163snnaziyy.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163uptyjdzg.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163zurahcjx.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163kyelsula.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163phuxxeiq.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163sqtzdxoj.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163kriihqpc.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163bgzzaojy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163hpbkpvfy.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163qsdkdcdi.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163oemaqucq.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163sizeqoxr.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163nbxbbxwk.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163jklmmbbk.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163nnnikwsi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163etummrlq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163iypdvfus.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ldwadfvf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163insqlhtl.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163tlzdipxd.html

namespace App\Http;
来源：http://www.xuanzx.com/163zbgssxnu.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163uzlpkyef.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163hziiztml.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163tydysmjo.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163skikpoiz.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163nepxlgkt.html

?string $name = null
来源：http://www.sxryk.cn/163kbgvorsw.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163xnchzcll.html

int|string $id
来源：http://www.aibaodan.cn/163ewddhwdm.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163iccfjyoo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163vwiacctq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163muszlfoj.html

public readonly string $name
来源：http://www.sxryk.cn/163qibudocc.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163rpctcmcp.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163wxpwnmsl.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163mioqsdvt.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163esbvrecl.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163poitkzot.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163scwhxkmo.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163cwklxdtp.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ugiupije.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163pexvqyja.html

$obj?->method()
来源：http://www.aibaodan.cn/163dmgewhtn.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163wdvirqnm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163xnfesxex.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163cerhiiwc.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nfpecchn.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163zjwbnovn.html

"值: {$a}"
来源：http://www.sxryk.cn/163skrtokkw.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163avmjjcxs.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163pozyfzpl.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163clwjsolm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163lnesuobn.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163yuglqqkv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163pqpjzthb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163webnjuxd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wubuedcv.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163fgixyeuq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163nqvbzaqk.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163bozhsbvq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yxiyztbn.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163nhiihvxo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163bffjskpz.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ggdugrpv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163gnntjcre.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163hutolgtm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163pavjyftq.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163beksfwwr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163zrdbysln.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163diycmwne.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163tykfsqag.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163sqeuegnj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163qpoqtbor.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163cnglodlh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ldsgzqyq.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163yrrrcvmk.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163qgwjyxcy.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163fhouqjmq.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163wrsblxow.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163gchvmzeq.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163knpqgaet.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163nibbqqcv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163jfpxydbc.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163fehpqrgc.html

composer require psr/container
来源：http://www.aibaodan.cn/163gpswvaeu.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163tnusbiqn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163jlswxdrp.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163zfviyhfz.html

composer require twig/twig
来源：http://www.sxryk.cn/163mdtkgkqc.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163boatqvos.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163uhvxvuoy.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163wmcpnsrc.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163trxhyqhz.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163yisgroym.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163vbyyvjuf.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163unzvogje.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ydxqrfex.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163mtayyxtu.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ckhikjar.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163wyayqowp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163bcvglqab.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163yiuhxvdx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163gdicxfef.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163wyxlcciw.html

a?.b?.c
来源：http://www.xuanzx.com/163kkgkgonu.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163suiyeahd.html

a ?? b
来源：http://www.xuanzx.com/163ncldwbyy.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163gpoaakmw.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ssclotcj.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163aisawaks.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163hfycsero.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163whthmjbn.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jrscoaws.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163vemjzbdz.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xhhonioe.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163znqxzylk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163vtmjswrx.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163qmflpczy.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ljktwtmg.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163jpqsvfhl.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163sybmubfx.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163hswvcnbu.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163elgoyvlu.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163veoyqdnc.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163lumkkmmp.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163vkioqfev.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tegzcesb.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163hqmgvozy.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163iqpitbku.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163cffqnefw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163jfkgylxy.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163mljklinl.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163vqjznxlg.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163qghmtihy.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163egvuekcl.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163emesahgk.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163gdwzjris.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vsvygtyk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163vaztcoly.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163cnpwxluo.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qxfozbye.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ygiravay.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fkyqtkfh.html

[U105] JS：节流
来源：http://www.sxryk.cn/163orfzxkww.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163glvgglbp.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163whiirwdy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163sfjcwxlu.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163lypmemqp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163fitljveq.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163blhyjwpi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163izoaobdm.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kwcaruwu.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mvhuhvil.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163pvzwqwic.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163yomvquva.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163dpivjbnm.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ksmnipvj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ilziafnu.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zuychabl.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163eguojsni.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fgbzwwvc.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163qtomvapn.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jifgylqs.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163eocriusq.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163cdkppbic.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rxcsbdss.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163kfinoekn.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163fzhjrlzk.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163dysmmcqo.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163fffbpmmf.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163tdipfcjz.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163pyuokwzi.html

npx vite build
来源：http://www.xuanzx.com/163mrjjscqs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163wcgqmuzz.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163emhiytom.html

================================================================================
来源：http://www.xuanzx.com/163wtmyktno.html

统计汇总
来源：http://www.xuanzx.com/163cqyvcaqc.html

================================================================================
来源：http://www.sxryk.cn/163hejhqgzu.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163hdzurvjm.html

Python ......... 252
来源：http://www.aibaodan.cn/163goeybbwp.html

PHP ............ 252
来源：http://www.xuanzx.com/163lhoehdda.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163alynanbb.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163gzjistni.html

Java ........... 212
来源：http://www.sxryk.cn/163wymkgfvj.html

Go ............. 212
来源：http://www.sxryk.cn/163qhhszffb.html

Ruby ........... 212
来源：http://www.sxryk.cn/163onwedbdg.html

C# ............. 212
来源：http://www.sxryk.cn/163mhgnwllc.html

C .............. 30
来源：http://www.sxryk.cn/163fgyurpfx.html

C++ ............ 30
来源：http://www.aibaodan.cn/163gbuuyvkv.html

SQL ............ 90
来源：http://www.aibaodan.cn/163dzwkcgst.html

Bash ........... 80
来源：http://www.aibaodan.cn/163iumudngp.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163kysyygbf.html

Swift .......... 15
来源：http://www.xuanzx.com/163bhwvacwc.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ziogbzgn.html

Perl ........... 10
来源：http://www.sxryk.cn/163oayhmvym.html

Scala .......... 10
来源：http://www.sxryk.cn/163iewsjkzu.html

------------------------------------
来源：http://www.sxryk.cn/163pleiptvi.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163xdxgmbjm.html

按章节统计：
来源：http://www.sxryk.cn/163ojjhyheq.html


<!-- 参考信息 -->