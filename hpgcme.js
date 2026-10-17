外链999!wailian999！

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163lffoqkrf.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163efreypcp.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ogzwxxsg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163rsblvgtu.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bamunwja.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163bsinkpvu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163tbcvwium.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ayifefzr.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163spdfgaik.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163xznvzojo.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ntqbcpae.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ygmyszuf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163zujfyyqq.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163jdzthihi.html

println("Hello")
来源：http://www.aibaodan.cn/163kotygorp.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163zhqmrgvf.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qimtkluu.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163jiulukjd.html

s"值: $b"
来源：http://www.sxryk.cn/163aejaaqht.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kwmcvmuf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163rpzmvrsd.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163owkmugeh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163qbxeqkzz.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163natfgzal.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qvftcune.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163wntssnru.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163tbimuwjh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163iyjvwokk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ywqqpazb.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ddwyvdsz.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163jtwfmbpm.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ltkvscbd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163dxzftzvh.html

================================================================================
来源：http://www.sxryk.cn/163hxfgnknz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163duclpkqw.html

================================================================================
来源：http://www.aibaodan.cn/163yzgppdri.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163hmnfcoku.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xkwulquz.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163pwkkwvfe.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163dqdeqfsx.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jzdfjwfv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ykgghvbd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163milinjnf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ypnfcnxc.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xtngvalx.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163phtxltyw.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163duzyceam.html

{**a, **b}
来源：http://www.aibaodan.cn/163nfeuwpsk.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163rfhcuxuh.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163kpxaqeiv.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163mxtdfbne.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163salhqmbz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163wqtnamoc.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163blozyeea.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163zoqvrvtk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163tthndmxd.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163kdflhbfa.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163tarbonxs.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163oenwwtqy.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163htbstnzg.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163avxwrtva.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163yofmcdon.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ygfihjsp.html

defaultdict(list)
来源：http://www.sxryk.cn/163lwjeeltp.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ktlfemwz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163gdyagxhl.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163fxluwltr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163onlmuyph.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163rkzyvurb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163mdbnpxbs.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163dtzrsbkd.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ruzhwdzc.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163nutucafh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ibdjighj.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163aaxkoxwj.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163omwwpcmo.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ninbdofg.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163mtligsme.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163vrenvdiu.html

list(zip(*m))
来源：http://www.aibaodan.cn/163canwtodw.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ihclckcy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fxaszmvs.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ucujiady.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163kpxitnsl.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ikaztrgp.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163secrryjv.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163goyseuae.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ppdhlado.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163jjwmluyr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163lxvwvevx.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163fhcpzrvm.html

UserId = int
来源：http://www.aibaodan.cn/163batrfawp.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163pipthfid.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jaxdpmpe.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163iimlubdb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163fptotlvt.html

[U31] Py：单测
来源：http://www.sxryk.cn/163mnyoiezz.html

python -m pytest -q
来源：http://www.xuanzx.com/163wpkbqoqh.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163poynockx.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ooxupgmz.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163jddamwrm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163iklqqimz.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163pnkbcxco.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163xkvsyuse.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163dmqocrew.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163iuhipdua.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163wsbygalt.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163tqbuxhwo.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163fodnythv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163bndeedhc.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163giawixmn.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163axxpests.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163hxjutztv.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163xscusays.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163foynzyhk.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163flxbhoqc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163xfpifscm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163zamouohu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163yzlamfhq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163kjbrddxk.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163dsszshzq.html

namespace App\Http;
来源：http://www.xuanzx.com/163irnsekxr.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163qhauoukl.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163wowzhhtn.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163srchyqga.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ecmotwgz.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163judnakey.html

?string $name = null
来源：http://www.aibaodan.cn/163vcpfvgzx.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163kknqaein.html

int|string $id
来源：http://www.sxryk.cn/163txkfsoqy.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ykpccivb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163idtoxbyt.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163oiirdrkl.html

public readonly string $name
来源：http://www.aibaodan.cn/163icwnugwm.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163fwbmmhtt.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163gpzmzqes.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163tcotzfsi.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163zzxegdqk.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ngfgbrca.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163tarbxejy.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163qhdtszpr.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163qcqbqose.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163tmpqukgz.html

$obj?->method()
来源：http://www.aibaodan.cn/163jqdrynhw.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163acflbxdj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ligumceq.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163udkixzaj.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zpxtftvm.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163cbwekvlp.html

