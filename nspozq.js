外链999!wailian999！

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163gpeqrbcp.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163whuwggji.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163gjupzyhn.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163jkkkvzte.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163fkeltpwc.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163sgucznka.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163uetcszzv.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163tntckvmw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ptrjwpst.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163yuumohvd.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163rkpwledw.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163uudeawqe.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163uwcuujaj.html

================================================================================
来源：http://www.xuanzx.com/163dcjtrfuj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163uwxzwmku.html

================================================================================
来源：http://www.aibaodan.cn/163awoktgfq.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163qyiyqzyr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163hhvtkkje.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pvdybpaj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163lwzmnbeg.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163yxkfbrqc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163rcayjdqc.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ypnmvqbj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163efgzbmmh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163rcycixrf.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pasmnkfo.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163rfgnavrk.html

{**a, **b}
来源：http://www.xuanzx.com/163rwckmwde.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163hsguvntg.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163xbncvxew.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kzbxwicv.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163xmzuopgg.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ztpfzyqr.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ksbicjre.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163trrstrbf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163tcymqqep.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163npgfbfep.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163kcosmvki.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ugqmtxxi.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163fixkmqsw.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163rhvbdzfw.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ihgtgmsi.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163febpvzxd.html

defaultdict(list)
来源：http://www.xuanzx.com/163udnbbztx.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163qanpcrdw.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163imxwvvkm.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163spdzohlr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bnmiyrjt.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163pgsowfud.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163lsyglrlb.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163pkhrxniq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163tvzngiwj.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163rqajsmva.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wfrzuppa.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163ikhvdkkv.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163qlvzymvs.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163qgujktky.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ehrqtpaa.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163sieswqcr.html

list(zip(*m))
来源：http://www.aibaodan.cn/163stztkmiw.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163mpranndg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163dpournow.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163lczanqrb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163osgrvkjv.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ryrezprc.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163btciorep.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163cagixqvs.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163sqseckig.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163qzkltsco.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163gksvuudv.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163wognpbzh.html

UserId = int
来源：http://www.aibaodan.cn/163bkdnkmoe.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163qweqivcr.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163fjweqtzl.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163bjgdhkvx.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163aovqybqz.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163itobjdci.html

python -m pytest -q
来源：http://www.aibaodan.cn/163aqieqbiw.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ttvajfrt.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163yjotvglc.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ntchszzu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163mhknfkcx.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163nubrscss.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163hjaqqgnz.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163lbazpekk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163empyhate.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163gksmumid.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163hnccrxzy.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163npclzfvh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163hcbdneau.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ojwjvpdx.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163slsnrcbg.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163bjxwgpbf.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163vrldvcbz.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163uuvpkqfr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163etgzthsj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163bglepcdx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163jyjrxnyf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ipisfdyi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163bpuowwmy.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163pjcwptlx.html

namespace App\Http;
来源：http://www.aibaodan.cn/163tuwetlnm.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163fetdnpab.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163pzloodhu.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163oyapoqhk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jgkthcht.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163tjaesagr.html

?string $name = null
来源：http://www.xuanzx.com/163vizkedlw.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163kjckrwwp.html

int|string $id
来源：http://www.sxryk.cn/163pvahrcon.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163pwxbkslc.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163pvwnogia.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163xmhbyxhf.html

public readonly string $name
来源：http://www.xuanzx.com/163ednauvel.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163obmawnvz.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163cxeknlss.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ujougxhr.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ziqyijtn.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hyfkohbr.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163xdomvesl.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ialnsstz.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ffvxjfmq.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163azzdjjqq.html

$obj?->method()
来源：http://www.xuanzx.com/163abdovjhg.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163fycumnbn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163avudfifv.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163bgosshss.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qsitpwoq.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163xmmnvreb.html

"值: {$a}"
来源：http://www.sxryk.cn/163yugvxbqm.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163kwlqpygm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163hkcxeyqt.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163byngocuq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bdnmztbd.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163mxfzcnri.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163jujguvxp.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163uujmqbvb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163sceuvtms.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163bdoscqrm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ahqqzqbj.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ujjvzvcl.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163nairqznf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ctujfhte.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163qzgkifie.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ozurwdqy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163jzrmxfya.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ywkbvken.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ncufncsl.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163sbfdnnvk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163bwvyrlgx.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163vmqixble.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163desricqk.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163duwludeg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163cagggvph.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xhrawozg.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163adwsyepj.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163lklutasi.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163twndynvo.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163nxdnhkos.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163izpdsbrc.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163yydfihms.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163rdlactvy.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163xpwlibsh.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163xpslhwqr.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163dtxikmws.html

