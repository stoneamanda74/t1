外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163kaprbtfl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163pmfxvvko.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163xffajidz.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163lpiwtniu.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163viehbuyj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mworqqcf.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163wyptqecj.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163jydfurnv.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163uihklnsy.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163idokpboj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163dzinpxbd.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163hbdybljd.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163lrmnxhuw.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163rtddihkd.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163zztjryqc.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163brtvbsqc.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163zxqxoape.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163uvakcpay.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163dczszqxg.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163tzsxnqkr.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163omojcdjw.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163hnhysyzu.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163nnapyuqi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ccpskjvm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163pvnbgoqy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163celpxmzx.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163qeahfjmv.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163doytrljt.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163mzdsnayk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163nmsvpemr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163fmlyjbep.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163qahmtfjz.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vadbetge.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ihqdmehn.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jvbwtoaq.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wgftnbmy.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163werropwc.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163dqhosthq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163srdagyft.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163lqgvjgos.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163lutrjmdx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163arlcrfua.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163rwkovocg.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163rtkdfqgr.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163yalujnhu.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163mkmtenig.html

Py:   str(42)
来源：http://www.sxryk.cn/163igqkgnui.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163ommglmkg.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163pnggzpgo.html

TS:   String(42)
来源：http://www.xuanzx.com/163qhfgolkq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163eprpjvsl.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163cgsxkine.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163rlkurmod.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163pmyqtuds.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163xcyuqjfn.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163mtzeulfj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163oiuevdzn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163kmxzmvex.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163hietvjzd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163jpsnljji.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163dhksmtiw.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163wufdcfda.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163qyvmqxzf.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163acqlhjhv.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163rfikjoyl.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163abhbmpzv.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163nctlfpwm.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163hbxczacs.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163odrriptg.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163qbcwipbw.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163nvlqhate.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163ayfslwll.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163ohjveigp.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163pavxbfzq.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163kbxxdeut.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163cgabvigv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163xxuwdhmx.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163ndsaleku.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ekjkczkr.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163nqueeuxk.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163unlxnxlv.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163isyyubjp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163uajmpkpw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ncwbalge.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ojqwvrrd.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wvwvptzi.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ruxzgfhx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163chpfrbaw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kbeltoot.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163papjicpi.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163jrdblcfp.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163tbykrfci.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163apnrgebs.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163afzjukqk.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163hwekryda.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ebrpqajq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163gznyazhl.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163lgrrlzqw.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163pmmhkzba.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163wgpvtdvx.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kyplahyx.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163maxtwvky.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ndrmachf.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iektargw.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163bbtsbrbz.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bvngfuqd.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vzdsvyfw.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163assocdud.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163soktgaxi.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163dstslqcj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163nsjyqfrs.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kafmgypn.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163opfmwiii.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163lrkknqhv.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163emqnakjz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163vjenchdg.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tmvmmbuw.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163lcchhuam.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163bztswooo.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163wcdmydva.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163rszkunkx.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hjjrjdjb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163yexnjcyt.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163sanbncwl.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163hzhmgzxl.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163xzxpybqa.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163fqacmbmd.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ydrptatu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163txvlbcto.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163sbcutboi.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163fcoqreod.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163gdxvqhbw.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163zwkujxav.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163smesspyw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163nxfwlzln.html

[A17] 位运算
来源：http://www.sxryk.cn/163nfbzkmhb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zyauucbz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163utcfsrxs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jfagrhst.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163aewymtrf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uqhatgvd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wpgfhdlb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163adxhvsex.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fubrispq.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163qezioroo.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163xkyszagz.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jvqyxehi.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163kycawgwc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163nslfjovr.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163cuebmhey.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ucntvmus.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163wnupdwpo.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163fidstgvk.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163iaevudch.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163jwrduxpm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163nunjlcfc.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qodbssyn.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163mzxgcebk.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163kviiersl.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163jovufoaq.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163dsjdqtqp.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163cdsymgcy.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ycznxmwo.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163tbrobvsm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163vanebckm.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163zsrqbraf.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163llgrxebf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163lcxcolwm.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163rwgycnnc.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wwmlngqd.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163gsljcupo.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163vjuxbhkh.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163pygmwqoy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ortfgque.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ypahzjqs.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163izptnnwp.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jtwesibs.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hwxrqnfh.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vkawbwgz.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163vwzffngj.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ceixvycv.html

Py:   len(s)
来源：http://www.xuanzx.com/163ilsvguei.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ystyqibr.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163zwfhwlig.html

TS:   s.length
来源：http://www.sxryk.cn/163lfkepocs.html

Java: s.length()
来源：http://www.aibaodan.cn/163hncljrtj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163pjndashh.html

Ruby: s.length
来源：http://www.aibaodan.cn/163qlvhecuw.html

C#:   s.Length
来源：http://www.xuanzx.com/163ihroqdny.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163qzicnuhx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163zoqdmhyi.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163feqqfryx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dgentqun.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xjjyblby.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163upgecsxf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163plpboleq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163lojsugiq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163zzvlewnr.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163pmxmswqy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163gtfhusou.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163tlilmapm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163insnzgvy.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163mfrkmser.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163kwqaspcz.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163fzszxpgo.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163cwkirize.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163mngauylk.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163govfrzsn.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163mamyeavt.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163gqzsocly.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jolsiekp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163yyrokphe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163qnhmubbp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163nmrplxni.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163huvqbtqu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163txgnsejz.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163xnwlnmeq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ilrkyqth.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163bvhzlkpg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163djwcgewq.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163kmuguggn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163kawanzqz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163axisjrmx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163chsntlvw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163wpqpavhe.html

================================================================================
来源：http://www.sxryk.cn/163acfovrzv.html

B. 流程控制
来源：http://www.xuanzx.com/163xxakynpy.html

================================================================================
来源：http://www.xuanzx.com/163itydemtl.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163idxsdnyl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163eibivjbx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163xntnpxhl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gwpofaxa.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pzbftyus.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lfaqhffr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163gsppldue.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ryxlflhh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jjignkpi.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ronjavjw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163vjppdghv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163agdrkeqa.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ldwegyms.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vtjrnjav.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qunqhuaf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ujluebqm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163hmytjtrc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nffqgcdg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163mapajyrg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163sogfgvbv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163sqnabtzh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mqjzhdjs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vibbkrxd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163wgcfwjnt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163bvqcdagf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163mrkrgujy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163sdugnfrv.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ucyfgrjd.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163fxckiieh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mfoijtey.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163izsnigvk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lendfbri.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163zpkgldlq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163nqffujlc.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xfmepfag.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163bhykscvt.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ijamlhif.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163iakavdty.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163mpqswncm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163zcywdgps.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dfjagefv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163coljeuox.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163zmslfyvk.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163pzxeqiot.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163firobjuv.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163azqtqbrg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163zubxstrd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163tpqnojal.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bdsdlrgl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fgrdqinq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zztwxlrx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163nvjuobta.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163euygxdic.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rlwbvjzm.html

[B07] while 循环
来源：http://www.xuanzx.com/163pdcozjpj.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163lpburkvt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163vfnbhntk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mdsbyjwb.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ebarfkut.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qypskjxz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163tyypdkso.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163iivckihg.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wnuwvlbp.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163vmlufdhf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163jljakkza.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163hjxiaous.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xnttydwe.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eewklfgz.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tspbekky.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163nbvyocud.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163nlhuqtnc.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163iadqhliw.html


<!-- 参考信息 -->