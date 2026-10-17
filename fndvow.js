外链999!wailian999！

[T49] Perl：函数
来源：http://www.xuanzx.com/163jlyfesly.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163vbhhvqbr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163gbbnricr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163hqeuvxez.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163yedcnjmr.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163eqhlpizo.html

println("Hello")
来源：http://www.sxryk.cn/163tftpwvge.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pebmpfbn.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163jihwpifm.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163berlvxws.html

s"值: $b"
来源：http://www.xuanzx.com/163woxwmfgz.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ptmveqsn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163omgtqygz.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163xvwnieow.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163wepegcyd.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163lwvpnwhn.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163bickokbk.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163zefofvto.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163dsljzgkn.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gnjkvukt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ayshfcow.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163yrtvviyt.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163prysuaae.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163auuyfvtb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163xpnbsyug.html

================================================================================
来源：http://www.aibaodan.cn/163lctrfayk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163qianiwjq.html

================================================================================
来源：http://www.xuanzx.com/163oepzoyut.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163qfnxbvkb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163mbqgyjgb.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163snwkoacy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163soiktvrv.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163fhgpuymc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qzemcpqa.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163toonxdsb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163wsswnkce.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163qmlmeyzk.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163clvxipiq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163bqeslmmi.html

{**a, **b}
来源：http://www.aibaodan.cn/163kbhobpte.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163idpqzqxj.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163bhmzoqny.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163zwwwsdxs.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163axqhyxeo.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163stkbrilk.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nmjlbrik.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yfrxiesf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bcwwlzih.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163mafyubft.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163cafveyig.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163xioszekw.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163abcfwtjk.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ajxnfbfc.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ojkqhmvl.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163jgzbaxrb.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ldgcoweo.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163upokjpyg.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163nvetkhos.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163vnejtflq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163afsgnyqm.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163nwlmgace.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163gzyhnmxn.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163pykoglbm.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163yasyekad.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163zqdmhhvo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163kvqlfvzu.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163mkoxnewc.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163rosokzmc.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163jgiipcku.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ewnnnfwr.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163tzfzgnwh.html

list(zip(*m))
来源：http://www.sxryk.cn/163vappnxoj.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163nkjundcs.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fhyxnnzj.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ksxbanpf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163zbjvhgul.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163exeoxzcn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163iviteoyf.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163yarmgsha.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163vsfkooug.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ravfaawl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163bmlfzqcy.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163viqyikuh.html

UserId = int
来源：http://www.aibaodan.cn/163phxtkypi.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163mclpcdkh.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163qhuyaaaw.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lbzwakhy.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163orjfgvsp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163buvibktx.html

python -m pytest -q
来源：http://www.sxryk.cn/163opyslqrw.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163iwwmahiy.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163jyznnnci.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rnvybyqh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163apzucaqk.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163aqpnzfbi.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163hccrfszp.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163sywxxqrm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163owygtejv.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163lvhwmdxr.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163sfaeqxrz.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wqplwnoo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ihwwbgfu.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163osjehsfu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163vqwigjtr.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163fbmuabbi.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163omdsbokk.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163gvuhhllt.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rdmlnaih.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wjpjimpu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163cedhyqmc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163yjgwivhq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163jopphfyd.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163enyyaswr.html

namespace App\Http;
来源：http://www.aibaodan.cn/163litfpvwj.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163mtqqvdox.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163dkfknhyi.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163okeymgzt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163itwxzpbh.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163eegukuqf.html

?string $name = null
来源：http://www.xuanzx.com/163xuuaodrj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163yhxhoakg.html

int|string $id
来源：http://www.xuanzx.com/163yiyidlge.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163mmbslxyd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ibfvidob.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163xrydchwv.html

public readonly string $name
来源：http://www.sxryk.cn/163lvozhbhx.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ksljyklx.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163rtgjknhy.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163loivuaht.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163pkcrzizv.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163sxstfwbd.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163znyxuwge.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163fxhezgoa.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163vguwmvuy.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163iwjkoaok.html

$obj?->method()
来源：http://www.aibaodan.cn/163cmhyuius.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163omcqbnxb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163havsusoa.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163rcekdnfe.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jlugqcnh.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163ffjqluef.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ezpszahn.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ydxtqxrg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163gxcvmkak.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163dbvnqlqi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zkanemgt.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163pvkolpwh.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163psrxdakb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163xlhcwopr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lxvkanxj.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163muqaauks.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163hdbfdwht.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163cdaaeyfj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163foutdhya.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ywyvekbc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163pkvpoyai.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163xhcdmuzt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163sixtihgf.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163sjevxpau.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163mxpxghvr.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163zxtnhxea.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163vtdrcfza.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163civsxvmk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ohdeubbj.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ndphdrmn.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163jfgnbdoe.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ymklmplo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163xxvgkzgs.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163axfpzrko.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163demiovyu.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163azvrzfrr.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163lsmosfql.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ygqcaqke.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ttwukdyc.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163eivhjhmx.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ijlgztsb.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163obqknjwq.html

