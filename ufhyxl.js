外链999!wailian999！

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163safphfbi.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163tpgajagf.html

println("Hello")
来源：http://www.xuanzx.com/163bivimpai.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163qsxbreqk.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163oiocrxum.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163rygioudy.html

s"值: $b"
来源：http://www.xuanzx.com/163llcerytx.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163wnmaewkj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163aaszhgaz.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ibgmectz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163rzrvadgk.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163minrvreb.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dxkphkjn.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xdehpvaw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163fofkrrbn.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163meopyqvy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wcbsmhbi.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ctvlivkr.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gxwxjoga.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163gmigawie.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163esrnzytq.html

================================================================================
来源：http://www.sxryk.cn/163xsteughg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163nwtdivex.html

================================================================================
来源：http://www.aibaodan.cn/163lcuwbbar.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ndpacvpl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163csnxvqut.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163hnmaknts.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163rccujhbe.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ufqcpudi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163kbuafydn.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163draedqwl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163umgtlxsy.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163cuhskcvc.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zmhtyqyk.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163rkpbwapw.html

{**a, **b}
来源：http://www.sxryk.cn/163nlogysuc.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163aahlpvya.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163iteochid.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163dtpqssyt.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163cgknttwo.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163fhxlgjme.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163bdpykndz.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163mqultdry.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163wmjjorla.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163fpqwxeyp.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163dgrmnfpi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163yzcxqyfb.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163taojkknq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163nzgemgwe.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163svmfopyo.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mhaemdlj.html

defaultdict(list)
来源：http://www.sxryk.cn/163cydjgaui.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163znoljjev.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163mkucoiyw.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163vtssyqdh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163znerwfhi.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163xcmwpotj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163dpwhxsbd.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163fekrknnf.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163jvofzxox.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163aoryuwuf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163uuqemyoo.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163rsvvchqn.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163aukoiwxs.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163nnuvujsp.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163deobjlxz.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163twlgmwcz.html

list(zip(*m))
来源：http://www.sxryk.cn/163mptnbbxi.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163tonufrcs.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163rnumxyth.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163rhkxhyzj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163fgqsswhp.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163iqkqeekx.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163bhdqohxp.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163egqkemzy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163swmnpvur.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163rqvgwlpo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163onnjzwtm.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163gfpfsrto.html

UserId = int
来源：http://www.aibaodan.cn/163wydinchi.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163abqfqnpd.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163zprddjcl.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163cgpvssta.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163epcfvysx.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163credfcvr.html

python -m pytest -q
来源：http://www.aibaodan.cn/163jsoibrxu.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163loockdbf.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ebdtwmxu.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rtylcmdp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163woapwdok.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163noaoohqz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163behffmgm.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163iqshkdjl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163kdnappxm.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163frhdbwsg.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163gtlajuhq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163yusafzml.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ncyefetx.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163zyjqpmho.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163iqxujxek.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163zjlezjnq.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163nfqfjruf.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163urwvqunw.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jbxxwzwh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163qerxerwp.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163wgkelqwb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163vxdmmqxe.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163oizwfzdi.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163wtdwthuw.html

namespace App\Http;
来源：http://www.sxryk.cn/163qexqvgga.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163pnftcgvz.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zrpqwhtg.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163enwxseaa.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jyqfovik.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163absxcpug.html

?string $name = null
来源：http://www.xuanzx.com/163gjxaarog.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ibatylhd.html

int|string $id
来源：http://www.sxryk.cn/163ozqubsrg.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163zikqtntn.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163qzrninck.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163vhiznohn.html

public readonly string $name
来源：http://www.aibaodan.cn/163yrtegykf.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163etmnoqfg.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163sxzrwsav.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ehztqfow.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163bcsaigcy.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hxckoimq.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163hjwfbbbf.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ssksucjr.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163lsjcakvq.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163lkjaatxl.html

$obj?->method()
来源：http://www.xuanzx.com/163zuxdphyk.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ewitwzyu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163aufamliv.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163gpihotcd.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wblpjhvo.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ywjzzytm.html

"值: {$a}"
来源：http://www.xuanzx.com/163obmykngy.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163swqkfzgo.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163knjvvwso.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163cjwgxkui.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ntaonfdh.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163yywqhkpx.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163igogmuho.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163srtrlzqn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dvtpshak.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163hesvnsyo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163gvytjons.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163fmbzvjja.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163vnmzvevz.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163tlucfaxf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ezzjzgqn.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163kgtlqngx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163sdwaxoza.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163qpdhesdd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163iivwnkux.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ucfgqwzn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ekojhvqb.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163wovfuniz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ihptegmg.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163fdqlydrb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163tkqskjxp.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163imcofnlq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163othmcypc.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163mcwsbspi.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163usxpstzr.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163tzqnqmsa.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163udwulbxl.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163nadjderw.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163tqljncuf.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163erhcgflx.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163mxteixbn.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163lgpsxzif.html

