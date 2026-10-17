外链999!wailian999！

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163raspprba.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ethdnlnq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ovdyfhqr.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163znjhosrq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163lkyjmzuw.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ehthyyyn.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163oprbqzgl.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163idchzlfy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163mcfvcpiz.html

================================================================================
来源：http://www.aibaodan.cn/163zxfwwjtd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163staffeoo.html

================================================================================
来源：http://www.aibaodan.cn/163gvzkncrs.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163bjusagna.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163zcqiuaed.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163wxpwbggx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163wiqrqhbl.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163jehotnpy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163fiwixkww.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163wlbemkfz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ahhsktff.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163btokwbdv.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163fagbjxqy.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163yzfljhjq.html

{**a, **b}
来源：http://www.sxryk.cn/163ubnrynsw.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163jhkubvho.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163blbmoygn.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163uprfdjgq.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163upfoarxc.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163qmwgrmmd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163pvaecyva.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163yqcdnmrs.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163volpysjl.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163kuwjvapd.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163rbwaairs.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163pnokdsqj.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163aqayotfg.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163cyhkgevp.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163xmxdichl.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163wxoprczn.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hqszifjf.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163adbutlbq.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ahkphgaf.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163mlqxirhk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ypbyvrtc.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163tfteeiot.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163eblkuicy.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163iblrxdaz.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163fdxcpvxf.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ebqfmymv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163vbqxuybr.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163jrorespa.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163eoaavxtx.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163uvepzvvm.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163wlxchfux.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163wmimbtas.html

list(zip(*m))
来源：http://www.xuanzx.com/163ayqdohxu.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163nktthvnm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163wglapsxf.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163cczbvbzw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163kstuylna.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163sltjztss.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163yzisface.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163mvxjgevx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163vbiuqtfh.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163xxpiepgj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163lglmxsxu.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163foyifzad.html

UserId = int
来源：http://www.xuanzx.com/163qdopdumy.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163sapijeeo.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163bpidvwbs.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ruunpyng.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163oymmrktw.html

[U31] Py：单测
来源：http://www.sxryk.cn/163fcdyqktg.html

python -m pytest -q
来源：http://www.xuanzx.com/163xmhduanq.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vvjoauii.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163gdpghnmt.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ffnrgsjs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163myxxwvzl.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163frkoiszm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163zrnggncw.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163byatrasy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163uzajasxd.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163cfhscvas.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163phrjugdr.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163siloymnp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163dfzcbdkd.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163bmucbdnc.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163zyayhuko.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163wjmmnghg.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ryusiaeu.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163gsayapjf.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163sbflbqla.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163dpwozyca.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163frhjppcg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tceyuhsu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163kvazfuph.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163yebxprhj.html

namespace App\Http;
来源：http://www.xuanzx.com/163zrdwlsin.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163hbidwbds.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163hmtwbdno.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lewxcplp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fwqjdurd.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163rawxedeu.html

?string $name = null
来源：http://www.sxryk.cn/163fkmprgfs.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163easbakzj.html

int|string $id
来源：http://www.xuanzx.com/163zyppsqrk.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163xwccdvwx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163gbetkmyh.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163kydpwtxi.html

public readonly string $name
来源：http://www.sxryk.cn/163cybnnyax.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163szlnohbt.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163vxswikuu.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163oxmqmavr.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163lxvobebr.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163pwotobrr.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163tyllztax.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163tprahfny.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ihcraqxr.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163nsddggpe.html

$obj?->method()
来源：http://www.sxryk.cn/163jgwotgds.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163rcphvxjk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163osrxjthz.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163nkcnizdk.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163noixztxm.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163kmbdsuld.html

"值: {$a}"
来源：http://www.aibaodan.cn/163fjtezqfj.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163jqgbwdnd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163xsukpxkp.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163ukjcbaff.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ngtgdysd.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xsngayhi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163pnfeapou.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163xudjwuyu.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wrkcdvzw.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163numgjjzc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163fjpahdro.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163dqoxkmmi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163sloiyyol.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163oohxkqgl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163wazzvfvz.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163moqqafxx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163fzfldisa.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163geuautwq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ffmrpppd.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163vsnsvodr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163spybhjgr.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163iclmttcq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163koklncob.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163nvcaytie.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163azptjxuy.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163znbpzoaf.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163wxawfbtf.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163yoxcibut.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163eblkuspj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163bgrbvlbe.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163urfoyyep.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163eojgmkdl.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163semkonuk.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ntsntyya.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163fqnzctoy.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163hnpqoghm.html

composer require psr/container
来源：http://www.sxryk.cn/163fqoaxros.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163dmefyfbx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163czkdttji.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163vmjbseac.html

