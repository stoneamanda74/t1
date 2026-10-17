外链999!wailian999！

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163tyfskgnx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163rfrnkgql.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163zugvshfn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163zitgiabb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163uugrxkhb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163bsggzjam.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163nkitcpeg.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163zszqzuki.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163gekaszml.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163hletplza.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163iqzukjee.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163pqlsnetx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163nhuflhnz.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163sanxpmwg.html

println("Hello")
来源：http://www.xuanzx.com/163fdfgqzbu.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pcambcjw.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ygimwcqn.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163stwoxxaf.html

s"值: $b"
来源：http://www.xuanzx.com/163brpbedgk.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163agtjwgip.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ipdufnsd.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163wilhtndi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163pqywdist.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163bgdvlegk.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163twvmtlqm.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163uttmloij.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163xwxzemee.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163xukvzscg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163gnplncoy.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163mqxtpozl.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163vdgozeza.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163kffsxiqr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163dfiehdov.html

================================================================================
来源：http://www.sxryk.cn/163dpgvftiy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rhoudyji.html

================================================================================
来源：http://www.sxryk.cn/163ybafrsly.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ioripqvh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163nenwdnca.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163xwzorthp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163yythftyc.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163bgewkwgo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163emvgjaej.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163meuwetyq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163fhfulath.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163lenmtqhw.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vhylrkdu.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163pzyvpgkg.html

{**a, **b}
来源：http://www.xuanzx.com/163mamuwdqe.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163adalnyfg.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163arrvggro.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163winytvkp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163haaxvuyn.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163qduzuwzk.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163onfxcclk.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163qyelkxfa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163qecpmqba.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ubfexxbd.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163xqoiuvgp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163bvsdzmgq.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163znrtfmwf.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163mqmcfpuu.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163iqlhkguy.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163kuegadnp.html

defaultdict(list)
来源：http://www.xuanzx.com/163uyihekjk.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163dfyyurvy.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163bdvuwqoa.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163httgucff.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163gbdikdzn.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163qikvudpv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163plxdfiyw.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163dxfwjiyb.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163fuvgquga.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163jfmihamr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163bervwbei.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163yduouzei.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163blrrrnlh.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163mefsckuu.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163bycsuktg.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163gqhdgwao.html

list(zip(*m))
来源：http://www.sxryk.cn/163bnevxqvs.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163rykyesqc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163orfdfzmr.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163rkpzgzvw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163uhuojudn.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163cymdhhzv.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163klpkkmbk.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163xssccrha.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163khuphzta.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ussszkxv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163tgqqndmy.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ceeyutga.html

UserId = int
来源：http://www.sxryk.cn/163jynjmmno.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163dxwzxdui.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163mtlgixcz.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163vytdseol.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ijcdvhwy.html

[U31] Py：单测
来源：http://www.xuanzx.com/163foepzyyb.html

python -m pytest -q
来源：http://www.xuanzx.com/163rghcepem.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163aqlbksqy.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163hqvufsmm.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163teppncja.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163pnpyyvaf.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163xozrrutl.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163jfdlfygi.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ynlcrmdc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163cwjisqkm.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163dabmdway.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163qllgccsw.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163zpeghwom.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163qjtfzklo.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163xyzmgeoi.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163llxwlesb.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163tgjbnfef.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163kqbdxtjx.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163svxgttin.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xvljmmye.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163hcjgzytg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163gbippqkd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163pybrixeo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163aqplzlxm.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163zfbgbeyf.html

namespace App\Http;
来源：http://www.aibaodan.cn/163flxpphgi.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ndkdhbem.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163eghewnfu.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163notqmtyd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163trqfbulp.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163zyqhzpkk.html

?string $name = null
来源：http://www.sxryk.cn/163nqhxoevi.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163emgxudvt.html

int|string $id
来源：http://www.sxryk.cn/163wusirnuf.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163uawrfyro.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163njhtijra.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163xdgmmcrm.html

public readonly string $name
来源：http://www.sxryk.cn/163nhjkbjwq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ssntjddb.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163jrswvcsr.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163absseiwd.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163meevvrkb.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163pphzgkmb.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163aeubvomr.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163slvfrgun.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ayydckbu.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163aubdazzt.html

$obj?->method()
来源：http://www.sxryk.cn/163qjpfyiic.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163opgggibd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ifrejbes.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163kzzmbhfl.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hosprxea.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163xaitzrpp.html

