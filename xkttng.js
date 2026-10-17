外链999!wailian999！

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ykmjljcb.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ynnammoi.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163nriafhch.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hnauyvqw.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ajqagzxc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163gkshubws.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163uymjbgol.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163jdupuusa.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ktpfiqrh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163uawibyxw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ijwrqirs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163nxdvqhyq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163aoxhngps.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163hwscjejo.html

println("Hello")
来源：http://www.xuanzx.com/163pjgkotga.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ijxqoijl.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163cdmfawyc.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163curncfxo.html

s"值: $b"
来源：http://www.sxryk.cn/163vwpgpafp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163plvhgwnb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163vwcffnws.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163fithogax.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163kbqqkrct.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163dtoffjtd.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163aohwgxgv.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163rsctwcqc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163neoiymds.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163wxtdepxs.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dwsjhygl.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163rwqvjyth.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163trqcncsn.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163tfvhhzru.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wuvnzcug.html

================================================================================
来源：http://www.aibaodan.cn/163temygzrs.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163szydybtq.html

================================================================================
来源：http://www.aibaodan.cn/163itmbvvvz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163hpjhfvsu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163zlazddgp.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163hopbkqix.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ijnvptft.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163jjuboiqv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163jnhnrakg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163sqpslkci.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ouuplkgj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163mksikhhi.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163izmvkuda.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163hoxhpfmo.html

{**a, **b}
来源：http://www.xuanzx.com/163rtyvlqam.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163itsgspaz.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163tnavtygd.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ntjwmjhp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163hherjozl.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163esboyeql.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hiutsfjv.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ldrrskuy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163zbscynqq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163bkkrlwza.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163dnarwnof.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163uiijlkak.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163xfspydjz.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ointbhip.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163hcvsksfp.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163dywcbmcb.html

defaultdict(list)
来源：http://www.sxryk.cn/163chsmepmq.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163kqmgvtqq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163uvssogqb.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163yshrlmel.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163gialexuf.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163xqrunmmk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163itmtlzeg.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163jgmoqvpj.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rblazwwm.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ydfghflg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163lxfttnmp.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163awaguoru.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163godkwgpl.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163qukgbcnh.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163xefbialx.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163rpysihxr.html

list(zip(*m))
来源：http://www.xuanzx.com/163umeoedon.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163kdzxqvrm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ixcqkcen.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ptpynfbt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ntvpkocz.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163dyhcpnak.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163blnylsjv.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163keprgusu.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163wmycpsmw.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163bbfnmmqv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163xugnczkc.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163dwykuegw.html

UserId = int
来源：http://www.xuanzx.com/163icntptdx.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163sbsmtiwv.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163uelamphf.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163zitiacqe.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163qwxguhhi.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163bwjahaoj.html

python -m pytest -q
来源：http://www.aibaodan.cn/163rksotoxa.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163cpytfqwh.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163dmbqhdrl.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ukliahbe.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163bexmycrp.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163awatqzes.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163podzylhp.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163cgreluku.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163ywjxqolo.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163mgznnskp.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163jtaazhvy.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163qxyuirrm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163aavilmhh.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163oablvapq.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163yjtolflk.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163yujuxobq.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163bdvmbwno.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ncmecsxp.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xqataohr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163hruzyjtv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ackydaqj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163sdxsgbdr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ykpydaox.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163dcbtcyfa.html

namespace App\Http;
来源：http://www.sxryk.cn/163kuvcolyu.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163evnsfkgu.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zfrlixel.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163xrovrsvz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rzhzsngz.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163dpwzouqv.html

?string $name = null
来源：http://www.sxryk.cn/163vwzvoayz.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163mcptvlyu.html

int|string $id
来源：http://www.xuanzx.com/163bxoiwmbv.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163cfoiulnx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163vnxvuuka.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ougaqjoc.html

public readonly string $name
来源：http://www.aibaodan.cn/163krviclew.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163gwhsbtxy.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163usxkgcau.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163gwncuwwq.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163sqwswnoq.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163trumiymj.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163abfmvcvv.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ushhyqww.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163bhfcyoqa.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163iusojrgh.html

$obj?->method()
来源：http://www.xuanzx.com/163dwstoloy.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163hzwhqixr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163hljvstur.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163xnlfdajh.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aoekpngo.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163jfdfkrkp.html

