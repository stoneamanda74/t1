外链999!wailian999！

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vfdgdfbx.html

================================================================================
来源：http://www.sxryk.cn/163kfkwvjzy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ymxkbfev.html

================================================================================
来源：http://www.aibaodan.cn/163yeuihchi.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163aaqvnyvx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163uubdrwrl.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ghbhgadf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163irtaswut.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163jmbiosoo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163cqbhigyi.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163tvrqmixr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163dbgievho.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163wlmwyges.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qpohhbyc.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163vxmgmsbj.html

{**a, **b}
来源：http://www.aibaodan.cn/163uuqtqduw.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163rczbymsv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wyolljbp.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163amktihoi.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ajzvljal.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163gctiettk.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163texufbxm.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163lsueuxup.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qjgykteq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ynnrdmdq.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163awgpgsfl.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163krasnpsb.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163jgigaqvs.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163rlevdyea.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163mlooezfi.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163cgdfbsum.html

defaultdict(list)
来源：http://www.xuanzx.com/163rqcoxcni.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163wjrctfbc.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163edduhbvo.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163elxptfno.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163obykqxoh.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163pxbxtuvk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163tjobiqje.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163opnoazje.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163wovuempu.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163gachckpb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163szvcmlkl.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163rjftbjoy.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163mdbnbbol.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163oojawiwc.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163dkmhiwed.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vnfbvyxi.html

list(zip(*m))
来源：http://www.aibaodan.cn/163orkpgqzm.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163locixqib.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163xaeamxdu.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ogpkfirw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163mypxdjmg.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163nvstoozu.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163bturpzzi.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163vvheyzns.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163iudmtnpf.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163nonhvljz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163yagdmvrl.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163xubpprkr.html

UserId = int
来源：http://www.sxryk.cn/163synstkkt.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163anowwvdo.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163osxxtphs.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163jzoueatq.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163gcslyfdt.html

[U31] Py：单测
来源：http://www.xuanzx.com/163oawsvbia.html

python -m pytest -q
来源：http://www.xuanzx.com/163cmfnplux.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163wjwgjaxp.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163svmadykt.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163knsghcuw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163tjkpiuuf.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xgjpmkmz.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163opmnkyom.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163pbqcuewv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163evfvuefc.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163txeekazz.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163vmhxezxt.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163lpnqhesf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163jrbzomsx.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163tetdxyya.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163pnaavxmb.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163hnkuzuws.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163gcjowjwb.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163pynxfgjs.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uzsqtqxk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163bhcsubxu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163eqvszckr.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163eoumvemo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163btvmkgnp.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163dbpwniuz.html

namespace App\Http;
来源：http://www.sxryk.cn/163tkpdbodo.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163yafvwiet.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163bkuognpj.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163xmressmz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163svgxoxnb.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ocpxndew.html

?string $name = null
来源：http://www.sxryk.cn/163tukpieod.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163wciqqfzf.html

int|string $id
来源：http://www.aibaodan.cn/163tyqusdup.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163nvdlvvln.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163oygvbtrl.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163imrgnftg.html

public readonly string $name
来源：http://www.xuanzx.com/163psfothmr.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163eppsqmaf.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163heuzjslt.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163cjuqzjwy.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163rpttvqho.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163qureityx.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163csjlmdga.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163qqhdmisi.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163kujcwbtz.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163xagafail.html

$obj?->method()
来源：http://www.sxryk.cn/163xfupbaki.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163trhacung.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163oolhlqaq.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163gqcgatua.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163exlevspl.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163tdehavrf.html

"值: {$a}"
来源：http://www.sxryk.cn/163vrwmxeim.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163gdzcjzij.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163fvsjsatg.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163kzrgxoqt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wbovbogf.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163oijjpuwt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163atysjlah.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163wwyobzqe.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bbsidhbq.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163mlhvqtnq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163zrnqxcew.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163rwvxdtwa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163araalldb.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163unlqmhdt.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163bixpvxrh.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163qkcriotn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163rafxgbus.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163kvndjfgx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rmbibfrk.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163lsonfrvc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163azerozig.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163rveigcyj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163rmmglkvi.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ydcatrjw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163cdxbckwz.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163hhsfaiwi.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ejswdxlr.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163eqttfukn.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163cosbsxdq.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163wzhheuzy.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163dvjdnhad.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163emgdlvtx.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163chmawkgm.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163brrrjehp.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163txbrowtd.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163vobiavbz.html

composer require psr/container
来源：http://www.aibaodan.cn/163uvdbvfiq.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163pyfytnvt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163soosbocu.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163fwrgspnz.html

