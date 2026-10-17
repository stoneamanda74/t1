外链999!wailian999！

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163qynwpdhe.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163trcjjejd.html

s"值: $b"
来源：http://www.aibaodan.cn/163enayncib.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163iquwcazh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163xbkwwruw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jiuosagz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163plvlgrhv.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163jicfevea.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lgonavkc.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163sldcgeis.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163jghtyeuh.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qihbnmck.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163prpidrsu.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163pekzoqra.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163kxsasgyu.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163zvccehiy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ysljcxti.html

================================================================================
来源：http://www.aibaodan.cn/163iivaiwtt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163oopfxlwe.html

================================================================================
来源：http://www.sxryk.cn/163otsavels.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163otvtihid.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163tqhyqxlv.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163rqymaghp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163pomghczf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ryandzly.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ptoqqewd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ghfmlxux.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163qxaryyst.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163djeuymdm.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163oetandzf.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163hlaxylfj.html

{**a, **b}
来源：http://www.aibaodan.cn/163bfjunvyw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163fbbediao.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163poscennc.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163dqrsmhka.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163djgqkjwg.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163xxchhahh.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163twoyvlwe.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ossleljm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163lbqzxpkg.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ugtldxak.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ktecrfvi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163rduroasa.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163rwbwfppt.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163nzaemjsk.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163jhuzlkyv.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163crrsngll.html

defaultdict(list)
来源：http://www.aibaodan.cn/163vlyhsnhx.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163uftwnqrm.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ecyccknw.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163rktobyyt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163hciiqvzb.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163yvvolwfz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163untzifjg.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163gzwhdyfv.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163cyfonjjk.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163uyueqdot.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163zpwxwghg.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163vequuwsk.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163pttpeiah.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163roxuwarv.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163cjxpxbmd.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163iallfhum.html

list(zip(*m))
来源：http://www.aibaodan.cn/163logmgvkj.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163xtxwpoxs.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163aruzzkej.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163zngqawdp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163aflfsbcg.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ixwlfwmb.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163begtogxc.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ssgsuiiq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ofprmfbx.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163bzaiqvfb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163optnixvj.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163jjucrter.html

UserId = int
来源：http://www.xuanzx.com/163mjzsxbuc.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163nzjnfbbu.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163nfykhkyd.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163bbaeahdo.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ngdwirzq.html

[U31] Py：单测
来源：http://www.sxryk.cn/163zrjublsa.html

python -m pytest -q
来源：http://www.sxryk.cn/163mgbjmtuy.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ngczqbqx.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163zdymhmnb.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163yxmxnznp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163tgrushrn.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163xiywdodu.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163vmyngrso.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163yrpmydbw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163qzvdlshu.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163bqwvkyna.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163igxpzviq.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163jgajfbwe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163roxbodzp.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163dswpjsgc.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163vxpohdju.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qclihdrz.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163juddzbip.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ihmzlrsd.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sdsnehcs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163rvafrjpm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163eytgrjyk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163egbffcrs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163crkmhjzu.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163czlfpqqm.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gvezuwac.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163hzjblpfl.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163nzmlevls.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163nbdpqqrp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pnoykxhz.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163apcqiuvc.html

?string $name = null
来源：http://www.sxryk.cn/163vcjwxweq.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163tcbblmvg.html

int|string $id
来源：http://www.sxryk.cn/163ljzwtuhn.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163qardslre.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163lpsnrujl.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163rdegjspu.html

public readonly string $name
来源：http://www.xuanzx.com/163hemznmct.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163qvucumfq.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163glojiovv.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ifkavggi.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163txdhlglw.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163nudqnxjo.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163mwdcnumv.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163yzcgofxm.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163gyxlekif.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163baqchneo.html

$obj?->method()
来源：http://www.xuanzx.com/163yhrzjuwz.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ojtedsvv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163mkberith.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163pzpjqsgs.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nutwozbj.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163jzejkczr.html

"值: {$a}"
来源：http://www.xuanzx.com/163pzkpqhac.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163dvpbmlgh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ywryksfx.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163txygppda.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163myggbmyy.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ljpxjtax.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163hyclhtbn.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ezgfiwrx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fpfvcpeb.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163qhziknla.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163luquoncz.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163bhzwuwfr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163csluchmg.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163btgfxqft.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ydnvdccc.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163rtranlew.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163uesxkadt.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163bqwtmvtd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163shitrwis.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163zfiaxtpc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163kswfyabh.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163yhnpyqlz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163kprffban.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163utdwbahq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163wqpnokil.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163mjodactr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163dzjxgcgr.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163tqivxozq.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163xozobzrj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ktqzabrk.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163fgbkbcji.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ozzeqygb.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163zzaddzpe.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163eecewjwg.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163zggdflik.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ekortcva.html