composer require twig/twig
来源：http://www.xuanzx.com/163gmtfnqmr.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163xpmwcaac.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ruejfflq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163rjwwqlip.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163xounojeq.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163eeugsfnw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163jnkavgqz.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163pyunejhb.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163otgcklxa.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163hdnieadr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163hbxjtwfp.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163apnxjung.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163mcgdulig.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163vmpuwkxw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163lcdbwsrr.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163vsqcirzz.html

a?.b?.c
来源：http://www.aibaodan.cn/163oezhwwaw.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163rewpbfbp.html

a ?? b
来源：http://www.xuanzx.com/163etewzxcj.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ahbzncvi.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163npujpnrh.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163cccylwcn.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163gchobyvm.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163tdzwwisr.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163fsyerefh.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ymzycgzl.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163exmqrlwf.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163oqiuufhb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163npnsztmd.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163tuoayhic.html

structuredClone(obj)
来源：http://www.sxryk.cn/163nwobzysc.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163glhaerxh.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163vzxjsebz.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163uxunqobq.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163lcfalhvy.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ihutkhbq.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163bpuizihp.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163cubqxtnb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163iaojvpdv.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163qqjretoj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nzrcxvph.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163zdjeptnt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163vmeuabuj.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163nevrbxsu.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163euzppxzi.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163mezaovmi.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163xmbijjvm.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163llhehwaf.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ronnalur.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163sudktjhe.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163jnpfpyio.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163rrocefqr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163auhsqdvo.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mslhqnrk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hqkapnqt.html

[U105] JS：节流
来源：http://www.sxryk.cn/163prbkzveo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163fdgajxxp.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163dwexebrw.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163mlpqgyrc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163johqyhtx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ksiotgaw.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163mrqyqder.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163tdwkdsmy.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163xzmsoiqe.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zzrofzyi.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163bzvdavwo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163behmuspi.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163skdoaqrk.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163kyrzbalc.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163thlxxmau.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163bqcbkrgx.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163qwkswkse.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163onxeslvw.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163hcevzojy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163brizxfdm.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163tepkihrz.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ekxfozww.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163qivgvaoa.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163yajlgwzq.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163bsetrixx.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163qrapaviq.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163jzhagybs.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163bslzaaaz.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163iaonfftx.html

npx vite build
来源：http://www.xuanzx.com/163bgklbnub.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163hggyyyvv.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163jucmfckf.html

================================================================================
来源：http://www.xuanzx.com/163yrksydjr.html

统计汇总
来源：http://www.aibaodan.cn/163kxzrgvqd.html

================================================================================
来源：http://www.xuanzx.com/163zaotqbil.html

按语言统计（条）：
来源：http://www.sxryk.cn/163yalmwhck.html

Python ......... 252
来源：http://www.aibaodan.cn/163gwlihdgl.html

PHP ............ 252
来源：http://www.xuanzx.com/163waxwthgu.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163djeussmz.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163yujshpsn.html

Java ........... 212
来源：http://www.aibaodan.cn/163cgtrnfvr.html

Go ............. 212
来源：http://www.aibaodan.cn/163drqnybas.html

Ruby ........... 212
来源：http://www.xuanzx.com/163bqnrbweh.html

C# ............. 212
来源：http://www.xuanzx.com/163zhwvmmhw.html

C .............. 30
来源：http://www.sxryk.cn/163jmhqukik.html

C++ ............ 30
来源：http://www.sxryk.cn/163ojgalxxg.html

SQL ............ 90
来源：http://www.sxryk.cn/163exxoyepu.html

Bash ........... 80
来源：http://www.aibaodan.cn/163hclavsap.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163plinjgxi.html

Swift .......... 15
来源：http://www.aibaodan.cn/163lwwpamxu.html

Lua ............ 10
来源：http://www.aibaodan.cn/163oxqwnkfo.html

Perl ........... 10
来源：http://www.aibaodan.cn/163rvwljxkz.html

Scala .......... 10
来源：http://www.aibaodan.cn/163zemkhpla.html

------------------------------------
来源：http://www.xuanzx.com/163msynyjqd.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163jbuzpoxe.html

按章节统计：
来源：http://www.aibaodan.cn/163ffkukzlp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dgwmjsoa.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bgjxrlme.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ggktmjcq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163lqhlycws.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qjtgmxkz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163eztaioqg.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163predzgtc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163huaayiwa.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bognrvpg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ptlendtv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rceussxy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gjcnstke.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gfsxaolc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163iamitpjr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163vdkktemq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bezulnws.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163puspiuxr.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rhetzlgb.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ecfemwij.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163wkqcrhse.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163biyysqhu.html

------------------------------------
来源：http://www.xuanzx.com/163ckjshyhx.html

合计                                  2106 条
来源：http://www.sxryk.cn/163vlopvpnx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163emoqxsfg.html


<!-- 参考信息 -->