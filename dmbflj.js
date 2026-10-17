外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163vmeetgfi.html

"值: $a"
来源：http://www.xuanzx.com/163aozpxqsj.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163vokucmxv.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163lastzobl.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163cojibieo.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163umhwhayb.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163iwdaqoyf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163dscgmvhy.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163zfyqtqoz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hvelmhtg.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163cedivffv.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163hslsqkyt.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163glosaqen.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163sykfwlxw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163tjagugwa.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163uyjojtlw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wkocaobj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ebzkulki.html

println("Hello")
来源：http://www.aibaodan.cn/163mjcazmld.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163xpbhnzwv.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163qfbunkci.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163fsleikqb.html

s"值: $b"
来源：http://www.sxryk.cn/163ppkuxmni.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163lnosyehj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163rubmnoah.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163kdgokckw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163iekiluzk.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163vbsyignj.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163xazxwqbg.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163gzskiypk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163igpboeym.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ucdtfojz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gcshvrrr.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163xexmflcx.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163fbxxvxue.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163mrvjdgjp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jkvxucff.html

================================================================================
来源：http://www.aibaodan.cn/163dlsyriou.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163pcqdkqdc.html

================================================================================
来源：http://www.sxryk.cn/163fczpsvvb.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163cwjxeimh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163syqwaavv.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163rrxdibbu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163xeygidoy.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163qppvifhd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163mawfjuip.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ghvnkedx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163iwqbfkyf.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ixczzcyx.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163uhblwhnf.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163myimzegt.html

{**a, **b}
来源：http://www.aibaodan.cn/163qimyquds.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163gjfabucm.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163kczvwppz.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163glsthvru.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163iimwgwgs.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163loyhogko.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163mybzjolq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ymhrtwlz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163cciavrsg.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163amadlivp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163zevjasls.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163xcrgryvs.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163efibwblp.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163hlhxsspi.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163tkivoyiv.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zpgomrzi.html

defaultdict(list)
来源：http://www.sxryk.cn/163ttmkmmgl.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163rrasxtar.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163usgmrapj.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163wvdiluva.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163kzmpform.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163wyuocltk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163wxptcfwd.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163cdhzspcd.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163vjiduacw.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163nilftuwu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163uxvvvxvl.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163havfvovr.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ydxindkx.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163kepjoezn.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163huodygnh.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163zbpqctow.html

list(zip(*m))
来源：http://www.xuanzx.com/163chzirgiv.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163pspdtiyv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163xyirzmzo.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163kchwhxgz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163qkmoafta.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163rrcdvofw.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163lhgyxoiw.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163jcmlfdyz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163bphobhux.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163mamousfg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163hbfcxrod.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163gwissgoh.html

UserId = int
来源：http://www.sxryk.cn/163zsrvtohf.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163bsqpzmte.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163tucdlnej.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163qizibfxv.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163rofkhtkc.html

[U31] Py：单测
来源：http://www.sxryk.cn/163qxocsjgh.html

python -m pytest -q
来源：http://www.sxryk.cn/163nsjlejqi.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163cvdtcbiw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163riygtdar.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ynkosxoi.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163yrsgksyq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163jvfvhpho.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163jxcnnrwa.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163etrtaaxv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163rimlghtk.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ufvpcstn.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163mbollqkx.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163sltboujw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163wfhefpve.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xdnsearh.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163fjtlhhrf.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163rfjshryr.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163qgvfoegz.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163gpmevosv.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163eoijlbnb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ksmxryur.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163mdxvifsy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163djoffkgq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rhsprqzz.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163wsdzsylu.html

namespace App\Http;
来源：http://www.sxryk.cn/163gmrptvpq.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163jwtksgak.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163uenmakrz.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zsydvfkq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ndxtzlxg.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163uqzrpqha.html

?string $name = null
来源：http://www.sxryk.cn/163xffblygt.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163flktgrus.html

int|string $id
来源：http://www.sxryk.cn/163pnyweaii.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163zmkvsvol.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163eaxvtmzk.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163nshpkfxk.html

public readonly string $name
来源：http://www.xuanzx.com/163dtjrbeja.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163jvlshbpu.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ilmtptlk.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163fmzxrzlc.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163sjenldrj.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163fstpxdbe.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163dkixlnui.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mjxnjvne.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163eguovxds.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163uzbckkiq.html

$obj?->method()
来源：http://www.sxryk.cn/163uifidreu.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163bfyjuvcy.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ppmeohop.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163fynzhuvn.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163sttdyqjb.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163idnelqsh.html

