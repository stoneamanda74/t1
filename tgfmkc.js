外链999!wailian999！

[T49] Perl：函数
来源：http://www.aibaodan.cn/163hynhlkhc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xmkohnsa.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163iraqkifx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163pysjxjxd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163smfftyjw.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163qxsidtvu.html

println("Hello")
来源：http://www.sxryk.cn/163jqfklpnh.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163gtckctvc.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163bfoeuhlu.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163lnrxytvn.html

s"值: $b"
来源：http://www.aibaodan.cn/163osnhyute.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163pjhogfgw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163tcdwgbdv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163fkcqdqxb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163iriqybsd.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163retjbiie.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163xqmzqkjz.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163nzdfsrtk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163kqrcttsu.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163oenyctti.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163bcyxiofi.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163pakvovgq.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ehiwngyq.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mctytzaj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wfzrzljk.html

================================================================================
来源：http://www.aibaodan.cn/163kruqhxkq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163pjgokyny.html

================================================================================
来源：http://www.sxryk.cn/163fxzqqoif.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163pxhusvni.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ynzwmnms.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ayorljnm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163oxvnzqvz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163biqxzsrr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ewynrbhg.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163epgyaevq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163kebjgvsw.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163mbpcfqus.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163drlmhnze.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ojsjlnfa.html

{**a, **b}
来源：http://www.aibaodan.cn/163ncyczctm.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163nwxfaydw.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163jsqtzvuc.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163wxmstmhc.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163xqivnabn.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rwyhssqx.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163tduavzlb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163pvnyvofg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163iocxbzpc.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163pkftmzje.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163clpgknhd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163hpkqkqdh.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163wftuqsau.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163kdibelxw.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163xdiecntq.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163vmqdmjeq.html

defaultdict(list)
来源：http://www.sxryk.cn/163ecvqdxhl.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163mndulnmu.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163okphrypv.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163torpszsu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163djmfagga.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163wqwgougg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163vdtbjbof.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163mnqbmrpz.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163dfhqvato.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163bbipcjth.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163bmisetxs.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163flcxjwuz.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163sdhtlcko.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163dpxxpgjf.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163mshzszui.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163mxejugkh.html

list(zip(*m))
来源：http://www.sxryk.cn/163ximykxnw.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163txbwxbii.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ayopvwbb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163glmsphpi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163zzwhyihu.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163tvidbbki.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163dqzgkpjn.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163azihxznd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163iygfskxv.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163zjbffncd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163hduaxvtr.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163jmlagnvx.html

UserId = int
来源：http://www.xuanzx.com/163qwqzfaht.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163llolwcuj.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163yiquypnb.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163fugnfqfe.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163sijqlqbk.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163kjqrjrdc.html

python -m pytest -q
来源：http://www.aibaodan.cn/163muhewyqw.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163hqvzfzud.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163pqiaytcm.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163aenndsie.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163fyyvtamm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163kosrlfgt.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163rlmkyfjw.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ksswwgjs.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163qpmbjomq.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163mikbsoib.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163finyaoxi.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163jasxeucv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163atwmuffb.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163czqokgaa.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163cxbvqmqe.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163nbfrjmcu.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163abavybjq.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163lvuhpmkd.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jjcsjhzw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163cfkejszn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163wzitgqqj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163egmbjwev.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163usbvtusr.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163apddottt.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zaxtrbdm.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163idtsklrs.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163toedpiao.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163edijycjo.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fweegcaa.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163tcexoztu.html

?string $name = null
来源：http://www.xuanzx.com/163gebwdhik.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163jnbxkkms.html

int|string $id
来源：http://www.sxryk.cn/163rcyphthy.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163uxaxxmtp.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163iazezfpo.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163kljqmbcm.html

public readonly string $name
来源：http://www.aibaodan.cn/163vzopzfpa.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163slhtreti.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163atnkrlwy.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163cjgwnzgr.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163edttenms.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163cqfljtpi.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163scxficcd.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163gcgfcdlo.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ihxtsjma.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163bcsiumpb.html

$obj?->method()
来源：http://www.xuanzx.com/163bbwyoadw.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163cflczkro.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163jvsyysvt.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163nawtlfss.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fhbhgkvn.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163gxwcbpbc.html

"值: {$a}"
来源：http://www.xuanzx.com/163ghlqoefl.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163rjcbntxp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163hqjydpen.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163gpwihdwv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rmqzxirm.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ettpgewi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163swbzkftg.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163mpiigkjm.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fwekegas.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163txmojnxa.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163hbmrmxpu.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163axecjfle.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163afsubybk.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163jbrsgfbi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163fvtcipkm.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163pfemvwjn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163lxszzzpj.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163wxuaehqv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163awbucqwi.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ezpwddbl.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163digrhscr.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163omyfzlwj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163jubayrcg.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ymmhufmc.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163wcamyukx.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163dndvzdxv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163snzbkaqx.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163wdinzohq.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ggwybhad.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163phmzygpu.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163steursgy.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163vqanwgwr.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163boycyvgr.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163jfisuysv.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163dfrpqged.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163lvehvmew.html

