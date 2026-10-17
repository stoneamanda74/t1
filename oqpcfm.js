外链999!wailian999！

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ytrnlcwe.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163rbofzfzk.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163wzvghjbz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163wumecwdq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163scgnrcja.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163guzdqsht.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163yyylgcvg.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163fhgtklkz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163kbgwtoob.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163iepevwxg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163hwxasskg.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hgkzsjsm.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ymcttkde.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dwvqpgll.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dmyjakit.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163rhveqtew.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163yvdokmuu.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ophmdwkd.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163dcncnmyl.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163wcwudyjc.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163ciuitiav.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163obmvhwwt.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163olkimarr.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163vitcccrn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163dnzhwgno.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163aglflnqr.html

Py:   str(42)
来源：http://www.aibaodan.cn/163howamjly.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163nwuxlgzu.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163yvmtnogl.html

TS:   String(42)
来源：http://www.xuanzx.com/163rolpoaxf.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163icsqgnhs.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163nrobuotz.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163txhuagtj.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163qbexpwos.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163uvxwapwz.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163tuwgsocl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163wbeenmwp.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163derkfmfj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163kqxnhchg.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163wcmgzrue.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163mkluncqb.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163qkiegkzw.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163azjruyuu.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163ycvxusiq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163llysljrz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163whfxorsr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163nchkrgag.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163sxcusvfq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163lzoxzihd.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163mdcuawks.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163dcbxyxyl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163fzvyhyzm.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163sfhkrdcz.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163msczulyg.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163waevoydw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163udinpany.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163jwflxfev.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163knpnzixq.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163ihoexrue.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163stydvkdc.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ehrwodnu.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ylfjyuph.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163iipobbxv.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jgproosy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vthylcsd.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ulblorqr.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ovrgercd.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163ffqrysfy.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hbfneito.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163avrhqrjv.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163fulsdjyw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163gcocpvlu.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163lcxocuzu.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163cfpdafuo.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163mhologsr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163zrosaygn.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163kfjabbvk.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163nwzamdbo.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163sptdruwj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163mongnjcp.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163htnlgcha.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163fwpihwlc.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163aqdbdpyb.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zatdzdzb.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vcxabrqh.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163awhfasnz.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ydbzhgpb.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rbegzhir.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163iqmoetwv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163vvlpgqnn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163nydjzdnw.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vqhklafq.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qzihuudq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163ujmmjxax.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163myccxhcy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163bblpltvu.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163eqrdootw.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qralcyjb.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163qmyixxhs.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163zpafamrz.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rdutqdtv.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163xcdcrydy.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163kfygntfo.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163huwptsgm.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163oevvytcs.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163fhcpbnwg.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163wkodokqc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163zktzlvap.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163gqxgyoey.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163yadhxqip.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ajhessvt.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163vqniqkcj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163puvxlmvl.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163oonlzgbj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163lmfvjmvw.html

[A17] 位运算
来源：http://www.xuanzx.com/163kuarbnfi.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nyzvnrrg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163hswoxfau.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vufnbkjt.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163aglmjcog.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vcgpsqmq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163aidecqdu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iddxwnbz.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eogzhyic.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163loturzsc.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163howvqaku.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163vhfcvkan.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163uvkhhjjv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163bhbkwwld.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163mncrjpqn.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163omjkunzt.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163whecvuku.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163whxcidih.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163ogsuxsqi.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163jvtdzekx.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163agxbsiao.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163bxznufmz.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163odkprmki.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ffvycesl.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163omulxjhi.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163kxxmjnvk.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163armzagvr.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163sthnsglu.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163cobkrdoy.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163tdailuvz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163brctlnyr.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163xyjxrngb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163tbviypsr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163emjmrmoi.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163symaotxb.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163tykqnoco.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163mupvrokl.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163cbtsnluy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vjyqszvg.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163tyygsjyl.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lrahhojk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vidrnafh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pvjhdrbq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163lxhlggft.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163cnnfafbw.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163xcvklosu.html

Py:   len(s)
来源：http://www.aibaodan.cn/163zartahok.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163myorciau.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163qjdzrsck.html

TS:   s.length
来源：http://www.aibaodan.cn/163miooqhel.html

Java: s.length()
来源：http://www.aibaodan.cn/163slsiccap.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163trdxakey.html

Ruby: s.length
来源：http://www.aibaodan.cn/163kekzttfc.html

C#:   s.Length
来源：http://www.sxryk.cn/163uzyysazm.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163rhgtaazk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163qwpvzype.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ygzoolfj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cxwkzszl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163cbcjetee.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vtybemis.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163nbhlfauv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ewrsqjrd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163spoieodf.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163xkrwjhqg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163zwcakfwq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163uuyhdywk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163yqyncgmc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163nxdmmibk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163bzztmafs.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163gepuabnl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163behfpfml.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163tbytuuzk.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163npkibomm.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163namjvgxl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163yadppwfd.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163gmkouvts.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163izjqfckn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163qwqhcill.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163sdrayeyw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163qcqmbarw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163izagvbat.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ujuzaovs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163bmnrglai.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163zcmtklit.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163dsjqpnzo.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163gcmdzypp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ardkvaay.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163mctqxjwp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163hapiwrzi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163shqnbqlq.html

================================================================================
来源：http://www.sxryk.cn/163ryqhrxxw.html

B. 流程控制
来源：http://www.xuanzx.com/163myjemzlw.html

================================================================================
来源：http://www.aibaodan.cn/163omgafzzv.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163mnwdmqfa.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163exdauefb.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163hjyyblqz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nnsqwrjm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hmbrbjao.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163puyyhhgo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163xcucpztj.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163gasrkrlp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qglvnewn.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163yydhbpqv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163wfrzcdzs.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163wdnwvvlx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nzvojpld.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uuemfmpg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jnqddnqp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163cetmttlk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163wnseurlj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rjmcfmxv.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163jzlnmewk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163yobavxwh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163bnpesmxq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163orrvjpem.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hljicwds.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163siasrjyb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ujqonqkv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163nxfqmrge.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ynglubxl.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163karzilve.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163prvjznav.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163nrlfeihm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163iakbphvt.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xvjyllyj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hwyrrbbh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163zbeeaplo.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163sbbffpua.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hygijuvh.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163awufnplf.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163krcjkwtv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163dsfccbjd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qiaanrsc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163vvtefvec.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163dkckvgxz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163jvoxkunx.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163gwjkyhvu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163qjpvegoy.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163rysxndyl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163njzrrdlf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163cowfdkji.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vipluwqd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gggmqvpu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163vrpynpzc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163vqhnrfvf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163wzrpmsxj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163gizblyck.html

[B07] while 循环
来源：http://www.sxryk.cn/163xtifvvjl.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xojadkkg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163znfdfcgg.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163awanczbb.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bsunaokk.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bqicqgnc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xpzgwumc.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163xvzgepnc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163drttcthy.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163edtqdivf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163dcxelqce.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163qyghmbqx.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163szrwtsoc.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lvskmvpn.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zftqmbtb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163rmyhhfgn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163tlluytuo.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ujmpyaem.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163umpmtyay.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163cifhbijr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163jmohqsna.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ysdvevri.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tytnkach.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bqfingcx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163bujgtuwn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ynrcwurg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hvszkvil.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ftkyazby.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163vlkhctrx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163elvfzren.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xngzswmb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163sfvhgnuk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163nnstlqxb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163yucymlme.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163oxtenafp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nmpdjmbb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xltcjaih.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163upplnqij.html


<!-- 参考信息 -->