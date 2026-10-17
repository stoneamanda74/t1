外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163maalzchd.html

"值: $a"
来源：http://www.aibaodan.cn/163qzepqydn.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163cyoqgdgy.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163jtzyncqm.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163bsjpixjp.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163avyxkrwx.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163seqriumz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hpuuqnkb.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163abzxuzdj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163dbacplgj.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163aflkcycf.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ykcsvwxj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163aktfnawu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163czlihxqq.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163savbqlqo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163xshdmlrv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163jwuybyno.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163zkrnsrld.html

println("Hello")
来源：http://www.xuanzx.com/163pmkweaun.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qaqbhzyy.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163hqexpyka.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ikusdemu.html

s"值: $b"
来源：http://www.xuanzx.com/163qpbcobjp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kmmdznfk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163idlawygz.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163rfceymki.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163eaivzrts.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qmbfjics.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ulmarpzo.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163yyhyymjx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163mcsytgfr.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163cencjnqg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163rxdjbbrp.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163nbrwqqev.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ssyuzlve.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163vtmjagav.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wwnozkmy.html

================================================================================
来源：http://www.sxryk.cn/163neeveaxz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bhbphvqx.html

================================================================================
来源：http://www.sxryk.cn/163jeohgdko.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163lsspusoq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163dfcvyuyh.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ozcfmpvu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163smswsbjv.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163zkkheajd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163oqyxbaar.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163firobxrp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163jykkradj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ymrcugte.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jmpfmcoe.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163guzrwime.html

{**a, **b}
来源：http://www.xuanzx.com/163smztfylz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jqgkpkpa.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xdkebdhw.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163torbjjgv.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163dddiqamq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wpzsggsj.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163mbxbwvac.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163utrkjjqc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163clmmabew.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163kgfzicfv.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163stciixfi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163mmdwwgmj.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163qugyjajs.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163mamysdkm.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163hewxhpsa.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163hxfuowdj.html

defaultdict(list)
来源：http://www.sxryk.cn/163dliznxhq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163buhexjjw.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163pimlyjjf.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163zipdyqyt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163gqppejet.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163fxqughja.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163mbtaxkxg.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163qbvjcyyl.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qhejcdld.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163wtrxslhu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163zrdgdadq.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163mydzdrtc.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163naeonqwb.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ijtmznit.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163rthfhpwt.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163kmglafhe.html

list(zip(*m))
来源：http://www.sxryk.cn/163jkuizneo.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163xfurfxsh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163mxhwrvoj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163bfcwnogl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ssownpoo.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163qvcsvpys.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163bugacxlb.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163gemsmtmd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163awnytesw.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163wjfzkhwd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163tdkivsjq.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163kbnpmhjd.html

UserId = int
来源：http://www.xuanzx.com/163eyfkzlxw.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163cffofisb.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163cwnpvlyl.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163deoqxdih.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163edecrhpt.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163lbhnshis.html

python -m pytest -q
来源：http://www.aibaodan.cn/163whqnheag.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163jegcuyck.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163beoydllx.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163hshkouhk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xminwpmg.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163iebiedww.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163rmedvalq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163tkdqurhx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163udpmgsgi.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163vcjjtgur.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163gyuifezq.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163rpxiyveq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163xxvgsxaa.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ofudumpb.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163gsvxiwwh.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163jkgebwzp.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163bbjzvkeu.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163dasgkkob.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qmlxxpof.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163hrgffiwp.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163eqnxzjlt.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163cvqyxuyb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163nrjcqzad.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163dmxynksa.html

namespace App\Http;
来源：http://www.aibaodan.cn/163itmeimqo.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163lhcbmmla.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163sshvmgud.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163kkyczjdr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163okxupwnz.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163fltqhiqs.html

?string $name = null
来源：http://www.sxryk.cn/163grsvkzvl.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163mxxyuzmq.html

int|string $id
来源：http://www.aibaodan.cn/163uxcbjbib.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163brvplawr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163zsfzyefs.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163bumdincq.html

public readonly string $name
来源：http://www.xuanzx.com/163daowvdcb.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163gdeyecku.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163dqdxykao.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163enqxizgz.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163iemfdrug.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163pfxqsxmw.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163xrtjhilr.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163afdnvhpo.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163gfrznblw.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163usqjrvms.html

$obj?->method()
来源：http://www.aibaodan.cn/163mmlciwhv.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163oubctyie.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163akicigky.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ofacuqoj.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zffhuugj.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163dvkpszrs.html

