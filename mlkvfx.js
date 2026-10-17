外链999!wailian999！

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163hipmywqm.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ucxkhibs.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163moogecvb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ljffguqg.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163prvatvwe.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163pgtgytmd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163xlyicvpu.html

UserId = int
来源：http://www.aibaodan.cn/163mdmtbvkl.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163lunidkvx.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163pnfwhbdg.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ygxtdsyk.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163xfpevhrp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ymavdsrb.html

python -m pytest -q
来源：http://www.xuanzx.com/163voqlerae.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163puupomyg.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163nvverdaw.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163efjnzzhp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163lkfalxlm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ssuhsqup.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163rlnpxxfp.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163xtpkwpwh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163vhlpzuvx.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163xfewebvc.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163gxecrwuf.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163favyjixt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163plkfzcye.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163enylxwbs.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163prnixmnp.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163bplyutvg.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163jwexkjht.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163yxjcltut.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hkhwcmdi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163cfonqgsk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163gnsmylkl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163cxdpcivu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163bfqtyngz.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163jhzyirmk.html

namespace App\Http;
来源：http://www.aibaodan.cn/163tbgdtrck.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163zvbipeqi.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163wttctnqb.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lkmxpwwt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tiezclxb.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ujschzdo.html

?string $name = null
来源：http://www.xuanzx.com/163gkzsycio.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163psatrghh.html

int|string $id
来源：http://www.aibaodan.cn/163jwksoesn.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163whdjpkdi.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163bxdftisr.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163gufhpgeu.html

public readonly string $name
来源：http://www.xuanzx.com/163azvddoop.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ermnpopv.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163bphfquex.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163jjgkwtnc.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163jhvutqgr.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ixlnjpek.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163pbglshze.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163gljuzdqa.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ypontbde.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163wbxmuoir.html

$obj?->method()
来源：http://www.xuanzx.com/163pgsxifpu.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163xgjlpqsm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163vmopkbfl.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163vizewoqj.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pwwpzlpa.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163fknoonld.html

"值: {$a}"
来源：http://www.sxryk.cn/163ronxyjcm.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163fbvsnejj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163blwygngg.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163bypmzakp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163tjhgxwry.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163rgoijzxf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163rjwpnrkf.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ldiyviek.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ggpvufox.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163uqqqaxto.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163rhcluoes.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163uquxfasg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163llbdyolh.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163mlmnkwsm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163aveslhxi.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ofmcwjum.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163yuxypdah.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ilbmfufw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163sarhlihm.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163shzjkxch.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163qketxcgh.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ooehzugx.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163uokjcwdz.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163lqgngndk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163rwwpibkh.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163rpubvusv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ltifoxtm.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163jrfajcav.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163seghjjfg.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163rkwnetkv.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163nqducvlh.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163gdzabttn.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163hzfxmglf.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163wbbfnhit.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163zafqqafr.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ciaxsarw.html

composer require psr/container
来源：http://www.xuanzx.com/163sipcgltd.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163gecfegsl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163fbwxpuaw.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ikgobxca.html

composer require twig/twig
来源：http://www.aibaodan.cn/163jwbdbcwz.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163phscyzyz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163bciarlet.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163fzvaafoh.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163tcksworc.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163vcvmnobk.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163mmrnapnm.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163holgvxrv.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163skedirzd.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163hjggbfwi.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163orxhmtmu.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ourkyeng.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163tjiijbmh.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163xgqjdzgn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163bmsvldsb.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163dfviiqap.html

a?.b?.c
来源：http://www.xuanzx.com/163zxcwaysw.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ksunmwcu.html

a ?? b
来源：http://www.sxryk.cn/163vhfdosgz.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163zamwpldi.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163szrwztwv.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163qfpoclih.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163gjmbkoix.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163zexbphwb.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163atlwzhkg.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163wzqrusxs.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cfcmvcoc.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163httwapht.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163grjmjigy.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163rrcvixcm.html

structuredClone(obj)
来源：http://www.xuanzx.com/163rhzxovcj.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163yjayefgo.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163dpsyywkq.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163vbzemalk.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163tqqcqijp.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163fyptmkze.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163xkjjnwjm.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163skqkmbyo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ntktfhjp.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163yxhgfbev.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163inwclqdf.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163uisunjgy.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163eejiukyd.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163hmppdeqd.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163hefesxha.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163fartrfxo.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163zbsqsjaz.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163qeqihgiu.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ewjjteaj.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163brwkopsi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163oqvluwgd.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163uhicxqpd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163wcvneckm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163tjglwrcz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ddgwsqiz.html

