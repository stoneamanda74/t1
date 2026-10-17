外链999!wailian999！

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163upngpmuo.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163uguzwnhb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163kqhpsnqu.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ytlisilx.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163sgyjasbg.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163xahuyafv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163teoisogz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163iwwkdzlv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163oxrweksf.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163bsjzqqdk.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163zprbbgrl.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163cxnrdcxf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163sclqwqlr.html

================================================================================
来源：http://www.aibaodan.cn/163xdvnlnng.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wqgrqqme.html

================================================================================
来源：http://www.sxryk.cn/163cqimeujc.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163cogdirty.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163alucesva.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163joxbqhxa.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163lpsmykmx.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ecowaeds.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dvotymfj.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163mnzzslje.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163dwyjzlkl.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163kyuvseap.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ktwmfivo.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163bwmotsgn.html

{**a, **b}
来源：http://www.aibaodan.cn/163samusggo.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163czlbqtqi.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163fqqvtmyt.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163wgefxwbv.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163wcaqitcb.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163iuzstwnd.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163iymdztoz.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163hrzvwgeb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163nklmixrm.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163yhphgxfc.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ffcxrhjp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163puwxybtq.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163uohcbnjt.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163stzdxjnn.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163xyeljtbm.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163gnqsqqwb.html

defaultdict(list)
来源：http://www.xuanzx.com/163zzxbmhgu.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163bkrpzboq.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163bllugrkh.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163yrdljvbf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163nwtvkuxq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163vqcfzmqi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ijcbjhcd.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163gjqdfjch.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163pvwdkphd.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ygkrptnt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163awttgbvw.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163diauszgn.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ajpecnjm.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163poybwofl.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163nanqvvoh.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163dmkildcy.html

list(zip(*m))
来源：http://www.aibaodan.cn/163nmboqfyv.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163tgphsczd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163mlwnwjzn.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163tddceicg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163hyqcwjfu.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ehplwngs.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163bwmlrwde.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163wkfnnlxl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163drigtwgo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163qihlojzm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163tzaeohjc.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163kkebanyu.html

UserId = int
来源：http://www.xuanzx.com/163hanvtjci.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163jwcfnzbf.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163kapkqerd.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163giqieogr.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163wkruuovi.html

[U31] Py：单测
来源：http://www.sxryk.cn/163mdqhualm.html

python -m pytest -q
来源：http://www.xuanzx.com/163zmqnncir.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163xmcffwlq.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163xmsskqso.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163kjthiteq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163aawpjdtu.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163hwsohykl.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163gguhuuyf.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ivvzviye.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163bzfubouv.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163doeflgaf.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163bldnrzrw.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163dkmvxhbb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163huxzdghv.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163xvlvupqy.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ehjgekdl.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163waoejdgr.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163frjlcrar.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ifsiphuy.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vsssatvq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tuzwlerh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163pclzglnh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163rngvpiuy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163jzfggiys.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163eussbkkz.html

namespace App\Http;
来源：http://www.aibaodan.cn/163xwjyhmtx.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163nezhzdlj.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163feroixnh.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ufovfhkl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jxzhxhcq.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163xgbgvlhq.html

?string $name = null
来源：http://www.sxryk.cn/163aborxssr.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163xoueoeco.html

int|string $id
来源：http://www.xuanzx.com/163segnxyye.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163wjeymohm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163wtxztcnp.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163lpcrvdrd.html

public readonly string $name
来源：http://www.sxryk.cn/163howmeiix.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163jevduvuy.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163yekibmcu.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163aczrjbxz.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163aclwwvqr.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ibkxoonh.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163fcyidkqt.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163egyoustb.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tstqphtq.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163jkwvmjmp.html

$obj?->method()
来源：http://www.xuanzx.com/163tdbwrrat.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163csmcgxiz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163fkfmslpu.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163wwzhrxvi.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vuaiuxvc.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ykvnztyg.html

"值: {$a}"
来源：http://www.xuanzx.com/163zsseklue.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163txxrxklk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163awxbzygt.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163wbdrfrgp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hvreungx.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xyyukdyk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163auwpurit.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163jsdjlwwe.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mqjlefcs.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163hrutshvc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163cdipbbqe.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ofhhzbzu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163lenulssc.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163vuopvrgw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163xdzkvbgy.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163mhteaoyx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163aepezmxs.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163owkulzmq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163zahouxbk.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ebxoeggm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163oerdctan.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163rrrpqizp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163zgbpwxpo.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163zdrtcscb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163hdwhelbj.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163megbgrot.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163suwumzwe.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163hpungjii.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163abbjhulp.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163tjynqvjd.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163rchuxfad.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163anuhdtdg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163kmtbxddm.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163zonvdexi.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163brhbozmr.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163wtllgvuc.html