composer require psr/container
来源：http://www.sxryk.cn/163shdqrnsv.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163eoisoaef.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163epuuuosj.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ateqxzuq.html

composer require twig/twig
来源：http://www.sxryk.cn/163kyjmlsyt.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163igiyxvdc.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163kewvwsao.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163aplohssp.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163lagxxmfb.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xuyhxrkf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163atgydgds.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163mzejkktq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163jtndotvn.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163pdrqwpzl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163tjlgesqv.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ijjqcgmx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163mqimznpm.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163tmnvjvem.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163oyhrmsok.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163ecympryw.html

a?.b?.c
来源：http://www.sxryk.cn/163szrxlutc.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ilvfxxlo.html

a ?? b
来源：http://www.sxryk.cn/163uidtivhe.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163bwozhtvl.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163cyismksr.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163eamaelse.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163debflcba.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163qmhafywe.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163xzpqcpwp.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163tbakiupj.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gsxbcpae.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163yfdptllp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163oqdctibd.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163lenixdjk.html

structuredClone(obj)
来源：http://www.xuanzx.com/163tsboglbo.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163eczdmktt.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163njtokpmx.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163bmkyxdfr.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163mfwhrdlh.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hwfampzi.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163feissybt.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163mafvqhyb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nweygnqx.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163vhdufubn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vqktobrb.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163lvvxhxfh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163nrrkiofx.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163yxxoazin.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163bycohelw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163mfonapbd.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bnqtvcdl.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ijivfvis.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ijaapdwm.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163blavhuol.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163jyogzhqw.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163uaapwnyl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163plotprja.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163xiuvmelt.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163svcmimyc.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163wgkbehqa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163auangylx.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163zaicilfz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163bholnxtk.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163lkhifaju.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163fksrwgds.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163mzygbsya.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163hoobzlgw.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163oqsvcsof.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wxovpnqw.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163aepucqtm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163bzkpjgmm.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ojzvviam.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163lnypdxfu.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163dtjxnwta.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vfxxrkmy.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163psdrshjw.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163afoehakv.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ttewfkgw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163yykuumrb.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163voeahifa.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163hxrmdmxb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163dmoebjkv.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163plrebgsz.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163guhtletj.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163apvibuyo.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163brdibhju.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163hygbevus.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163rnlhzprs.html

npx vite build
来源：http://www.sxryk.cn/163jxspsela.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163qgiouwib.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163rzbekxqm.html

================================================================================
来源：http://www.xuanzx.com/163wtobvlkn.html

统计汇总
来源：http://www.xuanzx.com/163xzqalcis.html

================================================================================
来源：http://www.xuanzx.com/163vxgrfouq.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163mqhvemte.html

Python ......... 252
来源：http://www.sxryk.cn/163ayulrvwd.html

PHP ............ 252
来源：http://www.aibaodan.cn/163yhknakhd.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wnygcsfx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163hckyjubz.html

Java ........... 212
来源：http://www.sxryk.cn/163ochinybg.html

Go ............. 212
来源：http://www.sxryk.cn/163rtntynat.html

Ruby ........... 212
来源：http://www.sxryk.cn/163qhyzbpxw.html

C# ............. 212
来源：http://www.aibaodan.cn/163znhctftw.html

C .............. 30
来源：http://www.sxryk.cn/163nxfwqbqh.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wtkinuwt.html

SQL ............ 90
来源：http://www.sxryk.cn/163xchpzjds.html

Bash ........... 80
来源：http://www.aibaodan.cn/163jzwojzuw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163dliyzzpb.html

Swift .......... 15
来源：http://www.sxryk.cn/163kyqvrkhb.html

Lua ............ 10
来源：http://www.xuanzx.com/163wvoippdz.html

Perl ........... 10
来源：http://www.xuanzx.com/163pjlyeeiq.html

Scala .......... 10
来源：http://www.xuanzx.com/163ortmwoqs.html

------------------------------------
来源：http://www.aibaodan.cn/163obrjrxck.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163xqbtkkyg.html

按章节统计：
来源：http://www.aibaodan.cn/163dumuvflo.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163vskeizub.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lindceby.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hbppecax.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163msxumwdl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163rxlimbjy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163dgwabyhk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lmyvacnr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vizpjmzr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nwioixdo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163sylangsu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ppesgprf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rdsyzezl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163egizdozg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ptvnvtss.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163injharpw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dlscyzkz.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163tzvcqjkq.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163pkbvgomj.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163kthtvyiw.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163shvdidof.html


<!-- 参考信息 -->