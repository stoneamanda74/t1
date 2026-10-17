外链999!wailian999！

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163npbsmgyv.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163wpyeocdy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163jzwjzzag.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163exdjxtis.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163gclaitcp.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163mrksmtsr.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163btvftamv.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163byvhlpmh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163llvdwags.html

================================================================================
来源：http://www.sxryk.cn/163bnznrdja.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163kquxdcwk.html

================================================================================
来源：http://www.aibaodan.cn/163qqylbqcc.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163htvnwyog.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163rpzjxjeb.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163xopbspem.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ysudjyor.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163cvttwqkc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163glzpjemp.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ncfvyrrc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ojtarjmv.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163whaozeon.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rwdkjneu.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ticpvwhf.html

{**a, **b}
来源：http://www.xuanzx.com/163iwthdezr.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163xbdvietc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163uznvbmcd.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163nyeyqvwb.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rkmzblfp.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163lxouvoci.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ecjzollp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ocmabjew.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163bydsrlsu.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163vrxeztmz.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163rrscwqsq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163cmyefesq.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163fycsuqyw.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163qpeakrrt.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163jfxqcpfj.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163zueuyodl.html

defaultdict(list)
来源：http://www.xuanzx.com/163dgxebiza.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163yazrnlup.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wzjfbpmt.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163hrouckfs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163mrkpxhfr.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163nttzcncs.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163wyagjljj.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163lmeykpnq.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163jmvdwujd.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163sqlhchxo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xfivsmmp.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163htrjnfiv.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ilrlvzls.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ndhasxva.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163fxmzrpch.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163bgjtxakc.html

list(zip(*m))
来源：http://www.aibaodan.cn/163mvrpgxpv.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163dqhdotoq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163qxbntypv.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163yokmmfpg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163dwvpuspr.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163retnfbak.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zqxgapxh.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163fktewfjd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163rmcuqjsb.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163fkalhjde.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163bqbtvlcg.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163uwxewutr.html

UserId = int
来源：http://www.sxryk.cn/163zajdogiz.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ckyzytuj.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163mghobatn.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163rlfgtpwr.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163uomkrftr.html

[U31] Py：单测
来源：http://www.sxryk.cn/163chenarme.html

python -m pytest -q
来源：http://www.aibaodan.cn/163hgmktogf.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163sftukzxh.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163hudyperv.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163dcnzliar.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163mktdiwkt.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163vrwlvdot.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163wcvqlgdk.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163dvswituy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163jtyeoprg.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163iempllwz.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163cnwvzgqv.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163bfmljxpt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ozstlvdx.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163njrivfbz.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163exkwjkkt.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ykntficb.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ebnxqixq.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163nduynzoc.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163iifajhnd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163vbjjegcv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163awmuwnhr.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163fwoqcmhu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163zlkrzvse.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163akpqwndg.html

namespace App\Http;
来源：http://www.aibaodan.cn/163suudodyn.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163yqrszqtu.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163qpfzhbpy.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ftxtrbzc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ceepcrtx.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163atgdsony.html

?string $name = null
来源：http://www.sxryk.cn/163qruqjicc.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zfiwmciv.html

int|string $id
来源：http://www.sxryk.cn/163jingjntr.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163hnfzwsif.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163kiffgufc.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163jkdgsxuo.html

public readonly string $name
来源：http://www.sxryk.cn/163mpdspxai.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163pkeyinys.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163nfrwwdsj.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163euxxsbsq.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163cisutuwa.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163vpmkslne.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163soajiolc.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ojmioyhy.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ttldkkem.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163bggrlvkp.html

$obj?->method()
来源：http://www.sxryk.cn/163oudutyst.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163xodphico.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163yfbywbxa.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163mqmtzmer.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163girvphpm.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163hvihzlrx.html

"值: {$a}"
来源：http://www.xuanzx.com/163ybfoyqfh.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163tncaaunq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163propfjyr.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163hphoeqil.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xgjmsybc.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163siwzkzwc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163mjldcbyf.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ybsfjcau.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tolljamu.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163zdgrbtaf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163dtbxfekk.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163robbrbuo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163wdbzpjty.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163pjfoutyg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163myagauce.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ymbqfjns.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163osatujue.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163datqiwjp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163qzytcmhk.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163nhhksfmu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163sbroahfa.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ydwmbsek.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163vxxjghdd.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163lvhzxnjb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ounmvrcw.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163wsiamrns.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163bqdpndqx.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163okqhitur.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163dmwdpnpq.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163hhmtdbti.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163ylawozdv.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163vurinzre.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163seqefmzk.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163yqycvtpt.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ouxcaxex.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163hmimmtml.html

composer require psr/container
来源：http://www.aibaodan.cn/163sfjooirn.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163pqkfljwm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163gsqauhjl.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163bbtflcri.html

