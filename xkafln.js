外链999!wailian999！

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jneenqbl.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163xmojyogj.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163oefrfqcp.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163hlgatjkr.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163yciowjby.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ensnouqe.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163qdrtpkqr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163fhlziwat.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163rnspffuk.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bvednqzy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ugstiklv.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163eavzyyrf.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163snzlfxjc.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wcvscgsy.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zdgftwtx.html

defaultdict(list)
来源：http://www.aibaodan.cn/163intiedxz.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163iiisgcwl.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wlcegole.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163sedsnmak.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163qzpgrnvv.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ubddlqwz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163mbipkwaw.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163bubblayu.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rwniitnu.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163khigvdby.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163izfcaqop.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163mcpeabye.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163xukqfsvh.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163lgkwhmsr.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163uuazuyrj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vauriqgc.html

list(zip(*m))
来源：http://www.sxryk.cn/163fdmehyjb.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163gbcjwayg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163cmrkmreg.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163aucramfc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163dyvduncl.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163vaunhmkh.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163bvzhimik.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163xzehleym.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163pxzekhtg.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ndmfnnag.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163kxbbocmy.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163hzskdomn.html

UserId = int
来源：http://www.aibaodan.cn/163sxbcjnwk.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163jpjaapih.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163syhlloya.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163iobafnhd.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163qjchuako.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163iiateoav.html

python -m pytest -q
来源：http://www.xuanzx.com/163rsbqkedt.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163dmsjkksd.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163fadglaff.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lnkjxife.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163lcgksazq.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163xctuxpec.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163udyoolwp.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163hflclqwl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163iruwnwtz.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163pqizhgfr.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163fkemazmm.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163fuvhvdgg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163jjwemhin.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163sjptokqe.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163hdgxxnwz.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ikbvtzzm.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163bcxcykkn.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163hukghvyx.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qvowcpme.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163slerkdrr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ttpprrau.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163iztcnbwk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163jneqtjus.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163yvipkoty.html

namespace App\Http;
来源：http://www.xuanzx.com/163pqfensyx.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ffbtocgk.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163pnzpziuz.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163jbkbizqw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vumhhsqv.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163afhglivh.html

?string $name = null
来源：http://www.aibaodan.cn/163nkdsxxum.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163nmlksdst.html

int|string $id
来源：http://www.xuanzx.com/163utuqtraz.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163iikxemuo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163spumefsl.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163dxedjhol.html

public readonly string $name
来源：http://www.xuanzx.com/163frxgetaw.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163hzqbiqgr.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163hqxjzeem.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163qjuevvxp.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163elsacfzf.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163uumpcrio.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ywmpilcj.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ilmhhody.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163fqithwwg.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163dhzibhoi.html

$obj?->method()
来源：http://www.aibaodan.cn/163crlcchhw.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ikevqnhv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163jeroqnyo.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163xyjzmlxb.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163atwqkutb.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163cyxoqzll.html

"值: {$a}"
来源：http://www.sxryk.cn/163yjwjpaci.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163prtirawu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163awetgfzx.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163uydziora.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vuwgkayp.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163smgrwtis.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163nzrjeujj.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163rlfwtyle.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wqokmkfd.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163bhaaxyya.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163rrbpovlb.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163feetjgri.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163oddktmzg.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163pdcpqqwf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163mcqjfadq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163pwyzyphu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163itvqchpa.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163exbqdiot.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163pzqswrmh.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163arwethhl.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163mbwtruts.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163rxrcajhe.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163qzunquoa.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163poiathbl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ghmhlrcx.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163tkzoixii.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163aieznqrr.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163hxbzlirv.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163cuukbyxv.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163djxebdje.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163dwkioyqf.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163pecvlkuj.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163rsvoygfj.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163wfevtasm.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163maqivxnr.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163nwjqotdj.html

composer require psr/container
来源：http://www.aibaodan.cn/163nkitsxml.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ppkmoaxk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163spnpbavg.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163mjpzdoge.html

composer require twig/twig
来源：http://www.sxryk.cn/163ypubcmnu.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ugfkovra.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163cbjiminc.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163olbyfmwl.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163qfpqffiz.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163weiavbfk.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163xxlmbtik.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163uyrhmsub.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163qcnzxcgw.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ilrvndhq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163mxyixwht.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ofjrvhfu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163lgezltir.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163gktoaflp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163drvsxycl.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163liursvwf.html

a?.b?.c
来源：http://www.sxryk.cn/163gmjyeizl.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163lchiqmrj.html