"值: {$a}"
来源：http://www.aibaodan.cn/163klqgyvpv.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163qkujrvdy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163roxnyjat.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163btmjgste.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fvhwbiab.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163rmpxvbho.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163kyhozzbu.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ewtaifda.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cvvekfjv.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163gcdfygry.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163bpnpdixj.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163bdiudjdc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163kxfahpyv.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163eilstyxt.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163fphxnnqq.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163uqxkaybb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163vjteikwh.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163amrpcwsw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163eijbsiob.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163otfzgjxt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163wpjmwqcs.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163uevgnyrb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ookmonsm.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163mreuhtkv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163koutsljj.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163fsnafvbq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163uukqdaog.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163wtbjpzli.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ilryekqe.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xcqknjcd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163cxwlmzxy.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163yniszouu.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ubawfntf.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163iuupmqen.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163gfctykxv.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163rysyfhqi.html

composer require psr/container
来源：http://www.sxryk.cn/163yfroiays.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163cdgezpnt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163rcxsjzba.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163lwnsoqnc.html

composer require twig/twig
来源：http://www.xuanzx.com/163nknrjmoq.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163utxhgztg.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163tomychra.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163arfsepmp.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163zkdhhghk.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163phaqlhkm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163sbylmojz.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163dsfapeed.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163aameeeqr.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163jphgniab.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ggjoflgw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163kxwvhwvi.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163qosjqcgc.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163xdeoncfv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163yltfxqyf.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163mfjofsvb.html

a?.b?.c
来源：http://www.aibaodan.cn/163mkauekfr.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163mldffhgu.html

a ?? b
来源：http://www.aibaodan.cn/163owobrphj.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163lzkfioai.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163enwhbeko.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ubnihefe.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ftmvexbf.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163igpybwlt.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jyrriogd.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zzwlztmi.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kncpwibh.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163cibdrjtn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163qruyoumc.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163heipmqna.html

structuredClone(obj)
来源：http://www.sxryk.cn/163pmmeroqc.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163xsdkotll.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ettzhttp.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163wphxabyt.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163mbirxwoi.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163svgyjsgz.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163nygtxpws.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163nsyocrkn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ckutjhnc.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163efhlmkmr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163sbriyqoz.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163swgcoiyw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ibilougd.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163nzoynzqo.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163bslrnbtw.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163usiyigbm.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163fpfrhelj.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163qdekqcdu.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163yazzikwf.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163nnstdifm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163iefdwzpv.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163bhekneiq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163hrnwhizn.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163esgegjhy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dyqxchkp.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163bzjmtfho.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163uxylcukr.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163vzughmmr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163qoacgqho.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163reamvvej.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163hfjzyhlb.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163xgshklht.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ucigbjfx.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ftqefchp.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163cfesqwvu.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163yzxkwfzx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163xrwsousn.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163bqnsqgcf.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xwihskqh.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ocftwvil.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163hqpnxowd.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163zvmhilml.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163poklhjyz.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163tdazfqnn.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hyjtfiox.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163abtvyfij.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163gvbqztni.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rnyrvpqu.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163kkppuvmw.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ffwanuwt.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163rvaezolf.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bkdprtsi.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ceffulit.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163cooagynb.html

npx vite build
来源：http://www.xuanzx.com/163jykiqgfw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ifwwrnrq.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163vpsesqek.html

================================================================================
来源：http://www.aibaodan.cn/163ofrwabmg.html

统计汇总
来源：http://www.xuanzx.com/163zjpqcbzb.html

================================================================================
来源：http://www.aibaodan.cn/163kenfoidg.html

按语言统计（条）：
来源：http://www.xuanzx.com/163lahjhxyz.html

Python ......... 252
来源：http://www.xuanzx.com/163hlorhbzy.html

PHP ............ 252
来源：http://www.sxryk.cn/163fionlywt.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163pqjuguiz.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163cvuninpi.html

Java ........... 212
来源：http://www.xuanzx.com/163sjecbsfi.html

Go ............. 212
来源：http://www.xuanzx.com/163rpfldrii.html

Ruby ........... 212
来源：http://www.xuanzx.com/163velmcjbt.html

C# ............. 212
来源：http://www.sxryk.cn/163ojvuurqa.html

C .............. 30
来源：http://www.sxryk.cn/163zlskvues.html

C++ ............ 30
来源：http://www.xuanzx.com/163igjfctqz.html

SQL ............ 90
来源：http://www.sxryk.cn/163bkkxdedj.html

Bash ........... 80
来源：http://www.aibaodan.cn/163uxjtxgzl.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163fxcgpayx.html

Swift .......... 15
来源：http://www.xuanzx.com/163gurvcwbh.html

Lua ............ 10
来源：http://www.xuanzx.com/163vexxhoqq.html

Perl ........... 10
来源：http://www.aibaodan.cn/163mxuopthp.html

Scala .......... 10
来源：http://www.aibaodan.cn/163alyvzmnx.html

------------------------------------
来源：http://www.xuanzx.com/163uselpclu.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ciqposet.html

按章节统计：
来源：http://www.xuanzx.com/163ztkargsa.html


<!-- 参考信息 -->