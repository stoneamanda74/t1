外链999!wailian999！

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ygomgwwu.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163xgxigaim.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163tzoqogqt.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163urkgkxym.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163oogylipx.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163gewnhwcr.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163qpbxbilu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ataqevtr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163xgsmypcf.html

================================================================================
来源：http://www.sxryk.cn/163uxiiyeii.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163wliqyuru.html

================================================================================
来源：http://www.xuanzx.com/163zmzhhmys.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163asiukpie.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163cuaubpyr.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163tgedixku.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163nkrndngi.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163wzffzzqo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163mxhykhmz.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vnpxbqvd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163upypgbah.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163udhvtrag.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163sklhzvzu.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163mcvtmqqs.html

{**a, **b}
来源：http://www.sxryk.cn/163dsitxqxk.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163luynoood.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wpluzeky.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163vxnoedex.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ybdrezxv.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163iwbovpgc.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ifslgkaw.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163agjsevgq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163sgvwoglx.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163agnnusio.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163evpcuqqh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163qluflvwo.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ptzcxcfp.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163byljriiy.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163kaqddueh.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163hwnvexok.html

defaultdict(list)
来源：http://www.sxryk.cn/163lhuamock.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163vkrbnnbx.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163laoqkyhf.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163wauyrlpp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163yjntsydy.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163pzuwnjmd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163fticiuhe.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163oqyvpppm.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vzthbhtp.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163mxxjegsb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163xqvgazcr.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163bioacdwe.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163kbrjhwer.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163zywxgcre.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163zntlqlaa.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163stahuokh.html

list(zip(*m))
来源：http://www.xuanzx.com/163edajxqdm.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ipbjodrs.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163rhxebycp.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163vpvlwrqt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163laecvzvf.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163cfaoukom.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163axpdvhms.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163hewlzxev.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163mxxycscx.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163xswxiihq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163wfoaqhsl.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dzclqjfa.html

UserId = int
来源：http://www.aibaodan.cn/163bfjhnfxv.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163mxrxnivf.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163qgfurxvy.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ichngout.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163cqyieltg.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163knbnqawt.html

python -m pytest -q
来源：http://www.sxryk.cn/163eecdxuma.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163otxynvod.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163riuitoqm.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163omlpigzz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163bdqwprtz.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163xpxmtopp.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163seoddflx.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163dcymyskn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163gbupquwr.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ybthqjaz.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163yhqsncdv.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163jkibuaed.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163mbhfkupv.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163efngnwut.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163hvnnxwvl.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163nbprretr.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163tfyttesa.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163olczancd.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cwuqnaod.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163vogppbiu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163fwpapvpb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163dboufqzv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163hectwqhg.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163sajllbxp.html

namespace App\Http;
来源：http://www.xuanzx.com/163ifadcdgk.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ecnnvawo.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163bbcxsqrz.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ppyeqrmw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ytaafvzf.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163cuqhnprv.html

?string $name = null
来源：http://www.sxryk.cn/163fsnpddpf.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163xjxwcrxv.html

int|string $id
来源：http://www.aibaodan.cn/163bdfhvjyc.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163imadngdz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163fmkluivv.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163mdwdhdag.html

public readonly string $name
来源：http://www.aibaodan.cn/163nlgpmpjm.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163pjfzhgdw.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163cdrescbk.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163vlndwnxy.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163xbunqfxy.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ctrgoiqw.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163pdwvjycv.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163kuqnwdif.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ffkfcyua.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163umyoaace.html

$obj?->method()
来源：http://www.sxryk.cn/163krjbqead.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163phqzhyof.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163kaxdiusb.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163uoikgvqn.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lbcazcac.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163vcadhcad.html

"值: {$a}"
来源：http://www.sxryk.cn/163htpxzbaq.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163bnnufqem.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163vgrotaem.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163kgeqeowr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dxrylhdo.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163bjtlorti.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163tkqovqou.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163jfjppmyk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163nfhspgrw.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163zudltmvw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163wwjlnwfd.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163emsfkrqa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ffgdqdor.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163qisyhjtw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163bcnnqkbj.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163nekwpwcg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ozjdgfod.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ytlzvbrr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163efvrahhi.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163iilxeqpy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ojchfveq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163falwqxjs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163xxqkwpds.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163ljeitxif.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163wphhuyon.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163mhzmbkan.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163tcaheukg.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163veszebvl.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163vimbtoav.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163vrdekotq.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163yzgcfbgy.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163usnlrkjo.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163zyhgjcem.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163iqhjvpqq.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ylwiqofi.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163mstlnryo.html

composer require psr/container
来源：http://www.aibaodan.cn/163mdswalcf.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ejatlcyl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163bmszlbui.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163vzuwleem.html

