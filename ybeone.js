外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163zznzfptx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hqdlabui.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zbvodrkx.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163kinlslyf.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163jdgpcjxd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163oucwtuur.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163zqppnjmc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163pkfgzzro.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vgmvkqgr.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163hfyvlqpz.html

println("Hello")
来源：http://www.xuanzx.com/163icwytabd.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163evmnzcqx.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163thceansu.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163asyixipq.html

s"值: $b"
来源：http://www.xuanzx.com/163erxnochg.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163buxlsebx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163imlubvue.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ehtllotf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163jtsenexl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163gimebnaq.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163wchqqxsd.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163pgjuxhan.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163oqkretdi.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163uxtqnljc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163pybclrvv.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163unopnvsa.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163kbixhgiz.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163pgusidke.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qcutpowb.html

================================================================================
来源：http://www.xuanzx.com/163odiionsp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163rggehtkf.html

================================================================================
来源：http://www.aibaodan.cn/163zwujjsag.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163jlbxgcph.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163pwcohfqf.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ixxwhulo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163iycgdulj.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ywmhgowk.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ldahgmyb.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163lfvrcyst.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163jpzhcurj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163pjnvcwsd.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qjunptws.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zhyrylyk.html

{**a, **b}
来源：http://www.aibaodan.cn/163ijuokwqf.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163bzetwcub.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163bnlexzyx.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163qzrcrlqf.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ajlynrdh.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163kjrrniro.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nihfnsjc.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163syiglcpf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163wvtmsnmy.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163tpoqgixj.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163psmmiuds.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163hluhcscq.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163yikkpzwa.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163pxauuytm.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163gnzyrwky.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163izwuekti.html

defaultdict(list)
来源：http://www.aibaodan.cn/163jntdwxhm.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163chamfkgw.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163obmucopo.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ufvmqpsi.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163cmjkypxi.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ucayxisk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ipqpyzns.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163notrzntu.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vwdbgqhr.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163pecpyaic.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163yrjfwill.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163teskyygf.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163qjssydch.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163amokepqe.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163cmdaplhm.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163biodamiq.html

list(zip(*m))
来源：http://www.aibaodan.cn/163pfkyvxsp.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ubqlrvcj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163yzcaepqz.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ewnbiyhy.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163enbcniqf.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163hcfslwan.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ihfjgbob.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163fkclyekj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163gzsemlku.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163iouauyyb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163dwdbyknz.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163mmirbmef.html

UserId = int
来源：http://www.sxryk.cn/163vswstmmj.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163hehqmhoj.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ixgwukma.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163qcorrsig.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163oolgemym.html

[U31] Py：单测
来源：http://www.xuanzx.com/163horenzex.html

python -m pytest -q
来源：http://www.xuanzx.com/163iwjzwqld.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163xdbdongb.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163vhkkkind.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ctuqzsfx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ehiawdwk.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xmnpmjsl.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163cmpdquzy.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163gzzvwtzl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163vjqtqyvu.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163hvvowvir.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163nkyxbgcy.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163vvcxumus.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163fpdpymlj.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163heeqktvd.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ibmuwiax.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163xvlxqfmu.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163jlhzndza.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163rjxaypqw.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tsrvlosh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163uxongwch.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163nxbjrqwg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ymttpikb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ttgsmwih.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163jnyjpdph.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zxgamyzw.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ahhkqtlr.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163lsnjxpsc.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ldeqbjnf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wlqnfjdb.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163rjayatld.html

?string $name = null
来源：http://www.xuanzx.com/163aazqzofc.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163wpghkvjj.html

int|string $id
来源：http://www.xuanzx.com/163ohldfsfm.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163qgrusbdo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163iornkpth.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163arkxpzkj.html

public readonly string $name
来源：http://www.xuanzx.com/163dyspbkhq.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163situynep.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163wzsttroy.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163nkpajxjf.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163gkkrxmsw.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163lrdxfxfr.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ljksgsyh.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163dejvokfn.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163kkaegygz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163kitlnlhc.html

$obj?->method()
来源：http://www.xuanzx.com/163mlypfjzk.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163vkaefpkc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163qhtklrjs.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163udemdqds.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dmgicnqy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163dwfvnepw.html

"值: {$a}"
来源：http://www.sxryk.cn/163pinxjnku.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163juvfzwuy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163vmxawrxg.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163halwfbnq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gmajjzdc.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163wdxrnmfp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ylizdszw.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163xskyvynb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ihxromku.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163upyiywvs.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163bqhxiywo.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163mdfkynnm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163njizirfw.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163zsjintyw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163paubcxii.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163kswecsaf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163mzaqhyoz.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163lfkgyiga.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163akdsnuve.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163nxehkikb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163gxjjicay.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ctgzmxnf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163cxmcztmr.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163oirzkqgo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163agwsmnab.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163lwxdhtig.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163toaxqaor.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163loystfrc.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163zdypghaf.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163wgzxaokl.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163xmgifaqf.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163kpeaezth.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163wnpwywud.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163dgokgtwe.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163mnauwwvx.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163huhrbusw.html

