外链999!wailian999！

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163vdnbdwgt.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zegsqoxw.html

s"值: $b"
来源：http://www.sxryk.cn/163yppzwexw.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163fwkpejwl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163bgyrqiio.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163aqqyrpmn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163eqanpihf.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ooqeljfq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zcyhucti.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163zlnjtcyw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163cghbpcrk.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qrzsbnzn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dxnpvykh.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163zqdwotqs.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163kdzauorl.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ageeztkb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163swaidqpm.html

================================================================================
来源：http://www.sxryk.cn/163uzaqbpbx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ebvkbset.html

================================================================================
来源：http://www.aibaodan.cn/163lnprdhfv.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ewgxhivt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163rglxnztt.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163tpfbgune.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163devitfhi.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163htqkcxud.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163njxxrnuf.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163gdlbfhzr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163imtdcycd.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163dejrcivw.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vycjkwsm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163dwuiheie.html

{**a, **b}
来源：http://www.sxryk.cn/163vrzfewuk.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163gxoshupa.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163bpjumlgl.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163cxbpdfrw.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163sshshzli.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ynrcnutv.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163dgxglhdi.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163bdvrgkzl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163fxazljcu.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ocguwfst.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163ozownrtn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ljnzugcj.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163zchkysbr.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163jzxotwkd.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163scijcfbq.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163wesuoyeg.html

defaultdict(list)
来源：http://www.aibaodan.cn/163phabjsvs.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zniyppeq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163hwvizdnz.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163rtxmivze.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163lpvnrdsp.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163uycgcbtm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163akjimpwq.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163kqrvpajx.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163mnivpnmp.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163oubbcdmm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163gzvsahhr.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163qwnpatln.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163hwbbpjdh.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163mtsibntx.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fxttrxdm.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163cyvlqnlb.html

list(zip(*m))
来源：http://www.sxryk.cn/163voiboiaw.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mbymppbq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ohutaogb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163pvnspfnm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163wxmbqcjz.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163miqdwvjf.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163pjnsftsv.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ctzsykvc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163hodfiihk.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163fgjsorjy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163udxxamdi.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163iypdtvkt.html

UserId = int
来源：http://www.xuanzx.com/163lzhgwefe.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163cfuolvee.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163qlzvjplg.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163hizheyrk.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163evcilfpw.html

[U31] Py：单测
来源：http://www.sxryk.cn/163mgzvynwf.html

python -m pytest -q
来源：http://www.aibaodan.cn/163tonmreyx.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163dcxrlzkv.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ldxdiywf.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ltsosycb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163cloqaqrv.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ioilsuir.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163atfajepp.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163sdwjpfap.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163lnlwtdee.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ylaigwgq.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163oorhkwyo.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163flxbfzcz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163raiuiatu.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163etvjhvcp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163xklhzynb.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163rtyeilbi.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163trkcujhn.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163nuqmzwiq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163izolggfa.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163relvasfo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163rtppgoka.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163cykyhmrk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163wmmqcjzn.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163sqgtofyq.html

namespace App\Http;
来源：http://www.sxryk.cn/163kaidjbsj.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163xoksuheo.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163pcsqtocu.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163dshkzfsf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xwwmuemp.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163cptwapbp.html

?string $name = null
来源：http://www.xuanzx.com/163aisgapqo.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163lohcthhu.html

int|string $id
来源：http://www.xuanzx.com/163wipvfbsm.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163rymeylyb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163uupkkrgr.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163dirodwyb.html

public readonly string $name
来源：http://www.aibaodan.cn/163gtfdozmt.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163fjqlraci.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163zacbchsz.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163wbhipsev.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163limjeuvp.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163juhjiewq.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163dxfxiwri.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163xfgnbvxj.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163xnqiptxk.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163qocwvuyd.html

$obj?->method()
来源：http://www.xuanzx.com/163uthvwlux.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163oiemjbuc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163rpmjptpv.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163nhpdpyqa.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ksgkqckp.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163cqhcywce.html

"值: {$a}"
来源：http://www.sxryk.cn/163lksqqkrr.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163dqtsihme.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163fxxxhzht.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163cdxreujb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vxsrrqly.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ougjfoyi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163jvcjhhao.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163xwlhwgyo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kmvijdqr.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163wdwknlqn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163vtoeeffg.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ubvzywnt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163thcjmglg.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ahkjblek.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163tvlvptoa.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163vttcpsiz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163twzhwykn.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163egihcuyk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163todchfvi.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163wwvvxvwz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163eofybgtg.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163bldxuuqh.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163iyccfcgn.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163dvbtdqon.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163zxkgzcjr.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163hmzqptgz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163tgramqoj.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163gqfwdgxd.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163owvlsflz.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rbrsceds.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163odidnhwq.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163wuvidydw.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163mhsgtylc.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163tzhfrmfi.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163yjkhkibl.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163bvhscdkp.html

