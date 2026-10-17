外链999!wailian999！

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bxiqbaps.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163xotrxyhr.html

s"值: $b"
来源：http://www.sxryk.cn/163oejvscln.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163xyrnwxys.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163asyksoft.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163agazfogq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163wfosouvy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163azfxtfxn.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163huetbjwh.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163qprakrbw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163hzfalxeb.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163kmfheohs.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xvfrxpgq.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163scsstizv.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163fcxlnnng.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163pvhtztcn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163csicdlmh.html

================================================================================
来源：http://www.xuanzx.com/163cmestwit.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ufctkxam.html

================================================================================
来源：http://www.sxryk.cn/163acmqtfmc.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163imugehgi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ckuligth.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163zlqmrpik.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163iaghljhz.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163twcwysff.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vzwtwixc.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163dwwyxbwo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163abgnamlx.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163bhlmzuwj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ljirxght.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163rhyrnxyz.html

{**a, **b}
来源：http://www.sxryk.cn/163xvjigumw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vqjqlgap.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xsxmzqdy.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163qwswrgot.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163nkjtgsxm.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163vymmazle.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163fvlognyt.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163kqteuuuj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163hntzabzy.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163wlqyjgim.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163kzqckqzx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163igrnxihm.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163rplnilbi.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163jyykiacf.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163wlejaiqc.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ygunyxls.html

defaultdict(list)
来源：http://www.sxryk.cn/163fwjttavx.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163tqfdqpww.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163efnpaulh.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163twhkvmbl.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ijhnnliu.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163medlhuoo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ssmedfct.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163agolvdzq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163fntgjluu.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163irfgygzq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163mkqsyrsf.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163cpctfejg.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163sudpvtvz.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163koergjvv.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163svomdtvu.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163luuunnfw.html

list(zip(*m))
来源：http://www.xuanzx.com/163jjuiyftc.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163miwgligo.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163lothnsfm.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163qirrfyvt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163wrdumbeb.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163pafsgfsu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163uxqbamer.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163spfpbagg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163oqwfcwbi.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163agucfgbe.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163inmsplii.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163bfcgydsv.html

UserId = int
来源：http://www.xuanzx.com/163wkijfmao.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163jhnqdgvu.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163mukeuwlp.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163sfaezqcg.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163eebtlvec.html

[U31] Py：单测
来源：http://www.xuanzx.com/163vigpcfmv.html

python -m pytest -q
来源：http://www.xuanzx.com/163iuzbgnkl.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163cydxnpzv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163urhqwtbk.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163uwvfgasw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163erwzqfdr.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163rrapoepm.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163tuvrdlmv.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163zzndldgi.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163kbfuuvik.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163vhaozkno.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163lwwvrixn.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163jalufebg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163olmmtjyw.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163usgfbyln.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163chevsvxf.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qgmbilvk.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163wpwsdszz.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163vwkagrrv.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163exzslbxz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163giuoixmt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163srcckgaa.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163uyipyalz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163glkcohxc.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163bbfqpcwi.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ozvsqpss.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163hgbnccxn.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163luwupnqt.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163qfzwlbaa.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zwadzlfw.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163dqqhnmax.html

?string $name = null
来源：http://www.aibaodan.cn/163jibadeqz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163gfjwuakh.html

int|string $id
来源：http://www.xuanzx.com/163jhaztfut.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163uxmbezfa.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163vvuuigsi.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163cdmucgmz.html

public readonly string $name
来源：http://www.aibaodan.cn/163kykolivh.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163icneugbf.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163opasvonh.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163axlbbuxl.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163mfgymbgh.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163truxxhdn.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163huuwmofp.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163jvkzzdsp.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163uroxuhcz.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163cuolcjow.html

$obj?->method()
来源：http://www.xuanzx.com/163qzwvspez.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163jdzyvloz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163gjxtqqmu.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163tgficvdf.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tqxfcbat.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ivsgaxty.html

"值: {$a}"
来源：http://www.aibaodan.cn/163lhaxovpa.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163gsquiuji.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163mdmvkrog.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163wctfxvhr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163brehswbr.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xygwvgoy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163slsnhima.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163yvmcoyki.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zpmmbqpz.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163sembgmfm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163crtuxotx.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163njxgfsux.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163newqsjxz.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163tvlbyewq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163toleiqql.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163zhjpjxcy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ipoohukv.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ouxhnnug.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163bggwoyjz.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163zoiickzw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163chvdtytm.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ujvnurwd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163wiwydjlq.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163iblgjuxz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163rrijxhum.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ctfqfmpw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qjcyaoid.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163wfaqaysf.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163jbeggxbx.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163oczizroh.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163vvikubmf.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163mjzekzqp.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163tbtpqrbd.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163yqtjvvan.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163sriyyikc.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163alnbaisx.html

