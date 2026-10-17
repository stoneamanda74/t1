外链999!wailian999！

[U33] Py：打包发布
来源：http://www.xuanzx.com/163owjivgam.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163utmpatxj.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163cltwgfwq.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163gtrdvddj.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163gcthvikz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nyzqglkt.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163jujttydd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163vxnlqyax.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163alpecyiw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163nonafyxa.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163levhbbtw.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163tygaeoac.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163dbtahfys.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163afwszojg.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163fjpthlql.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163peurgckx.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163dykhxxhr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lytskbig.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ukckpmzq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163yekgbzqt.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163tumqnqks.html

namespace App\Http;
来源：http://www.sxryk.cn/163rpnhozev.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163iuaxtdci.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163ajvqwtid.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163zonykthk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kazyfwuq.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163byjtcvdf.html

?string $name = null
来源：http://www.xuanzx.com/163hqaemoik.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163jecfajen.html

int|string $id
来源：http://www.xuanzx.com/163blxmvdzs.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163pfxrvagj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163cnugjtzp.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ooqdbejf.html

public readonly string $name
来源：http://www.xuanzx.com/163nweniywt.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163nwxcgprm.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ffhcbtze.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163gpzbuzhx.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163qvslaldg.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163xmcyiwdv.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163rpcblmkr.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163svfsevum.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163vvckbrcr.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163dbtzfwaj.html

$obj?->method()
来源：http://www.aibaodan.cn/163nhmlxaya.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163xqpguqbf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163gvtkffkl.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163gzhyvyqw.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qcwfvjmq.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163crtkczkl.html

"值: {$a}"
来源：http://www.sxryk.cn/163cnstwduh.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163coxwbrur.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163faylyjov.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ukwkowfd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163waumupkp.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163cpcktvih.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163wpdcrqfb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163mkxssezj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163isihqnmj.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163bxflsicl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163duevmmsf.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ebcpzdgk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163uxigghvd.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163oxcikzss.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163jqznadam.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163dpwpdigo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163wzwfsrxe.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163cotywalw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ypunwyir.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163gyrlfjhq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163osvreqku.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163exezkepb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163uxxbzbfg.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163rpjlnwoc.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163mpsetfmk.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163acfruktv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163akwmysxl.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163akuykvyg.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163nizouqat.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163aoclrxwr.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163kuceoxud.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ygmsiwcz.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ylhbamlf.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163omxhsxvw.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ggnksdhy.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163aitnfjbr.html

composer require psr/container
来源：http://www.xuanzx.com/163saoauffc.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163pisahtlk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163pbpvmacs.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163uqmltkiy.html

composer require twig/twig
来源：http://www.aibaodan.cn/163pezavykn.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ubuzygdn.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163rgvheajq.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163krjqvzhq.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163pgzgyujg.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163gjcwlqvs.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163xlgttove.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163pjffpjqm.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163inhrnduc.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163tahacbtt.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163aqfefoyt.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163hqgdgkkr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ejciwbvi.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163kvqgzgnr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163sclynqwl.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163mogxnqvd.html

a?.b?.c
来源：http://www.xuanzx.com/163ilcjgpre.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163teqacaes.html

a ?? b
来源：http://www.sxryk.cn/163hezgfkmu.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163dvqiwakb.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ppduchrm.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163xijtwure.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163gxeczfiu.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163kwtmtlqh.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163nndonggb.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163nysmasvm.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pxiirkyb.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163sgtudmxe.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163bpeqtacb.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163odgealdn.html

structuredClone(obj)
来源：http://www.sxryk.cn/163kwjreqse.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163qnkqktzi.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163cybkhbjd.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163lnqxppfm.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163irkkhocy.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163jsacdjzl.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163kcrtdjgk.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163oukmtkxu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tgdpodbk.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163qsjxcgxa.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dfhladqj.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163tasxflim.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163hqzbooow.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163uxukedgy.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163kaugbupk.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163xgxryfbv.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163oankxiau.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163kgjzlgsg.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163yubhodzr.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163zbkzwgwi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163jyugwmrh.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163wnjbzefm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163hyceigoj.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163rrwprnys.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163aevwbipi.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163adgvcspb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163uapzqhcg.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163gxqvgenz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163pjoawttu.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ekfiudnt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163otchalst.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163rzoomzxa.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163eunrlpqp.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163intridas.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tyaxksvn.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163odncwvrl.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163vlycunce.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163tiypcbba.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163llspgbfj.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163mhkhbttm.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lhbxldea.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163wcrwyved.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163inspbkoe.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163csugmhwp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rqzmsvem.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163odzvtmcq.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163labfeanf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163cvclwmdn.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163wnejsowl.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163cwpgontd.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163actjczel.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163blbxgirn.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163yifgxfwv.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zyrayiup.html

