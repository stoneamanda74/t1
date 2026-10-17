外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163jchegwoj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163bgauyvkf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163otsaojnp.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ubuejitx.html

================================================================================
来源：http://www.xuanzx.com/163xgdacbdw.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163efqyrncd.html

================================================================================
来源：http://www.xuanzx.com/163xookpadx.html

[A01] Hello World
来源：http://www.xuanzx.com/163bjxixviw.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163ogpuwxyr.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163kbgcoxjf.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163saokfizy.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163agfysigl.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163xvqcjjsd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163jjjycuks.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163rkmubegz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163vfjqrafr.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163qezqmrei.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163xknttamq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163twwddxyg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ffrzsvfw.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163mqsstcac.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163kmbowoxs.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163avxhlgsq.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ohjwhomh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163eytbrbbr.html

[A03] 常量定义
来源：http://www.xuanzx.com/163mmnahaxb.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163spwljagf.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163yblnorfm.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163dnljsmcw.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163mugqrjhm.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163pulmeewv.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163nfdrhrgt.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163eerapjog.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163jsxzaecv.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163mtqzbnxu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163kusalwst.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163uxpmqklr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163psxigvcx.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163crlhyfoc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163rywtbqqy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163pvkifmdv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163ouuzmfbn.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ubucbzhg.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163myplfkyy.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163wrzoxlne.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163vzneqoqv.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vlvdfefm.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ruzpywaw.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fctfrcon.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ewpnsbbh.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163oaesillb.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vivwynqt.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163jjeixuqw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163zjrlyrnb.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163zmtyiqry.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163esuoeaks.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163pvgqrxmg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163knihzrwp.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163tcdzsplh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163auvjcarb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163edmkvpvk.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163lvshzhrm.html

Py:   str(42)
来源：http://www.aibaodan.cn/163znglwewi.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163mccorpcd.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163aqmsqsdf.html

TS:   String(42)
来源：http://www.sxryk.cn/163whncirxw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163yzupzmvk.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163tsujamzj.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163hbuwtnnu.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163totssxjp.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163laduretn.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163idsvqlcg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163akdskevx.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163klutceii.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163wnewwqcj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163xjidcgpd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163yrbclvkz.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163vvpjsluo.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163yubdlchm.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fjzugxbl.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163sjytryyr.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163esemusaa.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163wpcpzfny.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163lhoxxaba.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163xdiecbiz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163jydadwrb.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163aakodwpu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163rmyvzmvg.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163zsaoxvzu.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163pgdastsy.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163hqduyejy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163bgrxachv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163aihikspx.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163vxnbqxjh.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163doxzctca.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163gpivlejw.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163jtbgovwa.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163drhoaqox.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163nhirhqgl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163flicnybe.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hbnqkhmf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bjbqrozo.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163egmmsofj.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163nrhyskqr.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ogwcvcqg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163phbtdbtr.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163rymybrlb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163gpuxaash.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163cunkffcg.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rjncppni.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163trussvfk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163pwnbluoo.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163dtryswge.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163womstlrm.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163gpgcwsxg.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163cgffotuq.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ghlzfyxa.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163dyauhetl.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163uqaqqucm.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kyimgjag.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163xrqyzokl.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ubylkwdw.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163swlzmmsy.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vbrlwjlv.html

[A14] 注释写法
来源：http://www.xuanzx.com/163wjqbagar.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163gijxftpj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ziqcwqkz.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qvqlvkcl.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lywwatpi.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163kaxldtgo.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163boktqmvb.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163kyuxyhnq.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vniwlyvf.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163azzpuqse.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163efqhicyq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163qszoydnh.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uqzhhhks.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163txrxejhi.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163lgvlcvis.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163epphszkm.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163oryadrin.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fpjjkxtp.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163bkqzdihx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163trcpgiir.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163owescnnj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163evgehaki.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163yicegakn.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ddjlsrrh.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163uvbbkfgk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163tqzvngls.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163hsgxqirl.html

