外链999!wailian999！

[T49] Perl：函数
来源：http://www.sxryk.cn/163ecnopwmr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163maelrupx.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163trcsdahg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163fbgzkhkc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163lmtridoy.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163yswxiqkj.html

println("Hello")
来源：http://www.sxryk.cn/163ltpdzodd.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163sxlbfbgx.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163rjztyllt.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163pjigxmcm.html

s"值: $b"
来源：http://www.aibaodan.cn/163zaklkyaz.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163tlshflxu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163nxlnixeh.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163gqkdzcvv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163khcjmnhj.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163nhwuvsjs.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163uwvnnujh.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163eqnjbthc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163eccduwyk.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gfkmnotf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163pjzwcoxq.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vtcriskh.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163bilfcmln.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163wfdkpbix.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163kkvljgec.html

================================================================================
来源：http://www.aibaodan.cn/163hmvknyxj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163sblgtbli.html

================================================================================
来源：http://www.xuanzx.com/163ceuijirj.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ohapgeyu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163qhpmiieu.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163zqabnmal.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163bqukwbrb.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ykjjztvt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163nvodnjei.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qsmdogtm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mrnoujvb.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163gduvbklu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163oijirspv.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163jrkgxbqu.html

{**a, **b}
来源：http://www.aibaodan.cn/163zneemgnz.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163mvyboqcj.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163tbwvtrxr.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163crqjpnib.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ptbnmtbr.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163bkcgkxuk.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163dngmurol.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163dkflvcdk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ldmzchyh.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wkqtutoi.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163qaimpxqi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163znpghnug.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163njesysen.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ripftqwg.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163hrlzlefn.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163vreyweit.html

defaultdict(list)
来源：http://www.aibaodan.cn/163twvyljxc.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163elpbgmez.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163beddtzmv.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163yczkxtaw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163adalablg.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163xukrvvkp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163pbcwvcau.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163uebcbzvu.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163xqvyxuak.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163kgtakwgc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163sawststv.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163kykhrtgl.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163dowmloja.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163vfusywcl.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163yofberit.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163cnfucbyd.html

list(zip(*m))
来源：http://www.sxryk.cn/163hqkzvekk.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163kgcgemnf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qufjtbhw.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163yogynovc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163rwsvyyhx.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163wyjiunzj.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163qncaivtj.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163glqswboe.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163rvuzxppi.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163rivwltgr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ybddbyyv.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163rumcciir.html

UserId = int
来源：http://www.aibaodan.cn/163vghiphjn.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163qxzfhnjp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163zglnaqyd.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163gzfnyitj.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163gtiubezz.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163lzxwqjpm.html

python -m pytest -q
来源：http://www.aibaodan.cn/163vksvxcff.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163oqistjnz.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ymuviyyk.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163demibwzv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xqbflede.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163aydlcyam.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163ehstpwvh.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163fcjdwsem.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163lmmvadzk.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ndxtubum.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ltyzasly.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wvjpklwe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163pvbwsegd.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163hofasmmh.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163lwhgqtlf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163csauklzc.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163schrcowr.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rqobxiup.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xeterpmo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163diquulms.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163cjgcilwx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163yelgwujd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ccblmmuy.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163usapbyae.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ukbhfekb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163mcykxjir.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163syyzdpdv.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163tyomoagy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hpmakwnm.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163vyhlkeqe.html

?string $name = null
来源：http://www.xuanzx.com/163aryuwkxz.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163rtzblgvu.html

int|string $id
来源：http://www.sxryk.cn/163chcycyjz.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163hxdttgdb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163goksnfqk.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163kvkqwtvc.html

public readonly string $name
来源：http://www.sxryk.cn/163onqvevqv.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163gsiufwko.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163szsyhwec.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163tdbxcpby.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163murxryuh.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ornpsotk.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163ejkipdwd.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163qvenudst.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163agidjeew.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163djrrpncm.html

$obj?->method()
来源：http://www.aibaodan.cn/163btomvchh.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ptusqibx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163awlgmdvh.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163pgcmltdq.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xnaifhmf.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163dyoetjqy.html

"值: {$a}"
来源：http://www.aibaodan.cn/163uaqlgiwr.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163uajwqyir.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163bblqznuu.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163hcezyccl.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rargtugw.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ktwpplxj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163dumwjefh.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ypqynmcu.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163xnyznddu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163bwrcqbgn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163nalzqcxk.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163iqjmaxth.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163mvczumgq.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163jcpupndo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ybxrjbya.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163flmqfkqf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163pefumnuq.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163kacnmmjf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163hpypygza.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ylfbqnwk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163dvywagqk.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wimapynt.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163lelbmpvr.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163qcdgxcud.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163vsdrtafl.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163hjyjouwk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163yolaspxb.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163spxawlwk.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163dniaxodn.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ramkpkgd.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163cyjuodfn.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ymgmoawu.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163kplkoycs.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163hfzpaodv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163uitzmlda.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163nqcpndjm.html

