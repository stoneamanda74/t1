外链999!wailian999！

[T49] Perl：函数
来源：http://www.xuanzx.com/163marubvsr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163molfgtdw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163fiigqtfk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163gvjqhwsf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ifjjomef.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163dkdmegsj.html

println("Hello")
来源：http://www.xuanzx.com/163lcxipfxf.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163bjcqajrl.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163kamlsdwo.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ttlpbadl.html

s"值: $b"
来源：http://www.aibaodan.cn/163hkoxlgzw.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163mruwhrlv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163txjiuwxd.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ihiqoual.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163pahsgtpv.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163zkvikmqb.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163mydqagca.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163wnktsflg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163zmbisvog.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163qndwlbvz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163hiljnpap.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163yrlwxmlq.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163pgaploex.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163yynnfcbi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163yvpcxcly.html

================================================================================
来源：http://www.sxryk.cn/163gsaymcco.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163yemnxbli.html

================================================================================
来源：http://www.xuanzx.com/163ykjtplrq.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ggrkbplt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ekqqwuuo.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163scskpwyo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163hmdrloci.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163vtknzozi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ptfezfsu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163sugpaufp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163dduliwtt.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163hwrfvhvy.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163axcwyfeu.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163kzcmsldm.html

{**a, **b}
来源：http://www.sxryk.cn/163ulhgbuqs.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mawtzuaj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163hirzsaov.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163objzycyb.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163qiqehbny.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163slakigds.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163kkdahjdg.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jzyxampc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163zworweqm.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163reychonq.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163pypenxro.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163mjatrdri.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163akabzebr.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163zlilrnff.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163zqolatqe.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jiffzzci.html

defaultdict(list)
来源：http://www.sxryk.cn/163zwbgjpxc.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163fhvjzagn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163pilgtyfs.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163waohnogo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163pcfbevst.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163vhtqlrbe.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163oaibnzjp.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163schncnvm.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rghrzjmz.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163mtadxnjg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163lsgobhve.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163bcilkqxg.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163oepiaacb.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163smkidtgm.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ipuqfzot.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163qgjpfdqp.html

list(zip(*m))
来源：http://www.xuanzx.com/163pphcyeqj.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163tfdpxpzg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163sqicfeuf.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163tlxqopya.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163vvrsfwyo.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163gwguxkbz.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163mkgbpxhy.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163idiadgus.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163kcdjmtxg.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163wyvstmwj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163jmzfngbb.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163suojfrdj.html

UserId = int
来源：http://www.aibaodan.cn/163yatqhgkx.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163nlidbpkl.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163aqivwcbl.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163etmiialo.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163kbxuoeqz.html

[U31] Py：单测
来源：http://www.xuanzx.com/163cbsezhdw.html

python -m pytest -q
来源：http://www.sxryk.cn/163ghcpoqpe.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163macveuwa.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163xdtlbifz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163uxiewakw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163qkbedvbk.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ndyhtiaj.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163hijvjvab.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163wqicnlqq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163pgxoubvn.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163qabizpnk.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163gzxpiyqr.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163huziwnle.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163xpknypqz.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163uvwwjtfm.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163lhfwpbnu.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163afjzdzrp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163zogkafwy.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163zufpwgzr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mhldgeyh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xamejdpc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163cztvfkmg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163naoirdva.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163owzdrcdl.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163isqxvhkl.html

namespace App\Http;
来源：http://www.sxryk.cn/163gcxjpomf.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163kwlzmfcc.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163axetdcqr.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ofzkkjdu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tzpyoaex.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163esvaweze.html

?string $name = null
来源：http://www.sxryk.cn/163yjvitxgw.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163kgycdwxu.html

int|string $id
来源：http://www.aibaodan.cn/163whzfxzzf.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163atmpytng.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163oqqdsxbd.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163bhzginzf.html

public readonly string $name
来源：http://www.xuanzx.com/163aqdqvkna.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163hvzezsss.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163gxgppmga.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163sixvuxys.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ssbcxobn.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163godvtzub.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163yjexuvfr.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163wwjdvtob.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163lfrcxypb.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163anerwuca.html

$obj?->method()
来源：http://www.sxryk.cn/163kxawillr.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163qqoptwyz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163dhrdbadu.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163mjytzxie.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163eefzxrfc.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163xjvemple.html

