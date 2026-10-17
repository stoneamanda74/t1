外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163nhttifhl.html

[A03] 常量定义
来源：http://www.sxryk.cn/163lfhykybo.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163lqsohcle.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163srjkvlex.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163fjxmkudh.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163uzzwuamv.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ajekipvk.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163awjhudju.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163jhngexwr.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163cmuvvjah.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163nfvznjhv.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163bxryahko.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163vdtbkppu.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163tsuhaeci.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163kualutud.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163nfyiudpr.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163nkinvotz.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163abnqpfuk.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163stxvelhj.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163xinwgfph.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163iozctsir.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ubqehjcw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163xokthcka.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163dfvbgphn.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ttkobwib.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tmyzdrua.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xgarqfnv.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xplvfiqy.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163nvjbboho.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ydkeecgu.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163fkzoqbpa.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163dzawfcuf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163rdgvfbza.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ydbfystl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163qvxzikpy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163eicjznwq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163qxfznskj.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163ddhrviql.html

Py:   str(42)
来源：http://www.sxryk.cn/163jjtzfqxs.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163irdpamtg.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163xgmjewuo.html

TS:   String(42)
来源：http://www.aibaodan.cn/163saqryfqg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163xssyjzen.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163huywqcon.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163mjxzeidl.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163vgxyizil.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163ksxtfhlc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163bduruvhr.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163etuiomdk.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163dkhhfhqq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163cgycbncb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163czucucej.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163sjfjqbvk.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163favxiqeu.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163aluklllb.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163bqtdgjas.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163loeusbsb.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163kfszeybo.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163yxagujzj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ysklosrh.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ufbinrpw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ffrblatk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163tfrqzwah.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163jcchvkro.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163lepdgmga.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163kwnmqahy.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163sdhhabna.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163vbffunhy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163evvnvohk.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163nlmbancb.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163zvnybubc.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163winoiqas.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163ovoeihpt.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163zqoonxgl.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163xuyhegkg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vnffgumt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jnprwmrw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vcrqvvqa.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kabgqcow.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163oluohggq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qwmgrizk.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bicwpzvp.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163oekpwzsz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163yoecblom.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163tdguxmqv.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163wyvdwnhf.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163uadpasue.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ydabbqgg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163fzpqzexh.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163iwdytzlu.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163zrdsqxsf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163fsxudxdr.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ekdqzpco.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163iucoxvep.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zspdgsdu.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gvijubxl.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163alblencl.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nlddases.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163cvtmpoxi.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zoidwtvr.html

[A14] 注释写法
来源：http://www.sxryk.cn/163elvguxxb.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163vmujrubh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163knggqlrr.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vhpmcjeh.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xpitkqxx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163nxxolelv.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jajtycxw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163tuqnqomk.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jsyqxsmv.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163vatmqryo.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163pqkrletg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163peahtmmn.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ktvnztif.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lubgwkuw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163pwnnuukl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163bnbdgqgq.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163xbkwygbx.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163pmzckdam.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163jyxtvncl.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163rvonnovu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163unyjxmut.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163fyxnkpuc.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163xpwkmgzr.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163vfjlatgr.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163yupzjgqi.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163dsygzmfa.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163qpybcekt.html

[A17] 位运算
来源：http://www.aibaodan.cn/163mgcjvjol.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qwoeoexg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163ltlpleba.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dzmgzual.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163skrxqtpx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dwrkxxtp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rkycqzpa.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kkhljhne.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163aptbudlv.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163qjkbwqtf.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163zppnllaz.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163cvmtsrdq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163vjjzwlof.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163afesiwsp.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163zvxppnpi.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163dxlghehz.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163bftavpuo.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163boalxrlw.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163rbhuthut.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163adcnqoxu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163ldrjxcvd.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163bbeddfrp.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163fehewjlp.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163rgecmdcl.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163katmxhfl.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163hjfopurz.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163pubyzect.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163snwfdmjt.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163isgwxamw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163mkxvkiwf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163voihygyv.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163smqvlsnv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163dbaktyvs.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163hjykwrvl.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163uirvqbbz.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163rjwrhudj.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ifejepls.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163jjmavffa.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ucwzyhjr.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ldyvmkom.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163sjrgyzfy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163szqaryky.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uugzmavv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ihraphia.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163zxectted.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163zqbyaqik.html

Py:   len(s)
来源：http://www.aibaodan.cn/163kzocshtw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163xmzovjop.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163kbhxpfam.html

TS:   s.length
来源：http://www.xuanzx.com/163wyabhbhn.html

Java: s.length()
来源：http://www.xuanzx.com/163cvuuaolz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163clbqoquk.html

Ruby: s.length
来源：http://www.xuanzx.com/163musjphzq.html

C#:   s.Length
来源：http://www.xuanzx.com/163vnyruhos.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163xrbswcei.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163xnbfwbrf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163tghsfvpo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163okmvpeyq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163shffldpp.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163pdkpnouy.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163svynfxvh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163vnffbzci.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163aaegbuzs.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163oacvrgrs.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163asmxgtbd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163xydzmtuq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ahradzar.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163fafbdrpf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163rftuygzg.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163wkhmffbj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163eshqurte.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163uchtrhyc.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163wbkysyyu.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163izqxeuly.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163zaplkllv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163gyffhbig.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163girjqesm.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163leyezaiu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163pleadjag.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163lbvuybkt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163iaheazcw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163bnaxuraa.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163mxslnomd.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163bxgztwtv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163yecqdhkl.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163kzhsmwoe.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163glqfszbj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163hglohbez.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163dvkjcnyc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163hwlradrp.html

================================================================================
来源：http://www.xuanzx.com/163ywbdedwy.html

B. 流程控制
来源：http://www.aibaodan.cn/163xazhnshd.html

================================================================================
来源：http://www.sxryk.cn/163igvtrdxu.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163owzbgeww.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ggsfxwld.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163fkgbgmht.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ckmettvq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163oddssidb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163aywhkhru.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163siixtiyg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ukivpowo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bsddvugv.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163mfuikoui.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163fkyfdgom.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163nqyniytc.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gplyekms.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nblulslw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wgibgvqe.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163xkkayjqo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163nfmdvowa.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vfltcjfv.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163yhlpgduz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ffjtkjal.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163kndpytxb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163davvvwkx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qhefmcam.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163izbswkjj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163tofobxpa.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fpeuifkz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163lzeqjwxo.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163oueukhzr.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163scjgacgf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mlgmwvfa.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bjbowyix.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jzbxjcaj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163clfuzmdf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163mlxupesc.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163efkzfhyt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163vsztljxz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ipviwplf.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163fyaraibk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163pmtivflq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163itlnezqy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163bbyhopwv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ujdbvhzw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163abcqpsve.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163eqjibdut.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163zeflhwqq.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163zamqxhuf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wfoljbmq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163zrhxmrrt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163riifduvc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163sqvteqpe.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163gfjzdasq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ezqfuspb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163reoeimry.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163miybelnr.html

[B07] while 循环
来源：http://www.xuanzx.com/163afjqzmed.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163zanikdhp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mxsiuove.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ubroozly.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163imxltyhx.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zbcwwegz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163fpczbgbf.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163rgtlwoup.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ebkmglhw.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163gyetbizj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wfdwkptl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163pvkmeoat.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qkdglyqn.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163riodssfp.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163joffodxm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163cchurkdp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163mlllcnvy.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ghtsqbya.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163euhgvgoy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163gajgdmqk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ekmqtdzl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yhzzzjbt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ljabkqrd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163acmlqdin.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163qmmcrnnd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163dwhxrosk.html


<!-- 参考信息 -->