composer require psr/container
来源：http://www.xuanzx.com/163nazcodvl.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ugltrelg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163kjekiwhs.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163xlyrypug.html

composer require twig/twig
来源：http://www.sxryk.cn/163xaqacwyp.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163omjwkefj.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ofrdhiwh.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163bhmralnp.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163epbubecy.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163gxtyaxqv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163zhjuzbka.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163lwqxwzdp.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163eweidxhv.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163qpqduuwp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ibczzzbi.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163zokiquqa.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163vfnhgyiv.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163jsttutez.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ehcqdhlt.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163rrtlnhst.html

a?.b?.c
来源：http://www.xuanzx.com/163mgicalst.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ygoxadox.html

a ?? b
来源：http://www.aibaodan.cn/163ovfytgfk.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163uluxcqns.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163gaadtoen.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163kzkjbxgu.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163kggdlihn.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163volvruaq.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163cxsgyovv.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163fulqvpox.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qgvuslgd.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ccxayikl.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163otzvvbyv.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163clzomjpy.html

structuredClone(obj)
来源：http://www.sxryk.cn/163symnyucj.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163lgnvojfs.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ekmlvsif.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163tdsmlure.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163puamceas.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ppwfucnk.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163hnocoapt.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163cmgmoqah.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163kgyunecj.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163msvfuuej.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eykwsynn.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163vqhmxwik.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163hjvxgkfa.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ggpgvyen.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163bvxlyier.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163bbqfhawy.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163cvocoptf.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163tgftxdmz.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163fizwfgvx.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163nkywfhea.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163jfzytvwg.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163izhszfvs.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163lqwlqpqy.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163gjrvzzua.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lnnooeed.html

[U105] JS：节流
来源：http://www.sxryk.cn/163jiakclln.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ebunfoqy.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163cebwjufn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163hinlgnua.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163rwzmamed.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163gfkubqhp.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163nnudnskj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163vodrtdsy.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163qiyomhof.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163owbkszhj.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163hllhsaob.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163fqexyyqg.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163tbcpyrju.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163nxdyhdwu.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163kfxygdcq.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pemjykhs.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163kqczymrx.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nwrfflnk.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163yxyskxjx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163epxmdchj.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163mbcufxgs.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163vtjpehpn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163kvvkgpbo.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163zlqizqxc.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163yfgkvjxv.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163dhejwbzw.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163pdpldgff.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163oevxwier.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163wkgsdlop.html

npx vite build
来源：http://www.xuanzx.com/163zyeyuuqb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163fmrayxei.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163zmfcqxrv.html

================================================================================
来源：http://www.xuanzx.com/163xnjhqgtd.html

统计汇总
来源：http://www.sxryk.cn/163eueaxhho.html

================================================================================
来源：http://www.xuanzx.com/163zkoegfpv.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163tgpxdefm.html

Python ......... 252
来源：http://www.aibaodan.cn/163dybzxhnu.html

PHP ............ 252
来源：http://www.aibaodan.cn/163fwkwvwsf.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wsodwsja.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163swfjyhye.html

Java ........... 212
来源：http://www.sxryk.cn/163opkbhbet.html

Go ............. 212
来源：http://www.xuanzx.com/163ceturvvo.html

Ruby ........... 212
来源：http://www.sxryk.cn/163qznygcii.html

C# ............. 212
来源：http://www.xuanzx.com/163lrvlrdca.html

C .............. 30
来源：http://www.aibaodan.cn/163jqbpghxn.html

C++ ............ 30
来源：http://www.xuanzx.com/163oyslzlhd.html

SQL ............ 90
来源：http://www.xuanzx.com/163fmnoyxjg.html

Bash ........... 80
来源：http://www.sxryk.cn/163hgblflwm.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163cpegrkiu.html

Swift .......... 15
来源：http://www.sxryk.cn/163ctvjktmx.html

Lua ............ 10
来源：http://www.sxryk.cn/163svkhujey.html

Perl ........... 10
来源：http://www.xuanzx.com/163imabydaq.html

Scala .......... 10
来源：http://www.sxryk.cn/163wdnsormk.html

------------------------------------
来源：http://www.sxryk.cn/163bqzuzcba.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163mlljtmhk.html

按章节统计：
来源：http://www.sxryk.cn/163quldbrgr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163dikydppa.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163favgsphd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vgdcuvdp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163atbmemwz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163tvjpmkqt.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163xtaeqabx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nxjitpdw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163cmphmnar.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163chabghlc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163wxgvnsze.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cmyoijuj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xdwritbw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yuqcszju.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cjyvfjih.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163qlozxhfq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163axopxupi.html


<!-- 参考信息 -->