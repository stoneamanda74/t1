外链999!wailian999！

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163iwnzvvvo.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163aexbxznj.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ytrxklsd.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163vofdjnou.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163hgzyvflq.html

================================================================================
来源：http://www.xuanzx.com/163kzbcvuzl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wmdmjmrk.html

================================================================================
来源：http://www.xuanzx.com/163vmwhfdcb.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163zfafevbg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163otpilwkp.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163msupvlun.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163udgrclkp.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163qwenzhik.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163cmqisrjh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163sypjwepy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163uisgiqda.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163zkdsdyzm.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xewcnzde.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cwyqxniy.html

{**a, **b}
来源：http://www.sxryk.cn/163pggakixe.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163bibyyzxp.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163dkniosmz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163kuwyacqa.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163hagplqpr.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163xsscapkc.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163qxvpkwsb.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ymyxeulh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163cagedhuc.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163pmjiwhnt.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163kpanpylj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ogoqwvba.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163fvaawahl.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163snmtveer.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163mgfzfdmf.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163wnjowsif.html

defaultdict(list)
来源：http://www.sxryk.cn/163oqoloizq.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163rhcrouur.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163aqegmfga.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163edrnvoaq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163sygzwzkl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163kgyphbub.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163hekbfuen.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163achklpwl.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ruoipqhp.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163iducyvyz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163nzzebdnt.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163rddypqhb.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ewblrpjb.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163gmbqucmx.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163tcryjxoc.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163mjepdtbh.html

list(zip(*m))
来源：http://www.sxryk.cn/163wiqajmbe.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163kqjmvpwa.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163gbrhcokl.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163xyqavcvn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163avltlktb.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163eqfnzvic.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163hbbygqfe.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163pwdgbxyg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163omavzqcc.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163mvilifdl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163uqcabavy.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163hedhmgpk.html

UserId = int
来源：http://www.xuanzx.com/163akmwhzbn.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163uqkqpsip.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163arcuzsom.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163scpgjqxm.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ptkfgyfv.html

[U31] Py：单测
来源：http://www.xuanzx.com/163wfpqbmal.html

python -m pytest -q
来源：http://www.aibaodan.cn/163aokguypr.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163etjyctwd.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163tuggtpuc.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163bdogrjjo.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163qpjzzuau.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ovlqrwpk.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ivpdernz.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ruvxiyqn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163lruvmxiz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163gooksqog.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163yzwduktr.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163zztmljls.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163bvnpmzfi.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163wwhqeldd.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163eyvsfeca.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163vdevgeww.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163srmjhacs.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163sgjpnlke.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163umqgwidg.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ddyuekxo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163gwuvhthd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163gnakjaog.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163kmnsaewh.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163mefqgaoh.html

namespace App\Http;
来源：http://www.xuanzx.com/163lujopzge.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163lclfcslq.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163iemvjxjx.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163kabvvknp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163iiceqaee.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163jjqtxacw.html

?string $name = null
来源：http://www.sxryk.cn/163dkindqgd.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163qdahwhhi.html

int|string $id
来源：http://www.sxryk.cn/163cekxlapw.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163gyubwyed.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163wtjwwmig.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163krkprkwq.html

public readonly string $name
来源：http://www.xuanzx.com/163qkftqcyb.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163hkztixwz.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163vltfvtzc.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163kmlumioz.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163xqzhflio.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ogdpxpag.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163dwooisms.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163wibtddds.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ntjvrnld.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163cnmmuxhu.html

$obj?->method()
来源：http://www.sxryk.cn/163unixditw.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163omakakdn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ynxrsklk.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163zeoctdeg.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uitugiis.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163jqjnjhaz.html

"值: {$a}"
来源：http://www.sxryk.cn/163dlqurjwc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163hkdffjqc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163siatofmy.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163txqlocyi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rlmkcwqt.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163kgdnumgp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163sjmphsnr.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163opyoynjr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163sahcbuhj.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ppceqhto.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163fpkhgvuo.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163nxzawbed.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163rtnshfvm.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ibmbsiqn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163xchzkimp.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163jtssisey.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ykgmzvdt.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163kfbcrebc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163btbnrhjb.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163vhklwujw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163pbwrsmcy.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163pnkfjyve.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163hkrqxoph.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163hkmebiis.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163hkpfbwzi.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163mljtypxy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163tkbmoegi.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163tgnpbhrj.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163azktkaiv.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163dgktoxhx.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163kybwhwpd.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163craesqtm.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163kmxngjca.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163woijqlyk.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163dnbymqvw.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163fsyegsyv.html

composer require psr/container
来源：http://www.sxryk.cn/163vuenoymm.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163szqzlgjt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ltnnrgot.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163tlsdvcnm.html