composer require twig/twig
来源：http://www.sxryk.cn/163tihakjsp.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163tvyfqqqz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ryyurtwa.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163awwfnyoh.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163dxmxcqar.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163usrgnvvo.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163yasjnqgp.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163fblgkgko.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163nzxkqbhj.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163samzmmyp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163qsrmjuma.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163omwtadwo.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163tuyqtnix.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163nhwfghjw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163iaugzqxx.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163qmvclmop.html

a?.b?.c
来源：http://www.sxryk.cn/163fkczasdw.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163seswytck.html

a ?? b
来源：http://www.xuanzx.com/163nujkcwuz.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ebntpajq.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163fglpnxhg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163judzeicy.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163wkcexjqy.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163cqpczeeh.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163pxavsrif.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163fndgzbqk.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163embvthzo.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ksdtyuqz.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163pmurdykp.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163svmfehyq.html

structuredClone(obj)
来源：http://www.xuanzx.com/163xphinogz.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163udbgfpud.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163vpiebuvp.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163owvpdaqd.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163kgpdzegx.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163kvgfufgj.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163pmvhklmx.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163wxyuhwfv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163myfrhqxu.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ynounwvd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xzyehqte.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163wpoehzct.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163rkqqbvju.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163lekoxmfe.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163jswzyjkl.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163fpbmicii.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163zorznzfj.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163porizqzt.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163iugngyux.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163gjlrzvik.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163dqrtpugn.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163qefechwt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163iwmueqax.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163uhreozfk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hlpzaqgn.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163csjgklke.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163sxtyysnc.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163juhzuqna.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163wukqejew.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163tlchcyrj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163dgzihbpq.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zvbkpbmp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ugwyytoa.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163nxtgkroe.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pnnkkpoj.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163emonqfvx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163olvluggu.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163viyxgqxr.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163fezvvglr.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163brgmnhlj.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ddaddrpw.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ssgirtam.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rqhzaedx.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163pksnzvjj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xuraemek.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163qvmsirzj.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163adldadjz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163hktgrxht.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163zcyolpqk.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163icddyvps.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163omqsezza.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163xnnniuzc.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163gqwonbys.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163oyhxhzrp.html

npx vite build
来源：http://www.sxryk.cn/163zmewvoeh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mwtpwewo.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163kmlkfcpn.html

================================================================================
来源：http://www.aibaodan.cn/163tmzjdrgp.html

统计汇总
来源：http://www.xuanzx.com/163jdrdpbgg.html

================================================================================
来源：http://www.sxryk.cn/163tdtnrwob.html

按语言统计（条）：
来源：http://www.xuanzx.com/163wketltow.html

Python ......... 252
来源：http://www.xuanzx.com/163ymrzmfei.html

PHP ............ 252
来源：http://www.sxryk.cn/163xwhjbovh.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163enhrgieh.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163jepluvfd.html

Java ........... 212
来源：http://www.xuanzx.com/163eybgbprw.html

Go ............. 212
来源：http://www.xuanzx.com/163voextcbd.html

Ruby ........... 212
来源：http://www.xuanzx.com/163bzjbzfzz.html

C# ............. 212
来源：http://www.sxryk.cn/163nraaifia.html

C .............. 30
来源：http://www.xuanzx.com/163rsrsvwet.html

C++ ............ 30
来源：http://www.aibaodan.cn/163kqhozart.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ivbcifaa.html

Bash ........... 80
来源：http://www.sxryk.cn/163yvgyfxlc.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163cbiimpuw.html

Swift .......... 15
来源：http://www.xuanzx.com/163hocmdxbb.html

Lua ............ 10
来源：http://www.aibaodan.cn/163tzhwjgqp.html

Perl ........... 10
来源：http://www.sxryk.cn/163qavaztoo.html

Scala .......... 10
来源：http://www.xuanzx.com/163cnbaowzl.html

------------------------------------
来源：http://www.sxryk.cn/163oeludgoq.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163vaedafef.html

按章节统计：
来源：http://www.aibaodan.cn/163iddfuska.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163njfkmbkm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zdtmkgdw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163iscsunkm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163keuoosoz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163gjkfatfn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163sygncaxc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jhweoxqk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163kihstqwk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bbraroky.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163wyckozbs.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wgxpjroh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jsdtdeuq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xdddpkyx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163cuxsdwmn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ohqgrsly.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ygpvtioz.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163olrtbpvy.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ktrdimtl.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163yzrstrvr.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163nqjjamgh.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163cjbnvepp.html

------------------------------------
来源：http://www.xuanzx.com/163vngxdnws.html

合计                                  2106 条
来源：http://www.xuanzx.com/163zehtkksf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163sehpodnm.html


<!-- 参考信息 -->