composer require psr/container
来源：http://www.aibaodan.cn/163gwprzlnk.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163fijrzhso.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163kpwxzvqa.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163vpndyxkx.html

composer require twig/twig
来源：http://www.aibaodan.cn/163vokfdife.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163llrdktin.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ncomdril.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163ehpxfuva.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163uzjrcezx.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163btbkkjwb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163fnrddwde.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ytziqofc.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163sjzhtntg.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163wdthfdvh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163jonglqjl.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163uwerfqpy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163wfymajsu.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ttbkbbey.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163jbmrmknn.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163nyjgzhdf.html

a?.b?.c
来源：http://www.xuanzx.com/163nltqhrjs.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163aowpmqmi.html

a ?? b
来源：http://www.sxryk.cn/163xwtbuubm.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ktjlsbyv.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163lmvjoovn.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163hcvcjmvb.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163dyrwvxhx.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163lxecszan.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163rqtedjcb.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163cnvjdqfn.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ardrcyzc.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163iuotuafz.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163zktnqzsx.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ulytarwq.html

structuredClone(obj)
来源：http://www.sxryk.cn/163qxtqggnt.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163uwqqydkl.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163xxemncpe.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163pntadntd.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xlaftzzg.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163rjnljuem.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163jzhdsimg.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163hgfsbgiy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gflatezj.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163kmgyeqlz.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eohwkxwt.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163fnwlhmaq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163rwugqitp.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163aiipslus.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163mgfgqeqs.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163zcnizflj.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ppbuwhdv.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163mywwwfxw.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163njgfxoxr.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163kbjsxxpe.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163vvrqgvcp.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163enfxrzjv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163kypvngzc.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163brqocrvt.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ytzgsjqy.html

[U105] JS：节流
来源：http://www.xuanzx.com/163rjbcyxco.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163dltxmdog.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163leczzrly.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163mflruhgf.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ukzqazuh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ccimeyeg.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163pmbrvvld.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163fspowyci.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163flotbhvx.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pslbsxbl.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163swjoijwn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163davcabgd.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163neulghvh.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163bftrgpun.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163eewfmunx.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163tnklfsxq.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163remfqbbx.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mwqnvzhe.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ufzrezhm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pxldiuun.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163atlhqkiv.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163uzmvonrh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163yqjwgyxm.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163gilypgth.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163jyfysghs.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ggikcwpt.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163soxokukv.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163qchhqaqp.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163jdzfpdls.html

npx vite build
来源：http://www.sxryk.cn/163puugfjve.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163eiwwctwa.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ludxkszy.html

================================================================================
来源：http://www.xuanzx.com/163ovwzlvrw.html

统计汇总
来源：http://www.xuanzx.com/163jmzcadmm.html

================================================================================
来源：http://www.aibaodan.cn/163fxqjnvdn.html

按语言统计（条）：
来源：http://www.xuanzx.com/163uhsmpqzi.html

Python ......... 252
来源：http://www.sxryk.cn/163bwwyjgnc.html

PHP ............ 252
来源：http://www.aibaodan.cn/163dwfosubr.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163nwqkpuws.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163yuihlkqt.html

Java ........... 212
来源：http://www.xuanzx.com/163gqqbjflh.html

Go ............. 212
来源：http://www.sxryk.cn/163sivuwjeg.html

Ruby ........... 212
来源：http://www.xuanzx.com/163upxcudwi.html

C# ............. 212
来源：http://www.xuanzx.com/163strozzdp.html

C .............. 30
来源：http://www.sxryk.cn/163ipworsct.html

C++ ............ 30
来源：http://www.xuanzx.com/163ynjttpfo.html

SQL ............ 90
来源：http://www.sxryk.cn/163gimquczq.html

Bash ........... 80
来源：http://www.sxryk.cn/163lfbhvlmf.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163cubronhm.html

Swift .......... 15
来源：http://www.xuanzx.com/163xvvffkzb.html

Lua ............ 10
来源：http://www.xuanzx.com/163acfmkufg.html

Perl ........... 10
来源：http://www.xuanzx.com/163dxhchtpe.html

Scala .......... 10
来源：http://www.xuanzx.com/163xpmkntam.html

------------------------------------
来源：http://www.xuanzx.com/163tfvdmcep.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163cikkoiid.html

按章节统计：
来源：http://www.aibaodan.cn/163babcboro.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163bibsmcrj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lesdknxj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163iwrwwxqq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163akcpnxow.html


<!-- 参考信息 -->