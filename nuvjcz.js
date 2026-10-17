外链999!wailian999！

[U33] Py：打包发布
来源：http://www.xuanzx.com/163tbycyqfm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163xghupnuk.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163tjickzvr.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163obxwmftm.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163qlixkmcn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163sjjwjwlw.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163gzjlkean.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163niznuvmx.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163fdwzjsxl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163fmdvqbbz.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163gtgmxtyt.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163qebzfezz.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163vgzkztit.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163nparazwd.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163pdxwvrov.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163nmwpeqnk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163piilxrcw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163yelgvjne.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ejtwbujj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163gpjoxjik.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163wdjwpspt.html

namespace App\Http;
来源：http://www.sxryk.cn/163ygnnwadw.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163fvmsmjym.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163xkfuukcx.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163utgtofde.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cuppbzbm.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163facseneu.html

?string $name = null
来源：http://www.aibaodan.cn/163tspekwwj.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163yqqvlqro.html

int|string $id
来源：http://www.aibaodan.cn/163oxkipgvr.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ooigtffv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163kzhxaasx.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163xwldtmcm.html

public readonly string $name
来源：http://www.sxryk.cn/163qjpckfbk.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163eglkvqit.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163iezyiixv.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163brdddcfj.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163nhnpkvdo.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163zttunoxx.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163uycfyfup.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ebapjyxn.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163frmmcqzw.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163tdnizsni.html

$obj?->method()
来源：http://www.xuanzx.com/163zqgifttf.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163hedkaizp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163gyuzldek.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163tsfmmyop.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mbtqycmj.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ormskctl.html

"值: {$a}"
来源：http://www.aibaodan.cn/163chuewafo.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163iszfwiqm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163ynqduvhz.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163hgdokeaj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163nvzmahny.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xzqeuahz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163rjurhshh.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163izsyufqh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163csatkzuj.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163fbsimqqx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163rljrcovx.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ngzbnonh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163iedwicff.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163xqgpgpdy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163fawonmht.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163kwhaaudi.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163wakkpvxa.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163vprsgoih.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163nqiljjad.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163vhsiumnh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163rcshiswm.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163acrfjlqr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163vtxxyafd.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163gviuoqnq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163lodahcsh.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163jdmmofny.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163cwnlehqz.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163pfhnxaau.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163zxiktwum.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163csdxdgqk.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163fjtdosnc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ddhuqehj.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163zlspckii.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163jvsgxjwo.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163hgqjcsgv.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163leozdsoc.html

composer require psr/container
来源：http://www.xuanzx.com/163xcybpcyr.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163okirofzp.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163bsttmhbr.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ymsqdsty.html

composer require twig/twig
来源：http://www.aibaodan.cn/163mcmcaszk.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163xvylcvqv.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163lucsunft.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163jgmvazsb.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163fatrtqhn.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163dkqyziaa.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163woyusttr.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163zakzxqxu.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163dgnmskeh.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ueyfxfnb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163wrvtrvek.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163bwygxydl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163tjfbfeki.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163ylkchbvn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163lxcyrmtn.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163vibtnffl.html

a?.b?.c
来源：http://www.aibaodan.cn/163inpqwmgf.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163qyunvsdp.html

a ?? b
来源：http://www.aibaodan.cn/163cpyxrpaz.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ojdfrqdz.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163dqwmjket.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163nzqzeaem.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163jjfdjnrh.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163kflkvbsq.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163zpcypipf.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163nlfdviiv.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163avdignxy.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163svsfvbef.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163nyvfebtc.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163emoaksjx.html

structuredClone(obj)
来源：http://www.xuanzx.com/163nslyssrw.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163xvwcnoxh.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163dqbkhqdz.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163nydrwlgy.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163eqwmnjur.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163vufotbsa.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163qxzyzvcy.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163vzzguvdm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163xvykhjzo.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163sxnusxll.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tlzpiwsh.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163hamcywtd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163sguqvito.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163tsbpwone.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163viydubbm.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163myjudbdx.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163dnkpgvpy.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163dwwesdxl.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lrwrpsmh.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163aobsvvaw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163edxcwssg.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163vtzinvhd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163nfrlfvji.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163groimebc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pwkgmhbe.html

[U105] JS：节流
来源：http://www.xuanzx.com/163igffwnmb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163vqifzwyk.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163gsxweoho.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163lojslbnw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163bczfqnoq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qsbkmykf.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163sifbauny.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163bhgeplkh.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163fvfefris.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bddfkbhs.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163hnnlunma.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163fzgrdyjz.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163aeevrkib.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163pyabqqyu.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163uttgcnok.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163hsiirdji.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163jxjfvtwx.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zaloylkq.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163wopgrezr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jkvcokov.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163jpexcexv.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163lpgpbsnb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163hlhbnlzh.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163egejaewk.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163cubhcwgw.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163azywybtg.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163pvlzjxer.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163vdgmyhsm.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qkxttxiv.html