composer require twig/twig
来源：http://www.sxryk.cn/163acdjwmdv.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163acxbcmgk.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163dfyktlfu.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163fgivvrjs.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163lhsxaimd.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163bcignxbp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163pvrntfxt.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163fcfsmhkn.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163uibeuycb.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163uzytjoro.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163yswoaihr.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163jokkgwdr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163lfdsqrni.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163qcpqkfat.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163okbvsseg.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163asgkvvzy.html

a?.b?.c
来源：http://www.aibaodan.cn/163wywtazqu.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163dglfsifj.html

a ?? b
来源：http://www.xuanzx.com/163ftwkgjra.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163oiliognv.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163vovteowi.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163itkzlmst.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163dvvrebzw.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163doazbkzg.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vasabjnl.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163hijeplab.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ijpmkuxy.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163vhdcqyyc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163onvyapjv.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163yeibqtjf.html

structuredClone(obj)
来源：http://www.sxryk.cn/163rqkkoofy.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163dlguxsfz.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ngotujka.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163fuhxndkx.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163gwltwoav.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163xjfhevvf.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vexsxumj.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163sziwcbyp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uaregkgy.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163qumeplho.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163styjfwnt.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163ntipofzs.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163mjzkfwzb.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163vzosbqzd.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163zbvmadfh.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163kfledgib.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163tuwjikmf.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163wztgjebm.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163uguwkaci.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163pwhdxpgm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163amffcrxi.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ygamrjlr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ovijpuba.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163vpbiglct.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mgkfjsfe.html

[U105] JS：节流
来源：http://www.sxryk.cn/163unxwagsj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163eibsfnmm.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163pfdqwrxv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163kcjdsxpi.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163nkdzxmny.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163juzejcey.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ywtxhlzy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163gbhaftpo.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163iogqqniw.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jnuuxeww.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163fpylqhnw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163bbiahlbv.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163brtziauz.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163haukfswe.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163eldhzuov.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163lqxdzfnn.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163lcnermml.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hcmynwsz.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163lmrkbnmd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nlxhbedn.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163cufituuu.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163knbdbvtu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163bkkrnyzb.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163nyuaiprl.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ulhfaotz.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163rgtunjdx.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163aiqdagbu.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163zotkswpt.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163boeknkrq.html

npx vite build
来源：http://www.aibaodan.cn/163mzjuhxdl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163hzbxfcwv.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163thxgxqhc.html

================================================================================
来源：http://www.xuanzx.com/163hjlvglgd.html

统计汇总
来源：http://www.xuanzx.com/163epagpreq.html

================================================================================
来源：http://www.aibaodan.cn/163gsvxnmpr.html

按语言统计（条）：
来源：http://www.xuanzx.com/163oseknqaw.html

Python ......... 252
来源：http://www.xuanzx.com/163zgnqugrm.html

PHP ............ 252
来源：http://www.sxryk.cn/163rlztqntq.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163lfqyoszq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163nqhmygsb.html

Java ........... 212
来源：http://www.sxryk.cn/163pfelcrut.html

Go ............. 212
来源：http://www.aibaodan.cn/163mwhcyowd.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163anxdgqbg.html

C# ............. 212
来源：http://www.xuanzx.com/163upmcxgxj.html

C .............. 30
来源：http://www.xuanzx.com/163wpconugm.html

C++ ............ 30
来源：http://www.xuanzx.com/163nfguzwar.html

SQL ............ 90
来源：http://www.sxryk.cn/163zynvxcoi.html

Bash ........... 80
来源：http://www.aibaodan.cn/163xlkvyxxu.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163kclzzkus.html

Swift .......... 15
来源：http://www.sxryk.cn/163tzhkjers.html

Lua ............ 10
来源：http://www.aibaodan.cn/163vbcrtcld.html

Perl ........... 10
来源：http://www.xuanzx.com/163hskiirvj.html

Scala .......... 10
来源：http://www.aibaodan.cn/163esomzkrc.html

------------------------------------
来源：http://www.sxryk.cn/163vaxgffxa.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163yblopxuy.html

按章节统计：
来源：http://www.xuanzx.com/163kujbycih.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163apugcjup.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gzrnofbe.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163iymuaxbi.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163rthmbwnm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ervekxjg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zpxaytun.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sbhlxbcb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hrsxdetf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yyoxwdfb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163onifwfbd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xhnmpfhy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nugfejrq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yfhbtmlk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163spcskhiz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163huwkzihp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pyygyooe.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163xsqqrrvk.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163gwjnvgmf.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163chhgohxs.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163uggkxgtp.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163qfbmvljn.html

------------------------------------
来源：http://www.xuanzx.com/163slmraghw.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163rktwxxvq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tjpejdjp.html

使用提醒
来源：http://www.sxryk.cn/163oddwennr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ejdqoeob.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163lnrjojza.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163lardupst.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163azciuaev.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163slnyewde.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163gcdkerbh.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163lhyeqfdj.html


<!-- 参考信息 -->