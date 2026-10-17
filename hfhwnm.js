外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163chqyaemw.html

"值: $a"
来源：http://www.sxryk.cn/163oivqwpkh.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ondkxwzb.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ruzesbvf.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163muexcgxr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ccyaysff.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163terldghl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wmuzoxno.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163nzpugieo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163gvnllwdr.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163iofhgppa.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163dlaxwqdq.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163pnoeddhi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ytwvspel.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163lxbshcqz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163szwnbhhy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163llmidcgs.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163qjfkcgue.html

println("Hello")
来源：http://www.sxryk.cn/163ldexoidj.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163sjmexonl.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163tejajbbb.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163jjlsaidq.html

s"值: $b"
来源：http://www.aibaodan.cn/163ahhtuugj.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163xblqbjuu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163vopdvlcx.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163smcojppf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163zznsngtg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163rccmucrn.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dqrspexr.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163txzxukvx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163hanufrji.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163zmurdrzm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163hmipbbxg.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163niynkkqr.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163fcfxpsqb.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163errfzxxd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dxvifnkw.html

================================================================================
来源：http://www.aibaodan.cn/163mjaurbiq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163oqagecut.html

================================================================================
来源：http://www.aibaodan.cn/163kzeyfnft.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163wqhzqayh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163oggduxxl.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163rinvoixv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163hhiqmpqx.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163gwqljtlx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ayfekxjg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163drzwtttn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163letlcprn.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163kbxpbvwz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163jsongbjs.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163suwudsem.html

{**a, **b}
来源：http://www.xuanzx.com/163nbkxfelr.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163lfczstdc.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163prufudoa.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163jcczcosc.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163lstezfvz.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rtyjlnkz.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163btoiterj.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163zmarclmh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ffubxjum.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163xyvhoaoy.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163lvvqllfx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163xwglhztj.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163jrwczgyf.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163dsijzcii.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163kgphhylf.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163kpgdbqwo.html

defaultdict(list)
来源：http://www.aibaodan.cn/163yabizfcy.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163cbbvqlgf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163dpnkkbab.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ezsbpgeq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163zhsqdugu.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163njehjhle.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163yaxvodlu.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163kveolfzg.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163grkgcqbb.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163smukjacs.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ofzjhioh.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163rivigiwg.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163hrmzndon.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163frsfoybs.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163pofwzgax.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163jodtxjrp.html

list(zip(*m))
来源：http://www.xuanzx.com/163mtozfrhn.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ynbdnknq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ufcncruq.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163wfbgmnyn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163nwduxpew.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163bqwhmusi.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163jzirvxci.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163awuwleuq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ehskwkpj.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163nfcokfyz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163atduzivy.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dbqkxszt.html

UserId = int
来源：http://www.xuanzx.com/163mezlojdg.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163mdqkgyyk.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163rfzctklz.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163kbreosyu.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163pxfxkegr.html

[U31] Py：单测
来源：http://www.sxryk.cn/163zmezwgam.html

python -m pytest -q
来源：http://www.sxryk.cn/163ziysonft.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163jtfqdhbg.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163obqoeqlq.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163kuygwnru.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163kmndyxts.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163efzddxvv.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163tsgqnqou.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ppkseapf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163fhsuwlms.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163riayxlvc.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163cedlqrme.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pmdbbtqs.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163qlehuesl.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163qnarebxj.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163bvmsktoc.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163wtntbhhd.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163tehfzkyf.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163jvoyqcph.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wwixnluy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163qvuftwdn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163fbfgrncv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163qasqsoei.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163xhnbiymw.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163vwzqzxyj.html

namespace App\Http;
来源：http://www.xuanzx.com/163tbnyawlt.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163mvctazbb.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163jlydskoz.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163pwbbrxnq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jfgcoeqh.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163blujttvh.html

?string $name = null
来源：http://www.aibaodan.cn/163czstvyqb.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ngkgjbgm.html

int|string $id
来源：http://www.sxryk.cn/163hurjcfgo.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163ljxjuonv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163pvwddiex.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163zxuzhfud.html

public readonly string $name
来源：http://www.xuanzx.com/163aoftyvzv.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163sngjwgql.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163jtdihzkn.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163uhgsidwg.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163qphphcrm.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163poiduhff.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163gnzddkfj.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163cvcgvopd.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163vkbpocvy.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163azafyaui.html

$obj?->method()
来源：http://www.sxryk.cn/163xtqmoxpg.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163zngqgclk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163fzkaasjg.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ossbnmtr.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rxkbhtwv.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163tfmpgwtm.html

