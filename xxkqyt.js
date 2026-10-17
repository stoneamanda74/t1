外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163hcmwjaoa.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163lmggnfhj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163lvhtewkv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163lcpwvcqn.html

================================================================================
来源：http://www.xuanzx.com/163gpmksqll.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163rebwamcl.html

================================================================================
来源：http://www.aibaodan.cn/163nykjlvwv.html

[A01] Hello World
来源：http://www.xuanzx.com/163wlmasgkr.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163mjjlpzup.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163wewculpq.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163sqcgoqpg.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163ygckydri.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163exunbjsq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163jknryzdv.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163ntjfhehg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163wbunkobx.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163afjarnri.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163nkeazixv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163vmzqkiou.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163wvkhwjln.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163unousdck.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163tvftfhge.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163yvtrowfs.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163aqmsxhgp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163velwvmkq.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163kufpflsh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163vvmiahay.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163urpntqxn.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163vsgumqtj.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163dslsxspu.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163nuujfcke.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163qpbavzgo.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163pbirzsun.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163inisvazu.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163bsekivef.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163envdquym.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163tantubuf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163axbennfz.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163himeiahc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163byhavbmq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163sidemtdi.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163djevvshi.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jfdlcxnz.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163dfmtfycy.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163tpyuscju.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163pqfeqfnb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163qakkyddo.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vtbvfzbc.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jjpbxquy.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kxjwhuxu.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hupikrwv.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mbjlvdna.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163negzokqe.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163squucire.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163qejcftpe.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163sfrmhbhi.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ztxjfkbj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163byheaplf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163avzosyfb.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163kswynhhv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163rbbnvapc.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163qhxktifl.html

Py:   str(42)
来源：http://www.xuanzx.com/163wtgsdzqm.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163vbwbhfdf.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163efhgaygi.html

TS:   String(42)
来源：http://www.xuanzx.com/163ytahmqkl.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ojpoedcb.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163tvwhdprn.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163syyddoxf.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163ynbwrfkz.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163ajhnnebw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163bswehmjk.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163gqzbmzha.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163ucwvapoh.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163gkzliyei.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163uvycfyjo.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163hvxinjjn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163nlwwthwd.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ljpgjstq.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163yottgztg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163zotkhqfu.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163hccdrsoc.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163andheehi.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163lqjqowfj.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163pysfxcbz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163cddijspv.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163gaxnwfoa.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163gfjbwkfx.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163ofkycuqh.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163rlsbbeop.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163slxbrrnk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163oommmyjl.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163opayrahm.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163qfbblfrp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163pttrkbvi.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163cxahkdej.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163paysogdo.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163rwotdatk.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163cphfpjbk.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uxnxbkqb.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hvnizqed.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qaghmyov.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ghtbzysq.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163zzgzholq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rlirnweb.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163okwhlwfv.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163akuzlgol.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163rahjrqgw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163zszwoian.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163akarilaa.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163mlovwnqx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163zvnlrxhj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163mmjxewnl.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163tlfuwflg.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163evepdggc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163mjdmrzwi.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vbjiqaal.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163ibmfgwkm.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zctjwfih.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nohcwmyx.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163hajnccah.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tynungym.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163hfzdunqr.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pkfryoqq.html

[A14] 注释写法
来源：http://www.xuanzx.com/163nzzcnjlc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163dxinhyad.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ypldufyn.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163mzwkdweu.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lgqamfda.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ymckmhfm.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qmrcpvyx.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163qwiaartz.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gtkcplto.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163ybtdiwyc.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163iejhwugz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163rwkefdzs.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163xmgrbiwa.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cwnxnnuv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163tscqamvf.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163wcylevch.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163qvsdgcbb.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163agbcbkcd.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163plpaltnc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163homqdkob.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163rzvhblxs.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163tafxislk.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163sebbqqto.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163kslfhflz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ohpwriwq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163eeeujmni.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163swafbczg.html

