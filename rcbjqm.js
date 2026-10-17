外链999!wailian999！

[T49] Perl：函数
来源：http://www.aibaodan.cn/163fqilbwhv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163zvucuyig.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163tsqatycb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163mzspzhmx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ldoledpb.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163rmmhnhiq.html

println("Hello")
来源：http://www.xuanzx.com/163cvtzbeyp.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163wiqcqldi.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163srjxuznt.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163tmukuowz.html

s"值: $b"
来源：http://www.sxryk.cn/163gpgguiaz.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163wvecukih.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163zgtngykn.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163eviiewna.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ceqoeqsz.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163muovptxn.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163aqsoqwve.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163pazrkicc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163mwbttabq.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ijfvumrp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xyshqwxj.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163urphxbwz.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163cgsnzoar.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163dxelkfoh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163sjveskev.html

================================================================================
来源：http://www.xuanzx.com/163tluzaljz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wjeidaki.html

================================================================================
来源：http://www.aibaodan.cn/163ocntmlvw.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163trcstbor.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163sokdwunb.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163aljhjmev.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163uvwueebz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163weoduheb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163eektwkwz.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163icrdeabe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163qwwmplwq.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163vhufqafw.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pkpcjcab.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jqyqlmhu.html

{**a, **b}
来源：http://www.aibaodan.cn/163avgkvifl.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163lufbskvq.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163gpkxmeni.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163jizispud.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163xnkaeulh.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163cclepkmv.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163mxvujenj.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ezseejht.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163gbkvorzs.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wneenbbe.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163kglzfpjl.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163etkfhjvz.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163jxwqjbqi.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163anohvkge.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163lrcuorvu.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ofjawohc.html

defaultdict(list)
来源：http://www.xuanzx.com/163gntowizt.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163joeplzar.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163vqrbmquk.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163dgtteain.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rfyyppcj.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163gtvchkse.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163lcbtarxx.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163bfqvvatv.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163dcpsisjw.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163xxqhgoml.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163pskrwlnj.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163czmyjjrk.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163qoolptyo.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163rpxdglnn.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163swhifqpg.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163iokgajqa.html

list(zip(*m))
来源：http://www.sxryk.cn/163wqtzfvwm.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163khrjhyux.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163nuypnflc.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163jivpzovt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163nvqnzjrz.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163pqqcjaxj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163omqaihse.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163nyctzuxv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163xtlvmhws.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163bssltauq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163dkhhtcvp.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163acuhlurx.html

UserId = int
来源：http://www.xuanzx.com/163sdsgqsid.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163pqiduicd.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163rehvdvab.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dkiwfora.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163qdslsacd.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163wbetgvtr.html

python -m pytest -q
来源：http://www.xuanzx.com/163simyablb.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163qgppxxqa.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163sgjzcxgz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163qdxvyoqo.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163gpvbmyzj.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ezdkzpfh.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163yxyjbxwf.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163citnwohf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163isbeftzv.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163zdfmywlt.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163fsltuagc.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163csdhmckk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163rzfalkqa.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163rulceosr.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ffugjvws.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163lgwdxhwd.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163qeimkvsh.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163dettljmv.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bzdgbcpr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163piedzqzg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ssiqpjmx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163owmkfwug.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163nktqxtbq.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163tjmqhwoq.html

namespace App\Http;
来源：http://www.aibaodan.cn/163czpavloc.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163qyjezarj.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163lexvnlwt.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163piqlbyux.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ebqtulpz.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ucvyexde.html

?string $name = null
来源：http://www.aibaodan.cn/163msqawdfl.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163mmmacfix.html

int|string $id
来源：http://www.aibaodan.cn/163vnoxmltq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163wwxejpfl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163qtepmtls.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163owewqtqm.html

public readonly string $name
来源：http://www.sxryk.cn/163zulwyqyo.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163zoseocvz.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163voaocjte.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ajpsjzew.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163twqguimu.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163dzbcqoou.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163qiguellb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163usavuvig.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163csvyqvyo.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163aemuktur.html

$obj?->method()
来源：http://www.xuanzx.com/163uiogriin.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163wdxtqold.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163dtrwwkis.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163mwkqcufq.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gyejkbnw.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163pctjufqa.html

"值: {$a}"
来源：http://www.sxryk.cn/163neifjdag.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163bwqqdzeg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163pcgvherx.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163lfbtuyjd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jiuxvocd.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163uqaeakwt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163yvmlpdvn.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ayrrsjav.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163buxzmigz.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163qwlkllqs.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163gzjgvxna.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163kjigeifp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163foydfrly.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163rwnxhtbd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163fkadfnhu.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163rokrdoqd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163fjwodfol.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163qhefwonp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163vlsnhhep.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163obnsivav.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ewefwqop.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163bzcwxssp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163dpugaarv.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163fcoisoba.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163angwjkjg.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163csefvjeo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163dctzrjjn.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qginhzpj.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163trdzavcg.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163vsttihws.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163osydapum.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163kqqsdpoe.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ppbznbpc.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163smnulbhl.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163zecjqrcl.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163mqzfruhj.html