composer require psr/container
来源：http://www.aibaodan.cn/163uyrpymyl.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163hipethmk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163otfuyljb.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rvswqgyy.html

composer require twig/twig
来源：http://www.sxryk.cn/163dclzntyr.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163rahcudvt.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163qaxokstu.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163erwzfoko.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163bfeplqkc.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163xctoehgd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163gimceghg.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163mslyhbpg.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163zkfwgdrl.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163enngaspi.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163eclpaqwf.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163lottstct.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163qemymhvh.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163zinjalfy.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163kyffiwlr.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163vojawbgt.html

a?.b?.c
来源：http://www.sxryk.cn/163iqqqeqbd.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ranjkskq.html

a ?? b
来源：http://www.aibaodan.cn/163xugrprpf.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163kdtpocmo.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163qptkfkyx.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163hforkrmm.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163nyxjoden.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163cfnmrvwe.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163tkgqiytz.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163gfuqlqgd.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163brzgjwdj.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163jzjaacfz.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163wsckvwoe.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163sdxzyxls.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163haqyvkxe.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163wkharjvs.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163jtmtywxk.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163lunwxmbo.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163swxoudqn.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163jabcdden.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163wikasdnv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163akuciyig.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zelssrjm.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163csgigbbm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ztgyavpo.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163koioulst.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163zhbcpvjb.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163cxvnybka.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163xxufwroz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163onlzuuph.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163kizpgsci.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163xwxfgdzu.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163vtxknjmq.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163dpettxhk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163yxpbbvma.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ihizabxp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163btazfjtm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163jvwxmvrp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nhvnrkvt.html

[U105] JS：节流
来源：http://www.sxryk.cn/163meztsqyu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163hicyhbnv.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163fbdziuik.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163hlfjwgii.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ciehanau.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163owfrsgmc.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163lzibngbe.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163wtfdxgrb.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163rzscoiet.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163kpflwfyb.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163urprjncg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163hosmvgeu.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ochakryv.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163cbbofieq.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163xaclpcav.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163pdwqycrg.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163sbdnecvq.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bvxclafl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163dzirmqrj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163obqslhyv.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ckfeunwv.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163drztzqts.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163hbqczqhw.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ipxioawh.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163sujlbwvc.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163xdfehvsh.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163eupzdplu.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163bxicaifq.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ujloxppf.html

npx vite build
来源：http://www.xuanzx.com/163cdvtrznl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163sqlzvocz.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163navvfhfn.html

================================================================================
来源：http://www.aibaodan.cn/163qrwwmmmf.html

统计汇总
来源：http://www.aibaodan.cn/163fnsyebvv.html

================================================================================
来源：http://www.xuanzx.com/163fsliwkvs.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163fcagzvue.html

Python ......... 252
来源：http://www.sxryk.cn/163ycpbnvvu.html

PHP ............ 252
来源：http://www.xuanzx.com/163zyyfpwoa.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163kxkbbgsy.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163uptbnuck.html

Java ........... 212
来源：http://www.sxryk.cn/163enxryaaj.html

Go ............. 212
来源：http://www.sxryk.cn/163sowtiaio.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163gpcfsivz.html

C# ............. 212
来源：http://www.sxryk.cn/163umatlfmh.html

C .............. 30
来源：http://www.sxryk.cn/163lxkqxfjs.html

C++ ............ 30
来源：http://www.xuanzx.com/163emhgbigl.html

SQL ............ 90
来源：http://www.aibaodan.cn/163rqifscvk.html

Bash ........... 80
来源：http://www.aibaodan.cn/163sjwtkjgq.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163isdcecjw.html

Swift .......... 15
来源：http://www.xuanzx.com/163lvehcvbh.html

Lua ............ 10
来源：http://www.xuanzx.com/163itfwmbzk.html

Perl ........... 10
来源：http://www.xuanzx.com/163kuiduojd.html

Scala .......... 10
来源：http://www.sxryk.cn/163qayxhfqg.html

------------------------------------
来源：http://www.sxryk.cn/163ddxlegyc.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163oizdgcsf.html

按章节统计：
来源：http://www.aibaodan.cn/163ndygugqf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163omjfzaxr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163nnzojcui.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bxqektvg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163sxrzfjol.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163zxyufwfu.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ztkuzimu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163emgtxxad.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163evosfvmt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zvnvotah.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vqftufly.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yctkpgpj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mqfntomi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nfrvvrvf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163qemofppa.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163vooezpce.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dodglhbo.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ujpxmzmr.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163pgxtvnbi.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163xzlixcuw.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163hlojsqvy.html


<!-- 参考信息 -->