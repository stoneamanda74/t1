外链999!wailian999！

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163qpkxbcqy.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163rxaqkwtx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163utzgjsho.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163phmtjekf.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163qkoqaeey.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163eukgjfii.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ecvzheno.html

defaultdict(list)
来源：http://www.sxryk.cn/163jzazxygb.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163jycomogq.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163oftluvls.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ppsfgmfd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163wquqijsw.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ghnlrhzh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ivsadikg.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163dcgnsmqd.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163fqkosask.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163rjqkhlva.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163dzjxvsrq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hahgbbtj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163tmpxouta.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163vfkjcgiv.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163lceibhur.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163axpgfyig.html

list(zip(*m))
来源：http://www.xuanzx.com/163ddzjmrxm.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163llqtgzae.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163iqpbcflw.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ndjbuwht.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ufetznbo.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qhwcgmro.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163zeqlycgg.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ztkushuj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163vwotaokk.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163folyitug.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163uetsbxhu.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163klsececs.html

UserId = int
来源：http://www.xuanzx.com/163tyutosxp.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163pohhhqud.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163lxppifcp.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zeanibau.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163rqgrmylc.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163szinaksc.html

python -m pytest -q
来源：http://www.xuanzx.com/163vejgwljf.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163bvlmbxrd.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163svxecuvk.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163xsoqmbny.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163iccpbgeg.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xxgttqvd.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163itbdpian.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163guvooblu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ibskcqsa.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163cnhyfcar.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163wrufheyc.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ykqesgwk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163fgbiagrv.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163vcxbfnao.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163oxogktpz.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163kodwjbvt.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163lujhybxa.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xwcouelr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wtrmomki.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163zkanfnfg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163wjocpbce.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163uocgsubb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163fjhfrgri.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163acayvcwy.html

namespace App\Http;
来源：http://www.sxryk.cn/163htshedct.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163qwgvsjyb.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163wnwjyouf.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163veuxqcor.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qmkrayes.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163tlxzpjqc.html

?string $name = null
来源：http://www.xuanzx.com/163gczhksnh.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ccgtdckz.html

int|string $id
来源：http://www.aibaodan.cn/163vffwvayy.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163dnnglrml.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163gwghvyno.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163czkzecqv.html

public readonly string $name
来源：http://www.xuanzx.com/163jlomhbbh.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163wwfjeeni.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ivrcfvtb.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163aneiuhzd.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163esarfovn.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ohfkzbew.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163bvmbfegq.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163akxkuyey.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163buuraelz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163tdlroqol.html

$obj?->method()
来源：http://www.xuanzx.com/163pktjkatv.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163sjnqskzr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163hhxeptls.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163hiwovemi.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163sngqfjyr.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163nxaxeksz.html

"值: {$a}"
来源：http://www.xuanzx.com/163nfgpduia.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163wpviptrb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163hetzthsj.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163dpivpbjh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163htluzbre.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163opolnjjj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163vdlcugfj.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163awebnsfv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163oawacxfn.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163zxddyevr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163bdxkrrts.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163jrofdmuq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163tyujbdrq.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163apxapcbn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163zgwguoav.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163idxctokv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163fxbauwer.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163uhehjzkt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163qwhiwdhz.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163uyhdkgvz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163mqcqxdmv.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wjxrykom.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163kmoniudc.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163tccljubm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163hjsxtkgl.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163nzckxgjj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163fjytdyxz.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163zfgwsykh.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163perkbvlq.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163amcjbvum.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163ddnulhfq.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163xnkyhvbj.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163eiyvbtnm.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ifbozsec.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163utrosmwn.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163rbvcxxxb.html

composer require psr/container
来源：http://www.xuanzx.com/163dbxdqoim.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163sxufuwcd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163nbbqmvhg.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163htbcjasj.html

composer require twig/twig
来源：http://www.sxryk.cn/163zggbohna.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163jnjposns.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163kwyllfyx.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163vfkdrrke.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163ijiurzeg.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163afpmbqjr.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163kdvpowop.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ipwhqkyd.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163jwqkzeeg.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163hfrnjqxg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ptfvmgor.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163bkkukfhk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mosxhxzu.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163dqqzvivn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163srrxqdfc.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163socvgjxb.html

a?.b?.c
来源：http://www.aibaodan.cn/163umvsoijl.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163mxkrgcui.html