"值: {$a}"
来源：http://www.xuanzx.com/163ypxnudaf.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ayisvtpv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163irfoegok.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163gpzknlnc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163quuavzoi.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163bnyxebdf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163xrlmdoex.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163azhkdckw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163spxxlibv.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163hyosoydz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ibnnupsk.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163iqlffxzn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163zcaqjiqu.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163yjfqmuxi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163scpfrhtg.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163srdimazg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163fvairspt.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qvjbocen.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163onthfrns.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163fkjmluio.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163iwgagqit.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163gwdukzaa.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163rzfrogvy.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163llrjqaoi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163skhhbcjr.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163usfyppoh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163yubjmiea.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163vgyswwmw.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163pjfcyihi.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163zgbrqrdj.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163hrhgkpwc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163gejwokog.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163setsfvtl.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163fgdwpzyf.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163piicwrcx.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163ftubsyfn.html

composer require psr/container
来源：http://www.aibaodan.cn/163faqkxfun.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163sbybdyjv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163zpfilicu.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163xmpdlbqk.html

composer require twig/twig
来源：http://www.xuanzx.com/163ottcvhus.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163fbkbcvbo.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163qtseqfod.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163lpjahhnl.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163tvsqnfpj.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163pptwjtgp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ixvjkxac.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163lcdhfbth.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ohtmcawb.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163aroveiba.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163mnlyufsl.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163uoglhrtf.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163izzjjqrl.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163zinscdiv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163shsoymmi.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163rbxeiwho.html

a?.b?.c
来源：http://www.sxryk.cn/163rxfmyzmg.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ziehjmwp.html

a ?? b
来源：http://www.aibaodan.cn/163gidxxlan.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163hetzbmuf.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163peqjywrv.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163wugkptno.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163nufvkklo.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163yhxwjtoa.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163lhifrucu.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163cmfqixzi.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mnqipcyc.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163iepaibsd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163bvlhbgbx.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163fwdvzins.html

structuredClone(obj)
来源：http://www.sxryk.cn/163jfrzmbby.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163caatujdd.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fjfmiwul.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163gaxtppfw.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163dxqllzao.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163clysjyzj.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163nnudvuwl.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163jzffqmjf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ndbcwocq.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163cbvrtelx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ygriomss.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163pkhvnmeg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163zcyrnkoj.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163knuoswgz.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163mobfvtuk.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ceklcvca.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163sixsqpig.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163owffrgqu.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163uefdjzqp.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ohwuiasl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163roxfuchz.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163nrpxwyxl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163szmjhutv.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ytxeqzbz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wrlimjqz.html

[U105] JS：节流
来源：http://www.xuanzx.com/163dvjtctxw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163euajujss.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ahpbnqzc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163khemqmnx.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163hhrzapjg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163qbwfqjoe.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163imwiilhb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163rryyhnvp.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163kkhxfxjn.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ggszsmfr.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163rdlobngs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163acbmgsty.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163xkrdnlym.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163nitmmqvt.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163mgpguzdi.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163lwfxvwmi.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163upxkgtkr.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mgltgvto.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163zmviijtt.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mfkzmsgw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163zsfstbop.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163zusakjik.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163bqebqiqx.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163vtmltkkv.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163zvmjepbc.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tubkqdxd.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163zhjmcryp.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163wlnjvsnh.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ymcvtmry.html

npx vite build
来源：http://www.aibaodan.cn/163fujrhaps.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163whsvllqy.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163dqwsqxts.html

================================================================================
来源：http://www.xuanzx.com/163mwdfsnlh.html

统计汇总
来源：http://www.xuanzx.com/163qimkkejj.html

================================================================================
来源：http://www.aibaodan.cn/163ahlyrfwm.html

按语言统计（条）：
来源：http://www.sxryk.cn/163tchndale.html

Python ......... 252
来源：http://www.aibaodan.cn/163ygcfsfdl.html

PHP ............ 252
来源：http://www.xuanzx.com/163jtagnypl.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163udbjhohw.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163bjdockjg.html

Java ........... 212
来源：http://www.sxryk.cn/163moirmbky.html

Go ............. 212
来源：http://www.sxryk.cn/163lvwgyrfu.html

Ruby ........... 212
来源：http://www.sxryk.cn/163bimmncrp.html

C# ............. 212
来源：http://www.sxryk.cn/163rpcpnnrn.html

C .............. 30
来源：http://www.aibaodan.cn/163qsktiooo.html

C++ ............ 30
来源：http://www.sxryk.cn/163bfvnzfiq.html

SQL ............ 90
来源：http://www.xuanzx.com/163ottixmgg.html

Bash ........... 80
来源：http://www.aibaodan.cn/163gumaavui.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ckhxzioj.html

Swift .......... 15
来源：http://www.xuanzx.com/163cumzqjia.html

Lua ............ 10
来源：http://www.xuanzx.com/163ixxoetzu.html

Perl ........... 10
来源：http://www.xuanzx.com/163vcevvnrl.html


<!-- 参考信息 -->