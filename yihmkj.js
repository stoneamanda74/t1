外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163vuyrgjsh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ajgfctdc.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163bsdvalai.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ocacuyih.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163aunjfqbt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163njtmnhra.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163aeuaiycn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163snlnvjeb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ogrtvocv.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163hnxxjqzh.html

println("Hello")
来源：http://www.xuanzx.com/163bngjlbdu.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163jxefhosr.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ybbveksq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163rnbcvsqg.html

s"值: $b"
来源：http://www.aibaodan.cn/163nkzjyavg.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163txiexziu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rqyogdvw.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163jqinurtj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dsaireqb.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163jsiamjrf.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163wlsmgsox.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ajaovuwz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ekstkjjw.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163illpwfot.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163aqmhtrqy.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163zfewnqml.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163auyibkog.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163tgoaztzy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163merjywyn.html

================================================================================
来源：http://www.xuanzx.com/163jcrdwbci.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163eebbvgda.html

================================================================================
来源：http://www.aibaodan.cn/163twsvjfta.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ncwvjiyo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ryetyyvk.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163gvtbpjgr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vbibqzfl.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ymvpbide.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ddbpfvtc.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163tzpalqow.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163fcdycohw.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ahvruiez.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ozixkwdv.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163cfuhrydv.html

{**a, **b}
来源：http://www.sxryk.cn/163wsgprwsk.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163krfeoiwg.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ysssmntq.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163onglyhxh.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163rezmpaju.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163gvzdczrg.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163drvipftx.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163mmzucpik.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163gpxaqcnz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163shicapag.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ptjstnxe.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163tafnkeoz.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ohgswryc.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ebbtlrkf.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163wegcnili.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163xiaskiav.html

defaultdict(list)
来源：http://www.xuanzx.com/163tnltdofi.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163hbrqjmyk.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163jntjdqpq.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ooyxxmrs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163kolrwokd.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163mlpsrluu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163cayqbdtf.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163natyvbja.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rybfzxpi.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163kjlalywe.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163avckycrb.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hygxzkes.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163exfowtyp.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163setcoewg.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163hhqhmgtu.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ffphrnmu.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ykzzihks.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163wwiwfhwd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163syllnlim.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ygxgadds.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163kdsjvjob.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163hrhcfmrk.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163snxmawpg.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163nmqtbhiz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163wvzvsyjx.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163yahbhtil.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163nugfkyva.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163esekjmwl.html

UserId = int
来源：http://www.sxryk.cn/163uglirkzq.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163jpkfgbfg.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163tmpkmbaa.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163zahzksmz.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163mvramqgh.html

[U31] Py：单测
来源：http://www.sxryk.cn/163nyiwtpdn.html

python -m pytest -q
来源：http://www.sxryk.cn/163qlkcvyru.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163anlsphdz.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163opgspdfy.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ascqgkxn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163sljqrnsh.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163kxkzgnuw.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163kbtawxxf.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163bsvceorb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163leiahtxg.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ycqbuhyo.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ztdhztsb.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163khvhksmw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163vzredxxq.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163oraxyvuy.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163qrxdcvdw.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163fkecawyt.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163syxooydc.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163cokhghmr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ldayvepv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163sqtydvus.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163dxmvwrtp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163yuuwybeg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163cmppqmzn.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163xwlljejt.html

namespace App\Http;
来源：http://www.xuanzx.com/163wzycjcgh.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163rmelxels.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163onruneiz.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163odndqqdt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163sivkviaf.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163jfthvtcc.html

?string $name = null
来源：http://www.xuanzx.com/163rpptftap.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163jkpdsqza.html

int|string $id
来源：http://www.sxryk.cn/163xptyvhmh.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163qziccefl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163yzxravcs.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ypvsjsmg.html

public readonly string $name
来源：http://www.xuanzx.com/163ozijncze.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ngnyuimm.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ioufggxi.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163giujrbxl.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163nojdyjje.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163rklbkybd.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163pegeadkc.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163tlexuhrc.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163zmwicfjd.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163imisbgvv.html

$obj?->method()
来源：http://www.aibaodan.cn/163nxkmzrkd.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163eggtlvpc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163luvexjpl.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163efxvebzm.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163finaderd.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163cmtrgytr.html

"值: {$a}"
来源：http://www.sxryk.cn/163qldugpqf.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163iudgrvpm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163coigjncn.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163vrabkcht.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dexsaayh.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ryttxnvx.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163wbfrokli.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163kgljlhvh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163sorhcikz.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163bteniqoz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163chajgwmq.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ngtoxuns.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163zyndavwz.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163veyhzsop.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163uixmaxoe.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163eulquenc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163powznwhn.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163xakezfrl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163iffvkion.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pfcyljrg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163opikqsog.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163luhcnvti.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163nhyxfrre.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163wwiesjtr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163unplwbbg.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163wdsedeof.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163fsdmltmv.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163gzgkvejg.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163paxwwcux.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163seaomyii.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163maorbaat.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163iastyukv.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163novrqyji.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163lrxfpmlw.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163fvgzymee.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163gbccgubt.html

