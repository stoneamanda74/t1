外链999!wailian999！

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163snnaotam.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ranyuzbv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163rptjqoct.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ozginsyh.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163bdlzmrnh.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163rvnfgbsj.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163yzcunwhv.html

defaultdict(list)
来源：http://www.xuanzx.com/163jtftnjki.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163txkpfnis.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ziaeobxt.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163wklrwnjl.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163apqzgnok.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163otzlptkx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163kwgohzri.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163zlrzrsyz.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163giodtodx.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163tznoytie.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163duychdvr.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163sjetloip.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163jgzmmitd.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163vmaoftsy.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163tfccaroq.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163vnmidded.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ydvxcjdd.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ahslvuoc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tpitqjts.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163yvrvhydf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163jikhabvu.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ygfmncws.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163fygjpamn.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163zjxolnsj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163okbqnmtu.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163oxyqourf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163dbgxadpe.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163oovyuslu.html

UserId = int
来源：http://www.aibaodan.cn/163dgsqbeok.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163fmdoaqfx.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jvxaugaq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163vbpnhyli.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163pamuwceu.html

[U31] Py：单测
来源：http://www.sxryk.cn/163dbxsttjo.html

python -m pytest -q
来源：http://www.aibaodan.cn/163nzamfzvv.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163bvegzmie.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163urzndevq.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163blfdorcu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163cfeoumqj.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163lpczcypx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163mspwxnsz.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163vhlssirn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163ogepauoc.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163qvebsqbd.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163lztvpscu.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163tnuonceg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ieiarkxj.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ymuvwgpx.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163wjclfyjy.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163laxfkmsm.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163mbohzspy.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163glcnhgia.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163etavmfjo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163tcsukalv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lmqzkwpu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163wkadmcyg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163xogrosci.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163nzzfpdfd.html

namespace App\Http;
来源：http://www.sxryk.cn/163anijphzd.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163oqdsyudn.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163xinzrwuj.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ictanidc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fglaxjys.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163kfqhysmi.html

?string $name = null
来源：http://www.aibaodan.cn/163ckjykyyi.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163drqhkaha.html

int|string $id
来源：http://www.xuanzx.com/163uijqmimb.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ieqeqvsl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163zifsujux.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163rivaserp.html

public readonly string $name
来源：http://www.sxryk.cn/163tjldpmwt.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163jgkmbbfk.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163qlvrcjjf.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163efqlbyhz.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163dupdusnw.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163xwbblnlt.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163akxkqvis.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163voeiatdr.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163sdihqrrb.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163uwrhslmm.html

$obj?->method()
来源：http://www.aibaodan.cn/163xikjpprf.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163qhqvcbev.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163lrzbqicg.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163zdkusqsl.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163abnacvvl.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163gtposlef.html

"值: {$a}"
来源：http://www.aibaodan.cn/163zdwjtmme.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163khncfjix.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163nkxnirla.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163xxzjmrvi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cpkrokst.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163zmpymxed.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zwsevuxt.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163emdlsziq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kejrdfjt.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163jevkeotd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163mosuskan.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163iyfzdczh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163owjrstkl.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163gajrinpc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vkyuyguk.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163zjoipbsd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163wzrmlojq.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163msohztdc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163qizszzmi.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163weweeaiy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163nepfazwn.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ztybtmii.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163tmfxbidt.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163pfyxpofh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163thunxwrs.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163mahdhykv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163bdadqkqv.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163gwnpadjn.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163tsyttmpe.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163lywshjbd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163cjdywfyd.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163kxmklcon.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163armqmnxa.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163rptepvif.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163vvxvjhnk.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163euunpgrs.html

composer require psr/container
来源：http://www.aibaodan.cn/163iioiipcz.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163uuvpzmlq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163otodonhg.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163dfmzwltq.html

composer require twig/twig
来源：http://www.sxryk.cn/163mitrjhtt.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ztkgglpl.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163umlcjxli.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163bvxzgfvn.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163wkmenqyj.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163fvlutqxd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163luhowapn.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163okwmgxpt.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163yjkilmdf.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163qjpfdcrx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163cluscvbr.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163pvxgczbi.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mrqdrcwc.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163pmnzmzyz.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163shbrqbmm.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163ukruenea.html

a?.b?.c
来源：http://www.sxryk.cn/163gbgegoxl.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163nbtcfjfb.html

a ?? b
来源：http://www.aibaodan.cn/163yblwtumz.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163gkberwxi.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ilmqytwv.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163olrbxuba.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163mmoznzlx.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163bldpdajy.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163qakxojww.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163naqhgkms.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163onopelyr.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163hzlehxoi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163sdlrjzbp.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163zqfhyhfl.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163lqvofxcg.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163uikvqkip.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163mgzmebqv.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163rtmdtkyb.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163tzjbrvdp.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ueffjxtu.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163fzrtkeuv.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163hhtcpkjo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ozymzuzx.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163twjdnphl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rwfcjnws.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163bzxkynkx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163lehfescv.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ktwqhwye.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163mjuvnzaj.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163eroruauk.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163hgqzordf.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163nukfiibc.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163umezfasw.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163cmcnqjan.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163khesyqhc.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163zbasumss.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163fvpahkdf.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163myftedfk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163akhukhgw.html