composer require psr/container
来源：http://www.xuanzx.com/163jykavvmu.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163gfqspwjg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163zlygllgo.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163quftncds.html

composer require twig/twig
来源：http://www.aibaodan.cn/163cujjybwn.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163rwvqqvvg.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163xsoncwre.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163urlefcai.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ytldzojk.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163qpcpvvoa.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163nevowcnv.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163lpdkdccq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163fiqlxtcs.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163atcbomxb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ppmzciwm.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163krdpilhl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163qdzwzgmh.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163pkojxqsw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163yohmcfwm.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163qkmrhzsj.html

a?.b?.c
来源：http://www.xuanzx.com/163rclrpizm.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ezfdquxo.html

a ?? b
来源：http://www.aibaodan.cn/163njlhxthy.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163csozgfno.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163vcklaytl.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163vasrniji.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163shytmmih.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163hjdbejzu.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163xykvsjco.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163hgttqzzb.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mufedqox.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163lfdvjeyo.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163cgtbtozf.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163jfyhkplk.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ajswwjwu.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163uhihysdg.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163yyjysfin.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ypfqglkv.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163oennslaa.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163xpwujanz.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163zkyrwcmu.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163lbenputf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vsfnbzzf.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163iuvzhjmt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hrokinnl.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163hquytfku.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163vooqfdtr.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163wgzyhlgm.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163qvxmqgsf.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163tsnrcudy.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163nypcvtzt.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163ikqsnwqj.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163hahsentv.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163fxplyknu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163xrwnyadw.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163yvvqydsp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163bfcvwiha.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163cchcmlfq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163aaqtekki.html

[U105] JS：节流
来源：http://www.sxryk.cn/163eldxflcr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163aioisseb.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163flvtjfmb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163clkpckmc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163lgedaufp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163jyirjnwa.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163jktkeuas.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163lrmlievd.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ilmtowvh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163yjsjrubb.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163dxcdovjc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163hpsmdyfe.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163okojjaxj.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163oovwhmzs.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163hioqnabl.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yusczskd.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163stmkzakf.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yxpmmmwg.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163bkqclxvh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bpwuaxma.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163cpyvjiej.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163tsvhdcon.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ogpurljp.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163acyzoxez.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163pxvjmkuq.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ncillwdv.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mfexzyus.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163zgmnfmvi.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163pclksimj.html

npx vite build
来源：http://www.sxryk.cn/163dypeixiy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163thyilrir.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163vdkrknxc.html

================================================================================
来源：http://www.sxryk.cn/163dnzhkncp.html

统计汇总
来源：http://www.xuanzx.com/163wqayplwp.html

================================================================================
来源：http://www.xuanzx.com/163idwkriki.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ukdacetg.html

Python ......... 252
来源：http://www.aibaodan.cn/163xohxbdem.html

PHP ............ 252
来源：http://www.aibaodan.cn/163lffrcmgb.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ylnyozch.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nffxwecb.html

Java ........... 212
来源：http://www.xuanzx.com/163fwudhwes.html

Go ............. 212
来源：http://www.xuanzx.com/163sjbetrwu.html

Ruby ........... 212
来源：http://www.xuanzx.com/163islwcjem.html

C# ............. 212
来源：http://www.aibaodan.cn/163deyqytsm.html

C .............. 30
来源：http://www.aibaodan.cn/163zwjqidqp.html

C++ ............ 30
来源：http://www.sxryk.cn/163gouoabvd.html

SQL ............ 90
来源：http://www.sxryk.cn/163htmvkzni.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ktzmnvoe.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163pljjfent.html

Swift .......... 15
来源：http://www.sxryk.cn/163vvhmyzwq.html

Lua ............ 10
来源：http://www.xuanzx.com/163wdygjjrz.html

Perl ........... 10
来源：http://www.xuanzx.com/163unxyalwp.html

Scala .......... 10
来源：http://www.xuanzx.com/163bewysdlu.html

------------------------------------
来源：http://www.xuanzx.com/163uxutaubo.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163lihykrbi.html

按章节统计：
来源：http://www.aibaodan.cn/163paddqxeu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ksljdhbk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gdwwnljy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vrmlcwrd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163rajhsovf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163juakrjbb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gavelrht.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mgbsxkpf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163csgbnnmy.html


<!-- 参考信息 -->