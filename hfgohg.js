外链999!wailian999！

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163fosswfmv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163oznsfcad.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163dppjuguq.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163cpspmndj.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163cxppsspu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163cqskrmnm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163cgcinhew.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ejczicie.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163atkvskcm.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163laeyoipv.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163nonywtzx.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163sdplaybv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dcrfdvtx.html

================================================================================
来源：http://www.xuanzx.com/163fljbpiyv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wxbxjazr.html

================================================================================
来源：http://www.xuanzx.com/163wqdskten.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163aukqwcgw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163tkfrztso.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163sfxmrwrg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163yyhsefgy.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163koddowvl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ffkmsyxb.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163jczeglqe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163iojfegqe.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163terjylpk.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ckvpcviv.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163nfpgjttl.html

{**a, **b}
来源：http://www.sxryk.cn/163senhhbcs.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163sngsizwj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163zqhciayo.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163egbpmxph.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163nsxsqzel.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163oeurmopp.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163pqzoaavt.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163yznkcdlz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jzlnodhz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ptfhdllu.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163tjkudywr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163pioimnrr.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ecfnurmw.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163wiexepsa.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163tvmmacwe.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163oqeyvksc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163fzxjnkjw.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163jomjubux.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163kjhwdztl.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163gtlrdbbs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163hozqrfdc.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xqxersil.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163pjowogdt.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163hlmxmvuq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163bwagxiak.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163vjtnicop.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163jgetmzqv.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163hompmklm.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163kwaekuyk.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163fsbjtfdj.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163nevoxzek.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163srcvzsqx.html

list(zip(*m))
来源：http://www.aibaodan.cn/163snqgqdfr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163rpizbhnu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163riickwbu.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163wupqbgqt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163zbcclwnj.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163jeclchyl.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163dqyoeccc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xlquffbp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163uhojfxsw.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163bcrsdtjl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ovorssgj.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163fzusruqd.html

UserId = int
来源：http://www.xuanzx.com/163oyhajbut.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ajzvykko.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163wfryvkwc.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163hmntmxce.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163pbolxvzh.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ivtlvzuo.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lwlvykqh.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163psiniziq.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ycshonlo.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163kyywduwk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163climbwlc.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163pvhekgcx.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163nhugudhb.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163dgbffzvy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163izdwzxku.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163xrgdpxaz.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163lmjkhrix.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163cvvduuqx.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163niekheya.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163upfhbhhb.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163kfhceqme.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163fvozdbfr.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163arwnsjme.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163sswcilqd.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wvoqnyck.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163jszfotga.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ctgfujqv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tzebciqs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ryvnqeob.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163mqqbpctw.html

namespace App\Http;
来源：http://www.xuanzx.com/163epimwsjt.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163axreokft.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163shznezci.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163goichrje.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fpftdfkn.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163culnafxp.html

?string $name = null
来源：http://www.sxryk.cn/163ggdjijar.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163yugfmyge.html

int|string $id
来源：http://www.sxryk.cn/163biquhmwm.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163deieorna.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163jleffsdd.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163zhgngrog.html

public readonly string $name
来源：http://www.aibaodan.cn/163bferxrpq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ksoliikz.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163cagtjvem.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163rmbxgulm.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163pvqowlys.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163pnohdwot.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ufccmhal.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163tglmwyrn.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ufjrmwla.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163rqxlafqa.html

$obj?->method()
来源：http://www.aibaodan.cn/163qnxjdqjg.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163plmsimuf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163xqfdbgwv.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163sqzdhpti.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jrgweerf.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163yzgzksbh.html

"值: {$a}"
来源：http://www.xuanzx.com/163jydxvrbv.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163oblhhyia.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163prxtfnlm.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163dggcxrkx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ooengcdg.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163xvzwwhyx.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163vtilksyq.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163zcnfwqtt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wlnmeczj.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163aaajqrfc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163pouhbpgm.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163iprpyzcm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163woryqjdi.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163xhpysxqj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163plbspqwk.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163numbptcr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163attpjdge.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163lptulrzb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ncevqmnh.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163iurbdsto.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163rfjxajqh.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163bqpedgkg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163zxjkygkq.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163mmzwwtle.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163sufudusk.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163crygmtln.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163jvtywesk.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ovasrogx.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163dkqwnpcn.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163uejcinbk.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163glpzqpow.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163oueypqzt.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163tytrwupe.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163awtekhid.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163bnmuejpm.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163cullmkvc.html

