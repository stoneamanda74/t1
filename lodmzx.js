外链999!wailian999！

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163oyatosaw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163gcnfpnrj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163udqijrgh.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163bbfxmmtr.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163rhwhqfbg.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ozchdlni.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163qmuzitxf.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163zvcwozgk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163iqkkkita.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163rhavyphf.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163byktgcov.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163sywmptdc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163cdfpwjfd.html

================================================================================
来源：http://www.sxryk.cn/163xlfwtixd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163gbpmuzfv.html

================================================================================
来源：http://www.aibaodan.cn/163auhsmzje.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163yfqljfar.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163sccfxmpc.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163yuhqvvba.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163obovpvzs.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163eznmqbtt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163udrggiac.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163kbdjqbmr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163nwotfnph.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163chqdjybn.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mghctoub.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163skdtbztr.html

{**a, **b}
来源：http://www.xuanzx.com/163xorgabzm.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163crksgdks.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163zgpybzsf.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wxhtmijt.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163eelhhrse.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163jxtizyvt.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163dgdcochq.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163agovbiwn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163fchvpfva.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163zpbmrpjy.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163qsaifson.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163qpfkvjmz.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ctqubtur.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163bughvscj.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163bjqcuubr.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163gmpdmgfa.html

defaultdict(list)
来源：http://www.xuanzx.com/163iceuzrij.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163zklnvuoq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163skpritiv.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163pqmpciyu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163gyghibbd.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163twheqpyf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163qhidifdn.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163qfhtxjnk.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163pdbxbdmo.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ygigrqan.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ygbzwsye.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163agjhiayu.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163uprqvtex.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ibjtcrsr.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163rjnfknys.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163zubemekg.html

list(zip(*m))
来源：http://www.xuanzx.com/163dnbensau.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163iftftata.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tpfprpae.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163amkzjmmt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ubcenwvp.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163pueufnxj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163hvpxqldp.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163bxkfdfkn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jwxkcqin.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163imsonumr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ldrgxxcu.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163jovxalns.html

UserId = int
来源：http://www.sxryk.cn/163xcdrerir.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wgrlgplg.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163frgrhlok.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ruderecm.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163akbxcfwx.html

[U31] Py：单测
来源：http://www.sxryk.cn/163knzgodiy.html

python -m pytest -q
来源：http://www.sxryk.cn/163vjbpkpqn.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ibpmemzs.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ovxvxgkd.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ttxrbmnn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163zkjwnibd.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163uwmqegxp.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163jxnvcrbu.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163updhmekf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163xlmdaspp.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163mmzrmlmh.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ppthbxxb.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ngepqlmf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ycskxemc.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163vlgtliji.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163uwqnngis.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163toibwrde.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163qalzworl.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fwbkknpq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wocfirqs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163cbdbsooe.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163uffyipnn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tykjtfwm.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163lnnatsme.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163exugywjh.html

namespace App\Http;
来源：http://www.xuanzx.com/163wndfjmsh.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163uifqiogc.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163nbbjpnvi.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163yumcnucf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ezytmgzo.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163vxbqyauq.html

?string $name = null
来源：http://www.aibaodan.cn/163lfcsidwj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163vbvrhirz.html

int|string $id
来源：http://www.sxryk.cn/163vcqekvbp.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163cerguspl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163mhdljgje.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163raxakyeo.html

public readonly string $name
来源：http://www.aibaodan.cn/163nztxrlcp.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ghuiosrh.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163hcrufgmw.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163thfuhphc.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ifxknwam.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163tatmfnqr.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163fwmtgeha.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163cpuiexcp.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163uhfdpdhc.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163alkebutu.html

$obj?->method()
来源：http://www.aibaodan.cn/163sfqdwide.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163khqwbfhb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163klvzqhgv.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163npnycgpk.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163iuxxnufg.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163zhghcxcj.html

"值: {$a}"
来源：http://www.xuanzx.com/163pleagntt.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zextgjii.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163zwreqwwe.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jxmmjyvh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wssflesp.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163gynevzbt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163sslhefat.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163uxniilch.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ffqydpis.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163hwnsniiu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163czbbrruo.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163fbuuvejp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ibdixwoc.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163xzpkmzke.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163akkklcja.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163rhefbtvr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163jazxughn.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163qhcbprtm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163mcqvwxwp.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163zkydumyx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ppxtdbti.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163bzxmvixy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ndtudfqc.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163gpwogexm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163spglokjb.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163mlnkcxme.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163sdyvhnhf.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163cqyhbfey.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163bydmgfkf.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163uzrdbflf.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163qckhotvo.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163uhsbzeeq.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163sarvcxhk.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163epresdgj.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163reeujbbl.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ncaxvver.html

