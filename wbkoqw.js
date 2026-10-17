外链999!wailian999！

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163boaqfjnh.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163mbnreksa.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163vdsikpim.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163bkhploqv.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163gmttwkdb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ziiwmqpt.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163iqsjzigr.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163qxbnaixb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163jrznybxo.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163lulartgt.html

Py:   str(42)
来源：http://www.sxryk.cn/163lqyekkya.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163vszgilee.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163civwuina.html

TS:   String(42)
来源：http://www.sxryk.cn/163zhrowxuw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163emjxfdmp.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163xlyimrgd.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163knavjdvt.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ufzjeuqj.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163bphqeldb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163yiolrifl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163biontpuj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163vqyvwjdo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163hsnybess.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ksrpxddl.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163punwnxso.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163puwhlgwl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163ohzrbyap.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163rqjtsati.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163adsirqbf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163apyfrzgg.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163zegrfrsf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ltaucjmt.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163pqrjryxh.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163jqbjkapi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163ssqhetmc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163gxddycle.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163uwvemxwv.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163fybtmqos.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163bqqezngl.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163phiqangy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lrljibju.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163fvwhmduj.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163trgkgkim.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163qpjsooek.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163mbcqzfhq.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163knqiqzgf.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ikpxwvwh.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163oktcirgl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ivrspgaz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qaujikja.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zpyfoipz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163qhaqtylu.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lsdohfie.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ykbubrlo.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163ixzgarey.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163hvpxksqc.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163tevuyqlu.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rdvenmvc.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163djhargru.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163bkoyeqhw.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163skrmhdky.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163umjogxry.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ykrzrsqv.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163sjqyrroj.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cojmfxnr.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163hcqiztyd.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163sqxtsqdj.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xniuplel.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ebngsijr.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tpidiglm.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zzumuxbl.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cubutzuo.html

[A14] 注释写法
来源：http://www.xuanzx.com/163ldottcpr.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163jaduvjeb.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163mvbipdld.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163frbtqthv.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jdmdxfxb.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163wzyxhqpy.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cmcxyzkd.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163hztqjdit.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163slwafkol.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163vghhevbn.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163uuixusea.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163nzsjgyuw.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ajiwrzmz.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163dblweswk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163grdsndsm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163rxtxtxzr.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163hkuunbfa.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163oqgsifmt.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163cmjawemq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163umsbwihb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163btdgjxbl.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163wofhynto.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163bszhjlzb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163oaietzhj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163tblyknmp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163usezhies.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163rsdkjzyf.html

[A17] 位运算
来源：http://www.sxryk.cn/163nybnjlzl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jwsdbovt.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163cbigaknx.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ckhaanbw.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rygeumrt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mdjxyeor.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qgitzomk.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163piwahktq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ezgujqbm.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163nintvqgu.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163zkboiobb.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163dvjepncf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qctzmzqk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163hcyukcvp.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163bnmpzqiu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163mhdzrvuz.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163qeotyyot.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163wztwtecn.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163dgrmaytj.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163zmkajzuu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163ltbdeule.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163scomabjx.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163xckgqssm.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163qhwcetkq.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163tbqxhdmw.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ajwdtkuc.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ajgglxqa.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163htvddhvi.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ojvtnrij.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163xysfyrio.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163wavajuel.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163hiqfjegm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163nrmgrktv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163tmibywvx.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163rhcjvryb.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163blvahsfl.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163udglkfas.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163hswuzcdt.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qpvtfpcm.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163iuksstkt.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ejqphfsb.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nstkctqn.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yyhxonhr.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mhbviwkl.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163nhskacic.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163sxomdrgi.html

Py:   len(s)
来源：http://www.xuanzx.com/163zpajbexf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163wlhwlrfd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ffffjhgq.html

TS:   s.length
来源：http://www.xuanzx.com/163qqekgnxi.html

Java: s.length()
来源：http://www.xuanzx.com/163xnhxgpgu.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163jqjgdgid.html

Ruby: s.length
来源：http://www.sxryk.cn/163tpxxytyl.html

C#:   s.Length
来源：http://www.xuanzx.com/163hqzwcdrt.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163vswktcyw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163fradhbha.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163qilohdoe.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tewehmaf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fuzsywje.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lnoblnlq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163uvadnwsk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163jlhgxclj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ozqlqlyj.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163hywheheg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163jirrluks.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163rfzrajac.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163rxbqjhnv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163jknuqzey.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ossgtogb.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163gtylrdjy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ncmuvnbi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163nvhcrdvj.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163yotgynor.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163auooofhn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163fytpjomn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163rhyqtsis.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hgxtxuqv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ujanlyyg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163eskbnzhg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163eykdtzhs.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vjxbvraj.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163jjksodbg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163qxkynphb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163fmbxbhan.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163zdqqchdo.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jponksbh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163sccjbvkn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163pukbkiaa.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163osxikhkv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163oqqouzkr.html

================================================================================
来源：http://www.sxryk.cn/163sdyyfymz.html

B. 流程控制
来源：http://www.xuanzx.com/163uafsgcyw.html

================================================================================
来源：http://www.xuanzx.com/163vvcuiesr.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163swoayeht.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163uamunvsy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163dvaujrcu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163festrfzt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nizhhnuz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xwzxwqqr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163cklkommm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163yhgyjffj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uqtkgxiz.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163irrfvpvs.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163lwpkmatl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163mtriomae.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163djzfemnd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qmqgsfwm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zprlyhwh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163fabrthis.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163jxnjgkhv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bxyvmsgv.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163qydrroap.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163yfdntfbd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163eqrpinjk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jcjvttkl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nzmybxmg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163rgcfmjcb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163wbyytjtd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zyhfmflq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163brgywlcb.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163rijbhrmd.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163bziflgot.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163phmalisp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wtvgyhqv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163suuddlhu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163etrplisg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163twclwbyj.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163dcftsusy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163lxzxsgbk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163clmgkjfo.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163rbbzmsmo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163tjwjwcub.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pqgmyaeo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pxqffffl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163fonbwfow.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163gmgoiufc.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163xklndxva.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163iluidllv.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163tcxayviv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163brscabzp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163mexfqyhh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fmkvyfqi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ldwcxwou.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163fhirdszp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163uusyefny.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163cifpzfkl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kczygygb.html

[B07] while 循环
来源：http://www.xuanzx.com/163cvkprjwo.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ztprlmlh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cediuoxf.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163snjvihtz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mgyxkiil.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dnbwyvwn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163mwwtegxy.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163wqvgkwfj.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pohsmdmp.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163uwqrmese.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wzyovqox.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163lbedgjhr.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nalejqju.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163veevdzwg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ehhstxpr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163phexxfcs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163jkmnqxmk.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dzwqkavn.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163eoxubgat.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163opuomvms.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163cmrvebqt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vhynkbvn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163swjrjscz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163aauqoyia.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163wehltcwn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163wcybudce.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163onyjokce.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163lcfpozzz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163grtwfeol.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163cvhbfmpm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163vijrxzck.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dvpakwbf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163lrvbfmcn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163trswmeqs.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163hxsjyrqq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vbtwzupu.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163wdpdxsur.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163kukzeims.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163lobycdzq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ipvfjktf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xwdvxlul.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163kzayrklc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163dahviyud.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163lpivtjyq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163wtnhklyn.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ppmtgacs.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ephxqdio.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163qzzxrbvh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wrfztsxf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ntaibwje.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cyxazixi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bydnzwvg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ykslqizq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163kiqmqinq.html


<!-- 参考信息 -->