"值: {$a}"
来源：http://www.sxryk.cn/163txbowhrv.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163chhjdvzm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163foxosfdf.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163asatyxgs.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xdbsjnes.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mxalpexj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163hahtigsf.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163zeucowtk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ehamlzcx.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163wzbjklwi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ttixzdas.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163fcmmvnjx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163wgckjxgh.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163egqxjbfj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163ozpyhitg.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163nmztvvrr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163nlgmpfqk.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mxqhunzy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163cbfmrnkx.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ezclwnim.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163rofdlqru.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163lhpsuzqe.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163xtqvbmyl.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163lndspdxu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163hnqhmblp.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163eitcmald.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163csgpypkc.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163hknlftdg.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163rqfeqczn.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163miatnerh.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163wykohqfh.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163azmukcle.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ybfazhkh.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163cmpmdvrg.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163nctwfjby.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163adyfacfm.html

composer require psr/container
来源：http://www.xuanzx.com/163jvuxvcsn.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163mtnqfnyz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163uigbljqo.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ehpzkurd.html

composer require twig/twig
来源：http://www.sxryk.cn/163kjtrcizm.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163dvyisugs.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163xdsamxwk.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163cqwsswlq.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163dmitxetj.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163fituoqvn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163kfetogsu.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163kpvjfutg.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163jmvellgw.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ekffkyqu.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163asrxqxsl.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163zqthcnza.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163mouvqvhv.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163wshilnho.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163azdaxwmv.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163unznsfoq.html

a?.b?.c
来源：http://www.aibaodan.cn/163vtftouga.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163gbhysggg.html

a ?? b
来源：http://www.aibaodan.cn/163qxzfggsg.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163wdbncodr.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163yvgsjiwf.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163axpjxsxu.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ayjuobgh.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163pozpsnnh.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163rgnllzth.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ommvxtzh.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yqepscgf.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163skvvjqez.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163xlnorzml.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163pocvldrv.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ebzcmxvq.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163lkreyrop.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163zsieifun.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163zpwkyybz.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163jyrwfwcl.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163tbrekhcm.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163eflvljfh.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163lrbxrstm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163mcdrjnye.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163uurdaznr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163numjkprj.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163dgqajpje.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163rgjpkjpg.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163qeqlvduz.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163tdzztwhu.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163rbzeqkoy.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163yrlorlxb.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163danevohx.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163jaszbglf.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163nbsstzyk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163qxnoeecg.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163mgzgwtbk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163qdopimdt.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163rpgotnmd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163plupqjvd.html

[U105] JS：节流
来源：http://www.xuanzx.com/163dwgigzko.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163wlaxwqfr.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163vapbvvpq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163hlmcxccl.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163afzlzpxq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163edkipiut.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163fdmfzuhc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163pzikywot.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163mupchflk.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163lybukgzf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163uiamswos.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163nhzmzogm.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163lyyozhqv.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163itozgigc.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163mimxbkgk.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163eehokvpt.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163wqkealnr.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ccttbqop.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163racynpfb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163tiooknrt.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163qcpovasl.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163xuhbcyxf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163urcfcqtb.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163sskhdthi.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163utjbodkd.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163psotxcwt.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163rbfrunid.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163nkuaisha.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163gfohkmas.html

npx vite build
来源：http://www.aibaodan.cn/163jwlfffrn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163jywynupw.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163gpzusdvt.html

================================================================================
来源：http://www.sxryk.cn/163bquxqatv.html

统计汇总
来源：http://www.aibaodan.cn/163eteqwlyr.html

================================================================================
来源：http://www.aibaodan.cn/163qxmfcyly.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163yokwokar.html

Python ......... 252
来源：http://www.aibaodan.cn/163ubbmjrsc.html

PHP ............ 252
来源：http://www.xuanzx.com/163vrglzbbw.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163lqycwgpc.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163pguibeax.html

Java ........... 212
来源：http://www.sxryk.cn/163hbdqlrac.html

Go ............. 212
来源：http://www.sxryk.cn/163uvqlgdyv.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ayyziqgd.html

C# ............. 212
来源：http://www.xuanzx.com/163bggskoxn.html

C .............. 30
来源：http://www.xuanzx.com/163osywtuwa.html

C++ ............ 30
来源：http://www.xuanzx.com/163uvoyrcvl.html

SQL ............ 90
来源：http://www.xuanzx.com/163fkrlxdrc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ihbfzdyq.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ibpcrlfh.html

Swift .......... 15
来源：http://www.sxryk.cn/163chpnhomh.html

Lua ............ 10
来源：http://www.xuanzx.com/163xktwatbq.html

Perl ........... 10
来源：http://www.aibaodan.cn/163fdeoousl.html

Scala .......... 10
来源：http://www.aibaodan.cn/163btgxsokr.html

------------------------------------
来源：http://www.xuanzx.com/163hjlpulvu.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163hbljwhlv.html

按章节统计：
来源：http://www.sxryk.cn/163swnojwak.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jjddzqpk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163okdayaon.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bgeqvzmq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163lqasuknc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163azfvcrrr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wrrzucrr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163trcxoltr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163cjhtdqoy.html


<!-- 参考信息 -->