composer require psr/container
来源：http://www.aibaodan.cn/163vheytwdz.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163yiyqbfbl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163utverlmn.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163bkqsnjop.html

composer require twig/twig
来源：http://www.sxryk.cn/163janfwkrw.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ycbfkoli.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163gvpwygus.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163zkivtbyt.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163zlizwkxi.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163esxatxwn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163rjdkitrt.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163auhvfyvj.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163tznduyrc.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163rgtgukoz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163nfkybbsk.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163lmefgsgu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163jxlbfxcv.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163nojvpshu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163lzlzaasq.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163chcdqcqh.html

a?.b?.c
来源：http://www.aibaodan.cn/163tcjpethe.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163dajjryzv.html

a ?? b
来源：http://www.aibaodan.cn/163fvduzmur.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163gqvemuoq.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163byrkmtzg.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163aeigsgzz.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163hyzgsydx.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163jkdluarx.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163qtlzxamb.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163yslooxtf.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jxusooqr.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ykuyssvp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ehoognnh.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163mckqgaqh.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163lenhzeht.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163khxtyjob.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163jzyqchkq.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163qqsqwryb.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163xgpgwusx.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163aqishict.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163trxkjkye.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163egrmitwz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ziogawsy.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163cvhslbvs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163isylrrdg.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163axufctix.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163fxnsfxjd.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163gpvzaubc.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163bnoqblnr.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163qncaisei.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163aimsjvcl.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163mnjlzidq.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163jaxdglaw.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ceqcpgrv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163sgzpqylp.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163urngvwfv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163aqamkycc.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163jgkrsmet.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lejiwhjo.html

[U105] JS：节流
来源：http://www.sxryk.cn/163wtiezgrx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163hxethigy.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163xhhwawiv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163wibppabw.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163whnyhlfo.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163wyoovwvg.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163seazieoj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ofqykits.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163rdjiszuc.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wifwgsch.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163pgzxtwjd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163yvebffvz.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163luiihmwd.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163fztfdsbf.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vaypvcko.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bjrzemxc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163rshlhher.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qfapsqit.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163cvuxegja.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163krwaxovk.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163xmsilzzv.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163fkrwinsn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ksumkufc.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163xqosxfnw.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163bepuwjrt.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ldjtzadc.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163yzyukjjg.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163fbaqlggx.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163oibbknpl.html

npx vite build
来源：http://www.xuanzx.com/163qvtqkqzh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163vuzqlimn.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163alrxtnkh.html

================================================================================
来源：http://www.xuanzx.com/163xdkiltpk.html

统计汇总
来源：http://www.aibaodan.cn/163prxfqtka.html

================================================================================
来源：http://www.xuanzx.com/163mqrfwuar.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ebufotfk.html

Python ......... 252
来源：http://www.sxryk.cn/163lrhnhdrg.html

PHP ............ 252
来源：http://www.aibaodan.cn/163jequzdva.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163dmphenlq.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163bagnkxgi.html

Java ........... 212
来源：http://www.aibaodan.cn/163rcijxvjn.html

Go ............. 212
来源：http://www.aibaodan.cn/163jqpcgptn.html

Ruby ........... 212
来源：http://www.sxryk.cn/163hgnnqwjk.html

C# ............. 212
来源：http://www.aibaodan.cn/163sfbysplw.html

C .............. 30
来源：http://www.aibaodan.cn/163cazdylnt.html

C++ ............ 30
来源：http://www.xuanzx.com/163gwuzasvx.html

SQL ............ 90
来源：http://www.sxryk.cn/163dlzcjjzd.html

Bash ........... 80
来源：http://www.xuanzx.com/163olhdukew.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163qdkqpnag.html

Swift .......... 15
来源：http://www.xuanzx.com/163uzzhfbte.html

Lua ............ 10
来源：http://www.sxryk.cn/163rchvwvsy.html

Perl ........... 10
来源：http://www.sxryk.cn/163glwfmlvr.html

Scala .......... 10
来源：http://www.xuanzx.com/163nbsdmwyp.html

------------------------------------
来源：http://www.xuanzx.com/163ecudccqe.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163purhfkvh.html

按章节统计：
来源：http://www.sxryk.cn/163zxzhhrxe.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rjmmkgud.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tutcyazt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163iohvnipp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qnwhybwk.html


<!-- 参考信息 -->