composer require psr/container
来源：http://www.sxryk.cn/163kifudjps.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163bbannbvh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163joubvauh.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163yvqhobag.html

composer require twig/twig
来源：http://www.aibaodan.cn/163acwmzyhq.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163wxqbuula.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163arukthpq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163twssximr.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163gsftfngi.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163hywukyrb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163lqbujksw.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163rauiwydx.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163gszcaifg.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163oexqbhtm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163oukfbumh.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163fjipbyoz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163tnlybktq.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163vygbfpyt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163jtpfkejj.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zdbzfxoh.html

a?.b?.c
来源：http://www.aibaodan.cn/163bhlhfstm.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163tanupzmu.html

a ?? b
来源：http://www.aibaodan.cn/163vzrcxzww.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163syzfoxcy.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163rlggmqmx.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163anohkaba.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163dcvxawba.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ejnmuloj.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163pdxxjmme.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163gcdixzkw.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qrjijogb.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163skqdeblt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163fegfrqiw.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163sideumpi.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163fyqyfkpn.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163imsjyzed.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163cirhqgzs.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163occtxljx.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163zpfbqmon.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163myjdwsaq.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163iqdwfuus.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163mqfepjfl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jskvpspb.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163tkffdjvn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gsbdfswo.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163tgukhegp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163rsusdete.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163liukanun.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163drvygdwp.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163wnrzgsko.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163jnvgkece.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163hacoidef.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163brabmiuq.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163gzdfnwbq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163uuvabqaa.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163qwraaphx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163wiwtjsxs.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163zsnjocmp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wseufmeg.html

[U105] JS：节流
来源：http://www.xuanzx.com/163meyofokx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163xwtzuwdj.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163mzagujzb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163cenhdcmn.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163jrrzjgbb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jnzthddv.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163cqsdfgie.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163apxvdnvs.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163hhydcbkf.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xiigqnbu.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163vdbhouiv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163twqhibqm.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163aqnolkyi.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163vseqouly.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163dshbklfe.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163zbclrjyv.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163asgdllmg.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ozmctjwl.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163oplhmhfm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163zhhognpv.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163pjqecknx.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163mccwagrz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163swqrjrxg.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163dholdhqi.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ajpjfuka.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163mkabevks.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163owtjxiay.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163btkuhldj.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163achkqtil.html

npx vite build
来源：http://www.aibaodan.cn/163ihdcabqw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163szqqdeep.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163eafkdeyy.html

================================================================================
来源：http://www.sxryk.cn/163mhrzgvyo.html

统计汇总
来源：http://www.aibaodan.cn/163qkxgitfb.html

================================================================================
来源：http://www.aibaodan.cn/163yipmpizz.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nstxcupj.html

Python ......... 252
来源：http://www.xuanzx.com/163jpoymwbl.html

PHP ............ 252
来源：http://www.aibaodan.cn/163ltcjtoqd.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163nwynirtt.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163astgdabm.html

Java ........... 212
来源：http://www.aibaodan.cn/163sfckxrjf.html

Go ............. 212
来源：http://www.sxryk.cn/163euvuwajq.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163zlebtgru.html

C# ............. 212
来源：http://www.aibaodan.cn/163wxtbvrge.html

C .............. 30
来源：http://www.aibaodan.cn/163dbzublrx.html

C++ ............ 30
来源：http://www.aibaodan.cn/163kpcdeqqf.html

SQL ............ 90
来源：http://www.xuanzx.com/163szmpptgj.html

Bash ........... 80
来源：http://www.aibaodan.cn/163hvymaeth.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163yupzqzbt.html

Swift .......... 15
来源：http://www.xuanzx.com/163vhdgpzyg.html

Lua ............ 10
来源：http://www.aibaodan.cn/163vwgaezvv.html

Perl ........... 10
来源：http://www.aibaodan.cn/163bksowmfb.html

Scala .......... 10
来源：http://www.xuanzx.com/163zrmpulbv.html

------------------------------------
来源：http://www.aibaodan.cn/163bexzjuxd.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vluukjaw.html

按章节统计：
来源：http://www.sxryk.cn/163uqdydtbg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163utajrkuf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rnkqbbyf.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lkeijcfz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163apnfijbo.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qvqccopt.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163tqhbbbkv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jmollitl.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163upwpappy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lcwqycvo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163dccwskcv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fgqbsaru.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cqplnkxi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163iuqrwdkl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fjvqklfi.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163rkhaqfbm.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qnxczbvz.html


<!-- 参考信息 -->