npx vite build
来源：http://www.aibaodan.cn/163abzhcuxn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163chccitau.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163fozafkhg.html

================================================================================
来源：http://www.aibaodan.cn/163vvpihayr.html

统计汇总
来源：http://www.xuanzx.com/163kczxueim.html

================================================================================
来源：http://www.xuanzx.com/163vnfwqjvc.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ozjeuwog.html

Python ......... 252
来源：http://www.aibaodan.cn/163zyibyies.html

PHP ............ 252
来源：http://www.xuanzx.com/163opkogiqc.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163xvdtatmu.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163ehrtwdgm.html

Java ........... 212
来源：http://www.aibaodan.cn/163gfexsidb.html

Go ............. 212
来源：http://www.sxryk.cn/163xmpgyjcv.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163hbysbypi.html

C# ............. 212
来源：http://www.xuanzx.com/163zrocgtcy.html

C .............. 30
来源：http://www.sxryk.cn/163lucmpxtd.html

C++ ............ 30
来源：http://www.aibaodan.cn/163klapkdwn.html

SQL ............ 90
来源：http://www.aibaodan.cn/163yqabqjob.html

Bash ........... 80
来源：http://www.xuanzx.com/163cifqxyxk.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ckwjdgyv.html

Swift .......... 15
来源：http://www.xuanzx.com/163bobwcgqc.html

Lua ............ 10
来源：http://www.sxryk.cn/163dpnzwljc.html

Perl ........... 10
来源：http://www.aibaodan.cn/163twzvmnsa.html

Scala .......... 10
来源：http://www.aibaodan.cn/163vggneywp.html

------------------------------------
来源：http://www.aibaodan.cn/163vvxwxhlc.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163rkrjkuwa.html

按章节统计：
来源：http://www.sxryk.cn/163tbcqqjma.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wqjjghud.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bthrdemc.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ktvxtrhl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163tgiyroxz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163rydnvgqx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163uckzjgdd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sesyrskc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163wjfpvnon.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ownyxupg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lnxnrrqr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163byrnkxkj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wjiirmvr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163sihnvtho.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163biacoavc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163qdnjrexi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cgmmplwn.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163rskbcxyu.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163jngdilsk.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ipyeextl.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163mhozvovj.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163oismqest.html

------------------------------------
来源：http://www.xuanzx.com/163wpsdojso.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163nmnxlvgo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tlfgwhhs.html

使用提醒
来源：http://www.sxryk.cn/163qxbauapr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qhvcqmsf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163mzxkrwpy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163dzrxnqjk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ankzojoc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163qlrxvwfj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163zjofnuoq.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163clyynsiw.html

================================================================================
来源：http://www.xuanzx.com/163hvwmibvv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163lqtocnlg.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163tkkyicjf.html

================================================================================
来源：http://www.xuanzx.com/163virbmnoh.html

【收录内容】
来源：http://www.aibaodan.cn/163nnufvpez.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163rbmbioxp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163byzcimgg.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163nhdciivi.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163mgzstjnn.html

【使用说明】
来源：http://www.aibaodan.cn/163nndjeaco.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ywxzysgx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163ayfsbbtx.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163qnmolpxs.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163kjluuxeh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163zcgfeivm.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163xttqcezp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163nuvtfzea.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163kzndrbdv.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163dtggjioa.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163gowunwku.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163kgsjjsqj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163fagkfxpb.html

【文件统计】
来源：http://www.sxryk.cn/163ijwlfnza.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163cuhlosal.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wbajajdf.html

目  录
来源：http://www.aibaodan.cn/163nvntgpmg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mdzphfjb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163lyjgqezl.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163beknists.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wjhctdwl.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163kaktltnb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163aguckrsj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163iybfcffu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vlgqqgxg.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163uumwvyea.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xjrclfch.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163hgmrullq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163htmzrmka.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163aygyzptq.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cyvgpjck.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163yczsaxyg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163azgnerfr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ncbzzmcm.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163mtfgsfvp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163hzdtmoza.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163jiayrmgo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163fjublexf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vnezmbic.html

================================================================================
来源：http://www.xuanzx.com/163qiiddjhz.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163jcphidmf.html

================================================================================
来源：http://www.aibaodan.cn/163egtdbdwh.html

[A01] Hello World
来源：http://www.aibaodan.cn/163fatridmd.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163tzzkapic.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163nyhktdtp.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163qptfvpma.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163drllmoyv.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163gttzonqp.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163uycmkxvd.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163wazyyequ.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163occqvmvy.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163crjryrij.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163zxepyrbq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163wbathaho.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163jpadtrjj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163rzsiwmgr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wwacbcpw.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163avtclvip.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163wnxcyhfl.html


<!-- 参考信息 -->