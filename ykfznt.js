外链999!wailian999！

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163cznlrgzu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163gkuopzbb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163qbrwyptq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163wyzevzud.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163jirxdpfk.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163nbbcqyxw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163bzblxpyn.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xhjqdyux.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163tqximtjh.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163rjmxkpfx.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jmdgvadj.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163kwlpyqln.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163nsmjiqzi.html

================================================================================
来源：http://www.aibaodan.cn/163wubfoike.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163eacrtpcj.html

================================================================================
来源：http://www.sxryk.cn/163awtllfkv.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163woruawkz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163xsprtfru.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163tjarzifw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163oqvtxprw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163kburokzl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163lmnureyf.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163sfqopbce.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163zpespyxc.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163tljypyih.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163awevekto.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163kxkfcoij.html

{**a, **b}
来源：http://www.xuanzx.com/163qlcmjjsj.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163bjbzrwdv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wwnftrha.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kcvvdwts.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163njfwmfbf.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163wejqfibd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163jfrxmalu.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163dordnnfm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163zuggfvip.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ozjtkwgw.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ygotypbz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163nujwwmbl.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163luivkgbn.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163pjmsivyk.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163acvbvujd.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163moclhzfs.html

defaultdict(list)
来源：http://www.aibaodan.cn/163oidpbjqq.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163rhsaixvw.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163goqqwqml.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163kkuqkuti.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163jkfzabik.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163jbkdmtmc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163xtahvtsj.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163iowmtxjw.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163wsknptlv.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163cnkqxbsx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163zefqqhmj.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163lhwfuaxj.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163fpdkbucf.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163cortbinj.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163kixvanlb.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vuqlzkbh.html

list(zip(*m))
来源：http://www.aibaodan.cn/163dwojkwpv.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163yfbglmxa.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ozxiiqjy.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xqputmln.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163hvdnwoym.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vqbveyok.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163orwsdqze.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163gpujbbmo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163jljfzvsb.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163fcjwavgp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163kgvfzjqq.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163yadmimov.html

UserId = int
来源：http://www.xuanzx.com/163xxhdxsgz.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163qblwmkuw.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lbnijqix.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dqftriie.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163estlwboc.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163gmnliksi.html

python -m pytest -q
来源：http://www.xuanzx.com/163kaaqdopu.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163lelyfiqd.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163jajtkyoy.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163godbilfw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163atzjoeic.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163vxytzypz.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ilutezpd.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163aptkelvz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163lbukxkfw.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163mcsrlzjk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163hdusqkgj.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163nntwyomd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163dvrehebb.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163chwxezlz.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163krailati.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163oijtfhgd.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163lvjrjhvj.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163zghogzoo.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163nlzvnyab.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163eildzcch.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163hztrhooh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163csrtiesh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163xkmzzixq.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ubszfsgj.html

namespace App\Http;
来源：http://www.xuanzx.com/163nikylxfx.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163zyqrhoyt.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163mxmshqpt.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163yfffeprs.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mvckcpjf.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163zeuekflz.html

?string $name = null
来源：http://www.sxryk.cn/163rknauept.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163vcyyfmnn.html

int|string $id
来源：http://www.xuanzx.com/163ttxpvhow.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163eqwhipbe.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163gkswsoet.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163mfavgpkz.html

public readonly string $name
来源：http://www.xuanzx.com/163ybuwktgk.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163geqkonyi.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163crwpriat.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163tqfjsrmm.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163vxeaivyd.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163jvzoxska.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163hnqeeiav.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163crdccyfu.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163gzwytxam.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163rvnubkth.html

$obj?->method()
来源：http://www.xuanzx.com/163bnsvhzur.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ghqqymaw.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163kpljahau.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163dccvpjiz.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ptdqntpu.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163pmgxtqby.html

"值: {$a}"
来源：http://www.xuanzx.com/163ireywcet.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163hafpmhre.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163usxgxylm.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163musrbrqj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gtkwfgcz.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163gwdvhwrd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163pafyzxqa.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163xintwnzh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xlzkffoa.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ehxohnls.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163acotmops.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ojfctolm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163lcjtajdr.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163edvujebw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163kzkzmleh.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163mmdqdnlk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163aprjglsx.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163kqykodur.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163mxuepwlt.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163jztybwgw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163sorsiajp.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ydqutvya.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163fqkplbad.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163fksffbop.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163rbyalftr.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163qzkyzzag.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163rlcnziti.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163utocceha.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163orfaittq.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163aeivgxth.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163agtyostq.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163esqzhrqz.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163qohtslwy.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163aeotykck.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163lwcmtmgr.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163dyesvcto.html