"值: {$a}"
来源：http://www.aibaodan.cn/163shdjognu.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163mwwjxcix.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ddubplnn.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ktwbxyvk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163prbnahuz.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163wfnmxfjp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ppojrfsp.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ywypiykr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163phcztzpq.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163zhhmygjl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163ywdcmkdd.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163fbnlzwgy.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163bbzhfyld.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163omiabwne.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163azilklhq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163cvlxgynh.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163erpquxfn.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163gfdqfqre.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163sapkeaaj.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163lplqsfwz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163vzmnvwur.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163kopctwyr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163qzzbrznv.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163botrsnpd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163qohpadni.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163bjmnhsob.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163bjwlnsss.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163mcwfmfcn.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163qqrcbwze.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163omhbcknf.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163puhqxxmg.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163oqdtsdwk.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ugcyqcmt.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163gihlhqoh.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ghdnnqju.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163dusoeerx.html

composer require psr/container
来源：http://www.aibaodan.cn/163lkgilpgk.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163ibxzzgow.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163hlgwfgwc.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ubvvahqa.html

composer require twig/twig
来源：http://www.aibaodan.cn/163mbpqidxo.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163qvbcvhag.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163wuoyuhhg.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163fwfcmjft.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163djgaqbys.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163lehuibuv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163vfklrapm.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wyrbqiiv.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163wwapstdf.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163sxhoarps.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163psefjfoy.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163hqlvthub.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163pifiisit.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163dkpspdba.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163vzyytdok.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ezmkihhw.html

a?.b?.c
来源：http://www.xuanzx.com/163ctjnhikp.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163godjcglk.html

a ?? b
来源：http://www.xuanzx.com/163vddrqzpc.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163bhoeigfx.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163vzpfwwoh.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163yevagrhu.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163dxedmdzd.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163hcyiurmf.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vnfkvkqm.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ktsctawn.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rwfkhgqi.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ywcikmvf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163zwoddzfa.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163qxtsfpnu.html

structuredClone(obj)
来源：http://www.sxryk.cn/163gqdxkqlg.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163uvsqnkbh.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163mefxorpy.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163dtpieorv.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163glggbcvy.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163mdvjqonc.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163nkcptpxd.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163pgwyshab.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qhqzklph.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163mhmkljve.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163aycvojco.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163slgruhxc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163xouerqzo.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ihttvtzw.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163vvzzbnmo.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163zrqpibve.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163pobnmgdo.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163apttqxez.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163mfrrswgo.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163fkeuvjel.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163gygfldsq.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163izcpdrue.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ygjycxnx.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163jobhmxra.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163odkxomdz.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163kpiwnves.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163gxocauax.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163nnmcervq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163bbmtpsxu.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ksexmeoq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163mpbpakdf.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163pfzlhllx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163qnfxnboy.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163udjqwzyz.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zjwirkal.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163diwhfvkf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163hnwkfmnf.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163coaeprvt.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163lolssuzx.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163urpwxlle.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ftbuqsww.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163prrgbrfy.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zqbnsrai.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163draeltrp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kisiqbah.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163blnilmgn.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163knbvbquj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ixbffstt.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163tyurxnat.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163yqwcjjhe.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mvazhaxk.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163sbnucxkc.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163zedqnllz.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163xcscwufx.html

npx vite build
来源：http://www.aibaodan.cn/163rjlsbrzy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163plujnewg.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163vmpvhmoo.html

================================================================================
来源：http://www.aibaodan.cn/163jfkwsygn.html

统计汇总
来源：http://www.aibaodan.cn/163bnyiyyxv.html

================================================================================
来源：http://www.aibaodan.cn/163lricniuf.html

按语言统计（条）：
来源：http://www.xuanzx.com/163fohlduym.html

Python ......... 252
来源：http://www.aibaodan.cn/163dbybvgkn.html

PHP ............ 252
来源：http://www.sxryk.cn/163iiepfqlh.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163lfqqahbx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163eqzjmcka.html

Java ........... 212
来源：http://www.xuanzx.com/163ktoxfcha.html

Go ............. 212
来源：http://www.aibaodan.cn/163gfsknyuu.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ozvnemje.html

C# ............. 212
来源：http://www.sxryk.cn/163joplqowx.html

C .............. 30
来源：http://www.aibaodan.cn/163hvroewpg.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ebvlmslm.html

SQL ............ 90
来源：http://www.xuanzx.com/163tbgwxgph.html

Bash ........... 80
来源：http://www.sxryk.cn/163ydomrblo.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163durbgecw.html

Swift .......... 15
来源：http://www.sxryk.cn/163mxjohfnv.html

Lua ............ 10
来源：http://www.aibaodan.cn/163sdcdymdw.html

Perl ........... 10
来源：http://www.xuanzx.com/163hbktwgqa.html

Scala .......... 10
来源：http://www.sxryk.cn/163mtuwcgyb.html

------------------------------------
来源：http://www.sxryk.cn/163thppnnnn.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163sbmyqqak.html

按章节统计：
来源：http://www.sxryk.cn/163odohenxe.html


<!-- 参考信息 -->