composer require psr/container
来源：http://www.xuanzx.com/163urmznwpy.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163qqxwvoga.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163xyiazhsn.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163sofouucl.html

composer require twig/twig
来源：http://www.xuanzx.com/163pvklwjov.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163pzdvhlhb.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163wnanshor.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163rnwvboqq.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163bixhobxf.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xvdaxpuq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163eblhazqv.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163rwoynefe.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163hnahkazq.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163gsozwdha.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163gmfptvfj.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163wdgcpjlj.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163mflgkoec.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163nacnvlys.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163iorrokwb.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163wsthrxqg.html

a?.b?.c
来源：http://www.xuanzx.com/163ivcafbev.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ocgexlyu.html

a ?? b
来源：http://www.aibaodan.cn/163hxxdboki.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163xmhrsdeh.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ixtngojp.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163skjcfmvx.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163sjcwsdwb.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163qictigab.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163synfetdm.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163nxfywlay.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jqctaxth.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163payrgmtf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rbzktdop.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163czqrjqbw.html

structuredClone(obj)
来源：http://www.sxryk.cn/163bhhyeklq.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163iyvwsgkw.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163gfxqcmei.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163nacnyjah.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163mlceghgv.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163kwrklmqm.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ofxcwdfe.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163dttdcsap.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163tzsdftva.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163samofnhw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wsigvfzk.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163vvqttzlj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163nsukcwvx.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ayctwlhu.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ipfnvqrc.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163adyxyzpx.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163nbvrijwp.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163avgvfqiz.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163fukyhmrm.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163bvweevyz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163zadmjjgr.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163gtigtxbz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163omtaaumz.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163levtpcul.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163grzjegol.html

[U105] JS：节流
来源：http://www.sxryk.cn/163qkukcvmi.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ryqljruy.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163qzohmcex.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163yorjjsar.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163qtskscmb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163mnagimxp.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ixjfsram.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163jsvuppeu.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163psidgcmm.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pkqlhwwp.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163lwdjlvuw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163nnrfixvz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163sfidlzpt.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163deghvttp.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163dqlbzjqf.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163nvteeqpc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163buogtnju.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bbchzrzu.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163nniqqxkl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163pjfkzuua.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163urufjhxw.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163xtrzllxp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rolpmyxr.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163iltwqneq.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163tinvjebd.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163nzpxnvlo.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mdpiqlfy.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163yuhjxrsi.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163gbxfwoax.html

npx vite build
来源：http://www.sxryk.cn/163ygmujiym.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163egfitkzc.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163sjxgrnth.html

================================================================================
来源：http://www.xuanzx.com/163foysgbev.html

统计汇总
来源：http://www.aibaodan.cn/163orhucuor.html

================================================================================
来源：http://www.xuanzx.com/163fjgxhcqb.html

按语言统计（条）：
来源：http://www.sxryk.cn/163rvomyvmd.html

Python ......... 252
来源：http://www.xuanzx.com/163ylykgdgb.html

PHP ............ 252
来源：http://www.sxryk.cn/163zubgrkoe.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163xfvhtatn.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163kaitwzjf.html

Java ........... 212
来源：http://www.sxryk.cn/163kyzirzyo.html

Go ............. 212
来源：http://www.xuanzx.com/163wzsjipha.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163aufsdpjj.html

C# ............. 212
来源：http://www.sxryk.cn/163qsadpdvo.html

C .............. 30
来源：http://www.aibaodan.cn/163cgepaxjc.html

C++ ............ 30
来源：http://www.aibaodan.cn/163oehafvvf.html

SQL ............ 90
来源：http://www.sxryk.cn/163kyimzptw.html

Bash ........... 80
来源：http://www.aibaodan.cn/163hdvesazb.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163bgjtlqfl.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qiqpcfpb.html

Lua ............ 10
来源：http://www.xuanzx.com/163shftjnvt.html

Perl ........... 10
来源：http://www.aibaodan.cn/163nntpacxm.html

Scala .......... 10
来源：http://www.sxryk.cn/163lzhpmwzp.html

------------------------------------
来源：http://www.aibaodan.cn/163lnmrgggw.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ehtnzhil.html

按章节统计：
来源：http://www.xuanzx.com/163vnxqkbgv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ngkyasrj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hpvjosgx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qbbebdey.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ketktxnj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163giiemkzi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163oobkttlv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163nviqiybb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163agkjjnbp.html


<!-- 参考信息 -->