"值: {$a}"
来源：http://www.xuanzx.com/163iajmuiwr.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jzypfguh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163kgednnts.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163jgxztehq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mzqgtkgb.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163wmwqnsky.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163yqwqanyj.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163eszneiuh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ldrapbhs.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163dyzbsdku.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163aaurwnnq.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163yeozpujp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163quawjpsu.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163wzoqvwgm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163dalgevgf.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163xmdwcldv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163eeqftqeu.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ntdjgpwr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163bmvglvtn.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163jautydjf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163uulvcpqz.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163nrgnncut.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ujenztxa.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163taqcfisg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163oqlrhghd.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ecwxuvdc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163bpwcbsez.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163lxkfenbg.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163oxbtdsnz.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163hdvobpwq.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163sgeqozyl.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163iyqohped.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ggmonbhm.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163rhqyjjgm.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163vahcwcbb.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163etbtmimt.html

composer require psr/container
来源：http://www.sxryk.cn/163kwrtaabg.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163stiaehff.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ixldcqto.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163wvdjinln.html

composer require twig/twig
来源：http://www.aibaodan.cn/163qkpoknzx.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163bxydhvom.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163opgtrlpw.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163llpjqrjm.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163qzqdoqbf.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163amozmkmd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163fqpgpdlz.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163lbmzuihd.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163zeihqype.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163qehnzrxd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163yrefvdlw.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163jbszpikk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ebzqrwww.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163fcfuknsz.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163fmyoaljt.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163hcctoggc.html

a?.b?.c
来源：http://www.xuanzx.com/163tietoknx.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163bclzkhie.html

a ?? b
来源：http://www.xuanzx.com/163afcfdmfb.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163lpskbvmv.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163oedvdrzz.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163lpdbzfmy.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163nzzkbsch.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ufztcvgx.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163yymujhbv.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zituroyo.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wrlnurwm.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ulvldgam.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ecjgomwf.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163fwhrhstc.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163fpyngtjb.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163jkxvrvnc.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163cbgzizur.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163qjtpyhvl.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163rrgdtjwj.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163whnhjavp.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vykfdasr.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163vxxrssgq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nbteqzoa.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163zbjmfopx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mvgfnzvp.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163muhzuchw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163fsqpvoti.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163nlsupxbu.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163dckjglej.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163vcvlpkgw.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163zazzvxhf.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163ueybpyax.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163bvrqqvrn.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163henfeghl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ghokvvcf.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163teoxaaog.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163dzawpyhh.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163xtmxkwvz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gwejelfk.html

[U105] JS：节流
来源：http://www.xuanzx.com/163prcnghjf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163sptreisk.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163xtkgsgny.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ctwpsiaj.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163grnkkrgo.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163zsqssyem.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163cvkxsrpd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163cctvqtwa.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163qxgichzb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163aktkrhgr.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163smhbarht.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ihcdtlce.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163kqxghbxa.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163jiapprzc.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163gwxnljcc.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163okskpddx.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ogkzhorm.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hbunmbmm.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xzhepaur.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mkalejcj.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pfwucwhx.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163mqrswqpn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163weygihxf.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163nneqwsca.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ephzpnfq.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163knnyvske.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163lrjuxivs.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163zgrhrnjv.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163sgdbglhr.html

npx vite build
来源：http://www.xuanzx.com/163nkbnbpks.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163hxqfurup.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163wybjepzw.html

================================================================================
来源：http://www.xuanzx.com/163seynwkqe.html

统计汇总
来源：http://www.xuanzx.com/163oleprenl.html

================================================================================
来源：http://www.aibaodan.cn/163kjyelowv.html

按语言统计（条）：
来源：http://www.xuanzx.com/163naxwjcop.html

Python ......... 252
来源：http://www.aibaodan.cn/163bdzhafvx.html

PHP ............ 252
来源：http://www.xuanzx.com/163haqssysn.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163mjbamxeh.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163jsnsmiux.html

Java ........... 212
来源：http://www.aibaodan.cn/163kldpcfzp.html

Go ............. 212
来源：http://www.aibaodan.cn/163sdpjjpig.html

Ruby ........... 212
来源：http://www.sxryk.cn/163shdbuxjv.html

C# ............. 212
来源：http://www.xuanzx.com/163svzxtyak.html

C .............. 30
来源：http://www.sxryk.cn/163ebhyaoxp.html

C++ ............ 30
来源：http://www.xuanzx.com/163nuyrclix.html

SQL ............ 90
来源：http://www.sxryk.cn/163zrjegabc.html

Bash ........... 80
来源：http://www.xuanzx.com/163fzdlubfy.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163swmroolh.html

Swift .......... 15
来源：http://www.xuanzx.com/163dreyophd.html

Lua ............ 10
来源：http://www.xuanzx.com/163jhtrnhma.html

Perl ........... 10
来源：http://www.sxryk.cn/163ztsdcdcr.html


<!-- 参考信息 -->