composer require psr/container
来源：http://www.sxryk.cn/163nghpskfl.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163rqcojblp.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163qnqaador.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163lrslobju.html

composer require twig/twig
来源：http://www.sxryk.cn/163svugrcit.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163cmjunisj.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163oelrbbzb.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163cykekbmr.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163pafpjbml.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163trmzesfl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163yxqdcbnb.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163wxkyoyuf.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163dhxgsghb.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163csdmjyzx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ayfbopsw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163mhlbswcg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163vqvzepgg.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163foogxoyf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163pslaxhid.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163ehuqhtaj.html

a?.b?.c
来源：http://www.sxryk.cn/163sjtojuoz.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163vupnkaho.html

a ?? b
来源：http://www.aibaodan.cn/163dqxkjptp.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163lcyoxtoe.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163vwxkrodk.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163samtyfyj.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163hfmkfmfi.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163yagdavtl.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163kqdwtdtl.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163xscwnxyr.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gwxccafn.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163rfibgywe.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163whizbcwm.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163xkqnidsa.html

structuredClone(obj)
来源：http://www.xuanzx.com/163usktzptd.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163jsbmhqbc.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ybnmvzus.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163pmszuidk.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163mzbfefve.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163uhkgvjeo.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163eaikfwnm.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163khcdzuih.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163avmuhyho.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163owyujnkv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163veizbhwc.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163buisbviu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xkvpfexb.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163eqcxcfrd.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163qjrltikg.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163tgrjsasw.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163jvfesydc.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163vzrgwdoh.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ymefuefl.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163trnllfxc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163jyraaomp.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163nhygmoiy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163bvlzwzhz.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163cmvyxruu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163onyvuons.html

[U105] JS：节流
来源：http://www.sxryk.cn/163lhzlsvhb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163bewuwibr.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163itzxzeju.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163jrmzdagk.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163gsyffxwt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163vhmwsuce.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163qeykkktd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163wssxtgkm.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163htcczhjl.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jajddukk.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ywlwhhtx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163qgasgemp.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163xcnhjbhj.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163pjrkziez.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163dbqxqyuo.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163tpcuserc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163iznnskuh.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kxwfqusg.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163itkcugvi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jewqgnxb.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ofszccrj.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163abzqticj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ndrmcpcy.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163yhkfwudv.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163gzqvkmko.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163qphgaejx.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163hdzdwhgy.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163eoqxqtpk.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163nffnpiok.html

npx vite build
来源：http://www.aibaodan.cn/163jfshclhm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ipacmlro.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163dviedqva.html

================================================================================
来源：http://www.aibaodan.cn/163bghnpetj.html

统计汇总
来源：http://www.xuanzx.com/163rrdsitod.html

================================================================================
来源：http://www.aibaodan.cn/163bezmskre.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163jjgsaobz.html

Python ......... 252
来源：http://www.aibaodan.cn/163ieebgvtb.html

PHP ............ 252
来源：http://www.sxryk.cn/163vfpqcudm.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163hjoacpki.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163tzyogkfg.html

Java ........... 212
来源：http://www.sxryk.cn/163lwqtgzwn.html

Go ............. 212
来源：http://www.sxryk.cn/163rncsluah.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ihrdjner.html

C# ............. 212
来源：http://www.xuanzx.com/163jnfcyjur.html

C .............. 30
来源：http://www.xuanzx.com/163chejnmwu.html

C++ ............ 30
来源：http://www.aibaodan.cn/163pllhsyll.html

SQL ............ 90
来源：http://www.xuanzx.com/163yfxjlfzw.html

Bash ........... 80
来源：http://www.aibaodan.cn/163olghbxhk.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163jzckaksx.html

Swift .......... 15
来源：http://www.sxryk.cn/163tltlonus.html

Lua ............ 10
来源：http://www.xuanzx.com/163zmcbupdp.html

Perl ........... 10
来源：http://www.xuanzx.com/163cydfnekq.html

Scala .......... 10
来源：http://www.aibaodan.cn/163qjnsdida.html

------------------------------------
来源：http://www.xuanzx.com/163sxaxejxz.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ongvrqia.html

按章节统计：
来源：http://www.sxryk.cn/163offiujas.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jgqjqytb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ackoqpro.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mxiczrrq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163pdrxhkiz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163idwxyyie.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163nweufwuc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tjgdfjwm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hjjbsbcn.html


<!-- 参考信息 -->