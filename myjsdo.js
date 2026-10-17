外链999!wailian999！

[A06] 字符串转数字
来源：http://www.sxryk.cn/163rvpnmvsr.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ceanqzxa.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163biddnuum.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163ktlvgtsg.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163jtchnqeb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163bdxmthgq.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163paoqrtjp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163innkixem.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163mjlyrqtu.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163uluvupfb.html

Py:   str(42)
来源：http://www.sxryk.cn/163jkmejjfm.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163xkqoniea.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163wgcqkmwy.html

TS:   String(42)
来源：http://www.xuanzx.com/163fjarvsbq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163yuivhduj.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163kouqjurs.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163uqmxpcne.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163qvmxkpbq.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163fnyahmev.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163dbyelunu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163augpluap.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163camvspks.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163nqadagzz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163sfawfiui.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163kvrkzlre.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163rmgxoytx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163lamufldn.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163galggrad.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wittvofq.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163gkonmbtg.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163tarbtikq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163iiyedrss.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163gjmoledg.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163jorikmdk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163xsvxgnea.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163muuqcgzw.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163ersqvhkw.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163qucczxbj.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163veofjjmy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ciwgbtio.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163uyikgnox.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163vudokevp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163dqswwrja.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163lmysswxi.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163qpkfmmuq.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163chjfrtom.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163odyqyewa.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tcqbcwrh.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gsnmaukg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ngpzwxvj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sfvroiqu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163zgekrbcc.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fmmfvdya.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163irppnwnk.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163mdlvaowy.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163rxfgkgbw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163hmfgvigl.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163dttzkvtk.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163hfartsle.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163oypjqnnd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ozaduchx.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163cdwtelig.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163pksrdpfc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163sjpystbd.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zgphemtg.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163zicxtflp.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163iwpqopex.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zumpsjcr.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vygqtrji.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qbdaknpr.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163owohkkoy.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pedjqepf.html

[A14] 注释写法
来源：http://www.sxryk.cn/163htivinsy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163razxuvdx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fghamkba.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pgemjmko.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163pjwwjltk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163pzdduske.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tptvpgin.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163oqqeagmx.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163yqmppgdd.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163mzflycje.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163ujxgqunw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163rmlwbmoq.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163pylgvhvo.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163yrszgxiv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163ndtsvrxw.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163gjiemcef.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163lkglicnc.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zvffiqcd.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163bqnxnrhs.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163uhkohydt.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163gdvrnzkf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163xcglscby.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163nrmarqev.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163crwagyln.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163sbcreiji.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163coccbggj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163luvocfyf.html

[A17] 位运算
来源：http://www.xuanzx.com/163ozkbqkss.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bmynjuvj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163pmsbfjqq.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cenkwfop.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163atwrllwt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ddkuizrk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ytmudwhi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163enldaqwu.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gjhcayni.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163bhbhbbap.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163gtzhnuom.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163hvowueyy.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163mzwuftfc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163bcfeishz.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163ddlvaayg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163rwaxvbie.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163qlexosdp.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163aoalfvut.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163wilskarq.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163wwizhtyv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163wuhfmceg.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kbjnxdrk.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163jcflcilk.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163swzlxton.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163rrlkyvxj.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ippfhboz.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163drdffkyp.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163pkuwlabv.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163atzlnekk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163hesdlabf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163qdqwiaqh.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163outroiey.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163titvnygo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xanmdwfh.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163aqazqaex.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163bargkzgp.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163bshppxzv.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ygbyjnpz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163csseknyz.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163lupzwprx.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163gscclpjt.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ojuxcxvm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163edogakbr.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pwsamuja.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163lxctbtex.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163dhkaawfr.html

Py:   len(s)
来源：http://www.aibaodan.cn/163bouvicnk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163wdswlgcl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163maaxkryk.html

TS:   s.length
来源：http://www.xuanzx.com/163ihaxskkr.html

Java: s.length()
来源：http://www.xuanzx.com/163gutnglqp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163dtcmlatx.html

Ruby: s.length
来源：http://www.xuanzx.com/163xzaqusql.html

C#:   s.Length
来源：http://www.xuanzx.com/163bzghagar.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163xnqxnqoj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163qsppiqri.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163gdhzxktv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163btcdceej.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fnjfprzx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163amoibkmv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163omskmbhm.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163djrmyqhr.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163uzaabgal.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ebjfnqfy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163omcgdioy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163hancycfb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yyxctodc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yoramxoj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ulwromdz.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ieupaevk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163szunqxra.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163enxabfgf.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163zfczmnsc.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163uzrzawvh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163glhabyox.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163bbmoyfbe.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163gicfmtyj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163rjbojnqq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163znouvsjq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163guvrvhxq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163zmdevnhs.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ouczsfil.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163kwelsldq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163jpwkzbkq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163pxioyfxf.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163usirlzma.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163jkcucqqr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163rryegogg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163bwygkfgw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163thssmoqf.html

================================================================================
来源：http://www.xuanzx.com/163xsdgujbp.html

B. 流程控制
来源：http://www.sxryk.cn/163virfhnwd.html

================================================================================
来源：http://www.sxryk.cn/163dljzzdok.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163twemzjwh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163akziouft.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ucoseptf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ubdbvtoy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ifvythtl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kgkawdwf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163etzxcazg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163akmtzmsg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lwfnljyh.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163kgtkhmeg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163gnycmgim.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163zzwulsws.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sxnxxhyw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sqvfxqdd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fbmzybhm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163fyfhsktc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163flugmvqd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hktooeam.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163isqgbubs.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163wlsscycc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163jgbipcma.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163grfqjdkd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rknxmdql.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hhxeakgh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163bnnlihus.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ivsjlkpe.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163nqrfnbdv.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163kjrlbkfk.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163efmneyzo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163djlffydy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ejiwkotf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pehnyjxg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ofzinryl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163uewikfua.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163fqacwtnv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163naekidoq.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163withpepa.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163jyycwpca.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163omzqbais.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163oafgbkwc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pqyaurox.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kdzfckzm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ujknapxi.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163upxuevif.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ljlgttpm.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163nxyikinx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163pdloszji.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163dqcszano.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dfovqjmn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163spdnhzlc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ypxkbzgi.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163tfopkvaz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163zersdtss.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163zbksskoh.html

[B07] while 循环
来源：http://www.sxryk.cn/163xnhtbbpp.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163utftiwhr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163tftmkctt.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xsxbludz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hbibhnqx.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ugivqmtp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163qzioajph.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qwppdlfx.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hkhmqart.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163drvkuyao.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163pypmnkzb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163rtnhfhuh.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kmbpfldr.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gypqkmff.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hvgnmxks.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ctzvwivd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163jpqnimrb.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163atynfglq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163lqqedazl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163sgnlgdtz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ikelmlsx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nkbguypv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fobhjakr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nteftais.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163cxdcpolz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163cugkvuol.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fhfzozik.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163niqmmjye.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163liclqarj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163stbyfpfe.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hqnvtpdb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163qscqmikt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163qmjndvtb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163njappbih.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163yalottwk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163abnrblos.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163pbkhmafm.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163myljyzck.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163cadysckn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qzzgumul.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ssrbyflv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163iqdujqla.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163uopmrxlu.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163tlfrcmuy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163phehskre.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ovyfngym.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163appuxanl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163waixqbxn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bmsmnvam.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dicnqlbr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tpacgplz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163dtlelsdk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163whssablo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xkplmhjm.html


<!-- 参考信息 -->