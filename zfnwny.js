外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163jzagwgbm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163tnwrjixt.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163kxlwpdcu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163cqpctcsp.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163gssdcezy.html

"值: $a"
来源：http://www.aibaodan.cn/163nlgbnofx.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163dcqmrcok.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163fcwhfjnq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163atdovwti.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163wyakqqzr.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163zjwyoppx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163tbixeqta.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qkwlxsza.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163jjhenmvb.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163khzaakzy.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163zxyqyuto.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163cjxseyti.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163hzpnjzzn.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163xnhfkchf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163tsnatskl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163rczrpypj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163vydsgvgs.html

println("Hello")
来源：http://www.aibaodan.cn/163ocsvwlcn.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163soxybomt.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163uqiuwpxe.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163kuncrwis.html

s"值: $b"
来源：http://www.sxryk.cn/163xarsbvff.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163izcafhre.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163eqeyukyj.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163gtpnyunv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163sgquycct.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163pelljzkv.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163biuxufgd.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kqgneihu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ovmcmkca.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qvdayabh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xewwuzwc.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163anygcmdk.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163mmtkwtrs.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163qxkssfhx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163hzhoagfg.html

================================================================================
来源：http://www.aibaodan.cn/163yqrcwfao.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163qpnhszqu.html

================================================================================
来源：http://www.xuanzx.com/163mmcoggad.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163wjfocpco.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163zeifswex.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163avxyximt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163cwawcpnj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163hlgogool.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163bfcoyrlh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163abgvxulz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163krliyqab.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163oajauluu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163rzddysqr.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163eflobtvy.html

{**a, **b}
来源：http://www.aibaodan.cn/163jruxxouw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163cigwewpz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163tilalcfo.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163yrxfcbzz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163fazfkwxi.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163oixtfjaz.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ehdblvvw.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163bmopmjft.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163fhmcolcg.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wdlwbxqr.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163dvlyzlyk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163wajnsejg.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163pfhuzmst.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xgsreelu.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163htrncwpo.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163spgijrhg.html

defaultdict(list)
来源：http://www.aibaodan.cn/163mxikqvhf.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163yegywnsm.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163iomwvobb.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ikhtbyuv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rwvblzwf.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xcddinvz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fcdjgwrv.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163snewywwy.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163amlyzmjg.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ibaotirv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163bpajimyq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163qgbujgyq.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163eduhltqd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hivwxtpr.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163raxsitkg.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ibyuxfsr.html

list(zip(*m))
来源：http://www.xuanzx.com/163lmbfqjuy.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163zjwrulnn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163rxxaxgjz.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163natklqks.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ekjeptgb.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163abnpqlgc.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163qtuaxsrh.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163frltztpg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ahomtpab.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163uweolhek.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163xklzyyer.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163dubnjlla.html

UserId = int
来源：http://www.sxryk.cn/163doqmfyct.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163sdlqqvrw.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163bkvirjyc.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163feshixej.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163dekoesow.html

[U31] Py：单测
来源：http://www.xuanzx.com/163lvwigymv.html

python -m pytest -q
来源：http://www.sxryk.cn/163gydnmvib.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163bjzwfgop.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163yevmnqrn.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163mbtvtuuf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163cdoamnwq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163jumjiaif.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163sxjlhils.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163vpwfkldm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163acyvwjlx.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163otniscjz.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163oyrtmtbt.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163vzpychyo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163pknkovzi.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163htdfdspp.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163aonmydnu.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163zwnmfqbd.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163njnqetyc.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163yademttm.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ispxdjgk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163mnjzsshm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163yrmgnbwu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163vbkaiabi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163yphhrmnh.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163hcxzfnqk.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gzjexedv.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ndhfiaah.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163iiallxeq.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163jkzgagwq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163glexkyyu.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163lblkvtfs.html

?string $name = null
来源：http://www.xuanzx.com/163ghjpcodi.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163onioveip.html

int|string $id
来源：http://www.xuanzx.com/163oofksexx.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163klghyhek.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163rddtcrrs.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163pwtiejlw.html

public readonly string $name
来源：http://www.aibaodan.cn/163tyapzvme.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163myavqpnx.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163iijowhds.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163cxzgizrq.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163xmtqdqwj.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163mzmjynbx.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163kcfrxguj.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163noqiphfp.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ajaedwli.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163lrjfjsid.html

$obj?->method()
来源：http://www.aibaodan.cn/163fdxehosv.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163nyqayaiy.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163icipitit.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163zdsliche.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163csfuqojl.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163vsidrjds.html