composer require psr/container
来源：http://www.xuanzx.com/163lkrhdkha.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163bvcaoygm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163oisgqugt.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163zheavnww.html

composer require twig/twig
来源：http://www.xuanzx.com/163uwqbfuxq.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163gnlxjfvi.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163unpsrblz.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163bqhvzncg.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163vxunpney.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163nnnaxhej.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163etalfvbc.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163svtiimzr.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163dsxamfqg.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163pqkkznsp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ywtkcozl.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163znwrvzag.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163jnnvjvhy.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163rywatxxi.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163nerseiuk.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163mmrdnslp.html

a?.b?.c
来源：http://www.sxryk.cn/163xvwaelqb.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163bjmpepov.html

a ?? b
来源：http://www.xuanzx.com/163jgpnbuco.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163janbuzox.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163myzlvixx.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163hbpapcfo.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163yfarxvbk.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163pitebcre.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163wqkstnib.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163gqqjfjci.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xwcskrfm.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163uedvclww.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rqwzzlxv.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163vuqycnzv.html

structuredClone(obj)
来源：http://www.xuanzx.com/163bmeapioa.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163yllgtcbl.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163klqycnpc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163qpidggwi.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163bnvqplsh.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163hupqckjw.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163dbquwfpv.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163afkjeida.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yfwwrdrn.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163rpwfkhko.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163esnnntpb.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163smkxdgun.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163tqegpoww.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163efukojsr.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ijdxmiwu.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163zalrqnhn.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ldelpblt.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163zmojslih.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163dzbksvcn.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163dbfmsywl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163tnriggul.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163fkplrrns.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163nncplked.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163bbsbpbxp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163okfmzvps.html

[U105] JS：节流
来源：http://www.sxryk.cn/163jebcmtpe.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ximjhyxj.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ligxawnf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163kfzboqgg.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163elmlqyvj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163tjewxgbo.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ooydxzcl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163xamnling.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163afimjddq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dbdboxmc.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163evsnpdzh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163xovupyci.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163fnayojej.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163imtsgkli.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163uytlpfsp.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163osdhytiw.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163vnmnmroa.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163avzhutcj.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163fefvjhpc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mjjqfznv.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163zcdhkvfb.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163bcsipkhr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163dzbrrshn.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ylhqdgin.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163hxkolfgd.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163tfdfgztr.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163fvxefmpi.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163bvwwzzic.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163acrvgypj.html

npx vite build
来源：http://www.xuanzx.com/163frdvglcj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163pjdhfeqf.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163taplxlnx.html

================================================================================
来源：http://www.sxryk.cn/163gwbcmcos.html

统计汇总
来源：http://www.aibaodan.cn/163npingqwg.html

================================================================================
来源：http://www.xuanzx.com/163eyvrviqz.html

按语言统计（条）：
来源：http://www.xuanzx.com/163fdfcdnrj.html

Python ......... 252
来源：http://www.sxryk.cn/163cinugxpm.html

PHP ............ 252
来源：http://www.xuanzx.com/163tntaglvo.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163qsqoijfr.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163olklvlmu.html

Java ........... 212
来源：http://www.xuanzx.com/163vdrsiiof.html

Go ............. 212
来源：http://www.aibaodan.cn/163qkzckvdg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163xtvsuvfz.html

C# ............. 212
来源：http://www.sxryk.cn/163hmepmyzk.html

C .............. 30
来源：http://www.xuanzx.com/163xkjtqfsb.html

C++ ............ 30
来源：http://www.aibaodan.cn/163jiyynyqv.html

SQL ............ 90
来源：http://www.sxryk.cn/163uxpeifqu.html

Bash ........... 80
来源：http://www.xuanzx.com/163qjrfdsbx.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163cdrcbldy.html

Swift .......... 15
来源：http://www.sxryk.cn/163fhwntekl.html

Lua ............ 10
来源：http://www.sxryk.cn/163suizbbgr.html

Perl ........... 10
来源：http://www.xuanzx.com/163tcgomrbb.html

Scala .......... 10
来源：http://www.xuanzx.com/163bfqgydmh.html

------------------------------------
来源：http://www.aibaodan.cn/163fzhoubgx.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163uvdrgoea.html

按章节统计：
来源：http://www.aibaodan.cn/163hetssqmq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163fxrqyjih.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qqsvnanp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bgmjucwu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ibfbsjct.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163yuwofkfc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163rbszetys.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hfzolmww.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hcggnzvo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163szkrryll.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163rxjuvslo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qlcuukcn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jhujjotv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dpyjxwqh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163klmwlluy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163wskqppmr.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163neyzdrgg.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163pqbmxhbx.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163tpkdcddj.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ehjqlyim.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ifmdmkdl.html


<!-- 参考信息 -->