[U105] JS：节流
来源：http://www.sxryk.cn/163xovwdgky.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163eknkhdtp.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163tpplawor.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163yeizcpnl.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163rtajbmaw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163htvewtjq.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163etzmqlig.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163blovnyng.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163abipgeps.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rrnmeqgn.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163jhyskgsw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163dmqvvbvt.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163fptolatm.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163fuyrnpcg.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163apwipjmq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163mumwrklq.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163gyzmrnbz.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wzseivor.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163kfapbkhl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ijyoiaxz.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163qagrggfy.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163eknbxasg.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163lstvguyk.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163hgzurocq.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jschskzg.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xpwhfukh.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163btnwihkw.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ewnvlhbu.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163zrkvtwjo.html

npx vite build
来源：http://www.xuanzx.com/163jermqjgh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ipjijmyr.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163obmrupxa.html

================================================================================
来源：http://www.aibaodan.cn/163gqmwcudc.html

统计汇总
来源：http://www.xuanzx.com/163ucpfzcpx.html

================================================================================
来源：http://www.sxryk.cn/163ldcosncx.html

按语言统计（条）：
来源：http://www.xuanzx.com/163oesxqwvn.html

Python ......... 252
来源：http://www.sxryk.cn/163rjhwpcic.html

PHP ............ 252
来源：http://www.xuanzx.com/163dqfqgjbt.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163nssuytle.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163kswyixyg.html

Java ........... 212
来源：http://www.sxryk.cn/163ppgaiohi.html

Go ............. 212
来源：http://www.sxryk.cn/163zjlstcfm.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jqmbkbje.html

C# ............. 212
来源：http://www.sxryk.cn/163ajpaihkf.html

C .............. 30
来源：http://www.xuanzx.com/163lnxpowlg.html

C++ ............ 30
来源：http://www.xuanzx.com/163hkpfpxsu.html

SQL ............ 90
来源：http://www.sxryk.cn/163tuwmfutp.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ewxxcdhm.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163tggpqvsf.html

Swift .......... 15
来源：http://www.xuanzx.com/163mkhcrhrm.html

Lua ............ 10
来源：http://www.aibaodan.cn/163sqynreek.html

Perl ........... 10
来源：http://www.aibaodan.cn/163atuiwrzb.html

Scala .......... 10
来源：http://www.xuanzx.com/163kqyhocgl.html

------------------------------------
来源：http://www.sxryk.cn/163ndadwvqq.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163zzkeilys.html

按章节统计：
来源：http://www.aibaodan.cn/163wmaxyzdq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wvtfhldw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xopknrvz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163njspmved.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lextudhm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163qdhhnqtv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fiyeellk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163dfdafrrl.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qxcejbgv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ikqnkyyn.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ashxzplj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163omwsvvwr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tcmqbwfu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ezlfzbdj.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163jugllshj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163geutpyhj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wfteeczq.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163lllqdqcy.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163dhjrjobn.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163zfolghoo.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163wptmkloq.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163mvvcdbjj.html

------------------------------------
来源：http://www.sxryk.cn/163makptmqf.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163dgbhmmpz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hdbpaxdx.html

使用提醒
来源：http://www.aibaodan.cn/163ecopjtfk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163eqfrdsof.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163nrtbzkfw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163yyuxovqn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163aqsxjymo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163nckouhmo.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163pghkpren.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163frilwwtg.html

================================================================================
来源：http://www.xuanzx.com/163uhkxwfxj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163ehbhgegn.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163qkhnkyso.html

================================================================================
来源：http://www.xuanzx.com/163fqciiesp.html

【收录内容】
来源：http://www.aibaodan.cn/163qcjpmfdy.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163jiuhafdk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163orhzsnei.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163fbgwxckk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163rapfuath.html

【使用说明】
来源：http://www.aibaodan.cn/163cbjpjvgr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163fowbnuhz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163mymqtloa.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163pfgwggmw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ewinclnr.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163xcvlrmbk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163xtzfusbx.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163sozjbhph.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163vtesyxfk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163afnlpfda.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163rgfnuvls.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ifeswkyb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163nnqpggrm.html

【文件统计】
来源：http://www.xuanzx.com/163zftnchpg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163eikkmmti.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163memlxdml.html

目  录
来源：http://www.sxryk.cn/163solluxdd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163szwgvter.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163jftckhsk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wldxvhzx.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163dggqevdp.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163rpfysker.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163qxbqnygj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163tqssjglk.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qrgolrak.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ljsovvrt.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163onagjkxl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163qxbddaxf.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163abvlvbbv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gvdssxdc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163orfbegmf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163dbbcnohl.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163okqriwxv.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mzbkivih.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jaaghufn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163istzujbj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163iemqqfot.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163khrkvcnw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163oiiukmel.html

================================================================================
来源：http://www.aibaodan.cn/163dxrhznjz.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163atwynmrx.html

================================================================================
来源：http://www.aibaodan.cn/163zorcgdtm.html

[A01] Hello World
来源：http://www.aibaodan.cn/163vddhekvy.html


<!-- 参考信息 -->