composer require psr/container
来源：http://www.sxryk.cn/163bnahkpaw.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163oinxqqvp.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163npwpyrse.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163kouyomds.html

composer require twig/twig
来源：http://www.sxryk.cn/163rvjdzafo.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163mxwmitoc.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163tjkzpgdw.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163cbdedizs.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163eeblghas.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163hqiqfmkn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163lirvctik.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163sfsbxpag.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163hpfsnqst.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163chpmoira.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163fsprsxbj.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163pyloaqbr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163oqjvjsoe.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163gcnfbzwn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163muidcyql.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163btxemiwn.html

a?.b?.c
来源：http://www.aibaodan.cn/163rekpfswp.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163nlynfgve.html

a ?? b
来源：http://www.aibaodan.cn/163etvjlntw.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163sbzfmkex.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163wrgnyuam.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ywywhpao.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163nwmssznm.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ofalvcpj.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163fmtrlhkm.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163nqqimkqv.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bhjcpwsu.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163sunideme.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163jzwprlzl.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163cbvqkoum.html

structuredClone(obj)
来源：http://www.sxryk.cn/163rylkivul.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163jironakj.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163hfxuinhy.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163tdkyrvcp.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163fsocseav.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163jokephpl.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163unysnfef.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163yqpjpcek.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163uvwlnvjw.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163yjwaakbq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ldediqdm.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163jabkcuav.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163lwwfjpsh.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ysxsdtjq.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163aimxbyfw.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ruemcfkx.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163bjcwcbry.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163cwmgjytk.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163cquwzrzj.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163fnyujpeo.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163jjxpfjsl.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163svwbjnwk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163honwmeal.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163vkzlsyku.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jdguvana.html

[U105] JS：节流
来源：http://www.xuanzx.com/163pibuojlg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163lsaqgkhu.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163olqpfpjt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163hprjjhef.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163dqqkgwbf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163heriwegv.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163eajjxmyz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163kworllzq.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163fmlkmchn.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163btspufup.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163txbbfzwq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163xxowirod.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163aeutayfw.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163rgdtbvsi.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ztmbfvmh.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xgjcgkcr.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xbwzbvlw.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lpkgisep.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163cvwxjorq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nntftrlx.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ubxsojei.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ddfcseug.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163thkvtfpu.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163kilwzser.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163spxarhhu.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163snquqzlv.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163tilcmpha.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163splgwpvh.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ixftjujr.html

npx vite build
来源：http://www.xuanzx.com/163wbdfmrmy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163vvbqlovx.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163dhghmfrh.html

================================================================================
来源：http://www.xuanzx.com/163zbzqfjrr.html

统计汇总
来源：http://www.sxryk.cn/163beswxpva.html

================================================================================
来源：http://www.xuanzx.com/163lleliwzi.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163awlcutjy.html

Python ......... 252
来源：http://www.sxryk.cn/163twtexpte.html

PHP ............ 252
来源：http://www.xuanzx.com/163afdnlhbg.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wqmxmrny.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163xgrkxeoo.html

Java ........... 212
来源：http://www.aibaodan.cn/163gbifnscf.html

Go ............. 212
来源：http://www.sxryk.cn/163clvidszl.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ngzpxqwh.html

C# ............. 212
来源：http://www.sxryk.cn/163ttefwkrx.html

C .............. 30
来源：http://www.xuanzx.com/163mtpsdtrg.html

C++ ............ 30
来源：http://www.aibaodan.cn/163dncharey.html

SQL ............ 90
来源：http://www.sxryk.cn/163osmoeuql.html

Bash ........... 80
来源：http://www.aibaodan.cn/163micxgjte.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163yasoashm.html

Swift .......... 15
来源：http://www.xuanzx.com/163pawyfmjj.html

Lua ............ 10
来源：http://www.sxryk.cn/163gkpshggx.html

Perl ........... 10
来源：http://www.xuanzx.com/163tfcbhhwx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163ialycbsu.html

------------------------------------
来源：http://www.aibaodan.cn/163bexjhjbl.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163nzwspujw.html

按章节统计：
来源：http://www.sxryk.cn/163hhaljmdv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163uuabrjfz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xhwvxabd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kttoiuii.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wfmdlkfr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163fuwyueeh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163cccvujze.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fmhiflho.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163kzetfygc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zxciczms.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tisvoxmd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rejrlwzi.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fszhsdzr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163imzroctx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163rqkyvkkw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163cdkdhoyh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rhualqhs.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163qqaknasy.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163kdqoghuw.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163pctpodgn.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163akqkhiqe.html


<!-- 参考信息 -->