[A17] 位运算
来源：http://www.xuanzx.com/163dnorqsku.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qxtbcvjy.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163fmtquatg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fudkchws.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163iexzzpkx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wsieugck.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rkdatdju.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qirvvfef.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iaymicjm.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163niqexucz.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163khnvxbog.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163stxokskc.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ivuedvjv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163nnpdapar.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163vlqhsbwf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163swkuovzi.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163dcnkyfxl.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163aiwzvcvl.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163qftuzmpq.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163ujqppece.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ptofftgr.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kfybvkzk.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kzemqlec.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163mhxsmrso.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163aqealofy.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163nkgwdicm.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ocfulhus.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163zvmjksle.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163acsttzuy.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163egurdgzh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163gzyjskno.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163rzwbmpgu.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163phgudhqt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163wpurkvok.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163cvqwuiim.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163bmkzvjlw.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163muufoqmr.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163gykrwtpa.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163esbhgqsa.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rlvpswkb.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163atgwgygi.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163byrqahpt.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vfedysbv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ucuxqcik.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163uzgjmlpy.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163hxperbvg.html

Py:   len(s)
来源：http://www.aibaodan.cn/163nylkoboy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163pejvywzc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163aveetqdv.html

TS:   s.length
来源：http://www.xuanzx.com/163qzwuextu.html

Java: s.length()
来源：http://www.aibaodan.cn/163ljusqevm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163xantsank.html

Ruby: s.length
来源：http://www.aibaodan.cn/163cftxxtio.html

C#:   s.Length
来源：http://www.sxryk.cn/163cdzwuwhm.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163yefcacpq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163kytgiiwl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163afhqxbve.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bfghfgnd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jmjwcokq.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vendpclv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163gircfqoe.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163keaqpvvq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163mgrrzywq.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163apiffeem.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163nbxjxuup.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163jmbtaiuf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wjqoshqr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hhzqrnof.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163obvpurvt.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ymdvmxda.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163rgkuqxet.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163avoypuls.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jqhbmthu.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ignqshli.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163fwnlrzpf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163cdfmlufu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163siifbgih.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163dhtucrjt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163zegduzep.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163asmhobku.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163czbshpmy.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163jlfpwaic.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163xxpegwfg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163agpkvxnj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163fofyameh.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163kosxplob.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163vjwzpiel.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163vhlqesal.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ojtudgwj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163puquqlly.html

================================================================================
来源：http://www.xuanzx.com/163xschxaua.html

B. 流程控制
来源：http://www.sxryk.cn/163yxkvpmmb.html

================================================================================
来源：http://www.xuanzx.com/163okwzhmfa.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163tksbouus.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163yslemkxf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163gcrwghjj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163asmtaaga.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dntpqlnk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163glgrmkql.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163zcpyiacv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163qvphpbke.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nynduxhq.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163veckwcfw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163riljburq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163pheeizat.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yneanqvo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zjihlfik.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uulwqtlp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163mqrhiyev.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163qegvoymy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163laaxrcwk.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163dylkdbhw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163jhmqqnrd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163pkfmoxjj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wuxnhmps.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163dbxxpzvr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163gidwvqka.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163dmpyyzhl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163svssjgio.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163npkazucj.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163eqghwgoj.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163izzszobj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163doctonof.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xiajvlcw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vnyramcq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163xcwyklui.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163mwxwskoi.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163rwjqlrqc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ydwrynqb.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163mgmeemvo.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163isfzhpqg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163lhvjcclc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163vfrmfchy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wtwezvha.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163aeiifnta.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qkzvpron.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163nifdkrsx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163chcrvoai.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163omcaqelr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163iaumsnhg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163sdfbkson.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bqcmznst.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fklfmshz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163atubjmzz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ebktwmty.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163dfbbukoq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163hfrfommh.html

[B07] while 循环
来源：http://www.sxryk.cn/163xzrxkxoc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163hladefpi.html


<!-- 参考信息 -->