"值: {$a}"
来源：http://www.sxryk.cn/163jjfymqeg.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jcnvthfa.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163errpjghi.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jrsethlg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qmktpyge.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163fbqugped.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163brulncrg.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163pcbptaia.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mwypsfqx.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163isjpbtvg.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163frpzhbnm.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163cdmxhcvv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ipugjsvv.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163iozvjnus.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163zhjdiybb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163kwioaxcw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163kiikbzbx.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163vssecwyw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163jgkcmidn.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163taxsmdic.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163bxdewmcm.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163nawsoiiu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163aqgcljlc.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163jxjkafmk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163qsgffzha.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ovovfxey.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163vnedhulb.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163kevyvxgi.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163fpnpmino.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163fzxwmpiv.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163fosdagpt.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163iwcvasdw.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163djcijmhh.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163qiufrxrd.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163vjhtofsn.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163jrgbmvnj.html

composer require psr/container
来源：http://www.sxryk.cn/163iadmetdn.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163lxsmmkcj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ggzkeake.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ofgmubhe.html

composer require twig/twig
来源：http://www.xuanzx.com/163ogwmqzhx.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163phwxekpf.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ecfeluee.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163eypyefac.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163akqpokik.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163tdkmuzxb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163gfanawfe.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163wlkwfphw.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163hhnmwrjc.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163knalzgws.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163grekvryy.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163uljkegyu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163kdllexcq.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163zkdpybtx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163mirbcxgn.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163lqbjndmt.html

a?.b?.c
来源：http://www.sxryk.cn/163ezprirlg.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163fuajyvxv.html

a ?? b
来源：http://www.sxryk.cn/163pvgjerjs.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163hdmzxinj.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163avpxmmry.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ogxcwzfj.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163sjzbgcji.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ilmlayth.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163cgoydofz.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163pvtoqhgj.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163evasawvv.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163kbmsnknx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163bkmcokyq.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163fkqeutjp.html

structuredClone(obj)
来源：http://www.sxryk.cn/163vyrufvly.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163pdeuuxvl.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163jeumzgpe.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163mgipvrsf.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163jrpkgsmj.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163shcyvcxp.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163qaztpeut.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163cciaxpul.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163epcdmqdc.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163tifeokbw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163stmyyjgl.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163zmojrcoj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163qzeqpirx.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163smzrmdog.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ohomqhmy.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163gefodomq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163rpwgywkw.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163yuuqvbin.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163zpfkkmuz.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163xezzpdkf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163yxadveec.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163fockodwv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163lvyithxt.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163lsxpdovw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bgzjleeg.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163djmczgwz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163rhqbzljb.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163mxqwqqtg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163etrmvdxj.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ivefeeao.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jdncsfnx.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163rkkkwjat.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163nbrwhsvj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163cwkigdzp.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rdzifesb.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163hsuvztui.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163vnmgbfsy.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163paepiuzg.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163dvygrimt.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163wicuvraq.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mrbspdfm.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163knphosda.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ypoxsbya.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163gpffbrfv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ybcsjecl.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163qvesurmy.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163eqmwxrod.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163xktxsbza.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163eyqrivxa.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163tiglmfjc.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163bcnpfngz.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ccgxftoa.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163pgtjmuto.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163wxcnsbsw.html

npx vite build
来源：http://www.aibaodan.cn/163edgxvyaw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163wxlkqpen.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163scsvikll.html

================================================================================
来源：http://www.aibaodan.cn/163mzvxhyod.html

统计汇总
来源：http://www.aibaodan.cn/163zgeqqdjk.html

================================================================================
来源：http://www.aibaodan.cn/163pwxrpcyi.html

按语言统计（条）：
来源：http://www.sxryk.cn/163bevxtcdc.html

Python ......... 252
来源：http://www.aibaodan.cn/163wezixugs.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pkwsksyi.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ipwppkkg.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163bweamzse.html

Java ........... 212
来源：http://www.xuanzx.com/163hreuiloi.html

Go ............. 212
来源：http://www.aibaodan.cn/163padkqdxt.html

Ruby ........... 212
来源：http://www.sxryk.cn/163swdiwzeg.html

C# ............. 212
来源：http://www.xuanzx.com/163dweydbhe.html

C .............. 30
来源：http://www.xuanzx.com/163rthwsloo.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ftnrfvnj.html

SQL ............ 90
来源：http://www.sxryk.cn/163zrtuiqqt.html

Bash ........... 80
来源：http://www.aibaodan.cn/163tdmpwrcj.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163qgzujkzy.html

Swift .......... 15
来源：http://www.xuanzx.com/163gwxqbktu.html

Lua ............ 10
来源：http://www.xuanzx.com/163kjeoykhl.html

Perl ........... 10
来源：http://www.aibaodan.cn/163xmisywmy.html

Scala .......... 10
来源：http://www.xuanzx.com/163icxagwhu.html

------------------------------------
来源：http://www.aibaodan.cn/163knmxxzhy.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163fdmtynkh.html

按章节统计：
来源：http://www.sxryk.cn/163wiqtuart.html


<!-- 参考信息 -->