composer require twig/twig
来源：http://www.xuanzx.com/163nshaubga.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163gzvpuaiq.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163afbisnhu.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163qhgheule.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163sqnkwxuh.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163tcsxxzoz.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163jgxapenv.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163wupbjbzo.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163tynxzubi.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163xmnaxrmh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163idhgthdj.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ihvewaiz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163nruktnuw.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ugflxegw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163xwqlqxfo.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163lpkdoyal.html

a?.b?.c
来源：http://www.aibaodan.cn/163domvjzdm.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163mhmrvqwh.html

a ?? b
来源：http://www.aibaodan.cn/163zagikdax.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163sccykbwb.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163llzonatm.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163eyjlaypm.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163jtxdrwki.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163akvmsvte.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163uulqqxdp.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ooxzkeqn.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cuhaigrg.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163sozkgnng.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163opedgydj.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163cfjzjrao.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163unbtsxsn.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163xtgwuocu.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163bxakvwmg.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ynmqegfc.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163fqjidwlp.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163znuymsux.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vbscnife.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163movhvrww.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wbrgtcry.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163barzkgwl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xglgnhem.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163vjuvzkrf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163sjhujbme.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163jamdnkry.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zfpmbsao.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163vxzfztni.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163qctuikkj.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163zfiqbntk.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163anjwbapv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163amgfsgcd.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163iofqlitb.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ulwpkwcd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163koajalax.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163dmkjltjj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163aoksprsf.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ueevlhut.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163qyenkbdd.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ejsxoxxu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163uhukerzd.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163mxdggpny.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xfqbgfhr.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163uwbwvnnj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163zevtqytr.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163wadenifx.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cttxktcd.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ruhminnp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ecjbezaw.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163yxazvpwj.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163trhqiagt.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163qxfgliuh.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163jyxpsgow.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163dsbnbsif.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zpdxjbyj.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163tgdqsert.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jtsxwhbr.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163wldvgxgc.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163wjlluukx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163mwfafylc.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163tcpgzbcm.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163jtccjvzj.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163yemtnihi.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163tvzkpfqd.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163frtbgazl.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ijfpwbit.html

npx vite build
来源：http://www.xuanzx.com/163jybypkud.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ahmiiphi.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ajlrusfw.html

================================================================================
来源：http://www.xuanzx.com/163udfgbpes.html

统计汇总
来源：http://www.aibaodan.cn/163jstjayky.html

================================================================================
来源：http://www.sxryk.cn/163iokbbltq.html

按语言统计（条）：
来源：http://www.sxryk.cn/163skgfjdte.html

Python ......... 252
来源：http://www.xuanzx.com/163wqoowtpf.html

PHP ............ 252
来源：http://www.sxryk.cn/163cifndfft.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163xseryjpp.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163wfhifqie.html

Java ........... 212
来源：http://www.aibaodan.cn/163vyjejvmr.html

Go ............. 212
来源：http://www.sxryk.cn/163wvfgzkvz.html

Ruby ........... 212
来源：http://www.sxryk.cn/163gmzhrupv.html

C# ............. 212
来源：http://www.aibaodan.cn/163qdidaemu.html

C .............. 30
来源：http://www.aibaodan.cn/163llrrqasj.html

C++ ............ 30
来源：http://www.xuanzx.com/163amofppbs.html

SQL ............ 90
来源：http://www.xuanzx.com/163vbltwssa.html

Bash ........... 80
来源：http://www.aibaodan.cn/163pkvszvhs.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163lxoloinx.html

Swift .......... 15
来源：http://www.aibaodan.cn/163zgdlhnvn.html

Lua ............ 10
来源：http://www.xuanzx.com/163etyaymfp.html

Perl ........... 10
来源：http://www.aibaodan.cn/163gwybnmwd.html

Scala .......... 10
来源：http://www.aibaodan.cn/163juhfzwxg.html

------------------------------------
来源：http://www.xuanzx.com/163flulwpmm.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163sxuphzxj.html

按章节统计：
来源：http://www.sxryk.cn/163oxxcchns.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163zlxodgbu.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kfsgvdkj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163iwxkzsok.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jgefbrnw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163evuxsoca.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163muhxnqxn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bpjytzso.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zepxffsp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163elxgingd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pcxoffgl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163liedxeev.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ngejgiry.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fylxaywm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163wrcenemd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163qukzusbb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zdmvfgti.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163amgvigra.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163uhayoktf.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163hymouyru.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163trznaiki.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163mnssbqbo.html

------------------------------------
来源：http://www.aibaodan.cn/163ituodwey.html

合计                                  2106 条
来源：http://www.xuanzx.com/163lwrteojw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bqtnksst.html

使用提醒
来源：http://www.xuanzx.com/163bhylepko.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kvyusysp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163hauznhln.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163bewajnzr.html


<!-- 参考信息 -->