composer require psr/container
来源：http://www.sxryk.cn/163uoavhbyt.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163wfymwqpj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163rwrhoael.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163cjeqjawv.html

composer require twig/twig
来源：http://www.aibaodan.cn/163gizzgawf.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163meldywyt.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163gblalemh.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163osszcobf.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163zwxrtwkf.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163rkcaverl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163wiwifskn.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163npfcrbmu.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163vllaqwmj.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163xmcskiii.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163mosaaibg.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163qsrdzcpg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163pbpkuwxq.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163mveqawsa.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163trygqtae.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163xgxdjdhw.html

a?.b?.c
来源：http://www.sxryk.cn/163cucghnmq.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163rlihsrwx.html

a ?? b
来源：http://www.sxryk.cn/163qafwkziq.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163watgdqmd.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163yvazugyw.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163xbyecjyo.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163msfzettl.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163vyoifrna.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163zakbbcim.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ntlzpmvr.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wxrmaptm.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163nxktqqeu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163trxxpyur.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163harteqjj.html

structuredClone(obj)
来源：http://www.sxryk.cn/163zoweidsv.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163daqxwhpo.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163tqdfulda.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163pynwkrgv.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163pmzoneou.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ohmngkpw.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163uvgntjle.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163hehocvyz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163otanseqc.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163cnqjicwo.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ynbcmybc.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163siqxmaxx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163jblinrmu.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163kfizxfju.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163llnsimis.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163vxsuwmog.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ygiemums.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163qbqudggb.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163scxrxahd.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163hynryvvi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163swgbojsj.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163jzamulgh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163wtoavxjh.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163wagjjmvu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zaantqcq.html

[U105] JS：节流
来源：http://www.sxryk.cn/163fviuataa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ohyzicuy.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163acktvujr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163eyszgaul.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163erjmmdyn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163wcwftavt.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163skxzqxsn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163goghlxgs.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163lnjlwosq.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vrbrgmux.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163hifckxot.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ivesrwva.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163auelrdua.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163jnctzvwj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163drqvnoof.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163uxbapdfr.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163brpmgdyg.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163inhkdgxn.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163pzqmbajo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dmxgaayr.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163zkmfcfxs.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163odmviitl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ygkjtrip.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163nklakygn.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163vdhcgilj.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163dennfwuf.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163cgyesbfa.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163wenacsxy.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163mgfosjde.html

npx vite build
来源：http://www.sxryk.cn/163mutdyjeq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163wtzjykmb.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163mttlqsvi.html

================================================================================
来源：http://www.sxryk.cn/163afhxhpap.html

统计汇总
来源：http://www.aibaodan.cn/163dyqpghvb.html

================================================================================
来源：http://www.sxryk.cn/163bsndcuhq.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163xsqpixex.html

Python ......... 252
来源：http://www.sxryk.cn/163dbpscogz.html

PHP ............ 252
来源：http://www.sxryk.cn/163zqlivnwi.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163srfddgnj.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163kypnsika.html

Java ........... 212
来源：http://www.xuanzx.com/163dhaljqyv.html

Go ............. 212
来源：http://www.xuanzx.com/163nqqpecpr.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163otyqbyfx.html

C# ............. 212
来源：http://www.xuanzx.com/163glvgxjda.html

C .............. 30
来源：http://www.sxryk.cn/163kiyfxtug.html

C++ ............ 30
来源：http://www.xuanzx.com/163lbypfblx.html

SQL ............ 90
来源：http://www.sxryk.cn/163jtdomais.html

Bash ........... 80
来源：http://www.xuanzx.com/163mtjmizok.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163wvxwbyyi.html

Swift .......... 15
来源：http://www.sxryk.cn/163tffdjujt.html

Lua ............ 10
来源：http://www.aibaodan.cn/163gzftvilh.html

Perl ........... 10
来源：http://www.xuanzx.com/163mxoybsve.html

Scala .......... 10
来源：http://www.xuanzx.com/163kvszpfun.html

------------------------------------
来源：http://www.sxryk.cn/163aicvcwcy.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163nyodlrch.html

按章节统计：
来源：http://www.xuanzx.com/163ctpkbxhg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kmyksokf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163foxkkwda.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mnrscquv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163oikcwlap.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163samkusoz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163geakzacz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kviqpsbk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fmrnopph.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163clfqpwte.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163drfnlwex.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163legomwxm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sznoeowl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uydyxtsn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163kwrnjzeo.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163giicppcw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163socjcezd.html


<!-- 参考信息 -->