npx vite build
来源：http://www.sxryk.cn/163jnntcyhz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163bvrznxbx.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163cweluzzk.html

================================================================================
来源：http://www.aibaodan.cn/163rizohoxg.html

统计汇总
来源：http://www.xuanzx.com/163qeemakex.html

================================================================================
来源：http://www.sxryk.cn/163frefoybj.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nctzxqlv.html

Python ......... 252
来源：http://www.sxryk.cn/163nuqizzyg.html

PHP ............ 252
来源：http://www.aibaodan.cn/163rywslhqj.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163uvhjrvhn.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163pczsyzpi.html

Java ........... 212
来源：http://www.xuanzx.com/163izbplcbq.html

Go ............. 212
来源：http://www.aibaodan.cn/163ewvfnwsh.html

Ruby ........... 212
来源：http://www.xuanzx.com/163msotpwmi.html

C# ............. 212
来源：http://www.aibaodan.cn/163pabqphqj.html

C .............. 30
来源：http://www.xuanzx.com/163dfosrsez.html

C++ ............ 30
来源：http://www.xuanzx.com/163intvaujd.html

SQL ............ 90
来源：http://www.sxryk.cn/163xbokwuqt.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ybaapzaq.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ojgmkdua.html

Swift .......... 15
来源：http://www.sxryk.cn/163hymmxwzp.html

Lua ............ 10
来源：http://www.xuanzx.com/163jptdrjja.html

Perl ........... 10
来源：http://www.aibaodan.cn/163yzgnfznb.html

Scala .......... 10
来源：http://www.xuanzx.com/163hgwnhdou.html

------------------------------------
来源：http://www.aibaodan.cn/163ahzutjgq.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163clfvjaju.html

按章节统计：
来源：http://www.sxryk.cn/163stkdnjum.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163rlchgiou.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qhfzsjcg.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mzhsfbhe.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dbnfrsnd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163qizpnhfy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ehbwkjlv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lcyujwyc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163tgzyfqfh.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vqpxybmu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ighoczvn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vfwfgqaf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jkpntjod.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163feichztz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163qjlsnsjd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163noqeyaeh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163upbljaip.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163rocyowel.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163qzsjlzdr.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163tvfharws.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163vcirfjyk.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ybjjufez.html

------------------------------------
来源：http://www.aibaodan.cn/163ejpskvtw.html

合计                                  2106 条
来源：http://www.xuanzx.com/163wairjtwk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163sycmuqak.html

使用提醒
来源：http://www.sxryk.cn/163ursyvrad.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bxkdfegv.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163rqmgcgpg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163cjqllrib.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163spiplukw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163hgzrlear.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163tnrmyzla.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163bjekydhh.html

================================================================================
来源：http://www.aibaodan.cn/163oxxpubry.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163yxybpazi.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163cbhzneew.html

================================================================================
来源：http://www.aibaodan.cn/163xgissicz.html

【收录内容】
来源：http://www.sxryk.cn/163mnosnkey.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163gklusqhz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ibpjkzwj.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163sgvskvky.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163wkfcwcvq.html

【使用说明】
来源：http://www.sxryk.cn/163tegpyonn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ryvhixzl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163jztgeiut.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163fpkqpbpz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ztenlejz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163tccajhyp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163rbwuitre.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163dvcrcgld.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ahfdyleu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163havhngal.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163ucovfgfr.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163iidmpzmk.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163gteajatp.html

【文件统计】
来源：http://www.xuanzx.com/163izarstuj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163pybqiroa.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ysrgrvut.html

目  录
来源：http://www.xuanzx.com/163mqoonvor.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163oagmknwm.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163tqvrdnip.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163dysazsrt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163sucycmzk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163dnyrifoi.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ozgovdib.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163emhefhbh.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mqikuieo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163nxguvxfp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xthoxcuw.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163mffrtrov.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wjwgwxli.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mrhllspo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ncqqhnrt.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163mpwdjdvt.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163dhjmmyre.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zqoeixbd.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163axhnudsh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163jwnqiahz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163iugoasjv.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kedjwzrt.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ahqeimkm.html

================================================================================
来源：http://www.xuanzx.com/163tfmlgrxx.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163xrzmogmo.html

================================================================================
来源：http://www.xuanzx.com/163vsuhuudh.html

[A01] Hello World
来源：http://www.sxryk.cn/163ojcylgsj.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163rzmgjfsd.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163hmhgvgvw.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163xinzaphy.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163czwyulev.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163kcleqtfk.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163maqhzsmc.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163hvcsvwva.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163rigytutp.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163zhhveiqu.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163kewazcmb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163ndaoxqyq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163dihymeuc.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163bvyvtiei.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163qkiaittf.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163hnudpdvh.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163syaswgyv.html


<!-- 参考信息 -->