composer require psr/container
来源：http://www.sxryk.cn/163zmohdhzq.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163tzcztxsl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163mukbfalk.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163bqvyhqyc.html

composer require twig/twig
来源：http://www.sxryk.cn/163hnyqjfrf.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ybfgsfgd.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163cjaydrvb.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163zhoggncq.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163mljsaeoa.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163iqxvcspe.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163rylawzbv.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163xjlocdxf.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163pkvhaegw.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163amrrimrd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163wkzotsmn.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163vcpkoqbt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163beozcabx.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163hwokfems.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163vblcflrq.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163etkepslk.html

a?.b?.c
来源：http://www.xuanzx.com/163gqggbdyp.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hrcczpfc.html

a ?? b
来源：http://www.xuanzx.com/163ymvemjrk.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163nougejep.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163yunwvgat.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163jwlbusge.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163bdlvymla.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163kelnptwl.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163uzbbjvdd.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163shlnsfgn.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tyghspah.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163wwohpsrm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ssastzzu.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163qvdbuvlr.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ytumhuvw.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163zxwjyzah.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fslicnuy.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ptdiufpq.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163yytiuozn.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163qbquegwj.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163sjzcgfyp.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163iyqchuxs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rdbbkuqa.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ywintxke.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dpvzmzmh.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163hkwapzlh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163fqcaqjon.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ojhzicta.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163kofmfssi.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163fagnopxp.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163hvwqgprl.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163mbikzait.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163knbezhhe.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163svgrpwvm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163rwopdvkf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163uqesaukv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ljyktidu.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163dqhfinvq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hkwdtpjf.html

[U105] JS：节流
来源：http://www.xuanzx.com/163heyutwor.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163bgcswdcv.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163amxavhor.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163tuiiohqd.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163iykqltgy.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163wzfuhdmi.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163gnqhmwce.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163epqsddwn.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163nfyetmzd.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xjiwinrk.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163grbipszb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163zyyqmuvq.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163vqnpetbr.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163jqfblxho.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ufwsqpbe.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163yhuhzoyg.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163vrkvlvxs.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jjjsxyxg.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163bcgyukpa.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163zaewctsm.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163qoklqlhx.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163pzdefxvq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163fgpzejfr.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163fdexgail.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163pwhroiml.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163eaomhkxt.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163snynagxm.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163gtewdgxy.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ijnfvowq.html

npx vite build
来源：http://www.aibaodan.cn/163lecjwkbe.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163dlfjrrpq.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ontgbqms.html

================================================================================
来源：http://www.xuanzx.com/163vseslort.html

统计汇总
来源：http://www.aibaodan.cn/163qoyloxyz.html

================================================================================
来源：http://www.sxryk.cn/163ojoclmkk.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163eccgpany.html

Python ......... 252
来源：http://www.aibaodan.cn/163allydlby.html

PHP ............ 252
来源：http://www.aibaodan.cn/163itnfyhca.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wyuxuvjd.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163gojksnwt.html

Java ........... 212
来源：http://www.xuanzx.com/163wqtcqdgd.html

Go ............. 212
来源：http://www.xuanzx.com/163thbzouje.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jppmwvfv.html

C# ............. 212
来源：http://www.xuanzx.com/163jmhxlihz.html

C .............. 30
来源：http://www.aibaodan.cn/163kimbqcui.html

C++ ............ 30
来源：http://www.xuanzx.com/163erekmyxo.html

SQL ............ 90
来源：http://www.sxryk.cn/163trroczmu.html

Bash ........... 80
来源：http://www.sxryk.cn/163wayxskag.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163iiaswjpb.html

Swift .......... 15
来源：http://www.xuanzx.com/163sggdorsz.html

Lua ............ 10
来源：http://www.aibaodan.cn/163tbxfadev.html

Perl ........... 10
来源：http://www.aibaodan.cn/163jmhuikpe.html

Scala .......... 10
来源：http://www.xuanzx.com/163wjmilaiy.html

------------------------------------
来源：http://www.xuanzx.com/163nmuhkpbj.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163zeftxavx.html

按章节统计：
来源：http://www.xuanzx.com/163kbdhfofc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tgskiawl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vseziqqh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163svvedhlj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163titjjxqs.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163saeepkef.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163plpnutcp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163uqyjicbi.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hoeyevmf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163isitelmp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zpqubxas.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cairjtqv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kydeaika.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zjgkqgfa.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mzerowae.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163acsjtlbc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gljnmgdo.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163cefdybom.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163olwtatgx.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163gqaxecda.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163rgbotdfb.html


<!-- 参考信息 -->