[U105] JS：节流
来源：http://www.sxryk.cn/163uwzcrdhs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163opvkhsak.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163vkkqknub.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163kiwstpbq.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163mcpccojx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163xncxromd.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163qzjkhbtz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163vqwqcqgk.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163sqzapned.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zceqdnhi.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163iwnqgrix.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163mxgtnkko.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ndsoxogn.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163rlldyile.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163blkuscsp.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pxvhvoqj.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ztabfjre.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hdgekahs.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163rtqhlhjx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jjwhochm.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163mhvytstj.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163uforbygy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xrhglxoy.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ugvebezp.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163bocobnag.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163kgjzixsk.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163nhqjvidr.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163yuzgkafa.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163aczmpuax.html

npx vite build
来源：http://www.sxryk.cn/163xplwuyig.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163jnyazgfj.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163perwfrol.html

================================================================================
来源：http://www.sxryk.cn/163uutkodrd.html

统计汇总
来源：http://www.xuanzx.com/163zyebwgpo.html

================================================================================
来源：http://www.aibaodan.cn/163caaxabyl.html

按语言统计（条）：
来源：http://www.sxryk.cn/163rigpzpzm.html

Python ......... 252
来源：http://www.xuanzx.com/163rpjsgvcr.html

PHP ............ 252
来源：http://www.aibaodan.cn/163wtnlkgvt.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wtqlzsez.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163qetqistf.html

Java ........... 212
来源：http://www.sxryk.cn/163tbcavnak.html

Go ............. 212
来源：http://www.aibaodan.cn/163hmsuxzmz.html

Ruby ........... 212
来源：http://www.xuanzx.com/163zamxovwl.html

C# ............. 212
来源：http://www.aibaodan.cn/163maoptrwg.html

C .............. 30
来源：http://www.aibaodan.cn/163tqhyjipv.html

C++ ............ 30
来源：http://www.aibaodan.cn/163kxzhboam.html

SQL ............ 90
来源：http://www.aibaodan.cn/163nwxvipwh.html

Bash ........... 80
来源：http://www.sxryk.cn/163ehwlmfjl.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163allofxuu.html

Swift .......... 15
来源：http://www.aibaodan.cn/163txsizkxi.html

Lua ............ 10
来源：http://www.sxryk.cn/163ifhybuiq.html

Perl ........... 10
来源：http://www.aibaodan.cn/163zthobhoq.html

Scala .......... 10
来源：http://www.aibaodan.cn/163hbhvlwkb.html

------------------------------------
来源：http://www.sxryk.cn/163zawkaqvd.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163jsivajni.html

按章节统计：
来源：http://www.aibaodan.cn/163ilsmygdc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163flldekho.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163urfielnm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xcmfrrvs.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163xzfpixcb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ejpekrku.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163yqtcurpo.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hrxplkdp.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163cijyjrjs.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vsuilmch.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163snkcbswt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ayhjxoio.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ptysvtjo.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hyyycqok.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163hxbvfcrc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163nqnreumb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163unniftdl.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163nliwsbtx.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163vyjgmllm.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163vveqxcjb.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163kvqifzpa.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163hufdgmve.html

------------------------------------
来源：http://www.aibaodan.cn/163wdnyffqg.html

合计                                  2106 条
来源：http://www.sxryk.cn/163rdxmdtlw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163twwrwwjc.html

使用提醒
来源：http://www.sxryk.cn/163pufprymy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163iwjiugwl.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163vzjttlow.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163iimpogml.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ccyhtdqf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163soyntwxi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163fghkxvga.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163sxojqmju.html

================================================================================
来源：http://www.sxryk.cn/163qqtvtkcb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163edpfjrky.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ojfivval.html

================================================================================
来源：http://www.xuanzx.com/163itbrkbcf.html

【收录内容】
来源：http://www.aibaodan.cn/163huavpcku.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163sqmvgnob.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163fdcnnhrl.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163lygeazuf.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163zkryxmpd.html

【使用说明】
来源：http://www.sxryk.cn/163kqjlcfia.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163vnnttfoq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163lwxsvjjy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163dtmirlrr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163pesnszae.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163okyxzouw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163dmsorkkt.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163cybhdgfu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163kvhbnjud.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163ecjgnkrf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163hykvfrtj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163pdodzmtu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163syzjqnsq.html

【文件统计】
来源：http://www.xuanzx.com/163mulxrlvm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163lzkdszgd.html


<!-- 参考信息 -->