"值: {$a}"
来源：http://www.sxryk.cn/163retgwgyg.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163udyquvyb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163wqybcphr.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163mfpwnzho.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fneavknu.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163wfgofpic.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ssmlrnen.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ljhinncz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vkcddphm.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163qndnooja.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163vicobyyu.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163owqynamr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163cenmttzx.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ycwqvdcl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163ualmgryo.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ptgdnitq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163vdcdsdrh.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163pkjfufer.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163kjgdryda.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163rewbsfoh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163hzcyygfr.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wofzyuuf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163zizgqwes.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163znlvqrze.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163bpwafpja.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ubrrnqvv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qoiqzrij.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163acnhyied.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ogybgkyr.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rorayqkh.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ksmepply.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163hqdcnokk.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163qqpnvmga.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163gaixjgoq.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ywbrxbum.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163keouusqr.html

composer require psr/container
来源：http://www.sxryk.cn/163yrjpuinf.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163eddsgvds.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163homatahv.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163sllqufad.html

composer require twig/twig
来源：http://www.xuanzx.com/163jdvjehhu.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163zldjcwpq.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163miuraffm.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163pqorgtfj.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ujvwjrkm.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163makoteqz.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163zvenidbo.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163oupaajwy.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163qhuwwxty.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ndpprksv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163xtmbrkgs.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163szzkwwlc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163kivsbhgi.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163bqbujrcy.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ljfmdwbu.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163umbzdnao.html

a?.b?.c
来源：http://www.aibaodan.cn/163kvgdsejn.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ojzzrkhk.html

a ?? b
来源：http://www.sxryk.cn/163lhksjbkx.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ypzfbsze.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163uuudutsb.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163pfghlewi.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163wfjobfxm.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163pkhageig.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163lymjuqvw.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163pioeytmg.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hyiiqirp.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163lcqofjae.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163qpyahjjd.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163iwazhgfp.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163xrkbyhtq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163hnyjqqjm.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ldigzmaw.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163hrtkutfb.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163rrledaui.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wdunipia.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163eippcdgv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163gikunibf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163atpfhxgm.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163bkmrlppt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yveezdvj.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163umkxapzn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163xdamwsrp.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163zuybcnjk.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163dnmqwyhs.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163uzmwenaf.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163wnkngvqi.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163tdapcdpu.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163dfbuexqw.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163uggcukan.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ubzahryl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163qjxwvipz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163upmqfkmk.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163jspvmvna.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gklyqtfv.html

[U105] JS：节流
来源：http://www.sxryk.cn/163tamlewdk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163fhgwmbkf.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163juehtkcf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163eaoiwxki.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163lkdnhwew.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163orjazyap.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163aqlvmkdm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163zeeuptto.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163utqfcxzl.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kdvvaahi.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163iyaqlyhb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163zaaqdaxk.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163htygohjh.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xiznelyn.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ovehyvbp.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ojwjuusb.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163sprglmic.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qcxwvfef.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163pphjscrd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wazguvhl.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163avvjgfqr.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163yxebvrph.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163gpgrkyml.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ovwhhesh.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163mewfamxw.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163gkcoycnf.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163txomgiuw.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163qdydktvn.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163iurzoyci.html

npx vite build
来源：http://www.xuanzx.com/163ucmrvuvd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ijfocnsy.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163mkakymes.html

================================================================================
来源：http://www.sxryk.cn/163fdwwluyt.html

统计汇总
来源：http://www.sxryk.cn/163oknppkgr.html

================================================================================
来源：http://www.sxryk.cn/163bdswfdbq.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nehqxbux.html

Python ......... 252
来源：http://www.sxryk.cn/163uljaasuq.html

PHP ............ 252
来源：http://www.sxryk.cn/163brfdhpkh.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163kukpliky.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163zimyflxz.html

Java ........... 212
来源：http://www.sxryk.cn/163npzwzcxr.html

Go ............. 212
来源：http://www.aibaodan.cn/163hxjigweq.html

Ruby ........... 212
来源：http://www.xuanzx.com/163xmciyjyc.html

C# ............. 212
来源：http://www.aibaodan.cn/163ioepkawy.html

C .............. 30
来源：http://www.aibaodan.cn/163xkjakqqy.html

C++ ............ 30
来源：http://www.aibaodan.cn/163fmhalomc.html

SQL ............ 90
来源：http://www.sxryk.cn/163daezsola.html

Bash ........... 80
来源：http://www.xuanzx.com/163ytciyxzv.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163bhadssjx.html

Swift .......... 15
来源：http://www.aibaodan.cn/163eutxwqvy.html

Lua ............ 10
来源：http://www.xuanzx.com/163ulbwzxki.html

Perl ........... 10
来源：http://www.aibaodan.cn/163oqmvqzuc.html


<!-- 参考信息 -->