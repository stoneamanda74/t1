外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163vxhprske.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163zgnvwrbg.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163vtuqabqd.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163thjpawod.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163dtdjppiu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163pdfibiou.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hjyvowdb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ffbnjaer.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163diibtpbs.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163qyiihinx.html

println("Hello")
来源：http://www.xuanzx.com/163txlizejx.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163zcwovsgj.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163fewfwnyj.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163efqywucx.html

s"值: $b"
来源：http://www.xuanzx.com/163qrvtazyg.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163syjsumhi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163oacorsmd.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nvslzbjo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163qxxylgqj.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163hdabzuom.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163fqozxhqh.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kwxeopwg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163eyfvmhbg.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163mkbjwqen.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163vwvavfdu.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163dektyhfb.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163zssgijgm.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mlqrvmqt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163okpvgeku.html

================================================================================
来源：http://www.sxryk.cn/163jidcdmjf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163osmcnazh.html

================================================================================
来源：http://www.aibaodan.cn/163isjcdyzv.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163llotnvcd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163lezvjlcn.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163eruxdosg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163vrbfkmxf.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ydiovgic.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163fakjhfjo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mzzbbkag.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163qmkgqrdp.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163hkvinyyg.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qfrkrzqa.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163afmzqcxc.html

{**a, **b}
来源：http://www.xuanzx.com/163tifnsebu.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163bhzwlkig.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163syhpwjst.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163xipzwfpq.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163dvbyucrr.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163vhxkkqls.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163osbchbxe.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163vknnqgcu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163iurcoeez.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ffeixkgp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ujxjuqcx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163meqqdbgo.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163rvxnvfnd.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163twlnkdsz.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163smwzgvcx.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163rmkoeyyg.html

defaultdict(list)
来源：http://www.xuanzx.com/163zivtutid.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163icjjonuq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163iwbxruge.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163wcoxdsci.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163twhusvhl.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163imhqqjuv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163crsnaoep.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163vslofhbw.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163yanrpndx.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163nnkmoltn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163buzivhsr.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ixpwaztw.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163xjaslpuq.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163nmsgsulb.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163pcfxwyty.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163tnejmxds.html

list(zip(*m))
来源：http://www.sxryk.cn/163ttuhlwbz.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163avzlcyzv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163jynsowuk.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ocekpern.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163qimthdyo.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163bvjlriim.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163uvzihxbc.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163kjkzbigh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163uspajksl.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ynymkwov.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163klkukore.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163naczjauu.html

UserId = int
来源：http://www.sxryk.cn/163dklqazdu.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163pfsrpltw.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163zccjgcmu.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163huqxqimc.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163vyylkxdi.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163qarjptkf.html

python -m pytest -q
来源：http://www.xuanzx.com/163rtzsqnuk.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163udtgzdfr.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163xrswxrly.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163hijdggws.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163lpzzzjsc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163kwovaefx.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163pukegoxr.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163qyadihka.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163lcidmhfe.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163oraaelal.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163gzgqzfui.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mzlxxnzn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163draqbfyp.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163iqdeepri.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ooemhhkb.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163kqdagtsi.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163rotgzshy.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ddkcxncy.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vsvkexzf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xtlbdlws.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lonyhinn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163jytnkvqg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163cbtblblz.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163eozjwbho.html

namespace App\Http;
来源：http://www.xuanzx.com/163ijglrgdv.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163nrikovts.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163qpulkymw.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ohzqqswr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jsuucurd.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163stzzkhbt.html

?string $name = null
来源：http://www.sxryk.cn/163twszncvf.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163qjdnpram.html

int|string $id
来源：http://www.aibaodan.cn/163nljrkyvw.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163klaruwhr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163adsfwslf.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163zdtfwlvi.html

public readonly string $name
来源：http://www.xuanzx.com/163mwlkohjp.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163rsinghuz.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163amjduzko.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163owhupjup.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163devdmdzz.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163gxwsvzoe.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ryvfywww.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ydduteho.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163liwnqcro.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163crnyqghb.html

$obj?->method()
来源：http://www.xuanzx.com/163cypziqkg.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163dafxljfv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163waoascfh.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163tsrncgnb.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gxvzsbgm.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163jdubdarl.html

"值: {$a}"
来源：http://www.sxryk.cn/163mfaebrbb.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163jyvvdgid.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163kdqmxwwt.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163fzudwplw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fhhlbrol.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163nhogsbvt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163jqhltwsm.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163fwwawuqj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zenbwijw.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163lqgedvrn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163vhudlbkx.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163jvalcqjs.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163cxhjzrmt.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ieiwvjgv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163tbmyuagv.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163tnspbsih.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163hxtueuys.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163gttdpzut.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163qinjoeob.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163rmrrbosf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163rlihjizd.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163yvwmzqqw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163lzettlrz.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163zjdupwuv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163gzjsgwjg.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163gqwsdzgw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163eebvjzfn.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163znugkjzp.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163kmckgkoo.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xgrngser.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163vjwczqcs.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163knkftbes.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163gzbcrrvh.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163rfncjhcp.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163greddtli.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163vfwlhgec.html

