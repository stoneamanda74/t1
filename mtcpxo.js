外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163cxjnpqyc.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ozeqzlle.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163xtklymgc.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163ennydsbf.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163hhmlavap.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163zhgliegn.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ubxtzpvr.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ncdlrsmj.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163rwdxbpdg.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yiihpriu.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163iwoeoxdl.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163oxtxjfgd.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163mlalqnhg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163fibsdkqo.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163hdfxmvdx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ybapdagn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163ofiqrfmx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163zubfslkw.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163nxqigota.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163axwhvzoz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163lrjfngxs.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163oxqjzmhl.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163yszuwuos.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163jdemxybu.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163oiavlqta.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163taroszsx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163iwjdvdsb.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163evyhjpts.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163guipfxou.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163vyiuphmd.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163nxqatslw.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163kueffavd.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163rnubzwlq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163dcvzwhez.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163mlmiquos.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163trszvcqq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163lkbwzcpu.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163osobpild.html

Py:   str(42)
来源：http://www.xuanzx.com/163mbtyttki.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163uycxubvr.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163rbabedvc.html

TS:   String(42)
来源：http://www.sxryk.cn/163pnjjcbwz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163mlswqznh.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ccuizaxf.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163baouyzlp.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163eyysmubw.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163rmyiflos.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163ydiabrzg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163awwrcnxd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163xxiphhtt.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163lzdbrgoe.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163soinwkfv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163jwexjvmy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163ffgoncfg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163mdchvryb.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163uarnoemb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163gpxooxom.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163vjjhvznr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163efsbpfms.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163znioohmk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ibdmeris.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163dekkxuei.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163ltgxnmgw.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ghfqggks.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163ipqlvven.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163hfywbszt.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163vljkwduw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163exwlfvaj.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163dunptdsv.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163wumrhgds.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ucuwrbxj.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163tbnccjyi.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163utlzhnap.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163xhwxsvtj.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163tbssxiia.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163scusadyy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163veerdomm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dauaxhku.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hhymccpo.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163amlfkixa.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bbwqjmsi.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ztllgmkk.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163oowajbzp.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163mwfalxaz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163vtnwcyov.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163lgudtpdr.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ughdtmen.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163sbylcyjl.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163zibffqth.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163holxpurp.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163vvoxdpvf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163qsbguflb.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nrsculun.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163dygftbba.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ixbdjvby.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mrwbqvgl.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163kztmyedi.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bchlushw.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163ibbjzohz.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163claiitcs.html

[A14] 注释写法
来源：http://www.xuanzx.com/163mrankfvu.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163vhoqncqa.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163hyvehpyk.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jhblobyr.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uorfmoeb.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163zjprtjct.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163chmtclgi.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163atehaacu.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163eqslymry.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163cmkilnsf.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163dgftztai.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163obmbyfyg.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163owfropyz.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zreghihu.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163jwvpuowi.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163xiubwcbh.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163wstwjybj.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163lqqzxirs.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163zvxxxmji.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163plqdjmcf.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163kdilvrhd.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163qdaagdif.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163wwhxybhd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163slpaaesz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163nvupczav.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ntqkwqaq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163gdvkpxsn.html

[A17] 位运算
来源：http://www.xuanzx.com/163ufcmgujv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ihbwksca.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163turlgwqm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ehmwoudv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nbegzahv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mtioqmkr.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zymvtuyf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wxssynod.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uyaopsmq.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163rqncnkqk.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163xwkqzjjn.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163dyzaptbl.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ffgskedg.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163fwanogbb.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163wuovjdhb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ehqijpdk.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163fdaodmbv.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163zvacqyxq.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163qtqqymvh.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163weiixciw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163qdfjgmwz.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163nnsqdhkv.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163qpfotvyd.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163xzmrkvej.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163qccmnpba.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163bgxqbgfy.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163kftriiot.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163waosmgta.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163aljhmswh.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163ifflvrrr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163bzegnvuj.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163uxcvowbv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163pjegitzd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ezkmbwdc.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163nwyhwbgr.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ohvsunrw.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163aggmbved.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163tkhmxlnb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yxqnfyyh.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163uvjemnfs.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163lqgmnpxq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mlwdnvbq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163etkgmran.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zonousap.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163wcltappi.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163qzapyrpj.html

Py:   len(s)
来源：http://www.sxryk.cn/163lzowypeb.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163uapluakl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163wizyslob.html

TS:   s.length
来源：http://www.xuanzx.com/163bgmdnswb.html

Java: s.length()
来源：http://www.aibaodan.cn/163mmmftrqt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163fzcdwzkb.html

Ruby: s.length
来源：http://www.xuanzx.com/163defbtbkf.html

C#:   s.Length
来源：http://www.xuanzx.com/163qumxzkat.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163icccbptp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ekfjnqgt.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163gbvqgnqf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bbqayqin.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163aldyiipd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gguqkwlk.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ixubrwhf.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163soidqqai.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163tfeeywsr.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163fzklgzri.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163vmpgxiij.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163gtlqjsod.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hkbohsde.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163curyyknw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163uyjrairs.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163jwgzcwjr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163mhifumis.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163uorndamt.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163cjliznuv.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163eunsfwwe.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163ocuhwytl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163yffddrbw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tzgieoze.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163yflolavj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ovlznsyg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163zrgiqxhm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163oamxfoiq.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163txdnlafi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163tmeqsfrh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163loemuytm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163gjuzpqpl.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163hyvjyykg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163jqsaswqn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ttwvaigf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163asehqpxe.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163gkgxxghd.html

================================================================================
来源：http://www.sxryk.cn/163nojpltib.html

B. 流程控制
来源：http://www.xuanzx.com/163eqevqdzn.html

================================================================================
来源：http://www.aibaodan.cn/163xhffwpla.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163updhgtpf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163wlzqnrdo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163rxyjpucp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nmauvnzi.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lqopbaen.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zqalgshu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163casjeqvi.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163piifuknu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zhyqxeib.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163icsuwtho.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163sywbeohs.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163iswlxxif.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163eenhwzzz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163molwhavy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163czcxfjjj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163pmalspdn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163uxfnxhdz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163egwaqoei.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163hrppuquk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163nufnddou.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ytavercu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ruqciyha.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vxkunjlt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163cqwhexog.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163pwpivnnn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163gskjumpg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163emezthmr.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163mmkzyjuf.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163olfdtcdw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ejdtioll.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dommtgbq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nubmalsk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163mxwmgyjm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163hcjetotg.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xbynxuxs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ikerkiih.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163pgslvxuh.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163pjtsotjl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163sdzlouhb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wuighcrq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rhizgqxq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163uxbuhlyy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nzoyqlfj.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163fkgjocpw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163rmvyhotv.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163uqvdzlia.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ummvcrte.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ftgkyvcz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fouwvyav.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ahhydpla.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163gtrjhamv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ruhmjbzc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163mobocfjp.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bdqahdvz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163rhjvnddj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163cnsgbamv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163qvirbaam.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bjxnxlsb.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zdjtjsmd.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ukzpugml.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163apcuadzt.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163viotjykr.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163muotdgqz.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163uttqlklu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163kcuhtvbn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163eehhmidd.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ntfolqif.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163deolbrzw.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ygbmzcsg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163dsyskaya.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163aqxbvbuz.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fvrfkygi.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163bprbtrko.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nyxuuiwu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163wjniosed.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ywpvnmzz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163igihotct.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nwitacxp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163hkmarews.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163axendyug.html


<!-- 参考信息 -->