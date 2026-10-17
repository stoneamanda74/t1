外链999!wailian999！

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ywtazlzm.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ojnakusy.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163ovrzkgqy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163hhunqlpl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163jzywnkyn.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163mnkfddgm.html

Py:   str(42)
来源：http://www.sxryk.cn/163nesmzcbb.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163ffnfveya.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163jalqybpt.html

TS:   String(42)
来源：http://www.xuanzx.com/163mifbycfq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163vaaajbno.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163cmwxitmu.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163pmzbwycy.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163kygqmwtx.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163qyddkahr.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163dhuorpzg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163gdcskgrs.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ceimllca.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163qqztkzqu.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163gtombexu.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163wtamiigt.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163fqcjswmc.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163lzctfuxc.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163uulvwpzc.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163jkhoseyq.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163sxbnenvm.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163nyfmsjrk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163tydjsvrf.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163xwrrkbgf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163njeoxioc.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163bjuuwvpx.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163niuprrly.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163nugmazsu.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163twxjynbv.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163ridstgam.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163qvehuvrp.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163gnbeohvw.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163vubhyuek.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163newaebnu.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163pviqcmjj.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163svtctjuu.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163dgorcurn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163eyfxjvwb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yqwhivnb.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163erlgbiad.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sdtjqbqv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163niissruo.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163vvovsphw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163camochpa.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vfidxajc.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163shyvtoya.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163xjxkktzn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163flxdhcuw.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163tbsbuvav.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163efrxohmy.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163lkbveilc.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163eygoekef.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ydgajtlz.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163eqypyazj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163mkdwtrhw.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kcoanbhg.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163kekaoseg.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bjgpvqce.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fcvxcnpb.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163gutplwkb.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zcjzexgm.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163cosdbcto.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163idhvbpmw.html

[A14] 注释写法
来源：http://www.xuanzx.com/163okjivpxm.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163gnokmohq.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163nyaicyvm.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rporlhrd.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cffuzbcd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163okrfsdlt.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163khamtxqo.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163mtrecwiy.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163iykzzfxv.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163nntoialq.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163mkrkzjhs.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163xxefkjps.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tbcemhit.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uyofptta.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163kzrxjfcg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163mohhiegg.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163htlvmxwn.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163byfqejav.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163icdrweys.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163dhtzklnk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163bxanibug.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163vnhldyaf.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163xgqsqxzq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163vzvhjzao.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163dlgjsjhx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163wpuoncpt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163ilaxujom.html

[A17] 位运算
来源：http://www.sxryk.cn/163pjzoahqg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163opjpwvde.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163iquadtgt.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163secodelm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163aarikbjh.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xnjxqfjf.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163iqxvkdow.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vwihqkxa.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ovcvncst.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163bktsorxo.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163vjuzyjcc.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163fwmeasgx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163jijrbpvr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ipszcnzb.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163nwggqpec.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163bexyqvda.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163gzodarpt.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163fxicborp.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163kodtekkv.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163yxarvmlq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163qeimvovo.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ixulwces.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163tznyzkiq.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163hnoqicqn.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163pvocgxnp.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163fdtlucxt.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163olpjpaju.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163qitumaio.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163bvkwqpll.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163qfdisixl.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ukdgkvjr.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163zxdqsrrc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163kckajher.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163zrzthjum.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163wpvgezel.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163lhyrigjg.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163dgqsprta.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163vvqqaluj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fkplsqin.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163kwtgcwpo.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163zlsdhwym.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kblhoxij.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163spppjxcy.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163uqsceskm.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163pcpuospk.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163tsmverwc.html

Py:   len(s)
来源：http://www.xuanzx.com/163abuqpbkn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163rzyjvasx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163kqmubloo.html

TS:   s.length
来源：http://www.sxryk.cn/163zdianbyj.html

Java: s.length()
来源：http://www.aibaodan.cn/163whcieseo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163zvesoiax.html

Ruby: s.length
来源：http://www.xuanzx.com/163mmmgzibf.html

C#:   s.Length
来源：http://www.aibaodan.cn/163tyzgpwwg.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wcmabywl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ujledmya.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163aygxkyrv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163agvidqxk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jzoozsbi.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wqmwfscu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163dqpahmdl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ajhanwjt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163tbpasdnr.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163bvokbauu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163cashybby.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163xfqxqulg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jfwyqvie.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qbsxwuhl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163kgxrnqmw.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163adidargb.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163fwixqzri.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163enjewhyo.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163aadakjkg.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163zekodhpf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163cyoutyqj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zhqlfvul.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163dhcruqia.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163vjkyubgy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163mqdyoual.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163puwnsjla.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163mybwrrbs.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163eebdswak.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ckxbnfyy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163swgnxsba.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xmvqqzty.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163btmbqgsq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ghccvxvg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163bwzoeegv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163utrdzvwm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ykushpmi.html

================================================================================
来源：http://www.xuanzx.com/163abgbjlrl.html

B. 流程控制
来源：http://www.sxryk.cn/163vuhuxkqs.html

================================================================================
来源：http://www.sxryk.cn/163tjxkhdeo.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163svladecu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163tphtpcxs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lmfppvxg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fmylujhc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tdyxmtni.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jdezxvhi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163haojqphp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163wtjvvuxc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tvzfaump.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163tnqeymnv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163wtoripgd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163bluytfsa.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rqochury.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fxaagdht.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hrzotbbu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163voivdkly.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163kscmiuda.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bbtcdulq.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wlqkzsgr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163rfyinxlx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163snqjraga.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163esrpkljc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163lwxqqlyp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163zmvvadzo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163rpthilws.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fsncybrb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163vvutxarb.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163puinespu.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ujpdwrdh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163cbrtqgbp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wmbgfudy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vpklmxcz.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ewftleqv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163usbiqvro.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163kschgnfs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163anrsbmzb.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163cywhrfel.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163rmrgaqfk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ctjtwbvk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163crzcolye.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163azcmlwwu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163iqaocodr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163hnhemvzu.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hbvqnlet.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163attvrwqq.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163srogpaeu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163wwzybjub.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163aoguzzhx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vvvipffm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163meseafvk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163vdqtpiou.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163tewryikk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163fzxudmyw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163xnjflmgj.html

[B07] while 循环
来源：http://www.aibaodan.cn/163nbesjusk.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ojstdguh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163lropjgjf.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ykrwbkwb.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wjleflzc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vgbafyto.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163lswduyos.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163udvnbjdl.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zppgipes.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163jwlemdei.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163wzoomvmi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163uafxcwbx.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lfvpljli.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ybvgcxsp.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qrsbepxg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163hvomcoua.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163fwaqilon.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jxahruic.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163svtnsiig.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163vcpbxxow.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163suzdhxex.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jgfkppyt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jjfhpnvq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pnwcsplu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xdrsvnsu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163flvxoqst.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eqjfcoxl.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163sihpjiiz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163itrkbndl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163eoejosnq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163hbbpueru.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163kskzigpq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wtkffhfz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163kzvnqems.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gxnnqihe.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xqwwzvyh.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163gpxmoedi.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163zfsrqdpw.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dzxbgauk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ryyvilet.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bdknucrj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fcgvaild.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ajhdfjys.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ifaodjdx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163rtsrtvrm.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jnfhzxyq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163yywbmngz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163pybjrgys.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nletnrhb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zttzeowf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jgpxjkdi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163otfsnnhl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zkzkuosq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163jwquqzkh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163wzmzmjwg.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rxtnlbcx.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163fyjksluk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163blwuzhgf.html


<!-- 参考信息 -->