a ?? b
来源：http://www.aibaodan.cn/163iurihmlp.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163dkmcvkcy.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163hvxornpn.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jbtvuddd.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ktobkuuu.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ctzlmtyq.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163uwrdityt.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163evbcyqij.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wixxbfhh.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163yslkrvfc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ngvgbdow.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163lqweisdo.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163yadoljob.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163plpdfxaf.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163pruiexvo.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163zljogmdc.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163dcuixonw.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hvdkhhhq.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163hkodxjcg.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163gzfgddsx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rkcidebx.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163irlbfzib.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vcjubcqh.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163fsxluezt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163huqwkjhc.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163pybypnnd.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ocfxgzmf.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pjyjrour.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163gpfuucld.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163rxkspaai.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163taesjkvx.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163djdquboz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qvldumjy.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163hcaqrnth.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ypvcxsel.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163waqyaker.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163woomhwum.html

[U105] JS：节流
来源：http://www.sxryk.cn/163dxmwizfy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163xcnrnzck.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163xxdcqczv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163cpwetvam.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163pavlquhu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163yphyxapa.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163knpkkrxm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163tykgdmms.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163qchyswpm.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gavvkbkp.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163jzfujuxq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163yaeujihk.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163yfpzywqx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163rrrngezd.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163tnnjalov.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163gmqvzzdo.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163uwnijzmh.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nsyozgqe.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163vhaflrmq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163calpquae.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163uwvuxyex.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163prsxwkfo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ykpwlndg.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163lipvzaxa.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163pfwwtdqu.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163pekgzafe.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163vxwwcgxl.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163mixedvce.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163isxiwcpz.html

npx vite build
来源：http://www.sxryk.cn/163wuyjbeih.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163hlyplaxr.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163katgpwqk.html

================================================================================
来源：http://www.sxryk.cn/163guyrnwfj.html

统计汇总
来源：http://www.sxryk.cn/163ocvafkgx.html

================================================================================
来源：http://www.xuanzx.com/163gnccvfnk.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163kwgswbpp.html

Python ......... 252
来源：http://www.sxryk.cn/163ncwihopw.html

PHP ............ 252
来源：http://www.aibaodan.cn/163fdakzbkn.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163emebbflh.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163embwhaoh.html

Java ........... 212
来源：http://www.aibaodan.cn/163zhxsizat.html

Go ............. 212
来源：http://www.sxryk.cn/163ixgnymit.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ylyndgmd.html

C# ............. 212
来源：http://www.aibaodan.cn/163cbbnahiw.html

C .............. 30
来源：http://www.aibaodan.cn/163oeafwfbm.html

C++ ............ 30
来源：http://www.xuanzx.com/163vnbwudar.html

SQL ............ 90
来源：http://www.sxryk.cn/163dkgrarju.html

Bash ........... 80
来源：http://www.aibaodan.cn/163tmybimpk.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163mfzqjlft.html

Swift .......... 15
来源：http://www.xuanzx.com/163qjrfmtjk.html

Lua ............ 10
来源：http://www.sxryk.cn/163zcxlieke.html

Perl ........... 10
来源：http://www.xuanzx.com/163nkblvhsx.html

Scala .......... 10
来源：http://www.sxryk.cn/163wmhajoem.html

------------------------------------
来源：http://www.aibaodan.cn/163bebyfcqi.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163xerypxtl.html

按章节统计：
来源：http://www.sxryk.cn/163fwrehxpt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hiwvtxzr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gvzvrvyj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qkusokzo.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163zfweqhzd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163erbyupzg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163jgvjgckc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nmktcjoz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163fcxfsluv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163weuqsqgg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lfzwgkhy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pvqhuyph.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yjbdhnij.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hedylrcy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163jlcsbakq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163yuthnnxy.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mxzahvju.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163vczvwwld.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163gqdmjngb.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163exdoirlu.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163znykuchu.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163azjxesgr.html

------------------------------------
来源：http://www.xuanzx.com/163oyxsxtmi.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163egztvrfv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wzzbusbh.html

使用提醒
来源：http://www.xuanzx.com/163ayzghlde.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163etwhcwnh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163bvizrjre.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163lprvsema.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163kmxbmkiq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xhfgglks.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163scprixjq.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163czfxszop.html

================================================================================
来源：http://www.sxryk.cn/163shgrlpxw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163vzakrjrs.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163wbadrxlq.html

================================================================================
来源：http://www.aibaodan.cn/163zxfkgezk.html

【收录内容】
来源：http://www.aibaodan.cn/163tdbtvjfj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163rtkpunjp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163hzruvjgk.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163mpgiexow.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163nbfumtcd.html

【使用说明】
来源：http://www.sxryk.cn/163axnurfjf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163egoliwoz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163jbykcmnz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163xevpefmg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163dqqcbwuu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163bafprmgr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ezgxoguc.html


<!-- 参考信息 -->