[A17] 位运算
来源：http://www.sxryk.cn/163uupfxmgg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163elhumvkt.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163qdsjektv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ioaxtofl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163wjwbavwd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fgwokxbd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jcydrrrm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dtmfikkm.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gzukdbmg.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163wvwmbkfm.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163axtemggy.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ygjepmko.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163neeumblb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ngyakaxv.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163pdoavuom.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163bbshcsbx.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163fiqcxunx.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163kykmmyda.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163cygbsvoc.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163cfczbvrh.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163zamolvxc.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163whalgyeb.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163tkfkmldd.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163mrflzzot.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163gruvmzek.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163mvekbxoc.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163hyhxhzgd.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163bdcqidvk.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163cgfzxjfd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ltauaszn.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163drkxtyqn.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163fogvcghe.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163iagpfqjw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163qqrvjyvf.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163slwpocjs.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163fbauffpt.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163vjoyutiu.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ditaknrj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jdhqbigv.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163juoojlyz.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163oumbxsvq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cjfcqlam.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hcctvblv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pwfnyfox.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163qpzgbksc.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163sosoqydv.html

Py:   len(s)
来源：http://www.aibaodan.cn/163fixggmcu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163rxfhjltq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163eoqmesbr.html

TS:   s.length
来源：http://www.aibaodan.cn/163mhultjit.html

Java: s.length()
来源：http://www.xuanzx.com/163iucvfkng.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163yyityeqx.html

Ruby: s.length
来源：http://www.sxryk.cn/163pameklpe.html

C#:   s.Length
来源：http://www.aibaodan.cn/163bpvyovpb.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ydoguanv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163izbqjrep.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163gyoadukb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163myedxpgl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rcncztmz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163oifdhdjv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ezrkpppd.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163tswkahmg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163rwlwszbg.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163zvaqcwmz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163gwxwomdf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163hjmzsipd.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163vysuomre.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gvdofciy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163mwzgsspd.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163mhqgyawq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163yerywlqe.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163dkhdvuzs.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163wsaqlrxf.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163jztppjzd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163bdtxhfmq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163iwhnvymx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163doxzgime.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163dxthswwg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163rohnunvu.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163pcrdpdpx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163gvpmcqpm.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163uzecflqg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163uwqawiww.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163wrohlmmb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163uqfefeuj.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163mprhratv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163zvuoiehw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163oboqders.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163lwalsdqa.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163msuirrtw.html

================================================================================
来源：http://www.sxryk.cn/163iipzvsxc.html

B. 流程控制
来源：http://www.aibaodan.cn/163nhtrbsfj.html

================================================================================
来源：http://www.sxryk.cn/163inoegrxz.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163otetgumw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163sddmuqyz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163xzciniqk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163joreyxpy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ucfxihpu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163axljitri.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163qmazrkmr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163jzorwzyc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kcovnsrz.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163bxwojnkg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163cdawsvhy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163makvzwcd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pxtwutdi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163edfpgwxi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bwbekwuq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ejlychft.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163idcxmzyr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lwfhuujl.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ryrnvrpf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vqkmxotj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163nmjzpeun.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ifyxqlqj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163kzbphhjp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163bscxjlbd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ywmexkhn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163lfzleipq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163nqiqkitf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163jzxfknra.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163kcqzkdet.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163obwentme.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hhhnjtuk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tciezzlw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ekopsqdm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163xnwavriu.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163svsknlbd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163xoykvenb.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163brsfgncp.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163wguxjpig.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kaafdvrh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163twcadlnz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tzzwmvjg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163zsaoihuo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163susdzxqo.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163twbpnnki.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163uehovnmv.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wjufxvvk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163bkldviys.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163kkizihdz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fbwfvrfp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vpnyxtvx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163wkkasoil.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163habycgqf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qenbjnxh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163yvsdhuig.html

[B07] while 循环
来源：http://www.aibaodan.cn/163uuxzlovn.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163zjvrankl.html


<!-- 参考信息 -->