composer require psr/container
来源：http://www.sxryk.cn/163xpmrljvr.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163fytccube.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163zbuocrej.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163zycfchos.html

composer require twig/twig
来源：http://www.sxryk.cn/163vlddwxyt.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163pqjiakbb.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163jwqdaror.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163upoelvzr.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163gfkxsjcp.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vkavwzrc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ccbtqsaq.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163gesagwvz.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163lykxsqju.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163dszokbft.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163hkdbpxfa.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163glidojzs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ufwvmeer.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163gyzqrzhf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163tpurinkv.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zknrussm.html

a?.b?.c
来源：http://www.aibaodan.cn/163anjrdqqd.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163iafppiim.html

a ?? b
来源：http://www.aibaodan.cn/163vvlyuskq.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ybfkqtam.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163vaukhgic.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163bgrwtxyu.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163iajrrewd.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163kyxdiwuk.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163oxqjizax.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163xutgftgb.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pvmmvstf.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163tifonjhq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163xgidrgyv.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163jrfudbsp.html

structuredClone(obj)
来源：http://www.sxryk.cn/163uobggcnw.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ivdukbes.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163isegbarf.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163hnsidyaf.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ybhkcble.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163tyykjaak.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163lkrupnyb.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163mfwefawg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wskvjehs.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163hzjusefz.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jwviyrzw.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163iosnbwuk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163lsluxxos.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ymmsvonq.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ratiwcot.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163jflqyqpa.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163vqvfheld.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163zzbuudml.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163zztcvylx.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163beyekfyh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163dditxyap.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163xkgebyrb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163gqenobep.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ddbybixf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163afblwzgt.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ztenhbke.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163oraevlel.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163yaoditio.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163znhndymb.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163xepjjrxl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163wrmgpotj.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163kkwpgwyo.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163tircwopu.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163lpssndke.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ltcyrnul.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163eqwoacql.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163dpzoxtst.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ukolviyk.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163uzeclqxk.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163jfsuhkfk.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mafrxikn.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163tqcjocau.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163newdwcuz.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163jekrnlkw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163tfxerntr.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163wcaepkmn.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163prcbjimm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163iptakuon.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163wkvtcywa.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163vfwwifqm.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163xgtuihmq.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163sablohqk.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163sxofuzqo.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163hhqmagja.html

npx vite build
来源：http://www.sxryk.cn/163dhizpbju.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163hnuvbemq.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163cghttfqe.html

================================================================================
来源：http://www.sxryk.cn/163xbpycebj.html

统计汇总
来源：http://www.sxryk.cn/163siltvaqm.html

================================================================================
来源：http://www.xuanzx.com/163zhrjmemx.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ewedcqtp.html

Python ......... 252
来源：http://www.aibaodan.cn/163mtzoiqyy.html

PHP ............ 252
来源：http://www.aibaodan.cn/163eqmaylag.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163upsdirox.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ldirkpdo.html

Java ........... 212
来源：http://www.xuanzx.com/163eitpipjt.html

Go ............. 212
来源：http://www.aibaodan.cn/163dckvrang.html

Ruby ........... 212
来源：http://www.xuanzx.com/163qfhigttl.html

C# ............. 212
来源：http://www.aibaodan.cn/163lbjypurg.html

C .............. 30
来源：http://www.sxryk.cn/163yasymncn.html

C++ ............ 30
来源：http://www.aibaodan.cn/163dcmduzle.html

SQL ............ 90
来源：http://www.xuanzx.com/163udanhgul.html

Bash ........... 80
来源：http://www.xuanzx.com/163jgfjznzg.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163akyaewzm.html

Swift .......... 15
来源：http://www.aibaodan.cn/163fycoconq.html

Lua ............ 10
来源：http://www.xuanzx.com/163lauvzvfc.html

Perl ........... 10
来源：http://www.xuanzx.com/163tnjpejdt.html

Scala .......... 10
来源：http://www.aibaodan.cn/163hasfqwmz.html

------------------------------------
来源：http://www.aibaodan.cn/163pfyldhoy.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163mlgiintg.html

按章节统计：
来源：http://www.aibaodan.cn/163yuezmrpb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mazfbwbl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163uovnpxto.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rjbsfdqq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163raskbeed.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163frfxdkmr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hphmjalb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qjiqxpvg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hxixruhy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cjnrgzly.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163uhcxzzpy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zqzeqett.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qfogrwxn.html


<!-- 参考信息 -->