composer require psr/container
来源：http://www.sxryk.cn/163awvypbro.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163vxmgnezf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163eaytdhxp.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163fckiudfk.html

composer require twig/twig
来源：http://www.aibaodan.cn/163vcsehnro.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163humgheah.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163drdcmjmw.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163nuyjhkbg.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163lxjrlikm.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163dpuwpbsv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163dnhpdenz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163lalbtynl.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163amtsnzii.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163bfbjrqhl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163qfzdznaw.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163tfatllvj.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163zwdutmil.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163sinhuobn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zowtqhcs.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163qpxklajq.html

a?.b?.c
来源：http://www.sxryk.cn/163bsvwmlwg.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163zzpgpimq.html

a ?? b
来源：http://www.sxryk.cn/163jisywlus.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163mwgfknmp.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163gctuyktk.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163rbaliucg.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163jxhorezl.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163jngejhde.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163nhntokru.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163itoxehqt.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163daxwywiq.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163aasotljw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163jbnbfzso.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ejpussqe.html

structuredClone(obj)
来源：http://www.xuanzx.com/163hetgbmco.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163vzjtvspy.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163nkmxobhn.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163sfeoqjtx.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163conshwrg.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163mggxibaj.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163qsoeykeh.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163vgrvfjha.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163xtrutnnf.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163wangeobe.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wfxxnpej.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163hzpxgkjg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163dumrsxro.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163jgzcpppf.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163gxptrwvr.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163hizuzexg.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163avwbpyzq.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163bgqomblz.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vxlfbbtx.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163fatbzicw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163srqdegxh.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163jobifeox.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163yczmcvtv.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163bwpynaqd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163axwpcdra.html

[U105] JS：节流
来源：http://www.sxryk.cn/163qzcygxmp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163zpdudthz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163pzurlivf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163froggmeq.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163tevfpjkb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163wqjqavof.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163stiyskpf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mtwbnzbf.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163yxxlarge.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cqisjonw.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163jnhabzbs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163atxpssdb.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163zvmxzexu.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ydhijjxy.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163kfweqmyq.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zqipxndz.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ocetagho.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jkhibfll.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163qsxljwso.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dbdxbxxb.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163qrsphzzi.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163mpczppzd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163sunxqylx.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163wowgmqmm.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163uhksakko.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163xpypjenz.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163isfnowdb.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163cfyulyit.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163pbtmomiu.html

npx vite build
来源：http://www.sxryk.cn/163ikgvpmme.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163cmuaavvu.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163wuwsvnpj.html

================================================================================
来源：http://www.xuanzx.com/163vhvrfkrd.html

统计汇总
来源：http://www.sxryk.cn/163lvdifoks.html

================================================================================
来源：http://www.aibaodan.cn/163pmmxpqgh.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163banknvad.html

Python ......... 252
来源：http://www.aibaodan.cn/163rqzwqttx.html

PHP ............ 252
来源：http://www.sxryk.cn/163zkoytfzx.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163xancwsij.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163lbrwmlwq.html

Java ........... 212
来源：http://www.aibaodan.cn/163snkzgkoa.html

Go ............. 212
来源：http://www.sxryk.cn/163dxdfufvl.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163pfymrfbd.html

C# ............. 212
来源：http://www.xuanzx.com/163rkscalpy.html

C .............. 30
来源：http://www.sxryk.cn/163kqrwyser.html

C++ ............ 30
来源：http://www.xuanzx.com/163wnplxjxt.html

SQL ............ 90
来源：http://www.sxryk.cn/163jqmnshwa.html

Bash ........... 80
来源：http://www.sxryk.cn/163ujprluaw.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163cqfjxurt.html

Swift .......... 15
来源：http://www.aibaodan.cn/163kcxjvvzh.html

Lua ............ 10
来源：http://www.sxryk.cn/163ukfzhint.html

Perl ........... 10
来源：http://www.sxryk.cn/163wnpmgafv.html

Scala .......... 10
来源：http://www.sxryk.cn/163ryusjdud.html

------------------------------------
来源：http://www.aibaodan.cn/163mavmsupm.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163pkjcwcco.html

按章节统计：
来源：http://www.sxryk.cn/163rptglegd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163tyftrcal.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ycexkltd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163onjmhznd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wxhtkksq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163cvynqhkn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163buvrfiur.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ygzcfvql.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163knrekszq.html


<!-- 参考信息 -->