"值: {$a}"
来源：http://www.xuanzx.com/163rguvzzyc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zgvpehud.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ayiovdan.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163zcwhzoeb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hxesduwu.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163vjrkpebl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163rnubprdp.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163vihpycmo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ehlrbevd.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163jiswmwiy.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163fwvekktd.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163msqajswe.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ewuuioeh.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163uazfzjvl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ppdrtiqx.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163hjdwsljt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163wzhesxga.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163foaviwod.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163wdcoidpb.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163tiyggtsp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163pyowtlii.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163yqigrxar.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163dcawigmg.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163pvyakbti.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163cmgmszik.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qdbmgifq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163xyzzfmdd.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163pkjnsbfm.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163ljfyfcto.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163gvpeakik.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163lfcxqeim.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163sssxqhuh.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163eptayvbk.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163bqgeuvfv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ofxvjzqk.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163zdwuwzjo.html

composer require psr/container
来源：http://www.xuanzx.com/163omfalaft.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163tnlvthdy.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163llauriyg.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ijldajee.html

composer require twig/twig
来源：http://www.xuanzx.com/163ltelktmu.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163bahtflws.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163fpgaiygs.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163lkuspgnq.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163jerrpqfj.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163wkrwztjl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163roxwjeeq.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163iwebuarm.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ctxcfbyu.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ukiytllt.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163mrntzvjv.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163gncjgzzy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163epsrqahu.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163xwrywzdt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ibwfkhss.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163fbuzwzkf.html

a?.b?.c
来源：http://www.aibaodan.cn/163lliehfmu.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ymdzxrxg.html

a ?? b
来源：http://www.sxryk.cn/163xjqxbydx.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ytkfohrt.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163qpwezowv.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163mfyfohsu.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163uxdrppbj.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ocyddzuc.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163wpmncoqf.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163szwbhatp.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zabsfukl.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163htquvyde.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163nukpftoa.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163xjtnvpxi.html

structuredClone(obj)
来源：http://www.sxryk.cn/163lytklhqs.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163jzxrfuwe.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163klztvxqk.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163jqfblrwc.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163vgekehou.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163hulrbzxa.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163tqltnalh.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163tojzjonp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163bfpvamzt.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163cymehbhw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163znyucsaq.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163aabgcobb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163wzklouje.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163roauvbez.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163mwejpddq.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ospsfcez.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163uducndpz.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163hztvoqsb.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163wqxtcvwi.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vzkkdgxz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163kmgfirqj.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163owehcqvq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163cbbtkqbf.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163fqjpalxb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pdpukivt.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163njdhyfzd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163rpsfjmnq.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163swfeshhm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163tbovjnbh.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163hldgjzoz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163rsvnjfjr.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163yjgnyfzl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mlwlinra.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163chsocesg.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qgteobtl.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163frothqaa.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163djkelvpc.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163qaqcfcnm.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163vensxehg.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163pqqakqbv.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163eurmasif.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qutlharc.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qweqhwxx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163utjmpecb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jqfvhspc.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163yxwuccmd.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163gybyrmsn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163fyaxuftk.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163clajcmdm.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jpugnjtm.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163cydvetys.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163mfysbxog.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163tleosuxh.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zedvagky.html

npx vite build
来源：http://www.sxryk.cn/163agampvov.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163rsrgdclg.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163agwynsye.html

================================================================================
来源：http://www.sxryk.cn/163vrpkycib.html

统计汇总
来源：http://www.xuanzx.com/163dmqmlmgq.html

================================================================================
来源：http://www.xuanzx.com/163gchnjets.html

按语言统计（条）：
来源：http://www.xuanzx.com/163hfspooho.html

Python ......... 252
来源：http://www.aibaodan.cn/163jjcpoujk.html

PHP ............ 252
来源：http://www.aibaodan.cn/163eycjgkuj.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163pgbkajxw.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163psxsfbgr.html

Java ........... 212
来源：http://www.xuanzx.com/163yyvmrczf.html

Go ............. 212
来源：http://www.aibaodan.cn/163wslkpdml.html

Ruby ........... 212
来源：http://www.sxryk.cn/163xizjsvis.html

C# ............. 212
来源：http://www.aibaodan.cn/163inoicqdh.html

C .............. 30
来源：http://www.aibaodan.cn/163ppnyaezj.html

C++ ............ 30
来源：http://www.xuanzx.com/163irhweiwl.html

SQL ............ 90
来源：http://www.xuanzx.com/163pbbwjqmd.html

Bash ........... 80
来源：http://www.xuanzx.com/163utkuardq.html


<!-- 参考信息 -->