composer require twig/twig
来源：http://www.xuanzx.com/163ghgnnlvh.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163oafphlvm.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163avipkgfi.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163qxajthgz.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163ykrxxrds.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163eamlnkli.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163hrmevxet.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163mxdhmyke.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163mfnqombu.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ejmuhlpf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163bmkcrdao.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ixvmdjxz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163zfhwwvgo.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163dygjhgyd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ahrpgyxu.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163lmzopxvf.html

a?.b?.c
来源：http://www.aibaodan.cn/163gfmihtot.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163gokkoygi.html

a ?? b
来源：http://www.sxryk.cn/163peoijqay.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163enhiunri.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ibxlozoe.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163jrdikggd.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163hjgnncva.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163acceydfy.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163qcjoeadw.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163gmmuetow.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163oprzcmwg.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ufcwxntq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163dethsqfo.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163wjuuhyuo.html

structuredClone(obj)
来源：http://www.xuanzx.com/163qvrxebyw.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163rzqzyhvu.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163vxonivza.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163pxxrxvke.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163lobseomx.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163fvehfmml.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ehvkhlnf.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163icenvkao.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163piarrjsl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163lhhuyxbe.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nprfzzqt.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163vctwiuxj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163hovmyybl.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163oayclevk.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163upogubjk.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163fehpaxyo.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163nngowucd.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163gazrddzr.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ovkpphxi.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163zuhkahju.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163kuenxqco.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ridlhecl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163oirpkaww.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163djsicltz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dbsnljyu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163uuzurpek.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163sjuxesqu.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163lvzoiwsl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163eewdfsod.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163itjhddxn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163uptdttdv.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163geszxmbq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ryyagtcz.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163stovacts.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fqogokce.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163xwhsfnik.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163euzgqvvh.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163jvpxsqxq.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163pkeesjul.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163rkxeiacb.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ypzqrshe.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163fcaawvxs.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wwwcquqc.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163lomjogyv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163etmabdit.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163wehimwgs.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163rjypnano.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163uedqiokh.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163tmjxodge.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163dkqlbkdk.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163oruzhuzs.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bidksphx.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163uubywgfr.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163alrboljr.html

npx vite build
来源：http://www.xuanzx.com/163nsrxdyve.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163onqqiqwg.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163rsmwuxwz.html

================================================================================
来源：http://www.xuanzx.com/163zelisuik.html

统计汇总
来源：http://www.sxryk.cn/163nmssxvcs.html

================================================================================
来源：http://www.aibaodan.cn/163cerbrhgx.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163fsqkekaq.html

Python ......... 252
来源：http://www.xuanzx.com/163cvpfrtnn.html

PHP ............ 252
来源：http://www.aibaodan.cn/163msrntrki.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wwdjsyjl.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163zxcepnis.html

Java ........... 212
来源：http://www.xuanzx.com/163fufdqlaz.html

Go ............. 212
来源：http://www.xuanzx.com/163eblusxve.html

Ruby ........... 212
来源：http://www.sxryk.cn/163dbkempyu.html

C# ............. 212
来源：http://www.xuanzx.com/163oocmrsae.html

C .............. 30
来源：http://www.aibaodan.cn/163qpvldweu.html

C++ ............ 30
来源：http://www.sxryk.cn/163vwfxuxrj.html

SQL ............ 90
来源：http://www.xuanzx.com/163zybrahqr.html

Bash ........... 80
来源：http://www.sxryk.cn/163bbzyemsq.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163eihnqaen.html

Swift .......... 15
来源：http://www.aibaodan.cn/163wmxfgrcm.html

Lua ............ 10
来源：http://www.xuanzx.com/163wxsjjqvq.html

Perl ........... 10
来源：http://www.aibaodan.cn/163geiwsaas.html

Scala .......... 10
来源：http://www.aibaodan.cn/163jrelochb.html

------------------------------------
来源：http://www.sxryk.cn/163tgkyudfj.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163jodlatii.html

按章节统计：
来源：http://www.aibaodan.cn/163ljzdhztt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163qpzaqgrg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bxvydpbn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lmrfjrsa.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163wqczwjzh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ucvxtpeq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163iuidvrai.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163pbrtonkc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163gdrhgyfe.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bcwanunc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163suwhtdsp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163inqxgaql.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gagpzgrd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ozylgljh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ewbyraty.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163lswpboxu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vuynevtv.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163avcqqimw.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163egazulua.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163cydeftrn.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163fwoadjtl.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ieahzwfk.html

------------------------------------
来源：http://www.aibaodan.cn/163zkdoymal.html

合计                                  2106 条
来源：http://www.sxryk.cn/163mxzzfpza.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lxepnbuv.html


<!-- 参考信息 -->