composer require psr/container
来源：http://www.aibaodan.cn/163zvxjqvhi.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163oxclkfus.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163nwvnxudp.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163lnxkrtwq.html

composer require twig/twig
来源：http://www.xuanzx.com/163ekuenbcf.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163cgakmkne.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163jyxcidgq.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163hxuknuth.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163owgvmwwx.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163kfzdxbpe.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163kasvjevj.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ygxuiwtb.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163xlutwdmu.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163guumufrp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ivfhshxd.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ulhqdahp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163jbjckotf.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ixmebmvn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163wkbowqzg.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163bbtcwotw.html

a?.b?.c
来源：http://www.xuanzx.com/163nhwdsrpk.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163mdwnfwly.html

a ?? b
来源：http://www.xuanzx.com/163jywmijfk.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163rcyhruji.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163smpjjktj.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163dgizqyfv.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163qncytvtt.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163datcqozy.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163hsqkzvyy.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163hsksmptw.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lislglat.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163yyiwotai.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163tcvpkkev.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163jbsavclt.html

structuredClone(obj)
来源：http://www.xuanzx.com/163fblxiuwk.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163fovjflke.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163wtpmntit.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163vevvbkqq.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163swckpgud.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163qqnrryxz.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163utixhsko.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163byqktkks.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163mqpjggtx.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163mpjbwojw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zvckwvzo.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163fodwowzl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163dktssgkp.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163qycggamc.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163knhttkti.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163vaboajqm.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163gvxnsoyk.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163eeyteygp.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163rrujlzrk.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163scdwhiyv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qvxtgmpi.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163dgphnqag.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qbhedimj.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163wtgyuyxj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tarvmdui.html

[U105] JS：节流
来源：http://www.xuanzx.com/163jvbophxk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163rfybhhxv.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163adoktgol.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163lucplhtc.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ivugojku.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163puzrepma.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ibidinef.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163xnqnzpdp.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163uflgqvlg.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163khradzbz.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163euvphiae.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163mfweyjco.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163npqeswhd.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163esfavkmi.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163kmevwtyg.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163eyoxiaph.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163jyehozvg.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cgzddmfb.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xphndvpw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nrbyhrww.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163nuzolfes.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163bcvhwwyd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163wtabdgbs.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163qhknyyzu.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163daqnaxww.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163vslovkfc.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163razkinka.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163hpceytjt.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ytlxcvum.html

npx vite build
来源：http://www.aibaodan.cn/163wuqzbjkk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163feoyvgqg.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163vgrievqv.html

================================================================================
来源：http://www.sxryk.cn/163sxbgnkwh.html

统计汇总
来源：http://www.sxryk.cn/163zalwerxq.html

================================================================================
来源：http://www.xuanzx.com/163ykcomqqe.html

按语言统计（条）：
来源：http://www.xuanzx.com/163borvdhxo.html

Python ......... 252
来源：http://www.aibaodan.cn/163czxxpdgd.html

PHP ............ 252
来源：http://www.sxryk.cn/163cijrtneo.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163umheepbb.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163jdsdadln.html

Java ........... 212
来源：http://www.sxryk.cn/163nfarfwjx.html

Go ............. 212
来源：http://www.sxryk.cn/163moyemrnl.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163gzjzcbwo.html

C# ............. 212
来源：http://www.sxryk.cn/163emvkyrxf.html

C .............. 30
来源：http://www.sxryk.cn/163undwhuqw.html

C++ ............ 30
来源：http://www.sxryk.cn/163nltmhrnf.html

SQL ............ 90
来源：http://www.sxryk.cn/163jiwfwprw.html

Bash ........... 80
来源：http://www.aibaodan.cn/163oylhjskb.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163tlripnas.html

Swift .......... 15
来源：http://www.xuanzx.com/163ndazzndo.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ohltmwvx.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ruokdvpr.html

Scala .......... 10
来源：http://www.sxryk.cn/163gzfppsuo.html

------------------------------------
来源：http://www.sxryk.cn/163epjakfqw.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163hbhkbnhc.html

按章节统计：
来源：http://www.xuanzx.com/163plqxehyh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xsixhozx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163exxwiyhk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163euzfaxai.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wgpvsdzk.html


<!-- 参考信息 -->