a ?? b
来源：http://www.sxryk.cn/163zitlhjgw.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163hektcycz.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ecfnzyzi.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163cyrcsfnv.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163chntarhj.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163afmrwacx.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163zlnorqci.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163uthcssti.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wknjrrgm.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163zlxbuhli.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163hdwyftlh.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163adabkmqm.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163twbprtub.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163crfovqgc.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163rzxdnirh.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163xxxmiguf.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163vmpzmrgo.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163qlvnkqyq.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163iyebipxh.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ttnleqhc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163llaaiqua.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163mbqadjsd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vuscpsoj.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163bxcbtltm.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xzugasvb.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163bdxibydi.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ujkbzwsc.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163nojbcpfb.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163pktmckzl.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163cgohmfhn.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163qumfmkdl.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163qokxsxej.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163rrqqosxl.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163qvdfngiw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163jbxebfza.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163nxnjydcv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jrxlzcuy.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163eemkzbyi.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163qntpgxhw.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163hsrjzabo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163azgabloc.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163azuhsyov.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ijmvrcaw.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163gjdlbrbz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163wllodbcf.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163sidwwtrz.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hqidzpuf.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ylyzzdgk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163amfhftpm.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163lzdvnmql.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163rdlvazvt.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163iudpgomv.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163nmzmwpcy.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163kkhdlnpy.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ubntptii.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163hqveknmv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hjeuodoi.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163nxxwsqeh.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ilxgiqyf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163sohmzkki.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163jeahrown.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163qkoqyjjf.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163buqlupri.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163xizvxaqf.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163jmtevwzx.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163pakanrhg.html

npx vite build
来源：http://www.xuanzx.com/163hsyknqmz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163xbposvtg.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163jggrbevc.html

================================================================================
来源：http://www.aibaodan.cn/163yrosberh.html

统计汇总
来源：http://www.aibaodan.cn/163icwnkdkd.html

================================================================================
来源：http://www.sxryk.cn/163blbkeilt.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ruqqiloi.html

Python ......... 252
来源：http://www.xuanzx.com/163rnrcojhz.html

PHP ............ 252
来源：http://www.aibaodan.cn/163zhjvgoao.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wzytybgf.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163vcemvuwh.html

Java ........... 212
来源：http://www.aibaodan.cn/163vqifdfzj.html

Go ............. 212
来源：http://www.aibaodan.cn/163riqeagdf.html

Ruby ........... 212
来源：http://www.sxryk.cn/163musvsbvc.html

C# ............. 212
来源：http://www.xuanzx.com/163fozgpbkh.html

C .............. 30
来源：http://www.xuanzx.com/163ifitqkft.html

C++ ............ 30
来源：http://www.aibaodan.cn/163fwiyrtyy.html

SQL ............ 90
来源：http://www.xuanzx.com/163erjhpqzx.html

Bash ........... 80
来源：http://www.sxryk.cn/163agytyjfr.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163nlgdkcln.html

Swift .......... 15
来源：http://www.sxryk.cn/163vffdxsku.html

Lua ............ 10
来源：http://www.xuanzx.com/163yqweynqk.html

Perl ........... 10
来源：http://www.sxryk.cn/163xmgidqtz.html

Scala .......... 10
来源：http://www.xuanzx.com/163hqfeeqrs.html

------------------------------------
来源：http://www.sxryk.cn/163nhdqqovk.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163fjtusldz.html

按章节统计：
来源：http://www.xuanzx.com/163wfvyslzz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163fifmobmk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zkhzvzwn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163grqyqeay.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jbjofnix.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ynhfkugj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zhsdnrok.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163owniqgca.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ksnlnfwz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163exoqeeks.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mhnciinm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pdxgwhmp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163oynwtoqa.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jcstkxdn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163irhosmza.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163nfunlete.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pnumokwk.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163pbskfybb.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163yoymiatl.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163dzcfntye.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163jnnwfgop.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163exevfpdm.html

------------------------------------
来源：http://www.aibaodan.cn/163vbelubrs.html

合计                                  2106 条
来源：http://www.sxryk.cn/163svlhakbj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vmmpgasq.html

使用提醒
来源：http://www.aibaodan.cn/163bqlocbic.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pzpnbfhq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163pwaoyeca.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163oaubkgab.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163pnifyhob.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163txuqxbns.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163pcsgdhkb.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163zuvoussj.html

================================================================================
来源：http://www.xuanzx.com/163vgpzjmps.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163qfanxrnr.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163tttdgbom.html

================================================================================
来源：http://www.aibaodan.cn/163flexnnfr.html

【收录内容】
来源：http://www.sxryk.cn/163yvvpnghh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163pxiitjup.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163mammevjb.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163zonzvyct.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163bhzjmifr.html

【使用说明】
来源：http://www.sxryk.cn/163aypxkowo.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163jonvautl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163hqfwhajj.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163dxlbxsdz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163aohbptmg.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163itjthxsi.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163atgiykha.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ahwwhncv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163dxkwnbro.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163vzppaigj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163egqobqkg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ecywnrkn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163hoiajprw.html

【文件统计】
来源：http://www.aibaodan.cn/163fuyrcukg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163yluixxog.html


<!-- 参考信息 -->