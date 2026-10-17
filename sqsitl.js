外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ofdxchvb.html

[A03] 常量定义
来源：http://www.sxryk.cn/163enkrexnc.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163xdhhemnw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163fepvecwm.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163cignjawb.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163svnhkotr.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163updbntbw.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163hmsyqsql.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163rfosabzj.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163eyramiap.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163zubszcbk.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163rnpvskcw.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163xuufnago.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163mbpcrgsa.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163dnvofppa.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163twodqrqw.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163ouclqruf.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163odcymaog.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163nnvkaqxt.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xqduiwmt.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163glnkwjzb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163pgnknwcf.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163mbuxwujd.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163crhpiyda.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bsadojbs.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ooxsaqyt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163esfmxasx.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163bvrratlx.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163izfyxqda.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ycrpmtew.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163xphevxxr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163kxrlpowm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163iilzlfiz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163vxbhpqex.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163wuppezgv.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163tlbiqurv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163ggrdikrm.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163djyunvty.html

Py:   str(42)
来源：http://www.xuanzx.com/163djmbsqcn.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163hwhylalp.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163slwvtarq.html

TS:   String(42)
来源：http://www.xuanzx.com/163agjlzxsk.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163ijgzeoku.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163nukgdnkb.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163xevkbtwv.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ixfocjkn.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163rwrafetg.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163rijjekox.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163qqjjrazd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163cxyaugzw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163riwcgbyk.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ypmpfplp.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163dwjdlnqg.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163gidhhoqt.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163kzfrafzj.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163lkufiomr.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163zmksaftj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163sujtgskh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163rfokqtsj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163gilivbqx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163wcuhdgmh.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163dzwedyst.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163gquahkto.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163cmkfjebx.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163dleacunz.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163oktwjelw.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163vrozjgum.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163kkzgumeh.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163attnhrsf.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163zhjdqion.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163inkydjvj.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ppksvdgf.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163yamfbbuq.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163yrtpaamo.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163hljzvesz.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cuwowbvn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xcwpmpvg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ukyvuaya.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mrirclpw.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163uasfbzky.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rthbedop.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ytyombkr.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163kfrmasdx.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163owexfjdg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163cjapkpdy.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ifmhjuyo.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163eeeqctns.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163niaitjnb.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163bwqkdpcf.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163qhdrywsl.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163jjqkxehh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163vsgwfcjj.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vesnakxq.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163achpfcai.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vdorkggb.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jciwuupy.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163zpqhljxj.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ssnhgfoz.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163cthahulg.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oslwxelq.html

[A14] 注释写法
来源：http://www.sxryk.cn/163zizjsjup.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163gfdgpnwy.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163oemxzyks.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fiqrxrol.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163owojsxef.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163xvnioqng.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163llodhuqp.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163nwhfldjg.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zidpfamf.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163rfkcggcw.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163piatrjdn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163ojtgqqsq.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jguekemy.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163qlfxrzfq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163vtqkyiuk.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163honfwhst.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163alnclbfi.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163iunoafbz.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163rulrlrca.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163fcsbpttt.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163wwkmnpid.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163pfxcahko.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163cuqqkalt.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163vgisxpba.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163jbabwzio.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163gddcokqs.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163dppaghuz.html

[A17] 位运算
来源：http://www.aibaodan.cn/163wjuzmgru.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mbxfxxfz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163vjhiktdk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jguyysup.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nbbvdmds.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163htqcpypp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hdcrohyf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zrndhzqh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dwguqaor.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163cccpcgqp.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163vgwluwhw.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163asjbkjos.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163poqgjcqz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163qktwscsv.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163fbekggdk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163chkvzpmz.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ifmzufbb.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163dervcacq.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ozbtmqnu.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163yhkuofal.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163hfvyjiuv.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163xeaqgyxu.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wbmisljq.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163kifuynbg.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163kmxyaxcz.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163jdjosuek.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163vksxhpbr.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163eligbbve.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163jbsqjtuo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163pjrqtiwg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ktmnqpyn.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163aagwlzrc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163vzkljxei.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163oqvoietf.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wcsrylkv.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163lpuwoqqn.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163zioczevx.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ydvrrbwr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vaawzqwg.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163qjgteofj.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163kgmvjlvi.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rprfzweb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pakqffvt.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wvdfslqq.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163lqjgdids.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163bxdfceli.html

Py:   len(s)
来源：http://www.aibaodan.cn/163xcwqqtqx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163rxedczdn.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jtckjtui.html

TS:   s.length
来源：http://www.xuanzx.com/163kpmrhbby.html

Java: s.length()
来源：http://www.sxryk.cn/163yturxobt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163lvtezdgt.html

Ruby: s.length
来源：http://www.xuanzx.com/163dfgqrsws.html

C#:   s.Length
来源：http://www.xuanzx.com/163nfqqktje.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163huxxheie.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163qirypcci.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163dkkjehec.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rbbhasnx.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163abvpdfog.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ettwrpnw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163kvqwysgt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163jorkmvci.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163mfdxusim.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163hdekadwf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163xsluczec.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163akopttdp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163eirhprtt.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xxsnpbsl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ruqhpvhw.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163hwsgtxaq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163nnfjkwax.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163wfbqeqip.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163hhhiojnl.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163vvzpnthg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163vktjidsu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jylojiuo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163pahnbari.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163kljgchrz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163wmlxhnqo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163mctrbpeu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lzqbenqv.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163vfklqwti.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163bigzrsmb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163oymnpcpq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163bmykmiyn.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163rxebtxec.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ikkwvcam.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163wxspjzzu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163zlszqrri.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qimlfnfw.html

================================================================================
来源：http://www.xuanzx.com/163zzoomkqf.html

B. 流程控制
来源：http://www.sxryk.cn/163xzvlocfl.html

================================================================================
来源：http://www.xuanzx.com/163yxwseblc.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163nvfaqupk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163vuvpuodu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163bqrjekha.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163aymvfsnv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ltdpuzci.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163savnugjn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163uixabfwr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163sfqamjle.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gfycvble.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163godjqans.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163oenoyepp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163jbcaweur.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wqhlqnoh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dbqltgjr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yvittkpy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163fsyyvvph.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163slgzktcn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gijqbgpn.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163kkhakhci.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ockkaexn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163gdxwtyfi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163skepybue.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163qiznhvvl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163hhakiqux.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163afpxblkr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163xdzapreu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163oauabpoi.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163oqrcdiqk.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163rjdizlgj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ylwqvwri.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fyvlqpfe.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xtxlekxc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163lpqftqom.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163yvgtuvvp.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163oajumuws.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163aeqhlmzf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163gzhiyxgh.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pukuidbu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163fegfxhdf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jzeovclz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dsatiohf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163kwiiusez.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163awqmfypb.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163sqeyhtzw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ublecptd.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163trjcslwn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163fyrpycvm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163gvnycsjh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xdtgjjab.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fcybpugo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163knenyszl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163fzljvvrr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163isffncnv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ltinriox.html

[B07] while 循环
来源：http://www.sxryk.cn/163cwsmsxsw.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163rltflwic.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163yqqeegvq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rxvuwelx.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hbbdmvzo.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163iqdhcyqp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163rfudtgua.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dexhxliy.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wtkevrgq.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163yqfzpbrr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163izgbjjqr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163unwriyjq.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nncwtpuc.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vhupzybe.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163imxdylqz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163bescrbjx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163xluwqcjn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kgvbsccw.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ebwkyxhw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mhhlihmg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163judbrfaj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163toqmvwdl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163njsympnx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hxpeqlph.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rsqavjnx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163auxwikza.html


<!-- 参考信息 -->